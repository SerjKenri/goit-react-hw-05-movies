"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[156],{156:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,i,c,a=t(5861),u=t(9439),s=t(4687),f=t.n(s),h=t(2791),d=t(7689),l=t(168),p=t(6444),v=t(1087),x=p.ZP.section(r||(r=(0,l.Z)(["\n    padding-top: 25px;\n    padding-bottom: 25px;\n"]))),m=p.ZP.h1(o||(o=(0,l.Z)(["\n    font-size: 25px;\n    font-weight: 500;\n"]))),w=p.ZP.ul(i||(i=(0,l.Z)(["\n    margin-top: 20px;\n    max-width: 400px;\n"]))),g=(0,p.ZP)(v.rU)(c||(c=(0,l.Z)(["\n    text-decoration: none;\n    color: black;\n    display: flex;\n    align-items: center;\n    &:focus {\n        color: red;\n        font-weight: 500;\n    }\n    &:hover {\n        color: red;\n        font-weight: 500;\n    }\n"]))),Z=t(7596),b=(t(5462),t(3544)),k=t(184),j=function(){var n=(0,h.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,h.useState)(!1),i=(0,u.Z)(o,2),c=i[0],s=i[1],l=(0,d.TH)();return(0,h.useEffect)((function(){s(!0);var n=function(){var n=(0,a.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe");case 3:if((e=n.sent).ok){n.next=6;break}throw new Error("Something went wrong");case 6:return n.next=8,e.json();case 8:t=n.sent,r(t.results),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),Z.Am.error("Something went wrong, ".concat(n.t0));case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),c?(0,k.jsx)(b.Z,{}):(0,k.jsxs)(x,{children:[(0,k.jsx)(m,{children:"Trending today"}),0!==t.length&&(0,k.jsx)(w,{children:t.map((function(n){var e=n.original_title,t=n.id;return(0,k.jsx)("li",{children:(0,k.jsx)(g,{state:{from:l},to:"/movies/".concat(t),children:e})},t)}))})]})}},5462:function(){},5861:function(n,e,t){function r(n,e,t,r,o,i,c){try{var a=n[i](c),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,i){var c=n.apply(e,t);function a(n){r(c,o,i,a,u,"next",n)}function u(n){r(c,o,i,a,u,"throw",n)}a(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=156.60fddfb0.chunk.js.map