import{S as t,i as e,s,e as n,a as l,t as a,c as i,b as r,d as o,f as c,g as u,h,j as d,k as f,l as m,m as p,n as g,o as k,p as v,q as $,r as b,v as w,H as y,w as x,x as E,y as I,z as T,A,B as D,C,D as S,E as V,F as M,G as P,I as z,J as N,K as j,L as B,M as L}from"./client.c53eecc6.js";function H(t,e,s){const n=t.slice();return n[14]=e[s],n}function O(t,e,s){const n=t.slice();return n[11]=e[s],n[13]=s,n}function U(t){let e,s,g,k,v,$,b,w,y,x,E,I,T,A,D,C=t[3]&&_(t),S=t[2],V=[];for(let e=0;e<S.length;e+=1)V[e]=W(O(t,S,e));return{c(){e=n("a"),g=l(),k=n("div"),v=n("div"),$=n("button"),b=l(),w=n("div"),y=n("h2"),x=a(t[0]),E=a(" - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),C&&C.c(),I=l(),T=n("div"),A=n("div");for(let t=0;t<V.length;t+=1)V[t].c();this.h()},l(s){e=i(s,"A",{"uk-toggle":!0,"uk-tooltip":!0,"uk-icon":!0,href:!0,class:!0,title:!0}),r(e).forEach(o),g=c(s),k=i(s,"DIV",{"uk-modal":!0,id:!0});var n=r(k);v=i(n,"DIV",{class:!0});var l=r(v);$=i(l,"BUTTON",{class:!0,type:!0,"uk-close":!0,"uk-tooltip":!0,title:!0}),r($).forEach(o),b=c(l),w=i(l,"DIV",{class:!0});var a=r(w);y=i(a,"H2",{class:!0});var h=r(y);x=u(h,t[0]),E=u(h," - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),C&&C.l(h),h.forEach(o),a.forEach(o),I=c(l),T=i(l,"DIV",{class:!0,"uk-overflow-auto":!0});var d=r(T);A=i(d,"DIV",{class:!0});var f=r(A);for(let t=0;t<V.length;t+=1)V[t].l(f);f.forEach(o),d.forEach(o),l.forEach(o),n.forEach(o),this.h()},h(){h(e,"uk-toggle",s="#"+t[4]+"-modal"),h(e,"uk-tooltip",""),h(e,"uk-icon","cog"),h(e,"href",""),h(e,"class","uk-icon-link uk-margin-small-right"),h(e,"title","Settings"),h($,"class","uk-modal-close-default"),h($,"type","button"),h($,"uk-close",""),h($,"uk-tooltip","pos: left"),h($,"title","Close"),h(y,"class","uk-modal-title uk-text-middle"),h(w,"class","uk-modal-header"),h(A,"class","uk-form-stacked uk-text-left"),h(T,"class","uk-modal-body"),h(T,"uk-overflow-auto",""),h(v,"class","uk-modal-dialog uk-margin-auto-vertical"),h(k,"uk-modal",""),h(k,"id",D=t[4]+"-modal")},m(t,s){d(t,e,s),d(t,g,s),d(t,k,s),f(k,v),f(v,$),f(v,b),f(v,w),f(w,y),f(y,x),f(y,E),C&&C.m(y,null),f(v,I),f(v,T),f(T,A);for(let t=0;t<V.length;t+=1)V[t].m(A,null)},p(t,n){if(16&n&&s!==(s="#"+t[4]+"-modal")&&h(e,"uk-toggle",s),1&n&&m(x,t[0]),t[3]?C?C.p(t,n):(C=_(t),C.c(),C.m(y,null)):C&&(C.d(1),C=null),4&n){let e;for(S=t[2],e=0;e<S.length;e+=1){const s=O(t,S,e);V[e]?V[e].p(s,n):(V[e]=W(s),V[e].c(),V[e].m(A,null))}for(;e<V.length;e+=1)V[e].d(1);V.length=S.length}16&n&&D!==(D=t[4]+"-modal")&&h(k,"id",D)},d(t){t&&o(e),t&&o(g),t&&o(k),C&&C.d(),p(V,t)}}}function _(t){let e;return{c(){e=n("a"),this.h()},l(t){e=i(t,"A",{href:!0,target:!0,"uk-icon":!0,"uk-tooltip":!0,title:!0}),r(e).forEach(o),this.h()},h(){h(e,"href",t[3]),h(e,"target","_blank"),h(e,"uk-icon","info"),h(e,"uk-tooltip","pos: right"),h(e,"title","More Info")},m(t,s){d(t,e,s)},p(t,s){8&s&&h(e,"href",t[3])},d(t){t&&o(e)}}}function F(t){let e,s=t[11].name+"";return{c(){e=n("label"),this.h()},l(t){e=i(t,"LABEL",{class:!0}),r(e).forEach(o),this.h()},h(){h(e,"class","uk-form-label")},m(t,n){d(t,e,n),e.innerHTML=s},p(t,n){4&n&&s!==(s=t[11].name+"")&&(e.innerHTML=s)},d(t){t&&o(e)}}}function R(t){let e,s,a,u,m,p,g,k,v=t[11].name+"";function $(...e){return t[10](t[11],...e)}return{c(){e=n("div"),s=n("label"),a=n("input"),m=l(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"LABEL",{});var l=r(s);a=i(l,"INPUT",{class:!0,type:!0,checked:!0}),m=c(l),l.forEach(o),n.forEach(o),this.h()},h(){h(a,"class","uk-checkbox"),h(a,"type","checkbox"),a.checked=u=b(t[11].bind),p=new y(null),h(e,"class","uk-form-controls")},m(t,n){d(t,e,n),f(e,s),f(s,a),f(s,m),p.m(v,s),g||(k=w(a,"change",$),g=!0)},p(e,s){t=e,4&s&&u!==(u=b(t[11].bind))&&(a.checked=u),4&s&&v!==(v=t[11].name+"")&&p.p(v)},d(t){t&&o(e),g=!1,k()}}}function q(t){let e,s,l,a,c=t[11].options,u=[];for(let e=0;e<c.length;e+=1)u[e]=J(H(t,c,e));function m(...e){return t[9](t[11],...e)}return{c(){e=n("div"),s=n("select");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"SELECT",{class:!0});var l=r(s);for(let t=0;t<u.length;t+=1)u[t].l(l);l.forEach(o),n.forEach(o),this.h()},h(){h(s,"class","uk-select"),h(e,"class","uk-form-controls")},m(t,n){d(t,e,n),f(e,s);for(let t=0;t<u.length;t+=1)u[t].m(s,null);l||(a=w(s,"change",m),l=!0)},p(e,n){if(t=e,4&n){let e;for(c=t[11].options,e=0;e<c.length;e+=1){const l=H(t,c,e);u[e]?u[e].p(l,n):(u[e]=J(l),u[e].c(),u[e].m(s,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=c.length}},d(t){t&&o(e),p(u,t),l=!1,a()}}}function K(t){let e,s,l,a,c,u,m,p;function g(...e){return t[8](t[11],...e)}return{c(){e=n("div"),s=n("input"),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"INPUT",{value:!0,type:!0,class:!0,min:!0,max:!0,placeholder:!0}),n.forEach(o),this.h()},h(){s.value=l=b(t[11].bind),h(s,"type","number"),h(s,"class","uk-input"),h(s,"min",a=t[11].min),h(s,"max",c=t[11].max),h(s,"placeholder",u=t[11].placeholder),h(e,"class","uk-form-controls")},m(t,n){d(t,e,n),f(e,s),m||(p=w(s,"input",g),m=!0)},p(e,n){t=e,4&n&&l!==(l=b(t[11].bind))&&(s.value=l),4&n&&a!==(a=t[11].min)&&h(s,"min",a),4&n&&c!==(c=t[11].max)&&h(s,"max",c),4&n&&u!==(u=t[11].placeholder)&&h(s,"placeholder",u)},d(t){t&&o(e),m=!1,p()}}}function G(t){let e,s,l,a,c,u;function m(...e){return t[7](t[11],...e)}return{c(){e=n("div"),s=n("input"),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"INPUT",{value:!0,type:!0,class:!0,placeholder:!0}),n.forEach(o),this.h()},h(){s.value=l=b(t[11].bind),h(s,"type","text"),h(s,"class","uk-input"),h(s,"placeholder",a=t[11].placeholder),h(e,"class","uk-form-controls")},m(t,n){d(t,e,n),f(e,s),c||(u=w(s,"input",m),c=!0)},p(e,n){t=e,4&n&&l!==(l=b(t[11].bind))&&s.value!==l&&(s.value=l),4&n&&a!==(a=t[11].placeholder)&&h(s,"placeholder",a)},d(t){t&&o(e),c=!1,u()}}}function J(t){let e,s,l,c,h=t[14].name+"";return{c(){e=n("option"),s=a(h),this.h()},l(t){e=i(t,"OPTION",{value:!0,selected:!0});var n=r(e);s=u(n,h),n.forEach(o),this.h()},h(){e.__value=l=t[14].value,e.value=e.__value,e.selected=c=t[14].value==b(t[11].bind)},m(t,n){d(t,e,n),f(e,s)},p(t,n){4&n&&h!==(h=t[14].name+"")&&m(s,h),4&n&&l!==(l=t[14].value)&&(e.__value=l,e.value=e.__value),4&n&&c!==(c=t[14].value==b(t[11].bind))&&(e.selected=c)},d(t){t&&o(e)}}}function W(t){let e,s,a,u="checkbox"!==t[11].type&&F(t);function m(t,e){return"text"===t[11].type?G:"number"===t[11].type?K:"select"===t[11].type?q:"checkbox"===t[11].type?R:void 0}let p=m(t),g=p&&p(t);return{c(){e=n("div"),u&&u.c(),s=l(),g&&g.c(),a=l(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);u&&u.l(n),s=c(n),g&&g.l(n),a=c(n),n.forEach(o),this.h()},h(){h(e,"class","uk-margin")},m(t,n){d(t,e,n),u&&u.m(e,null),f(e,s),g&&g.m(e,null),f(e,a)},p(t,n){"checkbox"!==t[11].type?u?u.p(t,n):(u=F(t),u.c(),u.m(e,s)):u&&(u.d(1),u=null),p===(p=m(t))&&g?g.p(t,n):(g&&g.d(1),g=p&&p(t),g&&(g.c(),g.m(e,a)))},d(t){t&&o(e),u&&u.d(),g&&g.d()}}}function Q(t){let e,s,p,b,w,y,x,E,I,T,A,D,C,S,V,M=t[2]&&U(t);const P=t[6].default,z=g(P,t,t[5],null);return{c(){e=n("div"),s=n("div"),p=n("div"),b=n("div"),w=n("div"),y=n("h4"),x=a(t[0]),E=l(),I=n("div"),M&&M.c(),T=l(),A=n("a"),D=l(),C=n("div"),z&&z.c(),this.h()},l(n){e=i(n,"DIV",{id:!0,class:!0});var l=r(e);s=i(l,"DIV",{class:!0});var a=r(s);p=i(a,"DIV",{class:!0});var h=r(p);b=i(h,"DIV",{class:!0});var d=r(b);w=i(d,"DIV",{class:!0});var f=r(w);y=i(f,"H4",{});var m=r(y);x=u(m,t[0]),m.forEach(o),f.forEach(o),E=c(d),I=i(d,"DIV",{class:!0});var g=r(I);M&&M.l(g),T=c(g),A=i(g,"A",{href:!0,class:!0,title:!0,"uk-tooltip":!0,"uk-icon":!0}),r(A).forEach(o),g.forEach(o),d.forEach(o),h.forEach(o),D=c(a),C=i(a,"DIV",{class:!0});var k=r(C);z&&z.l(k),k.forEach(o),a.forEach(o),l.forEach(o),this.h()},h(){h(w,"class","uk-width-expand"),h(A,"href",""),h(A,"class","uk-sortable-handle uk-icon-link uk-visible@m"),h(A,"title","Move"),h(A,"uk-tooltip",""),h(A,"uk-icon","move"),h(I,"class","uk-width-auto uk-text-right"),h(b,"class","uk-grid uk-grid-medium"),h(p,"class","uk-card-header"),h(C,"class","uk-card-body"),h(s,"class","uk-card uk-card-default uk-card-small uk-card-hover"),h(e,"id",t[4]),h(e,"class",S="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l")},m(t,n){d(t,e,n),f(e,s),f(s,p),f(p,b),f(b,w),f(w,y),f(y,x),f(b,E),f(b,I),M&&M.m(I,null),f(I,T),f(I,A),f(s,D),f(s,C),z&&z.m(C,null),V=!0},p(t,[s]){(!V||1&s)&&m(x,t[0]),t[2]?M?M.p(t,s):(M=U(t),M.c(),M.m(I,T)):M&&(M.d(1),M=null),z&&z.p&&32&s&&k(z,P,t,t[5],s,null,null),(!V||16&s)&&h(e,"id",t[4]),(!V||2&s&&S!==(S="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l"))&&h(e,"class",S)},i(t){V||(v(z,t),V=!0)},o(t){$(z,t),V=!1},d(t){t&&o(e),M&&M.d(),z&&z.d(t)}}}function X(t,e,s){let{$$slots:n={},$$scope:l}=e,{title:a=""}=e,{size:i="large"}=e,{settings:r=!1}=e,{settingsInfo:o=!1}=e;let c;return t.$$set=t=>{"title"in t&&s(0,a=t.title),"size"in t&&s(1,i=t.size),"settings"in t&&s(2,r=t.settings),"settingsInfo"in t&&s(3,o=t.settingsInfo),"$$scope"in t&&s(5,l=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&s(4,c=a.toLowerCase().replace(/[^\s\w\-]+/g,"").replace(/\s+/g,"-"))},[a,i,r,o,c,l,n,(t,e)=>t.bind.set(e.target.value),(t,e)=>t.bind.set(parseInt(e.target.value)),(t,e)=>t.bind.set(e.target.options[e.target.selectedIndex].value),(t,e)=>t.bind.set(e.target.checked)]}class Y extends t{constructor(t){super(),e(this,t,X,Q,s,{title:0,size:1,settings:2,settingsInfo:3})}}function Z(t){let e,s,l,a;return{c(){e=n("div"),this.h()},l(t){e=i(t,"DIV",{id:!0,class:!0}),r(e).forEach(o),this.h()},h(){h(e,"id","coin"),h(e,"class",s=A(t[0])+" svelte-mzj0qe")},m(s,n){d(s,e,n),t[4](e),l||(a=w(e,"click",t[3]),l=!0)},p(t,n){1&n&&s!==(s=A(t[0])+" svelte-mzj0qe")&&h(e,"class",s)},d(s){s&&o(e),t[4](null),l=!1,a()}}}function tt(t){let e,s=t[1]&&Z(t);return{c(){s&&s.c(),e=D()},l(t){s&&s.l(t),e=D()},m(t,n){s&&s.m(t,n),d(t,e,n)},p(t,n){t[1]?s?s.p(t,n):(s=Z(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){s&&s.d(t),t&&o(e)}}}function et(t){let e,s;return e=new Y({props:{title:"Coin Flip",size:"small",$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,n){I(e,t,n),s=!0},p(t,[s]){const n={};39&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function st(t,e,s){let n,l="",a=!0;return[l,a,n,async function(){s(0,l=""),s(1,a=!1),await C(),s(1,a=!0);const t=Math.random();s(0,l=t<=.5?"heads":"tails")},function(t){S[t?"unshift":"push"](()=>{n=t,s(2,n)})}]}class nt extends t{constructor(t){super(),e(this,t,st,et,s,{})}}function lt(t){let e,s,l,c;return{c(){e=n("div"),s=a("SPIN"),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=u(n,"SPIN"),n.forEach(o),this.h()},h(){h(e,"class","wheel-section-btn svelte-1cjb9or")},m(n,a){d(n,e,a),f(e,s),l||(c=w(e,"click",t[2]),l=!0)},p:V,d(t){t&&o(e),l=!1,c()}}}function at(t){let e,s,a,u=!t[0]&&lt(t);return{c(){e=n("div"),s=n("canvas"),a=l(),u&&u.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"CANVAS",{class:!0}),r(s).forEach(o),a=c(n),u&&u.l(n),n.forEach(o),this.h()},h(){h(s,"class","wheel-section-canvas svelte-1cjb9or"),h(e,"class","wheel wheel-section svelte-1cjb9or")},m(n,l){d(n,e,l),f(e,s),t[11](s),f(e,a),u&&u.m(e,null)},p(t,[s]){t[0]?u&&(u.d(1),u=null):u?u.p(t,s):(u=lt(t),u.c(),u.m(e,null))},i:V,o:V,d(s){s&&o(e),t[11](null),u&&u.d()}}}function it(t,e,s,n,l,a){let i=0,r=0;for(let o=a;o>11;o--)if(t.font=`${n} ${o}px ${l}`,r=o-2,i=t.measureText(e).width,i<=s)return t.font=`${n} ${r}px ${l}`,e;let o=e.length,c=t.measureText("…").width;for(;i>=s-c&&o-- >0;)e=e.substring(0,o),i=t.measureText(e).width;return t.font=`${n} ${r}px ${l}`,e+"…"}function rt(t,e,s){let{width:n=600}=e,{height:l=600}=e,{speed:a=1e3}=e,{duration:i=3e3}=e,{prizes:r=[]}=e,{primaryColor:o="#57b121"}=e,{secondaryColor:c="#8be058"}=e,{spinButtonHidden:u=!1}=e,{onComplete:h=(()=>{})}=e,d=null,f=null,m=null,p=0,g=0,k=0,v=0,$=!1,b=0,w=0,y=0,x=0,E=0,I=0;function T(){const t=function(){let t=180*v/Math.PI,e=180*b/Math.PI,s=360-(t+90)%360,n=Math.floor(s/e);return r[n]}();h(t)}function A(){if(f.clearRect(0,0,d.width,d.height),0!==d.width&&0!==d.height)for(let[t,e]of r.entries()){const s=v+b*t,n=s+b;f.save(),f.fillStyle=t%2==0?o:c,f.lineWidth=1,f.strokeStyle="black",f.beginPath(),f.arc(w,y,x,s,n,!1),f.arc(w,y,I,n,s,!0),f.fill(),f.closePath(),f.restore(),f.save(),f.beginPath(),f.fillStyle="#fff",f.textBaseline="middle";const l=Math.cos(s+b/2)*E,a=Math.sin(s+b/2)*E;f.translate(w+l,y+a),f.rotate(s+b/2+Math.PI/2);const i=it(f,e,E-45,"500",'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',22);f.rotate(.5*Math.PI),f.fillText(i,0,0),f.closePath(),f.restore()}}function D(){if(p+=20,p>=g)return $=!1,void T();let t=(k-(e=p,s=0,n=k,(e/=g/2)<1?n/2*e*e+s:-n/2*(--e*(e-2)-1)+s))*(Math.PI/180);var e,s,n;v+=t,A(),m=requestAnimationFrame(D)}return M(()=>(f=d.getContext("2d"),s(1,d.width=n,d),s(1,d.height=l,d),s(1,d.style.width=n,d),s(1,d.style.height=l,d),b=2*Math.PI/r.length,w=d.width/2,y=d.height/2,x=d.width/2-20,E=x-10,I=0,A(),()=>{cancelAnimationFrame(m),s(1,d=null),f=null})),t.$$set=t=>{"width"in t&&s(3,n=t.width),"height"in t&&s(4,l=t.height),"speed"in t&&s(5,a=t.speed),"duration"in t&&s(6,i=t.duration),"prizes"in t&&s(7,r=t.prizes),"primaryColor"in t&&s(8,o=t.primaryColor),"secondaryColor"in t&&s(9,c=t.secondaryColor),"spinButtonHidden"in t&&s(0,u=t.spinButtonHidden),"onComplete"in t&&s(10,h=t.onComplete)},[u,d,function(){$||($=!0,p=0,g=5*Math.random()+i,k=10*Math.random()+a/100,D())},n,l,a,i,r,o,c,h,function(t){S[t?"unshift":"push"](()=>{d=t,s(1,d)})}]}class ot extends t{constructor(t){super(),e(this,t,rt,at,s,{width:3,height:4,speed:5,duration:6,prizes:7,primaryColor:8,secondaryColor:9,spinButtonHidden:0,onComplete:10})}}function ct(t){let e,s,p,g,k,v,$,b,y,x,E,I,T,A,D,C=t[4][t[3]]+"";return{c(){e=n("div"),s=n("span"),p=l(),g=n("div"),k=n("input"),v=l(),$=n("a"),b=a("by @"),y=a(C),E=l(),I=n("button"),T=a("Copy"),this.h()},l(t){e=i(t,"DIV",{class:!0});var n=r(e);s=i(n,"SPAN",{class:!0,"data-uk-icon":!0,"data-uk-tooltip":!0,title:!0}),r(s).forEach(o),n.forEach(o),p=c(t),g=i(t,"DIV",{class:!0});var l=r(g);k=i(l,"INPUT",{class:!0,type:!0,readonly:!0,value:!0}),v=c(l),$=i(l,"A",{class:!0,href:!0});var a=r($);b=u(a,"by @"),y=u(a,C),a.forEach(o),l.forEach(o),E=c(t),I=i(t,"BUTTON",{class:!0});var h=r(I);T=u(h,"Copy"),h.forEach(o),this.h()},h(){h(s,"class","uk-width-auto uk-hiddden@s"),h(s,"data-uk-icon","icon: arrow-down; ratio: 4"),h(s,"data-uk-tooltip","pos: left"),h(s,"title","Result"),h(e,"class","uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom"),h(k,"class","uk-input uk-form-large"),h(k,"type","text"),k.readOnly=!0,k.value=t[3],h($,"class","uk-text-meta uk-margin-small-top"),h($,"href",x="https://twitter.com/"+t[4][t[3]]),h(g,"class","uk-text-center"),h(I,"class","uk-button uk-button-primary uk-width-1-1 uk-margin-small-top")},m(n,l){d(n,e,l),f(e,s),d(n,p,l),d(n,g,l),f(g,k),t[6](k),f(g,v),f(g,$),f($,b),f($,y),d(n,E,l),d(n,I,l),f(I,T),A||(D=[w(k,"click",(function(){P(dt(t[2]))&&dt(t[2]).apply(this,arguments)})),w(I,"click",(function(){P(t[0](t[3]))&&t[0](t[3]).apply(this,arguments)}))],A=!0)},p(e,s){t=e,8&s&&k.value!==t[3]&&(k.value=t[3]),8&s&&C!==(C=t[4][t[3]]+"")&&m(y,C),8&s&&x!==(x="https://twitter.com/"+t[4][t[3]])&&h($,"href",x)},d(s){s&&o(e),s&&o(p),s&&o(g),t[6](null),s&&o(E),s&&o(I),A=!1,z(D)}}}function ut(t){let e,s,n,a;e=new ot({props:{prizes:Object.keys(t[4]),onComplete:t[5]}});let i=t[1]&&ct(t);return{c(){x(e.$$.fragment),s=l(),i&&i.c(),n=D()},l(t){E(e.$$.fragment,t),s=c(t),i&&i.l(t),n=D()},m(t,l){I(e,t,l),d(t,s,l),i&&i.m(t,l),d(t,n,l),a=!0},p(t,e){t[1]?i?i.p(t,e):(i=ct(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i(t){a||(v(e.$$.fragment,t),a=!0)},o(t){$(e.$$.fragment,t),a=!1},d(t){T(e,t),t&&o(s),i&&i.d(t),t&&o(n)}}}function ht(t){let e,s;return e=new Y({props:{title:"Answer Chooser (German)",size:"large",$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,n){I(e,t,n),s=!0},p(t,[s]){const n={};143&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){$(e.$$.fragment,t),s=!1},d(t){T(e,t)}}}function dt(t){t.select(),t.setSelectionRange(0,t.value.length)}function ft(t,e,s){let n,l=!1,a="wenn du verstehst was ich meine",{copyText:i}=e;return t.$$set=t=>{"copyText"in t&&s(0,i=t.copyText)},[i,l,n,a,{"Deine Mama":"LittleFreakBe","Schöne Schuhe hast du":"dingusbread44","normal ist das nicht":"Klirrkopf","warum ist meine TL voll davon":"underthepancake","Das muss ich mir jetzt echt nicht geben":"dingusbread44","Willst du mich eigentlich komplett verarschen":"dingusbread44","kmdd.de":"dingusbread44","Pisse aus meinem Arsch":"Klirrkopf","Das ist mir jetzt bisschen unangenehm":"dingusbread44","Lustige Katzen 2020 #24":"fischtisch","schon okay.":"dingusbread44","Oh Junge":"dingusbread44","eigentlich heiße ich Peter Müller":"dingusbread44","das gabs mal im Happy meal":"fischtisch","ich habe gepupst":"MeInAnUsBrEnNt_","achso, nein":"fischtisch","was erlaubst du dir eigentlich":"fischtisch","wir vermuten es schon seit Jahren":"fischtisch","Bist du nicht etwas zu alt dafür":"OrNotTobey","das ist ein zeichen patrick":"fischtisch","nimmst du mich überhaupt ernst":"fischtisch","hä":"fischtisch","Ich bin ein großer Fan von dir":"dingusbread44","Ich werde bald schwanger":"dingusbread44","achso ich dachte die drehen ein tik tok":"fischtisch","hättest du airpods wär dir das nicht passiert":"fischtisch","jetzt hab ich hunger":"fischtisch","wenn du verstehst was ich meine":"fischtisch","Musst du nicht lernen?":"regenleben","Gibt es das auch in besserer Qualität":"OrNotTobey","Moment, ich muss erst Skayo's Funbox fragen":"OrNotTobey","Das wäre dir mit Erdnuss nicht passiert":"dingusbread44"},function(t){s(3,a=t),s(1,l=!0)},function(t){S[t?"unshift":"push"](()=>{n=t,s(2,n)})}]}class mt extends t{constructor(t){super(),e(this,t,ft,ht,s,{copyText:0})}}function pt(t){let e;return{c(){e=n("textarea"),this.h()},l(t){e=i(t,"TEXTAREA",{readonly:!0,style:!0}),r(e).forEach(o),this.h()},h(){e.readOnly="readonly",N(e,"position","absolute"),N(e,"left","-9999px")},m(s,n){d(s,e,n),t[2](e)},p:V,i:V,o:V,d(s){s&&o(e),t[2](null)}}}function gt(t,e,s){let n;return[n,function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);s(0,n.value=t,n);const e=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select();let l=!1;try{l=document.execCommand("copy")}catch(t){}return e&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(e)),l?Promise.resolve():Promise.reject()},function(t){S[t?"unshift":"push"](()=>{n=t,s(0,n)})}]}class kt extends t{constructor(t){super(),e(this,t,gt,pt,s,{copyText:1})}get copyText(){return this.$$.ctx[1]}}function vt(t,e,s){let{showAlert:n=(t=>alert(t))}=e;return M(async()=>{const t=(await import("./uikit.c24fdc39.js")).default;s(0,n=t.modal.alert)}),t.$$set=t=>{"showAlert"in t&&s(0,n=t.showAlert)},[n]}class $t extends t{constructor(t){super(),e(this,t,vt,null,s,{showAlert:0})}}function bt(t){let e,s,a,u,m,p,g,k,b,w,y,A;function D(e){t[2].call(null,e)}a=new mt({props:{copyText:t[0]}}),m=new nt({});let C={};function V(e){t[3].call(null,e)}void 0!==t[0]&&(C.copyText=t[0]),g=new kt({props:C}),S.push(()=>B(g,"copyText",D));let M={};return void 0!==t[1]&&(M.showAlert=t[1]),w=new $t({props:M}),S.push(()=>B(w,"showAlert",V)),{c(){e=l(),s=n("div"),x(a.$$.fragment),u=l(),x(m.$$.fragment),p=l(),x(g.$$.fragment),b=l(),x(w.$$.fragment),this.h()},l(t){j('[data-svelte="svelte-s63nxz"]',document.head).forEach(o),e=c(t),s=i(t,"DIV",{class:!0,"uk-grid":!0,"uk-sortable":!0});var n=r(s);E(a.$$.fragment,n),u=c(n),E(m.$$.fragment,n),n.forEach(o),p=c(t),E(g.$$.fragment,t),b=c(t),E(w.$$.fragment,t),this.h()},h(){document.title="Skayo's Funbox",h(s,"class","uk-grid-medium"),h(s,"uk-grid",""),h(s,"uk-sortable","handle: .uk-sortable-handle")},m(t,n){d(t,e,n),d(t,s,n),I(a,s,null),f(s,u),I(m,s,null),d(t,p,n),I(g,t,n),d(t,b,n),I(w,t,n),A=!0},p(t,[e]){const s={};1&e&&(s.copyText=t[0]),a.$set(s);const n={};!k&&1&e&&(k=!0,n.copyText=t[0],L(()=>k=!1)),g.$set(n);const l={};!y&&2&e&&(y=!0,l.showAlert=t[1],L(()=>y=!1)),w.$set(l)},i(t){A||(v(a.$$.fragment,t),v(m.$$.fragment,t),v(g.$$.fragment,t),v(w.$$.fragment,t),A=!0)},o(t){$(a.$$.fragment,t),$(m.$$.fragment,t),$(g.$$.fragment,t),$(w.$$.fragment,t),A=!1},d(t){t&&o(e),t&&o(s),T(a),T(m),t&&o(p),T(g,t),t&&o(b),T(w,t)}}}function wt(t,e,s){let n,l;return[n,l,function(t){n=t,s(0,n)},function(t){l=t,s(1,l)}]}export default class extends t{constructor(t){super(),e(this,t,wt,bt,s,{})}}
