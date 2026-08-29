import{p,w as m,d as g,a as h,c as b,b as v,e as x}from"./_ladrillos-artifact__2FUsers_2Fdanielrubio_2FRepos_2Fladrillosjs-site_2Fcomponents_2Fsamples_2Fcounter--xorFYGR.js";const w={tagName:"hero-section",template:`<section class="hero">\r
  <div class="hero-card">\r
    <div class="hero-inner">\r
      <!-- Brick stacking animation - SVG Isometric (matches logo: 2 bottom + 1 top) -->\r
      <div class="brick-animation">\r
        <svg viewBox="-20 40 488 400" xmlns="http://www.w3.org/2000/svg">\r
          <defs>\r
            <linearGradient id="heroBrickTop" x1="0" y1="0" x2="1" y2="1">\r
              <stop offset="0%" stop-color="#ffd4bd"></stop>\r
              <stop offset="100%" stop-color="#fde4d0"></stop>\r
            </linearGradient>\r
            <linearGradient id="heroBrickLeft" x1="0" y1="0" x2="0" y2="1">\r
              <stop offset="0%" stop-color="#fbc9a8"></stop>\r
              <stop offset="100%" stop-color="#f5ad85"></stop>\r
            </linearGradient>\r
            <linearGradient id="heroBrickRight" x1="0" y1="0" x2="0" y2="1">\r
              <stop offset="0%" stop-color="#f5ad85"></stop>\r
              <stop offset="100%" stop-color="#ff6b35"></stop>\r
            </linearGradient>\r
            <filter id="brickShadow" x="-50%" y="-50%" width="200%" height="200%">\r
              <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>\r
            </filter>\r
          </defs>\r
\r
          <!-- Soft ground shadow -->\r
          <ellipse class="shadow-el" cx="224" cy="420" rx="190" ry="18" fill="rgba(234, 88, 12, 0.14)" filter="url(#brickShadow)"></ellipse>\r
\r
          <!-- Bottom-left brick -->\r
          <g class="cube-group">\r
            <polygon points="112,210 224,266 112,322 0,266" fill="url(#heroBrickTop)"></polygon>\r
            <polygon points="0,266 0,336 112,392 112,322" fill="url(#heroBrickLeft)"></polygon>\r
            <polygon points="112,322 224,266 224,336 112,392" fill="url(#heroBrickRight)"></polygon>\r
          </g>\r
\r
          <!-- Bottom-right brick -->\r
          <g class="cube-group">\r
            <polygon points="336,210 448,266 336,322 224,266" fill="url(#heroBrickTop)"></polygon>\r
            <polygon points="224,266 224,336 336,392 336,322" fill="url(#heroBrickLeft)"></polygon>\r
            <polygon points="336,322 448,266 448,336 336,392" fill="url(#heroBrickRight)"></polygon>\r
          </g>\r
\r
          <!-- Top brick -->\r
          <g class="cube-group">\r
            <polygon points="224,56 336,112 224,168 112,112" fill="url(#heroBrickTop)"></polygon>\r
            <polygon points="112,112 112,182 224,238 224,168" fill="url(#heroBrickLeft)"></polygon>\r
            <polygon points="224,168 336,112 336,182 224,238" fill="url(#heroBrickRight)"></polygon>\r
          </g>\r
        </svg>\r
      </div>\r
\r
      <div class="hero-container">\r
        <p class="hero-tagline">\r
          Zero dependencies. <span>Pure JavaScript.</span>\r
        </p>\r
        <h1 class="hero-title">\r
          Build Better,<br>\r
          Build Simpler\r
        </h1>\r
\r
        <install-section></install-section>\r
      </div>\r
    </div>\r
  </div>\r
</section>`,scripts:[],externalScripts:[],externalStyles:[],styles:`.hero {\r
    min-height: 100vh;\r
    min-height: 100dvh;\r
    display: flex;\r
    align-items: center;\r
    background: #f5f5f5;\r
  }\r
\r
  .hero-card {\r
    box-shadow: 1px 1px #eee;\r
    background: white;\r
    border-radius: 24px;\r
    width: 100%;\r
    margin: 0 auto;\r
    min-height: calc(100vh - 8rem);\r
    min-height: calc(100dvh - 8rem);\r
    display: flex;\r
    align-items: center;\r
    padding: 4rem 2rem;\r
    position: relative;\r
    overflow: hidden;\r
  }\r
\r
  .hero-inner {\r
    width: 100%;\r
    max-width: var(--container-max);\r
    margin: 0 auto;\r
    position: relative;\r
  }\r
\r
  .hero-container {\r
    max-width: 600px;\r
    position: relative;\r
    z-index: 1;\r
  }\r
\r
  /* Brick Animation - SVG Isometric */\r
  .brick-animation {\r
    position: absolute;\r
    right: 0;\r
    top: 50%;\r
    transform: translateY(-50%);\r
    width: 460px;\r
    height: 460px;\r
    pointer-events: none;\r
  }\r
\r
  .brick-animation svg {\r
    width: 100%;\r
    height: 100%;\r
    overflow: visible;\r
  }\r
\r
  /* Cube groups animate in - smooth drop & land */\r
  .brick-animation .cube-group {\r
    opacity: 0;\r
    transform-box: fill-box;\r
    transform-origin: center;\r
    animation: cubeDropIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;\r
  }\r
\r
  /* Lay bricks: bottom-left → bottom-right → top */\r
  .brick-animation .cube-group:nth-of-type(1) {\r
    animation-delay: 0.1s;\r
  }\r
\r
  .brick-animation .cube-group:nth-of-type(2) {\r
    animation-delay: 0.35s;\r
  }\r
\r
  .brick-animation .cube-group:nth-of-type(3) {\r
    animation-delay: 0.65s;\r
  }\r
\r
  /* Shadow fades in */\r
  .brick-animation .shadow-el {\r
    opacity: 0;\r
    animation: shadowReveal 0.9s ease-out 0.25s forwards;\r
  }\r
\r
  @keyframes shadowReveal {\r
    to {\r
      opacity: 1;\r
    }\r
  }\r
\r
  @keyframes cubeDropIn {\r
    0% {\r
      opacity: 0;\r
      transform: translateY(-40px);\r
    }\r
\r
    60% {\r
      opacity: 1;\r
    }\r
\r
    100% {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  /* Responsive */\r
  @media (max-width: 1100px) {\r
    .brick-animation {\r
      right: 0;\r
      transform: translateY(-50%) scale(0.8);\r
    }\r
  }\r
\r
  @media (max-width: 900px) {\r
    .brick-animation {\r
      opacity: 0.35;\r
      right: -5%;\r
      transform: translateY(-50%) scale(0.65);\r
    }\r
  }\r
\r
  @media (max-width: 768px) {\r
    .brick-animation {\r
      display: none;\r
    }\r
  }\r
\r
  .hero-tagline {\r
    font-size: 0.9rem;\r
    color: var(--text-secondary);\r
    margin-bottom: 1.5rem;\r
    line-height: 1.5;\r
  }\r
\r
  .hero-tagline span {\r
    color: var(--primary);\r
    font-weight: 500;\r
  }\r
\r
  .hero-title {\r
    font-size: clamp(3rem, 8vw, 4.5rem);\r
    font-weight: 700;\r
    line-height: 1.05;\r
    color: var(--text-primary);\r
    margin-bottom: 2rem;\r
    letter-spacing: -0.03em;\r
  }\r
\r
  .hero-subtitle {\r
    display: none;\r
  }\r
\r
  .hero-actions {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: flex-start;\r
    gap: 1.5rem;\r
  }\r
\r
  .btn-hero {\r
    display: none;\r
  }\r
\r
  /* Responsive */\r
  @media (max-width: 768px) {\r
    .hero {\r
      min-height: auto;\r
    }\r
\r
    .hero-card {\r
      align-items: center;\r
      justify-content: center;\r
      padding: 7rem 1.5rem 4rem;\r
      min-height: auto;\r
      border-radius: 20px;\r
    }\r
\r
    .hero-container {\r
      max-width: 100%;\r
      text-align: center;\r
    }\r
\r
    .hero-title {\r
      font-size: 2.5rem;\r
    }\r
\r
    .hero-actions {\r
      align-items: center;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .hero-card {\r
      padding: 6rem 1.25rem 3rem;\r
      border-radius: 16px;\r
    }\r
\r
    .hero-title {\r
      font-size: 2rem;\r
      margin-bottom: 1.5rem;\r
    }\r
\r
    .hero-tagline {\r
      font-size: 0.85rem;\r
      margin-bottom: 1rem;\r
    }\r
  }`,sourcePath:"components/hero-section.html",templateBindings:[]};p({evaluators:{},handlers:{},setups:{}});function k(n){m(w,n)}const y={tagName:"feature-section",template:`<section class="features-section" id="features">\r
  <div class="container">\r
    <div class="features-header">\r
      <h2 class="section-title">Everything You Need,<br>Nothing You Don't</h2>\r
      <p class="section-subtitle">\r
        Built on web standards with modern features that just work.\r
      </p>\r
    </div>\r
\r
    <!-- Feature: Templating & Reactivity -->\r
    <lazy>\r
      <div class="feature-row">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">Templating</span>\r
          <h3 class="feature-title">\r
            Simple syntax.\r
            <span class="highlight">Reactive by default.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Bind any JavaScript expression with <code $no:bind="">{curly braces}</code>.\r
            When state changes, the DOM updates automatically — no virtual DOM,\r
            no diffing ceremony, no build step.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Plain <code $no:bind="">{expression}</code> interpolation — no directives to memorize</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Top-level variables are reactive state </span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Standard inline handlers like <code>onclick</code> — zero framework syntax</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <code-block filename="counter.html">\r
            <template>\r
              <div>\r
                <h2>Count: {count}</h2>\r
                <div>\r
                  <button onclick="count++">Add</button>\r
                  <button onclick="count=0">Reset</button>\r
                </div>\r
              </div>\r
\r
              <script>\r
                let count = 0;\r
              <\/script>\r
            </template>\r
          </code-block>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo">\r
              <counter-sample></counter-sample>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
\r
    <!-- Feature: Two-Way Binding -->\r
    <lazy>\r
      <div class="feature-row reverse accent-indigo">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">Two-Way Binding</span>\r
          <h3 class="feature-title">\r
            Form state, <span class="highlight">instantly in sync.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Connect any input to a variable with <code>$bind</code>. Edits flow\r
            both ways — update the input and your state changes, update your\r
            state and the input follows. No event handlers, no boilerplate.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Works with <code>text</code>, <code>email</code>, <code>checkbox</code>, and more</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Automatic type coercion — booleans stay booleans</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>One attribute replaces <code>value</code> + <code>oninput</code> plumbing</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <code-block filename="form.html">\r
            <template>\r
              <div>\r
                <h2>Hello, {name}!</h2>\r
                <input type="text" $bind="name" placeholder="Your name">\r
\r
                <p>Email: {email}</p>\r
                <input type="email" $bind="email" placeholder="your@email.com">\r
\r
                <label>\r
                  <input type="checkbox" $bind="subscribe">\r
                  Subscribe: {subscribe}\r
                </label>\r
              </div>\r
\r
              <script>\r
                let name = "World";\r
                let email = "";\r
                let subscribe = false;\r
              <\/script>\r
            </template>\r
          </code-block>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo accent-indigo">\r
              <form-sample></form-sample>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
\r
    <!-- Feature: References -->\r
    <lazy>\r
      <div class="feature-row accent-emerald">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">References</span>\r
          <h3 class="feature-title">\r
            Direct DOM access, <span class="highlight">when you need it.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Tag any element with <code>$ref</code> and reach it through\r
            <code>$refs</code>. Perfect for focusing inputs, measuring layout,\r
            integrating third-party libraries, or anything else that needs\r
            the real DOM node.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>One declarative attribute — no <code>querySelector</code> calls</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Access the real DOM node for focus, scroll, measurements</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Drop in any third-party library that needs an element</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <code-block filename="ref.html">\r
            <template>\r
              <input type="text" $ref="inputEl" placeholder="Click the button to focus me">\r
              <button onclick="focusInput()">Focus Input</button>\r
\r
              <script>\r
                function focusInput() {\r
                  $refs.inputEl.focus();\r
                  $refs.inputEl.select();\r
                }\r
              <\/script>\r
            </template>\r
          </code-block>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo accent-emerald">\r
              <ref-sample></ref-sample>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
\r
    <!-- Feature: Control Flow -->\r
    <lazy>\r
      <div class="feature-row reverse accent-rose">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">Control Flow</span>\r
          <h3 class="feature-title">\r
            Render what matters, <span class="highlight">when it matters.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Branch your UI with <code>&lt;if&gt;</code>, <code>&lt;else-if&gt;</code>, and\r
            <code>&lt;else&gt;</code> — or toggle visibility without unmounting using\r
            <code>&lt;show&gt;</code>. Declarative, readable, and exactly what you'd\r
            expect from plain HTML.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span><code>&lt;if&gt;</code> / <code>&lt;else-if&gt;</code> / <code>&lt;else&gt;</code> mount and unmount\r
                branches</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span><code>&lt;show&gt;</code> keeps the element in the DOM — ideal for preserving state</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Any JavaScript expression works — ternaries, method calls, the works</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <code-block filename="flow.html">\r
            <template>\r
              <select $bind="status">\r
                <option value="">Select a deploy status…</option>\r
                <option value="loading">Deploying</option>\r
                <option value="success">Succeeded</option>\r
                <option value="error">Failed</option>\r
              </select>\r
\r
              <if condition="status === 'loading'">\r
                <div>Deploying to production…</div>\r
              </if>\r
              <else-if condition="status === 'success'">\r
                <div>Deploy successful</div>\r
              </else-if>\r
              <else-if condition="status === 'error'">\r
                <div>Deploy failed — rolling back</div>\r
              </else-if>\r
              <else>\r
                <div>Waiting for a status…</div>\r
              </else>\r
\r
              <label>\r
                <input type="checkbox" $bind="showHint">\r
                Show release notes\r
              </label>\r
\r
              <show condition="showHint">\r
                <div>Kept in the DOM — visibility toggled via CSS.</div>\r
              </show>\r
\r
              <script>\r
                let status = "";\r
                let showHint = false;\r
              <\/script>\r
            </template>\r
          </code-block>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo accent-rose">\r
              <flow-sample></flow-sample>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
\r
    <!-- Feature: List Rendering -->\r
    <lazy>\r
      <div class="feature-row accent-sky">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">List Rendering</span>\r
          <h3 class="feature-title">\r
            Loops that <span class="highlight">just make sense.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Render any array with <code>&lt;for&gt;</code>. Mutate the list and the\r
            DOM keeps up — add items, remove them, reorder them — it all works\r
            without lifecycle hooks, keys, or re-renders you have to think about.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Familiar <code>(item, i) in items</code> syntax — destructuring supported</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Reassign the array and the list updates — no manual diffing</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>Pairs seamlessly with <code>&lt;if&gt;</code> for empty states and filters</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <code-block filename="tasks.html">\r
            <template>\r
              <input type="text" $bind="newTask" placeholder="Add a task…">\r
              <button onclick="addTask()">Add</button>\r
\r
              <ul>\r
                <for each="(task, i) in tasks">\r
                  <li>\r
                    {i + 1}: {task}\r
                    <button onclick="removeTask(i)">×</button>\r
                  </li>\r
                </for>\r
              </ul>\r
\r
              <script>\r
                let tasks = ["Ship the landing page", "Star the repo 🧱"];\r
                let newTask = "";\r
\r
                function addTask() {\r
                  if (!newTask.trim()) return;\r
                  tasks = [...tasks, newTask.trim()];\r
                  newTask = "";\r
                }\r
\r
                function removeTask(i) {\r
                  tasks = tasks.filter((_, idx) => idx !== i);\r
                }\r
              <\/script>\r
            </template>\r
          </code-block>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo accent-sky">\r
              <list-sample></list-sample>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
\r
    <!-- Feature Section: Cross-Component Communication -->\r
    <lazy>\r
      <div class="feature-row reverse accent-violet">\r
        <div class="feature-copy">\r
          <span class="feature-eyebrow">Cross-Component Comms</span>\r
          <h3 class="feature-title">\r
            Skip the prop drilling. <span class="highlight">Just send events.</span>\r
          </h3>\r
          <p class="feature-description">\r
            Broadcast events from anywhere with <code>$emit</code>, and pick\r
            them up with <code>$listen</code>. Siblings, cousins, deeply-nested\r
            components — they all talk without touching a shared parent.\r
          </p>\r
          <ul class="feature-points">\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span><code>$emit(name, payload)</code> broadcasts to any listener</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span><code>$listen(name, handler)</code> subscribes from anywhere in the tree</span>\r
            </li>\r
            <li>\r
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>\r
              </svg>\r
              <span>No stores, no context providers, no callback chains</span>\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="feature-visual">\r
          <div class="code-tabs">\r
            <button onclick="activeFile = 'emit.html'" class="{activeFile === 'emit.html' ? 'active' : ''}">\r
              emit.html\r
            </button>\r
            <button onclick="activeFile = 'listen.html'" class="{activeFile === 'listen.html' ? 'active' : ''}">\r
              listen.html\r
            </button>\r
          </div>\r
\r
          <show condition="activeFile === 'emit.html'">\r
            <code-block filename="emit.html">\r
              <template>\r
                <input $bind="message" type="text" placeholder="Type a message">\r
                <button onclick="sendMessage()">Send</button>\r
\r
                <script>\r
                  let message = "";\r
\r
                  function sendMessage() {\r
                    $emit("message-sent", message);\r
                    message = "";\r
                  }\r
                <\/script>\r
              </template>\r
            </code-block>\r
          </show>\r
\r
          <show condition="activeFile === 'listen.html'">\r
            <code-block filename="listen.html">\r
              <template>\r
                <ul>\r
                  <for each="msg in messages">\r
                    <li>{msg}</li>\r
                  </for>\r
                </ul>\r
\r
                <script>\r
                  let messages = [];\r
\r
                  $listen("message-sent", (data) => {\r
                    messages = [...messages, data];\r
                  });\r
                <\/script>\r
              </template>\r
            </code-block>\r
          </show>\r
\r
          <div class="feature-demo-wrapper">\r
            <div class="feature-demo accent-violet">\r
              <div class="comm-stack">\r
                <emit-sample></emit-sample>\r
                <div class="flow-connector">$emit → $listen</div>\r
                <listen-sample></listen-sample>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </lazy>\r
  </div>\r
</section>`,scripts:[{content:'let activeFile = "emit.html";',type:null}],externalScripts:[],externalStyles:[],styles:`/* ============================================\r
   Features Section\r
   ============================================ */\r
  .features-section {\r
    background-color: #f5f5f5;\r
    padding: var(--section-padding);\r
    overflow: hidden;\r
  }\r
\r
  .features-section .container {\r
    /* inherit site-wide --container-max so this section aligns with the hero above */\r
  }\r
\r
  .features-header {\r
    text-align: center;\r
    margin-bottom: 5rem;\r
  }\r
\r
  .features-section .section-title {\r
    font-size: clamp(2.25rem, 5vw, 4rem);\r
    font-weight: 800;\r
    line-height: 1.05;\r
    letter-spacing: -0.03em;\r
    max-width: 20ch;\r
    margin: 0 auto 1.5rem;\r
    text-wrap: balance;\r
  }\r
\r
  @media (max-width: 480px) {\r
    .features-section .section-title {\r
      font-size: 1.875rem;\r
    }\r
  }\r
\r
  .features-section .section-subtitle {\r
    font-size: 1.125rem;\r
    color: var(--text-secondary);\r
    line-height: 1.6;\r
    max-width: 42ch;\r
    margin: 0 auto;\r
  }\r
\r
  /* ============================================\r
     Feature Row (side-by-side)\r
     ============================================ */\r
  .feature-row {\r
    display: grid;\r
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\r
    gap: 4rem;\r
    align-items: center;\r
    margin-bottom: 6rem;\r
  }\r
\r
  .feature-row:last-child {\r
    margin-bottom: 0;\r
  }\r
\r
  .feature-row.reverse .feature-copy {\r
    order: 2;\r
  }\r
\r
  .feature-row.reverse .feature-visual {\r
    order: 1;\r
  }\r
\r
  .feature-copy {\r
    max-width: 32rem;\r
  }\r
\r
  .feature-eyebrow {\r
    display: inline-flex;\r
    align-items: center;\r
    gap: 0.625rem;\r
    font-size: 0.8125rem;\r
    font-weight: 600;\r
    text-transform: uppercase;\r
    letter-spacing: 0.08em;\r
    color: var(--primary);\r
    margin-bottom: 1rem;\r
  }\r
\r
  .feature-eyebrow::before {\r
    content: "";\r
    width: 24px;\r
    height: 2px;\r
    background: var(--gradient-accent);\r
    border-radius: 2px;\r
  }\r
\r
  .feature-title {\r
    font-size: clamp(1.875rem, 3.5vw, 2.75rem);\r
    font-weight: 800;\r
    line-height: 1.1;\r
    letter-spacing: -0.02em;\r
    color: var(--text-primary);\r
    margin-bottom: 1.25rem;\r
  }\r
\r
  .feature-title .highlight {\r
    background: var(--gradient-accent);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  /* Indigo accent variant for alternating rows */\r
  .feature-row.accent-indigo .feature-eyebrow {\r
    color: #6366f1;\r
  }\r
\r
  .feature-row.accent-indigo .feature-eyebrow::before {\r
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\r
  }\r
\r
  .feature-row.accent-indigo .feature-title .highlight {\r
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  .feature-row.accent-indigo .feature-description code {\r
    background: rgba(99, 102, 241, 0.1);\r
    color: #4f46e5;\r
  }\r
\r
  .feature-row.accent-indigo .feature-points li svg {\r
    color: #6366f1;\r
  }\r
\r
  /* Emerald accent variant */\r
  .feature-row.accent-emerald .feature-eyebrow {\r
    color: #059669;\r
  }\r
\r
  .feature-row.accent-emerald .feature-eyebrow::before {\r
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);\r
  }\r
\r
  .feature-row.accent-emerald .feature-title .highlight {\r
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  .feature-row.accent-emerald .feature-description code {\r
    background: rgba(16, 185, 129, 0.12);\r
    color: #047857;\r
  }\r
\r
  .feature-row.accent-emerald .feature-points li svg {\r
    color: #10b981;\r
  }\r
\r
  /* Rose accent variant */\r
  .feature-row.accent-rose .feature-eyebrow {\r
    color: #e11d48;\r
  }\r
\r
  .feature-row.accent-rose .feature-eyebrow::before {\r
    background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);\r
  }\r
\r
  .feature-row.accent-rose .feature-title .highlight {\r
    background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  .feature-row.accent-rose .feature-description code {\r
    background: rgba(244, 63, 94, 0.1);\r
    color: #be123c;\r
  }\r
\r
  .feature-row.accent-rose .feature-points li svg {\r
    color: #f43f5e;\r
  }\r
\r
  /* Sky accent variant */\r
  .feature-row.accent-sky .feature-eyebrow {\r
    color: #0284c7;\r
  }\r
\r
  .feature-row.accent-sky .feature-eyebrow::before {\r
    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);\r
  }\r
\r
  .feature-row.accent-sky .feature-title .highlight {\r
    background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  .feature-row.accent-sky .feature-description code {\r
    background: rgba(14, 165, 233, 0.1);\r
    color: #0369a1;\r
  }\r
\r
  .feature-row.accent-sky .feature-points li svg {\r
    color: #0ea5e9;\r
  }\r
\r
  /* Violet accent variant */\r
  .feature-row.accent-violet .feature-eyebrow {\r
    color: #7c3aed;\r
  }\r
\r
  .feature-row.accent-violet .feature-eyebrow::before {\r
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);\r
  }\r
\r
  .feature-row.accent-violet .feature-title .highlight {\r
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);\r
    -webkit-background-clip: text;\r
    background-clip: text;\r
    -webkit-text-fill-color: transparent;\r
  }\r
\r
  .feature-row.accent-violet .feature-description code {\r
    background: rgba(139, 92, 246, 0.1);\r
    color: #6d28d9;\r
  }\r
\r
  .feature-row.accent-violet .feature-points li svg {\r
    color: #8b5cf6;\r
  }\r
\r
  /* ============================================\r
     Code tabs (used by cross-component feature)\r
     ============================================ */\r
  .code-tabs {\r
    display: flex;\r
    gap: 0.25rem;\r
    padding: 0.25rem;\r
    background: #1e293b;\r
    border: 1px solid #334155;\r
    border-radius: 10px;\r
    align-self: flex-start;\r
  }\r
\r
  .code-tabs button {\r
    padding: 0.45rem 0.9rem;\r
    background: transparent;\r
    border: none;\r
    color: #94a3b8;\r
    font-size: 0.8125rem;\r
    font-weight: 600;\r
    font-family: var(--font-mono);\r
    border-radius: 7px;\r
    cursor: pointer;\r
    transition: all 0.15s ease;\r
  }\r
\r
  .code-tabs button:hover {\r
    color: #e2e8f0;\r
  }\r
\r
  .code-tabs button.active {\r
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);\r
    color: #fff;\r
    box-shadow: 0 2px 6px rgba(139, 92, 246, 0.35);\r
  }\r
\r
  /* Emit → Listen connector */\r
  .flow-connector {\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 0.5rem;\r
    padding: 0.35rem 0;\r
    font-size: 0.7rem;\r
    font-weight: 700;\r
    text-transform: uppercase;\r
    letter-spacing: 0.12em;\r
    color: #8b5cf6;\r
  }\r
\r
  .flow-connector::before,\r
  .flow-connector::after {\r
    content: "";\r
    flex: 1;\r
    height: 1px;\r
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent);\r
  }\r
\r
  .comm-stack {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 0.25rem;\r
    width: 100%;\r
    max-width: 360px;\r
  }\r
\r
  .feature-description {\r
    font-size: 1.0625rem;\r
    line-height: 1.7;\r
    color: var(--text-secondary);\r
    margin-bottom: 1.75rem;\r
  }\r
\r
  .feature-description code {\r
    font-family: var(--font-mono);\r
    font-size: 0.9em;\r
    background: rgba(255, 107, 53, 0.1);\r
    color: var(--primary-dark);\r
    padding: 0.15em 0.4em;\r
    border-radius: 4px;\r
  }\r
\r
  .feature-points {\r
    list-style: none;\r
    padding: 0;\r
    margin: 0;\r
    display: flex;\r
    flex-direction: column;\r
    gap: 0.875rem;\r
  }\r
\r
  .feature-points li {\r
    display: flex;\r
    align-items: flex-start;\r
    gap: 0.75rem;\r
    font-size: 0.9875rem;\r
    color: var(--text-primary);\r
    line-height: 1.5;\r
  }\r
\r
  .feature-points li svg {\r
    flex-shrink: 0;\r
    width: 20px;\r
    height: 20px;\r
    margin-top: 2px;\r
    color: var(--primary);\r
  }\r
\r
  .feature-points code {\r
    font-family: var(--font-mono);\r
    font-size: 0.875em;\r
    background: rgba(15, 23, 42, 0.06);\r
    padding: 0.1em 0.35em;\r
    border-radius: 4px;\r
    color: var(--text-primary);\r
  }\r
\r
  /* Visual side (code + live demo) */\r
  .feature-visual {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 1.25rem;\r
    min-width: 0;\r
  }\r
\r
  .feature-demo-wrapper {\r
    position: relative;\r
  }\r
\r
  .feature-demo {\r
    position: relative;\r
    border-radius: 14px;\r
    padding: 2.5rem 2rem;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    min-height: 220px;\r
    overflow: hidden;\r
    background-color: #fafafa;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(255, 107, 53, 0.08) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
    box-shadow:\r
      inset 0 0 0 1px rgba(15, 23, 42, 0.06),\r
      0 1px 2px rgba(15, 23, 42, 0.04);\r
  }\r
\r
  /* Alt accent variant — indigo glow */\r
  .feature-demo.accent-indigo {\r
    background-color: #f8fafc;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(99, 102, 241, 0.1) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
  }\r
\r
  /* Alt accent variant — emerald glow */\r
  .feature-demo.accent-emerald {\r
    background-color: #f6fbf8;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(16, 185, 129, 0.12) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
  }\r
\r
  /* Alt accent variant — rose glow */\r
  .feature-demo.accent-rose {\r
    background-color: #fff7f8;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(244, 63, 94, 0.12) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
  }\r
\r
  /* Alt accent variant — sky glow */\r
  .feature-demo.accent-sky {\r
    background-color: #f5fbfe;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(14, 165, 233, 0.12) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
  }\r
\r
  /* Alt accent variant — violet glow */\r
  .feature-demo.accent-violet {\r
    background-color: #faf7ff;\r
    background-image:\r
      radial-gradient(circle at 50% 50%,\r
        rgba(139, 92, 246, 0.13) 0%,\r
        transparent 60%),\r
      radial-gradient(circle at 1px 1px,\r
        rgba(15, 23, 42, 0.08) 1px,\r
        transparent 0);\r
    background-size: 100% 100%, 20px 20px;\r
  }\r
\r
  /* ============================================\r
     Responsive\r
     ============================================ */\r
  @media (max-width: 900px) {\r
    .feature-row {\r
      grid-template-columns: 1fr;\r
      gap: 2.5rem;\r
      margin-bottom: 4.5rem;\r
    }\r
\r
    .feature-row.reverse .feature-copy {\r
      order: 1;\r
    }\r
\r
    .feature-row.reverse .feature-visual {\r
      order: 2;\r
    }\r
\r
    .feature-copy {\r
      max-width: 100%;\r
      text-align: center;\r
    }\r
\r
    .feature-eyebrow {\r
      justify-content: center;\r
    }\r
\r
    .feature-points {\r
      text-align: left;\r
      max-width: 28rem;\r
      margin: 0 auto;\r
    }\r
\r
    .features-header {\r
      margin-bottom: 3.5rem;\r
    }\r
  }\r
\r
  @media (max-width: 768px) {\r
    .features-section {\r
      padding: var(--section-padding-mobile);\r
    }\r
\r
    .features-section .section-subtitle {\r
      font-size: 1rem;\r
    }\r
\r
    .features-header {\r
      margin-bottom: 2.5rem;\r
    }\r
\r
    .feature-row {\r
      gap: 2rem;\r
      margin-bottom: 3.5rem;\r
    }\r
\r
    .feature-demo {\r
      padding: 1.5rem 1rem;\r
      min-height: 180px;\r
    }\r
\r
    .feature-description {\r
      font-size: 1rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .feature-demo {\r
      padding: 1.25rem 0.75rem;\r
      border-radius: 12px;\r
    }\r
\r
    .feature-points li {\r
      font-size: 0.9375rem;\r
    }\r
\r
    .code-tabs {\r
      width: 100%;\r
      overflow-x: auto;\r
    }\r
  }`,sourcePath:"components/feature-section.html",templateBindings:["curly","expression","count","name","email","subscribe","$refs","tasks","activeFile","$emit","messages"]};p({evaluators:{"activeFile === 'emit.html' ? 'active' : ''":{deps:["activeFile"],fn:n=>n==="emit.html"?"active":""},"activeFile === 'listen.html' ? 'active' : ''":{deps:["activeFile"],fn:n=>n==="listen.html"?"active":""},"activeFile === 'emit.html'":{deps:["activeFile"],fn:n=>n==="emit.html"},"activeFile === 'listen.html'":{deps:["activeFile"],fn:n=>n==="listen.html"}},handlers:{"handler:activeFile = 'emit.html'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{n.activeFile="emit.html"}},"handler:activeFile = 'listen.html'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{n.activeFile="listen.html"}}},setups:{'state:let activeFile = "emit.html";':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.activeFile??="emit.html"}}}});function $(n){m(y,n)}const C={tagName:"form-sample",template:`<div class="form-container">\r
  <h2>Hello, {name}!</h2>\r
  <div class="form-group">\r
    <input type="text" $bind="name" placeholder="Your name">\r
  </div>\r
\r
  <div class="form-group">\r
    <p>Email: {email}</p>\r
    <input type="email" $bind="email" placeholder="your@email.com">\r
  </div>\r
\r
  <label>\r
    <input type="checkbox" $bind="subscribe">\r
    Subscribe: {subscribe}\r
  </label>\r
</div>`,scripts:[{content:`let name = "World";\r
  let email = "";\r
  let subscribe = false;`,type:null}],externalScripts:[],externalStyles:[],styles:`.form-container {\r
    text-align: center;\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 1.25rem;\r
    width: 100%;\r
    max-width: 340px;\r
  }\r
\r
  .form-container h2 {\r
    font-size: 1.75rem;\r
    font-weight: 700;\r
    color: #0f172a;\r
    letter-spacing: -0.01em;\r
  }\r
\r
  .form-container input[type="text"],\r
  .form-container input[type="email"] {\r
    padding: 0.7rem 0.95rem;\r
    background: #ffffff;\r
    border: 1px solid #e2e8f0;\r
    border-radius: 8px;\r
    color: #0f172a;\r
    font-size: 0.9375rem;\r
    width: 100%;\r
    transition: all 0.2s ease;\r
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\r
  }\r
\r
  .form-container input[type="text"]:focus,\r
  .form-container input[type="email"]:focus {\r
    outline: none;\r
    border-color: #6366f1;\r
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\r
  }\r
\r
  .form-container input::placeholder {\r
    color: #94a3b8;\r
  }\r
\r
  .form-container p {\r
    color: #475569;\r
    font-size: 0.875rem;\r
    margin: 0;\r
    font-variant-numeric: tabular-nums;\r
  }\r
\r
  .form-container label {\r
    display: flex;\r
    align-items: center;\r
    gap: 0.5rem;\r
    color: #334155;\r
    font-size: 0.9375rem;\r
    cursor: pointer;\r
    font-weight: 500;\r
  }\r
\r
  .form-container input[type="checkbox"] {\r
    width: 17px;\r
    height: 17px;\r
    cursor: pointer;\r
    accent-color: #6366f1;\r
  }\r
\r
  .form-group {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 0.4rem;\r
    width: 100%;\r
    align-items: stretch;\r
  }`,sourcePath:"components/samples/form.html",templateBindings:["name","email","subscribe"]};p({evaluators:{name:{deps:["name"],fn:n=>n},email:{deps:["email"],fn:n=>n},subscribe:{deps:["subscribe"],fn:n=>n}},handlers:{},setups:{'state:let name = "World";\r\n  let email = "";\r\n  let subscribe = false;':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.name??="World",n.email??="",n.subscribe??=!1}}}});function z(n){m(C,n)}const B={tagName:"ref-sample",template:`<div class="ref-demo">\r
  <input type="text" $ref="inputEl" placeholder="Click the button to focus me">\r
  <button onclick="focusInput()">\r
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\r
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>\r
      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>\r
    </svg>\r
    Focus Input\r
  </button>\r
</div>`,scripts:[{content:`function focusInput() {\r
    $refs.inputEl.focus();\r
    $refs.inputEl.select();\r
  }`,type:null}],externalScripts:[],externalStyles:[],styles:`.ref-demo {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    gap: 0.875rem;\r
    width: 100%;\r
    max-width: 340px;\r
  }\r
\r
  .ref-demo input[type="text"] {\r
    padding: 0.7rem 0.95rem;\r
    background: #ffffff;\r
    border: 1px solid #e2e8f0;\r
    border-radius: 8px;\r
    color: #0f172a;\r
    font-size: 0.9375rem;\r
    width: 100%;\r
    transition: all 0.2s ease;\r
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);\r
    text-align: center;\r
  }\r
\r
  .ref-demo input[type="text"]:focus {\r
    outline: none;\r
    border-color: #10b981;\r
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);\r
  }\r
\r
  .ref-demo input::placeholder {\r
    color: #94a3b8;\r
  }\r
\r
  .ref-demo button {\r
    padding: 0.7rem 1.25rem;\r
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);\r
    color: #ffffff;\r
    border: none;\r
    border-radius: 8px;\r
    font-size: 0.9375rem;\r
    font-weight: 600;\r
    cursor: pointer;\r
    transition: all 0.2s ease;\r
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);\r
    display: inline-flex;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 0.5rem;\r
  }\r
\r
  .ref-demo button:hover {\r
    transform: translateY(-2px);\r
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);\r
  }\r
\r
  .ref-demo button:active {\r
    transform: translateY(0);\r
  }\r
\r
  .ref-demo button svg {\r
    width: 16px;\r
    height: 16px;\r
  }`,sourcePath:"components/samples/ref.html",templateBindings:[]};p({evaluators:{},handlers:{"handler:focusInput()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{function l(){a.inputEl.focus(),a.inputEl.select()}l()}}},setups:{"state:function focusInput() {\r\n    $refs.inputEl.focus();\r\n    $refs.inputEl.select();\r\n  }":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{function s(){t.inputEl.focus(),t.inputEl.select()}n.focusInput??=s}}}});function T(n){m(B,n)}const S={tagName:"flow-sample",template:`<div class="flow-demo">
    <select $bind="status">
        <option value="">Select a deploy status…</option>
        <option value="loading">Deploying</option>
        <option value="success">Succeeded</option>
        <option value="error">Failed</option>
    </select>

    <if condition="status === 'loading'">
        <div class="status-card loading">
            <span class="dot"></span>
            <span>Deploying to production…</span>
        </div>
    </if>
    <else-if condition="status === 'success'">
        <div class="status-card success">
            <span class="dot"></span>
            <span>Deploy successful</span>
        </div>
    </else-if>
    <else-if condition="status === 'error'">
        <div class="status-card error">
            <span class="dot"></span>
            <span>Deploy failed — rolling back</span>
        </div>
    </else-if>
    <else>
        <div class="status-card idle">
            <span class="dot"></span>
            <span>Waiting for a status…</span>
        </div>
    </else>

    <label class="checkbox-row">
        <input type="checkbox" $bind="showHint">
        Show release notes
    </label>

    <show condition="showHint">
        <div class="hint-card">
            This element stays in the DOM — <strong>&lt;show&gt;</strong> just toggles its visibility via CSS,
            preserving scroll
            position and animations.
        </div>
    </show>
</div>`,scripts:[{content:`let status = "";
    let showHint = false;`,type:null}],externalScripts:[],externalStyles:[],styles:`.flow-demo {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 340px;
    }

    .flow-demo label {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #64748b;
    }

    .flow-demo select {
        padding: 0.7rem 0.95rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        color: #0f172a;
        font-size: 0.9375rem;
        width: 100%;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 18px;
        padding-right: 2.25rem;
    }

    .flow-demo select:focus {
        outline: none;
        border-color: #f43f5e;
        box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.15);
    }

    .flow-demo .checkbox-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: #334155;
        cursor: pointer;
        font-weight: 500;
        user-select: none;
    }

    .flow-demo .checkbox-row input {
        width: 17px;
        height: 17px;
        accent-color: #f43f5e;
        cursor: pointer;
    }

    /* Status card — this is what <if>/<else-if>/<else> swaps */
    .status-card {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.875rem 1rem;
        border-radius: 10px;
        font-size: 0.9375rem;
        font-weight: 600;
        border: 1px solid transparent;
    }

    .status-card .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .status-card.loading {
        background: #eff6ff;
        border-color: #bfdbfe;
        color: #1d4ed8;
    }

    .status-card.loading .dot {
        background: #3b82f6;
        animation: pulse 1.2s ease-in-out infinite;
    }

    .status-card.success {
        background: #ecfdf5;
        border-color: #a7f3d0;
        color: #047857;
    }

    .status-card.success .dot {
        background: #10b981;
    }

    .status-card.error {
        background: #fef2f2;
        border-color: #fecaca;
        color: #b91c1c;
    }

    .status-card.error .dot {
        background: #ef4444;
    }

    .status-card.idle {
        background: #f8fafc;
        border-color: #e2e8f0;
        color: #64748b;
    }

    .status-card.idle .dot {
        background: #94a3b8;
    }

    @keyframes pulse {

        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }

        50% {
            opacity: 0.5;
            transform: scale(1.3);
        }
    }

    .hint-card {
        padding: 0.75rem 0.9rem;
        background: linear-gradient(135deg, rgba(244, 63, 94, 0.08), rgba(251, 113, 133, 0.08));
        border: 1px dashed rgba(244, 63, 94, 0.35);
        border-radius: 8px;
        font-size: 0.8125rem;
        color: #9f1239;
        line-height: 1.4;
    }`,sourcePath:"components/samples/flow.html",templateBindings:[]};p({evaluators:{status:{deps:["status"],fn:n=>n},"status === 'loading'":{deps:["status"],fn:n=>n==="loading"},"status === 'success'":{deps:["status"],fn:n=>n==="success"},"status === 'error'":{deps:["status"],fn:n=>n==="error"},showHint:{deps:["showHint"],fn:n=>n}},handlers:{},setups:{'state:let status = "";\n    let showHint = false;':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.status??="",n.showHint??=!1}}}});function M(n){m(S,n)}const F={tagName:"list-sample",template:`<div class="loop-demo">
    <div class="add-row">
        <input type="text" $bind="newTask" placeholder="Add a task…" onkeydown="if (event.key === 'Enter') addTask()">
        <button class="add-btn" onclick="addTask()">Add</button>
    </div>

    <ul>
        <for each="(task, i) in tasks">
            <li>
                <span class="index">{i + 1}</span>
                <span class="text">{task}</span>
                <button class="remove-btn" onclick="removeTask(i)" aria-label="Remove">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </li>
        </for>
        <if condition="tasks.length === 0">
            <li class="empty">
                No tasks yet — add one above
            </li>
        </if>
    </ul>
</div>`,scripts:[{content:`let tasks = ["Ship the landing page", "Star the repo 🧱"];
    let newTask = "";

    function addTask() {
        const t = newTask.trim();
        if (!t) return;
        tasks = [...tasks, t];
        newTask = "";
    }

    function removeTask(i) {
        console.log("Removing task", i);
        tasks = tasks.filter((_, idx) => idx !== i);
    }`,type:null}],externalScripts:[],externalStyles:[],styles:`.loop-demo {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
        max-width: 340px;
    }

    .loop-demo .add-row {
        display: flex;
        gap: 0.5rem;
    }

    .loop-demo input[type="text"] {
        flex: 1;
        padding: 0.65rem 0.9rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        color: #0f172a;
        font-size: 0.9375rem;
        transition: all 0.2s ease;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
    }

    .loop-demo input[type="text"]:focus {
        outline: none;
        border-color: #0ea5e9;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
    }

    .loop-demo input::placeholder {
        color: #94a3b8;
    }

    .loop-demo .add-btn {
        padding: 0 1rem;
        background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        color: #fff;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9375rem;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
    }

    .loop-demo .add-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(14, 165, 233, 0.4);
    }

    .loop-demo ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .loop-demo li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.65rem 0.85rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 0.9375rem;
        color: #0f172a;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        animation: slideIn 0.2s ease;
    }

    .loop-demo .index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
        border-radius: 6px;
        background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        color: #fff;
        font-size: 0.75rem;
        font-weight: 700;
        flex-shrink: 0;
        font-variant-numeric: tabular-nums;
    }

    .loop-demo .text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .loop-demo .remove-btn {
        background: transparent;
        border: none;
        color: #94a3b8;
        cursor: pointer;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        transition: all 0.15s ease;
    }

    .loop-demo .remove-btn:hover {
        color: #ef4444;
        background: #fef2f2;
    }

    .loop-demo .remove-btn svg {
        width: 16px;
        height: 16px;
    }

    .loop-demo .empty {
        text-align: center;
        padding: 1rem;
        color: #94a3b8;
        font-size: 0.875rem;
        font-style: italic;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-4px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }`,sourcePath:"components/samples/loop.html",templateBindings:["tasks"]};p({evaluators:{newTask:{deps:["newTask"],fn:n=>n},tasks:{deps:["tasks"],fn:n=>n},"tasks.length === 0":{deps:["tasks"],fn:n=>n.length===0},"i + 1":{deps:["i"],fn:n=>n+1},task:{deps:["task"],fn:n=>n}},handlers:{"handler:if (event.key === 'Enter') addTask()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{function l(){const r=n.newTask.trim();r&&(n.tasks=[...n.tasks,r],n.newTask="")}i.key==="Enter"&&l()}},"handler:addTask()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{function l(){const r=n.newTask.trim();r&&(n.tasks=[...n.tasks,r],n.newTask="")}l()}},"handler:removeTask(i)":{deps:["event","context","reactiveState","$emit","$listen"],fn:(n,a,t,i,d)=>{const{task:c,i:o}=a;let{tasks:e,newTask:s}=t;function l(r){console.log("Removing task",r),e=e.filter((u,f)=>f!==r)}l(o),t.tasks=e,t.newTask=s}}},setups:{'state:let tasks = ["Ship the landing page", "Star the repo 🧱"];\n    let newTask = "";\n\n    function addTask() {\n        const t = newTask.trim();\n        if (!t) return;\n        tasks = [...tasks, t];\n        newTask = "";\n    }\n\n    function removeTask(i) {\n        console.log("Removing task", i);\n        tasks = tasks.filter((_, idx) => idx !== i);\n    }':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.tasks??=["Ship the landing page","Star the repo 🧱"],n.newTask??="";function s(){const r=n.newTask.trim();r&&(n.tasks=[...n.tasks,r],n.newTask="")}function l(r){console.log("Removing task",r),n.tasks=n.tasks.filter((u,f)=>f!==r)}n.addTask??=s,n.removeTask??=l}}}});function E(n){m(F,n)}const R={tagName:"emit-sample",template:`<div class="emit-card">
    <div class="row">
        <input $bind="message" type="text" placeholder="Type a message…" onkeydown="if (event.key === 'Enter') sendMessage()">
        <button onclick="sendMessage()">
            Send
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path>
            </svg>
        </button>
    </div>
</div>`,scripts:[{content:`let message = "";

    function sendMessage() {
        const text = message.trim();
        if (!text) return;
        $emit("message-sent", text);
        message = "";
    }`,type:null}],externalScripts:[],externalStyles:[],styles:`.emit-card {
        width: 100%;
        padding: 1rem 1.1rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }


    .emit-card .row {
        display: flex;
        gap: 0.5rem;
    }

    .emit-card input {
        flex: 1;
        padding: 0.6rem 0.85rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 0.9rem;
        color: #0f172a;
        transition: all 0.2s ease;
    }

    .emit-card input:focus {
        outline: none;
        border-color: #8b5cf6;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
    }

    .emit-card input::placeholder {
        color: #94a3b8;
    }

    .emit-card button {
        padding: 0 1rem;
        background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        color: #fff;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .emit-card button:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
    }

    .emit-card button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .emit-card button svg {
        width: 14px;
        height: 14px;
    }`,sourcePath:"components/samples/emit.html",templateBindings:[]};p({evaluators:{message:{deps:["message"],fn:n=>n}},handlers:{"handler:if (event.key === 'Enter') sendMessage()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{function l(){const r=n.message.trim();r&&(e("message-sent",r),n.message="")}i.key==="Enter"&&l()}},"handler:sendMessage()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e,s)=>{function l(){const r=n.message.trim();r&&(e("message-sent",r),n.message="")}l()}}},setups:{'state:let message = "";\n\n    function sendMessage() {\n        const text = message.trim();\n        if (!text) return;\n        $emit("message-sent", text);\n        message = "";\n    }':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.message??="";function s(){const l=n.message.trim();l&&(o("message-sent",l),n.message="")}n.sendMessage??=s}}}});function D(n){m(R,n)}const I={tagName:"listen-sample",template:`<div class="listen-card">
    <div class="label">
        <span class="count">{messages.length} received</span>
    </div>
    <div class="inbox">
        <for each="msg in messages">
            <div class="msg">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="msg-text">{msg}</span>
            </div>
        </for>
        <if condition="messages.length === 0">
            <div class="empty">
                Waiting for messages…
            </div>
        </if>
    </div>
</div>`,scripts:[{content:`let messages = [];

    $listen("message-sent", (data) => {
        messages = [...messages, data];
    });`,type:null}],externalScripts:[],externalStyles:[],styles:`.listen-card {
        width: 100%;
        padding: 1rem 1.1rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }

    .listen-card .label {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #8b5cf6;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }

    .listen-card .label-text {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }

    .listen-card .label-text::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #8b5cf6;
        animation: listenPulse 1.6s ease-in-out infinite;
    }

    .listen-card .count {
        font-size: 0.65rem;
        color: #64748b;
        letter-spacing: 0.05em;
        font-variant-numeric: tabular-nums;
    }

    .inbox {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        min-height: 56px;
        max-height: 120px;
        overflow-y: auto;
    }

    .inbox .msg {
        padding: 0.5rem 0.75rem;
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(168, 85, 247, 0.08));
        border: 1px solid rgba(139, 92, 246, 0.2);
        border-radius: 8px;
        font-size: 0.875rem;
        color: #0f172a;
        animation: msgIn 0.25s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .inbox .msg svg {
        width: 14px;
        height: 14px;
        color: #8b5cf6;
        flex-shrink: 0;
    }

    .inbox .msg-text {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .inbox .empty {
        text-align: center;
        padding: 0.75rem;
        color: #94a3b8;
        font-size: 0.8125rem;
        font-style: italic;
    }

    @keyframes msgIn {
        from {
            opacity: 0;
            transform: translateX(-6px);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes listenPulse {

        0%,
        100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
        }

        50% {
            opacity: 0.7;
            box-shadow: 0 0 0 4px rgba(139, 92, 246, 0);
        }
    }`,sourcePath:"components/samples/listen.html",templateBindings:["messages"]};p({evaluators:{messages:{deps:["messages"],fn:n=>n},"messages.length === 0":{deps:["messages"],fn:n=>n.length===0},"messages.length":{deps:["messages"],fn:n=>n.length},msg:{deps:["msg"],fn:n=>n}},handlers:{},setups:{'state:let messages = [];\n\n    $listen("message-sent", (data) => {\n        messages = [...messages, data];\n    });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,a,t,i,d,c,o,e)=>{n.messages??=[],e("message-sent",s=>{n.messages=[...n.messages,s]})}}}});function A(n){m(I,n)}await(g(),k(),h(),$(),b(),v(),x(),z(),T(),M(),E(),D(),A(),{});document.body.classList.remove("loading");
