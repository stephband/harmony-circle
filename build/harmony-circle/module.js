/* 
   Built 2023-08-01 20:16 */

import{c as d,e as f,g as q,i as v,j as G,k as O,l as X,m as L,o as T,p as Y,q as P,r as $,u as C,z as N}from"../chunk-4EL6KSGJ.js";function A(t,e){var s=e%t;return s<0?s+t:s}var tt=d(A);function g(t,e,s){return t+A(e-t,s-t)}var nt=d(g);function M([t,e]){return Float64Array.of(t*Math.cos(e),t*Math.sin(e))}function y([t,e]){return Float64Array.of(t===0?Math.abs(e):e===0?Math.abs(t):Math.sqrt(t*t+e*e),Math.atan2(e,t))}function k(t){t.stopPropagation(),t.preventDefault()}var Q=Array.prototype,B=Object.assign,w="webkitUserSelect"in document.body.style?"webkitUserSelect":"userSelect",b={},S={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function R(t,e,s){return e*e+s*s>=t*t}function U(t,e,s){if(this.stream=t,this.events=[e],this.options=s,this.pointerId=e.pointerId,typeof s.threshold=="function")this.checkThreshold=s.threshold;else{let r=C(s.threshold);this.checkThreshold=(o,c,a)=>R(r,o,c,a)}document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this)}B(U.prototype,{handleEvent:f(v("type"),{pointermove:function(t){if(this.pointerId===t.pointerId){if(this.pointerId in b&&this!==b[this.pointerId]){this.stop();return}if(this.events.push(t),!this.isGesture){let e=this.events[0],s=t.clientX-e.clientX,r=t.clientY-e.clientY,o=(t.timeStamp-e.timeStamp)/1e3;this.checkThreshold(s,r,o)&&this.createGesture()}}},pointerup:function(t){this.pointerId===t.pointerId&&(this.events.push(t),this.stop(),this.isGesture&&document.addEventListener("click",k,{capture:!0,once:!0}))},default:function(t){this.pointerId===t.pointerId&&(this.events.push(t),this.stop())}}),createGesture:function(){this.isGesture=!0,this.userSelectState=document.body.style[w],document.body.style[w]="none",b[this.pointerId]=this,this.stream.push(new T(this))},pipe:function(t){for(G(this,t);this.events.length;)X(this[0],Q.shift.apply(this.events));this.events=t},stop:function(){if(document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this),this.isGesture&&(document.body.style[w]=this.userSelectState,delete b[this.pointerId]),this[0]){let t=this[0];O(this,0),L(t)}}});function V(t){var e=t.target.tagName;return e&&(!!S.ignoreTags[e.toLowerCase()]||t.target.draggable)}function F(t,e){this.node=t,this.options=e}B(F.prototype,{pipe:function(t){return this[0]=t,this.node.addEventListener("pointerdown",this),t},handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!V(t)&&!(this.options.select&&!t.target.closest(this.options.select))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new U(this[0],e,this.options)}},stop:function(){return this[0]&&(this.node.removeEventListener("pointerdown",this),L(this[0])),this}});function D(t,e){return t=e&&t?B({},S,t):S,e=e||t,new T(new F(e,t))}function H(t){return t.replaceAll(/(∆|maj)|(-|–|min)|(ø)|(˚|dim)|(\+|aug)|(b|♭)|(#|♯)|(sus)|(alt)|(\d+(?:\/\d+)?)/g,(e,s,r,o,c,a,i,n,l,u,p)=>s?'<span class="maj-symbol symbol">△</span>':r?'<span class="min-symbol symbol">-</span>':o?'<sup class="hdim-symbol symbol">∅</sup>':c?'<span class="dim-symbol symbol">°</span>':a?'<sup class="aug-symbol symbol">＋</sup>':i?'<sup class="flat-symbol symbol">♭</sup>':n?'<sup class="sharp-symbol symbol">♯</sup>':l?'<span class="sus-symbol symbol">sus</span>':u?'<span class="alt-symbol symbol">alt</span>':p?`<sup class="num-symbol symbol">${p}</sup>`:"")}var x={pentatonic:{notes:[0,2,4,7,9],chords:["6/9","","","","-11"],transpose:0},major:{notes:[0,2,4,5,7,9,11],chords:["∆","-7","7sus♭9","∆♯11","7","-♭6","ø"],transpose:0},"melodic-minor":{notes:[0,2,3,5,7,9,11],chords:["-∆","7sus♭9","∆+","7♯11","7♭13","ø","7alt"],transpose:7},"diminished-arp":{notes:[0,3,6,9],chords:["˚","˚","˚","˚"],transpose:1},diminished:{notes:[0,1,3,4,6,7,9,10],chords:["7♭9","˚","7♭9","˚","7♭9","˚","7♭9","˚"],transpose:0},"whole-tone":{notes:[0,2,4,6,8,10],chords:["+7","+7","+7","+7","+7","+7"],transpose:0},"augmented-arp":{notes:[0,4,8],chords:["+","+","+"],transpose:0},"harmonic-major":{notes:[0,2,4,5,7,8,11],chords:["","","","","","",""],transpose:0},"harmonic-minor":{notes:[0,2,4,5,8,9,11],chords:["∆+5","-","7♭9","","7","-♭6",""],transpose:0},"double-harmonic-major":{notes:[0,1,4,5,7,8,11],chords:["","","","","","",""],transpose:0},"double-harmonic-minor":{notes:[0,2,4,5,8,9,10],chords:["","","","","","",""],transpose:0}};var I=7.5,E=Math.PI*2,Z=11/12,h=[0,5,10,3,8,1,6,11,4,9,2,7],W=f((t,e)=>e.type,{pointerdown:(t,e)=>{let{scale:s,circleDiv:r}=t,o=$(r),c={x:o.x+.5*o.width,y:o.y+.5*o.height};return t.centre=c,t.a0=y([e.clientX-c.x,e.clientY-c.y])[1],t.t0=h.indexOf(s.transpose||0),r.classList.add("gesturing"),t},pointermove:(t,e)=>{let{r:s,a0:r,t0:o,centre:c,scale:a,scaleName:i,shadow:n,circleDiv:l,scalePath:u}=t,p=y([e.clientX-c.x,e.clientY-c.y])[1],m=Math.round((p-r)*12/E);return m===t.transpose||(t.transpose=m,a.transpose=h.indexOf(g(0,12,o+m)),n.querySelectorAll(".chord-extension").forEach(J=>J.remove()),j(s,l,u,i,a)),t},default:(t,e)=>{let{scale:s,circleDiv:r}=t;r.classList.remove("gesturing")}});function z(t,e,s){let r=e+s*E/12;return M([t,r])}function j(t,e,s,r,o){let a=o.notes.map((n,l)=>({note:n,chord:o.chords[l],index:h.indexOf(n)})).sort(N(v("index"))),i=a.map(n=>z(t-1.8,(Z+h.indexOf(o.transpose)/12)*E,h.indexOf(n.note))).join("L");s.setAttribute("d","M"+i+"Z"),a.forEach(n=>{let l=g(0,12,n.note+o.transpose),u=e.querySelector(`[value="${l}"]`),p=H(n.chord),m=q("span",{class:r+" chord-extension",html:p});u.append(m)})}function K(t,e,s){t.querySelectorAll(`[value="${e}"]`).forEach(r=>r.classList.add("on")),s.disabled=!1}var wt={construct:function(t){let e=t.getElementById("circle"),s=t.getElementById("settings"),r=t.querySelectorAll(".note-button"),o=t.getElementById("scale-path"),c=t.getElementById("clear-scale"),a=t.getElementById("advanced-settings");r.forEach(n=>{let l=z(I,Z*E,h.indexOf(parseInt(n.value,10)));n.style.transform=`translate3d(calc(${l[0]}em - 50%), calc(${l[1]}em - 50%), 0)`});let i=localStorage.getItem("scale")||"major";if(i&&i!=="none"){let n=x[i];j(I,e,o,i,n),o.classList.add(i),K(t,i,c)}P("click",t).each(Y({'[name="scale"]':(n,l)=>{let u=x[n.value];if(l.shiftKey||(o.classList.remove(i),t.querySelectorAll(".chord-extension").forEach(p=>p.remove()),t.querySelectorAll(".on").forEach(p=>p.classList.remove("on"))),!u){o.removeAttribute("d"),c.disabled=!0,localStorage.setItem("scale","none");return}i=n.value,j(I,e,o,i,u),o.classList.add(i),K(t,i,c),localStorage.setItem("scale",i)}})),D({select:"path",threshold:1},e).each(n=>n.reduce(W,{r:I,shadow:t,circleDiv:e,scalePath:o,scaleName:i,scale:x[i],transpose:0})),P("change",a).each(n=>n.target.checked?localStorage.setItem("advancedSettings",n.target.checked):localStorage.removeItem("advancedSettings")),a.checked=localStorage.getItem("advancedSettings")},connect:function(t){}};export{wt as default};