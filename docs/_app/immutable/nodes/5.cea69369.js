import{s as K,n as D}from"../chunks/scheduler.8b5db029.js";import{S as L,i as Z,g as b,s as E,h as g,z as j,c as T,j as q,f as n,k as m,a as p,y as $,m as A,H as B,n as C,A as I,x as f}from"../chunks/index.7e1b9695.js";import{e as G}from"../chunks/each.e59479a4.js";function V(h,t,s){const a=h.slice();return a[1]=t[s],a}function M(h){let t,s=h[1].sz[0]+"",a,i;return{c(){t=b("td"),a=A(s),i=A("."),this.h()},l(o){t=g(o,"TD",{class:!0});var r=q(t);a=C(r,s),i=C(r,"."),r.forEach(n),this.h()},h(){m(t,"class","id svelte-1vlryoq")},m(o,r){p(o,t,r),f(t,a),f(t,i)},p:D,d(o){o&&n(t)}}}function P(h){let t,s=h[1].sz[0]+"",a,i,o=h[1].sz[1]+"",r,k;return{c(){t=b("td"),a=A(s),i=A("-"),r=A(o),k=A("."),this.h()},l(d){t=g(d,"TD",{class:!0});var v=q(t);a=C(v,s),i=C(v,"-"),r=C(v,o),k=C(v,"."),v.forEach(n),this.h()},h(){m(t,"class","id svelte-1vlryoq")},m(d,v){p(d,t,v),f(t,a),f(t,i),f(t,r),f(t,k)},p:D,d(d){d&&n(t)}}}function F(h){let t,s,a;return{c(){t=b("td"),s=b("a"),a=A("👓"),this.h()},l(i){t=g(i,"TD",{class:!0});var o=q(t);s=g(o,"A",{target:!0,href:!0});var r=q(s);a=C(r,"👓"),r.forEach(n),o.forEach(n),this.h()},h(){m(s,"target","_blank"),m(s,"href",h[1].source),m(t,"class","i1 svelte-1vlryoq")},m(i,o){p(i,t,o),f(t,s),f(s,a)},p:D,d(i){i&&n(t)}}}function N(h){let t,s,a;return{c(){t=b("td"),s=b("a"),a=A("💻"),this.h()},l(i){t=g(i,"TD",{class:!0});var o=q(t);s=g(o,"A",{target:!0,href:!0});var r=q(s);a=C(r,"💻"),r.forEach(n),o.forEach(n),this.h()},h(){m(s,"target","_blank"),m(s,"href",h[1].online),m(t,"class","i2 svelte-1vlryoq")},m(i,o){p(i,t,o),f(t,s),f(s,a)},p:D,d(i){i&&n(t)}}}function J(h){let t,s,a,i=h[1].date+"",o,r,k,d,v=h[1].theme+"",x,z,S;function c(w,_){return w[1].sz[1]?P:M}let u=c(h)(h),l=h[1].source&&F(h),y=h[1].online&&N(h);return{c(){t=b("tr"),u.c(),s=E(),a=b("td"),o=A(i),r=E(),k=b("td"),d=new B(!1),x=E(),l&&l.c(),z=E(),y&&y.c(),S=E(),this.h()},l(w){t=g(w,"TR",{});var _=q(t);u.l(_),s=T(_),a=g(_,"TD",{class:!0});var H=q(a);o=C(H,i),H.forEach(n),r=T(_),k=g(_,"TD",{class:!0});var R=q(k);d=I(R,!1),R.forEach(n),x=T(_),l&&l.l(_),z=T(_),y&&y.l(_),S=T(_),_.forEach(n),this.h()},h(){m(a,"class","t svelte-1vlryoq"),d.a=null,m(k,"class","t svelte-1vlryoq")},m(w,_){p(w,t,_),u.m(t,null),f(t,s),f(t,a),f(a,o),f(t,r),f(t,k),d.m(v,k),f(t,x),l&&l.m(t,null),f(t,z),y&&y.m(t,null),f(t,S)},p(w,_){u.p(w,_),w[1].source&&l.p(w,_),w[1].online&&y.p(w,_)},d(w){w&&n(t),u.d(),l&&l.d(),y&&y.d()}}}function O(h){let t,s="Szakképzési oldal 2024/25",a,i,o,r,k="Discord Server Invite: q4G2k479Zw",d,v,x,z,S=G(h[0]),c=[];for(let e=0;e<S.length;e+=1)c[e]=J(V(h,S,e));return{c(){t=b("h1"),t.textContent=s,a=E(),i=b("hr"),o=E(),r=b("a"),r.textContent=k,d=E(),v=b("hr"),x=E(),z=b("table");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=g(e,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-14bgvcc"&&(t.textContent=s),a=T(e),i=g(e,"HR",{}),o=T(e),r=g(e,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),j(r)!=="svelte-3yl921"&&(r.textContent=k),d=T(e),v=g(e,"HR",{}),x=T(e),z=g(e,"TABLE",{id:!0,class:!0});var u=q(z);for(let l=0;l<c.length;l+=1)c[l].l(u);u.forEach(n),this.h()},h(){m(t,"class","svelte-1vlryoq"),m(r,"class","x svelte-1vlryoq"),m(r,"href","https://discord.gg/q4G2k479Zw"),m(r,"target","_blank"),m(z,"id","t1"),m(z,"class","svelte-1vlryoq")},m(e,u){p(e,t,u),p(e,a,u),p(e,i,u),p(e,o,u),p(e,r,u),p(e,d,u),p(e,v,u),p(e,x,u),p(e,z,u);for(let l=0;l<c.length;l+=1)c[l]&&c[l].m(z,null)},p(e,[u]){if(u&1){S=G(e[0]);let l;for(l=0;l<S.length;l+=1){const y=V(e,S,l);c[l]?c[l].p(y,u):(c[l]=J(y),c[l].c(),c[l].m(z,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=S.length}},i:D,o:D,d(e){e&&(n(t),n(a),n(i),n(o),n(r),n(d),n(v),n(x),n(z)),$(c,e)}}}function Q(h){return[[{id:1,sz:[1,2],date:"2024.09.05.",theme:"HTML+CSS alap",source:"https://github.com/tomuwhu/2024szft_example01",online:"https://tomuwhu.github.io/2024szft_example01/"},{id:2,sz:[3],date:"2024.09.05.",theme:"JavaScript",source:"https://github.com/tomuwhu/2024szft_example01/blob/main/p2/engine.js",online:"https://tomuwhu.github.io/2024szft_example01/p2"},{id:3,sz:[4,7],date:"2024.09.11.",theme:"JavaScript",source:"https://github.com/tomuwhu/2024szft_example01/blob/main/p3/egy.js",online:"https://tomuwhu.github.io/2024szft_example01/p3"},{id:4,sz:[8,10],date:"2024.09.12.",theme:"SvelteKit Static Site Generator"},{id:5,sz:[11,14],date:"2024.09.18.",theme:'<a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a> Számológép',source:"https://github.com/tomuwhu/sov02_sveltekit",online:"https://tomuwhu.github.io/sov02_sveltekit/"},{id:5,sz:[15,17],date:"2024.09.19.",theme:'<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Reversi',source:"https://github.com/tomuwhu/reversi/blob/master/src/App.svelte",online:"https://tomuwhu.github.io/reversi/"},{id:6,sz:["-"],date:"-",theme:'<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Órarend generator',source:"https://github.com/tomuwhu/orarend_generator_svelte/blob/master/src/App.svelte",online:"https://tomuwhu.github.io/orarend_generator_svelte/"},{id:7,sz:[18,21],date:"2024.09.25.",theme:'<a href="https://vite.new/svelte" target="_blank">Vite-Svelte</a> Routing',source:"https://github.com/tomuwhu/App-routing/tree/master/src",online:"https://tomuwhu.github.io/App-routing"}]]}class Y extends L{constructor(t){super(),Z(this,t,Q,O,K,{})}}export{Y as component};
