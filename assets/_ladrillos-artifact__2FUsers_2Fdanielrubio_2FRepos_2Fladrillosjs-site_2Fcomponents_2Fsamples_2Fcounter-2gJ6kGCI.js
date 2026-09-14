(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Qn="modulepreload",er=function(e){return"/ladrillosjs-site/"+e},bt={},rn=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let u=function(c){return Promise.all(c.map(l=>Promise.resolve(l).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=u(r.map(c=>{if(c=er(c),c in bt)return;bt[c]=!0;const l=c.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Qn,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((v,p)=>{h.addEventListener("load",v),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var Ge="[LadrillosJS]",ie=null;function tr(e){ie=e}function ee(){return ie}function Xe(e,t){return`${e}${(function(r){const n=r!==void 0?r:ie;if(!n)return"";const o=[];if(n.tagName&&o.push(`<${n.tagName}>`),n.sourcePath){const i=n.sourcePath.split("/").pop()||n.sourcePath;o.push(`(${i})`)}return o.length>0?` in ${o.join(" ")}`:""})(t)}`}var vt=(function(e){return e[e.EXPRESSION_EVAL_FAILED=101]="EXPRESSION_EVAL_FAILED",e[e.EXPRESSION_SYNTAX_ERROR=102]="EXPRESSION_SYNTAX_ERROR",e[e.EXPRESSION_UNDEFINED_VAR=103]="EXPRESSION_UNDEFINED_VAR",e[e.EXPRESSION_NULL_ACCESS=104]="EXPRESSION_NULL_ACCESS",e[e.SCRIPT_EXTRACT_FAILED=201]="SCRIPT_EXTRACT_FAILED",e[e.SCRIPT_EXECUTION_FAILED=202]="SCRIPT_EXECUTION_FAILED",e[e.EVENT_HANDLER_FAILED=301]="EVENT_HANDLER_FAILED",e[e.DIRECTIVE_ERROR=401]="DIRECTIVE_ERROR",e[e.LOOP_ERROR=402]="LOOP_ERROR",e[e.CONDITIONAL_ERROR=403]="CONDITIONAL_ERROR",e[e.COMPONENT_LOAD_FAILED=501]="COMPONENT_LOAD_FAILED",e[e.COMPONENT_NOT_FOUND=502]="COMPONENT_NOT_FOUND",e[e.COMPONENT_ALREADY_REGISTERED=503]="COMPONENT_ALREADY_REGISTERED",e[e.INVALID_COMPONENT_PATH=504]="INVALID_COMPONENT_PATH",e[e.COMPONENT_REGISTRATION_FAILED=505]="COMPONENT_REGISTRATION_FAILED",e[e.INVALID_COMPONENT_NAME=506]="INVALID_COMPONENT_NAME",e[e.MODULE_LOAD_FAILED=601]="MODULE_LOAD_FAILED",e[e.MODULE_EXECUTION_FAILED=602]="MODULE_EXECUTION_FAILED",e})({});function lt(e){return`https://github.com/drubiodev/LadrillosJS/blob/main/docs/21-error-handling.md#ljs${e}`}function on(e){return`LJS${e}`}var je=class extends Error{code;docsUrl;componentContext;hint;constructor(e,t,r={}){const n=lt(t);super(`[${on(t)}] ${Xe(e,r.context)} See ${n}`,r.cause!==void 0?{cause:r.cause}:void 0),this.name="LadrillosError",this.code=t,this.docsUrl=n,this.componentContext=r.context??null,this.hint=r.hint}};function Oe(e,t,r,n){const o=n?`[${on(n.code)}] ${Xe(e,t)} See ${lt(n.code)}`:Xe(e,t);typeof window<"u"&&typeof console<"u"&&typeof console.log=="function"?console.error(`%c${Ge}%c ${o}`,"color: #ff6b35; font-weight: bold","color: inherit; font-weight: normal"):console.error(`${Ge} ${o}`),r!==void 0&&typeof console<"u"&&console.error(r),n?new je(e,n.code,{context:t,hint:n.hint,cause:r}):r instanceof Error||new Error(o,r!==void 0?{cause:r}:void 0)}function te(e,t,r={}){const n=r.context!==void 0?r.context:ie,o=r.errorCode||((s=t)instanceof SyntaxError?102:s instanceof ReferenceError?103:s instanceof TypeError&&(s.message.includes("Cannot read properties of null")||s.message.includes("Cannot read properties of undefined"))?104:101),i=(function(a){if(a instanceof SyntaxError)return"Invalid expression syntax";if(a instanceof ReferenceError){const u=a.message.match(/(\w+) is not defined/);return u?`Undefined variable: "${u[1]}"`:"Undefined variable"}return a instanceof TypeError?a.message.includes("Cannot read properties of null")?"Cannot access property of null":a.message.includes("Cannot read properties of undefined")?"Cannot access property of undefined":"Type error":"Expression evaluation failed"})(t);var s;new je(i,o,{context:n,cause:t})}function nr(e,t,r){const n=ie;new je(e,201,{context:n,cause:t}),console.error(`${Ge} Script error. See: ${lt(201)}`)}function Ro(e,t,r,n,o){return new je(e,t,{context:r!==void 0?r:ie,hint:n,cause:o})}var K;function rr(e){const t=(function(){if(K!==void 0)return K;const r=globalThis.trustedTypes;if(typeof r?.createPolicy!="function")return K=null,null;try{K=r.createPolicy("ladrillosjs",{createHTML:n=>n})}catch{K=null}return K})();return t?t.createHTML(e):e}var pe={name:"uninstalled",compileEvaluator:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileHandler:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileSetup:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")}},sn=new Set;function or(e){sn.add(e)}function sr(e){if(e!==pe){pe=e;for(const t of sn)t()}}function ir(e,t){return pe.compileEvaluator(e,t)}function an(e,t,r=!1,n=t){return pe.compileHandler(e,t,r,n)}function ln(e,t,r=t){return pe.compileSetup(e,t,r)}function ar(e){return new Proxy(e,{get(t,r,n){if(r in t){const o=Reflect.get(t,r,n);return typeof o=="function"?o.bind(t):o}if(typeof r=="string")return t.get(r)},set:(t,r,n)=>typeof r=="string"&&(t.set(r,n),!0),has:(t,r)=>typeof r=="string"&&t.has(r)||r in t})}var Be=()=>rn(()=>import("./shared-Fq0F0LAc-CknC4p8U.js").then(e=>e.s),[]).then(e=>e.n).then(e=>e.ladrillos);function ae(e,t){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e.startsWith("/")?new URL(e,window.location.origin).href:e:new URL(e,t).href}function cn(e){return{registerComponent:function(t,r,n=!0,o=!1){const i=ae(r,e);return Be().then(s=>s.registerComponent(t,i,n,o))},registerComponents:function(t){const r=Array.isArray(t)?t.map(n=>({...n,path:ae(n.path,e)})):Object.entries(t).map(([n,o])=>typeof o=="string"?{name:n,path:ae(o,e)}:{name:n,...o,path:ae(o.path,e)});return Be().then(n=>n.registerComponents(r))},$use:function(t,r=!0,n=!1){const o=(function(s){return(s.split("/").pop()?.replace(/\.[^.]+$/,"")||s).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").toLowerCase()})(t),i=ae(t,e);return Be().then(s=>s.registerComponent(o,i,r,n))}}}var Ye=["registerComponent","registerComponents","$use"];function $e(){let e=globalThis.__ladrillos;return e||(e={bus:globalThis.__ladrillosEventBus??{listeners:new Map,componentListeners:new Map},stateCallbacks:globalThis.__ladrillosStateCallbacks??new Map,refs:globalThis.__ladrillosRefs??new Map},globalThis.__ladrillos=e),globalThis.__ladrillosEventBus=e.bus,globalThis.__ladrillosStateCallbacks=e.stateCallbacks,globalThis.__ladrillosRefs=e.refs,e}function dn(){return $e().bus}function ke(){return dn().listeners}function Ke(){return dn().componentListeners}function lr(e,t){const r=ke().get(e);if(r&&r.size!==0)for(const n of r)try{n.callback(t)}catch(o){console.error(`[LadrillosJS] Error in event listener for "${e}":`,o)}}function cr(e,t,r){const n=ke(),o=Ke();let i=n.get(e);i||(i=new Set,n.set(e,i));const s={callback:t,componentId:r};if(i.add(s),r){let a=o.get(r);a||(a=new Set,o.set(r,a)),a.add({event:e,registration:s})}return()=>{const a=ke(),u=Ke();if(i?.delete(s),i?.size===0&&a.delete(e),r){const c=u.get(r);if(c){for(const l of c)if(l.registration===s){c.delete(l);break}c.size===0&&u.delete(r)}}}}function dr(e){const t=ke(),r=Ke(),n=r.get(e);if(n){for(const{event:o,registration:i}of n){const s=t.get(o);s&&(s.delete(i),s.size===0&&t.delete(o))}r.delete(e)}}function ct(e){return{$emit:function(t,r){lr(t,r)},$listen:function(t,r){return cr(t,r,e)}}}var Qe=["$emit","$listen"],ve,yt=new Map,Ae=()=>{if(ve===void 0)try{ve=typeof new CSSStyleSheet().replaceSync=="function"}catch{ve=!1}return ve},Le=e=>e.includes("@import"),xt=new Set,un=e=>{xt.has(e)||xt.add(e)},fn=e=>{let t=yt.get(e);if(t)return t;try{t=new CSSStyleSheet,t.replaceSync(e)}catch{return null}return yt.set(e,t),t},pn=(e,t,r)=>{const n=e.adoptedStyleSheets;n.includes(t)||(e.adoptedStyleSheets=r?[t,...n]:[...n,t])},ur=(e,t,r)=>{if(!t)return;if(Ae()&&Le(t)&&un(t),Ae()&&!Le(t)){const o=fn(t);if(o)return void pn(r?e:document,o,!1)}const n=document.createElement("style");n.textContent=t,r?e.appendChild(n):document.head.appendChild(n)},fr=(e,t,r)=>{if(Ae()&&Le(t)&&un(t),Ae()&&!Le(t)){const o=fn(t);if(o)return void pn(e,o,!0)}const n=document.createElement("style");n.textContent=t,n.setAttribute("data-external-href",r),e.insertBefore(n,e.firstChild)},$t={bindings:/{([^}]+)}/g},pr=globalThis.requestIdleCallback||(e=>setTimeout(e,1)),mr=globalThis.cancelIdleCallback||(e=>clearTimeout(e)),wt=(e=1e4)=>t=>{const r=pr(t,{timeout:e});return()=>mr(r)},mn=e=>(t,r)=>{if((function(o){const{top:i,left:s,bottom:a,right:u}=o.getBoundingClientRect(),{innerHeight:c,innerWidth:l}=window;return(i>0&&i<c||a>0&&a<c)&&(s>0&&s<l||u>0&&u<l)})(r))return void t();const n=new IntersectionObserver(o=>{for(const i of o)if(i.isIntersecting){n.disconnect(),t();break}},e);return n.observe(r),()=>n.disconnect()},hr=e=>t=>{if(!e)return void t();const r=matchMedia(e);if(r.matches)return void t();const n=()=>t();return r.addEventListener("change",n,{once:!0}),()=>r.removeEventListener("change",n)},_t=(e=["click","focusin"])=>{const t=typeof e=="string"?[e]:e;return(r,n)=>{let o=!1;const i=a=>{o||(o=!0,s(),r(),queueMicrotask(()=>{a.target&&a.target instanceof Element&&a.target.dispatchEvent(new a.constructor(a.type,a))}))},s=()=>{for(const a of t)n.removeEventListener(a,i)};for(const a of t)n.addEventListener(a,i,{once:!0,passive:!0});return s}},gr=(e=0)=>t=>{const r=setTimeout(t,e);return()=>clearTimeout(r)},br=mn({rootMargin:"100px"});function Et(e){const t=e.querySelector(':scope > template[slot="placeholder"]');return t?(t.remove(),t.content.cloneNode(!0)):null}function vr(e){const t=e.parentNode;if(!t)return;const r=(function(p){if(p.hasAttribute("eager"))return null;if(p.hasAttribute("interaction")){const b=(p.getAttribute("interaction")||"").trim();if(!b)return _t();const w=b.split(",").map(E=>E.trim()).filter(Boolean);return _t(w.length===1?w[0]:w)}if(p.hasAttribute("media"))return hr(p.getAttribute("media")||"");if(p.hasAttribute("delay"))return gr(Number(p.getAttribute("delay"))||0);if(p.hasAttribute("idle")||p.hasAttribute("idle-timeout")){const b=p.getAttribute("idle-timeout");return b?wt(Number(b)||1e4):wt()}const m={},d=p.getAttribute("margin");d&&(m.rootMargin=d);const g=p.getAttribute("threshold");if(g!==null){const b=Number(g);Number.isNaN(b)||(m.threshold=b)}return Object.keys(m).length>0?mn(m):br})(e),n=e.getAttribute("src"),o=e.getAttribute("component"),i=new Set(["eager","visible","margin","threshold","idle","idle-timeout","delay","interaction","media","src","component"]),s=document.createComment(n?` <lazy src="${n}"> `:" <lazy> ");if(t.insertBefore(s,e),e.remove(),n){const p=(o||(a=n,(a.split(/[?#]/)[0].split("/").pop()?.replace(/\.[^.]+$/,"")||a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/[_\s]+/g,"-").toLowerCase())).trim();if(!p.includes("-"))return;const m=Et(e),d=()=>{const $=document.createElement(p);for(const k of Array.from(e.attributes))i.has(k.name)||$.setAttribute(k.name,k.value);s.parentNode?.replaceChild($,s)};let g=null;m&&(g=document.createComment(" /lazy-placeholder "),s.parentNode?.insertBefore(g,s.nextSibling),s.parentNode?.insertBefore(m,g));const b=async()=>{try{if(customElements.get(p)||await(async function($,k){return(await rn(()=>import("./shared-Fq0F0LAc-CknC4p8U.js").then(C=>C.s),[]).then(C=>C.n)).ladrillos.registerComponent($,k,!0,!1)})(p,n),g){let $=s.nextSibling;for(;$&&$!==g;){const k=$.nextSibling;$.parentNode?.removeChild($),$=k}g.parentNode?.removeChild(g)}d()}catch{}};if(!r)return void b();const w=document.createElement("span");let E;return w.setAttribute("data-lazy-sentinel",""),w.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(w,s.nextSibling),void(E=r(()=>{E?.(),w.remove(),b()},w))}var a;const u=Et(e),c=document.createDocumentFragment();for(;e.firstChild;)c.appendChild(e.firstChild);const l=document.createComment(" /lazy ");s.parentNode?.insertBefore(l,s.nextSibling),u&&s.parentNode?.insertBefore(u,l);const f=()=>{let p=s.nextSibling;for(;p&&p!==l;){const m=p.nextSibling;p.parentNode?.removeChild(p),p=m}l.parentNode?.insertBefore(c,l)};if(!r)return void f();const h=document.createElement("span");let v;h.setAttribute("data-lazy-sentinel",""),h.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(h,s.nextSibling),h.__lazyContent=c,v=r(()=>{v?.(),h.remove(),f()},h)}function Ct(e){const t=Array.from(e.querySelectorAll("lazy"));for(const r of t)yr(r)||vr(r)}function yr(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function et(e){const t=[],r=e.querySelectorAll("[data-lazy-sentinel]");for(const n of Array.from(r)){const o=n.__lazyContent;o&&t.push(o)}return t}var we="data-l-ctrl",xr=new Set(["FOR","IF","ELSE-IF","ELSE","SHOW"]),$r=/<(for|else-if|if|else|show)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi,wr=/<\/(for|else-if|if|else|show)\s*>/gi,_r=/(<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<!--[\s\S]*?-->)/gi,Er=/<\/?(?:for|if|else|show)\b/i;function Cr(e){return Er.test(e)?e.split(_r).map((t,r)=>r%2==1?t:t.replace($r,(n,o,i)=>`<template ${we}="${o.toLowerCase()}"${i}>`).replace(wr,"</template>")).join(""):e}function hn(e){let t;for(;t=e.querySelector(`template[${we}]`);){const r=t.ownerDocument.createElement(t.getAttribute(we));for(const n of Array.from(t.attributes))n.name!==we&&r.setAttribute(n.name,n.value);r.appendChild(t.content),t.replaceWith(r)}for(const r of Array.from(e.querySelectorAll("template")))hn(r.content)}function jo(e){return xr.has(e.tagName)}var gn=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmouseout","onmousemove","onmouseenter","onmouseleave","onkeydown","onkeyup","onkeypress","onfocus","onblur","onchange","oninput","onsubmit","onreset","onscroll","onload","onerror","ontouchstart","ontouchmove","ontouchend","ontouchcancel","ondragstart","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondrop"],_e=new Set(gn),ne="$bind";function dt(e){const t=e.currentTarget?.__ladrillosBindSync;t&&t.eventType===e.type&&t.sync()}var ue="$ref",ye={forAlias:/([\s\S]*?)\s+(?:in|of)\s+([\s\S]+)$/,forIterator:/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,stripParens:/^\(|\)$/g};function ut(e){return e.replace(/\$/g,"\\$")}var kr=Object.freeze(["alert","confirm","prompt","console","JSON","Math","Date","Array","Object","String","Number","Boolean","Map","Set","WeakMap","WeakSet","Symbol","BigInt","Promise","Proxy","Reflect","parseInt","parseFloat","isNaN","isFinite","Infinity","NaN","encodeURIComponent","decodeURIComponent","encodeURI","decodeURI","setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","cancelAnimationFrame","requestIdleCallback","cancelIdleCallback","queueMicrotask","fetch","AbortController","AbortSignal","Headers","Request","Response","URL","URLSearchParams","navigator","location","history","localStorage","sessionStorage","crypto","document","window","globalThis","Element","HTMLElement","Event","CustomEvent","EventTarget","TextEncoder","TextDecoder","Blob","File","FileReader","FormData","Error","TypeError","RangeError","SyntaxError","ReferenceError","atob","btoa","structuredClone"]),Ar=Object.freeze([]),Lr=new Set(["with","eval","arguments","constructor","prototype","break","case","catch","continue","debugger","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","class","const","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","null","true","false"]),Nr={enter:"Enter",tab:"Tab",esc:"Escape",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",delete:"Delete",backspace:"Backspace",insert:"Insert",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown"},bn=["ctrl","alt","shift","meta"],Sr=["prevent","stop","self","once","passive","capture"],vn={left:0,middle:1,right:2};function ft(e){if(!e.startsWith("$on:"))return null;const t=e.slice(4).split(".");if(t.length===0||!t[0])return null;const r=t[0],n=t.slice(1),o={eventName:r,keyModifiers:[],systemModifiers:[],eventModifiers:[],mouseModifier:null,exact:!1};for(const i of n){const s=i.toLowerCase();s!=="exact"?Sr.includes(s)?o.eventModifiers.push(s):bn.includes(s)?o.systemModifiers.push(s):s in vn?o.mouseModifier=s:o.keyModifiers.push(s):o.exact=!0}return o}function pt(e){const t={};return e.includes("passive")&&(t.passive=!0),e.includes("capture")&&(t.capture=!0),e.includes("once")&&(t.once=!0),t}function Pe(e,t){return function(r){t.eventModifiers.includes("self")&&r.target!==r.currentTarget||t.mouseModifier&&r instanceof MouseEvent&&!(function(n,o){return n.button===vn[o]})(r,t.mouseModifier)||(t.systemModifiers.length>0||t.exact)&&(r instanceof KeyboardEvent||r instanceof MouseEvent)&&!(function(n,o,i){const s={ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey,meta:n.metaKey};for(const a of o)if(!s[a])return!1;if(i){for(const a of bn)if(!o.includes(a)&&s[a])return!1}return!0})(r,t.systemModifiers,t.exact)||t.keyModifiers.length>0&&r instanceof KeyboardEvent&&!t.keyModifiers.some(n=>(function(o,i){const s=i.toLowerCase(),a=Nr[s];if(a)return o.key===a;if(s.length===1)return o.key.toLowerCase()===s;const u=s.split("-").map((c,l)=>l===0?c:c.charAt(0).toUpperCase()+c.slice(1)).join("");return o.key.toLowerCase()===s||o.key.toLowerCase()===u.toLowerCase()})(r,n))||(t.eventModifiers.includes("prevent")&&r.preventDefault(),t.eventModifiers.includes("stop")&&r.stopPropagation(),e(r))}}function Ne(e){return e.startsWith("$on:")}var kt=new Map,At=Symbol("reactive-array"),Lt=Symbol("reactive-array-subscribers"),Tr=["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"];function X(e,t){if(e[At]){const o=e[Lt];return o&&t&&o.add(t),e}const r=new Set;t&&r.add(t);const n=()=>{for(const o of r)o()};return new Proxy(e,{get(o,i){if(i===At)return!0;if(i===Lt)return r;const s=o[i];return typeof i=="string"&&Tr.includes(i)&&typeof s=="function"?(...a)=>{const u=a.map(l=>Array.isArray(l)?X(l,n):l),c=s.apply(o,u);return n(),c}:Array.isArray(s)?X(s,n):s},set(o,i,s){const a=!isNaN(typeof i=="string"?parseInt(i,10):NaN),u=i==="length",c=Array.isArray(s)?X(s,n):s;return o[i]===c||(o[i]=c,(a||u)&&n()),!0},deleteProperty(o,i){const s=delete o[i];return s&&n(),s}})}function Nt(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function yn(e,t){for(const r of Object.keys(e)){const n=e[r];Array.isArray(n)?e[r]=X(n,t):n&&typeof n=="object"&&!Array.isArray(n)&&yn(n,t)}return e}var St=new WeakMap;function Mr(e){let t=St.get(e);if(t===void 0){try{t=Function.prototype.toString.call(e)}catch{t=""}t.includes("[native code]")&&(t=""),St.set(e,t)}return t}function Ir(e,t,r){const n=new Set,o=[],i=new Set;for(const s of r)typeof t[s]=="function"&&Se(e,s)&&o.push(s);for(;o.length>0;){const s=o.pop();if(i.has(s))continue;i.add(s);const a=Mr(t[s]);if(a)for(const u of r)u!==s&&Se(a,u)&&(n.add(u),typeof t[u]=="function"&&o.push(u))}return n}function Tt(e,t,r){const n=Object.keys(r);if(n.some(o=>typeof r[o]=="function"))for(const o of e)for(const i of o.bindings)for(const s of Ir(i.raw,r,n))t.get(s)?.add(o)}function Se(e,t){return(function(r){let n=kt.get(r);if(!n){const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=new RegExp(`\\b${o}\\b`),kt.set(r,n)}return n})(t).test(e)}function De(e,t,r){if(t.length===0)return e;const n=r?.rewriteDeclarations!==!1,o=[],i=c=>(o.push(c),`__STRING_PLACEHOLDER_${o.length-1}__`);let s="",a=0;for(;a<e.length;){const c=e[a];if(c==="/"&&e[a+1]==="/"){const l=e.indexOf(`
`,a),f=l===-1?e.length:l;s+=e.slice(a,f),a=f;continue}if(c==="/"&&e[a+1]==="*"){const l=e.indexOf("*/",a+2),f=l===-1?e.length:l+2;s+=e.slice(a,f),a=f;continue}if(c==='"'||c==="'"){let l=a+1;for(;l<e.length&&e[l]!==c;)e[l]==="\\"?l+=2:l++;s+=i(e.slice(a,l+1)),a=l+1;continue}if(c==="`"){s+="`",a++;let l=a;for(;a<e.length&&e[a]!=="`";)if(e[a]!=="\\"){if(e[a]==="$"&&e[a+1]==="{"){a>l&&(s+=i(e.slice(l,a))),s+="${",a+=2;const f=a;let h=1;for(;a<e.length&&h>0;){const v=e[a];if(v!=='"'&&v!=="'"){if(v==="`"){a++;let p=0;for(;a<e.length;)if(e[a]!=="\\"){if(e[a]==="`"&&p===0){a++;break}e[a]!=="$"||e[a+1]!=="{"?(e[a]==="}"&&p>0&&p--,a++):(p++,a+=2)}else a+=2;continue}if(v==="{")h++;else if(v==="}"&&(h--,h===0))break;a++}else{for(a++;a<e.length&&e[a]!==v;)e[a]==="\\"?a+=2:a++;a++}}s+=i(De(e.slice(f,a),t,r)),e[a]==="}"&&a++,s+="}",l=a;continue}a++}else a+=2;a>l&&(s+=i(e.slice(l,a))),s+="`",a++;continue}s+=c,a++}if(n)for(const c of t){const l=new RegExp(`\\b(let|const|var)\\s+(${xn(c)})\\s*=`,"g");s=s.replace(l,`__state__.${c} ??=`)}for(const c of t)s=jr(s,c);let u=s;for(let c=0;c<o.length;c++)u=u.replace(`__STRING_PLACEHOLDER_${c}__`,()=>o[c]);return u}var Rr=new Set(["return","typeof","case","in","of","yield","await","throw","void","delete","new"]);function jr(e,t){const r=new RegExp(`(?<![^.]\\.)(?<!__state__\\.)\\b${xn(t)}\\b(?!\\s*\\()`,"g");return e.replace(r,(n,o)=>{if((function(i,s){let a=s-1;const u=a;for(;a>=0&&/\s/.test(i[a]);)a--;if(a===u)return!1;const c=a+1;for(;a>=0&&/[A-Za-z]/.test(i[a]);)a--;const l=i.slice(a+1,c);return l==="let"||l==="const"||l==="var"})(e,o)||(function(i,s,a){if(Rt(i,s+a)!==":")return"value";const u=It(i,s-1);if(u===""||u===";"||u==="}"||u==="{")return"key";if(u===","){const c=Mt(i,s);return c!==-1&&i[c]==="{"?"key":"value"}return"value"})(e,o,n.length)==="key")return n;switch((function(i,s,a){const u=It(i,s-1),c=Rt(i,s+a);if(u!=="{"&&u!==","||c!==","&&c!=="}")return"none";const l=Mt(i,s);return l===-1||i[l]!=="{"?"none":(function(f,h){let v=h-1;for(;v>=0&&/\s/.test(f[v]);)v--;if(v<0)return"object";const p=f[v];if(p===")"||p===">"&&f[v-1]==="=")return"none";if("=([,:?!&|^~+-*/%<>".includes(p))return"object";if(/[A-Za-z0-9_$]/.test(p)){let m=v;for(;m>=0&&/[A-Za-z0-9_$]/.test(f[m]);)m--;const d=f.slice(m+1,v+1);return d==="let"||d==="const"||d==="var"?"destructuring":Rr.has(d)?"object":"none"}return"none"})(i,l)})(e,o,n.length)){case"object":return`${t}: __state__.${t}`;case"destructuring":return n;default:return`__state__.${t}`}})}function Mt(e,t){let r=0;for(let n=t-1;n>=0;n--){const o=e[n];if(o===")"||o==="]"||o==="}")r++;else if(o==="("||o==="["||o==="{"){if(r===0)return n;r--}}return-1}function It(e,t){for(let r=t;r>=0;r--)if(!/\s/.test(e[r]))return e[r];return""}function Rt(e,t){for(let r=t;r<e.length;r++)if(!/\s/.test(e[r]))return e[r];return""}function xn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var $n=e=>e instanceof ShadowRoot?e.host:e;async function Or(e,t,r,n={},o,i=!1,s,a,u,c=[]){const l=$n(e),f={},h=t.map(p=>p.content).join(`
`);for(const[p,m]of Object.entries(n))f[p]=m;f.__scriptContent=h,f.__componentUrl=s,f.__componentId=a;const v=(function(p,m,d,g){const b=(function(C,L){const x=new Map,y=Object.keys(L);for(const T of y)x.set(T,new Set);for(const T of C)for(const _ of T.bindings)for(const A of y)Se(_.raw,A)&&x.get(A).add(T);return Tt(C,x,L),x})(m,p),w=(C,L)=>{const x=b.get(C);if(x)for(const y of x)d(y,L);g&&g()},E=C=>()=>{p.__suspendReactivity?g&&g():w(C,p)},S=C=>{E(C)()};for(const C of Object.keys(p)){const L=p[C];Array.isArray(L)?p[C]=X(L,E(C)):L&&typeof L=="object"&&yn(L,E(C))}const $=new WeakMap,k=(C,L)=>{let x=$.get(C);const y=x?.get(L);if(y)return y;const T=new Proxy(C,{get(_,A){const N=_[A];return typeof A=="string"&&Nt(N)?k(N,L):N},set:(_,A,N)=>typeof A!="string"?(_[A]=N,!0):(A in _&&_[A]===N||(_[A]=Array.isArray(N)?X(N,E(L)):N,p.__suspendReactivity||w(L,p)),!0),deleteProperty(_,A){const N=A in _;return delete _[A],N&&typeof A=="string"&&!p.__suspendReactivity&&w(L,p),!0}});return x||(x=new Map,$.set(C,x)),x.set(L,T),T};return new Proxy(p,{get(C,L){if(L==="__notifyKeyChanged")return S;const x=C[L];return typeof L=="string"&&Nt(x)?k(x,L):x},set(C,L,x){const y=!(L in C);return!y&&C[L]===x||(C[L]=Array.isArray(x)?X(x,E(L)):x,y&&(function(T,_,A,N){A.set(T,new Set);for(const I of _)for(const R of I.bindings)Se(R.raw,T)&&A.get(T).add(I);Tt(_,A,N)})(L,m,b,C),C.__suspendReactivity||w(L,C),!0)}})})(f,r,(p,m)=>Tn(p,m),o);v.__suspendReactivity=!0;try{for(const p of t)Br(p.content,v,s,a,l,u,c)}finally{v.__suspendReactivity=!1}return l.__state=v,l.__scriptContent=h,l.__componentUrl=s,l.__componentId=a,i||(wn(e,v,h,l),Mn(r,v)),v}function Pr(e,t,r){const n=$n(e);wn(e,r,n.__scriptContent||"",n),Mn(t,r)}function wn(e,t,r,n){const o=[e,...et(e)];for(const i of o){const s=Array.from(i.querySelectorAll("*"));for(const a of s)if(!zr(a)){for(const u of gn){const c=a.getAttribute(u);if(c){a.removeAttribute(u);const l=u.slice(2),f=_n(c,t,r,n);f&&a.addEventListener(l,f)}}Dr(a,t,r,n)}}}function Dr(e,t,r,n){const o=Array.from(e.attributes).filter(i=>Ne(i.name));for(const i of o){const s=ft(i.name);if(!s)continue;const a=i.value;e.removeAttribute(i.name);const u=_n(a,t,r,n);if(!u)continue;const c=Pe(u,s),l=pt(s.eventModifiers);e.addEventListener(s.eventName,c,l)}}function zr(e){if(e.hasAttribute("$for")||e.tagName==="FOR")return!0;let t=e.parentElement;for(;t;){if(t.hasAttribute("$for")||t.tagName==="FOR")return!0;t=t.parentElement}return!1}function _n(e,t,r,n){try{const o=n?.__componentUrl,i=n?.__componentId,s=kn(o,i),a=ht(),u=["event","__state__","$refs","$host",...a,...s.keys],c=Object.keys(t),l=c.filter(E=>typeof t[E]=="function"),f=c.filter(E=>typeof t[E]!="function"),h=t.__hasModuleScripts===!0,v=f.length>0?`let { ${f.join(", ")} } = __state__;`:"",p=h&&l.length>0?`const { ${l.join(", ")} } = __state__;`:"",m=De(En(r,h?l:[]),f,{rewriteDeclarations:!1}),d=f.some(E=>new RegExp(`\\b${E}\\b`).test(e))?f.filter(E=>new RegExp(`\\b${E}\\b`).test(e)).map(E=>`__state__.${E} = ${E};`).join(" "):"",g=/\bawait\b/.test(e)||/\bawait\b/.test(m)||/\basync\b/.test(m),b=o||"ladrillos-event-handler",w=an(u,g?`"use strict"; ${v} ${p} ${m} try { await (async () => { ${e} })(); } finally { ${d} }
//# sourceURL=${b}`:`"use strict"; ${v} ${p} ${m} ${e}; ${d}
//# sourceURL=${b}`,g,`handler:${e}`);return E=>{try{dt(E);const S=[E,t,n&&n.__refs||new Map,n,...a.map(()=>{}),...s.values],$=w(...S);$&&typeof $.catch=="function"&&$.catch(k=>{const C={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,k,{context:C.tagName?C:ee(),errorCode:vt.EVENT_HANDLER_FAILED})})}catch(S){const $={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,S,{context:$.tagName?$:ee(),errorCode:vt.EVENT_HANDLER_FAILED})}}}catch{return n?.tagName&&n.tagName.toLowerCase(),null}}var le=new Map,Fr=500;function En(e,t=[]){const r=t.join(",")+"\0"+e,n=le.get(r);if(n!==void 0)return n;const o=(function(i,s=[]){const a=[],u=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*\{/g;let c;for(;(c=u.exec(i))!==null;){if(s.includes(c[1]))continue;const f=jt(i,c.index);f&&a.push(f)}const l=/(?:const|let)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>\s*\{/g;for(;(c=l.exec(i))!==null;){if(s.includes(c[1]))continue;const f=c.index,h=jt(i,f,i.indexOf("{",f+c[0].length-1));h&&a.push(h)}return a.map(f=>f.trim()).join(`;
`)+(a.length>0?";":"")})(e,t);if(le.size>=Fr){const i=le.keys().next().value;i!==void 0&&le.delete(i)}return le.set(r,o),o}function jt(e,t,r){let n=0,o=t,i=!1,s="",a=!1;for(let u=r??t;u<e.length;u++){const c=e[u];if(c!=='"'&&c!=="'"&&c!=="`"||(u>0?e[u-1]:"")==="\\"||(i?c===s&&(i=!1):(i=!0,s=c)),!i&&(c==="{"&&(n++,a=!0),c==="}"&&n--,a&&n===0&&c==="}")){o=u+1;break}}return n!==0?null:e.slice(t,o)}function Hr(e,t=[]){const r=Wr(e),n=r.map(o=>`__state__.${o} ??= ${o};`).join(`
`);return`${De(e,[...new Set([...Cn(e),...t])].filter(o=>!r.includes(o)))}
${n}`}function Br(e,t,r,n,o,i,s=[]){try{const a=r||"ladrillos-component",u=`
      "use strict";
      ${Hr(e,s)}
//# sourceURL=${a}
    `,c=kn(r,n),l=ht(),f=["__state__","$host","$refs",...l,...c.keys],h=[t,o,i,...l.map(()=>{}),...c.values];ln(f,u,`state:${e}`)(...h)}catch(a){nr("Error executing script with reactive state",a)}}function mt(e){const t=e.split(""),r=e.length;let n=0,o=0,i=!1;const s=[],a=()=>s.length>0,u=(m,d)=>{for(let g=m;g<d;g++){const b=t[g];b!==`
`&&b!=="\r"&&(t[g]=" ")}},c=m=>{let d=m;for(;d<r&&e[d]!==`
`;)d++;return d},l=m=>{let d=m+2;for(;d<r-1&&(e[d]!=="*"||e[d+1]!=="/");)d++;return Math.min(r,d+2)},f=(m,d)=>{let g=m+1;for(;g<r;)if(e[g]!=="\\"){if(e[g]===d)return g+1;if(e[g]===`
`)return g;g++}else g+=2;return g},h=m=>{let d=m+1;for(;d<r;)if(e[d]!=="\\"){if(e[d]==="`")return d+1;if(e[d]==="$"&&e[d+1]==="{"){d+=2;let g=1;for(;d<r&&g>0;){const b=e[d];b!=="`"?b!=='"'&&b!=="'"?b!=="/"||e[d+1]!=="/"?b!=="/"||e[d+1]!=="*"?(b==="{"?g++:b==="}"&&g--,d++):d=l(d):d=c(d):d=f(d,b):d=h(d)}continue}d++}else d+=2;return d},v=m=>{let d=m-1;for(;d>=0&&/\s/.test(e[d]);)d--;return d<0||!!"([{,;:!&|?=+-*%^~<>".includes(e[d])||/\b(return|typeof|delete|void|in|of|new|instanceof|throw)$/.test(e.slice(0,d+1))},p=m=>{let d=m+1,g=!1;for(;d<r;){const b=e[d];if(b!=="\\"){if(b==="[")g=!0;else if(b==="]")g=!1;else{if(b==="/"&&!g){d++;break}if(b===`
`)break}d++}else d+=2}for(;d<r&&/[a-zA-Z]/.test(e[d]);)d++;return d};for(;n<r;){const m=e[n];if(m==="/"&&e[n+1]==="/"){const d=c(n);a()&&u(n,d),n=d;continue}if(m==="/"&&e[n+1]==="*"){const d=l(n);a()&&u(n,d),n=d;continue}if(m==='"'||m==="'"){const d=f(n,m);a()&&u(n,d),n=d;continue}if(m==="`"){const d=h(n);a()&&u(n,d),n=d;continue}if(m==="/"&&v(n)){const d=p(n);a()&&u(n,d),n=d;continue}if(m!=="{")if(m!=="}")if(m!=="="||e[n+1]!==">"){if(/[a-zA-Z_$]/.test(m)){const d=n;for(;n<r&&/[a-zA-Z0-9_$]/.test(e[n]);)n++;const g=e.slice(d,n);a()?u(d,n):g==="function"&&(i=!0);continue}a()&&m!==`
`&&m!=="\r"&&(t[n]=" "),n++}else{if(a())t[n]=" ",t[n+1]=" ";else{let d=n+2;for(;d<r;){const g=e[d];if(/\s/.test(g))d++;else if(g!=="/"||e[d+1]!=="/"){if(g!=="/"||e[d+1]!=="*")break;d=l(d)}else d=c(d)}e[d]==="{"&&(i=!0)}n+=2}else a()&&s[s.length-1]===o?s.pop():a()&&(t[n]=" "),o--,n++;else o++,i?(s.push(o),i=!1):a()&&(t[n]=" "),n++}return t.join("")}function Cn(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Ur(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?(?:function\b|\([^()]*\)\s*=>|[a-zA-Z_$][a-zA-Z0-9_$]*\s*=>)/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Wr(e){const t=mt(e),r=[],n=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return[...r,...Ur(e)]}function ht(){return Ar.filter(e=>!Lr.has(e))}function kn(e,t){const r=[],n=[];for(const s of kr)s in globalThis&&(r.push(s),n.push(globalThis[s]));const o=cn(e||window.location.href);r.push(...Ye),n.push(o.registerComponent,o.registerComponents,o.$use);const i=ct(t||"anonymous");return r.push(...Qe),n.push(i.$emit,i.$listen),{keys:r,values:n}}var Q=new Map;or(()=>Q.clear());var Zr=100,Jr=5e3,An=/^[A-Za-z_$][\w$]*$/,de=null,Ln=null;function tt(e,t){try{const r=Object.keys(t),n=[],o=[];for(let i=0;i<r.length;i++){const s=r[i];An.test(s)&&(n.push(s),o.push(t[s]))}return Nn(),nt(n,Sn(n.join(",")),e)(...Ln,...o)}catch(r){return te(e,r,{context:ee()}),`{${e}}`}}function Nn(){return de===null&&(de=ht(),Ln=de.map(()=>{})),de}function Sn(e){let t=Q.get(e);if(!t){if(Q.size>=Zr){const r=Q.keys().next().value;r!==void 0&&Q.delete(r)}t=new Map,Q.set(e,t)}return t}function nt(e,t,r){let n=t.get(r);if(!n){if(t.size>=Jr){const o=t.keys().next().value;o!==void 0&&t.delete(o)}n=ir([...de,...e],r),t.set(r,n)}return n}function qr(e,t){const r=Nn(),n=Object.keys(e),o=[];for(let p=0;p<n.length;p++)An.test(n[p])&&o.push(n[p]);const i=o.join(","),s=Sn(i),a=r.length,u=new Array(a+o.length).fill(void 0),c=()=>{for(let p=0;p<o.length;p++)u[a+p]=e[o[p]]},l=t!==void 0;let f=null,h=null;if(l){c(),f=[],h=[];for(const p of t){const m=o.indexOf(p);m>=0&&(f.push(a+m),h.push(p))}}const v=p=>{try{const m=nt(o,s,p);return l||c(),m.apply(null,u)}catch(m){return te(p,m,{context:ee()}),`{${p}}`}};return v.sig=i,v.refresh=l?()=>{for(let p=0;p<f.length;p++)u[f[p]]=e[h[p]]}:c,v.compile=p=>{try{return nt(o,s,p)}catch(m){return te(p,m,{context:ee()}),null}},v.invoke=(p,m)=>{try{return l||c(),p.apply(null,u)}catch(d){return te(m,d,{context:ee()}),`{${m}}`}},v}var Vr=new Set(["disabled","checked","readonly","required","selected","hidden","multiple","autofocus","open","novalidate","formnovalidate","inert","reversed","loop","muted","controls","autoplay","playsinline","default","ismap","allowfullscreen"]);function Tn(e,t){if((function(o){if(!o.isAttribute||!o.attributeName||o.bindings.length!==1)return!1;const i=o.original.trim();return!!/^\{[\s\S]*\}$/.test(i)&&i.slice(1,-1).trim()===o.bindings[0].raw.trim()})(e)){const o=e.element??e.node.parentElement,i=tt(e.bindings[0].raw,t);return void(o&&(r=i,r===null||typeof r!="object"&&typeof r!="function"?(function(s,a,u){Vr.has(a)?u?s.setAttribute(a,""):s.removeAttribute(a):u!=null?s.setAttribute(a,String(u)):s.removeAttribute(a)})(o,e.attributeName,i):(o.hasAttribute?.(e.attributeName)&&o.removeAttribute(e.attributeName),o[e.attributeName]=i)))}var r;let n=e.original;for(const o of e.bindings){const i=tt(o.raw,t),s=String(i??"");n=n.replace(`{${o.raw}}`,s)}if(e.isAttribute&&e.attributeName){const o=e.element??e.node.parentElement;o&&o.setAttribute(e.attributeName,n)}else e.node.textContent=n}function Mn(e,t){for(const r of e)Tn(r,t)}function Gr(){const e=tt;return e.forContext=qr,e}function In(e){return import(e)}var Ot=new Map,Ue=new Map,Xr=/(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g,Yr=/import\s*\(\s*['"]([^'"]+)['"]\s*\)/g,Kr=[".ts",".tsx",".mts"];function Te(e){return e.startsWith("./")||e.startsWith("../")}function Pt(e){return Kr.some(t=>e.endsWith(t))}function Dt(e){return!(e.startsWith("/")||e.startsWith("./")||e.startsWith("../")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))}function Qr(e,t){let r=e;const n=[],o=[];return r=r.replace(Xr,(i,s)=>{if(Te(s)){const a=new URL(s,t).href;return Pt(s)&&o.push(s),i.replace(s,a)}return Dt(s)&&n.push(s),i}),r=r.replace(Yr,(i,s)=>{if(Te(s)){const a=new URL(s,t).href;return Pt(s)&&o.push(s),`import("${a}")`}return Dt(s)&&n.push(s),i}),r}var zt=/^(?:export\s+)?(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm,eo=["$emit","$listen","$refs","registerComponent","registerComponents","$use"];async function rt(e,t,r){if(e.external)return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load external script: ${e.src}`)),document.head.appendChild(i)});if(e.type!=="module")return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load script: ${e.src}`)),document.head.appendChild(i)});try{const n=await fetch(e.src);if(!n.ok)throw new Error(`Failed to fetch module: ${e.src}`);const o=Qr(await n.text(),e.src),i=(function(l){const f=(function(g){const b=[];let w;for(zt.lastIndex=0;(w=zt.exec(g))!==null;)b.push(w[1]);const E=/^(?:export\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm;for(;(w=E.exec(g))!==null;)b.includes(w[1])||b.push(w[1]);return b})(l),h=new Set,v=/export\s+(?:let|const|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let p;for(;(p=v.exec(l))!==null;)h.add(p[1]);const m=/export\s*\{([^}]+)\}/g;for(;(p=m.exec(l))!==null;)p[1].split(",").map(g=>g.trim().split(/\s+as\s+/)[0].trim()).forEach(g=>h.add(g));const d=f.filter(g=>!h.has(g));return d.length===0?l:`${l}
export { ${d.join(", ")} };`})((function(l){const f=[];let h=l;if(h=h.replace(/import\s*\{([^}]+)\}\s*from\s*(['"][^'"]+['"])\s*;?/g,(v,p,m)=>{const d=p.split(",").map(b=>b.trim()),g=[];for(const b of d){if(!b)continue;const w=b.match(/^(\w+)\s+as\s+(\w+)$/);if(w){const[,E,S]=w,$=`__raw_${S}`;g.push(`${E} as ${$}`),f.push(`const ${S} = __wrapReactiveArray(${$}, __ladrillos_componentId, "${S}");`)}else{const E=`__raw_${b}`;g.push(`${b} as ${E}`),f.push(`const ${b} = __wrapReactiveArray(${E}, __ladrillos_componentId, "${b}");`)}}return`import { ${g.join(", ")} } from ${m};`}),f.length>0){const v=h.split(`
`);let p=-1;for(let m=0;m<v.length;m++){const d=v[m].trim();(d.startsWith("import ")||d.startsWith("import{"))&&(p=m)}p>=0&&(v.splice(p+1,0,"","// === Reactive Import Wrappers ===",...f,"// === End Reactive Import Wrappers ===",""),h=v.join(`
`))}return h})(o)),s=(function(l){const f=new Set;for(const h of eo){const v=h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[\\s,{])${v}(?:\\s+as\\b|[\\s,}=;(])|\\b(?:let|const|var|function)\\s+${v}\\b`,"m").test(l)&&f.add(h)}return f})(o),a=(function(l,f,h=new Set){const v=(p,m)=>h.has(p)?"":m;return`
// === LadrillosJS Framework Helpers (auto-injected) ===
const __ladrillos_componentId = "${l||"anonymous"}";
const __ladrillos_componentUrl = "${f||"unknown"}";

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
${v("$emit","const $emit = __ladrillos_emit;")}

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
${v("$listen","const $listen = __ladrillos_listen;")}

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
${v("$refs","const $refs = __ladrillos_refs;")}

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
${v("registerComponent","const registerComponent = __ladrillos_registerComponent;")}

// registerComponents - Register multiple components at once
const __ladrillos_registerComponents = async (configs) => {
  const resolvedConfigs = configs.map(config => ({
    ...config,
    path: __resolvePath(config.path)
  }));
  return globalThis.ladrillosjs.registerComponents(resolvedConfigs);
};
${v("registerComponents","const registerComponents = __ladrillos_registerComponents;")}

// $use - Shorthand for registerComponent with auto-derived tag name
const __ladrillos_use = async (path, useShadowDOM = true) => {
  const tagName = __filenameToTagName(path);
  return __ladrillos_registerComponent(tagName, path, useShadowDOM);
};
${v("$use","const $use = __ladrillos_use;")}

// === End Framework Helpers ===

`})(t,r||e.src,s)+i,u=new Blob([a],{type:"text/javascript"}),c=URL.createObjectURL(u);try{return await In(c)}finally{URL.revokeObjectURL(c)}}catch(n){throw console.error(`[LadrillosJS] Failed to load external module: ${e.src}`,n),n}}async function to(e){const t=e.filter(r=>r.external);for(const r of t)try{await rt(r)}catch(n){console.error(`[LadrillosJS] Failed to load external script: ${r.src}`,n)}}var Ft=new Map;async function no(e,t,r){for(const n of e)if(r&&t)try{let o=Ft.get(n.href);if(!o){const i=await fetch(n.href);if(!i.ok){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`);continue}o=await i.text(),Ft.set(n.href,o)}fr(t,o,n.href)}catch(o){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`,o)}else{if(document.querySelector(`link[href="${n.href}"]`))continue;await new Promise(o=>{const i=document.createElement("link");i.rel=n.rel||"stylesheet",i.href=n.href,i.onload=()=>o(),i.onerror=()=>{console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`),o()},document.head.appendChild(i)})}}function ro(e){const t=Ot.get(e);if(t){for(const r of t)URL.revokeObjectURL(r);Ot.delete(e)}}function oo(e){const t=[],r=/import\s+(?:(\{[^}]+\})|(\*\s+as\s+\w+)|(\w+)(?:\s*,\s*(\{[^}]+\}))?)?\s*(?:from\s+)?['"]([^'"]+)['"]/g;let n;for(;(n=r.exec(e))!==null;){const[o,i,s,a,u,c]=n,l={statement:o,specifier:c,imports:[],isDefault:!1,isNamespace:!1,isSideEffect:!1};if(i||s||a||(l.isSideEffect=!0),a&&(l.isDefault=!0,l.imports.push({imported:"default",local:a})),s){l.isNamespace=!0;const h=s.replace(/\*\s+as\s+/,"").trim();l.imports.push({imported:"*",local:h})}const f=i||u;if(f){const h=f.slice(1,-1).split(",").map(v=>v.trim()).filter(Boolean);for(const v of h){const p=v.match(/(\w+)\s+as\s+(\w+)/);l.imports.push(p?{imported:p[1],local:p[2]}:{imported:v,local:v})}}t.push(l)}return t}async function Ht(e){if(Ue.has(e))return Ue.get(e);const t=(async()=>{try{return await In(e)}catch(r){throw console.error(`[LadrillosJS] Failed to fetch module: ${e}`,r),r}})();return Ue.set(e,t),t}function Bt(e,t){return t&&Array.isArray(e)?X(e,t):e}function so(e){return e.replace(/import\s+(?:(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*\{[^}]+\})?\s+from\s+)?['"][^'"]+['"]\s*;?/g,"").trim()}function io(e){return e.replace(/export\s*\{[^}]*\}\s*(?:from\s*['"][^'"]+['"])?\s*;?/g,"").replace(/export\s+\*(?:\s+as\s+\w+)?\s+from\s*['"][^'"]+['"]\s*;?/g,"").replace(/export\s+default\s+/g,"").replace(/export\s+(?=(?:const|let|var|function|class|async)\b)/g,"").trim()}function ao(e){const t=[],r=[],n=e.replace(/`[^`]*`/g,s=>" ".repeat(s.length)).replace(/"(?:[^"\\]|\\.)*"/g,s=>" ".repeat(s.length)).replace(/'(?:[^'\\]|\\.)*'/g,s=>" ".repeat(s.length)).replace(/\/\*[\s\S]*?\*\//g,s=>" ".repeat(s.length)).replace(/\/\/[^\n]*/g,s=>" ".repeat(s.length));let o=0,i=0;for(;i<n.length;){const s=n[i];if(s!=="{")if(s!=="}"){if(o===0){const a=n.slice(i).match(/^(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);if(a){r.push(a[1]),i+=a[0].length;continue}const u=n.slice(i).match(/^(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/);if(u){t.push(u[1]),i+=u[0].length;continue}}i++}else o--,i++;else o++,i++}return{variables:t,functions:r}}async function lo(e,t,r,n,o,i,s){if(e.type!=="module")throw new Error('executeModuleScriptWithReactivity only handles type="module" scripts');const a=e.content,u=e.resolvedImports?Object.fromEntries(Object.entries(e.resolvedImports).map(([d,g])=>[d,Bt(g,i)])):await(async function(d,g,b){const w=oo(d),E={};for(const S of w){if(S.isSideEffect){await Ht(Te(S.specifier)?new URL(S.specifier,g).href:S.specifier);continue}const $=Te(S.specifier)?new URL(S.specifier,g).href:S.specifier;try{const k=await Ht($);for(const C of S.imports){let L;L=C.imported==="*"?k:C.imported==="default"?k.default:k[C.imported],E[C.local]=Bt(L,b)}}catch{}}return E})(a,t,i);if(o){const d=new Set([...Ye,...Qe,"ladrillosjs","$host","$refs","event","state"]);for(const[g,b]of Object.entries(u))d.has(g)||g in o||(o[g]=b)}const c=io(so(a)),{variables:l,functions:f}=ao(c),h=De(c,l),v=Object.keys(u),p=Object.values(u),m=`
    "use strict";
    return (async () => {
      ${h}
      ${f.length>0?`return { ${f.join(", ")} };`:"return {};"}
    })();
  `;try{const d=["console","alert","Math","JSON","Date","Array","Object","String","Number","Boolean","Promise","setTimeout","setInterval","clearTimeout","clearInterval"],g=d.map(N=>globalThis[N]),b=["$refs","__state__","$host"],w=[n||new Map,o||{},s],E=cn(t),S=[E.registerComponent,E.registerComponents,E.$use],$=ct(r||"anonymous"),k=[$.$emit,$.$listen],C={...globalThis.ladrillosjs||{},registerComponent:E.registerComponent,registerComponents:E.registerComponents},L={registerComponent:E.registerComponent,registerComponents:E.registerComponents,$use:E.$use,$emit:$.$emit,$listen:$.$listen,ladrillosjs:C},x=new Set(v),y=[...v],T=v.map((N,I)=>N in L?L[N]:p[I]),_=(N,I)=>{for(let R=0;R<N.length;R++){const j=N[R];x.has(j)||(x.add(j),y.push(j),T.push(I[R]))}};_(d,g),_(Ye,S),_(Qe,k),_(b,w),_(["ladrillosjs"],[C]);const A=await ln(y,m,`module:${a}`)(...T);return{...o||{},...A||{}}}catch(d){throw console.error("[LadrillosJS] Failed to execute module script:",d),console.error("Original code:",c),console.error("Transformed code:",h),console.error("Imports:",u),d}}async function co(e,t,r,n,o,i,s,a){const u={},c=e.filter(h=>h.type==="module"),l=t.filter(h=>h.type==="module"),f=t.filter(h=>h.type!=="module");for(const h of f)try{await rt(h,n,r)}catch(v){console.error("[LadrillosJS] External script failed:",h.src,v)}for(const h of l)try{const v=await rt(h,n,r);if(v&&typeof v=="object")for(const[p,m]of Object.entries(v))p!=="default"&&(u[p]=m,i&&(i[p]=m))}catch(v){console.error("[LadrillosJS] External module script failed:",h.src,v)}for(const h of c)try{const v=await lo(h,r,n,o,i,s,a);Object.assign(u,v)}catch(v){console.error("[LadrillosJS] Module script failed:",v)}return u}function Ut(e){const t=e.trim(),r=(function(o){const i=(function(u){let c=0,l=0,f=0,h=!1,v=!1,p=!1,m=!1;for(let d=0;d<u.length;d++){const g=u[d];if(m)m=!1;else if(g!=="\\")if(v||p||g!=="'")if(h||p||g!=='"')if(h||v||g!=="`"){if(!(h||v||p)&&(g==="("?c++:g===")"?c=Math.max(0,c-1):g==="["?l++:g==="]"?l=Math.max(0,l-1):g==="{"?f++:g==="}"&&(f=Math.max(0,f-1)),g==="("&&c===0&&l===0&&f===0))return d}else p=!p;else v=!v;else h=!h;else m=!0}return-1})(o);if(i<0)return null;const s=(function(u,c){let l=0,f=!1,h=!1,v=!1,p=!1;for(let m=c;m<u.length;m++){const d=u[m];if(p)p=!1;else if(d!=="\\")if(h||v||d!=="'")if(f||v||d!=='"')if(f||h||d!=="`"){if(!(f||h||v)){if(d==="(")l++;else if(d===")"){if(l--,l===0)return m;if(l<0)return-1}}}else v=!v;else h=!h;else f=!f;else p=!0}return-1})(o,i);if(s<0||o.slice(s+1).trim().length!==0)return null;const a=Wt(o.slice(0,i).trim());return a?{calleePath:a,args:uo(o.slice(i+1,s))}:null})(t);if(r)return{raw:t,path:r.calleePath,isFunction:!0,isExpression:!0,functionArgs:r.args};const n=Wt(t);return n?{raw:t,path:n,isFunction:!1,isExpression:!1}:{raw:t,path:[],isExpression:!0}}function Wt(e){return/^[$A-Z_][0-9A-Z_$]*(?:\s*\.\s*[$A-Z_][0-9A-Z_$]*)*$/i.test(e)?e.split(".").map(t=>t.trim()).filter(t=>t.length>0):null}function uo(e){const t=[];let r="",n=0,o=0,i=0,s=!1,a=!1,u=!1,c=!1;for(let f=0;f<e.length;f++){const h=e[f];if(c)r+=h,c=!1;else if(h!=="\\")if(a||u||h!=="'")if(s||u||h!=='"')if(s||a||h!=="`"){if(!s&&!a&&!u&&(h==="("?n++:h===")"?n=Math.max(0,n-1):h==="["?o++:h==="]"?o=Math.max(0,o-1):h==="{"?i++:h==="}"&&(i=Math.max(0,i-1)),h===","&&n===0&&o===0&&i===0)){const v=r.trim();v.length>0&&t.push(v),r="";continue}r+=h}else u=!u,r+=h;else a=!a,r+=h;else s=!s,r+=h;else r+=h,c=!0}const l=r.trim();return l.length>0&&t.push(l),t}var Zt=e=>{const t=document.createElement("template");return t.innerHTML=rr(Cr(e)),hn(t.content),t};function Jt(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null);let n;for(;n=r.nextNode();){if(qt(n)||Vt(n))continue;const i=n.textContent;if(!i)continue;const s=[...i.matchAll($t.bindings)];if(s.length>0){const a=i,u=s.map(c=>Ut(c[1].trim()));t.push({node:n,bindings:u,original:a})}}const o=(function(i){const s=[],a=["$bind","$ref","$no:bind","condition","each","key","track-by"],u=Array.from(i.querySelectorAll("*"));for(const c of u)if(c.tagName!=="FOR"&&!qt(c)&&!c.hasAttribute("$no:bind")&&!Vt(c))for(const l of Array.from(c.attributes)){if(a.includes(l.name))continue;const f=[...l.value.matchAll($t.bindings)];if(f.length>0){const h=document.createTextNode(l.value),v=f.map(p=>Ut(p[1].trim()));s.push({node:h,bindings:v,original:l.value,isAttribute:!0,attributeName:l.name,element:c})}}return s})(e);return t.push(...o),t}function qt(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Vt(e){let t=e.parentElement;for(;t;){if(t.hasAttribute&&t.hasAttribute("$no:bind"))return!0;t=t.parentElement}return!1}var re="FOR",Rn="ELSE-IF",jn="ELSE";function Me(e){const t=e.trim();return t.startsWith("{")&&t.endsWith("}")?t.slice(1,-1).trim():t}function fo(e,t){const r=Array.from(e.querySelectorAll(`[${ut(ue)}]`));for(const n of r){const o=n.getAttribute(ue);o&&(t.refs.set(o,n),n.removeAttribute(ue))}}function po(e,t){const r=Array.from(e.querySelectorAll("for"));for(const n of r){if(!e.contains(n))continue;const o=On(n,e);o&&t.loops.push(o)}}function On(e,t){const r=e.getAttribute("each")||e.getAttribute("of")||"";if(!r)return null;const n=(function(u){const c=u.match(ye.forAlias);if(!c)return null;let l,[,f,h]=c;f=f.trim(),h=h.trim();const v=h.match(/\s+track\s+by\s+(.+)$/i);v&&(l=v[1].trim(),h=h.slice(0,v.index).trim());const p=f.replace(ye.stripParens,"").trim(),m=p.match(ye.forIterator);let d,g,b;return m?(d=p.replace(ye.forIterator,"").trim(),g=m[1]?.trim(),b=m[2]?.trim()):d=p,{item:d,index:g||b,key:l,array:h}})(r);if(!n)return null;const o=e.getAttribute("key")||e.getAttribute("track-by")||n.key,i=(function(u){const c=[];for(const f of Array.from(u.childNodes))(f.nodeType!==Node.TEXT_NODE||f.textContent?.trim())&&c.push(f);if(c.length===0)return null;if(c.length===1&&c[0].nodeType===Node.ELEMENT_NODE&&c[0].tagName!==re)return c[0];const l=document.createElement("span");l.style.display="contents";for(const f of Array.from(u.childNodes))l.appendChild(f);return l})(e);if(!i)return null;const s=document.createComment(` <for> ${r} `),a=e.parentElement||t;return a.insertBefore(s,e),e.remove(),{template:i,expression:r,itemName:n.item,indexName:n.index,arrayName:n.array,keyAttribute:o,placeholder:s,renderedElements:[],originalParent:a,hasConditionals:i.querySelector("IF")!==null,hasNestedLoops:i.querySelector(re)!==null}}function ze(e){let t=e.parentElement;for(;t;){if(t.tagName===re)return!0;t=t.parentElement}return!1}function mo(e,t){const r=Array.from(e.querySelectorAll("if"));for(const n of r){if(ze(n))continue;const o=[],i=Me(n.getAttribute("condition")||""),s=document.createComment(` <if> ${i} `),a=n.parentElement||e,u=n.nextSibling;a.insertBefore(s,n),o.push(We(n,i,"if",s,a,u));let c=n.nextElementSibling;for(;c;){const l=c.tagName;if(l!==Rn){if(l===jn){o.push(We(c,"","else",s,a,c.nextSibling)),c.remove();break}break}{const f=Me(c.getAttribute("condition")||""),h=c.nextElementSibling;o.push(We(c,f,"else-if",s,a,c.nextSibling)),c.remove(),c=h}}n.remove();for(const l of o)l.group=o;t.conditionals.push(o)}}function We(e,t,r,n,o,i){return e.removeAttribute("condition"),e.style.display="contents",{element:e,condition:t,type:r,placeholder:n,group:[],originalParent:o,nextSibling:i}}function ho(e,t){const r=Array.from(e.querySelectorAll("show"));for(const n of r){if(!n.parentNode||ze(n))continue;const o=Me(n.getAttribute("condition")||""),i=n;i.style.display="contents",t.showElements.push({element:i,expression:o,originalDisplay:"contents"}),n.removeAttribute("condition")}}function go(e,t){const r=Array.from(e.querySelectorAll(`[${ut(ne)}]`));for(const n of r){const o=n.getAttribute(ne);if(!o||bo(n))continue;const i={element:n,path:o.split("."),raw:o,isContentEditable:n.hasAttribute("contenteditable")};t.twoWayBindings.push(i),n.removeAttribute(ne)}}function bo(e,t){return ze(e)}function Pn(e,t,r,n){(globalThis.__P__??=[]).push({arr:e.arrayName,scope:n?Object.keys(n):null,scopeNames:e.scopeNames,nested:e.hasNestedLoops});const o=r(e.arrayName,n?{...t,...n}:t);if(!o||(i=o)==null||!Array.isArray(i)&&typeof i[Symbol.iterator]!="function"&&typeof i!="object"){for(const x of e.renderedElements)x.remove();return e.renderedElements=[],void(e.previousItems=[])}var i;const s=Array.from(o),a=e.previousItems||[],u=e.renderedElements;e.keyGetter||(e.keyGetter=(function(x,y){if(!x)return(_,A)=>A;const T=x.startsWith(y+".")?x.slice(y.length+1).split("."):x.split(".");return _=>{let A=_;for(const N of T){if(A==null)return;A=A[N]}return A}})(e.keyAttribute,e.itemName));const c=(function(x){const y=x.__scriptContent;return{...x,__reactiveState__:x,__scriptContent__:y||"",__componentUrl__:x.__componentUrl||""}})(t);n&&Object.assign(c,n),c[e.itemName]=null,e.indexName&&(c[e.indexName]=0);const l=typeof r.forContext=="function"?r.forContext(c,e.indexName?[e.itemName,e.indexName]:[e.itemName]):x=>r(x,c),f=(x,y)=>{c[e.itemName]=x,e.indexName&&(c[e.indexName]=y),l.refresh?.()},h=e.indexName?[e.itemName,e.indexName]:[e.itemName],v=e.scopeNames?.length?[...e.scopeNames,...h]:h;let p=null;const m=()=>p??=Zn(t,v),d=(function(x){const y=x.match(/^\s*([A-Za-z_$][\w$]*)/);return y?y[1]:null})(e.arrayName),g=d!==null&&Object.prototype.hasOwnProperty.call(t,d)?d:n?.[Ee]??d,b=(x,y,T)=>{const _=x[Xt];if(!_)return;const A=((N,I)=>{const R=n?{...n}:{};return R[e.itemName]=N,e.indexName&&(R[e.indexName]=I),g&&(R[Ee]=g),R})(y,T);for(const N of _)Pn(N,t,r,A)},w=(x,y,T)=>{const _=x[Ie];_&&(_[e.itemName]=y,e.indexName&&(_[e.indexName]=T))},E=(function(x){let y=Qt.get(x);return y===void 0&&(y=(function(T){if(T.hasConditionals||T.template.querySelector(re)!==null)return null;const _=[],A=[],N=[],I=[],R=[],j=F=>{if(F.nodeType===Node.ELEMENT_NODE){const H=F.attributes;for(let P=0;P<H.length;P++){const M=H[P];if(_e.has(M.name))I.push({path:R.slice(),attrName:M.name,eventName:M.name.slice(2),code:Re(M.value),directive:null});else if(Ne(M.name)){const O=ft(M.name);O&&I.push({path:R.slice(),attrName:M.name,eventName:O.eventName,code:Re(M.value),directive:O,options:pt(O.eventModifiers)})}else M.name==="$bind"?N.push({path:R.slice(),expr:M.value}):M.value.includes("{")&&A.push({path:R.slice(),name:M.name,parsed:se(M.value)})}}else if(F.nodeType===Node.TEXT_NODE){const H=F.textContent;H&&H.includes("{")&&_.push({path:R.slice(),parsed:se(H)})}const Z=F.childNodes;for(let H=0;H<Z.length;H++)R.push(H),j(Z[H]),R.pop()};return j(T.template),{texts:_,attrs:A,binds:N,handlers:I,delegated:null,delegatedEvents:[]}})(x),Qt.set(x,y)),y})(e),S=(x,y)=>{const T=e.template.cloneNode(!0);f(x,y);const _=Object.create(m().proto);return n&&Object.assign(_,n),_[e.itemName]=x,e.indexName&&(_[e.indexName]=y),g&&(_[Ee]=g),T[Ie]=_,e.hasNestedLoops&&(T[Xt]=(function(A,N){const I=[];for(const R of Array.from(A.querySelectorAll(re))){if(!R.parentNode||vo(R,A))continue;const j=On(R,A);j&&(j.scopeNames=N,I.push(j))}return I})(T,v)),E?((function(A,N,I,R,j,B){const U=I.invoke!==void 0&&I.sig!==void 0,W=P=>{let M=A;for(let O=0;O<P.length;O++)M=M.childNodes[P[O]];return M},F=new Array(N.texts.length);for(let P=0;P<N.texts.length;P++){const{path:M,parsed:O}=N.texts[P],D=W(M);D.__originalTemplate=D.textContent;const{statics:z,exprs:J}=O,G=U?oe(O,I):null;let Y=z[0];for(let q=0;q<J.length;q++){const V=G!==null?G[q]:null,ge=V!==null?I.invoke(V,J[q]):I(J[q]);Y+=String(ge??"")+z[q+1]}D.textContent=Y,F[P]={node:D,parsed:O}}const Z=new Array(N.attrs.length);for(let P=0;P<N.attrs.length;P++){const{path:M,name:O,parsed:D}=N.attrs[P],z=W(M).getAttributeNode(O);z.__originalTemplate=z.value;const{statics:J,exprs:G}=D,Y=U?oe(D,I):null;let q=J[0];for(let V=0;V<G.length;V++){const ge=Y!==null?Y[V]:null,be=ge!==null?I.invoke(ge,G[V]):I(G[V]);q+=(be!==null&&typeof be=="object"?JSON.stringify(be):String(be??""))+J[V+1]}z.value=q,Z[P]={attr:z,parsed:D}}const H=[];if(N.binds.length>0){const P=j();for(const M of N.binds){const O=W(M.path);O.removeAttribute(ne);const D=qn(O,M.expr,R,P,I);D&&H.push(D)}}if(N.handlers.length>0||N.delegated!==null){const P=j();for(const M of N.handlers){const O=W(M.path);O.removeAttribute(M.attrName);const D=gt(M.code,R,P);D&&(M.directive?O.addEventListener(M.eventName,Pe(D,M.directive),M.options):O.addEventListener(M.eventName,D))}if(N.delegated!==null){A[Fn]=B;for(const M of N.delegated){const O=W(M.path);for(const D of M.entries)O.removeAttribute(D.attrName);O[zn]=M.stamp}(function(M,O,D){let z=Kt.get(M);z||(z={container:M.placeholder.parentNode??M.originalParent,setup:O,events:new Set},Kt.set(M,z)),z.setup=O;for(const J of D)if(!z.events.has(J)){z.events.add(J);const G=z;z.container.addEventListener(J,Y=>yo(Y,M,G))}})(B,P,N.delegatedEvents)}}A[fe]={texts:F,attrs:Z,conds:[],binds:H}})(T,E,l,_,m,e),b(T,x,y),T):(e.hasConditionals&&Un(T,c,r,l),Wn(T,c,r,l,_,m),b(T,x,y),T)},$=new Array(s.length),k=new Array(s.length);if(s.length===a.length&&u.length===s.length){let x=!0;for(let y=0;y<s.length;y++)if(s[y]!==a[y]){x=!1;break}if(x){for(let y=0;y<s.length;y++)f(s[y],y),w(u[y],s[y],y),Ze(u[y],c,r,l,m),b(u[y],s[y],y);return void(e.previousItems=s)}}if(e.keyAttribute){const x=new Map,y=new Map;for(let _=0;_<a.length;_++){const A=e.keyGetter(a[_],_);y.set(A,_),u[_]&&x.set(A,u[_])}const T=new Set;for(let _=0;_<s.length;_++)T.add(e.keyGetter(s[_],_));for(const[_,A]of x)T.has(_)||(A.remove(),x.delete(_));for(let _=0;_<s.length;_++){const A=s[_],N=e.keyGetter(A,_),I=x.get(N);I?(f(A,_),w(I,A,_),Ze(I,c,r,l,m),b(I,A,_),$[_]=I,k[_]=y.get(N)??-1):($[_]=S(A,_),k[_]=-1)}}else{const x=Math.min(a.length,s.length);for(let y=0;y<s.length;y++)y<x?(f(s[y],y),w(u[y],s[y],y),Ze(u[y],c,r,l,m),b(u[y],s[y],y),$[y]=u[y],k[y]=y):($[y]=S(s[y],y),k[y]=-1);for(let y=x;y<u.length;y++)u[y]?.remove()}const C=(function(x){const y=x.length,T=new Set;if(y===0)return T;let _=-1,A=!0;for(let j=0;j<y;j++){const B=x[j];if(!(B<0)){if(B<=_){A=!1;break}_=B}}if(A){for(let j=0;j<y;j++)x[j]>=0&&T.add(j);return T}const N=[],I=new Array(y).fill(-1);for(let j=0;j<y;j++){const B=x[j];if(B<0)continue;let U=0,W=N.length;for(;U<W;){const F=U+W>>1;x[N[F]]<B?U=F+1:W=F}U>0&&(I[j]=N[U-1]),N[U]=j}let R=N.length>0?N[N.length-1]:-1;for(;R!==-1;)T.add(R),R=I[R];return T})(k),L=e.placeholder.parentNode;if(L){let x=e.placeholder;for(let y=0;y<$.length;y++){const T=$[y];C.has(y)||x.nextSibling!==T&&L.insertBefore(T,x.nextSibling),x=T}}e.renderedElements=$,e.previousItems=[...s]}var Gt=new Map;function oe(e,t){if(e.fnsSig!==t.sig){const r=new Array(e.exprs.length);for(let n=0;n<e.exprs.length;n++)r[n]=t.compile(e.exprs[n]);e.fns=r,e.fnsSig=t.sig}return e.fns}function se(e){let t=Gt.get(e);if(t)return t;const r=[],n=[],o=/\{([^}]+)\}/g;let i,s=0;for(;i=o.exec(e);)r.push(e.slice(s,i.index)),n.push(i[1].trim()),s=i.index+i[0].length;return r.push(e.slice(s)),t={statics:r,exprs:n},Gt.set(e,t),t}var fe="__ladrillosBindingCache",Ie="__ladrillosLoopCtx",Dn="__ladrillosLoopBind",Ee="__ladrillosLoopRoot",Xt="__ladrillosLoopNested";function vo(e,t){let r=e.parentElement;for(;r&&r!==t;){if(r.tagName===re)return!0;r=r.parentElement}return!1}function Yt(e){const t=[],r=[],n=[],o=[],i=u=>{const c=u[Dn];c&&n.push(c);const l=u.attributes;for(let f=0;f<l.length;f++){const h=l[f].__originalTemplate;h&&r.push({attr:l[f],parsed:se(h)})}};i(e);const s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let a;for(;a=s.nextNode();)if(a.nodeType===Node.TEXT_NODE){const u=a.__originalTemplate;u&&t.push({node:a,parsed:se(u)})}else a.nodeType===Node.ELEMENT_NODE?i(a):a[Fe]&&o.push(a);return{texts:t,attrs:r,conds:o,binds:n}}var zn="__ladrillosDelegated",Fn="__ladrillosLoopOwner",Kt=new WeakMap;function yo(e,t,r){const n=r.container,o=[];let i=null,s=e.target;for(;s&&s!==n;){const a=s[zn];if(a&&a.owner===t&&o.push(a.entries),s[Fn]===t){i=s[Ie]??null;break}s=s.parentNode}if(i!==null&&o.length!==0){for(const a of o)for(const u of a)if(u.eventName===e.type&&(xo(u,e,i,r.setup),e.cancelBubble))return}}function xo(e,t,r,n){const o=Jn(e.code,n);if(!o)return;const i=s=>{try{dt(s),o(s,r,n.reactiveState,n.emit,n.listen)}catch(a){Oe(`Error in loop event handler: ${e.code}`,null,a)}};e.directive?Pe(i,e.directive)(t):i(t)}var Qt=new WeakMap;function Ze(e,t,r,n=i=>r(i,t),o){let i=e[fe];i||(i=Yt(e),e[fe]=i),i.conds.length>0&&(function(l,f,h,v,p,m){let d=!1;for(const g of l){const b=g[Fe],w=Hn(b.branches,v);if(w!==b.currentIndex&&(d=!0,b.currentEl&&b.currentEl.parentNode&&b.currentEl.remove(),b.currentEl=null,b.currentIndex=-1,w>=0)){const E=Bn(b.branches[w]);g.parentNode.insertBefore(E,g.nextSibling),b.currentIndex=w,b.currentEl=E,Un(E,f,h,v),Wn(E,f,h,v,p,m)}}return d})(i.conds,t,r,n,e[Ie]??t,o)&&(i=Yt(e),e[fe]=i);const s=n.invoke!==void 0&&n.sig!==void 0,a=i.texts;for(let l=0;l<a.length;l++){const{node:f,parsed:h}=a[l],{statics:v,exprs:p}=h,m=s?oe(h,n):null;let d=v[0];for(let g=0;g<p.length;g++){const b=m!==null?m[g]:null,w=b!==null?n.invoke(b,p[g]):n(p[g]);d+=String(w??"")+v[g+1]}f.textContent!==d&&(f.textContent=d)}const u=i.attrs;for(let l=0;l<u.length;l++){const{attr:f,parsed:h}=u[l],{statics:v,exprs:p}=h,m=s?oe(h,n):null;let d=v[0];for(let g=0;g<p.length;g++){const b=m!==null?m[g]:null,w=b!==null?n.invoke(b,p[g]):n(p[g]);d+=(w!==null&&typeof w=="object"?JSON.stringify(w):String(w??""))+v[g+1]}f.value!==d&&(f.value=d)}const c=i.binds;for(let l=0;l<c.length;l++){const{element:f,expr:h,isContentEditable:v}=c[l];He(f,n(h),v)}}var Fe="__ladrillosLoopCond";function Hn(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(n.type==="else")return r;try{if(t(n.condition))return r}catch{}}return-1}function Bn(e){const t=document.createElement("span");return t.style.display="contents",t.appendChild(e.template.content.cloneNode(!0)),t}function Je(e,t){const r=document.createElement("template");for(const n of Array.from(e.childNodes))r.content.appendChild(n.cloneNode(!0));return{type:t,condition:t==="else"?"":Me(e.getAttribute("condition")||""),template:r}}function Un(e,t,r,n){const o=n??(s=>r(s,t));let i=1e4;for(;i-- >0;){let s=null;const a=e.querySelectorAll("IF");for(let p=0;p<a.length;p++){const m=a[p];if(m.parentNode&&!ze(m)){s=m;break}}if(!s)return;const u=[];u.push(Je(s,"if"));const c=[];let l=s.nextElementSibling;for(;l;){if(l.tagName!==Rn){if(l.tagName===jn){u.push(Je(l,"else")),c.push(l);break}break}u.push(Je(l,"else-if")),c.push(l),l=l.nextElementSibling}const f=document.createComment(" <if> (loop) "),h={branches:u,currentIndex:-1,currentEl:null};f[Fe]=h,s.parentNode.insertBefore(f,s),s.remove();for(const p of c)p.remove();const v=Hn(u,o);if(v>=0){const p=Bn(u[v]);f.parentNode.insertBefore(p,f.nextSibling),h.currentIndex=v,h.currentEl=p}}}function Wn(e,t,r,n,o,i){const s=[],a=[],u=[],c=[],l=n??(typeof r.forContext=="function"?r.forContext(t):w=>r(w,t)),f=o??t;let h=null;const v=i??(()=>h??=(function(w){const E=w.__reactiveState__??w;return Zn(E,Object.keys(w).filter(S=>!S.startsWith("__")&&typeof w[S]!="function"&&!Object.prototype.hasOwnProperty.call(E,S)))})(t)),p=l.invoke!==void 0&&l.sig!==void 0,m=(w,E,S)=>{const $=w!==null?w[S]:null;return $!==null?l.invoke($,E[S]):l(E[S])},d=w=>{for(const S of Array.from(w.attributes))if(!_e.has(S.name)&&!Ne(S.name)&&S.value.includes("{")){const $=se(S.value);S.__originalTemplate=S.value;const k=p?oe($,l):null;let C=$.statics[0];for(let L=0;L<$.exprs.length;L++){const x=m(k,$.exprs,L);C+=(x!==null&&typeof x=="object"?JSON.stringify(x):String(x??""))+$.statics[L+1]}S.value=C,a.push({attr:S,parsed:$})}const E=w.getAttribute(ne);if(E!==null){w.removeAttribute(ne);const S=qn(w,E,f,v(),l);S&&u.push(S)}(function(S,$,k){const C=S.attributes;let L=null;for(let y=0;y<C.length;y++){const T=C[y].name;(_e.has(T)||Ne(T))&&(L??=[]).push({name:T,value:C[y].value})}if(!L)return;const x=k();for(const{name:y,value:T}of L)if(_e.has(y)){S.removeAttribute(y);const _=y.slice(2),A=gt(Re(T),$,x);A&&S.addEventListener(_,A)}else $o(S,y,T,$,x)})(w,f,v)};d(e);const g=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let b;for(;b=g.nextNode();)if(b.nodeType===Node.TEXT_NODE){const w=b.textContent;if(w&&w.includes("{")){const E=se(w);b.__originalTemplate=w;const S=p?oe(E,l):null;let $=E.statics[0];for(let k=0;k<E.exprs.length;k++)$+=String(m(S,E.exprs,k)??"")+E.statics[k+1];b.textContent=$,s.push({node:b,parsed:E})}}else b.nodeType===Node.ELEMENT_NODE?d(b):b[Fe]&&c.push(b);e[fe]={texts:s,attrs:a,conds:c,binds:u}}function Re(e){return e.replace(/\{([^}]+)\}/g,(t,r)=>`(${r.trim()})`)}function $o(e,t,r,n,o){const i=ft(t);if(!i)return;const s=Re(r);e.removeAttribute(t);const a=gt(s,n,o);if(!a)return;const u=Pe(a,i),c=pt(i.eventModifiers);e.addEventListener(i.eventName,u,c)}var en=new Map,ce=new Map,wo=1e3;function Zn(e,t){const r=e.__scriptContent||"",n=r.trim().length>0,o=e.__hasModuleScripts===!0,i=[],s=[];for(const d of Object.keys(e))d.startsWith("__")||(typeof e[d]=="function"?s.push(d):i.push(d));const a=t.filter(d=>!i.includes(d)),u=s.filter(d=>!t.includes(d));let c="",l="";if(o||!n)l=u.length>0?`const { ${u.join(", ")} } = context;`:"";else{const d=en.get(r);d!==void 0?c=d:(c=En(r,[]),en.set(r,c))}const f=a.length>0?`const { ${a.join(", ")} } = context;`:"",h=i.length>0?`let { ${i.join(", ")} } = reactiveState;`:"",v=!o&&i.length>0?i.map(d=>`reactiveState.${d} = ${d};`).join(" "):"",p=ct(e.__componentId||"anonymous"),m={__reactiveState__:e,__scriptContent__:r,__componentUrl__:e.__componentUrl||""};for(const d of s)m[d]=e[d];return{reactiveState:e,proto:m,bodyPrefix:`"use strict";
      ${f}
      ${h}
      ${l}
      ${c}
      `,bodySuffix:`;
      ${v}`,emit:p.$emit,listen:p.$listen,fnCache:new Map}}function Jn(e,t){let r=t.fnCache.get(e);if(r!==void 0)return r;const n=t.bodyPrefix+e+t.bodySuffix;if(r=ce.get(n)??null,r===null)try{if(ce.size>=wo){const o=ce.keys().next().value;o!==void 0&&ce.delete(o)}r=an(["event","context","reactiveState","$emit","$listen"],n,!1,`handler:${e}`),ce.set(n,r)}catch{r=null}return t.fnCache.set(e,r),r}function gt(e,t,r){const n=Jn(e,r);if(!n)return null;const{reactiveState:o,emit:i,listen:s}=r;return a=>{try{dt(a),n(a,t,o,i,s)}catch(u){Oe(`Error in loop event handler: ${e}`,null,u)}}}function _o(e,t,r){for(const n of e)n.element.parentNode&&n.element.remove();for(const n of e){let o=!1;if(n.type==="else"?o=!0:o=!!r(n.condition,t),o){n.placeholder.parentNode?.insertBefore(n.element,n.placeholder.nextSibling);break}}}function Eo(e,t,r,n){const o=e.element,{raw:i,path:s,isContentEditable:a}=e;He(o,r(i,t),a);const u=s[0];n.has(u)||n.set(u,[]),n.get(u).push({element:o,path:s,isContentEditable:a}),i===u||n.has(i)||n.set(i,[]),i!==u&&n.get(i).push({element:o,path:s,isContentEditable:a});const c=Vn(o);let l=!1;o.__isUpdatingFromState=()=>l,o.__setUpdatingFromState=h=>{l=h};const f=()=>{if(l)return;const h=Gn(o,a);ot(t,s,h)};o.__ladrillosBindSync={eventType:c,sync:f},o.addEventListener(c,f)}function qn(e,t,r,n,o){const i=t.trim();if(!i)return null;const s=i.split(".").map(g=>g.trim()),a=s[0],u=n.reactiveState,c=Object.prototype.hasOwnProperty,l=!c.call(u,a)&&c.call(r,a);if(l&&s.length===1)return Oe(`$bind="${i}" targets the <for> row variable itself, which has nowhere to write back to. Bind one of its properties instead, e.g. $bind="${a}.value".`),null;const f=e,h=f.hasAttribute("contenteditable"),v=r[Ee],p=Vn(f);He(f,o(i),h);const m=()=>{const g=Gn(f,h);if(!l)return void ot(u,s,g);const b=r[a];if(b===null||typeof b!="object")return;ot(b,s.slice(1),g);const w=u.__notifyKeyChanged;v&&typeof w=="function"&&w(v)};f.__ladrillosBindSync={eventType:p,sync:m},f.addEventListener(p,m);const d={element:f,expr:i,isContentEditable:h};return f[Dn]=d,d}function Vn(e){if(e instanceof HTMLSelectElement)return"change";if(e instanceof HTMLInputElement){const t=e.type.toLowerCase();if(t==="checkbox"||t==="radio")return"change"}return"input"}function Gn(e,t){if(t)return e.textContent||"";if(e instanceof HTMLInputElement){const r=e.type.toLowerCase();return r==="checkbox"?e.checked:r==="number"||r==="range"?e.valueAsNumber:e.value}return e instanceof HTMLSelectElement?e.multiple?Array.from(e.selectedOptions).map(r=>r.value):e.value:e instanceof HTMLTextAreaElement?e.value:e.value??""}function He(e,t,r){if(r){const n=String(t??"");return void(e.textContent!==n&&(e.textContent=n))}if(e instanceof HTMLInputElement){const n=e.type.toLowerCase();if(n==="checkbox"){const o=!!t;e.checked!==o&&(e.checked=o)}else if(n==="radio"){const o=e.value===String(t??"");e.checked!==o&&(e.checked=o)}else{const o=String(t??"");e.value!==o&&(e.value=o)}return}if(e instanceof HTMLSelectElement){const n=String(t??"");return void(e.value!==n&&(e.value=n))}e.value=e instanceof HTMLTextAreaElement?String(t??""):t}function ot(e,t,r){let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];i in n&&typeof n[i]=="object"||(n[i]={}),n=n[i]}n[t[t.length-1]]=r}var Ce=[],st=new Set,it=!1,at=!1,tn=0,Co=Promise.resolve();function ko(){at=!1,it=!0,Ce.sort((e,t)=>(e.id??0)-(t.id??0));try{for(const e of Ce)if(e.active!==!1)try{e()}catch(t){Oe("Error in scheduled update",null,t)}}finally{Ce.length=0,st.clear(),it=!1}}var xe=new Map,nn=new Set(["state","_root","_initialized","_componentId","_directives","_evaluator","_updateBoundInputs","_pendingProps","_propsReady"]);function Ao(e,t){const{tagName:r,template:n,scripts:o,externalScripts:i,externalStyles:s,styles:a,sourcePath:u,templateBindings:c=[]}=e,l=Cn(o.map(p=>p.content).join(`
`)),f=[...new Set([...l,...c])];let h;class v extends HTMLElement{static get observedAttributes(){return f}state={};_root=null;_initialized=!1;_componentId=`${r}-${Math.random().toString(36).slice(2)}`;_directives=null;_evaluator=null;_updateBoundInputs=null;_pendingProps=new Map;_propsReady=!1;constructor(){super()}async connectedCallback(){if(this._initialized)return;this._initialized=!0,tr({tagName:r,sourcePath:u,instanceId:this._componentId});const m=this.innerHTML,d=document.createDocumentFragment();if(t)for(const $ of Array.from(this.childNodes))d.appendChild($.cloneNode(!0));else for(;this.firstChild;)d.appendChild(this.firstChild);this.__originalHTML=m,this.__originalChildren=d,this._root=t?this.shadowRoot??this.attachShadow({mode:"open"}):this,h??=Zt(n);const{bindings:g}=(($,k)=>{const C=typeof k=="string"?Zt(k).content:k.content.cloneNode(!0);Ct(C),$.replaceChildren(),$.appendChild(C);const L=Jt($);for(const x of et($))L.push(...Jt(x));return{bindings:L}})(this._root,h);ur(this._root,a,t);const b=this._getAttributeOverrides();for(const $ of f){if(nn.has($))continue;Object.prototype.hasOwnProperty.call(this,$)&&(this._pendingProps.set($,this[$]),delete this[$]);const k=$.toLowerCase();k!==$&&Object.prototype.hasOwnProperty.call(this,k)&&(this._pendingProps.set($,this[k]),delete this[k])}for(const[$,k]of this._pendingProps)b[$]=k;const w=o.filter($=>$.type!=="module"),E=o.some($=>$.type==="module"),S=ar(new Map);if((function($,k){const C=Array.from($.querySelectorAll(`[${ut(ue)}]`));for(const L of C){const x=L.getAttribute(ue);x&&k.set(x,L)}})(this._root,S),s&&s.length>0&&await no(s,this._root,t),i.length>0&&await to(i),this.state=await Or(this._root,w,g,b,()=>this._updateDirectives(),E,u,this._componentId,S,c),this._propsReady=!0,this._pendingProps.size>0){for(const[$,k]of this._pendingProps)this.state[$]=k;this._pendingProps.clear()}if($e().stateCallbacks.set(this._componentId,$=>{const k=this.state?.__notifyKeyChanged;$&&typeof k=="function"?k($):this._updateDirectives()}),u){this.state.__suspendReactivity=!0;try{const $=await co(o,i,u,this._componentId,S,this.state,()=>this._updateDirectives(),this);(E||i.length>0)&&(this.state.__hasModuleScripts=!0);for(const[k,C]of Object.entries($))typeof C=="function"&&(this.state[k]=C)}finally{this.state.__suspendReactivity=!1}}E&&Pr(this._root,g,this.state),this._evaluator=Gr(),this._directives=(function($,k){const C={loops:[],conditionals:[],twoWayBindings:[],refs:k,showElements:[]},L=[$,...et($)];for(const x of L)fo(x,C),po(x,C),ho(x,C),go(x,C),mo(x,C);return Ct($),C})(this._root,S);{const $=$e().refs;let k=$.get(this._componentId);k||(k=new Map,$.set(this._componentId,k));for(const[C,L]of this._directives.refs)k.set(C,L)}this.refs=this._directives.refs,this.__refs=this._directives.refs,this._updateDirectives(),this._directives.twoWayBindings.length>0&&(this._updateBoundInputs=(function($,k,C){const L=new Map;for(const x of $)Eo(x,k,C,L);return x=>{(function(y,T,_,A){const N=A?[A]:Array.from(y.keys());for(const I of N){const R=y.get(I);if(R)for(const j of R){const{element:B,path:U,isContentEditable:W}=j,F=_(U.join("."),T),Z=B.__setUpdatingFromState;Z&&Z(!0),He(B,F,W),Z&&queueMicrotask(()=>Z(!1))}}})(L,k,C,x)}})(this._directives.twoWayBindings,this.state,this._evaluator)),this.dispatchEvent(new CustomEvent("ladrillos:ready",{bubbles:!0,composed:!0,detail:{state:this.state,refs:this._directives.refs}}))}disconnectedCallback(){ro(this._componentId),dr(this._componentId),(function(m){const d=xe.get(m);d&&(d.active=!1,xe.delete(m))})(this._componentId),$e().stateCallbacks.delete(this._componentId),this._initialized=!1,this._propsReady=!1}attributeChangedCallback(m,d,g){if(d===g||!this._initialized)return;const b=this._parseAttributeValue(g);this._propsReady?this.state[m]=b:this._pendingProps.set(m,b)}adoptedCallback(){}_updateDirectives(){this._directives&&this._evaluator&&(function(m,d){let g=xe.get(m);g||(g=(function(){const b=()=>{d()};return b.id=++tn,b.active=!0,b})(),xe.set(m,g)),(function(b){b.id===void 0&&(b.id=++tn),st.has(b.id)||(st.add(b.id),Ce.push(b),it||at||(at=!0,Co.then(ko)))})(g)})(this._componentId,()=>{this._performDirectiveUpdates()})}_performDirectiveUpdates(){this._directives&&this._evaluator&&(this._directives.loops.length>0&&(function(m,d,g){for(const b of m)Pn(b,d,g)})(this._directives.loops,this.state,this._evaluator),this._directives.conditionals.length>0&&(function(m,d,g){for(const b of m)_o(b,d,g)})(this._directives.conditionals,this.state,this._evaluator),this._directives.showElements.length>0&&(function(m,d,g){for(const b of m){const w=g(b.expression,d);b.element.style.display=w?b.originalDisplay:"none"}})(this._directives.showElements,this.state,this._evaluator),this._updateBoundInputs&&this._updateBoundInputs())}_getAttributeOverrides(){const m={},d=[];for(const b of Array.from(this.attributes))if(this._isReservedAttribute(b.name))b.value&&b.value.trim()!==""&&d.push(b.name);else if(m[b.name]=this._parseAttributeValue(b.value),b.name.includes("-")){const w=b.name.replace(/-([a-z0-9])/g,(E,S)=>S.toUpperCase());w===b.name||w in m||(m[w]=m[b.name])}const g=d.filter(b=>!c.includes(b));return g.length>0&&g.map(b=>`"${b}" → try "${{title:"heading",class:"className",style:"customStyle",id:"componentId",hidden:"isHidden"}[b]||`my${b.charAt(0).toUpperCase()}${b.slice(1)}`}"`),m}_isReservedAttribute(m){return!c.includes(m)&&(["id","class","style","slot","part","is","tabindex","title","lang","dir","hidden","draggable","contenteditable"].includes(m.toLowerCase())||m.startsWith("data-"))}_parseAttributeValue(m){if(m===null)return null;if(m===""||m==="true")return!0;if(m==="false")return!1;const d=Number(m);if(!isNaN(d)&&m.trim()!=="")return d;try{const g=m.trim();if(g.startsWith("[")||g.startsWith("{"))return JSON.parse(g)}catch{}return m}get root(){return this._root}}for(const p of f){if(nn.has(p)||p in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(v.prototype,p))continue;Object.defineProperty(v.prototype,p,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[p]:this._pendingProps.get(p)},set(d){this._propsReady?this.state[p]=d:this._pendingProps.set(p,d)}});const m=p.toLowerCase();m===p||m in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(v.prototype,m)||Object.defineProperty(v.prototype,m,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[p]:this._pendingProps.get(p)},set(d){this._propsReady?this.state[p]=d:this._pendingProps.set(p,d)}})}return v}function Lo(e,t){const{tagName:r}=e;if(!customElements.get(r)){const n=Ao(e,t);customElements.define(r,n)}}var Xn=new Map,Yn=new Map,Kn=new Map;function me(e){if(e.evaluators)for(const[t,r]of Object.entries(e.evaluators))Xn.set(t,r);if(e.handlers)for(const[t,r]of Object.entries(e.handlers))Yn.set(t,r);if(e.setups)for(const[t,r]of Object.entries(e.setups))Kn.set(t,r)}var qe=class extends Error{constructor(e,t){super(`[LadrillosJS] No precompiled ${e} for ${JSON.stringify(t)}. This build cannot compile at runtime. Either the component was not processed by @ladrillosjs/compiler, or it is loaded from a path the compiler could not resolve statically.`),this.name="MissingArtifactError"}};function Ve(e,t){const{deps:r,fn:n}=e,o=[];for(let s=0;s<r.length;s++)o.push(t.indexOf(r[s]));const i=(s,a)=>a<0?void 0:s[a];switch(o.length){case 0:return function(){return n()};case 1:{const[s]=o;return function(){return n(i(arguments,s))}}case 2:{const[s,a]=o;return function(){return n(i(arguments,s),i(arguments,a))}}case 3:{const[s,a,u]=o;return function(){return n(i(arguments,s),i(arguments,a),i(arguments,u))}}default:return function(){const s=new Array(o.length);for(let a=0;a<o.length;a++)s[a]=i(arguments,o[a]);return n.apply(null,s)}}}function he(e,t={}){const{tagName:r}=e;r?.trim()&&r.includes("-")&&Lo(e,t.useShadowDOM??!0)}sr({name:"precompiled",compileEvaluator(e,t){const r=Xn.get(t);if(!r)throw new qe("evaluator",t);return Ve(r,e)},compileHandler(e,t,r,n){const o=Yn.get(n);if(!o)throw new qe("handler",n);return Ve(o,e)},compileSetup(e,t,r){const n=Kn.get(r);if(!n)throw new qe("setup",r);return Ve(n,e)}});const No={tagName:"site-header",template:`<header>
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
  }`,sourcePath:"components/site-header.html",templateBindings:["version"]};me({evaluators:{version:{deps:["version"],fn:e=>e}},handlers:{"handler:toggleMobileMenu()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{t.navLinks.classList.toggle("active")}}},setups:{'state:const toggleMobileMenu = () => {\n    $refs.navLinks.classList.toggle("active");\n  };\n\n  // Close menu when a link inside it is tapped\n  $refs.navLinks.addEventListener("click", (e) => {\n    if (e.target.closest("a")) {\n      $refs.navLinks.classList.remove("active");\n    }\n  });\n\n  // Close menu when clicking outside (composedPath pierces shadow DOM)\n  document.addEventListener("click", (e) => {\n    if (!$refs.navLinks.classList.contains("active")) return;\n    const path = e.composedPath();\n    if (path.includes($refs.navLinks)) return;\n    if (path.some((el) => el.classList && el.classList.contains("mobile-toggle"))) return;\n    $refs.navLinks.classList.remove("active");\n  });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{const u=()=>{r.navLinks.classList.toggle("active")};r.navLinks.addEventListener("click",c=>{c.target.closest("a")&&r.navLinks.classList.remove("active")}),document.addEventListener("click",c=>{if(!r.navLinks.classList.contains("active"))return;const l=c.composedPath();l.includes(r.navLinks)||l.some(f=>f.classList&&f.classList.contains("mobile-toggle"))||r.navLinks.classList.remove("active")}),e.toggleMobileMenu??=u}}}});function Oo(e){he(No,e)}const So={tagName:"install-section",template:`<div class="hero-actions">
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
    }`,sourcePath:"components/install.html",templateBindings:["tab","commands"]};me({evaluators:{"tab === 'npm' ? 'active' : ''":{deps:["tab"],fn:e=>e==="npm"?"active":""},"tab === 'cdn' ? 'active' : ''":{deps:["tab"],fn:e=>e==="cdn"?"active":""},"tab==='npm'":{deps:["tab"],fn:e=>e==="npm"},"tab === 'cdn'":{deps:["tab"],fn:e=>e==="cdn"},"commands.cdn":{deps:["commands"],fn:e=>e.cdn}},handlers:{"handler:tab = 'npm'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{e.tab="npm"}},"handler:tab = 'cdn'":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{e.tab="cdn"}},"handler:copyCommand('npm')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{(l=>{navigator.clipboard.writeText(e.commands[l]);const f=t.npmCopyBtn,h=f.innerHTML;f.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{f.innerHTML=h},2e3)})("npm")}},"handler:copyCommand('cdn')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{(l=>{navigator.clipboard.writeText(e.commands[l]);const f=t.cdnCopyBtn,h=f.innerHTML;f.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{f.innerHTML=h},2e3)})("cdn")}}},setups:{'state:const commands = {\n        npm: "npm install ladrillosjs",\n        cdn: \'<script src="https://unpkg.com/ladrillosjs@2.1.3/dist/index.js"><\\/script>\',\n    };\n    let tab = \'npm\';\n\n    const copyCommand = (type) => {\n        navigator.clipboard.writeText(commands[type]);\n        const btn = type === "npm" ? $refs.npmCopyBtn : $refs.cdnCopyBtn;\n        const originalHTML = btn.innerHTML;\n        btn.innerHTML =\n            \'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!\';\n        setTimeout(() => {\n            btn.innerHTML = originalHTML;\n        }, 2000);\n    };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.commands??={npm:"npm install ladrillosjs",cdn:'<script src="https://unpkg.com/ladrillosjs@2.1.3/dist/index.js"><\/script>'},e.tab??="npm";const u=c=>{navigator.clipboard.writeText(e.commands[c]);const l=c==="npm"?r.npmCopyBtn:r.cdnCopyBtn,f=l.innerHTML;l.innerHTML='<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!',setTimeout(()=>{l.innerHTML=f},2e3)};e.copyCommand??=u}}}});function Po(e){he(So,e)}const To={tagName:"code-block",template:`<div class="code-container">\r
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
  }`,sourcePath:"components/code-block.html",templateBindings:["filename"]};me({evaluators:{filename:{deps:["filename"],fn:e=>e},copied:{deps:["copied"],fn:e=>e},"!filename":{deps:["filename"],fn:e=>!e},"!copied":{deps:["copied"],fn:e=>!e}},handlers:{"handler:await copyCode()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:async(e,t,r,n,o,i,s,a,u)=>{await(async()=>{const l=e.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(l),e.copied=!0,setTimeout(()=>e.copied=!1,2e3);return}const f=document.createElement("textarea");f.value=l,f.setAttribute("readonly",""),f.style.position="absolute",f.style.left="-9999px",document.body.appendChild(f),f.select();try{document.execCommand("copy"),e.copied=!0,setTimeout(()=>e.copied=!1,2e3)}catch(h){console.error("execCommand fallback failed:",h)}document.body.removeChild(f)})()}}},setups:{'state:let filename = null;\r\n  let language = null;\r\n  let copied = false;\r\n\r\n  const extToLang = {\r\n    js: "javascript", mjs: "javascript", cjs: "javascript",\r\n    ts: "typescript", jsx: "javascript", tsx: "typescript",\r\n    html: "html", htm: "html", xml: "xml", svg: "xml",\r\n    css: "css", scss: "scss", json: "json", md: "markdown",\r\n    sh: "bash", bash: "bash", zsh: "bash",\r\n    py: "python", rb: "ruby", go: "go", rs: "rust",\r\n    yml: "yaml", yaml: "yaml",\r\n  };\r\n\r\n  const innerRe = /(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)/gi;\r\n  const source = $host.__originalHTML ?? $host.innerHTML;\r\n  const matches = source.match(innerRe);\r\n  const raw = matches ? matches.join("") : "";\r\n\r\n  // Dedent: strip the common leading whitespace from every non-empty line\r\n  // so the rendered code doesn\'t inherit indentation from its host file.\r\n  const trimmed = raw.replace(/^[\\r\\n]+/, "").replace(/\\s+$/, "");\r\n  const lines = trimmed.split("\\n");\r\n  let minIndent = Infinity;\r\n  for (const line of lines) {\r\n    if (!line.trim()) continue;\r\n    const m = line.match(/^[ \\t]*/);\r\n    if (m && m[0].length < minIndent) minIndent = m[0].length;\r\n  }\r\n  if (!isFinite(minIndent)) minIndent = 0;\r\n  const html = lines.map((l) => l.slice(minIndent)).join("\\n");\r\n\r\n  // Resolve language: explicit prop wins, else infer from filename extension, else auto-detect.\r\n  let resolvedLang = language;\r\n  if (!resolvedLang && filename) {\r\n    const ext = filename.split(".").pop()?.toLowerCase();\r\n    resolvedLang = extToLang[ext];\r\n  }\r\n\r\n  $refs.codeEl.textContent = html;\r\n  if (resolvedLang) {\r\n    $refs.codeEl.classList.add(`language-${resolvedLang}`);\r\n  }\r\n\r\n  // Highlight now if hljs is ready; otherwise poll briefly until the CDN\r\n  // script finishes loading. Inlined (no helper) because Ladrillos may\r\n  // execute statements in separate scopes — closures over locals from\r\n  // a setInterval callback can otherwise lose access to them.\r\n  if (typeof hljs !== "undefined") {\r\n    $refs.codeEl.removeAttribute("data-highlighted");\r\n    hljs.highlightElement($refs.codeEl);\r\n  } else {\r\n    const codeEl = $refs.codeEl;\r\n    const start = Date.now();\r\n    const iv = setInterval(() => {\r\n      if (typeof hljs !== "undefined") {\r\n        clearInterval(iv);\r\n        if (codeEl) {\r\n          codeEl.removeAttribute("data-highlighted");\r\n          hljs.highlightElement(codeEl);\r\n        }\r\n      } else if (Date.now() - start > 5000) {\r\n        clearInterval(iv);\r\n      }\r\n    }, 50);\r\n  }\r\n\r\n  if ($refs.slotEl) $refs.slotEl.remove();\r\n\r\n  const copyCode = async () => {\r\n    const text = html;\r\n\r\n    if (navigator.clipboard && navigator.clipboard.writeText) {\r\n      await navigator.clipboard.writeText(text);\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n      return;\r\n    }\r\n\r\n    // iOS / fallback for older browsers\r\n    const textarea = document.createElement("textarea");\r\n    textarea.value = text;\r\n    textarea.setAttribute("readonly", "");\r\n    textarea.style.position = "absolute";\r\n    textarea.style.left = "-9999px";\r\n    document.body.appendChild(textarea);\r\n    textarea.select();\r\n\r\n    try {\r\n      document.execCommand("copy");\r\n      copied = true;\r\n      setTimeout(() => (copied = false), 2000);\r\n    } catch (err) {\r\n      console.error("execCommand fallback failed:", err);\r\n    }\r\n\r\n    document.body.removeChild(textarea);\r\n  };':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.filename??=null,e.language??=null,e.copied??=!1,e.extToLang??={js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",jsx:"javascript",tsx:"typescript",html:"html",htm:"html",xml:"xml",svg:"xml",css:"css",scss:"scss",json:"json",md:"markdown",sh:"bash",bash:"bash",zsh:"bash",py:"python",rb:"ruby",go:"go",rs:"rust",yml:"yaml",yaml:"yaml"},e.innerRe??=new RegExp("(?<=<template\\b[^>]*>)[\\s\\S]*?(?=<\\/template>)","gi"),e.source??=t.__originalHTML??t.innerHTML,e.matches??=e.source.match(e.innerRe),e.raw??=e.matches?e.matches.join(""):"",e.trimmed??=e.raw.replace(/^[\r\n]+/,"").replace(/\s+$/,""),e.lines??=e.trimmed.split(`
`),e.minIndent??=1/0;for(const c of e.lines)c.trim()&&(e.m??=c.match(/^[ \t]*/),e.m&&e.m[0].length<e.minIndent&&(e.minIndent=e.m[0].length));isFinite(e.minIndent)||(e.minIndent=0),e.html??=e.lines.map(c=>c.slice(e.minIndent)).join(`
`),e.resolvedLang??=e.language,!e.resolvedLang&&e.filename&&(e.ext??=e.filename.split(".").pop()?.toLowerCase(),e.resolvedLang=e.extToLang[e.ext]),r.codeEl.textContent=e.html,e.resolvedLang&&r.codeEl.classList.add(`language-${e.resolvedLang}`),typeof hljs<"u"?(r.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(r.codeEl)):(e.codeEl??=r.codeEl,e.start??=Date.now(),e.iv??=setInterval(()=>{typeof hljs<"u"?(clearInterval(e.iv),e.codeEl&&(e.codeEl.removeAttribute("data-highlighted"),hljs.highlightElement(e.codeEl))):Date.now()-e.start>5e3&&clearInterval(e.iv)},50)),r.slotEl&&r.slotEl.remove();const u=async()=>{const c=e.html;if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(c),e.copied=!0,setTimeout(()=>e.copied=!1,2e3);return}const l=document.createElement("textarea");l.value=c,l.setAttribute("readonly",""),l.style.position="absolute",l.style.left="-9999px",document.body.appendChild(l),l.select();try{document.execCommand("copy"),e.copied=!0,setTimeout(()=>e.copied=!1,2e3)}catch(f){console.error("execCommand fallback failed:",f)}document.body.removeChild(l)};e.copyCode??=u}}}});function Do(e){he(To,e)}const Mo={tagName:"footer-section",template:`<footer class="footer">\r
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
  }`,sourcePath:"components/footer-section.html",templateBindings:["year"]};me({evaluators:{year:{deps:["year"],fn:e=>e}},handlers:{},setups:{"state:const year = new Date().getFullYear();":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.year??=new Date().getFullYear()}}}});function zo(e){he(Mo,e)}const Io={tagName:"counter-sample",template:`<div class="counter">\r
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
  }`,sourcePath:"components/samples/counter.html",templateBindings:["count"]};me({evaluators:{count:{deps:["count"],fn:e=>e}},handlers:{"handler:count++":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{e.count++}},"handler:count=0":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,u)=>{e.count=0}}},setups:{"state:let count = 0;":{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.count??=0}}}});function Fo(e){he(Io,e)}export{$t as A,hn as B,Cr as D,Ao as K,br as L,Ro as O,Lo as Q,rn as _,Po as a,Do as b,zo as c,Oo as d,Fo as e,Oe as f,je as g,rr as h,Qr as i,me as p,jo as q,vt as s,he as w};
