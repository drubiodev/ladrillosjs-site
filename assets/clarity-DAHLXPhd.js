import{a as it,r as Ze,e as De,i as er,o as tr}from"./shared-Bh23cUBg-CQcZmyMA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const nr="modulepreload",rr=function(e){return"/ladrillosjs-site/"+e},yt={},rn=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let f=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=f(r.map(c=>{if(c=rr(c),c in yt)return;yt[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":nr,u||(m.as="script"),m.crossOrigin="",m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),u)return new Promise((y,d)=>{m.addEventListener("load",y),m.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Je="[LadrillosJS]",ie=null;function or(e){ie=e}function ee(){return ie}function Ge(e,t){return`${e}${(function(r){const n=r!==void 0?r:ie;if(!n)return"";const o=[];if(n.tagName&&o.push(`<${n.tagName}>`),n.sourcePath){const i=n.sourcePath.split("/").pop()||n.sourcePath;o.push(`(${i})`)}return o.length>0?` in ${o.join(" ")}`:""})(t)}`}var bt=(function(e){return e[e.EXPRESSION_EVAL_FAILED=101]="EXPRESSION_EVAL_FAILED",e[e.EXPRESSION_SYNTAX_ERROR=102]="EXPRESSION_SYNTAX_ERROR",e[e.EXPRESSION_UNDEFINED_VAR=103]="EXPRESSION_UNDEFINED_VAR",e[e.EXPRESSION_NULL_ACCESS=104]="EXPRESSION_NULL_ACCESS",e[e.SCRIPT_EXTRACT_FAILED=201]="SCRIPT_EXTRACT_FAILED",e[e.SCRIPT_EXECUTION_FAILED=202]="SCRIPT_EXECUTION_FAILED",e[e.EVENT_HANDLER_FAILED=301]="EVENT_HANDLER_FAILED",e[e.DIRECTIVE_ERROR=401]="DIRECTIVE_ERROR",e[e.LOOP_ERROR=402]="LOOP_ERROR",e[e.CONDITIONAL_ERROR=403]="CONDITIONAL_ERROR",e[e.COMPONENT_LOAD_FAILED=501]="COMPONENT_LOAD_FAILED",e[e.COMPONENT_NOT_FOUND=502]="COMPONENT_NOT_FOUND",e[e.COMPONENT_ALREADY_REGISTERED=503]="COMPONENT_ALREADY_REGISTERED",e[e.INVALID_COMPONENT_PATH=504]="INVALID_COMPONENT_PATH",e[e.COMPONENT_REGISTRATION_FAILED=505]="COMPONENT_REGISTRATION_FAILED",e[e.INVALID_COMPONENT_NAME=506]="INVALID_COMPONENT_NAME",e[e.MODULE_LOAD_FAILED=601]="MODULE_LOAD_FAILED",e[e.MODULE_EXECUTION_FAILED=602]="MODULE_EXECUTION_FAILED",e})({});function at(e){return`https://github.com/drubiodev/LadrillosJS/blob/main/docs/21-error-handling.md#ljs${e}`}function on(e){return`LJS${e}`}var Te=class extends Error{code;docsUrl;componentContext;hint;constructor(e,t,r={}){const n=at(t);super(`[${on(t)}] ${Ge(e,r.context)} See ${n}`,r.cause!==void 0?{cause:r.cause}:void 0),this.name="LadrillosError",this.code=t,this.docsUrl=n,this.componentContext=r.context??null,this.hint=r.hint}};function Oe(e,t,r,n){const o=n?`[${on(n.code)}] ${Ge(e,t)} See ${at(n.code)}`:Ge(e,t);typeof window<"u"&&typeof console<"u"&&typeof console.log=="function"?console.error(`%c${Je}%c ${o}`,"color: #ff6b35; font-weight: bold","color: inherit; font-weight: normal"):console.error(`${Je} ${o}`),r!==void 0&&typeof console<"u"&&console.error(r),n?new Te(e,n.code,{context:t,hint:n.hint,cause:r}):r instanceof Error||new Error(o,r!==void 0?{cause:r}:void 0)}function te(e,t,r={}){const n=r.context!==void 0?r.context:ie,o=r.errorCode||((s=t)instanceof SyntaxError?102:s instanceof ReferenceError?103:s instanceof TypeError&&(s.message.includes("Cannot read properties of null")||s.message.includes("Cannot read properties of undefined"))?104:101),i=(function(a){if(a instanceof SyntaxError)return"Invalid expression syntax";if(a instanceof ReferenceError){const f=a.message.match(/(\w+) is not defined/);return f?`Undefined variable: "${f[1]}"`:"Undefined variable"}return a instanceof TypeError?a.message.includes("Cannot read properties of null")?"Cannot access property of null":a.message.includes("Cannot read properties of undefined")?"Cannot access property of undefined":"Type error":"Expression evaluation failed"})(t);var s;new Te(i,o,{context:n,cause:t})}function sr(e,t,r){const n=ie;new Te(e,201,{context:n,cause:t}),console.error(`${Je} Script error. See: ${at(201)}`)}function jo(e,t,r,n,o){return new Te(e,t,{context:r!==void 0?r:ie,hint:n,cause:o})}var Y;function ir(e){const t=(function(){if(Y!==void 0)return Y;const r=globalThis.trustedTypes;if(typeof r?.createPolicy!="function")return Y=null,null;try{Y=r.createPolicy("ladrillosjs",{createHTML:n=>n})}catch{Y=null}return Y})();return t?t.createHTML(e):e}var pe={name:"uninstalled",compileEvaluator:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileHandler:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileSetup:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")}},sn=new Set;function ar(e){sn.add(e)}function lr(e){if(e!==pe){pe=e;for(const t of sn)t()}}function cr(e,t){return pe.compileEvaluator(e,t)}function an(e,t,r=!1,n=t){return pe.compileHandler(e,t,r,n)}function ln(e,t,r=t){return pe.compileSetup(e,t,r)}function ur(e){return new Proxy(e,{get(t,r,n){if(r in t){const o=Reflect.get(t,r,n);return typeof o=="function"?o.bind(t):o}if(typeof r=="string")return t.get(r)},set:(t,r,n)=>typeof r=="string"&&(t.set(r,n),!0),has:(t,r)=>typeof r=="string"&&t.has(r)||r in t})}var ze=()=>rn(()=>import("./shared-Fq0F0LAc-B-cH97rV.js").then(e=>e.s),[]).then(e=>e.n).then(e=>e.ladrillos);function ae(e,t){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e.startsWith("/")?new URL(e,window.location.origin).href:e:new URL(e,t).href}function cn(e){return{registerComponent:function(t,r,n=!0,o=!1){const i=ae(r,e);return ze().then(s=>s.registerComponent(t,i,n,o))},registerComponents:function(t){const r=Array.isArray(t)?t.map(n=>({...n,path:ae(n.path,e)})):Object.entries(t).map(([n,o])=>typeof o=="string"?{name:n,path:ae(o,e)}:{name:n,...o,path:ae(o.path,e)});return ze().then(n=>n.registerComponents(r))},$use:function(t,r=!0,n=!1){const o=(function(s){return(s.split("/").pop()?.replace(/\.[^.]+$/,"")||s).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").toLowerCase()})(t),i=ae(t,e);return ze().then(s=>s.registerComponent(o,i,r,n))}}}var Ve=["registerComponent","registerComponents","$use"],ge,vt=new Map,xe=()=>{if(ge===void 0)try{ge=typeof new CSSStyleSheet().replaceSync=="function"}catch{ge=!1}return ge},Ee=e=>e.includes("@import"),_t=new Set,un=e=>{_t.has(e)||_t.add(e)},fn=e=>{let t=vt.get(e);if(t)return t;try{t=new CSSStyleSheet,t.replaceSync(e)}catch{return null}return vt.set(e,t),t},dn=(e,t,r)=>{const n=e.adoptedStyleSheets;n.includes(t)||(e.adoptedStyleSheets=r?[t,...n]:[...n,t])},fr=(e,t,r)=>{if(!t)return;if(xe()&&Ee(t)&&un(t),xe()&&!Ee(t)){const o=fn(t);if(o)return void dn(r?e:document,o,!1)}const n=document.createElement("style");n.textContent=t,r?e.appendChild(n):document.head.appendChild(n)},dr=(e,t,r)=>{if(xe()&&Ee(t)&&un(t),xe()&&!Ee(t)){const o=fn(t);if(o)return void dn(e,o,!0)}const n=document.createElement("style");n.textContent=t,n.setAttribute("data-external-href",r),e.insertBefore(n,e.firstChild)},$t={bindings:/{([^}]+)}/g},pr=globalThis.requestIdleCallback||(e=>setTimeout(e,1)),mr=globalThis.cancelIdleCallback||(e=>clearTimeout(e)),wt=(e=1e4)=>t=>{const r=pr(t,{timeout:e});return()=>mr(r)},pn=e=>(t,r)=>{if((function(o){const{top:i,left:s,bottom:a,right:f}=o.getBoundingClientRect(),{innerHeight:c,innerWidth:u}=window;return(i>0&&i<c||a>0&&a<c)&&(s>0&&s<u||f>0&&f<u)})(r))return void t();const n=new IntersectionObserver(o=>{for(const i of o)if(i.isIntersecting){n.disconnect(),t();break}},e);return n.observe(r),()=>n.disconnect()},hr=e=>t=>{if(!e)return void t();const r=matchMedia(e);if(r.matches)return void t();const n=()=>t();return r.addEventListener("change",n,{once:!0}),()=>r.removeEventListener("change",n)},xt=(e=["click","focusin"])=>{const t=typeof e=="string"?[e]:e;return(r,n)=>{let o=!1;const i=a=>{o||(o=!0,s(),r(),queueMicrotask(()=>{a.target&&a.target instanceof Element&&a.target.dispatchEvent(new a.constructor(a.type,a))}))},s=()=>{for(const a of t)n.removeEventListener(a,i)};for(const a of t)n.addEventListener(a,i,{once:!0,passive:!0});return s}},gr=(e=0)=>t=>{const r=setTimeout(t,e);return()=>clearTimeout(r)},yr=pn({rootMargin:"100px"});function Et(e){const t=e.querySelector(':scope > template[slot="placeholder"]');return t?(t.remove(),t.content.cloneNode(!0)):null}function br(e){const t=e.parentNode;if(!t)return;const r=(function(d){if(d.hasAttribute("eager"))return null;if(d.hasAttribute("interaction")){const b=(d.getAttribute("interaction")||"").trim();if(!b)return xt();const w=b.split(",").map(E=>E.trim()).filter(Boolean);return xt(w.length===1?w[0]:w)}if(d.hasAttribute("media"))return hr(d.getAttribute("media")||"");if(d.hasAttribute("delay"))return gr(Number(d.getAttribute("delay"))||0);if(d.hasAttribute("idle")||d.hasAttribute("idle-timeout")){const b=d.getAttribute("idle-timeout");return b?wt(Number(b)||1e4):wt()}const p={},l=d.getAttribute("margin");l&&(p.rootMargin=l);const g=d.getAttribute("threshold");if(g!==null){const b=Number(g);Number.isNaN(b)||(p.threshold=b)}return Object.keys(p).length>0?pn(p):yr})(e),n=e.getAttribute("src"),o=e.getAttribute("component"),i=new Set(["eager","visible","margin","threshold","idle","idle-timeout","delay","interaction","media","src","component"]),s=document.createComment(n?` <lazy src="${n}"> `:" <lazy> ");if(t.insertBefore(s,e),e.remove(),n){const d=(o||(a=n,(a.split(/[?#]/)[0].split("/").pop()?.replace(/\.[^.]+$/,"")||a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/[_\s]+/g,"-").toLowerCase())).trim();if(!d.includes("-"))return;const p=Et(e),l=()=>{const $=document.createElement(d);for(const S of Array.from(e.attributes))i.has(S.name)||$.setAttribute(S.name,S.value);s.parentNode?.replaceChild($,s)};let g=null;p&&(g=document.createComment(" /lazy-placeholder "),s.parentNode?.insertBefore(g,s.nextSibling),s.parentNode?.insertBefore(p,g));const b=async()=>{try{if(customElements.get(d)||await(async function($,S){return(await rn(()=>import("./shared-Fq0F0LAc-B-cH97rV.js").then(A=>A.s),[]).then(A=>A.n)).ladrillos.registerComponent($,S,!0,!1)})(d,n),g){let $=s.nextSibling;for(;$&&$!==g;){const S=$.nextSibling;$.parentNode?.removeChild($),$=S}g.parentNode?.removeChild(g)}l()}catch{}};if(!r)return void b();const w=document.createElement("span");let E;return w.setAttribute("data-lazy-sentinel",""),w.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(w,s.nextSibling),void(E=r(()=>{E?.(),w.remove(),b()},w))}var a;const f=Et(e),c=document.createDocumentFragment();for(;e.firstChild;)c.appendChild(e.firstChild);const u=document.createComment(" /lazy ");s.parentNode?.insertBefore(u,s.nextSibling),f&&s.parentNode?.insertBefore(f,u);const h=()=>{let d=s.nextSibling;for(;d&&d!==u;){const p=d.nextSibling;d.parentNode?.removeChild(d),d=p}u.parentNode?.insertBefore(c,u)};if(!r)return void h();const m=document.createElement("span");let y;m.setAttribute("data-lazy-sentinel",""),m.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(m,s.nextSibling),m.__lazyContent=c,y=r(()=>{y?.(),m.remove(),h()},m)}function At(e){const t=Array.from(e.querySelectorAll("lazy"));for(const r of t)vr(r)||br(r)}function vr(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Ke(e){const t=[],r=e.querySelectorAll("[data-lazy-sentinel]");for(const n of Array.from(r)){const o=n.__lazyContent;o&&t.push(o)}return t}var ve="data-l-ctrl",_r=new Set(["FOR","IF","ELSE-IF","ELSE","SHOW"]),$r=/<(for|else-if|if|else|show)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi,wr=/<\/(for|else-if|if|else|show)\s*>/gi,xr=/(<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<!--[\s\S]*?-->)/gi,Er=/<\/?(?:for|if|else|show)\b/i;function Ar(e){return Er.test(e)?e.split(xr).map((t,r)=>r%2==1?t:t.replace($r,(n,o,i)=>`<template ${ve}="${o.toLowerCase()}"${i}>`).replace(wr,"</template>")).join(""):e}function mn(e){let t;for(;t=e.querySelector(`template[${ve}]`);){const r=t.ownerDocument.createElement(t.getAttribute(ve));for(const n of Array.from(t.attributes))n.name!==ve&&r.setAttribute(n.name,n.value);r.appendChild(t.content),t.replaceWith(r)}for(const r of Array.from(e.querySelectorAll("template")))mn(r.content)}function Do(e){return _r.has(e.tagName)}var hn=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmouseout","onmousemove","onmouseenter","onmouseleave","onkeydown","onkeyup","onkeypress","onfocus","onblur","onchange","oninput","onsubmit","onreset","onscroll","onload","onerror","ontouchstart","ontouchmove","ontouchend","ontouchcancel","ondragstart","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondrop"],_e=new Set(hn),ne="$bind";function lt(e){const t=e.currentTarget?.__ladrillosBindSync;t&&t.eventType===e.type&&t.sync()}var fe="$ref",ye={forAlias:/([\s\S]*?)\s+(?:in|of)\s+([\s\S]+)$/,forIterator:/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,stripParens:/^\(|\)$/g};function ct(e){return e.replace(/\$/g,"\\$")}var Sr=Object.freeze(["alert","confirm","prompt","console","JSON","Math","Date","Array","Object","String","Number","Boolean","Map","Set","WeakMap","WeakSet","Symbol","BigInt","Promise","Proxy","Reflect","parseInt","parseFloat","isNaN","isFinite","Infinity","NaN","encodeURIComponent","decodeURIComponent","encodeURI","decodeURI","setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","cancelAnimationFrame","requestIdleCallback","cancelIdleCallback","queueMicrotask","fetch","AbortController","AbortSignal","Headers","Request","Response","URL","URLSearchParams","navigator","location","history","localStorage","sessionStorage","crypto","document","window","globalThis","Element","HTMLElement","Event","CustomEvent","EventTarget","TextEncoder","TextDecoder","Blob","File","FileReader","FormData","Error","TypeError","RangeError","SyntaxError","ReferenceError","atob","btoa","structuredClone"]),kr=Object.freeze([]),Nr=new Set(["with","eval","arguments","constructor","prototype","break","case","catch","continue","debugger","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","class","const","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","null","true","false"]),Cr={enter:"Enter",tab:"Tab",esc:"Escape",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",delete:"Delete",backspace:"Backspace",insert:"Insert",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown"},gn=["ctrl","alt","shift","meta"],Lr=["prevent","stop","self","once","passive","capture"],yn={left:0,middle:1,right:2};function ut(e){if(!e.startsWith("$on:"))return null;const t=e.slice(4).split(".");if(t.length===0||!t[0])return null;const r=t[0],n=t.slice(1),o={eventName:r,keyModifiers:[],systemModifiers:[],eventModifiers:[],mouseModifier:null,exact:!1};for(const i of n){const s=i.toLowerCase();s!=="exact"?Lr.includes(s)?o.eventModifiers.push(s):gn.includes(s)?o.systemModifiers.push(s):s in yn?o.mouseModifier=s:o.keyModifiers.push(s):o.exact=!0}return o}function ft(e){const t={};return e.includes("passive")&&(t.passive=!0),e.includes("capture")&&(t.capture=!0),e.includes("once")&&(t.once=!0),t}function Re(e,t){return function(r){t.eventModifiers.includes("self")&&r.target!==r.currentTarget||t.mouseModifier&&r instanceof MouseEvent&&!(function(n,o){return n.button===yn[o]})(r,t.mouseModifier)||(t.systemModifiers.length>0||t.exact)&&(r instanceof KeyboardEvent||r instanceof MouseEvent)&&!(function(n,o,i){const s={ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey,meta:n.metaKey};for(const a of o)if(!s[a])return!1;if(i){for(const a of gn)if(!o.includes(a)&&s[a])return!1}return!0})(r,t.systemModifiers,t.exact)||t.keyModifiers.length>0&&r instanceof KeyboardEvent&&!t.keyModifiers.some(n=>(function(o,i){const s=i.toLowerCase(),a=Cr[s];if(a)return o.key===a;if(s.length===1)return o.key.toLowerCase()===s;const f=s.split("-").map((c,u)=>u===0?c:c.charAt(0).toUpperCase()+c.slice(1)).join("");return o.key.toLowerCase()===s||o.key.toLowerCase()===f.toLowerCase()})(r,n))||(t.eventModifiers.includes("prevent")&&r.preventDefault(),t.eventModifiers.includes("stop")&&r.stopPropagation(),e(r))}}function Ae(e){return e.startsWith("$on:")}var St=new Map,kt=Symbol("reactive-array"),Nt=Symbol("reactive-array-subscribers"),Tr=["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"];function K(e,t){if(e[kt]){const o=e[Nt];return o&&t&&o.add(t),e}const r=new Set;t&&r.add(t);const n=()=>{for(const o of r)o()};return new Proxy(e,{get(o,i){if(i===kt)return!0;if(i===Nt)return r;const s=o[i];return typeof i=="string"&&Tr.includes(i)&&typeof s=="function"?(...a)=>{const f=a.map(u=>Array.isArray(u)?K(u,n):u),c=s.apply(o,f);return n(),c}:Array.isArray(s)?K(s,n):s},set(o,i,s){const a=!isNaN(typeof i=="string"?parseInt(i,10):NaN),f=i==="length",c=Array.isArray(s)?K(s,n):s;return o[i]===c||(o[i]=c,(a||f)&&n()),!0},deleteProperty(o,i){const s=delete o[i];return s&&n(),s}})}function Ct(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function bn(e,t){for(const r of Object.keys(e)){const n=e[r];Array.isArray(n)?e[r]=K(n,t):n&&typeof n=="object"&&!Array.isArray(n)&&bn(n,t)}return e}var Lt=new WeakMap;function Or(e){let t=Lt.get(e);if(t===void 0){try{t=Function.prototype.toString.call(e)}catch{t=""}t.includes("[native code]")&&(t=""),Lt.set(e,t)}return t}function Rr(e,t,r){const n=new Set,o=[],i=new Set;for(const s of r)typeof t[s]=="function"&&Se(e,s)&&o.push(s);for(;o.length>0;){const s=o.pop();if(i.has(s))continue;i.add(s);const a=Or(t[s]);if(a)for(const f of r)f!==s&&Se(a,f)&&(n.add(f),typeof t[f]=="function"&&o.push(f))}return n}function Tt(e,t,r){const n=Object.keys(r);if(n.some(o=>typeof r[o]=="function"))for(const o of e)for(const i of o.bindings)for(const s of Rr(i.raw,r,n))t.get(s)?.add(o)}function Se(e,t){return(function(r){let n=St.get(r);if(!n){const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=new RegExp(`\\b${o}\\b`),St.set(r,n)}return n})(t).test(e)}function Me(e,t,r){if(t.length===0)return e;const n=r?.rewriteDeclarations!==!1,o=[],i=c=>(o.push(c),`__STRING_PLACEHOLDER_${o.length-1}__`);let s="",a=0;for(;a<e.length;){const c=e[a];if(c==="/"&&e[a+1]==="/"){const u=e.indexOf(`
`,a),h=u===-1?e.length:u;s+=e.slice(a,h),a=h;continue}if(c==="/"&&e[a+1]==="*"){const u=e.indexOf("*/",a+2),h=u===-1?e.length:u+2;s+=e.slice(a,h),a=h;continue}if(c==='"'||c==="'"){let u=a+1;for(;u<e.length&&e[u]!==c;)e[u]==="\\"?u+=2:u++;s+=i(e.slice(a,u+1)),a=u+1;continue}if(c==="`"){s+="`",a++;let u=a;for(;a<e.length&&e[a]!=="`";)if(e[a]!=="\\"){if(e[a]==="$"&&e[a+1]==="{"){a>u&&(s+=i(e.slice(u,a))),s+="${",a+=2;const h=a;let m=1;for(;a<e.length&&m>0;){const y=e[a];if(y!=='"'&&y!=="'"){if(y==="`"){a++;let d=0;for(;a<e.length;)if(e[a]!=="\\"){if(e[a]==="`"&&d===0){a++;break}e[a]!=="$"||e[a+1]!=="{"?(e[a]==="}"&&d>0&&d--,a++):(d++,a+=2)}else a+=2;continue}if(y==="{")m++;else if(y==="}"&&(m--,m===0))break;a++}else{for(a++;a<e.length&&e[a]!==y;)e[a]==="\\"?a+=2:a++;a++}}s+=i(Me(e.slice(h,a),t,r)),e[a]==="}"&&a++,s+="}",u=a;continue}a++}else a+=2;a>u&&(s+=i(e.slice(u,a))),s+="`",a++;continue}s+=c,a++}if(n)for(const c of t){const u=new RegExp(`\\b(let|const|var)\\s+(${vn(c)})\\s*=`,"g");s=s.replace(u,`__state__.${c} ??=`)}for(const c of t)s=Ir(s,c);let f=s;for(let c=0;c<o.length;c++)f=f.replace(`__STRING_PLACEHOLDER_${c}__`,()=>o[c]);return f}var Mr=new Set(["return","typeof","case","in","of","yield","await","throw","void","delete","new"]);function Ir(e,t){const r=new RegExp(`(?<![^.]\\.)(?<!__state__\\.)\\b${vn(t)}\\b(?!\\s*\\()`,"g");return e.replace(r,(n,o)=>{if((function(i,s){let a=s-1;const f=a;for(;a>=0&&/\s/.test(i[a]);)a--;if(a===f)return!1;const c=a+1;for(;a>=0&&/[A-Za-z]/.test(i[a]);)a--;const u=i.slice(a+1,c);return u==="let"||u==="const"||u==="var"})(e,o)||(function(i,s,a){if(Mt(i,s+a)!==":")return"value";const f=Rt(i,s-1);if(f===""||f===";"||f==="}"||f==="{")return"key";if(f===","){const c=Ot(i,s);return c!==-1&&i[c]==="{"?"key":"value"}return"value"})(e,o,n.length)==="key")return n;switch((function(i,s,a){const f=Rt(i,s-1),c=Mt(i,s+a);if(f!=="{"&&f!==","||c!==","&&c!=="}")return"none";const u=Ot(i,s);return u===-1||i[u]!=="{"?"none":(function(h,m){let y=m-1;for(;y>=0&&/\s/.test(h[y]);)y--;if(y<0)return"object";const d=h[y];if(d===")"||d===">"&&h[y-1]==="=")return"none";if("=([,:?!&|^~+-*/%<>".includes(d))return"object";if(/[A-Za-z0-9_$]/.test(d)){let p=y;for(;p>=0&&/[A-Za-z0-9_$]/.test(h[p]);)p--;const l=h.slice(p+1,y+1);return l==="let"||l==="const"||l==="var"?"destructuring":Mr.has(l)?"object":"none"}return"none"})(i,u)})(e,o,n.length)){case"object":return`${t}: __state__.${t}`;case"destructuring":return n;default:return`__state__.${t}`}})}function Ot(e,t){let r=0;for(let n=t-1;n>=0;n--){const o=e[n];if(o===")"||o==="]"||o==="}")r++;else if(o==="("||o==="["||o==="{"){if(r===0)return n;r--}}return-1}function Rt(e,t){for(let r=t;r>=0;r--)if(!/\s/.test(e[r]))return e[r];return""}function Mt(e,t){for(let r=t;r<e.length;r++)if(!/\s/.test(e[r]))return e[r];return""}function vn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var _n=e=>e instanceof ShadowRoot?e.host:e;async function Pr(e,t,r,n={},o,i=!1,s,a,f,c=[]){const u=_n(e),h={},m=t.map(d=>d.content).join(`
`);for(const[d,p]of Object.entries(n))h[d]=p;h.__scriptContent=m,h.__componentUrl=s,h.__componentId=a;const y=(function(d,p,l,g){const b=(function(A,N){const _=new Map,v=Object.keys(N);for(const T of v)_.set(T,new Set);for(const T of A)for(const x of T.bindings)for(const k of v)Se(x.raw,k)&&_.get(k).add(T);return Tt(A,_,N),_})(p,d),w=(A,N)=>{const _=b.get(A);if(_)for(const v of _)l(v,N);g&&g()},E=A=>()=>{d.__suspendReactivity?g&&g():w(A,d)},L=A=>{E(A)()};for(const A of Object.keys(d)){const N=d[A];Array.isArray(N)?d[A]=K(N,E(A)):N&&typeof N=="object"&&bn(N,E(A))}const $=new WeakMap,S=(A,N)=>{let _=$.get(A);const v=_?.get(N);if(v)return v;const T=new Proxy(A,{get(x,k){const C=x[k];return typeof k=="string"&&Ct(C)?S(C,N):C},set:(x,k,C)=>typeof k!="string"?(x[k]=C,!0):(k in x&&x[k]===C||(x[k]=Array.isArray(C)?K(C,E(N)):C,d.__suspendReactivity||w(N,d)),!0),deleteProperty(x,k){const C=k in x;return delete x[k],C&&typeof k=="string"&&!d.__suspendReactivity&&w(N,d),!0}});return _||(_=new Map,$.set(A,_)),_.set(N,T),T};return new Proxy(d,{get(A,N){if(N==="__notifyKeyChanged")return L;const _=A[N];return typeof N=="string"&&Ct(_)?S(_,N):_},set(A,N,_){const v=!(N in A);return!v&&A[N]===_||(A[N]=Array.isArray(_)?K(_,E(N)):_,v&&(function(T,x,k,C){k.set(T,new Set);for(const R of x)for(const M of R.bindings)Se(M.raw,T)&&k.get(T).add(R);Tt(x,k,C)})(N,p,b,A),A.__suspendReactivity||w(N,A),!0)}})})(h,r,(d,p)=>Ln(d,p),o);y.__suspendReactivity=!0;try{for(const d of t)Hr(d.content,y,s,a,u,f,c)}finally{y.__suspendReactivity=!1}return u.__state=y,u.__scriptContent=m,u.__componentUrl=s,u.__componentId=a,i||($n(e,y,m,u),Tn(r,y)),y}function jr(e,t,r){const n=_n(e);$n(e,r,n.__scriptContent||"",n),Tn(t,r)}function $n(e,t,r,n){const o=[e,...Ke(e)];for(const i of o){const s=Array.from(i.querySelectorAll("*"));for(const a of s)if(!zr(a)){for(const f of hn){const c=a.getAttribute(f);if(c){a.removeAttribute(f);const u=f.slice(2),h=wn(c,t,r,n);h&&a.addEventListener(u,h)}}Dr(a,t,r,n)}}}function Dr(e,t,r,n){const o=Array.from(e.attributes).filter(i=>Ae(i.name));for(const i of o){const s=ut(i.name);if(!s)continue;const a=i.value;e.removeAttribute(i.name);const f=wn(a,t,r,n);if(!f)continue;const c=Re(f,s),u=ft(s.eventModifiers);e.addEventListener(s.eventName,c,u)}}function zr(e){if(e.hasAttribute("$for")||e.tagName==="FOR")return!0;let t=e.parentElement;for(;t;){if(t.hasAttribute("$for")||t.tagName==="FOR")return!0;t=t.parentElement}return!1}function wn(e,t,r,n){try{const o=n?.__componentUrl,i=n?.__componentId,s=An(o,i),a=pt(),f=["event","__state__","$refs","$host",...a,...s.keys],c=Object.keys(t),u=c.filter(E=>typeof t[E]=="function"),h=c.filter(E=>typeof t[E]!="function"),m=t.__hasModuleScripts===!0,y=h.length>0?`let { ${h.join(", ")} } = __state__;`:"",d=m&&u.length>0?`const { ${u.join(", ")} } = __state__;`:"",p=Me(xn(r,m?u:[]),h,{rewriteDeclarations:!1}),l=h.some(E=>new RegExp(`\\b${E}\\b`).test(e))?h.filter(E=>new RegExp(`\\b${E}\\b`).test(e)).map(E=>`__state__.${E} = ${E};`).join(" "):"",g=/\bawait\b/.test(e)||/\bawait\b/.test(p)||/\basync\b/.test(p),b=o||"ladrillos-event-handler",w=an(f,g?`"use strict"; ${y} ${d} ${p} try { await (async () => { ${e} })(); } finally { ${l} }
//# sourceURL=${b}`:`"use strict"; ${y} ${d} ${p} ${e}; ${l}
//# sourceURL=${b}`,g,`handler:${e}`);return E=>{try{lt(E);const L=[E,t,n&&n.__refs||new Map,n,...a.map(()=>{}),...s.values],$=w(...L);$&&typeof $.catch=="function"&&$.catch(S=>{const A={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,S,{context:A.tagName?A:ee(),errorCode:bt.EVENT_HANDLER_FAILED})})}catch(L){const $={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,L,{context:$.tagName?$:ee(),errorCode:bt.EVENT_HANDLER_FAILED})}}}catch{return n?.tagName&&n.tagName.toLowerCase(),null}}var le=new Map,Fr=500;function xn(e,t=[]){const r=t.join(",")+"\0"+e,n=le.get(r);if(n!==void 0)return n;const o=(function(i,s=[]){const a=[],f=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*\{/g;let c;for(;(c=f.exec(i))!==null;){if(s.includes(c[1]))continue;const h=It(i,c.index);h&&a.push(h)}const u=/(?:const|let)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>\s*\{/g;for(;(c=u.exec(i))!==null;){if(s.includes(c[1]))continue;const h=c.index,m=It(i,h,i.indexOf("{",h+c[0].length-1));m&&a.push(m)}return a.map(h=>h.trim()).join(`;
`)+(a.length>0?";":"")})(e,t);if(le.size>=Fr){const i=le.keys().next().value;i!==void 0&&le.delete(i)}return le.set(r,o),o}function It(e,t,r){let n=0,o=t,i=!1,s="",a=!1;for(let f=r??t;f<e.length;f++){const c=e[f];if(c!=='"'&&c!=="'"&&c!=="`"||(f>0?e[f-1]:"")==="\\"||(i?c===s&&(i=!1):(i=!0,s=c)),!i&&(c==="{"&&(n++,a=!0),c==="}"&&n--,a&&n===0&&c==="}")){o=f+1;break}}return n!==0?null:e.slice(t,o)}function Ur(e,t=[]){const r=Br(e),n=r.map(o=>`__state__.${o} ??= ${o};`).join(`
`);return`${Me(e,[...new Set([...En(e),...t])].filter(o=>!r.includes(o)))}
${n}`}function Hr(e,t,r,n,o,i,s=[]){try{const a=r||"ladrillos-component",f=`
      "use strict";
      ${Ur(e,s)}
//# sourceURL=${a}
    `,c=An(r,n),u=pt(),h=["__state__","$host","$refs",...u,...c.keys],m=[t,o,i,...u.map(()=>{}),...c.values];ln(h,f,`state:${e}`)(...m)}catch(a){sr("Error executing script with reactive state",a)}}function dt(e){const t=e.split(""),r=e.length;let n=0,o=0,i=!1;const s=[],a=()=>s.length>0,f=(p,l)=>{for(let g=p;g<l;g++){const b=t[g];b!==`
`&&b!=="\r"&&(t[g]=" ")}},c=p=>{let l=p;for(;l<r&&e[l]!==`
`;)l++;return l},u=p=>{let l=p+2;for(;l<r-1&&(e[l]!=="*"||e[l+1]!=="/");)l++;return Math.min(r,l+2)},h=(p,l)=>{let g=p+1;for(;g<r;)if(e[g]!=="\\"){if(e[g]===l)return g+1;if(e[g]===`
`)return g;g++}else g+=2;return g},m=p=>{let l=p+1;for(;l<r;)if(e[l]!=="\\"){if(e[l]==="`")return l+1;if(e[l]==="$"&&e[l+1]==="{"){l+=2;let g=1;for(;l<r&&g>0;){const b=e[l];b!=="`"?b!=='"'&&b!=="'"?b!=="/"||e[l+1]!=="/"?b!=="/"||e[l+1]!=="*"?(b==="{"?g++:b==="}"&&g--,l++):l=u(l):l=c(l):l=h(l,b):l=m(l)}continue}l++}else l+=2;return l},y=p=>{let l=p-1;for(;l>=0&&/\s/.test(e[l]);)l--;return l<0||!!"([{,;:!&|?=+-*%^~<>".includes(e[l])||/\b(return|typeof|delete|void|in|of|new|instanceof|throw)$/.test(e.slice(0,l+1))},d=p=>{let l=p+1,g=!1;for(;l<r;){const b=e[l];if(b!=="\\"){if(b==="[")g=!0;else if(b==="]")g=!1;else{if(b==="/"&&!g){l++;break}if(b===`
`)break}l++}else l+=2}for(;l<r&&/[a-zA-Z]/.test(e[l]);)l++;return l};for(;n<r;){const p=e[n];if(p==="/"&&e[n+1]==="/"){const l=c(n);a()&&f(n,l),n=l;continue}if(p==="/"&&e[n+1]==="*"){const l=u(n);a()&&f(n,l),n=l;continue}if(p==='"'||p==="'"){const l=h(n,p);a()&&f(n,l),n=l;continue}if(p==="`"){const l=m(n);a()&&f(n,l),n=l;continue}if(p==="/"&&y(n)){const l=d(n);a()&&f(n,l),n=l;continue}if(p!=="{")if(p!=="}")if(p!=="="||e[n+1]!==">"){if(/[a-zA-Z_$]/.test(p)){const l=n;for(;n<r&&/[a-zA-Z0-9_$]/.test(e[n]);)n++;const g=e.slice(l,n);a()?f(l,n):g==="function"&&(i=!0);continue}a()&&p!==`
`&&p!=="\r"&&(t[n]=" "),n++}else{if(a())t[n]=" ",t[n+1]=" ";else{let l=n+2;for(;l<r;){const g=e[l];if(/\s/.test(g))l++;else if(g!=="/"||e[l+1]!=="/"){if(g!=="/"||e[l+1]!=="*")break;l=u(l)}else l=c(l)}e[l]==="{"&&(i=!0)}n+=2}else a()&&s[s.length-1]===o?s.pop():a()&&(t[n]=" "),o--,n++;else o++,i?(s.push(o),i=!1):a()&&(t[n]=" "),n++}return t.join("")}function En(e){const t=dt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Wr(e){const t=dt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?(?:function\b|\([^()]*\)\s*=>|[a-zA-Z_$][a-zA-Z0-9_$]*\s*=>)/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Br(e){const t=dt(e),r=[],n=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return[...r,...Wr(e)]}function pt(){return kr.filter(e=>!Nr.has(e))}function An(e,t){const r=[],n=[];for(const s of Sr)s in globalThis&&(r.push(s),n.push(globalThis[s]));const o=cn(e||window.location.href);r.push(...Ve),n.push(o.registerComponent,o.registerComponents,o.$use);const i=it(t||"anonymous");return r.push(...Ze),n.push(i.$emit,i.$listen),{keys:r,values:n}}var Q=new Map;ar(()=>Q.clear());var qr=100,Zr=5e3,Sn=/^[A-Za-z_$][\w$]*$/,ue=null,kn=null;function Xe(e,t){try{const r=Object.keys(t),n=[],o=[];for(let i=0;i<r.length;i++){const s=r[i];Sn.test(s)&&(n.push(s),o.push(t[s]))}return Nn(),Ye(n,Cn(n.join(",")),e)(...kn,...o)}catch(r){return te(e,r,{context:ee()}),`{${e}}`}}function Nn(){return ue===null&&(ue=pt(),kn=ue.map(()=>{})),ue}function Cn(e){let t=Q.get(e);if(!t){if(Q.size>=qr){const r=Q.keys().next().value;r!==void 0&&Q.delete(r)}t=new Map,Q.set(e,t)}return t}function Ye(e,t,r){let n=t.get(r);if(!n){if(t.size>=Zr){const o=t.keys().next().value;o!==void 0&&t.delete(o)}n=cr([...ue,...e],r),t.set(r,n)}return n}function Jr(e,t){const r=Nn(),n=Object.keys(e),o=[];for(let d=0;d<n.length;d++)Sn.test(n[d])&&o.push(n[d]);const i=o.join(","),s=Cn(i),a=r.length,f=new Array(a+o.length).fill(void 0),c=()=>{for(let d=0;d<o.length;d++)f[a+d]=e[o[d]]},u=t!==void 0;let h=null,m=null;if(u){c(),h=[],m=[];for(const d of t){const p=o.indexOf(d);p>=0&&(h.push(a+p),m.push(d))}}const y=d=>{try{const p=Ye(o,s,d);return u||c(),p.apply(null,f)}catch(p){return te(d,p,{context:ee()}),`{${d}}`}};return y.sig=i,y.refresh=u?()=>{for(let d=0;d<h.length;d++)f[h[d]]=e[m[d]]}:c,y.compile=d=>{try{return Ye(o,s,d)}catch(p){return te(d,p,{context:ee()}),null}},y.invoke=(d,p)=>{try{return u||c(),d.apply(null,f)}catch(l){return te(p,l,{context:ee()}),`{${p}}`}},y}var Gr=new Set(["disabled","checked","readonly","required","selected","hidden","multiple","autofocus","open","novalidate","formnovalidate","inert","reversed","loop","muted","controls","autoplay","playsinline","default","ismap","allowfullscreen"]);function Ln(e,t){if((function(o){if(!o.isAttribute||!o.attributeName||o.bindings.length!==1)return!1;const i=o.original.trim();return!!/^\{[\s\S]*\}$/.test(i)&&i.slice(1,-1).trim()===o.bindings[0].raw.trim()})(e)){const o=e.element??e.node.parentElement,i=Xe(e.bindings[0].raw,t);return void(o&&(r=i,r===null||typeof r!="object"&&typeof r!="function"?(function(s,a,f){Gr.has(a)?f?s.setAttribute(a,""):s.removeAttribute(a):f!=null?s.setAttribute(a,String(f)):s.removeAttribute(a)})(o,e.attributeName,i):(o.hasAttribute?.(e.attributeName)&&o.removeAttribute(e.attributeName),o[e.attributeName]=i)))}var r;let n=e.original;for(const o of e.bindings){const i=Xe(o.raw,t),s=String(i??"");n=n.replace(`{${o.raw}}`,s)}if(e.isAttribute&&e.attributeName){const o=e.element??e.node.parentElement;o&&o.setAttribute(e.attributeName,n)}else e.node.textContent=n}function Tn(e,t){for(const r of e)Ln(r,t)}function Vr(){const e=Xe;return e.forContext=Jr,e}function On(e){return import(e)}var Pt=new Map,Fe=new Map,Kr=/(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g,Xr=/import\s*\(\s*['"]([^'"]+)['"]\s*\)/g,Yr=[".ts",".tsx",".mts"];function ke(e){return e.startsWith("./")||e.startsWith("../")}function jt(e){return Yr.some(t=>e.endsWith(t))}function Dt(e){return!(e.startsWith("/")||e.startsWith("./")||e.startsWith("../")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))}function Qr(e,t){let r=e;const n=[],o=[];return r=r.replace(Kr,(i,s)=>{if(ke(s)){const a=new URL(s,t).href;return jt(s)&&o.push(s),i.replace(s,a)}return Dt(s)&&n.push(s),i}),r=r.replace(Xr,(i,s)=>{if(ke(s)){const a=new URL(s,t).href;return jt(s)&&o.push(s),`import("${a}")`}return Dt(s)&&n.push(s),i}),r}var zt=/^(?:export\s+)?(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm,eo=["$emit","$listen","$refs","registerComponent","registerComponents","$use"];async function Qe(e,t,r){if(e.external)return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load external script: ${e.src}`)),document.head.appendChild(i)});if(e.type!=="module")return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load script: ${e.src}`)),document.head.appendChild(i)});try{const n=await fetch(e.src);if(!n.ok)throw new Error(`Failed to fetch module: ${e.src}`);const o=Qr(await n.text(),e.src),i=(function(u){const h=(function(g){const b=[];let w;for(zt.lastIndex=0;(w=zt.exec(g))!==null;)b.push(w[1]);const E=/^(?:export\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm;for(;(w=E.exec(g))!==null;)b.includes(w[1])||b.push(w[1]);return b})(u),m=new Set,y=/export\s+(?:let|const|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let d;for(;(d=y.exec(u))!==null;)m.add(d[1]);const p=/export\s*\{([^}]+)\}/g;for(;(d=p.exec(u))!==null;)d[1].split(",").map(g=>g.trim().split(/\s+as\s+/)[0].trim()).forEach(g=>m.add(g));const l=h.filter(g=>!m.has(g));return l.length===0?u:`${u}
export { ${l.join(", ")} };`})((function(u){const h=[];let m=u;if(m=m.replace(/import\s*\{([^}]+)\}\s*from\s*(['"][^'"]+['"])\s*;?/g,(y,d,p)=>{const l=d.split(",").map(b=>b.trim()),g=[];for(const b of l){if(!b)continue;const w=b.match(/^(\w+)\s+as\s+(\w+)$/);if(w){const[,E,L]=w,$=`__raw_${L}`;g.push(`${E} as ${$}`),h.push(`const ${L} = __wrapReactiveArray(${$}, __ladrillos_componentId, "${L}");`)}else{const E=`__raw_${b}`;g.push(`${b} as ${E}`),h.push(`const ${b} = __wrapReactiveArray(${E}, __ladrillos_componentId, "${b}");`)}}return`import { ${g.join(", ")} } from ${p};`}),h.length>0){const y=m.split(`
`);let d=-1;for(let p=0;p<y.length;p++){const l=y[p].trim();(l.startsWith("import ")||l.startsWith("import{"))&&(d=p)}d>=0&&(y.splice(d+1,0,"","// === Reactive Import Wrappers ===",...h,"// === End Reactive Import Wrappers ===",""),m=y.join(`
`))}return m})(o)),s=(function(u){const h=new Set;for(const m of eo){const y=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[\\s,{])${y}(?:\\s+as\\b|[\\s,}=;(])|\\b(?:let|const|var|function)\\s+${y}\\b`,"m").test(u)&&h.add(m)}return h})(o),a=(function(u,h,m=new Set){const y=(d,p)=>m.has(d)?"":p;return`
// === LadrillosJS Framework Helpers (auto-injected) ===
const __ladrillos_componentId = "${u||"anonymous"}";
const __ladrillos_componentUrl = "${h||"unknown"}";

// Shared framework namespace (see src/core/globals.ts). The framework always
// initialises this before generating these helpers; the fallback below only
// exists so this code is safe to run standalone.
if (!globalThis.__ladrillos) {
  globalThis.__ladrillos = {
    bus: globalThis.__ladrillosEventBus || { listeners: new Map(), componentListeners: new Map() },
    stateCallbacks: globalThis.__ladrillosStateCallbacks || new Map(),
    refs: globalThis.__ladrillosRefs || new Map()
  };
  globalThis.__ladrillosEventBus = globalThis.__ladrillos.bus;
  globalThis.__ladrillosStateCallbacks = globalThis.__ladrillos.stateCallbacks;
  globalThis.__ladrillosRefs = globalThis.__ladrillos.refs;
}

// Reactive array symbol
const __REACTIVE_ARRAY = Symbol.for("ladrillos-reactive-array");

// Array mutation methods to intercept
const __ARRAY_METHODS = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse", "fill", "copyWithin"];

// Wrap an array in a reactive proxy. stateKey is the local binding name the
// array is exported/merged into component state under; passing it to the
// component's callback lets mutations refresh the text/attribute bindings
// that depend on that key (not just directives).
const __wrapReactiveArray = (arr, componentId, stateKey) => {
  if (!Array.isArray(arr) || arr[__REACTIVE_ARRAY]) return arr;

  const onMutate = () => {
    const callback = globalThis.__ladrillos.stateCallbacks.get(componentId);
    if (callback) callback(stateKey);
  };

  return new Proxy(arr, {
    get(target, key) {
      if (key === __REACTIVE_ARRAY) return true;
      const value = target[key];
      if (typeof key === "string" && __ARRAY_METHODS.includes(key) && typeof value === "function") {
        return (...args) => {
          const result = value.apply(target, args);
          onMutate();
          return result;
        };
      }
      if (Array.isArray(value)) return __wrapReactiveArray(value, componentId, stateKey);
      return value;
    },
    set(target, key, value) {
      const index = parseInt(key, 10);
      const isIndex = !isNaN(index);
      const isLength = key === "length";
      target[key] = Array.isArray(value) ? __wrapReactiveArray(value, componentId, stateKey) : value;
      if (isIndex || isLength) onMutate();
      return true;
    }
  });
};

const __ladrillos_emit = (eventName, data) => {
  const listeners = globalThis.__ladrillos.bus.listeners.get(eventName);
  if (!listeners || listeners.size === 0) return;
  for (const registration of listeners) {
    try {
      registration.callback(data);
    } catch (error) {
      console.error(\`[LadrillosJS] Error in event listener for "\${eventName}":\`, error);
    }
  }
};
${y("$emit","const $emit = __ladrillos_emit;")}

const __ladrillos_listen = (eventName, callback) => {
  const bus = globalThis.__ladrillos.bus;
  let listeners = bus.listeners.get(eventName);
  if (!listeners) {
    listeners = new Set();
    bus.listeners.set(eventName, listeners);
  }
  const registration = { callback, componentId: __ladrillos_componentId };
  listeners.add(registration);

  // Track by component ID for cleanup
  let componentRegs = bus.componentListeners.get(__ladrillos_componentId);
  if (!componentRegs) {
    componentRegs = new Set();
    bus.componentListeners.set(__ladrillos_componentId, componentRegs);
  }
  componentRegs.add({ event: eventName, registration });

  // Return unsubscribe function
  return () => {
    listeners?.delete(registration);
    if (listeners?.size === 0) bus.listeners.delete(eventName);
    const compRegs = bus.componentListeners.get(__ladrillos_componentId);
    if (compRegs) {
      for (const reg of compRegs) {
        if (reg.registration === registration) {
          compRegs.delete(reg);
          break;
        }
      }
      if (compRegs.size === 0) bus.componentListeners.delete(__ladrillos_componentId);
    }
  };
};
${y("$listen","const $listen = __ladrillos_listen;")}

// Global refs registry (shared across all components)
// Each component gets its own Map, keyed by component ID

// Helper to wrap refs Map in Proxy for cleaner dot notation access
const __createRefsProxy = (map) => new Proxy(map, {
  get(target, prop, receiver) {
    if (prop in target) {
      const value = Reflect.get(target, prop, receiver);
      return typeof value === "function" ? value.bind(target) : value;
    }
    if (typeof prop === "string") return target.get(prop);
    return undefined;
  },
  set(target, prop, value) {
    if (typeof prop === "string") { target.set(prop, value); return true; }
    return false;
  },
  has(target, prop) {
    return typeof prop === "string" ? target.has(prop) || prop in target : prop in target;
  }
});

// Get or create refs Map for this component (wrapped in Proxy)
if (!globalThis.__ladrillos.refs.has(__ladrillos_componentId)) {
  globalThis.__ladrillos.refs.set(__ladrillos_componentId, __createRefsProxy(new Map()));
}

// $refs for this component - supports both $refs.inputEl and $refs.get("inputEl")
const __ladrillos_refs = globalThis.__ladrillos.refs.get(__ladrillos_componentId);
${y("$refs","const $refs = __ladrillos_refs;")}

// Helper to resolve relative paths against component URL
const __resolvePath = (path) => {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
    return path.startsWith("/") ? new URL(path, window.location.origin).href : path;
  }
  return new URL(path, __ladrillos_componentUrl).href;
};

// Helper to convert filename to tag name
const __filenameToTagName = (path) => {
  const filename = path.split("/").pop()?.replace(/\\.[^.]+$/, "") || path;
  return filename.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\\s]+/g, "-").toLowerCase();
};

// registerComponent - Register a child component
const __ladrillos_registerComponent = async (name, path, useShadowDOM = true) => {
  const resolvedPath = __resolvePath(path);
  return globalThis.ladrillosjs.registerComponent({ name, path: resolvedPath, useShadowDOM });
};
${y("registerComponent","const registerComponent = __ladrillos_registerComponent;")}

// registerComponents - Register multiple components at once
const __ladrillos_registerComponents = async (configs) => {
  const resolvedConfigs = configs.map(config => ({
    ...config,
    path: __resolvePath(config.path)
  }));
  return globalThis.ladrillosjs.registerComponents(resolvedConfigs);
};
${y("registerComponents","const registerComponents = __ladrillos_registerComponents;")}

// $use - Shorthand for registerComponent with auto-derived tag name
const __ladrillos_use = async (path, useShadowDOM = true) => {
  const tagName = __filenameToTagName(path);
  return __ladrillos_registerComponent(tagName, path, useShadowDOM);
};
${y("$use","const $use = __ladrillos_use;")}

// === End Framework Helpers ===

`})(t,r||e.src,s)+i,f=new Blob([a],{type:"text/javascript"}),c=URL.createObjectURL(f);try{return await On(c)}finally{URL.revokeObjectURL(c)}}catch(n){throw console.error(`[LadrillosJS] Failed to load external module: ${e.src}`,n),n}}async function to(e){const t=e.filter(r=>r.external);for(const r of t)try{await Qe(r)}catch(n){console.error(`[LadrillosJS] Failed to load external script: ${r.src}`,n)}}var Ft=new Map;async function no(e,t,r){for(const n of e)if(r&&t)try{let o=Ft.get(n.href);if(!o){const i=await fetch(n.href);if(!i.ok){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`);continue}o=await i.text(),Ft.set(n.href,o)}dr(t,o,n.href)}catch(o){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`,o)}else{if(document.querySelector(`link[href="${n.href}"]`))continue;await new Promise(o=>{const i=document.createElement("link");i.rel=n.rel||"stylesheet",i.href=n.href,i.onload=()=>o(),i.onerror=()=>{console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`),o()},document.head.appendChild(i)})}}function ro(e){const t=Pt.get(e);if(t){for(const r of t)URL.revokeObjectURL(r);Pt.delete(e)}}function oo(e){const t=[],r=/import\s+(?:(\{[^}]+\})|(\*\s+as\s+\w+)|(\w+)(?:\s*,\s*(\{[^}]+\}))?)?\s*(?:from\s+)?['"]([^'"]+)['"]/g;let n;for(;(n=r.exec(e))!==null;){const[o,i,s,a,f,c]=n,u={statement:o,specifier:c,imports:[],isDefault:!1,isNamespace:!1,isSideEffect:!1};if(i||s||a||(u.isSideEffect=!0),a&&(u.isDefault=!0,u.imports.push({imported:"default",local:a})),s){u.isNamespace=!0;const m=s.replace(/\*\s+as\s+/,"").trim();u.imports.push({imported:"*",local:m})}const h=i||f;if(h){const m=h.slice(1,-1).split(",").map(y=>y.trim()).filter(Boolean);for(const y of m){const d=y.match(/(\w+)\s+as\s+(\w+)/);u.imports.push(d?{imported:d[1],local:d[2]}:{imported:y,local:y})}}t.push(u)}return t}async function Ut(e){if(Fe.has(e))return Fe.get(e);const t=(async()=>{try{return await On(e)}catch(r){throw console.error(`[LadrillosJS] Failed to fetch module: ${e}`,r),r}})();return Fe.set(e,t),t}function Ht(e,t){return t&&Array.isArray(e)?K(e,t):e}function so(e){return e.replace(/import\s+(?:(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*\{[^}]+\})?\s+from\s+)?['"][^'"]+['"]\s*;?/g,"").trim()}function io(e){return e.replace(/export\s*\{[^}]*\}\s*(?:from\s*['"][^'"]+['"])?\s*;?/g,"").replace(/export\s+\*(?:\s+as\s+\w+)?\s+from\s*['"][^'"]+['"]\s*;?/g,"").replace(/export\s+default\s+/g,"").replace(/export\s+(?=(?:const|let|var|function|class|async)\b)/g,"").trim()}function ao(e){const t=[],r=[],n=e.replace(/`[^`]*`/g,s=>" ".repeat(s.length)).replace(/"(?:[^"\\]|\\.)*"/g,s=>" ".repeat(s.length)).replace(/'(?:[^'\\]|\\.)*'/g,s=>" ".repeat(s.length)).replace(/\/\*[\s\S]*?\*\//g,s=>" ".repeat(s.length)).replace(/\/\/[^\n]*/g,s=>" ".repeat(s.length));let o=0,i=0;for(;i<n.length;){const s=n[i];if(s!=="{")if(s!=="}"){if(o===0){const a=n.slice(i).match(/^(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);if(a){r.push(a[1]),i+=a[0].length;continue}const f=n.slice(i).match(/^(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/);if(f){t.push(f[1]),i+=f[0].length;continue}}i++}else o--,i++;else o++,i++}return{variables:t,functions:r}}async function lo(e,t,r,n,o,i,s){if(e.type!=="module")throw new Error('executeModuleScriptWithReactivity only handles type="module" scripts');const a=e.content,f=e.resolvedImports?Object.fromEntries(Object.entries(e.resolvedImports).map(([l,g])=>[l,Ht(g,i)])):await(async function(l,g,b){const w=oo(l),E={};for(const L of w){if(L.isSideEffect){await Ut(ke(L.specifier)?new URL(L.specifier,g).href:L.specifier);continue}const $=ke(L.specifier)?new URL(L.specifier,g).href:L.specifier;try{const S=await Ut($);for(const A of L.imports){let N;N=A.imported==="*"?S:A.imported==="default"?S.default:S[A.imported],E[A.local]=Ht(N,b)}}catch{}}return E})(a,t,i);if(o){const l=new Set([...Ve,...Ze,"ladrillosjs","$host","$refs","event","state"]);for(const[g,b]of Object.entries(f))l.has(g)||g in o||(o[g]=b)}const c=io(so(a)),{variables:u,functions:h}=ao(c),m=Me(c,u),y=Object.keys(f),d=Object.values(f),p=`
    "use strict";
    return (async () => {
      ${m}
      ${h.length>0?`return { ${h.join(", ")} };`:"return {};"}
    })();
  `;try{const l=["console","alert","Math","JSON","Date","Array","Object","String","Number","Boolean","Promise","setTimeout","setInterval","clearTimeout","clearInterval"],g=l.map(C=>globalThis[C]),b=["$refs","__state__","$host"],w=[n||new Map,o||{},s],E=cn(t),L=[E.registerComponent,E.registerComponents,E.$use],$=it(r||"anonymous"),S=[$.$emit,$.$listen],A={...globalThis.ladrillosjs||{},registerComponent:E.registerComponent,registerComponents:E.registerComponents},N={registerComponent:E.registerComponent,registerComponents:E.registerComponents,$use:E.$use,$emit:$.$emit,$listen:$.$listen,ladrillosjs:A},_=new Set(y),v=[...y],T=y.map((C,R)=>C in N?N[C]:d[R]),x=(C,R)=>{for(let M=0;M<C.length;M++){const I=C[M];_.has(I)||(_.add(I),v.push(I),T.push(R[M]))}};x(l,g),x(Ve,L),x(Ze,S),x(b,w),x(["ladrillosjs"],[A]);const k=await ln(v,p,`module:${a}`)(...T);return{...o||{},...k||{}}}catch(l){throw console.error("[LadrillosJS] Failed to execute module script:",l),console.error("Original code:",c),console.error("Transformed code:",m),console.error("Imports:",f),l}}async function co(e,t,r,n,o,i,s,a){const f={},c=e.filter(m=>m.type==="module"),u=t.filter(m=>m.type==="module"),h=t.filter(m=>m.type!=="module");for(const m of h)try{await Qe(m,n,r)}catch(y){console.error("[LadrillosJS] External script failed:",m.src,y)}for(const m of u)try{const y=await Qe(m,n,r);if(y&&typeof y=="object")for(const[d,p]of Object.entries(y))d!=="default"&&(f[d]=p,i&&(i[d]=p))}catch(y){console.error("[LadrillosJS] External module script failed:",m.src,y)}for(const m of c)try{const y=await lo(m,r,n,o,i,s,a);Object.assign(f,y)}catch(y){console.error("[LadrillosJS] Module script failed:",y)}return f}function Wt(e){const t=e.trim(),r=(function(o){const i=(function(f){let c=0,u=0,h=0,m=!1,y=!1,d=!1,p=!1;for(let l=0;l<f.length;l++){const g=f[l];if(p)p=!1;else if(g!=="\\")if(y||d||g!=="'")if(m||d||g!=='"')if(m||y||g!=="`"){if(!(m||y||d)&&(g==="("?c++:g===")"?c=Math.max(0,c-1):g==="["?u++:g==="]"?u=Math.max(0,u-1):g==="{"?h++:g==="}"&&(h=Math.max(0,h-1)),g==="("&&c===0&&u===0&&h===0))return l}else d=!d;else y=!y;else m=!m;else p=!0}return-1})(o);if(i<0)return null;const s=(function(f,c){let u=0,h=!1,m=!1,y=!1,d=!1;for(let p=c;p<f.length;p++){const l=f[p];if(d)d=!1;else if(l!=="\\")if(m||y||l!=="'")if(h||y||l!=='"')if(h||m||l!=="`"){if(!(h||m||y)){if(l==="(")u++;else if(l===")"){if(u--,u===0)return p;if(u<0)return-1}}}else y=!y;else m=!m;else h=!h;else d=!0}return-1})(o,i);if(s<0||o.slice(s+1).trim().length!==0)return null;const a=Bt(o.slice(0,i).trim());return a?{calleePath:a,args:uo(o.slice(i+1,s))}:null})(t);if(r)return{raw:t,path:r.calleePath,isFunction:!0,isExpression:!0,functionArgs:r.args};const n=Bt(t);return n?{raw:t,path:n,isFunction:!1,isExpression:!1}:{raw:t,path:[],isExpression:!0}}function Bt(e){return/^[$A-Z_][0-9A-Z_$]*(?:\s*\.\s*[$A-Z_][0-9A-Z_$]*)*$/i.test(e)?e.split(".").map(t=>t.trim()).filter(t=>t.length>0):null}function uo(e){const t=[];let r="",n=0,o=0,i=0,s=!1,a=!1,f=!1,c=!1;for(let h=0;h<e.length;h++){const m=e[h];if(c)r+=m,c=!1;else if(m!=="\\")if(a||f||m!=="'")if(s||f||m!=='"')if(s||a||m!=="`"){if(!s&&!a&&!f&&(m==="("?n++:m===")"?n=Math.max(0,n-1):m==="["?o++:m==="]"?o=Math.max(0,o-1):m==="{"?i++:m==="}"&&(i=Math.max(0,i-1)),m===","&&n===0&&o===0&&i===0)){const y=r.trim();y.length>0&&t.push(y),r="";continue}r+=m}else f=!f,r+=m;else a=!a,r+=m;else s=!s,r+=m;else r+=m,c=!0}const u=r.trim();return u.length>0&&t.push(u),t}var qt=e=>{const t=document.createElement("template");return t.innerHTML=ir(Ar(e)),mn(t.content),t};function Zt(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null);let n;for(;n=r.nextNode();){if(Jt(n)||Gt(n))continue;const i=n.textContent;if(!i)continue;const s=[...i.matchAll($t.bindings)];if(s.length>0){const a=i,f=s.map(c=>Wt(c[1].trim()));t.push({node:n,bindings:f,original:a})}}const o=(function(i){const s=[],a=["$bind","$ref","$no:bind","condition","each","key","track-by"],f=Array.from(i.querySelectorAll("*"));for(const c of f)if(c.tagName!=="FOR"&&!Jt(c)&&!c.hasAttribute("$no:bind")&&!Gt(c))for(const u of Array.from(c.attributes)){if(a.includes(u.name))continue;const h=[...u.value.matchAll($t.bindings)];if(h.length>0){const m=document.createTextNode(u.value),y=h.map(d=>Wt(d[1].trim()));s.push({node:m,bindings:y,original:u.value,isAttribute:!0,attributeName:u.name,element:c})}}return s})(e);return t.push(...o),t}function Jt(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Gt(e){let t=e.parentElement;for(;t;){if(t.hasAttribute&&t.hasAttribute("$no:bind"))return!0;t=t.parentElement}return!1}var re="FOR",Rn="ELSE-IF",Mn="ELSE";function Ne(e){const t=e.trim();return t.startsWith("{")&&t.endsWith("}")?t.slice(1,-1).trim():t}function fo(e,t){const r=Array.from(e.querySelectorAll(`[${ct(fe)}]`));for(const n of r){const o=n.getAttribute(fe);o&&(t.refs.set(o,n),n.removeAttribute(fe))}}function po(e,t){const r=Array.from(e.querySelectorAll("for"));for(const n of r){if(!e.contains(n))continue;const o=In(n,e);o&&t.loops.push(o)}}function In(e,t){const r=e.getAttribute("each")||e.getAttribute("of")||"";if(!r)return null;const n=(function(f){const c=f.match(ye.forAlias);if(!c)return null;let u,[,h,m]=c;h=h.trim(),m=m.trim();const y=m.match(/\s+track\s+by\s+(.+)$/i);y&&(u=y[1].trim(),m=m.slice(0,y.index).trim());const d=h.replace(ye.stripParens,"").trim(),p=d.match(ye.forIterator);let l,g,b;return p?(l=d.replace(ye.forIterator,"").trim(),g=p[1]?.trim(),b=p[2]?.trim()):l=d,{item:l,index:g||b,key:u,array:m}})(r);if(!n)return null;const o=e.getAttribute("key")||e.getAttribute("track-by")||n.key,i=(function(f){const c=[];for(const h of Array.from(f.childNodes))(h.nodeType!==Node.TEXT_NODE||h.textContent?.trim())&&c.push(h);if(c.length===0)return null;if(c.length===1&&c[0].nodeType===Node.ELEMENT_NODE&&c[0].tagName!==re)return c[0];const u=document.createElement("span");u.style.display="contents";for(const h of Array.from(f.childNodes))u.appendChild(h);return u})(e);if(!i)return null;const s=document.createComment(` <for> ${r} `),a=e.parentElement||t;return a.insertBefore(s,e),e.remove(),{template:i,expression:r,itemName:n.item,indexName:n.index,arrayName:n.array,keyAttribute:o,placeholder:s,renderedElements:[],originalParent:a,hasConditionals:i.querySelector("IF")!==null,hasNestedLoops:i.querySelector(re)!==null}}function Ie(e){let t=e.parentElement;for(;t;){if(t.tagName===re)return!0;t=t.parentElement}return!1}function mo(e,t){const r=Array.from(e.querySelectorAll("if"));for(const n of r){if(Ie(n))continue;const o=[],i=Ne(n.getAttribute("condition")||""),s=document.createComment(` <if> ${i} `),a=n.parentElement||e,f=n.nextSibling;a.insertBefore(s,n),o.push(Ue(n,i,"if",s,a,f));let c=n.nextElementSibling;for(;c;){const u=c.tagName;if(u!==Rn){if(u===Mn){o.push(Ue(c,"","else",s,a,c.nextSibling)),c.remove();break}break}{const h=Ne(c.getAttribute("condition")||""),m=c.nextElementSibling;o.push(Ue(c,h,"else-if",s,a,c.nextSibling)),c.remove(),c=m}}n.remove();for(const u of o)u.group=o;t.conditionals.push(o)}}function Ue(e,t,r,n,o,i){return e.removeAttribute("condition"),e.style.display="contents",{element:e,condition:t,type:r,placeholder:n,group:[],originalParent:o,nextSibling:i}}function ho(e,t){const r=Array.from(e.querySelectorAll("show"));for(const n of r){if(!n.parentNode||Ie(n))continue;const o=Ne(n.getAttribute("condition")||""),i=n;i.style.display="contents",t.showElements.push({element:i,expression:o,originalDisplay:"contents"}),n.removeAttribute("condition")}}function go(e,t){const r=Array.from(e.querySelectorAll(`[${ct(ne)}]`));for(const n of r){const o=n.getAttribute(ne);if(!o||yo(n))continue;const i={element:n,path:o.split("."),raw:o,isContentEditable:n.hasAttribute("contenteditable")};t.twoWayBindings.push(i),n.removeAttribute(ne)}}function yo(e,t){return Ie(e)}function Pn(e,t,r,n){(globalThis.__P__??=[]).push({arr:e.arrayName,scope:n?Object.keys(n):null,scopeNames:e.scopeNames,nested:e.hasNestedLoops});const o=r(e.arrayName,n?{...t,...n}:t);if(!o||(i=o)==null||!Array.isArray(i)&&typeof i[Symbol.iterator]!="function"&&typeof i!="object"){for(const _ of e.renderedElements)_.remove();return e.renderedElements=[],void(e.previousItems=[])}var i;const s=Array.from(o),a=e.previousItems||[],f=e.renderedElements;e.keyGetter||(e.keyGetter=(function(_,v){if(!_)return(x,k)=>k;const T=_.startsWith(v+".")?_.slice(v.length+1).split("."):_.split(".");return x=>{let k=x;for(const C of T){if(k==null)return;k=k[C]}return k}})(e.keyAttribute,e.itemName));const c=(function(_){const v=_.__scriptContent;return{..._,__reactiveState__:_,__scriptContent__:v||"",__componentUrl__:_.__componentUrl||""}})(t);n&&Object.assign(c,n),c[e.itemName]=null,e.indexName&&(c[e.indexName]=0);const u=typeof r.forContext=="function"?r.forContext(c,e.indexName?[e.itemName,e.indexName]:[e.itemName]):_=>r(_,c),h=(_,v)=>{c[e.itemName]=_,e.indexName&&(c[e.indexName]=v),u.refresh?.()},m=e.indexName?[e.itemName,e.indexName]:[e.itemName],y=e.scopeNames?.length?[...e.scopeNames,...m]:m;let d=null;const p=()=>d??=Bn(t,y),l=(function(_){const v=_.match(/^\s*([A-Za-z_$][\w$]*)/);return v?v[1]:null})(e.arrayName),g=l!==null&&Object.prototype.hasOwnProperty.call(t,l)?l:n?.[$e]??l,b=(_,v,T)=>{const x=_[Kt];if(!x)return;const k=((C,R)=>{const M=n?{...n}:{};return M[e.itemName]=C,e.indexName&&(M[e.indexName]=R),g&&(M[$e]=g),M})(v,T);for(const C of x)Pn(C,t,r,k)},w=(_,v,T)=>{const x=_[Ce];x&&(x[e.itemName]=v,e.indexName&&(x[e.indexName]=T))},E=(function(_){let v=Qt.get(_);return v===void 0&&(v=(function(T){if(T.hasConditionals||T.template.querySelector(re)!==null)return null;const x=[],k=[],C=[],R=[],M=[],I=F=>{if(F.nodeType===Node.ELEMENT_NODE){const U=F.attributes;for(let j=0;j<U.length;j++){const O=U[j];if(_e.has(O.name))R.push({path:M.slice(),attrName:O.name,eventName:O.name.slice(2),code:Le(O.value),directive:null});else if(Ae(O.name)){const P=ut(O.name);P&&R.push({path:M.slice(),attrName:O.name,eventName:P.eventName,code:Le(O.value),directive:P,options:ft(P.eventModifiers)})}else O.name==="$bind"?C.push({path:M.slice(),expr:O.value}):O.value.includes("{")&&k.push({path:M.slice(),name:O.name,parsed:se(O.value)})}}else if(F.nodeType===Node.TEXT_NODE){const U=F.textContent;U&&U.includes("{")&&x.push({path:M.slice(),parsed:se(U)})}const q=F.childNodes;for(let U=0;U<q.length;U++)M.push(U),I(q[U]),M.pop()};return I(T.template),{texts:x,attrs:k,binds:C,handlers:R,delegated:null,delegatedEvents:[]}})(_),Qt.set(_,v)),v})(e),L=(_,v)=>{const T=e.template.cloneNode(!0);h(_,v);const x=Object.create(p().proto);return n&&Object.assign(x,n),x[e.itemName]=_,e.indexName&&(x[e.indexName]=v),g&&(x[$e]=g),T[Ce]=x,e.hasNestedLoops&&(T[Kt]=(function(k,C){const R=[];for(const M of Array.from(k.querySelectorAll(re))){if(!M.parentNode||bo(M,k))continue;const I=In(M,k);I&&(I.scopeNames=C,R.push(I))}return R})(T,y)),E?((function(k,C,R,M,I,H){const W=R.invoke!==void 0&&R.sig!==void 0,B=j=>{let O=k;for(let P=0;P<j.length;P++)O=O.childNodes[j[P]];return O},F=new Array(C.texts.length);for(let j=0;j<C.texts.length;j++){const{path:O,parsed:P}=C.texts[j],D=B(O);D.__originalTemplate=D.textContent;const{statics:z,exprs:Z}=P,V=W?oe(P,R):null;let X=z[0];for(let J=0;J<Z.length;J++){const G=V!==null?V[J]:null,me=G!==null?R.invoke(G,Z[J]):R(Z[J]);X+=String(me??"")+z[J+1]}D.textContent=X,F[j]={node:D,parsed:P}}const q=new Array(C.attrs.length);for(let j=0;j<C.attrs.length;j++){const{path:O,name:P,parsed:D}=C.attrs[j],z=B(O).getAttributeNode(P);z.__originalTemplate=z.value;const{statics:Z,exprs:V}=D,X=W?oe(D,R):null;let J=Z[0];for(let G=0;G<V.length;G++){const me=X!==null?X[G]:null,he=me!==null?R.invoke(me,V[G]):R(V[G]);J+=(he!==null&&typeof he=="object"?JSON.stringify(he):String(he??""))+Z[G+1]}z.value=J,q[j]={attr:z,parsed:D}}const U=[];if(C.binds.length>0){const j=I();for(const O of C.binds){const P=B(O.path);P.removeAttribute(ne);const D=Zn(P,O.expr,M,j,R);D&&U.push(D)}}if(C.handlers.length>0||C.delegated!==null){const j=I();for(const O of C.handlers){const P=B(O.path);P.removeAttribute(O.attrName);const D=mt(O.code,M,j);D&&(O.directive?P.addEventListener(O.eventName,Re(D,O.directive),O.options):P.addEventListener(O.eventName,D))}if(C.delegated!==null){k[zn]=H;for(const O of C.delegated){const P=B(O.path);for(const D of O.entries)P.removeAttribute(D.attrName);P[Dn]=O.stamp}(function(O,P,D){let z=Yt.get(O);z||(z={container:O.placeholder.parentNode??O.originalParent,setup:P,events:new Set},Yt.set(O,z)),z.setup=P;for(const Z of D)if(!z.events.has(Z)){z.events.add(Z);const V=z;z.container.addEventListener(Z,X=>vo(X,O,V))}})(H,j,C.delegatedEvents)}}k[de]={texts:F,attrs:q,conds:[],binds:U}})(T,E,u,x,p,e),b(T,_,v),T):(e.hasConditionals&&Hn(T,c,r,u),Wn(T,c,r,u,x,p),b(T,_,v),T)},$=new Array(s.length),S=new Array(s.length);if(s.length===a.length&&f.length===s.length){let _=!0;for(let v=0;v<s.length;v++)if(s[v]!==a[v]){_=!1;break}if(_){for(let v=0;v<s.length;v++)h(s[v],v),w(f[v],s[v],v),He(f[v],c,r,u,p),b(f[v],s[v],v);return void(e.previousItems=s)}}if(e.keyAttribute){const _=new Map,v=new Map;for(let x=0;x<a.length;x++){const k=e.keyGetter(a[x],x);v.set(k,x),f[x]&&_.set(k,f[x])}const T=new Set;for(let x=0;x<s.length;x++)T.add(e.keyGetter(s[x],x));for(const[x,k]of _)T.has(x)||(k.remove(),_.delete(x));for(let x=0;x<s.length;x++){const k=s[x],C=e.keyGetter(k,x),R=_.get(C);R?(h(k,x),w(R,k,x),He(R,c,r,u,p),b(R,k,x),$[x]=R,S[x]=v.get(C)??-1):($[x]=L(k,x),S[x]=-1)}}else{const _=Math.min(a.length,s.length);for(let v=0;v<s.length;v++)v<_?(h(s[v],v),w(f[v],s[v],v),He(f[v],c,r,u,p),b(f[v],s[v],v),$[v]=f[v],S[v]=v):($[v]=L(s[v],v),S[v]=-1);for(let v=_;v<f.length;v++)f[v]?.remove()}const A=(function(_){const v=_.length,T=new Set;if(v===0)return T;let x=-1,k=!0;for(let I=0;I<v;I++){const H=_[I];if(!(H<0)){if(H<=x){k=!1;break}x=H}}if(k){for(let I=0;I<v;I++)_[I]>=0&&T.add(I);return T}const C=[],R=new Array(v).fill(-1);for(let I=0;I<v;I++){const H=_[I];if(H<0)continue;let W=0,B=C.length;for(;W<B;){const F=W+B>>1;_[C[F]]<H?W=F+1:B=F}W>0&&(R[I]=C[W-1]),C[W]=I}let M=C.length>0?C[C.length-1]:-1;for(;M!==-1;)T.add(M),M=R[M];return T})(S),N=e.placeholder.parentNode;if(N){let _=e.placeholder;for(let v=0;v<$.length;v++){const T=$[v];A.has(v)||_.nextSibling!==T&&N.insertBefore(T,_.nextSibling),_=T}}e.renderedElements=$,e.previousItems=[...s]}var Vt=new Map;function oe(e,t){if(e.fnsSig!==t.sig){const r=new Array(e.exprs.length);for(let n=0;n<e.exprs.length;n++)r[n]=t.compile(e.exprs[n]);e.fns=r,e.fnsSig=t.sig}return e.fns}function se(e){let t=Vt.get(e);if(t)return t;const r=[],n=[],o=/\{([^}]+)\}/g;let i,s=0;for(;i=o.exec(e);)r.push(e.slice(s,i.index)),n.push(i[1].trim()),s=i.index+i[0].length;return r.push(e.slice(s)),t={statics:r,exprs:n},Vt.set(e,t),t}var de="__ladrillosBindingCache",Ce="__ladrillosLoopCtx",jn="__ladrillosLoopBind",$e="__ladrillosLoopRoot",Kt="__ladrillosLoopNested";function bo(e,t){let r=e.parentElement;for(;r&&r!==t;){if(r.tagName===re)return!0;r=r.parentElement}return!1}function Xt(e){const t=[],r=[],n=[],o=[],i=f=>{const c=f[jn];c&&n.push(c);const u=f.attributes;for(let h=0;h<u.length;h++){const m=u[h].__originalTemplate;m&&r.push({attr:u[h],parsed:se(m)})}};i(e);const s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let a;for(;a=s.nextNode();)if(a.nodeType===Node.TEXT_NODE){const f=a.__originalTemplate;f&&t.push({node:a,parsed:se(f)})}else a.nodeType===Node.ELEMENT_NODE?i(a):a[Pe]&&o.push(a);return{texts:t,attrs:r,conds:o,binds:n}}var Dn="__ladrillosDelegated",zn="__ladrillosLoopOwner",Yt=new WeakMap;function vo(e,t,r){const n=r.container,o=[];let i=null,s=e.target;for(;s&&s!==n;){const a=s[Dn];if(a&&a.owner===t&&o.push(a.entries),s[zn]===t){i=s[Ce]??null;break}s=s.parentNode}if(i!==null&&o.length!==0){for(const a of o)for(const f of a)if(f.eventName===e.type&&(_o(f,e,i,r.setup),e.cancelBubble))return}}function _o(e,t,r,n){const o=qn(e.code,n);if(!o)return;const i=s=>{try{lt(s),o(s,r,n.reactiveState,n.emit,n.listen)}catch(a){Oe(`Error in loop event handler: ${e.code}`,null,a)}};e.directive?Re(i,e.directive)(t):i(t)}var Qt=new WeakMap;function He(e,t,r,n=i=>r(i,t),o){let i=e[de];i||(i=Xt(e),e[de]=i),i.conds.length>0&&(function(u,h,m,y,d,p){let l=!1;for(const g of u){const b=g[Pe],w=Fn(b.branches,y);if(w!==b.currentIndex&&(l=!0,b.currentEl&&b.currentEl.parentNode&&b.currentEl.remove(),b.currentEl=null,b.currentIndex=-1,w>=0)){const E=Un(b.branches[w]);g.parentNode.insertBefore(E,g.nextSibling),b.currentIndex=w,b.currentEl=E,Hn(E,h,m,y),Wn(E,h,m,y,d,p)}}return l})(i.conds,t,r,n,e[Ce]??t,o)&&(i=Xt(e),e[de]=i);const s=n.invoke!==void 0&&n.sig!==void 0,a=i.texts;for(let u=0;u<a.length;u++){const{node:h,parsed:m}=a[u],{statics:y,exprs:d}=m,p=s?oe(m,n):null;let l=y[0];for(let g=0;g<d.length;g++){const b=p!==null?p[g]:null,w=b!==null?n.invoke(b,d[g]):n(d[g]);l+=String(w??"")+y[g+1]}h.textContent!==l&&(h.textContent=l)}const f=i.attrs;for(let u=0;u<f.length;u++){const{attr:h,parsed:m}=f[u],{statics:y,exprs:d}=m,p=s?oe(m,n):null;let l=y[0];for(let g=0;g<d.length;g++){const b=p!==null?p[g]:null,w=b!==null?n.invoke(b,d[g]):n(d[g]);l+=(w!==null&&typeof w=="object"?JSON.stringify(w):String(w??""))+y[g+1]}h.value!==l&&(h.value=l)}const c=i.binds;for(let u=0;u<c.length;u++){const{element:h,expr:m,isContentEditable:y}=c[u];je(h,n(m),y)}}var Pe="__ladrillosLoopCond";function Fn(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(n.type==="else")return r;try{if(t(n.condition))return r}catch{}}return-1}function Un(e){const t=document.createElement("span");return t.style.display="contents",t.appendChild(e.template.content.cloneNode(!0)),t}function We(e,t){const r=document.createElement("template");for(const n of Array.from(e.childNodes))r.content.appendChild(n.cloneNode(!0));return{type:t,condition:t==="else"?"":Ne(e.getAttribute("condition")||""),template:r}}function Hn(e,t,r,n){const o=n??(s=>r(s,t));let i=1e4;for(;i-- >0;){let s=null;const a=e.querySelectorAll("IF");for(let d=0;d<a.length;d++){const p=a[d];if(p.parentNode&&!Ie(p)){s=p;break}}if(!s)return;const f=[];f.push(We(s,"if"));const c=[];let u=s.nextElementSibling;for(;u;){if(u.tagName!==Rn){if(u.tagName===Mn){f.push(We(u,"else")),c.push(u);break}break}f.push(We(u,"else-if")),c.push(u),u=u.nextElementSibling}const h=document.createComment(" <if> (loop) "),m={branches:f,currentIndex:-1,currentEl:null};h[Pe]=m,s.parentNode.insertBefore(h,s),s.remove();for(const d of c)d.remove();const y=Fn(f,o);if(y>=0){const d=Un(f[y]);h.parentNode.insertBefore(d,h.nextSibling),m.currentIndex=y,m.currentEl=d}}}function Wn(e,t,r,n,o,i){const s=[],a=[],f=[],c=[],u=n??(typeof r.forContext=="function"?r.forContext(t):w=>r(w,t)),h=o??t;let m=null;const y=i??(()=>m??=(function(w){const E=w.__reactiveState__??w;return Bn(E,Object.keys(w).filter(L=>!L.startsWith("__")&&typeof w[L]!="function"&&!Object.prototype.hasOwnProperty.call(E,L)))})(t)),d=u.invoke!==void 0&&u.sig!==void 0,p=(w,E,L)=>{const $=w!==null?w[L]:null;return $!==null?u.invoke($,E[L]):u(E[L])},l=w=>{for(const L of Array.from(w.attributes))if(!_e.has(L.name)&&!Ae(L.name)&&L.value.includes("{")){const $=se(L.value);L.__originalTemplate=L.value;const S=d?oe($,u):null;let A=$.statics[0];for(let N=0;N<$.exprs.length;N++){const _=p(S,$.exprs,N);A+=(_!==null&&typeof _=="object"?JSON.stringify(_):String(_??""))+$.statics[N+1]}L.value=A,a.push({attr:L,parsed:$})}const E=w.getAttribute(ne);if(E!==null){w.removeAttribute(ne);const L=Zn(w,E,h,y(),u);L&&f.push(L)}(function(L,$,S){const A=L.attributes;let N=null;for(let v=0;v<A.length;v++){const T=A[v].name;(_e.has(T)||Ae(T))&&(N??=[]).push({name:T,value:A[v].value})}if(!N)return;const _=S();for(const{name:v,value:T}of N)if(_e.has(v)){L.removeAttribute(v);const x=v.slice(2),k=mt(Le(T),$,_);k&&L.addEventListener(x,k)}else $o(L,v,T,$,_)})(w,h,y)};l(e);const g=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let b;for(;b=g.nextNode();)if(b.nodeType===Node.TEXT_NODE){const w=b.textContent;if(w&&w.includes("{")){const E=se(w);b.__originalTemplate=w;const L=d?oe(E,u):null;let $=E.statics[0];for(let S=0;S<E.exprs.length;S++)$+=String(p(L,E.exprs,S)??"")+E.statics[S+1];b.textContent=$,s.push({node:b,parsed:E})}}else b.nodeType===Node.ELEMENT_NODE?l(b):b[Pe]&&c.push(b);e[de]={texts:s,attrs:a,conds:c,binds:f}}function Le(e){return e.replace(/\{([^}]+)\}/g,(t,r)=>`(${r.trim()})`)}function $o(e,t,r,n,o){const i=ut(t);if(!i)return;const s=Le(r);e.removeAttribute(t);const a=mt(s,n,o);if(!a)return;const f=Re(a,i),c=ft(i.eventModifiers);e.addEventListener(i.eventName,f,c)}var en=new Map,ce=new Map,wo=1e3;function Bn(e,t){const r=e.__scriptContent||"",n=r.trim().length>0,o=e.__hasModuleScripts===!0,i=[],s=[];for(const l of Object.keys(e))l.startsWith("__")||(typeof e[l]=="function"?s.push(l):i.push(l));const a=t.filter(l=>!i.includes(l)),f=s.filter(l=>!t.includes(l));let c="",u="";if(o||!n)u=f.length>0?`const { ${f.join(", ")} } = context;`:"";else{const l=en.get(r);l!==void 0?c=l:(c=xn(r,[]),en.set(r,c))}const h=a.length>0?`const { ${a.join(", ")} } = context;`:"",m=i.length>0?`let { ${i.join(", ")} } = reactiveState;`:"",y=!o&&i.length>0?i.map(l=>`reactiveState.${l} = ${l};`).join(" "):"",d=it(e.__componentId||"anonymous"),p={__reactiveState__:e,__scriptContent__:r,__componentUrl__:e.__componentUrl||""};for(const l of s)p[l]=e[l];return{reactiveState:e,proto:p,bodyPrefix:`"use strict";
      ${h}
      ${m}
      ${u}
      ${c}
      `,bodySuffix:`;
      ${y}`,emit:d.$emit,listen:d.$listen,fnCache:new Map}}function qn(e,t){let r=t.fnCache.get(e);if(r!==void 0)return r;const n=t.bodyPrefix+e+t.bodySuffix;if(r=ce.get(n)??null,r===null)try{if(ce.size>=wo){const o=ce.keys().next().value;o!==void 0&&ce.delete(o)}r=an(["event","context","reactiveState","$emit","$listen"],n,!1,`handler:${e}`),ce.set(n,r)}catch{r=null}return t.fnCache.set(e,r),r}function mt(e,t,r){const n=qn(e,r);if(!n)return null;const{reactiveState:o,emit:i,listen:s}=r;return a=>{try{lt(a),n(a,t,o,i,s)}catch(f){Oe(`Error in loop event handler: ${e}`,null,f)}}}function xo(e,t,r){for(const n of e)n.element.parentNode&&n.element.remove();for(const n of e){let o=!1;if(n.type==="else"?o=!0:o=!!r(n.condition,t),o){n.placeholder.parentNode?.insertBefore(n.element,n.placeholder.nextSibling);break}}}function Eo(e,t,r,n){const o=e.element,{raw:i,path:s,isContentEditable:a}=e;je(o,r(i,t),a);const f=s[0];n.has(f)||n.set(f,[]),n.get(f).push({element:o,path:s,isContentEditable:a}),i===f||n.has(i)||n.set(i,[]),i!==f&&n.get(i).push({element:o,path:s,isContentEditable:a});const c=Jn(o);let u=!1;o.__isUpdatingFromState=()=>u,o.__setUpdatingFromState=m=>{u=m};const h=()=>{if(u)return;const m=Gn(o,a);et(t,s,m)};o.__ladrillosBindSync={eventType:c,sync:h},o.addEventListener(c,h)}function Zn(e,t,r,n,o){const i=t.trim();if(!i)return null;const s=i.split(".").map(g=>g.trim()),a=s[0],f=n.reactiveState,c=Object.prototype.hasOwnProperty,u=!c.call(f,a)&&c.call(r,a);if(u&&s.length===1)return Oe(`$bind="${i}" targets the <for> row variable itself, which has nowhere to write back to. Bind one of its properties instead, e.g. $bind="${a}.value".`),null;const h=e,m=h.hasAttribute("contenteditable"),y=r[$e],d=Jn(h);je(h,o(i),m);const p=()=>{const g=Gn(h,m);if(!u)return void et(f,s,g);const b=r[a];if(b===null||typeof b!="object")return;et(b,s.slice(1),g);const w=f.__notifyKeyChanged;y&&typeof w=="function"&&w(y)};h.__ladrillosBindSync={eventType:d,sync:p},h.addEventListener(d,p);const l={element:h,expr:i,isContentEditable:m};return h[jn]=l,l}function Jn(e){if(e instanceof HTMLSelectElement)return"change";if(e instanceof HTMLInputElement){const t=e.type.toLowerCase();if(t==="checkbox"||t==="radio")return"change"}return"input"}function Gn(e,t){if(t)return e.textContent||"";if(e instanceof HTMLInputElement){const r=e.type.toLowerCase();return r==="checkbox"?e.checked:r==="number"||r==="range"?e.valueAsNumber:e.value}return e instanceof HTMLSelectElement?e.multiple?Array.from(e.selectedOptions).map(r=>r.value):e.value:e instanceof HTMLTextAreaElement?e.value:e.value??""}function je(e,t,r){if(r){const n=String(t??"");return void(e.textContent!==n&&(e.textContent=n))}if(e instanceof HTMLInputElement){const n=e.type.toLowerCase();if(n==="checkbox"){const o=!!t;e.checked!==o&&(e.checked=o)}else if(n==="radio"){const o=e.value===String(t??"");e.checked!==o&&(e.checked=o)}else{const o=String(t??"");e.value!==o&&(e.value=o)}return}if(e instanceof HTMLSelectElement){const n=String(t??"");return void(e.value!==n&&(e.value=n))}e.value=e instanceof HTMLTextAreaElement?String(t??""):t}function et(e,t,r){let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];i in n&&typeof n[i]=="object"||(n[i]={}),n=n[i]}n[t[t.length-1]]=r}var we=[],tt=new Set,nt=!1,rt=!1,tn=0,Ao=Promise.resolve();function So(){rt=!1,nt=!0,we.sort((e,t)=>(e.id??0)-(t.id??0));try{for(const e of we)if(e.active!==!1)try{e()}catch(t){Oe("Error in scheduled update",null,t)}}finally{we.length=0,tt.clear(),nt=!1}}var be=new Map,nn=new Set(["state","_root","_initialized","_componentId","_directives","_evaluator","_updateBoundInputs","_pendingProps","_propsReady"]);function ko(e,t){const{tagName:r,template:n,scripts:o,externalScripts:i,externalStyles:s,styles:a,sourcePath:f,templateBindings:c=[]}=e,u=En(o.map(d=>d.content).join(`
`)),h=[...new Set([...u,...c])];let m;class y extends HTMLElement{static get observedAttributes(){return h}state={};_root=null;_initialized=!1;_componentId=`${r}-${Math.random().toString(36).slice(2)}`;_directives=null;_evaluator=null;_updateBoundInputs=null;_pendingProps=new Map;_propsReady=!1;constructor(){super()}async connectedCallback(){if(this._initialized)return;this._initialized=!0,or({tagName:r,sourcePath:f,instanceId:this._componentId});const p=this.innerHTML,l=document.createDocumentFragment();if(t)for(const $ of Array.from(this.childNodes))l.appendChild($.cloneNode(!0));else for(;this.firstChild;)l.appendChild(this.firstChild);this.__originalHTML=p,this.__originalChildren=l,this._root=t?this.shadowRoot??this.attachShadow({mode:"open"}):this,m??=qt(n);const{bindings:g}=(($,S)=>{const A=typeof S=="string"?qt(S).content:S.content.cloneNode(!0);At(A),$.replaceChildren(),$.appendChild(A);const N=Zt($);for(const _ of Ke($))N.push(...Zt(_));return{bindings:N}})(this._root,m);fr(this._root,a,t);const b=this._getAttributeOverrides();for(const $ of h){if(nn.has($))continue;Object.prototype.hasOwnProperty.call(this,$)&&(this._pendingProps.set($,this[$]),delete this[$]);const S=$.toLowerCase();S!==$&&Object.prototype.hasOwnProperty.call(this,S)&&(this._pendingProps.set($,this[S]),delete this[S])}for(const[$,S]of this._pendingProps)b[$]=S;const w=o.filter($=>$.type!=="module"),E=o.some($=>$.type==="module"),L=ur(new Map);if((function($,S){const A=Array.from($.querySelectorAll(`[${ct(fe)}]`));for(const N of A){const _=N.getAttribute(fe);_&&S.set(_,N)}})(this._root,L),s&&s.length>0&&await no(s,this._root,t),i.length>0&&await to(i),this.state=await Pr(this._root,w,g,b,()=>this._updateDirectives(),E,f,this._componentId,L,c),this._propsReady=!0,this._pendingProps.size>0){for(const[$,S]of this._pendingProps)this.state[$]=S;this._pendingProps.clear()}if(De().stateCallbacks.set(this._componentId,$=>{const S=this.state?.__notifyKeyChanged;$&&typeof S=="function"?S($):this._updateDirectives()}),f){this.state.__suspendReactivity=!0;try{const $=await co(o,i,f,this._componentId,L,this.state,()=>this._updateDirectives(),this);(E||i.length>0)&&(this.state.__hasModuleScripts=!0);for(const[S,A]of Object.entries($))typeof A=="function"&&(this.state[S]=A)}finally{this.state.__suspendReactivity=!1}}E&&jr(this._root,g,this.state),this._evaluator=Vr(),this._directives=(function($,S){const A={loops:[],conditionals:[],twoWayBindings:[],refs:S,showElements:[]},N=[$,...Ke($)];for(const _ of N)fo(_,A),po(_,A),ho(_,A),go(_,A),mo(_,A);return At($),A})(this._root,L);{const $=De().refs;let S=$.get(this._componentId);S||(S=new Map,$.set(this._componentId,S));for(const[A,N]of this._directives.refs)S.set(A,N)}this.refs=this._directives.refs,this.__refs=this._directives.refs,this._updateDirectives(),this._directives.twoWayBindings.length>0&&(this._updateBoundInputs=(function($,S,A){const N=new Map;for(const _ of $)Eo(_,S,A,N);return _=>{(function(v,T,x,k){const C=k?[k]:Array.from(v.keys());for(const R of C){const M=v.get(R);if(M)for(const I of M){const{element:H,path:W,isContentEditable:B}=I,F=x(W.join("."),T),q=H.__setUpdatingFromState;q&&q(!0),je(H,F,B),q&&queueMicrotask(()=>q(!1))}}})(N,S,A,_)}})(this._directives.twoWayBindings,this.state,this._evaluator)),this.dispatchEvent(new CustomEvent("ladrillos:ready",{bubbles:!0,composed:!0,detail:{state:this.state,refs:this._directives.refs}}))}disconnectedCallback(){ro(this._componentId),er(this._componentId),(function(p){const l=be.get(p);l&&(l.active=!1,be.delete(p))})(this._componentId),De().stateCallbacks.delete(this._componentId),this._initialized=!1,this._propsReady=!1}attributeChangedCallback(p,l,g){if(l===g||!this._initialized)return;const b=this._parseAttributeValue(g);this._propsReady?this.state[p]=b:this._pendingProps.set(p,b)}adoptedCallback(){}_updateDirectives(){this._directives&&this._evaluator&&(function(p,l){let g=be.get(p);g||(g=(function(){const b=()=>{l()};return b.id=++tn,b.active=!0,b})(),be.set(p,g)),(function(b){b.id===void 0&&(b.id=++tn),tt.has(b.id)||(tt.add(b.id),we.push(b),nt||rt||(rt=!0,Ao.then(So)))})(g)})(this._componentId,()=>{this._performDirectiveUpdates()})}_performDirectiveUpdates(){this._directives&&this._evaluator&&(this._directives.loops.length>0&&(function(p,l,g){for(const b of p)Pn(b,l,g)})(this._directives.loops,this.state,this._evaluator),this._directives.conditionals.length>0&&(function(p,l,g){for(const b of p)xo(b,l,g)})(this._directives.conditionals,this.state,this._evaluator),this._directives.showElements.length>0&&(function(p,l,g){for(const b of p){const w=g(b.expression,l);b.element.style.display=w?b.originalDisplay:"none"}})(this._directives.showElements,this.state,this._evaluator),this._updateBoundInputs&&this._updateBoundInputs())}_getAttributeOverrides(){const p={},l=[];for(const b of Array.from(this.attributes))if(this._isReservedAttribute(b.name))b.value&&b.value.trim()!==""&&l.push(b.name);else if(p[b.name]=this._parseAttributeValue(b.value),b.name.includes("-")){const w=b.name.replace(/-([a-z0-9])/g,(E,L)=>L.toUpperCase());w===b.name||w in p||(p[w]=p[b.name])}const g=l.filter(b=>!c.includes(b));return g.length>0&&g.map(b=>`"${b}" → try "${{title:"heading",class:"className",style:"customStyle",id:"componentId",hidden:"isHidden"}[b]||`my${b.charAt(0).toUpperCase()}${b.slice(1)}`}"`),p}_isReservedAttribute(p){return!c.includes(p)&&(["id","class","style","slot","part","is","tabindex","title","lang","dir","hidden","draggable","contenteditable"].includes(p.toLowerCase())||p.startsWith("data-"))}_parseAttributeValue(p){if(p===null)return null;if(p===""||p==="true")return!0;if(p==="false")return!1;const l=Number(p);if(!isNaN(l)&&p.trim()!=="")return l;try{const g=p.trim();if(g.startsWith("[")||g.startsWith("{"))return JSON.parse(g)}catch{}return p}get root(){return this._root}}for(const d of h){if(nn.has(d)||d in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(y.prototype,d))continue;Object.defineProperty(y.prototype,d,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[d]:this._pendingProps.get(d)},set(l){this._propsReady?this.state[d]=l:this._pendingProps.set(d,l)}});const p=d.toLowerCase();p===d||p in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(y.prototype,p)||Object.defineProperty(y.prototype,p,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[d]:this._pendingProps.get(d)},set(l){this._propsReady?this.state[d]=l:this._pendingProps.set(d,l)}})}return y}function No(e,t){const{tagName:r}=e;if(!customElements.get(r)){const n=ko(e,t);customElements.define(r,n)}}var Vn=new Map,Kn=new Map,Xn=new Map;function ht(e){if(e.evaluators)for(const[t,r]of Object.entries(e.evaluators))Vn.set(t,r);if(e.handlers)for(const[t,r]of Object.entries(e.handlers))Kn.set(t,r);if(e.setups)for(const[t,r]of Object.entries(e.setups))Xn.set(t,r)}var Be=class extends Error{constructor(e,t){super(`[LadrillosJS] No precompiled ${e} for ${JSON.stringify(t)}. This build cannot compile at runtime. Either the component was not processed by @ladrillosjs/compiler, or it is loaded from a path the compiler could not resolve statically.`),this.name="MissingArtifactError"}};function qe(e,t){const{deps:r,fn:n}=e,o=[];for(let s=0;s<r.length;s++)o.push(t.indexOf(r[s]));const i=(s,a)=>a<0?void 0:s[a];switch(o.length){case 0:return function(){return n()};case 1:{const[s]=o;return function(){return n(i(arguments,s))}}case 2:{const[s,a]=o;return function(){return n(i(arguments,s),i(arguments,a))}}case 3:{const[s,a,f]=o;return function(){return n(i(arguments,s),i(arguments,a),i(arguments,f))}}default:return function(){const s=new Array(o.length);for(let a=0;a<o.length;a++)s[a]=i(arguments,o[a]);return n.apply(null,s)}}}function gt(e,t={}){const{tagName:r}=e;r?.trim()&&r.includes("-")&&No(e,t.useShadowDOM??!0)}lr({name:"precompiled",compileEvaluator(e,t){const r=Vn.get(t);if(!r)throw new Be("evaluator",t);return qe(r,e)},compileHandler(e,t,r,n){const o=Kn.get(n);if(!o)throw new Be("handler",n);return qe(o,e)},compileSetup(e,t,r){const n=Xn.get(r);if(!n)throw new Be("setup",r);return qe(n,e)}});const Co={tagName:"site-header",template:`<header $ref="siteHeader">
  <div class="nav-content">
    <div class="nav-left">
      <a href="./" class="nav-brand">
        <span class="brick-logo" aria-hidden="true" $ref="brandLogo">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoTop" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffd4bd"></stop>
                <stop offset="100%" stop-color="#fde4d0"></stop>
              </linearGradient>
              <linearGradient id="logoLeft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fbc9a8"></stop>
                <stop offset="100%" stop-color="#f5ad85"></stop>
              </linearGradient>
              <linearGradient id="logoRight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#f5ad85"></stop>
                <stop offset="100%" stop-color="#ff6b35"></stop>
              </linearGradient>
            </defs>
            <!-- bottom-left brick -->
            <g>
              <polygon points="16,30 32,38 16,46 0,38" fill="url(#logoTop)"></polygon>
              <polygon points="0,38 0,48 16,56 16,46" fill="url(#logoLeft)"></polygon>
              <polygon points="16,46 32,38 32,48 16,56" fill="url(#logoRight)"></polygon>
            </g>
            <!-- bottom-right brick -->
            <g>
              <polygon points="48,30 64,38 48,46 32,38" fill="url(#logoTop)"></polygon>
              <polygon points="32,38 32,48 48,56 48,46" fill="url(#logoLeft)"></polygon>
              <polygon points="48,46 64,38 64,48 48,56" fill="url(#logoRight)"></polygon>
            </g>
            <!-- top brick -->
            <g>
              <polygon points="32,8 48,16 32,24 16,16" fill="url(#logoTop)"></polygon>
              <polygon points="16,16 16,26 32,34 32,24" fill="url(#logoLeft)"></polygon>
              <polygon points="32,24 48,16 48,26 32,34" fill="url(#logoRight)"></polygon>
            </g>
          </svg>
        </span>
        <span class="brand-name">LadrillosJS</span>
        <span class="brand-version" aria-label="Version">{version}</span>
      </a>
      <div class="nav-left-links">
        <a href="./#features">Features</a>
        <a href="./getting-started.html">Getting Started</a>
      </div>
    </div>
    <button class="mobile-toggle" onclick="toggleMobileMenu()" title="Toggle Mobile Navigation">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <div class="nav-right" $ref="navLinks">
      <a href="https://github.com/drubiodev/LadrillosJS/tree/main/docs" target="_blank" rel="noopener">Docs</a>
      <a href="https://drubiodev.github.io/ladrillosjs-playground/" target="_blank" rel="noopener">Playground</a>
      <a href="https://github.com/drubiodev/LadrillosJS/" target="_blank" rel="noopener">GitHub</a>
      <a href="./getting-started.html" class="btn-cta">Get Started</a>
    </div>
  </div>
</header>`,scripts:[{content:`const toggleMobileMenu = () => {
    $refs.navLinks.classList.toggle("active");
  };

  // Close menu when a link inside it is tapped
  $refs.navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      $refs.navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking outside (composedPath pierces shadow DOM)
  document.addEventListener("click", (e) => {
    if (!$refs.navLinks.classList.contains("active")) return;
    const path = e.composedPath();
    if (path.includes($refs.navLinks)) return;
    if (path.some((el) => el.classList && el.classList.contains("mobile-toggle"))) return;
    $refs.navLinks.classList.remove("active");
  });

  // Liquid-glass header: only once the page has scrolled off the top
  let glassTicking = false;
  const syncHeaderGlass = () => {
    glassTicking = false;
    $refs.siteHeader.classList.toggle("scrolled", window.scrollY > 8);
  };

  window.addEventListener(
    "scroll",
    () => {
      if (glassTicking) return;
      glassTicking = true;
      requestAnimationFrame(syncHeaderGlass);
    },
    { passive: true }
  );

  syncHeaderGlass();

  // Hero easter egg: the logo's bricks shake loose when the hero bricks blow up and snap
  // back together when they're rebuilt.
  (() => {
    const parts = [...$refs.brandLogo.querySelectorAll("g")];
    const calm = matchMedia("(prefers-reduced-motion: reduce)");
    const loose = [
      "translate(-9px, 7px) rotate(-38deg)",
      "translate(10px, 6px) rotate(32deg)",
      "translate(1px, -12px) rotate(-160deg)",
    ];
    let held = [];

    $listen("bricks:blast", () => {
      if (calm.matches) return;
      held.forEach((a) => a.cancel());
      held = parts.map((g, i) =>
        g.animate([{ transform: "none" }, { transform: loose[i] }], {
          duration: 420,
          delay: 120 + i * 40,
          easing: "cubic-bezier(.2,1.6,.4,1)",
          fill: "both",
        }),
      );
    });

    $listen("bricks:rebuilt", () => {
      if (!held.length) return;
      parts.forEach((g, i) => {
        g.animate([{ transform: loose[i] }, { transform: "translate(0, -6px)", offset: 0.6 }, { transform: "none" }], {
          duration: 520,
          delay: i * 70,
          easing: "cubic-bezier(.3,.7,.2,1)",
          fill: "backwards",
        });
      });
      held.forEach((a) => a.cancel());
      held = [];
    });
  })();`,type:null}],externalScripts:[],externalStyles:[],styles:`/* Quick repeat taps shouldn't zoom on mobile; iOS needs this per shadow root (see styles/site.css). */
  * {
    touch-action: manipulation;
  }

  header {
    padding: 1.35rem 2rem;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition:
      padding 0.35s var(--ease-out),
      background 0.35s ease,
      backdrop-filter 0.35s ease;
  }

  header.scrolled {
    padding: 0.85rem 2rem;
    background: rgba(244, 240, 235, 0.62);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    box-shadow: 0 12px 34px rgba(44, 30, 24, 0.07);
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    text-decoration: none;
    color: var(--text-primary);
  }

  .nav-brand:hover {
    text-decoration: none;
  }

  /* Brick logo - isometric SVG mark */
  .brick-logo {
    width: 28px;
    height: 28px;
    display: block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .brick-logo svg {
    width: 100%;
    height: 100%;
    display: block;
    overflow: visible;
  }

  .nav-brand:hover .brick-logo {
    transform: translateY(-3px) rotate(-5deg) scale(1.05);
  }

  .brick-logo g {
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }

  .brand-name {
    font-weight: 800;
    font-size: 1rem;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .brand-version {
    margin-left: -0.25rem;
    align-self: flex-start;
    padding-top: 0.15rem;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1;
    color: var(--text-muted);
    letter-spacing: 0;
  }

  .nav-left-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-left-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;
  }

  .nav-left-links a:hover {
    color: var(--text-secondary);
    text-decoration: none;
  }

  .nav-left-links a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -0.35rem;
    height: 2px;
    background: var(--primary);
    transition: right 0.35s var(--ease-out);
  }

  .nav-left-links a:hover::after {
    right: 0;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.375rem;
  }

  .nav-right a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s ease;
    padding: 0.5rem 1rem;
  }

  .nav-right a.btn-cta {
    color: white;
  }

  .nav-right a:hover {
    color: var(--text-secondary);
    text-decoration: none;
  }

  .btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    background: var(--text-primary);
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 2px;
    text-decoration: none;
    transition: transform 0.35s var(--ease-out), background 0.2s ease;
  }

  .btn-cta:hover {
    background: #302b29;
    color: white;
    text-decoration: none;
    transform: translateY(-2px);
  }

  /* Mobile toggle */
  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--text-primary);
  }

  .mobile-toggle svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    header {
      padding: 0.9rem 1rem;
    }

    header.scrolled {
      padding: 0.65rem 1rem;
    }

    .mobile-toggle {
      display: block;
    }

    .nav-left-links {
      display: none;
    }

    .nav-right {
      display: none;
      position: absolute;
      top: calc(100% + 0.25rem);
      left: 1rem;
      right: 1rem;
      background: var(--bg-main);
      flex-direction: column;
      align-items: stretch;
      padding: 1rem;
      gap: 0.25rem;
      border-radius: 0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      border: 1px solid var(--border);
    }

    .nav-right.active {
      display: flex;
    }

    .nav-right a {
      padding: 0.75rem 1rem;
      border-radius: 0;
      font-size: 0.95rem;
    }

    .nav-right a:not(.btn-cta):hover {
      background: var(--bg-subtle);
    }

    .btn-cta {
      justify-content: center;
      margin-top: 0.5rem;
      padding: 0.75rem 1.25rem;
    }
  }`,sourcePath:"components/site-header.html",templateBindings:["version"]};ht({evaluators:{version:{deps:["version"],fn:e=>e}},handlers:{"handler:toggleMobileMenu()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{t.navLinks.classList.toggle("active")}}},setups:{'state:const toggleMobileMenu = () => {\n    $refs.navLinks.classList.toggle("active");\n  };\n\n  // Close menu when a link inside it is tapped\n  $refs.navLinks.addEventListener("click", (e) => {\n    if (e.target.closest("a")) {\n      $refs.navLinks.classList.remove("active");\n    }\n  });\n\n  // Close menu when clicking outside (composedPath pierces shadow DOM)\n  document.addEventListener("click", (e) => {\n    if (!$refs.navLinks.classList.contains("active")) return;\n    const path = e.composedPath();\n    if (path.includes($refs.navLinks)) return;\n    if (path.some((el) => el.classList && el.classList.contains("mobile-toggle"))) return;\n    $refs.navLinks.classList.remove("active");\n  });\n\n  // Liquid-glass header: only once the page has scrolled off the top\n  let glassTicking = false;\n  const syncHeaderGlass = () => {\n    glassTicking = false;\n    $refs.siteHeader.classList.toggle("scrolled", window.scrollY > 8);\n  };\n\n  window.addEventListener(\n    "scroll",\n    () => {\n      if (glassTicking) return;\n      glassTicking = true;\n      requestAnimationFrame(syncHeaderGlass);\n    },\n    { passive: true }\n  );\n\n  syncHeaderGlass();\n\n  // Hero easter egg: the logo\'s bricks shake loose when the hero bricks blow up and snap\n  // back together when they\'re rebuilt.\n  (() => {\n    const parts = [...$refs.brandLogo.querySelectorAll("g")];\n    const calm = matchMedia("(prefers-reduced-motion: reduce)");\n    const loose = [\n      "translate(-9px, 7px) rotate(-38deg)",\n      "translate(10px, 6px) rotate(32deg)",\n      "translate(1px, -12px) rotate(-160deg)",\n    ];\n    let held = [];\n\n    $listen("bricks:blast", () => {\n      if (calm.matches) return;\n      held.forEach((a) => a.cancel());\n      held = parts.map((g, i) =>\n        g.animate([{ transform: "none" }, { transform: loose[i] }], {\n          duration: 420,\n          delay: 120 + i * 40,\n          easing: "cubic-bezier(.2,1.6,.4,1)",\n          fill: "both",\n        }),\n      );\n    });\n\n    $listen("bricks:rebuilt", () => {\n      if (!held.length) return;\n      parts.forEach((g, i) => {\n        g.animate([{ transform: loose[i] }, { transform: "translate(0, -6px)", offset: 0.6 }, { transform: "none" }], {\n          duration: 520,\n          delay: i * 70,\n          easing: "cubic-bezier(.3,.7,.2,1)",\n          fill: "backwards",\n        });\n      });\n      held.forEach((a) => a.cancel());\n      held = [];\n    });\n  })();':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{const f=()=>{r.navLinks.classList.toggle("active")};r.navLinks.addEventListener("click",u=>{u.target.closest("a")&&r.navLinks.classList.remove("active")}),document.addEventListener("click",u=>{if(!r.navLinks.classList.contains("active"))return;const h=u.composedPath();h.includes(r.navLinks)||h.some(m=>m.classList&&m.classList.contains("mobile-toggle"))||r.navLinks.classList.remove("active")}),e.glassTicking??=!1;const c=()=>{e.glassTicking=!1,r.siteHeader.classList.toggle("scrolled",window.scrollY>8)};window.addEventListener("scroll",()=>{e.glassTicking||(e.glassTicking=!0,requestAnimationFrame(c))},{passive:!0}),c(),(()=>{const u=[...r.brandLogo.querySelectorAll("g")],h=matchMedia("(prefers-reduced-motion: reduce)"),m=["translate(-9px, 7px) rotate(-38deg)","translate(10px, 6px) rotate(32deg)","translate(1px, -12px) rotate(-160deg)"];let y=[];a("bricks:blast",()=>{h.matches||(y.forEach(d=>d.cancel()),y=u.map((d,p)=>d.animate([{transform:"none"},{transform:m[p]}],{duration:420,delay:120+p*40,easing:"cubic-bezier(.2,1.6,.4,1)",fill:"both"})))}),a("bricks:rebuilt",()=>{y.length&&(u.forEach((d,p)=>{d.animate([{transform:m[p]},{transform:"translate(0, -6px)",offset:.6},{transform:"none"}],{duration:520,delay:p*70,easing:"cubic-bezier(.3,.7,.2,1)",fill:"backwards"})}),y.forEach(d=>d.cancel()),y=[])})})(),e.toggleMobileMenu??=f,e.syncHeaderGlass??=c}}}});function zo(e){gt(Co,e)}const Lo={tagName:"footer-section",template:`<footer class="footer">\r
  <div class="container">\r
    <div class="footer-content">\r
      <div class="footer-section">\r
        <h4>Resources</h4>\r
        <ul>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/tree/main/docs">Documentation</a>\r
          </li>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/tree/main/samples">Examples</a>\r
          </li>\r
          <li>\r
            <a href="https://drubiodev.github.io/ladrillosjs-playground/">Playground</a>\r
          </li>\r
          <li>\r
            <a href="https://www.npmjs.com/package/ladrillosjs">NPM Package</a>\r
          </li>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/blob/main/README.md">API Reference</a>\r
          </li>\r
        </ul>\r
      </div>\r
      <div class="footer-section">\r
        <h4>Community</h4>\r
        <ul>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/">GitHub</a>\r
          </li>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/issues">Report Issues</a>\r
          </li>\r
        </ul>\r
      </div>\r
      <div class="footer-section">\r
        <h4>About</h4>\r
        <ul>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/blob/main/LICENSE">License (MIT)</a>\r
          </li>\r
          <li><a href="https://github.com/drubiodev">Author</a></li>\r
          <li>\r
            <a href="https://github.com/drubiodev/LadrillosJS/releases">Changelog</a>\r
          </li>\r
          <li><a href="./privacy.html">Privacy</a></li>\r
        </ul>\r
      </div>\r
    </div>\r
    <p class="privacy-disclosure">\r
      With your permission, we use Microsoft Clarity to understand how visitors\r
      use this site through behavioral metrics, heatmaps, and session replay.\r
      See our <a href="./privacy.html">Privacy Notice</a> or\r
      <button class="cookie-settings-button" type="button" onclick="openCookieSettings()">change cookie\r
        settings</button>.\r
    </p>\r
    <div class="footer-bottom">\r
      <p>\r
        Built brick 🧱 by brick by\r
        <a href="https://github.com/drubiodev">Daniel Rubio</a>\r
      </p>\r
      <p>MIT License © {year} LadrillosJS</p>\r
    </div>\r
  </div>\r
</footer>`,scripts:[{content:`const year = new Date().getFullYear();\r
\r
  function openCookieSettings() {\r
    $emit("open-consent-preferences");\r
  }`,type:null}],externalScripts:[],externalStyles:[],styles:`/* Quick repeat taps shouldn't zoom on mobile; iOS needs this per shadow root (see styles/site.css). */\r
  * {\r
    touch-action: manipulation;\r
  }\r
\r
  /* ============================================\r
   Footer\r
   ============================================ */\r
  ul {\r
    padding: 0;\r
    margin: 0;\r
    list-style: none;\r
  }\r
\r
  /* Footer specific styles */\r
  .footer {\r
    position: relative;\r
    overflow: hidden;\r
    background:\r
      linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),\r
      linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),\r
      var(--bg-darker);\r
    background-size: 96px 96px;\r
    border-top: 4px solid var(--primary);\r
    padding: 6rem 2rem 2rem;\r
    color: #f8f4ef;\r
  }\r
\r
  .footer::before {\r
    content: none;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .footer {\r
      padding: 2rem 1rem 1.5rem;\r
    }\r
  }\r
\r
  .footer-content {\r
    display: grid;\r
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
    gap: 1rem;\r
    margin-bottom: 2rem;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .footer-content {\r
      grid-template-columns: 1fr 1fr;\r
      gap: 2rem;\r
    }\r
  }\r
\r
  @media (max-width: 480px) {\r
    .footer-content {\r
      grid-template-columns: 1fr;\r
      gap: 1.5rem;\r
    }\r
  }\r
\r
  .footer-section h4 {\r
    margin-bottom: 1rem;\r
    color: #fff;\r
    font-family: var(--font-mono);\r
    font-size: 0.75rem;\r
    letter-spacing: 0.14em;\r
    text-transform: uppercase;\r
  }\r
\r
  .footer-section ul {\r
    list-style: none;\r
  }\r
\r
  .footer-section li {\r
    margin-bottom: 0.5rem;\r
  }\r
\r
  .footer-section a {\r
    color: rgba(255, 255, 255, 0.58);\r
    text-decoration: none;\r
    transition: color 0.3s;\r
  }\r
\r
  .footer-section a:hover {\r
    color: var(--primary);\r
    padding-left: 0.25rem;\r
    text-decoration: none;\r
  }\r
\r
  .footer-bottom {\r
    text-align: center;\r
    padding-top: 2rem;\r
    border-top: 1px solid var(--border);\r
    color: rgba(255, 255, 255, 0.48);\r
  }\r
\r
  .privacy-disclosure {\r
    max-width: 72ch;\r
    margin: 0 auto 2rem;\r
    color: rgba(255, 255, 255, 0.45);\r
    font-size: 0.8125rem;\r
    line-height: 1.6;\r
    text-align: center;\r
  }\r
\r
  .privacy-disclosure a {\r
    color: var(--primary-light);\r
  }\r
\r
  .cookie-settings-button {\r
    padding: 0;\r
    border: 0;\r
    background: transparent;\r
    color: var(--primary-light);\r
    font: inherit;\r
    cursor: pointer;\r
  }\r
\r
  .cookie-settings-button:hover {\r
    text-decoration: underline;\r
  }\r
\r
  @media (max-width: 768px) {\r
    .footer-bottom {\r
      padding-top: 1.5rem;\r
      font-size: 0.875rem;\r
    }\r
  }\r
\r
  .footer-bottom a {\r
    color: var(--primary-light);\r
    text-decoration: none;\r
  }\r
\r
  .footer-bottom a:hover {\r
    text-decoration: underline;\r
  }`,sourcePath:"components/footer-section.html",templateBindings:["year"]};ht({evaluators:{year:{deps:["year"],fn:e=>e}},handlers:{"handler:openCookieSettings()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function c(){a("open-consent-preferences")}c()}}},setups:{'state:const year = new Date().getFullYear();\r\n\r\n  function openCookieSettings() {\r\n    $emit("open-consent-preferences");\r\n  }':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.year??=new Date().getFullYear();function f(){s("open-consent-preferences")}e.openCookieSettings??=f}}}});function Fo(e){gt(Lo,e)}const To={tagName:"cookie-consent",template:`<show condition="visible">
    <div class="consent-shell">
        <section class="consent-panel" role="dialog" aria-label="Analytics cookie preferences" aria-live="polite">
            <div class="consent-content">
                <div class="consent-copy">
                    <h2>Analytics cookies</h2>
                    <p>
                        May we use Microsoft Clarity to understand how this site is used?
                        Clarity does not load unless you accept. Advertising storage stays disabled.
                        <a href="./privacy.html">Privacy details</a>
                    </p>
                </div>
                <div class="consent-actions">
                    <button class="consent-button consent-button-secondary" type="button" onclick="setConsent('denied')">
                        Decline
                    </button>
                    <button class="consent-button consent-button-primary" type="button" onclick="setConsent('granted')">
                        Accept analytics
                    </button>
                </div>
            </div>
        </section>
    </div>
</show>`,scripts:[{content:`const consentKey = "ladrillosjs-clarity-consent";
    let visible = true;

    try {
        visible = localStorage.getItem(consentKey) === null;
    } catch {
        visible = true;
    }

    function setConsent(value) {
        $emit("clarity-consent-change", value);
        visible = false;
    }

    $listen("open-consent-preferences", () => {
        visible = true;
    });`,type:null}],externalScripts:[],externalStyles:[],styles:`/* Quick repeat taps shouldn't zoom on mobile; iOS needs this per shadow root (see styles/site.css). */
    * {
        touch-action: manipulation;
    }

    .consent-shell {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 1200;
        pointer-events: none;
    }

    .consent-panel {
        box-sizing: border-box;
        width: min(calc(100vw - 2rem), 580px);
        padding: 1rem 1.1rem;
        background: rgba(244, 240, 235, 0.88);
        border: 0;
        border-top: 1px solid rgba(255, 105, 71, 0.5);
        border-radius: 0;
        box-shadow: 0 14px 38px rgba(44, 30, 24, 0.12);
        backdrop-filter: blur(18px) saturate(150%);
        -webkit-backdrop-filter: blur(18px) saturate(150%);
        pointer-events: auto;
        animation: consentEnter 0.5s var(--ease-out) both;
    }

    .consent-content {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 1rem;
        align-items: center;
    }

    .consent-copy h2 {
        margin: 0 0 0.3rem;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 0.7rem;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .consent-copy p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.78rem;
        line-height: 1.5;
    }

    .consent-copy a {
        color: var(--text-primary);
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: rgba(31, 28, 27, 0.25);
        text-underline-offset: 2px;
    }

    .consent-actions {
        display: flex;
        gap: 0.45rem;
    }

    .consent-button {
        box-sizing: border-box;
        min-height: 36px;
        padding: 0.5rem 0.75rem;
        border: 0;
        border-radius: 0;
        font: inherit;
        font-size: 0.75rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            color 0.2s ease,
            background 0.2s ease,
            transform 0.3s var(--ease-out);
    }

    .consent-button-secondary {
        background: transparent;
        color: var(--text-secondary);
    }

    .consent-button-primary {
        background: var(--text-primary);
        color: #ffffff;
    }

    .consent-button:hover {
        transform: translateY(-1px);
    }

    .consent-button-secondary:hover {
        color: var(--text-primary);
        background: rgba(31, 28, 27, 0.06);
    }

    .consent-button-primary:hover {
        background: #302b29;
    }

    .consent-button:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }

    @keyframes consentEnter {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 640px) {
        .consent-shell {
            right: 0.75rem;
            bottom: 0.75rem;
            left: 0.75rem;
        }

        .consent-panel {
            width: 100%;
            padding: 1.1rem;
            background: rgba(248, 245, 241, 0.97);
            backdrop-filter: blur(12px) saturate(125%);
            -webkit-backdrop-filter: blur(12px) saturate(125%);
        }

        .consent-content {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .consent-copy h2 {
            font-size: 0.75rem;
        }

        .consent-copy p {
            color: #514b48;
            font-size: 0.875rem;
            line-height: 1.55;
        }

        .consent-actions {
            justify-content: flex-end;
        }

        .consent-button {
            min-height: 40px;
            padding: 0.6rem 0.85rem;
            font-size: 0.8125rem;
        }
    }`,sourcePath:"components/cookie-consent.html",templateBindings:[]};ht({evaluators:{visible:{deps:["visible"],fn:e=>e}},handlers:{"handler:setConsent('denied')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function c(u){a("clarity-consent-change",u),e.visible=!1}c("denied")}},"handler:setConsent('granted')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function c(u){a("clarity-consent-change",u),e.visible=!1}c("granted")}}},setups:{'state:const consentKey = "ladrillosjs-clarity-consent";\n    let visible = true;\n\n    try {\n        visible = localStorage.getItem(consentKey) === null;\n    } catch {\n        visible = true;\n    }\n\n    function setConsent(value) {\n        $emit("clarity-consent-change", value);\n        visible = false;\n    }\n\n    $listen("open-consent-preferences", () => {\n        visible = true;\n    });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.consentKey??="ladrillosjs-clarity-consent",e.visible??=!0;try{e.visible=localStorage.getItem(e.consentKey)===null}catch{e.visible=!0}function f(c){s("clarity-consent-change",c),e.visible=!1}a("open-consent-preferences",()=>{e.visible=!0}),e.setConsent??=f}}}});function Uo(e){gt(To,e)}function Oo(e){try{(function(t,r,n,o,i,s,a){r.getElementById("clarity-script")||(t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},s=r.createElement(o),s.async=1,s.src="https://www.clarity.ms/tag/"+i+"?ref=npm",s.id="clarity-script",a=r.getElementsByTagName(o)[0],a.parentNode.insertBefore(s,a))})(window,document,"clarity","script",e);return}catch{return}}const ot={init(e){Oo(e)},setTag(e,t){window.clarity("set",e,t)},identify(e,t,r,n){window.clarity("identify",e,t,r,n)},consent(e=!0){window.clarity("consent",e)},consentV2(e={ad_Storage:"granted",analytics_Storage:"granted"}){window.clarity("consentv2",e)},upgrade(e){window.clarity("upgrade",e)},event(e){window.clarity("event",e)}},Yn="ladrillosjs-clarity-consent",Ro="yjzx6xv98k";let st=!1;function Mo(){try{return localStorage.getItem(Yn)}catch{return null}}function Io(e){try{localStorage.setItem(Yn,e)}catch{}}function Qn(){st||(ot.init(Ro),ot.consentV2({ad_Storage:"denied",analytics_Storage:"granted"}),st=!0)}Mo()==="granted"&&Qn();tr("clarity-consent-change",e=>{e!=="granted"&&e!=="denied"||(Io(e),e==="granted"?Qn():st&&(ot.consentV2({ad_Storage:"denied",analytics_Storage:"denied"}),window.location.reload()))});export{$t as A,mn as B,Ar as D,ko as K,yr as L,jo as O,No as Q,rn as _,Fo as a,Uo as b,Oe as c,zo as d,Te as e,ir as f,Qr as g,ht as p,Do as q,bt as s,gt as w};
