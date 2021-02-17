var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function g(t){$=t}function p(t){(function(){if(!$)throw new Error("Function called outside component initialization");return $})().$$.on_mount.push(t)}const h=[],y=[],b=[],v=[],k=Promise.resolve();let w=!1;function x(t){b.push(t)}let _=!1;const M=new Set;function j(){if(!_){_=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];g(e),q(e.$$)}for(g(null),h.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];M.has(e)||(M.add(e),e())}b.length=0}while(h.length);for(;v.length;)v.pop()();w=!1,_=!1,M.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const S=new Set;function D(t,e){t&&t.i&&(S.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),undefined.c.push((()=>{S.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function A(t){t&&t.c()}function E(t,n,s){const{fragment:o,on_mount:l,on_destroy:a,after_update:c}=t.$$;o&&o.m(n,s),x((()=>{const n=l.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),c.forEach(x)}function N(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(h.push(t),w||(w=!0,k.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,i,s,o,l,c,u=[-1]){const f=$;g(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(d.ctx=s?s(e,i.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&H(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();i.intro&&D(e.$$.fragment),E(e,i.target,i.anchor),j()}g(f)}class W{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t){let e;function n(t,e){return t[3]>12?G:T}let r=n(t),i=r(t);return{c(){i.c(),e=u("")},m(t,n){i.m(t,n),l(t,e,n)},p(t,s){r!==(r=n(t))&&(i.d(1),i=r(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&a(e)}}}function T(t){let e;return{c(){e=u("AM")},m(t,n){l(t,e,n)},d(t){t&&a(e)}}}function G(t){let e;return{c(){e=u("PM")},m(t,n){l(t,e,n)},d(t){t&&a(e)}}}function P(e){let n,r,i,s,$,g,p,h,y,b,v,k,w,x,_,M,j,q,S=e[1]?":"+e[6]:"",D=e[2]?e[9]+",":"",O=!e[0]&&F(e);return{c(){n=c("div"),r=c("article"),i=c("section"),s=c("h1"),$=u(e[4]),g=u(":"),p=u(e[5]),h=u(S),y=f(),O&&O.c(),b=f(),v=c("section"),k=u(D),w=f(),x=u(e[8]),_=f(),M=u(e[10]),j=u(", "),q=u(e[7]),d(s,"class","svelte-1kmrdcl"),d(i,"id","time"),d(i,"class","svelte-1kmrdcl"),d(v,"id","date"),d(v,"class","svelte-1kmrdcl"),d(n,"id","datetime"),d(n,"class","svelte-1kmrdcl")},m(t,e){l(t,n,e),o(n,r),o(r,i),o(i,s),o(s,$),o(s,g),o(s,p),o(s,h),o(s,y),O&&O.m(s,null),o(r,b),o(r,v),o(v,k),o(v,w),o(v,x),o(v,_),o(v,M),o(v,j),o(v,q)},p(t,[e]){16&e&&m($,t[4]),32&e&&m(p,t[5]),66&e&&S!==(S=t[1]?":"+t[6]:"")&&m(h,S),t[0]?O&&(O.d(1),O=null):O?O.p(t,e):(O=F(t),O.c(),O.m(s,null)),516&e&&D!==(D=t[2]?t[9]+",":"")&&m(k,D),256&e&&m(x,t[8]),1024&e&&m(M,t[10]),128&e&&m(q,t[7])},i:t,o:t,d(t){t&&a(n),O&&O.d()}}}function C(t,e,n){let r,i,s,o,l,a,c,u,{displayMilitary:f=!1}=e,{displaySeconds:d=!1}=e,{displayDayOfWeek:m=!1}=e;const $=t=>t>9?""+t:"0"+t,g=["January","February","March","April","May","June","July","August","September","October","November","December"],h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let y=new Date;return p((()=>{const t=setInterval((()=>n(11,y=new Date)),1e3);return()=>clearInterval(t)})),t.$$set=t=>{"displayMilitary"in t&&n(0,f=t.displayMilitary),"displaySeconds"in t&&n(1,d=t.displaySeconds),"displayDayOfWeek"in t&&n(2,m=t.displayDayOfWeek)},t.$$.update=()=>{2048&t.$$.dirty&&n(3,r=y.getHours()),2049&t.$$.dirty&&n(4,i=f?$(y.getHours()):y.getHours()>12?y.getHours()-12:y.getHours()),2048&t.$$.dirty&&n(5,s=$(y.getMinutes())),2048&t.$$.dirty&&n(6,o=$(y.getSeconds())),2048&t.$$.dirty&&n(7,l=y.getFullYear()),2048&t.$$.dirty&&n(8,a=g[y.getMonth()]),2048&t.$$.dirty&&n(9,c=h[y.getDay()]),2048&t.$$.dirty&&n(10,u=y.getDate())},[f,d,m,r,i,s,o,l,a,c,u,y]}class I extends W{constructor(t){super(),J(this,t,C,P,s,{displayMilitary:0,displaySeconds:1,displayDayOfWeek:2})}}function X(e){let n,r,i;return{c(){n=c("a"),r=c("img"),r.src!==(i=e[1])&&d(r,"src",i),d(r,"alt",e[2]),d(r,"class","svelte-4khyqf"),d(n,"href",e[0]),d(n,"class","svelte-4khyqf")},m(t,e){l(t,n,e),o(n,r)},p(t,[e]){2&e&&r.src!==(i=t[1])&&d(r,"src",i),4&e&&d(r,"alt",t[2]),1&e&&d(n,"href",t[0])},i:t,o:t,d(t){t&&a(n)}}}function Y(t,e,n){let{href:r}=e,{img:i}=e,{alt:s}=e;return t.$$set=t=>{"href"in t&&n(0,r=t.href),"img"in t&&n(1,i=t.img),"alt"in t&&n(2,s=t.alt)},[r,i,s]}class z extends W{constructor(t){super(),J(this,t,Y,X,s,{href:0,img:1,alt:2})}}function B(e){let n,r,i,s,u,m,$,g,p,h,y,b,v,k,w,x,_,M,j,q,S,H;return u=new z({props:{href:"https://www.youtube.com/",img:"../images/youtube.png",alt:"Youtube"}}),g=new z({props:{href:"https://github.com/JessebotX",img:"../images/github.png",alt:"Github"}}),y=new z({props:{href:"https://gitlab.com/JessebotX",img:"../images/gitlab.png",alt:"Gitlab"}}),w=new z({props:{href:"https://mail.protonmail.com/inbox",img:"../images/protonmail.png",alt:"ProtonMail"}}),M=new z({props:{href:"https://mail.google.com/mail/u/0/#inbox",img:"../images/gmail.png",alt:"Gmail"}}),S=new z({props:{href:"https://www.nexusmods.com/",img:"../images/nexusmods.png",alt:"NexusMods"}}),{c(){n=c("section"),r=c("div"),i=c("ul"),s=c("li"),A(u.$$.fragment),m=f(),$=c("li"),A(g.$$.fragment),p=f(),h=c("li"),A(y.$$.fragment),b=f(),v=c("ul"),k=c("li"),A(w.$$.fragment),x=f(),_=c("li"),A(M.$$.fragment),j=f(),q=c("li"),A(S.$$.fragment),d(s,"class","svelte-vjkicq"),d($,"class","svelte-vjkicq"),d(h,"class","svelte-vjkicq"),d(i,"class","svelte-vjkicq"),d(k,"class","svelte-vjkicq"),d(_,"class","svelte-vjkicq"),d(q,"class","svelte-vjkicq"),d(v,"class","svelte-vjkicq"),d(r,"class","svelte-vjkicq"),d(n,"id","main")},m(t,e){l(t,n,e),o(n,r),o(r,i),o(i,s),E(u,s,null),o(i,m),o(i,$),E(g,$,null),o(i,p),o(i,h),E(y,h,null),o(r,b),o(r,v),o(v,k),E(w,k,null),o(v,x),o(v,_),E(M,_,null),o(v,j),o(v,q),E(S,q,null),H=!0},p:t,i(t){H||(D(u.$$.fragment,t),D(g.$$.fragment,t),D(y.$$.fragment,t),D(w.$$.fragment,t),D(M.$$.fragment,t),D(S.$$.fragment,t),H=!0)},o(t){O(u.$$.fragment,t),O(g.$$.fragment,t),O(y.$$.fragment,t),O(w.$$.fragment,t),O(M.$$.fragment,t),O(S.$$.fragment,t),H=!1},d(t){t&&a(n),N(u),N(g),N(y),N(w),N(M),N(S)}}}class K extends W{constructor(t){super(),J(this,t,null,B,s,{})}}function L(e){let n,r,i,s,u;return r=new I({}),s=new K({}),{c(){n=c("main"),A(r.$$.fragment),i=f(),A(s.$$.fragment)},m(t,e){l(t,n,e),E(r,n,null),o(n,i),E(s,n,null),u=!0},p:t,i(t){u||(D(r.$$.fragment,t),D(s.$$.fragment,t),u=!0)},o(t){O(r.$$.fragment,t),O(s.$$.fragment,t),u=!1},d(t){t&&a(n),N(r),N(s)}}}return new class extends W{constructor(t){super(),J(this,t,null,L,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
