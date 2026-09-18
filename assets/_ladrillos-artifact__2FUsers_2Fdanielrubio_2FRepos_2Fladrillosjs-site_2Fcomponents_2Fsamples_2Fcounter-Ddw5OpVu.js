import{p as h,w as g}from"./clarity-Bsl3QzF0.js";const f={tagName:"install-section",template:`<div class="hero-actions">
    <div class="install-picker">
        <div class="install-tabs">
            <button class="tab-btn {tab === 'npm' ? 'active' : ''}" onclick="tab = 'npm'">
                npm
            </button>
            <button class="tab-btn {tab === 'cdn' ? 'active' : ''}" onclick="tab = 'cdn'">
                CDN
            </button>
        </div>
        <!-- NPM -->
        <show condition="tab==='npm'">
            <div class="install-box">
                <code>npm install <span class="highlight">ladrillosjs</span></code>
                <button class="copy-btn" onclick="copyCommand('npm')" $ref="npmCopyBtn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                        </path>
                    </svg>
                    Copy
                </button>
            </div>
        </show>
        <!-- CDN -->
        <show condition="tab === 'cdn'">
            <div class="install-box">
                <code>&lt;<span class="tag">script</span>
                  <span class="attr">src</span>=<span class="string">"{commands.cdn}"</span>&gt;&lt;/<span class="tag">script</span>&gt;</code>
                <button class="copy-btn" onclick="copyCommand('cdn')" $ref="cdnCopyBtn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                        </path>
                    </svg>
                    Copy
                </button>
            </div>
        </show>
        <a class="playground-link" href="https://drubiodev.github.io/ladrillosjs-playground/" target="_blank" rel="noopener">Skip setup and open the Playground →</a>
    </div>
</div>`,scripts:[{content:`const commands = {
        npm: "npm install ladrillosjs",
        cdn: '<script src="https://unpkg.com/ladrillosjs@2.1.3/dist/index.js"><\\/script>',
    };
    let tab = 'npm';

    const copyCommand = (type) => {
        navigator.clipboard.writeText(commands[type]);
        const btn = type === "npm" ? $refs.npmCopyBtn : $refs.cdnCopyBtn;
        const originalHTML = btn.innerHTML;
        btn.innerHTML =
            '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    };`,type:null}],externalScripts:[],externalStyles:[],styles:`/* Install picker */
    .install-picker {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        width: 100%;
        max-width: 400px;
    }

    /* Tab toggle - pill style */
    .install-tabs {
        display: inline-flex;
        background: #f1f5f9;
        padding: 3px;
        border-radius: 6px;
        gap: 0;
    }

    .tab-btn {
        padding: 0.4rem 1rem;
        border: none;
        background: transparent;
        color: #64748b;
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
    }

    .tab-btn:hover:not(.active) {
        color: #334155;
    }

    .tab-btn.active {
        background: white;
        color: var(--text-primary);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }

    /* Install command box */
    .install-box {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: var(--text-primary);
        padding: 0.75rem 1rem;
        border-radius: 8px;
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: #e2e8f0;
        box-sizing: border-box;
    }

    .install-box code {
        flex: 1;
        min-width: 0;
        background: transparent;
        padding: 0;
        color: #e2e8f0;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Show full text on hover */
    .install-box:hover code {
        overflow-x: auto;
        text-overflow: clip;
    }

    /* Custom scrollbar for code */
    .install-box code::-webkit-scrollbar {
        height: 4px;
    }

    .install-box code::-webkit-scrollbar-track {
        background: transparent;
    }

    .install-box code::-webkit-scrollbar-thumb {
        background: #475569;
        border-radius: 2px;
    }

    .install-box code::-webkit-scrollbar-thumb:hover {
        background: #64748b;
    }

    .install-box .highlight {
        color: var(--primary-light);
    }

    .install-box .tag {
        color: var(--primary-light);
    }

    .install-box .attr {
        color: #7dd3fc;
    }

    .install-box .string {
        color: #86efac;
    }

    .copy-btn {
        background: #334155;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
        color: #94a3b8;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        flex-shrink: 0;
        min-width: 85px;
    }

    .copy-btn:hover {
        background: #475569;
        color: #e2e8f0;
    }

    .copy-btn svg {
        width: 16px;
        height: 16px;
    }

    .copy-btn {
        background: #475569;
        border: none;
        padding: 0.4rem 0.75rem;
        border-radius: 4px;
        cursor: pointer;
        color: #94a3b8;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.375rem;
        font-size: 0.75rem;
        font-weight: 500;
        flex-shrink: 0;
    }

    .copy-btn:hover {
        background: #64748b;
        color: #e2e8f0;
    }

    .copy-btn svg {
        width: 14px;
        height: 14px;
    }

    .playground-link {
        color: var(--primary);
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .playground-link:hover {
        color: var(--primary-dark);
        text-decoration: none;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .install-picker {
            max-width: 100%;
            width: 100%;
            align-items: center;
        }

        .install-box {
            width: 100%;
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .install-box {
            font-size: 0.7rem;
            padding: 0.625rem 0.75rem;
            gap: 0.5rem;
        }

        .copy-btn {
            padding: 0.35rem 0.6rem;
            font-size: 0.7rem;
        }
    }`,sourcePath:"components/install.html",templateBindings:["tab","commands"]};h({evaluators:{"tab === 'npm' ? 'active' : ''":{deps:["tab"],fn:n=>n==="npm"?"active":""},"tab === 'cdn' ? 'active' : ''":{deps:["tab"],fn:n=>n==="cdn"?"active":""},"tab==='npm'":{deps:["tab"],fn:n=>n==="npm"},"tab === 'cdn'":{deps:["tab"],fn:n=>n==="cdn"},"commands.cdn":{deps:["commands"],fn:n=>n.cdn}},handlers:{"handler:tab = 'npm'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{n.tab="npm"}},"handler:tab = 'cdn'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{n.tab="cdn"}},"handler:copyCommand('npm')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{(t=>{navigator.clipboard.writeText(n.commands[t]);const e=o.npmCopyBtn,m=e.innerHTML;e.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{e.innerHTML=m},2e3)})("npm")}},"handler:copyCommand('cdn')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{(t=>{navigator.clipboard.writeText(n.commands[t]);const e=o.cdnCopyBtn,m=e.innerHTML;e.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{e.innerHTML=m},2e3)})("cdn")}}},setups:{'state:const commands = {\n        npm: "npm install ladrillosjs",\n        cdn: \'<script src="https://unpkg.com/ladrillosjs@2.1.3/dist/index.js"><\\/script>\',\n    };\n    let tab = \'npm\';\n\n    const copyCommand = (type) => {\n        navigator.clipboard.writeText(commands[type]);\n        const btn = type === "npm" ? $refs.npmCopyBtn : $refs.cdnCopyBtn;\n        const originalHTML = btn.innerHTML;\n        btn.innerHTML =\n            \'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!\';\n        setTimeout(() => {\n            btn.innerHTML = originalHTML;\n        }, 2000);\n    };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p)=>{n.commands??={npm:"npm install ladrillosjs",cdn:'<script src="https://unpkg.com/ladrillosjs@2.1.3/dist/index.js"><\/script>'},n.tab??="npm";const s=i=>{navigator.clipboard.writeText(n.commands[i]);const t=i==="npm"?r.npmCopyBtn:r.cdnCopyBtn,e=t.innerHTML;t.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{t.innerHTML=e},2e3)};n.copyCommand??=s}}}});function v(n){g(f,n)}const u={tagName:"code-block",template:`<div class="code-container">\r
  <div class="code-window">\r
\r
    <if condition="filename">\r
      <div class="code-header">\r
        <div class="code-dots"><span></span><span></span><span></span></div>\r
        <span class="code-title">{filename}</span>\r
\r
        <if condition="copied">\r
          <div class="copied-indicator" id="copiedIndicator">\r
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
            </svg>\r
            Copied\r
          </div>\r
        </if>\r
\r
        <button class="copy-button" onclick="await copyCode()">Copy</button>\r
      </div>\r
    </if>\r
\r
    <div class="code-body">\r
      <pre class="code-content"><code $ref="codeEl"></code></pre>\r
      <if condition="!filename">\r
        <div class="code-actions">\r
          <if condition="copied">\r
            <div class="copied-indicator" id="copiedIndicator">\r
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r
              </svg>\r
              Copied\r
            </div>\r
          </if>\r
          <if condition="!copied">\r
            <button class="copy-button" onclick="await copyCode()">\r
              Copy\r
            </button>\r
          </if>\r
        </div>\r
      </if>\r
    </div>\r
  </div>\r
</div>\r
\r
<slot $ref="slotEl"></slot>`,scripts:[{content:`let filename = null;\r
  let language = null;\r
  let copied = false;\r
\r
  const extToLang = {\r
    js: "javascript", mjs: "javascript", cjs: "javascript",\r
    ts: "typescript", jsx: "javascript", tsx: "typescript",\r
    html: "html", htm: "html", xml: "xml", svg: "xml",\r
    css: "css", scss: "scss", json: "json", md: "markdown",\r
    sh: "bash", bash: "bash", zsh: "bash",\r
    py: "python", rb: "ruby", go: "go", rs: "rust",\r
    yml: "yaml", yaml: "yaml",\r
  };\r
\r
  const innerRe = /(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)/gi;\r
  const source = $host.__originalHTML ?? $host.innerHTML;\r
  const matches = source.match(innerRe);\r
  const raw = matches ? matches.join("") : "";\r
\r
  // Dedent: strip the common leading whitespace from every non-empty line\r
  // so the rendered code doesn't inherit indentation from its host file.\r
  const trimmed = raw.replace(/^[\\r\\n]+/, "").replace(/\\s+$/, "");\r
  const lines = trimmed.split("\\n");\r
  let minIndent = Infinity;\r
  for (const line of lines) {\r
    if (!line.trim()) continue;\r
    const m = line.match(/^[ \\t]*/);\r
    if (m && m[0].length < minIndent) minIndent = m[0].length;\r
  }\r
  if (!isFinite(minIndent)) minIndent = 0;\r
  const html = lines.map((l) => l.slice(minIndent)).join("\\n");\r
\r
  // Resolve language: explicit prop wins, else infer from filename extension, else auto-detect.\r
  let resolvedLang = language;\r
  if (!resolvedLang && filename) {\r
    const ext = filename.split(".").pop()?.toLowerCase();\r
    resolvedLang = extToLang[ext];\r
  }\r
\r
  $refs.codeEl.textContent = html;\r
  if (resolvedLang) {\r
    $refs.codeEl.classList.add(\`language-\${resolvedLang}\`);\r
  }\r
\r
  // Highlight now if hljs is ready; otherwise poll briefly until the CDN\r
  // script finishes loading. Inlined (no helper) because Ladrillos may\r
  // execute statements in separate scopes — closures over locals from\r
  // a setInterval callback can otherwise lose access to them.\r
  if (typeof hljs !== "undefined") {\r
    $refs.codeEl.removeAttribute("data-highlighted");\r
    hljs.highlightElement($refs.codeEl);\r
  } else {\r
    const codeEl = $refs.codeEl;\r
    const start = Date.now();\r
    const iv = setInterval(() => {\r
      if (typeof hljs !== "undefined") {\r
        clearInterval(iv);\r
        if (codeEl) {\r
          codeEl.removeAttribute("data-highlighted");\r
          hljs.highlightElement(codeEl);\r
        }\r
      } else if (Date.now() - start > 5000) {\r
        clearInterval(iv);\r
      }\r
    }, 50);\r
  }\r
\r
  if ($refs.slotEl) $refs.slotEl.remove();\r
\r
  const copyCode = async () => {\r
    const text = html;\r
\r
    if (navigator.clipboard && navigator.clipboard.writeText) {\r
      await navigator.clipboard.writeText(text);\r
      copied = true;\r
      setTimeout(() => (copied = false), 2000);\r
      return;\r
    }\r
\r
    // iOS / fallback for older browsers\r
    const textarea = document.createElement("textarea");\r
    textarea.value = text;\r
    textarea.setAttribute("readonly", "");\r
    textarea.style.position = "absolute";\r
    textarea.style.left = "-9999px";\r
    document.body.appendChild(textarea);\r
    textarea.select();\r
\r
    try {\r
      document.execCommand("copy");\r
      copied = true;\r
      setTimeout(() => (copied = false), 2000);\r
    } catch (err) {\r
      console.error("execCommand fallback failed:", err);\r
    }\r
\r
    document.body.removeChild(textarea);\r
  };`,type:null}],externalScripts:[{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",type:null,external:!0}],externalStyles:[{href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css",rel:"stylesheet"}],styles:`.hljs {\r
    background: transparent !important;\r
  }\r
\r
  /* ============================================\r
   Code Windows\r
   ============================================ */\r
  .code-container {\r
    max-width: 800px;\r
    margin: 0 auto;\r
    width: 100%;\r
  }\r
\r
  .code-window {\r
    position: relative;\r
    background: #020617;\r
    border-radius: 12px;\r
    overflow: hidden;\r
    border: 1px solid #334155;\r
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\r
    max-width: 100%;\r
  }\r
\r
  .code-header {\r
    background: #1e293b;\r
    padding: 0.75rem 1rem;\r
    display: flex;\r
    align-items: center;\r
    gap: 1rem;\r
    border-bottom: 1px solid #334155;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .code-header {\r
      padding: 0.625rem 0.75rem;\r
      gap: 0.75rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .code-header {\r
      padding: 0.5rem;\r
      gap: 0.5rem;\r
      flex-wrap: wrap;\r
    }\r
  }\r
\r
  .code-dots {\r
    display: flex;\r
    gap: 0.5rem;\r
  }\r
\r
  .code-dots span {\r
    width: 12px;\r
    height: 12px;\r
    border-radius: 50%;\r
    background: #334155;\r
  }\r
\r
  .code-dots span:nth-child(1) {\r
    background: #ef4444;\r
  }\r
\r
  .code-dots span:nth-child(2) {\r
    background: #f59e0b;\r
  }\r
\r
  .code-dots span:nth-child(3) {\r
    background: #10b981;\r
  }\r
\r
  .code-title {\r
    color: #94a3b8;\r
    font-size: 0.875rem;\r
    flex: 1;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .code-title {\r
      font-size: 0.75rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .code-title {\r
      font-size: 0.7rem;\r
      flex: 1 1 100%;\r
      order: 2;\r
    }\r
  }\r
\r
  .copy-button {\r
    margin-left: auto;\r
    padding: 0.375rem 0.875rem;\r
    background: rgba(255, 255, 255, 0.06);\r
    border: 1px solid rgba(255, 255, 255, 0.1);\r
    border-radius: 6px;\r
    color: rgba(226, 232, 240, 0.8);\r
    font-size: 0.8125rem;\r
    font-weight: 500;\r
    cursor: pointer;\r
    transition: all 0.2s ease;\r
    letter-spacing: -0.01em;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .copy-button {\r
      padding: 0.375rem 0.75rem;\r
      font-size: 0.75rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .copy-button {\r
      padding: 0.25rem 0.5rem;\r
      font-size: 0.7rem;\r
    }\r
  }\r
\r
  .copy-button:hover {\r
    background: rgba(255, 255, 255, 0.1);\r
    border-color: rgba(255, 255, 255, 0.15);\r
    color: rgba(226, 232, 240, 1);\r
  }\r
\r
  .copy-button:active {\r
    transform: scale(0.97);\r
  }\r
\r
  .copied-indicator {\r
    display: flex;\r
    align-items: center;\r
    gap: 0.5rem;\r
    padding: 0.375rem 0.875rem;\r
    background: rgba(16, 185, 129, 0.1);\r
    border: 1px solid rgba(16, 185, 129, 0.3);\r
    border-radius: 6px;\r
    color: rgba(16, 185, 129, 1);\r
    font-size: 0.8125rem;\r
    font-weight: 500;\r
    letter-spacing: -0.01em;\r
    animation: fadeIn 0.2s ease;\r
  }\r
\r
  .copied-indicator svg {\r
    width: 16px;\r
    height: 16px;\r
  }\r
\r
  @keyframes fadeIn {\r
    from {\r
      opacity: 0;\r
      transform: translateY(-2px);\r
    }\r
\r
    to {\r
      opacity: 1;\r
      transform: translateY(0);\r
    }\r
  }\r
\r
  .code-body {\r
    position: relative;\r
    display: flex;\r
    align-items: center;\r
    width: 100%;\r
    max-width: 100%;\r
    overflow: hidden;\r
  }\r
\r
  .code-content {\r
    flex: 1;\r
    overflow-x: auto;\r
    font-family: "Monaco", "Menlo", "Courier New", monospace;\r
    font-size: 0.875rem;\r
    line-height: 1.6;\r
    width: 100%;\r
    max-width: 100%;\r
    box-sizing: border-box;\r
    padding: 1rem 3rem;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .code-content {\r
      padding: 1rem;\r
      font-size: 0.75rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .code-content {\r
      padding: 0.5rem;\r
      font-size: 0.7rem;\r
    }\r
  }\r
\r
  .code-content code {\r
    color: #f1f5f9;\r
  }\r
\r
  .code-actions {\r
    display: flex;\r
    align-items: center;\r
    padding: 0 1rem 0 0;\r
    flex-shrink: 0;\r
  }\r
\r
  @media (max-width: 480px) {\r
    .code-actions {\r
      padding: 0 0.5rem 0 0;\r
    }\r
  }\r
\r
  .code-actions .copy-button {\r
    margin-left: 0;\r
  }`,sourcePath:"components/code-block.html",templateBindings:["filename"]};h({evaluators:{filename:{deps:["filename"],fn:n=>n},copied:{deps:["copied"],fn:n=>n},"!filename":{deps:["filename"],fn:n=>!n},"!copied":{deps:["copied"],fn:n=>!n}},handlers:{"handler:await copyCode()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:async(n,o,r,a,l,c,d,p,s)=>{await(async()=>{const t=n.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(t),n.copied=!0,setTimeout(()=>n.copied=!1,2e3);return}const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select();try{document.execCommand("copy"),n.copied=!0,setTimeout(()=>n.copied=!1,2e3)}catch(m){console.error("execCommand fallback failed:",m)}document.body.removeChild(e)})()}}},setups:{'state:let filename = null;\r\n  let language = null;\r\n  let copied = false;\r\n\r\n  const extToLang = {\r\n    js: "javascript", mjs: "javascript", cjs: "javascript",\r\n    ts: "typescript", jsx: "javascript", tsx: "typescript",\r\n    html: "html", htm: "html", xml: "xml", svg: "xml",\r\n    css: "css", scss: "scss", json: "json", md: "markdown",\r\n    sh: "bash", bash: "bash", zsh: "bash",\r\n    py: "python", rb: "ruby", go: "go", rs: "rust",\r\n    yml: "yaml", yaml: "yaml",\r\n  };\r\n\r\n  const innerRe = /(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)/gi;\r\n  const source = $host.__originalHTML ?? $host.innerHTML;\r\n  const matches = source.match(innerRe);\r\n  const raw = matches ? matches.join("") : "";\r\n\r\n  // Dedent: strip the common leading whitespace from every non-empty line\r\n  // so the rendered code doesn\'t inherit indentation from its host file.\r\n  const trimmed = raw.replace(/^[\\r\\n]+/, "").replace(/\\s+$/, "");\r\n  const lines = trimmed.split("\\n");\r\n  let minIndent = Infinity;\r\n  for (const line of lines) {\r\n    if (!line.trim()) continue;\r\n    const m = line.match(/^[ \\t]*/);\r\n    if (m && m[0].length < minIndent) minIndent = m[0].length;\r\n  }\r\n  if (!isFinite(minIndent)) minIndent = 0;\r\n  const html = lines.map((l) => l.slice(minIndent)).join("\\n");\r\n\r\n  // Resolve language: explicit prop wins, else infer from filename extension, else auto-detect.\r\n  let resolvedLang = language;\r\n  if (!resolvedLang && filename) {\r\n    const ext = filename.split(".").pop()?.toLowerCase();\r\n    resolvedLang = extToLang[ext];\r\n  }\r\n\r\n  $refs.codeEl.textContent = html;\r\n  if (resolvedLang) {\r\n    $refs.codeEl.classList.add(`language-${resolvedLang}`);\r\n  }\r\n\r\n  // Highlight now if hljs is ready; otherwise poll briefly until the CDN\r\n  // script finishes loading. Inlined (no helper) because Ladrillos may\r\n  // execute statements in separate scopes — closures over locals from\r\n  // a setInterval callback can otherwise lose access to them.\r\n  if (typeof hljs !== "undefined") {\r\n    $refs.codeEl.removeAttribute("data-highlighted");\r\n    hljs.highlightElement($refs.codeEl);\r\n  } else {\r\n    const codeEl = $refs.codeEl;\r\n    const start = Date.now();\r\n    const iv = setInterval(() => {\r\n      if (typeof hljs !== "undefined") {\r\n        clearInterval(iv);\r\n        if (codeEl) {\r\n          codeEl.removeAttribute("data-highlighted");\r\n          hljs.highlightElement(codeEl);\r\n        }\r\n      } else if (Date.now() - start > 5000) {\r\n        clearInterval(iv);\r\n      }\r\n    }, 50);\r\n  }\r\n\r\n  if ($refs.slotEl) $refs.slotEl.remove();\r\n\r\n  const copyCode = async () => {\r\n    const text = html;\r\n\r\n    if (navigator.clipboard && navigator.clipboard.writeText) {\r\n      await navigator.clipboard.writeText(text);\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n      return;\r\n    }\r\n\r\n    // iOS / fallback for older browsers\r\n    const textarea = document.createElement("textarea");\r\n    textarea.value = text;\r\n    textarea.setAttribute("readonly", "");\r\n    textarea.style.position = "absolute";\r\n    textarea.style.left = "-9999px";\r\n    document.body.appendChild(textarea);\r\n    textarea.select();\r\n\r\n    try {\r\n      document.execCommand("copy");\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n    } catch (err) {\r\n      console.error("execCommand fallback failed:", err);\r\n    }\r\n\r\n    document.body.removeChild(textarea);\r\n  };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p)=>{n.filename??=null,n.language??=null,n.copied??=!1,n.extToLang??={js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",jsx:"javascript",tsx:"typescript",html:"html",htm:"html",xml:"xml",svg:"xml",css:"css",scss:"scss",json:"json",md:"markdown",sh:"bash",bash:"bash",zsh:"bash",py:"python",rb:"ruby",go:"go",rs:"rust",yml:"yaml",yaml:"yaml"},n.innerRe??=new RegExp("(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)","gi"),n.source??=o.__originalHTML??o.innerHTML,n.matches??=n.source.match(n.innerRe),n.raw??=n.matches?n.matches.join(""):"",n.trimmed??=n.raw.replace(/^[\r\n]+/,"").replace(/\s+$/,""),n.lines??=n.trimmed.split(`
`),n.minIndent??=1/0;for(const i of n.lines)i.trim()&&(n.m??=i.match(/^[ \t]*/),n.m&&n.m[0].length<n.minIndent&&(n.minIndent=n.m[0].length));isFinite(n.minIndent)||(n.minIndent=0),n.html??=n.lines.map(i=>i.slice(n.minIndent)).join(`
`),n.resolvedLang??=n.language,!n.resolvedLang&&n.filename&&(n.ext??=n.filename.split(".").pop()?.toLowerCase(),n.resolvedLang=n.extToLang[n.ext]),r.codeEl.textContent=n.html,n.resolvedLang&&r.codeEl.classList.add(`language-${n.resolvedLang}`),typeof hljs<"u"?(r.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(r.codeEl)):(n.codeEl??=r.codeEl,n.start??=Date.now(),n.iv??=setInterval(()=>{typeof hljs<"u"?(clearInterval(n.iv),n.codeEl&&(n.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(n.codeEl))):Date.now()-n.start>5e3&&clearInterval(n.iv)},50)),r.slotEl&&r.slotEl.remove();const s=async()=>{const i=n.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(i),n.copied=!0,setTimeout(()=>n.copied=!1,2e3);return}const t=document.createElement("textarea");t.value=i,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select();try{document.execCommand("copy"),n.copied=!0,setTimeout(()=>n.copied=!1,2e3)}catch(e){console.error("execCommand fallback failed:",e)}document.body.removeChild(t)};n.copyCode??=s}}}});function y(n){g(u,n)}const b={tagName:"counter-sample",template:`<div class="counter">\r
  <h2>Count: {count}</h2>\r
  <div class="counter-buttons">\r
    <button onclick="count++">Add</button>\r
    <button onclick="count=0">Reset</button>\r
  </div>\r
</div>`,scripts:[{content:"let count = 0;",type:null}],externalScripts:[],externalStyles:[],styles:`.counter {\r
    text-align: center;\r
    display: flex;\r
    flex-direction: column;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 1.25rem;\r
    width: 100%;\r
  }\r
\r
  .counter h2 {\r
    font-size: 2rem;\r
    font-weight: 700;\r
    color: #0f172a;\r
    letter-spacing: -0.01em;\r
    font-variant-numeric: tabular-nums;\r
  }\r
\r
  .counter-buttons {\r
    display: flex;\r
    gap: 0.625rem;\r
  }\r
\r
  .counter button {\r
    padding: 0.7rem 1.6rem;\r
    color: white;\r
    border: none;\r
    border-radius: 8px;\r
    font-size: 0.9375rem;\r
    font-weight: 600;\r
    cursor: pointer;\r
    transition: all 0.2s ease;\r
  }\r
\r
  .counter button:first-of-type {\r
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);\r
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);\r
  }\r
\r
  .counter button:first-of-type:hover {\r
    transform: translateY(-2px);\r
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);\r
  }\r
\r
  .counter button:last-of-type {\r
    background: #f1f5f9;\r
    color: #334155;\r
    box-shadow: inset 0 0 0 1px #e2e8f0;\r
  }\r
\r
  .counter button:last-of-type:hover {\r
    background: #e2e8f0;\r
    transform: translateY(-2px);\r
  }\r
\r
  .counter button:active {\r
    transform: translateY(0);\r
  }`,sourcePath:"components/samples/counter.html",templateBindings:["count"]};h({evaluators:{count:{deps:["count"],fn:n=>n}},handlers:{"handler:count++":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{n.count++}},"handler:count=0":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p,s)=>{n.count=0}}},setups:{"state:let count = 0;":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(n,o,r,a,l,c,d,p)=>{n.count??=0}}}});function w(n){g(b,n)}export{y as a,w as b,v as d};
