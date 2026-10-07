import { SCREEN_DOWN, SCREEN_RIGHT, clamp, easeOutCubic, qIntegrate, qMat, qMul, qNormalize, qSlerp, rand, randomUnit } from "./math.js";

const GRAVITY = 16;
const IDENTITY = [1, 0, 0, 0];
const M = new Float64Array(9);

// Rotates a resting brick a little toward lying flat, favouring its broad face so it
// doesn't end up balanced on an end.
function settleFlat(pc, dt) {
  let axis = 0;
  let best = -1;
  const thin = Math.min(pc.half[0], pc.half[1], pc.half[2]);
  for (let a = 0; a < 3; a++) {
    const c = Math.abs(M[6 + a]) * Math.sqrt(thin / pc.half[a]);
    if (c > best) {
      best = c;
      axis = a;
    }
  }
  const s = M[6 + axis] > 0 ? 1 : -1;
  const ux = M[axis] * s;
  const uy = M[3 + axis] * s;
  const uz = M[6 + axis] * s;
  const sin = Math.hypot(uy, ux);
  if (sin < 1e-4) return;
  const half = (Math.atan2(sin, uz) * Math.min(1, 9 * dt)) / 2;
  const k = Math.sin(half) / sin;
  const r = qMul([Math.cos(half), uy * k, -ux * k, 0], pc.q);
  pc.q[0] = r[0];
  pc.q[1] = r[1];
  pc.q[2] = r[2];
  pc.q[3] = r[3];
  qNormalize(pc.q);
}

// Advances a loose brick. Returns the impact speed if it just hit the floor.
export function step(pc, dt) {
  pc.v[2] -= GRAVITY * dt;
  const drag = 1 - 0.22 * dt;
  const spinDrag = 1 - 0.35 * dt;
  for (let i = 0; i < 3; i++) {
    pc.v[i] *= drag;
    pc.p[i] += pc.v[i] * dt;
    pc.w[i] *= spinDrag;
  }
  qIntegrate(pc.q, pc.w, dt);
  qMat(pc.q, M);
  const reach = Math.abs(M[6]) * pc.half[0] + Math.abs(M[7]) * pc.half[1] + Math.abs(M[8]) * pc.half[2];
  const depth = reach - pc.p[2];
  if (depth <= 0) return 0;

  pc.p[2] += depth;
  let impact = 0;
  if (pc.v[2] < 0) {
    impact = -pc.v[2];
    if (impact > 1.1) {
      pc.v[2] = impact * 0.34;
      pc.v[0] *= 0.7;
      pc.v[1] *= 0.7;
      const kick = randomUnit();
      for (let i = 0; i < 3; i++) pc.w[i] = pc.w[i] * 0.5 + kick[i] * impact * 0.6;
    } else {
      pc.v[2] = 0;
    }
  }
  const friction = Math.exp(-5 * dt);
  pc.v[0] *= friction;
  pc.v[1] *= friction;
  for (let i = 0; i < 3; i++) pc.w[i] *= friction;
  settleFlat(pc, dt);
  return impact;
}

// Throws every loose brick away from `center` (world space).
export function blast(pieces, center, power) {
  for (const pc of pieces) {
    if (pc.state !== "free") continue;
    let dx = pc.p[0] - center[0] + rand(-0.12, 0.12);
    let dy = pc.p[1] - center[1] + rand(-0.12, 0.12);
    let dz = pc.p[2] - center[2] + rand(-0.05, 0.2);
    const d = Math.hypot(dx, dy, dz) + 0.05;
    dx /= d;
    dy /= d;
    dz /= d;
    const f = (power * rand(0.75, 1.3)) / (0.45 + d * 0.7);
    // Bias toward screen-left (over the headline) and toward the viewer.
    pc.v[0] += dx * f * 4.2 - power * rand(0, 1.4);
    pc.v[1] += dy * f * 4.2 + power * rand(0.2, 2.4);
    pc.v[2] += Math.max(0.15, dz + 0.55) * f * 2.6 + power * rand(3, 6.5);
    const axis = randomUnit();
    const spin = power * rand(5, 17);
    for (let i = 0; i < 3; i++) pc.w[i] += axis[i] * spin;
    pc.heat = Math.max(pc.heat, clamp(1.25 - d * 0.55, 0.2, 1) * Math.min(1, power));
  }
}

// A viewport-pixel vector as a world vector in the view plane (through the SVG's CTM).
export function screenToWorld(ctm, sx, sy) {
  const det = ctm.a * ctm.d - ctm.b * ctm.c || 1;
  const du = (ctm.d * sx - ctm.c * sy) / det;
  const dv = (-ctm.b * sx + ctm.a * sy) / det;
  return [du * SCREEN_RIGHT[0] + dv * SCREEN_DOWN[0], du * SCREEN_RIGHT[1] + dv * SCREEN_DOWN[1], dv * SCREEN_DOWN[2]];
}

// Starts a brick's arc back to its slot.
export function beginFlight(pc, now) {
  const dist = Math.hypot(pc.home[0] - pc.p[0], pc.home[1] - pc.p[1], pc.home[2] - pc.p[2]);
  pc.state = "fly";
  pc.t0 = now;
  pc.dur = 0.44 + Math.min(dist, 5) * 0.065;
  pc.from = pc.p.slice();
  pc.qFrom = pc.q.slice();
  pc.ctrl = [(pc.p[0] + pc.home[0]) / 2, (pc.p[1] + pc.home[1]) / 2, Math.max(pc.p[2], pc.home[2]) + 0.5 + dist * 0.3];
  pc.heat = 0;
}

// Moves a flying brick along its arc; returns true on the frame it lands.
export function updateFlight(pc, now) {
  const t = clamp((now - pc.t0) / pc.dur, 0, 1);
  // Lifts off gently and slams into place.
  const e = t * t;
  const a = (1 - e) * (1 - e);
  const b = 2 * (1 - e) * e;
  const c = e * e;
  for (let i = 0; i < 3; i++) pc.p[i] = a * pc.from[i] + b * pc.ctrl[i] + c * pc.home[i];
  qSlerp(pc.q, pc.qFrom, IDENTITY, easeOutCubic(Math.min(1, t * 1.2)));
  if (t < 1) return false;
  for (let i = 0; i < 3; i++) {
    pc.p[i] = pc.home[i];
    pc.v[i] = 0;
    pc.w[i] = 0;
  }
  pc.q[0] = 1;
  pc.q[1] = 0;
  pc.q[2] = 0;
  pc.q[3] = 0;
  pc.state = "home";
  return true;
}
