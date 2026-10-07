import { easeOutCubic, pick, projectU, projectV, rand } from "./math.js";

const SPARKS = ["#ff6947", "#ff8a3d", "#ffb547", "#e84f2d"];
const CHIPS = ["#f5ad85", "#f08a5d", "#fbc9a8", "#e8743f", "#ffd4bd", "#3b2a25"];
const MAX_PARTICLES = 900;
const SPARK = 0;
const CHIP = 1;
const PUFF = 2;

function dustSprite(rgb) {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, `rgba(${rgb}, 0.55)`);
  grad.addColorStop(0.55, `rgba(${rgb}, 0.2)`);
  grad.addColorStop(1, `rgba(${rgb}, 0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

// Screen-space particles plus rings and flashes. Positions are viewport (client) pixels,
// except floor rings, which live on the world floor and are drawn through the SVG's CTM.
export class Fx {
  constructor() {
    this.particles = [];
    this.rings = [];
    this.floorRings = [];
    this.flashes = [];
    this.sprites = [dustSprite("226, 160, 120"), dustSprite("246, 205, 178")];
  }

  get busy() {
    return this.particles.length + this.rings.length + this.floorRings.length + this.flashes.length > 0;
  }

  spark(x, y, vx, vy, life = rand(0.35, 0.75)) {
    if (this.particles.length >= MAX_PARTICLES) return;
    this.particles.push({ kind: SPARK, x, y, vx, vy, age: 0, life, size: rand(1.2, 2.6), color: pick(SPARKS) });
  }

  chip(x, y, vx, vy) {
    if (this.particles.length >= MAX_PARTICLES) return;
    this.particles.push({
      kind: CHIP,
      x,
      y,
      vx,
      vy,
      age: 0,
      life: rand(0.7, 1.3),
      size: rand(2.5, 6.5),
      rot: rand(0, Math.PI),
      spin: rand(-14, 14),
      color: pick(CHIPS),
    });
  }

  puff(x, y, vx, vy, size, life = rand(0.6, 1.1)) {
    if (this.particles.length >= MAX_PARTICLES) return;
    this.particles.push({ kind: PUFF, x, y, vx, vy, age: 0, life, size, grow: rand(1.4, 2.6), sprite: pick(this.sprites) });
  }

  ring(x, y, { speed = 2400, life = 0.7, width = 3, delay = 0, alpha = 0.5 } = {}) {
    this.rings.push({ x, y, speed, life, width, alpha, age: -delay });
  }

  // `x`/`y` are world floor coordinates; `radius` is in world units.
  floorRing(x, y, { radius = 3, life = 0.9, delay = 0 } = {}) {
    this.floorRings.push({ x, y, radius, life, age: -delay });
  }

  flash(x, y, radius, life = 0.45) {
    this.flashes.push({ x, y, radius, life, age: 0 });
  }

  // Particles run on simulation time (slow-mo aware); light effects on real time.
  update(dt, realDt) {
    const keep = (list, step) => {
      let n = 0;
      for (const p of list) {
        p.age += step;
        if (p.age < p.life) list[n++] = p;
      }
      list.length = n;
    };
    for (const p of this.particles) {
      if (p.kind === SPARK) {
        p.vy += 1500 * dt;
        const drag = 1 - Math.min(1, 1.6 * dt);
        p.vx *= drag;
        p.vy *= drag;
      } else if (p.kind === CHIP) {
        p.vy += 2100 * dt;
        p.vx *= 1 - Math.min(1, 0.6 * dt);
        p.rot += p.spin * dt;
      } else {
        const drag = 1 - Math.min(1, 3 * dt);
        p.vx *= drag;
        p.vy = p.vy * drag - 25 * dt;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    keep(this.particles, dt);
    keep(this.rings, realDt);
    keep(this.floorRings, realDt);
    keep(this.flashes, realDt);
  }

  draw(ctx, dpr, ctm) {
    if (this.floorRings.length) {
      ctx.setTransform(dpr * ctm.a, dpr * ctm.b, dpr * ctm.c, dpr * ctm.d, dpr * ctm.e, dpr * ctm.f);
      const unit = 1 / Math.hypot(ctm.a, ctm.b);
      for (const r of this.floorRings) {
        if (r.age < 0) continue;
        const p = r.age / r.life;
        const rad = r.radius * easeOutCubic(p);
        const u = projectU(r.x, r.y);
        const v = projectV(r.x, r.y, 0);
        ctx.lineWidth = (3.5 * (1 - p) + 0.6) * unit;
        ctx.strokeStyle = `rgba(255, 105, 71, ${0.6 * (1 - p)})`;
        ctx.beginPath();
        ctx.ellipse(u, v, 158.39 * rad, 79.2 * rad, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.strokeStyle = `rgba(255, 105, 71, ${0.25 * (1 - p)})`;
        ctx.beginPath();
        ctx.ellipse(u, v, 158.39 * rad * 0.72, 79.2 * rad * 0.72, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (const f of this.flashes) {
      const p = f.age / f.life;
      const a = (1 - p) ** 2;
      const r = Math.max(1, f.radius * easeOutCubic(Math.min(1, f.age / 0.12)));
      const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
      g.addColorStop(0, `rgba(255, 246, 232, ${0.95 * a})`);
      g.addColorStop(0.35, `rgba(255, 168, 120, ${0.5 * a})`);
      g.addColorStop(1, "rgba(255, 105, 71, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(f.x - r, f.y - r, r * 2, r * 2);
    }

    ctx.lineCap = "round";
    for (const p of this.particles) {
      const t = p.age / p.life;
      if (p.kind === SPARK) {
        ctx.globalAlpha = 1 - t * t;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size * (1 - t) + 0.4;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.028, p.y - p.vy * 0.028);
        ctx.stroke();
      } else if (p.kind === CHIP) {
        ctx.globalAlpha = 1 - t * t * t;
        ctx.fillStyle = p.color;
        const c = Math.cos(p.rot);
        const s = Math.sin(p.rot);
        ctx.setTransform(dpr * c, dpr * s, -dpr * s, dpr * c, dpr * p.x, dpr * p.y);
        ctx.fillRect(-p.size / 2, -p.size * 0.3, p.size, p.size * 0.6);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      } else {
        ctx.globalAlpha = (1 - t) * 0.9;
        const r = p.size * (1 + p.grow * easeOutCubic(t));
        ctx.drawImage(p.sprite, p.x - r, p.y - r, r * 2, r * 2);
      }
    }
    ctx.globalAlpha = 1;

    for (const r of this.rings) {
      if (r.age < 0) continue;
      const p = r.age / r.life;
      ctx.strokeStyle = `rgba(255, 105, 71, ${r.alpha * (1 - p)})`;
      ctx.lineWidth = r.width * (1 - p) + 0.6;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.speed * r.age, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}
