import { GRADIENTS, ISO_X, ISO_Y, ISO_Z, LIGHT, VIEW, clamp, dot, faceBoxes, lerp, projectU, projectV, qMat, ramp } from "./math.js";

// Corner index bits: 1 = +x, 2 = +y, 4 = +z. Faces: +x, -x, +y, -y, +z, -z.
const FACES = [
  [0, 1, [1, 3, 7, 5]],
  [0, -1, [0, 2, 6, 4]],
  [1, 1, [2, 3, 7, 6]],
  [1, -1, [0, 1, 5, 4]],
  [2, 1, [4, 5, 7, 6]],
  [2, -1, [0, 1, 3, 2]],
];
const LOCAL_NORMALS = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const intensity = (n) => 0.5 + 0.5 * dot(n, LIGHT);
const mix3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

// Flat approximation of the SVG gradient each face had at home.
function homeColors(pc, boxes) {
  const [x, y, z] = pc.home;
  const [hx, hy, hz] = pc.half;
  const sample = (box, cx, cy, cz, diagonal) => {
    const u = projectU(cx, cy);
    const v = projectV(cx, cy, cz);
    const ty = (v - box[1]) / box[3];
    return clamp(diagonal ? ((u - box[0]) / box[2] + ty) / 2 : ty, 0, 1);
  };
  const b = pc.brick * 3;
  return LOCAL_NORMALS.map((n, f) => {
    if (f === 4) return mix3(...GRADIENTS.top, sample(boxes[b], x, y, z + hz, true));
    if (f === 2) return mix3(...GRADIENTS.left, sample(boxes[b + 1], x, y + hy, z, false));
    if (f === 0) return mix3(...GRADIENTS.right, sample(boxes[b + 2], x + hx, y, z, false));
    return ramp(intensity(n));
  });
}

function shadowSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(84, 41, 23, 0.9)");
  grad.addColorStop(1, "rgba(84, 41, 23, 0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

export class Canvas2DBricks {
  constructor(pieces) {
    this.kind = "canvas2d";
    const boxes = faceBoxes();
    for (const pc of pieces) pc.homeColors = homeColors(pc, boxes);
    this.m = new Float64Array(9);
    this.order = pieces.slice();
    this.sprite = shadowSprite();
    this.corners = Array.from({ length: 8 }, () => [0, 0]);
  }

  // `ctx` is already transformed to SVG user space; `unit` is user units per CSS pixel.
  draw(ctx, { seam, shadow, unit }) {
    const { m, order, corners } = this;
    if (shadow > 0.01) {
      for (const pc of order) {
        const z = pc.p[2];
        const a = 0.16 * shadow * clamp(1 - z / 3, 0, 1);
        if (a < 0.005) continue;
        const r = Math.max(pc.half[0], pc.half[1]) * 1.5 * (1 + 0.3 * z);
        ctx.globalAlpha = a;
        ctx.drawImage(
          this.sprite,
          projectU(pc.p[0], pc.p[1]) - 158.39 * r,
          projectV(pc.p[0], pc.p[1], 0) - 79.2 * r,
          316.8 * r,
          158.4 * r,
        );
      }
      ctx.globalAlpha = 1;
    }

    order.sort((a, b) => dot(a.p, VIEW) - dot(b.p, VIEW));
    ctx.lineJoin = "round";
    for (const pc of order) {
      qMat(pc.q, m);
      const hx = pc.half[0];
      const hy = pc.half[1];
      const hz = pc.half[2] * pc.sq;
      const pz = pc.p[2] - (pc.half[2] - hz);
      const cu = projectU(pc.p[0], pc.p[1]);
      const cv = projectV(pc.p[0], pc.p[1], pz);
      const s = pc.scale;
      for (let k = 0; k < 8; k++) {
        const lx = k & 1 ? hx : -hx;
        const ly = k & 2 ? hy : -hy;
        const lz = k & 4 ? hz : -hz;
        const wx = m[0] * lx + m[1] * ly + m[2] * lz;
        const wy = m[3] * lx + m[4] * ly + m[5] * lz;
        const wz = m[6] * lx + m[7] * ly + m[8] * lz;
        corners[k][0] = cu + s * ISO_X * (wx - wy);
        corners[k][1] = cv + s * (ISO_Y * (wx + wy) - ISO_Z * wz);
      }
      for (let f = 0; f < 6; f++) {
        const [axis, sign, idx] = FACES[f];
        const n = [m[axis] * sign, m[3 + axis] * sign, m[6 + axis] * sign];
        if (dot(n, VIEW) <= 0) continue;
        const local = LOCAL_NORMALS[f];
        const now = ramp(intensity(n) + pc.tint);
        const rest = ramp(intensity(local) + pc.tint);
        let col = pc.homeColors[f].map((c, i) => c + now[i] - rest[i]);
        if (pc.heat > 0.01) col = mix3(col, [1, 0.45, 0.2], clamp(pc.heat, 0, 1) * 0.6);
        if (pc.flash > 0.01) col = mix3(col, [1, 0.98, 0.95], clamp(pc.flash, 0, 1) * 0.55);
        const fill = `rgb(${col.map((c) => Math.round(clamp(c, 0, 1) * 255)).join(",")})`;
        ctx.beginPath();
        ctx.moveTo(corners[idx[0]][0], corners[idx[0]][1]);
        ctx.lineTo(corners[idx[1]][0], corners[idx[1]][1]);
        ctx.lineTo(corners[idx[2]][0], corners[idx[2]][1]);
        ctx.lineTo(corners[idx[3]][0], corners[idx[3]][1]);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.lineWidth = unit * (seam > 0.01 ? 1 : 0.6);
        ctx.strokeStyle = seam > 0.01 ? `rgba(120, 52, 28, ${0.35 * seam})` : fill;
        ctx.stroke();
      }
    }
  }
}
