import{s as g,n as u,o as y}from"../chunks/scheduler.8b5db029.js";import{S as k,i as E,g as i,H as x,h as c,j as d,A as $,f as r,k as m,a as b,x as v}from"../chunks/index.7e1b9695.js";import{M as w}from"../chunks/index.47e3efb7.js";function D(f){let t,n,s,e,l;return{c(){t=i("table"),n=i("td"),s=i("div"),e=i("div"),l=new x(!1),this.h()},l(a){t=c(a,"TABLE",{class:!0});var o=d(t);n=c(o,"TD",{});var h=d(n);s=c(h,"DIV",{class:!0});var _=d(s);e=c(_,"DIV",{class:!0});var p=d(e);l=$(p,!1),p.forEach(r),_.forEach(r),h.forEach(r),o.forEach(r),this.h()},h(){l.a=null,m(e,"class","svelte-165kfv2"),m(s,"class","cont svelte-165kfv2"),m(t,"class","svelte-165kfv2")},m(a,o){b(a,t,o),v(t,n),v(n,s),v(s,e),l.m(f[0],e)},p(a,[o]){o&1&&l.p(a[0])},i:u,o:u,d(a){a&&r(t)}}}function H(f,t,n){const s=w();var e;return y(async()=>{let l=await fetch("../../portfolio.md").then(a=>a.text());n(0,e=s.render(l))}),[e]}class A extends k{constructor(t){super(),E(this,t,H,D,g,{})}}export{A as component};