function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,r)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,g=globalThis,f=g.trustedTypes,v=f?f.emptyScript:"",_=g.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),r=i.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,E=w.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+P,O=`<${C}>`,k=document,U=()=>k.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,j="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,z=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=V(1),F=V(2),q=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,Z=k.createTreeWalker(k,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===H?"!--"===l[1]?o=T:void 0!==l[1]?o=z:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=r??H,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?D:'"'===l[3]?L:B):o===L||o===B?o=D:o===T||o===z?o=H:(o=D,r=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+O:c>=0?(s.push(a),i.slice(0,c)+N+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=Q.createElement(l,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(N)){const e=c[n++],i=s.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?st:"?"===o[1]?rt:"@"===o[1]?nt:it}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),Z.nextNode(),a.push({type:2,index:++r});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=Z.nextNode(),n++)}return Z.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),M(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Q(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=X(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=X(this,s[i+o],e,o),a===q&&(a=this._$AH[o]),n||=!M(a)||a!==this._$AH[o],a===J?t=J:t!==J&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class nt extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??J)===q)return;const i=this._$AH,s=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(Q,et),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let lt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(U(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pt=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function mt(t){return ut({...t,state:!0,attribute:!1})}let gt=class extends lt{constructor(){super(...arguments),this.angle=0,this.inverted=!1,this.name=""}render(){const t=Number(this.angle),e=isNaN(t)?"—":`${Math.abs(t).toFixed(1)}°`,i=this.inverted?-1*t:t;return W`
      <div class="axis">
        <h1>${e}</h1>
        <p>${this.name}</p>
        <div class="parent">
          <div
            class="indicator ${((t,e=1)=>Math.abs(t)<=e)(t)?"level":""}"
            style="rotate: ${isNaN(i)?0:i}deg;"
          ></div>
        </div>
      </div>
    `}};var ft,vt;gt.styles=a`
    :host {
      display: block;
    }
    .axis {
      text-align: center;
      padding: 8px 0;
    }
    h1 {
      margin: 0 0 4px;
      font-size: 1.6rem;
    }
    p {
      margin: 0 0 12px;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .parent {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      position: relative;
      opacity: 0.85;
    }
    .indicator {
      background-color: var(--primary-text-color);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 8px;
      transition: rotate 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      width: calc(100% - 32px);
      min-width: 50px;
      max-width: 100px;
    }
    .indicator.level {
      background-color: rgb(34, 197, 94);
    }
  `,t([ut({attribute:!1}),e("design:type",Number)],gt.prototype,"angle",void 0),t([ut({attribute:!1}),e("design:type",Boolean)],gt.prototype,"inverted",void 0),t([ut(),e("design:type",String)],gt.prototype,"name",void 0),gt=t([ht("smartvan-io-inclinometer-indicator")],gt),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ft||(ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(vt||(vt={}));var _t=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r};const $t=[{value:"classic",label:"Classic (bar indicator)"},{value:"minimal",label:"Minimal (large digits)"},{value:"horizon",label:"Horizon (aircraft-style)"}];let yt=class extends lt{constructor(){super(...arguments),this._possibleDevices=[],this._config={type:"custom:smartvan-io-inclinometer",device:"",variant:"classic"}}setConfig(t){var e;this._possibleDevices=Object.values((null===(e=this.hass)||void 0===e?void 0:e.devices)||{}).filter((t=>"smartvanio"===t.manufacturer)).filter((t=>"inclinometer"===t.model)),t.device||1!==this._possibleDevices.length||_t(this,"config-changed",{config:Object.assign(Object.assign({},t),{device:this._possibleDevices[0].id})}),this._config=Object.assign({variant:"classic"},t)}render(){var t;return this.hass&&this._config?W`
      <div class="card-config">
        <ha-select
          class="full-width"
          label="Inclinometer"
          @closed=${t=>t.stopPropagation()}
          @selected=${t=>this._setDevice(t.target.value)}
          .value=${this._config.device}
        >
          ${this._possibleDevices.map((t=>W`
              <mwc-list-item .value=${t.id}>${t.name}</mwc-list-item>
            `))}
        </ha-select>

        <ha-select
          class="full-width"
          label="Style"
          @closed=${t=>t.stopPropagation()}
          @selected=${t=>this._setVariant(t.target.value)}
          .value=${null!==(t=this._config.variant)&&void 0!==t?t:"classic"}
        >
          ${$t.map((t=>W`
              <mwc-list-item .value=${t.value}>${t.label}</mwc-list-item>
            `))}
        </ha-select>

        <div class="row">
          <span>Invert pitch direction</span>
          <ha-switch
            .checked=${!!this._config.pitch_inverted}
            @change=${t=>this._setBool("pitch_inverted",t.target.checked)}
          ></ha-switch>
        </div>

        <div class="row">
          <span>Invert roll direction</span>
          <ha-switch
            .checked=${!!this._config.roll_inverted}
            @change=${t=>this._setBool("roll_inverted",t.target.checked)}
          ></ha-switch>
        </div>

        <div class="hint">
          Calibration (orientation, pitch/roll compensation, zero) lives in
          the SmartVan.io add-on — open it from the Home&nbsp;Assistant sidebar.
        </div>
      </div>
    `:J}_setDevice(t){_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{device:t})})}_setVariant(t){_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{variant:t})})}_setBool(t,e){_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{[t]:e})})}};yt.styles=a`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .full-width {
      width: 100%;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .hint {
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
  `,t([ut({attribute:!1}),e("design:type",Object)],yt.prototype,"hass",void 0),t([mt(),e("design:type",Array)],yt.prototype,"_possibleDevices",void 0),t([mt(),e("design:type",Object)],yt.prototype,"_config",void 0),yt=t([ht("smartvan-io-inclinometer-editor")],yt);let bt=class extends lt{constructor(){super(...arguments),this.pitch=NaN,this.roll=NaN}_row(t,e){const i=!isNaN(e)&&Math.abs(e)<=1,s=isNaN(e)?"—":Math.abs(e).toFixed(1);return W`
      <div class="axis ${i?"level":""}">
        <div class="label">${t}</div>
        <div class="value">${s}<span class="unit">°</span></div>
      </div>
    `}render(){return W`
      <div class="grid">
        ${this._row("Pitch",Number(this.pitch))}
        ${this._row("Roll",Number(this.roll))}
      </div>
    `}};bt.styles=a`
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 8px 0;
    }
    .axis {
      text-align: center;
    }
    .label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .value {
      font-size: 3.2rem;
      line-height: 1;
      font-weight: 600;
      margin-top: 6px;
    }
    .unit {
      color: var(--secondary-text-color);
      font-size: 1.6rem;
      margin-left: 2px;
    }
    .level .value {
      color: rgb(34, 197, 94);
    }
  `,t([ut({attribute:!1}),e("design:type",Number)],bt.prototype,"pitch",void 0),t([ut({attribute:!1}),e("design:type",Number)],bt.prototype,"roll",void 0),bt=t([ht("smartvan-io-inclinometer-minimal")],bt);let At=class extends lt{constructor(){super(...arguments),this.pitch=NaN,this.roll=NaN}render(){const t=Number(this.pitch),e=Number(this.roll),i=isNaN(t)?0:t,s=isNaN(e)?0:e,r=Math.max(-50,Math.min(50,2*i)),n=t=>isNaN(t)?"—":`${Math.abs(t).toFixed(1)}°`;return W`
      <div class="wrap">
        <svg class="disk" viewBox="-100 -100 200 200" aria-hidden="true">
          <defs>
            <clipPath id="disk-clip">
              <circle r="95" />
            </clipPath>
          </defs>
          <g transform="rotate(${-s})" clip-path="url(#disk-clip)">
            <g transform="translate(0, ${r})">
              <!-- Sky -->
              <rect x="-200" y="-200" width="400" height="200" fill="#3b82f6" />
              <!-- Ground -->
              <rect x="-200" y="0" width="400" height="200" fill="#92400e" />
              <!-- Horizon line -->
              <line x1="-200" y1="0" x2="200" y2="0" stroke="white" stroke-width="2" />
              ${this._pitchLadder()}
            </g>
          </g>
          <!-- Fixed aircraft reference (centre marker) -->
          <line x1="-30" y1="0" x2="-10" y2="0" stroke="#fbbf24" stroke-width="3" />
          <line x1="10" y1="0" x2="30" y2="0" stroke="#fbbf24" stroke-width="3" />
          <circle r="2" fill="#fbbf24" />
          <!-- Disk outline -->
          <circle r="95" fill="none" stroke="var(--divider-color, #444)" stroke-width="2" />
        </svg>
        <div class="readouts">
          <span>Pitch <strong>${n(i)}</strong></span>
          <span>Roll <strong>${n(s)}</strong></span>
        </div>
      </div>
    `}_pitchLadder(){return[-30,-20,-10,10,20,30].map((t=>F`
        <g transform="translate(0, ${2*t})">
          <line x1="-20" y1="0" x2="20" y2="0" stroke="white" stroke-width="1" opacity="0.6" />
          <text x="-26" y="3" text-anchor="end" font-size="8" fill="white" opacity="0.7">${Math.abs(t)}</text>
          <text x="26" y="3" font-size="8" fill="white" opacity="0.7">${Math.abs(t)}</text>
        </g>
      `))}};At.styles=a`
    .wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
    }
    .disk {
      width: 220px;
      height: 220px;
      max-width: 80vw;
      max-height: 80vw;
    }
    .readouts {
      display: flex;
      gap: 24px;
      font-size: 0.95rem;
      color: var(--secondary-text-color);
    }
    .readouts strong {
      color: var(--primary-text-color);
      font-weight: 600;
    }
  `,t([ut({attribute:!1}),e("design:type",Number)],At.prototype,"pitch",void 0),t([ut({attribute:!1}),e("design:type",Number)],At.prototype,"roll",void 0),At=t([ht("smartvan-io-inclinometer-horizon")],At);let xt=class extends lt{static getConfigElement(){return document.createElement("smartvan-io-inclinometer-editor")}static getStubConfig(){return{device:"",variant:"classic"}}setConfig(t){if(!t.device)throw new Error("You need to pick a SmartVan.io inclinometer device");this.config=Object.assign({variant:"classic"},t)}updated(){var t;if(!(null===(t=this.config)||void 0===t?void 0:t.device)||!this.hass)return;if(this._pitchEntity&&this._rollEntity)return;const e=this._entitiesForDevice(this.config.device);this._pitchEntity=e.find((t=>t.endsWith("_adjusted_pitch_angle"))),this._rollEntity=e.find((t=>t.endsWith("_adjusted_roll_angle")))}render(){var t;if(!this.config)return W`<ha-card>Loading…</ha-card>`;if(!this._pitchEntity||!this._rollEntity)return W`
        <ha-card>
          <div class="placeholder">
            Configure this card in the SmartVan.io add-on, then come back.
          </div>
        </ha-card>
      `;const e=this._readNumber(this._pitchEntity),i=this._readNumber(this._rollEntity),s=null!==(t=this.config.variant)&&void 0!==t?t:"classic";return W`
      <ha-card>
        <div class="header">Pitch and Roll</div>
        ${this._renderVariant(s,e,i)}
      </ha-card>
    `}_renderVariant(t,e,i){switch(t){case"minimal":return W`
          <smartvan-io-inclinometer-minimal
            .pitch=${e}
            .roll=${i}
          ></smartvan-io-inclinometer-minimal>
        `;case"horizon":return W`
          <smartvan-io-inclinometer-horizon
            .pitch=${e}
            .roll=${i}
          ></smartvan-io-inclinometer-horizon>
        `;default:return W`
          <div class="pair">
            <smartvan-io-inclinometer-indicator
              .angle=${e}
              .inverted=${!!this.config.pitch_inverted}
              name="Pitch"
            ></smartvan-io-inclinometer-indicator>
            <smartvan-io-inclinometer-indicator
              .angle=${i}
              .inverted=${!!this.config.roll_inverted}
              name="Roll"
            ></smartvan-io-inclinometer-indicator>
          </div>
        `}}_readNumber(t){var e;const i=null===(e=this.hass.states[t])||void 0===e?void 0:e.state,s=parseFloat(i);return isNaN(s)?NaN:s}_entitiesForDevice(t){var e;return(null===(e=this.hass)||void 0===e?void 0:e.entities)?Object.values(this.hass.entities).filter((e=>e.device_id===t)).map((t=>t.entity_id)):[]}getCardSize(){return 3}};xt.styles=a`
    :host {
      display: block;
    }
    ha-card {
      padding: 12px;
    }
    .header {
      font-weight: 600;
      padding: 4px 4px 12px;
      color: var(--primary-text-color);
    }
    .placeholder {
      padding: 16px;
      color: var(--secondary-text-color);
      text-align: center;
    }
    .pair {
      display: flex;
      gap: 8px;
    }
    .pair > * {
      flex: 1;
      text-align: center;
    }
  `,t([ut({attribute:!1}),e("design:type",Object)],xt.prototype,"hass",void 0),t([ut({attribute:!1}),e("design:type",Object)],xt.prototype,"config",void 0),t([mt(),e("design:type",String)],xt.prototype,"_pitchEntity",void 0),t([mt(),e("design:type",String)],xt.prototype,"_rollEntity",void 0),xt=t([ht("smartvan-io-inclinometer")],xt),window.customCards&&window.customCards.push({type:"smartvan-io-inclinometer",name:"SmartVan.io Inclinometer",description:"Display-only card for SmartVan.io inclinometer modules. Pick a visual style; calibrate in the SmartVan.io add-on.",preview:!0});
//# sourceMappingURL=index.js.map
