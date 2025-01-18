function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,n)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:g}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",v=_.reactiveElementPolyfillSupport,$=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);n.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[$("elementProperties")]=new Map,w[$("finalized")]=new Map,v?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,x=S.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+O,U=`<${P}>`,j=document,R=()=>j.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,k=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,K=j.createTreeWalker(j,129);function J(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===H?"!--"===l[1]?r=M:void 0!==l[1]?r=k:void 0!==l[2]?(B.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=n??H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?z:'"'===l[3]?L:I):r===L||r===I?r=z:r===M||r===k?r=H:(r=z,n=void 0);const d=r===z&&t[e+1].startsWith("/>")?" ":"";o+=r===H?i+U:c>=0?(s.push(a),i.slice(0,c)+C+i.slice(c)+O+d):i+O+(-2===c?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=Y.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=s.getAttribute(t).split(O),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(O),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],R()),K.nextNode(),a.push({type:2,index:++n});s.append(t[e],R())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(O,t+1));)a.push({type:7,index:n}),t+=O.length-1}n++}}static createElement(t,e){const i=j.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??j).importNode(e,!0);K.currentNode=s;let n=K.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=j,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Y(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(R()),this.O(R()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[i+r],e,r),a===W&&(a=this._$AH[r]),o||=!T(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??q)===W)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const ot=S.litHtmlPolyfillSupport;ot?.(Y,X),(S.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let rt=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(R(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ht=(t=ct,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return dt({...t,state:!0,attribute:!1})}var ut,gt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(gt||(gt={}));var _t=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};let mt=class extends rt{constructor(){super(...arguments),this._isOpen=!1}showDialog(t){this._entities=t.entities,this._isOpen=!0,"off"===this._getState(this._entities.toggle_inclinometer)&&this.hass.callService("homeassistant","turn_on",{entity_id:this._entities.toggle_inclinometer.entity_id})}closeDialog(){this._isOpen=!1}_getState(t){return t?this.hass.states[t.entity_id].state:""}_setOrientation(t){this.hass.callService("select","select_option",{entity_id:this._entities.orientation.entity_id,option:t})}_setCalibration(t){this.hass.callService("button","press",{entity_id:t})}_setValue(t,e){this.hass.callService("number","set_value",{entity_id:t,value:e})}render(){var t,e;if(!this._isOpen)return q;const{orientation:i,calibrate_pitch:s,calibrate_roll:n,reset_pitch_adjustment_angle:o,reset_roll_adjustment_angle:r,pitch_adjustment_angle:a,roll_adjustment_angle:l,adjusted_pitch_angle:c,adjusted_roll_angle:h}=this._entities,d=(null===(e=null===(t=this.hass.states[null==i?void 0:i.entity_id])||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.options)||[];return V`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        scrimClickAction=${!0}
        escapeKeyAction
        hideActions=${!0}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
            icon="mdi:close"
          ></ha-icon-button>
        </ha-dialog-header>

        <ha-select
          class="full-width"
          label="Orientation"
          @closed=${t=>t.stopPropagation()}
          @selected=${t=>this._setOrientation(t.target.value)}
          .value=${this._getState(i)}
        >
          ${d.map((t=>V`<mwc-list-item .value=${t}> ${t} </mwc-list-item>`))}
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
              .value=${this._getState(a)}
              @change=${t=>this._setValue(a.entity_id,t.target.value)}
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
              .value=${this._getState(l)}
              @change=${t=>this._setValue(l.entity_id,t.target.value)}
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
    `}};mt.styles=a`
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

    .full-width {
      width: 100%;
      margin-bottom: 32px;
    }
  `,t([dt({attribute:!1}),e("design:type",Object)],mt.prototype,"hass",void 0),t([dt({attribute:!1}),e("design:type",Object)],mt.prototype,"_entities",void 0),t([dt({attribute:!1}),e("design:type",Object)],mt.prototype,"_isOpen",void 0),mt=t([lt("smartvan-io-inclinometer-dialog")],mt);var ft=Object.freeze({__proto__:null});let vt=class extends rt{constructor(){super(),this.angle="",this.name=""}render(){const t=isNaN(Number(this.angle))?"-":`${Math.abs(Number(this.angle))}°`;return V`
      <div style="flex: 50%; text-align: center;">
        <h1>${t}</h1>
        <p>${this.name}</p>
        <div class="parent">
          <div
            class="indicator ${((t,e=1)=>Math.abs(t)<=e)(Number(this.angle))?"level":""}"
            style="rotate: ${this.angle}deg;"
          ></div>
        </div>
      </div>
    `}};vt.styles=a`
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
  `,t([dt({attribute:!1}),e("design:type",String)],vt.prototype,"angle",void 0),t([dt(),e("design:type",String)],vt.prototype,"name",void 0),vt=t([lt("smartvan-io-inclinometer-indicator"),e("design:paramtypes",[])],vt);let $t=class extends rt{constructor(){super(...arguments),this._possibleDevices=[],this._config={type:"custom:smartvan-io-inclinometer",device:""}}setConfig(t){this._config=Object.assign({},t)}firstUpdated(){var t;this._possibleDevices=Object.values(this.hass.devices).filter((t=>"smartvanio"===t.manufacturer)).filter((t=>"inclinometer"===t.model)),(null===(t=this._config)||void 0===t?void 0:t.device)||1===this._possibleDevices.length&&(console.log(this._possibleDevices[0]),_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{device:this._possibleDevices[0].id})}))}render(){return this.hass&&this._config?V`
      <div class="card-config">
        <ha-select
          class="full-width-select"
          label="Inclinometer"
          @closed=${t=>t.stopPropagation()}
          @selected=${t=>this._setDevice(t.target.value)}
          .value=${this._config.device}
        >
          ${this._possibleDevices.map((t=>V`<mwc-list-item .value=${t.id}>
                ${t.name}
              </mwc-list-item>`))}
        </ha-select>
      </div>
    `:q}_setDevice(t){_t(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{device:this._possibleDevices.find((e=>e.id===t)).id})})}};$t.styles=a`
    .full-width-select {
      width: 100%;
      margin-bottom: 10px;
    }
  `,t([dt({attribute:!1}),e("design:type",Object)],$t.prototype,"hass",void 0),t([dt({attribute:!1}),e("design:type",Array)],$t.prototype,"_possibleDevices",void 0),t([pt(),e("design:type",Object)],$t.prototype,"_config",void 0),$t=t([lt("smartvan-io-inclinometer-editor")],$t);let yt=class extends rt{constructor(){super(...arguments),this.possibleDevices=[],this._pitchState="",this._rollState="",this._isEnabled=!1}static getConfigElement(){return document.createElement("smartvan-io-inclinometer-editor")}updated(){this.config.device&&this.entities&&(this._pitchState=this._getState(this.entities.adjusted_pitch_angle),this._rollState=this._getState(this.entities.adjusted_roll_angle),this._isEnabled="on"===this._getState(this.entities.toggle_inclinometer))}firstUpdated(){this.entities=this._getEntitiesForDevice(this.config.device)}render(){if(!this.config)return V`<ha-card>Loading...</ha-card>`;const t=parseFloat(this._pitchState),e=parseFloat(this._rollState);return V`
      <ha-card>
        <ha-dialog-header>
          <span slot="title">Pitch and Roll</span>
          <ha-icon-button
            slot="actionItems"
            label="Config"
            @click=${()=>this._openConfigDialog()}
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
              .disabled=${!this.config.device}
              class="button ${this._isEnabled?"active":""}"
              @click=${()=>this._toggleEntity(this._isEnabled)}
              >${this._isEnabled?"Enabled":"Disabled"}</ha-control-button
            >
          </div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.device)throw new Error("You need to define a smartvan.io inclinometer");this.config=t}_getState(t){return this.hass.states[t.entity_id].state}_toggleEntity(t){const e=t?"turn_off":"turn_on";this.hass.callService("homeassistant",e,{entity_id:this.entities.toggle_inclinometer.entity_id})}_openConfigDialog(){_t(this,"show-dialog",{dialogTag:"smartvan-io-inclinometer-dialog",dialogImport:()=>Promise.resolve().then((function(){return ft})),hass:this.hass,dialogParams:{config:this.config,entities:this.entities}})}_findEntitiesByDeviceId(t){return this.hass?Object.values(this.hass.entities).filter((e=>e.device_id===t)):[]}_getEntitiesForDevice(t){if(!t)return{};return this._findEntitiesByDeviceId(t).reduce(((t,e)=>{const i=e.name.replace(/ /g,"_").toLowerCase();return Object.assign(Object.assign({},t),{[i]:e})}),{})}getCardSize(){return 3}};yt.styles=a`
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
  `,t([dt({attribute:!1}),e("design:type",Object)],yt.prototype,"hass",void 0),t([dt({attribute:!1}),e("design:type",Object)],yt.prototype,"config",void 0),t([dt({attribute:!1}),e("design:type",Object)],yt.prototype,"entities",void 0),t([dt({attribute:!1}),e("design:type",Array)],yt.prototype,"possibleDevices",void 0),t([pt(),e("design:type",Object)],yt.prototype,"_pitchState",void 0),t([pt(),e("design:type",Object)],yt.prototype,"_rollState",void 0),t([pt(),e("design:type",Boolean)],yt.prototype,"_isEnabled",void 0),yt=t([lt("smartvan-io-inclinometer")],yt),window.customCards&&window.customCards.push({type:"smartvan-io-inclinometer",name:"Smartvan.io inclinometer card",description:"A purpose built card for Smartvan.io inclinometer modules",preview:!0});
//# sourceMappingURL=index.js.map
