function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,n)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const h=window,d=h.trustedTypes,p=d?d.emptyScript:"",u=h.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:v},m="finalized";let $=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;$[m]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");const y=window,b=y.trustedTypes,A=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,x="?"+S,w=`<${x}>`,C=document,P=()=>C.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,j="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,N=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,M=/"/g,D=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===k?"!--"===a[1]?r=R:void 0!==a[1]?r=H:void 0!==a[2]?(D.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=N):void 0!==a[3]&&(r=N):r===N?">"===a[0]?(r=null!=n?n:k,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?N:'"'===a[3]?M:T):r===M||r===T?r=N:r===R||r===H?r=k:(r=N,n=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";o+=r===k?i+w:c>=0?(s.push(l),i.slice(0,c)+E+i.slice(c)+S+d):i+S+(-2===c?(s.push(void 0),e):d)}return[W(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,c]=F(t,e);if(this.el=q.createElement(a,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=V.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(E)||e.startsWith(S)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+E).split(S),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?X:"@"===e[1]?tt:Y})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(D.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),V.nextNode(),l.push({type:2,index:++n});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)l.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){var n,o,r,l;if(e===B)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);V.currentNode=n;let o=V.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Z(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new et(o,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(o=V.nextNode(),r++)}return V.currentNode=C,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),O(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&O(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(W(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new J(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new q(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.k(P()),this.k(P()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=K(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=K(this,s[i+r],e,r),l===B&&(l=this._$AH[r]),o||(o=!O(l)||l!==this._$AH[r]),l===L?t=L:t!==L&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const Q=b?b.emptyScript:"";class X extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class tt extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:L)===B)return;const s=this._$AH,n=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==L&&(s===L||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=y.litHtmlPolyfillSupport;null==it||it(q,Z),(null!==(f=y.litHtmlVersions)&&void 0!==f?f:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,nt;class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Z(e.insertBefore(P(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}ot.finalized=!0,ot._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot}),(null!==(nt=globalThis.litElementVersions)&&void 0!==nt?nt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):at(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ht(t){return ct({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt,pt,ut;null===(dt=window.HTMLSlotElement)||void 0===dt||dt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(pt||(pt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ut||(ut={}));class _t extends ot{constructor(){super(...arguments),this._newConfig=Object.assign({},this.config)}showDialog(t){this._entities=t.entities,"off"===this._getState(this._entities.toggle_inclinometer)&&this.hass.callService("homeassistant","turn_on",{entity_id:this._entities.toggle_inclinometer.entity_id})}firstUpdated(t){}render(){var t,e;if(!this._entities)return z``;const{orientation:i,calibrate_pitch:s,calibrate_roll:n,reset_pitch_adjustment_angle:o,reset_roll_adjustment_angle:r,pitch_adjustment_angle:l,roll_adjustment_angle:a,adjusted_pitch_angle:c,adjusted_roll_angle:h}=this._entities,d=(null===(e=null===(t=this.hass.states[i.entity_id])||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.options)||[];return z`
      <ha-dialog open @closed=${this._closeDialog} hideActions=${!0}>
        <div>
          <h2>Settings</h2>
        </div>

        <ha-select
          class="orientation-select"
          label="Orientation"
          @closed=${t=>t.stopPropagation()}
          @selected=${t=>this._setOrientation(t.target.value)}
          .value=${this._getState(i)}
        >
          ${d.map((t=>z`<mwc-list-item .value=${t}> ${t} </mwc-list-item>`))}
        </ha-select>

        <div class="wrapper">
          <div style="flex: 50%; text-align: center;">
            <smartvan-io-inclinometer-indicator
              class="indicator"
              .angle=${this._getState(c)}
              name="Pitch"
            ></smartvan-io-inclinometer-indicator>
            <ha-textfield
              class="field"
              style="margin-right: 8px;"
              label="Pitch compensation"
              .value=${this._getState(l)}
              @change=${t=>this._setValue(l.entity_id,t.target.value)}
            ></ha-textfield>
            <div class="buttons">
              <mwc-button
                slot="primaryAction"
                @click=${()=>this._setCalibration(o.entity_id)}
              >
                Reset
              </mwc-button>
              <mwc-button
                slot="primaryAction"
                @click=${()=>this._setCalibration(s.entity_id)}
              >
                Calibrate
              </mwc-button>
            </div>
          </div>
          <div style="flex: 50%; text-align: center;">
            <smartvan-io-inclinometer-indicator
              class="indicator"
              .angle=${this._getState(h)}
              name="Roll"
            ></smartvan-io-inclinometer-indicator>

            <ha-textfield
              class="field"
              style="margin-left: 8px;"
              label="Roll compensation"
              .value=${this._getState(a)}
              @change=${t=>this._setValue(a.entity_id,t.target.value)}
            ></ha-textfield>
            <div class="buttons">
              <mwc-button
                slot="primaryAction"
                @click=${()=>this._setCalibration(r.entity_id)}
              >
                Reset
              </mwc-button>
              <mwc-button
                slot="primaryAction"
                @click=${()=>this._setCalibration(n.entity_id)}
              >
                Calibrate
              </mwc-button>
            </div>
          </div>
        </div>
      </ha-dialog>
    `}_closeDialog(){}_getState(t){return this.hass.states[t.entity_id].state}_setOrientation(t){this.hass.callService("select","select_option",{entity_id:this._entities.orientation.entity_id,option:t})}_setCalibration(t){this.hass.callService("button","press",{entity_id:t})}_setValue(t,e){this.hass.callService("number","set_value",{entity_id:t,value:e})}}_t.styles=l`
    @media all and (max-width: 450px), all and (max-height: 500px) {
      /* When in fullscreen dialog should be attached to top */
      ha-dialog {
        --dialog-surface-margin-top: 0px;
      }
    }

    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
    }

    .wrapper {
      display: flex;
    }

    .indicator {
      margin-bottom: 32px;
      display: flex;
    }

    .floor {
      width: 100%;
      display: flex;
      border-bottom: 1px solid white;
      margin-bottom: 24px;
    }

    @media all and (min-width: 600px) and (min-height: 501px) {
      ha-dialog {
        --mdc-dialog-min-width: 580px;
        --mdc-dialog-max-width: 580px;
        --mdc-dialog-max-height: calc(100% - 72px);
      }

      .main-title {
        cursor: default;
      }

      :host([large]) ha-dialog {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .field {
      width: calc(100% - 8px);
    }

    .orientation-select {
      width: 100%;
      margin-bottom: 32px;
    }
  `,t([ct({attribute:!1}),e("design:type",Object)],_t.prototype,"hass",void 0),t([ct({attribute:!1}),e("design:type",Object)],_t.prototype,"_entities",void 0),customElements.define("smartvan-io-inclinometer-dialog",_t);var vt=Object.freeze({__proto__:null});let gt=class extends ot{constructor(){super(),this.angle="",this.name=""}render(){return z`
      <div style="flex: 50%; text-align: center;">
        <h1>${Math.abs(Number(this.angle))}°</h1>
        <p>${this.name}</p>
        <div class="parent">
          <div
            class="indicator ${((t,e=1)=>Math.abs(t)<=e)(Number(this.angle))?"level":""}"
            style="rotate: ${this.angle}deg;"
          ></div>
        </div>
      </div>
    `}};gt.styles=l`
    .wrapper {
      opacity: 0.5;
      display: flex;
    }
    .enabled {
      opacity: 1;
    }
    .parent {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      position: relative;
      opacity: 0.8;
    }
    .indicator {
      background-color: white;
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 8px;
      line-height: 24px;
      position: relative;
      transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      bottom: 0;
      z-index: 10;
      width: calc(100% - 160px);
    }
    .indicator.level {
      background-color: rgb(34, 197, 94);
    }
  `,t([ct({attribute:!1}),e("design:type",String)],gt.prototype,"angle",void 0),t([ct(),e("design:type",String)],gt.prototype,"name",void 0),gt=t([lt("smartvan-io-inclinometer-indicator"),e("design:paramtypes",[])],gt);let mt=class extends ot{constructor(){super(...arguments),this.config={device:""},this._pitchState="",this._rollState="",this._isEnabled=!1}updated(){this.entities&&(this._pitchState=this._getState(this.entities.adjusted_pitch_angle),this._rollState=this._getState(this.entities.adjusted_roll_angle),this._isEnabled="on"===this._getState(this.entities.toggle_inclinometer))}firstUpdated(){this.entities=this._getEntitiesForDevice(this.config.device)}render(){if(!this.config)return z`<ha-card>Loading...</ha-card>`;const t=parseFloat(this._pitchState),e=parseFloat(this._rollState);return z`
      <ha-card>
        <ha-dialog-header>
          <span slot="title">Pitch and Roll</span>
          <ha-icon-button
            slot="actionItems"
            .label=${this.hass.localize("ui.dialogs.more_info_control.settings")}
            @click=${this._openConfigDialog}
          >
            <ha-icon class="icon" icon="mdi:cog"></ha-icon>
          </ha-icon-button>
        </ha-dialog-header>

        <div class="card-content">
          <div class="wrapper ${this._isEnabled?"enabled":""}">
            <div style="flex: 50%; text-align: center;">
              <smartvan-io-inclinometer-indicator
                .angle=${`${t}`}
                name="Pitch"
              ></smartvan-io-inclinometer-indicator>
            </div>
            <div style="flex: 50%; text-align: center;">
              <smartvan-io-inclinometer-indicator
                .angle=${`${e}`}
                name="Roll"
              ></smartvan-io-inclinometer-indicator>
            </div>
          </div>
          <div class="floor"></div>
          <div class="content">
            <ha-control-button
              class="button ${this._isEnabled?"active":""}"
              @click=${()=>this._toggleEntity(this._isEnabled)}
              >${this._isEnabled?"Enabled":"Disabled"}</ha-control-button
            >
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.device)throw new Error("You need to define a smartvan.io inclinometer");this.config=t}_getState(t){return this.hass.states[t.entity_id].state}_toggleEntity(t){const e=t?"turn_off":"turn_on";this.hass.callService("homeassistant",e,{entity_id:this.config.entity_toggle})}_openConfigDialog(){!function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});n.detail=i,t.dispatchEvent(n)}(this,"show-dialog",{dialogTag:"smartvan-io-inclinometer-dialog",dialogImport:()=>Promise.resolve().then((function(){return vt})),hass:this.hass,dialogParams:{config:this.config,entities:this.entities}})}_findDeviceByName(t){return this.hass?Object.values(this.hass.devices).find((e=>`${e.name}`.replace(/\s/,"_").replace(/-/g,"_")===t)):null}_findEntitiesByDeviceId(t){return this.hass?Object.values(this.hass.entities).filter((e=>e.device_id===t)):{}}_getEntitiesForDevice(t){const{id:e}=this._findDeviceByName(t)||{};return this._findEntitiesByDeviceId(e).reduce(((e,i)=>{const s=i.entity_id.replace(`${t}_`,"").split(".")[1];return Object.assign(Object.assign({},e),{[s]:i})}),{})}getCardSize(){return 3}};mt.styles=l`
    .wrapper {
      opacity: 0.5;
      display: flex;
    }
    .enabled {
      opacity: 1;
    }
    .parent {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      position: relative;
      opacity: 0.8;
    }
    .floor {
      width: 100%;
      display: flex;
      border-bottom: 1px solid white;
      margin-bottom: 24px;
    }
    .button {
      width: 100%;
    }
    ha-control-button.active {
      --control-button-icon-color: white;
      --control-button-background-color: var(--success-color);
      --control-button-background-opacity: 0.5;
      --control-button-text-color: white;
    }

    ha-icon.icon {
      margin-top: -9px;
    }
  `,t([ct({attribute:!1}),e("design:type",Object)],mt.prototype,"hass",void 0),t([ct({attribute:!1}),e("design:type",Object)],mt.prototype,"config",void 0),t([ct({attribute:!1}),e("design:type",Object)],mt.prototype,"entities",void 0),t([ht(),e("design:type",Object)],mt.prototype,"_pitchState",void 0),t([ht(),e("design:type",Object)],mt.prototype,"_rollState",void 0),t([ht(),e("design:type",Boolean)],mt.prototype,"_isEnabled",void 0),mt=t([lt("smartvan-io-inclinometer")],mt);
//# sourceMappingURL=inclinometer.js.map
