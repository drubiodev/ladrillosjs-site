(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const or="modulepreload",sr=function(e){return"/ladrillosjs-site/"+e},bt={},sn=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let f=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");o=f(r.map(l=>{if(l=sr(l),l in bt)return;bt[l]=!0;const u=l.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":or,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((v,d)=>{h.addEventListener("load",v),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return o.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var qe="[LadrillosJS]",ie=null;function ir(e){ie=e}function ee(){return ie}function Ve(e,t){return`${e}${(function(r){const n=r!==void 0?r:ie;if(!n)return"";const o=[];if(n.tagName&&o.push(`<${n.tagName}>`),n.sourcePath){const i=n.sourcePath.split("/").pop()||n.sourcePath;o.push(`(${i})`)}return o.length>0?` in ${o.join(" ")}`:""})(t)}`}var _t=(function(e){return e[e.EXPRESSION_EVAL_FAILED=101]="EXPRESSION_EVAL_FAILED",e[e.EXPRESSION_SYNTAX_ERROR=102]="EXPRESSION_SYNTAX_ERROR",e[e.EXPRESSION_UNDEFINED_VAR=103]="EXPRESSION_UNDEFINED_VAR",e[e.EXPRESSION_NULL_ACCESS=104]="EXPRESSION_NULL_ACCESS",e[e.SCRIPT_EXTRACT_FAILED=201]="SCRIPT_EXTRACT_FAILED",e[e.SCRIPT_EXECUTION_FAILED=202]="SCRIPT_EXECUTION_FAILED",e[e.EVENT_HANDLER_FAILED=301]="EVENT_HANDLER_FAILED",e[e.DIRECTIVE_ERROR=401]="DIRECTIVE_ERROR",e[e.LOOP_ERROR=402]="LOOP_ERROR",e[e.CONDITIONAL_ERROR=403]="CONDITIONAL_ERROR",e[e.COMPONENT_LOAD_FAILED=501]="COMPONENT_LOAD_FAILED",e[e.COMPONENT_NOT_FOUND=502]="COMPONENT_NOT_FOUND",e[e.COMPONENT_ALREADY_REGISTERED=503]="COMPONENT_ALREADY_REGISTERED",e[e.INVALID_COMPONENT_PATH=504]="INVALID_COMPONENT_PATH",e[e.COMPONENT_REGISTRATION_FAILED=505]="COMPONENT_REGISTRATION_FAILED",e[e.INVALID_COMPONENT_NAME=506]="INVALID_COMPONENT_NAME",e[e.MODULE_LOAD_FAILED=601]="MODULE_LOAD_FAILED",e[e.MODULE_EXECUTION_FAILED=602]="MODULE_EXECUTION_FAILED",e})({});function lt(e){return`https://github.com/drubiodev/LadrillosJS/blob/main/docs/21-error-handling.md#ljs${e}`}function an(e){return`LJS${e}`}var Oe=class extends Error{code;docsUrl;componentContext;hint;constructor(e,t,r={}){const n=lt(t);super(`[${an(t)}] ${Ve(e,r.context)} See ${n}`,r.cause!==void 0?{cause:r.cause}:void 0),this.name="LadrillosError",this.code=t,this.docsUrl=n,this.componentContext=r.context??null,this.hint=r.hint}};function Me(e,t,r,n){const o=n?`[${an(n.code)}] ${Ve(e,t)} See ${lt(n.code)}`:Ve(e,t);typeof window<"u"&&typeof console<"u"&&typeof console.log=="function"?console.error(`%c${qe}%c ${o}`,"color: #ff6b35; font-weight: bold","color: inherit; font-weight: normal"):console.error(`${qe} ${o}`),r!==void 0&&typeof console<"u"&&console.error(r),n?new Oe(e,n.code,{context:t,hint:n.hint,cause:r}):r instanceof Error||new Error(o,r!==void 0?{cause:r}:void 0)}function te(e,t,r={}){const n=r.context!==void 0?r.context:ie,o=r.errorCode||((s=t)instanceof SyntaxError?102:s instanceof ReferenceError?103:s instanceof TypeError&&(s.message.includes("Cannot read properties of null")||s.message.includes("Cannot read properties of undefined"))?104:101),i=(function(a){if(a instanceof SyntaxError)return"Invalid expression syntax";if(a instanceof ReferenceError){const f=a.message.match(/(\w+) is not defined/);return f?`Undefined variable: "${f[1]}"`:"Undefined variable"}return a instanceof TypeError?a.message.includes("Cannot read properties of null")?"Cannot access property of null":a.message.includes("Cannot read properties of undefined")?"Cannot access property of undefined":"Type error":"Expression evaluation failed"})(t);var s;new Oe(i,o,{context:n,cause:t})}function ar(e,t,r){const n=ie;new Oe(e,201,{context:n,cause:t}),console.error(`${qe} Script error. See: ${lt(201)}`)}function zo(e,t,r,n,o){return new Oe(e,t,{context:r!==void 0?r:ie,hint:n,cause:o})}var Y;function lr(e){const t=(function(){if(Y!==void 0)return Y;const r=globalThis.trustedTypes;if(typeof r?.createPolicy!="function")return Y=null,null;try{Y=r.createPolicy("ladrillosjs",{createHTML:n=>n})}catch{Y=null}return Y})();return t?t.createHTML(e):e}var pe={name:"uninstalled",compileEvaluator:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileHandler:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")},compileSetup:()=>{throw new Error("[LadrillosJS] No codegen backend installed.")}},ln=new Set;function cr(e){ln.add(e)}function ur(e){if(e!==pe){pe=e;for(const t of ln)t()}}function fr(e,t){return pe.compileEvaluator(e,t)}function cn(e,t,r=!1,n=t){return pe.compileHandler(e,t,r,n)}function un(e,t,r=t){return pe.compileSetup(e,t,r)}function dr(e){return new Proxy(e,{get(t,r,n){if(r in t){const o=Reflect.get(t,r,n);return typeof o=="function"?o.bind(t):o}if(typeof r=="string")return t.get(r)},set:(t,r,n)=>typeof r=="string"&&(t.set(r,n),!0),has:(t,r)=>typeof r=="string"&&t.has(r)||r in t})}var ze=()=>sn(()=>import("./shared-Fq0F0LAc-B_nM_K10.js").then(e=>e.s),[]).then(e=>e.n).then(e=>e.ladrillos);function ae(e,t){return e.startsWith("http://")||e.startsWith("https://")||e.startsWith("/")?e.startsWith("/")?new URL(e,window.location.origin).href:e:new URL(e,t).href}function fn(e){return{registerComponent:function(t,r,n=!0,o=!1){const i=ae(r,e);return ze().then(s=>s.registerComponent(t,i,n,o))},registerComponents:function(t){const r=Array.isArray(t)?t.map(n=>({...n,path:ae(n.path,e)})):Object.entries(t).map(([n,o])=>typeof o=="string"?{name:n,path:ae(o,e)}:{name:n,...o,path:ae(o.path,e)});return ze().then(n=>n.registerComponents(r))},$use:function(t,r=!0,n=!1){const o=(function(s){return(s.split("/").pop()?.replace(/\.[^.]+$/,"")||s).replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").toLowerCase()})(t),i=ae(t,e);return ze().then(s=>s.registerComponent(o,i,r,n))}}}var Ge=["registerComponent","registerComponents","$use"];function be(){let e=globalThis.__ladrillos;return e||(e={bus:globalThis.__ladrillosEventBus??{listeners:new Map,componentListeners:new Map},stateCallbacks:globalThis.__ladrillosStateCallbacks??new Map,refs:globalThis.__ladrillosRefs??new Map},globalThis.__ladrillos=e),globalThis.__ladrillosEventBus=e.bus,globalThis.__ladrillosStateCallbacks=e.stateCallbacks,globalThis.__ladrillosRefs=e.refs,e}function dn(){return be().bus}function xe(){return dn().listeners}function Ke(){return dn().componentListeners}function pr(e,t){const r=xe().get(e);if(r&&r.size!==0)for(const n of r)try{n.callback(t)}catch(o){console.error(`[LadrillosJS] Error in event listener for "${e}":`,o)}}function pn(e,t,r){const n=xe(),o=Ke();let i=n.get(e);i||(i=new Set,n.set(e,i));const s={callback:t,componentId:r};if(i.add(s),r){let a=o.get(r);a||(a=new Set,o.set(r,a)),a.add({event:e,registration:s})}return()=>{const a=xe(),f=Ke();if(i?.delete(s),i?.size===0&&a.delete(e),r){const l=f.get(r);if(l){for(const u of l)if(u.registration===s){l.delete(u);break}l.size===0&&f.delete(r)}}}}function mr(e){const t=xe(),r=Ke(),n=r.get(e);if(n){for(const{event:o,registration:i}of n){const s=t.get(o);s&&(s.delete(i),s.size===0&&t.delete(o))}r.delete(e)}}function ct(e){return{$emit:function(t,r){pr(t,r)},$listen:function(t,r){return pn(t,r,e)}}}var Xe=["$emit","$listen"],ge,$t=new Map,Se=()=>{if(ge===void 0)try{ge=typeof new CSSStyleSheet().replaceSync=="function"}catch{ge=!1}return ge},Ae=e=>e.includes("@import"),wt=new Set,mn=e=>{wt.has(e)||wt.add(e)},hn=e=>{let t=$t.get(e);if(t)return t;try{t=new CSSStyleSheet,t.replaceSync(e)}catch{return null}return $t.set(e,t),t},gn=(e,t,r)=>{const n=e.adoptedStyleSheets;n.includes(t)||(e.adoptedStyleSheets=r?[t,...n]:[...n,t])},hr=(e,t,r)=>{if(!t)return;if(Se()&&Ae(t)&&mn(t),Se()&&!Ae(t)){const o=hn(t);if(o)return void gn(r?e:document,o,!1)}const n=document.createElement("style");n.textContent=t,r?e.appendChild(n):document.head.appendChild(n)},gr=(e,t,r)=>{if(Se()&&Ae(t)&&mn(t),Se()&&!Ae(t)){const o=hn(t);if(o)return void gn(e,o,!0)}const n=document.createElement("style");n.textContent=t,n.setAttribute("data-external-href",r),e.insertBefore(n,e.firstChild)},Et={bindings:/{([^}]+)}/g},yr=globalThis.requestIdleCallback||(e=>setTimeout(e,1)),vr=globalThis.cancelIdleCallback||(e=>clearTimeout(e)),xt=(e=1e4)=>t=>{const r=yr(t,{timeout:e});return()=>vr(r)},yn=e=>(t,r)=>{if((function(o){const{top:i,left:s,bottom:a,right:f}=o.getBoundingClientRect(),{innerHeight:l,innerWidth:u}=window;return(i>0&&i<l||a>0&&a<l)&&(s>0&&s<u||f>0&&f<u)})(r))return void t();const n=new IntersectionObserver(o=>{for(const i of o)if(i.isIntersecting){n.disconnect(),t();break}},e);return n.observe(r),()=>n.disconnect()},br=e=>t=>{if(!e)return void t();const r=matchMedia(e);if(r.matches)return void t();const n=()=>t();return r.addEventListener("change",n,{once:!0}),()=>r.removeEventListener("change",n)},St=(e=["click","focusin"])=>{const t=typeof e=="string"?[e]:e;return(r,n)=>{let o=!1;const i=a=>{o||(o=!0,s(),r(),queueMicrotask(()=>{a.target&&a.target instanceof Element&&a.target.dispatchEvent(new a.constructor(a.type,a))}))},s=()=>{for(const a of t)n.removeEventListener(a,i)};for(const a of t)n.addEventListener(a,i,{once:!0,passive:!0});return s}},_r=(e=0)=>t=>{const r=setTimeout(t,e);return()=>clearTimeout(r)},$r=yn({rootMargin:"100px"});function At(e){const t=e.querySelector(':scope > template[slot="placeholder"]');return t?(t.remove(),t.content.cloneNode(!0)):null}function wr(e){const t=e.parentNode;if(!t)return;const r=(function(d){if(d.hasAttribute("eager"))return null;if(d.hasAttribute("interaction")){const y=(d.getAttribute("interaction")||"").trim();if(!y)return St();const w=y.split(",").map(x=>x.trim()).filter(Boolean);return St(w.length===1?w[0]:w)}if(d.hasAttribute("media"))return br(d.getAttribute("media")||"");if(d.hasAttribute("delay"))return _r(Number(d.getAttribute("delay"))||0);if(d.hasAttribute("idle")||d.hasAttribute("idle-timeout")){const y=d.getAttribute("idle-timeout");return y?xt(Number(y)||1e4):xt()}const p={},c=d.getAttribute("margin");c&&(p.rootMargin=c);const g=d.getAttribute("threshold");if(g!==null){const y=Number(g);Number.isNaN(y)||(p.threshold=y)}return Object.keys(p).length>0?yn(p):$r})(e),n=e.getAttribute("src"),o=e.getAttribute("component"),i=new Set(["eager","visible","margin","threshold","idle","idle-timeout","delay","interaction","media","src","component"]),s=document.createComment(n?` <lazy src="${n}"> `:" <lazy> ");if(t.insertBefore(s,e),e.remove(),n){const d=(o||(a=n,(a.split(/[?#]/)[0].split("/").pop()?.replace(/\.[^.]+$/,"")||a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/[_\s]+/g,"-").toLowerCase())).trim();if(!d.includes("-"))return;const p=At(e),c=()=>{const $=document.createElement(d);for(const A of Array.from(e.attributes))i.has(A.name)||$.setAttribute(A.name,A.value);s.parentNode?.replaceChild($,s)};let g=null;p&&(g=document.createComment(" /lazy-placeholder "),s.parentNode?.insertBefore(g,s.nextSibling),s.parentNode?.insertBefore(p,g));const y=async()=>{try{if(customElements.get(d)||await(async function($,A){return(await sn(()=>import("./shared-Fq0F0LAc-B_nM_K10.js").then(S=>S.s),[]).then(S=>S.n)).ladrillos.registerComponent($,A,!0,!1)})(d,n),g){let $=s.nextSibling;for(;$&&$!==g;){const A=$.nextSibling;$.parentNode?.removeChild($),$=A}g.parentNode?.removeChild(g)}c()}catch{}};if(!r)return void y();const w=document.createElement("span");let x;return w.setAttribute("data-lazy-sentinel",""),w.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(w,s.nextSibling),void(x=r(()=>{x?.(),w.remove(),y()},w))}var a;const f=At(e),l=document.createDocumentFragment();for(;e.firstChild;)l.appendChild(e.firstChild);const u=document.createComment(" /lazy ");s.parentNode?.insertBefore(u,s.nextSibling),f&&s.parentNode?.insertBefore(f,u);const m=()=>{let d=s.nextSibling;for(;d&&d!==u;){const p=d.nextSibling;d.parentNode?.removeChild(d),d=p}u.parentNode?.insertBefore(l,u)};if(!r)return void m();const h=document.createElement("span");let v;h.setAttribute("data-lazy-sentinel",""),h.style.cssText="display:inline-block;width:0;height:0;padding:0;margin:0;border:0;",s.parentNode?.insertBefore(h,s.nextSibling),h.__lazyContent=l,v=r(()=>{v?.(),h.remove(),m()},h)}function Nt(e){const t=Array.from(e.querySelectorAll("lazy"));for(const r of t)Er(r)||wr(r)}function Er(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Ye(e){const t=[],r=e.querySelectorAll("[data-lazy-sentinel]");for(const n of Array.from(r)){const o=n.__lazyContent;o&&t.push(o)}return t}var _e="data-l-ctrl",xr=new Set(["FOR","IF","ELSE-IF","ELSE","SHOW"]),Sr=/<(for|else-if|if|else|show)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi,Ar=/<\/(for|else-if|if|else|show)\s*>/gi,Nr=/(<script\b[\s\S]*?<\/script\s*>|<style\b[\s\S]*?<\/style\s*>|<!--[\s\S]*?-->)/gi,Cr=/<\/?(?:for|if|else|show)\b/i;function kr(e){return Cr.test(e)?e.split(Nr).map((t,r)=>r%2==1?t:t.replace(Sr,(n,o,i)=>`<template ${_e}="${o.toLowerCase()}"${i}>`).replace(Ar,"</template>")).join(""):e}function vn(e){let t;for(;t=e.querySelector(`template[${_e}]`);){const r=t.ownerDocument.createElement(t.getAttribute(_e));for(const n of Array.from(t.attributes))n.name!==_e&&r.setAttribute(n.name,n.value);r.appendChild(t.content),t.replaceWith(r)}for(const r of Array.from(e.querySelectorAll("template")))vn(r.content)}function Uo(e){return xr.has(e.tagName)}var bn=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmouseout","onmousemove","onmouseenter","onmouseleave","onkeydown","onkeyup","onkeypress","onfocus","onblur","onchange","oninput","onsubmit","onreset","onscroll","onload","onerror","ontouchstart","ontouchmove","ontouchend","ontouchcancel","ondragstart","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondrop"],$e=new Set(bn),ne="$bind";function ut(e){const t=e.currentTarget?.__ladrillosBindSync;t&&t.eventType===e.type&&t.sync()}var fe="$ref",ye={forAlias:/([\s\S]*?)\s+(?:in|of)\s+([\s\S]+)$/,forIterator:/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,stripParens:/^\(|\)$/g};function ft(e){return e.replace(/\$/g,"\\$")}var Lr=Object.freeze(["alert","confirm","prompt","console","JSON","Math","Date","Array","Object","String","Number","Boolean","Map","Set","WeakMap","WeakSet","Symbol","BigInt","Promise","Proxy","Reflect","parseInt","parseFloat","isNaN","isFinite","Infinity","NaN","encodeURIComponent","decodeURIComponent","encodeURI","decodeURI","setTimeout","clearTimeout","setInterval","clearInterval","requestAnimationFrame","cancelAnimationFrame","requestIdleCallback","cancelIdleCallback","queueMicrotask","fetch","AbortController","AbortSignal","Headers","Request","Response","URL","URLSearchParams","navigator","location","history","localStorage","sessionStorage","crypto","document","window","globalThis","Element","HTMLElement","Event","CustomEvent","EventTarget","TextEncoder","TextDecoder","Blob","File","FileReader","FormData","Error","TypeError","RangeError","SyntaxError","ReferenceError","atob","btoa","structuredClone"]),Tr=Object.freeze([]),Rr=new Set(["with","eval","arguments","constructor","prototype","break","case","catch","continue","debugger","default","delete","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","class","const","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","null","true","false"]),Or={enter:"Enter",tab:"Tab",esc:"Escape",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",delete:"Delete",backspace:"Backspace",insert:"Insert",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown"},_n=["ctrl","alt","shift","meta"],Mr=["prevent","stop","self","once","passive","capture"],$n={left:0,middle:1,right:2};function dt(e){if(!e.startsWith("$on:"))return null;const t=e.slice(4).split(".");if(t.length===0||!t[0])return null;const r=t[0],n=t.slice(1),o={eventName:r,keyModifiers:[],systemModifiers:[],eventModifiers:[],mouseModifier:null,exact:!1};for(const i of n){const s=i.toLowerCase();s!=="exact"?Mr.includes(s)?o.eventModifiers.push(s):_n.includes(s)?o.systemModifiers.push(s):s in $n?o.mouseModifier=s:o.keyModifiers.push(s):o.exact=!0}return o}function pt(e){const t={};return e.includes("passive")&&(t.passive=!0),e.includes("capture")&&(t.capture=!0),e.includes("once")&&(t.once=!0),t}function Ie(e,t){return function(r){t.eventModifiers.includes("self")&&r.target!==r.currentTarget||t.mouseModifier&&r instanceof MouseEvent&&!(function(n,o){return n.button===$n[o]})(r,t.mouseModifier)||(t.systemModifiers.length>0||t.exact)&&(r instanceof KeyboardEvent||r instanceof MouseEvent)&&!(function(n,o,i){const s={ctrl:n.ctrlKey,alt:n.altKey,shift:n.shiftKey,meta:n.metaKey};for(const a of o)if(!s[a])return!1;if(i){for(const a of _n)if(!o.includes(a)&&s[a])return!1}return!0})(r,t.systemModifiers,t.exact)||t.keyModifiers.length>0&&r instanceof KeyboardEvent&&!t.keyModifiers.some(n=>(function(o,i){const s=i.toLowerCase(),a=Or[s];if(a)return o.key===a;if(s.length===1)return o.key.toLowerCase()===s;const f=s.split("-").map((l,u)=>u===0?l:l.charAt(0).toUpperCase()+l.slice(1)).join("");return o.key.toLowerCase()===s||o.key.toLowerCase()===f.toLowerCase()})(r,n))||(t.eventModifiers.includes("prevent")&&r.preventDefault(),t.eventModifiers.includes("stop")&&r.stopPropagation(),e(r))}}function Ne(e){return e.startsWith("$on:")}var Ct=new Map,kt=Symbol("reactive-array"),Lt=Symbol("reactive-array-subscribers"),Ir=["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"];function K(e,t){if(e[kt]){const o=e[Lt];return o&&t&&o.add(t),e}const r=new Set;t&&r.add(t);const n=()=>{for(const o of r)o()};return new Proxy(e,{get(o,i){if(i===kt)return!0;if(i===Lt)return r;const s=o[i];return typeof i=="string"&&Ir.includes(i)&&typeof s=="function"?(...a)=>{const f=a.map(u=>Array.isArray(u)?K(u,n):u),l=s.apply(o,f);return n(),l}:Array.isArray(s)?K(s,n):s},set(o,i,s){const a=!isNaN(typeof i=="string"?parseInt(i,10):NaN),f=i==="length",l=Array.isArray(s)?K(s,n):s;return o[i]===l||(o[i]=l,(a||f)&&n()),!0},deleteProperty(o,i){const s=delete o[i];return s&&n(),s}})}function Tt(e){if(e===null||typeof e!="object"||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function wn(e,t){for(const r of Object.keys(e)){const n=e[r];Array.isArray(n)?e[r]=K(n,t):n&&typeof n=="object"&&!Array.isArray(n)&&wn(n,t)}return e}var Rt=new WeakMap;function Pr(e){let t=Rt.get(e);if(t===void 0){try{t=Function.prototype.toString.call(e)}catch{t=""}t.includes("[native code]")&&(t=""),Rt.set(e,t)}return t}function jr(e,t,r){const n=new Set,o=[],i=new Set;for(const s of r)typeof t[s]=="function"&&Ce(e,s)&&o.push(s);for(;o.length>0;){const s=o.pop();if(i.has(s))continue;i.add(s);const a=Pr(t[s]);if(a)for(const f of r)f!==s&&Ce(a,f)&&(n.add(f),typeof t[f]=="function"&&o.push(f))}return n}function Ot(e,t,r){const n=Object.keys(r);if(n.some(o=>typeof r[o]=="function"))for(const o of e)for(const i of o.bindings)for(const s of jr(i.raw,r,n))t.get(s)?.add(o)}function Ce(e,t){return(function(r){let n=Ct.get(r);if(!n){const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=new RegExp(`\\b${o}\\b`),Ct.set(r,n)}return n})(t).test(e)}function Pe(e,t,r){if(t.length===0)return e;const n=r?.rewriteDeclarations!==!1,o=[],i=l=>(o.push(l),`__STRING_PLACEHOLDER_${o.length-1}__`);let s="",a=0;for(;a<e.length;){const l=e[a];if(l==="/"&&e[a+1]==="/"){const u=e.indexOf(`
`,a),m=u===-1?e.length:u;s+=e.slice(a,m),a=m;continue}if(l==="/"&&e[a+1]==="*"){const u=e.indexOf("*/",a+2),m=u===-1?e.length:u+2;s+=e.slice(a,m),a=m;continue}if(l==='"'||l==="'"){let u=a+1;for(;u<e.length&&e[u]!==l;)e[u]==="\\"?u+=2:u++;s+=i(e.slice(a,u+1)),a=u+1;continue}if(l==="`"){s+="`",a++;let u=a;for(;a<e.length&&e[a]!=="`";)if(e[a]!=="\\"){if(e[a]==="$"&&e[a+1]==="{"){a>u&&(s+=i(e.slice(u,a))),s+="${",a+=2;const m=a;let h=1;for(;a<e.length&&h>0;){const v=e[a];if(v!=='"'&&v!=="'"){if(v==="`"){a++;let d=0;for(;a<e.length;)if(e[a]!=="\\"){if(e[a]==="`"&&d===0){a++;break}e[a]!=="$"||e[a+1]!=="{"?(e[a]==="}"&&d>0&&d--,a++):(d++,a+=2)}else a+=2;continue}if(v==="{")h++;else if(v==="}"&&(h--,h===0))break;a++}else{for(a++;a<e.length&&e[a]!==v;)e[a]==="\\"?a+=2:a++;a++}}s+=i(Pe(e.slice(m,a),t,r)),e[a]==="}"&&a++,s+="}",u=a;continue}a++}else a+=2;a>u&&(s+=i(e.slice(u,a))),s+="`",a++;continue}s+=l,a++}if(n)for(const l of t){const u=new RegExp(`\\b(let|const|var)\\s+(${En(l)})\\s*=`,"g");s=s.replace(u,`__state__.${l} ??=`)}for(const l of t)s=Fr(s,l);let f=s;for(let l=0;l<o.length;l++)f=f.replace(`__STRING_PLACEHOLDER_${l}__`,()=>o[l]);return f}var Dr=new Set(["return","typeof","case","in","of","yield","await","throw","void","delete","new"]);function Fr(e,t){const r=new RegExp(`(?<![^.]\\.)(?<!__state__\\.)\\b${En(t)}\\b(?!\\s*\\()`,"g");return e.replace(r,(n,o)=>{if((function(i,s){let a=s-1;const f=a;for(;a>=0&&/\s/.test(i[a]);)a--;if(a===f)return!1;const l=a+1;for(;a>=0&&/[A-Za-z]/.test(i[a]);)a--;const u=i.slice(a+1,l);return u==="let"||u==="const"||u==="var"})(e,o)||(function(i,s,a){if(Pt(i,s+a)!==":")return"value";const f=It(i,s-1);if(f===""||f===";"||f==="}"||f==="{")return"key";if(f===","){const l=Mt(i,s);return l!==-1&&i[l]==="{"?"key":"value"}return"value"})(e,o,n.length)==="key")return n;switch((function(i,s,a){const f=It(i,s-1),l=Pt(i,s+a);if(f!=="{"&&f!==","||l!==","&&l!=="}")return"none";const u=Mt(i,s);return u===-1||i[u]!=="{"?"none":(function(m,h){let v=h-1;for(;v>=0&&/\s/.test(m[v]);)v--;if(v<0)return"object";const d=m[v];if(d===")"||d===">"&&m[v-1]==="=")return"none";if("=([,:?!&|^~+-*/%<>".includes(d))return"object";if(/[A-Za-z0-9_$]/.test(d)){let p=v;for(;p>=0&&/[A-Za-z0-9_$]/.test(m[p]);)p--;const c=m.slice(p+1,v+1);return c==="let"||c==="const"||c==="var"?"destructuring":Dr.has(c)?"object":"none"}return"none"})(i,u)})(e,o,n.length)){case"object":return`${t}: __state__.${t}`;case"destructuring":return n;default:return`__state__.${t}`}})}function Mt(e,t){let r=0;for(let n=t-1;n>=0;n--){const o=e[n];if(o===")"||o==="]"||o==="}")r++;else if(o==="("||o==="["||o==="{"){if(r===0)return n;r--}}return-1}function It(e,t){for(let r=t;r>=0;r--)if(!/\s/.test(e[r]))return e[r];return""}function Pt(e,t){for(let r=t;r<e.length;r++)if(!/\s/.test(e[r]))return e[r];return""}function En(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var xn=e=>e instanceof ShadowRoot?e.host:e;async function zr(e,t,r,n={},o,i=!1,s,a,f,l=[]){const u=xn(e),m={},h=t.map(d=>d.content).join(`
`);for(const[d,p]of Object.entries(n))m[d]=p;m.__scriptContent=h,m.__componentUrl=s,m.__componentId=a;const v=(function(d,p,c,g){const y=(function(S,C){const _=new Map,b=Object.keys(C);for(const T of b)_.set(T,new Set);for(const T of S)for(const E of T.bindings)for(const N of b)Ce(E.raw,N)&&_.get(N).add(T);return Ot(S,_,C),_})(p,d),w=(S,C)=>{const _=y.get(S);if(_)for(const b of _)c(b,C);g&&g()},x=S=>()=>{d.__suspendReactivity?g&&g():w(S,d)},L=S=>{x(S)()};for(const S of Object.keys(d)){const C=d[S];Array.isArray(C)?d[S]=K(C,x(S)):C&&typeof C=="object"&&wn(C,x(S))}const $=new WeakMap,A=(S,C)=>{let _=$.get(S);const b=_?.get(C);if(b)return b;const T=new Proxy(S,{get(E,N){const k=E[N];return typeof N=="string"&&Tt(k)?A(k,C):k},set:(E,N,k)=>typeof N!="string"?(E[N]=k,!0):(N in E&&E[N]===k||(E[N]=Array.isArray(k)?K(k,x(C)):k,d.__suspendReactivity||w(C,d)),!0),deleteProperty(E,N){const k=N in E;return delete E[N],k&&typeof N=="string"&&!d.__suspendReactivity&&w(C,d),!0}});return _||(_=new Map,$.set(S,_)),_.set(C,T),T};return new Proxy(d,{get(S,C){if(C==="__notifyKeyChanged")return L;const _=S[C];return typeof C=="string"&&Tt(_)?A(_,C):_},set(S,C,_){const b=!(C in S);return!b&&S[C]===_||(S[C]=Array.isArray(_)?K(_,x(C)):_,b&&(function(T,E,N,k){N.set(T,new Set);for(const O of E)for(const M of O.bindings)Ce(M.raw,T)&&N.get(T).add(O);Ot(E,N,k)})(C,p,y,S),S.__suspendReactivity||w(C,S),!0)}})})(m,r,(d,p)=>Mn(d,p),o);v.__suspendReactivity=!0;try{for(const d of t)Jr(d.content,v,s,a,u,f,l)}finally{v.__suspendReactivity=!1}return u.__state=v,u.__scriptContent=h,u.__componentUrl=s,u.__componentId=a,i||(Sn(e,v,h,u),In(r,v)),v}function Ur(e,t,r){const n=xn(e);Sn(e,r,n.__scriptContent||"",n),In(t,r)}function Sn(e,t,r,n){const o=[e,...Ye(e)];for(const i of o){const s=Array.from(i.querySelectorAll("*"));for(const a of s)if(!Wr(a)){for(const f of bn){const l=a.getAttribute(f);if(l){a.removeAttribute(f);const u=f.slice(2),m=An(l,t,r,n);m&&a.addEventListener(u,m)}}Br(a,t,r,n)}}}function Br(e,t,r,n){const o=Array.from(e.attributes).filter(i=>Ne(i.name));for(const i of o){const s=dt(i.name);if(!s)continue;const a=i.value;e.removeAttribute(i.name);const f=An(a,t,r,n);if(!f)continue;const l=Ie(f,s),u=pt(s.eventModifiers);e.addEventListener(s.eventName,l,u)}}function Wr(e){if(e.hasAttribute("$for")||e.tagName==="FOR")return!0;let t=e.parentElement;for(;t;){if(t.hasAttribute("$for")||t.tagName==="FOR")return!0;t=t.parentElement}return!1}function An(e,t,r,n){try{const o=n?.__componentUrl,i=n?.__componentId,s=kn(o,i),a=ht(),f=["event","__state__","$refs","$host",...a,...s.keys],l=Object.keys(t),u=l.filter(x=>typeof t[x]=="function"),m=l.filter(x=>typeof t[x]!="function"),h=t.__hasModuleScripts===!0,v=m.length>0?`let { ${m.join(", ")} } = __state__;`:"",d=h&&u.length>0?`const { ${u.join(", ")} } = __state__;`:"",p=Pe(Nn(r,h?u:[]),m,{rewriteDeclarations:!1}),c=m.some(x=>new RegExp(`\\b${x}\\b`).test(e))?m.filter(x=>new RegExp(`\\b${x}\\b`).test(e)).map(x=>`__state__.${x} = ${x};`).join(" "):"",g=/\bawait\b/.test(e)||/\bawait\b/.test(p)||/\basync\b/.test(p),y=o||"ladrillos-event-handler",w=cn(f,g?`"use strict"; ${v} ${d} ${p} try { await (async () => { ${e} })(); } finally { ${c} }
//# sourceURL=${y}`:`"use strict"; ${v} ${d} ${p} ${e}; ${c}
//# sourceURL=${y}`,g,`handler:${e}`);return x=>{try{ut(x);const L=[x,t,n&&n.__refs||new Map,n,...a.map(()=>{}),...s.values],$=w(...L);$&&typeof $.catch=="function"&&$.catch(A=>{const S={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,A,{context:S.tagName?S:ee(),errorCode:_t.EVENT_HANDLER_FAILED})})}catch(L){const $={tagName:n?.tagName?.toLowerCase(),sourcePath:t.__componentUrl,instanceId:t.__componentId};te(e,L,{context:$.tagName?$:ee(),errorCode:_t.EVENT_HANDLER_FAILED})}}}catch{return n?.tagName&&n.tagName.toLowerCase(),null}}var le=new Map,Hr=500;function Nn(e,t=[]){const r=t.join(",")+"\0"+e,n=le.get(r);if(n!==void 0)return n;const o=(function(i,s=[]){const a=[],f=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\([^)]*\)\s*\{/g;let l;for(;(l=f.exec(i))!==null;){if(s.includes(l[1]))continue;const m=jt(i,l.index);m&&a.push(m)}const u=/(?:const|let)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?\([^)]*\)\s*=>\s*\{/g;for(;(l=u.exec(i))!==null;){if(s.includes(l[1]))continue;const m=l.index,h=jt(i,m,i.indexOf("{",m+l[0].length-1));h&&a.push(h)}return a.map(m=>m.trim()).join(`;
`)+(a.length>0?";":"")})(e,t);if(le.size>=Hr){const i=le.keys().next().value;i!==void 0&&le.delete(i)}return le.set(r,o),o}function jt(e,t,r){let n=0,o=t,i=!1,s="",a=!1;for(let f=r??t;f<e.length;f++){const l=e[f];if(l!=='"'&&l!=="'"&&l!=="`"||(f>0?e[f-1]:"")==="\\"||(i?l===s&&(i=!1):(i=!0,s=l)),!i&&(l==="{"&&(n++,a=!0),l==="}"&&n--,a&&n===0&&l==="}")){o=f+1;break}}return n!==0?null:e.slice(t,o)}function Zr(e,t=[]){const r=Vr(e),n=r.map(o=>`__state__.${o} ??= ${o};`).join(`
`);return`${Pe(e,[...new Set([...Cn(e),...t])].filter(o=>!r.includes(o)))}
${n}`}function Jr(e,t,r,n,o,i,s=[]){try{const a=r||"ladrillos-component",f=`
      "use strict";
      ${Zr(e,s)}
//# sourceURL=${a}
    `,l=kn(r,n),u=ht(),m=["__state__","$host","$refs",...u,...l.keys],h=[t,o,i,...u.map(()=>{}),...l.values];un(m,f,`state:${e}`)(...h)}catch(a){ar("Error executing script with reactive state",a)}}function mt(e){const t=e.split(""),r=e.length;let n=0,o=0,i=!1;const s=[],a=()=>s.length>0,f=(p,c)=>{for(let g=p;g<c;g++){const y=t[g];y!==`
`&&y!=="\r"&&(t[g]=" ")}},l=p=>{let c=p;for(;c<r&&e[c]!==`
`;)c++;return c},u=p=>{let c=p+2;for(;c<r-1&&(e[c]!=="*"||e[c+1]!=="/");)c++;return Math.min(r,c+2)},m=(p,c)=>{let g=p+1;for(;g<r;)if(e[g]!=="\\"){if(e[g]===c)return g+1;if(e[g]===`
`)return g;g++}else g+=2;return g},h=p=>{let c=p+1;for(;c<r;)if(e[c]!=="\\"){if(e[c]==="`")return c+1;if(e[c]==="$"&&e[c+1]==="{"){c+=2;let g=1;for(;c<r&&g>0;){const y=e[c];y!=="`"?y!=='"'&&y!=="'"?y!=="/"||e[c+1]!=="/"?y!=="/"||e[c+1]!=="*"?(y==="{"?g++:y==="}"&&g--,c++):c=u(c):c=l(c):c=m(c,y):c=h(c)}continue}c++}else c+=2;return c},v=p=>{let c=p-1;for(;c>=0&&/\s/.test(e[c]);)c--;return c<0||!!"([{,;:!&|?=+-*%^~<>".includes(e[c])||/\b(return|typeof|delete|void|in|of|new|instanceof|throw)$/.test(e.slice(0,c+1))},d=p=>{let c=p+1,g=!1;for(;c<r;){const y=e[c];if(y!=="\\"){if(y==="[")g=!0;else if(y==="]")g=!1;else{if(y==="/"&&!g){c++;break}if(y===`
`)break}c++}else c+=2}for(;c<r&&/[a-zA-Z]/.test(e[c]);)c++;return c};for(;n<r;){const p=e[n];if(p==="/"&&e[n+1]==="/"){const c=l(n);a()&&f(n,c),n=c;continue}if(p==="/"&&e[n+1]==="*"){const c=u(n);a()&&f(n,c),n=c;continue}if(p==='"'||p==="'"){const c=m(n,p);a()&&f(n,c),n=c;continue}if(p==="`"){const c=h(n);a()&&f(n,c),n=c;continue}if(p==="/"&&v(n)){const c=d(n);a()&&f(n,c),n=c;continue}if(p!=="{")if(p!=="}")if(p!=="="||e[n+1]!==">"){if(/[a-zA-Z_$]/.test(p)){const c=n;for(;n<r&&/[a-zA-Z0-9_$]/.test(e[n]);)n++;const g=e.slice(c,n);a()?f(c,n):g==="function"&&(i=!0);continue}a()&&p!==`
`&&p!=="\r"&&(t[n]=" "),n++}else{if(a())t[n]=" ",t[n+1]=" ";else{let c=n+2;for(;c<r;){const g=e[c];if(/\s/.test(g))c++;else if(g!=="/"||e[c+1]!=="/"){if(g!=="/"||e[c+1]!=="*")break;c=u(c)}else c=l(c)}e[c]==="{"&&(i=!0)}n+=2}else a()&&s[s.length-1]===o?s.pop():a()&&(t[n]=" "),o--,n++;else o++,i?(s.push(o),i=!1):a()&&(t[n]=" "),n++}return t.join("")}function Cn(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function qr(e){const t=mt(e),r=[],n=/(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:async\s*)?(?:function\b|\([^()]*\)\s*=>|[a-zA-Z_$][a-zA-Z0-9_$]*\s*=>)/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return r}function Vr(e){const t=mt(e),r=[],n=/(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;let o;for(;(o=n.exec(t))!==null;)r.push(o[1]);return[...r,...qr(e)]}function ht(){return Tr.filter(e=>!Rr.has(e))}function kn(e,t){const r=[],n=[];for(const s of Lr)s in globalThis&&(r.push(s),n.push(globalThis[s]));const o=fn(e||window.location.href);r.push(...Ge),n.push(o.registerComponent,o.registerComponents,o.$use);const i=ct(t||"anonymous");return r.push(...Xe),n.push(i.$emit,i.$listen),{keys:r,values:n}}var Q=new Map;cr(()=>Q.clear());var Gr=100,Kr=5e3,Ln=/^[A-Za-z_$][\w$]*$/,ue=null,Tn=null;function Qe(e,t){try{const r=Object.keys(t),n=[],o=[];for(let i=0;i<r.length;i++){const s=r[i];Ln.test(s)&&(n.push(s),o.push(t[s]))}return Rn(),et(n,On(n.join(",")),e)(...Tn,...o)}catch(r){return te(e,r,{context:ee()}),`{${e}}`}}function Rn(){return ue===null&&(ue=ht(),Tn=ue.map(()=>{})),ue}function On(e){let t=Q.get(e);if(!t){if(Q.size>=Gr){const r=Q.keys().next().value;r!==void 0&&Q.delete(r)}t=new Map,Q.set(e,t)}return t}function et(e,t,r){let n=t.get(r);if(!n){if(t.size>=Kr){const o=t.keys().next().value;o!==void 0&&t.delete(o)}n=fr([...ue,...e],r),t.set(r,n)}return n}function Xr(e,t){const r=Rn(),n=Object.keys(e),o=[];for(let d=0;d<n.length;d++)Ln.test(n[d])&&o.push(n[d]);const i=o.join(","),s=On(i),a=r.length,f=new Array(a+o.length).fill(void 0),l=()=>{for(let d=0;d<o.length;d++)f[a+d]=e[o[d]]},u=t!==void 0;let m=null,h=null;if(u){l(),m=[],h=[];for(const d of t){const p=o.indexOf(d);p>=0&&(m.push(a+p),h.push(d))}}const v=d=>{try{const p=et(o,s,d);return u||l(),p.apply(null,f)}catch(p){return te(d,p,{context:ee()}),`{${d}}`}};return v.sig=i,v.refresh=u?()=>{for(let d=0;d<m.length;d++)f[m[d]]=e[h[d]]}:l,v.compile=d=>{try{return et(o,s,d)}catch(p){return te(d,p,{context:ee()}),null}},v.invoke=(d,p)=>{try{return u||l(),d.apply(null,f)}catch(c){return te(p,c,{context:ee()}),`{${p}}`}},v}var Yr=new Set(["disabled","checked","readonly","required","selected","hidden","multiple","autofocus","open","novalidate","formnovalidate","inert","reversed","loop","muted","controls","autoplay","playsinline","default","ismap","allowfullscreen"]);function Mn(e,t){if((function(o){if(!o.isAttribute||!o.attributeName||o.bindings.length!==1)return!1;const i=o.original.trim();return!!/^\{[\s\S]*\}$/.test(i)&&i.slice(1,-1).trim()===o.bindings[0].raw.trim()})(e)){const o=e.element??e.node.parentElement,i=Qe(e.bindings[0].raw,t);return void(o&&(r=i,r===null||typeof r!="object"&&typeof r!="function"?(function(s,a,f){Yr.has(a)?f?s.setAttribute(a,""):s.removeAttribute(a):f!=null?s.setAttribute(a,String(f)):s.removeAttribute(a)})(o,e.attributeName,i):(o.hasAttribute?.(e.attributeName)&&o.removeAttribute(e.attributeName),o[e.attributeName]=i)))}var r;let n=e.original;for(const o of e.bindings){const i=Qe(o.raw,t),s=String(i??"");n=n.replace(`{${o.raw}}`,s)}if(e.isAttribute&&e.attributeName){const o=e.element??e.node.parentElement;o&&o.setAttribute(e.attributeName,n)}else e.node.textContent=n}function In(e,t){for(const r of e)Mn(r,t)}function Qr(){const e=Qe;return e.forContext=Xr,e}function Pn(e){return import(e)}var Dt=new Map,Ue=new Map,eo=/(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?['"]([^'"]+)['"]/g,to=/import\s*\(\s*['"]([^'"]+)['"]\s*\)/g,no=[".ts",".tsx",".mts"];function ke(e){return e.startsWith("./")||e.startsWith("../")}function Ft(e){return no.some(t=>e.endsWith(t))}function zt(e){return!(e.startsWith("/")||e.startsWith("./")||e.startsWith("../")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))}function ro(e,t){let r=e;const n=[],o=[];return r=r.replace(eo,(i,s)=>{if(ke(s)){const a=new URL(s,t).href;return Ft(s)&&o.push(s),i.replace(s,a)}return zt(s)&&n.push(s),i}),r=r.replace(to,(i,s)=>{if(ke(s)){const a=new URL(s,t).href;return Ft(s)&&o.push(s),`import("${a}")`}return zt(s)&&n.push(s),i}),r}var Ut=/^(?:export\s+)?(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm,oo=["$emit","$listen","$refs","registerComponent","registerComponents","$use"];async function tt(e,t,r){if(e.external)return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load external script: ${e.src}`)),document.head.appendChild(i)});if(e.type!=="module")return document.querySelector(`script[src="${e.src}"]`)?Promise.resolve(void 0):new Promise((n,o)=>{const i=document.createElement("script");i.src=e.src,e.type&&(i.type=e.type),i.onload=()=>n(void 0),i.onerror=s=>o(new Error(`Failed to load script: ${e.src}`)),document.head.appendChild(i)});try{const n=await fetch(e.src);if(!n.ok)throw new Error(`Failed to fetch module: ${e.src}`);const o=ro(await n.text(),e.src),i=(function(u){const m=(function(g){const y=[];let w;for(Ut.lastIndex=0;(w=Ut.exec(g))!==null;)y.push(w[1]);const x=/^(?:export\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/gm;for(;(w=x.exec(g))!==null;)y.includes(w[1])||y.push(w[1]);return y})(u),h=new Set,v=/export\s+(?:let|const|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let d;for(;(d=v.exec(u))!==null;)h.add(d[1]);const p=/export\s*\{([^}]+)\}/g;for(;(d=p.exec(u))!==null;)d[1].split(",").map(g=>g.trim().split(/\s+as\s+/)[0].trim()).forEach(g=>h.add(g));const c=m.filter(g=>!h.has(g));return c.length===0?u:`${u}
export { ${c.join(", ")} };`})((function(u){const m=[];let h=u;if(h=h.replace(/import\s*\{([^}]+)\}\s*from\s*(['"][^'"]+['"])\s*;?/g,(v,d,p)=>{const c=d.split(",").map(y=>y.trim()),g=[];for(const y of c){if(!y)continue;const w=y.match(/^(\w+)\s+as\s+(\w+)$/);if(w){const[,x,L]=w,$=`__raw_${L}`;g.push(`${x} as ${$}`),m.push(`const ${L} = __wrapReactiveArray(${$}, __ladrillos_componentId, "${L}");`)}else{const x=`__raw_${y}`;g.push(`${y} as ${x}`),m.push(`const ${y} = __wrapReactiveArray(${x}, __ladrillos_componentId, "${y}");`)}}return`import { ${g.join(", ")} } from ${p};`}),m.length>0){const v=h.split(`
`);let d=-1;for(let p=0;p<v.length;p++){const c=v[p].trim();(c.startsWith("import ")||c.startsWith("import{"))&&(d=p)}d>=0&&(v.splice(d+1,0,"","// === Reactive Import Wrappers ===",...m,"// === End Reactive Import Wrappers ===",""),h=v.join(`
`))}return h})(o)),s=(function(u){const m=new Set;for(const h of oo){const v=h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");new RegExp(`(?:^|[\\s,{])${v}(?:\\s+as\\b|[\\s,}=;(])|\\b(?:let|const|var|function)\\s+${v}\\b`,"m").test(u)&&m.add(h)}return m})(o),a=(function(u,m,h=new Set){const v=(d,p)=>h.has(d)?"":p;return`
// === LadrillosJS Framework Helpers (auto-injected) ===
const __ladrillos_componentId = "${u||"anonymous"}";
const __ladrillos_componentUrl = "${m||"unknown"}";

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

`})(t,r||e.src,s)+i,f=new Blob([a],{type:"text/javascript"}),l=URL.createObjectURL(f);try{return await Pn(l)}finally{URL.revokeObjectURL(l)}}catch(n){throw console.error(`[LadrillosJS] Failed to load external module: ${e.src}`,n),n}}async function so(e){const t=e.filter(r=>r.external);for(const r of t)try{await tt(r)}catch(n){console.error(`[LadrillosJS] Failed to load external script: ${r.src}`,n)}}var Bt=new Map;async function io(e,t,r){for(const n of e)if(r&&t)try{let o=Bt.get(n.href);if(!o){const i=await fetch(n.href);if(!i.ok){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`);continue}o=await i.text(),Bt.set(n.href,o)}gr(t,o,n.href)}catch(o){console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`,o)}else{if(document.querySelector(`link[href="${n.href}"]`))continue;await new Promise(o=>{const i=document.createElement("link");i.rel=n.rel||"stylesheet",i.href=n.href,i.onload=()=>o(),i.onerror=()=>{console.error(`[LadrillosJS] Failed to load stylesheet: ${n.href}`),o()},document.head.appendChild(i)})}}function ao(e){const t=Dt.get(e);if(t){for(const r of t)URL.revokeObjectURL(r);Dt.delete(e)}}function lo(e){const t=[],r=/import\s+(?:(\{[^}]+\})|(\*\s+as\s+\w+)|(\w+)(?:\s*,\s*(\{[^}]+\}))?)?\s*(?:from\s+)?['"]([^'"]+)['"]/g;let n;for(;(n=r.exec(e))!==null;){const[o,i,s,a,f,l]=n,u={statement:o,specifier:l,imports:[],isDefault:!1,isNamespace:!1,isSideEffect:!1};if(i||s||a||(u.isSideEffect=!0),a&&(u.isDefault=!0,u.imports.push({imported:"default",local:a})),s){u.isNamespace=!0;const h=s.replace(/\*\s+as\s+/,"").trim();u.imports.push({imported:"*",local:h})}const m=i||f;if(m){const h=m.slice(1,-1).split(",").map(v=>v.trim()).filter(Boolean);for(const v of h){const d=v.match(/(\w+)\s+as\s+(\w+)/);u.imports.push(d?{imported:d[1],local:d[2]}:{imported:v,local:v})}}t.push(u)}return t}async function Wt(e){if(Ue.has(e))return Ue.get(e);const t=(async()=>{try{return await Pn(e)}catch(r){throw console.error(`[LadrillosJS] Failed to fetch module: ${e}`,r),r}})();return Ue.set(e,t),t}function Ht(e,t){return t&&Array.isArray(e)?K(e,t):e}function co(e){return e.replace(/import\s+(?:(?:\{[^}]+\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*\{[^}]+\})?\s+from\s+)?['"][^'"]+['"]\s*;?/g,"").trim()}function uo(e){return e.replace(/export\s*\{[^}]*\}\s*(?:from\s*['"][^'"]+['"])?\s*;?/g,"").replace(/export\s+\*(?:\s+as\s+\w+)?\s+from\s*['"][^'"]+['"]\s*;?/g,"").replace(/export\s+default\s+/g,"").replace(/export\s+(?=(?:const|let|var|function|class|async)\b)/g,"").trim()}function fo(e){const t=[],r=[],n=e.replace(/`[^`]*`/g,s=>" ".repeat(s.length)).replace(/"(?:[^"\\]|\\.)*"/g,s=>" ".repeat(s.length)).replace(/'(?:[^'\\]|\\.)*'/g,s=>" ".repeat(s.length)).replace(/\/\*[\s\S]*?\*\//g,s=>" ".repeat(s.length)).replace(/\/\/[^\n]*/g,s=>" ".repeat(s.length));let o=0,i=0;for(;i<n.length;){const s=n[i];if(s!=="{")if(s!=="}"){if(o===0){const a=n.slice(i).match(/^(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/);if(a){r.push(a[1]),i+=a[0].length;continue}const f=n.slice(i).match(/^(?:let|const|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/);if(f){t.push(f[1]),i+=f[0].length;continue}}i++}else o--,i++;else o++,i++}return{variables:t,functions:r}}async function po(e,t,r,n,o,i,s){if(e.type!=="module")throw new Error('executeModuleScriptWithReactivity only handles type="module" scripts');const a=e.content,f=e.resolvedImports?Object.fromEntries(Object.entries(e.resolvedImports).map(([c,g])=>[c,Ht(g,i)])):await(async function(c,g,y){const w=lo(c),x={};for(const L of w){if(L.isSideEffect){await Wt(ke(L.specifier)?new URL(L.specifier,g).href:L.specifier);continue}const $=ke(L.specifier)?new URL(L.specifier,g).href:L.specifier;try{const A=await Wt($);for(const S of L.imports){let C;C=S.imported==="*"?A:S.imported==="default"?A.default:A[S.imported],x[S.local]=Ht(C,y)}}catch{}}return x})(a,t,i);if(o){const c=new Set([...Ge,...Xe,"ladrillosjs","$host","$refs","event","state"]);for(const[g,y]of Object.entries(f))c.has(g)||g in o||(o[g]=y)}const l=uo(co(a)),{variables:u,functions:m}=fo(l),h=Pe(l,u),v=Object.keys(f),d=Object.values(f),p=`
    "use strict";
    return (async () => {
      ${h}
      ${m.length>0?`return { ${m.join(", ")} };`:"return {};"}
    })();
  `;try{const c=["console","alert","Math","JSON","Date","Array","Object","String","Number","Boolean","Promise","setTimeout","setInterval","clearTimeout","clearInterval"],g=c.map(k=>globalThis[k]),y=["$refs","__state__","$host"],w=[n||new Map,o||{},s],x=fn(t),L=[x.registerComponent,x.registerComponents,x.$use],$=ct(r||"anonymous"),A=[$.$emit,$.$listen],S={...globalThis.ladrillosjs||{},registerComponent:x.registerComponent,registerComponents:x.registerComponents},C={registerComponent:x.registerComponent,registerComponents:x.registerComponents,$use:x.$use,$emit:$.$emit,$listen:$.$listen,ladrillosjs:S},_=new Set(v),b=[...v],T=v.map((k,O)=>k in C?C[k]:d[O]),E=(k,O)=>{for(let M=0;M<k.length;M++){const I=k[M];_.has(I)||(_.add(I),b.push(I),T.push(O[M]))}};E(c,g),E(Ge,L),E(Xe,A),E(y,w),E(["ladrillosjs"],[S]);const N=await un(b,p,`module:${a}`)(...T);return{...o||{},...N||{}}}catch(c){throw console.error("[LadrillosJS] Failed to execute module script:",c),console.error("Original code:",l),console.error("Transformed code:",h),console.error("Imports:",f),c}}async function mo(e,t,r,n,o,i,s,a){const f={},l=e.filter(h=>h.type==="module"),u=t.filter(h=>h.type==="module"),m=t.filter(h=>h.type!=="module");for(const h of m)try{await tt(h,n,r)}catch(v){console.error("[LadrillosJS] External script failed:",h.src,v)}for(const h of u)try{const v=await tt(h,n,r);if(v&&typeof v=="object")for(const[d,p]of Object.entries(v))d!=="default"&&(f[d]=p,i&&(i[d]=p))}catch(v){console.error("[LadrillosJS] External module script failed:",h.src,v)}for(const h of l)try{const v=await po(h,r,n,o,i,s,a);Object.assign(f,v)}catch(v){console.error("[LadrillosJS] Module script failed:",v)}return f}function Zt(e){const t=e.trim(),r=(function(o){const i=(function(f){let l=0,u=0,m=0,h=!1,v=!1,d=!1,p=!1;for(let c=0;c<f.length;c++){const g=f[c];if(p)p=!1;else if(g!=="\\")if(v||d||g!=="'")if(h||d||g!=='"')if(h||v||g!=="`"){if(!(h||v||d)&&(g==="("?l++:g===")"?l=Math.max(0,l-1):g==="["?u++:g==="]"?u=Math.max(0,u-1):g==="{"?m++:g==="}"&&(m=Math.max(0,m-1)),g==="("&&l===0&&u===0&&m===0))return c}else d=!d;else v=!v;else h=!h;else p=!0}return-1})(o);if(i<0)return null;const s=(function(f,l){let u=0,m=!1,h=!1,v=!1,d=!1;for(let p=l;p<f.length;p++){const c=f[p];if(d)d=!1;else if(c!=="\\")if(h||v||c!=="'")if(m||v||c!=='"')if(m||h||c!=="`"){if(!(m||h||v)){if(c==="(")u++;else if(c===")"){if(u--,u===0)return p;if(u<0)return-1}}}else v=!v;else h=!h;else m=!m;else d=!0}return-1})(o,i);if(s<0||o.slice(s+1).trim().length!==0)return null;const a=Jt(o.slice(0,i).trim());return a?{calleePath:a,args:ho(o.slice(i+1,s))}:null})(t);if(r)return{raw:t,path:r.calleePath,isFunction:!0,isExpression:!0,functionArgs:r.args};const n=Jt(t);return n?{raw:t,path:n,isFunction:!1,isExpression:!1}:{raw:t,path:[],isExpression:!0}}function Jt(e){return/^[$A-Z_][0-9A-Z_$]*(?:\s*\.\s*[$A-Z_][0-9A-Z_$]*)*$/i.test(e)?e.split(".").map(t=>t.trim()).filter(t=>t.length>0):null}function ho(e){const t=[];let r="",n=0,o=0,i=0,s=!1,a=!1,f=!1,l=!1;for(let m=0;m<e.length;m++){const h=e[m];if(l)r+=h,l=!1;else if(h!=="\\")if(a||f||h!=="'")if(s||f||h!=='"')if(s||a||h!=="`"){if(!s&&!a&&!f&&(h==="("?n++:h===")"?n=Math.max(0,n-1):h==="["?o++:h==="]"?o=Math.max(0,o-1):h==="{"?i++:h==="}"&&(i=Math.max(0,i-1)),h===","&&n===0&&o===0&&i===0)){const v=r.trim();v.length>0&&t.push(v),r="";continue}r+=h}else f=!f,r+=h;else a=!a,r+=h;else s=!s,r+=h;else r+=h,l=!0}const u=r.trim();return u.length>0&&t.push(u),t}var qt=e=>{const t=document.createElement("template");return t.innerHTML=lr(kr(e)),vn(t.content),t};function Vt(e){const t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null);let n;for(;n=r.nextNode();){if(Gt(n)||Kt(n))continue;const i=n.textContent;if(!i)continue;const s=[...i.matchAll(Et.bindings)];if(s.length>0){const a=i,f=s.map(l=>Zt(l[1].trim()));t.push({node:n,bindings:f,original:a})}}const o=(function(i){const s=[],a=["$bind","$ref","$no:bind","condition","each","key","track-by"],f=Array.from(i.querySelectorAll("*"));for(const l of f)if(l.tagName!=="FOR"&&!Gt(l)&&!l.hasAttribute("$no:bind")&&!Kt(l))for(const u of Array.from(l.attributes)){if(a.includes(u.name))continue;const m=[...u.value.matchAll(Et.bindings)];if(m.length>0){const h=document.createTextNode(u.value),v=m.map(d=>Zt(d[1].trim()));s.push({node:h,bindings:v,original:u.value,isAttribute:!0,attributeName:u.name,element:l})}}return s})(e);return t.push(...o),t}function Gt(e){let t=e.parentElement;for(;t;){if(t.tagName==="FOR")return!0;t=t.parentElement}return!1}function Kt(e){let t=e.parentElement;for(;t;){if(t.hasAttribute&&t.hasAttribute("$no:bind"))return!0;t=t.parentElement}return!1}var re="FOR",jn="ELSE-IF",Dn="ELSE";function Le(e){const t=e.trim();return t.startsWith("{")&&t.endsWith("}")?t.slice(1,-1).trim():t}function go(e,t){const r=Array.from(e.querySelectorAll(`[${ft(fe)}]`));for(const n of r){const o=n.getAttribute(fe);o&&(t.refs.set(o,n),n.removeAttribute(fe))}}function yo(e,t){const r=Array.from(e.querySelectorAll("for"));for(const n of r){if(!e.contains(n))continue;const o=Fn(n,e);o&&t.loops.push(o)}}function Fn(e,t){const r=e.getAttribute("each")||e.getAttribute("of")||"";if(!r)return null;const n=(function(f){const l=f.match(ye.forAlias);if(!l)return null;let u,[,m,h]=l;m=m.trim(),h=h.trim();const v=h.match(/\s+track\s+by\s+(.+)$/i);v&&(u=v[1].trim(),h=h.slice(0,v.index).trim());const d=m.replace(ye.stripParens,"").trim(),p=d.match(ye.forIterator);let c,g,y;return p?(c=d.replace(ye.forIterator,"").trim(),g=p[1]?.trim(),y=p[2]?.trim()):c=d,{item:c,index:g||y,key:u,array:h}})(r);if(!n)return null;const o=e.getAttribute("key")||e.getAttribute("track-by")||n.key,i=(function(f){const l=[];for(const m of Array.from(f.childNodes))(m.nodeType!==Node.TEXT_NODE||m.textContent?.trim())&&l.push(m);if(l.length===0)return null;if(l.length===1&&l[0].nodeType===Node.ELEMENT_NODE&&l[0].tagName!==re)return l[0];const u=document.createElement("span");u.style.display="contents";for(const m of Array.from(f.childNodes))u.appendChild(m);return u})(e);if(!i)return null;const s=document.createComment(` <for> ${r} `),a=e.parentElement||t;return a.insertBefore(s,e),e.remove(),{template:i,expression:r,itemName:n.item,indexName:n.index,arrayName:n.array,keyAttribute:o,placeholder:s,renderedElements:[],originalParent:a,hasConditionals:i.querySelector("IF")!==null,hasNestedLoops:i.querySelector(re)!==null}}function je(e){let t=e.parentElement;for(;t;){if(t.tagName===re)return!0;t=t.parentElement}return!1}function vo(e,t){const r=Array.from(e.querySelectorAll("if"));for(const n of r){if(je(n))continue;const o=[],i=Le(n.getAttribute("condition")||""),s=document.createComment(` <if> ${i} `),a=n.parentElement||e,f=n.nextSibling;a.insertBefore(s,n),o.push(Be(n,i,"if",s,a,f));let l=n.nextElementSibling;for(;l;){const u=l.tagName;if(u!==jn){if(u===Dn){o.push(Be(l,"","else",s,a,l.nextSibling)),l.remove();break}break}{const m=Le(l.getAttribute("condition")||""),h=l.nextElementSibling;o.push(Be(l,m,"else-if",s,a,l.nextSibling)),l.remove(),l=h}}n.remove();for(const u of o)u.group=o;t.conditionals.push(o)}}function Be(e,t,r,n,o,i){return e.removeAttribute("condition"),e.style.display="contents",{element:e,condition:t,type:r,placeholder:n,group:[],originalParent:o,nextSibling:i}}function bo(e,t){const r=Array.from(e.querySelectorAll("show"));for(const n of r){if(!n.parentNode||je(n))continue;const o=Le(n.getAttribute("condition")||""),i=n;i.style.display="contents",t.showElements.push({element:i,expression:o,originalDisplay:"contents"}),n.removeAttribute("condition")}}function _o(e,t){const r=Array.from(e.querySelectorAll(`[${ft(ne)}]`));for(const n of r){const o=n.getAttribute(ne);if(!o||$o(n))continue;const i={element:n,path:o.split("."),raw:o,isContentEditable:n.hasAttribute("contenteditable")};t.twoWayBindings.push(i),n.removeAttribute(ne)}}function $o(e,t){return je(e)}function zn(e,t,r,n){(globalThis.__P__??=[]).push({arr:e.arrayName,scope:n?Object.keys(n):null,scopeNames:e.scopeNames,nested:e.hasNestedLoops});const o=r(e.arrayName,n?{...t,...n}:t);if(!o||(i=o)==null||!Array.isArray(i)&&typeof i[Symbol.iterator]!="function"&&typeof i!="object"){for(const _ of e.renderedElements)_.remove();return e.renderedElements=[],void(e.previousItems=[])}var i;const s=Array.from(o),a=e.previousItems||[],f=e.renderedElements;e.keyGetter||(e.keyGetter=(function(_,b){if(!_)return(E,N)=>N;const T=_.startsWith(b+".")?_.slice(b.length+1).split("."):_.split(".");return E=>{let N=E;for(const k of T){if(N==null)return;N=N[k]}return N}})(e.keyAttribute,e.itemName));const l=(function(_){const b=_.__scriptContent;return{..._,__reactiveState__:_,__scriptContent__:b||"",__componentUrl__:_.__componentUrl||""}})(t);n&&Object.assign(l,n),l[e.itemName]=null,e.indexName&&(l[e.indexName]=0);const u=typeof r.forContext=="function"?r.forContext(l,e.indexName?[e.itemName,e.indexName]:[e.itemName]):_=>r(_,l),m=(_,b)=>{l[e.itemName]=_,e.indexName&&(l[e.indexName]=b),u.refresh?.()},h=e.indexName?[e.itemName,e.indexName]:[e.itemName],v=e.scopeNames?.length?[...e.scopeNames,...h]:h;let d=null;const p=()=>d??=Vn(t,v),c=(function(_){const b=_.match(/^\s*([A-Za-z_$][\w$]*)/);return b?b[1]:null})(e.arrayName),g=c!==null&&Object.prototype.hasOwnProperty.call(t,c)?c:n?.[we]??c,y=(_,b,T)=>{const E=_[Yt];if(!E)return;const N=((k,O)=>{const M=n?{...n}:{};return M[e.itemName]=k,e.indexName&&(M[e.indexName]=O),g&&(M[we]=g),M})(b,T);for(const k of E)zn(k,t,r,N)},w=(_,b,T)=>{const E=_[Te];E&&(E[e.itemName]=b,e.indexName&&(E[e.indexName]=T))},x=(function(_){let b=tn.get(_);return b===void 0&&(b=(function(T){if(T.hasConditionals||T.template.querySelector(re)!==null)return null;const E=[],N=[],k=[],O=[],M=[],I=z=>{if(z.nodeType===Node.ELEMENT_NODE){const U=z.attributes;for(let j=0;j<U.length;j++){const R=U[j];if($e.has(R.name))O.push({path:M.slice(),attrName:R.name,eventName:R.name.slice(2),code:Re(R.value),directive:null});else if(Ne(R.name)){const P=dt(R.name);P&&O.push({path:M.slice(),attrName:R.name,eventName:P.eventName,code:Re(R.value),directive:P,options:pt(P.eventModifiers)})}else R.name==="$bind"?k.push({path:M.slice(),expr:R.value}):R.value.includes("{")&&N.push({path:M.slice(),name:R.name,parsed:se(R.value)})}}else if(z.nodeType===Node.TEXT_NODE){const U=z.textContent;U&&U.includes("{")&&E.push({path:M.slice(),parsed:se(U)})}const Z=z.childNodes;for(let U=0;U<Z.length;U++)M.push(U),I(Z[U]),M.pop()};return I(T.template),{texts:E,attrs:N,binds:k,handlers:O,delegated:null,delegatedEvents:[]}})(_),tn.set(_,b)),b})(e),L=(_,b)=>{const T=e.template.cloneNode(!0);m(_,b);const E=Object.create(p().proto);return n&&Object.assign(E,n),E[e.itemName]=_,e.indexName&&(E[e.indexName]=b),g&&(E[we]=g),T[Te]=E,e.hasNestedLoops&&(T[Yt]=(function(N,k){const O=[];for(const M of Array.from(N.querySelectorAll(re))){if(!M.parentNode||wo(M,N))continue;const I=Fn(M,N);I&&(I.scopeNames=k,O.push(I))}return O})(T,v)),x?((function(N,k,O,M,I,B){const W=O.invoke!==void 0&&O.sig!==void 0,H=j=>{let R=N;for(let P=0;P<j.length;P++)R=R.childNodes[j[P]];return R},z=new Array(k.texts.length);for(let j=0;j<k.texts.length;j++){const{path:R,parsed:P}=k.texts[j],D=H(R);D.__originalTemplate=D.textContent;const{statics:F,exprs:J}=P,G=W?oe(P,O):null;let X=F[0];for(let q=0;q<J.length;q++){const V=G!==null?G[q]:null,me=V!==null?O.invoke(V,J[q]):O(J[q]);X+=String(me??"")+F[q+1]}D.textContent=X,z[j]={node:D,parsed:P}}const Z=new Array(k.attrs.length);for(let j=0;j<k.attrs.length;j++){const{path:R,name:P,parsed:D}=k.attrs[j],F=H(R).getAttributeNode(P);F.__originalTemplate=F.value;const{statics:J,exprs:G}=D,X=W?oe(D,O):null;let q=J[0];for(let V=0;V<G.length;V++){const me=X!==null?X[V]:null,he=me!==null?O.invoke(me,G[V]):O(G[V]);q+=(he!==null&&typeof he=="object"?JSON.stringify(he):String(he??""))+J[V+1]}F.value=q,Z[j]={attr:F,parsed:D}}const U=[];if(k.binds.length>0){const j=I();for(const R of k.binds){const P=H(R.path);P.removeAttribute(ne);const D=Kn(P,R.expr,M,j,O);D&&U.push(D)}}if(k.handlers.length>0||k.delegated!==null){const j=I();for(const R of k.handlers){const P=H(R.path);P.removeAttribute(R.attrName);const D=gt(R.code,M,j);D&&(R.directive?P.addEventListener(R.eventName,Ie(D,R.directive),R.options):P.addEventListener(R.eventName,D))}if(k.delegated!==null){N[Wn]=B;for(const R of k.delegated){const P=H(R.path);for(const D of R.entries)P.removeAttribute(D.attrName);P[Bn]=R.stamp}(function(R,P,D){let F=en.get(R);F||(F={container:R.placeholder.parentNode??R.originalParent,setup:P,events:new Set},en.set(R,F)),F.setup=P;for(const J of D)if(!F.events.has(J)){F.events.add(J);const G=F;F.container.addEventListener(J,X=>Eo(X,R,G))}})(B,j,k.delegatedEvents)}}N[de]={texts:z,attrs:Z,conds:[],binds:U}})(T,x,u,E,p,e),y(T,_,b),T):(e.hasConditionals&&Jn(T,l,r,u),qn(T,l,r,u,E,p),y(T,_,b),T)},$=new Array(s.length),A=new Array(s.length);if(s.length===a.length&&f.length===s.length){let _=!0;for(let b=0;b<s.length;b++)if(s[b]!==a[b]){_=!1;break}if(_){for(let b=0;b<s.length;b++)m(s[b],b),w(f[b],s[b],b),We(f[b],l,r,u,p),y(f[b],s[b],b);return void(e.previousItems=s)}}if(e.keyAttribute){const _=new Map,b=new Map;for(let E=0;E<a.length;E++){const N=e.keyGetter(a[E],E);b.set(N,E),f[E]&&_.set(N,f[E])}const T=new Set;for(let E=0;E<s.length;E++)T.add(e.keyGetter(s[E],E));for(const[E,N]of _)T.has(E)||(N.remove(),_.delete(E));for(let E=0;E<s.length;E++){const N=s[E],k=e.keyGetter(N,E),O=_.get(k);O?(m(N,E),w(O,N,E),We(O,l,r,u,p),y(O,N,E),$[E]=O,A[E]=b.get(k)??-1):($[E]=L(N,E),A[E]=-1)}}else{const _=Math.min(a.length,s.length);for(let b=0;b<s.length;b++)b<_?(m(s[b],b),w(f[b],s[b],b),We(f[b],l,r,u,p),y(f[b],s[b],b),$[b]=f[b],A[b]=b):($[b]=L(s[b],b),A[b]=-1);for(let b=_;b<f.length;b++)f[b]?.remove()}const S=(function(_){const b=_.length,T=new Set;if(b===0)return T;let E=-1,N=!0;for(let I=0;I<b;I++){const B=_[I];if(!(B<0)){if(B<=E){N=!1;break}E=B}}if(N){for(let I=0;I<b;I++)_[I]>=0&&T.add(I);return T}const k=[],O=new Array(b).fill(-1);for(let I=0;I<b;I++){const B=_[I];if(B<0)continue;let W=0,H=k.length;for(;W<H;){const z=W+H>>1;_[k[z]]<B?W=z+1:H=z}W>0&&(O[I]=k[W-1]),k[W]=I}let M=k.length>0?k[k.length-1]:-1;for(;M!==-1;)T.add(M),M=O[M];return T})(A),C=e.placeholder.parentNode;if(C){let _=e.placeholder;for(let b=0;b<$.length;b++){const T=$[b];S.has(b)||_.nextSibling!==T&&C.insertBefore(T,_.nextSibling),_=T}}e.renderedElements=$,e.previousItems=[...s]}var Xt=new Map;function oe(e,t){if(e.fnsSig!==t.sig){const r=new Array(e.exprs.length);for(let n=0;n<e.exprs.length;n++)r[n]=t.compile(e.exprs[n]);e.fns=r,e.fnsSig=t.sig}return e.fns}function se(e){let t=Xt.get(e);if(t)return t;const r=[],n=[],o=/\{([^}]+)\}/g;let i,s=0;for(;i=o.exec(e);)r.push(e.slice(s,i.index)),n.push(i[1].trim()),s=i.index+i[0].length;return r.push(e.slice(s)),t={statics:r,exprs:n},Xt.set(e,t),t}var de="__ladrillosBindingCache",Te="__ladrillosLoopCtx",Un="__ladrillosLoopBind",we="__ladrillosLoopRoot",Yt="__ladrillosLoopNested";function wo(e,t){let r=e.parentElement;for(;r&&r!==t;){if(r.tagName===re)return!0;r=r.parentElement}return!1}function Qt(e){const t=[],r=[],n=[],o=[],i=f=>{const l=f[Un];l&&n.push(l);const u=f.attributes;for(let m=0;m<u.length;m++){const h=u[m].__originalTemplate;h&&r.push({attr:u[m],parsed:se(h)})}};i(e);const s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let a;for(;a=s.nextNode();)if(a.nodeType===Node.TEXT_NODE){const f=a.__originalTemplate;f&&t.push({node:a,parsed:se(f)})}else a.nodeType===Node.ELEMENT_NODE?i(a):a[De]&&o.push(a);return{texts:t,attrs:r,conds:o,binds:n}}var Bn="__ladrillosDelegated",Wn="__ladrillosLoopOwner",en=new WeakMap;function Eo(e,t,r){const n=r.container,o=[];let i=null,s=e.target;for(;s&&s!==n;){const a=s[Bn];if(a&&a.owner===t&&o.push(a.entries),s[Wn]===t){i=s[Te]??null;break}s=s.parentNode}if(i!==null&&o.length!==0){for(const a of o)for(const f of a)if(f.eventName===e.type&&(xo(f,e,i,r.setup),e.cancelBubble))return}}function xo(e,t,r,n){const o=Gn(e.code,n);if(!o)return;const i=s=>{try{ut(s),o(s,r,n.reactiveState,n.emit,n.listen)}catch(a){Me(`Error in loop event handler: ${e.code}`,null,a)}};e.directive?Ie(i,e.directive)(t):i(t)}var tn=new WeakMap;function We(e,t,r,n=i=>r(i,t),o){let i=e[de];i||(i=Qt(e),e[de]=i),i.conds.length>0&&(function(u,m,h,v,d,p){let c=!1;for(const g of u){const y=g[De],w=Hn(y.branches,v);if(w!==y.currentIndex&&(c=!0,y.currentEl&&y.currentEl.parentNode&&y.currentEl.remove(),y.currentEl=null,y.currentIndex=-1,w>=0)){const x=Zn(y.branches[w]);g.parentNode.insertBefore(x,g.nextSibling),y.currentIndex=w,y.currentEl=x,Jn(x,m,h,v),qn(x,m,h,v,d,p)}}return c})(i.conds,t,r,n,e[Te]??t,o)&&(i=Qt(e),e[de]=i);const s=n.invoke!==void 0&&n.sig!==void 0,a=i.texts;for(let u=0;u<a.length;u++){const{node:m,parsed:h}=a[u],{statics:v,exprs:d}=h,p=s?oe(h,n):null;let c=v[0];for(let g=0;g<d.length;g++){const y=p!==null?p[g]:null,w=y!==null?n.invoke(y,d[g]):n(d[g]);c+=String(w??"")+v[g+1]}m.textContent!==c&&(m.textContent=c)}const f=i.attrs;for(let u=0;u<f.length;u++){const{attr:m,parsed:h}=f[u],{statics:v,exprs:d}=h,p=s?oe(h,n):null;let c=v[0];for(let g=0;g<d.length;g++){const y=p!==null?p[g]:null,w=y!==null?n.invoke(y,d[g]):n(d[g]);c+=(w!==null&&typeof w=="object"?JSON.stringify(w):String(w??""))+v[g+1]}m.value!==c&&(m.value=c)}const l=i.binds;for(let u=0;u<l.length;u++){const{element:m,expr:h,isContentEditable:v}=l[u];Fe(m,n(h),v)}}var De="__ladrillosLoopCond";function Hn(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(n.type==="else")return r;try{if(t(n.condition))return r}catch{}}return-1}function Zn(e){const t=document.createElement("span");return t.style.display="contents",t.appendChild(e.template.content.cloneNode(!0)),t}function He(e,t){const r=document.createElement("template");for(const n of Array.from(e.childNodes))r.content.appendChild(n.cloneNode(!0));return{type:t,condition:t==="else"?"":Le(e.getAttribute("condition")||""),template:r}}function Jn(e,t,r,n){const o=n??(s=>r(s,t));let i=1e4;for(;i-- >0;){let s=null;const a=e.querySelectorAll("IF");for(let d=0;d<a.length;d++){const p=a[d];if(p.parentNode&&!je(p)){s=p;break}}if(!s)return;const f=[];f.push(He(s,"if"));const l=[];let u=s.nextElementSibling;for(;u;){if(u.tagName!==jn){if(u.tagName===Dn){f.push(He(u,"else")),l.push(u);break}break}f.push(He(u,"else-if")),l.push(u),u=u.nextElementSibling}const m=document.createComment(" <if> (loop) "),h={branches:f,currentIndex:-1,currentEl:null};m[De]=h,s.parentNode.insertBefore(m,s),s.remove();for(const d of l)d.remove();const v=Hn(f,o);if(v>=0){const d=Zn(f[v]);m.parentNode.insertBefore(d,m.nextSibling),h.currentIndex=v,h.currentEl=d}}}function qn(e,t,r,n,o,i){const s=[],a=[],f=[],l=[],u=n??(typeof r.forContext=="function"?r.forContext(t):w=>r(w,t)),m=o??t;let h=null;const v=i??(()=>h??=(function(w){const x=w.__reactiveState__??w;return Vn(x,Object.keys(w).filter(L=>!L.startsWith("__")&&typeof w[L]!="function"&&!Object.prototype.hasOwnProperty.call(x,L)))})(t)),d=u.invoke!==void 0&&u.sig!==void 0,p=(w,x,L)=>{const $=w!==null?w[L]:null;return $!==null?u.invoke($,x[L]):u(x[L])},c=w=>{for(const L of Array.from(w.attributes))if(!$e.has(L.name)&&!Ne(L.name)&&L.value.includes("{")){const $=se(L.value);L.__originalTemplate=L.value;const A=d?oe($,u):null;let S=$.statics[0];for(let C=0;C<$.exprs.length;C++){const _=p(A,$.exprs,C);S+=(_!==null&&typeof _=="object"?JSON.stringify(_):String(_??""))+$.statics[C+1]}L.value=S,a.push({attr:L,parsed:$})}const x=w.getAttribute(ne);if(x!==null){w.removeAttribute(ne);const L=Kn(w,x,m,v(),u);L&&f.push(L)}(function(L,$,A){const S=L.attributes;let C=null;for(let b=0;b<S.length;b++){const T=S[b].name;($e.has(T)||Ne(T))&&(C??=[]).push({name:T,value:S[b].value})}if(!C)return;const _=A();for(const{name:b,value:T}of C)if($e.has(b)){L.removeAttribute(b);const E=b.slice(2),N=gt(Re(T),$,_);N&&L.addEventListener(E,N)}else So(L,b,T,$,_)})(w,m,v)};c(e);const g=document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT);let y;for(;y=g.nextNode();)if(y.nodeType===Node.TEXT_NODE){const w=y.textContent;if(w&&w.includes("{")){const x=se(w);y.__originalTemplate=w;const L=d?oe(x,u):null;let $=x.statics[0];for(let A=0;A<x.exprs.length;A++)$+=String(p(L,x.exprs,A)??"")+x.statics[A+1];y.textContent=$,s.push({node:y,parsed:x})}}else y.nodeType===Node.ELEMENT_NODE?c(y):y[De]&&l.push(y);e[de]={texts:s,attrs:a,conds:l,binds:f}}function Re(e){return e.replace(/\{([^}]+)\}/g,(t,r)=>`(${r.trim()})`)}function So(e,t,r,n,o){const i=dt(t);if(!i)return;const s=Re(r);e.removeAttribute(t);const a=gt(s,n,o);if(!a)return;const f=Ie(a,i),l=pt(i.eventModifiers);e.addEventListener(i.eventName,f,l)}var nn=new Map,ce=new Map,Ao=1e3;function Vn(e,t){const r=e.__scriptContent||"",n=r.trim().length>0,o=e.__hasModuleScripts===!0,i=[],s=[];for(const c of Object.keys(e))c.startsWith("__")||(typeof e[c]=="function"?s.push(c):i.push(c));const a=t.filter(c=>!i.includes(c)),f=s.filter(c=>!t.includes(c));let l="",u="";if(o||!n)u=f.length>0?`const { ${f.join(", ")} } = context;`:"";else{const c=nn.get(r);c!==void 0?l=c:(l=Nn(r,[]),nn.set(r,l))}const m=a.length>0?`const { ${a.join(", ")} } = context;`:"",h=i.length>0?`let { ${i.join(", ")} } = reactiveState;`:"",v=!o&&i.length>0?i.map(c=>`reactiveState.${c} = ${c};`).join(" "):"",d=ct(e.__componentId||"anonymous"),p={__reactiveState__:e,__scriptContent__:r,__componentUrl__:e.__componentUrl||""};for(const c of s)p[c]=e[c];return{reactiveState:e,proto:p,bodyPrefix:`"use strict";
      ${m}
      ${h}
      ${u}
      ${l}
      `,bodySuffix:`;
      ${v}`,emit:d.$emit,listen:d.$listen,fnCache:new Map}}function Gn(e,t){let r=t.fnCache.get(e);if(r!==void 0)return r;const n=t.bodyPrefix+e+t.bodySuffix;if(r=ce.get(n)??null,r===null)try{if(ce.size>=Ao){const o=ce.keys().next().value;o!==void 0&&ce.delete(o)}r=cn(["event","context","reactiveState","$emit","$listen"],n,!1,`handler:${e}`),ce.set(n,r)}catch{r=null}return t.fnCache.set(e,r),r}function gt(e,t,r){const n=Gn(e,r);if(!n)return null;const{reactiveState:o,emit:i,listen:s}=r;return a=>{try{ut(a),n(a,t,o,i,s)}catch(f){Me(`Error in loop event handler: ${e}`,null,f)}}}function No(e,t,r){for(const n of e)n.element.parentNode&&n.element.remove();for(const n of e){let o=!1;if(n.type==="else"?o=!0:o=!!r(n.condition,t),o){n.placeholder.parentNode?.insertBefore(n.element,n.placeholder.nextSibling);break}}}function Co(e,t,r,n){const o=e.element,{raw:i,path:s,isContentEditable:a}=e;Fe(o,r(i,t),a);const f=s[0];n.has(f)||n.set(f,[]),n.get(f).push({element:o,path:s,isContentEditable:a}),i===f||n.has(i)||n.set(i,[]),i!==f&&n.get(i).push({element:o,path:s,isContentEditable:a});const l=Xn(o);let u=!1;o.__isUpdatingFromState=()=>u,o.__setUpdatingFromState=h=>{u=h};const m=()=>{if(u)return;const h=Yn(o,a);nt(t,s,h)};o.__ladrillosBindSync={eventType:l,sync:m},o.addEventListener(l,m)}function Kn(e,t,r,n,o){const i=t.trim();if(!i)return null;const s=i.split(".").map(g=>g.trim()),a=s[0],f=n.reactiveState,l=Object.prototype.hasOwnProperty,u=!l.call(f,a)&&l.call(r,a);if(u&&s.length===1)return Me(`$bind="${i}" targets the <for> row variable itself, which has nowhere to write back to. Bind one of its properties instead, e.g. $bind="${a}.value".`),null;const m=e,h=m.hasAttribute("contenteditable"),v=r[we],d=Xn(m);Fe(m,o(i),h);const p=()=>{const g=Yn(m,h);if(!u)return void nt(f,s,g);const y=r[a];if(y===null||typeof y!="object")return;nt(y,s.slice(1),g);const w=f.__notifyKeyChanged;v&&typeof w=="function"&&w(v)};m.__ladrillosBindSync={eventType:d,sync:p},m.addEventListener(d,p);const c={element:m,expr:i,isContentEditable:h};return m[Un]=c,c}function Xn(e){if(e instanceof HTMLSelectElement)return"change";if(e instanceof HTMLInputElement){const t=e.type.toLowerCase();if(t==="checkbox"||t==="radio")return"change"}return"input"}function Yn(e,t){if(t)return e.textContent||"";if(e instanceof HTMLInputElement){const r=e.type.toLowerCase();return r==="checkbox"?e.checked:r==="number"||r==="range"?e.valueAsNumber:e.value}return e instanceof HTMLSelectElement?e.multiple?Array.from(e.selectedOptions).map(r=>r.value):e.value:e instanceof HTMLTextAreaElement?e.value:e.value??""}function Fe(e,t,r){if(r){const n=String(t??"");return void(e.textContent!==n&&(e.textContent=n))}if(e instanceof HTMLInputElement){const n=e.type.toLowerCase();if(n==="checkbox"){const o=!!t;e.checked!==o&&(e.checked=o)}else if(n==="radio"){const o=e.value===String(t??"");e.checked!==o&&(e.checked=o)}else{const o=String(t??"");e.value!==o&&(e.value=o)}return}if(e instanceof HTMLSelectElement){const n=String(t??"");return void(e.value!==n&&(e.value=n))}e.value=e instanceof HTMLTextAreaElement?String(t??""):t}function nt(e,t,r){let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];i in n&&typeof n[i]=="object"||(n[i]={}),n=n[i]}n[t[t.length-1]]=r}var Ee=[],rt=new Set,ot=!1,st=!1,rn=0,ko=Promise.resolve();function Lo(){st=!1,ot=!0,Ee.sort((e,t)=>(e.id??0)-(t.id??0));try{for(const e of Ee)if(e.active!==!1)try{e()}catch(t){Me("Error in scheduled update",null,t)}}finally{Ee.length=0,rt.clear(),ot=!1}}var ve=new Map,on=new Set(["state","_root","_initialized","_componentId","_directives","_evaluator","_updateBoundInputs","_pendingProps","_propsReady"]);function To(e,t){const{tagName:r,template:n,scripts:o,externalScripts:i,externalStyles:s,styles:a,sourcePath:f,templateBindings:l=[]}=e,u=Cn(o.map(d=>d.content).join(`
`)),m=[...new Set([...u,...l])];let h;class v extends HTMLElement{static get observedAttributes(){return m}state={};_root=null;_initialized=!1;_componentId=`${r}-${Math.random().toString(36).slice(2)}`;_directives=null;_evaluator=null;_updateBoundInputs=null;_pendingProps=new Map;_propsReady=!1;constructor(){super()}async connectedCallback(){if(this._initialized)return;this._initialized=!0,ir({tagName:r,sourcePath:f,instanceId:this._componentId});const p=this.innerHTML,c=document.createDocumentFragment();if(t)for(const $ of Array.from(this.childNodes))c.appendChild($.cloneNode(!0));else for(;this.firstChild;)c.appendChild(this.firstChild);this.__originalHTML=p,this.__originalChildren=c,this._root=t?this.shadowRoot??this.attachShadow({mode:"open"}):this,h??=qt(n);const{bindings:g}=(($,A)=>{const S=typeof A=="string"?qt(A).content:A.content.cloneNode(!0);Nt(S),$.replaceChildren(),$.appendChild(S);const C=Vt($);for(const _ of Ye($))C.push(...Vt(_));return{bindings:C}})(this._root,h);hr(this._root,a,t);const y=this._getAttributeOverrides();for(const $ of m){if(on.has($))continue;Object.prototype.hasOwnProperty.call(this,$)&&(this._pendingProps.set($,this[$]),delete this[$]);const A=$.toLowerCase();A!==$&&Object.prototype.hasOwnProperty.call(this,A)&&(this._pendingProps.set($,this[A]),delete this[A])}for(const[$,A]of this._pendingProps)y[$]=A;const w=o.filter($=>$.type!=="module"),x=o.some($=>$.type==="module"),L=dr(new Map);if((function($,A){const S=Array.from($.querySelectorAll(`[${ft(fe)}]`));for(const C of S){const _=C.getAttribute(fe);_&&A.set(_,C)}})(this._root,L),s&&s.length>0&&await io(s,this._root,t),i.length>0&&await so(i),this.state=await zr(this._root,w,g,y,()=>this._updateDirectives(),x,f,this._componentId,L,l),this._propsReady=!0,this._pendingProps.size>0){for(const[$,A]of this._pendingProps)this.state[$]=A;this._pendingProps.clear()}if(be().stateCallbacks.set(this._componentId,$=>{const A=this.state?.__notifyKeyChanged;$&&typeof A=="function"?A($):this._updateDirectives()}),f){this.state.__suspendReactivity=!0;try{const $=await mo(o,i,f,this._componentId,L,this.state,()=>this._updateDirectives(),this);(x||i.length>0)&&(this.state.__hasModuleScripts=!0);for(const[A,S]of Object.entries($))typeof S=="function"&&(this.state[A]=S)}finally{this.state.__suspendReactivity=!1}}x&&Ur(this._root,g,this.state),this._evaluator=Qr(),this._directives=(function($,A){const S={loops:[],conditionals:[],twoWayBindings:[],refs:A,showElements:[]},C=[$,...Ye($)];for(const _ of C)go(_,S),yo(_,S),bo(_,S),_o(_,S),vo(_,S);return Nt($),S})(this._root,L);{const $=be().refs;let A=$.get(this._componentId);A||(A=new Map,$.set(this._componentId,A));for(const[S,C]of this._directives.refs)A.set(S,C)}this.refs=this._directives.refs,this.__refs=this._directives.refs,this._updateDirectives(),this._directives.twoWayBindings.length>0&&(this._updateBoundInputs=(function($,A,S){const C=new Map;for(const _ of $)Co(_,A,S,C);return _=>{(function(b,T,E,N){const k=N?[N]:Array.from(b.keys());for(const O of k){const M=b.get(O);if(M)for(const I of M){const{element:B,path:W,isContentEditable:H}=I,z=E(W.join("."),T),Z=B.__setUpdatingFromState;Z&&Z(!0),Fe(B,z,H),Z&&queueMicrotask(()=>Z(!1))}}})(C,A,S,_)}})(this._directives.twoWayBindings,this.state,this._evaluator)),this.dispatchEvent(new CustomEvent("ladrillos:ready",{bubbles:!0,composed:!0,detail:{state:this.state,refs:this._directives.refs}}))}disconnectedCallback(){ao(this._componentId),mr(this._componentId),(function(p){const c=ve.get(p);c&&(c.active=!1,ve.delete(p))})(this._componentId),be().stateCallbacks.delete(this._componentId),this._initialized=!1,this._propsReady=!1}attributeChangedCallback(p,c,g){if(c===g||!this._initialized)return;const y=this._parseAttributeValue(g);this._propsReady?this.state[p]=y:this._pendingProps.set(p,y)}adoptedCallback(){}_updateDirectives(){this._directives&&this._evaluator&&(function(p,c){let g=ve.get(p);g||(g=(function(){const y=()=>{c()};return y.id=++rn,y.active=!0,y})(),ve.set(p,g)),(function(y){y.id===void 0&&(y.id=++rn),rt.has(y.id)||(rt.add(y.id),Ee.push(y),ot||st||(st=!0,ko.then(Lo)))})(g)})(this._componentId,()=>{this._performDirectiveUpdates()})}_performDirectiveUpdates(){this._directives&&this._evaluator&&(this._directives.loops.length>0&&(function(p,c,g){for(const y of p)zn(y,c,g)})(this._directives.loops,this.state,this._evaluator),this._directives.conditionals.length>0&&(function(p,c,g){for(const y of p)No(y,c,g)})(this._directives.conditionals,this.state,this._evaluator),this._directives.showElements.length>0&&(function(p,c,g){for(const y of p){const w=g(y.expression,c);y.element.style.display=w?y.originalDisplay:"none"}})(this._directives.showElements,this.state,this._evaluator),this._updateBoundInputs&&this._updateBoundInputs())}_getAttributeOverrides(){const p={},c=[];for(const y of Array.from(this.attributes))if(this._isReservedAttribute(y.name))y.value&&y.value.trim()!==""&&c.push(y.name);else if(p[y.name]=this._parseAttributeValue(y.value),y.name.includes("-")){const w=y.name.replace(/-([a-z0-9])/g,(x,L)=>L.toUpperCase());w===y.name||w in p||(p[w]=p[y.name])}const g=c.filter(y=>!l.includes(y));return g.length>0&&g.map(y=>`"${y}" → try "${{title:"heading",class:"className",style:"customStyle",id:"componentId",hidden:"isHidden"}[y]||`my${y.charAt(0).toUpperCase()}${y.slice(1)}`}"`),p}_isReservedAttribute(p){return!l.includes(p)&&(["id","class","style","slot","part","is","tabindex","title","lang","dir","hidden","draggable","contenteditable"].includes(p.toLowerCase())||p.startsWith("data-"))}_parseAttributeValue(p){if(p===null)return null;if(p===""||p==="true")return!0;if(p==="false")return!1;const c=Number(p);if(!isNaN(c)&&p.trim()!=="")return c;try{const g=p.trim();if(g.startsWith("[")||g.startsWith("{"))return JSON.parse(g)}catch{}return p}get root(){return this._root}}for(const d of m){if(on.has(d)||d in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(v.prototype,d))continue;Object.defineProperty(v.prototype,d,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[d]:this._pendingProps.get(d)},set(c){this._propsReady?this.state[d]=c:this._pendingProps.set(d,c)}});const p=d.toLowerCase();p===d||p in HTMLElement.prototype||Object.prototype.hasOwnProperty.call(v.prototype,p)||Object.defineProperty(v.prototype,p,{configurable:!0,enumerable:!1,get(){return this._propsReady?this.state[d]:this._pendingProps.get(d)},set(c){this._propsReady?this.state[d]=c:this._pendingProps.set(d,c)}})}return v}function Ro(e,t){const{tagName:r}=e;if(!customElements.get(r)){const n=To(e,t);customElements.define(r,n)}}var Qn=new Map,er=new Map,tr=new Map;function yt(e){if(e.evaluators)for(const[t,r]of Object.entries(e.evaluators))Qn.set(t,r);if(e.handlers)for(const[t,r]of Object.entries(e.handlers))er.set(t,r);if(e.setups)for(const[t,r]of Object.entries(e.setups))tr.set(t,r)}var Ze=class extends Error{constructor(e,t){super(`[LadrillosJS] No precompiled ${e} for ${JSON.stringify(t)}. This build cannot compile at runtime. Either the component was not processed by @ladrillosjs/compiler, or it is loaded from a path the compiler could not resolve statically.`),this.name="MissingArtifactError"}};function Je(e,t){const{deps:r,fn:n}=e,o=[];for(let s=0;s<r.length;s++)o.push(t.indexOf(r[s]));const i=(s,a)=>a<0?void 0:s[a];switch(o.length){case 0:return function(){return n()};case 1:{const[s]=o;return function(){return n(i(arguments,s))}}case 2:{const[s,a]=o;return function(){return n(i(arguments,s),i(arguments,a))}}case 3:{const[s,a,f]=o;return function(){return n(i(arguments,s),i(arguments,a),i(arguments,f))}}default:return function(){const s=new Array(o.length);for(let a=0;a<o.length;a++)s[a]=i(arguments,o[a]);return n.apply(null,s)}}}function vt(e,t={}){const{tagName:r}=e;r?.trim()&&r.includes("-")&&Ro(e,t.useShadowDOM??!0)}ur({name:"precompiled",compileEvaluator(e,t){const r=Qn.get(t);if(!r)throw new Ze("evaluator",t);return Je(r,e)},compileHandler(e,t,r,n){const o=er.get(n);if(!o)throw new Ze("handler",n);return Je(o,e)},compileSetup(e,t,r){const n=tr.get(r);if(!n)throw new Ze("setup",r);return Je(n,e)}});const Oo={tagName:"site-header",template:`<header>
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
  }`,sourcePath:"components/site-header.html",templateBindings:["version"]};yt({evaluators:{version:{deps:["version"],fn:e=>e}},handlers:{"handler:toggleMobileMenu()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{t.navLinks.classList.toggle("active")}}},setups:{'state:const toggleMobileMenu = () => {\n    $refs.navLinks.classList.toggle("active");\n  };\n\n  // Close menu when a link inside it is tapped\n  $refs.navLinks.addEventListener("click", (e) => {\n    if (e.target.closest("a")) {\n      $refs.navLinks.classList.remove("active");\n    }\n  });\n\n  // Close menu when clicking outside (composedPath pierces shadow DOM)\n  document.addEventListener("click", (e) => {\n    if (!$refs.navLinks.classList.contains("active")) return;\n    const path = e.composedPath();\n    if (path.includes($refs.navLinks)) return;\n    if (path.some((el) => el.classList && el.classList.contains("mobile-toggle"))) return;\n    $refs.navLinks.classList.remove("active");\n  });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{const f=()=>{r.navLinks.classList.toggle("active")};r.navLinks.addEventListener("click",l=>{l.target.closest("a")&&r.navLinks.classList.remove("active")}),document.addEventListener("click",l=>{if(!r.navLinks.classList.contains("active"))return;const u=l.composedPath();u.includes(r.navLinks)||u.some(m=>m.classList&&m.classList.contains("mobile-toggle"))||r.navLinks.classList.remove("active")}),e.toggleMobileMenu??=f}}}});function Bo(e){vt(Oo,e)}const Mo={tagName:"footer-section",template:`<footer class="footer">\r
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
  }`,type:null}],externalScripts:[],externalStyles:[],styles:`/* ============================================\r
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
  .privacy-disclosure {\r
    max-width: 72ch;\r
    margin: 0 auto 2rem;\r
    color: var(--text-secondary);\r
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
  }`,sourcePath:"components/footer-section.html",templateBindings:["year"]};yt({evaluators:{year:{deps:["year"],fn:e=>e}},handlers:{"handler:openCookieSettings()":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function l(){a("open-consent-preferences")}l()}}},setups:{'state:const year = new Date().getFullYear();\r\n\r\n  function openCookieSettings() {\r\n    $emit("open-consent-preferences");\r\n  }':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.year??=new Date().getFullYear();function f(){s("open-consent-preferences")}e.openCookieSettings??=f}}}});function Wo(e){vt(Mo,e)}const Io={tagName:"cookie-consent",template:`<show condition="visible">
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
    });`,type:null}],externalScripts:[],externalStyles:[],styles:`.consent-shell {
        position: fixed;
        right: 1.25rem;
        bottom: 1.25rem;
        left: 1.25rem;
        z-index: 1200;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }

    .consent-panel {
        width: min(100%, 720px);
        padding: 1.25rem;
        background: #ffffff;
        border: 1px solid #d1d5db;
        border-top: 4px solid var(--primary);
        border-radius: 8px;
        box-shadow: 0 18px 50px rgba(35, 35, 35, 0.2);
        pointer-events: auto;
    }

    .consent-content {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 1.25rem;
        align-items: center;
    }

    .consent-copy h2 {
        margin: 0 0 0.35rem;
        font-size: 1.05rem;
        line-height: 1.3;
    }

    .consent-copy p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.875rem;
        line-height: 1.55;
    }

    .consent-copy a {
        font-weight: 600;
    }

    .consent-actions {
        display: flex;
        gap: 0.625rem;
    }

    .consent-button {
        min-height: 42px;
        padding: 0.65rem 1rem;
        border: 1px solid var(--text-primary);
        border-radius: 6px;
        font: inherit;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
    }

    .consent-button-secondary {
        background: #ffffff;
        color: var(--text-primary);
    }

    .consent-button-primary {
        background: var(--text-primary);
        color: #ffffff;
    }

    .consent-button:hover {
        border-color: var(--primary);
    }

    .consent-button:focus-visible {
        outline: 3px solid rgba(255, 107, 53, 0.35);
        outline-offset: 2px;
    }

    @media (max-width: 640px) {
        .consent-shell {
            right: 0.75rem;
            bottom: 0.75rem;
            left: 0.75rem;
        }

        .consent-content {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .consent-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }`,sourcePath:"components/cookie-consent.html",templateBindings:[]};yt({evaluators:{visible:{deps:["visible"],fn:e=>e}},handlers:{"handler:setConsent('denied')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function l(u){a("clarity-consent-change",u),e.visible=!1}l("denied")}},"handler:setConsent('granted')":{deps:["__state__","$refs","$host","event","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a,f)=>{function l(u){a("clarity-consent-change",u),e.visible=!1}l("granted")}}},setups:{'state:const consentKey = "ladrillosjs-clarity-consent";\n    let visible = true;\n\n    try {\n        visible = localStorage.getItem(consentKey) === null;\n    } catch {\n        visible = true;\n    }\n\n    function setConsent(value) {\n        $emit("clarity-consent-change", value);\n        visible = false;\n    }\n\n    $listen("open-consent-preferences", () => {\n        visible = true;\n    });':{deps:["__state__","$host","$refs","registerComponent","registerComponents","$use","$emit","$listen"],fn:(e,t,r,n,o,i,s,a)=>{e.consentKey??="ladrillosjs-clarity-consent",e.visible??=!0;try{e.visible=localStorage.getItem(e.consentKey)===null}catch{e.visible=!0}function f(l){s("clarity-consent-change",l),e.visible=!1}a("open-consent-preferences",()=>{e.visible=!0}),e.setConsent??=f}}}});function Ho(e){vt(Io,e)}function Po(e){try{(function(t,r,n,o,i,s,a){r.getElementById("clarity-script")||(t[n]=t[n]||function(){(t[n].q=t[n].q||[]).push(arguments)},s=r.createElement(o),s.async=1,s.src="https://www.clarity.ms/tag/"+i+"?ref=npm",s.id="clarity-script",a=r.getElementsByTagName(o)[0],a.parentNode.insertBefore(s,a))})(window,document,"clarity","script",e);return}catch{return}}const it={init(e){Po(e)},setTag(e,t){window.clarity("set",e,t)},identify(e,t,r,n){window.clarity("identify",e,t,r,n)},consent(e=!0){window.clarity("consent",e)},consentV2(e={ad_Storage:"granted",analytics_Storage:"granted"}){window.clarity("consentv2",e)},upgrade(e){window.clarity("upgrade",e)},event(e){window.clarity("event",e)}},nr="ladrillosjs-clarity-consent",jo="yjzx6xv98k";let at=!1;function Do(){try{return localStorage.getItem(nr)}catch{return null}}function Fo(e){try{localStorage.setItem(nr,e)}catch{}}function rr(){at||(it.init(jo),it.consentV2({ad_Storage:"denied",analytics_Storage:"granted"}),at=!0)}Do()==="granted"&&rr();pn("clarity-consent-change",e=>{e!=="granted"&&e!=="denied"||(Fo(e),e==="granted"?rr():at&&(it.consentV2({ad_Storage:"denied",analytics_Storage:"denied"}),window.location.reload()))});export{Et as A,vn as B,kr as D,To as K,$r as L,zo as O,Ro as Q,sn as _,Wo as a,Ho as b,Me as c,Bo as d,Oe as e,lr as f,ro as g,pr as n,yt as p,Uo as q,_t as s,vt as w};
