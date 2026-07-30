(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Yn="modulepreload",Kn=function(e){return"/ladrillosjs-site/"+e},bt={},tn=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let f=function(c){return Promise.all(c.map(l=>Promise.resolve(l).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=f(r.map(c=>{if(c=Kn(c),c in bt)return;bt[c]=!0;const l=c.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Yn,l||(m.as="script"),m.crossOrigin="",m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),l)return new Promise((b,u)=>{m.addEventListener("load",b),m.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Ge="[LadrillosJS]",se=null;function Qn(e){se=e}function Q(){return se}function Xe(e,t){return`${e}${(function(r){const n=r!==void 0?r:se;if(!n)return"";const o=[];if(n.tagName&&o.push(`<${n.tagName}>`),n.sourcePath){const i=n.sourcePath.split("/").pop()||n.sourcePath;o.push(`(${i})`)}return o.length>0?` in ${o.join(" ")}`:""})(t)}`}var vt=(function(e){return e[e.EXPRESSION_EVAL_FAILED=101]="EXPRESSION_EVAL_FAILED",e[e.EXPRESSION_SYNTAX_ERROR=102]="EXPRESSION_SYNTAX_ERROR",e[e.EXPRESSION_UNDEFINED_VAR=103]="EXPRESSION_UNDEFINED_VAR",e[e.EXPRESSION_NULL_ACCESS=104]="EXPRESSION_NULL_ACCESS",e[e.SCRIPT_EXTRACT_FAILED=201]="SCRIPT_EXTRACT_FAILED",e[e.SCRIPT_EXECUTION_FAILED=202]="SCRIPT_EXECUTION_FAILED",e[e.EVENT_HANDLER_FAILED=301]="EVENT_HANDLER_FAILED",e[e.DIRECTIVE_ERROR=401]="DIRECTIVE_ERROR",e[e.LOOP_ERROR=402]="LOOP_ERROR",e[e.CONDITIONAL_ERROR=403]="CONDITIONAL_ERROR",e[e.COMPONENT_LOAD_FAILED=501]="COMPONENT_LOAD_FAILED",e[e.COMPONENT_NOT_FOUND=502]="COMPONENT_NOT_FOUND",e[e.COMPONENT_ALREADY_REGISTERED=503]="COMPONENT_ALREADY_REGISTERED",e[e.INVALID_COMPONENT_PATH=504]="INVALID_COMPONENT_PATH",e[e.COMPONENT_REGISTRATION_FAILED=505]="COMPONENT_REGISTRATION_FAILED",e[e.INVALID_COMPONENT_NAME=506]="INVALID_COMPONENT_NAME",e[e.MODULE_LOAD_FAILED=601]="MODULE_LOAD_FAILED",e[e.MODULE_EXECUTION_FAILED=602]="MODULE_EXECUTION_FAILED",e})({});function lt(e){return`https://github.com/drubiodev/LadrillosJS/blob/main/docs/21-error-handling.md#ljs${e}`}function nn(e){return`LJS${e}`}var Oe=class extends Error{code;docsUrl;componentContext;hint;constructor(e,t,r={}){const n=lt(t);super(`[${nn(t)}] ${Xe(e,r.context)} See ${n}`,r.cause!==void 0?{cause:r.cause}:void 0),this.name="LadrillosError",this.code=t,this.docsUrl=n,this.componentContext=r.context??null,this.hint=r.hint}};function je(e,t,r,n){const o=n?`[${nn(n.code)}] ${Xe(e,t)} See ${lt(n.code)}`:Xe(e,t);typeof window<"u"&&typeof console<"u"&&typeof console.log=="function"?console.error(`%c${Ge}%c ${o}`,"color: #ff6b35; font-weight: bold","color: inherit; font-weight: normal"):console.error(`${Ge} ${o}`),r!==void 0&&typeof console<"u"&&console.error(r),n?new Oe(e,n.code,{context:t,hint:n.hint,cause:r}):r instanceof Error||new Error(o,r!==void 0?{cause:r}:void 0)}function ee(e,t,r={}){const n=r.context!==void 0?r.context:se,o=r.errorCode||((s=t)instanceof SyntaxError?102:s instanceof ReferenceError?103:s instanceof TypeError&&(s.message.includes("Cannot read properties of null")||s.message.includes("Cannot read properties of undefined"))?104:101),i=(function(a){if(a instanceof SyntaxError)return"Invalid expression syntax";if(a instanceof ReferenceError){const f=a.message.match(/(\w+) is not defined/);return f?`Undefined variable: "${f[1]}"`:"Undefined variable"}return a instanceof TypeError?a.message.includes("Cannot read properties of null")?"Cannot access property of null":a.message.includes("Cannot read properties of undefined")?"Cannot access property of undefined":"Type error":"Expression evaluation failed"})(t);var s;new Oe(i,o,{context:n,cause:t})}function er(e,t,r){const n=se;new Oe(e,201,{context:n,cause:t}),console.error(`${Ge} Script error. See: ${lt(201)}`)}function Io(e,t,r,n,o){return new Oe(e,t,{context:r!==void 0?r:se,hint:n,cause:o})}var Y;function tr(e){const t=(function(){if(Y!==void 0)return Y;const r=globalThis.trustedTypes;if(typeof r?.createPolicy!="function")return Y=null,null;try{Y=r.createPolicy("ladrillosjs",{createHTML:n=>n})}catch{Y=null}return Y})();return t?t.createHTML(e):e}var pe={name:"uninstalled",compileEvaluator:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileHandler:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileSetup:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")}},rn=new Set;function nr(e){rn.add(e)}function rr(e){if(e!==pe){pe=e;for(const t of rn)t()}}function or(e,t){return pe.compileEvaluator(e,t)}function on(e,t,r=!1,n=t){return pe.compileHandler(e,t,r,n)}function sn(e,t,r=t){return pe.compileSetup(e,t,r)}function sr(e){return new Proxy(e,{get(t,r,n){if(r in t){const o=Reflect.get(t,r,n);return typeof o=="function"?o.bind(t):o}if(typeof r=="string")return t.get(r)},set:(t,r,n)=>typeof r=="string"&&(t.set(r,n),!0),has:(t,r)=>typeof r=="string"&&t.has(r)||r in t})}var Be=()=>tn(()=>import("./shared-B6XrU-hx-yxU0E1w0.js").then(e=>e.s),[]).then(e=>e.n).then(e=>e.ladrillos);function ae(e,t){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e.startsWith("/")?new URL(e,window.location.origin).href:e:new URL(e,t).href}function an(e){return{registerComponent:function(t,r,n=!0,o=!1){const i=ae(r,e);return Be().then(s=>s.registerComponent(t,i,n,o))},registerComponents:function(t){const r=Array.isArray(t)?t.map(n=>({...n,path:ae(n.path,e)})):Object.entries(t).map(([n,o])=>typeof o=="string"?{name:n,path:ae(o,e)}:{name:n,...o,path:ae(o.path,e)});return Be().then(n=>n.registerComponents(r))},$use:function(t,r=!0,n=!1){const o=(function(s){return(s.split("/").pop()?.replace(/\.[^.]+$/,"")||s).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").toLowerCase()})(t),i=ae(t,e);return Be().then(s=>s.registerComponent(o,i,r,n))}}}var Ye=["registerComponent","registerComponents","$use"];function $e(){let e=globalThis.__ladrillos;return e||(e={bus:globalThis.__ladrillosEventBus??{listeners:new Map,componentListeners:new Map},stateCallbacks:globalThis.__ladrillosStateCallbacks??new Map,refs:globalThis.__ladrillosRefs??new Map},globalThis.__ladrillos=e),globalThis.__ladrillosEventBus=e.bus,globalThis.__ladrillosStateCallbacks=e.stateCallbacks,globalThis.__ladrillosRefs=e.refs,e}function ln(){return $e().bus}function ke(){return ln().listeners}function Ke(){return ln().componentListeners}function ir(e,t){const r=ke().get(e);if(r&&r.size!==0)for(const n of r)try{n.callback(t)}catch(o){console.error(`[LadrillosJS] Error in event listener for "${e}":`,o)}}function ar(e,t,r){const n=ke(),o=Ke();let i=n.get(e);i||(i=new Set,n.set(e,i));const s={callback:t,componentId:r};if(i.add(s),r){let a=o.get(r);a||(a=new Set,o.set(r,a)),a.add({event:e,registration:s})}return()=>{const a=ke(),f=Ke();if(i?.delete(s),i?.size===0&&a.delete(e),r){const c=f.get(r);if(c){for(const l of c)if(l.registration===s){c.delete(l);break}c.size===0&&f.delete(r)}}}}function lr(e){const t=ke(),r=Ke(),n=r.get(e);if(n){for(const{event:o,registration:i}of n){const s=t.get(o);s&&(s.delete(i),s.size===0&&t.delete(o))}r.delete(e)}}function ct(e){return{$emit:function(t,r){ir(t,r)},$listen:function(t,r){return ar(t,r,e)}}}var Qe=["$emit","$listen"],ve,yt=new Map,Ae=()=>{if(ve===void 0)try{ve=typeof new CSSStyleSheet().replaceSync=="function"}catch{ve=!1}return ve},Le=e=>e.includes("@import"),xt=new Set,cn=e=>{xt.has(e)||xt.add(e)},dn=e=>{let t=yt.get(e);if(t)return t;try{t=new CSSStyleSheet,t.replaceSync(e)}catch{return null}return yt.set(e,t),t},un=(e,t,r)=>{const n=e.adoptedStyleSheets;n.includes(t)||(e.adoptedStyleSheets=r?[t,...n]:[...n,t])},cr=(e,t,r)=>{if(!t)return;if(Ae()&&Le(t)&&cn(t),Ae()&&!Le(t)){const o=dn(t);if(o)return void un(r?e:document,o,!1)}const n=document.createElement("style");n.textContent=t,r?e.appendChild(n):document.head.appendChild(n)},dr=(e,t,r)=>{if(Ae()&&Le(t)&&cn(t),Ae()&&!Le(t)){const o=dn(t);if(o)return void un(e,o,!0)}const n=document.createElement("style");n.textContent=t,n.setAttribute("data-external-href",r),e.insertBefore(n,e.firstChild)},$t={bindings:/{([^}]+)}/g},ur=globalThis.requestIdleCallback||(e=>setTimeout(e,1)),fr=globalThis.cancelIdleCallback||(e=>clearTimeout(e)),wt=(e=1e4)=>t=>{const r=ur(t,{timeout:e});return()=>fr(r)},fn=e=>(t,r)=>{if((function(o){const{top:i,left:s,bottom:a,right:f}=o.getBoundingClientRect(),{innerHeight:c,innerWidth:l}=window;return(i>0&&i<c||a>0&&a<c)&&(s>0&&s<l||f>0&&f<l)})(r))return void t();const n=new IntersectionObserver(o=>{for(const i of o)if(i.isIntersecting){n.disconnect(),t();break}},e);return n.observe(r),()=>n.disconnect()},pr=e=>t=>{if(!e)return void t();const r=matchMedia(e);if(r.matches)return void t();const n=()=>t();return r.addEventListener("change",n,{once:!0}),()=>r.removeEventListener("change",n)},_t=(e=["click","focusin"])=>{const t=typeof e=="string"?[e]:e;return(r,n)=>{let o=!1;const i=a=>{o||(o=!0,s(),r(),queueMicrotask(()=>{a.target&&a.target instanceof Element&&a.target.dispatchEvent(new a.constructor(a.type,a))}))},s=()=>{for(const a of t)n.removeEventListener(a,i)};for(const a of t)n.addEventListener(a,i,{once:!0,passive:!0});return s}},mr=(e=0)=>t=>{const r=setTimeout(t,e);return()=>clearTimeout(r)},hr=fn({rootMargin:"100px"});function Et(e){const t=e.querySelector(':scope > template[slot="placeholder"]');return t?(t.remove(),t.content.cloneNode(!0)):null}function gr(e){const t=e.parentNode;if(!t)return;const r=(function(u){if(u.hasAttribute("eager"))return null;if(u.hasAttribute("interaction")){const y=(u.getAttribute("interaction")||"").trim();if(!y)return _t();const E=y.split(",").map(C=>C.trim()).filter(Boolean);return _t(E.length===1?E[0]:E)}if(u.hasAttribute("media"))return pr(u.getAttribute("media")||"");if(u.hasAttribute("delay"))return mr(Number(u.getAttribute("delay"))||0);if(u.hasAttribute("idle")||u.hasAttribute("idle-timeout")){const y=u.getAttribute("idle-timeout");return y?wt(Number(y)||1e4):wt()}const g={},d=u.getAttribute("margin");d&&(g.rootMargin=d);const h=u.getAttribute("threshold");if(h!==null){const y=Number(h);Number.isNaN(y)||(g.threshold=y)}return Object.keys(g).length>0?fn(g):hr})(e),n=e.getAttribute("src"),o=e.getAttribute("component"),i=new Set(["eager","visible","margin","threshold","idle","idle-timeout","delay","interaction","media","src","component"]),s=document.createComment(n?` <lazy src="${n}"> `:" <lazy> ");if(t.insertBefore(s,e),e.remove(),n){const u=(o||(a=n,(a.split(/[?#]/)[0].split("/").pop()?.replace(/\.[^.]+$/,"")||a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/[_\s]+/g,"-").toLowerCase())).trim();if(!u.includes("-"))return;const g=Et(e),d=()=>{const w=document.createElement(u);for(const T of Array.from(e.attributes))i.has(T.name)||w.setAttribute(T.name,T.value);s.parentNode?.replaceChild(w,s)};let h=null;g&&(h=document.createComment(" /lazy-placeholder "),s.parentNode?.insertBefore(h,s.nextSibling),s.parentNode?.insertBefore(g,h));const y=async()=>{try{if(customElements.get(u)||await(async function(w,T){return(await tn(()=>import("./shared-B6XrU-hx-yxU0E1w0.js").then(k=>k.s),[]).then(k=>k.n)).ladrillos.registerComponent(w,T,!0,!1)})(u,n),h){let w=s.nextSibling;for(;w&&w!==h;){const T=w.nextSibling;w.parentNode?.removeChild(w),w=T}h.parentNode?.removeChild(h)}d()}catch{}};if(!r)return void y();const E=document.createElement("span");let C;return E.setAttribute("data-lazy-sentinel",""),E.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(E,s.nextSibling),void(C=r(()=>{C?.(),E.remove(),y()},E))}var a;const f=Et(e),c=document.createDocumentFragment();for(;e.firstChild;)c.appendChild(e.firstChild);const l=document.createComment(" /lazy ");s.parentNode?.insertBefore(l,s.nextSibling),f&&s.parentNode?.insertBefore(f,l);const p=()=>{let u=s.nextSibling;for(;u&&u!==l;){const g=u.nextSibling;u.parentNode?.removeChild(u),u=g}l.parentNode?.insertBefore(c,l)};if(!r)return void p();const m=document.createElement("span");let b;m.setAttribute("data-lazy-sentinel",""),m.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(m,s.nextSibling),m.__lazyContent=c,b=r(()=>{b?.(),m.remove(),p()},m)}function Ct(e){const t=Array.from(e.querySelectorAll("lazy"));for(const r of t)br(r)||gr(r)}function br(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function et(e){const t=[],r=e.querySelectorAll("[data-lazy-sentinel]");for(const n of Array.from(r)){const o=n.__lazyContent;o&&t.push(o)}return t}var we="data-l-ctrl",vr=new Set(["FOR","IF","ELSE-IF","ELSE","SHOW"]),yr=/<(for|else-if|if|else|show)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi,xr=/<\/(for|else-if|if|else|show)\s*>/gi,$r=/(<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<!--[\s\S]*?-->)/gi,wr=/<\/?(?:for|if|else|show)\b/i;function _r(e){return wr.test(e)?e.split($r).map((t,r)=>r%2==1?t:t.replace(yr,(n,o,i)=>`<template ${we}="${o.toLowerCase()}"${i}>`).replace(xr,"</template>")).join(""):e}function pn(e){let t;for(;t=e.querySelector(`template[${we}]`);){const r=t.ownerDocument.createElement(t.getAttribute(we));for(const n of Array.from(t.attributes))n.name!==we&&r.setAttribute(n.name,n.value);r.appendChild(t.content),t.replaceWith(r)}for(const r of Array.from(e.querySelectorAll("template")))pn(r.content)}function Ro(e){return vr.has(e.tagName)}var mn=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmouseout","onmousemove","onmouseenter","onmouseleave","onkeydown","onkeyup","onkeypress","onfocus","onblur","onchange","oninput","onsubmit","onreset","onscroll","onload","onerror","ontouchstart","ontouchmove","ontouchend","ontouchcancel","ondragstart","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondrop"],_e=new Set(mn),te="$bind";function dt(e){const t=e.currentTarget?.__ladrillosBindSync;t&&t.eventType===e.type&&t.sync()}var ue="$ref",ye={forAlias:/([\s\S]*?)\s+(?:in|of)\s+([\s\S]+)$/,forIterator:/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,stripParens:/^\(|\)$/g};function ut(e){return e.replace(/\$/g,"\\$")}var Er=Object.freeze(["alert","confirm","prompt","console","JSON","Math","Date","Array","Object","String","Number","Boolean","Map","Set","WeakMap","WeakSet","Symbol","BigInt","Promise","Proxy","Reflect","parseInt","parseFloat","isNaN","isFinite","Infinity","NaN","encodeURIComponent","decodeURIComponent","encodeURI","decodeURI","setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","cancelAnimationFrame","requestIdleCallback","cancelIdleCallback","queueMicrotask","fetch","AbortController","AbortSignal","Headers","Request","Response","URL","URLSearchParams","navigator","location","history","localStorage","sessionStorage","crypto","document","window","globalThis","Element","HTMLElement","Event","CustomEvent","EventTarget","TextEncoder","TextDecoder","Blob","File","FileReader","FormData","Error","TypeError","RangeError","SyntaxError","ReferenceError","atob","btoa","structuredClone"]),Cr=Object.freeze([]),kr=new Set(["with","eval","arguments","constructor","prototype","break","case","catch","continue","debugger","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","class","const","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","null","true","false"]),Ar={enter:"Enter",tab:"Tab",esc:"Escape",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",delete:"Delete",backspace:"Backspace",insert:"Insert",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown"},hn=["ctrl","alt","shift","meta"],Lr=["prevent","stop","self","once","passive","capture"],gn={left:0,middle:1,right:2};function ft(e){if(!e.startsWith("$on:"))return null;const t=e.slice(4).split(".");if(t.length===0||!t[0])return null;const r=t[0],n=t.slice(1),o={eventName:r,keyModifiers:[],systemModifiers:[],eventModifiers:[],mouseModifier:null,exact:!1};for(const i of n){const s=i.toLowerCase();s!=="exact"?Lr.includes(s)?o.eventModifiers.push(s):hn.includes(s)?o.systemModifiers.push(s):s in gn?o.mouseModifier=s:o.keyModifiers.push(s):o.exact=!0}return o}function pt(e){const t={};return e.includes("passive")&&(t.passive=!0),e.includes("capture")&&(t.capture=!0),e.includes("once")&&(t.once=!0),t}function Pe(e,t){return function(r){t.eventModifiers.includes("self")&&r.target!==r.currentTarget||t.mouseModifier&&r instanceof MouseEvent&&!(function(n,o){return n.button===gn[o]})(r,t.mouseModifier)||(t.systemModifiers.length>0||t.exact)&&(r instanceof KeyboardEvent||r instanceof MouseEvent)&&!(function(n,o,i){const s={ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey,meta:n.metaKey};for(const a of o)if(!s[a])return!1;if(i){for(const a of hn)if(!o.includes(a)&&s[a])return!1}return!0})(r,t.systemModifiers,t.exact)||t.keyModifiers.length>0&&r instanceof KeyboardEvent&&!t.keyModifiers.some(n=>(function(o,i){const s=i.toLowerCase(),a=Ar[s];if(a)return o.key===a;if(s.length===1)return o.key.toLowerCase()===s;const f=s.split("-").map((c,l)=>l===0?c:c.charAt(0).toUpperCase()+c.slice(1)).join("");return o.key.toLowerCase()===s||o.key.toLowerCase()===f.toLowerCase()})(r,n))||(t.eventModifiers.includes("prevent")&&r.preventDefault(),t.eventModifiers.includes("stop")&&r.stopPropagation(),e(r))}}function Ne(e){return e.startsWith("$on:")}var kt=new Map,At=Symbol("reactive-array"),Lt=Symbol("reactive-array-subscribers"),Nr=["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"];function G(e,t){if(e[At]){const o=e[Lt];return o&&t&&o.add(t),e}const r=new Set;t&&r.add(t);const n=()=>{for(const o of r)o()};return new Proxy(e,{get(o,i){if(i===At)return!0;if(i===Lt)return r;const s=o[i];return typeof i=="string"&&Nr.includes(i)&&typeof s=="function"?(...a)=>{const f=a.map(l=>Array.isArray(l)?G(l,n):l),c=s.apply(o,f);return n(),c}:Array.isArray(s)?G(s,n):s},set(o,i,s){const a=!isNaN(typeof i=="string"?parseInt(i,10):NaN),f=i==="length",c=Array.isArray(s)?G(s,n):s;return o[i]===c||(o[i]=c,(a||f)&&n()),!0},deleteProperty(o,i){const s=delete o[i];return s&&n(),s}})}function Nt(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function bn(e,t){for(const r of Object.keys(e)){const n=e[r];Array.isArray(n)?e[r]=G(n,t):n&&typeof n=="object"&&!Array.isArray(n)&&bn(n,t)}return e}var St=new WeakMap;function Sr(e){let t=St.get(e);if(t===void 0){try{t=Function.prototype.toString.call(e)}catch{t=""}t.includes("[native code]")&&(t=""),St.set(e,t)}return t}function Tr(e,t,r){const n=new Set,o=[],i=new Set;for(const s of r)typeof t[s]=="function"&&Se(e,s)&&o.push(s);for(;o.length>0;){const s=o.pop();if(i.has(s))continue;i.add(s);const a=Sr(t[s]);if(a)for(const f of r)f!==s&&Se(a,f)&&(n.add(f),typeof t[f]=="function"&&o.push(f))}return n}function Tt(e,t,r){const n=Object.keys(r);if(n.some(o=>typeof r[o]=="function"))for(const o of e)for(const i of o.bindings)for(const s of Tr(i.raw,r,n))t.get(s)?.add(o)}function Se(e,t){return(function(r){let n=kt.get(r);if(!n){const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=new RegExp(`\\b${o}\\b`),kt.set(r,n)}return n})(t).test(e)}function De(e,t,r){if(t.length===0)return e;const n=r?.rewriteDeclarations!==!1,o=[],i=c=>(o.push(c),`__STRING_PLACEHOLDER_${o.length-1}__`);let s="",a=0;for(;a<e.length;){const c=e[a];if(c==="/"&&e[a+1]==="/"){const l=e.indexOf(`
`,a),p=l===-1?e.length:l;s+=e.slice(a,p),a=p;continue}if(c==="/"&&e[a+1]==="*"){const l=e.indexOf("*/",a+2),p=l===-1?e.length:l+2;s+=e.slice(a,p),a=p;continue}if(c==='"'||c==="'"){let l=a+1;for(;l<e.length&&e[l]!==c;)e[l]==="\\"?l+=2:l++;s+=i(e.slice(a,l+1)),a=l+1;continue}if(c==="`"){s+="`",a++;let l=a;for(;a<e.length&&e[a]!=="`";)if(e[a]!=="\\"){if(e[a]==="$"&&e[a+1]==="{"){a>l&&(s+=i(e.slice(l,a))),s+="${",a+=2;const p=a;let m=1;for(;a<e.length&&m>0;){const b=e[a];if(b!=='"'&&b!=="'"){if(b==="`"){a++;let u=0;for(;a<e.length;)if(e[a]!=="\\"){if(e[a]==="`"&&u===0){a++;break}e[a]!=="$"||e[a+1]!=="{"?(e[a]==="}"&&u>0&&u--,a++):(u++,a+=2)}else a+=2;continue}if(b==="{")m++;else if(b==="}"&&(m--,m===0))break;a++}else{for(a++;a<e.length&&e[a]!==b;)e[a]==="\\"?a+=2:a++;a++}}s+=i(De(e.slice(p,a),t,r)),e[a]==="}"&&a++,s+="}",l=a;continue}a++}else a+=2;a>l&&(s+=i(e.slice(l,a))),s+="`",a++;continue}s+=c,a++}if(n)for(const c of t){const l=new RegExp(`\\b(let|const|var)\\s+(${vn(c)})\\s*=`,"g");s=s.replace(l,`__state__.${c} ??=`)}for(const c of t)s=Ir(s,c);let f=s;for(let c=0;c<o.length;c++)f=f.replace(`__STRING_PLACEHOLDER_${c}__`,()=>o[c]);return f}var Mr=new Set(["return","typeof","case","in","of","yield","await","throw","void","delete","new"]);function Ir(e,t){const r=new RegExp(`(?<![^.]\\.)(?<!__state__\\.)\\b${vn(t)}\\b(?!\\s*\\()`,"g");return e.replace(r,(n,o)=>{if((function(i,s){let a=s-1;const f=a;for(;a>=0&&/\s/.test(i[a]);)a--;if(a===f)return!1;const c=a+1;for(;a>=0&&/[A-Za-z]/.test(i[a]);)a--;const l=i.slice(a+1,c);return l==="let"||l==="const"||l==="var"})(e,o)||(function(i,s,a){if(Rt(i,s+a)!==":")return"value";const f=It(i,s-1);if(f===""||f===";"||f==="}"||f==="{")return"key";if(f===","){const c=Mt(i,s);return c!==-1&&i[c]==="{"?"key":"value"}return"value"})(e,o,n.length)==="key")return n;switch((function(i,s,a){const f=It(i,s-1),c=Rt(i,s+a);if(f!=="{"&&f!==","||c!==","&&c!=="}")return"none";const l=Mt(i,s);return l===-1||i[l]!=="{"?"none":(function(p,m){let b=m-1;for(;b>=0&&/\s/.test(p[b]);)b--;if(b<0)return"object";const u=p[b];if(u===")"||u===">"&&p[b-1]==="=")return"none";if("=([,:?!&|^~+-*/%<>".includes(u))return"object";if(/[A-Za-z0-9_$]/.test(u)){let g=b;for(;g>=0&&/[A-Za-z0-9_$]/.test(p[g]);)g--;const d=p.slice(g+1,b+1);return d==="let"||d==="const"||d==="var"?"destructuring":Mr.has(d)?"object":"none"}return"none"})(i,l)})(e,o,n.length)){case"object":return`${t}: __state__.${t}`;case"destructuring":return n;default:return`__state__.${t}`}})}function Mt(e,t){let r=0;for(let n=t-1;n>=0;n--){const o=e[n];if(o===")"||o==="]"||o==="}")r++;else if(o==="("||o==="["||o==="{"){if(r===0)return n;r--}}return-1}function It(e,t){for(let r=t;r>=0;r--)if(!/\s/.test(e[r]))return e[r];return""}function Rt(e,t){for(let r=t;r<e.length;r++)if(!/\s/.test(e[r]))return e[r];return""}function vn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var yn=e=>e instanceof ShadowRoot?e.host:e;async function Rr(e,t,r,n={},o,i=!1,s,a,f,c=[]){const l=yn(e),p={},m=t.map(u=>u.content).join(`
`);for(const[u,g]of Object.entries(n))p[u]=g;p.__scriptContent=m,p.__componentUrl=s,p.__componentId=a;const b=(function(u,g,d,h){const y=(function(k,A){const $=new Map,v=Object.keys(A);for(const S of v)$.set(S,new Set);for(const S of k)for(const _ of S.bindings)for(const L of v)Se(_.raw,L)&&$.get(L).add(S);return Tt(k,$,A),$})(g,u),E=(k,A)=>{const $=y.get(k);if($)for(const v of $)d(v,A);h&&h()},C=k=>()=>{u.__suspendReactivity?h&&h():E(k,u)},x=k=>{C(k)()};for(const k of Object.keys(u)){const A=u[k];Array.isArray(A)?u[k]=G(A,C(k)):A&&typeof A=="object"&&bn(A,C(k))}const w=new WeakMap,T=(k,A)=>{let $=w.get(k);const v=$?.get(A);if(v)return v;const S=new Proxy(k,{get(_,L){const N=_[L];return typeof L=="string"&&Nt(N)?T(N,A):N},set:(_,L,N)=>typeof L!="string"?(_[L]=N,!0):(L in _&&_[L]===N||(_[L]=Array.isArray(N)?G(N,C(A)):N,u.__suspendReactivity||E(A,u)),!0),deleteProperty(_,L){const N=L in _;return delete _[L],N&&typeof L=="string"&&!u.__suspendReactivity&&E(A,u),!0}});return $||($=new Map,w.set(k,$)),$.set(A,S),S};return new Proxy(u,{get(k,A){if(A==="__notifyKeyChanged")return x;const $=k[A];return typeof A=="string"&&Nt($)?T($,A):$},set(k,A,$){const v=!(A in k);return!v&&k[A]===$||(k[A]=Array.isArray($)?G($,C(A)):$,v&&(function(S,_,L,N){L.set(S,new Set);for(const I of _)for(const R of I.bindings)Se(R.raw,S)&&L.get(S).add(I);Tt(_,L,N)})(A,g,y,k),k.__suspendReactivity||E(A,k),!0)}})})(p,r,(u,g)=>Nn(u,g),o);b.__suspendReactivity=!0;try{for(const u of t)Fr(u.content,b,s,a,l,f,c)}finally{b.__suspendReactivity=!1}return l.__state=b,l.__scriptContent=m,l.__componentUrl=s,l.__componentId=a,i||(xn(e,b,m,l),Sn(r,b)),b}function Or(e,t,r){const n=yn(e);xn(e,r,n.__scriptContent||"",n),Sn(t,r)}function xn(e,t,r,n){const o=[e,...et(e)];for(const i of o){const s=Array.from(i.querySelectorAll("*"));for(const a of s)if(!Pr(a)){for(const f of mn){const c=a.getAttribute(f);if(c){a.removeAttribute(f);const l=f.slice(2),p=$n(c,t,r,n);p&&a.addEventListener(l,p)}}jr(a,t,r,n)}}}function jr(e,t,r,n){const o=Array.from(e.attributes).filter(i=>Ne(i.name));for(const i of o){const s=ft(i.name);if(!s)continue;const a=i.value;e.removeAttribute(i.name);const f=$n(a,t,r,n);if(!f)continue;const c=Pe(f,s),l=pt(s.eventModifiers);e.addEventListener(s.eventName,c,l)}}function Pr(e){if(e.hasAttribute("$for")||e.tagName==="FOR")return!0;let t=e.parentElement;for(;t;){if(t.hasAttribute("$for")||t.tagName==="FOR")return!0;t=t.parentElement}return!1}function $n(e,t,r,n){try{const o=n?.__componentUrl,i=n?.__componentId,s=En(o,i),a=ht(),f=["event","__state__","$refs","$host",...a,...s.keys],c=Object.keys(t),l=c.filter(C=>typeof t[C]=="function"),p=c.filter(C=>typeof t[C]!="function"),m=t.__hasModuleScripts===!0,b=p.length>0?`let { ${p.join(", ")} } = __state__;`:"",u=m&&l.length>0?`const { ${l.join(", ")} } = __state__;`:"",g=De(wn(r,m?l:[]),p,{rewriteDeclarations:!1}),d=p.some(C=>new RegExp(`\\b${C}\\b`).test(e))?p.filter(C=>new RegExp(`\\b${C}\\b`).test(e)).map(C=>`__state__.${C} = ${C};`).join(" "):"",h=/\bawait\b/.test(e)||/\bawait\b/.test(g)||/\basync\b/.test(g),y=o||"ladrillos-event-handler",E=on(f,h?`"use strict"; ${b} ${u} ${g} try { await (async () => { ${e} })(); } finally { ${d} }
//# sourceURL=${y}`:`"use strict"; ${b} ${u} ${g} ${e}; ${d}
//# sourceURL=${y}`,h,`handler:${e}`);return C=>{try{dt(C);const x=[C,t,n&&n.__refs||new Map,n,...a.map(()=>{}),...s.values],w=E(...x);w&&typeof w.catch=="function"&&w.catch(T=>{const k={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};ee(e,T,{context:k.tagName?k:Q(),errorCode:vt.EVENT_HANDLER_FAILED})})}catch(x){const w={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};ee(e,x,{context:w.tagName?w:Q(),errorCode:vt.EVENT_HANDLER_FAILED})}}}catch{return n?.tagName&&n.tagName.toLowerCase(),null}}var le=new Map,Dr=500;function wn(e,t=[]){const r=t.join(",")+"\0"+e,n=le.get(r);if(n!==void 0)return n;const o=(function(i,s=[]){const a=[],f=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*\{/g;let c;for(;(c=f.exec(i))!==null;){if(s.includes(c[1]))continue;const p=Ot(i,c.index);p&&a.push(p)}const l=/(?:const|let)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>\s*\{/g;for(;(c=l.exec(i))!==null;){if(s.includes(c[1]))continue;const p=c.index,m=Ot(i,p,i.indexOf("{",p+c[0].length-1));m&&a.push(m)}return a.map(p=>p.trim()).join(`;
`)+(a.length>0?";":"")})(e,t);if(le.size>=Dr){const i=le.keys().next().value;i!==void 0&&le.delete(i)}return le.set(r,o),o}function Ot(e,t,r){let n=0,o=t,i=!1,s="",a=!1;for(let f=r??t;f<e.length;f++){const c=e[f];if(c!=='"'&&c!=="'"&&c!=="`"||(f>0?e[f-1]:"")==="\\"||(i?c===s&&(i=!1):(i=!0,s=c)),!i&&(c==="{"&&(n++,a=!0),c==="}"&&n--,a&&n===0&&c==="}")){o=f+1;break}}return n!==0?null:e.slice(t,o)}function zr(e,t=[]){const r=Br(e),n=r.map(o=>`__state__.${o} ??= ${o};`).join(`
`);return`${De(e,[...new Set([..._n(e),...t])].filter(o=>!r.includes(o)))}
${n}`}function Fr(e,t,r,n,o,i,s=[]){try{const a=r||"ladrillos-component",f=`
      "use strict";
      ${zr(e,s)}
//# sourceURL=${a}
    `,c=En(r,n),l=ht(),p=["__state__","$host","$refs",...l,...c.keys],m=[t,o,i,...l.map(()=>{}),...c.values];sn(p,f,`state:${e}`)(...m)}catch(a){er("Error executing script with reactive state",a)}}function mt(e){const t=e.split(""),r=e.length;let n=0,o=0,i=!1;const s=[],a=()=>s.length>0,f=(g,d)=>{for(let h=g;h<d;h++){const y=t[h];y!==`
`&&y!=="\r"&&(t[h]=" ")}},c=g=>{let d=g;for(;d<r&&e[d]!==`
`;)d++;return d},l=g=>{let d=g+2;for(;d<r-1&&(e[d]!=="*"||e[d+1]!=="/");)d++;return Math.min(r,d+2)},p=(g,d)=>{let h=g+1;for(;h<r;)if(e[h]!=="\\"){if(e[h]===d)return h+1;if(e[h]===`
`)return h;h++}else h+=2;return h},m=g=>{let d=g+1;for(;d<r;)if(e[d]!=="\\"){if(e[d]==="`")return d+1;if(e[d]==="$"&&e[d+1]==="{"){d+=2;let h=1;for(;d<r&&h>0;){const y=e[d];y!=="`"?y!=='"'&&y!=="'"?y!=="/"||e[d+1]!=="/"?y!=="/"||e[d+1]!=="*"?(y==="{"?h++:y==="}"&&h--,d++):d=l(d):d=c(d):d=p(d,y):d=m(d)}continue}d++}else d+=2;return d},b=g=>{let d=g-1;for(;d>=0&&/\s/.test(e[d]);)d--;return d<0||!!"([{,;:!&|?=+-*%^~<>".includes(e[d])||/\b(return|typeof|delete|void|in|of|new|instanceof|throw)$/.test(e.slice(0,d+1))},u=g=>{let d=g+1,h=!1;for(;d<r;){const y=e[d];if(y!=="\\"){if(y==="[")h=!0;else if(y==="]")h=!1;else{if(y==="/"&&!h){d++;break}if(y===`
`)break}d++}else d+=2}for(;d<r&&/[a-zA-Z]/.test(e[d]);)d++;return d};for(;n<r;){const g=e[n];if(g==="/"&&e[n+1]==="/"){const d=c(n);a()&&f(n,d),n=d;continue}if(g==="/"&&e[n+1]==="*"){const d=l(n);a()&&f(n,d),n=d;continue}if(g==='"'||g==="'"){const d=p(n,g);a()&&f(n,d),n=d;continue}if(g==="`"){const d=m(n);a()&&f(n,d),n=d;continue}if(g==="/"&&b(n)){const d=u(n);a()&&f(n,d),n=d;continue}if(g!=="{")if(g!=="}")if(g!=="="||e[n+1]!==">"){if(/[a-zA-Z_$]/.test(g)){const d=n;for(;n<r&&/[a-zA-Z0-9_$]/.test(e[n]);)n++;const h=e.slice(d,n);a()?f(d,n):h==="function"&&(i=!0);continue}a()&&g!==`
`&&g!=="\r"&&(t[n]=" "),n++}else{if(a())t[n]=" ",t[n+1]=" ";else{let d=n+2;for(;d<r;){const h=e[d];if(/\s/.test(h))d++;else if(h!=="/"||e[d+1]!=="/"){if(h!=="/"||e[d+1]!=="*")break;d=l(d)}else d=c(d)}e[d]==="{"&&(i=!0)}n+=2}else a()&&s[s.length-1]===o?s.pop():a()&&(t[n]=" "),o--,n++;else o++,i?(s.push(o),i=!1):a()&&(t[n]=" "),n++}return t.join("")}function _n(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Hr(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?(?:function\b|\([^()]*\)\s*=>|[a-zA-Z_$][a-zA-Z0-9_$]*\s*=>)/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Br(e){const t=mt(e),r=[],n=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return[...r,...Hr(e)]}function ht(){return Cr.filter(e=>!kr.has(e))}function En(e,t){const r=[],n=[];for(const s of Er)s in globalThis&&(r.push(s),n.push(globalThis[s]));const o=an(e||window.location.href);r.push(...Ye),n.push(o.registerComponent,o.registerComponents,o.$use);const i=ct(t||"anonymous");return r.push(...Qe),n.push(i.$emit,i.$listen),{keys:r,values:n}}var K=new Map;nr(()=>K.clear());var Ur=100,Wr=5e3,Cn=/^[A-Za-z_$][\w$]*$/,de=null,kn=null;function tt(e,t){try{const r=Object.keys(t),n=[],o=[];for(let i=0;i<r.length;i++){const s=r[i];Cn.test(s)&&(n.push(s),o.push(t[s]))}return An(),nt(n,Ln(n.join(",")),e)(...kn,...o)}catch(r){return ee(e,r,{context:Q()}),`{${e}}`}}function An(){return de===null&&(de=ht(),kn=de.map(()=>{})),de}function Ln(e){let t=K.get(e);if(!t){if(K.size>=Ur){const r=K.keys().next().value;r!==void 0&&K.delete(r)}t=new Map,K.set(e,t)}return t}function nt(e,t,r){let n=t.get(r);if(!n){if(t.size>=Wr){const o=t.keys().next().value;o!==void 0&&t.delete(o)}n=or([...de,...e],r),t.set(r,n)}return n}function Zr(e,t){const r=An(),n=Object.keys(e),o=[];for(let u=0;u<n.length;u++)Cn.test(n[u])&&o.push(n[u]);const i=o.join(","),s=Ln(i),a=r.length,f=new Array(a+o.length).fill(void 0),c=()=>{for(let u=0;u<o.length;u++)f[a+u]=e[o[u]]},l=t!==void 0;let p=null,m=null;if(l){c(),p=[],m=[];for(const u of t){const g=o.indexOf(u);g>=0&&(p.push(a+g),m.push(u))}}const b=u=>{try{const g=nt(o,s,u);return l||c(),g.apply(null,f)}catch(g){return ee(u,g,{context:Q()}),`{${u}}`}};return b.sig=i,b.refresh=l?()=>{for(let u=0;u<p.length;u++)f[p[u]]=e[m[u]]}:c,b.compile=u=>{try{return nt(o,s,u)}catch(g){return ee(u,g,{context:Q()}),null}},b.invoke=(u,g)=>{try{return l||c(),u.apply(null,f)}catch(d){return ee(g,d,{context:Q()}),`{${g}}`}},b}var Jr=new Set(["disabled","checked","readonly","required","selected","hidden","multiple","autofocus","open","novalidate","formnovalidate","inert","reversed","loop","muted","controls","autoplay","playsinline","default","ismap","allowfullscreen"]);function Nn(e,t){if((function(o){if(!o.isAttribute||!o.attributeName||o.bindings.length!==1)return!1;const i=o.original.trim();return!!/^\{[\s\S]*\}$/.test(i)&&i.slice(1,-1).trim()===o.bindings[0].raw.trim()})(e)){const o=e.element??e.node.parentElement,i=tt(e.bindings[0].raw,t);return void(o&&(r=i,r===null||typeof r!="object"&&typeof r!="function"?(function(s,a,f){Jr.has(a)?f?s.setAttribute(a,""):s.removeAttribute(a):f!=null?s.setAttribute(a,String(f)):s.removeAttribute(a)})(o,e.attributeName,i):(o.hasAttribute?.(e.attributeName)&&o.removeAttribute(e.attributeName),o[e.attributeName]=i)))}var r;let n=e.original;for(const o of e.bindings){const i=tt(o.raw,t),s=String(i??"");n=n.replace(`{${o.raw}}`,s)}if(e.isAttribute&&e.attributeName){const o=e.element??e.node.parentElement;o&&o.setAttribute(e.attributeName,n)}else e.node.textContent=n}function Sn(e,t){for(const r of e)Nn(r,t)}function qr(){const e=tt;return e.forContext=Zr,e}function Tn(e){return import(e)}var jt=new Map,Ue=new Map,Vr=/(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g,Gr=/import\s*\(\s*['"]([^'"]+)['"]\s*\)/g,Xr=[".ts",".tsx",".mts"];function Te(e){return e.startsWith("./")||e.startsWith("../")}function Pt(e){return Xr.some(t=>e.endsWith(t))}function Dt(e){return!(e.startsWith("/")||e.startsWith("./")||e.startsWith("../")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))}function Yr(e,t){let r=e;const n=[],o=[];return r=r.replace(Vr,(i,s)=>{if(Te(s)){const a=new URL(s,t).href;return Pt(s)&&o.push(s),i.replace(s,a)}return Dt(s)&&n.push(s),i}),r=r.replace(Gr,(i,s)=>{if(Te(s)){const a=new URL(s,t).href;return Pt(s)&&o.push(s),`import("${a}")`}return Dt(s)&&n.push(s),i}),r}var zt=/^(?:export\s+)?(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm,Kr=["$emit","$listen","$refs","registerComponent","registerComponents","$use"];async function rt(e,t,r){if(e.external)return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load external script: ${e.src}`)),document.head.appendChild(i)});if(e.type!=="module")return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load script: ${e.src}`)),document.head.appendChild(i)});try{const n=await fetch(e.src);if(!n.ok)throw new Error(`Failed to fetch module: ${e.src}`);const o=Yr(await n.text(),e.src),i=(function(l){const p=(function(h){const y=[];let E;for(zt.lastIndex=0;(E=zt.exec(h))!==null;)y.push(E[1]);const C=/^(?:export\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm;for(;(E=C.exec(h))!==null;)y.includes(E[1])||y.push(E[1]);return y})(l),m=new Set,b=/export\s+(?:let|const|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let u;for(;(u=b.exec(l))!==null;)m.add(u[1]);const g=/export\s*\{([^}]+)\}/g;for(;(u=g.exec(l))!==null;)u[1].split(",").map(h=>h.trim().split(/\s+as\s+/)[0].trim()).forEach(h=>m.add(h));const d=p.filter(h=>!m.has(h));return d.length===0?l:`${l}
export { ${d.join(", ")} };`})((function(l){const p=[];let m=l;if(m=m.replace(/import\s*\{([^}]+)\}\s*from\s*(['"][^'"]+['"])\s*;?/g,(b,u,g)=>{const d=u.split(",").map(y=>y.trim()),h=[];for(const y of d){if(!y)continue;const E=y.match(/^(\w+)\s+as\s+(\w+)$/);if(E){const[,C,x]=E,w=`__raw_${x}`;h.push(`${C} as ${w}`),p.push(`const ${x} = __wrapReactiveArray(${w}, __ladrillos_componentId, "${x}");`)}else{const C=`__raw_${y}`;h.push(`${y} as ${C}`),p.push(`const ${y} = __wrapReactiveArray(${C}, __ladrillos_componentId, "${y}");`)}}return`import { ${h.join(", ")} } from ${g};`}),p.length>0){const b=m.split(`
`);let u=-1;for(let g=0;g<b.length;g++){const d=b[g].trim();(d.startsWith("import ")||d.startsWith("import{"))&&(u=g)}u>=0&&(b.splice(u+1,0,"","// === Reactive Import Wrappers ===",...p,"// === End Reactive Import Wrappers ===",""),m=b.join(`
`))}return m})(o)),s=(function(l){const p=new Set;for(const m of Kr){const b=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[\\s,{])${b}(?:\\s+as\\b|[\\s,}=;(])|\\b(?:let|const|var|function)\\s+${b}\\b`,"m").test(l)&&p.add(m)}return p})(o),a=(function(l,p,m=new Set){const b=(u,g)=>m.has(u)?"":g;return`
// === LadrillosJS Framework Helpers (auto-injected) ===
const __ladrillos_componentId = "${l||"anonymous"}";
const __ladrillos_componentUrl = "${p||"unknown"}";

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
${b("$emit","const $emit = __ladrillos_emit;")}

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
${b("$listen","const $listen = __ladrillos_listen;")}

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
${b("$refs","const $refs = __ladrillos_refs;")}

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
${b("registerComponent","const registerComponent = __ladrillos_registerComponent;")}

// registerComponents - Register multiple components at once
const __ladrillos_registerComponents = async (configs) => {
  const resolvedConfigs = configs.map(config => ({
    ...config,
    path: __resolvePath(config.path)
  }));
  return globalThis.ladrillosjs.registerComponents(resolvedConfigs);
};
${b("registerComponents","const registerComponents = __ladrillos_registerComponents;")}

// $use - Shorthand for registerComponent with auto-derived tag name
const __ladrillos_use = async (path, useShadowDOM = true) => {
  const tagName = __filenameToTagName(path);
  return __ladrillos_registerComponent(tagName, path, useShadowDOM);
};
${b("$use","const $use = __ladrillos_use;")}

// === End Framework Helpers ===

`})(t,r||e.src,s)+i,f=new Blob([a],{type:"text/javascript"}),c=URL.createObjectURL(f);try{return await Tn(c)}finally{URL.revokeObjectURL(c)}}catch(n){throw console.error(`[LadrillosJS] Failed to load external module: ${e.src}`,n),n}}async function Qr(e){const t=e.filter(r=>r.external);for(const r of t)try{await rt(r)}catch(n){console.error(`[LadrillosJS] Failed to load external script: ${r.src}`,n)}}var Ft=new Map;async function eo(e,t,r){for(const n of e)if(r&&t)try{let o=Ft.get(n.href);if(!o){const i=await fetch(n.href);if(!i.ok){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`);continue}o=await i.text(),Ft.set(n.href,o)}dr(t,o,n.href)}catch(o){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`,o)}else{if(document.querySelector(`link[href="${n.href}"]`))continue;await new Promise(o=>{const i=document.createElement("link");i.rel=n.rel||"stylesheet",i.href=n.href,i.onload=()=>o(),i.onerror=()=>{console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`),o()},document.head.appendChild(i)})}}function to(e){const t=jt.get(e);if(t){for(const r of t)URL.revokeObjectURL(r);jt.delete(e)}}function no(e){const t=[],r=/import\s+(?:(\{[^}]+\})|(\*\s+as\s+\w+)|(\w+)(?:\s*,\s*(\{[^}]+\}))?)?\s*(?:from\s+)?['"]([^'"]+)['"]/g;let n;for(;(n=r.exec(e))!==null;){const[o,i,s,a,f,c]=n,l={statement:o,specifier:c,imports:[],isDefault:!1,isNamespace:!1,isSideEffect:!1};if(i||s||a||(l.isSideEffect=!0),a&&(l.isDefault=!0,l.imports.push({imported:"default",local:a})),s){l.isNamespace=!0;const m=s.replace(/\*\s+as\s+/,"").trim();l.imports.push({imported:"*",local:m})}const p=i||f;if(p){const m=p.slice(1,-1).split(",").map(b=>b.trim()).filter(Boolean);for(const b of m){const u=b.match(/(\w+)\s+as\s+(\w+)/);l.imports.push(u?{imported:u[1],local:u[2]}:{imported:b,local:b})}}t.push(l)}return t}async function Ht(e){if(Ue.has(e))return Ue.get(e);const t=(async()=>{try{return await Tn(e)}catch(r){throw console.error(`[LadrillosJS] Failed to fetch module: ${e}`,r),r}})();return Ue.set(e,t),t}function ro(e,t){return t&&Array.isArray(e)?G(e,t):e}function oo(e){return e.replace(/import\s+(?:(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*\{[^}]+\})?\s+from\s+)?['"][^'"]+['"]\s*;?/g,"").trim()}function so(e){return e.replace(/export\s*\{[^}]*\}\s*(?:from\s*['"][^'"]+['"])?\s*;?/g,"").replace(/export\s+\*(?:\s+as\s+\w+)?\s+from\s*['"][^'"]+['"]\s*;?/g,"").replace(/export\s+default\s+/g,"").replace(/export\s+(?=(?:const|let|var|function|class|async)\b)/g,"").trim()}function io(e){const t=[],r=[],n=e.replace(/`[^`]*`/g,s=>" ".repeat(s.length)).replace(/"(?:[^"\\]|\\.)*"/g,s=>" ".repeat(s.length)).replace(/'(?:[^'\\]|\\.)*'/g,s=>" ".repeat(s.length)).replace(/\/\*[\s\S]*?\*\//g,s=>" ".repeat(s.length)).replace(/\/\/[^\n]*/g,s=>" ".repeat(s.length));let o=0,i=0;for(;i<n.length;){const s=n[i];if(s!=="{")if(s!=="}"){if(o===0){const a=n.slice(i).match(/^(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);if(a){r.push(a[1]),i+=a[0].length;continue}const f=n.slice(i).match(/^(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/);if(f){t.push(f[1]),i+=f[0].length;continue}}i++}else o--,i++;else o++,i++}return{variables:t,functions:r}}async function ao(e,t,r,n,o,i,s){if(e.type!=="module")throw new Error('executeModuleScriptWithReactivity only handles type="module" scripts');const a=e.content,f=await(async function(d,h,y){const E=no(d),C={};for(const x of E){if(x.isSideEffect){await Ht(Te(x.specifier)?new URL(x.specifier,h).href:x.specifier);continue}const w=Te(x.specifier)?new URL(x.specifier,h).href:x.specifier;try{const T=await Ht(w);for(const k of x.imports){let A;A=k.imported==="*"?T:k.imported==="default"?T.default:T[k.imported],C[k.local]=ro(A,y)}}catch{}}return C})(a,t,i);if(o){const d=new Set([...Ye,...Qe,"ladrillosjs","$host","$refs","event","state"]);for(const[h,y]of Object.entries(f))d.has(h)||h in o||(o[h]=y)}const c=so(oo(a)),{variables:l,functions:p}=io(c),m=De(c,l),b=Object.keys(f),u=Object.values(f),g=`
    "use strict";
    return (async () => {
      ${m}
      ${p.length>0?`return { ${p.join(", ")} };`:"return {};"}
    })();
  `;try{const d=["console","alert","Math","JSON","Date","Array","Object","String","Number","Boolean","Promise","setTimeout","setInterval","clearTimeout","clearInterval"],h=d.map(N=>globalThis[N]),y=["$refs","__state__","$host"],E=[n||new Map,o||{},s],C=an(t),x=[C.registerComponent,C.registerComponents,C.$use],w=ct(r||"anonymous"),T=[w.$emit,w.$listen],k={...globalThis.ladrillosjs||{},registerComponent:C.registerComponent,registerComponents:C.registerComponents},A={registerComponent:C.registerComponent,registerComponents:C.registerComponents,$use:C.$use,$emit:w.$emit,$listen:w.$listen,ladrillosjs:k},$=new Set(b),v=[...b],S=b.map((N,I)=>N in A?A[N]:u[I]),_=(N,I)=>{for(let R=0;R<N.length;R++){const O=N[R];$.has(O)||($.add(O),v.push(O),S.push(I[R]))}};_(d,h),_(Ye,x),_(Qe,T),_(y,E),_(["ladrillosjs"],[k]);const L=await sn(v,g,`module:${a}`)(...S);return{...o||{},...L||{}}}catch(d){throw console.error("[LadrillosJS] Failed to execute module script:",d),console.error("Original code:",c),console.error("Transformed code:",m),console.error("Imports:",f),d}}async function lo(e,t,r,n,o,i,s,a){const f={},c=e.filter(m=>m.type==="module"),l=t.filter(m=>m.type==="module"),p=t.filter(m=>m.type!=="module");for(const m of p)try{await rt(m,n,r)}catch(b){console.error("[LadrillosJS] External script failed:",m.src,b)}for(const m of l)try{const b=await rt(m,n,r);if(b&&typeof b=="object")for(const[u,g]of Object.entries(b))u!=="default"&&(f[u]=g,i&&(i[u]=g))}catch(b){console.error("[LadrillosJS] External module script failed:",m.src,b)}for(const m of c)try{const b=await ao(m,r,n,o,i,s,a);Object.assign(f,b)}catch(b){console.error("[LadrillosJS] Module script failed:",b)}return f}function Bt(e){const t=e.trim(),r=(function(o){const i=(function(f){let c=0,l=0,p=0,m=!1,b=!1,u=!1,g=!1;for(let d=0;d<f.length;d++){const h=f[d];if(g)g=!1;else if(h!=="\\")if(b||u||h!=="'")if(m||u||h!=='"')if(m||b||h!=="`"){if(!(m||b||u)&&(h==="("?c++:h===")"?c=Math.max(0,c-1):h==="["?l++:h==="]"?l=Math.max(0,l-1):h==="{"?p++:h==="}"&&(p=Math.max(0,p-1)),h==="("&&c===0&&l===0&&p===0))return d}else u=!u;else b=!b;else m=!m;else g=!0}return-1})(o);if(i<0)return null;const s=(function(f,c){let l=0,p=!1,m=!1,b=!1,u=!1;for(let g=c;g<f.length;g++){const d=f[g];if(u)u=!1;else if(d!=="\\")if(m||b||d!=="'")if(p||b||d!=='"')if(p||m||d!=="`"){if(!(p||m||b)){if(d==="(")l++;else if(d===")"){if(l--,l===0)return g;if(l<0)return-1}}}else b=!b;else m=!m;else p=!p;else u=!0}return-1})(o,i);if(s<0||o.slice(s+1).trim().length!==0)return null;const a=Ut(o.slice(0,i).trim());return a?{calleePath:a,args:co(o.slice(i+1,s))}:null})(t);if(r)return{raw:t,path:r.calleePath,isFunction:!0,isExpression:!0,functionArgs:r.args};const n=Ut(t);return n?{raw:t,path:n,isFunction:!1,isExpression:!1}:{raw:t,path:[],isExpression:!0}}function Ut(e){return/^[$A-Z_][0-9A-Z_$]*(?:\s*\.\s*[$A-Z_][0-9A-Z_$]*)*$/i.test(e)?e.split(".").map(t=>t.trim()).filter(t=>t.length>0):null}function co(e){const t=[];let r="",n=0,o=0,i=0,s=!1,a=!1,f=!1,c=!1;for(let p=0;p<e.length;p++){const m=e[p];if(c)r+=m,c=!1;else if(m!=="\\")if(a||f||m!=="'")if(s||f||m!=='"')if(s||a||m!=="`"){if(!s&&!a&&!f&&(m==="("?n++:m===")"?n=Math.max(0,n-1):m==="["?o++:m==="]"?o=Math.max(0,o-1):m==="{"?i++:m==="}"&&(i=Math.max(0,i-1)),m===","&&n===0&&o===0&&i===0)){const b=r.trim();b.length>0&&t.push(b),r="";continue}r+=m}else f=!f,r+=m;else a=!a,r+=m;else s=!s,r+=m;else r+=m,c=!0}const l=r.trim();return l.length>0&&t.push(l),t}function Wt(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null);let n;for(;n=r.nextNode();){if(Zt(n)||Jt(n))continue;const i=n.textContent;if(!i)continue;const s=[...i.matchAll($t.bindings)];if(s.length>0){const a=i,f=s.map(c=>Bt(c[1].trim()));t.push({node:n,bindings:f,original:a})}}const o=(function(i){const s=[],a=["$bind","$ref","$no:bind","condition","each","key","track-by"],f=Array.from(i.querySelectorAll("*"));for(const c of f)if(c.tagName!=="FOR"&&!Zt(c)&&!c.hasAttribute("$no:bind")&&!Jt(c))for(const l of Array.from(c.attributes)){if(a.includes(l.name))continue;const p=[...l.value.matchAll($t.bindings)];if(p.length>0){const m=document.createTextNode(l.value),b=p.map(u=>Bt(u[1].trim()));s.push({node:m,bindings:b,original:l.value,isAttribute:!0,attributeName:l.name,element:c})}}return s})(e);return t.push(...o),t}function Zt(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Jt(e){let t=e.parentElement;for(;t;){if(t.hasAttribute&&t.hasAttribute("$no:bind"))return!0;t=t.parentElement}return!1}var ne="FOR",Mn="ELSE-IF",In="ELSE";function Me(e){const t=e.trim();return t.startsWith("{")&&t.endsWith("}")?t.slice(1,-1).trim():t}function uo(e,t){const r=Array.from(e.querySelectorAll(`[${ut(ue)}]`));for(const n of r){const o=n.getAttribute(ue);o&&(t.refs.set(o,n),n.removeAttribute(ue))}}function fo(e,t){const r=Array.from(e.querySelectorAll("for"));for(const n of r){if(!e.contains(n))continue;const o=Rn(n,e);o&&t.loops.push(o)}}function Rn(e,t){const r=e.getAttribute("each")||e.getAttribute("of")||"";if(!r)return null;const n=(function(f){const c=f.match(ye.forAlias);if(!c)return null;let l,[,p,m]=c;p=p.trim(),m=m.trim();const b=m.match(/\s+track\s+by\s+(.+)$/i);b&&(l=b[1].trim(),m=m.slice(0,b.index).trim());const u=p.replace(ye.stripParens,"").trim(),g=u.match(ye.forIterator);let d,h,y;return g?(d=u.replace(ye.forIterator,"").trim(),h=g[1]?.trim(),y=g[2]?.trim()):d=u,{item:d,index:h||y,key:l,array:m}})(r);if(!n)return null;const o=e.getAttribute("key")||e.getAttribute("track-by")||n.key,i=(function(f){const c=[];for(const p of Array.from(f.childNodes))(p.nodeType!==Node.TEXT_NODE||p.textContent?.trim())&&c.push(p);if(c.length===0)return null;if(c.length===1&&c[0].nodeType===Node.ELEMENT_NODE&&c[0].tagName!==ne)return c[0];const l=document.createElement("span");l.style.display="contents";for(const p of Array.from(f.childNodes))l.appendChild(p);return l})(e);if(!i)return null;const s=document.createComment(` <for> ${r} `),a=e.parentElement||t;return a.insertBefore(s,e),e.remove(),{template:i,expression:r,itemName:n.item,indexName:n.index,arrayName:n.array,keyAttribute:o,placeholder:s,renderedElements:[],originalParent:a,hasConditionals:i.querySelector("IF")!==null,hasNestedLoops:i.querySelector(ne)!==null}}function ze(e){let t=e.parentElement;for(;t;){if(t.tagName===ne)return!0;t=t.parentElement}return!1}function po(e,t){const r=Array.from(e.querySelectorAll("if"));for(const n of r){if(ze(n))continue;const o=[],i=Me(n.getAttribute("condition")||""),s=document.createComment(` <if> ${i} `),a=n.parentElement||e,f=n.nextSibling;a.insertBefore(s,n),o.push(We(n,i,"if",s,a,f));let c=n.nextElementSibling;for(;c;){const l=c.tagName;if(l!==Mn){if(l===In){o.push(We(c,"","else",s,a,c.nextSibling)),c.remove();break}break}{const p=Me(c.getAttribute("condition")||""),m=c.nextElementSibling;o.push(We(c,p,"else-if",s,a,c.nextSibling)),c.remove(),c=m}}n.remove();for(const l of o)l.group=o;t.conditionals.push(o)}}function We(e,t,r,n,o,i){return e.removeAttribute("condition"),e.style.display="contents",{element:e,condition:t,type:r,placeholder:n,group:[],originalParent:o,nextSibling:i}}function mo(e,t){const r=Array.from(e.querySelectorAll("show"));for(const n of r){if(!n.parentNode||ze(n))continue;const o=Me(n.getAttribute("condition")||""),i=n;i.style.display="contents",t.showElements.push({element:i,expression:o,originalDisplay:"contents"}),n.removeAttribute("condition")}}function ho(e,t){const r=Array.from(e.querySelectorAll(`[${ut(te)}]`));for(const n of r){const o=n.getAttribute(te);if(!o||go(n))continue;const i={element:n,path:o.split("."),raw:o,isContentEditable:n.hasAttribute("contenteditable")};t.twoWayBindings.push(i),n.removeAttribute(te)}}function go(e,t){return ze(e)}function On(e,t,r,n){(globalThis.__P__??=[]).push({arr:e.arrayName,scope:n?Object.keys(n):null,scopeNames:e.scopeNames,nested:e.hasNestedLoops});const o=r(e.arrayName,n?{...t,...n}:t);if(!o||(i=o)==null||!Array.isArray(i)&&typeof i[Symbol.iterator]!="function"&&typeof i!="object"){for(const $ of e.renderedElements)$.remove();return e.renderedElements=[],void(e.previousItems=[])}var i;const s=Array.from(o),a=e.previousItems||[],f=e.renderedElements;e.keyGetter||(e.keyGetter=(function($,v){if(!$)return(_,L)=>L;const S=$.startsWith(v+".")?$.slice(v.length+1).split("."):$.split(".");return _=>{let L=_;for(const N of S){if(L==null)return;L=L[N]}return L}})(e.keyAttribute,e.itemName));const c=(function($){const v=$.__scriptContent;return{...$,__reactiveState__:$,__scriptContent__:v||"",__componentUrl__:$.__componentUrl||""}})(t);n&&Object.assign(c,n),c[e.itemName]=null,e.indexName&&(c[e.indexName]=0);const l=typeof r.forContext=="function"?r.forContext(c,e.indexName?[e.itemName,e.indexName]:[e.itemName]):$=>r($,c),p=($,v)=>{c[e.itemName]=$,e.indexName&&(c[e.indexName]=v),l.refresh?.()},m=e.indexName?[e.itemName,e.indexName]:[e.itemName],b=e.scopeNames?.length?[...e.scopeNames,...m]:m;let u=null;const g=()=>u??=Un(t,b),d=(function($){const v=$.match(/^\s*([A-Za-z_$][\w$]*)/);return v?v[1]:null})(e.arrayName),h=d!==null&&Object.prototype.hasOwnProperty.call(t,d)?d:n?.[Ee]??d,y=($,v,S)=>{const _=$[Vt];if(!_)return;const L=((N,I)=>{const R=n?{...n}:{};return R[e.itemName]=N,e.indexName&&(R[e.indexName]=I),h&&(R[Ee]=h),R})(v,S);for(const N of _)On(N,t,r,L)},E=($,v,S)=>{const _=$[Ie];_&&(_[e.itemName]=v,e.indexName&&(_[e.indexName]=S))},C=(function($){let v=Yt.get($);return v===void 0&&(v=(function(S){if(S.hasConditionals||S.template.querySelector(ne)!==null)return null;const _=[],L=[],N=[],I=[],R=[],O=z=>{if(z.nodeType===Node.ELEMENT_NODE){const H=z.attributes;for(let P=0;P<H.length;P++){const M=H[P];if(_e.has(M.name))I.push({path:R.slice(),attrName:M.name,eventName:M.name.slice(2),code:Re(M.value),directive:null});else if(Ne(M.name)){const j=ft(M.name);j&&I.push({path:R.slice(),attrName:M.name,eventName:j.eventName,code:Re(M.value),directive:j,options:pt(j.eventModifiers)})}else M.name==="$bind"?N.push({path:R.slice(),expr:M.value}):M.value.includes("{")&&L.push({path:R.slice(),name:M.name,parsed:oe(M.value)})}}else if(z.nodeType===Node.TEXT_NODE){const H=z.textContent;H&&H.includes("{")&&_.push({path:R.slice(),parsed:oe(H)})}const ie=z.childNodes;for(let H=0;H<ie.length;H++)R.push(H),O(ie[H]),R.pop()};return O(S.template),{texts:_,attrs:L,binds:N,handlers:I,delegated:null,delegatedEvents:[]}})($),Yt.set($,v)),v})(e),x=($,v)=>{const S=e.template.cloneNode(!0);p($,v);const _=Object.create(g().proto);return n&&Object.assign(_,n),_[e.itemName]=$,e.indexName&&(_[e.indexName]=v),h&&(_[Ee]=h),S[Ie]=_,e.hasNestedLoops&&(S[Vt]=(function(L,N){const I=[];for(const R of Array.from(L.querySelectorAll(ne))){if(!R.parentNode||bo(R,L))continue;const O=Rn(R,L);O&&(O.scopeNames=N,I.push(O))}return I})(S,b)),C?((function(L,N,I,R,O,B){const U=I.invoke!==void 0&&I.sig!==void 0,W=P=>{let M=L;for(let j=0;j<P.length;j++)M=M.childNodes[P[j]];return M},z=new Array(N.texts.length);for(let P=0;P<N.texts.length;P++){const{path:M,parsed:j}=N.texts[P],D=W(M);D.__originalTemplate=D.textContent;const{statics:F,exprs:Z}=j,V=U?re(j,I):null;let X=F[0];for(let J=0;J<Z.length;J++){const q=V!==null?V[J]:null,ge=q!==null?I.invoke(q,Z[J]):I(Z[J]);X+=String(ge??"")+F[J+1]}D.textContent=X,z[P]={node:D,parsed:j}}const ie=new Array(N.attrs.length);for(let P=0;P<N.attrs.length;P++){const{path:M,name:j,parsed:D}=N.attrs[P],F=W(M).getAttributeNode(j);F.__originalTemplate=F.value;const{statics:Z,exprs:V}=D,X=U?re(D,I):null;let J=Z[0];for(let q=0;q<V.length;q++){const ge=X!==null?X[q]:null,be=ge!==null?I.invoke(ge,V[q]):I(V[q]);J+=(be!==null&&typeof be=="object"?JSON.stringify(be):String(be??""))+Z[q+1]}F.value=J,ie[P]={attr:F,parsed:D}}const H=[];if(N.binds.length>0){const P=O();for(const M of N.binds){const j=W(M.path);j.removeAttribute(te);const D=Zn(j,M.expr,R,P,I);D&&H.push(D)}}if(N.handlers.length>0||N.delegated!==null){const P=O();for(const M of N.handlers){const j=W(M.path);j.removeAttribute(M.attrName);const D=gt(M.code,R,P);D&&(M.directive?j.addEventListener(M.eventName,Pe(D,M.directive),M.options):j.addEventListener(M.eventName,D))}if(N.delegated!==null){L[Dn]=B;for(const M of N.delegated){const j=W(M.path);for(const D of M.entries)j.removeAttribute(D.attrName);j[Pn]=M.stamp}(function(M,j,D){let F=Xt.get(M);F||(F={container:M.placeholder.parentNode??M.originalParent,setup:j,events:new Set},Xt.set(M,F)),F.setup=j;for(const Z of D)if(!F.events.has(Z)){F.events.add(Z);const V=F;F.container.addEventListener(Z,X=>vo(X,M,V))}})(B,P,N.delegatedEvents)}}L[fe]={texts:z,attrs:ie,conds:[],binds:H}})(S,C,l,_,g,e),y(S,$,v),S):(e.hasConditionals&&Hn(S,c,r,l),Bn(S,c,r,l,_,g),y(S,$,v),S)},w=new Array(s.length),T=new Array(s.length);if(s.length===a.length&&f.length===s.length){let $=!0;for(let v=0;v<s.length;v++)if(s[v]!==a[v]){$=!1;break}if($){for(let v=0;v<s.length;v++)p(s[v],v),E(f[v],s[v],v),Ze(f[v],c,r,l,g),y(f[v],s[v],v);return void(e.previousItems=s)}}if(e.keyAttribute){const $=new Map,v=new Map;for(let _=0;_<a.length;_++){const L=e.keyGetter(a[_],_);v.set(L,_),f[_]&&$.set(L,f[_])}const S=new Set;for(let _=0;_<s.length;_++)S.add(e.keyGetter(s[_],_));for(const[_,L]of $)S.has(_)||(L.remove(),$.delete(_));for(let _=0;_<s.length;_++){const L=s[_],N=e.keyGetter(L,_),I=$.get(N);I?(p(L,_),E(I,L,_),Ze(I,c,r,l,g),y(I,L,_),w[_]=I,T[_]=v.get(N)??-1):(w[_]=x(L,_),T[_]=-1)}}else{const $=Math.min(a.length,s.length);for(let v=0;v<s.length;v++)v<$?(p(s[v],v),E(f[v],s[v],v),Ze(f[v],c,r,l,g),y(f[v],s[v],v),w[v]=f[v],T[v]=v):(w[v]=x(s[v],v),T[v]=-1);for(let v=$;v<f.length;v++)f[v]?.remove()}const k=(function($){const v=$.length,S=new Set;if(v===0)return S;let _=-1,L=!0;for(let O=0;O<v;O++){const B=$[O];if(!(B<0)){if(B<=_){L=!1;break}_=B}}if(L){for(let O=0;O<v;O++)$[O]>=0&&S.add(O);return S}const N=[],I=new Array(v).fill(-1);for(let O=0;O<v;O++){const B=$[O];if(B<0)continue;let U=0,W=N.length;for(;U<W;){const z=U+W>>1;$[N[z]]<B?U=z+1:W=z}U>0&&(I[O]=N[U-1]),N[U]=O}let R=N.length>0?N[N.length-1]:-1;for(;R!==-1;)S.add(R),R=I[R];return S})(T),A=e.placeholder.parentNode;if(A){let $=e.placeholder;for(let v=0;v<w.length;v++){const S=w[v];k.has(v)||$.nextSibling!==S&&A.insertBefore(S,$.nextSibling),$=S}}e.renderedElements=w,e.previousItems=[...s]}var qt=new Map;function re(e,t){if(e.fnsSig!==t.sig){const r=new Array(e.exprs.length);for(let n=0;n<e.exprs.length;n++)r[n]=t.compile(e.exprs[n]);e.fns=r,e.fnsSig=t.sig}return e.fns}function oe(e){let t=qt.get(e);if(t)return t;const r=[],n=[],o=/\{([^}]+)\}/g;let i,s=0;for(;i=o.exec(e);)r.push(e.slice(s,i.index)),n.push(i[1].trim()),s=i.index+i[0].length;return r.push(e.slice(s)),t={statics:r,exprs:n},qt.set(e,t),t}var fe="__ladrillosBindingCache",Ie="__ladrillosLoopCtx",jn="__ladrillosLoopBind",Ee="__ladrillosLoopRoot",Vt="__ladrillosLoopNested";function bo(e,t){let r=e.parentElement;for(;r&&r!==t;){if(r.tagName===ne)return!0;r=r.parentElement}return!1}function Gt(e){const t=[],r=[],n=[],o=[],i=f=>{const c=f[jn];c&&n.push(c);const l=f.attributes;for(let p=0;p<l.length;p++){const m=l[p].__originalTemplate;m&&r.push({attr:l[p],parsed:oe(m)})}};i(e);const s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let a;for(;a=s.nextNode();)if(a.nodeType===Node.TEXT_NODE){const f=a.__originalTemplate;f&&t.push({node:a,parsed:oe(f)})}else a.nodeType===Node.ELEMENT_NODE?i(a):a[Fe]&&o.push(a);return{texts:t,attrs:r,conds:o,binds:n}}var Pn="__ladrillosDelegated",Dn="__ladrillosLoopOwner",Xt=new WeakMap;function vo(e,t,r){const n=r.container,o=[];let i=null,s=e.target;for(;s&&s!==n;){const a=s[Pn];if(a&&a.owner===t&&o.push(a.entries),s[Dn]===t){i=s[Ie]??null;break}s=s.parentNode}if(i!==null&&o.length!==0){for(const a of o)for(const f of a)if(f.eventName===e.type&&(yo(f,e,i,r.setup),e.cancelBubble))return}}function yo(e,t,r,n){const o=Wn(e.code,n);if(!o)return;const i=s=>{try{dt(s),o(s,r,n.reactiveState,n.emit,n.listen)}catch(a){je(`Error in loop event handler: ${e.code}`,null,a)}};e.directive?Pe(i,e.directive)(t):i(t)}var Yt=new WeakMap;function Ze(e,t,r,n=i=>r(i,t),o){let i=e[fe];i||(i=Gt(e),e[fe]=i),i.conds.length>0&&(function(l,p,m,b,u,g){let d=!1;for(const h of l){const y=h[Fe],E=zn(y.branches,b);if(E!==y.currentIndex&&(d=!0,y.currentEl&&y.currentEl.parentNode&&y.currentEl.remove(),y.currentEl=null,y.currentIndex=-1,E>=0)){const C=Fn(y.branches[E]);h.parentNode.insertBefore(C,h.nextSibling),y.currentIndex=E,y.currentEl=C,Hn(C,p,m,b),Bn(C,p,m,b,u,g)}}return d})(i.conds,t,r,n,e[Ie]??t,o)&&(i=Gt(e),e[fe]=i);const s=n.invoke!==void 0&&n.sig!==void 0,a=i.texts;for(let l=0;l<a.length;l++){const{node:p,parsed:m}=a[l],{statics:b,exprs:u}=m,g=s?re(m,n):null;let d=b[0];for(let h=0;h<u.length;h++){const y=g!==null?g[h]:null,E=y!==null?n.invoke(y,u[h]):n(u[h]);d+=String(E??"")+b[h+1]}p.textContent!==d&&(p.textContent=d)}const f=i.attrs;for(let l=0;l<f.length;l++){const{attr:p,parsed:m}=f[l],{statics:b,exprs:u}=m,g=s?re(m,n):null;let d=b[0];for(let h=0;h<u.length;h++){const y=g!==null?g[h]:null,E=y!==null?n.invoke(y,u[h]):n(u[h]);d+=(E!==null&&typeof E=="object"?JSON.stringify(E):String(E??""))+b[h+1]}p.value!==d&&(p.value=d)}const c=i.binds;for(let l=0;l<c.length;l++){const{element:p,expr:m,isContentEditable:b}=c[l];He(p,n(m),b)}}var Fe="__ladrillosLoopCond";function zn(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(n.type==="else")return r;try{if(t(n.condition))return r}catch{}}return-1}function Fn(e){const t=document.createElement("span");return t.style.display="contents",t.appendChild(e.template.content.cloneNode(!0)),t}function Je(e,t){const r=document.createElement("template");for(const n of Array.from(e.childNodes))r.content.appendChild(n.cloneNode(!0));return{type:t,condition:t==="else"?"":Me(e.getAttribute("condition")||""),template:r}}function Hn(e,t,r,n){const o=n??(s=>r(s,t));let i=1e4;for(;i-- >0;){let s=null;const a=e.querySelectorAll("IF");for(let u=0;u<a.length;u++){const g=a[u];if(g.parentNode&&!ze(g)){s=g;break}}if(!s)return;const f=[];f.push(Je(s,"if"));const c=[];let l=s.nextElementSibling;for(;l;){if(l.tagName!==Mn){if(l.tagName===In){f.push(Je(l,"else")),c.push(l);break}break}f.push(Je(l,"else-if")),c.push(l),l=l.nextElementSibling}const p=document.createComment(" <if> (loop) "),m={branches:f,currentIndex:-1,currentEl:null};p[Fe]=m,s.parentNode.insertBefore(p,s),s.remove();for(const u of c)u.remove();const b=zn(f,o);if(b>=0){const u=Fn(f[b]);p.parentNode.insertBefore(u,p.nextSibling),m.currentIndex=b,m.currentEl=u}}}function Bn(e,t,r,n,o,i){const s=[],a=[],f=[],c=[],l=n??(typeof r.forContext=="function"?r.forContext(t):E=>r(E,t)),p=o??t;let m=null;const b=i??(()=>m??=(function(E){const C=E.__reactiveState__??E;return Un(C,Object.keys(E).filter(x=>!x.startsWith("__")&&typeof E[x]!="function"&&!Object.prototype.hasOwnProperty.call(C,x)))})(t)),u=l.invoke!==void 0&&l.sig!==void 0,g=(E,C,x)=>{const w=E!==null?E[x]:null;return w!==null?l.invoke(w,C[x]):l(C[x])},d=E=>{for(const x of Array.from(E.attributes))if(!_e.has(x.name)&&!Ne(x.name)&&x.value.includes("{")){const w=oe(x.value);x.__originalTemplate=x.value;const T=u?re(w,l):null;let k=w.statics[0];for(let A=0;A<w.exprs.length;A++){const $=g(T,w.exprs,A);k+=($!==null&&typeof $=="object"?JSON.stringify($):String($??""))+w.statics[A+1]}x.value=k,a.push({attr:x,parsed:w})}const C=E.getAttribute(te);if(C!==null){E.removeAttribute(te);const x=Zn(E,C,p,b(),l);x&&f.push(x)}(function(x,w,T){const k=x.attributes;let A=null;for(let v=0;v<k.length;v++){const S=k[v].name;(_e.has(S)||Ne(S))&&(A??=[]).push({name:S,value:k[v].value})}if(!A)return;const $=T();for(const{name:v,value:S}of A)if(_e.has(v)){x.removeAttribute(v);const _=v.slice(2),L=gt(Re(S),w,$);L&&x.addEventListener(_,L)}else xo(x,v,S,w,$)})(E,p,b)};d(e);const h=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let y;for(;y=h.nextNode();)if(y.nodeType===Node.TEXT_NODE){const E=y.textContent;if(E&&E.includes("{")){const C=oe(E);y.__originalTemplate=E;const x=u?re(C,l):null;let w=C.statics[0];for(let T=0;T<C.exprs.length;T++)w+=String(g(x,C.exprs,T)??"")+C.statics[T+1];y.textContent=w,s.push({node:y,parsed:C})}}else y.nodeType===Node.ELEMENT_NODE?d(y):y[Fe]&&c.push(y);e[fe]={texts:s,attrs:a,conds:c,binds:f}}function Re(e){return e.replace(/\{([^}]+)\}/g,(t,r)=>`(${r.trim()})`)}function xo(e,t,r,n,o){const i=ft(t);if(!i)return;const s=Re(r);e.removeAttribute(t);const a=gt(s,n,o);if(!a)return;const f=Pe(a,i),c=pt(i.eventModifiers);e.addEventListener(i.eventName,f,c)}var Kt=new Map,ce=new Map,$o=1e3;function Un(e,t){const r=e.__scriptContent||"",n=r.trim().length>0,o=e.__hasModuleScripts===!0,i=[],s=[];for(const d of Object.keys(e))d.startsWith("__")||(typeof e[d]=="function"?s.push(d):i.push(d));const a=t.filter(d=>!i.includes(d)),f=s.filter(d=>!t.includes(d));let c="",l="";if(o||!n)l=f.length>0?`const { ${f.join(", ")} } = context;`:"";else{const d=Kt.get(r);d!==void 0?c=d:(c=wn(r,[]),Kt.set(r,c))}const p=a.length>0?`const { ${a.join(", ")} } = context;`:"",m=i.length>0?`let { ${i.join(", ")} } = reactiveState;`:"",b=!o&&i.length>0?i.map(d=>`reactiveState.${d} = ${d};`).join(" "):"",u=ct(e.__componentId||"anonymous"),g={__reactiveState__:e,__scriptContent__:r,__componentUrl__:e.__componentUrl||""};for(const d of s)g[d]=e[d];return{reactiveState:e,proto:g,bodyPrefix:`"use strict";
      ${p}
      ${m}
      ${l}
      ${c}
      `,bodySuffix:`;
      ${b}`,emit:u.$emit,listen:u.$listen,fnCache:new Map}}function Wn(e,t){let r=t.fnCache.get(e);if(r!==void 0)return r;const n=t.bodyPrefix+e+t.bodySuffix;if(r=ce.get(n)??null,r===null)try{if(ce.size>=$o){const o=ce.keys().next().value;o!==void 0&&ce.delete(o)}r=on(["event","context","reactiveState","$emit","$listen"],n,!1,`handler:${e}`),ce.set(n,r)}catch{r=null}return t.fnCache.set(e,r),r}function gt(e,t,r){const n=Wn(e,r);if(!n)return null;const{reactiveState:o,emit:i,listen:s}=r;return a=>{try{dt(a),n(a,t,o,i,s)}catch(f){je(`Error in loop event handler: ${e}`,null,f)}}}function wo(e,t,r){for(const n of e)n.element.parentNode&&n.element.remove();for(const n of e){let o=!1;if(n.type==="else"?o=!0:o=!!r(n.condition,t),o){n.placeholder.parentNode?.insertBefore(n.element,n.placeholder.nextSibling);break}}}function _o(e,t,r,n){const o=e.element,{raw:i,path:s,isContentEditable:a}=e;He(o,r(i,t),a);const f=s[0];n.has(f)||n.set(f,[]),n.get(f).push({element:o,path:s,isContentEditable:a}),i===f||n.has(i)||n.set(i,[]),i!==f&&n.get(i).push({element:o,path:s,isContentEditable:a});const c=Jn(o);let l=!1;o.__isUpdatingFromState=()=>l,o.__setUpdatingFromState=m=>{l=m};const p=()=>{if(l)return;const m=qn(o,a);ot(t,s,m)};o.__ladrillosBindSync={eventType:c,sync:p},o.addEventListener(c,p)}function Zn(e,t,r,n,o){const i=t.trim();if(!i)return null;const s=i.split(".").map(h=>h.trim()),a=s[0],f=n.reactiveState,c=Object.prototype.hasOwnProperty,l=!c.call(f,a)&&c.call(r,a);if(l&&s.length===1)return je(`$bind="${i}" targets the <for> row variable itself, which has nowhere to write back to. Bind one of its properties instead, e.g. $bind="${a}.value".`),null;const p=e,m=p.hasAttribute("contenteditable"),b=r[Ee],u=Jn(p);He(p,o(i),m);const g=()=>{const h=qn(p,m);if(!l)return void ot(f,s,h);const y=r[a];if(y===null||typeof y!="object")return;ot(y,s.slice(1),h);const E=f.__notifyKeyChanged;b&&typeof E=="function"&&E(b)};p.__ladrillosBindSync={eventType:u,sync:g},p.addEventListener(u,g);const d={element:p,expr:i,isContentEditable:m};return p[jn]=d,d}function Jn(e){if(e instanceof HTMLSelectElement)return"change";if(e instanceof HTMLInputElement){const t=e.type.toLowerCase();if(t==="checkbox"||t==="radio")return"change"}return"input"}function qn(e,t){if(t)return e.textContent||"";if(e instanceof HTMLInputElement){const r=e.type.toLowerCase();return r==="checkbox"?e.checked:r==="number"||r==="range"?e.valueAsNumber:e.value}return e instanceof HTMLSelectElement?e.multiple?Array.from(e.selectedOptions).map(r=>r.value):e.value:e instanceof HTMLTextAreaElement?e.value:e.value??""}function He(e,t,r){if(r){const n=String(t??"");return void(e.textContent!==n&&(e.textContent=n))}if(e instanceof HTMLInputElement){const n=e.type.toLowerCase();if(n==="checkbox"){const o=!!t;e.checked!==o&&(e.checked=o)}else if(n==="radio"){const o=e.value===String(t??"");e.checked!==o&&(e.checked=o)}else{const o=String(t??"");e.value!==o&&(e.value=o)}return}if(e instanceof HTMLSelectElement){const n=String(t??"");return void(e.value!==n&&(e.value=n))}e.value=e instanceof HTMLTextAreaElement?String(t??""):t}function ot(e,t,r){let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];i in n&&typeof n[i]=="object"||(n[i]={}),n=n[i]}n[t[t.length-1]]=r}var Ce=[],st=new Set,it=!1,at=!1,Qt=0,Eo=Promise.resolve();function Co(){at=!1,it=!0,Ce.sort((e,t)=>(e.id??0)-(t.id??0));try{for(const e of Ce)if(e.active!==!1)try{e()}catch(t){je("Error in scheduled update",null,t)}}finally{Ce.length=0,st.clear(),it=!1}}var xe=new Map,en=new Set(["state","_root","_initialized","_componentId","_directives","_evaluator","_updateBoundInputs","_pendingProps","_propsReady"]);function ko(e,t){const{tagName:r,template:n,scripts:o,externalScripts:i,externalStyles:s,styles:a,sourcePath:f,templateBindings:c=[]}=e,l=_n(o.map(b=>b.content).join(`
`)),p=[...new Set([...l,...c])];class m extends HTMLElement{static get observedAttributes(){return p}state={};_root=null;_initialized=!1;_componentId=`${r}-${Math.random().toString(36).slice(2)}`;_directives=null;_evaluator=null;_updateBoundInputs=null;_pendingProps=new Map;_propsReady=!1;constructor(){super()}async connectedCallback(){if(this._initialized)return;this._initialized=!0,Qn({tagName:r,sourcePath:f,instanceId:this._componentId});const u=this.innerHTML,g=document.createDocumentFragment();if(t)for(const x of Array.from(this.childNodes))g.appendChild(x.cloneNode(!0));else for(;this.firstChild;)g.appendChild(this.firstChild);this.__originalHTML=u,this.__originalChildren=g,this._root=t?this.shadowRoot??this.attachShadow({mode:"open"}):this;const{bindings:d}=((x,w)=>{const T=document.createElement("template");T.innerHTML=tr(_r(w)),pn(T.content),Ct(T.content),x.replaceChildren(),x.appendChild(T.content);const k=Wt(x);for(const A of et(x))k.push(...Wt(A));return{bindings:k}})(this._root,n);cr(this._root,a,t);const h=this._getAttributeOverrides();for(const x of p){if(en.has(x))continue;Object.prototype.hasOwnProperty.call(this,x)&&(this._pendingProps.set(x,this[x]),delete this[x]);const w=x.toLowerCase();w!==x&&Object.prototype.hasOwnProperty.call(this,w)&&(this._pendingProps.set(x,this[w]),delete this[w])}for(const[x,w]of this._pendingProps)h[x]=w;const y=o.filter(x=>x.type!=="module"),E=o.some(x=>x.type==="module"),C=sr(new Map);if((function(x,w){const T=Array.from(x.querySelectorAll(`[${ut(ue)}]`));for(const k of T){const A=k.getAttribute(ue);A&&w.set(A,k)}})(this._root,C),s&&s.length>0&&await eo(s,this._root,t),i.length>0&&await Qr(i),this.state=await Rr(this._root,y,d,h,()=>this._updateDirectives(),E,f,this._componentId,C,c),this._propsReady=!0,this._pendingProps.size>0){for(const[x,w]of this._pendingProps)this.state[x]=w;this._pendingProps.clear()}if($e().stateCallbacks.set(this._componentId,x=>{const w=this.state?.__notifyKeyChanged;x&&typeof w=="function"?w(x):this._updateDirectives()}),f){this.state.__suspendReactivity=!0;try{const x=await lo(o,i,f,this._componentId,C,this.state,()=>this._updateDirectives(),this);(E||i.length>0)&&(this.state.__hasModuleScripts=!0);for(const[w,T]of Object.entries(x))typeof T=="function"&&(this.state[w]=T)}finally{this.state.__suspendReactivity=!1}}E&&Or(this._root,d,this.state),this._evaluator=qr(),this._directives=(function(x,w){const T={loops:[],conditionals:[],twoWayBindings:[],refs:w,showElements:[]},k=[x,...et(x)];for(const A of k)uo(A,T),fo(A,T),mo(A,T),ho(A,T),po(A,T);return Ct(x),T})(this._root,C);{const x=$e().refs;let w=x.get(this._componentId);w||(w=new Map,x.set(this._componentId,w));for(const[T,k]of this._directives.refs)w.set(T,k)}this.refs=this._directives.refs,this.__refs=this._directives.refs,this._updateDirectives(),this._directives.twoWayBindings.length>0&&(this._updateBoundInputs=(function(x,w,T){const k=new Map;for(const A of x)_o(A,w,T,k);return A=>{(function($,v,S,_){const L=_?[_]:Array.from($.keys());for(const N of L){const I=$.get(N);if(I)for(const R of I){const{element:O,path:B,isContentEditable:U}=R,W=S(B.join("."),v),z=O.__setUpdatingFromState;z&&z(!0),He(O,W,U),z&&queueMicrotask(()=>z(!1))}}})(k,w,T,A)}})(this._directives.twoWayBindings,this.state,this._evaluator)),this.dispatchEvent(new CustomEvent("ladrillos:ready",{bubbles:!0,composed:!0,detail:{state:this.state,refs:this._directives.refs}}))}disconnectedCallback(){to(this._componentId),lr(this._componentId),(function(u){const g=xe.get(u);g&&(g.active=!1,xe.delete(u))})(this._componentId),$e().stateCallbacks.delete(this._componentId),this._initialized=!1,this._propsReady=!1}attributeChangedCallback(u,g,d){if(g===d||!this._initialized)return;const h=this._parseAttributeValue(d);this._propsReady?this.state[u]=h:this._pendingProps.set(u,h)}adoptedCallback(){}_updateDirectives(){this._directives&&this._evaluator&&(function(u,g){let d=xe.get(u);d||(d=(function(){const h=()=>{g()};return h.id=++Qt,h.active=!0,h})(),xe.set(u,d)),(function(h){h.id===void 0&&(h.id=++Qt),st.has(h.id)||(st.add(h.id),Ce.push(h),it||at||(at=!0,Eo.then(Co)))})(d)})(this._componentId,()=>{this._performDirectiveUpdates()})}_performDirectiveUpdates(){this._directives&&this._evaluator&&(this._directives.loops.length>0&&(function(u,g,d){for(const h of u)On(h,g,d)})(this._directives.loops,this.state,this._evaluator),this._directives.conditionals.length>0&&(function(u,g,d){for(const h of u)wo(h,g,d)})(this._directives.conditionals,this.state,this._evaluator),this._directives.showElements.length>0&&(function(u,g,d){for(const h of u){const y=d(h.expression,g);h.element.style.display=y?h.originalDisplay:"none"}})(this._directives.showElements,this.state,this._evaluator),this._updateBoundInputs&&this._updateBoundInputs())}_getAttributeOverrides(){const u={},g=[];for(const h of Array.from(this.attributes))if(this._isReservedAttribute(h.name))h.value&&h.value.trim()!==""&&g.push(h.name);else if(u[h.name]=this._parseAttributeValue(h.value),h.name.includes("-")){const y=h.name.replace(/-([a-z0-9])/g,(E,C)=>C.toUpperCase());y===h.name||y in u||(u[y]=u[h.name])}const d=g.filter(h=>!c.includes(h));return d.length>0&&d.map(h=>`"${h}" → try "${{title:"heading",class:"className",style:"customStyle",id:"componentId",hidden:"isHidden"}[h]||`my${h.charAt(0).toUpperCase()}${h.slice(1)}`}"`),u}_isReservedAttribute(u){return!c.includes(u)&&(["id","class","style","slot","part","is","tabindex","title","lang","dir","hidden","draggable","contenteditable"].includes(u.toLowerCase())||u.startsWith("data-"))}_parseAttributeValue(u){if(u===null)return null;if(u===""||u==="true")return!0;if(u==="false")return!1;const g=Number(u);if(!isNaN(g)&&u.trim()!=="")return g;try{const d=u.trim();if(d.startsWith("[")||d.startsWith("{"))return JSON.parse(d)}catch{}return u}get root(){return this._root}}for(const b of p){if(en.has(b)||b in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(m.prototype,b))continue;Object.defineProperty(m.prototype,b,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[b]:this._pendingProps.get(b)},set(g){this._propsReady?this.state[b]=g:this._pendingProps.set(b,g)}});const u=b.toLowerCase();u===b||u in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(m.prototype,u)||Object.defineProperty(m.prototype,u,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[b]:this._pendingProps.get(b)},set(g){this._propsReady?this.state[b]=g:this._pendingProps.set(b,g)}})}return m}function Ao(e,t){const{tagName:r}=e;if(!customElements.get(r)){const n=ko(e,t);customElements.define(r,n)}}var Vn=new Map,Gn=new Map,Xn=new Map;function me(e){if(e.evaluators)for(const[t,r]of Object.entries(e.evaluators))Vn.set(t,r);if(e.handlers)for(const[t,r]of Object.entries(e.handlers))Gn.set(t,r);if(e.setups)for(const[t,r]of Object.entries(e.setups))Xn.set(t,r)}var qe=class extends Error{constructor(e,t){super(`[LadrillosJS] No precompiled ${e} for ${JSON.stringify(t)}. This build cannot compile at runtime. Either the component was not processed by @ladrillosjs/compiler, or it is loaded from a path the compiler could not resolve statically.`),this.name="MissingArtifactError"}};function Ve(e,t){const{deps:r,fn:n}=e,o=[];for(let s=0;s<r.length;s++)o.push(t.indexOf(r[s]));const i=(s,a)=>a<0?void 0:s[a];switch(o.length){case 0:return function(){return n()};case 1:{const[s]=o;return function(){return n(i(arguments,s))}}case 2:{const[s,a]=o;return function(){return n(i(arguments,s),i(arguments,a))}}case 3:{const[s,a,f]=o;return function(){return n(i(arguments,s),i(arguments,a),i(arguments,f))}}default:return function(){const s=new Array(o.length);for(let a=0;a<o.length;a++)s[a]=i(arguments,o[a]);return n.apply(null,s)}}}function he(e,t={}){const{tagName:r}=e;r?.trim()&&r.includes("-")&&Ao(e,t.useShadowDOM??!0)}rr({name:"precompiled",compileEvaluator(e,t){const r=Vn.get(t);if(!r)throw new qe("evaluator",t);return Ve(r,e)},compileHandler(e,t,r,n){const o=Gn.get(n);if(!o)throw new qe("handler",n);return Ve(o,e)},compileSetup(e,t,r){const n=Xn.get(r);if(!n)throw new qe("setup",r);return Ve(n,e)}});const Lo={tagName:"site-header",template:`<header>
  <div class="nav-content">
    <div class="nav-left">
      <a href="./" class="nav-brand">
        <span class="brick-logo" aria-hidden="true">
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
  });`,type:null}],externalScripts:[],externalStyles:[],styles:`header {
    padding: 1.25rem 2rem;
    background: transparent;
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max);
    margin: 0 auto;
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
    transform: translateY(-2px) rotate(-4deg);
  }

  .brand-name {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  .brand-version {
    display: inline-flex;
    align-items: center;
    margin-left: 0.5rem;
    padding: 0.125rem 0.5rem;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1;
    color: #ff6b35;
    background: rgba(255, 107, 53, 0.1);
    border: 1px solid rgba(255, 107, 53, 0.25);
    border-radius: 100px;
    letter-spacing: 0.02em;
    text-transform: lowercase;
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
  }

  .nav-left-links a:hover {
    color: var(--text-secondary);
    text-decoration: none;
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
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn-cta:hover {
    background: #444;
    color: white;
    text-decoration: none;
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
      padding: 1rem 1.25rem;
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
      left: 0.75rem;
      right: 0.75rem;
      background: var(--bg-main);
      flex-direction: column;
      align-items: stretch;
      padding: 1rem;
      gap: 0.25rem;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      border: 1px solid var(--border);
    }

    .nav-right.active {
      display: flex;
    }

    .nav-right a {
      padding: 0.75rem 1rem;
      border-radius: 8px;
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
  }`,sourcePath:"components/site-header.html",templateBindings:["version"]};me({evaluators:{version:{deps:["version"],fn:e=>e}},handlers:{"handler:toggleMobileMenu()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{t.navLinks.classList.toggle("active")}}},setups:{'state:const toggleMobileMenu = () => {\n    $refs.navLinks.classList.toggle("active");\n  };\n\n  // Close menu when a link inside it is tapped\n  $refs.navLinks.addEventListener("click", (e) => {\n    if (e.target.closest("a")) {\n      $refs.navLinks.classList.remove("active");\n    }\n  });\n\n  // Close menu when clicking outside (composedPath pierces shadow DOM)\n  document.addEventListener("click", (e) => {\n    if (!$refs.navLinks.classList.contains("active")) return;\n    const path = e.composedPath();\n    if (path.includes($refs.navLinks)) return;\n    if (path.some((el) => el.classList && el.classList.contains("mobile-toggle"))) return;\n    $refs.navLinks.classList.remove("active");\n  });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{const f=()=>{r.navLinks.classList.toggle("active")};r.navLinks.addEventListener("click",c=>{c.target.closest("a")&&r.navLinks.classList.remove("active")}),document.addEventListener("click",c=>{if(!r.navLinks.classList.contains("active"))return;const l=c.composedPath();l.includes(r.navLinks)||l.some(p=>p.classList&&p.classList.contains("mobile-toggle"))||r.navLinks.classList.remove("active")}),e.toggleMobileMenu??=f}}}});function Oo(e){he(Lo,e)}const No={tagName:"install-section",template:`<div class="hero-actions">
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
                  <span class="attr">src</span>=<span class="string">"https://unpkg.com/ladrillosjs@2.0.0/dist/index.js"</span>&gt;&lt;/<span class="tag">script</span>&gt;</code>
                <button class="copy-btn" onclick="copyCommand('cdn')" $ref="cdnCopyBtn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                        </path>
                    </svg>
                    Copy
                </button>
            </div>
        </show>
    </div>
</div>`,scripts:[{content:`const commands = {
        npm: "npm install ladrillosjs",
        cdn: '<script src="https://cdn.jsdelivr.net/npm/ladrillosjs"><\\/script>',
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
    }`,sourcePath:"components/install.html",templateBindings:["tab"]};me({evaluators:{"tab === 'npm' ? 'active' : ''":{deps:["tab"],fn:e=>e==="npm"?"active":""},"tab === 'cdn' ? 'active' : ''":{deps:["tab"],fn:e=>e==="cdn"?"active":""},"tab==='npm'":{deps:["tab"],fn:e=>e==="npm"},"tab === 'cdn'":{deps:["tab"],fn:e=>e==="cdn"}},handlers:{"handler:tab = 'npm'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{e.tab="npm"}},"handler:tab = 'cdn'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{e.tab="cdn"}},"handler:copyCommand('npm')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{(l=>{navigator.clipboard.writeText(e.commands[l]);const p=t.npmCopyBtn,m=p.innerHTML;p.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{p.innerHTML=m},2e3)})("npm")}},"handler:copyCommand('cdn')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{(l=>{navigator.clipboard.writeText(e.commands[l]);const p=t.cdnCopyBtn,m=p.innerHTML;p.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{p.innerHTML=m},2e3)})("cdn")}}},setups:{'state:const commands = {\n        npm: "npm install ladrillosjs",\n        cdn: \'<script src="https://cdn.jsdelivr.net/npm/ladrillosjs"><\\/script>\',\n    };\n    let tab = \'npm\';\n\n    const copyCommand = (type) => {\n        navigator.clipboard.writeText(commands[type]);\n        const btn = type === "npm" ? $refs.npmCopyBtn : $refs.cdnCopyBtn;\n        const originalHTML = btn.innerHTML;\n        btn.innerHTML =\n            \'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!\';\n        setTimeout(() => {\n            btn.innerHTML = originalHTML;\n        }, 2000);\n    };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.commands??={npm:"npm install ladrillosjs",cdn:'<script src="https://cdn.jsdelivr.net/npm/ladrillosjs"><\/script>'},e.tab??="npm";const f=c=>{navigator.clipboard.writeText(e.commands[c]);const l=c==="npm"?r.npmCopyBtn:r.cdnCopyBtn,p=l.innerHTML;l.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{l.innerHTML=p},2e3)};e.copyCommand??=f}}}});function jo(e){he(No,e)}const So={tagName:"code-block",template:`<div class="code-container">\r
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
  }`,sourcePath:"components/code-block.html",templateBindings:["filename"]};me({evaluators:{filename:{deps:["filename"],fn:e=>e},copied:{deps:["copied"],fn:e=>e},"!filename":{deps:["filename"],fn:e=>!e},"!copied":{deps:["copied"],fn:e=>!e}},handlers:{"handler:await copyCode()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:async(e,t,r,n,o,i,s,a,f)=>{await(async()=>{const l=e.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(l),e.copied=!0,setTimeout(()=>e.copied=!1,2e3);return}const p=document.createElement("textarea");p.value=l,p.setAttribute("readonly",""),p.style.position="absolute",p.style.left="-9999px",document.body.appendChild(p),p.select();try{document.execCommand("copy"),e.copied=!0,setTimeout(()=>e.copied=!1,2e3)}catch(m){console.error("execCommand fallback failed:",m)}document.body.removeChild(p)})()}}},setups:{'state:let filename = null;\r\n  let language = null;\r\n  let copied = false;\r\n\r\n  const extToLang = {\r\n    js: "javascript", mjs: "javascript", cjs: "javascript",\r\n    ts: "typescript", jsx: "javascript", tsx: "typescript",\r\n    html: "html", htm: "html", xml: "xml", svg: "xml",\r\n    css: "css", scss: "scss", json: "json", md: "markdown",\r\n    sh: "bash", bash: "bash", zsh: "bash",\r\n    py: "python", rb: "ruby", go: "go", rs: "rust",\r\n    yml: "yaml", yaml: "yaml",\r\n  };\r\n\r\n  const innerRe = /(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)/gi;\r\n  const source = $host.__originalHTML ?? $host.innerHTML;\r\n  const matches = source.match(innerRe);\r\n  const raw = matches ? matches.join("") : "";\r\n\r\n  // Dedent: strip the common leading whitespace from every non-empty line\r\n  // so the rendered code doesn\'t inherit indentation from its host file.\r\n  const trimmed = raw.replace(/^[\\r\\n]+/, "").replace(/\\s+$/, "");\r\n  const lines = trimmed.split("\\n");\r\n  let minIndent = Infinity;\r\n  for (const line of lines) {\r\n    if (!line.trim()) continue;\r\n    const m = line.match(/^[ \\t]*/);\r\n    if (m && m[0].length < minIndent) minIndent = m[0].length;\r\n  }\r\n  if (!isFinite(minIndent)) minIndent = 0;\r\n  const html = lines.map((l) => l.slice(minIndent)).join("\\n");\r\n\r\n  // Resolve language: explicit prop wins, else infer from filename extension, else auto-detect.\r\n  let resolvedLang = language;\r\n  if (!resolvedLang && filename) {\r\n    const ext = filename.split(".").pop()?.toLowerCase();\r\n    resolvedLang = extToLang[ext];\r\n  }\r\n\r\n  $refs.codeEl.textContent = html;\r\n  if (resolvedLang) {\r\n    $refs.codeEl.classList.add(`language-${resolvedLang}`);\r\n  }\r\n\r\n  // Highlight now if hljs is ready; otherwise poll briefly until the CDN\r\n  // script finishes loading. Inlined (no helper) because Ladrillos may\r\n  // execute statements in separate scopes — closures over locals from\r\n  // a setInterval callback can otherwise lose access to them.\r\n  if (typeof hljs !== "undefined") {\r\n    $refs.codeEl.removeAttribute("data-highlighted");\r\n    hljs.highlightElement($refs.codeEl);\r\n  } else {\r\n    const codeEl = $refs.codeEl;\r\n    const start = Date.now();\r\n    const iv = setInterval(() => {\r\n      if (typeof hljs !== "undefined") {\r\n        clearInterval(iv);\r\n        if (codeEl) {\r\n          codeEl.removeAttribute("data-highlighted");\r\n          hljs.highlightElement(codeEl);\r\n        }\r\n      } else if (Date.now() - start > 5000) {\r\n        clearInterval(iv);\r\n      }\r\n    }, 50);\r\n  }\r\n\r\n  if ($refs.slotEl) $refs.slotEl.remove();\r\n\r\n  const copyCode = async () => {\r\n    const text = html;\r\n\r\n    if (navigator.clipboard && navigator.clipboard.writeText) {\r\n      await navigator.clipboard.writeText(text);\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n      return;\r\n    }\r\n\r\n    // iOS / fallback for older browsers\r\n    const textarea = document.createElement("textarea");\r\n    textarea.value = text;\r\n    textarea.setAttribute("readonly", "");\r\n    textarea.style.position = "absolute";\r\n    textarea.style.left = "-9999px";\r\n    document.body.appendChild(textarea);\r\n    textarea.select();\r\n\r\n    try {\r\n      document.execCommand("copy");\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n    } catch (err) {\r\n      console.error("execCommand fallback failed:", err);\r\n    }\r\n\r\n    document.body.removeChild(textarea);\r\n  };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.filename??=null,e.language??=null,e.copied??=!1,e.extToLang??={js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",jsx:"javascript",tsx:"typescript",html:"html",htm:"html",xml:"xml",svg:"xml",css:"css",scss:"scss",json:"json",md:"markdown",sh:"bash",bash:"bash",zsh:"bash",py:"python",rb:"ruby",go:"go",rs:"rust",yml:"yaml",yaml:"yaml"},e.innerRe??=new RegExp("(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)","gi"),e.source??=t.__originalHTML??t.innerHTML,e.matches??=e.source.match(e.innerRe),e.raw??=e.matches?e.matches.join(""):"",e.trimmed??=e.raw.replace(/^[\r\n]+/,"").replace(/\s+$/,""),e.lines??=e.trimmed.split(`
`),e.minIndent??=1/0;for(const c of e.lines)c.trim()&&(e.m??=c.match(/^[ \t]*/),e.m&&e.m[0].length<e.minIndent&&(e.minIndent=e.m[0].length));isFinite(e.minIndent)||(e.minIndent=0),e.html??=e.lines.map(c=>c.slice(e.minIndent)).join(`
`),e.resolvedLang??=e.language,!e.resolvedLang&&e.filename&&(e.ext??=e.filename.split(".").pop()?.toLowerCase(),e.resolvedLang=e.extToLang[e.ext]),r.codeEl.textContent=e.html,e.resolvedLang&&r.codeEl.classList.add(`language-${e.resolvedLang}`),typeof hljs<"u"?(r.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(r.codeEl)):(e.codeEl??=r.codeEl,e.start??=Date.now(),e.iv??=setInterval(()=>{typeof hljs<"u"?(clearInterval(e.iv),e.codeEl&&(e.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(e.codeEl))):Date.now()-e.start>5e3&&clearInterval(e.iv)},50)),r.slotEl&&r.slotEl.remove();const f=async()=>{const c=e.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(c),e.copied=!0,setTimeout(()=>e.copied=!1,2e3);return}const l=document.createElement("textarea");l.value=c,l.setAttribute("readonly",""),l.style.position="absolute",l.style.left="-9999px",document.body.appendChild(l),l.select();try{document.execCommand("copy"),e.copied=!0,setTimeout(()=>e.copied=!1,2e3)}catch(p){console.error("execCommand fallback failed:",p)}document.body.removeChild(l)};e.copyCode??=f}}}});function Po(e){he(So,e)}const To={tagName:"footer-section",template:`<footer class="footer">\r
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
        </ul>\r
      </div>\r
    </div>\r
    <div class="footer-bottom">\r
      <p>\r
        Built brick 🧱 by brick by\r
        <a href="https://github.com/drubiodev">Daniel Rubio</a>\r
      </p>\r
      <p>MIT License © {year} LadrillosJS</p>\r
    </div>\r
  </div>\r
</footer>`,scripts:[{content:"const year = new Date().getFullYear();",type:null}],externalScripts:[],externalStyles:[],styles:`/* ============================================\r
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
    background: var(--bg-darker);\r
    border-top: 1px solid var(--border);\r
    padding: 3rem 2rem 2rem;\r
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
    color: var(--text-primary);\r
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
    color: var(--text-secondary);\r
    text-decoration: none;\r
    transition: color 0.3s;\r
  }\r
\r
  .footer-section a:hover {\r
    color: var(--primary-light);\r
  }\r
\r
  .footer-bottom {\r
    text-align: center;\r
    padding-top: 2rem;\r
    border-top: 1px solid var(--border);\r
    color: var(--text-secondary);\r
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
  }`,sourcePath:"components/footer-section.html",templateBindings:["year"]};me({evaluators:{year:{deps:["year"],fn:e=>e}},handlers:{},setups:{"state:const year = new Date().getFullYear();":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.year??=new Date().getFullYear()}}}});function Do(e){he(To,e)}const Mo={tagName:"counter-sample",template:`<div class="counter">\r
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
  }`,sourcePath:"components/samples/counter.html",templateBindings:["count"]};me({evaluators:{count:{deps:["count"],fn:e=>e}},handlers:{"handler:count++":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{e.count++}},"handler:count=0":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{e.count=0}}},setups:{"state:let count = 0;":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.count??=0}}}});function zo(e){he(Mo,e)}export{$t as A,pn as B,_r as D,Ao as K,hr as L,Io as O,ko as V,tn as _,jo as a,Po as b,Do as c,Oo as d,zo as e,je as f,Oe as g,tr as h,Yr as i,me as p,Ro as q,vt as s,he as w};
