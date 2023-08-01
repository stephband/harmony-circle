/* 
   Built 2023-08-01 21:52 */

import{a as le,b as A,c as v,d as j,e as d,f as b,g as R,h as C,i as M,l as E,m as O,n as pt,o as c,p as fe,q as he,r as me,s as de,t as ge,v as we,w as be,x as ye,y as xe,z as Ee}from"./chunk-FBXUJLLC.js";function Ut(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var qr=v(Ut,!0);function Rn(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+(n.length>128?n.length.slice(0,128)+"…":n)+'"')}function Pn(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function jn(t,e,n,o){let r=Ut(t,i=>Pn(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):Rn(t,e,o):r}var lt=v(jn,!0);var ve={once:!0};function _(t){return new Promise((e,n)=>{t.addEventListener("load",e,ve),t.addEventListener("error",n,ve)})}var Te=A(t=>{if(!t||t.includes("undefined"))throw new Error("ERRR?");let e=R("link",{rel:"preload",as:"style",href:t}),n=_(e);return document.head.append(e),n});var P=Symbol("internals"),Oe=Object.defineProperties,Bn={},An={a:HTMLAnchorElement,article:HTMLElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,section:HTMLElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},Mn={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[P].form}},labels:{get:function(){return this[P].labels}},validity:{get:function(){return this[P].validity}},validationMessage:{get:function(){return this[P].validationMessage}},willValidate:{get:function(){return this[P].willValidate}},checkValidity:{value:function(){return this[P].checkValidity()}},reportValidity:{value:function(){return this[P].reportValidity()}}},Se=0,Le=!1;function Nn(t){return An[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var Cn=lt(/^\s*<?([a-z][\w]*-[\w-]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is[=\s]*["']?([a-z][\w]*-[\w-]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function Un(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function ke(t,e,n){let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=R("link",{rel:"stylesheet",href:n});o.append(r)}return o}function Gn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:elem.shadowRoot};return e.polyfillInput=R("input",{type:"hidden",name:elem.name}),elem.appendChild(e.polyfillInput),e.setFormValue=function(n){this.input.value=n},e}function qn(t){return!!t.attribute}function Hn(t){return t.set||t.get||t.hasOwnProperty("value")}function In(t,e){return qn(e[1])&&(t.attributes[e[0]]=e[1].attribute),Hn(e[1])&&(t.properties[e[0]]=e[1]),t}function l(t){return t[P]=t[P]||{}}function W(t,e,n,o,r=""){let{name:i,tag:s}=Cn(t),a=typeof s=="string"?Nn(s):HTMLElement,{attributes:p,properties:w}=n?Object.entries(n).reduce(In,{attributes:{},properties:{}}):Bn;function h(){let u=Reflect.construct(a,arguments,h),m=e.construct&&e.construct.length>Se?ke(u,e,o||e.stylesheet):void 0,T=h.formAssociated?Gn(u):{shadowRoot:m};if(T.unconnected=!0,u[P]=T,s&&(Le=!0),e.construct&&e.construct.call(u,m,T),w&&Object.keys(w).reduce(Un,u),m){let F=m.querySelectorAll('link[rel="stylesheet"]');if(F.length){let pe=R("style","*:not(:has(slot:not([name]))) { display: none !important; }");m.append(pe),T.stylesheetsLoadPromise=Promise.all(Array.from(F,_)).finally(()=>pe.remove())}}return u}return o&&(Te(o),r=r),h.prototype=Object.create(a.prototype,w),w&&w.value&&(h.formAssociated=!0,Oe(h.prototype,Mn),(e.enable||e.disable)&&(h.prototype.formDisabledCallback=function(u){let m=l(this),T=m.shadowRoot;return u?e.disable&&e.disable.call(this,T,m):e.enable&&e.enable.call(this,T,m)}),e.reset&&(h.prototype.formResetCallback=function(){let u=l(this),m=u.shadowRoot;return e.reset.call(this,m,u)}),e.restore&&(h.prototype.formStateRestoreCallback=function(){let u=l(this),m=u.shadowRoot;return e.restore.call(this,m,u)})),p&&(h.observedAttributes=Object.keys(p),h.prototype.attributeChangedCallback=function(u,m,T){return p[u].call(this,T)}),h.prototype.connectedCallback=function(){let u=l(this),m=u.shadowRoot;u.polyfillInput&&elem.appendChild(u.polyfillInput),u.unconnected&&(e.load&&u.stylesheetsLoadPromise?u.stylesheetsLoadPromise.then(()=>e.load.call(this,m,u)):e.load&&Promise.resolve().then(()=>e.load.call(this,m,u)),delete u.unconnected),e.connect&&e.connect.call(this,m,u)},e.disconnect&&(h.prototype.disconnectedCallback=function(){let u=l(this),m=u.shadowRoot;return e.disconnect.call(this,m,u)}),window.console&&window.console.log("%c<"+(s?s+" is="+i:i)+">%c "+r,"color: #3a8ab0; font-weight: 600;","color: #888888; font-weight: 400;"),window.customElements.define(i,h,s&&{extends:s}),s&&!Le&&document.querySelectorAll('[is="'+i+'"]').forEach(u=>{w&&Oe(u,w);let m=e.construct&&e.construct.length>Se?ke(u,e,o||e.stylesheet):void 0;e.construct&&e.construct.call(u,m);let T;for(T in p){let F=u.attributes[T];F&&p[T].call(u,F.value)}e.connect&&e.connect.apply(u)}),h}function X(t){return function(){return arguments[t]}}function S(){return this}var De=Object.create,Vn=Object.freeze,y=Vn(De(De(Object.prototype,{at:{value:b},shift:{value:b},push:{value:b},forEach:{value:b},join:{value:function(){return""}},every:{value:function(){return!0}},filter:{value:S},find:{value:b},findIndex:{value:function(){return-1}},flat:{value:S},flatMap:{value:S},includes:{value:function(){return!1}},indexOf:{value:function(){return-1}},map:{value:S},reduce:{value:X(1)},sort:{value:S},each:{value:S},pipe:{value:j},start:{value:S},stop:{value:S},done:{value:S},valueOf:{value:function(){return null}}}),{length:{value:0}}));var $n=Object.assign,Fn=Object.defineProperties,_n=Object.isExtensible,Wn=Object.prototype,N=Symbol("observe");function Xn(t,e){let n=t.indexOf(e);return n>-1&&t.splice(n,1),t}var Re={[N]:{}};function ft(t,e){if(!t||!t.length)return 0;t=t.slice(0);for(var n=-1;t[++n];)t[n].status!=="stopped"&&t[n].push(e);return n}function Pe(t){this.observables={},this.gets=[],this.sets=void 0,this.target=t,this.observer=new Proxy(t,this),Re[N].value=this,Fn(t,Re)}$n(Pe.prototype,{notify:function(t){ft(this.observables[t],this.target[t]),ft(this.sets,this.target)},listen:function(t,e){(t===null?this.sets||(this.sets=[]):this.observables[t]||(this.observables[t]=[])).push(e)},unlisten:function(t,e){let n=t===null?this.sets:this.observables[t];n&&Xn(n,e)},get:function(e,n,o){let r=e[n];if(typeof n=="symbol"||n==="__proto__")return r;let i=Object.getOwnPropertyDescriptor(e,n);if((i?i.writable||i.set:r===void 0)&&ft(this.gets,n),!Wn.hasOwnProperty.call(e,n))return r;let a=x(r);if(!a)return r;for(var p=-1;this.gets[++p];)this.gets[p].listen(n);return a},set:function(e,n,o,r){if(typeof n=="symbol"||n==="__proto__")return e[n]=o,!0;let i=D(o);if(e[n]===o||e[n]===i)return!0;let s=e.length;for(var a=-1;this.gets[++a];)this.gets[a].unlisten(n);return e[n]=i,n!=="length"&&e.length!==s&&ft(this.observables.length,e.length),this.notify(n),!0},deleteProperty:function(t,e){return typeof e=="symbol"||e==="__proto__"?(delete t[e],!0):(t.hasOwnProperty(e)&&(delete t[e],this.notify(e)),!0)}});function ht(t){return t&&_n(t)&&!Node.prototype.isPrototypeOf(t)&&(typeof BaseAudioContext>"u"||!BaseAudioContext.prototype.isPrototypeOf(t))&&!(t instanceof Date)&&!(t instanceof RegExp)&&!(t instanceof Map)&&!(t instanceof WeakMap)&&!(t instanceof Set)&&!(window.WeakSet&&t instanceof WeakSet)&&!ArrayBuffer.isView(t)}function x(t,e){return t?t[N]?t[N].observer:e||ht(t)?new Pe(t).observer:void 0:void 0}function D(t){return t&&t[N]&&t[N].target||t}function U(t){return x(t)&&t[N]}var Jn=Object.assign;function mt(t,e){this.element=t,this.definitions=e,this.tokens=[]}Jn(mt.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)||(this.tokens.push(e),this.supports(e)&&this.definitions[e].enable(this.element))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(C(this.tokens,e),this.supports(e)&&this.definitions[e].disable(this.element))}},supports:function(t){return!!this.definitions&&!!this.definitions[t]}});var zn=Array.prototype;function Gt(t,e){let n=t.tokens.slice(),o=zn.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function dt(t){return function(n,...o){var r=t[n]||t.default;return r&&r.apply(this,o)}}var Qn={xml:"application/xml",html:"text/html",svg:"image/svg+xml"};function Kn(t,e){if(!!e){var n=Qn[t.toLowerCase()],o;try{o=new window.DOMParser().parseFromString(e,n)}catch{return}if(!o||o.getElementsByTagName("parsererror").length)throw new Error("Invalid "+t.toUpperCase()+": "+e);return o}}function je(t){return Kn("html",t)}var G=Object.assign,q={headers:function(t){return{}},body:j,onresponse:function(t){if(t.redirected){window.location=t.url;return}return t}},Yn=dt({"application/x-www-form-urlencoded":function(t){return G(t,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})},"application/json":function(t){return G(t,{"Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"})},"multipart/form-data":function(t){return G(t,{"Content-Type":"multipart/form-data","X-Requested-With":"XMLHttpRequest"})},"audio/wav":function(t){return G(t,{"Content-Type":"audio/wav","X-Requested-With":"XMLHttpRequest"})},default:function(t){return G(t,{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"})}}),Zn=dt({"application/json":function(t){return t.get?to(t):JSON.stringify(t)},"application/x-www-form-urlencoded":function(t){return t.get?Ae(t):Me(t)},"multipart/form-data":function(t){return t.get?t:eo(t)}});function to(t){return JSON.stringify(Array.from(t.entries()).reduce(function(e,n){return e[n[0]]=n[1],e},{}))}function Ae(t){return new URLSearchParams(t).toString()}function Me(t){return Object.keys(t).reduce((e,n)=>(e.append(n,t[n]),e),new URLSearchParams)}function eo(t){throw new Error("TODO: dataToFormData(data)")}function no(t,e){return e instanceof FormData?t+"?"+Ae(e):t+"?"+Me(e)}function oo(t,e,n,o){let r=typeof n=="string"?n:n&&n["Content-Type"]||"application/json",i=Yn(r,G(q.headers&&e?q.headers(e):{},typeof n=="string"?{}:n)),s={method:t,headers:i,credentials:"same-origin",signal:o&&o.signal};return t!=="GET"&&(s.body=Zn(r,q.body?q.body(e):e)),s}var ro={"text/plain":so,"text/html":ao,"application/json":io,"multipart/form-data":Be,"application/x-www-form-urlencoded":Be,audio:qt,"audio/wav":qt,"audio/m4a":qt};function qt(t){return t.blob()}function io(t){return t.json().catch(e=>{throw new Error("Cannot parse JSON "+t.url+". "+e.message)})}function Be(t){return t.formData()}function so(t){return t.text()}function ao(t){return t.text().then(e=>/^\s*<!DOCTYPE html>/.test(e)?je(e):R("fragment",e))}function uo(t){if(q.onresponse&&(t=q.onresponse(t)),!t.ok)throw new Error(t.statusText+"");let e=t.headers.get("Content-Type").replace(/\;.*$/,"");return ro[e](t)}function gt(t="GET",e,n={},o="application/json"){t=t.toUpperCase(),t==="GET"&&n&&(e=no(e,n));let r=oo(t,n,o,arguments[4]);return fetch(e,r).then(uo)}function wt(t){return gt("GET",t)}var co={};function bt(t){let e=new URL(t,window.location);return co[e]||e}var po=/\.([\w-]+)(?:#|\?|$)/,lo=[],fo=d(t=>(po.exec(t.pathname)||lo)[1],{js:A(t=>{let e=t.hash.slice(1)||"default";return import(t).then(M(e))}),default:A(wt)});function J(t){let e=bt(t);return fo(e)}var ho=/^\.*\/|^https?:\/\//,Ht=d((t,e,n)=>typeof n,{string:function(t,e,n){let o=l(e);return ho.test(n)?J(n).then(r=>o.data[t]=r).catch(r=>console.error(r)):o.data[t]=JSON.parse(n),o.data},default:function(t,e,n){l(e)[t]=n}}),Ne=d((t,e)=>typeof e,{string:d((t,e)=>e,{attribute:t=>({attribute:function(e){l(this).data[t]=e}}),string:t=>({attribute:function(e){this[t]=e},get:function(){return l(this).data[t]},set:function(e){l(this).data[t]=e},default:""}),boolean:t=>({attribute:function(e){this[t]=e!==null},get:function(){return!!l(this).data[t]||!1},set:function(e){l(this).data[t]=!!e},default:!1}),number:t=>({attribute:function(e){this[t]=e},get:function(){return l(this).data[t]||0},set:function(e){l(this).data[t]=Number(e)},default:0}),tokens:t=>({attribute:function(e){this[t]=e||""},get:function(){let e=l(this);if(e[t])return e[t];let n=e[t]=new mt;return e.data[t]=n.tokens=x(n.tokens),n},set:function(e){let n=this[t];Gt(n,(e+"").trim().split(/\s+/))},default:y}),src:t=>({attribute:function(e){this[t]=e},get:function(){return l(this).renderer.data[t]},set:function(e){Ht(t,this,e)},default:null}),module:t=>({attribute:function(e){this[t]=e},get:function(){return l(this).renderer.data[t]},set:function(e){Ht(t,this,e)},default:null}),json:t=>({attribute:function(e){this[t]=e},get:function(){return l(this).renderer.data[t]},set:function(e){Ht(t,this,e)},default:null}),default:(t,e)=>{throw e==="url"||e==="import"?new SyntaxError('Literal type deprecated in attribute definition "'+t+":"+e+'", should be "'+t+':src", "'+t+':module" or "'+t+':json"'):new SyntaxError('Literal type not supported in attribute definition "'+t+":"+e+'"')}}),object:X(1),undefined:t=>({attribute:function(e){l(this).data[t]=e}})});function z(t){let e=t.slice(1),n=document.getElementById(e);if(!n)throw new Error('Template "'+t+'" not found');return n}function It(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function Vt(t){return t.nodeType===3}var mo={1:"element",3:"text",8:"comment",9:"document",10:"doctype",11:"fragment"};function $t(t){return mo[t.nodeType]}var go=Object.assign,Q={bubbles:!0,cancelable:!0};function Ft(t,e){var w;let n=Q,o,r,i,s,a,p;return typeof t=="object"?(w=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:a}=w,o=le(w,["type","detail","bubbles","cancelable","composed"]),p=go(new CustomEvent(t,{detail:r,bubbles:i||Q.bubbles,cancelable:s||Q.cancelable,composed:a||Q.composed}),o)):p=new CustomEvent(t,Q),e.dispatchEvent(p)}var yt=v(Ft,!0);function _t(t,e,n){return n>e?e:n<t?t:n}var Ii=v(_t);function Ce(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Ce(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Ue=v(Ce,!0);function K(t){return!!t||t!=null&&!Number.isNaN(t)}function wo(t,e){let n;for(n in t)if(t[n]!==e[n])return!1;return!0}var Ge=v(wo,!0);var qe=/\.?([\w-]+)/g;function bo(t,e,n){var o=t.exec(e);if(!o)throw new Error('getPath(path, object): invalid path "'+e+'" at "'+e.slice(t.lastIndex)+'"');return He(t,e,n[o[1]])}function He(t,e,n){return t.lastIndex===e.length?n:n?bo(t,e,n):void 0}function yo(t,e){return qe.lastIndex=0,He(qe,""+t,e)}var Ie=v(yo,!0);function Wt(t){if(t=typeof t=="number"?t+"":t.trim(),typeof t=="string")return t.toLowerCase().replace(/^[\W_]+/,"").replace(/[\W_]+$/,"").replace(/[\W_]+/g,"-")}function H(t,e){return e+t}function Y(t){if(typeof t.length=="number")return t[t.length-1]}function Xt(t,e,n){return(n-t)/(e-t)}function Jt(t,e,n){return n*(e-t)+t}var xo=Object.assign,Eo=Object.create;function vo(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n]}else t.stop()}function Z(t,e){c.apply(this,arguments),this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(y)}Z.prototype=xo(Eo(c.prototype),{push:function(t){if(t===void 0)return;this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)},pipe:function(t){let e=-1;for(;this[++e];);return this.memory&&e===0&&this.input.pipe(this),this[e]=t,t.done(()=>vo(this,t)),this.value!==void 0&&t.push(this.value),!this.memory&&e===0&&this.input.pipe(this),t}});var To=Array.prototype,Oo=Object.assign,So=Object.create;function Lo(t){return t!==void 0}function tt(t){this.buffer=t?t.filter?t.filter(Lo):t:[]}tt.prototype=Oo(So(c.prototype),{push:function(t){t!==void 0&&E(this.buffer,t)},pipe:function(t){for(t.done(this),this[0]=t;this.buffer.length;)E(this[0],To.shift.apply(this.buffer));return this.buffer=t,t},stop:function(){return this.buffer=void 0,O(this),this}});var Ve=Object.assign,ko=Object.create,Do=Promise.resolve(),Ro={schedule:function(){Do.then(this.fire)},unschedule:b},Po={schedule:function(){this.timer=requestAnimationFrame(this.fire)},unschedule:function(){cancelAnimationFrame(this.timer),this.timer=void 0}},jo={schedule:function(){this.timer=setTimeout(this.fire,this.duration*1e3)},unschedule:function(){clearTimeout(this.timer),this.timer=void 0}};function et(t,e){c.apply(this,arguments),this.duration=e,this.timer=void 0,this.fire=()=>{this.timer=void 0,this.output.stop()},Ve(this,e==="tick"?Ro:e==="frame"?Po:jo)}et.prototype=Ve(ko(c.prototype),{push:function(t){this.timer?(this.unschedule(),this.schedule(),this.output.push(t)):(this.output=c.of(t),this[0].push(this.output),this.schedule())},stop:function(){return this.timer&&this.fire(),c.prototype.stop.apply(this,arguments)}});var zt=Object.assign,Bo=Object.create;function Ao(t){return!!t.active}function Mo(t){return!!t.stopped}function Qt(t,e,n,o,r,i){this.stream=t,this.values=e,this.pipes=n,this.name=o,this.input=r,this.mutable=i,this.active=!1,this.stopped=!1}zt(Qt.prototype,{push:function(t){let e=this.stream,n=this.values,o=this.name;if(n[o]=t,this.active=!0,e.active||(e.active=this.pipes.every(Ao)))if(this.mutable)E(e[0],n);else{let r=new this.values.constructor;E(e[0],zt(r,n))}},stop:function(){this.stopped=!0,this.pipes.every(Mo)&&O(this.stream)},done:function(t){this.stream.done(t)}});function xt(t,e){this.inputs=t,this.mutable=e&&(e===!0||e.mutable),this.active=!1}xt.prototype=zt(Bo(c.prototype),{push:null,pipe:function(t){let e=this.inputs,n=[];this[0]=t,t.done(this);let o;for(o in e){let r=e[o];if(r.pipe){let i=new Qt(this,e,n,o,r,this.mutable);n.push(i),r.pipe(i)}else if(r.then){let i=new Qt(this,e,n,o,r,this.mutable);n.push(i),r.then(s=>i.push(s)),r.finally(()=>i.stop())}}return t}});var No=Object.assign,Co=Object.create;function Et(t){this.fn=t}Et.prototype=No(Co(c.prototype),{pipe:function(t){return t.done(this),this[0]=t,this.fn(e=>this.push(e),e=>this.stop(e)),t}});var $e=Object.assign,Uo=Object.create;function Fe(t){this.stream=t}$e(Fe.prototype,{push:function(t){E(this.stream[0],t)},stop:function(){--this.stream.count===0&&O(this.stream)},done:function(t){this.stream.done(t)}});function vt(t){this.inputs=t}vt.prototype=$e(Uo(c.prototype),{push:null,pipe:function(t){let e=this.inputs;this.count=e.length,this[0]=t,t.done(this);let n=new Fe(this),o=-1,r;for(;r=e[++o];)if(r.pipe)r.pipe(n);else if(r.then)r.then(i=>n.push(i)),r.finally(()=>n.stop());else{let i=-1;for(;++i<r.length;)n.push(r[i]);n.stop()}return t}});var Go=Object.assign,qo=Object.create;function Tt(t){this.promise=t}Tt.prototype=Go(qo(c.prototype),{push:null,pipe:function(t){let e=this.promise;return this[0]=t,t.done(this),e.then(n=>E(this,n)),e.finally(()=>O(this)),t}});var Ho=Array.prototype,_e=Object.assign;function Io(t){throw new TypeError("Stream cannot be created from "+typeof object)}_e(c,{isStream:pt,of:function(){return new tt(Ho.slice.apply(arguments))},from:function(t){return t.pipe?new c(t):t.then?new Tt(t):typeof t.length=="number"?typeof t=="function"?new Et(t):new tt(t):Io(t)},batch:t=>new et(y,t),broadcast:t=>new Z(y,t),combine:(t,e)=>new xt(t,e),merge:function(){return new vt(arguments)},writeable:function(t){let e=new c(y);return t(e),e}});_e(c.prototype,{log:S,batch:function(t){return new et(this,t)},broadcast:function(t){return new Z(this,t)}});var We=Object.assign,Vo=Object.create,Kt=/(^\.?|\.)\s*([\w-]*)\s*/g;function $o(t){this.producer.push(t)}function Yt(t,e,n,o){Kt.lastIndex=e;let r=Kt.exec(t);this.path=t,this.object=n,this.producer=o,this.key=r[2]||r[1],this.index=Kt.lastIndex,this.isMuteableObserver=this.path.slice(this.index)===".",this.index>=this.path.length&&(this.push=$o),this.listen(),this.push(this.key==="."?this.object:D(this.object)[this.key])}We(Yt.prototype,{push:function(t){ht(t)?this.child?this.child.relisten(t):this.child=new Yt(this.path,this.index,t,this.producer):(this.child&&(this.child.stop(),this.child=void 0),this.producer.push(this.isMuteableObserver?t:void 0))},listen:function(){let t=U(this.object);t&&t.listen(this.key==="."?null:this.key,this)},unlisten:function(){U(this.object).unlisten(this.key==="."?null:this.key,this)},relisten:function(t){this.unlisten(),this.object=t,this.listen(),this.push(D(this.object)[this.key])},stop:function(){this.unlisten(),this.child&&this.child.stop(),this.child=void 0,this.status="stopped"}});function Xe(t,e,n){this.path=t,this.object=e,this.value=n}Xe.prototype=We(Vo(c.prototype),{push:function(t){this.value===t&&(!this.isMutationProducer||!ht(t))||(this.value=t,this[0].push(t))},pipe:function(t){return this[0]=t,t.done(this),this.pathObserver=new Yt(this.path,0,this.object,this),this.isMutationProducer=this.path[this.path.length-1]===".",t},stop:function(){return this.pathObserver.stop(),c.prototype.stop.apply(this,arguments)}});function nt(t,e,n){return new c(new Xe(t,e,n))}var Fo=Object.assign,_o=Object.create;function Ot(t){this.duration=t}Ot.prototype=Fo(_o(c.prototype),{push:null,pipe:function(t){this[0]=t;let e=this.duration==="frame"?n=>{this.frame=requestAnimationFrame(e),E(this[0],n/1e3)}:n=>{this.frame=setInterval(()=>E(this[0],performance.now()/1e3),this.duration*1e3),E(this[0],n/1e3)};return e(performance.now()),t},stop:function(){return this.duration==="frame"?cancelAnimationFrame(this.frame):clearInterval(this.frame),this.frame=void 0,O(this[0]),this}});function Zt(t){let e=typeof t=="object"&&typeof t.length!="number"?Object.entries(t).flatMap(n=>n[1]===void 0?y:n[1]&&typeof n[1]=="object"&&n[1].map?n[1].map(o=>[n[0],o]):[n]):t;return new URLSearchParams(e)}var Wo={assign:Object.assign,by:Ee,ceil:Math.ceil,clamp:_t,denormalise:Jt,entries:Object.entries,equals:Ue,floor:Math.floor,get:Ie,id:j,isDefined:K,clock:t=>new Ot(t),keys:Object.keys,last:Y,matches:Ge,noop:b,normalise:Xt,nothing:y,observe:nt,Data:x,overload:d,round:(t,e)=>Math.round(e/t)*t,paramify:Zt,slugify:Wt,Stream:c,sum:H,translate:function(e){return window.translations&&window.translations[e]||e},values:Object.values},Je=Wo;var L=Object.assign({delegate:fe,events:he,rect:me,request:gt,trigger:Ft,px:ge,em:we,rem:be,vw:ye,vh:xe},Je);var Xo=Object.assign,Jo=Object.values,te={};function zo(t){t.stop()}function ee(t,e){this.children={},this.target=D(t),this.path=e}Xo(ee.prototype,{pipe:function(t){this[0]=this.root=t,U(this.target).gets.push(this),this.path===""&&this[0].done(this)},listen:function(t){if(this.children[t])return;let e=(this.path?this.path+".":"")+t;(this.children[t]=new ee(this.target[t],e)).pipe(this.root)},unlisten:function(t){!this.children[t]||(this.children[t].stop(),delete this.children[t])},push:function(t){te.path=(this.path?this.path+".":"")+t,te.value=this.target[t],this.root[0].push(te)},stop:function(){C(U(this.target).gets,this),Jo(this.children).forEach(zo),this.path===""&&O(this[0]),this.status="stopped"}});function ne(t){let e=x(t);return e?new c(new ee(e,"")):y}function Qo(t){let e=t[0];return/^\w/.test(e)}function oe(t={},e,n,o){let r=Object.entries(t).filter(Qo),i=r.map(M(0)),s=r.map(M(1));return o?new Function(...i,"return ("+e+") => {"+(n||"")+"}").apply(o,s):new Function(...i,"return function("+e+"){"+(n||"")+"}").apply(null,s)}var I=">";var re="";var ie={};function se(t,e,n,o,r=""){let i=`
`+(o?re+"const { "+o+` } = data;
`:"")+re+"return this.compose`"+t+"`;\n",s=i;if(ie[s])return ie[s];if(!1)try{}catch(a){}return ie[s]=oe(e,n,i)}var Ko=/\s*(\([\w,\s]*\))/,Yo=/function(?:\s+\w+)?\s*(\([\w,\s]*\))/,ze=d(de,{boolean:j,function:t=>t.prototype?(t.name||"function")+(Yo.exec(t.toString())||[])[1]:(Ko.exec(t.toString())||[])[1]+" ⇒ {…}",number:t=>Number.isNaN(t)?"":Number.isFinite(t)?t:t<0?"-∞":"∞",string:j,symbol:t=>t.toString(),undefined:t=>"",object:d(t=>t&&t.constructor.name,{Array:t=>t.map(ze).join(""),RegExp:t=>"/"+t.source+"/",Stream:()=>"",null:()=>"",default:t=>JSON.stringify(t,null,2)}),default:JSON.stringify}),k=ze;var ot=[],Zo=Promise.resolve(ot),St;function tr(t){var e,n;let o,r=-1;for(;t[++r]!==void 0;)o=t[r].update();St=void 0,t.length=0}function Qe(t){return St||(St=Zo.then(tr)),ot.push(t),t.status="cued",St}function Lt(t){if(t.status!=="cued"||!ot.length)return;let e=ot.indexOf(t);e>0&&ot.splice(e,1),t.status="idle"}var Ze=Object.assign,er=Object.keys,tn=Object.values;function nr(t){t.stop()}function or(t){t.stopped=!0}function en(t){let e;for(e in t)t[e].stop(),delete t[e]}function Ke(t){!t||(t.forEach(or),t.length=0)}function Ye(t){!t||(t.forEach(nr),t.length=0)}function rr(t,e){return t[t.length]=e,t.length+=1,t}var Dt={};function ir(t,e){if(t&&t.length<e.path.length&&e.path.startsWith(t)&&delete Dt[t],!(e.path in tn))return Dt[e.path]=e.value,e.path}function kt(t,e,n,o,r,i=!1){if(r&&typeof r=="object"){let s=D(r);if(s.then){let a=t.promises||(t.promises=[]);n[o]="",s.then(p=>{if(!s.stopped)return C(a,s),kt(t,e,n,o,p,!0)}),a.push(s);return}if(s.each){let a=t.streams||(t.streams=[]);n[o]="",s.each(p=>kt(t,e,n,o,p,!0)),a.push(s);return}if(pt(s)){let a=t.streams||(t.streams=[]);n[o]="",a.push(s);return}if(typeof s.length=="number"){let a=s.length;for(;a--;)kt(t,e,s,a,s[a])}}n[o]=r,i&&t.render.apply(t,e)}function sr(t,e,n,o){let r;for(r in t)r in e?delete e[r]:(t[r].stop(),delete t[r]);for(r in e)t[r]=nt(r,n,e[r]).each(o)}function f(t,e,n,o,r,i){this.literal=typeof t=="string"?se(t,e,"data, DATA"+(n?", "+er(n).join(", "):""),o,r):t,this.id=++f.count,this.parameters=n,this.message=r,this.params=n?tn(n).reduce(rr,{length:2}):{length:2},this.observers={},this.status="idle",this.cue=s=>{en(this.observers),Qe(this)},this.consume=i}Ze(f.prototype,{push:function(t){if(this.status==="rendering")throw new Error("Renderer is rendering, cannot .push() data");if(this.status==="stopped")throw new Error("Renderer is stopped, cannot .push() data");t=x(t),this.data!==t&&(this.data=t,this.cue())},getParameters:function(){let t=this.params;return t[0]=this.data,t[1]=D(this.data),t},update:function(){let t=this.data,e=this.observers;Ke(this.promises),Ye(this.streams),this.status="rendering",Dt={};let n=ne(t);n.reduce(ir);let o;if(!1)try{}catch(r){}else o=this.literal.apply(this,this.getParameters());return n.stop(),o.values=Dt,sr(e,o.values,t,this.cue),this.status=this.status==="rendering"?"idle":this.status,this},compose:function(t){let e=0;for(;t[++e]!==void 0;)kt(this,arguments,arguments,e,arguments[e]);return this.render.apply(this,arguments),this},render:function(t){let e=0,n=t[e];for(;t[++e]!==void 0;)n+=k(arguments[e])+t[e];return this.consume(n),this},stop:function(){return Lt(this),en(this.observers),Ke(this.promises),Ye(this.streams),this.status="stopped",c.prototype.stop.apply(this),--f.count,this},done:c.prototype.done});Ze(f,{count:0});var nn=t=>t.reduce((e,n)=>n===""||n===void 0?e:e+n);function ar(t,e,n){return t&&typeof t=="object"?t.find?e+nn(t.map(k)):e+k(t):e+k(t)}function rt(t){let e=t[0];return nn(e.map((n,o)=>o<=t.length?ar(t[o+1],n,k):n===""?void 0:n))}var it={"accept-charset":"acceptCharset",accesskey:"accessKey",cellpadding:"cellPadding",cellspacing:"cellSpacing",codebase:"codeBase",colspan:"colSpan",datetime:"dateTime",for:"htmlFor",form:null,formaction:"formAction",formenctype:"formEnctype",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",href:null,httpequiv:"httpEquiv",longdesc:"longDesc",maxlength:"maxLength",minlength:"minLength",nohref:"noHref",noresize:"noResize",noshade:"noShade",nowrap:"noWrap",novalidate:"noValidate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",tfoot:"tFoot",thead:"tHead",usemap:"useMap",valign:"vAlign",valuetype:"valueType",viewbox:null,viewBox:null,cx:null,cy:null,r:null};var on=Object.assign;function ur(t,e,n){let o=e in it?it[e]:e;return o&&o in t&&t[o]!==n?(t[o]=n,1):n===t.getAttribute(e)?0:(t.setAttribute(e,n),1)}function Rt(t,e,n,o,r,i,s,a){f.call(this,t,L,on({},a,{element:r}),e,s),this.template=n,this.path=o,this.node=r,this.name=i}on(Rt.prototype,f.prototype,{render:function(){let t=rt(arguments);return this.mutations=ur(this.node,this.name,t),this}});function st(t){return t=Array.from(t),t[0]=!!t[0].join(" ").trim().split(/\s+/).map(Boolean).reduce(H),!!t.map(Boolean).reduce(H)}var rn=Object.assign;function cr(t,e,n){let o=it[e]||e;if(o in t){if(!!n===t[o])return 0;t[o]=!!n}else n?t.setAttribute(e,e):t.removeAttribute(e);return 1}function Pt(t,e,n,o,r,i,s,a){f.call(this,t,L,rn({},a,{element:r}),e,s),this.template=n,this.path=o,this.node=r,this.name=i,r.removeAttribute(i)}rn(Pt.prototype,f.prototype,{render:function(t){let e=st(arguments);return this.mutations=cr(this.node,this.name,e),this}});var V={changeEvent:"dom-update"};var sn=Object.assign;function pr(t){return""+t}function lr(t,e,n){let o=typeof e=="boolean"?e:n?t.type==="checkbox"&&e&&e.map?e.map(pr).includes(t.value):e+""===t.value:!!e;return o===t.checked?0:(t.checked=o,V.changeEvent&&yt(V.changeEvent,t),1)}function jt(t,e,n,o,r,i,s,a){f.call(this,t,L,sn({},a,{element:r}),e,s),this.template=n,this.path=o,this.node=r,this.name="checked",this.hasValue=K(r.getAttribute("value")),r.removeAttribute("checked")}sn(jt.prototype,f.prototype,{render:function(t){let e=st(arguments);return this.mutations=lr(this.node,e,this.hasValue),this}});var fr=Array.prototype,an=Object.assign,hr=[],mr=d((t,e)=>e,{class:t=>t.classList});function dr(t,e,n,o){let r=e.length;for(;r--;)n.includes(e[r])&&e.splice(r,1);return e.length&&(t.remove.apply(t,e),++o),n.length&&(t.add.apply(t,n),++o),o}function Bt(t,e,n,o,r,i,s,a){f.call(this,t,L,an({},a,{element:r}),e,s),this.template=n,this.path=o,this.node=r,this.name=i,this.list=mr(r,i),this.tokens=hr,this.renders=0,r.setAttribute(i,"")}an(Bt.prototype,f.prototype,{render:function(t){let e=0;if(++this.renders===1){let o=t.join(" ").trim();o&&(this.list.add.apply(this.list,o.split(/\s+/)),++e)}let n=fr.slice.call(arguments,1).map(k).join(" ").trim().split(/\s+/).filter(o=>!!o);return this.mutations=dr(this.list,this.tokens,n,e),this.tokens=n,this}});function At(t){let e=t[0],n=0,o=e[n];for(;e[++n]!==void 0;)o+=t[n]+e[n];return Number(o)}var un=Object.assign,gr={number:"number",range:"number"};function wr(t,e){if(e===null)throw new Error("VALUE");return t.value=e,1}function br(t,e){if(document.activeElement===t)return 0;let n=gr[t.type];if(e=n===void 0||typeof e===n?e:null,e===t.value||e+""===t.value)return 0;let o=wr(t,e);return V.changeEvent&&yt(V.changeEvent,t),o}var yr=d((t,e)=>e,{number:At,range:At,default:rt});function Mt(t,e,n,o,r,i,s,a){f.call(this,t,L,un({},a,{element:r}),e,s),this.template=n,this.path=o,this.node=r,this.name="value"}un(Mt.prototype,f.prototype,{render:function(){let t=yr(arguments,this.node.type);return this.mutations=br(this.node,t),this}});var cn=A(function(e){return wt(e).then(n=>({id:e,content:R("fragment",n)}))});function ae(t,e,n){let o=new B(t,n);return o.push(e),o}function pn(t,e,n){let o=new B(t,n);return e.each(r=>o.push(r)),o.done(e),o}function Nt(t,e,n){let o=D(e);if(/^#/.test(t)){let s=z(t),a=typeof o=="string"?J(o):o&&o.then?o:null;return a?a.then(p=>ae(s,p,n)):o&&o.each?pn(s,o,n):ae(s,o||{},n)}let r=cn(t),i=typeof o=="string"?J(o):(o&&o.then,o);return o&&o.each?r.then(s=>pn(s,e,n)):Promise.all([r,i]).then(([s,a])=>ae(s,a,n))}function at(t,e){let n=e,o=0;for(;n&&n!==t;){let r=n.previousSibling;n.remove(),n=r,++o}return t.remove(),++o,o}var ln=b;var hn=Object.assign;function ue(t){t&&typeof t=="object"&&t.stop&&t.stop()}function xr(t){return t&&typeof t=="object"?t instanceof Node||t instanceof B?t:k(t):k(t)}function mn(t,e){let n=t[t.length];return typeof e=="string"&&typeof n=="string"?t[t.length]=n+e:t.push(e),t}function dn(t,e){return Array.isArray(e)?e.reduce(dn,t):mn(t,xr(e))}function fn(t,e){return t.nodeValue!==e?(t.nodeValue=e,1):0}function gn(t){return typeof t=="string"?t:t.content?gn(t.content):t}function Er(t,e,n,o){let r=0;t.nextSibling&&e.previousSibling!==t&&(r+=at(t.nextSibling,e.previousSibling)),r+=fn(t,n[0]),r+=fn(e,n[n.length-1]);let i=n.map(gn).slice(1,n.length-1);return i.length&&(t.after.apply(t,i),r+=n.length),r}function $(t,e,n,o,r,i,s,a){f.call(this,t,L,hn({},a,{element:o.includes(I)?r.parentNode:a.element,include:(p,w)=>w===void 0?h=>Nt(p,h,a):Nt(p,w,a),print:(...p)=>ln(this,...p)}),e,s),this.template=n,this.path=o,this.node=r,this.first=r,this.last=document.createTextNode(""),this.first.after(this.last),this.contents=[]}hn($.prototype,f.prototype,{push:function(){return this.contents.forEach(ue),this.contents.length=0,f.prototype.push.apply(this,arguments)},update:function(){return this.contents.forEach(ue),this.contents.length=0,f.prototype.update.call(this)},render:function(t){let e=0;for(this.contents.length=0,this.contents.push(t[e]);t[++e]!==void 0;)dn(this.contents,arguments[e]),mn(this.contents,t[e]);return this.mutations=Er(this.first,this.last,this.contents,this.status),this},stop:function(){return this.contents.forEach(ue),this.contents.length=0,f.prototype.stop.apply(this)}});var vr=/\$\{/;function ut(t){return t&&vr.test(t)}var wn=document.createElement("textarea");function ct(t){return wn.innerHTML=t,wn.value}var g=(t,e,n,o,r,i,s)=>new Pt(o,i,e,n,t.ownerElement,t.localName,s,r),Tr=d(M("localName"),{async:g,autofocus:g,autoplay:g,controls:g,defer:g,disabled:g,formnovalidate:g,hidden:g,ismap:g,itemscope:g,loop:g,multiple:g,muted:g,nomodule:g,novalidate:g,open:g,readonly:g,required:g,reversed:g,selected:g,checked:(t,e,n,o,r,i,s)=>new jt(o,i,e,n,t.ownerElement,null,s,r),class:(t,e,n,o,r,i,s)=>new Bt(o,i,e,n,t.ownerElement,"class",s,r),datetime:function(e,n,o,r,i,s,a){},"inner-content":(t,e,n,o,r,i,s)=>{let a=t.ownerElement;return a.removeAttribute(t.localName),new $(ct(o),i,e,n,a,"innerHTML",s,r)},value:(t,e,n,o,r,i,s)=>new Mt(o,i,e,n,t.ownerElement,null,s,r),default:(t,e,n,o,r,i,s)=>new Rt(o,i,e,n,t.ownerElement,t.localName,s,r)});function ce(t,e,n,o,r,i){let s=e.value;if(!ut(s))return;let a=!1;t.push(Tr(e,n,o,s,r,i,a))}var Or=Object.assign;function xn(t,e,n,o,r,i){let s=e.childNodes;if(s){let a=-1;for(;s[++a];)En(t,s[a],n,o?o+I+a:""+a,r,i)}return t}function bn(t,e,n,o,r,i){let s=Array.from(e.attributes);for(var a=-1,p;p=s[++a];)ce(t,p,n,o,r,i)}var yn=d((t,e)=>e.tagName.toLowerCase(),{defs:b,script:(t,e,n,o,r,i)=>(bn(t,e,n,o,r,i),t),template:b,default:(t,e,n,o,r,i)=>(bn(t,e,n,o,r,i),xn(t,e,n,o,Or({},r,{element:e}),i),t)}),En=d((t,e)=>$t(e),{comment:b,element:yn,fragment:xn,text:(t,e,n,o,r,i)=>{let s=e.nodeValue;if(ut(s)){let a=ct(s),p=!1;t.push(new $(a,i,n,o,e,null,p,r))}return t},doctype:b,document:(t,e,n,o,r,i)=>(yn(t,e.documentElement,n,o,r,i),t),default:()=>{throw new Error("Node not compileable")}}),vn=En;var Sr=Object.assign,Lr=Object.keys,Tn={};function kr(t,e){return/^[a-zA-Z]/.test(e)?t:t.childNodes[e]}function Dr(t,e){let n=t&&t.split(I);return t?n.reduce(kr,e):e}function On(t){if(!Vt(t))return!1;let e=t.nodeValue;return/^\s*/.exec(e)[0].length===e.length}function Rr(t){let e=t.childNodes[0],n=t.childNodes[t.childNodes.length-1];On(e)||t.prepend(document.createTextNode("")),On(n)||t.append(document.createTextNode(""))}function Pr(t){let e=Dr(t.path,this.content),n=new t.constructor(t.literal,"",t.template,t.path,e,t.name,"",this.parameters);return this.done(n),n}function B(t,e){let n=It(t);this.template=t,this.parameters=e;let o=Tn[n];if(o){this.content=o.template.content?o.template.content.cloneNode(!0):o.template.cloneNode(!0),this.first=this.content.childNodes[0],this.last=this.content.childNodes[this.content.childNodes.length-1],this.contents=o.contents.map(Pr,this);return}Tn[n]=this,this.template.content?(Rr(this.template.content),this.content=this.template.content.cloneNode(!0)):this.content=this.template.cloneNode(!0),this.first=this.content.childNodes[0],this.last=this.content.childNodes[this.content.childNodes.length-1];let r=Lr(t.dataset).join(", ");this.contents=vn([],this.content,"#"+t.id,"",e,r),this.contents.forEach(i=>this.done(i))}Sr(B.prototype,{push:function(t){if(this.status==="stopped")throw new Error("Renderer is stopped, cannot .push() data");let e=x(t)||t;this.data!==e&&(this.data=e,this.update())},update:function(){let t=this.data;if(!t){let e=[],n=this.first;for(;n!==this.last;)n=n.nextSibling,e.push(n);return this.content.append.apply(this.content,e),e.length}return this.mutations=0,this.contents.forEach(e=>{e.data=t,this.mutations+=e.update().mutations}),this.content.firstChild&&this.first!==this.content.firstChild&&(this.first.after(this.content),++this.mutations),this},remove:function(){return at(this.first,this.last)},replaceWith:function(){return this.first.before.apply(this.first,arguments),this.remove()},stop:function(){return Lt(this),this.status="stopped",c.prototype.stop.apply(this),this},done:c.prototype.done});var jr=Object.assign,Br=Object.entries;function Ar(t,e){return t[e[0]]=Ne(e[0],e[1]),t}function Ct(t,e,n={},o,r={}){let i=o?Br(o).reduce(Ar,{}):{},s=typeof e=="string"?z(e):e;return W(t,{construct:function(a){let p=l(this),w=p.renderer=new B(s,jr({},r,{body:document.body,element:this,host:this,root:document.documentElement,shadow:a})),h=p.data={};a.append(w.content),n.construct&&n.construct.call(this,a,x(h),p)},connect:function(a){let p=l(this),{renderer:w,data:h}=p,u;for(u in o)u in h||(h[u]=i[u].default);p.data=x(h),n.connect&&n.connect.call(this,a,x(h),p),w.push(h)}},i,null,"")}var Mr=Object.assign,Nr={is:!0,loading:!0};var tp=Promise.resolve();function Cr(t){return!Nr[t.name]}function Ur(t,e){return Cr(e)&&(t[e.name]=e.value),t}var Sn={connect:function(){let t=l(this);if(!t.tag)throw new SyntaxError('<template is="literal-element"> must have an attribute tag="name-of-element"');let e=t.attributes?t.attributes.reduce(Ur,{}):y;t.src?t.src.then(n=>{let o=Mr({},n);delete o.default,Ct(t.tag,this,n.default||{},e,o)}):Ct(t.tag,this,{},e,{})}};var Ln=lt(/^([\w-]+)(?:\s*:\s*(\w+))?\s*;?\s*/,{1:(t,e)=>(t.push({name:e[1]}),t),2:(t,e)=>{let n=Y(t);return n.value=e[2],t},done:(t,e)=>e[0].length<e.input.length?Ln(t,e):t}),kn=Ln;var Dn={tag:{attribute:function(t){let e=l(this);e.tag=t}},attributes:{attribute:function(t){let e=l(this);e.attributes=kn([],t)}},src:{attribute:function(t){let e=l(this);e.src=import(bt(t)).catch(n=>{throw new Error("<"+e.tag+'> not defined, failed to fetch src "'+t+'" '+n.message)})}}};var fp=W('<template is="literal-element">',Sn,Dn,null,"stephen.band/literal/");
