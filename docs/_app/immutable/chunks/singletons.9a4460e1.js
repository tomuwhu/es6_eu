import{n as d,s as m}from"./scheduler.e108d1fd.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(m(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){a(s(e))}function r(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=t(a,i)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}var g;const y=((g=globalThis.__sveltekit_1evay)==null?void 0:g.base)??"";var k;const E=((k=globalThis.__sveltekit_1evay)==null?void 0:k.assets)??y,w="1726922762799",T="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||R(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function P(e){let t=null,n=null,o=null,a=null,i=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(r)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function i(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:i}}function A(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==w;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function R(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:A()};export{x as I,_ as P,I as S,T as a,N as b,P as c,Y as d,y as e,L as f,O as g,V as h,R as i,U as s};
