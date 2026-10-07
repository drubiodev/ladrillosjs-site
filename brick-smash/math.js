// World space: x/y on the floor, z up. One unit is the side of one hero brick.
// It maps onto the hero SVG's user space with the same 2:1 isometric projection the
// SVG is drawn with (a true orthographic camera tilted 30°), so debris rendered in
// world space lines up with the SVG bricks to the pixel.

export const ISO_X = 112;
export const ISO_Y = 56;
export const ISO_Z = 137.171; // 112·√2·cos(30°)
export const ORIGIN_U = 112;
export const ORIGIN_V = 280;
export const BRICK_H = 70 / ISO_Z;

// Unit vector from the scene toward the camera.
export const VIEW = [0.612372, 0.612372, 0.5];
// Direction toward the light: top faces brightest, left faces next, right faces darkest,
// exactly like the SVG gradients.
export const LIGHT = normalize([-0.1, 0.39, 0.915]);

// Bottom-left, bottom-right and the floating top brick, as drawn in the hero SVG.
export const BIG = [
  [0, 0, 0],
  [1, -1, 0],
  [0.5, -0.5, 224 / ISO_Z - BRICK_H],
];

// A one-user-unit screen move expressed as a world vector in the view plane.
export const SCREEN_RIGHT = [1 / 224, -1 / 224, 0];
export const SCREEN_DOWN = [0.0022324, 0.0022324, -0.0054684];

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const rand = (a, b) => a + Math.random() * (b - a);
export const pick = (list) => list[(Math.random() * list.length) | 0];
export const easeOutCubic = (t) => 1 - (1 - t) ** 3;
export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export function normalize(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

export function cross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

export function randomUnit() {
  const z = rand(-1, 1);
  const a = rand(0, Math.PI * 2);
  const r = Math.sqrt(1 - z * z);
  return [r * Math.cos(a), r * Math.sin(a), z];
}

export const projectU = (x, y) => ORIGIN_U + ISO_X * (x - y);
export const projectV = (x, y, z) => ORIGIN_V + ISO_Y * (x + y) - ISO_Z * z;

// Quaternions are [w, x, y, z].
export function qNormalize(q) {
  const l = Math.hypot(q[0], q[1], q[2], q[3]) || 1;
  q[0] /= l;
  q[1] /= l;
  q[2] /= l;
  q[3] /= l;
  return q;
}

export function qMul(a, b) {
  return [
    a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
    a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
    a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0],
  ];
}

// Integrates a world-space angular velocity: q += ½·(0, ω)·q·dt.
export function qIntegrate(q, w, dt) {
  const [qw, qx, qy, qz] = q;
  const hx = w[0] * dt * 0.5;
  const hy = w[1] * dt * 0.5;
  const hz = w[2] * dt * 0.5;
  q[0] = qw - hx * qx - hy * qy - hz * qz;
  q[1] = qx + hx * qw + hy * qz - hz * qy;
  q[2] = qy - hx * qz + hy * qw + hz * qx;
  q[3] = qz + hx * qy - hy * qx + hz * qw;
  return qNormalize(q);
}

export function qSlerp(out, a, b, t) {
  let [bw, bx, by, bz] = b;
  let c = a[0] * bw + a[1] * bx + a[2] * by + a[3] * bz;
  if (c < 0) {
    c = -c;
    bw = -bw;
    bx = -bx;
    by = -by;
    bz = -bz;
  }
  let k0 = 1 - t;
  let k1 = t;
  if (c < 0.9995) {
    const th = Math.acos(c);
    const s = Math.sin(th);
    k0 = Math.sin((1 - t) * th) / s;
    k1 = Math.sin(t * th) / s;
  }
  out[0] = a[0] * k0 + bw * k1;
  out[1] = a[1] * k0 + bx * k1;
  out[2] = a[2] * k0 + by * k1;
  out[3] = a[3] * k0 + bz * k1;
  return qNormalize(out);
}

// Row-major 3×3 rotation matrix; column j is the world direction of local axis j.
export function qMat(q, m) {
  const [w, x, y, z] = q;
  m[0] = 1 - 2 * (y * y + z * z);
  m[1] = 2 * (x * y - w * z);
  m[2] = 2 * (x * z + w * y);
  m[3] = 2 * (x * y + w * z);
  m[4] = 1 - 2 * (x * x + z * z);
  m[5] = 2 * (y * z - w * x);
  m[6] = 2 * (x * z - w * y);
  m[7] = 2 * (y * z + w * x);
  m[8] = 1 - 2 * (x * x + y * y);
  return m;
}

// Each hero brick is built from real bricks (2:1:0.6) laid in alternating courses,
// so its side faces show an English bond. `fine` is used by the WebGPU renderer.
export function buildPieces(fine) {
  const courses = fine ? 5 : 3;
  const perRow = fine ? 3 : 2;
  const pieces = [];
  BIG.forEach((b, brick) => {
    const hz = BRICK_H / courses / 2;
    for (let layer = 0; layer < courses; layer++) {
      const alongX = layer % 2 === 0;
      const nx = alongX ? perRow : perRow * 2;
      const ny = alongX ? perRow * 2 : perRow;
      const hx = 0.5 / nx;
      const hy = 0.5 / ny;
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const home = [b[0] + (2 * i + 1) * hx, b[1] + (2 * j + 1) * hy, b[2] + (2 * layer + 1) * hz];
          pieces.push({
            brick,
            layer,
            home,
            half: [hx, hy, hz],
            p: home.slice(),
            v: [0, 0, 0],
            q: [1, 0, 0, 0],
            w: [0, 0, 0],
            state: "home",
            heat: 0,
            flash: 0,
            landedAt: -1,
            sq: 1,
            tint: rand(-0.035, 0.035),
            start: 0,
            cx: 0,
            cy: 0,
            scale: 1,
          });
        }
      }
    }
  });
  return pieces;
}

// Bounding boxes (SVG user space) of each big brick's visible faces, which is what the
// SVG's objectBoundingBox gradients are relative to. Order per brick: top, left (+y), right (+x).
export function faceBoxes() {
  const box = (pts) => {
    const us = pts.map(([x, y]) => projectU(x, y));
    const vs = pts.map(([x, y, z]) => projectV(x, y, z));
    const u0 = Math.min(...us);
    const v0 = Math.min(...vs);
    return [u0, v0, Math.max(...us) - u0, Math.max(...vs) - v0];
  };
  return BIG.flatMap(([x, y, z]) => {
    const t = z + BRICK_H;
    return [
      box([[x, y, t], [x + 1, y, t], [x + 1, y + 1, t], [x, y + 1, t]]),
      box([[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, t], [x, y + 1, t]]),
      box([[x + 1, y, z], [x + 1, y + 1, z], [x + 1, y + 1, t], [x + 1, y, t]]),
    ];
  });
}

// Corners of a piece's faces that lie on its hero brick's visible surface, in SVG user
// space. Used to draw the glowing seams on the SVG while the stack charges up.
export function seamQuads(pieces, brick) {
  const [bx, by, bz] = BIG[brick];
  const quads = [];
  const eps = 1e-6;
  for (const pc of pieces) {
    if (pc.brick !== brick) continue;
    const [x, y, z] = pc.home;
    const [hx, hy, hz] = pc.half;
    const corners = [];
    if (Math.abs(z + hz - (bz + BRICK_H)) < eps) {
      corners.push([[x - hx, y - hy, z + hz], [x + hx, y - hy, z + hz], [x + hx, y + hy, z + hz], [x - hx, y + hy, z + hz]]);
    }
    if (Math.abs(y + hy - (by + 1)) < eps) {
      corners.push([[x - hx, y + hy, z - hz], [x + hx, y + hy, z - hz], [x + hx, y + hy, z + hz], [x - hx, y + hy, z + hz]]);
    }
    if (Math.abs(x + hx - (bx + 1)) < eps) {
      corners.push([[x + hx, y - hy, z - hz], [x + hx, y + hy, z - hz], [x + hx, y + hy, z + hz], [x + hx, y - hy, z + hz]]);
    }
    for (const quad of corners) quads.push(quad.map(([qx, qy, qz]) => [projectU(qx, qy), projectV(qx, qy, qz)]));
  }
  return quads;
}

// Palette ramp shared by both renderers: lighting intensity → brick color (sRGB 0..1).
const RAMP = [
  [0, [0.722, 0.251, 0.11]],
  [0.3, [0.933, 0.416, 0.227]],
  [0.45, [0.973, 0.569, 0.369]],
  [0.7, [0.976, 0.745, 0.596]],
  [0.96, [0.996, 0.863, 0.776]],
  [1, [1, 0.941, 0.894]],
];

export function ramp(i) {
  const x = clamp(i, 0, 1);
  for (let k = 1; k < RAMP.length; k++) {
    const [p1, c1] = RAMP[k];
    if (x <= p1) {
      const [p0, c0] = RAMP[k - 1];
      const t = (x - p0) / (p1 - p0);
      return [lerp(c0[0], c1[0], t), lerp(c0[1], c1[1], t), lerp(c0[2], c1[2], t)];
    }
  }
  return RAMP[RAMP.length - 1][1];
}

// The hero SVG's three face gradients.
export const GRADIENTS = {
  top: [[1, 0.8314, 0.7412], [0.9922, 0.8941, 0.8157]],
  left: [[0.9843, 0.7882, 0.6588], [0.9608, 0.6784, 0.5216]],
  right: [[0.9608, 0.6784, 0.5216], [1, 0.4196, 0.2078]],
};
