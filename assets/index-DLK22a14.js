function W_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(t,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Y_="modulepreload",X_=function(t){return"/"+t},Rp={},bu=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=X_(l),l in Rp)return;Rp[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Y_,u||(f.as="script"),f.crossOrigin="",f.href=l,s&&f.setAttribute("nonce",s),document.head.appendChild(f),u)return new Promise((p,h)=>{f.addEventListener("load",p),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return i.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return e().catch(a)})};function Q_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={exports:{}},Su={},Hm={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),G_=Symbol.for("react.portal"),K_=Symbol.for("react.fragment"),Z_=Symbol.for("react.strict_mode"),J_=Symbol.for("react.profiler"),e1=Symbol.for("react.provider"),t1=Symbol.for("react.context"),n1=Symbol.for("react.forward_ref"),r1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),Op=Symbol.iterator;function o1(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Wm={};function no(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||$m}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=no.prototype;function ef(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||$m}var tf=ef.prototype=new Ym;tf.constructor=ef;Vm(tf,no.prototype);tf.isPureReactComponent=!0;var Lp=Array.isArray,Xm=Object.prototype.hasOwnProperty,nf={current:null},Qm={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var r,i={},a=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Xm.call(e,r)&&!Qm.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Rs,type:t,key:a,ref:o,props:i,_owner:nf.current}}function s1(t,e){return{$$typeof:Rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Rs}function l1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l1(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Rs:case G_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wu(o,0):r,Lp(i)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),yl(i,e,n,"",function(u){return u})):i!=null&&(rf(i)&&(i=s1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ap,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lp(t))for(var s=0;s<t.length;s++){a=t[s];var l=r+Wu(a,s);o+=yl(a,e,n,l,i)}else if(l=o1(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=r+Wu(a,s++),o+=yl(a,e,n,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(a){return e.call(n,a,i++)}),r}function u1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ft={current:null},xl={transition:null},c1={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:xl,ReactCurrentOwner:nf};function Km(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=no;te.Fragment=K_;te.Profiler=J_;te.PureComponent=ef;te.StrictMode=Z_;te.Suspense=r1;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;te.act=Km;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vm({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=nf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Xm.call(e,l)&&!Qm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Rs,type:t.type,key:i,ref:a,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:t1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e1,_context:t},t.Consumer=t};te.createElement=Gm;te.createFactory=function(t){var e=Gm.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:n1,render:t}};te.isValidElement=rf;te.lazy=function(t){return{$$typeof:a1,_payload:{_status:-1,_result:t},_init:u1}};te.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};te.unstable_act=Km;te.useCallback=function(t,e){return Ft.current.useCallback(t,e)};te.useContext=function(t){return Ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return Ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return Ft.current.useEffect(t,e)};te.useId=function(){return Ft.current.useId()};te.useImperativeHandle=function(t,e,n){return Ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return Ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return Ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return Ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return Ft.current.useReducer(t,e,n)};te.useRef=function(t){return Ft.current.useRef(t)};te.useState=function(t){return Ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return Ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return Ft.current.useTransition()};te.version="18.3.1";Hm.exports=te;var P=Hm.exports;const af=Q_(P),d1=W_({__proto__:null,default:af},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=P,p1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),m1=Object.prototype.hasOwnProperty,g1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)m1.call(e,r)&&!v1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:p1,type:t,key:a,ref:o,props:i,_owner:g1.current}}Su.Fragment=h1;Su.jsx=Zm;Su.jsxs=Zm;Um.exports=Su;var d=Um.exports,Jm={exports:{}},_n={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,L){var w=z.length;z.push(L);e:for(;0<w;){var U=w-1>>>1,ae=z[U];if(0<i(ae,L))z[U]=L,z[w]=ae,w=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var L=z[0],w=z.pop();if(w!==L){z[0]=w;e:for(var U=0,ae=z.length,pt=ae>>>1;U<pt;){var ue=2*(U+1)-1,Ae=z[ue],xe=ue+1,ve=z[xe];if(0>i(Ae,w))xe<ae&&0>i(ve,Ae)?(z[U]=ve,z[xe]=w,U=xe):(z[U]=Ae,z[ue]=w,U=ue);else if(xe<ae&&0>i(ve,w))z[U]=ve,z[xe]=w,U=xe;else break e}}return L}function i(z,L){var w=z.sortIndex-L.sortIndex;return w!==0?w:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,p=3,h=!1,y=!1,g=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=z)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function x(z){if(g=!1,_(z),!y)if(n(l)!==null)y=!0,G(S);else{var L=n(u);L!==null&&I(x,L.startTime-z)}}function S(z,L){y=!1,g&&(g=!1,v(E),E=-1),h=!0;var w=p;try{for(_(L),f=n(l);f!==null&&(!(f.expirationTime>L)||z&&!F());){var U=f.callback;if(typeof U=="function"){f.callback=null,p=f.priorityLevel;var ae=U(f.expirationTime<=L);L=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&r(l),_(L)}else r(l);f=n(l)}if(f!==null)var pt=!0;else{var ue=n(u);ue!==null&&I(x,ue.startTime-L),pt=!1}return pt}finally{f=null,p=w,h=!1}}var C=!1,b=null,E=-1,N=5,T=-1;function F(){return!(t.unstable_now()-T<N)}function R(){if(b!==null){var z=t.unstable_now();T=z;var L=!0;try{L=b(!0,z)}finally{L?Q():(C=!1,b=null)}}else C=!1}var Q;if(typeof m=="function")Q=function(){m(R)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ne=H.port2;H.port1.onmessage=R,Q=function(){ne.postMessage(null)}}else Q=function(){k(R,0)};function G(z){b=z,C||(C=!0,Q())}function I(z,L){E=k(function(){z(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){y||h||(y=!0,G(S))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var w=p;p=L;try{return z()}finally{p=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var w=p;p=z;try{return L()}finally{p=w}},t.unstable_scheduleCallback=function(z,L,w){var U=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?U+w:U):w=U,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=w+ae,z={id:c++,callback:L,priorityLevel:z,startTime:w,expirationTime:ae,sortIndex:-1},w>U?(z.sortIndex=w,e(u,z),n(l)===null&&z===n(u)&&(g?(v(E),E=-1):g=!0,I(x,w-U))):(z.sortIndex=ae,e(l,z),y||h||(y=!0,G(S))),z},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(z){var L=p;return function(){var w=p;p=L;try{return z.apply(this,arguments)}finally{p=w}}}})(tg);eg.exports=tg;var _1=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y1=P,mn=_1;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,is={};function ta(t,e){Ha(t,e),Ha(t+"Capture",e)}function Ha(t,e){for(is[t]=e,t=0;t<e.length;t++)ng.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,x1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Fp={};function k1(t){return Oc.call(Fp,t)?!0:Oc.call(Dp,t)?!1:x1.test(t)?Fp[t]=!0:(Dp[t]=!0,!1)}function w1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b1(t,e,n,r){if(e===null||typeof e>"u"||w1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(t,e,n,r,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new It(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new It(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new It(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new It(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new It(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new It(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new It(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new It(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new It(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,sf);ft[e]=new It(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,sf);ft[e]=new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,sf);ft[e]=new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new It(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new It(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(b1(e,n,i,r)&&(n=null),r||i===null?k1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hs=Symbol.for("react.element"),ma=Symbol.for("react.portal"),ga=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ig=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Yu;function Eo(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var Xu=!1;function Qu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function S1(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ga:return"Fragment";case ma:return"Portal";case Lc:return"Profiler";case uf:return"StrictMode";case Ac:return"Suspense";case Dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ig:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case cf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case df:return e=t.displayName||null,e!==null?e:Fc(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return Fc(t(e))}catch{}}return null}function C1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(e);case 8:return e===uf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(t){var e=og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $s(t){t._valueTracker||(t._valueTracker=E1(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=og(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lg(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function qc(t,e){lg(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Na(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(To(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function ug(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vs,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function as(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(t){T1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Do[e]=Do[t]})});function fg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Do.hasOwnProperty(t)&&Do[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j1=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(j1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,za=null,Ma=null;function $p(t){if(t=As(t)){if(typeof Yc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Pu(e),Yc(t.stateNode,t.type,e))}}function hg(t){za?Ma?Ma.push(t):Ma=[t]:za=t}function mg(){if(za){var t=za,e=Ma;if(Ma=za=null,$p(t),e)for(t=0;t<e.length;t++)$p(e[t])}}function gg(t,e){return t(e)}function vg(){}var Gu=!1;function _g(t,e,n){if(Gu)return t(e,n);Gu=!0;try{return gg(t,e,n)}finally{Gu=!1,(za!==null||Ma!==null)&&(vg(),mg())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=Pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var Xc=!1;if(br)try{var go={};Object.defineProperty(go,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Xc=!1}function P1(t,e,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Fo=!1,Bl=null,Ul=!1,Qc=null,N1={onError:function(t){Fo=!0,Bl=t}};function z1(t,e,n,r,i,a,o,s,l){Fo=!1,Bl=null,P1.apply(N1,arguments)}function M1(t,e,n,r,i,a,o,s,l){if(z1.apply(this,arguments),Fo){if(Fo){var u=Bl;Fo=!1,Bl=null}else throw Error(M(198));Ul||(Ul=!0,Qc=u)}}function na(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(na(t)!==t)throw Error(M(188))}function R1(t){var e=t.alternate;if(!e){if(e=na(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Vp(i),t;if(a===r)return Vp(i),e;a=a.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function xg(t){return t=R1(t),t!==null?kg(t):null}function kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kg(t);if(e!==null)return e;t=t.sibling}return null}var wg=mn.unstable_scheduleCallback,Wp=mn.unstable_cancelCallback,O1=mn.unstable_shouldYield,L1=mn.unstable_requestPaint,Be=mn.unstable_now,A1=mn.unstable_getCurrentPriorityLevel,pf=mn.unstable_ImmediatePriority,bg=mn.unstable_UserBlockingPriority,Hl=mn.unstable_NormalPriority,D1=mn.unstable_LowPriority,Sg=mn.unstable_IdlePriority,Cu=null,ir=null;function F1(t){if(ir&&typeof ir.onCommitFiberRoot=="function")try{ir.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:B1,I1=Math.log,q1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(I1(t)/q1|0)|0}var Ws=64,Ys=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=jo(s):(a&=o,a!==0&&(r=jo(a)))}else o=n&~i,o!==0?r=jo(o):a!==0&&(r=jo(a));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,a=e&-e,i>=a||i===16&&(a&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Hn(e),i=1<<n,r|=t[n],e&=~i;return r}function U1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Hn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=U1(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Os(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function $1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Hn(n),a=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~a}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,mf,jg,Pg,Ng,Kc=!1,Xs=[],Kr=null,Zr=null,Jr=null,ss=new Map,ls=new Map,Br=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yp(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(e.pointerId)}}function vo(t,e,n,r,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},e!==null&&(e=As(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function W1(t,e,n,r,i){switch(e){case"focusin":return Kr=vo(Kr,t,e,n,r,i),!0;case"dragenter":return Zr=vo(Zr,t,e,n,r,i),!0;case"mouseover":return Jr=vo(Jr,t,e,n,r,i),!0;case"pointerover":var a=i.pointerId;return ss.set(a,vo(ss.get(a)||null,t,e,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ls.set(a,vo(ls.get(a)||null,t,e,n,r,i)),!0}return!1}function zg(t){var e=Ri(t.target);if(e!==null){var n=na(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Ng(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=As(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){kl(t)&&n.delete(e)}function Y1(){Kc=!1,Kr!==null&&kl(Kr)&&(Kr=null),Zr!==null&&kl(Zr)&&(Zr=null),Jr!==null&&kl(Jr)&&(Jr=null),ss.forEach(Xp),ls.forEach(Xp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Y1)))}function us(t){function e(i){return _o(i,t)}if(0<Xs.length){_o(Xs[0],t);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&_o(Kr,t),Zr!==null&&_o(Zr,t),Jr!==null&&_o(Jr,t),ss.forEach(e),ls.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&Br.shift()}var Ra=Pr.ReactCurrentBatchConfig,Vl=!0;function X1(t,e,n,r){var i=fe,a=Ra.transition;Ra.transition=null;try{fe=1,gf(t,e,n,r)}finally{fe=i,Ra.transition=a}}function Q1(t,e,n,r){var i=fe,a=Ra.transition;Ra.transition=null;try{fe=4,gf(t,e,n,r)}finally{fe=i,Ra.transition=a}}function gf(t,e,n,r){if(Vl){var i=Zc(t,e,n,r);if(i===null)sc(t,e,r,Wl,n),Yp(t,r);else if(W1(i,t,e,n,r))r.stopPropagation();else if(Yp(t,r),e&4&&-1<V1.indexOf(t)){for(;i!==null;){var a=As(i);if(a!==null&&Tg(a),a=Zc(t,e,n,r),a===null&&sc(t,e,r,Wl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else sc(t,e,r,null,n)}}var Wl=null;function Zc(t,e,n,r){if(Wl=null,t=ff(r),t=Ri(t),t!==null)if(e=na(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wl=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A1()){case pf:return 1;case bg:return 4;case Hl:case D1:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Hr=null,vf=null,wl=null;function Rg(){if(wl)return wl;var t,e=vf,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,a=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[a-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function Qp(){return!1}function yn(t){function e(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qs:Qp,this.isPropagationStopped=Qp,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=yn(ro),Ls=Ne({},ro,{view:0,detail:0}),G1=yn(Ls),Zu,Ju,yo,Eu=Ne({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Zu=t.screenX-yo.screenX,Ju=t.screenY-yo.screenY):Ju=Zu=0,yo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Gp=yn(Eu),K1=Ne({},Eu,{dataTransfer:0}),Z1=yn(K1),J1=Ne({},Ls,{relatedTarget:0}),ec=yn(J1),ey=Ne({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=yn(ey),ny=Ne({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=yn(ny),iy=Ne({},ro,{data:0}),Kp=yn(iy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function yf(){return ly}var uy=Ne({},Ls,{key:function(t){if(t.key){var e=ay[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cy=yn(uy),dy=Ne({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=yn(dy),fy=Ne({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),py=yn(fy),hy=Ne({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=yn(hy),gy=Ne({},Eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vy=yn(gy),_y=[9,13,27,32],xf=br&&"CompositionEvent"in window,Io=null;br&&"documentMode"in document&&(Io=document.documentMode);var yy=br&&"TextEvent"in window&&!Io,Og=br&&(!xf||Io&&8<Io&&11>=Io),Jp=" ",eh=!1;function Lg(t,e){switch(t){case"keyup":return _y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var va=!1;function xy(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(eh=!0,Jp);case"textInput":return t=e.data,t===Jp&&eh?null:t;default:return null}}function ky(t,e){if(va)return t==="compositionend"||!xf&&Lg(t,e)?(t=Rg(),wl=vf=Hr=null,va=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Og&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function Dg(t,e,n,r){hg(r),e=Yl(e,"onChange"),0<e.length&&(n=new _f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,cs=null;function by(t){Xg(t,0)}function Tu(t){var e=xa(t);if(sg(e))return t}function Sy(t,e){if(t==="change")return e}var Fg=!1;if(br){var tc;if(br){var nc="oninput"in document;if(!nc){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),nc=typeof nh.oninput=="function"}tc=nc}else tc=!1;Fg=tc&&(!document.documentMode||9<document.documentMode)}function rh(){qo&&(qo.detachEvent("onpropertychange",Ig),cs=qo=null)}function Ig(t){if(t.propertyName==="value"&&Tu(cs)){var e=[];Dg(e,cs,t,ff(t)),_g(by,e)}}function Cy(t,e,n){t==="focusin"?(rh(),qo=e,cs=n,qo.attachEvent("onpropertychange",Ig)):t==="focusout"&&rh()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(cs)}function Ty(t,e){if(t==="click")return Tu(e)}function jy(t,e){if(t==="input"||t==="change")return Tu(e)}function Py(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Py;function ds(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oc.call(e,i)||!Vn(t[i],e[i]))return!1}return!0}function ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ah(t,e){var n=ih(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ih(n)}}function qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ny(t){var e=Bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qg(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!t.extend&&a>r&&(i=r,r=a,a=i),i=ah(n,a);var o=ah(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zy=br&&"documentMode"in document&&11>=document.documentMode,_a=null,Jc=null,Bo=null,ed=!1;function oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||_a==null||_a!==ql(r)||(r=_a,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&ds(Bo,r)||(Bo=r,r=Yl(Jc,"onSelect"),0<r.length&&(e=new _f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_a)))}function Gs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ya={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},rc={},Ug={};br&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function ju(t){if(rc[t])return rc[t];if(!ya[t])return t;var e=ya[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ug)return rc[t]=e[n];return t}var Hg=ju("animationend"),$g=ju("animationiteration"),Vg=ju("animationstart"),Wg=ju("transitionend"),Yg=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){Yg.set(t,e),ta(e,[t])}for(var ic=0;ic<sh.length;ic++){var ac=sh[ic],My=ac.toLowerCase(),Ry=ac[0].toUpperCase()+ac.slice(1);mi(My,"on"+Ry)}mi(Hg,"onAnimationEnd");mi($g,"onAnimationIteration");mi(Vg,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(Wg,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function lh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,M1(r,e,void 0,t),t.currentTarget=null}function Xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var a=void 0;if(e)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;lh(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;lh(i,s,u),a=l}}}if(Ul)throw t=Qc,Ul=!1,Qc=null,t}function _e(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var r=t+"__bubble";n.has(r)||(Qg(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),Qg(n,t,r,e)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function fs(t){if(!t[Ks]){t[Ks]=!0,ng.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ks]||(e[Ks]=!0,oc("selectionchange",!1,e))}}function Qg(t,e,n,r){switch(Mg(e)){case 1:var i=X1;break;case 4:i=Q1;break;default:i=gf}n=i.bind(null,e,n,t),i=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function sc(t,e,n,r,i){var a=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Ri(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}_g(function(){var u=a,c=ff(n),f=[];e:{var p=Yg.get(t);if(p!==void 0){var h=_f,y=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":h=cy;break;case"focusin":y="focus",h=ec;break;case"focusout":y="blur",h=ec;break;case"beforeblur":case"afterblur":h=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=py;break;case Hg:case $g:case Vg:h=ty;break;case Wg:h=my;break;case"scroll":h=G1;break;case"wheel":h=vy;break;case"copy":case"cut":case"paste":h=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zp}var g=(e&4)!==0,k=!g&&t==="scroll",v=g?p!==null?p+"Capture":null:p;g=[];for(var m=u,_;m!==null;){_=m;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,v!==null&&(x=os(m,v),x!=null&&g.push(ps(m,x,_)))),k)break;m=m.return}0<g.length&&(p=new h(p,y,null,n,c),f.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==Wc&&(y=n.relatedTarget||n.fromElement)&&(Ri(y)||y[Sr]))break e;if((h||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Ri(y):null,y!==null&&(k=na(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(g=Gp,x="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(g=Zp,x="onPointerLeave",v="onPointerEnter",m="pointer"),k=h==null?p:xa(h),_=y==null?p:xa(y),p=new g(x,m+"leave",h,n,c),p.target=k,p.relatedTarget=_,x=null,Ri(c)===u&&(g=new g(v,m+"enter",y,n,c),g.target=_,g.relatedTarget=k,x=g),k=x,h&&y)t:{for(g=h,v=y,m=0,_=g;_;_=sa(_))m++;for(_=0,x=v;x;x=sa(x))_++;for(;0<m-_;)g=sa(g),m--;for(;0<_-m;)v=sa(v),_--;for(;m--;){if(g===v||v!==null&&g===v.alternate)break t;g=sa(g),v=sa(v)}g=null}else g=null;h!==null&&uh(f,p,h,g,!1),y!==null&&k!==null&&uh(f,k,y,g,!0)}}e:{if(p=u?xa(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var S=Sy;else if(th(p))if(Fg)S=jy;else{S=Ey;var C=Cy}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Ty);if(S&&(S=S(t,u))){Dg(f,S,n,c);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Bc(p,"number",p.value)}switch(C=u?xa(u):window,t){case"focusin":(th(C)||C.contentEditable==="true")&&(_a=C,Jc=u,Bo=null);break;case"focusout":Bo=Jc=_a=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,oh(f,n,c);break;case"selectionchange":if(zy)break;case"keydown":case"keyup":oh(f,n,c)}var b;if(xf)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else va?Lg(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Og&&n.locale!=="ko"&&(va||E!=="onCompositionStart"?E==="onCompositionEnd"&&va&&(b=Rg()):(Hr=c,vf="value"in Hr?Hr.value:Hr.textContent,va=!0)),C=Yl(u,E),0<C.length&&(E=new Kp(E,t,null,n,c),f.push({event:E,listeners:C}),b?E.data=b:(b=Ag(n),b!==null&&(E.data=b)))),(b=yy?xy(t,n):ky(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Kp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}Xg(f,e)})}function ps(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=os(t,n),a!=null&&r.unshift(ps(t,a,i)),a=os(t,e),a!=null&&r.push(ps(t,a,i))),t=t.return}return r}function sa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uh(t,e,n,r,i){for(var a=e._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=os(n,a),l!=null&&o.unshift(ps(n,l,s))):i||(l=os(n,a),l!=null&&o.push(ps(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ly=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(Ly,`
`).replace(Ay,"")}function Zs(t,e,n){if(e=ch(e),ch(t)!==e&&n)throw Error(M(425))}function Xl(){}var td=null,nd=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,Dy=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(Iy)}:id;function Iy(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),er="__reactFiber$"+io,hs="__reactProps$"+io,Sr="__reactContainer$"+io,ad="__reactEvents$"+io,qy="__reactListeners$"+io,By="__reactHandles$"+io;function Ri(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fh(t);t!==null;){if(n=t[er])return n;t=fh(t)}return e}t=n,n=t.parentNode}return null}function As(t){return t=t[er]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Pu(t){return t[hs]||null}var od=[],ka=-1;function gi(t){return{current:t}}function ye(t){0>ka||(t.current=od[ka],od[ka]=null,ka--)}function ge(t,e){ka++,od[ka]=t.current,t.current=e}var ci={},Et=gi(ci),Vt=gi(!1),Yi=ci;function $a(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=e[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function Ql(){ye(Vt),ye(Et)}function ph(t,e,n){if(Et.current!==ci)throw Error(M(168));ge(Et,e),ge(Vt,n)}function Gg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,C1(t)||"Unknown",i));return Ne({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,Yi=Et.current,ge(Et,t),ge(Vt,Vt.current),!0}function hh(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Gg(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,ye(Vt),ye(Et),ge(Et,t)):ye(Vt),ge(Vt,n)}var mr=null,Nu=!1,uc=!1;function Kg(t){mr===null?mr=[t]:mr.push(t)}function Uy(t){Nu=!0,Kg(t)}function vi(){if(!uc&&mr!==null){uc=!0;var t=0,e=fe;try{var n=mr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,Nu=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),wg(pf,vi),i}finally{fe=e,uc=!1}}return null}var wa=[],ba=0,Kl=null,Zl=0,wn=[],bn=0,Xi=null,_r=1,yr="";function Ti(t,e){wa[ba++]=Zl,wa[ba++]=Kl,Kl=t,Zl=e}function Zg(t,e,n){wn[bn++]=_r,wn[bn++]=yr,wn[bn++]=Xi,Xi=t;var r=_r;t=yr;var i=32-Hn(r)-1;r&=~(1<<i),n+=1;var a=32-Hn(e)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-Hn(e)+i|n<<i|r,yr=a+t}else _r=1<<a|n<<i|r,yr=t}function wf(t){t.return!==null&&(Ti(t,1),Zg(t,1,0))}function bf(t){for(;t===Kl;)Kl=wa[--ba],wa[ba]=null,Zl=wa[--ba],wa[ba]=null;for(;t===Xi;)Xi=wn[--bn],wn[bn]=null,yr=wn[--bn],wn[bn]=null,_r=wn[--bn],wn[bn]=null}var pn=null,cn=null,we=!1,Un=null;function Jg(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,cn=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:_r,overflow:yr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,cn=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(we){var e=cn;if(e){var n=e;if(!mh(t,e)){if(sd(t))throw Error(M(418));e=ei(n.nextSibling);var r=pn;e&&mh(t,e)?Jg(r,n):(t.flags=t.flags&-4097|2,we=!1,pn=t)}}else{if(sd(t))throw Error(M(418));t.flags=t.flags&-4097|2,we=!1,pn=t}}}function gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Js(t){if(t!==pn)return!1;if(!we)return gh(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=cn)){if(sd(t))throw e0(),Error(M(418));for(;e;)Jg(t,e),e=ei(e.nextSibling)}if(gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=pn?ei(t.stateNode.nextSibling):null;return!0}function e0(){for(var t=cn;t;)t=ei(t.nextSibling)}function Va(){cn=pn=null,we=!1}function Sf(t){Un===null?Un=[t]:Un.push(t)}var Hy=Pr.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vh(t){var e=t._init;return e(t._payload)}function t0(t){function e(v,m){if(t){var _=v.deletions;_===null?(v.deletions=[m],v.flags|=16):_.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=ii(v,m),v.index=0,v.sibling=null,v}function a(v,m,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<m?(v.flags|=2,m):_):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,m,_,x){return m===null||m.tag!==6?(m=gc(_,v.mode,x),m.return=v,m):(m=i(m,_),m.return=v,m)}function l(v,m,_,x){var S=_.type;return S===ga?c(v,m,_.props.children,x,_.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ir&&vh(S)===m.type)?(x=i(m,_.props),x.ref=xo(v,m,_),x.return=v,x):(x=Nl(_.type,_.key,_.props,null,v.mode,x),x.ref=xo(v,m,_),x.return=v,x)}function u(v,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=vc(_,v.mode,x),m.return=v,m):(m=i(m,_.children||[]),m.return=v,m)}function c(v,m,_,x,S){return m===null||m.tag!==7?(m=Ii(_,v.mode,x,S),m.return=v,m):(m=i(m,_),m.return=v,m)}function f(v,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gc(""+m,v.mode,_),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hs:return _=Nl(m.type,m.key,m.props,null,v.mode,_),_.ref=xo(v,null,m),_.return=v,_;case ma:return m=vc(m,v.mode,_),m.return=v,m;case Ir:var x=m._init;return f(v,x(m._payload),_)}if(To(m)||mo(m))return m=Ii(m,v.mode,_,null),m.return=v,m;el(v,m)}return null}function p(v,m,_,x){var S=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:s(v,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Hs:return _.key===S?l(v,m,_,x):null;case ma:return _.key===S?u(v,m,_,x):null;case Ir:return S=_._init,p(v,m,S(_._payload),x)}if(To(_)||mo(_))return S!==null?null:c(v,m,_,x,null);el(v,_)}return null}function h(v,m,_,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(_)||null,s(m,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hs:return v=v.get(x.key===null?_:x.key)||null,l(m,v,x,S);case ma:return v=v.get(x.key===null?_:x.key)||null,u(m,v,x,S);case Ir:var C=x._init;return h(v,m,_,C(x._payload),S)}if(To(x)||mo(x))return v=v.get(_)||null,c(m,v,x,S,null);el(m,x)}return null}function y(v,m,_,x){for(var S=null,C=null,b=m,E=m=0,N=null;b!==null&&E<_.length;E++){b.index>E?(N=b,b=null):N=b.sibling;var T=p(v,b,_[E],x);if(T===null){b===null&&(b=N);break}t&&b&&T.alternate===null&&e(v,b),m=a(T,m,E),C===null?S=T:C.sibling=T,C=T,b=N}if(E===_.length)return n(v,b),we&&Ti(v,E),S;if(b===null){for(;E<_.length;E++)b=f(v,_[E],x),b!==null&&(m=a(b,m,E),C===null?S=b:C.sibling=b,C=b);return we&&Ti(v,E),S}for(b=r(v,b);E<_.length;E++)N=h(b,v,E,_[E],x),N!==null&&(t&&N.alternate!==null&&b.delete(N.key===null?E:N.key),m=a(N,m,E),C===null?S=N:C.sibling=N,C=N);return t&&b.forEach(function(F){return e(v,F)}),we&&Ti(v,E),S}function g(v,m,_,x){var S=mo(_);if(typeof S!="function")throw Error(M(150));if(_=S.call(_),_==null)throw Error(M(151));for(var C=S=null,b=m,E=m=0,N=null,T=_.next();b!==null&&!T.done;E++,T=_.next()){b.index>E?(N=b,b=null):N=b.sibling;var F=p(v,b,T.value,x);if(F===null){b===null&&(b=N);break}t&&b&&F.alternate===null&&e(v,b),m=a(F,m,E),C===null?S=F:C.sibling=F,C=F,b=N}if(T.done)return n(v,b),we&&Ti(v,E),S;if(b===null){for(;!T.done;E++,T=_.next())T=f(v,T.value,x),T!==null&&(m=a(T,m,E),C===null?S=T:C.sibling=T,C=T);return we&&Ti(v,E),S}for(b=r(v,b);!T.done;E++,T=_.next())T=h(b,v,E,T.value,x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?E:T.key),m=a(T,m,E),C===null?S=T:C.sibling=T,C=T);return t&&b.forEach(function(R){return e(v,R)}),we&&Ti(v,E),S}function k(v,m,_,x){if(typeof _=="object"&&_!==null&&_.type===ga&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Hs:e:{for(var S=_.key,C=m;C!==null;){if(C.key===S){if(S=_.type,S===ga){if(C.tag===7){n(v,C.sibling),m=i(C,_.props.children),m.return=v,v=m;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ir&&vh(S)===C.type){n(v,C.sibling),m=i(C,_.props),m.ref=xo(v,C,_),m.return=v,v=m;break e}n(v,C);break}else e(v,C);C=C.sibling}_.type===ga?(m=Ii(_.props.children,v.mode,x,_.key),m.return=v,v=m):(x=Nl(_.type,_.key,_.props,null,v.mode,x),x.ref=xo(v,m,_),x.return=v,v=x)}return o(v);case ma:e:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(v,m.sibling),m=i(m,_.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else e(v,m);m=m.sibling}m=vc(_,v.mode,x),m.return=v,v=m}return o(v);case Ir:return C=_._init,k(v,m,C(_._payload),x)}if(To(_))return y(v,m,_,x);if(mo(_))return g(v,m,_,x);el(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,_),m.return=v,v=m):(n(v,m),m=gc(_,v.mode,x),m.return=v,v=m),o(v)):n(v,m)}return k}var Wa=t0(!0),n0=t0(!1),Jl=gi(null),eu=null,Sa=null,Cf=null;function Ef(){Cf=Sa=eu=null}function Tf(t){var e=Jl.current;ye(Jl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oa(t,e){eu=t,Cf=Sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},Sa===null){if(eu===null)throw Error(M(308));Sa=t,eu.dependencies={lanes:0,firstContext:t}}else Sa=Sa.next=t;return e}var Oi=null;function jf(t){Oi===null?Oi=[t]:Oi.push(t)}function r0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,jf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}function _h(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=e:a=a.next=e}else i=a=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var i=t.updateQueue;qr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,h=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=t,g=s;switch(p=e,h=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(h,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,p=typeof y=="function"?y.call(h,f,p):y,p==null)break e;f=Ne({},f,p);break e;case 2:qr=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=f):c=c.next=h,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===null&&(i.shared.lanes=0);Gi|=o,t.lanes=o,t.memoizedState=f}}function yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ds={},ar=gi(Ds),ms=gi(Ds),gs=gi(Ds);function Li(t){if(t===Ds)throw Error(M(174));return t}function Nf(t,e){switch(ge(gs,e),ge(ms,t),ge(ar,Ds),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}ye(ar),ge(ar,e)}function Ya(){ye(ar),ye(ms),ye(gs)}function a0(t){Li(gs.current);var e=Li(ar.current),n=Hc(e,t.type);e!==n&&(ge(ms,t),ge(ar,n))}function zf(t){ms.current===t&&(ye(ar),ye(ms))}var Ee=gi(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Mf(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Cl=Pr.ReactCurrentDispatcher,dc=Pr.ReactCurrentBatchConfig,Qi=0,Pe=null,Ge=null,rt=null,ru=!1,Uo=!1,vs=0,$y=0;function _t(){throw Error(M(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Of(t,e,n,r,i,a){if(Qi=a,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?Xy:Qy,t=n(r,i),Uo){a=0;do{if(Uo=!1,vs=0,25<=a)throw Error(M(301));a+=1,rt=Ge=null,e.updateQueue=null,Cl.current=Gy,t=n(r,i)}while(Uo)}if(Cl.current=iu,e=Ge!==null&&Ge.next!==null,Qi=0,rt=Ge=Pe=null,ru=!1,e)throw Error(M(300));return t}function Lf(){var t=vs!==0;return vs=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Pe.memoizedState=rt=t:rt=rt.next=t,rt}function Mn(){if(Ge===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=rt===null?Pe.memoizedState:rt.next;if(e!==null)rt=e,Ge=t;else{if(t===null)throw Error(M(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},rt===null?Pe.memoizedState=rt=t:rt=rt.next=t}return rt}function _s(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Pe.lanes|=c,Gi|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Vn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do a=i.lane,Pe.lanes|=a,Gi|=a,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Mn(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,a=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);Vn(a,e.memoizedState)||($t=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,r]}function o0(){}function s0(t,e){var n=Pe,r=Mn(),i=e(),a=!Vn(r.memoizedState,i);if(a&&(r.memoizedState=i,$t=!0),r=r.queue,Af(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||a||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,ys(9,u0.bind(null,n,r,i,e),void 0,null),it===null)throw Error(M(349));Qi&30||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&f0(t)}function c0(t,e,n){return n(function(){d0(e)&&f0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function f0(t){var e=Cr(t,1);e!==null&&$n(e,t,1,-1)}function xh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:t},e.queue=t,t=t.dispatch=Yy.bind(null,Pe,t),[e.memoizedState,t]}function ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p0(){return Mn().memoizedState}function El(t,e,n,r){var i=Kn();Pe.flags|=t,i.memoizedState=ys(1|e,n,void 0,r===void 0?null:r)}function zu(t,e,n,r){var i=Mn();r=r===void 0?null:r;var a=void 0;if(Ge!==null){var o=Ge.memoizedState;if(a=o.destroy,r!==null&&Rf(r,o.deps)){i.memoizedState=ys(e,n,a,r);return}}Pe.flags|=t,i.memoizedState=ys(1|e,n,a,r)}function kh(t,e){return El(8390656,8,t,e)}function Af(t,e){return zu(2048,8,t,e)}function h0(t,e){return zu(4,2,t,e)}function m0(t,e){return zu(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v0(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,g0.bind(null,e,t),n)}function Df(){}function _0(t,e){var n=Mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=Mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return Qi&21?(Vn(n,e)||(n=Cg(),Pe.lanes|=n,Gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function Vy(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=dc.transition;dc.transition={};try{t(!1),e()}finally{fe=n,dc.transition=r}}function k0(){return Mn().memoizedState}function Wy(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w0(t))b0(e,n);else if(n=r0(t,e,n,r),n!==null){var i=Dt();$n(n,t,r,i),S0(n,e,r)}}function Yy(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w0(t))b0(e,i);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Vn(s,o)){var l=e.interleaved;l===null?(i.next=i,jf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=r0(t,e,i,r),n!==null&&(i=Dt(),$n(n,t,r,i),S0(n,e,r))}}function w0(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function b0(t,e){Uo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}var iu={readContext:zn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Xy={readContext:zn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Wy.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:xh,useDebugValue:Df,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=xh(!1),e=t[0];return t=Vy.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Kn();if(we){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),it===null)throw Error(M(349));Qi&30||l0(r,e,n)}i.memoizedState=n;var a={value:n,getSnapshot:e};return i.queue=a,kh(c0.bind(null,r,a,t),[t]),r.flags|=2048,ys(9,u0.bind(null,r,a,n,e),void 0,null),n},useId:function(){var t=Kn(),e=it.identifierPrefix;if(we){var n=yr,r=_r;n=(r&~(1<<32-Hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$y++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:zn,useCallback:_0,useContext:zn,useEffect:Af,useImperativeHandle:v0,useInsertionEffect:h0,useLayoutEffect:m0,useMemo:y0,useReducer:fc,useRef:p0,useState:function(){return fc(_s)},useDebugValue:Df,useDeferredValue:function(t){var e=Mn();return x0(e,Ge.memoizedState,t)},useTransition:function(){var t=fc(_s)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:s0,useId:k0,unstable_isNewReconciler:!1},Gy={readContext:zn,useCallback:_0,useContext:zn,useEffect:Af,useImperativeHandle:v0,useInsertionEffect:h0,useLayoutEffect:m0,useMemo:y0,useReducer:pc,useRef:p0,useState:function(){return pc(_s)},useDebugValue:Df,useDeferredValue:function(t){var e=Mn();return Ge===null?e.memoizedState=t:x0(e,Ge.memoizedState,t)},useTransition:function(){var t=pc(_s)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:s0,useId:k0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?na(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=ri(t),a=kr(r,i);a.payload=e,n!=null&&(a.callback=n),e=ti(t,a,i),e!==null&&($n(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=ri(t),a=kr(r,i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=ti(t,a,i),e!==null&&($n(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=ri(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&($n(e,t,r,n),Sl(e,t,r))}};function wh(t,e,n,r,i,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,a):!0}function C0(t,e,n){var r=!1,i=ci,a=e.contextType;return typeof a=="object"&&a!==null?a=zn(a):(i=Wt(e)?Yi:Et.current,r=e.contextTypes,a=(r=r!=null)?$a(t,i):ci),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=a),e}function bh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pf(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=zn(a):(a=Wt(e)?Yi:Et.current,i.context=$a(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(cd(t,e,a,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mu.enqueueReplaceState(i,i.state,null),tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xa(t,e){try{var n="",r=e;do n+=S1(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,wd=r),fd(t,e)},n}function T0(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fd(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ky;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dx.bind(null,t,e,n),e.then(t,t))}function Ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Eh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var Zy=Pr.ReactCurrentOwner,$t=!1;function Rt(t,e,n,r){e.child=t===null?n0(e,null,n,r):Wa(e,t.child,n,r)}function Th(t,e,n,r,i){n=n.render;var a=e.ref;return Oa(e,i),r=Of(t,e,n,r,a,i),n=Lf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(we&&n&&wf(e),e.flags|=1,Rt(t,e,r,i),e.child)}function jh(t,e,n,r,i){if(t===null){var a=n.type;return typeof a=="function"&&!Vf(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,j0(t,e,a,r,i)):(t=Nl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ii(a,r),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,r,i){if(t!==null){var a=t.memoizedProps;if(ds(a,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=a,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Er(t,e,i)}return pd(t,e,n,r,i)}function P0(t,e,n){var r=e.pendingProps,i=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ea,rn),rn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ea,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(Ea,rn),rn|=r}else a!==null?(r=a.baseLanes|n,e.memoizedState=null):r=n,ge(Ea,rn),rn|=r;return Rt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,r,i){var a=Wt(n)?Yi:Et.current;return a=$a(e,a),Oa(e,i),n=Of(t,e,n,r,a,i),r=Lf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(we&&r&&wf(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Ph(t,e,n,r,i){if(Wt(n)){var a=!0;Gl(e)}else a=!1;if(Oa(e,i),e.stateNode===null)Tl(t,e),C0(e,n,r),dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=Wt(n)?Yi:Et.current,u=$a(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&bh(e,o,r,u),qr=!1;var p=e.memoizedState;o.state=p,tu(e,r,o,i),l=e.memoizedState,s!==r||p!==l||Vt.current||qr?(typeof c=="function"&&(cd(e,n,c,r),l=e.memoizedState),(s=qr||wh(e,n,s,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i0(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:qn(e.type,s),o.props=u,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=Wt(n)?Yi:Et.current,l=$a(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&bh(e,o,r,l),qr=!1,p=e.memoizedState,o.state=p,tu(e,r,o,i);var y=e.memoizedState;s!==f||p!==y||Vt.current||qr?(typeof h=="function"&&(cd(e,n,h,r),y=e.memoizedState),(u=qr||wh(e,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return hd(t,e,n,r,a,i)}function hd(t,e,n,r,i,a){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hh(e,n,!1),Er(t,e,a);r=e.stateNode,Zy.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wa(e,t.child,null,a),e.child=Wa(e,null,s,a)):Rt(t,e,s,a),e.memoizedState=r.state,i&&hh(e,n,!0),e.child}function z0(t){var e=t.stateNode;e.pendingContext?ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ph(t,e.context,!1),Nf(t,e.containerInfo)}function Nh(t,e,n,r,i){return Va(),Sf(i),e.flags|=256,Rt(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M0(t,e,n){var r=e.pendingProps,i=Ee.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ee,i&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,a?(r=e.mode,a=e.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Lu(o,r,0,null),t=Ii(t,r,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=gd(n),e.memoizedState=md,t):Ff(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Jy(t,e,o,r,s,i,n);if(a){a=r.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=ii(s,a):(a=Ii(a,o,n,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=t.child.memoizedState,o=o===null?gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=md,r}return a=t.child,t=a.sibling,r=ii(a,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ff(t,e){return e=Lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Sf(r),Wa(e,t.child,null,n),t=Ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jy(t,e,n,r,i,a,o){if(n)return e.flags&256?(e.flags&=-257,r=hc(Error(M(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=r.fallback,i=e.mode,r=Lu({mode:"visible",children:r.children},i,0,null),a=Ii(a,i,o,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,e.mode&1&&Wa(e,t.child,null,o),e.child.memoizedState=gd(o),e.memoizedState=md,a);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(M(419)),r=hc(a,r,void 0),tl(t,e,o,r)}if(s=(o&t.childLanes)!==0,$t||s){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Cr(t,i),$n(r,t,i,-1))}return $f(),r=hc(Error(M(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fx.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,cn=ei(i.nextSibling),pn=e,we=!0,Un=null,t!==null&&(wn[bn++]=_r,wn[bn++]=yr,wn[bn++]=Xi,_r=t.id,yr=t.overflow,Xi=e),e=Ff(e,r.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ud(t.return,e,n)}function mc(t,e,n,r,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function R0(t,e,n){var r=e.pendingProps,i=r.revealOrder,a=r.tail;if(Rt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mc(e,!1,i,n,a);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mc(e,!0,n,null,a);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ex(t,e,n){switch(e.tag){case 3:z0(e),Va();break;case 5:a0(e);break;case 1:Wt(e.type)&&Gl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?M0(t,e,n):(ge(Ee,Ee.current&1),t=Er(t,e,n),t!==null?t.sibling:null);ge(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,P0(t,e,n)}return Er(t,e,n)}var O0,vd,L0,A0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};L0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(ar.current);var a=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),a=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),a=[];break;case"textarea":i=Uc(t,i),r=Uc(t,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}$c(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(is.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(is.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};A0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ko(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tx(t,e,n){var r=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Wt(e.type)&&Ql(),yt(e),null;case 3:return r=e.stateNode,Ya(),ye(Vt),ye(Et),Mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Cd(Un),Un=null))),vd(t,e),yt(e),null;case 5:zf(e);var i=Li(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)L0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return yt(e),null}if(t=Li(ar.current),Js(e)){r=e.stateNode,n=e.type;var a=e.memoizedProps;switch(r[er]=e,r[hs]=a,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)_e(Po[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":qp(r,a),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},_e("invalid",r);break;case"textarea":Up(r,a),_e("invalid",r)}$c(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Zs(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Zs(r.textContent,s,t),i=["children",""+s]):is.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":$s(r),Bp(r,a,!0);break;case"textarea":$s(r),Hp(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[hs]=r,O0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vc(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)_e(Po[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":qp(t,r),i=Ic(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Up(t,r),i=Uc(t,r),_e("invalid",t);break;default:i=r}$c(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?pg(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&as(t,l):typeof l=="number"&&as(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(is.hasOwnProperty(a)?l!=null&&a==="onScroll"&&_e("scroll",t):l!=null&&lf(t,a,l,o))}switch(n){case"input":$s(t),Bp(t,r,!1);break;case"textarea":$s(t),Hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?Na(t,!!r.multiple,a,!1):r.defaultValue!=null&&Na(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Li(gs.current),Li(ar.current),Js(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(a=r.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zs(r.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return yt(e),null;case 13:if(ye(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&cn!==null&&e.mode&1&&!(e.flags&128))e0(),Va(),e.flags|=98560,a=!1;else if(a=Js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(M(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[er]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),a=!1}else Un!==null&&(Cd(Un),Un=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Ze===0&&(Ze=3):$f())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ya(),vd(t,e),t===null&&fs(e.stateNode.containerInfo),yt(e),null;case 10:return Tf(e.type._context),yt(e),null;case 17:return Wt(e.type)&&Ql(),yt(e),null;case 19:if(ye(Ee),a=e.memoizedState,a===null)return yt(e),null;if(r=(e.flags&128)!==0,o=a.rendering,o===null)if(r)ko(a,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,ko(a,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)a=n,t=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ee,Ee.current&1|2),e.child}t=t.sibling}a.tail!==null&&Be()>Qa&&(e.flags|=128,r=!0,ko(a,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!we)return yt(e),null}else 2*Be()-a.renderingStartTime>Qa&&n!==1073741824&&(e.flags|=128,r=!0,ko(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Be(),e.sibling=null,n=Ee.current,ge(Ee,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rn&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function nx(t,e){switch(bf(e),e.tag){case 1:return Wt(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ya(),ye(Vt),ye(Et),Mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zf(e),null;case 13:if(ye(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Va()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ee),null;case 4:return Ya(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var nl=!1,wt=!1,rx=typeof WeakSet=="function"?WeakSet:Set,A=null;function Ca(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function _d(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Mh=!1;function ix(t,e){if(td=Vl,t=Bg(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=t,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===t)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Vl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,k=y.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?g:qn(e.type,g),k);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(x){Re(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return y=Mh,Mh=!1,y}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&_d(e,n,a)}i=i.next}while(i!==r)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[hs],delete e[ad],delete e[qy],delete e[By])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F0(t){return t.tag===5||t.tag===3||t.tag===4}function Rh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}var lt=null,Bn=!1;function Dr(t,e,n){for(n=n.child;n!==null;)I0(t,e,n),n=n.sibling}function I0(t,e,n){if(ir&&typeof ir.onCommitFiberUnmount=="function")try{ir.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:wt||Ca(n,e);case 6:var r=lt,i=Bn;lt=null,Dr(t,e,n),lt=r,Bn=i,lt!==null&&(Bn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(Bn?(t=lt,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),us(t)):lc(lt,n.stateNode));break;case 4:r=lt,i=Bn,lt=n.stateNode.containerInfo,Bn=!0,Dr(t,e,n),lt=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_d(n,e,o),i=i.next}while(i!==r)}Dr(t,e,n);break;case 1:if(!wt&&(Ca(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Re(n,e,s)}Dr(t,e,n);break;case 21:Dr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Dr(t,e,n),wt=r):Dr(t,e,n);break;default:Dr(t,e,n)}}function Oh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rx),e.forEach(function(r){var i=px.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:lt=s.stateNode,Bn=!1;break e;case 3:lt=s.stateNode.containerInfo,Bn=!0;break e;case 4:lt=s.stateNode.containerInfo,Bn=!0;break e}s=s.return}if(lt===null)throw Error(M(160));I0(a,o,i),lt=null,Bn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q0(e,t),e=e.sibling}function q0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Gn(t),r&4){try{Ho(3,t,t.return),Ru(3,t)}catch(g){Re(t,t.return,g)}try{Ho(5,t,t.return)}catch(g){Re(t,t.return,g)}}break;case 1:Fn(e,t),Gn(t),r&512&&n!==null&&Ca(n,n.return);break;case 5:if(Fn(e,t),Gn(t),r&512&&n!==null&&Ca(n,n.return),t.flags&32){var i=t.stateNode;try{as(i,"")}catch(g){Re(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&lg(i,a),Vc(s,o);var u=Vc(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?pg(i,f):c==="dangerouslySetInnerHTML"?dg(i,f):c==="children"?as(i,f):lf(i,c,f,u)}switch(s){case"input":qc(i,a);break;case"textarea":ug(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Na(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?Na(i,!!a.multiple,a.defaultValue,!0):Na(i,!!a.multiple,a.multiple?[]:"",!1))}i[hs]=a}catch(g){Re(t,t.return,g)}}break;case 6:if(Fn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=a}catch(g){Re(t,t.return,g)}}break;case 3:if(Fn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(e.containerInfo)}catch(g){Re(t,t.return,g)}break;case 4:Fn(e,t),Gn(t);break;case 13:Fn(e,t),Gn(t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Bf=Be())),r&4&&Oh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,Fn(e,t),wt=u):Fn(e,t),Gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(f=A=c;A!==null;){switch(p=A,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ho(4,p,p.return);break;case 1:Ca(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(g){Re(r,n,g)}}break;case 5:Ca(p,p.return);break;case 22:if(p.memoizedState!==null){Ah(f);continue}}h!==null?(h.return=p,A=h):Ah(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=fg("display",o))}catch(g){Re(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Re(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Gn(t),r&4&&Oh(t);break;case 21:break;default:Fn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(as(i,""),r.flags&=-33);var a=Rh(t);kd(t,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Rh(t);xd(t,s,o);break;default:throw Error(M(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ax(t,e,n){A=t,B0(t)}function B0(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||wt;s=nl;var u=wt;if(nl=o,(wt=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?Dh(i):l!==null?(l.return=o,A=l):Dh(i);for(;a!==null;)A=a,B0(a),a=a.sibling;A=i,nl=s,wt=u}Lh(t)}else i.subtreeFlags&8772&&a!==null?(a.return=i,A=a):Lh(t)}}function Lh(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&yh(e,a,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yh(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&us(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}wt||e.flags&512&&yd(e)}catch(p){Re(e,e.return,p)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Ah(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Dh(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var a=e.return;try{yd(e)}catch(l){Re(e,a,l)}break;case 5:var o=e.return;try{yd(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){A=null;break}var s=e.sibling;if(s!==null){s.return=e.return,A=s;break}A=e.return}}var ox=Math.ceil,au=Pr.ReactCurrentDispatcher,If=Pr.ReactCurrentOwner,Pn=Pr.ReactCurrentBatchConfig,se=0,it=null,Ye=null,ct=0,rn=0,Ea=gi(0),Ze=0,xs=null,Gi=0,Ou=0,qf=0,$o=null,Ut=null,Bf=0,Qa=1/0,pr=null,ou=!1,wd=null,ni=null,rl=!1,$r=null,su=0,Vo=0,bd=null,jl=-1,Pl=0;function Dt(){return se&6?Be():jl!==-1?jl:jl=Be()}function ri(t){return t.mode&1?se&2&&ct!==0?ct&-ct:Hy.transition!==null?(Pl===0&&(Pl=Cg()),Pl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function $n(t,e,n,r){if(50<Vo)throw Vo=0,bd=null,Error(M(185));Os(t,n,r),(!(se&2)||t!==it)&&(t===it&&(!(se&2)&&(Ou|=n),Ze===4&&Ur(t,ct)),Yt(t,r),n===1&&se===0&&!(e.mode&1)&&(Qa=Be()+500,Nu&&vi()))}function Yt(t,e){var n=t.callbackNode;H1(t,e);var r=$l(t,t===it?ct:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?Uy(Fh.bind(null,t)):Kg(Fh.bind(null,t)),Fy(function(){!(se&6)&&vi()}),n=null;else{switch(Eg(r)){case 1:n=pf;break;case 4:n=bg;break;case 16:n=Hl;break;case 536870912:n=Sg;break;default:n=Hl}n=Q0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(jl=-1,Pl=0,se&6)throw Error(M(327));var n=t.callbackNode;if(La()&&t.callbackNode!==n)return null;var r=$l(t,t===it?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var i=se;se|=2;var a=$0();(it!==t||ct!==e)&&(pr=null,Qa=Be()+500,Fi(t,e));do try{ux();break}catch(s){H0(t,s)}while(!0);Ef(),au.current=a,se=i,Ye!==null?e=0:(it=null,ct=0,e=Ze)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=Sd(t,i))),e===1)throw n=xs,Fi(t,0),Ur(t,r),Yt(t,Be()),n;if(e===6)Ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!sx(i)&&(e=lu(t,r),e===2&&(a=Gc(t),a!==0&&(r=a,e=Sd(t,a))),e===1))throw n=xs,Fi(t,0),Ur(t,r),Yt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:ji(t,Ut,pr);break;case 3:if(Ur(t,r),(r&130023424)===r&&(e=Bf+500-Be(),10<e)){if($l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=id(ji.bind(null,t,Ut,pr),e);break}ji(t,Ut,pr);break;case 4:if(Ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Hn(r);a=1<<o,o=e[o],o>i&&(i=o),r&=~a}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ox(r/1960))-r,10<r){t.timeoutHandle=id(ji.bind(null,t,Ut,pr),r);break}ji(t,Ut,pr);break;case 5:ji(t,Ut,pr);break;default:throw Error(M(329))}}}return Yt(t,Be()),t.callbackNode===n?U0.bind(null,t):null}function Sd(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=lu(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Cd(e)),t}function Cd(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Vn(a(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~qf,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),r=1<<n;t[n]=-1,e&=~r}}function Fh(t){if(se&6)throw Error(M(327));La();var e=$l(t,0);if(!(e&1))return Yt(t,Be()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Sd(t,r))}if(n===1)throw n=xs,Fi(t,0),Ur(t,e),Yt(t,Be()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,Ut,pr),Yt(t,Be()),null}function Uf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Qa=Be()+500,Nu&&vi())}}function Ki(t){$r!==null&&$r.tag===0&&!(se&6)&&La();var e=se;se|=1;var n=Pn.transition,r=fe;try{if(Pn.transition=null,fe=1,t)return t()}finally{fe=r,Pn.transition=n,se=e,!(se&6)&&vi()}}function Hf(){rn=Ea.current,ye(Ea)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dy(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:Ya(),ye(Vt),ye(Et),Mf();break;case 5:zf(r);break;case 4:Ya();break;case 13:ye(Ee);break;case 19:ye(Ee);break;case 10:Tf(r.type._context);break;case 22:case 23:Hf()}n=n.return}if(it=t,Ye=t=ii(t.current,null),ct=rn=e,Ze=0,xs=null,qf=Ou=Gi=0,Ut=$o=null,Oi!==null){for(e=0;e<Oi.length;e++)if(n=Oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Oi=null}return t}function H0(t,e){do{var n=Ye;try{if(Ef(),Cl.current=iu,ru){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(Qi=0,rt=Ge=Pe=null,Uo=!1,vs=0,If.current=null,n===null||n.return===null){Ze=1,xs=e,Ye=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=ct,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Ch(o);if(h!==null){h.flags&=-257,Eh(h,o,s,a,e),h.mode&1&&Sh(a,u,e),e=h,l=u;var y=e.updateQueue;if(y===null){var g=new Set;g.add(l),e.updateQueue=g}else y.add(l);break e}else{if(!(e&1)){Sh(a,u,e),$f();break e}l=Error(M(426))}}else if(we&&s.mode&1){var k=Ch(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Eh(k,o,s,a,e),Sf(Xa(l,s));break e}}a=l=Xa(l,s),Ze!==4&&(Ze=2),$o===null?$o=[a]:$o.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var v=E0(a,l,e);_h(a,v);break e;case 1:s=l;var m=a.type,_=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ni===null||!ni.has(_)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=T0(a,s,e);_h(a,x);break e}}a=a.return}while(a!==null)}W0(n)}catch(S){e=S,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function $0(){var t=au.current;return au.current=iu,t===null?iu:t}function $f(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),it===null||!(Gi&268435455)&&!(Ou&268435455)||Ur(it,ct)}function lu(t,e){var n=se;se|=2;var r=$0();(it!==t||ct!==e)&&(pr=null,Fi(t,e));do try{lx();break}catch(i){H0(t,i)}while(!0);if(Ef(),se=n,au.current=r,Ye!==null)throw Error(M(261));return it=null,ct=0,Ze}function lx(){for(;Ye!==null;)V0(Ye)}function ux(){for(;Ye!==null&&!O1();)V0(Ye)}function V0(t){var e=X0(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?W0(t):Ye=e,If.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nx(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ye=null;return}}else if(n=tx(n,e,rn),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);Ze===0&&(Ze=5)}function ji(t,e,n){var r=fe,i=Pn.transition;try{Pn.transition=null,fe=1,cx(t,e,n,r)}finally{Pn.transition=i,fe=r}return null}function cx(t,e,n,r){do La();while($r!==null);if(se&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if($1(t,a),t===it&&(Ye=it=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Q0(Hl,function(){return La(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Pn.transition,Pn.transition=null;var o=fe;fe=1;var s=se;se|=4,If.current=null,ix(t,n),q0(n,t),Ny(nd),Vl=!!td,nd=td=null,t.current=n,ax(n),L1(),se=s,fe=o,Pn.transition=a}else t.current=n;if(rl&&(rl=!1,$r=t,su=i),a=t.pendingLanes,a===0&&(ni=null),F1(n.stateNode),Yt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,t=wd,wd=null,t;return su&1&&t.tag!==0&&La(),a=t.pendingLanes,a&1?t===bd?Vo++:(Vo=0,bd=t):Vo=0,vi(),null}function La(){if($r!==null){var t=Eg(su),e=Pn.transition,n=fe;try{if(Pn.transition=null,fe=16>t?16:t,$r===null)var r=!1;else{if(t=$r,$r=null,su=0,se&6)throw Error(M(331));var i=se;for(se|=4,A=t.current;A!==null;){var a=A,o=a.child;if(A.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:Ho(8,c,a)}var f=c.child;if(f!==null)f.return=c,A=f;else for(;A!==null;){c=A;var p=c.sibling,h=c.return;if(D0(c),c===u){A=null;break}if(p!==null){p.return=h,A=p;break}A=h}}}var y=a.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var k=g.sibling;g.sibling=null,g=k}while(g!==null)}}A=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,A=o;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ho(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}var m=t.current;for(A=m;A!==null;){o=A;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,A=_;else e:for(o=m;A!==null;){if(s=A,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ru(9,s)}}catch(S){Re(s,s.return,S)}if(s===o){A=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,A=x;break e}A=s.return}}if(se=i,vi(),ir&&typeof ir.onPostCommitFiberRoot=="function")try{ir.onPostCommitFiberRoot(Cu,t)}catch{}r=!0}return r}finally{fe=n,Pn.transition=e}}return!1}function Ih(t,e,n){e=Xa(n,e),e=E0(t,e,1),t=ti(t,e,1),e=Dt(),t!==null&&(Os(t,1,e),Yt(t,e))}function Re(t,e,n){if(t.tag===3)Ih(t,t,n);else for(;e!==null;){if(e.tag===3){Ih(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=Xa(n,t),t=T0(e,t,1),e=ti(e,t,1),t=Dt(),e!==null&&(Os(e,1,t),Yt(e,t));break}}e=e.return}}function dx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(ct&n)===n&&(Ze===4||Ze===3&&(ct&130023424)===ct&&500>Be()-Bf?Fi(t,0):qf|=n),Yt(t,e)}function Y0(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=Dt();t=Cr(t,e),t!==null&&(Os(t,e,n),Yt(t,n))}function fx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y0(t,n)}function px(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),Y0(t,n)}var X0;X0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,ex(t,e,n);$t=!!(t.flags&131072)}else $t=!1,we&&e.flags&1048576&&Zg(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tl(t,e),t=e.pendingProps;var i=$a(e,Et.current);Oa(e,n),i=Of(null,e,r,t,i,n);var a=Lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(a=!0,Gl(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pf(e),i.updater=Mu,e.stateNode=i,i._reactInternals=e,dd(e,r,t,n),e=hd(null,e,r,!0,a,n)):(e.tag=0,we&&a&&wf(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mx(r),t=qn(r,t),i){case 0:e=pd(null,e,r,t,n);break e;case 1:e=Ph(null,e,r,t,n);break e;case 11:e=Th(null,e,r,t,n);break e;case 14:e=jh(null,e,r,qn(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Ph(t,e,r,i,n);case 3:e:{if(z0(e),t===null)throw Error(M(387));r=e.pendingProps,a=e.memoizedState,i=a.element,i0(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){i=Xa(Error(M(423)),e),e=Nh(t,e,r,n,i);break e}else if(r!==i){i=Xa(Error(M(424)),e),e=Nh(t,e,r,n,i);break e}else for(cn=ei(e.stateNode.containerInfo.firstChild),pn=e,we=!0,Un=null,n=n0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Va(),r===i){e=Er(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return a0(e),t===null&&ld(e),r=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:null,o=i.children,rd(r,i)?o=null:a!==null&&rd(r,a)&&(e.flags|=32),N0(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&ld(e),null;case 13:return M0(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wa(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Th(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,ge(Jl,r._currentValue),r._currentValue=o,a!==null)if(Vn(a.value,o)){if(a.children===i.children&&!Vt.current){e=Er(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=kr(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ud(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(M(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ud(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oa(e,n),i=zn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),jh(t,e,r,i,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Tl(t,e),e.tag=1,Wt(r)?(t=!0,Gl(e)):t=!1,Oa(e,n),C0(e,r,i),dd(e,r,i,n),hd(null,e,r,!0,t,n);case 19:return R0(t,e,n);case 22:return P0(t,e,n)}throw Error(M(156,e.tag))};function Q0(t,e){return wg(t,e)}function hx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new hx(t,e,n,r)}function Vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mx(t){if(typeof t=="function")return Vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cf)return 11;if(t===df)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,r,i,a){var o=2;if(r=t,typeof t=="function")Vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ga:return Ii(n.children,i,a,e);case uf:o=8,i|=8;break;case Lc:return t=En(12,n,e,i|2),t.elementType=Lc,t.lanes=a,t;case Ac:return t=En(13,n,e,i),t.elementType=Ac,t.lanes=a,t;case Dc:return t=En(19,n,e,i),t.elementType=Dc,t.lanes=a,t;case ag:return Lu(n,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:o=10;break e;case ig:o=9;break e;case cf:o=11;break e;case df:o=14;break e;case Ir:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=En(o,n,e,i),e.elementType=t,e.type=r,e.lanes=a,e}function Ii(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function Lu(t,e,n,r){return t=En(22,t,r,e),t.elementType=ag,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,r,i,a,o,s,l){return t=new gx(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=En(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(a),t}function vx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ma,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return ci;t=t._reactInternals;e:{if(na(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Wt(n))return Gg(t,n,e)}return e}function K0(t,e,n,r,i,a,o,s,l){return t=Wf(n,r,!0,t,i,a,o,s,l),t.context=G0(null),n=t.current,r=Dt(),i=ri(n),a=kr(r,i),a.callback=e??null,ti(n,a,i),t.current.lanes=i,Os(t,i,r),Yt(t,r),t}function Au(t,e,n,r){var i=e.current,a=Dt(),o=ri(i);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(a,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,o),t!==null&&($n(t,i,o,a),Sl(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yf(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function _x(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}Du.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Au(t,e,null,null)};Du.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ki(function(){Au(null,t,null,null)}),e[Sr]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&zg(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bh(){}function yx(t,e,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=uu(o);a.call(u)}}var o=K0(e,r,t,0,null,!1,!1,"",Bh);return t._reactRootContainer=o,t[Sr]=o.current,fs(t.nodeType===8?t.parentNode:t),Ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=uu(l);s.call(u)}}var l=Wf(t,0,!1,null,null,!1,!1,"",Bh);return t._reactRootContainer=l,t[Sr]=l.current,fs(t.nodeType===8?t.parentNode:t),Ki(function(){Au(e,l,n,r)}),l}function Iu(t,e,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=uu(o);s.call(l)}}Au(e,o,t,i)}else o=yx(n,e,t,i,r);return uu(o)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(hf(e,n|1),Yt(e,Be()),!(se&6)&&(Qa=Be()+500,vi()))}break;case 13:Ki(function(){var r=Cr(t,1);if(r!==null){var i=Dt();$n(r,t,1,i)}}),Yf(t,1)}};mf=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Dt();$n(e,t,134217728,n)}Yf(t,134217728)}};jg=function(t){if(t.tag===13){var e=ri(t),n=Cr(t,e);if(n!==null){var r=Dt();$n(n,t,e,r)}Yf(t,e)}};Pg=function(){return fe};Ng=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Yc=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pu(r);if(!i)throw Error(M(90));sg(r),qc(r,i)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&Na(t,!!n.multiple,e,!1)}};gg=Uf;vg=Ki;var xx={usingClientEntryPoint:!1,Events:[As,xa,Pu,hg,mg,Uf]},wo={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kx={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xg(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Cu=il.inject(kx),ir=il}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(M(200));return vx(t,e,null,n)};_n.createRoot=function(t,e){if(!Qf(t))throw Error(M(299));var n=!1,r="",i=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,fs(t.nodeType===8?t.parentNode:t),new Xf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=xg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Ki(t)};_n.hydrate=function(t,e,n){if(!Fu(e))throw Error(M(200));return Iu(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K0(e,null,t,1,n??null,i,!1,a,o),t[Sr]=e.current,fs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Du(e)};_n.render=function(t,e,n){if(!Fu(e))throw Error(M(200));return Iu(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(M(40));return t._reactRootContainer?(Ki(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};_n.unstable_batchedUpdates=Uf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Iu(t,e,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function J0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)}catch(t){console.error(t)}}J0(),Jm.exports=_n;var wx=Jm.exports,ev,Uh=wx;ev=Uh.createRoot,Uh.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ks(){return ks=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ks.apply(null,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const Hh="popstate";function bx(t){t===void 0&&(t={});function e(r,i){let{pathname:a,search:o,hash:s}=r.location;return Ed("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cu(i)}return Cx(e,n,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Sx(){return Math.random().toString(36).substr(2,8)}function $h(t,e){return{usr:t.state,key:t.key,idx:e}}function Ed(t,e,n,r){return n===void 0&&(n=null),ks({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ao(e):e,{state:n,key:e&&e.key||r||Sx()})}function cu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Cx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ks({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){s=Vr.Pop;let k=c(),v=k==null?null:k-u;u=k,l&&l({action:s,location:g.location,delta:v})}function p(k,v){s=Vr.Push;let m=Ed(g.location,k,v);u=c()+1;let _=$h(m,u),x=g.createHref(m);try{o.pushState(_,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}a&&l&&l({action:s,location:g.location,delta:1})}function h(k,v){s=Vr.Replace;let m=Ed(g.location,k,v);u=c();let _=$h(m,u),x=g.createHref(m);o.replaceState(_,"",x),a&&l&&l({action:s,location:g.location,delta:0})}function y(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof k=="string"?k:cu(k);return m=m.replace(/ $/,"%20"),He(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let g={get action(){return s},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hh,f),l=k,()=>{i.removeEventListener(Hh,f),l=null}},createHref(k){return e(i,k)},createURL:y,encodeLocation(k){let v=y(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:h,go(k){return o.go(k)}};return g}var Vh;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vh||(Vh={}));function Ex(t,e,n){return n===void 0&&(n="/"),Tx(t,e,n)}function Tx(t,e,n,r){let i=typeof e=="string"?ao(e):e,a=Kf(i.pathname||"/",n);if(a==null)return null;let o=tv(t);jx(o);let s=null,l=qx(a);for(let u=0;s==null&&u<o.length;++u)s=Dx(o[u],l);return s}function tv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(He(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ai([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(He(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),tv(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:Lx(u,a.index),routesMeta:c})};return t.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of nv(a.path))i(a,o,l)}),e}function nv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=nv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function jx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ax(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Px=/^:[\w-]+$/,Nx=3,zx=2,Mx=1,Rx=10,Ox=-2,Wh=t=>t==="*";function Lx(t,e){let n=t.split("/"),r=n.length;return n.some(Wh)&&(r+=Ox),e&&(r+=zx),n.filter(i=>!Wh(i)).reduce((i,a)=>i+(Px.test(a)?Nx:a===""?Mx:Rx),r)}function Ax(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Dx(t,e,n){let{routesMeta:r}=t,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=a==="/"?e:e.slice(a.length)||"/",f=Fx({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ai([a,f.pathname]),pathnameBase:Vx(ai([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=ai([a,f.pathnameBase]))}return o}function Fx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ix(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:p,isOptional:h}=c;if(p==="*"){let g=s[f]||"";o=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}const y=s[f];return h&&!y?u[p]=void 0:u[p]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:t}}function Ix(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Bx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ux=t=>Bx.test(t);function Hx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ao(t):t,a;if(n)if(Ux(n))a=n;else{if(n.includes("//")){let o=n;n=rv(n),Gf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?a=Yh(n.substring(1),"/"):a=Yh(n,e)}else a=e;return{pathname:a,search:Wx(r),hash:Yx(i)}}function Yh(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $x(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zf(t,e){let n=$x(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Jf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ao(t):(i=ks({},t),He(!i.pathname||!i.pathname.includes("?"),_c("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),_c("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),_c("#","search","hash",i)));let a=t===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?e[f]:"/"}let l=Hx(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rv=t=>t.replace(/\/\/+/g,"/"),ai=t=>rv(t.join("/")),Vx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Wx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Yx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Xx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iv=["post","put","patch","delete"];new Set(iv);const Qx=["get",...iv];new Set(Qx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ws(){return ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ws.apply(null,arguments)}const ep=P.createContext(null),Gx=P.createContext(null),_i=P.createContext(null),qu=P.createContext(null),Nr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),av=P.createContext(null);function Kx(t,e){let{relative:n}=e===void 0?{}:e;oo()||He(!1);let{basename:r,navigator:i}=P.useContext(_i),{hash:a,pathname:o,search:s}=lv(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ai([r,o])),i.createHref({pathname:l,search:s,hash:a})}function oo(){return P.useContext(qu)!=null}function so(){return oo()||He(!1),P.useContext(qu).location}function ov(t){P.useContext(_i).static||P.useLayoutEffect(t)}function sv(){let{isDataRoute:t}=P.useContext(Nr);return t?c2():Zx()}function Zx(){oo()||He(!1);let t=P.useContext(ep),{basename:e,future:n,navigator:r}=P.useContext(_i),{matches:i}=P.useContext(Nr),{pathname:a}=so(),o=JSON.stringify(Zf(i,n.v7_relativeSplatPath)),s=P.useRef(!1);return ov(()=>{s.current=!0}),P.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=Jf(u,JSON.parse(o),a,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ai([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,o,a,t])}function Kb(){let{matches:t}=P.useContext(Nr),e=t[t.length-1];return e?e.params:{}}function lv(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(_i),{matches:i}=P.useContext(Nr),{pathname:a}=so(),o=JSON.stringify(Zf(i,r.v7_relativeSplatPath));return P.useMemo(()=>Jf(t,JSON.parse(o),a,n==="path"),[t,o,a,n])}function Jx(t,e){return e2(t,e)}function e2(t,e,n,r){oo()||He(!1);let{navigator:i}=P.useContext(_i),{matches:a}=P.useContext(Nr),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=so(),c;if(e){var f;let k=typeof e=="string"?ao(e):e;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||He(!1),c=k}else c=u;let p=c.pathname||"/",h=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=Ex(t,{pathname:h}),g=a2(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:ai([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:ai([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return e&&g?P.createElement(qu.Provider,{value:{location:ws({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Vr.Pop}},g):g}function t2(){let t=u2(),e=Xx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const n2=P.createElement(t2,null);class r2 extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Nr.Provider,{value:this.props.routeContext},P.createElement(av.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function i2(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Nr.Provider,{value:e},r)}function a2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||He(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:p,errors:h}=n,y=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,p)=>{let h,y=!1,g=null,k=null;n&&(h=s&&f.route.id?s[f.route.id]:void 0,g=f.route.errorElement||n2,l&&(u<0&&p===0?(d2("route-fallback"),y=!0,k=null):u===p&&(y=!0,k=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,p+1)),m=()=>{let _;return h?_=g:y?_=k:f.route.Component?_=P.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=c,P.createElement(i2,{match:f,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?P.createElement(r2,{location:n.location,revalidation:n.revalidation,component:g,error:h,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var uv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uv||{}),cv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cv||{});function o2(t){let e=P.useContext(ep);return e||He(!1),e}function s2(t){let e=P.useContext(Gx);return e||He(!1),e}function l2(t){let e=P.useContext(Nr);return e||He(!1),e}function dv(t){let e=l2(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function u2(){var t;let e=P.useContext(av),n=s2(),r=dv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function c2(){let{router:t}=o2(uv.UseNavigateStable),e=dv(cv.UseNavigateStable),n=P.useRef(!1);return ov(()=>{n.current=!0}),P.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ws({fromRouteId:e},a)))},[t,e])}const Xh={};function d2(t,e,n){Xh[t]||(Xh[t]=!0)}function f2(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function p2(t){let{to:e,replace:n,state:r,relative:i}=t;oo()||He(!1);let{future:a,static:o}=P.useContext(_i),{matches:s}=P.useContext(Nr),{pathname:l}=so(),u=sv(),c=Jf(e,Zf(s,a.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(c);return P.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function fa(t){He(!1)}function h2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:a,static:o=!1,future:s}=t;oo()&&He(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:a,static:o,future:ws({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=ao(r));let{pathname:c="/",search:f="",hash:p="",state:h=null,key:y="default"}=r,g=P.useMemo(()=>{let k=Kf(c,l);return k==null?null:{location:{pathname:k,search:f,hash:p,state:h,key:y},navigationType:i}},[l,c,f,p,h,y,i]);return g==null?null:P.createElement(_i.Provider,{value:u},P.createElement(qu.Provider,{children:n,value:g}))}function m2(t){let{children:e,location:n}=t;return Jx(Td(e),n)}new Promise(()=>{});function Td(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let a=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Td(r.props.children,a));return}r.type!==fa&&He(!1),!r.props.index||!r.props.children||He(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Td(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jd.apply(null,arguments)}function g2(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function v2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _2(t,e){return t.button===0&&(!e||e==="_self")&&!v2(t)}const y2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],x2="6";try{window.__reactRouterVersion=x2}catch{}const k2="startTransition",Qh=d1[k2];function w2(t){let{basename:e,children:n,future:r,window:i}=t,a=P.useRef();a.current==null&&(a.current=bx({window:i,v5Compat:!0}));let o=a.current,[s,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(f=>{u&&Qh?Qh(()=>l(f)):l(f)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.useEffect(()=>f2(r),[r]),P.createElement(h2,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const b2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pi=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c,viewTransition:f}=e,p=g2(e,y2),{basename:h}=P.useContext(_i),y,g=!1;if(typeof u=="string"&&S2.test(u)&&(y=u,b2))try{let _=new URL(window.location.href),x=u.startsWith("//")?new URL(_.protocol+u):new URL(u),S=Kf(x.pathname,h);x.origin===_.origin&&S!=null?u=S+x.search+x.hash:g=!0}catch{}let k=Kx(u,{relative:i}),v=C2(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,viewTransition:f});function m(_){r&&r(_),_.defaultPrevented||v(_)}return P.createElement("a",jd({},p,{href:y||k,onClick:g||a?r:m,ref:n,target:l}))});var Gh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gh||(Gh={}));var Kh;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kh||(Kh={}));function C2(t,e){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=e===void 0?{}:e,l=sv(),u=so(),c=lv(t,{relative:o});return P.useCallback(f=>{if(_2(f,n)){f.preventDefault();let p=r!==void 0?r:cu(u)===cu(c);l(t,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,l,c,r,i,n,t,a,o,s])}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=P.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...s},l)=>P.createElement("svg",{ref:l,...T2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:fv("lucide",i),...s},[...o.map(([u,c])=>P.createElement(u,c)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(t,e)=>{const n=P.forwardRef(({className:r,...i},a)=>P.createElement(j2,{ref:a,iconNode:e,className:fv(`lucide-${E2(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=W("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=W("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=W("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=W("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=W("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=W("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=W("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=W("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=W("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=W("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=W("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=W("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=W("Contact",[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=W("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=W("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=W("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=W("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=W("IdCard",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=W("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=W("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=W("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=W("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=W("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=W("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=W("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=W("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=W("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=W("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=W("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=W("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=W("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=W("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=W("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=W("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=W("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=W("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=W("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=W("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Pd=[{slug:"punto-de-venta",name:"Punto de Venta",exampleKey:"pos",icon:ip,tagline:"Vendé y facturá en la misma pantalla.",heroH1:{lead:"Cobrá en la hora pico y ",em:"facturá en línea, sin multas."},heroSub:"Cobrá con QR, tarjeta o efectivo y emití la factura en línea, autorizada por Impuestos Nacionales, en el mismo momento. Tu Libro de Ventas se arma solo y cada venta descuenta tu stock.",problems:[{pain:"Una multa de Impuestos te arruina el mes.",fix:"Hatlas emite facturas en línea autorizadas y arma tu Libro de Ventas solo. Cumplís sin tener que pensarlo."},{pain:"En la hora pico, facturar a mano te traba la caja.",fix:"Elegís, cobrás y la factura sale con su QR en segundos. La fila sigue avanzando."},{pain:"Las notas de venta, los recibos y las facturas viven en cuadernos distintos.",fix:"Todo queda en un solo lugar y conectado a tus números, sin volver a cargar nada."}],features:[{icon:H2,title:"Factura en línea autorizada",desc:"Conectado a Impuestos Nacionales. Emití la factura legal en el momento."},{icon:O2,title:"Libro de Ventas automático",desc:"Se arma solo con cada venta. A fin de mes lo descargás y listo."},{icon:hv,title:"Cobrá como te paguen",desc:"QR, tarjeta o efectivo, todo en la misma caja."},{icon:rp,title:"Factura por WhatsApp",desc:"Mandá la factura con su QR al cliente, sin imprimir nada."}],faq:[{q:"¿Está autorizado por Impuestos Nacionales?",a:"Sí. Hatlas emite facturas en línea conectado al sistema de Impuestos Nacionales. Facturás legal desde el día uno, sin complementos ni trámites raros."},{q:"¿Qué pasa si se cae el internet en plena venta?",a:"Seguís cobrando igual. Cuando vuelve la conexión, las facturas se emiten en orden y no se pierde ninguna venta."},{q:"¿Puedo mandar la factura por WhatsApp o correo?",a:"Sí. La factura sale con su QR y se la enviás al cliente por WhatsApp o correo en el momento, sin imprimir nada."}],channels:"Funciona en tu celular, tablet o PC. Y seguís cobrando aunque se caiga el internet.",more:["Notas de venta","Cotizaciones","Devoluciones","Pagos mixtos","Descuentos y promos","Multi-sucursal"],agent:"Hatlas Agent mira tus ventas en vivo y te avisa si baja el ticket promedio, si un producto se vende distinto o si te falta ajustar un precio.",related:["almacen","finanzas","clientes"]},{slug:"almacen",name:"Almacén",exampleKey:"almacen",icon:tp,tagline:"Tu stock, siempre al día.",heroH1:{lead:"Nunca más te quedes ",em:"sin lo que más vendés."},heroSub:"Controlá tu stock por sucursal y por producto, actualizado solo con cada venta y cada compra. Hatlas Agent te avisa antes de que algo se acabe, al ritmo real en que se vende.",problems:[{pain:"Te enterás de que faltó tu producto estrella cuando ya no hay.",fix:"Hatlas Agent calcula cuántos días te quedan y te avisa con tiempo para reponer."},{pain:"No sabés qué hay en cada sucursal sin llamar y preguntar.",fix:"Stock por sucursal y por producto, actualizado al instante, en una sola vista."},{pain:"Tenés plata dormida en productos que no rotan.",fix:"Hatlas te marca lo que está parado para que no vuelvas a comprar de más."}],features:[{icon:nk,title:"Stock por sucursal",desc:"Mirá qué hay y dónde, sin llamar a nadie."},{icon:R2,title:"Aviso antes de agotar",desc:"Calculado sobre tu ritmo de venta real."},{icon:mv,title:"Productos de baja rotación",desc:"Hatlas te marca lo que está parado y te ahorra plata dormida."},{icon:J2,title:"Conectado a la caja",desc:"Cada venta descuenta y cada compra suma, sin recontar."}],faq:[{q:"¿Maneja varias sucursales?",a:"Sí. Ves el stock de cada sucursal por separado y los traspasos entre ellas en Logística. Varias sucursales vienen en el plan Crecimiento."},{q:"¿Cómo sabe cuándo avisar?",a:"Hatlas Agent mira a qué ritmo se vende cada producto y cuánto suele tardar tu proveedor, y te avisa con margen para reponer a tiempo."}],more:["Lotes y vencimientos","Código QR","Kardex por producto","Mínimos por producto","Inventario por sucursal","Conteo cíclico"],agent:"Hatlas Agent calcula a qué ritmo se vende cada producto y te avisa cuántos días te quedan, antes de que te quedes sin lo que más vendés.",related:["punto-de-venta","logistica","finanzas"]},{slug:"logistica",name:"Logística",exampleKey:"logistica",icon:gv,tagline:"Compras y traspasos, sin enredos.",heroH1:{lead:"Mové mercadería entre sucursales ",em:"sin perder el rastro."},heroSub:"Órdenes de compra a proveedores, traspasos entre sucursales y movimientos de stock, todo registrado y conectado a tu almacén. Recibís una compra y el stock se suma solo.",problems:[{pain:"No sabés qué salió de una sucursal y si llegó a la otra.",fix:"Cada traspaso queda registrado: qué se mandó, a dónde y si ya llegó."},{pain:"Las compras a proveedores viven en WhatsApp y papelitos.",fix:"Registrás la orden de compra con sus precios y, al recibirla, el stock se suma solo."},{pain:"Reponés a ojo y terminás con faltantes o sobrantes.",fix:"Logística lee tu almacén, así pedís lo que de verdad hace falta."}],features:[{icon:N2,title:"Traspasos entre sucursales",desc:"De dónde sale, a dónde llega y en qué estado."},{icon:F2,title:"Órdenes de compra",desc:"Registrá el pedido con sus precios y recibí contra stock."},{icon:L2,title:"Proveedores ordenados",desc:"Sus datos y precios de compra, en un solo lugar."},{icon:Q2,title:"Conectado al almacén",desc:"Recibir una compra suma stock al instante."}],faq:[{q:"¿Sirve si tengo una sola sucursal?",a:"Sí. Registrás compras a proveedores y los movimientos de stock quedan ordenados con su historial, aunque no hagas traspasos."},{q:"¿Puedo ver qué está en camino?",a:"Sí. Cada traspaso y cada orden de compra muestran su estado, así sabés qué ya llegó y qué todavía viene en camino."}],more:["Recepción parcial","Precios por proveedor","Historial de movimientos","Estados de envío","Traspasos entre sucursales","Órdenes de compra"],agent:"Hatlas Agent cruza tu stock con tu ritmo de venta y te sugiere qué pedir y a qué proveedor, para que no compres de más ni de menos.",related:["almacen","punto-de-venta","finanzas"]},{slug:"finanzas",name:"Finanzas",exampleKey:"finanzas",icon:np,tagline:"Tus números, sin planillas.",heroH1:{lead:"Sabé si estás ganando o perdiendo ",em:"en tiempo real."},heroSub:"Ingresos, egresos, gastos y cuentas por cobrar en un solo tablero, actualizado solo. Hatlas Agent te muestra dónde ganás, dónde no, y te avisa cuando un costo cambia.",problems:[{pain:"Vendés mucho pero no sabés cuánto te queda.",fix:"Hatlas cruza ventas y costos y te muestra la ganancia real, producto por producto."},{pain:"Los costos suben y te enterás cuando ya perdiste el margen.",fix:"Hatlas Agent te avisa cuando un costo cambia y te dice qué precio conviene ajustar."},{pain:"El cierre de mes es una noche entera de planillas.",fix:"El tablero está siempre al día. Tus reportes salen solos, listos para tu contador."}],features:[{icon:P2,title:"Ganás o perdés, en vivo",desc:"La posición del día sin tener que armar nada."},{icon:K2,title:"Ganancia por producto",desc:"Cuánto te deja de verdad cada cosa que vendés."},{icon:_v,title:"Cuentas por cobrar y pagar",desc:"Quién te debe y a quién le debés, listo para seguimiento."},{icon:Jh,title:"Reportes para tu contador",desc:"El cierre del mes, hecho y listo para descargar."}],faq:[{q:"¿De dónde saca los números?",a:"De tu propia operación: cada venta, cada compra y cada gasto que cargás. No tenés que volver a anotar nada en otro lado."},{q:"¿Reemplaza a mi contador?",a:"No, lo complementa. Hatlas deja todo ordenado y al día para que tu contador trabaje mucho más rápido."}],more:["Conciliación bancaria","Cuentas por cobrar y pagar","Flujo de caja","Centro de costos","Gastos por categoría","Reportes exportables"],agent:"Hatlas Agent vigila tus costos y márgenes, y te avisa cuando algo sube y te empieza a comer la ganancia, con el precio que conviene ajustar.",related:["punto-de-venta","almacen","clientes"]},{slug:"clientes",name:"Clientes",exampleKey:"clientes",icon:du,tagline:"Conocé a quién te compra.",heroH1:{lead:"Sabé quién vuelve ",em:"y quién está por irse."},heroSub:"Hatlas registra quién compra qué y cuándo, y Hatlas Agent te avisa cuando un buen cliente deja de venir, antes de que se vaya para siempre. Y sabés quién te debe.",problems:[{pain:"Un buen cliente deja de venir y nadie lo nota.",fix:"Hatlas Agent detecta al que compraba seguido y se enfrió, y te arma el mensaje para traerlo de vuelta."},{pain:"El fiado se anota en un cuaderno y se termina perdiendo.",fix:"Cada cuenta por cobrar queda registrada: quién te debe, cuánto y hace cuántos días."},{pain:"Las promociones se mandan a ciegas.",fix:"Hatlas arma la lista de a quién escribir y te deja la plantilla de WhatsApp lista."}],features:[{icon:B2,title:"Historial de cada cliente",desc:"Qué compra, cuándo y cada cuánto vuelve."},{icon:vv,title:"Aviso de cliente que se enfría",desc:"Detectado antes de que sea demasiado tarde."},{icon:q2,title:"Fiado y cuentas por cobrar",desc:"Quién te debe, cuánto y hace cuántos días."},{icon:ek,title:"Campañas por WhatsApp",desc:"Lista y plantilla armadas por Hatlas Agent."}],faq:[{q:"¿Tengo que cargar a mis clientes a mano?",a:"No. Se arman solos a partir de tus ventas. Sumás el teléfono u otros datos cuando te sirva."},{q:"¿Cómo me ayuda a recuperar clientes?",a:"Hatlas Agent detecta a los que compraban seguido y dejaron de venir, te arma la lista y te deja lista la campaña por WhatsApp para reactivarlos."}],more:["Historial de compras","Tags y segmentos","Cuentas por cobrar","Recordatorios de pago","Campañas por WhatsApp","Exportar contactos"],agent:"Hatlas Agent detecta al cliente que compraba seguido y se enfrió, arma la lista de a quién escribir y te deja la plantilla de WhatsApp lista.",related:["punto-de-venta","finanzas","almacen"]},{slug:"personal",name:"Personal",exampleKey:"personal",icon:pv,tagline:"Tu equipo, sin papeles.",heroH1:{lead:"Asistencia y planillas ",em:"sin cuadernos ni Excel."},heroSub:"Tu equipo, sus turnos, su asistencia y sus planillas en un solo lugar. Sabés quién está, quién faltó y cuánto pagar a fin de mes.",problems:[{pain:"La asistencia se anota en un cuaderno que nadie revisa.",fix:"Cada entrada y salida queda registrada, con la cobertura del día a la vista."},{pain:"Armar la planilla es un cálculo a mano cada mes.",fix:"Hatlas junta turnos y asistencia y te deja la planilla casi lista."},{pain:"No sabés quién está en turno ahora mismo.",fix:"Una vista del día: quién está, quién llegó tarde y quién está de licencia."}],features:[{icon:I2,title:"Asistencia del día",desc:"Quién está en turno, retrasos y licencias."},{icon:D2,title:"Turnos por sucursal",desc:"Organizá la cobertura sin choques."},{icon:Jh,title:"Planillas más rápidas",desc:"Turnos y asistencia juntos, listos para liquidar."},{icon:du,title:"Todo en un solo lugar",desc:"Sin cuadernos sueltos ni planillas dispersas."}],faq:[{q:"¿Sirve para un equipo chico?",a:"Sí. Desde dos personas ya te ahorra el cuaderno: la asistencia queda ordenada y la planilla sale más rápido."},{q:"¿Reemplaza mi sistema de sueldos?",a:"Te deja la base lista: turnos y asistencia ordenados para liquidar. Lo legal final lo cerrás con tu contador, mucho más rápido."}],more:["Aportes patronales (CNS · AFP)","Aguinaldo e indemnización","Turnos por sucursal","Vacaciones","Contratos","Adelantos y descuentos"],agent:"Hatlas Agent te avisa de vencimientos de contrato, años de antigüedad y cuánto provisionar para aguinaldo, sin que tengas que llevar la cuenta.",related:["punto-de-venta","finanzas","clientes"]}],Zb=t=>Pd.find(e=>e.slug===t),ik={negro:{src:"/hatlas-logo.png",dark:"/hatlas-logo-white.png",w:690,h:202},blanco:{src:"/hatlas-logo-white.png",dark:"/hatlas-logo-white.png",w:694,h:209},rounded:{src:"/hatlas-logo-round.png",dark:"/hatlas-logo-white.png",w:738,h:191}};function yv({height:t=32,variant:e="negro"}){const{src:n,dark:r,w:i,h:a}=ik[e],o=Math.round(i/a*t);return d.jsxs("picture",{children:[d.jsx("source",{srcSet:r,media:"(prefers-color-scheme: dark)"}),d.jsx("img",{src:n,alt:"Hatlas",width:o,height:t,draggable:!1,style:{display:"block",height:t,width:"auto",flexShrink:0}})]})}const em=[{href:"/#pricing",label:"Precios"}];function ak(){const[t,e]=P.useState(!1),[n,r]=P.useState(!1),[i,a]=P.useState(!1),o=P.useRef(null);return P.useEffect(()=>{const s=()=>e(window.scrollY>20);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),P.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]),P.useEffect(()=>{if(!i)return;const s=u=>{o.current&&!o.current.contains(u.target)&&a(!1)},l=u=>{u.key==="Escape"&&a(!1)};return document.addEventListener("mousedown",s),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",l)}},[i]),d.jsxs(d.Fragment,{children:[d.jsx("nav",{className:`nav ${t?"nav--scrolled":""}`,"aria-label":"Navegación principal",children:d.jsxs("div",{className:"nav__inner",children:[d.jsx(Pi,{to:"/",className:"logo","aria-label":"Hatlas, ir al inicio",children:d.jsx(yv,{height:26,variant:"rounded"})}),d.jsxs("div",{className:"nav__links",children:[d.jsxs("div",{className:"nav__prod",ref:o,children:[d.jsxs("button",{type:"button",className:`nav__prod-trigger ${i?"is-open":""}`,"aria-haspopup":"true","aria-expanded":i,onClick:()=>a(s=>!s),children:["Producto",d.jsx(Zh,{size:15,strokeWidth:1.75,className:"nav__prod-chev"})]}),d.jsxs("div",{className:`pmenu ${i?"is-open":""}`,role:"menu",children:[Pd.map(s=>{const l=s.icon;return d.jsxs(Pi,{to:`/modulos/${s.slug}`,className:"pmenu__item",role:"menuitem",onClick:()=>a(!1),children:[d.jsx("span",{className:"pmenu__icon",children:d.jsx(l,{size:16,strokeWidth:1.5})}),d.jsxs("span",{className:"pmenu__text",children:[d.jsx("span",{className:"pmenu__name",children:s.name}),d.jsx("span",{className:"pmenu__tag",children:s.tagline})]})]},s.slug)}),d.jsxs(Pi,{to:"/modulos",className:"pmenu__all",role:"menuitem",onClick:()=>a(!1),children:["Ver todos los módulos",d.jsx(Zh,{size:13,strokeWidth:2,style:{transform:"rotate(-90deg)"}})]})]})]}),d.jsx(Pi,{to:"/hatlas-agent",children:"Hatlas Agent"}),em.map(s=>d.jsx("a",{href:s.href,children:s.label},s.href))]}),d.jsxs("div",{className:"nav__actions",children:[d.jsx("a",{href:"#cta-final",className:"btn-gold",children:"Agendar demo"}),d.jsx("button",{type:"button",className:"nav__hamburger","aria-label":"Abrir menú","aria-expanded":n,onClick:()=>r(!0),children:d.jsx(Y2,{size:18})})]})]})}),d.jsxs("div",{className:`drawer ${n?"drawer--open":""}`,"aria-hidden":!n,children:[d.jsx("button",{type:"button",className:"drawer__close","aria-label":"Cerrar menú",onClick:()=>r(!1),children:d.jsx(rk,{size:18})}),d.jsxs("nav",{className:"drawer__inner","aria-label":"Navegación móvil",children:[d.jsx("span",{className:"drawer__label",children:"Producto"}),Pd.map(s=>d.jsx(Pi,{to:`/modulos/${s.slug}`,className:"drawer__sub",onClick:()=>r(!1),children:s.name},s.slug)),d.jsx(Pi,{to:"/hatlas-agent",onClick:()=>r(!1),children:"Hatlas Agent"}),em.map(s=>d.jsx("a",{href:s.href,onClick:()=>r(!1),children:s.label},s.href)),d.jsx("a",{href:"#cta-final",className:"btn-gold",onClick:()=>r(!1),style:{marginTop:8},children:"Agendar demo"})]})]}),d.jsx("style",{children:`
        .nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 100;
          border-bottom: 1px solid transparent;
          transition: background 300ms var(--ease-out), border-color 300ms var(--ease-out), backdrop-filter 300ms var(--ease-out);
        }
        .nav--scrolled {
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border-bottom-color: var(--hairline);
          box-shadow: inset 0 1px 0 var(--glass-hi), var(--e1);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 32px;
        }
        .nav__links { display: flex; align-items: center; gap: 32px; }
        .nav__links > a {
          color: var(--ink2);
          font-size: 14px;
          text-decoration: none;
          transition: color 200ms var(--ease-out);
        }
        .nav__links > a:hover { color: var(--ink); }
        .nav__actions { display: flex; align-items: center; gap: 12px; }

        /* ---------- Producto dropdown (transitions-dev menu-dropdown 05) ---------- */
        .nav__prod { position: relative; }
        .nav__prod-trigger {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          appearance: none;
          border: none;
          background: transparent;
          padding: 0;
          font-family: var(--font-ui);
          font-size: 14px;
          color: var(--ink2);
          cursor: pointer;
          transition: color 200ms var(--ease-out);
        }
        .nav__prod-trigger:hover,
        .nav__prod-trigger.is-open { color: var(--ink); }
        .nav__prod-chev { transition: transform 200ms var(--ease-out); }
        .nav__prod-trigger.is-open .nav__prod-chev { transform: rotate(180deg); }

        /* Plano SÓLIDO: un menú se LEE y tiene que ocluir lo de atrás
           (regla de dos planos del DS). Elevación --e3, sin backdrop-filter. */
        .pmenu {
          position: absolute;
          top: calc(100% + 14px);
          left: -16px;
          width: 300px;
          padding: 8px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-lg);
          box-shadow: var(--e3);
          display: flex;
          flex-direction: column;
          gap: 2px;
          transform-origin: top left;
          opacity: 0;
          transform: scale(0.97) translateY(-6px);
          pointer-events: none;
          transition: opacity 150ms var(--ease-out), transform 150ms var(--ease-out);
          z-index: 10;
        }
        .pmenu.is-open {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
          transition: opacity 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pmenu__item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: var(--r-sm);
          text-decoration: none;
          transition: background 160ms var(--ease-out);
        }
        .pmenu__item:hover { background: color-mix(in srgb, var(--ink) 5%, transparent); }
        .pmenu__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: var(--r-sm);
          color: var(--ac-on);
        }
        .pmenu__text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .pmenu__all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
          padding: 11px 12px;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: 0 0 10px 10px;
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink3);
          text-decoration: none;
          transition: color 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        .pmenu__all:hover { color: var(--ac-on); background: color-mix(in srgb, var(--ink) 4%, transparent); }
        .pmenu__name { font-size: 14px; font-weight: 600; color: var(--ink); }
        .pmenu__tag {
          font-size: 12px;
          color: var(--ink2);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nav__hamburger {
          display: none;
          width: 44px; height: 44px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-md);
          color: var(--ink);
          cursor: pointer;
          align-items: center; justify-content: center;
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          transition: background 200ms var(--ease-out);
        }
        .nav__hamburger:hover { background: var(--glass-strong); }
        .nav__hamburger:active { transform: scale(0.97); }

        .logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ink);
          text-decoration: none;
        }
        .logo:active { transform: scale(0.98); }

        .drawer {
          position: fixed; inset: 0;
          z-index: 200;
          background: color-mix(in srgb, var(--ink) 34%, transparent);
          -webkit-backdrop-filter: var(--backdrop-filter);
          backdrop-filter: var(--backdrop-filter);
          opacity: 0;
          pointer-events: none;
          transition: opacity 300ms var(--ease-out);
        }
        .drawer--open {
          opacity: 1;
          pointer-events: auto;
        }
        .drawer__inner {
          position: absolute;
          top: 0; bottom: 0; right: 0;
          width: min(360px, 80vw);
          padding: 96px 32px 32px;
          background: var(--glass-strong);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border-left: 1px solid var(--glass-border);
          box-shadow: -30px 0 80px color-mix(in srgb, var(--ink) 20%, transparent);
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 400ms var(--ease-drawer);
        }
        .drawer--open .drawer__inner { transform: translateX(0); }
        .drawer__label {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
          padding: 6px 0;
        }
        .drawer__sub {
          padding: 11px 0 11px 14px;
          font-size: 17px;
          color: var(--ink2);
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          text-decoration: none;
        }
        .drawer__sub:hover { color: var(--ac-on); }
        .drawer__inner > a:not(.drawer__sub):not(.btn-gold) {
          padding: 14px 0;
          font-size: 22px;
          color: var(--ink);
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .drawer__inner > a:not(.drawer__sub):not(.btn-gold):hover { color: var(--ac-on); }
        .drawer__close {
          position: absolute;
          top: 18px; right: 24px;
          width: 44px; height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: var(--r-sm);
          color: var(--ink);
          cursor: pointer;
          z-index: 1;
          transition: background 200ms var(--ease-out), transform 160ms var(--ease-out);
        }
        .drawer__close:hover { background: var(--surface); }
        .drawer__close:active { transform: scale(0.97); }

        @media (max-width: 980px) {
          .nav__links { display: none; }
          .nav__hamburger { display: inline-flex; }
        }
        @media (max-width: 600px) {
          .nav__actions .btn-gold { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pmenu { transition: opacity 120ms linear !important; transform: none !important; }
          .pmenu.is-open { transform: none !important; }
          .drawer, .drawer__inner { transition: opacity 120ms linear !important; }
          .drawer__inner { transform: none !important; }
        }
      `})]})}function hr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bs={duration:.5,overwrite:!1,delay:0},op,dt,be,Tn=1e8,me=1/Tn,Nd=Math.PI*2,ok=Nd/4,sk=0,kv=Math.sqrt,lk=Math.cos,uk=Math.sin,at=function(e){return typeof e=="string"},Le=function(e){return typeof e=="function"},Tr=function(e){return typeof e=="number"},sp=function(e){return typeof e>"u"},sr=function(e){return typeof e=="object"},Xt=function(e){return e!==!1},lp=function(){return typeof window<"u"},al=function(e){return Le(e)||at(e)},wv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,ck=/random\([^)]+\)/g,dk=/,\s*/g,tm=/(?:-?\.?\d|\.)+/gi,bv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sv=/[+-]=-?[.\d]+/,fk=/[^,'"\[\]\s]+/gi,pk=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,Zn,zd,up,gn={},fu={},Cv,Ev=function(e){return(fu=Ga(e,gn))&&Zt},cp=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Ss=function(e,n){return!n&&console.warn(e)},Tv=function(e,n){return e&&(gn[e]=n)&&fu&&(fu[e]=n)||gn},Cs=function(){return 0},hk={suppressEvents:!0,isStart:!0,kill:!1},zl={suppressEvents:!0,kill:!1},mk={suppressEvents:!0},dp={},oi=[],Md={},jv,on={},xc={},nm=30,Ml=[],fp="",pp=function(e){var n=e[0],r,i;if(sr(n)||Le(n)||(e=[e]),!(r=(n._gsap||{}).harness)){for(i=Ml.length;i--&&!Ml[i].targetTest(n););r=Ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gv(e[i],r)))||e.splice(i,1);return e},qi=function(e){return e._gsap||pp(jn(e))[0]._gsap},Pv=function(e,n,r){return(r=e[n])&&Le(r)?e[n]():sp(r)&&e.getAttribute&&e.getAttribute(n)||r},Qt=function(e,n){return(e=e.split(",")).forEach(n)||e},qe=function(e){return Math.round(e*1e5)/1e5||0},Ce=function(e){return Math.round(e*1e7)/1e7||0},Aa=function(e,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),r==="+"?e+i:r==="-"?e-i:r==="*"?e*i:e/i},gk=function(e,n){for(var r=n.length,i=0;e.indexOf(n[i])<0&&++i<r;);return i<r},pu=function(){var e=oi.length,n=oi.slice(0),r,i;for(Md={},oi.length=0,r=0;r<e;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hp=function(e){return!!(e._initted||e._startAt||e.add)},Nv=function(e,n,r,i){oi.length&&!dt&&pu(),e.render(n,r,!!(dt&&n<0&&hp(e))),oi.length&&!dt&&pu()},zv=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(fk).length<2?n:at(e)?e.trim():e},Mv=function(e){return e},vn=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},vk=function(e){return function(n,r){for(var i in r)i in n||i==="duration"&&e||i==="ease"||(n[i]=r[i])}},Ga=function(e,n){for(var r in n)e[r]=n[r];return e},rm=function t(e,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=sr(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},hu=function(e,n){var r={},i;for(i in e)i in n||(r[i]=e[i]);return r},Wo=function(e){var n=e.parent||Te,r=e.keyframes?vk(Ct(e.keyframes)):vn;if(Xt(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},_k=function(e,n){for(var r=e.length,i=r===n.length;i&&r--&&e[r]===n[r];);return r<0},Rv=function(e,n,r,i,a){var o=e[i],s;if(a)for(s=n[a];o&&o[a]>s;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[r],e[r]=n),n._next?n._next._prev=n:e[i]=n,n._prev=o,n.parent=n._dp=e,n},Bu=function(e,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var a=n._prev,o=n._next;a?a._next=o:e[r]===n&&(e[r]=o),o?o._prev=a:e[i]===n&&(e[i]=a),n._next=n._prev=n.parent=null},di=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bi=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},yk=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Rd=function(e,n,r,i){return e._startAt&&(dt?e._startAt.revert(zl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},xk=function t(e){return!e||e._ts&&t(e.parent)},im=function(e){return e._repeat?Ka(e._tTime,e=e.duration()+e._rDelay)*e:0},Ka=function(e,n){var r=Math.floor(e=Ce(e/n));return e&&r===e?r-1:r},mu=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Uu=function(e){return e._end=Ce(e._start+(e._tDur/Math.abs(e._ts||e._rts||me)||0))},Hu=function(e,n){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=Ce(r._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Uu(e),r._dirty||Bi(r,e)),e},Ov=function(e,n){var r;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(r=mu(e.rawTime(),n),(!n._dur||Fs(0,n.totalDuration(),r)-n._tTime>me)&&n.render(r,!0)),Bi(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-me}},tr=function(e,n,r,i){return n.parent&&di(n),n._start=Ce((Tr(r)?r:r||e!==Te?kn(e,r,n):e._time)+n._delay),n._end=Ce(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Rv(e,n,"_first","_last",e._sort?"_start":0),Od(n)||(e._recent=n),i||Ov(e,n),e._ts<0&&Hu(e,e._tTime),e},Lv=function(e,n){return(gn.ScrollTrigger||cp("scrollTrigger",n))&&gn.ScrollTrigger.create(n,e)},Av=function(e,n,r,i,a){if(gp(e,n,a),!e._initted)return 1;if(!r&&e._pt&&!dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jv!==ln.frame)return oi.push(e),e._lazy=[a,i],1},kk=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Od=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},wk=function(e,n,r,i){var a=e.ratio,o=n<0||!n&&(!e._start&&kk(e)&&!(!e._initted&&Od(e))||(e._ts<0||e._dp._ts<0)&&!Od(e))?0:1,s=e._rDelay,l=0,u,c,f;if(s&&e._repeat&&(l=Fs(0,e._tDur,n),c=Ka(l,s),e._yoyo&&c&1&&(o=1-o),c!==Ka(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||dt||i||e._zTime===me||!n&&e._zTime){if(!e._initted&&Av(e,n,i,r,l))return;for(f=e._zTime,e._zTime=n||(r?me:0),r||(r=n&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Rd(e,n,r,!0),e._onUpdate&&!r&&dn(e,"onUpdate"),l&&e._repeat&&!r&&e.parent&&dn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&di(e,1),!r&&!dt&&(dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},bk=function(e,n,r){var i;if(r>n)for(i=e._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Za=function(e,n,r,i){var a=e._repeat,o=Ce(n)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:Ce(o*(a+1)+e._rDelay*a):o,s>0&&!i&&Hu(e,e._tTime=e._tDur*s),e.parent&&Uu(e),r||Bi(e.parent,e),e},am=function(e){return e instanceof Ht?Bi(e):Za(e,e._dur)},Sk={_start:0,endTime:Cs,totalDuration:Cs},kn=function t(e,n,r){var i=e.labels,a=e._recent||Sk,o=e.duration()>=Tn?a.endTime(!1):e._dur,s,l,u;return at(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)==="%",s=n.indexOf("="),l==="<"||l===">"?(s>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(s-1)+n.substr(s+1)),u&&r&&(l=l/100*(Ct(r)?r[0]:r).totalDuration()),s>1?t(e,n.substr(0,s-1),r)+l:o+l)):n==null?o:+n},Yo=function(e,n,r){var i=Tr(n[1]),a=(i?2:1)+(e<2?0:1),o=n[a],s,l;if(i&&(o.duration=n[1]),o.parent=r,e){for(s=o,l=r;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Xt(l.vars.inherit)&&l.parent;o.immediateRender=Xt(s.immediateRender),e<2?o.runBackwards=1:o.startAt=n[a-1]}return new We(n[0],o,n[a+1])},yi=function(e,n){return e||e===0?n(e):n},Fs=function(e,n,r){return r<e?e:r>n?n:r},bt=function(e,n){return!at(e)||!(n=pk.exec(e))?"":n[1]},Ck=function(e,n,r){return yi(r,function(i){return Fs(e,n,i)})},Ld=[].slice,Dv=function(e,n){return e&&sr(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&sr(e[0]))&&!e.nodeType&&e!==Zn},Ek=function(e,n,r){return r===void 0&&(r=[]),e.forEach(function(i){var a;return at(i)&&!n||Dv(i,1)?(a=r).push.apply(a,jn(i)):r.push(i)})||r},jn=function(e,n,r){return be&&!n&&be.selector?be.selector(e):at(e)&&!r&&(zd||!Ja())?Ld.call((n||up).querySelectorAll(e),0):Ct(e)?Ek(e,r):Dv(e)?Ld.call(e,0):e?[e]:[]},Ad=function(e){return e=jn(e)[0]||Ss("Invalid scope")||{},function(n){var r=e.current||e.nativeElement||e;return jn(n,r.querySelectorAll?r:r===e?Ss("Invalid scope")||up.createElement("div"):e)}},Fv=function(e){return e.sort(function(){return .5-Math.random()})},Iv=function(e){if(Le(e))return e;var n=sr(e)?e:{each:e},r=Ui(n.ease),i=n.from||0,a=parseFloat(n.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,u=n.axis,c=i,f=i;return at(i)?c=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(c=i[0],f=i[1]),function(p,h,y){var g=(y||n).length,k=o[g],v,m,_,x,S,C,b,E,N;if(!k){if(N=n.grid==="auto"?0:(n.grid||[1,Tn])[1],!N){for(b=-Tn;b<(b=y[N++].getBoundingClientRect().left)&&N<g;);N<g&&N--}for(k=o[g]=[],v=l?Math.min(N,g)*c-.5:i%N,m=N===Tn?0:l?g*f/N-.5:i/N|0,b=0,E=Tn,C=0;C<g;C++)_=C%N-v,x=m-(C/N|0),k[C]=S=u?Math.abs(u==="y"?x:_):kv(_*_+x*x),S>b&&(b=S),S<E&&(E=S);i==="random"&&Fv(k),k.max=b-E,k.min=E,k.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(N>g?g-1:u?u==="y"?g/N:N:Math.max(N,g/N))||0)*(i==="edges"?-1:1),k.b=g<0?a-g:a,k.u=bt(n.amount||n.each)||0,r=r&&g<0?Ik(r):r}return g=(k[p]-k.min)/k.max||0,Ce(k.b+(r?r(g):g)*k.v)+k.u}},Dd=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var i=Ce(Math.round(parseFloat(r)/e)*e*n);return(i-i%1)/n+(Tr(r)?0:bt(r))}},qv=function(e,n){var r=Ct(e),i,a;return!r&&sr(e)&&(i=r=e.radius||Tn,e.values?(e=jn(e.values),(a=!Tr(e[0]))&&(i*=i)):e=Dd(e.increment)),yi(n,r?Le(e)?function(o){return a=e(o),Math.abs(a-o)<=i?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),u=Tn,c=0,f=e.length,p,h;f--;)a?(p=e[f].x-s,h=e[f].y-l,p=p*p+h*h):p=Math.abs(e[f]-s),p<u&&(u=p,c=f);return c=!i||u<=i?e[c]:o,a||c===o||Tr(o)?c:c+bt(o)}:Dd(e))},Bv=function(e,n,r,i){return yi(Ct(e)?!n:r===!0?!!(r=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(n-e+r*.99))/r)*r*i)/i})},Tk=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(i){return n.reduce(function(a,o){return o(a)},i)}},jk=function(e,n){return function(r){return e(parseFloat(r))+(n||bt(r))}},Pk=function(e,n,r){return Hv(e,n,0,1,r)},Uv=function(e,n,r){return yi(r,function(i){return e[~~n(i)]})},Nk=function t(e,n,r){var i=n-e;return Ct(e)?Uv(e,t(0,e.length),n):yi(r,function(a){return(i+(a-e)%i)%i+e})},zk=function t(e,n,r){var i=n-e,a=i*2;return Ct(e)?Uv(e,t(0,e.length-1),n):yi(r,function(o){return o=(a+(o-e)%a)%a||0,e+(o>i?a-o:o)})},Es=function(e){return e.replace(ck,function(n){var r=n.indexOf("[")+1,i=n.substring(r||7,r?n.indexOf("]"):n.length-1).split(dk);return Bv(r?i:+i[0],r?0:+i[1],+i[2]||1e-5)})},Hv=function(e,n,r,i,a){var o=n-e,s=i-r;return yi(a,function(l){return r+((l-e)/o*s||0)})},Mk=function t(e,n,r,i){var a=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!a){var o=at(e),s={},l,u,c,f,p;if(r===!0&&(i=1)&&(r=null),o)e={p:e},n={p:n};else if(Ct(e)&&!Ct(n)){for(c=[],f=e.length,p=f-2,u=1;u<f;u++)c.push(t(e[u-1],e[u]));f--,a=function(y){y*=f;var g=Math.min(p,~~y);return c[g](y-g)},r=n}else i||(e=Ga(Ct(e)?[]:{},e));if(!c){for(l in n)mp.call(s,e,l,"get",n[l]);a=function(y){return yp(y,s)||(o?e.p:e)}}}return yi(r,a)},om=function(e,n,r){var i=e.labels,a=Tn,o,s,l;for(o in i)s=i[o]-n,s<0==!!r&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},dn=function(e,n,r){var i=e.vars,a=i[n],o=be,s=e._ctx,l,u,c;if(a)return l=i[n+"Params"],u=i.callbackScope||e,r&&oi.length&&pu(),s&&(be=s),c=l?a.apply(u,l):a.call(u),be=o,c},No=function(e){return di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dt),e.progress()<1&&dn(e,"onInterrupt"),e},ja,$v=[],Vv=function(e){if(e)if(e=!e.name&&e.default||e,lp()||e.headless){var n=e.name,r=Le(e),i=n&&!r&&e.init?function(){this._props=[]}:e,a={init:Cs,render:yp,add:mp,kill:Qk,modifier:Xk,rawVars:0},o={targetTest:0,get:0,getSetter:_p,aliases:{},register:0};if(Ja(),e!==i){if(on[n])return;vn(i,vn(hu(e,a),o)),Ga(i.prototype,Ga(a,hu(e,o))),on[i.prop=n]=i,e.targetTest&&(Ml.push(i),dp[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Tv(n,i),e.register&&e.register(Zt,i,Gt)}else $v.push(e)},he=255,zo={aqua:[0,he,he],lime:[0,he,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,he],navy:[0,0,128],white:[he,he,he],olive:[128,128,0],yellow:[he,he,0],orange:[he,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[he,0,0],pink:[he,192,203],cyan:[0,he,he],transparent:[he,he,he,0]},kc=function(e,n,r){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(r-n)*e*6:e<.5?r:e*3<2?n+(r-n)*(2/3-e)*6:n)*he+.5|0},Wv=function(e,n,r){var i=e?Tr(e)?[e>>16,e>>8&he,e&he]:0:zo.black,a,o,s,l,u,c,f,p,h,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zo[e])i=zo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&he,i&he,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&he,e&he]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(tm),!n)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,o=c<=.5?c*(u+1):c+u-c*u,a=c*2-o,i.length>3&&(i[3]*=1),i[0]=kc(l+1/3,a,o),i[1]=kc(l,a,o),i[2]=kc(l-1/3,a,o);else if(~e.indexOf("="))return i=e.match(bv),r&&i.length<4&&(i[3]=1),i}else i=e.match(tm)||zo.transparent;i=i.map(Number)}return n&&!y&&(a=i[0]/he,o=i[1]/he,s=i[2]/he,f=Math.max(a,o,s),p=Math.min(a,o,s),c=(f+p)/2,f===p?l=u=0:(h=f-p,u=c>.5?h/(2-f-p):h/(f+p),l=f===a?(o-s)/h+(o<s?6:0):f===o?(s-a)/h+2:(a-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),r&&i.length<4&&(i[3]=1),i},Yv=function(e){var n=[],r=[],i=-1;return e.split(si).forEach(function(a){var o=a.match(Ta)||[];n.push.apply(n,o),r.push(i+=o.length+1)}),n.c=r,n},sm=function(e,n,r){var i="",a=(e+i).match(si),o=n?"hsla(":"rgba(",s=0,l,u,c,f;if(!a)return e;if(a=a.map(function(p){return(p=Wv(p,n,1))&&o+(n?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),r&&(c=Yv(e),l=r.c,l.join(i)!==c.c.join(i)))for(u=e.replace(si,"1").split(Ta),f=u.length-1;s<f;s++)i+=u[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(c.length?c:a.length?a:r).shift());if(!u)for(u=e.split(si),f=u.length-1;s<f;s++)i+=u[s]+a[s];return i+u[f]},si=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zo)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Rk=/hsl[a]?\(/,Xv=function(e){var n=e.join(" "),r;if(si.lastIndex=0,si.test(n))return r=Rk.test(n),e[1]=sm(e[1],r),e[0]=sm(e[0],r,Yv(e[1])),!0},Ts,ln=function(){var t=Date.now,e=500,n=33,r=t(),i=r,a=1e3/240,o=a,s=[],l,u,c,f,p,h,y=function g(k){var v=t()-i,m=k===!0,_,x,S,C;if((v>e||v<0)&&(r+=v-n),i+=v,S=i-r,_=S-o,(_>0||m)&&(C=++f.frame,p=S-f.time*1e3,f.time=S=S/1e3,o+=_+(_>=a?4:a-_),x=1),m||(l=u(g)),x)for(h=0;h<s.length;h++)s[h](S,p,C,k)};return f={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(k){return p/(1e3/(k||60))},wake:function(){Cv&&(!zd&&lp()&&(Zn=zd=window,up=Zn.document||{},gn.gsap=Zt,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Zt.version),Ev(fu||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),$v.forEach(Vv)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(k){return setTimeout(k,o-f.time*1e3+1|0)},Ts=1,y(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ts=0,u=Cs},lagSmoothing:function(k,v){e=k||1/0,n=Math.min(v||33,e)},fps:function(k){a=1e3/(k||240),o=f.time*1e3+a},add:function(k,v,m){var _=v?function(x,S,C,b){k(x,S,C,b),f.remove(_)}:k;return f.remove(k),s[m?"unshift":"push"](_),Ja(),_},remove:function(k,v){~(v=s.indexOf(k))&&s.splice(v,1)&&h>=v&&h--},_listeners:s},f}(),Ja=function(){return!Ts&&ln.wake()},ie={},Ok=/^[\d.\-M][\d.\-,\s]/,Lk=/["']/g,Ak=function(e){for(var n={},r=e.substr(1,e.length-3).split(":"),i=r[0],a=1,o=r.length,s,l,u;a<o;a++)l=r[a],s=a!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),n[i]=isNaN(u)?u.replace(Lk,"").trim():+u,i=l.substr(s+1).trim();return n},Dk=function(e){var n=e.indexOf("(")+1,r=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<r?e.indexOf(")",r+1):r)},Fk=function(e){var n=(e+"").split("("),r=ie[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[Ak(n[1])]:Dk(e).split(",").map(zv)):ie._CE&&Ok.test(e)?ie._CE("",e):r},Ik=function(e){return function(n){return 1-e(1-n)}},Ui=function(e,n){return e&&(Le(e)?e:ie[e]||Fk(e))||n},ra=function(e,n,r,i){r===void 0&&(r=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:r,easeInOut:i},o;return Qt(e,function(s){ie[s]=gn[s]=a,ie[o=s.toLowerCase()]=r;for(var l in a)ie[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ie[s+"."+l]=a[l]}),a},Qv=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},wc=function t(e,n,r){var i=n>=1?n:1,a=(r||(e?.3:.45))/(n<1?n:1),o=a/Nd*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*uk((c-o)*a)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Qv(s);return a=Nd/a,l.config=function(u,c){return t(e,u,c)},l},bc=function t(e,n){n===void 0&&(n=1.70158);var r=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=e==="out"?r:e==="in"?function(a){return 1-r(1-a)}:Qv(r);return i.config=function(a){return t(e,a)},i};Qt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;ra(t+",Power"+(n-1),e?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;ra("Elastic",wc("in"),wc("out"),wc());(function(t,e){var n=1/e,r=2*n,i=2.5*n,a=function(s){return s<n?t*s*s:s<r?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};ra("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);ra("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});ra("Circ",function(t){return-(kv(1-t*t)-1)});ra("Sine",function(t){return t===1?1:-lk(t*ok)+1});ra("Back",bc("in"),bc("out"),bc());ie.SteppedEase=ie.steps=gn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var r=1/e,i=e+(n?0:1),a=n?1:0,o=1-me;return function(s){return((i*Fs(0,o,s)|0)+a)*r}}};bs.ease=ie["quad.out"];Qt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return fp+=t+","+t+"Params,"});var Gv=function(e,n){this.id=sk++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Pv,this.set=n?n.getSetter:_p},js=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Za(this,+n.duration,1,1),this.data=n.data,be&&(this._ctx=be,be.data.push(this)),Ts||ln.wake()}var e=t.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Za(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,i){if(Ja(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Hu(this,r),!a._dp||a.parent||Ov(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===me||!this._initted&&this._dur&&r||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Nv(this,r,i)),this},e.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+im(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},e.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+im(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(r,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*a,i):this._repeat?Ka(this._tTime,a)+1:1},e.timeScale=function(r,i){if(!arguments.length)return this._rts===-me?0:this._rts;if(this._rts===r)return this;var a=this.parent&&this._ts?mu(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-me?0:this._rts,this.totalTime(Fs(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),Uu(this),yk(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==me&&(this._tTime-=me)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=Ce(r);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(r){return this._start+(Xt(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mu(i.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=mk);var i=dt;return dt=r,hp(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),dt=i,this},e.globalTime=function(r){for(var i=this,a=arguments.length?r:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(r):a},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,am(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,am(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,i){return this.totalTime(kn(this,r),Xt(i))},e.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Xt(i)),this._dur||(this._zTime=-me),this},e.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},e.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-me:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-me,this},e.isActive=function(){var r=this.parent||this._dp,i=this._start,a;return!!(!r||this._ts&&this._initted&&r.isActive()&&(a=r.rawTime(!0))>=i&&a<this.endTime(!0)-me)},e.eventCallback=function(r,i,a){var o=this.vars;return arguments.length>1?(i?(o[r]=i,a&&(o[r+"Params"]=a),r==="onUpdate"&&(this._onUpdate=i)):delete o[r],this):o[r]},e.then=function(r){var i=this,a=i._prom;return new Promise(function(o){var s=Le(r)?r:Mv,l=function(){var c=i.then;i.then=null,a&&a(),Le(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),o(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){No(this)},t}();vn(js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-me,_prom:0,_ps:!1,_rts:1});var Ht=function(t){xv(e,t);function e(r,i){var a;return r===void 0&&(r={}),a=t.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=Xt(r.sortChildren),Te&&tr(r.parent||Te,hr(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&Lv(hr(a),r.scrollTrigger),a}var n=e.prototype;return n.to=function(i,a,o){return Yo(0,arguments,this),this},n.from=function(i,a,o){return Yo(1,arguments,this),this},n.fromTo=function(i,a,o,s){return Yo(2,arguments,this),this},n.set=function(i,a,o){return a.duration=0,a.parent=this,Wo(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new We(i,a,kn(this,o),1),this},n.call=function(i,a,o){return tr(this,We.delayedCall(0,i,a),o)},n.staggerTo=function(i,a,o,s,l,u,c){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new We(i,o,kn(this,l)),this},n.staggerFrom=function(i,a,o,s,l,u,c){return o.runBackwards=1,Wo(o).immediateRender=Xt(o.immediateRender),this.staggerTo(i,a,o,s,l,u,c)},n.staggerFromTo=function(i,a,o,s,l,u,c,f){return s.startAt=o,Wo(s).immediateRender=Xt(s.immediateRender),this.staggerTo(i,a,s,l,u,c,f)},n.render=function(i,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Ce(i),f=this._zTime<0!=i<0&&(this._initted||!u),p,h,y,g,k,v,m,_,x,S,C,b;if(this!==Te&&c>l&&i>=0&&(c=l),c!==this._tTime||o||f){if(s!==this._time&&u&&(c+=this._time-s,i+=this._time-s),p=c,x=this._start,_=this._ts,v=!_,f&&(u||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,k=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(k*100+i,a,o);if(p=Ce(c%k),c===l?(g=this._repeat,p=u):(S=Ce(c/k),g=~~S,g&&g===S&&(p=u,g--),p>u&&(p=u)),S=Ka(this._tTime,k),!s&&this._tTime&&S!==g&&this._tTime-S*k-this._dur<=0&&(S=g),C&&g&1&&(p=u-p,b=1),g!==S&&!this._lock){var E=C&&S&1,N=E===(C&&g&1);if(g<S&&(E=!E),s=E?0:c%u?u:c,this._lock=1,this.render(s||(b?0:Ce(g*k)),a,!u)._lock=0,this._tTime=c,!a&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,S=g),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,N&&(this._lock=2,s=E?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=bk(this,Ce(s),Ce(p)),m&&(c-=p-(p=m._start))),this._tTime=c,this._time=p,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&u&&!a&&!S&&(dn(this,"onStart"),this._tTime!==c))return this;if(p>=s&&i>=0)for(h=this._first;h;){if(y=h._next,(h._act||p>=h._start)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,a,o);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,a,o),p!==this._time||!this._ts&&!v){m=0,y&&(c+=this._zTime=-me);break}}h=y}else{h=this._last;for(var T=i<0?i:p;h;){if(y=h._prev,(h._act||T<=h._end)&&h._ts&&m!==h){if(h.parent!==this)return this.render(i,a,o);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,a,o||dt&&hp(h)),p!==this._time||!this._ts&&!v){m=0,y&&(c+=this._zTime=T?-me:me);break}}h=y}}if(m&&!a&&(this.pause(),m.render(p>=s?0:-me)._zTime=p>=s?1:-1,this._ts))return this._start=x,Uu(this),this.render(i,a,o);this._onUpdate&&!a&&dn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&s)&&(x===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&di(this,1),!a&&!(i<0&&!s)&&(c||s||!l)&&(dn(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,a){var o=this;if(Tr(a)||(a=kn(this,a,i)),!(i instanceof js)){if(Ct(i))return i.forEach(function(s){return o.add(s,a)}),this;if(at(i))return this.addLabel(i,a);if(Le(i))i=We.delayedCall(0,i);else return this}return this!==i?tr(this,i,a):this},n.getChildren=function(i,a,o,s){i===void 0&&(i=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-Tn);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof We?a&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,a,o)))),u=u._next;return l},n.getById=function(i){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===i)return a[o]},n.remove=function(i){return at(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(i.parent===this&&Bu(this,i),i===this._recent&&(this._recent=this._last),Bi(this))},n.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},n.addLabel=function(i,a){return this.labels[i]=kn(this,a),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,a,o){var s=We.delayedCall(0,a||Cs,o);return s.data="isPause",this._hasPause=1,tr(this,s,kn(this,i))},n.removePause=function(i){var a=this._first;for(i=kn(this,i);a;)a._start===i&&a.data==="isPause"&&di(a),a=a._next},n.killTweensOf=function(i,a,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Wr!==s[l]&&s[l].kill(i,a);return this},n.getTweensOf=function(i,a){for(var o=[],s=jn(i),l=this._first,u=Tr(a),c;l;)l instanceof We?gk(l._targets,s)&&(u?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(c=l.getTweensOf(s,a)).length&&o.push.apply(o,c),l=l._next;return o},n.tweenTo=function(i,a){a=a||{};var o=this,s=kn(o,i),l=a,u=l.startAt,c=l.onStart,f=l.onStartParams,p=l.immediateRender,h,y=We.to(o,vn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale())||me,onStart:function(){if(o.pause(),!h){var k=a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale());y._dur!==k&&Za(y,k,0,1).render(y._time,!0,!0),h=1}c&&c.apply(y,f||[])}},a));return p?y.render(0):y},n.tweenFromTo=function(i,a,o){return this.tweenTo(a,vn({startAt:{time:kn(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),om(this,kn(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),om(this,kn(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+me)},n.shiftChildren=function(i,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,u;for(i=Ce(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(a)for(u in l)l[u]>=o&&(l[u]+=i);return Bi(this)},n.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return t.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Bi(this)},n.totalDuration=function(i){var a=0,o=this,s=o._last,l=Tn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,tr(o,s,c-s._delay,1)._lock=0):l=c,c<0&&s._ts&&(a-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Ce(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=u;Za(o,o===Te&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Te._ts&&(Nv(Te,mu(i,Te)),jv=ln.frame),ln.frame>=nm){nm+=hn.autoSleep||120;var a=Te._first;if((!a||!a._ts)&&hn.autoSleep&&ln._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ln.sleep()}}},e}(js);vn(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var qk=function(e,n,r,i,a,o,s){var l=new Gt(this._pt,e,n,0,1,n_,null,a),u=0,c=0,f,p,h,y,g,k,v,m;for(l.b=r,l.e=i,r+="",i+="",(v=~i.indexOf("random("))&&(i=Es(i)),o&&(m=[r,i],o(m,e,n),r=m[0],i=m[1]),p=r.match(yc)||[];f=yc.exec(i);)y=f[0],g=i.substring(u,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),y!==p[c++]&&(k=parseFloat(p[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:k,c:y.charAt(1)==="="?Aa(k,y)-k:parseFloat(y)-k,m:h&&h<4?Math.round:0},u=yc.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(Sv.test(i)||v)&&(l.e=0),this._pt=l,l},mp=function(e,n,r,i,a,o,s,l,u,c){Le(i)&&(i=i(a||0,e,o));var f=e[n],p=r!=="get"?r:Le(f)?u?e[n.indexOf("set")||!Le(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():f,h=Le(f)?u?Vk:e_:vp,y;if(at(i)&&(~i.indexOf("random(")&&(i=Es(i)),i.charAt(1)==="="&&(y=Aa(p,i)+(bt(p)||0),(y||y===0)&&(i=y))),!c||p!==i||Fd)return!isNaN(p*i)&&i!==""?(y=new Gt(this._pt,e,n,+p||0,i-(p||0),typeof f=="boolean"?Yk:t_,0,h),u&&(y.fp=u),s&&y.modifier(s,this,e),this._pt=y):(!f&&!(n in e)&&cp(n,i),qk.call(this,e,n,p,i,h,l||hn.stringFilter,u))},Bk=function(e,n,r,i,a){if(Le(e)&&(e=Xo(e,a,n,r,i)),!sr(e)||e.style&&e.nodeType||Ct(e)||wv(e))return at(e)?Xo(e,a,n,r,i):e;var o={},s;for(s in e)o[s]=Xo(e[s],a,n,r,i);return o},Kv=function(e,n,r,i,a,o){var s,l,u,c;if(on[e]&&(s=new on[e]).init(a,s.rawVars?n[e]:Bk(n[e],i,a,o,r),r,i,o)!==!1&&(r._pt=l=new Gt(r._pt,a,e,0,1,s.render,s,0,s.priority),r!==ja))for(u=r._ptLookup[r._targets.indexOf(a)],c=s._props.length;c--;)u[s._props[c]]=l;return s},Wr,Fd,gp=function t(e,n,r){var i=e.vars,a=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,f=i.yoyoEase,p=i.keyframes,h=i.autoRevert,y=e._dur,g=e._startAt,k=e._targets,v=e.parent,m=v&&v.data==="nested"?v.vars.targets:k,_=e._overwrite==="auto"&&!op,x=e.timeline,S=i.easeReverse||f,C,b,E,N,T,F,R,Q,H,ne,G,I,z;if(x&&(!p||!a)&&(a="none"),e._ease=Ui(a,bs.ease),e._rEase=S&&(Ui(S)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||p&&!i.stagger){if(Q=k[0]?qi(k[0]).harness:0,I=Q&&i[Q.prop],C=hu(i,dp),g&&(g._zTime<0&&g.progress(1),n<0&&c&&s&&!h?g.render(-1,!0):g.revert(c&&y?zl:hk),g._lazy=0),o){if(di(e._startAt=We.set(k,vn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&Xt(l),startAt:null,delay:0,onUpdate:u&&function(){return dn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(dt||!s&&!h)&&e._startAt.revert(zl),s&&y&&n<=0&&r<=0){n&&(e._zTime=n);return}}else if(c&&y&&!g){if(n&&(s=!1),E=vn({overwrite:!1,data:"isFromStart",lazy:s&&!g&&Xt(l),immediateRender:s,stagger:0,parent:v},C),I&&(E[Q.prop]=I),di(e._startAt=We.set(k,E)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(dt?e._startAt.revert(zl):e._startAt.render(-1,!0)),e._zTime=n,!s)t(e._startAt,me,me);else if(!n)return}for(e._pt=e._ptCache=0,l=y&&Xt(l)||l&&!y,b=0;b<k.length;b++){if(T=k[b],R=T._gsap||pp(k)[b]._gsap,e._ptLookup[b]=ne={},Md[R.id]&&oi.length&&pu(),G=m===k?b:m.indexOf(T),Q&&(H=new Q).init(T,I||C,e,G,m)!==!1&&(e._pt=N=new Gt(e._pt,T,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(L){ne[L]=N}),H.priority&&(F=1)),!Q||I)for(E in C)on[E]&&(H=Kv(E,C,e,G,T,m))?H.priority&&(F=1):ne[E]=N=mp.call(e,T,E,"get",C[E],G,m,0,i.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),_&&e._pt&&(Wr=e,Te.killTweensOf(T,ne,e.globalTime(n)),z=!e.parent,Wr=0),e._pt&&l&&(Md[R.id]=1)}F&&r_(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!z,p&&n<=0&&x.render(Tn,!0,!0)},Uk=function(e,n,r,i,a,o,s,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],c,f,p,h;if(!u)for(u=e._ptCache[n]=[],p=e._ptLookup,h=e._targets.length;h--;){if(c=p[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return Fd=1,e.vars[n]="+=0",gp(e,s),Fd=0,l?Ss(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)f=u[h],c=f._pt||f,c.s=(i||i===0)&&!a?i:c.s+(i||0)+o*c.c,c.c=r-c.s,f.e&&(f.e=qe(r)+bt(f.e)),f.b&&(f.b=c.s+bt(f.b))},Hk=function(e,n){var r=e[0]?qi(e[0]).harness:0,i=r&&r.aliases,a,o,s,l;if(!i)return n;a=Ga({},n);for(o in i)if(o in a)for(l=i[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},$k=function(e,n,r,i){var a=n.ease||i||"power1.inOut",o,s;if(Ct(n))s=r[e]||(r[e]=[]),n.forEach(function(l,u){return s.push({t:u/(n.length-1)*100,v:l,e:a})});else for(o in n)s=r[o]||(r[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:n[o],e:a})},Xo=function(e,n,r,i,a){return Le(e)?e.call(n,r,i,a):at(e)&&~e.indexOf("random(")?Es(e):e},Zv=fp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jv={};Qt(Zv+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Jv[t]=1});var We=function(t){xv(e,t);function e(r,i,a,o){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=t.call(this,o?i:Wo(i))||this;var l=s.vars,u=l.duration,c=l.delay,f=l.immediateRender,p=l.stagger,h=l.overwrite,y=l.keyframes,g=l.defaults,k=l.scrollTrigger,v=i.parent||Te,m=(Ct(r)||wv(r)?Tr(r[0]):"length"in i)?[r]:jn(r),_,x,S,C,b,E,N,T;if(s._targets=m.length?pp(m):Ss("GSAP target "+r+" not found. https://gsap.com",!hn.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,y||p||al(u)||al(c)){i=s.vars;var F=i.easeReverse||i.yoyoEase;if(_=s.timeline=new Ht({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:m}),_.kill(),_.parent=_._dp=hr(s),_._start=0,p||al(u)||al(c)){if(C=m.length,N=p&&Iv(p),sr(p))for(b in p)~Zv.indexOf(b)&&(T||(T={}),T[b]=p[b]);for(x=0;x<C;x++)S=hu(i,Jv),S.stagger=0,F&&(S.easeReverse=F),T&&Ga(S,T),E=m[x],S.duration=+Xo(u,hr(s),x,E,m),S.delay=(+Xo(c,hr(s),x,E,m)||0)-s._delay,!p&&C===1&&S.delay&&(s._delay=c=S.delay,s._start+=c,S.delay=0),_.to(E,S,N?N(x,E,m):0),_._ease=ie.none;_.duration()?u=c=0:s.timeline=0}else if(y){Wo(vn(_.vars.defaults,{ease:"none"})),_._ease=Ui(y.ease||i.ease||"none");var R=0,Q,H,ne;if(Ct(y))y.forEach(function(G){return _.to(m,G,">")}),_.duration();else{S={};for(b in y)b==="ease"||b==="easeEach"||$k(b,y[b],S,y.easeEach);for(b in S)for(Q=S[b].sort(function(G,I){return G.t-I.t}),R=0,x=0;x<Q.length;x++)H=Q[x],ne={ease:H.e,duration:(H.t-(x?Q[x-1].t:0))/100*u},ne[b]=H.v,_.to(m,ne,R),R+=ne.duration;_.duration()<u&&_.to({},{duration:u-_.duration()})}}u||s.duration(u=_.duration())}else s.timeline=0;return h===!0&&!op&&(Wr=hr(s),Te.killTweensOf(m),Wr=0),tr(v,hr(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!u&&!y&&s._start===Ce(v._time)&&Xt(f)&&xk(hr(s))&&v.data!=="nested")&&(s._tTime=-me,s.render(Math.max(0,-c)||0)),k&&Lv(hr(s),k),s}var n=e.prototype;return n.render=function(i,a,o){var s=this._time,l=this._tDur,u=this._dur,c=i<0,f=i>l-me&&!c?l:i<me?0:i,p,h,y,g,k,v,m,_;if(!u)wk(this,i,a,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(p=f,_=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+i,a,o);if(p=Ce(f%g),f===l?(y=this._repeat,p=u):(k=Ce(f/g),y=~~k,y&&y===k?(p=u,y--):p>u&&(p=u)),v=this._yoyo&&y&1,v&&(p=u-p),k=Ka(this._tTime,g),p===s&&!o&&this._initted&&y===k)return this._tTime=f,this;y!==k&&this.vars.repeatRefresh&&!v&&!this._lock&&p!==g&&this._initted&&(this._lock=o=1,this.render(Ce(g*y),!0).invalidate()._lock=0)}if(!this._initted){if(Av(this,c?i:p,o,a,f))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&y!==k))return this;if(u!==this._dur)return this.render(i,a,o)}if(this._rEase){var x=p<s;if(x!==this._inv){var S=x?s:u-s;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=S?(x?-1:1)/S:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((p-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(p/u);if(this._from&&(this.ratio=m=1-m),this._tTime=f,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&f&&!a&&!k&&(dn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(m,h.d),h=h._next;_&&_.render(i<0?i:_._dur*_._ease(p/this._dur),a,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(c&&Rd(this,i,a,o),dn(this,"onUpdate")),this._repeat&&y!==k&&this.vars.onRepeat&&!a&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Rd(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&di(this,1),!a&&!(c&&!s)&&(f||s||v)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},n.resetTo=function(i,a,o,s,l){Ts||ln.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||gp(this,u),c=this._ease(u/this._dur),Uk(this,i,a,o,s,c,u,l)?this.resetTo(i,a,o,s,1):(Hu(this,0),this.parent||Rv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?No(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,Wr&&Wr.vars.overwrite!==!0)._first||No(this),this.parent&&o!==this.timeline.totalDuration()&&Za(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?jn(i):s,u=this._ptLookup,c=this._pt,f,p,h,y,g,k,v;if((!a||a==="all")&&_k(s,l))return a==="all"&&(this._pt=0),No(this);for(f=this._op=this._op||[],a!=="all"&&(at(a)&&(g={},Qt(a,function(m){return g[m]=1}),a=g),a=Hk(s,a)),v=s.length;v--;)if(~l.indexOf(s[v])){p=u[v],a==="all"?(f[v]=a,y=p,h={}):(h=f[v]=f[v]||{},y=a);for(g in y)k=p&&p[g],k&&((!("kill"in k.d)||k.d.kill(g)===!0)&&Bu(this,k,"_pt"),delete p[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&c&&No(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return Yo(1,arguments)},e.delayedCall=function(i,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,a,o){return Yo(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,o){return Te.killTweensOf(i,a,o)},e}(js);vn(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qt("staggerTo,staggerFrom,staggerFromTo",function(t){We[t]=function(){var e=new Ht,n=Ld.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var vp=function(e,n,r){return e[n]=r},e_=function(e,n,r){return e[n](r)},Vk=function(e,n,r,i){return e[n](i.fp,r)},Wk=function(e,n,r){return e.setAttribute(n,r)},_p=function(e,n){return Le(e[n])?e_:sp(e[n])&&e.setAttribute?Wk:vp},t_=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Yk=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},n_=function(e,n){var r=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},yp=function(e,n){for(var r=n._pt;r;)r.r(e,r.d),r=r._next},Xk=function(e,n,r,i){for(var a=this._pt,o;a;)o=a._next,a.p===i&&a.modifier(e,n,r),a=o},Qk=function(e){for(var n=this._pt,r,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?Bu(this,n,"_pt"):n.dep||(r=1),n=i;return!r},Gk=function(e,n,r,i){i.mSet(e,n,i.m.call(i.tween,r,i.mt),i)},r_=function(e){for(var n=e._pt,r,i,a,o;n;){for(r=n._next,i=a;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:a=n,(n._next=i)?i._prev=n:o=n,n=r}e._pt=a},Gt=function(){function t(n,r,i,a,o,s,l,u,c){this.t=r,this.s=a,this.c=o,this.p=i,this.r=s||t_,this.d=l||this,this.set=u||vp,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(r,i,a){this.mSet=this.mSet||this.set,this.set=Gk,this.m=r,this.mt=a,this.tween=i},t}();Qt(fp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return dp[t]=1});gn.TweenMax=gn.TweenLite=We;gn.TimelineLite=gn.TimelineMax=Ht;Te=new Ht({sortChildren:!1,defaults:bs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=Xv;var Hi=[],Rl={},Kk=[],lm=0,Zk=0,Sc=function(e){return(Rl[e]||Kk).map(function(n){return n()})},Id=function(){var e=Date.now(),n=[];e-lm>2&&(Sc("matchMediaInit"),Hi.forEach(function(r){var i=r.queries,a=r.conditions,o,s,l,u;for(s in i)o=Zn.matchMedia(i[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,u=1);u&&(r.revert(),l&&n.push(r))}),Sc("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(i){return r.add(null,i)})}),lm=e,Sc("matchMedia"))},i_=function(){function t(n,r){this.selector=r&&Ad(r),this.data=[],this._r=[],this.isReverted=!1,this.id=Zk++,n&&this.add(n)}var e=t.prototype;return e.add=function(r,i,a){Le(r)&&(a=i,i=r,r=Le);var o=this,s=function(){var u=be,c=o.selector,f;return u&&u!==o&&u.data.push(o),a&&(o.selector=Ad(a)),be=o,f=i.apply(o,arguments),Le(f)&&o._r.push(f),be=u,o.selector=c,o.isReverted=!1,f};return o.last=s,r===Le?s(o,function(l){return o.add(null,l)}):r?o[r]=s:s},e.ignore=function(r){var i=be;be=null,r(this),be=i},e.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof t?r.push.apply(r,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,i){var a=this;if(r?function(){for(var s=a.getTweens(),l=a.data.length,u;l--;)u=a.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),l=a.data.length;l--;)u=a.data[l],u instanceof Ht?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof We)&&u.revert&&u.revert(r);a._r.forEach(function(c){return c(r,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=Hi.length;o--;)Hi[o].id===this.id&&Hi.splice(o,1)},e.revert=function(r){this.kill(r||{})},t}(),Jk=function(){function t(n){this.contexts=[],this.scope=n,be&&be.data.push(this)}var e=t.prototype;return e.add=function(r,i,a){sr(r)||(r={matches:r});var o=new i_(0,a||this.scope),s=o.conditions={},l,u,c;be&&!o.selector&&(o.selector=be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=r;for(u in r)u==="all"?c=1:(l=Zn.matchMedia(r[u]),l&&(Hi.indexOf(o)<0&&Hi.push(o),(s[u]=l.matches)&&(c=1),l.addListener?l.addListener(Id):l.addEventListener("change",Id)));return c&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},t}(),gu={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(function(i){return Vv(i)})},timeline:function(e){return new Ht(e)},getTweensOf:function(e,n){return Te.getTweensOf(e,n)},getProperty:function(e,n,r,i){at(e)&&(e=jn(e)[0]);var a=qi(e||{}).get,o=r?Mv:zv;return r==="native"&&(r=""),e&&(n?o((on[n]&&on[n].get||a)(e,n,r,i)):function(s,l,u){return o((on[s]&&on[s].get||a)(e,s,l,u))})},quickSetter:function(e,n,r){if(e=jn(e),e.length>1){var i=e.map(function(c){return Zt.quickSetter(c,n,r)}),a=i.length;return function(c){for(var f=a;f--;)i[f](c)}}e=e[0]||{};var o=on[n],s=qi(e),l=s.harness&&(s.harness.aliases||{})[n]||n,u=o?function(c){var f=new o;ja._pt=0,f.init(e,r?c+r:c,ja,0,[e]),f.render(1,f),ja._pt&&yp(1,ja)}:s.set(e,l);return o?u:function(c){return u(e,l,r?c+r:c,s,1)}},quickTo:function(e,n,r){var i,a=Zt.to(e,vn((i={},i[n]="+=0.1",i.paused=!0,i.stagger=0,i),r||{})),o=function(l,u,c){return a.resetTo(n,l,u,c)};return o.tween=a,o},isTweening:function(e){return Te.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ui(e.ease,bs.ease)),rm(bs,e||{})},config:function(e){return rm(hn,e||{})},registerEffect:function(e){var n=e.name,r=e.effect,i=e.plugins,a=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!on[s]&&!gn[s]&&Ss(n+" effect requires "+s+" plugin.")}),xc[n]=function(s,l,u){return r(jn(s),vn(l||{},a),u)},o&&(Ht.prototype[n]=function(s,l,u){return this.add(xc[n](s,sr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){ie[e]=Ui(n)},parseEase:function(e,n){return arguments.length?Ui(e,n):ie},getById:function(e){return Te.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var r=new Ht(e),i,a;for(r.smoothChildTiming=Xt(e.smoothChildTiming),Te.remove(r),r._dp=0,r._time=r._tTime=Te._time,i=Te._first;i;)a=i._next,(n||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&tr(r,i,i._start-i._delay),i=a;return tr(Te,r,0),r},context:function(e,n){return e?new i_(e,n):be},matchMedia:function(e){return new Jk(e)},matchMediaRefresh:function(){return Hi.forEach(function(e){var n=e.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&e.revert()})||Id()},addEventListener:function(e,n){var r=Rl[e]||(Rl[e]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(e,n){var r=Rl[e],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:Nk,wrapYoyo:zk,distribute:Iv,random:Bv,snap:qv,normalize:Pk,getUnit:bt,clamp:Ck,splitColor:Wv,toArray:jn,selector:Ad,mapRange:Hv,pipe:Tk,unitize:jk,interpolate:Mk,shuffle:Fv},install:Ev,effects:xc,ticker:ln,updateRoot:Ht.updateRoot,plugins:on,globalTimeline:Te,core:{PropTween:Gt,globals:Tv,Tween:We,Timeline:Ht,Animation:js,getCache:qi,_removeLinkedListItem:Bu,reverting:function(){return dt},context:function(e){return e&&be&&(be.data.push(e),e._ctx=be),be},suppressOverwrites:function(e){return op=e}}};Qt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return gu[t]=We[t]});ln.add(Ht.updateRoot);ja=gu.to({},{duration:0});var ew=function(e,n){for(var r=e._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},tw=function(e,n){var r=e._targets,i,a,o;for(i in n)for(a=r.length;a--;)o=e._ptLookup[a][i],o&&(o=o.d)&&(o._pt&&(o=ew(o,i)),o&&o.modifier&&o.modifier(n[i],e,r[a],i))},Cc=function(e,n){return{name:e,headless:1,rawVars:1,init:function(i,a,o){o._onInit=function(s){var l,u;if(at(a)&&(l={},Qt(a,function(c){return l[c]=1}),a=l),n){l={};for(u in a)l[u]=n(a[u]);a=l}tw(s,a)}}}},Zt=gu.registerPlugin({name:"attr",init:function(e,n,r,i,a){var o,s,l;this.tween=r;for(o in n)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",n[o],i,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,n){for(var r=n._pt;r;)dt?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",headless:1,init:function(e,n){for(var r=n.length;r--;)this.add(e,r,e[r]||0,n[r],0,0,0,0,0,1)}},Cc("roundProps",Dd),Cc("modifiers"),Cc("snap",qv))||gu;We.version=Ht.version=Zt.version="3.15.0";Cv=1;lp()&&Ja();ie.Power0;ie.Power1;ie.Power2;ie.Power3;ie.Power4;ie.Linear;ie.Quad;ie.Cubic;ie.Quart;ie.Quint;ie.Strong;ie.Elastic;ie.Back;ie.SteppedEase;ie.Bounce;ie.Sine;ie.Expo;ie.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var um,Yr,Da,xp,Ai,cm,kp,nw=function(){return typeof window<"u"},jr={},Ni=180/Math.PI,Fa=Math.PI/180,la=Math.atan2,dm=1e8,wp=/([A-Z])/g,rw=/(left|right|width|margin|padding|x)/i,iw=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qd=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},aw=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},ow=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},sw=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},lw=function(e,n){var r=n.s+n.c*e;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},a_=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},o_=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},uw=function(e,n,r){return e.style[n]=r},cw=function(e,n,r){return e.style.setProperty(n,r)},dw=function(e,n,r){return e._gsap[n]=r},fw=function(e,n,r){return e._gsap.scaleX=e._gsap.scaleY=r},pw=function(e,n,r,i,a){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(a,o)},hw=function(e,n,r,i,a){var o=e._gsap;o[n]=r,o.renderTransform(a,o)},je="transform",Kt=je+"Origin",mw=function t(e,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(e in jr&&a){if(this.tfm=this.tfm||{},e!=="transform")e=nr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return r.tfm[s]=gr(i,s)}):this.tfm[e]=o.x?o[e]:gr(i,e),e===Kt&&(this.tfm.zOrigin=o.zOrigin);else return nr.transform.split(",").forEach(function(s){return t.call(r,s,n)});if(this.props.indexOf(je)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kt,n,"")),e=je}(a||n)&&this.props.push(e,n,a[e])},s_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gw=function(){var e=this.props,n=this.target,r=n.style,i=n._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?n[e[a]](e[a+2]):n[e[a]]=e[a+2]:e[a+2]?r[e[a]]=e[a+2]:r.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(wp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=kp(),(!a||!a.isStart)&&!r[je]&&(s_(r),i.zOrigin&&r[Kt]&&(r[Kt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},l_=function(e,n){var r={target:e,props:[],revert:gw,save:mw};return e._gsap||Zt.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(i){return r.save(i)}),r},u_,Bd=function(e,n){var r=Yr.createElementNS?Yr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yr.createElement(e);return r&&r.style?r:Yr.createElement(e)},fn=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(wp,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,eo(n)||n,1)||""},fm="O,Moz,ms,Ms,Webkit".split(","),eo=function(e,n,r){var i=n||Ai,a=i.style,o=5;if(e in a&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(fm[o]+e in a););return o<0?null:(o===3?"ms":o>=0?fm[o]:"")+e},Ud=function(){nw()&&window.document&&(um=window,Yr=um.document,Da=Yr.documentElement,Ai=Bd("div")||{style:{}},Bd("div"),je=eo(je),Kt=je+"Origin",Ai.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",u_=!!eo("perspective"),kp=Zt.core.reverting,xp=1)},pm=function(e){var n=e.ownerSVGElement,r=Bd("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",r.appendChild(i),Da.appendChild(r);try{a=i.getBBox()}catch{}return r.removeChild(i),Da.removeChild(r),a},hm=function(e,n){for(var r=n.length;r--;)if(e.hasAttribute(n[r]))return e.getAttribute(n[r])},c_=function(e){var n,r;try{n=e.getBBox()}catch{n=pm(e),r=1}return n&&(n.width||n.height)||r||(n=pm(e)),n&&!n.width&&!n.x&&!n.y?{x:+hm(e,["x","cx","x1"])||0,y:+hm(e,["y","cy","y1"])||0,width:0,height:0}:n},d_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&c_(e))},fi=function(e,n){if(n){var r=e.style,i;n in jr&&n!==Kt&&(n=je),r.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(i==="--"?n:n.replace(wp,"-$1").toLowerCase())):r.removeAttribute(n)}},Xr=function(e,n,r,i,a,o){var s=new Gt(e._pt,n,r,0,1,o?o_:a_);return e._pt=s,s.b=i,s.e=a,e._props.push(r),s},mm={deg:1,rad:1,turn:1},vw={grid:1,flex:1},pi=function t(e,n,r,i){var a=parseFloat(r)||0,o=(r+"").trim().substr((a+"").length)||"px",s=Ai.style,l=rw.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,p=i==="px",h=i==="%",y,g,k,v;if(i===o||!a||mm[i]||mm[o])return a;if(o!=="px"&&!p&&(a=t(e,n,r,"px")),v=e.getCTM&&d_(e),(h||o==="%")&&(jr[n]||~n.indexOf("adius")))return y=v?e.getBBox()[l?"width":"height"]:e[c],qe(h?a/y*f:a/100*y);if(s[l?"width":"height"]=f+(p?o:i),g=i!=="rem"&&~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Yr||!g.appendChild)&&(g=Yr.body),k=g._gsap,k&&h&&k.width&&l&&k.time===ln.time&&!k.uncache)return qe(a/k.width*f);if(h&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=f+i,y=e[c],m?e.style[n]=m:fi(e,n)}else(h||o==="%")&&!vw[fn(g,"display")]&&(s.position=fn(e,"position")),g===e&&(s.position="static"),g.appendChild(Ai),y=Ai[c],g.removeChild(Ai),s.position="absolute";return l&&h&&(k=qi(g),k.time=ln.time,k.width=g[c]),qe(p?y*a/f:y&&a?f/y*a:0)},gr=function(e,n,r,i){var a;return xp||Ud(),n in nr&&n!=="transform"&&(n=nr[n],~n.indexOf(",")&&(n=n.split(",")[0])),jr[n]&&n!=="transform"?(a=Ns(e,i),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:_u(fn(e,Kt))+" "+a.zOrigin+"px"):(a=e.style[n],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=vu[n]&&vu[n](e,n,r)||fn(e,n)||Pv(e,n)||(n==="opacity"?1:0))),r&&!~(a+"").trim().indexOf(" ")?pi(e,n,a,r)+r:a},_w=function(e,n,r,i){if(!r||r==="none"){var a=eo(n,e,1),o=a&&fn(e,a,1);o&&o!==r?(n=a,r=o):n==="borderColor"&&(r=fn(e,"borderTopColor"))}var s=new Gt(this._pt,e.style,n,0,1,n_),l=0,u=0,c,f,p,h,y,g,k,v,m,_,x,S;if(s.b=r,s.e=i,r+="",i+="",i.substring(0,6)==="var(--"&&(i=fn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[n],e.style[n]=i,i=fn(e,n)||i,g?e.style[n]=g:fi(e,n)),c=[r,i],Xv(c),r=c[0],i=c[1],p=r.match(Ta)||[],S=i.match(Ta)||[],S.length){for(;f=Ta.exec(i);)k=f[0],m=i.substring(l,f.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),k!==(g=p[u++]||"")&&(h=parseFloat(g)||0,x=g.substr((h+"").length),k.charAt(1)==="="&&(k=Aa(h,k)+x),v=parseFloat(k),_=k.substr((v+"").length),l=Ta.lastIndex-_.length,_||(_=_||hn.units[n]||x,l===i.length&&(i+=_,s.e+=_)),x!==_&&(h=pi(e,n,g,_)||0),s._pt={_next:s._pt,p:m||u===1?m:",",s:h,c:v-h,m:y&&y<4||n==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=n==="display"&&i==="none"?o_:a_;return Sv.test(i)&&(s.e=0),this._pt=s,s},gm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yw=function(e){var n=e.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(e=r,r=i,i=e),n[0]=gm[r]||r,n[1]=gm[i]||i,n.join(" ")},xw=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,a=n.u,o=r._gsap,s,l,u;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),u=a.length;--u>-1;)s=a[u],jr[s]&&(l=1,s=s==="transformOrigin"?Kt:je),fi(r,s);l&&(fi(r,je),o&&(o.svg&&r.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ns(r,1),o.uncache=1,s_(i)))}},vu={clearProps:function(e,n,r,i,a){if(a.data!=="isFromStart"){var o=e._pt=new Gt(e._pt,n,r,0,0,xw);return o.u=i,o.pr=-10,o.tween=a,e._props.push(r),1}}},Ps=[1,0,0,1,0,0],f_={},p_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vm=function(e){var n=fn(e,je);return p_(n)?Ps:n.substr(7).match(bv).map(qe)},bp=function(e,n){var r=e._gsap||qi(e),i=e.style,a=vm(e),o,s,l,u;return r.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Ps:a):(a===Ps&&!e.offsetParent&&e!==Da&&!r.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,Da.appendChild(e)),a=vm(e),l?i.display=l:fi(e,"display"),u&&(s?o.insertBefore(e,s):o?o.appendChild(e):Da.removeChild(e))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Hd=function(e,n,r,i,a,o){var s=e._gsap,l=a||bp(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,f=s.xOffset||0,p=s.yOffset||0,h=l[0],y=l[1],g=l[2],k=l[3],v=l[4],m=l[5],_=n.split(" "),x=parseFloat(_[0])||0,S=parseFloat(_[1])||0,C,b,E,N;r?l!==Ps&&(b=h*k-y*g)&&(E=x*(k/b)+S*(-g/b)+(g*m-k*v)/b,N=x*(-y/b)+S*(h/b)-(h*m-y*v)/b,x=E,S=N):(C=c_(e),x=C.x+(~_[0].indexOf("%")?x/100*C.width:x),S=C.y+(~(_[1]||_[0]).indexOf("%")?S/100*C.height:S)),i||i!==!1&&s.smooth?(v=x-u,m=S-c,s.xOffset=f+(v*h+m*g)-v,s.yOffset=p+(v*y+m*k)-m):s.xOffset=s.yOffset=0,s.xOrigin=x,s.yOrigin=S,s.smooth=!!i,s.origin=n,s.originIsAbsolute=!!r,e.style[Kt]="0px 0px",o&&(Xr(o,s,"xOrigin",u,x),Xr(o,s,"yOrigin",c,S),Xr(o,s,"xOffset",f,s.xOffset),Xr(o,s,"yOffset",p,s.yOffset)),e.setAttribute("data-svg-origin",x+" "+S)},Ns=function(e,n){var r=e._gsap||new Gv(e);if("x"in r&&!n&&!r.uncache)return r;var i=e.style,a=r.scaleX<0,o="px",s="deg",l=getComputedStyle(e),u=fn(e,Kt)||"0",c,f,p,h,y,g,k,v,m,_,x,S,C,b,E,N,T,F,R,Q,H,ne,G,I,z,L,w,U,ae,pt,ue,Ae;return c=f=p=g=k=v=m=_=x=0,h=y=1,r.svg=!!(e.getCTM&&d_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),i.scale=i.rotate=i.translate="none"),b=bp(e,r.svg),r.svg&&(r.uncache?(z=e.getBBox(),u=r.xOrigin-z.x+"px "+(r.yOrigin-z.y)+"px",I=""):I=!n&&e.getAttribute("data-svg-origin"),Hd(e,I||u,!!I||r.originIsAbsolute,r.smooth!==!1,b)),S=r.xOrigin||0,C=r.yOrigin||0,b!==Ps&&(F=b[0],R=b[1],Q=b[2],H=b[3],c=ne=b[4],f=G=b[5],b.length===6?(h=Math.sqrt(F*F+R*R),y=Math.sqrt(H*H+Q*Q),g=F||R?la(R,F)*Ni:0,m=Q||H?la(Q,H)*Ni+g:0,m&&(y*=Math.abs(Math.cos(m*Fa))),r.svg&&(c-=S-(S*F+C*Q),f-=C-(S*R+C*H))):(Ae=b[6],pt=b[7],w=b[8],U=b[9],ae=b[10],ue=b[11],c=b[12],f=b[13],p=b[14],E=la(Ae,ae),k=E*Ni,E&&(N=Math.cos(-E),T=Math.sin(-E),I=ne*N+w*T,z=G*N+U*T,L=Ae*N+ae*T,w=ne*-T+w*N,U=G*-T+U*N,ae=Ae*-T+ae*N,ue=pt*-T+ue*N,ne=I,G=z,Ae=L),E=la(-Q,ae),v=E*Ni,E&&(N=Math.cos(-E),T=Math.sin(-E),I=F*N-w*T,z=R*N-U*T,L=Q*N-ae*T,ue=H*T+ue*N,F=I,R=z,Q=L),E=la(R,F),g=E*Ni,E&&(N=Math.cos(E),T=Math.sin(E),I=F*N+R*T,z=ne*N+G*T,R=R*N-F*T,G=G*N-ne*T,F=I,ne=z),k&&Math.abs(k)+Math.abs(g)>359.9&&(k=g=0,v=180-v),h=qe(Math.sqrt(F*F+R*R+Q*Q)),y=qe(Math.sqrt(G*G+Ae*Ae)),E=la(ne,G),m=Math.abs(E)>2e-4?E*Ni:0,x=ue?1/(ue<0?-ue:ue):0),r.svg&&(I=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!p_(fn(e,je)),I&&e.setAttribute("transform",I))),Math.abs(m)>90&&Math.abs(m)<270&&(a?(h*=-1,m+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),n=n||r.uncache,r.x=c-((r.xPercent=c&&(!n&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=f-((r.yPercent=f&&(!n&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=p+o,r.scaleX=qe(h),r.scaleY=qe(y),r.rotation=qe(g)+s,r.rotationX=qe(k)+s,r.rotationY=qe(v)+s,r.skewX=m+s,r.skewY=_+s,r.transformPerspective=x+o,(r.zOrigin=parseFloat(u.split(" ")[2])||!n&&r.zOrigin||0)&&(i[Kt]=_u(u)),r.xOffset=r.yOffset=0,r.force3D=hn.force3D,r.renderTransform=r.svg?ww:u_?h_:kw,r.uncache=0,r},_u=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ec=function(e,n,r){var i=bt(n);return qe(parseFloat(n)+parseFloat(pi(e,"x",r+"px",i)))+i},kw=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,h_(e,n)},Ci="0deg",bo="0px",Ei=") ",h_=function(e,n){var r=n||this,i=r.xPercent,a=r.yPercent,o=r.x,s=r.y,l=r.z,u=r.rotation,c=r.rotationY,f=r.rotationX,p=r.skewX,h=r.skewY,y=r.scaleX,g=r.scaleY,k=r.transformPerspective,v=r.force3D,m=r.target,_=r.zOrigin,x="",S=v==="auto"&&e&&e!==1||v===!0;if(_&&(f!==Ci||c!==Ci)){var C=parseFloat(c)*Fa,b=Math.sin(C),E=Math.cos(C),N;C=parseFloat(f)*Fa,N=Math.cos(C),o=Ec(m,o,b*N*-_),s=Ec(m,s,-Math.sin(C)*-_),l=Ec(m,l,E*N*-_+_)}k!==bo&&(x+="perspective("+k+Ei),(i||a)&&(x+="translate("+i+"%, "+a+"%) "),(S||o!==bo||s!==bo||l!==bo)&&(x+=l!==bo||S?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+Ei),u!==Ci&&(x+="rotate("+u+Ei),c!==Ci&&(x+="rotateY("+c+Ei),f!==Ci&&(x+="rotateX("+f+Ei),(p!==Ci||h!==Ci)&&(x+="skew("+p+", "+h+Ei),(y!==1||g!==1)&&(x+="scale("+y+", "+g+Ei),m.style[je]=x||"translate(0, 0)"},ww=function(e,n){var r=n||this,i=r.xPercent,a=r.yPercent,o=r.x,s=r.y,l=r.rotation,u=r.skewX,c=r.skewY,f=r.scaleX,p=r.scaleY,h=r.target,y=r.xOrigin,g=r.yOrigin,k=r.xOffset,v=r.yOffset,m=r.forceCSS,_=parseFloat(o),x=parseFloat(s),S,C,b,E,N;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,S=Math.cos(l)*f,C=Math.sin(l)*f,b=Math.sin(l-u)*-p,E=Math.cos(l-u)*p,u&&(c*=Fa,N=Math.tan(u-c),N=Math.sqrt(1+N*N),b*=N,E*=N,c&&(N=Math.tan(c),N=Math.sqrt(1+N*N),S*=N,C*=N)),S=qe(S),C=qe(C),b=qe(b),E=qe(E)):(S=f,E=p,C=b=0),(_&&!~(o+"").indexOf("px")||x&&!~(s+"").indexOf("px"))&&(_=pi(h,"x",o,"px"),x=pi(h,"y",s,"px")),(y||g||k||v)&&(_=qe(_+y-(y*S+g*b)+k),x=qe(x+g-(y*C+g*E)+v)),(i||a)&&(N=h.getBBox(),_=qe(_+i/100*N.width),x=qe(x+a/100*N.height)),N="matrix("+S+","+C+","+b+","+E+","+_+","+x+")",h.setAttribute("transform",N),m&&(h.style[je]=N)},bw=function(e,n,r,i,a){var o=360,s=at(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?Ni:1),u=l-i,c=i+u+"deg",f,p;return s&&(f=a.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*dm)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*dm)%o-~~(u/o)*o)),e._pt=p=new Gt(e._pt,n,r,i,u,aw),p.e=c,p.u="deg",e._props.push(r),p},_m=function(e,n){for(var r in n)e[r]=n[r];return e},Sw=function(e,n,r){var i=_m({},r._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=r.style,s,l,u,c,f,p,h,y;i.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[je]=n,s=Ns(r,1),fi(r,je),r.setAttribute("transform",u)):(u=getComputedStyle(r)[je],o[je]=n,s=Ns(r,1),o[je]=u);for(l in jr)u=i[l],c=s[l],u!==c&&a.indexOf(l)<0&&(h=bt(u),y=bt(c),f=h!==y?pi(r,l,u,y):parseFloat(u),p=parseFloat(c),e._pt=new Gt(e._pt,s,l,f,p-f,qd),e._pt.u=y||0,e._props.push(l));_m(s,i)};Qt("padding,margin,Width,Radius",function(t,e){var n="Top",r="Right",i="Bottom",a="Left",o=(e<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(s){return e<2?t+s:"border"+s+t});vu[e>1?"border"+t:t]=function(s,l,u,c,f){var p,h;if(arguments.length<4)return p=o.map(function(y){return gr(s,y,u)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(c+"").split(" "),h={},o.forEach(function(y,g){return h[y]=p[g]=p[g]||p[(g-1)/2|0]}),s.init(l,h,f)}});var m_={name:"css",register:Ud,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,r,i,a){var o=this._props,s=e.style,l=r.vars.startAt,u,c,f,p,h,y,g,k,v,m,_,x,S,C,b,E,N;xp||Ud(),this.styles=this.styles||l_(e),E=this.styles.props,this.tween=r;for(g in n)if(g!=="autoRound"&&(c=n[g],!(on[g]&&Kv(g,n,r,i,e,a)))){if(h=typeof c,y=vu[g],h==="function"&&(c=c.call(r,i,e,a),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Es(c)),y)y(this,e,g,c,r)&&(b=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",si.lastIndex=0,si.test(u)||(k=bt(u),v=bt(c),v?k!==v&&(u=pi(e,g,u,v)+v):k&&(c+=k)),this.add(s,"setProperty",u,c,i,a,0,0,g),o.push(g),E.push(g,0,s[g]);else if(h!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(r,i,e,a):l[g],at(u)&&~u.indexOf("random(")&&(u=Es(u)),bt(u+"")||u==="auto"||(u+=hn.units[g]||bt(gr(e,g))||""),(u+"").charAt(1)==="="&&(u=gr(e,g))):u=gr(e,g),p=parseFloat(u),m=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),m&&(c=c.substr(2)),f=parseFloat(c),g in nr&&(g==="autoAlpha"&&(p===1&&gr(e,"visibility")==="hidden"&&f&&(p=0),E.push("visibility",0,s.visibility),Xr(this,s,"visibility",p?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=nr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),_=g in jr,_){if(this.styles.save(g),N=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=fn(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=c,c=fn(e,"perspective"),T?e.style.perspective=T:fi(e,"perspective")}f=parseFloat(c)}if(x||(S=e._gsap,S.renderTransform&&!n.parseTransform||Ns(e,n.parseTransform),C=n.smoothOrigin!==!1&&S.smooth,x=this._pt=new Gt(this._pt,s,je,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new Gt(this._pt,S,"scaleY",S.scaleY,(m?Aa(S.scaleY,m+f):f)-S.scaleY||0,qd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){E.push(Kt,0,s[Kt]),c=yw(c),S.svg?Hd(e,c,0,C,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==S.zOrigin&&Xr(this,S,"zOrigin",S.zOrigin,v),Xr(this,s,g,_u(u),_u(c)));continue}else if(g==="svgOrigin"){Hd(e,c,1,C,0,this);continue}else if(g in f_){bw(this,S,g,p,m?Aa(p,m+c):c);continue}else if(g==="smoothOrigin"){Xr(this,S,"smooth",S.smooth,c);continue}else if(g==="force3D"){S[g]=c;continue}else if(g==="transform"){Sw(this,c,e);continue}}else g in s||(g=eo(g)||g);if(_||(f||f===0)&&(p||p===0)&&!iw.test(c)&&g in s)k=(u+"").substr((p+"").length),f||(f=0),v=bt(c)||(g in hn.units?hn.units[g]:k),k!==v&&(p=pi(e,g,u,v)),this._pt=new Gt(this._pt,_?S:s,g,p,(m?Aa(p,m+f):f)-p,!_&&(v==="px"||g==="zIndex")&&n.autoRound!==!1?lw:qd),this._pt.u=v||0,_&&N!==c?(this._pt.b=u,this._pt.e=N,this._pt.r=sw):k!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=ow);else if(g in s)_w.call(this,e,g,u,m?m+c:c);else if(g in e)this.add(e,g,u||e[g],m?m+c:c,i,a);else if(g!=="parseTransform"){cp(g,c);continue}_||(g in s?E.push(g,0,s[g]):typeof e[g]=="function"?E.push(g,2,e[g]()):E.push(g,1,u||e[g])),o.push(g)}}b&&r_(this)},render:function(e,n){if(n.tween._time||!kp())for(var r=n._pt;r;)r.r(e,r.d),r=r._next;else n.styles.revert()},get:gr,aliases:nr,getSetter:function(e,n,r){var i=nr[n];return i&&i.indexOf(",")<0&&(n=i),n in jr&&n!==Kt&&(e._gsap.x||gr(e,"x"))?r&&cm===r?n==="scale"?fw:dw:(cm=r||{})&&(n==="scale"?pw:hw):e.style&&!sp(e.style[n])?uw:~n.indexOf("-")?cw:_p(e,n)},core:{_removeProperty:fi,_getMatrix:bp}};Zt.utils.checkPrefix=eo;Zt.core.getStyleSaver=l_;(function(t,e,n,r){var i=Qt(t+","+e+","+n,function(a){jr[a]=1});Qt(e,function(a){hn.units[a]="deg",f_[a]=1}),nr[i[13]]=t+","+e,Qt(r,function(a){var o=a.split(":");nr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){hn.units[t]="px"});Zt.registerPlugin(m_);var Oe=Zt.registerPlugin(m_)||Zt;Oe.core.Tween;function Cw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ew(t,e,n){return e&&Cw(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ut,Ol,un,Qr,Gr,Ia,g_,zi,qa,v_,xr,In,__,y_=function(){return ut||typeof window<"u"&&(ut=window.gsap)&&ut.registerPlugin&&ut},x_=1,Pa=[],J=[],or=[],Qo=Date.now,$d=function(e,n){return n},Tw=function(){var e=qa.core,n=e.bridge||{},r=e._scrollers,i=e._proxies;r.push.apply(r,J),i.push.apply(i,or),J=r,or=i,$d=function(o,s){return n[o](s)}},li=function(e,n){return~or.indexOf(e)&&or[or.indexOf(e)+1][n]},Go=function(e){return!!~v_.indexOf(e)},zt=function(e,n,r,i,a){return e.addEventListener(n,r,{passive:i!==!1,capture:!!a})},Nt=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},ol="scrollLeft",sl="scrollTop",Vd=function(){return xr&&xr.isPressed||J.cache++},yu=function(e,n){var r=function i(a){if(a||a===0){x_&&(un.history.scrollRestoration="manual");var o=xr&&xr.isPressed;a=i.v=Math.round(a)||(xr&&xr.iOS?1:0),e(a),i.cacheID=J.cache,o&&$d("ss",a)}else(n||J.cache!==i.cacheID||$d("ref"))&&(i.cacheID=J.cache,i.v=e());return i.v+i.offset};return r.offset=0,e&&r},At={s:ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yu(function(t){return arguments.length?un.scrollTo(t,Ke.sc()):un.pageXOffset||Qr[ol]||Gr[ol]||Ia[ol]||0})},Ke={s:sl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:At,sc:yu(function(t){return arguments.length?un.scrollTo(At.sc(),t):un.pageYOffset||Qr[sl]||Gr[sl]||Ia[sl]||0})},Bt=function(e,n){return(n&&n._ctx&&n._ctx.selector||ut.utils.toArray)(e)[0]||(typeof e=="string"&&ut.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},jw=function(e,n){for(var r=n.length;r--;)if(n[r]===e||n[r].contains(e))return!0;return!1},hi=function(e,n){var r=n.s,i=n.sc;Go(e)&&(e=Qr.scrollingElement||Gr);var a=J.indexOf(e),o=i===Ke.sc?1:2;!~a&&(a=J.push(e)-1),J[a+o]||zt(e,"scroll",Vd);var s=J[a+o],l=s||(J[a+o]=yu(li(e,r),!0)||(Go(e)?i:yu(function(u){return arguments.length?e[r]=u:e[r]})));return l.target=e,s||(l.smooth=ut.getProperty(e,"scrollBehavior")==="smooth"),l},Wd=function(e,n,r){var i=e,a=e,o=Qo(),s=o,l=n||50,u=Math.max(500,l*3),c=function(y,g){var k=Qo();g||k-o>l?(a=i,i=y,s=o,o=k):r?i+=y:i=a+(y-a)/(k-s)*(o-s)},f=function(){a=i=r?0:i,s=o=0},p=function(y){var g=s,k=a,v=Qo();return(y||y===0)&&y!==i&&c(y),o===s||v-s>u?0:(i+(r?k:-k))/((r?v:o)-g)*1e3};return{update:c,reset:f,getVelocity:p}},So=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ym=function(e){var n=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(r)?n:r},k_=function(){qa=ut.core.globals().ScrollTrigger,qa&&qa.core&&Tw()},w_=function(e){return ut=e||y_(),!Ol&&ut&&typeof document<"u"&&document.body&&(un=window,Qr=document,Gr=Qr.documentElement,Ia=Qr.body,v_=[un,Qr,Gr,Ia],ut.utils.clamp,__=ut.core.context||function(){},zi="onpointerenter"in Ia?"pointer":"mouse",g_=Ue.isTouch=un.matchMedia&&un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,In=Ue.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return x_=0},500),Ol=1),qa||k_(),Ol};At.op=Ke;J.cache=0;var Ue=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(r){Ol||w_(ut)||console.warn("Please gsap.registerPlugin(Observer)"),qa||k_();var i=r.tolerance,a=r.dragMinimum,o=r.type,s=r.target,l=r.lineHeight,u=r.debounce,c=r.preventDefault,f=r.onStop,p=r.onStopDelay,h=r.ignore,y=r.wheelSpeed,g=r.event,k=r.onDragStart,v=r.onDragEnd,m=r.onDrag,_=r.onPress,x=r.onRelease,S=r.onRight,C=r.onLeft,b=r.onUp,E=r.onDown,N=r.onChangeX,T=r.onChangeY,F=r.onChange,R=r.onToggleX,Q=r.onToggleY,H=r.onHover,ne=r.onHoverEnd,G=r.onMove,I=r.ignoreCheck,z=r.isNormalizer,L=r.onGestureStart,w=r.onGestureEnd,U=r.onWheel,ae=r.onEnable,pt=r.onDisable,ue=r.onClick,Ae=r.scrollSpeed,xe=r.capture,ve=r.allowClicks,Tt=r.lockAxis,ht=r.onLockAxis;this.target=s=Bt(s)||Gr,this.vars=r,h&&(h=ut.utils.toArray(h)),i=i||1e-9,a=a||0,y=y||1,Ae=Ae||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(un.getComputedStyle(Ia).lineHeight)||22);var zr,jt,Pt,oe,De,qt,Jt,j=this,en=0,lr=0,Mr=r.passive||!c&&r.passive!==!1,ze=hi(s,At),ur=hi(s,Ke),Rr=ze(),xi=ur(),Je=~o.indexOf("touch")&&!~o.indexOf("pointer")&&In[0]==="pointerdown",Or=Go(s),Fe=s.ownerDocument||Qr,Rn=[0,0,0],xn=[0,0,0],cr=0,co=function(){return cr=Qo()},$e=function(B,le){return(j.event=B)&&h&&jw(B.target,h)||le&&Je&&B.pointerType!=="touch"||I&&I(B,le)},Is=function(){j._vx.reset(),j._vy.reset(),jt.pause(),f&&f(j)},dr=function(){var B=j.deltaX=ym(Rn),le=j.deltaY=ym(xn),O=Math.abs(B)>=i,$=Math.abs(le)>=i;F&&(O||$)&&F(j,B,le,Rn,xn),O&&(S&&j.deltaX>0&&S(j),C&&j.deltaX<0&&C(j),N&&N(j),R&&j.deltaX<0!=en<0&&R(j),en=j.deltaX,Rn[0]=Rn[1]=Rn[2]=0),$&&(E&&j.deltaY>0&&E(j),b&&j.deltaY<0&&b(j),T&&T(j),Q&&j.deltaY<0!=lr<0&&Q(j),lr=j.deltaY,xn[0]=xn[1]=xn[2]=0),(oe||Pt)&&(G&&G(j),Pt&&(k&&Pt===1&&k(j),m&&m(j),Pt=0),oe=!1),qt&&!(qt=!1)&&ht&&ht(j),De&&(U(j),De=!1),zr=0},ia=function(B,le,O){Rn[O]+=B,xn[O]+=le,j._vx.update(B),j._vy.update(le),u?zr||(zr=requestAnimationFrame(dr)):dr()},aa=function(B,le){Tt&&!Jt&&(j.axis=Jt=Math.abs(B)>Math.abs(le)?"x":"y",qt=!0),Jt!=="y"&&(Rn[2]+=B,j._vx.update(B,!0)),Jt!=="x"&&(xn[2]+=le,j._vy.update(le,!0)),u?zr||(zr=requestAnimationFrame(dr)):dr()},Lr=function(B){if(!$e(B,1)){B=So(B,c);var le=B.clientX,O=B.clientY,$=le-j.x,q=O-j.y,V=j.isDragging;j.x=le,j.y=O,(V||($||q)&&(Math.abs(j.startX-le)>=a||Math.abs(j.startY-O)>=a))&&(Pt||(Pt=V?2:1),V||(j.isDragging=!0),aa($,q))}},ki=j.onPress=function(Y){$e(Y,1)||Y&&Y.button||(j.axis=Jt=null,jt.pause(),j.isPressed=!0,Y=So(Y),en=lr=0,j.startX=j.x=Y.clientX,j.startY=j.y=Y.clientY,j._vx.reset(),j._vy.reset(),zt(z?s:Fe,In[1],Lr,Mr,!0),j.deltaX=j.deltaY=0,_&&_(j))},ee=j.onRelease=function(Y){if(!$e(Y,1)){Nt(z?s:Fe,In[1],Lr,!0);var B=!isNaN(j.y-j.startY),le=j.isDragging,O=le&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),$=So(Y);!O&&B&&(j._vx.reset(),j._vy.reset(),c&&ve&&ut.delayedCall(.08,function(){if(Qo()-cr>300&&!Y.defaultPrevented){if(Y.target.click)Y.target.click();else if(Fe.createEvent){var q=Fe.createEvent("MouseEvents");q.initMouseEvent("click",!0,!0,un,1,$.screenX,$.screenY,$.clientX,$.clientY,!1,!1,!1,!1,0,null),Y.target.dispatchEvent(q)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,f&&le&&!z&&jt.restart(!0),Pt&&dr(),v&&le&&v(j),x&&x(j,O)}},wi=function(B){return B.touches&&B.touches.length>1&&(j.isGesturing=!0)&&L(B,j.isDragging)},On=function(){return(j.isGesturing=!1)||w(j)},Ln=function(B){if(!$e(B)){var le=ze(),O=ur();ia((le-Rr)*Ae,(O-xi)*Ae,1),Rr=le,xi=O,f&&jt.restart(!0)}},An=function(B){if(!$e(B)){B=So(B,c),U&&(De=!0);var le=(B.deltaMode===1?l:B.deltaMode===2?un.innerHeight:1)*y;ia(B.deltaX*le,B.deltaY*le,0),f&&!z&&jt.restart(!0)}},bi=function(B){if(!$e(B)){var le=B.clientX,O=B.clientY,$=le-j.x,q=O-j.y;j.x=le,j.y=O,oe=!0,f&&jt.restart(!0),($||q)&&aa($,q)}},oa=function(B){j.event=B,H(j)},fr=function(B){j.event=B,ne(j)},fo=function(B){return $e(B)||So(B,c)&&ue(j)};jt=j._dc=ut.delayedCall(p||.25,Is).pause(),j.deltaX=j.deltaY=0,j._vx=Wd(0,50,!0),j._vy=Wd(0,50,!0),j.scrollX=ze,j.scrollY=ur,j.isDragging=j.isGesturing=j.isPressed=!1,__(this),j.enable=function(Y){return j.isEnabled||(zt(Or?Fe:s,"scroll",Vd),o.indexOf("scroll")>=0&&zt(Or?Fe:s,"scroll",Ln,Mr,xe),o.indexOf("wheel")>=0&&zt(s,"wheel",An,Mr,xe),(o.indexOf("touch")>=0&&g_||o.indexOf("pointer")>=0)&&(zt(s,In[0],ki,Mr,xe),zt(Fe,In[2],ee),zt(Fe,In[3],ee),ve&&zt(s,"click",co,!0,!0),ue&&zt(s,"click",fo),L&&zt(Fe,"gesturestart",wi),w&&zt(Fe,"gestureend",On),H&&zt(s,zi+"enter",oa),ne&&zt(s,zi+"leave",fr),G&&zt(s,zi+"move",bi)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=oe=Pt=!1,j._vx.reset(),j._vy.reset(),Rr=ze(),xi=ur(),Y&&Y.type&&ki(Y),ae&&ae(j)),j},j.disable=function(){j.isEnabled&&(Pa.filter(function(Y){return Y!==j&&Go(Y.target)}).length||Nt(Or?Fe:s,"scroll",Vd),j.isPressed&&(j._vx.reset(),j._vy.reset(),Nt(z?s:Fe,In[1],Lr,!0)),Nt(Or?Fe:s,"scroll",Ln,xe),Nt(s,"wheel",An,xe),Nt(s,In[0],ki,xe),Nt(Fe,In[2],ee),Nt(Fe,In[3],ee),Nt(s,"click",co,!0),Nt(s,"click",fo),Nt(Fe,"gesturestart",wi),Nt(Fe,"gestureend",On),Nt(s,zi+"enter",oa),Nt(s,zi+"leave",fr),Nt(s,zi+"move",bi),j.isEnabled=j.isPressed=j.isDragging=!1,pt&&pt(j))},j.kill=j.revert=function(){j.disable();var Y=Pa.indexOf(j);Y>=0&&Pa.splice(Y,1),xr===j&&(xr=0)},Pa.push(j),z&&Go(s)&&(xr=j),j.enable(g)},Ew(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Ue.version="3.15.0";Ue.create=function(t){return new Ue(t)};Ue.register=w_;Ue.getAll=function(){return Pa.slice()};Ue.getById=function(t){return Pa.filter(function(e){return e.vars.id===t})[0]};y_()&&ut.registerPlugin(Ue);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var D,pa,Z,de,sn,ce,Sp,xu,zs,Ko,Mo,ll,xt,$u,Yd,Ot,xm,km,ha,b_,Tc,S_,Mt,Xd,C_,E_,Fr,Qd,Cp,Ba,Ep,Zo,Gd,jc,ul=1,kt=Date.now,Pc=kt(),Nn=0,Ro=0,wm=function(e,n,r){var i=an(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return r["_"+n+"Clamp"]=i,i?e.substr(6,e.length-7):e},bm=function(e,n){return n&&(!an(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Pw=function t(){return Ro&&requestAnimationFrame(t)},Sm=function(){return $u=1},Cm=function(){return $u=0},Jn=function(e){return e},Oo=function(e){return Math.round(e*1e5)/1e5||0},T_=function(){return typeof window<"u"},j_=function(){return D||T_()&&(D=window.gsap)&&D.registerPlugin&&D},Zi=function(e){return!!~Sp.indexOf(e)},P_=function(e){return(e==="Height"?Ep:Z["inner"+e])||sn["client"+e]||ce["client"+e]},N_=function(e){return li(e,"getBoundingClientRect")||(Zi(e)?function(){return Il.width=Z.innerWidth,Il.height=Ep,Il}:function(){return vr(e)})},Nw=function(e,n,r){var i=r.d,a=r.d2,o=r.a;return(o=li(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(n?P_(a):e["client"+a])||0}},zw=function(e,n){return!n||~or.indexOf(e)?N_(e):function(){return Il}},rr=function(e,n){var r=n.s,i=n.d2,a=n.d,o=n.a;return Math.max(0,(r="scroll"+i)&&(o=li(e,r))?o()-N_(e)()[a]:Zi(e)?(sn[r]||ce[r])-P_(i):e[r]-e["offset"+i])},cl=function(e,n){for(var r=0;r<ha.length;r+=3)(!n||~n.indexOf(ha[r+1]))&&e(ha[r],ha[r+1],ha[r+2])},an=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Lo=function(e){return typeof e=="number"},Mi=function(e){return typeof e=="object"},Co=function(e,n,r){return e&&e.progress(n?0:1)&&r&&e.pause()},ua=function(e,n,r){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return n(e,r)}):n(e,r);i&&i.totalTime&&(e.callbackAnimation=i)}},ca=Math.abs,z_="left",M_="top",Tp="right",jp="bottom",$i="width",Vi="height",Jo="Right",es="Left",ts="Top",ns="Bottom",Ve="padding",Sn="margin",to="Width",Pp="Height",Qe="px",Cn=function(e){return Z.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Mw=function(e){var n=Cn(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},Em=function(e,n){for(var r in n)r in e||(e[r]=n[r]);return e},vr=function(e,n){var r=n&&Cn(e)[Yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&D.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return r&&r.progress(0).kill(),i},ku=function(e,n){var r=n.d2;return e["offset"+r]||e["client"+r]||0},R_=function(e){var n=[],r=e.labels,i=e.duration(),a;for(a in r)n.push(r[a]/i);return n},Rw=function(e){return function(n){return D.utils.snap(R_(e),n)}},Np=function(e){var n=D.utils.snap(e),r=Array.isArray(e)&&e.slice(0).sort(function(i,a){return i-a});return r?function(i,a,o){o===void 0&&(o=.001);var s;if(!a)return n(i);if(a>0){for(i-=o,s=0;s<r.length;s++)if(r[s]>=i)return r[s];return r[s-1]}else for(s=r.length,i+=o;s--;)if(r[s]<=i)return r[s];return r[0]}:function(i,a,o){o===void 0&&(o=.001);var s=n(i);return!a||Math.abs(s-i)<o||s-i<0==a<0?s:n(a<0?i-e:i+e)}},Ow=function(e){return function(n,r){return Np(R_(e))(n,r.direction)}},dl=function(e,n,r,i){return r.split(",").forEach(function(a){return e(n,a,i)})},nt=function(e,n,r,i,a){return e.addEventListener(n,r,{passive:!i,capture:!!a})},tt=function(e,n,r,i){return e.removeEventListener(n,r,!!i)},fl=function(e,n,r){r=r&&r.wheelHandler,r&&(e(n,"wheel",r),e(n,"touchmove",r))},Tm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},pl={toggleActions:"play",anticipatePin:0},wu={top:0,left:0,center:.5,bottom:1,right:1},Ll=function(e,n){if(an(e)){var r=e.indexOf("="),i=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(i*=n/100),e=e.substr(0,r-1)),e=i+(e in wu?wu[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},hl=function(e,n,r,i,a,o,s,l){var u=a.startColor,c=a.endColor,f=a.fontSize,p=a.indent,h=a.fontWeight,y=de.createElement("div"),g=Zi(r)||li(r,"pinType")==="fixed",k=e.indexOf("scroller")!==-1,v=g?ce:r.tagName==="IFRAME"?r.contentDocument.body:r,m=e.indexOf("start")!==-1,_=m?u:c,x="border-color:"+_+";font-size:"+f+";color:"+_+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((k||l)&&g?"fixed;":"absolute;"),(k||l||!g)&&(x+=(i===Ke?Tp:jp)+":"+(o+parseFloat(p))+"px;"),s&&(x+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),y._isStart=m,y.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),y.style.cssText=x,y.innerText=n||n===0?e+"-"+n:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+i.op.d2],Al(y,0,i,m),y},Al=function(e,n,r,i){var a={display:"block"},o=r[i?"os2":"p2"],s=r[i?"p2":"os2"];e._isFlipped=i,a[r.a+"Percent"]=i?-100:0,a[r.a]=i?"1px":0,a["border"+o+to]=1,a["border"+s+to]=0,a[r.p]=n+"px",D.set(e,a)},K=[],Kd={},Ms,jm=function(){return kt()-Nn>34&&(Ms||(Ms=requestAnimationFrame(wr)))},da=function(){(!Mt||!Mt.isPressed||Mt.startX>ce.clientWidth)&&(J.cache++,Mt?Ms||(Ms=requestAnimationFrame(wr)):wr(),Nn||ea("scrollStart"),Nn=kt())},Nc=function(){E_=Z.innerWidth,C_=Z.innerHeight},Ao=function(e){J.cache++,(e===!0||!xt&&!S_&&!de.fullscreenElement&&!de.webkitFullscreenElement&&(!Xd||E_!==Z.innerWidth||Math.abs(Z.innerHeight-C_)>Z.innerHeight*.25))&&xu.restart(!0)},Ji={},Lw=[],O_=function t(){return tt(X,"scrollEnd",t)||Di(!0)},ea=function(e){return Ji[e]&&Ji[e].map(function(n){return n()})||Lw},nn=[],L_=function(e){for(var n=0;n<nn.length;n+=5)(!e||nn[n+4]&&nn[n+4].query===e)&&(nn[n].style.cssText=nn[n+1],nn[n].getBBox&&nn[n].setAttribute("transform",nn[n+2]||""),nn[n+3].uncache=1)},A_=function(){return J.forEach(function(e){return St(e)&&++e.cacheID&&(e.rec=e())})},zp=function(e,n){var r;for(Ot=0;Ot<K.length;Ot++)r=K[Ot],r&&(!n||r._ctx===n)&&(e?r.kill(1):r.revert(!0,!0));Zo=!0,n&&L_(n),n||ea("revert")},D_=function(e,n){J.cache++,(n||!Lt)&&J.forEach(function(r){return St(r)&&r.cacheID++&&(r.rec=0)}),an(e)&&(Z.history.scrollRestoration=Cp=e)},Lt,Wi=0,Pm,Aw=function(){if(Pm!==Wi){var e=Pm=Wi;requestAnimationFrame(function(){return e===Wi&&Di(!0)})}},F_=function(){ce.appendChild(Ba),Ep=!Mt&&Ba.offsetHeight||Z.innerHeight,ce.removeChild(Ba)},Nm=function(e){return zs(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},Di=function(e,n){if(sn=de.documentElement,ce=de.body,Sp=[Z,de,sn,ce],Nn&&!e&&!Zo){nt(X,"scrollEnd",O_);return}F_(),Lt=X.isRefreshing=!0,Zo||A_();var r=ea("refreshInit");b_&&X.sort(),n||zp(),J.forEach(function(i){St(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),K.slice(0).forEach(function(i){return i.refresh()}),Zo=!1,K.forEach(function(i){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),Gd=1,Nm(!0),K.forEach(function(i){var a=rr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>a,s=i._startClamp&&i.start>=a;(o||s)&&i.setPositions(s?a-1:i.start,o?Math.max(s?a:i.start+1,a):i.end,!0)}),Nm(!1),Gd=0,r.forEach(function(i){return i&&i.render&&i.render(-1)}),J.forEach(function(i){St(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),D_(Cp,1),xu.pause(),Wi++,Lt=2,wr(2),K.forEach(function(i){return St(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Lt=X.isRefreshing=!1,ea("refresh")},Zd=0,Dl=1,rs,wr=function(e){if(e===2||!Lt&&!Zo){X.isUpdating=!0,rs&&rs.update(0);var n=K.length,r=kt(),i=r-Pc>=50,a=n&&K[0].scroll();if(Dl=Zd>a?-1:1,Lt||(Zd=a),i&&(Nn&&!$u&&r-Nn>200&&(Nn=0,ea("scrollEnd")),Mo=Pc,Pc=r),Dl<0){for(Ot=n;Ot-- >0;)K[Ot]&&K[Ot].update(0,i);Dl=1}else for(Ot=0;Ot<n;Ot++)K[Ot]&&K[Ot].update(0,i);X.isUpdating=!1}Ms=0},Jd=[z_,M_,jp,Tp,Sn+ns,Sn+Jo,Sn+ts,Sn+es,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=Jd.concat([$i,Vi,"boxSizing","max"+to,"max"+Pp,"position",Sn,Ve,Ve+ts,Ve+Jo,Ve+ns,Ve+es]),Dw=function(e,n,r){Ua(r);var i=e._gsap;if(i.spacerIsNative)Ua(i.spacerState);else if(e._gsap.swappedIn){var a=n.parentNode;a&&(a.insertBefore(e,n),a.removeChild(n))}e._gsap.swappedIn=!1},zc=function(e,n,r,i){if(!e._gsap.swappedIn){for(var a=Jd.length,o=n.style,s=e.style,l;a--;)l=Jd[a],o[l]=r[l];o.position=r.position==="absolute"?"absolute":"relative",r.display==="inline"&&(o.display="inline-block"),s[jp]=s[Tp]="auto",o.flexBasis=r.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$i]=ku(e,At)+Qe,o[Vi]=ku(e,Ke)+Qe,o[Ve]=s[Sn]=s[M_]=s[z_]="0",Ua(i),s[$i]=s["max"+to]=r[$i],s[Vi]=s["max"+Pp]=r[Vi],s[Ve]=r[Ve],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},Fw=/([A-Z])/g,Ua=function(e){if(e){var n=e.t.style,r=e.length,i=0,a,o;for((e.t._gsap||D.core.getCache(e.t)).uncache=1;i<r;i+=2)o=e[i+1],a=e[i],o?n[a]=o:n[a]&&n.removeProperty(a.replace(Fw,"-$1").toLowerCase())}},ml=function(e){for(var n=Fl.length,r=e.style,i=[],a=0;a<n;a++)i.push(Fl[a],r[Fl[a]]);return i.t=e,i},Iw=function(e,n,r){for(var i=[],a=e.length,o=r?8:0,s;o<a;o+=2)s=e[o],i.push(s,s in n?n[s]:e[o+1]);return i.t=e.t,i},Il={left:0,top:0},zm=function(e,n,r,i,a,o,s,l,u,c,f,p,h,y){St(e)&&(e=e(l)),an(e)&&e.substr(0,3)==="max"&&(e=p+(e.charAt(4)==="="?Ll("0"+e.substr(3),r):0));var g=h?h.time():0,k,v,m;if(h&&h.seek(0),isNaN(e)||(e=+e),Lo(e))h&&(e=D.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,p,e)),s&&Al(s,r,i,!0);else{St(n)&&(n=n(l));var _=(e||"0").split(" "),x,S,C,b;m=Bt(n,l)||ce,x=vr(m)||{},(!x||!x.left&&!x.top)&&Cn(m).display==="none"&&(b=m.style.display,m.style.display="block",x=vr(m),b?m.style.display=b:m.style.removeProperty("display")),S=Ll(_[0],x[i.d]),C=Ll(_[1]||"0",r),e=x[i.p]-u[i.p]-c+S+a-C,s&&Al(s,C,i,r-C<20||s._isStart&&C>20),r-=r-C}if(y&&(l[y]=e||-.001,e<0&&(e=0)),o){var E=e+r,N=o._isStart;k="scroll"+i.d2,Al(o,E,i,N&&E>20||!N&&(f?Math.max(ce[k],sn[k]):o.parentNode[k])<=E+1),f&&(u=vr(s),f&&(o.style[i.op.p]=u[i.op.p]-i.op.m-o._offset+Qe))}return h&&m&&(k=vr(m),h.seek(p),v=vr(m),h._caScrollDist=k[i.p]-v[i.p],e=e/h._caScrollDist*p),h&&h.seek(g),h?e:Math.round(e)},qw=/(webkit|moz|length|cssText|inset)/i,Mm=function(e,n,r,i){if(e.parentNode!==n){var a=e.style,o,s;if(n===ce){e._stOrig=a.cssText,s=Cn(e);for(o in s)!+o&&!qw.test(o)&&s[o]&&typeof a[o]=="string"&&o!=="0"&&(a[o]=s[o]);a.top=r,a.left=i}else a.cssText=e._stOrig;D.core.getCache(e).uncache=1,n.appendChild(e)}},I_=function(e,n,r){var i=n,a=i;return function(o){var s=Math.round(e());return s!==i&&s!==a&&Math.abs(s-i)>3&&Math.abs(s-a)>3&&(o=s,r&&r()),a=i,i=Math.round(o),i}},gl=function(e,n,r){var i={};i[n.p]="+="+r,D.set(e,i)},Rm=function(e,n){var r=hi(e,n),i="_scroll"+n.p2,a=function o(s,l,u,c,f){var p=o.tween,h=l.onComplete,y={};u=u||r();var g=I_(r,u,function(){p.kill(),o.tween=0});return f=c&&f||0,c=c||s-u,p&&p.kill(),l[i]=s,l.inherit=!1,l.modifiers=y,y[i]=function(){return g(u+c*p.ratio+f*p.ratio*p.ratio)},l.onUpdate=function(){J.cache++,o.tween&&wr()},l.onComplete=function(){o.tween=0,h&&h.call(p)},p=o.tween=D.to(e,l),p};return e[i]=r,r.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},nt(e,"wheel",r.wheelHandler),X.isTouch&&nt(e,"touchmove",r.wheelHandler),a},X=function(){function t(n,r){pa||t.register(D)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qd(this),this.init(n,r)}var e=t.prototype;return e.init=function(r,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ro){this.update=this.refresh=this.kill=Jn;return}r=Em(an(r)||Lo(r)||r.nodeType?{trigger:r}:r,pl);var a=r,o=a.onUpdate,s=a.toggleClass,l=a.id,u=a.onToggle,c=a.onRefresh,f=a.scrub,p=a.trigger,h=a.pin,y=a.pinSpacing,g=a.invalidateOnRefresh,k=a.anticipatePin,v=a.onScrubComplete,m=a.onSnapComplete,_=a.once,x=a.snap,S=a.pinReparent,C=a.pinSpacer,b=a.containerAnimation,E=a.fastScrollEnd,N=a.preventOverlaps,T=r.horizontal||r.containerAnimation&&r.horizontal!==!1?At:Ke,F=!f&&f!==0,R=Bt(r.scroller||Z),Q=D.core.getCache(R),H=Zi(R),ne=("pinType"in r?r.pinType:li(R,"pinType")||H&&"fixed")==="fixed",G=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],I=F&&r.toggleActions.split(" "),z="markers"in r?r.markers:pl.markers,L=H?0:parseFloat(Cn(R)["border"+T.p2+to])||0,w=this,U=r.onRefreshInit&&function(){return r.onRefreshInit(w)},ae=Nw(R,H,T),pt=zw(R,H),ue=0,Ae=0,xe=0,ve=hi(R,T),Tt,ht,zr,jt,Pt,oe,De,qt,Jt,j,en,lr,Mr,ze,ur,Rr,xi,Je,Or,Fe,Rn,xn,cr,co,$e,Is,dr,ia,aa,Lr,ki,ee,wi,On,Ln,An,bi,oa,fr;if(w._startClamp=w._endClamp=!1,w._dir=T,k*=45,w.scroller=R,w.scroll=b?b.time.bind(b):ve,jt=ve(),w.vars=r,i=i||r.animation,"refreshPriority"in r&&(b_=1,r.refreshPriority===-9999&&(rs=w)),Q.tweenScroll=Q.tweenScroll||{top:Rm(R,Ke),left:Rm(R,At)},w.tweenTo=Tt=Q.tweenScroll[T.p],w.scrubDuration=function(O){wi=Lo(O)&&O,wi?ee?ee.duration(O):ee=D.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:wi,paused:!0,onComplete:function(){return v&&v(w)}}):(ee&&ee.progress(1).kill(),ee=0)},i&&(i.vars.lazy=!1,i._initted&&!w.isReverted||i.vars.immediateRender!==!1&&r.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),w.animation=i.pause(),i.scrollTrigger=w,w.scrubDuration(f),Lr=0,l||(l=i.vars.id)),x&&((!Mi(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ce.style&&D.set(H?[ce,sn]:R,{scrollBehavior:"auto"}),J.forEach(function(O){return St(O)&&O.target===(H?de.scrollingElement||sn:R)&&(O.smooth=!1)}),zr=St(x.snapTo)?x.snapTo:x.snapTo==="labels"?Rw(i):x.snapTo==="labelsDirectional"?Ow(i):x.directional!==!1?function(O,$){return Np(x.snapTo)(O,kt()-Ae<500?0:$.direction)}:D.utils.snap(x.snapTo),On=x.duration||{min:.1,max:2},On=Mi(On)?Ko(On.min,On.max):Ko(On,On),Ln=D.delayedCall(x.delay||wi/2||.1,function(){var O=ve(),$=kt()-Ae<500,q=Tt.tween;if(($||Math.abs(w.getVelocity())<10)&&!q&&!$u&&ue!==O){var V=(O-oe)/ze,et=i&&!F?i.totalProgress():V,re=$?0:(et-ki)/(kt()-Mo)*1e3||0,Ie=D.utils.clamp(-V,1-V,ca(re/2)*re/.185),mt=V+(x.inertia===!1?0:Ie),Me,ke,pe=x,Dn=pe.onStart,Se=pe.onInterrupt,tn=pe.onComplete;if(Me=zr(mt,w),Lo(Me)||(Me=mt),ke=Math.max(0,Math.round(oe+Me*ze)),O<=De&&O>=oe&&ke!==O){if(q&&!q._initted&&q.data<=ca(ke-O))return;x.inertia===!1&&(Ie=Me-V),Tt(ke,{duration:On(ca(Math.max(ca(mt-et),ca(Me-et))*.185/re/.05||0)),ease:x.ease||"power3",data:ca(ke-O),onInterrupt:function(){return Ln.restart(!0)&&Se&&ua(w,Se)},onComplete:function(){w.update(),ue=ve(),i&&!F&&(ee?ee.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Lr=ki=i&&!F?i.totalProgress():w.progress,m&&m(w),tn&&ua(w,tn)}},O,Ie*ze,ke-O-Ie*ze),Dn&&ua(w,Dn,Tt.tween)}}else w.isActive&&ue!==O&&Ln.restart(!0)}).pause()),l&&(Kd[l]=w),p=w.trigger=Bt(p||h!==!0&&h),fr=p&&p._gsap&&p._gsap.stRevert,fr&&(fr=fr(w)),h=h===!0?p:Bt(h),an(s)&&(s={targets:p,className:s}),h&&(y===!1||y===Sn||(y=!y&&h.parentNode&&h.parentNode.style&&Cn(h.parentNode).display==="flex"?!1:Ve),w.pin=h,ht=D.core.getCache(h),ht.spacer?ur=ht.pinState:(C&&(C=Bt(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),ht.spacerIsNative=!!C,C&&(ht.spacerState=ml(C))),ht.spacer=Je=C||de.createElement("div"),Je.classList.add("pin-spacer"),l&&Je.classList.add("pin-spacer-"+l),ht.pinState=ur=ml(h)),r.force3D!==!1&&D.set(h,{force3D:!0}),w.spacer=Je=ht.spacer,aa=Cn(h),co=aa[y+T.os2],Fe=D.getProperty(h),Rn=D.quickSetter(h,T.a,Qe),zc(h,Je,aa),xi=ml(h)),z){lr=Mi(z)?Em(z,Tm):Tm,j=hl("scroller-start",l,R,T,lr,0),en=hl("scroller-end",l,R,T,lr,0,j),Or=j["offset"+T.op.d2];var fo=Bt(li(R,"content")||R);qt=this.markerStart=hl("start",l,fo,T,lr,Or,0,b),Jt=this.markerEnd=hl("end",l,fo,T,lr,Or,0,b),b&&(oa=D.quickSetter([qt,Jt],T.a,Qe)),!ne&&!(or.length&&li(R,"fixedMarkers")===!0)&&(Mw(H?ce:R),D.set([j,en],{force3D:!0}),Is=D.quickSetter(j,T.a,Qe),ia=D.quickSetter(en,T.a,Qe))}if(b){var Y=b.vars.onUpdate,B=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){w.update(0,0,1),Y&&Y.apply(b,B||[])})}if(w.previous=function(){return K[K.indexOf(w)-1]},w.next=function(){return K[K.indexOf(w)+1]},w.revert=function(O,$){if(!$)return w.kill(!0);var q=O!==!1||!w.enabled,V=xt;q!==w.isReverted&&(q&&(An=Math.max(ve(),w.scroll.rec||0),xe=w.progress,bi=i&&i.progress()),qt&&[qt,Jt,j,en].forEach(function(et){return et.style.display=q?"none":"block"}),q&&(xt=w,w.update(q)),h&&(!S||!w.isActive)&&(q?Dw(h,Je,ur):zc(h,Je,Cn(h),$e)),q||w.update(q),xt=V,w.isReverted=q)},w.refresh=function(O,$,q,V){if(!((xt||!w.enabled)&&!$)){if(h&&O&&Nn){nt(t,"scrollEnd",O_);return}!Lt&&U&&U(w),xt=w,Tt.tween&&!q&&(Tt.tween.kill(),Tt.tween=0),ee&&ee.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ar){return Ar.vars.immediateRender&&Ar.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var et=ae(),re=pt(),Ie=b?b.duration():rr(R,T),mt=ze<=.01||!ze,Me=0,ke=V||0,pe=Mi(q)?q.end:r.end,Dn=r.endTrigger||p,Se=Mi(q)?q.start:r.start||(r.start===0||!p?0:h?"0 0":"0 100%"),tn=w.pinnedContainer=r.pinnedContainer&&Bt(r.pinnedContainer,w),Yn=p&&Math.max(0,K.indexOf(w))||0,ot=Yn,st,gt,Si,qs,vt,Xe,Xn,Vu,Mp,po,Qn,ho,Bs;for(z&&Mi(q)&&(ho=D.getProperty(j,T.p),Bs=D.getProperty(en,T.p));ot-- >0;)Xe=K[ot],Xe.end||Xe.refresh(0,1)||(xt=w),Xn=Xe.pin,Xn&&(Xn===p||Xn===h||Xn===tn)&&!Xe.isReverted&&(po||(po=[]),po.unshift(Xe),Xe.revert(!0,!0)),Xe!==K[ot]&&(Yn--,ot--);for(St(Se)&&(Se=Se(w)),Se=wm(Se,"start",w),oe=zm(Se,p,et,T,ve(),qt,j,w,re,L,ne,Ie,b,w._startClamp&&"_startClamp")||(h?-.001:0),St(pe)&&(pe=pe(w)),an(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(an(Se)?Se.split(" ")[0]:"")+pe:(Me=Ll(pe.substr(2),et),pe=an(Se)?Se:(b?D.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,oe):oe)+Me,Dn=p)),pe=wm(pe,"end",w),De=Math.max(oe,zm(pe||(Dn?"100% 0":Ie),Dn,et,T,ve()+Me,Jt,en,w,re,L,ne,Ie,b,w._endClamp&&"_endClamp"))||-.001,Me=0,ot=Yn;ot--;)Xe=K[ot]||{},Xn=Xe.pin,Xn&&Xe.start-Xe._pinPush<=oe&&!b&&Xe.end>0&&(st=Xe.end-(w._startClamp?Math.max(0,Xe.start):Xe.start),(Xn===p&&Xe.start-Xe._pinPush<oe||Xn===tn)&&isNaN(Se)&&(Me+=st*(1-Xe.progress)),Xn===h&&(ke+=st));if(oe+=Me,De+=Me,w._startClamp&&(w._startClamp+=Me),w._endClamp&&!Lt&&(w._endClamp=De||-.001,De=Math.min(De,rr(R,T))),ze=De-oe||(oe-=.01)&&.001,mt&&(xe=D.utils.clamp(0,1,D.utils.normalize(oe,De,An))),w._pinPush=ke,qt&&Me&&(st={},st[T.a]="+="+Me,tn&&(st[T.p]="-="+ve()),D.set([qt,Jt],st)),h&&!(Gd&&w.end>=rr(R,T)))st=Cn(h),qs=T===Ke,Si=ve(),xn=parseFloat(Fe(T.a))+ke,!Ie&&De>1&&(Qn=(H?de.scrollingElement||sn:R).style,Qn={style:Qn,value:Qn["overflow"+T.a.toUpperCase()]},H&&Cn(ce)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Qn.style["overflow"+T.a.toUpperCase()]="scroll")),zc(h,Je,st),xi=ml(h),gt=vr(h,!0),Vu=ne&&hi(R,qs?At:Ke)(),y?($e=[y+T.os2,ze+ke+Qe],$e.t=Je,ot=y===Ve?ku(h,T)+ze+ke:0,ot&&($e.push(T.d,ot+Qe),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=ot+Qe)),Ua($e),tn&&K.forEach(function(Ar){Ar.pin===tn&&Ar.vars.pinSpacing!==!1&&(Ar._subPinOffset=!0)}),ne&&ve(An)):(ot=ku(h,T),ot&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=ot+Qe)),ne&&(vt={top:gt.top+(qs?Si-oe:Vu)+Qe,left:gt.left+(qs?Vu:Si-oe)+Qe,boxSizing:"border-box",position:"fixed"},vt[$i]=vt["max"+to]=Math.ceil(gt.width)+Qe,vt[Vi]=vt["max"+Pp]=Math.ceil(gt.height)+Qe,vt[Sn]=vt[Sn+ts]=vt[Sn+Jo]=vt[Sn+ns]=vt[Sn+es]="0",vt[Ve]=st[Ve],vt[Ve+ts]=st[Ve+ts],vt[Ve+Jo]=st[Ve+Jo],vt[Ve+ns]=st[Ve+ns],vt[Ve+es]=st[Ve+es],Rr=Iw(ur,vt,S),Lt&&ve(0)),i?(Mp=i._initted,Tc(1),i.render(i.duration(),!0,!0),cr=Fe(T.a)-xn+ze+ke,dr=Math.abs(ze-cr)>1,ne&&dr&&Rr.splice(Rr.length-2,2),i.render(0,!0,!0),Mp||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Tc(0)):cr=ze,Qn&&(Qn.value?Qn.style["overflow"+T.a.toUpperCase()]=Qn.value:Qn.style.removeProperty("overflow-"+T.a));else if(p&&ve()&&!b)for(gt=p.parentNode;gt&&gt!==ce;)gt._pinOffset&&(oe-=gt._pinOffset,De-=gt._pinOffset),gt=gt.parentNode;po&&po.forEach(function(Ar){return Ar.revert(!1,!0)}),w.start=oe,w.end=De,jt=Pt=Lt?An:ve(),!b&&!Lt&&(jt<An&&ve(An),w.scroll.rec=0),w.revert(!1,!0),Ae=kt(),Ln&&(ue=-1,Ln.restart(!0)),xt=0,i&&F&&(i._initted||bi)&&i.progress()!==bi&&i.progress(bi||0,!0).render(i.time(),!0,!0),(mt||xe!==w.progress||b||g||i&&!i._initted)&&(i&&!F&&(i._initted||xe||i.vars.immediateRender!==!1)&&i.totalProgress(b&&oe<-.001&&!xe?D.utils.normalize(oe,De,0):xe,!0),w.progress=mt||(jt-oe)/ze===xe?0:xe),h&&y&&(Je._pinOffset=Math.round(w.progress*cr)),ee&&ee.invalidate(),isNaN(ho)||(ho-=D.getProperty(j,T.p),Bs-=D.getProperty(en,T.p),gl(j,T,ho),gl(qt,T,ho-(V||0)),gl(en,T,Bs),gl(Jt,T,Bs-(V||0))),mt&&!Lt&&w.update(),c&&!Lt&&!Mr&&(Mr=!0,c(w),Mr=!1)}},w.getVelocity=function(){return(ve()-Pt)/(kt()-Mo)*1e3||0},w.endAnimation=function(){Co(w.callbackAnimation),i&&(ee?ee.progress(1):i.paused()?F||Co(i,w.direction<0,1):Co(i,i.reversed()))},w.labelToScroll=function(O){return i&&i.labels&&(oe||w.refresh()||oe)+i.labels[O]/i.duration()*ze||0},w.getTrailing=function(O){var $=K.indexOf(w),q=w.direction>0?K.slice(0,$).reverse():K.slice($+1);return(an(O)?q.filter(function(V){return V.vars.preventOverlaps===O}):q).filter(function(V){return w.direction>0?V.end<=oe:V.start>=De})},w.update=function(O,$,q){if(!(b&&!q&&!O)){var V=Lt===!0?An:w.scroll(),et=O?0:(V-oe)/ze,re=et<0?0:et>1?1:et||0,Ie=w.progress,mt,Me,ke,pe,Dn,Se,tn,Yn;if($&&(Pt=jt,jt=b?ve():V,x&&(ki=Lr,Lr=i&&!F?i.totalProgress():re)),k&&h&&!xt&&!ul&&Nn&&(!re&&oe<V+(V-Pt)/(kt()-Mo)*k?re=1e-4:re===1&&De>V+(V-Pt)/(kt()-Mo)*k&&(re=.9999)),re!==Ie&&w.enabled){if(mt=w.isActive=!!re&&re<1,Me=!!Ie&&Ie<1,Se=mt!==Me,Dn=Se||!!re!=!!Ie,w.direction=re>Ie?1:-1,w.progress=re,Dn&&!xt&&(ke=re&&!Ie?0:re===1?1:Ie===1?2:3,F&&(pe=!Se&&I[ke+1]!=="none"&&I[ke+1]||I[ke],Yn=i&&(pe==="complete"||pe==="reset"||pe in i))),N&&(Se||Yn)&&(Yn||f||!i)&&(St(N)?N(w):w.getTrailing(N).forEach(function(Si){return Si.endAnimation()})),F||(ee&&!xt&&!ul?(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",re,i._tTime/i._tDur):(ee.vars.totalProgress=re,ee.invalidate().restart())):i&&i.totalProgress(re,!!(xt&&(Ae||O)))),h){if(O&&y&&(Je.style[y+T.os2]=co),!ne)Rn(Oo(xn+cr*re));else if(Dn){if(tn=!O&&re>Ie&&De+1>V&&V+1>=rr(R,T),S)if(!O&&(mt||tn)){var ot=vr(h,!0),st=V-oe;Mm(h,ce,ot.top+(T===Ke?st:0)+Qe,ot.left+(T===Ke?0:st)+Qe)}else Mm(h,Je);Ua(mt||tn?Rr:xi),dr&&re<1&&mt||Rn(xn+(re===1&&!tn?cr:0))}}x&&!Tt.tween&&!xt&&!ul&&Ln.restart(!0),s&&(Se||_&&re&&(re<1||!jc))&&zs(s.targets).forEach(function(Si){return Si.classList[mt||_?"add":"remove"](s.className)}),o&&!F&&!O&&o(w),Dn&&!xt?(F&&(Yn&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(w)),(Se||!jc)&&(u&&Se&&ua(w,u),G[ke]&&ua(w,G[ke]),_&&(re===1?w.kill(!1,1):G[ke]=0),Se||(ke=re===1?1:3,G[ke]&&ua(w,G[ke]))),E&&!mt&&Math.abs(w.getVelocity())>(Lo(E)?E:2500)&&(Co(w.callbackAnimation),ee?ee.progress(1):Co(i,pe==="reverse"?1:!re,1))):F&&o&&!xt&&o(w)}if(ia){var gt=b?V/b.duration()*(b._caScrollDist||0):V;Is(gt+(j._isFlipped?1:0)),ia(gt)}oa&&oa(-V/b.duration()*(b._caScrollDist||0))}},w.enable=function(O,$){w.enabled||(w.enabled=!0,nt(R,"resize",Ao),H||nt(R,"scroll",da),U&&nt(t,"refreshInit",U),O!==!1&&(w.progress=xe=0,jt=Pt=ue=ve()),$!==!1&&w.refresh())},w.getTween=function(O){return O&&Tt?Tt.tween:ee},w.setPositions=function(O,$,q,V){if(b){var et=b.scrollTrigger,re=b.duration(),Ie=et.end-et.start;O=et.start+Ie*O/re,$=et.start+Ie*$/re}w.refresh(!1,!1,{start:bm(O,q&&!!w._startClamp),end:bm($,q&&!!w._endClamp)},V),w.update()},w.adjustPinSpacing=function(O){if($e&&O){var $=$e.indexOf(T.d)+1;$e[$]=parseFloat($e[$])+O+Qe,$e[1]=parseFloat($e[1])+O+Qe,Ua($e)}},w.disable=function(O,$){if(O!==!1&&w.revert(!0,!0),w.enabled&&(w.enabled=w.isActive=!1,$||ee&&ee.pause(),An=0,ht&&(ht.uncache=1),U&&tt(t,"refreshInit",U),Ln&&(Ln.pause(),Tt.tween&&Tt.tween.kill()&&(Tt.tween=0)),!H)){for(var q=K.length;q--;)if(K[q].scroller===R&&K[q]!==w)return;tt(R,"resize",Ao),H||tt(R,"scroll",da)}},w.kill=function(O,$){w.disable(O,$),ee&&!$&&ee.kill(),l&&delete Kd[l];var q=K.indexOf(w);q>=0&&K.splice(q,1),q===Ot&&Dl>0&&Ot--,q=0,K.forEach(function(V){return V.scroller===w.scroller&&(q=1)}),q||Lt||(w.scroll.rec=0),i&&(i.scrollTrigger=null,O&&i.revert({kill:!1}),$||i.kill()),qt&&[qt,Jt,j,en].forEach(function(V){return V.parentNode&&V.parentNode.removeChild(V)}),rs===w&&(rs=0),h&&(ht&&(ht.uncache=1),q=0,K.forEach(function(V){return V.pin===h&&q++}),q||(ht.spacer=0)),r.onKill&&r.onKill(w)},K.push(w),w.enable(!1,!1),fr&&fr(w),i&&i.add&&!ze){var le=w.update;w.update=function(){w.update=le,J.cache++,oe||De||w.refresh()},D.delayedCall(.01,w.update),ze=.01,oe=De=0}else w.refresh();h&&Aw()},t.register=function(r){return pa||(D=r||j_(),T_()&&window.document&&t.enable(),pa=Ro),pa},t.defaults=function(r){if(r)for(var i in r)pl[i]=r[i];return pl},t.disable=function(r,i){Ro=0,K.forEach(function(o){return o[i?"kill":"disable"](r)}),tt(Z,"wheel",da),tt(de,"scroll",da),clearInterval(ll),tt(de,"touchcancel",Jn),tt(ce,"touchstart",Jn),dl(tt,de,"pointerdown,touchstart,mousedown",Sm),dl(tt,de,"pointerup,touchend,mouseup",Cm),xu.kill(),cl(tt);for(var a=0;a<J.length;a+=3)fl(tt,J[a],J[a+1]),fl(tt,J[a],J[a+2])},t.enable=function(){if(Z=window,de=document,sn=de.documentElement,ce=de.body,D){if(zs=D.utils.toArray,Ko=D.utils.clamp,Qd=D.core.context||Jn,Tc=D.core.suppressOverwrites||Jn,Cp=Z.history.scrollRestoration||"auto",Zd=Z.pageYOffset||0,D.core.globals("ScrollTrigger",t),ce){Ro=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",F_(),Pw(),Ue.register(D),t.isTouch=Ue.isTouch,Fr=Ue.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xd=Ue.isTouch===1,nt(Z,"wheel",da),Sp=[Z,de,sn,ce],D.matchMedia?(t.matchMedia=function(c){var f=D.matchMedia(),p;for(p in c)f.add(p,c[p]);return f},D.addEventListener("matchMediaInit",function(){A_(),zp()}),D.addEventListener("matchMediaRevert",function(){return L_()}),D.addEventListener("matchMedia",function(){Di(0,1),ea("matchMedia")}),D.matchMedia().add("(orientation: portrait)",function(){return Nc(),Nc})):console.warn("Requires GSAP 3.11.0 or later"),Nc(),nt(de,"scroll",da);var r=ce.hasAttribute("style"),i=ce.style,a=i.borderTopStyle,o=D.core.Animation.prototype,s,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=vr(ce),Ke.m=Math.round(s.top+Ke.sc())||0,At.m=Math.round(s.left+At.sc())||0,a?i.borderTopStyle=a:i.removeProperty("border-top-style"),r||(ce.setAttribute("style",""),ce.removeAttribute("style")),ll=setInterval(jm,250),D.delayedCall(.5,function(){return ul=0}),nt(de,"touchcancel",Jn),nt(ce,"touchstart",Jn),dl(nt,de,"pointerdown,touchstart,mousedown",Sm),dl(nt,de,"pointerup,touchend,mouseup",Cm),Yd=D.utils.checkPrefix("transform"),Fl.push(Yd),pa=kt(),xu=D.delayedCall(.2,Di).pause(),ha=[de,"visibilitychange",function(){var c=Z.innerWidth,f=Z.innerHeight;de.hidden?(xm=c,km=f):(xm!==c||km!==f)&&Ao()},de,"DOMContentLoaded",Di,Z,"load",Di,Z,"resize",Ao],cl(nt),K.forEach(function(c){return c.enable(0,1)}),l=0;l<J.length;l+=3)fl(tt,J[l],J[l+1]),fl(tt,J[l],J[l+2])}else if(de){var u=function c(){t.enable(),de.removeEventListener("DOMContentLoaded",c)};de.addEventListener("DOMContentLoaded",u)}}},t.config=function(r){"limitCallbacks"in r&&(jc=!!r.limitCallbacks);var i=r.syncInterval;i&&clearInterval(ll)||(ll=i)&&setInterval(jm,i),"ignoreMobileResize"in r&&(Xd=t.isTouch===1&&r.ignoreMobileResize),"autoRefreshEvents"in r&&(cl(tt)||cl(nt,r.autoRefreshEvents||"none"),S_=(r.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(r,i){var a=Bt(r),o=J.indexOf(a),s=Zi(a);~o&&J.splice(o,s?6:2),i&&(s?or.unshift(Z,i,ce,i,sn,i):or.unshift(a,i))},t.clearMatchMedia=function(r){K.forEach(function(i){return i._ctx&&i._ctx.query===r&&i._ctx.kill(!0,!0)})},t.isInViewport=function(r,i,a){var o=(an(r)?Bt(r):r).getBoundingClientRect(),s=o[a?$i:Vi]*i||0;return a?o.right-s>0&&o.left+s<Z.innerWidth:o.bottom-s>0&&o.top+s<Z.innerHeight},t.positionInViewport=function(r,i,a){an(r)&&(r=Bt(r));var o=r.getBoundingClientRect(),s=o[a?$i:Vi],l=i==null?s/2:i in wu?wu[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return a?(o.left+l)/Z.innerWidth:(o.top+l)/Z.innerHeight},t.killAll=function(r){if(K.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),r!==!0){var i=Ji.killAll||[];Ji={},i.forEach(function(a){return a()})}},t}();X.version="3.15.0";X.saveStyles=function(t){return t?zs(t).forEach(function(e){if(e&&e.style){var n=nn.indexOf(e);n>=0&&nn.splice(n,5),nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),D.core.getCache(e),Qd())}}):nn};X.revert=function(t,e){return zp(!t,e)};X.create=function(t,e){return new X(t,e)};X.refresh=function(t){return t?Ao(!0):(pa||X.register())&&Di(!0)};X.update=function(t){return++J.cache&&wr(t===!0?2:0)};X.clearScrollMemory=D_;X.maxScroll=function(t,e){return rr(t,e?At:Ke)};X.getScrollFunc=function(t,e){return hi(Bt(t),e?At:Ke)};X.getById=function(t){return Kd[t]};X.getAll=function(){return K.filter(function(t){return t.vars.id!=="ScrollSmoother"})};X.isScrolling=function(){return!!Nn};X.snapDirectional=Np;X.addEventListener=function(t,e){var n=Ji[t]||(Ji[t]=[]);~n.indexOf(e)||n.push(e)};X.removeEventListener=function(t,e){var n=Ji[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)};X.batch=function(t,e){var n=[],r={},i=e.interval||.016,a=e.batchMax||1e9,o=function(u,c){var f=[],p=[],h=D.delayedCall(i,function(){c(f,p),f=[],p=[]}).pause();return function(y){f.length||h.restart(!0),f.push(y.trigger),p.push(y),a<=f.length&&h.progress(1)}},s;for(s in e)r[s]=s.substr(0,2)==="on"&&St(e[s])&&s!=="onRefreshInit"?o(s,e[s]):e[s];return St(a)&&(a=a(),nt(X,"refresh",function(){return a=e.batchMax()})),zs(t).forEach(function(l){var u={};for(s in r)u[s]=r[s];u.trigger=l,n.push(X.create(u))}),n};var Om=function(e,n,r,i){return n>i?e(i):n<0&&e(0),r>i?(i-n)/(r-n):r<0?n/(n-r):1},Mc=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(Ue.isTouch?" pinch-zoom":""):"none",e===sn&&t(ce,n)},vl={auto:1,scroll:1},Bw=function(e){var n=e.event,r=e.target,i=e.axis,a=(n.changedTouches?n.changedTouches[0]:n).target,o=a._gsap||D.core.getCache(a),s=kt(),l;if(!o._isScrollT||s-o._isScrollT>2e3){for(;a&&a!==ce&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(vl[(l=Cn(a)).overflowY]||vl[l.overflowX]));)a=a.parentNode;o._isScroll=a&&a!==r&&!Zi(a)&&(vl[(l=Cn(a)).overflowY]||vl[l.overflowX]),o._isScrollT=s}(o._isScroll||i==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},q_=function(e,n,r,i){return Ue.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:i=i&&Bw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return r&&nt(de,Ue.eventTypes[0],Am,!1,!0)},onDisable:function(){return tt(de,Ue.eventTypes[0],Am,!0)}})},Uw=/(input|label|select|textarea)/i,Lm,Am=function(e){var n=Uw.test(e.target.tagName);(n||Lm)&&(e._gsapAllow=!0,Lm=n)},Hw=function(e){Mi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,r=n.normalizeScrollX,i=n.momentum,a=n.allowNestedScroll,o=n.onRelease,s,l,u=Bt(e.target)||sn,c=D.core.globals().ScrollSmoother,f=c&&c.get(),p=Fr&&(e.content&&Bt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=hi(u,Ke),y=hi(u,At),g=1,k=(Ue.isTouch&&Z.visualViewport?Z.visualViewport.scale*Z.visualViewport.width:Z.outerWidth)/Z.innerWidth,v=0,m=St(i)?function(){return i(s)}:function(){return i||2.8},_,x,S=q_(u,e.type,!0,a),C=function(){return x=!1},b=Jn,E=Jn,N=function(){l=rr(u,Ke),E=Ko(Fr?1:0,l),r&&(b=Ko(0,rr(u,At))),_=Wi},T=function(){p._gsap.y=Oo(parseFloat(p._gsap.y)+h.offset)+"px",p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(p._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},F=function(){if(x){requestAnimationFrame(C);var z=Oo(s.deltaY/2),L=E(h.v-z);if(p&&L!==h.v+h.offset){h.offset=L-h.v;var w=Oo((parseFloat(p&&p._gsap.y)||0)-h.offset);p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",p._gsap.y=w+"px",h.cacheID=J.cache,wr()}return!0}h.offset&&T(),x=!0},R,Q,H,ne,G=function(){N(),R.isActive()&&R.vars.scrollY>l&&(h()>l?R.progress(1)&&h(l):R.resetTo("scrollY",l))};return p&&D.set(p,{y:"+=0"}),e.ignoreCheck=function(I){return Fr&&I.type==="touchmove"&&F()||g>1.05&&I.type!=="touchstart"||s.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){x=!1;var I=g;g=Oo((Z.visualViewport&&Z.visualViewport.scale||1)/k),R.pause(),I!==g&&Mc(u,g>1.01?!0:r?!1:"x"),Q=y(),H=h(),N(),_=Wi},e.onRelease=e.onGestureStart=function(I,z){if(h.offset&&T(),!z)ne.restart(!0);else{J.cache++;var L=m(),w,U;r&&(w=y(),U=w+L*.05*-I.velocityX/.227,L*=Om(y,w,U,rr(u,At)),R.vars.scrollX=b(U)),w=h(),U=w+L*.05*-I.velocityY/.227,L*=Om(h,w,U,rr(u,Ke)),R.vars.scrollY=E(U),R.invalidate().duration(L).play(.01),(Fr&&R.vars.scrollY>=l||w>=l-1)&&D.to({},{onUpdate:G,duration:L})}o&&o(I)},e.onWheel=function(){R._ts&&R.pause(),kt()-v>1e3&&(_=0,v=kt())},e.onChange=function(I,z,L,w,U){if(Wi!==_&&N(),z&&r&&y(b(w[2]===z?Q+(I.startX-I.x):y()+z-w[1])),L){h.offset&&T();var ae=U[2]===L,pt=ae?H+I.startY-I.y:h()+L-U[1],ue=E(pt);ae&&pt!==ue&&(H+=ue-pt),h(ue)}(L||z)&&wr()},e.onEnable=function(){Mc(u,r?!1:"x"),X.addEventListener("refresh",G),nt(Z,"resize",G),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=y.smooth=!1),S.enable()},e.onDisable=function(){Mc(u,!0),tt(Z,"resize",G),X.removeEventListener("refresh",G),S.kill()},e.lockAxis=e.lockAxis!==!1,s=new Ue(e),s.iOS=Fr,Fr&&!h()&&h(1),Fr&&D.ticker.add(Jn),ne=s._dc,R=D.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:r?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:I_(h,h(),function(){return R.pause()})},onUpdate:wr,onComplete:ne.vars.onComplete}),s};X.sort=function(t){if(St(t))return K.sort(t);var e=Z.pageYOffset||0;return X.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+Z.innerHeight}),K.sort(t||function(n,r){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})};X.observe=function(t){return new Ue(t)};X.normalizeScroll=function(t){if(typeof t>"u")return Mt;if(t===!0&&Mt)return Mt.enable();if(t===!1){Mt&&Mt.kill(),Mt=t;return}var e=t instanceof Ue?t:Hw(t);return Mt&&Mt.target===e.target&&Mt.kill(),Zi(e.target)&&(Mt=e),e};X.core={_getVelocityProp:Wd,_inputObserver:q_,_scrollers:J,_proxies:or,bridge:{ss:function(){Nn||ea("scrollStart"),Nn=kt()},ref:function(){return xt}}};j_()&&D.registerPlugin(X);let Dm=!1;function $w(){Dm||typeof window<"u"&&(Oe.registerPlugin(X),Dm=!0)}function lo(t,e=[]){const n=P.useRef(null);return P.useEffect(()=>{if($w(),!n.current||typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=Oe.context(()=>t(n.current),n.current);return()=>r.revert()},e),n}function Vw({titleComponent:t,children:e}){const n=lo(r=>{const i=r.querySelector(".cscroll__card"),a=r.querySelector(".cscroll__header");if(!i)return;if(window.matchMedia("(max-width: 768px)").matches){Oe.fromTo(i,{scale:.96,y:26},{scale:1,y:0,ease:"none",scrollTrigger:{trigger:i,start:"top 94%",end:"top 52%",scrub:.5}});return}const s={trigger:i,start:"top bottom",end:"center center",scrub:.5};Oe.fromTo(i,{rotateX:26,scale:1.06},{rotateX:0,scale:1,ease:"none",scrollTrigger:s}),a&&Oe.fromTo(a,{y:0},{y:-50,ease:"none",scrollTrigger:s})});return d.jsxs("div",{className:"cscroll",ref:n,children:[d.jsxs("div",{className:"cscroll__inner",children:[d.jsx("div",{className:"cscroll__header",children:t}),d.jsx("div",{className:"cscroll__card",children:d.jsx("div",{className:"cscroll__screen",children:e})})]}),d.jsx("style",{children:`
        .cscroll { position: relative; }
        .cscroll__inner { perspective: 1000px; }
        .cscroll__header {
          max-width: 720px;
          margin: 0 auto 26px;
          text-align: center;
          will-change: transform;
        }
        .cscroll__card {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
          padding: 10px;
          border-radius: 30px;
          transform-origin: center top;
          transform-style: preserve-3d;
          background: var(--glass-strong);
          -webkit-backdrop-filter: blur(24px) saturate(1.8) brightness(1.06);
          backdrop-filter: url(#lg-refract) blur(24px) saturate(1.8) brightness(1.06);
          border: 1px solid var(--glass-border);
          box-shadow:
            0 2px 4px rgba(23, 22, 27, 0.05),
            0 40px 90px -30px rgba(23, 22, 27, 0.32),
            0 0 80px rgba(90, 160, 124, 0.14),
            inset 0 1.5px 1.5px var(--glass-hi);
          will-change: transform;
        }
        .cscroll__screen {
          height: clamp(340px, 52vh, 560px);
          border-radius: 22px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--hairline);
        }
        .cscroll__screen > * { height: 100%; }

        @media (max-width: 768px) {
          .cscroll__card { border-radius: 22px; padding: 6px; }
          .cscroll__screen { border-radius: 16px; height: clamp(440px, 78vh, 600px); }
          .cscroll__header { margin-bottom: 18px; }
        }
      `})]})}function Ww(){return d.jsxs("div",{className:"ascreen",children:[d.jsx("img",{className:"ascreen__shot",src:"/hatlas-dashboard.jpg",width:2040,height:1221,alt:"Centro de operaciones de Hatlas: vista del negocio con ingresos, resultado, margen, órdenes, ticket promedio y gastos de los últimos 30 días, más el flujo de ingresos vs gastos y los ingresos por categoría.",loading:"eager",fetchpriority:"high",draggable:!1}),d.jsx("style",{children:`
        .ascreen {
          height: 100%;
          width: 100%;
          overflow: hidden;
          /* mismo tono que la captura: sin destello blanco al cargar */
          background: #0E0D11;
        }
        .ascreen__shot {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
        }
      `})]})}const Yw=["salteneria","gimnasio","ferreteria"],Xw="salteneria",B_={salteneria:{key:"salteneria",label:"Salteñería",heroSubhead:{pre:"Registrá tus ventas, emití facturas legales al instante, controlá tu stock e inventario, y te avisa cuando ",em:"tus ventas o tus costos cambian.",post:" Todo en un solo lugar, listo en una semana."},cards:{cobros:{eyebrow:"COBROS · HOY",value:"12.840",foot:"▲ +18% vs ayer"},stock:{eyebrow:"STOCK · ALMACÉN",pname:"Queso fresco",pdays:"4 días",level:22,foot:"Último pedido tardó 3 días"},cliente:{eyebrow:"CLIENTE INACTIVO",initials:"CM",name:"Carlos Mendoza",tag:"Compraba cada semana",time:"23d sin volver",cta:"Reactivar →"},margen:{eyebrow:"MARGEN · POLLO",delta:"−8%",foot:"Costo de pollo subió 12%"}},chat:{question:"¿Por qué bajaron las ventas esta semana?",lead:"Tres factores, ordenados por impacto:",steps:[{tag:"Stock",text:d.jsxs(d.Fragment,{children:["Te quedaste sin ",d.jsx("em",{children:"empanada de pollo"})," el jueves y el viernes, tu producto más vendido en la hora pico."]})},{tag:"Precios",text:d.jsxs(d.Fragment,{children:["El nuevo proveedor de queso te subió el costo desde el lunes. Ajustaste el precio en"," ",d.jsx("em",{children:"4 productos"})," pero faltan ",d.jsx("em",{children:"3 más"}),"."]})},{tag:"Clientes",text:d.jsxs(d.Fragment,{children:[d.jsx("em",{children:"Carlos Mendoza"})," compraba todas las semanas. No vuelve hace 23 días."]})}],suggestion:"Campaña WhatsApp a tus 38 clientes inactivos. Plantilla lista.",actions:["Aprobar campaña","Ver detalle por sucursal"]},insights:[{icon:"trend",title:"Ganás 8% menos por cada empanada de pollo esta semana.",detail:"El pollo te subió 12% y todavía no ajustaste el precio de venta.",meta:"Sucursal Equipetrol · Hace 2 horas"},{icon:"package",title:"Te quedan 4 días de queso al ritmo en que se vende.",detail:"Tu último pedido tardó 3 días en llegar. Conviene pedir ahora.",meta:"Almacén central · Hace 30 minutos"},{icon:"user",title:"Carlos Mendoza era cliente todas las semanas. No compra hace 23 días.",detail:"Te sugiero mandarle un mensaje antes de que se vaya.",meta:"Detectado hoy"}],modules:{pos:{title:"Facturar",lines:[{label:"Empanada de pollo · 2",amount:"Bs 24"},{label:"Jugo de frutilla",amount:"Bs 10"}],ghost:"QR de factura listo",total:"34,00"},almacen:{title:"Almacén · Equipetrol",items:[{sku:"Empanada pollo · picante",stock:22},{sku:"Empanada pollo · suave",stock:8},{sku:"Jugo frutilla · agua",stock:14}]},logistica:{title:"Movimientos de hoy",from:"Cocina central",to:"Las Palmas",chips:["320 unidades","8 productos","en camino"]},finanzas:{title:"Posición consolidada",amount:"4.488",delta:"▲ 18% vs mes pasado"},clientes:{title:"Clientes recientes",rows:[{name:"Camila Vega",visits:"Semanal"},{name:"Carlos Mendoza",visits:"23d sin volver"},{name:"Andrea Roldán",visits:"Mensual"}]},personal:{title:"Hoy · cobertura",stats:[{num:"14",label:"en turno"},{num:"2",label:"retraso"},{num:"1",label:"licencia"}]}}},gimnasio:{key:"gimnasio",label:"Gimnasio",heroSubhead:{pre:"Registrá tus cobros, emití facturas legales al instante, controlá tus socios y sus cuotas, y te avisa cuando ",em:"alguien está por darse de baja.",post:" Todo en un solo lugar, listo en una semana."},cards:{cobros:{eyebrow:"COBROS · ESTE MES",value:"18.400",foot:"▲ +12% vs mes pasado"},stock:{eyebrow:"SUSCRIPCIONES POR VENCER",pname:"Vencen esta semana",pdays:"20",level:30,foot:"Mandales el recordatorio de pago"},cliente:{eyebrow:"SOCIO EN RIESGO",initials:"CR",name:"Carlos Rivas",tag:"8 meses seguidos activo",time:"23d sin venir",cta:"Escribirle →"},margen:{eyebrow:"RENOVACIONES",delta:"−12%",foot:"3 semanas cayendo seguidas"}},chat:{question:"¿Por qué bajaron las renovaciones este mes?",lead:"Tres factores, ordenados por impacto:",steps:[{tag:"Asistencia",text:d.jsxs(d.Fragment,{children:[d.jsx("em",{children:"63 socios"})," dejaron de venir hace más de 2 semanas. Los que faltan tanto casi nunca renuevan."]})},{tag:"Cobros",text:d.jsxs(d.Fragment,{children:[d.jsx("em",{children:"20 cuotas"})," vencen esta semana y todavía nadie les avisó."]})},{tag:"Socios",text:d.jsxs(d.Fragment,{children:[d.jsx("em",{children:"Carlos Rivas"})," entrenó 8 meses seguidos. No viene hace 23 días."]})}],suggestion:"Campaña WhatsApp a tus socios inactivos y a los que vencen. Plantilla lista.",actions:["Aprobar campaña","Ver socios en riesgo"]},insights:[{icon:"calendar",title:"63 socios no vienen hace más de 2 semanas.",detail:"Los que faltan dos semanas casi nunca renuevan. Conviene escribirles ya.",meta:"Sede Las Palmas · Hace 2 horas"},{icon:"trend",title:"Las renovaciones cayeron 12% este mes.",detail:"Tres semanas seguidas a la baja. Revisá los planes que están por vencer.",meta:"Hace 30 minutos"},{icon:"user",title:"Carlos Rivas entrenó 8 meses seguidos. No viene hace 23 días.",detail:"Te sugiero mandarle un mensaje antes de que se dé de baja.",meta:"Detectado hoy"}],modules:{pos:{title:"Cobrar cuota",lines:[{label:"Plan mensual full",amount:"Bs 250"},{label:"Inscripción",amount:"Bs 80"}],ghost:"Factura enviada por WhatsApp",total:"330,00"},almacen:{title:"Suplementos · Las Palmas",items:[{sku:"Proteína 1kg · vainilla",stock:6},{sku:"Pre-entreno · sandía",stock:3},{sku:"Agua saborizada",stock:24}]},logistica:{title:"Traspasos de hoy",from:"Sede Central",to:"Sede Norte",chips:["4 mancuernas","2 colchonetas","en camino"]},finanzas:{title:"Posición consolidada",amount:"18.400",delta:"▲ 12% vs mes pasado"},clientes:{title:"Socios recientes",rows:[{name:"Lucía Paz",visits:"3x semana"},{name:"Carlos Rivas",visits:"23d sin venir"},{name:"Marco Díaz",visits:"Mensual"}]},personal:{title:"Hoy · entrenadores",stats:[{num:"6",label:"en turno"},{num:"1",label:"retraso"},{num:"1",label:"licencia"}]}}},ferreteria:{key:"ferreteria",label:"Ferretería",heroSubhead:{pre:"Registrá tus ventas, emití facturas legales al instante, controlá tu stock e inventario, y te avisa cuando ",em:"un producto está por agotarse o un cliente te debe.",post:" Todo en un solo lugar, listo en una semana."},cards:{cobros:{eyebrow:"COBROS · HOY",value:"5.120",foot:"▲ +9% vs ayer"},stock:{eyebrow:"STOCK · REPONER",pname:"Cemento",pdays:"8 bolsas",level:18,foot:"Al ritmo de venta, ~3 días"},cliente:{eyebrow:"CLIENTE CON FIADO",initials:"DM",name:"Don Mario",tag:"Compra cada semana",time:"Debe Bs 1.240 · 18d",cta:"Cobrar →"},margen:{eyebrow:"MARGEN · CEMENTO",delta:"−6%",foot:"El cemento te subió 9%"}},chat:{question:"¿Por qué cayó la venta esta semana?",lead:"Tres factores, ordenados por impacto:",steps:[{tag:"Stock",text:d.jsxs(d.Fragment,{children:["Te quedaste sin cemento ",d.jsx("em",{children:"2 días"}),". Es tu producto más vendido."]})},{tag:"Fiado",text:d.jsxs(d.Fragment,{children:[d.jsx("em",{children:"5 clientes"})," con cuenta te deben Bs 8.900 hace más de 30 días."]})},{tag:"Precios",text:d.jsxs(d.Fragment,{children:["El proveedor subió la varilla ",d.jsx("em",{children:"9%"})," y todavía no ajustaste el precio."]})}],suggestion:"Recordatorio de pago por WhatsApp a tus clientes con fiado vencido. Plantilla lista.",actions:["Aprobar recordatorios","Ver fiados vencidos"]},insights:[{icon:"package",title:"Te quedan unos 3 días de cemento al ritmo en que se vende.",detail:"Tu último pedido tardó 2 días en llegar. Conviene pedir ahora.",meta:"Depósito · Hace 30 minutos"},{icon:"wallet",title:"5 clientes con fiado vencido hace más de 30 días.",detail:"Suman Bs 8.900. Te armo el recordatorio por WhatsApp.",meta:"Detectado hoy"},{icon:"trend",title:"Ganás 6% menos por bolsa de cemento esta semana.",detail:"El proveedor te subió 9% y todavía no ajustaste el precio de venta.",meta:"Hace 2 horas"}],modules:{pos:{title:"Facturar",lines:[{label:"Cemento IP-30 · 4 bolsas",amount:"Bs 220"},{label:"Varilla 12mm · 3",amount:"Bs 96"}],ghost:"QR de factura listo",total:"316,00"},almacen:{title:"Stock · Depósito",items:[{sku:"Cemento IP-30",stock:8},{sku:"Varilla 12mm",stock:24},{sku:'Clavos 2" · kg',stock:5}]},logistica:{title:"Movimientos de hoy",from:"Depósito",to:"Sucursal Centro",chips:["40 bolsas","6 productos","en camino"]},finanzas:{title:"Posición consolidada",amount:"5.120",delta:"▲ 9% vs mes pasado"},clientes:{title:"Clientes recientes",rows:[{name:"Constructora Sur",visits:"Semanal"},{name:"Don Mario",visits:"Debe Bs 1.240"},{name:"Rosa Lima",visits:"Mensual"}]},personal:{title:"Hoy · cobertura",stats:[{num:"5",label:"en turno"},{num:"1",label:"retraso"},{num:"0",label:"licencia"}]}}}},U_=P.createContext(null);function Qw({children:t}){const[e,n]=P.useState(Xw),r=P.useMemo(()=>({vertical:e,setVertical:n,data:B_[e]}),[e]);return d.jsx(U_.Provider,{value:r,children:t})}function Wn(){const t=P.useContext(U_);if(!t)throw new Error("useVertical must be used inside <VerticalProvider>");return t}function Gw(){const{data:t,vertical:e}=Wn(),n=t.cards,r=t.modules.finanzas,i=lo(a=>{Oe.fromTo(a,{y:30,scale:.97,autoAlpha:.6},{y:0,scale:1,autoAlpha:1,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 92%",end:"top 55%",scrub:.4}})});return d.jsxs("div",{className:"phone",ref:i,"aria-hidden":"true",children:[d.jsxs("div",{className:"phone__frame",children:[d.jsx("span",{className:"phone__island"}),d.jsxs("div",{className:"phone__screen",children:[d.jsxs("div",{className:"phone__status",children:[d.jsx("span",{children:"20:41"}),d.jsxs("span",{className:"phone__status-r",children:[d.jsx("i",{}),d.jsx("i",{}),d.jsx("i",{className:"bat"})]})]}),d.jsxs("div",{className:"phone__head",children:[d.jsxs("span",{className:"phone__live",children:[d.jsx("span",{})," PANEL · EN VIVO"]}),d.jsx("span",{className:"phone__av",children:"S"})]}),d.jsxs("div",{className:"phone__greet",children:["Buenas noches, ",d.jsx("em",{children:"Sam"})]}),d.jsxs("div",{className:"phone__hero-kpi",children:[d.jsx("span",{className:"phone__k-l",children:"Ventas de hoy"}),d.jsxs("span",{className:"phone__k-v",children:[d.jsx("span",{className:"bs",children:"Bs"})," ",n.cobros.value]}),d.jsx("span",{className:"phone__delta up",children:"↑ 18% vs ayer"})]}),d.jsxs("div",{className:"phone__kpis",children:[d.jsxs("div",{className:"phone__kpi",children:[d.jsx("span",{className:"phone__k-l",children:"Posición"}),d.jsxs("span",{className:"phone__k-v2",children:[d.jsx("span",{className:"bs",children:"Bs"})," ",r.amount]}),d.jsx("span",{className:"phone__delta up",children:"↑ 18%"})]}),d.jsxs("div",{className:"phone__kpi",children:[d.jsx("span",{className:"phone__k-l",children:"Margen"}),d.jsx("span",{className:"phone__k-v2",children:"36%"}),d.jsx("span",{className:"phone__delta down",children:"↓ 8%"})]})]}),d.jsxs("div",{className:"phone__agent",children:[d.jsx("span",{className:"phone__agent-ic",children:d.jsx(tk,{size:14,strokeWidth:1.75})}),d.jsxs("div",{className:"phone__agent-body",children:[d.jsx("span",{className:"phone__agent-l",children:"Hatlas Agent"}),d.jsxs("span",{className:"phone__agent-t",children:[d.jsx("em",{children:n.cliente.name})," no vuelve hace 23 días."]}),d.jsxs("span",{className:"phone__agent-cta",children:["Reactivar ",d.jsx(z2,{size:12,strokeWidth:2})]})]})]}),d.jsxs("div",{className:"phone__tabs",children:[d.jsx("span",{className:"is-on",children:d.jsx(ip,{size:18,strokeWidth:1.6})}),d.jsx("span",{children:d.jsx(np,{size:18,strokeWidth:1.6})}),d.jsx("span",{children:d.jsx(tp,{size:18,strokeWidth:1.6})}),d.jsx("span",{children:d.jsx(du,{size:18,strokeWidth:1.6})})]})]},e)]}),d.jsx("style",{children:`
        .phone { width: min(300px, 78vw); margin: 0 auto; will-change: transform, opacity; }
        .phone__frame {
          position: relative;
          border-radius: 46px;
          background: linear-gradient(160deg, #26252b, #17161B);
          padding: 9px;
          box-shadow:
            0 2px 4px rgba(23,22,27,0.10),
            0 40px 70px -24px rgba(23,22,27,0.40),
            0 0 0 1px rgba(23,22,27,0.06),
            inset 0 0 0 1.5px rgba(255,255,255,0.06);
        }
        .phone__island {
          position: absolute;
          top: 20px; left: 50%; transform: translateX(-50%);
          width: 84px; height: 22px; border-radius: 999px;
          background: #0b0a0d; z-index: 3;
        }
        .phone__screen {
          position: relative;
          border-radius: 38px;
          overflow: hidden;
          background:
            radial-gradient(70% 40% at 80% 0%, rgba(143,188,164,0.16), transparent 70%),
            color-mix(in srgb, var(--surface) 92%, var(--bg));
          padding: 44px 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 11px;
          font-family: var(--font-ui);
          color: var(--ink);
        }
        .phone__status {
          position: absolute; top: 15px; left: 0; right: 0;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 22px;
          font-family: var(--font-display); font-size: 11px; font-weight: 600; color: var(--ink);
        }
        .phone__status-r { display: inline-flex; align-items: center; gap: 4px; }
        .phone__status-r i { width: 5px; height: 9px; border-radius: 1px; background: var(--ink); display: inline-block; }
        .phone__status-r i.bat { width: 16px; }

        .phone__head { display: flex; align-items: center; justify-content: space-between; }
        .phone__live {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-display); font-size: 9px; letter-spacing: 0.12em; color: var(--ink3);
        }
        .phone__live > span { width: 6px; height: 6px; border-radius: 999px; background: var(--ac); box-shadow: 0 0 0 3px rgba(62,124,91,0.16); }
        .phone__av {
          width: 28px; height: 28px; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--ac) 10%, transparent); border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          font-family: var(--font-display); font-size: 11px; font-weight: 600; color: var(--ac-on);
        }
        .phone__greet { font-size: 14px; color: var(--ink2); }
        .phone__greet em { font-style: normal; font-weight: 600; color: var(--ink); }

        .phone__hero-kpi {
          display: flex; flex-direction: column; gap: 6px;
          padding: 14px; background: var(--surface); border: 1px solid var(--hairline);
          border-radius: 16px; box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent);
        }
        .phone__k-l { font-size: 12px; color: var(--ink2); }
        .phone__k-v { font-family: var(--font-display); font-weight: 700; font-size: 30px; letter-spacing: -0.03em; line-height: 1; color: var(--ink); }
        .phone__k-v .bs, .phone__k-v2 .bs { font-family: var(--font-ui); font-size: 14px; font-weight: 600; color: var(--ink2); margin-right: 3px; }
        .phone__k-v2 { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -0.03em; line-height: 1; color: var(--ink); }
        .phone__delta { align-self: flex-start; font-family: var(--font-display); font-size: 9.5px; padding: 2px 7px; border-radius: 999px; }
        .phone__delta.up { color: var(--ok); background: color-mix(in srgb, var(--ok) 12%, transparent); }
        .phone__delta.down { color: var(--danger); background: color-mix(in srgb, var(--danger) 10%, transparent); }

        .phone__kpis { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .phone__kpi {
          display: flex; flex-direction: column; gap: 6px;
          padding: 12px; background: var(--surface); border: 1px solid var(--hairline);
          border-radius: 14px; box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent);
        }

        .phone__agent {
          display: flex; gap: 10px;
          padding: 12px 13px;
          background:
            radial-gradient(120% 140% at 0% 0%, color-mix(in srgb, var(--ac) 12%, transparent), transparent 60%),
            var(--surface);
          border: 1px solid color-mix(in srgb, var(--ac) 30%, transparent);
          border-radius: 16px;
        }
        .phone__agent-ic {
          display: inline-flex; align-items: center; justify-content: center;
          width: 30px; height: 30px; flex-shrink: 0;
          background: color-mix(in srgb, var(--ac) 10%, transparent); border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 9px; color: var(--ac-on); align-self: flex-start;
        }
        .phone__agent-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .phone__agent-l { font-family: var(--font-display); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ac-on); }
        .phone__agent-t { font-size: 12.5px; line-height: 1.4; color: var(--ink); }
        .phone__agent-t em { font-family: var(--font-ui); font-style: italic; font-weight: 600; color: var(--ac-on); }
        .phone__agent-cta { display: inline-flex; align-items: center; gap: 4px; margin-top: 2px; font-family: var(--font-display); font-size: 10px; letter-spacing: 0.06em; color: var(--ac-on); }

        .phone__tabs {
          margin-top: auto;
          display: flex; align-items: center; justify-content: space-around;
          padding: 12px 6px 6px;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          color: var(--ink3);
        }
        .phone__tabs .is-on { color: var(--ac-on); }

        @media (prefers-reduced-motion: reduce) {
          .phone { opacity: 1 !important; transform: none !important; }
        }
      `})]})}function Kw(){const{vertical:t,setVertical:e}=Wn(),n=P.useRef(null),r=P.useRef({}),i=P.useRef(!0),a=P.useRef(t);a.current=t;const o=s=>{const l=n.current,u=r.current[a.current];if(!l||!u)return;const c=()=>{l.style.transform=`translateX(${u.offsetLeft}px)`,l.style.width=`${u.offsetWidth}px`,l.style.height=`${u.offsetHeight}px`,l.style.top=`${u.offsetTop}px`};if(s)requestAnimationFrame(c);else{const f=l.style.transition;l.style.transition="none",c(),l.offsetWidth,l.style.transition=f}};return P.useLayoutEffect(()=>{o(!i.current),i.current=!1},[t]),P.useEffect(()=>{var l;const s=()=>o(!1);return window.addEventListener("resize",s),(l=document.fonts)==null||l.ready.then(()=>o(!1)),()=>window.removeEventListener("resize",s)},[]),d.jsxs("div",{className:"vtoggle",role:"group","aria-label":"Elegí tu rubro para ver el ejemplo",children:[d.jsx("span",{className:"vtoggle__label",children:"Vé tu negocio:"}),d.jsxs("div",{className:"vtoggle__pills",children:[d.jsx("span",{className:"vtoggle__pill-bg",ref:n,"aria-hidden":"true"}),Yw.map(s=>{const l=s===t;return d.jsx("button",{ref:u=>{r.current[s]=u},type:"button",className:`vtoggle__pill ${l?"is-active":""}`,"aria-pressed":l,onClick:()=>e(s),children:B_[s].label},s)})]}),d.jsx("style",{children:`
        .vtoggle {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }
        .vtoggle__label {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .vtoggle__pills {
          position: relative;
          display: inline-flex;
          gap: 6px;
          padding: 4px;
          background: color-mix(in srgb, var(--bg) 55%, transparent);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-pill);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
        }
        /* The sliding highlight. transform + width are written inline by JS so
           the transition tweens between the previous and next measured pill. */
        .vtoggle__pill-bg {
          position: absolute;
          top: 4px;
          left: 0;
          height: 36px;
          width: 0;
          border-radius: var(--r-pill);
          background: var(--glass-strong);
          border: 1px solid color-mix(in srgb, var(--ac) 45%, transparent);
          box-shadow: 0 6px 16px color-mix(in srgb, var(--ac) 22%, transparent), inset 0 1px 0 rgba(255, 255, 255, 0.6);
          transform: translateX(0);
          transition:
            transform var(--tabs-dur) var(--tabs-ease),
            width var(--tabs-dur) var(--tabs-ease);
          will-change: transform, width;
          z-index: 0;
          pointer-events: none;
        }
        .vtoggle__pill {
          position: relative;
          z-index: 1;
          appearance: none;
          border: 1px solid transparent;
          background: transparent;
          color: var(--ink2);
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.005em;
          padding: 8px 16px;
          min-height: 36px;
          border-radius: var(--r-pill);
          cursor: pointer;
          white-space: nowrap;
          transition: color 200ms var(--ease-out);
        }
        .vtoggle__pill:hover { color: var(--ink); }
        .vtoggle__pill:focus-visible {
          outline: 2px solid var(--ac);
          outline-offset: 2px;
        }
        /* Active pill: just the text color now — the gold ring/tint rides on
           the sliding .vtoggle__pill-bg underneath. */
        .vtoggle__pill.is-active {
          color: var(--ac-on);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .vtoggle { justify-content: center; }
        }
        @media (max-width: 380px) {
          .vtoggle__pill { padding: 8px 12px; font-size: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .vtoggle__pill-bg { transition: none !important; }
        }
      `})]})}function Zw(){const{data:t,vertical:e}=Wn(),[n,r]=P.useState(()=>typeof window<"u"&&window.innerWidth<=768);P.useEffect(()=>{const a=window.matchMedia("(max-width: 768px)"),o=()=>r(a.matches);return o(),a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[]);const i=d.jsxs("div",{className:"hero__lead",children:[d.jsx("div",{className:"hero__toggle",children:d.jsx(Kw,{})}),d.jsxs("h1",{id:"hero-headline",className:"h-mega hero__headline",children:["El sistema operativo de tu negocio."," ",d.jsx("em",{children:"Con un agente que trabaja por vos, 24/7."})]}),d.jsx("p",{className:"hero__subhead",children:d.jsxs("span",{className:"hero__subhead-swap",children:[t.heroSubhead.pre,d.jsx("em",{children:t.heroSubhead.em}),t.heroSubhead.post]},e)}),d.jsxs("div",{className:"hero__ctas",children:[d.jsx("a",{href:"#cta-final",className:"btn-gold",children:"Ver Hatlas con mis datos"}),d.jsx("a",{href:"#analista",className:"btn-ghost",children:"Ver qué detecta Hatlas Agent"})]}),d.jsxs("div",{className:"hero__trust",children:[d.jsx(ap,{size:15,strokeWidth:1.75}),"Autorizado por Impuestos Nacionales"]})]});return d.jsxs("section",{className:"hero",id:"hero","aria-labelledby":"hero-headline",children:[d.jsx("div",{className:"hero__bg","aria-hidden":"true"}),n?d.jsxs("div",{className:"hero__mobile",children:[i,d.jsx(Gw,{})]}):d.jsx(Vw,{titleComponent:i,children:d.jsx(Ww,{})}),d.jsx("style",{children:`
        .hero {
          position: relative;
          z-index: 5;
          padding: 100px 24px 32px;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: -6% -5% 30%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(42% 42% at 26% 16%, color-mix(in srgb, var(--ac-light) 34%, transparent), transparent 70%),
            radial-gradient(46% 44% at 78% 10%, color-mix(in srgb, var(--ac) 26%, transparent), transparent 70%),
            radial-gradient(50% 46% at 92% 44%, color-mix(in srgb, var(--ac-light) 18%, transparent), transparent 72%);
          filter: blur(8px);
        }
        .hero > * { position: relative; z-index: 10; }
        .hero__mobile { display: flex; flex-direction: column; align-items: center; gap: 30px; }

        /* ── centered lead (goes into ContainerScroll's header) ── */
        .hero__lead { max-width: 1000px; margin: 0 auto; text-align: center; }
        .hero__toggle { display: flex; justify-content: center; margin-bottom: 16px; }
        .hero__headline {
          margin: 0 auto 16px;
          max-width: 22ch;
          font-size: clamp(34px, 4.1vw, 56px);
          line-height: 1.02;
          text-wrap: balance;
        }
        .hero__subhead {
          margin: 0 auto 22px;
          max-width: 640px;
          font-size: 16.5px;
          line-height: 1.55;
          color: var(--ink2);
        }
        .hero__subhead em {
          font-family: var(--font-ui);
          font-style: italic;
          font-weight: 500;
          color: var(--ac-on);
        }
        .hero__subhead-swap {
          display: block;
          animation: hero-subhead-enter 340ms var(--ease-out) both;
          will-change: transform, filter, opacity;
        }
        @keyframes hero-subhead-enter {
          0% { opacity: 0; filter: blur(var(--text-swap-blur)); transform: translateY(var(--text-swap-translate-y)); }
          100% { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
        .hero__ctas { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
        .hero__trust {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 9px 15px;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--ink2);
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-pill);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
        }
        .hero__trust svg { color: var(--ac-on); flex-shrink: 0; }

        @media (prefers-reduced-motion: reduce) {
          .hero__subhead-swap { animation: none !important; }
        }
        @media (max-width: 600px) {
          .hero { padding: 92px 18px 20px; }
          .hero__toggle { margin-bottom: 14px; }
          .hero__headline { font-size: clamp(29px, 8.4vw, 38px); max-width: 20ch; margin-bottom: 14px; }
          .hero__subhead { font-size: 15.5px; margin-bottom: 18px; }
          .hero__ctas { gap: 10px; }
          .hero__ctas .btn-gold, .hero__ctas .btn-ghost { width: 100%; justify-content: center; }
          .hero__trust { margin-top: 16px; }
        }
      `})]})}const Fm=["Facturar al cliente","Cerrar caja del día","Ver el margen real","Reponer stock antes de que se acabe","Cobrar con QR","Reactivar al cliente que dejó de venir","Pagar planillas","Saber qué se vendió ayer","Comparar sucursales en tiempo real","Imprimir factura electrónica","Mandar promoción por WhatsApp","Cuadrar inventario sin contar a mano","Detectar cuándo conviene comprar","Ver qué turno está cubierto"];function Jw(){return d.jsxs("section",{className:"actions","aria-label":"Lo que hacen los dueños de negocio con Hatlas",children:[d.jsxs("div",{className:"actions__inner",children:[d.jsx("span",{className:"actions__label",children:"Lo que hacen con Hatlas"}),d.jsx("div",{className:"actions__track-wrap","aria-hidden":"true",children:d.jsx("div",{className:"actions__track",children:[...Fm,...Fm].map((t,e)=>d.jsxs("span",{className:"actions__item",children:[d.jsx("span",{className:"actions__mark","aria-hidden":"true",children:"✦"}),d.jsx("span",{className:"actions__text",children:t})]},e))})})]}),d.jsx("style",{children:`
        .actions {
          position: relative;
          z-index: 10;
          background: var(--bg);
          padding: 28px 0;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .actions__inner {
          display: flex;
          align-items: center;
          gap: 32px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .actions__label {
          flex-shrink: 0;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ac-on);
        }
        .actions__track-wrap {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            #000 6%,
            #000 94%,
            transparent 100%
          );
        }
        .actions__track {
          display: inline-flex;
          white-space: nowrap;
          animation: actions-scroll 75s linear infinite;
          will-change: transform;
        }
        .actions__item {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding-right: 28px;
        }
        .actions__mark {
          color: var(--ac-on);
          font-size: 11px;
          line-height: 1;
        }
        .actions__text {
          font-family: var(--font-ui);
          font-style: italic;
          font-weight: 500;
          font-size: 19px;
          color: var(--ink);
          letter-spacing: -0.01em;
        }
        .actions__item:nth-child(odd) .actions__text { color: var(--ink); }
        .actions__item:nth-child(even) .actions__text { color: var(--ac-on); }

        @keyframes actions-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .actions__track { animation: none; }
        }

        @media (max-width: 780px) {
          .actions__inner { flex-direction: column; align-items: flex-start; gap: 16px; padding: 0 20px; }
          .actions__text { font-size: 17px; }
          /* In the column layout the wrap is no longer a flex:1 child on the
             horizontal axis, so it would size to the 7000px track and leak
             horizontal scroll. Pin it to the viewport width so overflow:hidden
             can clip the marquee. */
          .actions__track-wrap { width: 100%; align-self: stretch; }
        }
      `})]})}const eb=[{value:"Legal",label:"Factura electrónica incluida"},{value:"6",label:"Negocios usándolo hoy"},{value:"12k+",label:"Facturas ya emitidas"},{value:"5 min",label:"Y ya estás facturando"}];function tb(){return d.jsxs("section",{className:"trust-strip","aria-label":"Indicadores de confianza",children:[d.jsx("div",{className:"container-lg",children:d.jsx("div",{className:"strip",children:eb.map((t,e)=>d.jsxs("div",{className:"chip",children:[d.jsx("span",{className:"chip__value",children:t.value}),d.jsx("span",{className:"chip__label",children:t.label})]},e))})}),d.jsx("style",{children:`
        .trust-strip {
          position: relative;
          z-index: 10;
          background: color-mix(in srgb, var(--bg) 55%, transparent);
          backdrop-filter: var(--glass-filter);
          -webkit-backdrop-filter: var(--glass-filter);
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
          padding: 34px 0;
        }
        .strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 24px;
          text-align: center;
          border-right: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .chip:last-child { border-right: none; }
        .chip__value {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          font-size: clamp(24px, 2.8vw, 36px);
          color: var(--ac-on);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .chip__label {
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        @media (max-width: 780px) {
          .strip { grid-template-columns: repeat(2, 1fr); gap: 24px 0; }
          .chip:nth-child(2) { border-right: none; }
        }
      `})]})}function uo({children:t}){const{vertical:e}=Wn();return d.jsx("div",{className:"mk-fade",children:t},e)}function nb(){const{data:t}=Wn(),e=t.modules.pos;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--pos",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsxs("div",{className:"mk__rows",children:[e.lines.map(n=>d.jsxs("div",{className:"mk__row",children:[d.jsx("span",{children:n.label}),d.jsx("span",{children:n.amount})]},n.label)),d.jsxs("div",{className:"mk__row mk__row--ghost",children:[d.jsx("span",{children:e.ghost}),d.jsx("span",{children:"✓"})]})]}),d.jsxs("div",{className:"mk__total",children:["Bs ",d.jsx("em",{children:e.total})]}),d.jsx("style",{children:`
          .mk--pos { display: flex; flex-direction: column; gap: 9px; padding: 16px; height: 100%; }
          .mk__title { font-family: var(--font-display); font-size: 9px; letter-spacing: 0.16em; color: var(--ink3); text-transform: uppercase; }
          .mk__rows { display: flex; flex-direction: column; gap: 2px; flex: 1; }
          .mk__row { display: flex; justify-content: space-between; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink2); padding: 6px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__row > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .mk__row > span:last-child { flex-shrink: 0; font-family: var(--font-display); color: var(--ink); }
          .mk__row--ghost { color: var(--ac-on); border-bottom: none; font-weight: 500; }
          .mk__row--ghost > span:last-child { color: var(--ac-on); }
          .mk__total { display: flex; align-items: baseline; gap: 5px; font-family: var(--font-ui); font-size: 13px; font-weight: 500; color: var(--ink2); margin-top: 2px; }
          .mk__total em { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 26px; letter-spacing: -0.03em; color: var(--ink); }
        `})]})})}function rb(){const{data:t}=Wn(),e=t.modules.almacen;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--alm",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsx("div",{className:"mk__items",children:e.items.map(n=>d.jsxs("div",{className:"mk__item",children:[d.jsx("span",{className:"mk__sku",children:n.sku}),d.jsx("span",{className:`mk__qty ${n.stock<10?"mk__qty--low":""}`,children:n.stock})]},n.sku))}),d.jsx("style",{children:`
          .mk--alm { padding: 16px; display: flex; flex-direction: column; gap: 2px; height: 100%; }
          .mk__items { display: flex; flex-direction: column; }
          .mk__item { display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink2); padding: 8px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__item:last-child { border-bottom: none; }
          .mk__sku { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
          .mk__qty { font-family: var(--font-display); font-weight: 500; color: var(--ink); flex-shrink: 0; }
          .mk__qty--low { color: var(--danger); }
        `})]})})}function ib(){const{data:t}=Wn(),e=t.modules.logistica;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--sup",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsxs("div",{className:"mk__flow",children:[d.jsx("span",{children:e.from}),d.jsx("span",{"aria-hidden":"true",children:"→"}),d.jsx("span",{children:e.to})]}),d.jsx("div",{className:"mk__chips",children:e.chips.map((n,r)=>d.jsx("span",{className:`mk__chip ${r===e.chips.length-1?"mk__chip--ok":""}`,children:n},n))}),d.jsx("style",{children:`
          .mk--sup { padding: 16px; display: flex; flex-direction: column; gap: 14px; height: 100%; }
          .mk__flow { display: flex; align-items: center; gap: 8px; font-family: var(--font-ui); font-size: 14px; font-weight: 500; color: var(--ink); flex-wrap: wrap; }
          .mk__flow span:nth-child(2) { color: var(--ac-on); font-family: var(--font-display); }
          .mk__chips { display: flex; gap: 6px; flex-wrap: wrap; }
          .mk__chip { font-family: var(--font-display); font-size: 10px; padding: 3px 8px; border: 1px solid var(--hairline); border-radius: 999px; color: var(--ink2); }
          .mk__chip--ok { color: var(--ac-on); border-color: color-mix(in srgb, var(--ac) 35%, transparent); background: color-mix(in srgb, var(--ac) 10%, transparent); }
        `})]})})}function ab(){const{data:t}=Wn(),e=t.modules.finanzas;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--fin",children:[d.jsxs("div",{className:"mk__head",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsxs("div",{className:"mk__amount",children:["Bs ",d.jsx("em",{children:e.amount})]})]}),d.jsxs("svg",{className:"mk__chart",viewBox:"0 0 280 80",preserveAspectRatio:"none",children:[d.jsx("path",{d:"M0,60 L40,55 L80,45 L120,48 L160,30 L200,28 L240,20 L280,12",fill:"none",stroke:"var(--ac)",strokeWidth:"1.6"}),d.jsx("path",{d:"M0,60 L40,55 L80,45 L120,48 L160,30 L200,28 L240,20 L280,12 L280,80 L0,80 Z",fill:"url(#g-fin)"}),d.jsx("defs",{children:d.jsxs("linearGradient",{id:"g-fin",x1:"0",x2:"0",y1:"0",y2:"1",children:[d.jsx("stop",{offset:"0%",stopColor:"color-mix(in srgb, var(--ac) 30%, transparent)"}),d.jsx("stop",{offset:"100%",stopColor:"color-mix(in srgb, var(--ac) 0%, transparent)"})]})})]}),d.jsx("div",{className:"mk__delta",children:e.delta}),d.jsx("style",{children:`
          .mk--fin { padding: 16px; display: flex; flex-direction: column; gap: 10px; height: 100%; }
          .mk__head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
          .mk__amount { display: flex; align-items: baseline; gap: 4px; font-family: var(--font-ui); font-size: 13px; font-weight: 500; color: var(--ink2); flex-shrink: 0; }
          .mk__amount em { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 22px; letter-spacing: -0.03em; color: var(--ink); }
          .mk__chart { flex: 1; min-height: 56px; width: 100%; }
          .mk__delta { font-family: var(--font-display); font-size: 10px; color: var(--ac-on); letter-spacing: 0.04em; }
        `})]})})}function ob(){const{data:t}=Wn(),e=t.modules.clientes;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--cli",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsx("div",{className:"mk__list",children:e.rows.map(n=>d.jsxs("div",{className:"mk__client",children:[d.jsx("span",{children:n.name}),d.jsx("span",{className:"mk__visit",children:n.visits})]},n.name))}),d.jsx("style",{children:`
          .mk--cli { padding: 16px; display: flex; flex-direction: column; gap: 2px; height: 100%; }
          .mk__list { display: flex; flex-direction: column; }
          .mk__client { display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: var(--font-ui); font-size: 12px; color: var(--ink); padding: 8px 0; border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
          .mk__client:last-child { border-bottom: none; }
          .mk__client > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500; }
          .mk__visit { font-family: var(--font-display); color: var(--ink3); font-size: 10px; flex-shrink: 0; }
        `})]})})}function sb(){const{data:t}=Wn(),e=t.modules.personal;return d.jsx(uo,{children:d.jsxs("div",{className:"mk mk--rrhh",children:[d.jsx("div",{className:"mk__title",children:e.title}),d.jsx("div",{className:"mk__grid",children:e.stats.map(n=>d.jsxs("div",{children:[d.jsx("div",{className:"mk__num",children:n.num}),d.jsx("div",{className:"mk__small",children:n.label})]},n.label))}),d.jsx("style",{children:`
          .mk--rrhh { padding: 16px; display: flex; flex-direction: column; gap: 14px; height: 100%; justify-content: center; }
          .mk__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .mk__num { font-family: var(--font-display); font-style: normal; font-weight: 700; font-size: 26px; letter-spacing: -0.03em; color: var(--ink); line-height: 1; }
          .mk__small { font-family: var(--font-display); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink3); margin-top: 4px; }
        `})]})})}const lb=[{icon:ip,name:"Punto de Venta",slug:"punto-de-venta",desc:"Cobrá con QR, tarjeta o efectivo y facturá en línea, autorizado por Impuestos Nacionales.",Mockup:nb,span:"large"},{icon:tp,name:"Almacén",slug:"almacen",desc:"Stock por sucursal y por producto. Aviso automático cuando se está acabando.",Mockup:rb,span:"normal"},{icon:gv,name:"Logística",slug:"logistica",desc:"Compras, traspasos y movimientos entre sucursales.",Mockup:ib,span:"normal"},{icon:np,name:"Finanzas",slug:"finanzas",desc:"Ingresos, egresos y costos en un solo tablero. Sin Excel.",Mockup:ab,span:"large"},{icon:du,name:"Clientes",slug:"clientes",desc:"Sabés quién compra qué, cuándo, y cuándo dejó de venir.",Mockup:ob,span:"normal"},{icon:pv,name:"Personal",slug:"personal",desc:"Tu equipo, asistencia y planillas. Sin papeles.",Mockup:sb,span:"normal"}];function ub(){const t=P.useRef(null);return P.useEffect(()=>{const e=t.current;if(!e)return;const n=e.querySelectorAll(".module-card"),r=[];return n.forEach(i=>{const a=o=>{const s=i.getBoundingClientRect();i.style.setProperty("--mx",`${o.clientX-s.left}px`),i.style.setProperty("--my",`${o.clientY-s.top}px`)};i.addEventListener("mousemove",a),r.push(()=>i.removeEventListener("mousemove",a))}),()=>r.forEach(i=>i())},[]),d.jsxs("section",{className:"section-pad sistema",id:"sistema","aria-labelledby":"sistema-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("header",{className:"sistema__header",children:[d.jsx("span",{className:"eyebrow",children:"Adiós al Excel y los cuadernos"}),d.jsxs("h2",{id:"sistema-title",className:"h-section",children:["Todo tu negocio en un solo sistema,"," ",d.jsx("em",{children:"de la caja a la planilla."})]}),d.jsx("p",{className:"lede",style:{marginInline:"auto"},children:"Punto de venta, stock, finanzas, clientes y personal: lo que antes estaba en Excel, WhatsApp y cuadernos ahora está junto y conectado. Vendés en caja y el stock y las cuentas se actualizan solos."})]}),d.jsx("div",{className:"bento",ref:t,"data-anim":"fade-up","data-stagger":"0.06",children:lb.map(({icon:e,name:n,slug:r,desc:i,Mockup:a,span:o})=>d.jsxs(Pi,{to:`/modulos/${r}`,className:`module-card module-card--${o}`,"aria-label":`${n}: ver más`,children:[d.jsx("div",{className:"module-card__thumb",children:d.jsx(a,{})}),d.jsxs("div",{className:"module-card__text",children:[d.jsx("span",{className:"module-card__icon",children:d.jsx(e,{size:18,strokeWidth:1.5})}),d.jsxs("h3",{children:[n,d.jsx(M2,{className:"module-card__arrow",size:16,strokeWidth:1.75})]}),d.jsx("p",{children:i})]})]},n))})]}),d.jsx("style",{children:`
        .sistema {
          position: relative;
          z-index: 10;
          background: color-mix(in srgb, var(--surface) 12%, var(--bg));
        }
        .sistema__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 64px;
        }
        .sistema__header .eyebrow {
          display: inline-block;
          margin-bottom: 20px;
        }
        .sistema__header h2 { margin-bottom: 20px; }

        .bento {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(280px, auto);
          grid-auto-flow: dense; /* gpt-taste defensive */
          gap: 12px;
        }
        /* Liquid Glass card */
        .module-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 20px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          overflow: hidden;
          transition:
            border-color 300ms var(--ease-out),
            box-shadow 300ms var(--ease-out),
            transform 300ms var(--ease-out);
        }
        .module-card:hover {
          border-color: color-mix(in srgb, var(--ac) 45%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi);
        }
        .module-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--ac) 10%, transparent), transparent 40%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 300ms var(--ease-out);
          z-index: 0;
        }
        .module-card:hover::before { opacity: 1; }
        .module-card > * { position: relative; z-index: 1; }

        .module-card--large { grid-column: span 2; }
        .module-card--normal { grid-column: span 1; }

        .module-card__thumb {
          flex: 1;
          min-height: 130px;
          border-radius: var(--r-lg);
          border: 1px solid var(--hairline);
          background: var(--surface);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent);
          overflow: hidden;
        }
        .module-card__text { display: flex; flex-direction: column; gap: 6px; }
        /* Restrained icon: subtle neutral square + soft border + gold stroke.
           Same treatment as .insight-card__icon (system-wide consistency). */
        .module-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          margin-bottom: 4px;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: var(--r-sm);
          color: var(--ac-on);
        }
        .module-card { text-decoration: none; color: inherit; }
        .module-card h3 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-family: var(--font-display);
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .module-card__arrow {
          flex-shrink: 0;
          color: var(--ink3);
          opacity: 0;
          transform: translate(-4px, 4px);
          transition:
            opacity 300ms var(--ease-out),
            transform 300ms var(--ease-out),
            color 300ms var(--ease-out);
        }
        .module-card:hover .module-card__arrow { opacity: 1; transform: translate(0, 0); color: var(--ac-on); }
        .module-card p {
          margin: 0;
          font-size: 13px;
          line-height: 1.45;
          color: var(--ink2);
        }

        @media (max-width: 980px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .module-card--large, .module-card--normal { grid-column: span 1; }
        }
        @media (max-width: 560px) {
          .bento { grid-template-columns: 1fr; grid-auto-rows: minmax(260px, auto); }
        }

      `})]})}const cb=[{icon:ap,label:"Impuestos Nacionales"},{icon:rp,label:"WhatsApp"},{icon:hv,label:"Pagos con QR"},{icon:$2,label:"Importá tu Excel"}];function db(){return d.jsxs("section",{className:"cw","aria-label":"Se conecta con",children:[d.jsxs("div",{className:"container-lg cw__inner t-reveal",children:[d.jsx("span",{className:"cw__label",children:"Se conecta con lo que ya usás"}),d.jsx("ul",{className:"cw__items",children:cb.map(({icon:t,label:e})=>d.jsxs("li",{className:"cw__item",children:[d.jsx(t,{size:17,strokeWidth:1.5}),e]},e))})]}),d.jsx("style",{children:`
        .cw { position: relative; z-index: 10; background: var(--bg); padding: 28px 0; border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent); }
        .cw__inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px 32px;
        }
        .cw__label {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink3);
        }
        .cw__items { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 26px; }
        .cw__item {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          color: var(--ink2);
        }
        .cw__item svg { color: var(--ac-on); flex-shrink: 0; }
        @media (max-width: 600px) {
          .cw__inner { flex-direction: column; gap: 16px; }
        }
      `})]})}const fb={trend:mv,package:G2,user:vv,calendar:A2,wallet:_v};function pb(){const{data:t}=Wn(),{chat:e,insights:n}=t,r=lo(i=>{const a=i.querySelector('[data-hook="chat"]'),o=i.querySelectorAll(".insight-card"),s=i.querySelector('[data-hook="cierre"]');a&&(Oe.set(a,{opacity:0,y:24}),Oe.to(a,{opacity:1,y:0,duration:.7,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 70%",once:!0}})),o.length&&(Oe.set(o,{opacity:0,y:24}),X.batch(o,{onEnter:l=>Oe.to(l,{opacity:1,y:0,duration:.6,stagger:.08,ease:"power3.out",overwrite:!0}),start:"top 80%",once:!0})),s&&(Oe.set(s,{opacity:0,y:16}),Oe.to(s,{opacity:1,y:0,duration:.7,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}}))});return d.jsxs("section",{className:"section-pad analista",id:"analista",ref:r,"aria-labelledby":"analista-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("header",{className:"analista__header",children:[d.jsx("span",{className:"eyebrow",children:"Hatlas Agent · trabaja por vos"}),d.jsxs("h2",{id:"analista-title",className:"h-section",children:["Conocé a ",d.jsx("em",{children:"Hatlas Agent."})]}),d.jsx("p",{className:"lede",style:{marginInline:"auto"},children:"Vigila tus ventas, stock, costos y clientes las 24 horas, y te avisa qué hacer sin que se lo pidas."})]}),d.jsxs("div",{className:"chat","data-hook":"chat",children:[d.jsxs("div",{className:"chat__bubble chat__bubble--user",children:[d.jsx("div",{className:"chat__who",children:"TÚ"}),d.jsx("p",{children:e.question})]}),d.jsxs("div",{className:"chat__bubble chat__bubble--ai",children:[d.jsx("div",{className:"chat__who",children:"HATLAS AGENT · ANALISTA DE HATLAS"}),d.jsx("p",{className:"chat__lead",children:e.lead}),d.jsx("ol",{className:"chat__steps",children:e.steps.map((i,a)=>d.jsxs("li",{children:[d.jsx("span",{className:"chat__step-tag",children:i.tag}),d.jsx("span",{children:i.text})]},a))}),d.jsxs("div",{className:"chat__suggestion",children:[d.jsx("span",{className:"chat__sugg-label",children:"Sugerencia"}),d.jsx("span",{children:e.suggestion})]}),d.jsxs("div",{className:"chat__actions",children:[d.jsx("button",{type:"button",className:"chat__btn chat__btn--primary",children:e.actions[0]}),d.jsx("button",{type:"button",className:"chat__btn chat__btn--ghost",children:e.actions[1]})]})]})]}),d.jsxs("div",{className:"insights",children:[d.jsx("div",{className:"insights__head",children:d.jsx("span",{className:"eyebrow",style:{color:"var(--ink3)"},children:"Lo que Hatlas Agent detectó esta semana"})}),d.jsx("div",{className:"insights__grid",children:n.map(({icon:i,title:a,detail:o,meta:s},l)=>{const u=fb[i];return d.jsxs("article",{className:"insight-card",children:[d.jsx("span",{className:"insight-card__icon",children:d.jsx(u,{size:20,strokeWidth:1.5})}),d.jsxs("div",{className:"insight-card__body",children:[d.jsx("p",{className:"insight-card__title",children:d.jsx("em",{children:a})}),d.jsx("p",{className:"insight-card__detail",children:o}),d.jsx("div",{className:"insight-card__meta",children:s})]})]},l)})})]}),d.jsxs("p",{className:"analista__cierre","data-hook":"cierre",children:["Te dice qué hacer, ",d.jsx("em",{children:"no solo qué pasó."})]}),d.jsx("div",{className:"analista__cta",children:d.jsx("a",{href:"#cta-final",className:"btn-link",children:"Agendar una demo"})})]}),d.jsx("style",{children:`
        .analista {
          position: relative;
          z-index: 10;
          background: var(--bg);
        }
        .analista__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }
        .analista__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .analista__header h2 { margin-bottom: 20px; }

        .chat {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .chat__bubble {
          padding: 18px 22px;
          border-radius: var(--r-lg);
          font-family: var(--font-ui);
        }
        .chat__bubble--user {
          align-self: flex-end;
          max-width: 480px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          color: var(--ink);
        }
        /* Carbon tier (§4.9) — was a warm amber wash, now matches every
           other content card. The "who is speaking" distinction from the
           user bubble is carried by alignment + the gold label, not by a
           yellow background. */
        /* Plano SÓLIDO: es un transcript que se LEE (texto denso, 13-15px).
           "Si dudás, sólido" — sobre vidrio el contraste depende del scroll. */
        .chat__bubble--ai {
          align-self: flex-start;
          max-width: 640px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          box-shadow: var(--e2);
        }
        .chat__who {
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--ink3);
          margin-bottom: 8px;
        }
        .chat__bubble p { margin: 0; font-size: 15px; line-height: 1.5; color: var(--ink); }
        .chat__lead { font-weight: 400; }

        .chat__steps {
          list-style: none;
          margin: 14px 0 18px;
          padding: 0;
          counter-reset: step;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .chat__steps li {
          display: grid;
          grid-template-columns: 88px 1fr;
          gap: 12px;
          align-items: baseline;
          font-size: 14px;
          line-height: 1.5;
          color: var(--ink2);
        }
        .chat__steps li em {
          font-family: var(--font-ui);
          font-style: italic;
          color: var(--ac-on);
          font-weight: 600;
        }
        .chat__step-tag {
          font-family: var(--font-display);
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ac-on);
          padding-top: 2px;
        }

        .chat__suggestion {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 12px;
          padding: 12px 14px;
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: var(--r-md);
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink);
        }
        .chat__sugg-label {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ac-on);
        }
        .chat__actions { display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
        .chat__btn {
          font-family: var(--font-ui);
          font-size: 13px;
          font-weight: 500;
          min-height: 44px;
          padding: 11px 18px;
          border-radius: var(--r-sm);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          transition: transform 160ms var(--ease-out), background 200ms var(--ease-out), border-color 200ms var(--ease-out);
        }
        .chat__btn:active { transform: scale(0.97); }
        .chat__btn--primary {
          background: linear-gradient(135deg, var(--ac), var(--ac-deep));
          color: #fff;
          border: none;
        }
        .chat__btn--ghost {
          background: transparent;
          color: var(--ink2);
          border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
        }
        .chat__btn--ghost:hover { color: var(--ink); }

        .insights {
          max-width: 1100px;
          margin: 72px auto 0;
        }
        .insights__head { text-align: center; margin-bottom: 20px; }
        .insights__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        /* Carbon tier (§4.9 default) — same family as the hero orbital cards,
           since both represent "Hatlas Agent observations" */
        /* Datos que se leen → plano sólido con elevación del DS. */
        .insight-card {
          display: flex;
          gap: 14px;
          padding: 18px 20px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-xl);
          box-shadow: var(--e2);
        }
        /* Restrained icon treatment (matches .module-card__icon): the gold
           fill + gold border was oversaturating the accent. Gold lives only
           on the icon stroke now; the container is a subtle neutral square,
           per §4.9 "el oro es el escenario, no el actor". */
        .insight-card__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--ac-on);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: var(--r-sm);
          flex-shrink: 0;
        }
        .insight-card__body { flex: 1; }
        .insight-card__title {
          margin: 0 0 6px;
          font-size: 14px;
          line-height: 1.45;
          color: var(--ink);
        }
        /* Title in cream Fraunces italic — gold was the whole sentence, too
           much. Gold now lives only on the icon (the accent), per §4.9
           "el oro es el escenario, no el actor". */
        .insight-card__title em {
          font-family: var(--font-ui);
          font-style: normal;
          color: var(--ac-on);
          font-weight: 600;
        }
        .insight-card__detail {
          margin: 0 0 8px;
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink2);
        }
        .insight-card__meta {
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink3);
        }

        .analista__cierre {
          text-align: center;
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--ink);
          line-height: 1.1;
          font-size: clamp(24px, 3vw, 40px);
          margin: 72px auto 24px;
        }
        .analista__cierre em { color: var(--ac-on); }
        .analista__cta { text-align: center; }

        @media (max-width: 900px) {
          .insights__grid { grid-template-columns: 1fr; }
          /* Keep the conversation code: AI bubble fills width, user bubble
             stays narrower and right-aligned so "who is speaking" survives. */
          .chat__bubble--ai { max-width: 100%; }
          .chat__bubble--user { max-width: 85%; }
          .chat__steps li, .chat__suggestion { grid-template-columns: 1fr; gap: 4px; }
        }
      `})]})}const Rc={text:"Antes tenía seis cuadernos. Hoy abro Hatlas y en treinta segundos sé cuánto vendió cada sucursal y qué hay que reponer mañana.",byline:"Pablo Saavedra",context:"Salteñería del Centro · 4 sucursales · Equipetrol + 2do Anillo"},hb=[{seed:"camila-vega-panaderia",name:"Camila Vega",business:"Panadería La Esquina · Sopocachi, La Paz",quote:"El cierre de caja se hace solo. Antes me robaba dos horas cada noche.",initials:"CV"},{seed:"andres-roldan-cafe",name:"Andrés Roldán",business:"Café Tunari · Cala Cala, Cochabamba",quote:"Hatlas Agent me avisó qué cliente dejé de ver. Le escribí y volvió.",initials:"AR"},{seed:"lucia-iturralde-tienda",name:"Lucía Iturralde",business:"Comercial Rosita · Plan 3.000, Santa Cruz · 2 sucursales",quote:"Trasladaron mis datos en cinco días. Cero Excel desde entonces.",initials:"LI"}];function mb(){const t=lo(e=>{const n=e.querySelector('[data-hook="quote"]'),r=e.querySelectorAll(".op-card");n&&(Oe.set(n,{opacity:0,y:24}),Oe.to(n,{opacity:1,y:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 75%",once:!0}})),r.length&&(Oe.set(r,{opacity:0,y:24}),X.batch(r,{onEnter:i=>Oe.to(i,{opacity:1,y:0,duration:.6,ease:"power3.out",stagger:.08,overwrite:!0}),start:"top 80%",once:!0}))});return d.jsxs("section",{className:"section-pad operadores",id:"operadores",ref:t,"aria-labelledby":"operadores-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("header",{className:"operadores__header",children:[d.jsx("span",{className:"eyebrow",children:"Dueños de negocio que lo usan"}),d.jsxs("h2",{id:"operadores-title",className:"h-section",children:["Negocios de Bolivia"," ",d.jsx("em",{children:"que ya no vuelven al Excel."})]})]}),d.jsxs("figure",{className:"op-quote","data-hook":"quote",children:[d.jsxs("blockquote",{className:"op-quote__text",children:[d.jsx("span",{"aria-hidden":"true",className:"op-quote__marks op-quote__marks--open",children:"“"}),Rc.text,d.jsx("span",{"aria-hidden":"true",className:"op-quote__marks op-quote__marks--close",children:"”"})]}),d.jsxs("figcaption",{className:"op-quote__byline",children:[d.jsxs("span",{className:"op-quote__name",children:["— ",Rc.byline]}),d.jsx("span",{className:"op-quote__ctx",children:Rc.context})]})]}),d.jsx("div",{className:"op-cards",role:"list",children:hb.map(e=>d.jsxs("article",{className:"op-card",role:"listitem",children:[d.jsx("div",{className:"op-card__portrait","aria-hidden":"true",children:d.jsx("span",{className:"op-card__monogram",children:e.initials})}),d.jsxs("blockquote",{className:"op-card__quote",children:[d.jsx("span",{"aria-hidden":"true",className:"op-card__marks op-card__marks--open",children:"“"}),e.quote,d.jsx("span",{"aria-hidden":"true",className:"op-card__marks op-card__marks--close",children:"”"})]}),d.jsxs("div",{className:"op-card__byline",children:[d.jsxs("span",{className:"op-card__name",children:["— ",e.name]}),d.jsx("span",{className:"op-card__biz",children:e.business})]})]},e.seed))})]}),d.jsx("style",{children:`
        .operadores {
          position: relative;
          z-index: 10;
          background: color-mix(in srgb, var(--surface) 12%, var(--bg));
        }
        .operadores__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
        }
        .operadores__header .eyebrow {
          display: inline-block;
          margin-bottom: 20px;
        }

        /* ─── Hero editorial quote ─── */
        .op-quote {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 8px;
          text-align: left;
        }
        .op-quote__text {
          font-family: var(--font-ui);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(26px, 4vw, 50px);
          line-height: 1.22;
          color: var(--ink);
          letter-spacing: -0.02em;
          margin: 0 0 28px;
          text-wrap: balance;
        }
        .op-quote__marks {
          font-family: var(--font-ui);
          font-style: italic;
          color: var(--ac-on);
        }
        .op-quote__marks--open { margin-right: 6px; }
        .op-quote__marks--close { margin-left: 4px; }
        .op-quote__byline { display: flex; flex-direction: column; gap: 4px; }
        .op-quote__name {
          font-family: var(--font-ui);
          font-size: 16px;
          color: var(--ink);
          font-weight: 500;
        }
        .op-quote__ctx {
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink3);
        }

        /* ─── Three operator cards ─── */
        .op-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1080px;
          margin: 64px auto 0;
        }
        /* Carbon tier (§4.9 default) — unified with all content cards */
        .op-card {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 28px 24px;
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-xl);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
          transition:
            border-color 300ms var(--ease-out),
            box-shadow 300ms var(--ease-out),
            transform 300ms var(--ease-out);
        }
        .op-card:hover {
          border-color: color-mix(in srgb, var(--ac) 45%, transparent);
          transform: translateY(-3px);
          box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 5%, transparent), 0 22px 50px var(--glass-shadow), inset 0 1px 0 var(--glass-hi);
        }
        .op-card__portrait {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          /* Receta .atlas-avatar: relleno SÓLIDO --ac-deep con iniciales
             blancas (#fff sobre --ac daba 3.66:1 en ámbar). */
          background: var(--ac-deep);
          border: none;
          flex-shrink: 0;
        }
        .op-card__monogram {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
          letter-spacing: -0.02em;
          color: #fff;
          user-select: none;
        }
        .op-card__quote {
          margin: 0;
          font-family: var(--font-ui);
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink);
          letter-spacing: -0.005em;
          text-wrap: pretty;
          flex: 1;
        }
        .op-card__marks {
          font-family: var(--font-ui);
          font-style: italic;
          color: var(--ac-on);
          font-size: 18px;
          line-height: 0;
          vertical-align: -0.05em;
        }
        .op-card__marks--open { margin-right: 4px; }
        .op-card__marks--close { margin-left: 3px; }
        .op-card__byline { display: flex; flex-direction: column; gap: 4px; }
        .op-card__name {
          font-family: var(--font-ui);
          font-size: 13px;
          color: var(--ink);
          font-weight: 500;
        }
        .op-card__biz {
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink3);
        }

        @media (max-width: 900px) {
          .op-cards { grid-template-columns: 1fr; max-width: 560px; }
        }
      `})]})}const gb=[{n:"01",title:"Lo dejamos andando",desc:"Configuramos Hatlas con tu negocio, tus productos y tus sucursales. El día uno ya podés facturar."},{n:"02",title:"Migramos tu Excel",desc:"Trasladamos tus datos de Excel, WhatsApp y cuadernos. No empezás de cero ni perdés tu historial."},{n:"03",title:"Entrenamos a tu equipo",desc:"En la primera semana tu equipo ya factura solo y vos ya ves tus números en vivo."}];function vb(){return d.jsxs("section",{className:"section-pad onb",id:"como-arrancas","aria-labelledby":"onb-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("header",{className:"onb__header t-reveal",children:[d.jsx("span",{className:"eyebrow",children:"Cómo arrancás"}),d.jsxs("h2",{id:"onb-title",className:"h-section",children:["De Excel a Hatlas ",d.jsx("em",{children:"en una semana."})]}),d.jsx("p",{className:"lede",style:{marginInline:"auto"},children:"Cambiar de sistema asusta. Por eso lo hacemos nosotros, con vos, sin que pares tu negocio."})]}),d.jsx("ol",{className:"onb__steps",children:gb.map((t,e)=>d.jsxs("li",{className:"onb__step t-reveal",style:{"--t-i":e},children:[d.jsx("span",{className:"onb__num",children:t.n}),d.jsx("h3",{className:"onb__step-title",children:t.title}),d.jsx("p",{className:"onb__step-desc",children:t.desc})]},t.n))})]}),d.jsx("style",{children:`
        .onb { position: relative; z-index: 10; }
        .onb__header { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .onb__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .onb__header h2 { margin-bottom: 20px; }

        .onb__steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          counter-reset: step;
        }
        .onb__step {
          position: relative;
          padding: 28px;
          background: var(--surface);
          border: 1px solid var(--hairline);
          border-radius: var(--r-xl);
          box-shadow: var(--e2);
        }
        .onb__num {
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.2em;
          color: var(--ac-on);
        }
        .onb__step-title {
          margin: 14px 0 8px;
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          letter-spacing: -0.02em;
          font-size: 21px;
          color: var(--ink);
        }
        .onb__step-desc { margin: 0; font-size: 14px; line-height: 1.55; color: var(--ink2); }

        @media (max-width: 860px) {
          .onb__steps { grid-template-columns: 1fr; }
        }
      `})]})}const _b=[{cls:"tier-carbon",label:"Carbon",name:"Starter",price:"Bs 690",priceUnit:"/ mes / sucursal",blurb:"Para arrancar bien y sin trabas. Una sucursal, todas las áreas.",features:["Punto de Venta + facturación electrónica boliviana","Almacén","Logística entre sucursales","Finanzas","Clientes","Personal (asistencia y planillas)","1 sucursal","Soporte por chat de lunes a viernes"],ctaCls:"tier-cta--light",ctaLabel:"Agendar demo"},{cls:"tier-gold",label:"Gold",name:"Crecimiento",price:"Bs 1.290",priceUnit:"/ mes / sucursal",blurb:"Cuando ya no alcanza Excel. Varias sucursales y Hatlas Agent aprendiendo lo tuyo.",features:[{text:"Todo lo de Starter",bold:!0},{text:"Hatlas Agent incluido",bold:!0},"Hasta 5 sucursales","Reportes y tableros avanzados","Soporte prioritario en chat, email y WhatsApp","Entrenamos a tu equipo","Trasladamos tus datos de Excel"],badge:"Recomendado",ctaCls:"tier-cta--dark",ctaLabel:"Empezar con Crecimiento",featured:!0}];function yb(t){if(!t.startsWith("Bs"))return t;const e=parseInt(t.replace(/\D/g,""),10)||0;return e?`Bs ${Math.round(e*.85).toLocaleString("es-BO")}`:t}function xb(){const[t,e]=P.useState(!1),n=lo(r=>{const i=r.querySelectorAll(".tier-card");Oe.set(i,{opacity:0,y:40}),X.batch(i,{onEnter:a=>{a.forEach(o=>{Oe.to(o,{opacity:1,y:0,duration:.8,ease:"power3.out",overwrite:!0})})},start:"top 85%",once:!0})});return d.jsxs("section",{className:"section-pad pricing",id:"pricing",ref:n,"aria-labelledby":"pricing-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("header",{className:"pricing__header",children:[d.jsx("span",{className:"eyebrow",children:"Precios bolivianos"}),d.jsxs("h2",{id:"pricing-title",className:"h-section",children:["Hatlas crece ",d.jsx("em",{children:"con vos."})]}),d.jsx("p",{className:"lede",style:{marginInline:"auto"},children:"Arrancá con todo lo esencial. Sumá Hatlas Agent y más sucursales cuando crezcas."})]}),d.jsxs("div",{className:"toggle",children:[d.jsx("span",{className:"toggle__pill","data-annual":t,"aria-hidden":"true"}),d.jsx("button",{type:"button",className:`toggle__btn ${t?"":"toggle__btn--active"}`,onClick:()=>e(!1),children:"Mensual"}),d.jsxs("button",{type:"button",className:`toggle__btn ${t?"toggle__btn--active":""}`,onClick:()=>e(!0),children:["Anual",d.jsx("span",{className:"toggle__save",children:"−15%"})]})]}),d.jsx("div",{className:"grid",children:_b.map(r=>d.jsxs("article",{className:`tier-card ${r.cls} ${r.featured?"tier-card--featured":""}`,children:[r.badge&&d.jsx("div",{className:"tier-card__badge",children:r.badge}),d.jsx("div",{className:"tier-card__label",children:r.label}),d.jsx("div",{className:"tier-card__name",children:r.name}),d.jsxs("div",{className:"tier-card__price",children:[t?yb(r.price):r.price,d.jsxs("span",{className:"tier-card__price-unit",children:[" ",t?"/ mes / sucursal · facturado anual":r.priceUnit]})]}),d.jsx("p",{className:"tier-card__blurb",children:r.blurb}),d.jsx("ul",{className:"tier-card__features",children:r.features.map((i,a)=>{const o=typeof i=="string"?i:i.text,s=typeof i!="string"&&i.bold;return d.jsx("li",{className:s?"is-bold":"",children:o},a)})}),d.jsx("a",{href:"#cta-final",className:`tier-cta ${r.ctaCls}`,children:r.ctaLabel})]},r.name))}),d.jsxs("p",{className:"enterprise",children:[d.jsx("span",{className:"enterprise__lead",children:"¿Más de 5 sucursales, conexión con otros sistemas o atención dedicada?"})," ",d.jsx("a",{className:"enterprise__link",href:"mailto:enterprise@hatlas.bo",children:"Hablemos →"})]}),d.jsx("p",{className:"pricing__fine",children:"Precios en bolivianos. IVA no incluido. Pagás por mes o por año con 15% de descuento. Puesta en marcha incluida en todos los planes."})]}),d.jsx("style",{children:`
        .pricing {
          position: relative;
          z-index: 10;
          background: var(--bg);
        }
        .pricing__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }
        .pricing__header .eyebrow { display: inline-block; margin-bottom: 20px; }
        .pricing__header h2 { margin-bottom: 18px; }

        .toggle {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 4px;
          width: 320px;
          max-width: 90vw;
          background: var(--surface);
          border: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          border-radius: var(--r-pill);
          margin: 0 auto 40px;
        }
        /* sliding gold pill (matches the rubro toggle aesthetic) */
        .toggle__pill {
          position: absolute;
          top: 4px;
          left: 4px;
          width: calc(50% - 4px);
          height: calc(100% - 8px);
          background: var(--ac-deep);
          border-radius: var(--r-pill);
          transform: translateX(0);
          transition: transform 280ms var(--ease-out);
          z-index: 0;
        }
        .toggle__pill[data-annual="true"] { transform: translateX(100%); }
        .toggle__btn {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 12px 18px;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--ink2);
          background: transparent;
          border: none;
          border-radius: var(--r-pill);
          cursor: pointer;
          transition: color 200ms var(--ease-out);
        }
        .toggle__btn:hover { color: var(--ink); }
        .toggle__btn--active { color: #fff; }
        @media (prefers-reduced-motion: reduce) {
          .toggle__pill { transition: none; }
        }
        .toggle__save {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.06em;
          padding: 2px 8px;
          border-radius: var(--r-pill);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          color: var(--ac-on);
        }
        .toggle__btn--active .toggle__save { background: rgba(255, 255, 255, 0.24); color: #fff; }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 880px;
          margin: 0 auto;
          align-items: stretch;
        }
        @media (max-width: 780px) {
          .grid { grid-template-columns: 1fr; max-width: 480px; }
        }

        .tier-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 32px 28px;
          border-radius: var(--r-lg);
        }
        /* Superficie de comparación: se LEE (lista de features) → plano sólido. */
        .tier-carbon {
          background: var(--surface);
          border: 1px solid var(--hairline);
          color: var(--ink);
          box-shadow: var(--e2);
        }
        /* Receta .atlas-card-feature del DS: relleno de acento 135deg + luz
           radial superior, texto SIEMPRE blanco. Es el único lugar del sitio
           donde vive el gradiente de acento. */
        .tier-gold {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--ac), var(--ac-deep));
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #fff;
          box-shadow: 0 14px 40px color-mix(in srgb, var(--ac) 40%, transparent);
        }
        .tier-gold::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 75% 15%, rgba(255,255,255,.35), transparent 55%);
          pointer-events: none;
        }
        .tier-gold > * { position: relative; }
        .tier-gold .tier-card__name,
        .tier-gold .tier-card__price {
          color: #FFFFFF;
        }
        .tier-card--featured { transform: translateY(0); }
        @media (min-width: 781px) {
          .tier-card--featured { transform: scale(1.02); }
        }

        /*
         * Sprint 1.4 (revised post-WCAG check): the gold gradient runs from
         * #8a6f3a to #d4ac6a; any dark text on the darker end fails WCAG.
         * Fix: hide the redundant Gold eyebrow (badge already labels the
         * tier), darken the price-unit, and use solid #1a1a1a for body text
         * which sits over the bright half of the gradient.
         */
        .tier-gold .tier-card__label {
          visibility: hidden;
          height: 0;
          margin: 0;
        }
        .tier-gold .tier-card__price-unit {
          color: rgba(255, 255, 255, 0.82);
          opacity: 1;
        }
        .tier-gold .tier-card__blurb,
        .tier-gold .tier-card__features {
          color: #FFFFFF;
        }
        .tier-gold .tier-card__blurb { opacity: 0.9; }
        .tier-gold .tier-card__features li::before { opacity: 0.9; color: #FFFFFF; }

        .tier-card__badge {
          position: absolute;
          top: -12px;
          right: 24px;
          padding: 6px 12px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: var(--ac-deep);
          color: #fff;
          border-radius: var(--r-pill);
          box-shadow: 0 8px 20px color-mix(in srgb, var(--ac) 40%, transparent), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .tier-card__label {
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.7;
          margin-bottom: 12px;
        }
        .tier-card__name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 22px;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .tier-card__price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 34px;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .tier-card__price-unit {
          opacity: 0.7;
          font-size: 13px;
          font-weight: 400;
        }
        .tier-card__blurb {
          margin: 14px 0 22px;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.88;
        }
        .tier-card__features {
          flex: 1;
          margin: 0 0 28px;
          padding: 0;
          font-size: 14px;
          line-height: 1.55;
          list-style: none;
        }
        .tier-card__features li {
          display: flex;
          gap: 10px;
          padding: 6px 0;
        }
        .tier-card__features li::before {
          content: '✓';
          opacity: 0.7;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .tier-card__features li.is-bold { font-weight: 500; }

        .tier-cta {
          width: 100%;
          padding: 12px 16px;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          text-decoration: none;
          border-radius: var(--r-sm);
          cursor: pointer;
          transition: background 200ms var(--ease-out), transform 160ms var(--ease-out);
        }
        .tier-cta:active { transform: scale(0.97); }
        .tier-cta--light {
          background: transparent;
          color: var(--ac-on);
          border: 1px solid color-mix(in srgb, var(--ac) 42%, transparent);
        }
        .tier-cta--light:hover { background: color-mix(in srgb, var(--ac) 10%, transparent); border-color: var(--ac-on); }
        .tier-cta--dark {
          /* Fondo BLANCO fijo en los dos temas (va sobre el relleno de acento),
             así que acá el tono correcto es --ac-deep, no --ac-on. */
          background: #FFFFFF;
          color: var(--ac-deep);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 20px color-mix(in srgb, var(--ink) 18%, transparent);
        }
        .tier-cta--dark:hover { background: color-mix(in srgb, #fff 88%, var(--ac)); }

        .enterprise {
          margin: 48px auto 0;
          max-width: 720px;
          text-align: center;
          font-family: var(--font-ui);
          font-size: 14px;
          color: var(--ink2);
        }
        .enterprise__lead { display: inline; }
        .enterprise__link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          padding: 6px 8px;
          color: var(--ac-on);
          text-decoration: none;
          font-weight: 500;
          transition: color 200ms var(--ease-out);
        }
        .enterprise__link:hover { color: var(--ac-hover); }

        .pricing__fine {
          margin-top: 24px;
          text-align: center;
          font-family: var(--font-display);
          font-size: 12px;
          line-height: 1.55;
          letter-spacing: 0.04em;
          color: var(--ink3);
          max-width: 640px;
          margin-inline: auto;
        }
      `})]})}const kb=[{q:"¿Cuánto tarda en estar listo?",a:"De Excel a Hatlas en una semana. Configuramos todo el primer día, trasladamos tus datos y entrenamos a tu equipo durante la primera semana. Empezás a facturar el día uno."},{q:"¿Cumple con la facturación electrónica boliviana?",a:"Sí. Hatlas está conectado directamente al sistema de facturación electrónica del país. No usamos complementos ni servicios externos. Emitís facturas legales desde el primer día."},{q:"¿Tengo que usar todo Hatlas desde el inicio?",a:"No. Todos los planes traen todas las áreas: cobros, almacén, logística, finanzas, clientes y personal. Empezás usando lo que necesites primero, el resto está ahí cuando lo querés. Hatlas Agent y la opción de varias sucursales vienen en el plan Crecimiento."},{q:"¿Hatlas Agent entiende mi negocio en serio?",a:"Sí, y se nota en los primeros siete días. Hatlas Agent aprende patrones de venta, qué clientes te compran y cuándo, cómo se mueve el stock, dónde estás ganando y dónde no. Cuanto más usás Hatlas, mejor lee tu negocio."},{q:"¿Quién ve mis datos?",a:"Solo vos y tu equipo. Tus datos viajan y se guardan cifrados. Copia de seguridad automática todos los días. Cumplimos con las normas de privacidad bolivianas. Nunca compartimos tu información con terceros."},{q:"¿Puedo cambiar de plan cuando quiera?",a:"Sí. Podés subir o bajar de plan mes a mes sin penalización. El plan anual tiene 15% de descuento; si cancelás antes te devolvemos lo proporcional."}];function wb(){const[t,e]=P.useState(0);return d.jsxs("section",{className:"section-pad faq",id:"faq","aria-labelledby":"faq-title",children:[d.jsxs("div",{className:"container-lg",children:[d.jsx("header",{className:"faq__header",children:d.jsxs("h2",{id:"faq-title",className:"h-section",children:["Lo que más ",d.jsx("em",{children:"nos preguntan."})]})}),d.jsx("div",{className:"faq__list",children:kb.map((n,r)=>{const i=t===r;return d.jsxs("button",{type:"button",className:`faq__item ${i?"is-open":""}`,onClick:()=>e(i?null:r),"aria-expanded":i,children:[d.jsxs("span",{className:"faq__q",children:[d.jsx("span",{children:n.q}),d.jsxs("span",{className:"faq__toggle","aria-hidden":"true",children:[d.jsx(Z2,{className:"faq__ico faq__ico--plus",size:16}),d.jsx(X2,{className:"faq__ico faq__ico--minus",size:16})]})]}),d.jsx("div",{className:"faq__a-wrap",style:{gridTemplateRows:i?"1fr":"0fr"},children:d.jsx("div",{className:"faq__a-inner",children:d.jsx("p",{children:n.a})})})]},r)})})]}),d.jsx("style",{children:`
        .faq {
          position: relative;
          z-index: 10;
          background: color-mix(in srgb, var(--surface) 12%, var(--bg));
        }
        .faq__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }
        .faq__list {
          display: flex;
          flex-direction: column;
          max-width: 840px;
          margin: 0 auto;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .faq__item {
          width: 100%;
          padding: 24px 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          text-align: left;
          color: var(--ink);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .faq__q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          font-family: var(--font-ui);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: -0.005em;
          color: var(--ink);
        }
        .faq__item:hover .faq__q { color: var(--ac-on); }
        .faq__toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid var(--hairline);
          background: var(--surface);
          color: var(--ink2);
          border-radius: var(--r-sm);
          flex-shrink: 0;
          transition:
            background 200ms var(--ease-out),
            border-color 200ms var(--ease-out),
            color 200ms var(--ease-out);
        }
        .faq__item.is-open .faq__toggle {
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border-color: var(--ac-on);
          color: var(--ac-on);
        }
        /* transitions-dev · icon-swap (09) on the +/- toggle */
        .faq__ico {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 16px;
          height: 16px;
          transition:
            opacity 200ms ease-in-out,
            transform 200ms ease-in-out,
            filter 200ms ease-in-out;
        }
        .faq__ico--minus { opacity: 0; transform: scale(0.4) rotate(-90deg); filter: blur(2px); }
        .faq__item.is-open .faq__ico--plus { opacity: 0; transform: scale(0.4) rotate(90deg); filter: blur(2px); }
        .faq__item.is-open .faq__ico--minus { opacity: 1; transform: none; filter: none; }
        .faq__a-wrap {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq__a-wrap { transition: none; }
          .faq__ico { transition: none; }
        }
        .faq__a-inner { min-height: 0; }
        .faq__a-inner p {
          margin: 16px 0 0;
          padding-right: 48px;
          max-width: 680px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink2);
        }
      `})]})}const bb="59170699639",H_="hola@hatlas.bo",Sb="Hola, quiero ver una demo de Hatlas para mi negocio.",$_=`https://wa.me/${bb}?text=${encodeURIComponent(Sb)}`,Cb=`mailto:${H_}?subject=${encodeURIComponent("Demo Hatlas")}`,Eb=[{icon:ap,label:"Autorizado por Impuestos Nacionales"},{icon:V2,label:"Cifrado de extremo a extremo"},{icon:U2,label:"Backup diario automático"},{icon:W2,label:"Tus datos, en Bolivia"}];function Tb(){const t=lo(e=>{const n=e.querySelector('[data-hook="headline"]');n&&(Oe.set(n,{opacity:0,y:20}),Oe.to(n,{opacity:1,y:0,duration:.7,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 75%",once:!0}}))});return d.jsxs("section",{className:"section-pad final-cta",id:"cta-final",ref:t,"aria-labelledby":"cta-final-title",children:[d.jsx("div",{className:"container-lg",children:d.jsxs("div",{className:"final-cta__inner",children:[d.jsx("span",{className:"eyebrow",children:"Empezá hoy"}),d.jsxs("h2",{id:"cta-final-title",className:"h-section","data-hook":"headline",children:["Probá Hatlas ",d.jsx("em",{children:"con tu negocio."})]}),d.jsx("p",{className:"lede",style:{marginInline:"auto"},children:"Reservá 20 minutos con el equipo. Te mostramos Hatlas con tus datos reales y respondemos todo lo que necesites saber."}),d.jsx("a",{href:$_,target:"_blank",rel:"noopener noreferrer",className:"btn-gold final-cta__btn",children:"Escribinos por WhatsApp"}),d.jsxs("p",{className:"final-cta__alt",children:["o agendá 20 min: ",d.jsx("a",{href:Cb,children:H_})]}),d.jsx("ul",{className:"trust-badges","aria-label":"Garantías de Hatlas",children:Eb.map(({icon:e,label:n})=>d.jsxs("li",{className:"trust-badge",children:[d.jsx(e,{size:15,strokeWidth:1.75}),n]},n))})]})}),d.jsx("style",{children:`
        .final-cta {
          position: relative;
          z-index: 10;
          background: color-mix(in srgb, var(--surface) 12%, var(--bg));
          text-align: center;
        }
        .final-cta__inner { max-width: 720px; margin: 0 auto; }
        .final-cta__inner .eyebrow { display: inline-block; margin-bottom: 24px; }
        .final-cta__inner h2 { margin-bottom: 20px; }
        .final-cta__inner .lede { margin: 0 auto 36px; }
        .final-cta__btn { padding: 14px 28px; font-size: 15px; }
        .final-cta__alt { margin: 16px 0 0; font-size: 13px; color: var(--ink2); }
        .final-cta__alt a { color: var(--ac-on); text-decoration: none; }
        .final-cta__alt a:hover { text-decoration: underline; }
        .trust-badges {
          list-style: none;
          margin: 36px 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 14px;
        }
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--ink2);
          background: var(--glass);
          -webkit-backdrop-filter: var(--glass-filter);
          backdrop-filter: var(--glass-filter);
          border: 1px solid var(--glass-border);
          border-radius: var(--r-pill);
          box-shadow: var(--e1), inset 0 1px 0 var(--glass-hi);
        }
        .trust-badge svg { color: var(--ac-on); flex-shrink: 0; }
      `})]})}const jb={Producto:[{href:"#sistema",label:"Producto"},{href:"#analista",label:"Hatlas Agent"},{href:"#pricing",label:"Precios"}],Empresa:[{href:"#",label:"Quiénes somos"},{href:"mailto:hola@hatlas.bo",label:"Contacto"},{href:"#",label:"Términos"},{href:"#",label:"Privacidad"}]};function Pb(){const[t,e]=P.useState(""),[n,r]=P.useState(!1),i=a=>{a.preventDefault(),t&&r(!0)};return d.jsxs("footer",{className:"footer",children:[d.jsxs("div",{className:"container-lg",children:[d.jsxs("div",{className:"footer__grid",children:[d.jsxs("div",{className:"footer__brand",children:[d.jsx("span",{className:"footer__logo",children:d.jsx(yv,{height:24,variant:"negro"})}),d.jsx("p",{children:"El software de gestión para PYMEs bolivianas."}),d.jsx("p",{className:"footer__news-hint",children:"Una novedad por mes. Cosas que pasaron en Hatlas."}),d.jsx("form",{className:"footer__news",onSubmit:i,children:n?d.jsx("div",{className:"footer__news-ok",children:"✓ Listo. Te escribimos cuando haya algo nuevo. Nunca más de una vez al mes."}):d.jsxs(d.Fragment,{children:[d.jsx("input",{type:"email",placeholder:"tu@email.com",value:t,onChange:a=>e(a.target.value),required:!0}),d.jsx("button",{type:"submit",children:"Recibir novedades"})]})})]}),Object.entries(jb).map(([a,o])=>d.jsxs("div",{className:"footer__col",children:[d.jsx("h4",{children:a}),d.jsx("ul",{children:o.map(s=>d.jsx("li",{children:d.jsx("a",{href:s.href,children:s.label})},s.label))})]},a))]}),d.jsxs("div",{className:"footer__bottom",children:[d.jsx("span",{children:"© 2026 Hatlas · Santa Cruz, Bolivia"}),d.jsx("span",{className:"footer__tag",children:"Start Thinking."})]})]}),d.jsx("style",{children:`
        .footer {
          position: relative;
          z-index: 10;
          background: var(--bg);
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          padding: 64px 0 40px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer__brand p {
          margin: 12px 0 18px;
          max-width: 320px;
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink2);
        }
        .footer__news-hint {
          margin-top: 0 !important;
          margin-bottom: 10px !important;
          font-family: var(--font-display);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--ink3) !important;
        }
        .footer__logo { display: inline-flex; align-items: center; }
        .footer__news {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 360px;
        }
        .footer__news input {
          flex: 1;
          min-height: 44px;
          padding: 12px 14px;
          background: var(--surface);
          color: var(--ink);
          border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent);
          border-radius: var(--r-sm);
          font-family: var(--font-ui);
          font-size: 14px;
          outline: none;
          transition: border-color 200ms var(--ease-out);
        }
        .footer__news input:focus { border-color: var(--ac-on); }
        .footer__news input::placeholder { color: var(--ph); }
        .footer__news button {
          min-height: 44px;
          padding: 12px 18px;
          color: var(--ac-on);
          background: color-mix(in srgb, var(--ac) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 28%, transparent);
          border-radius: 8px;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition:
            background 200ms var(--ease-out),
            color 200ms var(--ease-out),
            transform 160ms var(--ease-out);
        }
        .footer__news button:hover { background: color-mix(in srgb, var(--ac) 18%, transparent); color: var(--ink); }
        .footer__news button:active { transform: scale(0.97); }
        .footer__news-ok {
          padding: 10px 0;
          color: var(--ok);
          font-size: 13px;
        }

        .footer__col h4 {
          margin: 0 0 16px;
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ac-on);
        }
        .footer__col ul { margin: 0; padding: 0; list-style: none; }
        .footer__col li { margin-bottom: 10px; }
        .footer__col a {
          font-family: var(--font-ui);
          font-size: 14px;
          color: var(--ink2);
          text-decoration: none;
          transition: color 200ms var(--ease-out);
        }
        .footer__col a:hover { color: var(--ink); }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid color-mix(in srgb, var(--ink) 6%, transparent);
          font-family: var(--font-display);
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--ink3);
        }
        .footer__tag {
          font-family: var(--font-display);
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          color: var(--ac-on);
          letter-spacing: -0.01em;
        }

        @media (max-width: 780px) {
          .footer__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer__grid { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; gap: 12px; align-items: flex-start; }
        }
      `})]})}function Nb(){return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"grain","aria-hidden":"true"}),d.jsx("style",{children:`
        .grain {
          position: fixed;
          inset: 0;
          z-index: 1000;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 1 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }
      `})]})}function zb(){const t=P.useRef(null);return P.useEffect(()=>{const e=()=>{const r=document.documentElement.scrollHeight-window.innerHeight,i=r<=0?0:Math.min(1,Math.max(0,window.scrollY/r));t.current&&(t.current.style.transform=`scaleX(${i})`)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:t,className:"scroll-progress","aria-hidden":"true"}),d.jsx("style",{children:`
        .scroll-progress {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 200;
          height: 2px;
          background: linear-gradient(90deg, var(--ac-light) 0%, var(--ac) 50%, var(--ac-deep) 100%);
          transform: scaleX(0);
          transform-origin: 0 50%;
          pointer-events: none;
        }
      `})]})}function Mb(){const t=P.useRef(null),[e,n]=P.useState(!1),r=180;return P.useEffect(()=>{if(typeof window>"u"||window.matchMedia("(max-width: 980px), (pointer: coarse), (prefers-reduced-motion: reduce)").matches)return;const a={x:window.innerWidth/2,y:window.innerHeight/2},o={x:a.x,y:a.y};let s=0,l=!1;const u=()=>{o.x+=(a.x-o.x)*.12,o.y+=(a.y-o.y)*.12,t.current&&(t.current.style.transform=`translate3d(${o.x-r}px, ${o.y-r}px, 0)`),Math.hypot(a.x-o.x,a.y-o.y)>.5?s=requestAnimationFrame(u):l=!1},c=()=>{l||(l=!0,s=requestAnimationFrame(u))},f=h=>{n(!0),a.x=h.clientX,a.y=h.clientY,c()},p=()=>n(!1);return window.addEventListener("mousemove",f),document.addEventListener("mouseleave",p),()=>{window.removeEventListener("mousemove",f),document.removeEventListener("mouseleave",p),cancelAnimationFrame(s)}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{ref:t,className:`cursor-glow ${e?"cursor-glow--active":""}`,"aria-hidden":"true"}),d.jsx("style",{children:`
        .cursor-glow {
          position: fixed; top: 0; left: 0;
          width: 360px; height: 360px;
          z-index: 50;
          opacity: 0;
          pointer-events: none;
          mix-blend-mode: multiply;
          background: radial-gradient(circle, color-mix(in srgb, var(--ac) 16%, transparent) 0%, color-mix(in srgb, var(--ac) 5%, transparent) 34%, transparent 68%);
          border-radius: 50%;
          transition: opacity 400ms var(--ease-out);
          will-change: transform;
        }
        .cursor-glow--active { opacity: 0.55; }
        @media (max-width: 980px), (prefers-reduced-motion: reduce), (pointer: coarse) {
          .cursor-glow { display: none !important; }
        }
      `})]})}const Rb={position:"bottom",strength:2,height:"6rem",divCount:5,exponential:!1,zIndex:1e3,animated:!1,duration:"0.3s",easing:"ease-out",opacity:1,curve:"linear",responsive:!1,target:"parent",className:"",style:{}},Im={top:{position:"top",height:"6rem"},bottom:{position:"bottom",height:"6rem"},left:{position:"left",height:"6rem"},right:{position:"right",height:"6rem"},subtle:{height:"4rem",strength:1,opacity:.8,divCount:3},intense:{height:"10rem",strength:4,divCount:8,exponential:!0},smooth:{height:"8rem",curve:"bezier",divCount:10},sharp:{height:"5rem",curve:"linear",divCount:4},header:{position:"top",height:"8rem",curve:"ease-out"},footer:{position:"bottom",height:"8rem",curve:"ease-out"},sidebar:{position:"left",height:"6rem",strength:2.5},"page-header":{position:"top",height:"10rem",target:"page",strength:3},"page-footer":{position:"bottom",height:"10rem",target:"page",strength:3}},qm={linear:t=>t,bezier:t=>t*t*(3-2*t),"ease-in":t=>t*t,"ease-out":t=>1-Math.pow(1-t,2),"ease-in-out":t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},Ob=(...t)=>t.reduce((e,n)=>({...e,...n}),{}),Lb=t=>({top:"to top",bottom:"to bottom",left:"to left",right:"to right"})[t]||"to bottom",Ab=(t,e)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>t(...r),e)}},Bm=(t,e,n)=>{const[r,i]=P.useState(e[n]);return P.useEffect(()=>{if(!t)return;const a=()=>{const s=window.innerWidth;let l=e[n];const u=n[0].toUpperCase()+n.slice(1);s<=480&&e[`mobile${u}`]?l=e[`mobile${u}`]:s<=768&&e[`tablet${u}`]?l=e[`tablet${u}`]:s<=1024&&e[`desktop${u}`]&&(l=e[`desktop${u}`]),i(l)},o=Ab(a,100);return a(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t,e,n]),t?r:e[n]},Db=(t,e=!1)=>{const[n,r]=P.useState(!e);return P.useEffect(()=>{if(!e||!t.current)return;const i=new IntersectionObserver(([a])=>r(a.isIntersecting),{threshold:.1});return i.observe(t.current),()=>i.disconnect()},[t,e]),n};function Fb(t){const e=P.useRef(null),[n,r]=P.useState(!1),i=P.useMemo(()=>{const y=t.preset&&Im[t.preset]?Im[t.preset]:{};return Ob(Rb,y,t)},[t]),a=Bm(i.responsive,i,"height"),o=Bm(i.responsive,i,"width"),s=Db(e,i.animated==="scroll"),l=P.useMemo(()=>{const y=[],g=100/i.divCount,k=n&&i.hoverIntensity?i.strength*i.hoverIntensity:i.strength,v=qm[i.curve]||qm.linear;for(let m=1;m<=i.divCount;m++){let _=m/i.divCount;_=v(_);let x;i.exponential?x=Math.pow(2,_*4)*.0625*k:x=.0625*(_*i.divCount+1)*k;const S=Math.round((g*m-g)*10)/10,C=Math.round(g*m*10)/10,b=Math.round((g*m+g)*10)/10,E=Math.round((g*m+g*2)*10)/10;let N=`transparent ${S}%, black ${C}%`;b<=100&&(N+=`, black ${b}%`),E<=100&&(N+=`, transparent ${E}%`);const T=Lb(i.position),F={position:"absolute",inset:"0",maskImage:`linear-gradient(${T}, ${N})`,WebkitMaskImage:`linear-gradient(${T}, ${N})`,backdropFilter:`blur(${x.toFixed(3)}rem)`,WebkitBackdropFilter:`blur(${x.toFixed(3)}rem)`,opacity:i.opacity,transition:i.animated&&i.animated!=="scroll"?`backdrop-filter ${i.duration} ${i.easing}`:void 0};y.push(d.jsx("div",{style:F},m))}return y},[i,n]),u=P.useMemo(()=>{const y=["top","bottom"].includes(i.position),g=["left","right"].includes(i.position),k=i.target==="page",v={position:k?"fixed":"absolute",pointerEvents:i.hoverIntensity?"auto":"none",opacity:s?1:0,transition:i.animated?`opacity ${i.duration} ${i.easing}`:void 0,zIndex:k?i.zIndex+100:i.zIndex,...i.style};return y?(v.height=a,v.width=o||"100%",v[i.position]=0,v.left=0,v.right=0):g&&(v.width=o||a,v.height="100%",v[i.position]=0,v.top=0,v.bottom=0),v},[i,a,o,s]),{hoverIntensity:c,animated:f,onAnimationComplete:p,duration:h}=i;return P.useEffect(()=>{if(s&&f==="scroll"&&p){const y=parseFloat(h)*1e3,g=setTimeout(()=>p(),y);return()=>clearTimeout(g)}},[s,f,p,h]),d.jsx("div",{ref:e,className:`gradual-blur ${i.target==="page"?"gradual-blur-page":"gradual-blur-parent"} ${i.className}`,style:u,onMouseEnter:c?()=>r(!0):void 0,onMouseLeave:c?()=>r(!1):void 0,children:d.jsx("div",{className:"gradual-blur-inner",style:{position:"relative",width:"100%",height:"100%"},children:l})})}const V_=af.memo(Fb);V_.displayName="GradualBlur";const Ib=()=>{if(typeof document>"u")return;const t="gradual-blur-styles";if(document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=`
  .gradual-blur { pointer-events: none; transition: opacity 0.3s ease-out; isolation: isolate; }
  .gradual-blur-parent { overflow: hidden; }
  .gradual-blur-inner { pointer-events: none; position: relative; width: 100%; height: 100%; }
  .gradual-blur-inner > div { -webkit-backdrop-filter: inherit; backdrop-filter: inherit; }
  @media (prefers-reduced-transparency: reduce) { .gradual-blur { display: none; } }
  [data-perf="lite"] .gradual-blur { display: none; }
  @media print { .gradual-blur { display: none; } }
  @supports not (backdrop-filter: blur(1px)) {
    .gradual-blur-inner > div { background: color-mix(in srgb, var(--bg) 55%, transparent); opacity: 0.5; }
  }`,document.head.appendChild(e)};typeof document<"u"&&Ib();function qb(t,e=[]){P.useEffect(()=>{const n=t.current;if(!n)return;const r=Array.from(n.querySelectorAll(".t-reveal"));if(!r.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){r.forEach(a=>a.classList.add("is-revealed"));return}const i=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-revealed"),i.unobserve(o.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});return r.forEach(a=>i.observe(a)),()=>i.disconnect()},e)}function Bb(){P.useEffect(()=>{var e;typeof document>"u"||(e=document.fonts)!=null&&e.ready&&document.fonts.ready.then(()=>X.refresh())},[]);const t=P.useRef(null);return qb(t),d.jsxs(d.Fragment,{children:[d.jsx(ak,{}),d.jsx(Nb,{}),d.jsx(zb,{}),d.jsx(Mb,{}),d.jsxs("main",{id:"top",ref:t,children:[d.jsx(Zw,{}),d.jsx(Jw,{}),d.jsx(tb,{}),d.jsx(ub,{}),d.jsx(db,{}),d.jsx(pb,{}),d.jsx(mb,{}),d.jsx(vb,{}),d.jsx(xb,{}),d.jsx(wb,{}),d.jsx(Tb,{})]}),d.jsx(Pb,{}),d.jsx(V_,{target:"page",position:"bottom",height:"5.5rem",strength:2,divCount:6,curve:"bezier",opacity:1,zIndex:40})]})}function Ub(){return d.jsxs(d.Fragment,{children:[d.jsxs("a",{href:$_,target:"_blank",rel:"noopener noreferrer",className:"wa-fab","aria-label":"Escribinos por WhatsApp",children:[d.jsx(rp,{size:22,strokeWidth:2}),d.jsx("span",{className:"wa-fab__label",children:"WhatsApp"})]}),d.jsx("style",{children:`
        .wa-fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 150;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 18px;
          color: #fff;
          background: linear-gradient(135deg, var(--ac), var(--ac-deep));
          border-radius: var(--r-pill);
          text-decoration: none;
          font-family: var(--font-ui);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 12px 30px -6px color-mix(in srgb, var(--ac) 45%, transparent);
          animation: wa-in 500ms var(--ease-out) 700ms both;
          transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
        }
        .wa-fab:hover {
          transform: translateY(-2px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            0 16px 38px -6px color-mix(in srgb, var(--ac) 55%, transparent);
        }
        .wa-fab:active { transform: scale(0.97); }
        .wa-fab svg { flex-shrink: 0; }
        @keyframes wa-in {
          from { opacity: 0; transform: translateY(16px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* On small screens, collapse to a round icon button to save space. */
        @media (max-width: 600px) {
          .wa-fab { right: 16px; bottom: 16px; padding: 15px; }
          .wa-fab__label { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-fab { animation: none; }
        }
      `})]})}function Hb(){return d.jsx("svg",{"aria-hidden":"true",width:"0",height:"0",style:{position:"absolute",width:0,height:0,pointerEvents:"none"},children:d.jsx("defs",{children:d.jsxs("filter",{id:"lg-refract",x:"-20%",y:"-20%",width:"140%",height:"140%",colorInterpolationFilters:"sRGB",children:[d.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.011 0.011",numOctaves:2,seed:7,result:"n"}),d.jsx("feGaussianBlur",{in:"n",stdDeviation:1.3,result:"nb"}),d.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"nb",scale:7,xChannelSelector:"R",yChannelSelector:"G"})]})})})}function $b(){return d.jsxs("div",{className:"atlas-blobs","aria-hidden":"true",children:[d.jsx("i",{}),d.jsx("i",{}),d.jsx("i",{})]})}let _l=null;function Vb(){return _l||(_l=(async()=>{var t;typeof window>"u"||(window.gsap??(window.gsap=Oe),window.ScrollTrigger??(window.ScrollTrigger=X),await bu(()=>import("./atlas-anim-Cymvr9z4.js"),[]),(t=window.atlasAnim)==null||t.init({autoSections:!1}))})(),_l)}function Wb(){var t;(t=window.atlasAnim)==null||t.refresh()}function Yb(){const{pathname:t}=so();return P.useEffect(()=>{let e=0;return Vb().then(()=>{e=requestAnimationFrame(Wb)}),()=>cancelAnimationFrame(e)},[t]),null}const Xb=P.lazy(()=>bu(()=>import("./ModulePage-BdbyL24X.js"),[]).then(t=>({default:t.ModulePage}))),Qb=P.lazy(()=>bu(()=>import("./ModulesIndex-C8nnpkii.js"),[]).then(t=>({default:t.ModulesIndex}))),Gb=P.lazy(()=>bu(()=>import("./TwentyAgentPage-CLUeau6T.js"),[]).then(t=>({default:t.TwentyAgentPage})));ev(document.getElementById("root")).render(d.jsx(af.StrictMode,{children:d.jsx(Qw,{children:d.jsxs(w2,{children:[d.jsx(P.Suspense,{fallback:null,children:d.jsxs(m2,{children:[d.jsx(fa,{path:"/",element:d.jsx(Bb,{})}),d.jsx(fa,{path:"/hatlas-agent",element:d.jsx(Gb,{})}),d.jsx(fa,{path:"/modulos",element:d.jsx(Qb,{})}),d.jsx(fa,{path:"/modulos/:slug",element:d.jsx(Xb,{})}),d.jsx(fa,{path:"*",element:d.jsx(p2,{to:"/",replace:!0})})]})}),d.jsx(Yb,{}),d.jsx($b,{}),d.jsx(Ub,{}),d.jsx(Hb,{})]})})}));export{pb as A,A2 as C,Tb as F,Nb as G,Pi as L,Pd as M,ak as N,G2 as P,zb as S,mv as T,vv as U,Kw as V,_v as W,z2 as a,Mb as b,Pb as c,X2 as d,p2 as e,Z2 as f,tk as g,W as h,Zb as i,d as j,qb as k,Wn as l,P as r,Kb as u};
