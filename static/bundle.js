!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}let h;function $(t){h=t}function x(t){(function(){if(!h)throw new Error("Function called outside component initialization");return h})().$$.on_mount.push(t)}const v=[],b=[];let w=[];const y=[],M=Promise.resolve();let k=!1;function _(t){w.push(t)}const C=new Set;let E=0;function T(){if(0!==E)return;const t=h;do{try{for(;E<v.length;){const t=v[E];E++,$(t),S(t.$$)}}catch(t){throw v.length=0,E=0,t}for($(null),v.length=0,E=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];C.has(n)||(C.add(n),n())}w.length=0}while(v.length);for(;y.length;)y.pop()();k=!1,C.clear(),$(t)}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const j=new Set;let L;function O(){L={r:0,c:[],p:L}}function P(){L.r||r(L.c),L=L.p}function H(t,n){t&&t.i&&(j.delete(t),t.i(n))}function A(t,n,e,r){if(t&&t.o){if(j.has(t))return;j.add(t),L.c.push((()=>{j.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}else r&&r()}function N(t,n){t.d(1),n.delete(t.key)}function R(t,n,e,o,s,c,i,l,u,a,f,d){let m=t.length,p=c.length,g=m;const h={};for(;g--;)h[t[g].key]=g;const $=[],x=new Map,v=new Map,b=[];for(g=p;g--;){const t=d(s,c,g),r=e(t);let l=i.get(r);l?o&&b.push((()=>l.p(t,n))):(l=a(r,t),l.c()),x.set(r,$[g]=l),r in h&&v.set(r,Math.abs(g-h[r]))}const w=new Set,y=new Set;function M(t){H(t,1),t.m(l,f),i.set(t.key,t),f=t.first,p--}for(;m&&p;){const n=$[p-1],e=t[m-1],r=n.key,o=e.key;n===e?(f=n.first,m--,p--):x.has(o)?!i.has(r)||w.has(r)?M(n):y.has(o)?m--:v.get(r)>v.get(o)?(y.add(r),M(n)):(w.add(o),m--):(u(e,i),m--)}for(;m--;){const n=t[m];x.has(n.key)||u(n,i)}for(;p;)M($[p-1]);return r(b),$}function U(t){t&&t.c()}function B(t,e,s,c){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,s),c||_((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(_)}function I(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];w.forEach((r=>-1===t.indexOf(r)?n.push(r):e.push(r))),e.forEach((t=>t())),w=n}(e.after_update),r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(v.push(t),k||(k=!0,M.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,o,s,c,i,u,a,f=[-1]){const d=h;$(n);const m=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};a&&a(m.root);let p=!1;if(m.ctx=s?s(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&q(n,t)),e})):[],m.update(),p=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();o.intro&&H(n.$$.fragment),B(n,o.target,o.anchor,o.customElement),T()}$(d)}class D{$destroy(){I(this,1),this.$destroy=t}$on(n,e){if(!o(e))return t;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t,n,e){const r=t.slice();return r[7]=n[e],r}function V(t,n){let e,r,o,s,d,g,h,$,x,v,b,w,y=n[7].text+"",M=n[7].timestamp+"";return{key:t,first:null,c(){e=u("div"),r=u("div"),o=u("div"),s=u("div"),d=u("p"),g=a(y),h=f(),$=u("small"),x=a(M),v=f(),b=u("div"),b.innerHTML='<img src="/static/images/comments.png" class="img-fluid rounded" alt="..." style="max-width: 30px; max-height: 30px;"/>',w=f(),m(d,"class","mb-0"),m(s,"class","col-10"),m(b,"class","position-absolute top-0 end-0 m-1"),m(o,"class","card-body"),m(r,"class","row g-0"),m(e,"class","card m-1"),this.first=e},m(t,n){i(t,e,n),c(e,r),c(r,o),c(o,s),c(s,d),c(d,g),c(s,h),c(s,$),c($,x),c(o,v),c(o,b),c(e,w)},p(t,e){n=t,4&e&&y!==(y=n[7].text+"")&&p(g,y),4&e&&M!==(M=n[7].timestamp+"")&&p(x,M)},d(t){t&&l(e)}}}function G(n){let e,o,s,a,p,h,$,x,v,b,w,y,M=[],k=new Map,_=n[2];const C=t=>t[7].timestamp;for(let t=0;t<_.length;t+=1){let e=F(n,_,t),r=C(e);k.set(r,M[t]=V(r,e))}return{c(){e=u("button"),e.textContent="Chat",o=f(),s=u("div"),a=u("div");for(let t=0;t<M.length;t+=1)M[t].c();p=f(),h=u("div"),$=u("textarea"),x=f(),v=u("button"),v.textContent="Submit",m(e,"class","floating-button btn btn-primary svelte-77flj1"),m(a,"class","chat-messages svelte-77flj1"),m($,"type","text"),m(v,"class","btn btn-primary"),m(h,"class","chat-input svelte-77flj1"),m(s,"class",b="chat-window "+(n[0]?"":"hidden")+" svelte-77flj1")},m(t,r){i(t,e,r),i(t,o,r),i(t,s,r),c(s,a);for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(a,null);c(s,p),c(s,h),c(h,$),g($,n[1]),c(h,x),c(h,v),w||(y=[d(e,"click",n[3]),d($,"input",n[5]),d($,"keyup",n[6]),d(v,"click",n[4])],w=!0)},p(t,[n]){4&n&&(_=t[2],M=R(M,n,C,1,t,_,k,a,N,V,null,F)),2&n&&g($,t[1]),1&n&&b!==(b="chat-window "+(t[0]?"":"hidden")+" svelte-77flj1")&&m(s,"class",b)},i:t,o:t,d(t){t&&l(e),t&&l(o),t&&l(s);for(let t=0;t<M.length;t+=1)M[t].d();w=!1,r(y)}}}function J(t,n,e){let r=!1,o="",s=[];const c=()=>{if(o){const t=new Date;e(2,s=[{text:o,timestamp:t.toISOString()},...s]),e(1,o="")}};return[r,o,s,()=>e(0,r=!r),c,function(){o=this.value,e(1,o)},t=>"Enter"===t.key&&c()]}function K(t,n,e){const r=t.slice();return r[2]=n[e],r}function Q(t,n){let e,r,o,s,p,g,h,$,x,v,b,w=n[2].name+"",y=n[2].price+"";function M(){return n[1](n[2])}return{key:t,first:null,c(){e=u("div"),r=u("p"),o=a(w),s=f(),p=u("p"),g=a(y),h=f(),$=u("button"),$.textContent="Update",x=f(),m(e,"class","product"),this.first=e},m(t,n){i(t,e,n),c(e,r),c(r,o),c(e,s),c(e,p),c(p,g),c(e,h),c(e,$),c(e,x),v||(b=d($,"click",M),v=!0)},p(t,e){n=t},d(t){t&&l(e),v=!1,b()}}}function W(n){let e,r,o,s,a,d=[],m=new Map,p=n[0];const g=t=>t[2].id;for(let t=0;t<p.length;t+=1){let e=K(n,p,t),r=g(e);m.set(r,d[t]=Q(r,e))}return{c(){e=u("div"),r=u("h2"),r.textContent="Manage Products",o=f(),s=u("p"),s.textContent="This is the Product Manager page",a=f();for(let t=0;t<d.length;t+=1)d[t].c()},m(t,n){i(t,e,n),c(e,r),c(e,o),c(e,s),c(e,a);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(e,null)},p(t,[n]){1&n&&(p=t[0],d=R(d,n,g,1,t,p,m,e,N,Q,null,K))},i:t,o:t,d(t){t&&l(e);for(let t=0;t<d.length;t+=1)d[t].d()}}}function X(t){return[[],t=>{}]}class Y extends D{constructor(t){super(),z(this,t,X,W,s,{})}}function Z(n){let e;return{c(){e=u("div"),e.innerHTML="<h2>Order Manager</h2> \n\n    <p>This is the Order Manager page</p>"},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class tt extends D{constructor(t){super(),z(this,t,null,Z,s,{})}}function nt(n){let e;return{c(){e=u("div"),e.innerHTML="<h2>User Manager</h2> \n    <p>This is the User Manager page</p>"},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class et extends D{constructor(t){super(),z(this,t,null,nt,s,{})}}function rt(n){let e;return{c(){e=u("div"),e.innerHTML="<h2>Sales Manager</h2> \n    <p>This is the Sales Manager page</p>"},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class ot extends D{constructor(t){super(),z(this,t,null,rt,s,{})}}function st(n){let e;return{c(){e=u("div"),e.innerHTML="<h2>Promotion Manager</h2> \n    <p>This is the Promotion Manager page</p>"},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class ct extends D{constructor(t){super(),z(this,t,null,st,s,{})}}function it(n){let e;return{c(){e=u("div"),e.innerHTML="<h2>Review Manager</h2> \n    <p>This is the Review Manager page</p>"},m(t,n){i(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class lt extends D{constructor(t){super(),z(this,t,null,it,s,{})}}function ut(t){let n,e;return n=new Y({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function at(t){let n,e;return n=new tt({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function ft(t){let n,e;return n=new et({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function dt(t){let n,e;return n=new ot({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function mt(t){let n,e;return n=new ct({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function pt(t){let n,e;return n=new lt({}),{c(){U(n.$$.fragment)},m(t,r){B(n,t,r),e=!0},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function gt(t){let n,e,o,s,a,p,g,h,$,x,v,b,w,y,M,k,_,C,E,T,S,j,L,N,R,U="products"===t[0]&&ut(),B="orders"===t[0]&&at(),I="users"===t[0]&&ft(),q="sales"===t[0]&&dt(),z="promotions"===t[0]&&mt(),D="reviews"===t[0]&&pt();return{c(){n=u("div"),e=u("div"),o=u("div"),s=u("div"),a=u("button"),a.textContent="Manage Products",p=f(),g=u("button"),g.textContent="Manage Orders",h=f(),$=u("button"),$.textContent="Manage Users",x=f(),v=u("button"),v.textContent="View Sales Reports",b=f(),w=u("button"),w.textContent="Manage Promotions",y=f(),M=u("button"),M.textContent="Manage Reviews",k=f(),_=u("div"),U&&U.c(),C=f(),B&&B.c(),E=f(),I&&I.c(),T=f(),q&&q.c(),S=f(),z&&z.c(),j=f(),D&&D.c(),m(a,"class","list-group-item list-group-item-action"),m(g,"class","list-group-item list-group-item-action"),m($,"class","list-group-item list-group-item-action"),m(v,"class","list-group-item list-group-item-action"),m(w,"class","list-group-item list-group-item-action"),m(M,"class","list-group-item list-group-item-action"),m(s,"class","list-group"),m(o,"class","col-3"),m(_,"class","col-9"),m(e,"class","row"),m(n,"class","container")},m(r,l){i(r,n,l),c(n,e),c(e,o),c(o,s),c(s,a),c(s,p),c(s,g),c(s,h),c(s,$),c(s,x),c(s,v),c(s,b),c(s,w),c(s,y),c(s,M),c(e,k),c(e,_),U&&U.m(_,null),c(_,C),B&&B.m(_,null),c(_,E),I&&I.m(_,null),c(_,T),q&&q.m(_,null),c(_,S),z&&z.m(_,null),c(_,j),D&&D.m(_,null),L=!0,N||(R=[d(a,"click",t[1]),d(g,"click",t[2]),d($,"click",t[3]),d(v,"click",t[4]),d(w,"click",t[5]),d(M,"click",t[6])],N=!0)},p(t,[n]){"products"===t[0]?U?1&n&&H(U,1):(U=ut(),U.c(),H(U,1),U.m(_,C)):U&&(O(),A(U,1,1,(()=>{U=null})),P()),"orders"===t[0]?B?1&n&&H(B,1):(B=at(),B.c(),H(B,1),B.m(_,E)):B&&(O(),A(B,1,1,(()=>{B=null})),P()),"users"===t[0]?I?1&n&&H(I,1):(I=ft(),I.c(),H(I,1),I.m(_,T)):I&&(O(),A(I,1,1,(()=>{I=null})),P()),"sales"===t[0]?q?1&n&&H(q,1):(q=dt(),q.c(),H(q,1),q.m(_,S)):q&&(O(),A(q,1,1,(()=>{q=null})),P()),"promotions"===t[0]?z?1&n&&H(z,1):(z=mt(),z.c(),H(z,1),z.m(_,j)):z&&(O(),A(z,1,1,(()=>{z=null})),P()),"reviews"===t[0]?D?1&n&&H(D,1):(D=pt(),D.c(),H(D,1),D.m(_,null)):D&&(O(),A(D,1,1,(()=>{D=null})),P())},i(t){L||(H(U),H(B),H(I),H(q),H(z),H(D),L=!0)},o(t){A(U),A(B),A(I),A(q),A(z),A(D),L=!1},d(t){t&&l(n),U&&U.d(),B&&B.d(),I&&I.d(),q&&q.d(),z&&z.d(),D&&D.d(),N=!1,r(R)}}}function ht(t,n,e){let r="products";return[r,()=>e(0,r="products"),()=>e(0,r="orders"),()=>e(0,r="users"),()=>e(0,r="sales"),()=>e(0,r="promotions"),()=>e(0,r="reviews")]}class $t extends D{constructor(t){super(),z(this,t,ht,gt,s,{})}}function xt(n){let e,r;return e=new $t({}),{c(){U(e.$$.fragment)},m(t,n){B(e,t,n),r=!0},p:t,i(t){r||(H(e.$$.fragment,t),r=!0)},o(t){A(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function vt(t){return x((()=>{})),[]}new class extends D{constructor(t){super(),z(this,t,J,G,s,{})}}({target:document.body,props:{name:"world"}}),new class extends D{constructor(t){super(),z(this,t,vt,xt,s,{})}}({target:document.getElementById("admin-menu")})}();
//# sourceMappingURL=bundle.js.map
