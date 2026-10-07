import { clamp, rand, seamQuads } from "./math.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const GLYPHS = "!<>-_\\/[]{}=+*^?#";
const QUIPS = [
  "Rebuilt. Brick by brick.",
  "Zero dependencies were harmed.",
  "No virtual DOM. Just bricks.",
  "Hot reload, literally.",
  "Ship it. Again.",
  "Okay, you really like bricks.",
];

export const quipFor = (count) => QUIPS[(count - 1) % QUIPS.length];

// Wraps each word in an inline-block span so the shockwave can knock words around.
// Whole words keep their kerning and wrap points, so the title layout doesn't move.
export function splitWords(root) {
  if (!root.dataset.bricked) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (!node.textContent.trim()) continue;
      const frag = document.createDocumentFragment();
      for (const part of node.textContent.split(/(\s+)/)) {
        if (!part) continue;
        if (!part.trim()) {
          frag.append(part);
          continue;
        }
        const word = document.createElement("span");
        word.dataset.brickWord = "";
        word.style.display = "inline-block";
        word.style.transformOrigin = "50% 85%";
        word.textContent = part;
        frag.append(word);
      }
      node.replaceWith(frag);
    }
    root.dataset.bricked = "1";
  }
  return [...root.querySelectorAll("[data-brick-word]")];
}

// Knocks elements away from `origin` as an expanding shockwave (px/s) reaches them.
export function shockwave(targets, origin, { strength = 1, speed = 2400 } = {}) {
  for (const { el, weight = 1 } of targets) {
    const r = el.getBoundingClientRect();
    if (!r.width) continue;
    let dx = r.left + r.width / 2 - origin.x;
    let dy = r.top + r.height / 2 - origin.y;
    const dist = Math.hypot(dx, dy) || 1;
    dx /= dist;
    dy /= dist;
    const k = clamp(1.25 - dist / 1400, 0.3, 1) * strength * weight;
    const tx = dx * 26 * k;
    const ty = dy * 18 * k - 22 * k;
    const rot = (dx >= 0 ? 1 : -1) * rand(5, 12) * k;
    el.animate(
      [
        { transform: "none" },
        { transform: `translate(${tx}px, ${ty}px) rotate(${rot}deg)`, offset: 0.2, easing: "cubic-bezier(.2,.7,.3,1)" },
        { transform: `translate(${-tx * 0.25}px, ${-ty * 0.12}px) rotate(${-rot * 0.4}deg)`, offset: 0.52, easing: "ease-in-out" },
        { transform: `translate(${tx * 0.06}px, 0px) rotate(${rot * 0.1}deg)`, offset: 0.8 },
        { transform: "none" },
      ],
      { duration: 1000, delay: (dist / speed) * 1000, easing: "linear" },
    );
  }
}

// The two outline bricks floating in the hero card get flung around too.
export function spinOutlines(card, strength = 1) {
  if (typeof KeyframeEffect === "undefined" || !("pseudoElement" in KeyframeEffect.prototype)) return;
  for (const [pseudoElement, sign, delay] of [["::before", 1, 140], ["::after", -1, 60]]) {
    card.animate(
      [
        { rotate: "0deg", scale: "1" },
        { rotate: `${sign * 220 * strength}deg`, scale: String(1 + 0.5 * strength), offset: 0.35 },
        { rotate: `${sign * 360 * strength}deg`, scale: "1" },
      ],
      { duration: 1400, delay, easing: "cubic-bezier(.2,.8,.2,1)", pseudoElement },
    );
  }
}

// Glowing cracks along the joints of the real bricks, drawn into the SVG for the charge-up.
export function buildSeams(bricks, pieces, key) {
  return bricks.map((g, i) => {
    let group = g.querySelector("[data-brick-seams]");
    if (group?.dataset.brickSeams === key) return group;
    group?.remove();
    const d = seamQuads(pieces, i)
      .map((quad) => `M${quad.map(([u, v]) => `${u.toFixed(1)} ${v.toFixed(1)}`).join("L")}Z`)
      .join("");
    group = document.createElementNS(SVG_NS, "g");
    group.dataset.brickSeams = key;
    group.setAttribute("fill", "none");
    group.setAttribute("stroke-linejoin", "round");
    group.setAttribute("pointer-events", "none");
    group.style.opacity = "0";
    for (const [stroke, width, opacity] of [
      ["#ff6947", 7, 0.35],
      ["#fff3e3", 1.6, 1],
    ]) {
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("stroke", stroke);
      path.setAttribute("stroke-width", String(width));
      path.setAttribute("stroke-opacity", String(opacity));
      group.append(path);
    }
    g.append(group);
    return group;
  });
}

// Pins the stage's current (possibly mid-transition) transform so the debris stays
// anchored to it; releasing lets the stage glide back to its CSS state.
export function freezeStage(stage) {
  const transform = getComputedStyle(stage).transform;
  stage.style.transition = "none";
  stage.style.transform = transform === "none" ? "" : transform;
}

export function releaseStage(stage) {
  stage.style.transform = "";
  stage.style.transition = "";
}

// Where the toast goes (just under the stack), relative to the hero's inner box.
export function toastPosition({ svg, inner }) {
  const m = svg.getScreenCTM();
  const r = inner.getBoundingClientRect();
  return { x: m.a * 224 + m.c * 446 + m.e - r.left, y: m.b * 224 + m.d * 446 + m.f - r.top };
}

let toastTimer = 0;
let toastFrame = 0;

// A small "decoder" label under the stack: characters scramble, then resolve.
export function showToast(el, text, count, x, y, scramble = true) {
  clearTimeout(toastTimer);
  cancelAnimationFrame(toastFrame);
  const rule = document.createElement("span");
  rule.className = "brick-toast-rule";
  const label = document.createElement("span");
  label.className = "brick-toast-text";
  el.replaceChildren(rule, label);
  if (count > 1) {
    const badge = document.createElement("span");
    badge.className = "brick-toast-count";
    badge.textContent = `×${count}`;
    el.append(badge);
  }
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.classList.remove("is-visible");
  void el.offsetWidth;
  el.classList.add("is-visible");

  // Monospace, so filling with spaces keeps the width steady while it decodes.
  label.textContent = scramble ? "\u00a0".repeat(text.length) : text;
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 3200);
  if (!scramble) return;
  const start = performance.now();
  const tick = (now) => {
    const t = (now - start) / 650;
    let out = "";
    for (let i = 0; i < text.length; i++) {
      const at = i / text.length;
      if (text[i] === " " || t >= at + 0.12) out += text[i];
      else if (t >= at) out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      else out += "\u00a0";
    }
    label.textContent = out;
    if (t < 1.15) toastFrame = requestAnimationFrame(tick);
    else label.textContent = text;
  };
  toastFrame = requestAnimationFrame(tick);
}

export function announce(el, text) {
  el.textContent = "";
  setTimeout(() => {
    el.textContent = text;
  }, 60);
}
