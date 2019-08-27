!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n)}function l(t){t.parentNode.removeChild(t)}function s(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(t){return document.createTextNode(t)}function h(){return u(" ")}function f(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function p(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e,n){t.classList[n?"add":"remove"](e)}let x;function $(t){x=t}function v(){const t=x;return(e,n)=>{const a=t.$$.callbacks[e];if(a){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);a.slice().forEach(e=>{e.call(t,r)})}}}const b=[],w=Promise.resolve();let k=!1;const M=[],D=[],_=[];function N(t){D.push(t)}function S(){const t=new Set;do{for(;b.length;){const t=b.shift();$(t),E(t.$$)}for(;M.length;)M.shift()();for(;D.length;){const e=D.pop();t.has(e)||(e(),t.add(e))}}while(b.length);for(;_.length;)_.pop()();k=!1}function E(t){t.fragment&&(t.update(t.dirty),a(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(N))}function T(t,e){t.$$.dirty||(b.push(t),k||(k=!0,w.then(S)),t.$$.dirty={}),t.$$.dirty[e]=!0}function z(o,i,c,l,s,d){const m=x;$(o);const u=i.props||{},h=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:null};let f=!1;var p;h.ctx=c?c(o,u,(t,e)=>{h.ctx&&s(h.ctx[t],h.ctx[t]=e)&&(h.bound[t]&&h.bound[t](e),f&&T(o,t))}):u,h.update(),f=!0,a(h.before_render),h.fragment=l(h.ctx),i.target&&(i.hydrate?h.fragment.l((p=i.target,Array.from(p.childNodes))):h.fragment.c(),i.intro&&o.$$.fragment.i&&o.$$.fragment.i(),function(t,n,o){const{fragment:i,on_mount:c,on_destroy:l,after_render:s}=t.$$;i.m(n,o),N(()=>{const n=c.map(e).filter(r);l?l.push(...n):a(n),t.$$.on_mount=[]}),s.forEach(N)}(o,i.target,i.anchor),S()),$(m)}let C;"undefined"!=typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){var e,n;n=!0,(e=this).$$&&(a(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});const L="m10.5,118.1h107.9c2.3,0 4.1-1.8 4.1-4.1v-91.5c0-2.3-1.8-4.1-4.1-4.1h-20.3v-3.5c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v3.5h-50.2v-3.5c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v3.5h-21c-2.3,0-4.1,1.8-4.1,4.1v91.6c0,2.2 1.9,4 4.1,4zm4.1-91.5h16.9v2.2c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-2.2h50.2v2.2c0,2.3 1.8,4.1 4.1,4.1 2.3,0 4.1-1.8 4.1-4.1v-2.2h16.3v10.6h-99.8v-10.6zm0,18.8h99.7v64.6h-99.7v-64.6z",Y="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z",j="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z";function A(t,e,n){const a=Object.create(t);return a.day=e[n],a}function F(t,e,n){const a=Object.create(t);return a.name=e[n],a}function B(t){var e,n;return{c(){e=d("span"),n=u(t.dateString),e.id="date"},m(t,a){c(t,e,a),i(e,n)},p(t,e){t.dateString&&g(n,e.dateString)},d(t){t&&l(e)}}}function O(t){for(var e,n,r,o,x,$,v,b,w,k,M,D,_,N,S,E,T,z,C,L,B,O,H,I,R,q,W,G,J,K,Q,V,X,Z=t.getMonthName(),tt=t.dayNames,et=[],nt=0;nt<tt.length;nt+=1)et[nt]=U(F(t,tt,nt));var at=t.calendarMonth,rt=[];for(nt=0;nt<at.length;nt+=1)rt[nt]=P(A(t,at,nt));return{c(){e=d("section"),n=d("header"),r=d("div"),o=m("svg"),x=m("path"),$=h(),v=d("h1"),b=u(Z),w=h(),k=d("div"),M=m("svg"),D=m("path"),_=h(),N=d("div"),S=m("svg"),E=m("path"),T=h(),z=d("h1"),C=u(t.year),L=h(),B=d("div"),O=m("svg"),H=m("path"),I=h(),R=d("div");for(var a=0;a<et.length;a+=1)et[a].c();q=h(),W=d("div");for(a=0;a<rt.length;a+=1)rt[a].c();G=h(),J=d("div"),(K=d("p")).textContent="goto today",Q=h(),(V=d("p")).textContent="goto selected",p(x,"d",Y),p(o,"class","icon-left"),p(o,"height","16px"),p(o,"viewBox","0 0 129 129"),r.className="icon clickable",p(D,"d",j),p(M,"class","icon-right"),p(M,"height","16px"),p(M,"viewBox","0 0 129 129"),k.className="icon clickable",p(E,"d",Y),p(S,"class","icon-left"),p(S,"height","16px"),p(S,"viewBox","0 0 129 129"),N.className="icon clickable",p(H,"d",j),p(O,"class","icon-right"),p(O,"height","16px"),p(O,"viewBox","0 0 129 129"),B.className="icon clickable",R.className="cal-legend",W.className="days",K.className="clickable",V.className="clickable",J.className="cal-legend cal-footer",e.className="cal",y(e,"min-cal",t.minimal),X=[f(r,"click",t.prevMonth),f(k,"click",t.nextMonth),f(N,"click",t.prevYear),f(B,"click",t.nextYear),f(K,"click",t.click_handler_2),f(V,"click",t.click_handler_3)]},m(t,a){c(t,e,a),i(e,n),i(n,r),i(r,o),i(o,x),i(n,$),i(n,v),i(v,b),i(n,w),i(n,k),i(k,M),i(M,D),i(n,_),i(n,N),i(N,S),i(S,E),i(n,T),i(n,z),i(z,C),i(n,L),i(n,B),i(B,O),i(O,H),i(e,I),i(e,R);for(var l=0;l<et.length;l+=1)et[l].m(R,null);i(e,q),i(e,W);for(l=0;l<rt.length;l+=1)rt[l].m(W,null);i(e,G),i(e,J),i(J,K),i(J,Q),i(J,V)},p(t,n){if(t.getMonthName&&Z!==(Z=n.getMonthName())&&g(b,Z),t.year&&g(C,n.year),t.dayNames){tt=n.dayNames;for(var a=0;a<tt.length;a+=1){const e=F(n,tt,a);et[a]?et[a].p(t,e):(et[a]=U(e),et[a].c(),et[a].m(R,null))}for(;a<et.length;a+=1)et[a].d(1);et.length=tt.length}if(t.calendarMonth||t.isSelected||t.isToday||t.isDisabled){at=n.calendarMonth;for(a=0;a<at.length;a+=1){const e=A(n,at,a);rt[a]?rt[a].p(t,e):(rt[a]=P(e),rt[a].c(),rt[a].m(W,null))}for(;a<rt.length;a+=1)rt[a].d(1);rt.length=at.length}t.minimal&&y(e,"min-cal",n.minimal)},d(t){t&&l(e),s(et,t),s(rt,t),a(X)}}}function U(e){var n,a,r=e.name;return{c(){n=d("p"),a=u(r)},m(t,e){c(t,n,e),i(n,a)},p:t,d(t){t&&l(n)}}}function H(t){var e,n,a,r,o=t.day.num;function s(){return t.click_handler_1(t)}return{c(){e=d("div"),n=d("span"),a=u(o),n.className="day-number",e.className="day clickable",y(e,"selected",t.isSelected(t.day)),y(e,"today",t.isToday(t.day)),y(e,"disabled",t.isDisabled(t.day)),r=f(e,"click",s)},m(t,r){c(t,e,r),i(e,n),i(n,a)},p(n,r){t=r,n.calendarMonth&&o!==(o=t.day.num)&&g(a,o),(n.isSelected||n.calendarMonth)&&y(e,"selected",t.isSelected(t.day)),(n.isToday||n.calendarMonth)&&y(e,"today",t.isToday(t.day)),(n.isDisabled||n.calendarMonth)&&y(e,"disabled",t.isDisabled(t.day))},d(t){t&&l(e),r()}}}function I(e){var n;return{c(){(n=d("div")).className="spacer"},m(t,e){c(t,n,e)},p:t,d(t){t&&l(n)}}}function P(t){var e;function n(t){return"x"===t.day?I:H}var a=n(t),r=a(t);return{c(){r.c(),e=u("")},m(t,n){r.m(t,n),c(t,e,n)},p(t,o){a===(a=n(o))&&r?r.p(t,o):(r.d(1),(r=a(o))&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&l(e)}}}function R(e){var n,a,r,o,s,u,g,x=!e.minimal&&B(e),$=e.open&&O(e);return{c(){n=d("article"),a=d("section"),r=m("svg"),o=m("path"),s=h(),x&&x.c(),u=h(),$&&$.c(),this.c=t,p(o,"d",L),p(r,"class","icon-cal"),p(r,"viewBox","0 0 129 129"),p(r,"width","24px"),a.id="display",n.id="datepicker",y(n,"minimal",e.minimal),g=f(a,"click",e.click_handler)},m(t,e){c(t,n,e),i(n,a),i(a,r),i(r,o),i(a,s),x&&x.m(a,null),i(n,u),$&&$.m(n,null)},p(t,e){e.minimal?x&&(x.d(1),x=null):x?x.p(t,e):((x=B(e)).c(),x.m(a,null)),e.open?$?$.p(t,e):(($=O(e)).c(),$.m(n,null)):$&&($.d(1),$=null),t.minimal&&y(n,"minimal",e.minimal)},i:t,o:t,d(t){t&&l(n),x&&x.d(),$&&$.d(),g()}}}function q(t,e,n){let{ts:a=(new Date).getTime(),controlname:r="datepicker",type:o="date",start:i=(new Date).getTime(),end:c=(new Date).getTime()}=e,l=!1,{minimal:s=!1}=e;const d=v(),m=t=>{if(y(t))return;const e=new Date(`${k}-${M+1<10?"0":""}${M+1}-${t.num<10?"0":""}${t.num}`).getTime();n("dateString",b=new Date(e).toISOString().substring(0,10)),u(),d("submit",{date:e,controlname:r})},u=()=>(n("open",l=!l),l?window.setTimeout(()=>window.addEventListener("click",h),0):window.removeEventListener("click",h)),h=t=>{t.composedPath()[0].classList.contains("clickable")||u()},f=new Date,p=()=>{n("year",k=f.getFullYear()),n("month",M=f.getMonth())},g=()=>{n("year",k=w.getFullYear()),n("month",M=w.getMonth())},y=t=>"end"===o?c<=t.ts:"start"===o?t.ts<i:"range"===o&&(t.ts<=i||c+1<=t.ts);let x,$,b,w,k,M,D,_;return t.$set=(t=>{"ts"in t&&n("ts",a=t.ts),"controlname"in t&&n("controlname",r=t.controlname),"type"in t&&n("type",o=t.type),"start"in t&&n("start",i=t.start),"end"in t&&n("end",c=t.end),"minimal"in t&&n("minimal",s=t.minimal)}),t.$$.update=((t={ts:1,date:1,dateUtc:1,dateString:1,year:1,month:1})=>{t.ts&&n("date",x=new Date(parseInt(a))),t.date&&n("dateUtc",$=Date.UTC(x.getFullYear(),x.getMonth(),x.getDate())),t.dateUtc&&n("dateString",b=new Date($).toISOString().substring(0,10)),t.dateString&&n("selectedDate",w=new Date(b)),t.date&&n("year",k=x.getFullYear()),t.date&&n("month",M=x.getMonth()),(t.year||t.month)&&n("getMonthName",D=(()=>new Date(k,M).toLocaleString("en-us",{month:"short"}))),(t.year||t.month)&&n("calendarMonth",_=((t,e)=>{let n=[];const a=new Date(`${t}-${e<10?"0":""}${e}-01`),r=(t,e)=>2===e?t%4||!(t%100)&&t%400?28:29:new Date(t,e,0).getDate(),o=0===a.getDay()?6:a.getDay()-1,i=r(t,e),c=(7-(a.getDay()-1+r(t,e))%7)%7;return[...Array(o)].forEach(t=>n.unshift("x")),[...Array(i)].forEach((a,r)=>{n.push({num:r+1,ts:new Date(`${t}-${e}-${r+1}`).getTime()})}),[...Array(c)].forEach(t=>n.push("x")),n})(k,M+1))}),{ts:a,controlname:r,type:o,start:i,end:c,open:l,minimal:s,nextMonth:()=>{11===M?(n("month",M=0),n("year",k+=1)):n("month",M+=1)},prevMonth:()=>{0===M?(n("month",M=11),n("year",k-=1)):n("month",M-=1)},nextYear:()=>{const t=k+=1;return n("year",k),t},prevYear:()=>{const t=k-=1;return n("year",k),t},dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],selectDay:m,toggle:u,isToday:t=>f.getFullYear()===k&&f.getMonth()===M&&f.getDate()===t.num,setToday:p,isSelected:t=>w.getFullYear()===k&&w.getMonth()===M&&w.getDate()===t.num,setSelected:g,isDisabled:y,dateString:b,year:k,getMonthName:D,calendarMonth:_,click_handler:function(){return u()},click_handler_1:function({day:t}){return m(t)},click_handler_2:function(){return p()},click_handler_3:function(){return g()}}}customElements.define("date-picker",class extends C{constructor(t){super(),this.shadowRoot.innerHTML="<style>:host{all:initial;display:flex;contain:style}article{position:relative;display:flex;flex-direction:row;background:#fafafa}article{min-width:150px;max-width:150px;border:1px solid #666;box-sizing:border-box}article{font-family:'Menlo', monospace;font-size:14px;padding:2px;border-radius:2px}article{height:30px}.minimal{min-width:31px;max-width:31px}#display{display:flex;flex:1;align-items:center;justify-content:flex-start}#display{color:#333;text-align:center}#date{padding-left:16px}.cal{display:flex;flex:1;flex-direction:column;border:1px solid #666}.cal{box-sizing:border-box;text-transform:uppercase}.cal{position:absolute;top:28px;left:-44px;z-index:10;height:240px;width:240px}.cal{border-radius:4px;overflow:hidden;background:#fafafa;-webkit-user-select:none}.min-cal{left:-102px}header{display:flex;flex:0.1;align-items:center;justify-content:space-around}h1{font-size:16px;color:#333;margin:0}.icon{align-items:center;display:flex}.icon{background:#f4f4f4;border-radius:50%}.icon:hover{background:#d4d4d4}.cal-legend{display:flex;flex:0.1;align-items:center;background:#d4d4d4}.cal-legend p{flex:1;text-align:center;font-size:10px;color:#0b003a;margin:0}.cal-footer{flex:0.05}.cal-footer p{color:#0b003a}.cal-footer p:hover{transform:scale(1.1);transition:all .2s ease-in-out}.day-number{float:right;pointer-events:none}.days{display:flex;flex:0.8;flex-direction:row;flex-wrap:wrap}.days{font-size:0.825em;color:#666}.days>div{width:calc(100% * 1/7)}.days>div{display:flex;align-items:center;justify-content:center;height:auto}.days>div{box-sizing:border-box}.day{transition:none;cursor:pointer}.day:hover{background-color:#add8e6;transform:scale(1.1);transition:all .2s ease-in}.today span{font-weight:600;transform:scale(1.1)}.selected{background-color:#add8e6;font-color:white}.spacer{background:#f4f4f4}.icon-left{pointer-events:none;transform:scale(0.7) translate(-2px, 0)}.icon-right{pointer-events:none;transform:scale(0.7) translate(2px, 0)}.disabled,.disabled:hover{background:lightgrey;transform:none;border:none;cursor:not-allowed}</style>",z(this,{target:this.shadowRoot},q,R,o,["ts","controlname","type","start","end","minimal"]),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),S()))}static get observedAttributes(){return["ts","controlname","type","start","end","minimal"]}get ts(){return this.$$.ctx.ts}set ts(t){this.$set({ts:t}),S()}get controlname(){return this.$$.ctx.controlname}set controlname(t){this.$set({controlname:t}),S()}get type(){return this.$$.ctx.type}set type(t){this.$set({type:t}),S()}get start(){return this.$$.ctx.start}set start(t){this.$set({start:t}),S()}get end(){return this.$$.ctx.end}set end(t){this.$set({end:t}),S()}get minimal(){return this.$$.ctx.minimal}set minimal(t){this.$set({minimal:t}),S()}})}();
//# sourceMappingURL=date-picker.js.map
