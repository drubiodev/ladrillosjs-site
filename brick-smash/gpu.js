import { LIGHT, ISO_X, ISO_Y, ISO_Z, ORIGIN_U, ORIGIN_V, VIEW, cross, faceBoxes, normalize } from "./math.js";

const DEPTH_RANGE = 60;
const SHADOW_SIZE = 2048;
const PIXEL_BUDGET = 2.6e6; // caps the 4× MSAA targets on very large/high-DPI screens
const FLOATS = 20; // per instance: pos+scale, rotation, half+brick, home+tint, fx

const WGSL = /* wgsl */ `
struct Frame {
  viewProj: mat4x4f,
  lightProj: mat4x4f,
  light: vec4f,
  params: vec4f, // x: mortar lines, y: shadow strength, z: shadow texel
  faces: array<vec4f, 9>,
};

struct Inst {
  pos: vec4f,
  rot: vec4f,
  half: vec4f,
  home: vec4f,
  fx: vec4f,
};

@group(0) @binding(0) var<uniform> frame: Frame;
@group(0) @binding(1) var<storage, read> insts: array<Inst>;
@group(1) @binding(0) var shadowMap: texture_depth_2d;
@group(1) @binding(1) var shadowSampler: sampler_comparison;

const VIEW_DIR = vec3f(0.612372, 0.612372, 0.5);

var<private> NORMALS: array<vec3f, 6> = array<vec3f, 6>(
  vec3f(1.0, 0.0, 0.0), vec3f(-1.0, 0.0, 0.0),
  vec3f(0.0, 1.0, 0.0), vec3f(0.0, -1.0, 0.0),
  vec3f(0.0, 0.0, 1.0), vec3f(0.0, 0.0, -1.0));
var<private> TAN_U: array<vec3f, 6> = array<vec3f, 6>(
  vec3f(0.0, 1.0, 0.0), vec3f(0.0, 1.0, 0.0),
  vec3f(1.0, 0.0, 0.0), vec3f(1.0, 0.0, 0.0),
  vec3f(1.0, 0.0, 0.0), vec3f(1.0, 0.0, 0.0));
var<private> TAN_V: array<vec3f, 6> = array<vec3f, 6>(
  vec3f(0.0, 0.0, 1.0), vec3f(0.0, 0.0, 1.0),
  vec3f(0.0, 0.0, 1.0), vec3f(0.0, 0.0, 1.0),
  vec3f(0.0, 1.0, 0.0), vec3f(0.0, 1.0, 0.0));
var<private> QUAD: array<vec2f, 6> = array<vec2f, 6>(
  vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0),
  vec2f(-1.0, -1.0), vec2f(1.0, 1.0), vec2f(-1.0, 1.0));

fn qrot(q: vec4f, v: vec3f) -> vec3f {
  let t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}

fn cornerOf(face: u32, corner: u32, half: vec3f) -> vec3f {
  let q = QUAD[corner];
  return (NORMALS[face] + TAN_U[face] * q.x + TAN_V[face] * q.y) * half;
}

struct VOut {
  @builtin(position) clip: vec4f,
  @location(0) world: vec3f,
  @location(1) normal: vec3f,
  @location(2) uv: vec2f,
  @location(3) homeUV: vec2f,
  @location(4) @interpolate(flat) face: u32,
  @location(5) @interpolate(flat) brick: u32,
  @location(6) @interpolate(flat) fx: vec4f,
};

@vertex
fn vsBrick(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  let inst = insts[ii];
  let face = vi / 6u;
  let corner = vi % 6u;
  let local = cornerOf(face, corner, inst.half.xyz);
  let r = qrot(inst.rot, local);
  var o: VOut;
  o.world = inst.pos.xyz + r;
  // pos.w is a per-brick perspective scale so debris grows as it flies at the viewer.
  o.clip = frame.viewProj * vec4f(inst.pos.xyz + r * inst.pos.w, 1.0);
  o.normal = qrot(inst.rot, NORMALS[face]);
  o.uv = QUAD[corner];
  let h = inst.home.xyz + local;
  o.homeUV = vec2f(112.0 + 112.0 * (h.x - h.y), 280.0 + 56.0 * (h.x + h.y) - 137.171 * h.z);
  o.face = face;
  o.brick = u32(inst.half.w + 0.5);
  o.fx = vec4f(inst.fx.x, inst.fx.y, inst.home.w, 0.0);
  return o;
}

fn ramp(i: f32) -> vec3f {
  let x = clamp(i, 0.0, 1.0);
  if (x < 0.3) { return mix(vec3f(0.722, 0.251, 0.11), vec3f(0.933, 0.416, 0.227), x / 0.3); }
  if (x < 0.45) { return mix(vec3f(0.933, 0.416, 0.227), vec3f(0.973, 0.569, 0.369), (x - 0.3) / 0.15); }
  if (x < 0.7) { return mix(vec3f(0.973, 0.569, 0.369), vec3f(0.976, 0.745, 0.596), (x - 0.45) / 0.25); }
  if (x < 0.96) { return mix(vec3f(0.976, 0.745, 0.596), vec3f(0.996, 0.863, 0.776), (x - 0.7) / 0.26); }
  return mix(vec3f(0.996, 0.863, 0.776), vec3f(1.0, 0.941, 0.894), (x - 0.96) / 0.04);
}

fn intensity(n: vec3f) -> f32 {
  return 0.5 + 0.5 * dot(n, frame.light.xyz);
}

// The SVG gradient this face had at home, so a resting brick matches the SVG exactly.
fn homeColor(face: u32, brick: u32, p: vec2f) -> vec3f {
  if (face == 4u) {
    let b = frame.faces[brick * 3u];
    let t = clamp(((p.x - b.x) / b.z + (p.y - b.y) / b.w) * 0.5, 0.0, 1.0);
    return mix(vec3f(1.0, 0.8314, 0.7412), vec3f(0.9922, 0.8941, 0.8157), t);
  }
  if (face == 2u) {
    let b = frame.faces[brick * 3u + 1u];
    let t = clamp((p.y - b.y) / b.w, 0.0, 1.0);
    return mix(vec3f(0.9843, 0.7882, 0.6588), vec3f(0.9608, 0.6784, 0.5216), t);
  }
  if (face == 0u) {
    let b = frame.faces[brick * 3u + 2u];
    let t = clamp((p.y - b.y) / b.w, 0.0, 1.0);
    return mix(vec3f(0.9608, 0.6784, 0.5216), vec3f(1.0, 0.4196, 0.2078), t);
  }
  return ramp(intensity(NORMALS[face]));
}

fn shadowAt(world: vec3f, spread: f32) -> f32 {
  let lp = frame.lightProj * vec4f(world, 1.0);
  let uv = vec2f(lp.x * 0.5 + 0.5, 0.5 - lp.y * 0.5);
  if (any(uv < vec2f(0.0)) || any(uv > vec2f(1.0)) || lp.z >= 1.0) {
    return 1.0;
  }
  let texel = frame.params.z * spread;
  var lit = 0.0;
  for (var y = -1; y <= 1; y++) {
    for (var x = -1; x <= 1; x++) {
      lit += textureSampleCompareLevel(shadowMap, shadowSampler, uv + vec2f(f32(x), f32(y)) * texel, lp.z - 0.0008);
    }
  }
  return lit / 9.0;
}

@fragment
fn fsBrick(v: VOut) -> @location(0) vec4f {
  let fw = fwidth(v.uv);
  let n = normalize(v.normal);
  let tint = v.fx.z;
  // Relight the home color by how much this face turned away from its resting light.
  var col = homeColor(v.face, v.brick, v.homeUV)
    + ramp(intensity(n) + tint) - ramp(intensity(NORMALS[v.face]) + tint);
  col *= mix(vec3f(1.0), mix(vec3f(0.86, 0.78, 0.74), vec3f(1.0), shadowAt(v.world, 1.4)), frame.params.y);
  let h = normalize(frame.light.xyz + VIEW_DIR);
  col += vec3f(1.0, 0.93, 0.85) * pow(max(dot(n, h), 0.0), 60.0) * 0.3;
  let edgePx = min((1.0 - abs(v.uv.x)) / max(fw.x, 1e-5), (1.0 - abs(v.uv.y)) / max(fw.y, 1e-5));
  let edge = 1.0 - smoothstep(0.4, 1.7, edgePx);
  col = mix(col, col * vec3f(0.8, 0.73, 0.69), edge * frame.params.x);
  col = mix(col, vec3f(1.0, 0.45, 0.2), clamp(v.fx.x, 0.0, 1.0) * 0.6);
  col = mix(col, vec3f(1.0, 0.98, 0.95), clamp(v.fx.y, 0.0, 1.0) * 0.55);
  return vec4f(clamp(col, vec3f(0.0), vec3f(1.0)), 1.0);
}

struct FOut {
  @builtin(position) clip: vec4f,
  @location(0) world: vec3f,
};

// An invisible floor that only catches shadows, composited over the page.
@vertex
fn vsFloor(@builtin(vertex_index) vi: u32) -> FOut {
  let q = QUAD[vi];
  let w = vec3f(1.0 + q.x * 14.0, q.y * 14.0, 0.0);
  var o: FOut;
  o.clip = frame.viewProj * vec4f(w, 1.0);
  o.world = w;
  return o;
}

@fragment
fn fsFloor(v: FOut) -> @location(0) vec4f {
  let a = (1.0 - shadowAt(v.world, 2.4)) * 0.15 * frame.params.y;
  return vec4f(vec3f(0.5, 0.24, 0.12) * a, a);
}

@vertex
fn vsShadow(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> @builtin(position) vec4f {
  let inst = insts[ii];
  let local = cornerOf(vi / 6u, vi % 6u, inst.half.xyz);
  return frame.lightProj * vec4f(inst.pos.xyz + qrot(inst.rot, local), 1.0);
}
`;

// World → clip space for the main camera: the SVG's isometric projection, then the SVG's
// CTM (user space → viewport px), then viewport px → NDC. Depth runs along the view axis.
function cameraMatrix(m, viewW, viewH, out) {
  const sx = 2 / viewW;
  const sy = -2 / viewH;
  const cxx = m.a * ISO_X + m.c * ISO_Y;
  const cxy = -m.a * ISO_X + m.c * ISO_Y;
  const cxz = -m.c * ISO_Z;
  const cx0 = m.a * ORIGIN_U + m.c * ORIGIN_V + m.e;
  const cyx = m.b * ISO_X + m.d * ISO_Y;
  const cyy = -m.b * ISO_X + m.d * ISO_Y;
  const cyz = -m.d * ISO_Z;
  const cy0 = m.b * ORIGIN_U + m.d * ORIGIN_V + m.f;
  out[0] = sx * cxx;
  out[1] = sy * cyx;
  out[2] = -VIEW[0] / DEPTH_RANGE;
  out[3] = 0;
  out[4] = sx * cxy;
  out[5] = sy * cyy;
  out[6] = -VIEW[1] / DEPTH_RANGE;
  out[7] = 0;
  out[8] = sx * cxz;
  out[9] = sy * cyz;
  out[10] = -VIEW[2] / DEPTH_RANGE;
  out[11] = 0;
  out[12] = sx * cx0 - 1;
  out[13] = sy * cy0 + 1;
  out[14] = 0.5;
  out[15] = 1;
}

// Orthographic light camera looking down the light direction at the stack.
function lightMatrix() {
  const f = [-LIGHT[0], -LIGHT[1], -LIGHT[2]];
  const r = normalize(cross(f, [0, 1, 0]));
  const u = cross(r, f);
  const c = [1, 0, 1];
  const extent = 9;
  const depth = 12;
  const at = (v) => v[0] * c[0] + v[1] * c[1] + v[2] * c[2];
  return [
    r[0] / extent, u[0] / extent, f[0] / (2 * depth), 0,
    r[1] / extent, u[1] / extent, f[1] / (2 * depth), 0,
    r[2] / extent, u[2] / extent, f[2] / (2 * depth), 0,
    -at(r) / extent, -at(u) / extent, 0.5 - at(f) / (2 * depth), 1,
  ];
}

class GpuRenderer {
  constructor(o) {
    Object.assign(this, o);
    const { device } = this;
    this.kind = "webgpu";
    this.lost = false;
    device.lost.then(() => {
      this.lost = true;
    });
    this.uniforms = new Float32Array(76);
    this.uniforms.set(lightMatrix(), 16);
    this.uniforms.set([...LIGHT, 0], 32);
    this.uniforms.set(faceBoxes().flat(), 40);
    this.uniformBuffer = device.createBuffer({ size: 304, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    const shadowMap = device.createTexture({
      size: [SHADOW_SIZE, SHADOW_SIZE],
      format: "depth32float",
      usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
    });
    this.shadowView = shadowMap.createView();
    this.shadowGroup = device.createBindGroup({
      layout: this.shadowLayout,
      entries: [
        { binding: 0, resource: this.shadowView },
        { binding: 1, resource: device.createSampler({ compare: "less", magFilter: "linear", minFilter: "linear" }) },
      ],
    });
    this.capacity = 0;
    this.width = 0;
    this.height = 0;
  }

  ensureCapacity(n) {
    if (n <= this.capacity) return;
    this.instanceBuffer?.destroy();
    this.capacity = n;
    this.instanceData = new Float32Array(n * FLOATS);
    this.instanceBuffer = this.device.createBuffer({
      size: n * FLOATS * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    this.frameGroup = this.device.createBindGroup({
      layout: this.frameLayout,
      entries: [
        { binding: 0, resource: { buffer: this.uniformBuffer } },
        { binding: 1, resource: { buffer: this.instanceBuffer } },
      ],
    });
  }

  resize(cssW, cssH, dpr) {
    const scale = Math.min(dpr, Math.sqrt(PIXEL_BUDGET / (cssW * cssH)));
    const w = Math.max(1, Math.round(cssW * scale));
    const h = Math.max(1, Math.round(cssH * scale));
    if (w === this.width && h === this.height && this.msaa) return;
    this.width = w;
    this.height = h;
    this.canvas.width = w;
    this.canvas.height = h;
    this.msaa?.destroy();
    this.depth?.destroy();
    const usage = GPUTextureUsage.RENDER_ATTACHMENT;
    this.msaa = this.device.createTexture({ size: [w, h], sampleCount: 4, format: this.format, usage });
    this.depth = this.device.createTexture({ size: [w, h], sampleCount: 4, format: "depth24plus", usage });
    this.msaaView = this.msaa.createView();
    this.depthView = this.depth.createView();
  }

  // Frees the full-screen render targets between shows.
  release() {
    this.msaa?.destroy();
    this.depth?.destroy();
    this.msaa = null;
    this.depth = null;
    this.width = 0;
    this.height = 0;
    this.canvas.width = 1;
    this.canvas.height = 1;
  }

  render({ pieces, ctm, viewW, viewH, seam, shadow }) {
    if (this.lost || !this.msaa) return false;
    const n = pieces.length;
    this.ensureCapacity(n);
    const d = this.instanceData;
    for (let i = 0; i < n; i++) {
      const pc = pieces[i];
      const o = i * FLOATS;
      const hz = pc.half[2] * pc.sq;
      d[o] = pc.p[0];
      d[o + 1] = pc.p[1];
      d[o + 2] = pc.p[2] - (pc.half[2] - hz);
      d[o + 3] = pc.scale;
      d[o + 4] = pc.q[1];
      d[o + 5] = pc.q[2];
      d[o + 6] = pc.q[3];
      d[o + 7] = pc.q[0];
      d[o + 8] = pc.half[0];
      d[o + 9] = pc.half[1];
      d[o + 10] = hz;
      d[o + 11] = pc.brick;
      d[o + 12] = pc.home[0];
      d[o + 13] = pc.home[1];
      d[o + 14] = pc.home[2];
      d[o + 15] = pc.tint;
      d[o + 16] = pc.heat;
      d[o + 17] = pc.flash;
    }
    cameraMatrix(ctm, viewW, viewH, this.uniforms);
    this.uniforms[36] = seam;
    this.uniforms[37] = shadow;
    this.uniforms[38] = 1 / SHADOW_SIZE;

    const { device } = this;
    device.queue.writeBuffer(this.uniformBuffer, 0, this.uniforms);
    device.queue.writeBuffer(this.instanceBuffer, 0, d, 0, n * FLOATS);
    const encoder = device.createCommandEncoder();
    const shadowPass = encoder.beginRenderPass({
      colorAttachments: [],
      depthStencilAttachment: { view: this.shadowView, depthClearValue: 1, depthLoadOp: "clear", depthStoreOp: "store" },
    });
    shadowPass.setPipeline(this.shadowPipeline);
    shadowPass.setBindGroup(0, this.frameGroup);
    shadowPass.draw(36, n);
    shadowPass.end();

    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: this.msaaView,
          resolveTarget: this.context.getCurrentTexture().createView(),
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
          loadOp: "clear",
          storeOp: "discard",
        },
      ],
      depthStencilAttachment: { view: this.depthView, depthClearValue: 1, depthLoadOp: "clear", depthStoreOp: "discard" },
    });
    pass.setBindGroup(0, this.frameGroup);
    pass.setBindGroup(1, this.shadowGroup);
    pass.setPipeline(this.floorPipeline);
    pass.draw(6);
    pass.setPipeline(this.brickPipeline);
    pass.draw(36, n);
    pass.end();
    device.queue.submit([encoder.finish()]);
    return true;
  }
}

export async function createGpuRenderer(canvas) {
  if (!navigator.gpu) throw new Error("WebGPU is not supported");
  const adapter = await navigator.gpu.requestAdapter({ powerPreference: "high-performance" });
  if (!adapter) throw new Error("No WebGPU adapter");
  const device = await adapter.requestDevice();
  const context = canvas.getContext("webgpu");
  if (!context) throw new Error("No WebGPU canvas context");
  const format = navigator.gpu.getPreferredCanvasFormat();
  context.configure({ device, format, alphaMode: "premultiplied" });

  const module = device.createShaderModule({ code: WGSL });
  const info = await module.getCompilationInfo();
  const errors = info.messages.filter((m) => m.type === "error");
  if (errors.length) throw new Error(errors.map((m) => `${m.lineNum}:${m.linePos} ${m.message}`).join("\n"));

  const frameLayout = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } },
      { binding: 1, visibility: GPUShaderStage.VERTEX, buffer: { type: "read-only-storage" } },
    ],
  });
  const shadowLayout = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: "depth" } },
      { binding: 1, visibility: GPUShaderStage.FRAGMENT, sampler: { type: "comparison" } },
    ],
  });
  const mainLayout = device.createPipelineLayout({ bindGroupLayouts: [frameLayout, shadowLayout] });
  const premultiplied = { srcFactor: "one", dstFactor: "one-minus-src-alpha" };

  const [brickPipeline, floorPipeline, shadowPipeline] = await Promise.all([
    device.createRenderPipelineAsync({
      layout: mainLayout,
      vertex: { module, entryPoint: "vsBrick" },
      fragment: { module, entryPoint: "fsBrick", targets: [{ format }] },
      primitive: { topology: "triangle-list", cullMode: "none" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: true, depthCompare: "less" },
      multisample: { count: 4 },
    }),
    device.createRenderPipelineAsync({
      layout: mainLayout,
      vertex: { module, entryPoint: "vsFloor" },
      fragment: {
        module,
        entryPoint: "fsFloor",
        targets: [{ format, blend: { color: premultiplied, alpha: premultiplied } }],
      },
      primitive: { topology: "triangle-list", cullMode: "none" },
      depthStencil: { format: "depth24plus", depthWriteEnabled: false, depthCompare: "always" },
      multisample: { count: 4 },
    }),
    device.createRenderPipelineAsync({
      layout: device.createPipelineLayout({ bindGroupLayouts: [frameLayout] }),
      vertex: { module, entryPoint: "vsShadow" },
      primitive: { topology: "triangle-list", cullMode: "none" },
      depthStencil: {
        format: "depth32float",
        depthWriteEnabled: true,
        depthCompare: "less",
        depthBias: 2,
        depthBiasSlopeScale: 2,
      },
    }),
  ]);

  return new GpuRenderer({
    device,
    context,
    format,
    canvas,
    frameLayout,
    shadowLayout,
    brickPipeline,
    floorPipeline,
    shadowPipeline,
  });
}
