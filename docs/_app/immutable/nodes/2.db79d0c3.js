import{s as $,c as E,u as S,g as j,d as q,e as A,f as p}from"../chunks/scheduler.8b5db029.js";import{S as C,i as D,g as y,s as F,h as k,j as b,f as c,c as I,a as m,d as L,t as P,y as R,m as V,n as w,k as u,x as z}from"../chunks/index.7e1b9695.js";import{e as d}from"../chunks/each.e59479a4.js";import{p as B}from"../chunks/stores.075dd2f0.js";function g(a,l,i){const n=a.slice();return n[5]=l[i],n}function v(a){let l,i=a[5].name+"",n,o;return{c(){l=y("a"),n=V(i),this.h()},l(t){l=k(t,"A",{class:!0,href:!0});var f=b(l);n=w(f,i),f.forEach(c),this.h()},h(){u(l,"class",o=p(a[0]===a[5].href?"selected":"norm")+" svelte-4yelv9"),u(l,"href",a[5].href)},m(t,f){m(t,l,f),z(l,n)},p(t,f){f&1&&o!==(o=p(t[0]===t[5].href?"selected":"norm")+" svelte-4yelv9")&&u(l,"class",o)},d(t){t&&c(l)}}}function G(a){let l,i,n,o=d(a[1]),t=[];for(let e=0;e<o.length;e+=1)t[e]=v(g(a,o,e));const f=a[4].default,r=E(f,a,a[3],null);return{c(){l=y("div");for(let e=0;e<t.length;e+=1)t[e].c();i=F(),r&&r.c()},l(e){l=k(e,"DIV",{});var _=b(l);for(let s=0;s<t.length;s+=1)t[s].l(_);_.forEach(c),i=I(e),r&&r.l(e)},m(e,_){m(e,l,_);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,null);m(e,i,_),r&&r.m(e,_),n=!0},p(e,[_]){if(_&3){o=d(e[1]);let s;for(s=0;s<o.length;s+=1){const h=g(e,o,s);t[s]?t[s].p(h,_):(t[s]=v(h),t[s].c(),t[s].m(l,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=o.length}r&&r.p&&(!n||_&8)&&S(r,f,e,e[3],n?q(f,e[3],_,null):j(e[3]),null)},i(e){n||(L(r,e),n=!0)},o(e){P(r,e),n=!1},d(e){e&&(c(l),c(i)),R(t,e),r&&r.d(e)}}}function H(a,l,i){let n,o;A(a,B,e=>i(2,o=e));let{$$slots:t={},$$scope:f}=l;const r=[{name:"Órai munka és tananyagok",href:"/sob"},{name:"Portfólió követelmények",href:"/sob/portfolio"},{name:"Frontend tematika",href:"/sob/frontend"}];return a.$$set=e=>{"$$scope"in e&&i(3,f=e.$$scope)},a.$$.update=()=>{a.$$.dirty&4&&i(0,n=o.url.pathname)},[n,r,o,f,t]}class O extends C{constructor(l){super(),D(this,l,H,G,$,{})}}export{O as component};
