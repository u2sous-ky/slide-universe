(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ps={exports:{}},jl={},Ts={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),Jc=Symbol.for("react.portal"),Zc=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),td=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),od=Symbol.for("react.lazy"),ua=Symbol.iterator;function ad(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var As={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bs=Object.assign,Ds={};function _t(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||As}_t.prototype.isReactComponent={};_t.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};_t.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bs(){}Bs.prototype=_t.prototype;function po(e,n,t){this.props=e,this.context=n,this.refs=Ds,this.updater=t||As}var mo=po.prototype=new Bs;mo.constructor=po;bs(mo,_t.prototype);mo.isPureReactComponent=!0;var ca=Array.isArray,Ms=Object.prototype.hasOwnProperty,ho={current:null},Ls={key:!0,ref:!0,__self:!0,__source:!0};function Is(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)Ms.call(n,r)&&!Ls.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Cr,type:e,key:i,ref:o,props:l,_owner:ho.current}}function sd(e,n){return{$$typeof:Cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function go(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cr}function ud(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var da=/\/+/g;function Hl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ud(""+e.key):n.toString(36)}function Hr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Cr:case Jc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Hl(o,0):r,ca(l)?(t="",e!=null&&(t=e.replace(da,"$&/")+"/"),Hr(l,n,t,"",function(c){return c})):l!=null&&(go(l)&&(l=sd(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(da,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",ca(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Hl(i,s);o+=Hr(i,n,t,u,l)}else if(u=ad(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Hl(i,s++),o+=Hr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function _r(e,n,t){if(e==null)return e;var r=[],l=0;return Hr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function cd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Wr={transition:null},dd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:ho};function Os(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:_r,forEach:function(e,n,t){_r(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return _r(e,function(){n++}),n},toArray:function(e){return _r(e,function(n){return n})||[]},only:function(e){if(!go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=_t;L.Fragment=Zc;L.Profiler=ed;L.PureComponent=po;L.StrictMode=qc;L.Suspense=ld;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dd;L.act=Os;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bs({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=ho.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Ms.call(n,u)&&!Ls.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Cr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nd,_context:e},e.Consumer=e};L.createElement=Is;L.createFactory=function(e){var n=Is.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:rd,render:e}};L.isValidElement=go;L.lazy=function(e){return{$$typeof:od,_payload:{_status:-1,_result:e},_init:cd}};L.memo=function(e,n){return{$$typeof:id,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=n}};L.unstable_act=Os;L.useCallback=function(e,n){return ye.current.useCallback(e,n)};L.useContext=function(e){return ye.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};L.useEffect=function(e,n){return ye.current.useEffect(e,n)};L.useId=function(){return ye.current.useId()};L.useImperativeHandle=function(e,n,t){return ye.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return ye.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return ye.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return ye.current.useMemo(e,n)};L.useReducer=function(e,n,t){return ye.current.useReducer(e,n,t)};L.useRef=function(e){return ye.current.useRef(e)};L.useState=function(e){return ye.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return ye.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return ye.current.useTransition()};L.version="18.3.1";Ts.exports=L;var k=Ts.exports;const fd=Xc(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=k,md=Symbol.for("react.element"),hd=Symbol.for("react.fragment"),gd=Object.prototype.hasOwnProperty,yd=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)gd.call(n,r)&&!vd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:md,type:e,key:i,ref:o,props:l,_owner:yd.current}}jl.Fragment=hd;jl.jsx=Rs;jl.jsxs=Rs;Ps.exports=jl;var a=Ps.exports,vi={},zs={exports:{}},Pe={},Ys={exports:{}},$s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(m,w){var b=m.length;m.push(w);e:for(;0<b;){var J=b-1>>>1,re=m[J];if(0<l(re,w))m[J]=w,m[b]=re,b=J;else break e}}function t(m){return m.length===0?null:m[0]}function r(m){if(m.length===0)return null;var w=m[0],b=m.pop();if(b!==w){m[0]=b;e:for(var J=0,re=m.length,wr=re>>>1;J<wr;){var Mn=2*(J+1)-1,Ul=m[Mn],Ln=Mn+1,Fr=m[Ln];if(0>l(Ul,b))Ln<re&&0>l(Fr,Ul)?(m[J]=Fr,m[Ln]=b,J=Ln):(m[J]=Ul,m[Mn]=b,J=Mn);else if(Ln<re&&0>l(Fr,b))m[J]=Fr,m[Ln]=b,J=Ln;else break e}}return w}function l(m,w){var b=m.sortIndex-w.sortIndex;return b!==0?b:m.id-w.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],h=1,g=null,y=3,v=!1,C=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(m){for(var w=t(c);w!==null;){if(w.callback===null)r(c);else if(w.startTime<=m)r(c),w.sortIndex=w.expirationTime,n(u,w);else break;w=t(c)}}function x(m){if(S=!1,p(m),!C)if(t(u)!==null)C=!0,Tt(F);else{var w=t(c);w!==null&&Ve(x,w.startTime-m)}}function F(m,w){C=!1,S&&(S=!1,f(P),P=-1),v=!0;var b=y;try{for(p(w),g=t(u);g!==null&&(!(g.expirationTime>w)||m&&!me());){var J=g.callback;if(typeof J=="function"){g.callback=null,y=g.priorityLevel;var re=J(g.expirationTime<=w);w=e.unstable_now(),typeof re=="function"?g.callback=re:g===t(u)&&r(u),p(w)}else r(u);g=t(u)}if(g!==null)var wr=!0;else{var Mn=t(c);Mn!==null&&Ve(x,Mn.startTime-w),wr=!1}return wr}finally{g=null,y=b,v=!1}}var _=!1,j=null,P=-1,Y=5,D=-1;function me(){return!(e.unstable_now()-D<Y)}function qe(){if(j!==null){var m=e.unstable_now();D=m;var w=!0;try{w=j(!0,m)}finally{w?$():(_=!1,j=null)}}else _=!1}var $;if(typeof d=="function")$=function(){d(qe)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Oe=R.port2;R.port1.onmessage=qe,$=function(){Oe.postMessage(null)}}else $=function(){O(qe,0)};function Tt(m){j=m,_||(_=!0,$())}function Ve(m,w){P=O(function(){m(e.unstable_now())},w)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(m){m.callback=null},e.unstable_continueExecution=function(){C||v||(C=!0,Tt(F))},e.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<m?Math.floor(1e3/m):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(m){switch(y){case 1:case 2:case 3:var w=3;break;default:w=y}var b=y;y=w;try{return m()}finally{y=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(m,w){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var b=y;y=m;try{return w()}finally{y=b}},e.unstable_scheduleCallback=function(m,w,b){var J=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?J+b:J):b=J,m){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=b+re,m={id:h++,callback:w,priorityLevel:m,startTime:b,expirationTime:re,sortIndex:-1},b>J?(m.sortIndex=b,n(c,m),t(u)===null&&m===t(c)&&(S?(f(P),P=-1):S=!0,Ve(x,b-J))):(m.sortIndex=re,n(u,m),C||v||(C=!0,Tt(F))),m},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(m){var w=y;return function(){var b=y;y=w;try{return m.apply(this,arguments)}finally{y=b}}}})($s);Ys.exports=$s;var Cd=Ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=k,je=Cd;function E(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gs=new Set,nr={};function Qn(e,n){vt(e,n),vt(e+"Capture",n)}function vt(e,n){for(nr[e]=n,e=0;e<n.length;e++)Gs.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=Object.prototype.hasOwnProperty,Ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},pa={};function Sd(e){return Ci.call(pa,e)?!0:Ci.call(fa,e)?!1:Ed.test(e)?pa[e]=!0:(fa[e]=!0,!1)}function kd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wd(e,n,t,r){if(n===null||typeof n>"u"||kd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ve(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ue[n]=new ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var yo=/[\-:]([a-z])/g;function vo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(yo,vo);ue[n]=new ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(yo,vo);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(yo,vo);ue[n]=new ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Co(e,n,t,r){var l=ue.hasOwnProperty(n)?ue[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(wd(n,t,l,r)&&(t=null),r||l===null?Sd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var dn=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),xo=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),Hs=Symbol.for("react.context"),Eo=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),Si=Symbol.for("react.suspense_list"),So=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Ws=Symbol.for("react.offscreen"),ma=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wl;function zt(e){if(Wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wl=n&&n[1]||""}return`
`+Wl+e}var Vl=!1;function Kl(e,n){if(!e||Vl)return"";Vl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Vl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?zt(e):""}function Fd(e){switch(e.tag){case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return zt("Suspense");case 19:return zt("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case xi:return"Profiler";case xo:return"StrictMode";case Ei:return"Suspense";case Si:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hs:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case Eo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case So:return n=e.displayName||null,n!==null?n:ki(e.type)||"Memo";case hn:n=e._payload,e=e._init;try{return ki(e(n))}catch{}}return null}function _d(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ki(n);case 8:return n===xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Nd(e){var n=Vs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jr(e){e._valueTracker||(e._valueTracker=Nd(e))}function Ks(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ha(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qs(e,n){n=n.checked,n!=null&&Co(e,"checked",n,!1)}function Fi(e,n){Qs(e,n);var t=Pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?_i(e,n.type,t):n.hasOwnProperty("defaultValue")&&_i(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ga(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function _i(e,n,t){(n!=="number"||rl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yt=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ni(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ya(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(E(92));if(Yt(t)){if(1<t.length)throw Error(E(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function Xs(e,n){var t=Pn(n.value),r=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function va(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Js(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Js(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pr,Zs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pr=Pr||document.createElement("div"),Pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function tr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jd=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){jd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ut[n]=Ut[e]})});function qs(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+n).trim():n+"px"}function eu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=qs(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Pd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,n){if(n){if(Pd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(E(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(E(61))}if(n.style!=null&&typeof n.style!="object")throw Error(E(62))}}function Ti(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,pt=null,mt=null;function Ca(e){if(e=Sr(e)){if(typeof bi!="function")throw Error(E(280));var n=e.stateNode;n&&(n=Dl(n),bi(e.stateNode,e.type,n))}}function nu(e){pt?mt?mt.push(e):mt=[e]:pt=e}function tu(){if(pt){var e=pt,n=mt;if(mt=pt=null,Ca(e),n)for(e=0;e<n.length;e++)Ca(n[e])}}function ru(e,n){return e(n)}function lu(){}var Ql=!1;function iu(e,n,t){if(Ql)return e(n,t);Ql=!0;try{return ru(e,n,t)}finally{Ql=!1,(pt!==null||mt!==null)&&(lu(),tu())}}function rr(e,n){var t=e.stateNode;if(t===null)return null;var r=Dl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,n,typeof t));return t}var Di=!1;if(an)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){Di=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{Di=!1}function Td(e,n,t,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Ht=!1,ll=null,il=!1,Bi=null,Ad={onError:function(e){Ht=!0,ll=e}};function bd(e,n,t,r,l,i,o,s,u){Ht=!1,ll=null,Td.apply(Ad,arguments)}function Dd(e,n,t,r,l,i,o,s,u){if(bd.apply(this,arguments),Ht){if(Ht){var c=ll;Ht=!1,ll=null}else throw Error(E(198));il||(il=!0,Bi=c)}}function Xn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ou(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xa(e){if(Xn(e)!==e)throw Error(E(188))}function Bd(e){var n=e.alternate;if(!n){if(n=Xn(e),n===null)throw Error(E(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return xa(l),e;if(i===r)return xa(l),n;i=i.sibling}throw Error(E(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(E(189))}}if(t.alternate!==r)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:n}function au(e){return e=Bd(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=su(e);if(n!==null)return n;e=e.sibling}return null}var uu=je.unstable_scheduleCallback,Ea=je.unstable_cancelCallback,Md=je.unstable_shouldYield,Ld=je.unstable_requestPaint,q=je.unstable_now,Id=je.unstable_getCurrentPriorityLevel,wo=je.unstable_ImmediatePriority,cu=je.unstable_UserBlockingPriority,ol=je.unstable_NormalPriority,Od=je.unstable_LowPriority,du=je.unstable_IdlePriority,Pl=null,Je=null;function Rd(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Pl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:$d,zd=Math.log,Yd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(zd(e)/Yd|0)|0}var Tr=64,Ar=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function al(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=$t(s):(i&=o,i!==0&&(r=$t(i)))}else o=t&~l,o!==0?r=$t(o):i!==0&&(r=$t(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ue(n),l=1<<t,r|=e[t],n&=~l;return r}function Gd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ud(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),s=1<<o,u=l[o];u===-1?(!(s&t)||s&r)&&(l[o]=Gd(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=Tr;return Tr<<=1,!(Tr&4194240)&&(Tr=64),e}function Xl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function xr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function Hd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ue(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Fo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ue(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var z=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,_o,hu,gu,yu,Li=!1,br=[],En=null,Sn=null,kn=null,lr=new Map,ir=new Map,yn=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(n.pointerId)}}function Dt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Sr(n),n!==null&&_o(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Vd(e,n,t,r,l){switch(n){case"focusin":return En=Dt(En,e,n,t,r,l),!0;case"dragenter":return Sn=Dt(Sn,e,n,t,r,l),!0;case"mouseover":return kn=Dt(kn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return lr.set(i,Dt(lr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,ir.set(i,Dt(ir.get(i)||null,e,n,t,r,l)),!0}return!1}function vu(e){var n=Rn(e.target);if(n!==null){var t=Xn(n);if(t!==null){if(n=t.tag,n===13){if(n=ou(t),n!==null){e.blockedOn=n,yu(e.priority,function(){hu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ii(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ai=r,t.target.dispatchEvent(r),Ai=null}else return n=Sr(t),n!==null&&_o(n),e.blockedOn=t,!1;n.shift()}return!0}function ka(e,n,t){Vr(e)&&t.delete(n)}function Kd(){Li=!1,En!==null&&Vr(En)&&(En=null),Sn!==null&&Vr(Sn)&&(Sn=null),kn!==null&&Vr(kn)&&(kn=null),lr.forEach(ka),ir.forEach(ka)}function Bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Li||(Li=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Kd)))}function or(e){function n(l){return Bt(l,e)}if(0<br.length){Bt(br[0],e);for(var t=1;t<br.length;t++){var r=br[t];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Bt(En,e),Sn!==null&&Bt(Sn,e),kn!==null&&Bt(kn,e),lr.forEach(n),ir.forEach(n),t=0;t<yn.length;t++)r=yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(t=yn[0],t.blockedOn===null);)vu(t),t.blockedOn===null&&yn.shift()}var ht=dn.ReactCurrentBatchConfig,sl=!0;function Qd(e,n,t,r){var l=z,i=ht.transition;ht.transition=null;try{z=1,No(e,n,t,r)}finally{z=l,ht.transition=i}}function Xd(e,n,t,r){var l=z,i=ht.transition;ht.transition=null;try{z=4,No(e,n,t,r)}finally{z=l,ht.transition=i}}function No(e,n,t,r){if(sl){var l=Ii(e,n,t,r);if(l===null)oi(e,n,r,ul,t),Sa(e,r);else if(Vd(l,e,n,t,r))r.stopPropagation();else if(Sa(e,r),n&4&&-1<Wd.indexOf(e)){for(;l!==null;){var i=Sr(l);if(i!==null&&mu(i),i=Ii(e,n,t,r),i===null&&oi(e,n,r,ul,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else oi(e,n,r,null,t)}}var ul=null;function Ii(e,n,t,r){if(ul=null,e=ko(r),e=Rn(e),e!==null)if(n=Xn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ou(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ul=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case wo:return 1;case cu:return 4;case ol:case Od:return 16;case du:return 536870912;default:return 16}default:return 16}}var Cn=null,jo=null,Kr=null;function xu(){if(Kr)return Kr;var e,n=jo,t=n.length,r,l="value"in Cn?Cn.value:Cn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function Qr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function wa(){return!1}function Te(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Dr:wa,this.isPropagationStopped=wa,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),n}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Te(Nt),Er=X({},Nt,{view:0,detail:0}),Jd=Te(Er),Jl,Zl,Mt,Tl=X({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:To,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mt&&(Mt&&e.type==="mousemove"?(Jl=e.screenX-Mt.screenX,Zl=e.screenY-Mt.screenY):Zl=Jl=0,Mt=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Fa=Te(Tl),Zd=X({},Tl,{dataTransfer:0}),qd=Te(Zd),ef=X({},Er,{relatedTarget:0}),ql=Te(ef),nf=X({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),tf=Te(nf),rf=X({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=Te(rf),of=X({},Nt,{data:0}),_a=Te(of),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=uf[e])?!!n[e]:!1}function To(){return cf}var df=X({},Er,{key:function(e){if(e.key){var n=af[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:To,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=Te(df),pf=X({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Te(pf),mf=X({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:To}),hf=Te(mf),gf=X({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),yf=Te(gf),vf=X({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cf=Te(vf),xf=[9,13,27,32],Ao=an&&"CompositionEvent"in window,Wt=null;an&&"documentMode"in document&&(Wt=document.documentMode);var Ef=an&&"TextEvent"in window&&!Wt,Eu=an&&(!Ao||Wt&&8<Wt&&11>=Wt),ja=" ",Pa=!1;function Su(e,n){switch(e){case"keyup":return xf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function Sf(e,n){switch(e){case"compositionend":return ku(n);case"keypress":return n.which!==32?null:(Pa=!0,ja);case"textInput":return e=n.data,e===ja&&Pa?null:e;default:return null}}function kf(e,n){if(tt)return e==="compositionend"||!Ao&&Su(e,n)?(e=xu(),Kr=jo=Cn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Eu&&n.locale!=="ko"?null:n.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wf[e.type]:n==="textarea"}function wu(e,n,t,r){nu(r),n=cl(n,"onChange"),0<n.length&&(t=new Po("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,ar=null;function Ff(e){Mu(e,0)}function Al(e){var n=it(e);if(Ks(n))return e}function _f(e,n){if(e==="change")return n}var Fu=!1;if(an){var ei;if(an){var ni="oninput"in document;if(!ni){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),ni=typeof Aa.oninput=="function"}ei=ni}else ei=!1;Fu=ei&&(!document.documentMode||9<document.documentMode)}function ba(){Vt&&(Vt.detachEvent("onpropertychange",_u),ar=Vt=null)}function _u(e){if(e.propertyName==="value"&&Al(ar)){var n=[];wu(n,ar,e,ko(e)),iu(Ff,n)}}function Nf(e,n,t){e==="focusin"?(ba(),Vt=n,ar=t,Vt.attachEvent("onpropertychange",_u)):e==="focusout"&&ba()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(ar)}function Pf(e,n){if(e==="click")return Al(n)}function Tf(e,n){if(e==="input"||e==="change")return Al(n)}function Af(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:Af;function sr(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ci.call(n,l)||!We(e[l],n[l]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,n){var t=Da(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Da(t)}}function Nu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Nu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ju(){for(var e=window,n=rl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=rl(e.document)}return n}function bo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function bf(e){var n=ju(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Nu(t.ownerDocument.documentElement,t)){if(r!==null&&bo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ba(t,i);var o=Ba(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=an&&"documentMode"in document&&11>=document.documentMode,rt=null,Oi=null,Kt=null,Ri=!1;function Ma(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ri||rt==null||rt!==rl(r)||(r=rt,"selectionStart"in r&&bo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kt&&sr(Kt,r)||(Kt=r,r=cl(Oi,"onSelect"),0<r.length&&(n=new Po("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=rt)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},ti={},Pu={};an&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function bl(e){if(ti[e])return ti[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Pu)return ti[e]=n[t];return e}var Tu=bl("animationend"),Au=bl("animationiteration"),bu=bl("animationstart"),Du=bl("transitionend"),Bu=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Bu.set(e,n),Qn(n,[e])}for(var ri=0;ri<La.length;ri++){var li=La[ri],Bf=li.toLowerCase(),Mf=li[0].toUpperCase()+li.slice(1);An(Bf,"on"+Mf)}An(Tu,"onAnimationEnd");An(Au,"onAnimationIteration");An(bu,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Du,"onTransitionEnd");vt("onMouseEnter",["mouseout","mouseover"]);vt("onMouseLeave",["mouseout","mouseover"]);vt("onPointerEnter",["pointerout","pointerover"]);vt("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gt));function Ia(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Dd(r,n,void 0,e),e.currentTarget=null}function Mu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ia(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ia(l,s,c),i=u}}}if(il)throw e=Bi,il=!1,Bi=null,e}function H(e,n){var t=n[Ui];t===void 0&&(t=n[Ui]=new Set);var r=e+"__bubble";t.has(r)||(Lu(n,e,2,!1),t.add(r))}function ii(e,n,t){var r=0;n&&(r|=4),Lu(t,e,r,n)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Mr]){e[Mr]=!0,Gs.forEach(function(t){t!=="selectionchange"&&(Lf.has(t)||ii(t,!1,e),ii(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Mr]||(n[Mr]=!0,ii("selectionchange",!1,n))}}function Lu(e,n,t,r){switch(Cu(n)){case 1:var l=Qd;break;case 4:l=Xd;break;default:l=No}t=l.bind(null,n,t,e),l=void 0,!Di||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function oi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Rn(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}iu(function(){var c=i,h=ko(t),g=[];e:{var y=Bu.get(e);if(y!==void 0){var v=Po,C=e;switch(e){case"keypress":if(Qr(t)===0)break e;case"keydown":case"keyup":v=ff;break;case"focusin":C="focus",v=ql;break;case"focusout":C="blur",v=ql;break;case"beforeblur":case"afterblur":v=ql;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hf;break;case Tu:case Au:case bu:v=tf;break;case Du:v=yf;break;case"scroll":v=Jd;break;case"wheel":v=Cf;break;case"copy":case"cut":case"paste":v=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Na}var S=(n&4)!==0,O=!S&&e==="scroll",f=S?y!==null?y+"Capture":null:y;S=[];for(var d=c,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=rr(d,f),x!=null&&S.push(cr(d,x,p)))),O)break;d=d.return}0<S.length&&(y=new v(y,C,null,t,h),g.push({event:y,listeners:S}))}}if(!(n&7)){e:{if(y=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",y&&t!==Ai&&(C=t.relatedTarget||t.fromElement)&&(Rn(C)||C[sn]))break e;if((v||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,v?(C=t.relatedTarget||t.toElement,v=c,C=C?Rn(C):null,C!==null&&(O=Xn(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(v=null,C=c),v!==C)){if(S=Fa,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=Na,x="onPointerLeave",f="onPointerEnter",d="pointer"),O=v==null?y:it(v),p=C==null?y:it(C),y=new S(x,d+"leave",v,t,h),y.target=O,y.relatedTarget=p,x=null,Rn(h)===c&&(S=new S(f,d+"enter",C,t,h),S.target=p,S.relatedTarget=O,x=S),O=x,v&&C)n:{for(S=v,f=C,d=0,p=S;p;p=Zn(p))d++;for(p=0,x=f;x;x=Zn(x))p++;for(;0<d-p;)S=Zn(S),d--;for(;0<p-d;)f=Zn(f),p--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break n;S=Zn(S),f=Zn(f)}S=null}else S=null;v!==null&&Oa(g,y,v,S,!1),C!==null&&O!==null&&Oa(g,O,C,S,!0)}}e:{if(y=c?it(c):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var F=_f;else if(Ta(y))if(Fu)F=Tf;else{F=jf;var _=Nf}else(v=y.nodeName)&&v.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=Pf);if(F&&(F=F(e,c))){wu(g,F,t,h);break e}_&&_(e,y,c),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&_i(y,"number",y.value)}switch(_=c?it(c):window,e){case"focusin":(Ta(_)||_.contentEditable==="true")&&(rt=_,Oi=c,Kt=null);break;case"focusout":Kt=Oi=rt=null;break;case"mousedown":Ri=!0;break;case"contextmenu":case"mouseup":case"dragend":Ri=!1,Ma(g,t,h);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Ma(g,t,h)}var j;if(Ao)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else tt?Su(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Eu&&t.locale!=="ko"&&(tt||P!=="onCompositionStart"?P==="onCompositionEnd"&&tt&&(j=xu()):(Cn=h,jo="value"in Cn?Cn.value:Cn.textContent,tt=!0)),_=cl(c,P),0<_.length&&(P=new _a(P,e,null,t,h),g.push({event:P,listeners:_}),j?P.data=j:(j=ku(t),j!==null&&(P.data=j)))),(j=Ef?Sf(e,t):kf(e,t))&&(c=cl(c,"onBeforeInput"),0<c.length&&(h=new _a("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:c}),h.data=j))}Mu(g,n)})}function cr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function cl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=rr(e,t),i!=null&&r.unshift(cr(e,i,l)),i=rr(e,n),i!=null&&r.push(cr(e,i,l))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=rr(t,i),u!=null&&o.unshift(cr(t,u,s))):l||(u=rr(t,i),u!=null&&o.push(cr(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var If=/\r\n?/g,Of=/\u0000|\uFFFD/g;function Ra(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(Of,"")}function Lr(e,n,t){if(n=Ra(n),Ra(e)!==n&&t)throw Error(E(425))}function dl(){}var zi=null,Yi=null;function $i(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,za=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof za<"u"?function(e){return za.resolve(null).then(e).catch(Yf)}:Gi;function Yf(e){setTimeout(function(){throw e})}function ai(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),or(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);or(n)}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),Xe="__reactFiber$"+jt,dr="__reactProps$"+jt,sn="__reactContainer$"+jt,Ui="__reactEvents$"+jt,$f="__reactListeners$"+jt,Gf="__reactHandles$"+jt;function Rn(e){var n=e[Xe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sn]||t[Xe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ya(e);e!==null;){if(t=e[Xe])return t;e=Ya(e)}return n}e=t,t=e.parentNode}return null}function Sr(e){return e=e[Xe]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Dl(e){return e[dr]||null}var Hi=[],ot=-1;function bn(e){return{current:e}}function W(e){0>ot||(e.current=Hi[ot],Hi[ot]=null,ot--)}function U(e,n){ot++,Hi[ot]=e.current,e.current=n}var Tn={},pe=bn(Tn),Ee=bn(!1),Un=Tn;function Ct(e,n){var t=e.type.contextTypes;if(!t)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Se(e){return e=e.childContextTypes,e!=null}function fl(){W(Ee),W(pe)}function $a(e,n,t){if(pe.current!==Tn)throw Error(E(168));U(pe,n),U(Ee,t)}function Iu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(E(108,_d(e)||"Unknown",l));return X({},t,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Un=pe.current,U(pe,e),U(Ee,Ee.current),!0}function Ga(e,n,t){var r=e.stateNode;if(!r)throw Error(E(169));t?(e=Iu(e,n,Un),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(pe),U(pe,e)):W(Ee),U(Ee,t)}var nn=null,Bl=!1,si=!1;function Ou(e){nn===null?nn=[e]:nn.push(e)}function Uf(e){Bl=!0,Ou(e)}function Dn(){if(!si&&nn!==null){si=!0;var e=0,n=z;try{var t=nn;for(z=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}nn=null,Bl=!1}catch(l){throw nn!==null&&(nn=nn.slice(e+1)),uu(wo,Dn),l}finally{z=n,si=!1}}return null}var at=[],st=0,ml=null,hl=0,Ae=[],be=0,Hn=null,tn=1,rn="";function In(e,n){at[st++]=hl,at[st++]=ml,ml=e,hl=n}function Ru(e,n,t){Ae[be++]=tn,Ae[be++]=rn,Ae[be++]=Hn,Hn=e;var r=tn;e=rn;var l=32-Ue(r)-1;r&=~(1<<l),t+=1;var i=32-Ue(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,tn=1<<32-Ue(n)+l|t<<l|r,rn=i+e}else tn=1<<i|t<<l|r,rn=e}function Do(e){e.return!==null&&(In(e,1),Ru(e,1,0))}function Bo(e){for(;e===ml;)ml=at[--st],at[st]=null,hl=at[--st],at[st]=null;for(;e===Hn;)Hn=Ae[--be],Ae[be]=null,rn=Ae[--be],Ae[be]=null,tn=Ae[--be],Ae[be]=null}var Ne=null,_e=null,V=!1,$e=null;function zu(e,n){var t=De(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ua(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ne=e,_e=wn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ne=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Hn!==null?{id:tn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=De(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ne=e,_e=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vi(e){if(V){var n=_e;if(n){var t=n;if(!Ua(e,n)){if(Wi(e))throw Error(E(418));n=wn(t.nextSibling);var r=Ne;n&&Ua(e,n)?zu(r,t):(e.flags=e.flags&-4097|2,V=!1,Ne=e)}}else{if(Wi(e))throw Error(E(418));e.flags=e.flags&-4097|2,V=!1,Ne=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ir(e){if(e!==Ne)return!1;if(!V)return Ha(e),V=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$i(e.type,e.memoizedProps)),n&&(n=_e)){if(Wi(e))throw Yu(),Error(E(418));for(;n;)zu(e,n),n=wn(n.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=wn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Ne?wn(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=_e;e;)e=wn(e.nextSibling)}function xt(){_e=Ne=null,V=!1}function Mo(e){$e===null?$e=[e]:$e.push(e)}var Hf=dn.ReactCurrentBatchConfig;function Lt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(E(309));var r=t.stateNode}if(!r)throw Error(E(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(E(284));if(!t._owner)throw Error(E(290,e))}return e}function Or(e,n){throw e=Object.prototype.toString.call(n),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wa(e){var n=e._init;return n(e._payload)}function $u(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=jn(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,x){return d===null||d.tag!==6?(d=hi(p,f.mode,x),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,x){var F=p.type;return F===nt?h(f,d,p.props.children,x,p.key):d!==null&&(d.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hn&&Wa(F)===d.type)?(x=l(d,p.props),x.ref=Lt(f,d,p),x.return=f,x):(x=tl(p.type,p.key,p.props,null,f.mode,x),x.ref=Lt(f,d,p),x.return=f,x)}function c(f,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=gi(p,f.mode,x),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,x,F){return d===null||d.tag!==7?(d=Gn(p,f.mode,x,F),d.return=f,d):(d=l(d,p),d.return=f,d)}function g(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nr:return p=tl(d.type,d.key,d.props,null,f.mode,p),p.ref=Lt(f,null,d),p.return=f,p;case et:return d=gi(d,f.mode,p),d.return=f,d;case hn:var x=d._init;return g(f,x(d._payload),p)}if(Yt(d)||At(d))return d=Gn(d,f.mode,p,null),d.return=f,d;Or(f,d)}return null}function y(f,d,p,x){var F=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return F!==null?null:s(f,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nr:return p.key===F?u(f,d,p,x):null;case et:return p.key===F?c(f,d,p,x):null;case hn:return F=p._init,y(f,d,F(p._payload),x)}if(Yt(p)||At(p))return F!==null?null:h(f,d,p,x,null);Or(f,p)}return null}function v(f,d,p,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(d,f,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nr:return f=f.get(x.key===null?p:x.key)||null,u(d,f,x,F);case et:return f=f.get(x.key===null?p:x.key)||null,c(d,f,x,F);case hn:var _=x._init;return v(f,d,p,_(x._payload),F)}if(Yt(x)||At(x))return f=f.get(p)||null,h(d,f,x,F,null);Or(d,x)}return null}function C(f,d,p,x){for(var F=null,_=null,j=d,P=d=0,Y=null;j!==null&&P<p.length;P++){j.index>P?(Y=j,j=null):Y=j.sibling;var D=y(f,j,p[P],x);if(D===null){j===null&&(j=Y);break}e&&j&&D.alternate===null&&n(f,j),d=i(D,d,P),_===null?F=D:_.sibling=D,_=D,j=Y}if(P===p.length)return t(f,j),V&&In(f,P),F;if(j===null){for(;P<p.length;P++)j=g(f,p[P],x),j!==null&&(d=i(j,d,P),_===null?F=j:_.sibling=j,_=j);return V&&In(f,P),F}for(j=r(f,j);P<p.length;P++)Y=v(j,f,P,p[P],x),Y!==null&&(e&&Y.alternate!==null&&j.delete(Y.key===null?P:Y.key),d=i(Y,d,P),_===null?F=Y:_.sibling=Y,_=Y);return e&&j.forEach(function(me){return n(f,me)}),V&&In(f,P),F}function S(f,d,p,x){var F=At(p);if(typeof F!="function")throw Error(E(150));if(p=F.call(p),p==null)throw Error(E(151));for(var _=F=null,j=d,P=d=0,Y=null,D=p.next();j!==null&&!D.done;P++,D=p.next()){j.index>P?(Y=j,j=null):Y=j.sibling;var me=y(f,j,D.value,x);if(me===null){j===null&&(j=Y);break}e&&j&&me.alternate===null&&n(f,j),d=i(me,d,P),_===null?F=me:_.sibling=me,_=me,j=Y}if(D.done)return t(f,j),V&&In(f,P),F;if(j===null){for(;!D.done;P++,D=p.next())D=g(f,D.value,x),D!==null&&(d=i(D,d,P),_===null?F=D:_.sibling=D,_=D);return V&&In(f,P),F}for(j=r(f,j);!D.done;P++,D=p.next())D=v(j,f,P,D.value,x),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?P:D.key),d=i(D,d,P),_===null?F=D:_.sibling=D,_=D);return e&&j.forEach(function(qe){return n(f,qe)}),V&&In(f,P),F}function O(f,d,p,x){if(typeof p=="object"&&p!==null&&p.type===nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Nr:e:{for(var F=p.key,_=d;_!==null;){if(_.key===F){if(F=p.type,F===nt){if(_.tag===7){t(f,_.sibling),d=l(_,p.props.children),d.return=f,f=d;break e}}else if(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===hn&&Wa(F)===_.type){t(f,_.sibling),d=l(_,p.props),d.ref=Lt(f,_,p),d.return=f,f=d;break e}t(f,_);break}else n(f,_);_=_.sibling}p.type===nt?(d=Gn(p.props.children,f.mode,x,p.key),d.return=f,f=d):(x=tl(p.type,p.key,p.props,null,f.mode,x),x.ref=Lt(f,d,p),x.return=f,f=x)}return o(f);case et:e:{for(_=p.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=gi(p,f.mode,x),d.return=f,f=d}return o(f);case hn:return _=p._init,O(f,d,_(p._payload),x)}if(Yt(p))return C(f,d,p,x);if(At(p))return S(f,d,p,x);Or(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=l(d,p),d.return=f,f=d):(t(f,d),d=hi(p,f.mode,x),d.return=f,f=d),o(f)):t(f,d)}return O}var Et=$u(!0),Gu=$u(!1),gl=bn(null),yl=null,ut=null,Lo=null;function Io(){Lo=ut=yl=null}function Oo(e){var n=gl.current;W(gl),e._currentValue=n}function Ki(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function gt(e,n){yl=e,Lo=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(Lo!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(yl===null)throw Error(E(308));ut=e,yl.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var zn=null;function Ro(e){zn===null?zn=[e]:zn.push(e)}function Uu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ro(n)):(t.next=l.next,l.next=t),n.interleaved=t,un(e,r)}function un(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var gn=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Fn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,un(e,t)}return l=r.interleaved,l===null?(n.next=n,Ro(r)):(n.next=l.next,l.next=n),r.interleaved=n,un(e,t)}function Xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fo(e,t)}}function Va(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vl(e,n,t,r){var l=e.updateQueue;gn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(i!==null){var g=l.baseState;o=0,h=c=u=null,s=i;do{var y=s.lane,v=s.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,S=s;switch(y=n,v=t,S.tag){case 1:if(C=S.payload,typeof C=="function"){g=C.call(v,g,y);break e}g=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=S.payload,y=typeof C=="function"?C.call(v,g,y):C,y==null)break e;g=X({},g,y);break e;case 2:gn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else v={eventTime:v,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=v,u=g):h=h.next=v,o|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Vn|=o,e.lanes=o,e.memoizedState=g}}function Ka(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(E(191,l));l.call(r)}}}var kr={},Ze=bn(kr),fr=bn(kr),pr=bn(kr);function Yn(e){if(e===kr)throw Error(E(174));return e}function Yo(e,n){switch(U(pr,n),U(fr,e),U(Ze,kr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ji(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ji(n,e)}W(Ze),U(Ze,n)}function St(){W(Ze),W(fr),W(pr)}function Wu(e){Yn(pr.current);var n=Yn(Ze.current),t=ji(n,e.type);n!==t&&(U(fr,e),U(Ze,t))}function $o(e){fr.current===e&&(W(Ze),W(fr))}var K=bn(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ui=[];function Go(){for(var e=0;e<ui.length;e++)ui[e]._workInProgressVersionPrimary=null;ui.length=0}var Jr=dn.ReactCurrentDispatcher,ci=dn.ReactCurrentBatchConfig,Wn=0,Q=null,ne=null,le=null,xl=!1,Qt=!1,mr=0,Wf=0;function ce(){throw Error(E(321))}function Uo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!We(e[t],n[t]))return!1;return!0}function Ho(e,n,t,r,l,i){if(Wn=i,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Jr.current=e===null||e.memoizedState===null?Xf:Jf,e=t(r,l),Qt){i=0;do{if(Qt=!1,mr=0,25<=i)throw Error(E(301));i+=1,le=ne=null,n.updateQueue=null,Jr.current=Zf,e=t(r,l)}while(Qt)}if(Jr.current=El,n=ne!==null&&ne.next!==null,Wn=0,le=ne=Q=null,xl=!1,n)throw Error(E(300));return e}function Wo(){var e=mr!==0;return mr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Le(){if(ne===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=le===null?Q.memoizedState:le.next;if(n!==null)le=n,ne=e;else{if(e===null)throw Error(E(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function hr(e,n){return typeof n=="function"?n(e):n}function di(e){var n=Le(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=ne,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var h=c.lane;if((Wn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,o=r):u=u.next=g,Q.lanes|=h,Vn|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,We(r,n.memoizedState)||(xe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,Q.lanes|=i,Vn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function fi(e){var n=Le(),t=n.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);We(i,n.memoizedState)||(xe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Vu(){}function Ku(e,n){var t=Q,r=Le(),l=n(),i=!We(r.memoizedState,l);if(i&&(r.memoizedState=l,xe=!0),r=r.queue,Vo(Ju.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,gr(9,Xu.bind(null,t,r,l,n),void 0,null),ie===null)throw Error(E(349));Wn&30||Qu(t,n,l)}return l}function Qu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Xu(e,n,t,r){n.value=t,n.getSnapshot=r,Zu(n)&&qu(e)}function Ju(e,n,t){return t(function(){Zu(n)&&qu(e)})}function Zu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!We(e,t)}catch{return!0}}function qu(e){var n=un(e,1);n!==null&&He(n,e,1,-1)}function Qa(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},n.queue=e,e=e.dispatch=Qf.bind(null,Q,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ec(){return Le().memoizedState}function Zr(e,n,t,r){var l=Qe();Q.flags|=e,l.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function Ml(e,n,t,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&Uo(r,o.deps)){l.memoizedState=gr(n,t,i,r);return}}Q.flags|=e,l.memoizedState=gr(1|n,t,i,r)}function Xa(e,n){return Zr(8390656,8,e,n)}function Vo(e,n){return Ml(2048,8,e,n)}function nc(e,n){return Ml(4,2,e,n)}function tc(e,n){return Ml(4,4,e,n)}function rc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lc(e,n,t){return t=t!=null?t.concat([e]):null,Ml(4,4,rc.bind(null,n,e),t)}function Ko(){}function ic(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Uo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function oc(e,n){var t=Le();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Uo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function ac(e,n,t){return Wn&21?(We(t,n)||(t=fu(),Q.lanes|=t,Vn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function Vf(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var r=ci.transition;ci.transition={};try{e(!1),n()}finally{z=t,ci.transition=r}}function sc(){return Le().memoizedState}function Kf(e,n,t){var r=Nn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(n,t);else if(t=Uu(e,n,t,r),t!==null){var l=ge();He(t,e,r,l),dc(t,n,r)}}function Qf(e,n,t){var r=Nn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,We(s,o)){var u=n.interleaved;u===null?(l.next=l,Ro(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=Uu(e,n,l,r),t!==null&&(l=ge(),He(t,e,r,l),dc(t,n,r))}}function uc(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function cc(e,n){Qt=xl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function dc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Fo(e,t)}}var El={readContext:Me,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Xf={readContext:Me,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:Xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Zr(4194308,4,rc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Zr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Zr(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Kf.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Qa,useDebugValue:Ko,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Qa(!1),n=e[0];return e=Vf.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,l=Qe();if(V){if(t===void 0)throw Error(E(407));t=t()}else{if(t=n(),ie===null)throw Error(E(349));Wn&30||Qu(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Xa(Ju.bind(null,r,i,e),[e]),r.flags|=2048,gr(9,Xu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Qe(),n=ie.identifierPrefix;if(V){var t=rn,r=tn;t=(r&~(1<<32-Ue(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Jf={readContext:Me,useCallback:ic,useContext:Me,useEffect:Vo,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:tc,useMemo:oc,useReducer:di,useRef:ec,useState:function(){return di(hr)},useDebugValue:Ko,useDeferredValue:function(e){var n=Le();return ac(n,ne.memoizedState,e)},useTransition:function(){var e=di(hr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Vu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1},Zf={readContext:Me,useCallback:ic,useContext:Me,useEffect:Vo,useImperativeHandle:lc,useInsertionEffect:nc,useLayoutEffect:tc,useMemo:oc,useReducer:fi,useRef:ec,useState:function(){return fi(hr)},useDebugValue:Ko,useDeferredValue:function(e){var n=Le();return ne===null?n.memoizedState=e:ac(n,ne.memoizedState,e)},useTransition:function(){var e=fi(hr)[0],n=Le().memoizedState;return[e,n]},useMutableSource:Vu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Qi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ll={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),l=Nn(e),i=ln(r,l);i.payload=n,t!=null&&(i.callback=t),n=Fn(e,i,l),n!==null&&(He(n,e,l,r),Xr(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),l=Nn(e),i=ln(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Fn(e,i,l),n!==null&&(He(n,e,l,r),Xr(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=Nn(e),l=ln(t,r);l.tag=2,n!=null&&(l.callback=n),n=Fn(e,l,r),n!==null&&(He(n,e,r,t),Xr(n,e,r))}};function Ja(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!sr(t,r)||!sr(l,i):!0}function fc(e,n,t){var r=!1,l=Tn,i=n.contextType;return typeof i=="object"&&i!==null?i=Me(i):(l=Se(n)?Un:pe.current,r=n.contextTypes,i=(r=r!=null)?Ct(e,l):Tn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Za(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ll.enqueueReplaceState(n,n.state,null)}function Xi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},zo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Me(i):(i=Se(n)?Un:pe.current,l.context=Ct(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Ll.enqueueReplaceState(l,l.state,null),vl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kt(e,n){try{var t="",r=n;do t+=Fd(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function pi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ji(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function pc(e,n,t){t=ln(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){kl||(kl=!0,ao=r),Ji(e,n)},t}function mc(e,n,t){t=ln(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Ji(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ji(e,n),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function qa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=pp.bind(null,e,n,t),n.then(e,e))}function es(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ns(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=ln(-1,1),n.tag=2,Fn(t,n,1))),t.lanes|=1),e)}var ep=dn.ReactCurrentOwner,xe=!1;function he(e,n,t,r){n.child=e===null?Gu(n,null,t,r):Et(n,e.child,t,r)}function ts(e,n,t,r,l){t=t.render;var i=n.ref;return gt(n,l),r=Ho(e,n,t,r,i,l),t=Wo(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,cn(e,n,l)):(V&&t&&Do(n),n.flags|=1,he(e,n,r,l),n.child)}function rs(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ta(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,hc(e,n,i,r,l)):(e=tl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(o,r)&&e.ref===n.ref)return cn(e,n,l)}return n.flags|=1,e=jn(i,r),e.ref=n.ref,e.return=n,n.child=e}function hc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(sr(i,r)&&e.ref===n.ref)if(xe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,cn(e,n,l)}return Zi(e,n,t,r,l)}function gc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(dt,Fe),Fe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,U(dt,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,U(dt,Fe),Fe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,U(dt,Fe),Fe|=r;return he(e,n,l,t),n.child}function yc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Zi(e,n,t,r,l){var i=Se(t)?Un:pe.current;return i=Ct(n,i),gt(n,l),t=Ho(e,n,t,r,i,l),r=Wo(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,cn(e,n,l)):(V&&r&&Do(n),n.flags|=1,he(e,n,t,l),n.child)}function ls(e,n,t,r,l){if(Se(t)){var i=!0;pl(n)}else i=!1;if(gt(n,l),n.stateNode===null)qr(e,n),fc(n,t,r),Xi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=Se(t)?Un:pe.current,c=Ct(n,c));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Za(n,o,r,c),gn=!1;var y=n.memoizedState;o.state=y,vl(n,r,o,l),u=n.memoizedState,s!==r||y!==u||Ee.current||gn?(typeof h=="function"&&(Qi(n,t,h,r),u=n.memoizedState),(s=gn||Ja(n,t,s,r,y,u,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Hu(e,n),s=n.memoizedProps,c=n.type===n.elementType?s:ze(n.type,s),o.props=c,g=n.pendingProps,y=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=Se(t)?Un:pe.current,u=Ct(n,u));var v=t.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==g||y!==u)&&Za(n,o,r,u),gn=!1,y=n.memoizedState,o.state=y,vl(n,r,o,l);var C=n.memoizedState;s!==g||y!==C||Ee.current||gn?(typeof v=="function"&&(Qi(n,t,v,r),C=n.memoizedState),(c=gn||Ja(n,t,c,r,y,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),r=!1)}return qi(e,n,t,r,i,l)}function qi(e,n,t,r,l,i){yc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Ga(n,t,!1),cn(e,n,i);r=n.stateNode,ep.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Et(n,e.child,null,i),n.child=Et(n,null,s,i)):he(e,n,s,i),n.memoizedState=r.state,l&&Ga(n,t,!0),n.child}function vc(e){var n=e.stateNode;n.pendingContext?$a(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$a(e,n.context,!1),Yo(e,n.containerInfo)}function is(e,n,t,r,l){return xt(),Mo(l),n.flags|=256,he(e,n,t,r),n.child}var eo={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cc(e,n,t){var r=n.pendingProps,l=K.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(K,l&1),e===null)return Vi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rl(o,r,0,null),e=Gn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=no(t),n.memoizedState=eo,e):Qo(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return np(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=jn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=jn(s,i):(i=Gn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?no(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=eo,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Qo(e,n){return n=Rl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Rr(e,n,t,r){return r!==null&&Mo(r),Et(n,e.child,null,t),e=Qo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function np(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=pi(Error(E(422))),Rr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Rl({mode:"visible",children:r.children},l,0,null),i=Gn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Et(n,e.child,null,o),n.child.memoizedState=no(o),n.memoizedState=eo,i);if(!(n.mode&1))return Rr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=pi(i,r,void 0),Rr(e,n,o,r)}if(s=(o&e.childLanes)!==0,xe||s){if(r=ie,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,un(e,l),He(r,e,l,-1))}return na(),r=pi(Error(E(421))),Rr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=mp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,_e=wn(l.nextSibling),Ne=n,V=!0,$e=null,e!==null&&(Ae[be++]=tn,Ae[be++]=rn,Ae[be++]=Hn,tn=e.id,rn=e.overflow,Hn=n),n=Qo(n,r.children),n.flags|=4096,n)}function os(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ki(e.return,n,t)}function mi(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function xc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(he(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&os(e,t,n);else if(e.tag===19)os(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(K,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Cl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),mi(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Cl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}mi(n,!0,t,null,i);break;case"together":mi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Vn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(E(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function tp(e,n,t){switch(n.tag){case 3:vc(n),xt();break;case 5:Wu(n);break;case 1:Se(n.type)&&pl(n);break;case 4:Yo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;U(gl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(U(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?Cc(e,n,t):(U(K,K.current&1),e=cn(e,n,t),e!==null?e.sibling:null);U(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return xc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,gc(e,n,t)}return cn(e,n,t)}var Ec,to,Sc,kc;Ec=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};to=function(){};Sc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Yn(Ze.current);var i=null;switch(t){case"input":l=wi(e,l),r=wi(e,r),i=[];break;case"select":l=X({},l,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":l=Ni(e,l),r=Ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}Pi(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};kc=function(e,n,t,r){t!==r&&(n.flags|=4)};function It(e,n){if(!V)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function rp(e,n,t){var r=n.pendingProps;switch(Bo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(n),null;case 1:return Se(n.type)&&fl(),de(n),null;case 3:return r=n.stateNode,St(),W(Ee),W(pe),Go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,$e!==null&&(co($e),$e=null))),to(e,n),de(n),null;case 5:$o(n);var l=Yn(pr.current);if(t=n.type,e!==null&&n.stateNode!=null)Sc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(E(166));return de(n),null}if(e=Yn(Ze.current),Ir(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Xe]=n,r[dr]=i,e=(n.mode&1)!==0,t){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Gt.length;l++)H(Gt[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ha(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ya(r,i),H("invalid",r)}Pi(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Lr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Lr(r.textContent,s,e),l=["children",""+s]):nr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",r)}switch(t){case"input":jr(r),ga(r,i,!0);break;case"textarea":jr(r),va(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=dl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Js(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Xe]=n,e[dr]=r,Ec(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ti(t,r),t){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Gt.length;l++)H(Gt[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":ha(e,r),l=wi(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=X({},r,{value:void 0}),H("invalid",e);break;case"textarea":ya(e,r),l=Ni(e,r),H("invalid",e);break;default:l=r}Pi(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?eu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zs(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(nr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&H("scroll",e):u!=null&&Co(e,i,u,o))}switch(t){case"input":jr(e),ga(e,r,!1);break;case"textarea":jr(e),va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ft(e,!!r.multiple,i,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=dl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return de(n),null;case 6:if(e&&n.stateNode!=null)kc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(E(166));if(t=Yn(pr.current),Yn(Ze.current),Ir(n)){if(r=n.stateNode,t=n.memoizedProps,r[Xe]=n,(i=r.nodeValue!==t)&&(e=Ne,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Xe]=n,n.stateNode=r}return de(n),null;case 13:if(W(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&_e!==null&&n.mode&1&&!(n.flags&128))Yu(),xt(),n.flags|=98560,i=!1;else if(i=Ir(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[Xe]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;de(n),i=!1}else $e!==null&&(co($e),$e=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?te===0&&(te=3):na())),n.updateQueue!==null&&(n.flags|=4),de(n),null);case 4:return St(),to(e,n),e===null&&ur(n.stateNode.containerInfo),de(n),null;case 10:return Oo(n.type._context),de(n),null;case 17:return Se(n.type)&&fl(),de(n),null;case 19:if(W(K),i=n.memoizedState,i===null)return de(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)It(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Cl(e),o!==null){for(n.flags|=128,It(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return U(K,K.current&1|2),n.child}e=e.sibling}i.tail!==null&&q()>wt&&(n.flags|=128,r=!0,It(i,!1),n.lanes=4194304)}else{if(!r)if(e=Cl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),It(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return de(n),null}else 2*q()-i.renderingStartTime>wt&&t!==1073741824&&(n.flags|=128,r=!0,It(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=q(),n.sibling=null,t=K.current,U(K,r?t&1|2:t&1),n):(de(n),null);case 22:case 23:return ea(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Fe&1073741824&&(de(n),n.subtreeFlags&6&&(n.flags|=8192)):de(n),null;case 24:return null;case 25:return null}throw Error(E(156,n.tag))}function lp(e,n){switch(Bo(n),n.tag){case 1:return Se(n.type)&&fl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return St(),W(Ee),W(pe),Go(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return $o(n),null;case 13:if(W(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(E(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(K),null;case 4:return St(),null;case 10:return Oo(n.type._context),null;case 22:case 23:return ea(),null;case 24:return null;default:return null}}var zr=!1,fe=!1,ip=typeof WeakSet=="function"?WeakSet:Set,N=null;function ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Z(e,n,r)}else t.current=null}function ro(e,n,t){try{t()}catch(r){Z(e,n,r)}}var as=!1;function op(e,n){if(zi=sl,e=ju(),bo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,c=0,h=0,g=e,y=null;n:for(;;){for(var v;g!==t||l!==0&&g.nodeType!==3||(s=o+l),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)y=g,g=v;for(;;){if(g===e)break n;if(y===t&&++c===l&&(s=o),y===i&&++h===r&&(u=o),(v=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=v}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yi={focusedElem:e,selectionRange:t},sl=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var C=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var S=C.memoizedProps,O=C.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?S:ze(n.type,S),O);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(x){Z(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return C=as,as=!1,C}function Xt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ro(n,t,i)}l=l.next}while(l!==r)}}function Il(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function lo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function wc(e){var n=e.alternate;n!==null&&(e.alternate=null,wc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Xe],delete n[dr],delete n[Ui],delete n[$f],delete n[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fc(e){return e.tag===5||e.tag===3||e.tag===4}function ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}function oo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,n,t),e=e.sibling;e!==null;)oo(e,n,t),e=e.sibling}var oe=null,Ye=!1;function pn(e,n,t){for(t=t.child;t!==null;)_c(e,n,t),t=t.sibling}function _c(e,n,t){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Pl,t)}catch{}switch(t.tag){case 5:fe||ct(t,n);case 6:var r=oe,l=Ye;oe=null,pn(e,n,t),oe=r,Ye=l,oe!==null&&(Ye?(e=oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):oe.removeChild(t.stateNode));break;case 18:oe!==null&&(Ye?(e=oe,t=t.stateNode,e.nodeType===8?ai(e.parentNode,t):e.nodeType===1&&ai(e,t),or(e)):ai(oe,t.stateNode));break;case 4:r=oe,l=Ye,oe=t.stateNode.containerInfo,Ye=!0,pn(e,n,t),oe=r,Ye=l;break;case 0:case 11:case 14:case 15:if(!fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ro(t,n,o),l=l.next}while(l!==r)}pn(e,n,t);break;case 1:if(!fe&&(ct(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Z(t,n,s)}pn(e,n,t);break;case 21:pn(e,n,t);break;case 22:t.mode&1?(fe=(r=fe)||t.memoizedState!==null,pn(e,n,t),fe=r):pn(e,n,t);break;default:pn(e,n,t)}}function us(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ip),n.forEach(function(r){var l=hp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Re(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ye=!1;break e;case 3:oe=s.stateNode.containerInfo,Ye=!0;break e;case 4:oe=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(oe===null)throw Error(E(160));_c(i,o,l),oe=null,Ye=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){Z(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Nc(n,e),n=n.sibling}function Nc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(n,e),Ke(e),r&4){try{Xt(3,e,e.return),Il(3,e)}catch(S){Z(e,e.return,S)}try{Xt(5,e,e.return)}catch(S){Z(e,e.return,S)}}break;case 1:Re(n,e),Ke(e),r&512&&t!==null&&ct(t,t.return);break;case 5:if(Re(n,e),Ke(e),r&512&&t!==null&&ct(t,t.return),e.flags&32){var l=e.stateNode;try{tr(l,"")}catch(S){Z(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qs(l,i),Ti(s,o);var c=Ti(s,i);for(o=0;o<u.length;o+=2){var h=u[o],g=u[o+1];h==="style"?eu(l,g):h==="dangerouslySetInnerHTML"?Zs(l,g):h==="children"?tr(l,g):Co(l,h,g,c)}switch(s){case"input":Fi(l,i);break;case"textarea":Xs(l,i);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?ft(l,!!i.multiple,v,!1):y!==!!i.multiple&&(i.defaultValue!=null?ft(l,!!i.multiple,i.defaultValue,!0):ft(l,!!i.multiple,i.multiple?[]:"",!1))}l[dr]=i}catch(S){Z(e,e.return,S)}}break;case 6:if(Re(n,e),Ke(e),r&4){if(e.stateNode===null)throw Error(E(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(S){Z(e,e.return,S)}}break;case 3:if(Re(n,e),Ke(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(S){Z(e,e.return,S)}break;case 4:Re(n,e),Ke(e);break;case 13:Re(n,e),Ke(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Zo=q())),r&4&&us(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(fe=(c=fe)||h,Re(n,e),fe=c):Re(n,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(g=N=h;N!==null;){switch(y=N,v=y.child,y.tag){case 0:case 11:case 14:case 15:Xt(4,y,y.return);break;case 1:ct(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,t=y.return;try{n=r,C.props=n.memoizedProps,C.state=n.memoizedState,C.componentWillUnmount()}catch(S){Z(r,t,S)}}break;case 5:ct(y,y.return);break;case 22:if(y.memoizedState!==null){ds(g);continue}}v!==null?(v.return=y,N=v):ds(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=qs("display",o))}catch(S){Z(e,e.return,S)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(S){Z(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(n,e),Ke(e),r&4&&us(e);break;case 21:break;default:Re(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fc(t)){var r=t;break e}t=t.return}throw Error(E(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(tr(l,""),r.flags&=-33);var i=ss(e);oo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=ss(e);io(e,s,o);break;default:throw Error(E(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ap(e,n,t){N=e,jc(e)}function jc(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var l=N,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||zr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||fe;s=zr;var c=fe;if(zr=o,(fe=u)&&!c)for(N=l;N!==null;)o=N,u=o.child,o.tag===22&&o.memoizedState!==null?fs(l):u!==null?(u.return=o,N=u):fs(l);for(;i!==null;)N=i,jc(i),i=i.sibling;N=l,zr=s,fe=c}cs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,N=i):cs(e)}}function cs(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:fe||Il(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!fe)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Ka(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ka(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&or(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}fe||n.flags&512&&lo(n)}catch(y){Z(n,n.return,y)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function ds(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function fs(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Il(4,n)}catch(u){Z(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){Z(n,l,u)}}var i=n.return;try{lo(n)}catch(u){Z(n,i,u)}break;case 5:var o=n.return;try{lo(n)}catch(u){Z(n,o,u)}}}catch(u){Z(n,n.return,u)}if(n===e){N=null;break}var s=n.sibling;if(s!==null){s.return=n.return,N=s;break}N=n.return}}var sp=Math.ceil,Sl=dn.ReactCurrentDispatcher,Xo=dn.ReactCurrentOwner,Be=dn.ReactCurrentBatchConfig,I=0,ie=null,ee=null,se=0,Fe=0,dt=bn(0),te=0,yr=null,Vn=0,Ol=0,Jo=0,Jt=null,Ce=null,Zo=0,wt=1/0,en=null,kl=!1,ao=null,_n=null,Yr=!1,xn=null,wl=0,Zt=0,so=null,el=-1,nl=0;function ge(){return I&6?q():el!==-1?el:el=q()}function Nn(e){return e.mode&1?I&2&&se!==0?se&-se:Hf.transition!==null?(nl===0&&(nl=fu()),nl):(e=z,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function He(e,n,t,r){if(50<Zt)throw Zt=0,so=null,Error(E(185));xr(e,t,r),(!(I&2)||e!==ie)&&(e===ie&&(!(I&2)&&(Ol|=t),te===4&&vn(e,se)),ke(e,r),t===1&&I===0&&!(n.mode&1)&&(wt=q()+500,Bl&&Dn()))}function ke(e,n){var t=e.callbackNode;Ud(e,n);var r=al(e,e===ie?se:0);if(r===0)t!==null&&Ea(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ea(t),n===1)e.tag===0?Uf(ps.bind(null,e)):Ou(ps.bind(null,e)),zf(function(){!(I&6)&&Dn()}),t=null;else{switch(pu(r)){case 1:t=wo;break;case 4:t=cu;break;case 16:t=ol;break;case 536870912:t=du;break;default:t=ol}t=Lc(t,Pc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Pc(e,n){if(el=-1,nl=0,I&6)throw Error(E(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var r=al(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Fl(e,r);else{n=r;var l=I;I|=2;var i=Ac();(ie!==e||se!==n)&&(en=null,wt=q()+500,$n(e,n));do try{dp();break}catch(s){Tc(e,s)}while(!0);Io(),Sl.current=i,I=l,ee!==null?n=0:(ie=null,se=0,n=te)}if(n!==0){if(n===2&&(l=Mi(e),l!==0&&(r=l,n=uo(e,l))),n===1)throw t=yr,$n(e,0),vn(e,r),ke(e,q()),t;if(n===6)vn(e,r);else{if(l=e.current.alternate,!(r&30)&&!up(l)&&(n=Fl(e,r),n===2&&(i=Mi(e),i!==0&&(r=i,n=uo(e,i))),n===1))throw t=yr,$n(e,0),vn(e,r),ke(e,q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(E(345));case 2:On(e,Ce,en);break;case 3:if(vn(e,r),(r&130023424)===r&&(n=Zo+500-q(),10<n)){if(al(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Gi(On.bind(null,e,Ce,en),n);break}On(e,Ce,en);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sp(r/1960))-r,10<r){e.timeoutHandle=Gi(On.bind(null,e,Ce,en),r);break}On(e,Ce,en);break;case 5:On(e,Ce,en);break;default:throw Error(E(329))}}}return ke(e,q()),e.callbackNode===t?Pc.bind(null,e):null}function uo(e,n){var t=Jt;return e.current.memoizedState.isDehydrated&&($n(e,n).flags|=256),e=Fl(e,n),e!==2&&(n=Ce,Ce=t,n!==null&&co(n)),e}function co(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function up(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!We(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vn(e,n){for(n&=~Jo,n&=~Ol,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),r=1<<t;e[t]=-1,n&=~r}}function ps(e){if(I&6)throw Error(E(327));yt();var n=al(e,0);if(!(n&1))return ke(e,q()),null;var t=Fl(e,n);if(e.tag!==0&&t===2){var r=Mi(e);r!==0&&(n=r,t=uo(e,r))}if(t===1)throw t=yr,$n(e,0),vn(e,n),ke(e,q()),t;if(t===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,Ce,en),ke(e,q()),null}function qo(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(wt=q()+500,Bl&&Dn())}}function Kn(e){xn!==null&&xn.tag===0&&!(I&6)&&yt();var n=I;I|=1;var t=Be.transition,r=z;try{if(Be.transition=null,z=1,e)return e()}finally{z=r,Be.transition=t,I=n,!(I&6)&&Dn()}}function ea(){Fe=dt.current,W(dt)}function $n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Rf(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(Bo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:St(),W(Ee),W(pe),Go();break;case 5:$o(r);break;case 4:St();break;case 13:W(K);break;case 19:W(K);break;case 10:Oo(r.type._context);break;case 22:case 23:ea()}t=t.return}if(ie=e,ee=e=jn(e.current,null),se=Fe=n,te=0,yr=null,Jo=Ol=Vn=0,Ce=Jt=null,zn!==null){for(n=0;n<zn.length;n++)if(t=zn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}zn=null}return e}function Tc(e,n){do{var t=ee;try{if(Io(),Jr.current=El,xl){for(var r=Q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}xl=!1}if(Wn=0,le=ne=Q=null,Qt=!1,mr=0,Xo.current=null,t===null||t.return===null){te=1,yr=n,ee=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=es(o);if(v!==null){v.flags&=-257,ns(v,o,s,i,n),v.mode&1&&qa(i,c,n),n=v,u=c;var C=n.updateQueue;if(C===null){var S=new Set;S.add(u),n.updateQueue=S}else C.add(u);break e}else{if(!(n&1)){qa(i,c,n),na();break e}u=Error(E(426))}}else if(V&&s.mode&1){var O=es(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),ns(O,o,s,i,n),Mo(kt(u,s));break e}}i=u=kt(u,s),te!==4&&(te=2),Jt===null?Jt=[i]:Jt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=pc(i,u,n);Va(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_n===null||!_n.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var x=mc(i,s,n);Va(i,x);break e}}i=i.return}while(i!==null)}Dc(t)}catch(F){n=F,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function Ac(){var e=Sl.current;return Sl.current=El,e===null?El:e}function na(){(te===0||te===3||te===2)&&(te=4),ie===null||!(Vn&268435455)&&!(Ol&268435455)||vn(ie,se)}function Fl(e,n){var t=I;I|=2;var r=Ac();(ie!==e||se!==n)&&(en=null,$n(e,n));do try{cp();break}catch(l){Tc(e,l)}while(!0);if(Io(),I=t,Sl.current=r,ee!==null)throw Error(E(261));return ie=null,se=0,te}function cp(){for(;ee!==null;)bc(ee)}function dp(){for(;ee!==null&&!Md();)bc(ee)}function bc(e){var n=Mc(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Dc(e):ee=n,Xo.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lp(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,ee=null;return}}else if(t=rp(t,n,Fe),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);te===0&&(te=5)}function On(e,n,t){var r=z,l=Be.transition;try{Be.transition=null,z=1,fp(e,n,t,r)}finally{Be.transition=l,z=r}return null}function fp(e,n,t,r){do yt();while(xn!==null);if(I&6)throw Error(E(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Hd(e,i),e===ie&&(ee=ie=null,se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yr||(Yr=!0,Lc(ol,function(){return yt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var o=z;z=1;var s=I;I|=4,Xo.current=null,op(e,t),Nc(t,e),bf(Yi),sl=!!zi,Yi=zi=null,e.current=t,ap(t),Ld(),I=s,z=o,Be.transition=i}else e.current=t;if(Yr&&(Yr=!1,xn=e,wl=l),i=e.pendingLanes,i===0&&(_n=null),Rd(t.stateNode),ke(e,q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(kl)throw kl=!1,e=ao,ao=null,e;return wl&1&&e.tag!==0&&yt(),i=e.pendingLanes,i&1?e===so?Zt++:(Zt=0,so=e):Zt=0,Dn(),null}function yt(){if(xn!==null){var e=pu(wl),n=Be.transition,t=z;try{if(Be.transition=null,z=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,wl=0,I&6)throw Error(E(331));var l=I;for(I|=4,N=e.current;N!==null;){var i=N,o=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Xt(8,h,i)}var g=h.child;if(g!==null)g.return=h,N=g;else for(;N!==null;){h=N;var y=h.sibling,v=h.return;if(wc(h),h===c){N=null;break}if(y!==null){y.return=v,N=y;break}N=v}}}var C=i.alternate;if(C!==null){var S=C.child;if(S!==null){C.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}N=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,N=o;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xt(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var d=e.current;for(N=d;N!==null;){o=N;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,N=p;else e:for(o=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Il(9,s)}}catch(F){Z(s,s.return,F)}if(s===o){N=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,N=x;break e}N=s.return}}if(I=l,Dn(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Pl,e)}catch{}r=!0}return r}finally{z=t,Be.transition=n}}return!1}function ms(e,n,t){n=kt(t,n),n=pc(e,n,1),e=Fn(e,n,1),n=ge(),e!==null&&(xr(e,1,n),ke(e,n))}function Z(e,n,t){if(e.tag===3)ms(e,e,t);else for(;n!==null;){if(n.tag===3){ms(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=kt(t,e),e=mc(n,e,1),n=Fn(n,e,1),e=ge(),n!==null&&(xr(n,1,e),ke(n,e));break}}n=n.return}}function pp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(se&t)===t&&(te===4||te===3&&(se&130023424)===se&&500>q()-Zo?$n(e,0):Jo|=t),ke(e,n)}function Bc(e,n){n===0&&(e.mode&1?(n=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):n=1);var t=ge();e=un(e,n),e!==null&&(xr(e,n,t),ke(e,t))}function mp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Bc(e,t)}function hp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(n),Bc(e,t)}var Mc;Mc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ee.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,tp(e,n,t);xe=!!(e.flags&131072)}else xe=!1,V&&n.flags&1048576&&Ru(n,hl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;qr(e,n),e=n.pendingProps;var l=Ct(n,pe.current);gt(n,t),l=Ho(null,n,r,e,l,t);var i=Wo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Se(r)?(i=!0,pl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zo(n),l.updater=Ll,n.stateNode=l,l._reactInternals=n,Xi(n,r,e,t),n=qi(null,n,r,!0,i,t)):(n.tag=0,V&&i&&Do(n),he(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(qr(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=yp(r),e=ze(r,e),l){case 0:n=Zi(null,n,r,e,t);break e;case 1:n=ls(null,n,r,e,t);break e;case 11:n=ts(null,n,r,e,t);break e;case 14:n=rs(null,n,r,ze(r.type,e),t);break e}throw Error(E(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),Zi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),ls(e,n,r,l,t);case 3:e:{if(vc(n),e===null)throw Error(E(387));r=n.pendingProps,i=n.memoizedState,l=i.element,Hu(e,n),vl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=kt(Error(E(423)),n),n=is(e,n,r,t,l);break e}else if(r!==l){l=kt(Error(E(424)),n),n=is(e,n,r,t,l);break e}else for(_e=wn(n.stateNode.containerInfo.firstChild),Ne=n,V=!0,$e=null,t=Gu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),r===l){n=cn(e,n,t);break e}he(e,n,r,t)}n=n.child}return n;case 5:return Wu(n),e===null&&Vi(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,$i(r,l)?o=null:i!==null&&$i(r,i)&&(n.flags|=32),yc(e,n),he(e,n,o,t),n.child;case 6:return e===null&&Vi(n),null;case 13:return Cc(e,n,t);case 4:return Yo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Et(n,null,r,t):he(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),ts(e,n,r,l,t);case 7:return he(e,n,n.pendingProps,t),n.child;case 8:return he(e,n,n.pendingProps.children,t),n.child;case 12:return he(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,U(gl,r._currentValue),r._currentValue=o,i!==null)if(We(i.value,o)){if(i.children===l.children&&!Ee.current){n=cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ln(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Ki(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(E(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ki(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}he(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,gt(n,t),l=Me(l),r=r(l),n.flags|=1,he(e,n,r,t),n.child;case 14:return r=n.type,l=ze(r,n.pendingProps),l=ze(r.type,l),rs(e,n,r,l,t);case 15:return hc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:ze(r,l),qr(e,n),n.tag=1,Se(r)?(e=!0,pl(n)):e=!1,gt(n,t),fc(n,r,l),Xi(n,r,l,t),qi(null,n,r,!0,e,t);case 19:return xc(e,n,t);case 22:return gc(e,n,t)}throw Error(E(156,n.tag))};function Lc(e,n){return uu(e,n)}function gp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,n,t,r){return new gp(e,n,t,r)}function ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yp(e){if(typeof e=="function")return ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eo)return 11;if(e===So)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=De(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function tl(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")ta(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nt:return Gn(t.children,l,i,n);case xo:o=8,l|=8;break;case xi:return e=De(12,t,n,l|2),e.elementType=xi,e.lanes=i,e;case Ei:return e=De(13,t,n,l),e.elementType=Ei,e.lanes=i,e;case Si:return e=De(19,t,n,l),e.elementType=Si,e.lanes=i,e;case Ws:return Rl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:o=10;break e;case Hs:o=9;break e;case Eo:o=11;break e;case So:o=14;break e;case hn:o=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return n=De(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Gn(e,n,t,r){return e=De(7,e,r,n),e.lanes=t,e}function Rl(e,n,t,r){return e=De(22,e,r,n),e.elementType=Ws,e.lanes=t,e.stateNode={isHidden:!1},e}function hi(e,n,t){return e=De(6,e,null,n),e.lanes=t,e}function gi(e,n,t){return n=De(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function vp(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ra(e,n,t,r,l,i,o,s,u){return e=new vp(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=De(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(i),e}function Cp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ic(e){if(!e)return Tn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(E(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Se(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(E(171))}if(e.tag===1){var t=e.type;if(Se(t))return Iu(e,t,n)}return n}function Oc(e,n,t,r,l,i,o,s,u){return e=ra(t,r,!0,e,l,i,o,s,u),e.context=Ic(null),t=e.current,r=ge(),l=Nn(t),i=ln(r,l),i.callback=n??null,Fn(t,i,l),e.current.lanes=l,xr(e,l,r),ke(e,r),e}function zl(e,n,t,r){var l=n.current,i=ge(),o=Nn(l);return t=Ic(t),n.context===null?n.context=t:n.pendingContext=t,n=ln(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Fn(l,n,o),e!==null&&(He(e,l,o,i),Xr(e,l,o)),o}function _l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hs(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function la(e,n){hs(e,n),(e=e.alternate)&&hs(e,n)}function xp(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Yl.prototype.render=ia.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(E(409));zl(e,n,null,null)};Yl.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){zl(null,e,null,null)}),n[sn]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=gu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yn.length&&n!==0&&n<yn[t].priority;t++);yn.splice(t,0,e),t===0&&vu(e)}};function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gs(){}function Ep(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=_l(o);i.call(c)}}var o=Oc(n,r,e,0,null,!1,!1,"",gs);return e._reactRootContainer=o,e[sn]=o.current,ur(e.nodeType===8?e.parentNode:e),Kn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=_l(u);s.call(c)}}var u=ra(e,0,!1,null,null,!1,!1,"",gs);return e._reactRootContainer=u,e[sn]=u.current,ur(e.nodeType===8?e.parentNode:e),Kn(function(){zl(n,u,t,r)}),u}function Gl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=_l(o);s.call(u)}}zl(n,o,e,l)}else o=Ep(t,n,e,l,r);return _l(o)}mu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(Fo(n,t|1),ke(n,q()),!(I&6)&&(wt=q()+500,Dn()))}break;case 13:Kn(function(){var r=un(e,1);if(r!==null){var l=ge();He(r,e,1,l)}}),la(e,1)}};_o=function(e){if(e.tag===13){var n=un(e,134217728);if(n!==null){var t=ge();He(n,e,134217728,t)}la(e,134217728)}};hu=function(e){if(e.tag===13){var n=Nn(e),t=un(e,n);if(t!==null){var r=ge();He(t,e,n,r)}la(e,n)}};gu=function(){return z};yu=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};bi=function(e,n,t){switch(n){case"input":if(Fi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Dl(r);if(!l)throw Error(E(90));Ks(r),Fi(r,l)}}}break;case"textarea":Xs(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};ru=qo;lu=Kn;var Sp={usingClientEntryPoint:!1,Events:[Sr,it,Dl,nu,tu,qo]},Ot={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{Pl=$r.inject(kp),Je=$r}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;Pe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oa(n))throw Error(E(200));return Cp(e,n,null,t)};Pe.createRoot=function(e,n){if(!oa(e))throw Error(E(299));var t=!1,r="",l=Rc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ra(e,1,!1,null,null,t,!1,r,l),e[sn]=n.current,ur(e.nodeType===8?e.parentNode:e),new ia(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=au(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Kn(e)};Pe.hydrate=function(e,n,t){if(!$l(n))throw Error(E(200));return Gl(null,e,n,!0,t)};Pe.hydrateRoot=function(e,n,t){if(!oa(e))throw Error(E(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=Rc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Oc(n,null,e,1,t??null,l,!1,i,o),e[sn]=n.current,ur(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Yl(n)};Pe.render=function(e,n,t){if(!$l(n))throw Error(E(200));return Gl(null,e,n,!1,t)};Pe.unmountComponentAtNode=function(e){if(!$l(e))throw Error(E(40));return e._reactRootContainer?(Kn(function(){Gl(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};Pe.unstable_batchedUpdates=qo;Pe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!$l(t))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Gl(e,n,t,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zs.exports=Pe;var wp=zs.exports,ys=wp;vi.createRoot=ys.createRoot,vi.hydrateRoot=ys.hydrateRoot;function T({name:e,filled:n=!1,size:t=20,className:r}){return a.jsx("span",{className:`material-symbols-outlined${r?` ${r}`:""}`,style:{fontSize:t,fontVariationSettings:`'FILL' ${n?1:0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`},"aria-hidden":"true",children:e})}function Fp({onHelp:e,onOpenFavorites:n,favoritesCount:t,onOpenBrand:r,brandActive:l,onOpenConvert:i}){return a.jsxs("header",{className:"su-header",children:[a.jsx("div",{className:"su-header__brand",children:a.jsx("img",{src:"/logo.png",className:"su-header__logo",alt:"SLIDE UNIVERSE",width:"271",height:"38",decoding:"async",fetchPriority:"high"})}),a.jsxs("div",{className:"su-header__actions",children:[a.jsxs("button",{type:"button",className:"su-btn su-btn--ghost",onClick:i,title:"AIで作った1枚画像のスライドを、編集できるパワポ(.pptx)に変換するプロンプトを発行",children:[a.jsx(T,{name:"transform",size:18}),"PPTX変換"]}),a.jsxs("button",{type:"button",className:"su-btn su-btn--ghost",onClick:n,children:[a.jsx(T,{name:"star",size:18,filled:t>0}),"お気に入り",t>0?`（${t}）`:""]}),a.jsxs("button",{type:"button",className:"su-btn su-btn--ghost",onClick:e,children:[a.jsx(T,{name:"help",size:18}),"使い方"]})]})]})}const _p=[{q:"どのAIを使えばいい？",a:"ChatGPT（GPT-4o以上・ファイルを添付して受け取れる有料相当）か Claude を使ってください。「ファイルを作って返してくれる」タイプが必要です。文章を書くだけのAIではできません。"},{q:"無料版でもできる？",a:"裏でコードを動かして .pptx を作るため、基本は有料版が確実です。無料枠だとファイル生成（コード実行）が使えないことがあります。"},{q:"ファイル（画像/PDF）はどう渡すの？",a:"AIの入力欄にあるクリップ📎ボタン、またはドラッグ＆ドロップで添付するだけ。プロンプトはコピーして同じメッセージに貼り、一緒に送信します。"},{q:"文字が画像のままで編集できない",a:"「文字の画像化は禁止。全テキストを編集可能に」と一言追記して、もう一度生成し直してください。変換失敗の一番多い原因です。"},{q:"点線・破線の枠がガタつく／角が潰れる",a:"まずスライドアプリで開いて確認を。プレビュー画像（PNG）だと崩れて見えることがありますが、実体は正しいことが多いです。直らなければ「破線はprstDashで指定、点を並べるのは禁止」と追記。"},{q:"写真や複雑なイラストはどうなる？",a:"図形に分解できないため、そのままでは再現されません。変換モーダルの「写真は差し替え用の枠で残す」をONにすると、位置とサイズだけ残した差し替え枠になり、後から画像を入れられます。"},{q:"日本語と英数字の間に変な隙間が出る",a:"「日本語フォントはeastAsiaとlatinの両方に同じ指定」と追記してください（このツールの既定プロンプトには入っていますが、崩れたら再度伝えると確実です）。"},{q:"PowerPointが無くても開ける？",a:"開けます。.pptx は共通フォーマットなので、Mac標準の Keynote、無料の Googleスライド、LibreOffice のいずれでも開いて編集できます。PowerPointは必須ではありません。"},{q:"編集できるか、どう確認する？",a:"スライドアプリで開いたら、全選択（Windowsは Ctrl+A、Macは ⌘+A）してみてください。文字も図形も1つずつ選択枠が付けば成功。画像ではなく「触れる部品の集合」になっています。"}];function Np(){return a.jsxs("div",{className:"su-page",children:[a.jsxs("header",{className:"su-page__head",children:[a.jsxs("a",{className:"su-btn su-btn--ghost",href:"#/",children:[a.jsx(T,{name:"arrow_back",size:18}),"戻る"]}),a.jsx("img",{src:"/logo.png",className:"su-page__logo",alt:"SLIDE UNIVERSE",width:"271",height:"38",decoding:"async"})]}),a.jsxs("main",{className:"su-page__body",children:[a.jsx("h1",{className:"su-page__title",children:"PPTX変換 — よくある質問"}),a.jsx("p",{className:"su-page__lead",children:"AIで作った「1枚画像」のスライドを、編集できるパワポ（.pptx）に変換するときの疑問とつまずきをまとめました。"}),a.jsx("div",{className:"su-faq",children:_p.map((e,n)=>a.jsxs("details",{className:"su-faq__item",children:[a.jsxs("summary",{className:"su-faq__q",children:[a.jsx(T,{name:"expand_more",size:20,className:"su-faq__caret"}),e.q]}),a.jsx("p",{className:"su-faq__a",children:e.a})]},n))}),a.jsxs("a",{className:"su-btn su-btn--primary su-faq__back",href:"#/",children:[a.jsx(T,{name:"arrow_back",size:18}),"変換ツールに戻る"]})]})]})}const Yc=[{id:"sales",label:"営業・提案資料",role:"プレゼンテーションデザイナー兼セールスストーリーテラー",storyArc:"違和感 → 損失の自覚 → 解決構造 → 証拠 → 問い合わせ"},{id:"service",label:"サービス・商品紹介",role:"プロダクトマーケター兼インフォグラフィックデザイナー",storyArc:"注意 → 課題の共感 → 価値の理解 → 使う未来 → 行動"},{id:"seminar",label:"セミナー・教育",role:"編集者兼インストラクショナルデザイナー",storyArc:"不安 → 誤解の解除 → 構造理解 → 小さな実践 → 申込"},{id:"brand",label:"ブランド・カルチャー資料",role:"アートディレクター兼ブランドストーリーテラー",storyArc:"世界観 → 問題意識 → 独自視点 → 未来像 → 余韻"},{id:"internal",label:"社内提案・報告",role:"ビジネスエディター兼インフォグラフィックデザイナー",storyArc:"現状認識 → 論点 → 構造的分析 → 結論 → 意思決定"},{id:"recruit",label:"採用・会社紹介",role:"カルチャーエディター兼ストーリーテラー",storyArc:"共感 → 課題 → 私たちの視点 → 働く未来 → 応募"},{id:"investor",label:"投資家・経営向け",role:"コーポレートストラテジスト兼データストーリーテラー",storyArc:"市場の変化 → 機会 → 戦略 → 根拠データ → 合意"},{id:"other",label:"その他",role:"プレゼンテーションデザイナー兼編集者",storyArc:"注意 → 共感 → 理解 → 行動"}],Bn=[{id:"contact",label:"問い合わせ・相談したくなる"},{id:"apply",label:"申し込み・購入したくなる"},{id:"agree",label:"社内で合意・承認される"},{id:"understand",label:"深く理解・納得する"},{id:"remember",label:"興味を持ち、記憶に残る"},{id:"act",label:"具体的な次の一歩を踏み出す"}],Pt=[{id:"trust",label:"信頼感・誠実"},{id:"innovative",label:"革新・先進"},{id:"warm",label:"温かさ・親しみ"},{id:"luxury",label:"高級感・洗練"},{id:"bold",label:"大胆・インパクト"},{id:"minimal",label:"静か・ミニマル"},{id:"energetic",label:"エネルギッシュ"},{id:"intellectual",label:"知的・構造的"}],aa=[{id:"summary",label:"要約プロンプト",hint:"足場を圧縮した短縮版。NotebookLMの入力欄など文字数制限のある場所に貼りたい時に（世界観の指定はフルで保持）。"},{id:"standard",label:"標準",hint:"各スライドの見出し・要点・ビジュアル方針までバランスよく。"},{id:"production",label:"制作指示レベル",hint:"コピー・ビジュアル・レイアウト・配色まで詳細に指示する。"}];function Jn(e){return Yc.find(n=>n.id===e)}function Ie(e,n){var t;return(t=e.find(r=>r.id===n))==null?void 0:t.label}const mn={"business-standard":`【世界観・ビジュアルOS（日本市場向けモノクロ写真ベース）】
トーン
ミニマルで知的、清潔感があり、落ち着いた印象。
日本の法人営業・サービス紹介資料らしい「誠実さ」「安心感」をベースにしつつ、
厳密なグリッドと余白設計でさりげない先進性を出す。
感情を煽りすぎず、「整理されて頭がクリアになる」方向のデザインとする。
岡本一宣のエディトリアルデザインのように、
余白の比率・文字ブロックの位置・行間まで意識してレイアウトする。

写真の方針
ビジネスシーンの人物写真を中心に用いる。
市場は日本であるため、特に理由がない限り人物は日本人とする。
彩度を少しだけ落とした、ハイブランド雑誌のような落ち着いたカラー写真を使う。
背景は明るく、情報量の少ないクリーンなオフィス・会議室・ワークスペース。
表情は、にこやかすぎない控えめな笑顔〜真面目顔を中心にし、信頼感と品の良さを優先する。
写真は
・横幅いっぱいに大きく見せる「見せるスライド」
・小さく添えてテキストを主役にする「読ませるスライド」
を交互に配置し、視覚的な抑揚を作る。

【カラーパレット】
背景：白(#FFFFFF) またはごく薄いグレー(#F5F5F5)
テキスト：スミ〜黒(#111111)
ボックス／表／線：ライトグレー〜ダークグレー
アクセントカラー：原則として使用しない。
どうしても必要な場合のみ、ごく控えめに1色だけを最小限の面積で使うが、
プロンプト上では色名・カラーコードを積極的に指定しない。
1スライドあたりは「モノトーン中心」で設計し、
色で飾るのではなく、余白とグリッド、文字サイズの差でメリハリを出す。

【タイポグラフィ】
見出し
極太ゴシック系日本語フォント（例：ヒラギノ角ゴ W7〜W8、Noto Sans JP Black）を想定。
各スライドで、最も大きい要素は必ず見出しテキスト。
見出しサイズは本文の少なくとも10〜15倍。縦方向でスライドの約3分の1以上を占める。
途中のブロック見出しも、本文とのジャンプ率をはっきりつけ、
「少し大きいだけ」の中途半端なサイズにならないようにする。
英語を併記する場合は、同じ見出しブロック内で十分読めるサイズとし、
端に小さく置く飾り英語にはしない。

本文
可読性の高いゴシック体。
1ブロック30〜40文字×最大2行を基本とし、3行を超える説明はスライドを分割する。
本文の文字サイズは見出しの20％以下に抑え、視線が必ず見出しから入るようにする。
段落間の余白・行間もグリッドに合わせ、エディトリアルデザインとしての読みやすさを優先する。

強調
重要な数字やキーワードは、
背景とのコントラスト（黒地に白文字／白地に太黒文字）で1〜2箇所だけ強調する。
多色の蛍光色や過剰な装飾は禁止し、
線の太さ・文字サイズ・余白の差で強弱をつける。

【コピー設計（日本語の言い切り＋英語タグ）】
キーポイント見出しは、日本語の強い言い切りを主役とし、
必要に応じて1〜4語の英語を同じブロック内で添える。
英語は説明ではなくタグ／断言として使う（例：Wrong Game / One Move / Choose One など）。
日本語は、自分ごと化できる痛み・境界線・矛盾・罠・到達点を命名する。
例のフレーズはそのまま引用せず、毎回テーマとゴールに合わせて新規生成する。

【レイアウトTYPE：日本市場向けビジネス・モノクロスタイル】
すべてのスライドで、列グリッドとベースライングリッドを強く意識し、
テキスト・写真・図形の端をグリッドに揃える。
各スライドは必ず次のいずれか1種類に分類し、
同じTYPEを3枚以上連続させない。

TYPE A：インパクト（文字だけ）
用途：最重要メッセージ／強い結論／問いかけ／セクション転換。
構成：
画像なし。背景＋巨大見出し＋必要ならごく短いリード1行。
色は白背景＋黒文字、または濃いグレー背景＋白文字のみ。
文字ブロックはスライドの約40％を占めるサイズで、
残り約60％を意図的な余白として残す。
中央に小さく置かず、左または右に寄せ、
グリッドに沿って天地左右の余白バランスを整える。

TYPE B：ビジュアル（人物写真＋テキスト）
用途：サービス利用シーン／信頼感／導入後のイメージ／事例の一場面。
構成：
日本人のビジネスパーソンを撮影した、
彩度低めで落ち着いたハイブランド雑誌風のカラー写真を大きく配置する。
・写真フル幅＋テキストを写真上の余白に重ねるパターン
・写真を片側1/2〜2/3幅に配置し、反対側を見出し＋本文のテキスト面にするパターン
のいずれかに統一する。
見出しは写真とテキストの境界付近に大きく置き、
本文は必要最低限の説明だけを2行以内で添える。
写真・テキストともグリッドに沿って揃え、
余白を広く取りすぎず、詰めすぎず、紙面の呼吸を保つ。

TYPE C：ロジック（表・図解）
用途：比較／フェーズ／フロー／サービス構造／料金。
構成：
長文説明は禁止。表、2×2マトリクス、タイムライン、ステップ図など、
直線と四角形をベースにしたフラットな図解で見せる。
線やボックスは黒〜グレーのみを基本とし、
必要な箇所だけ線の太さや塗りの濃淡で強調する（色には頼らない）。
要素数は、主要要素5つまで、比較3点まで、ステップ3〜4段まで。
それ以上はスライドを分割する。
図解全体をグリッドに沿って配置し、
岡本一宣のエディトリアルデザインのように、
余白の美しさと情報の整理を最優先する。

【表紙スライドの特別指定】
表紙はシリーズ中で最もインパクトが強いスライドとする。
大きな人物写真を使うかどうかは自由とするが、
岡本一宣的なエディトリアル感を最優先し、
グリッドと余白で完成度の高いレイアウトにする。

レイアウト
スイス・スタイルのグリッドベースで構成し、
中央揃えは避けて、片側に寄せた非対称レイアウトにする。
見出しは本文の少なくとも15倍のサイズ、横幅70％以上を占める大きさで配置し、
余白とのコントラストで「最初の1枚で視線と意識を奪う」ことを最優先にする。
色は基本モノクロ。必要ならごく控えめな1色だけを、ごく小さなアクセントとして使う。

コピー
メインコピー：
抽象名詞1語だけのタイトルは禁止。
視聴者のペイン・矛盾・境界線を1文で言い切るキャッチコピーにする。
サブコピー：
この資料を読むと何が変わるかを1文で約束し、
【入力変数：ゴール】に自然につながる内容にする。
近くに短い英語タグを添えてもよいが、飾り程度の極小にはしない。`,"swiss-bauhaus":`1) デザインスタイル（Swiss Bauhaus Modernist Grid）
────────────────────────
【Composition】
・厳密なグリッド設計。方眼紙のような薄いグリッド背景を許可（薄いグレーの細線）。
・非対称配置で緊張感を作る。左揃え基調、情報は箱に収める。
・外周に細いフレーム罫線を基本として使う。紙面レイアウト感を固定。

【Visual System】
・3D表現や等角投影は禁止。フラットな2Dの幾何学と写真で構成。
・写真はモノクロまたは低彩度。高コントラストで建築的トリミング。
・図は最小限の線と面で描く。装飾アイコンは使わず、規格化された図形で統一。
・図面や間取り風の線画、チャート、表、分類カードを積極採用。

【Color】
・厳密に「1アクセント色＋黒白＋グレー」だけ。
・Background: #FFFFFF or #F5F5F5
・Primary: Rich Black / Dark Grey
・Accent: Swiss Red（鮮やかな赤）に固定
・Grids/Rules: 薄いグレー
・陰影やグラデは禁止。色面はフラットに。

【Editorial Layout】
・フルブリードでも可。ただし情報はグリッドに従い、余白で呼吸を作る。
・写真や図は必ずフレームに入れて部品化。
・注目点は赤で一点突破。赤いドット、赤い数値ラベル、赤いガイド線のいずれかに限定。
・ページ番号を入れるなら左上の赤い小さなスクエア内に1桁〜2桁で配置。下端は禁止。

【Typography】
・タイトルはロゴ級。太いサンセリフ。ジャンプ率は極端に。
・英字タグは大文字で短く。飾りの極小英語は置かない。
・本文は可読性優先。左揃え、行数少なく、情報密度は箱と余白で制御。
・書体イメージは中立なゴシック。過度に丸い書体や筆文字は禁止。

【禁止】
・画像に文字を焼き込まない（テキスト要素で配置）。
・四隅/端に「小さすぎる英語ラベル」だけを飾りで置かない。
・最下部（ページ下端）は完全に空白。ロゴ、クレジット、注釈、ページ番号、極小文字を置かない。
・Markdown記号（# * **）を入れない。
・3D、等角投影、過剰なアイコン装飾、影、グラデ、質感盛りは禁止。

────────────────────────
2) スライドTYPE（必ず混ぜる）
────────────────────────
TYPE A: Typography Impact
・白/薄灰背景。巨大見出し＋リード1行まで。写真なしでも勝つ。
・余白は大きく（空気を設計）。最下部は空白。
・アクセント赤は1か所だけ。

TYPE B: Hero Photo + Grid Editorial
・モノクロのヒーロー写真を1枚大きく配置（建築的トリミング）。
・周囲に情報カードを2〜4個。フレーム罫線で部品化。
・01-03の番号と細い接続線で写真や図の注目点を指す（線幅統一）。
・赤は番号ドットか重要数値のどちらかに限定。最下部は空白。

TYPE C: Logic / Data Modernist
・比較、因果、手順、分類をチャートか表で見せる。
・バーは黒、強調値だけ赤。軸や装飾は最小限。
・ステップ最大3〜5、主要要素最大5〜7。超えるなら分割。
・必要なら「レンジ帯」や「平均帯」を使って結論を固定。
・最下部は空白。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定（ここだけ強化）
────────────────────────
目的
・表紙は「文字だけで寂しい」を禁止。TYPE Aを基礎に、写真と幾何学で世界観を立ち上げる。
・主役はタイポ。写真と図形は視線誘導と緊張感だけを担う（情報量を増やさない）。

構図
・方眼グリッド背景＋非対称レイアウト。
・左側に巨大見出しブロック。右側にモノクロ写真を大胆にトリミング。
・黒の太い斜め帯を1本まで使用可。アクセント赤の大きな三角形または矩形を1つまで使用可。
・ページ番号を入れるなら左上の赤いスクエアのみ。下端は禁止。

テキスト設計（表紙）
・Main Headline（日本語）を1つだけ。強い言い切り/矛盾/境界線/罠の命名。
・Subcopy（日本語）を1行だけ。読むと何が変わるかを約束し、{Goal}へ接続。
・Optional English Tag（1〜4語）は入れてもいいが、見出し塊の一部として読めるサイズで。飾りの極小は禁止。
・最下部は必ず完全に空白。

配色（表紙）
・背景は白 or #F5F5F5。
・色は「赤＋黒白＋グレー」厳守。
・赤は1か所だけ強く使う。散らさない。`,"mono-edge":`1) デザインスタイル（Monochrome Cutout Collage + Editorial Infographic）
────────────────────────
【Core Concept】
・図解の主役は「モノクロの切り抜きコラージュ写真」。
・人物/手/顔のパーツ/目元/口元/全身など“部分使い”を許可し、編集のリズムを作る。
・写真は高級ビジネス誌の落ち着いた空気（低彩度・硬すぎないコントラスト・上品）。
・コラージュは紙の切り抜き感（硬いエッジ、わずかな影、レイヤーの段差）で成立させる。フラット合成は禁止。
・情報は「写真×幾何学×余白×タイポ」で語る。説明文を増やさない。

【Photo / Collage Rules】
・人物は原則 日本人（特に理由がない限り固定）。
・背景はシンプルなオフィス/会議/PC作業/資料を見る手元など。生活感の雑多さは禁止。
・切り抜きは必ず行う（矩形貼り付け禁止）。輪郭は整える。髪や指が崩れる切り抜きは禁止。
・部分写真の例
  顔だけ（目線/表情の温度）
  手だけ（押す/選ぶ/置く/貼る）
  上半身（うなずく/考える）
  足元（進む/止まるの比喩）
・笑いのフック（1スライド1箇所）
  例: ありえない大きさの付箋、巨大クリップを必死に運ぶ手、顕微鏡で「当たり前」を覗く顔、会議室に“警告”だけ貼られたテープ
  ただしギャグが主役にならない。メッセージ理解の補助のみ。

【Lighting / Texture】
・硬い影、劇的照明、強い粒状ノイズは禁止。
・切り抜き影は極薄で一定。影でドラマを作らない。
・紙/マットな質感のコラージュ感はOK。ただしヴィンテージ加工、汚し、傷、フィルム風は禁止。

【Color】
・基本はモノクロ＋グレースケールのみ（色を増やさない）。
・どうしても必要な場合のみ、アクセント1色を極小面積で許可（デフォルト: Neon Yellow）。ただし乱用禁止。
・アクセントは「視線を止める一点」だけ。装飾目的で使わない。

【Editorial Layout】
・フルブリード。グリッドと余白で編集感（岡本一宣的に“余白の設計”を最優先）。
・中央に主役要素（巨大タイポ or 主役コラージュ構造）を1つ。
・周囲に小さなコラージュ素材や図形を点在させ、視線誘導を作る。
・01,02,03…の番号＋細い接続線で部位を指す（線幅統一、過剰装飾なし）。
・最下部（ページ下端）は完全に空白。ロゴ、クレジット、注釈、ページ番号、極小文字を置かない。

【Typography】
・タイトルはロゴ級。太く幾何学的なサンセリフ。ジャンプ率を極端に。
・見出し > リード > 補足 の差を強く。中途半端禁止。
・英語タグは1〜4語まで。見出し塊の一部として“読めるサイズ”で。

【禁止】
・画像に文字を焼き込まない（テキスト要素で配置）。
・四隅/端に「小さすぎる英語ラベル」だけを飾りで置かない。
・青っぽいイラスト化、線画化、アイコン化、3Dレンダ風、ミニチュアフィギュア化は禁止（写真コラージュ固定）。
・生活感のある雑多な机、ケーブル、紙の散乱は禁止。
・過度なボケ、粒状ノイズ、フィルム傷、ヴィンテージ加工は禁止。
・Markdown記号（# * **）を入れない。

────────────────────────
2) スライドTYPE（必ず混ぜる）
────────────────────────
TYPE A: Typography Impact
・白/薄灰背景。巨大見出し＋リード1行まで。
・余白は大きく（目安: 60%）。最下部は空白。
・コラージュは入れても極小（0〜1点）で“点”として使う。主役はタイポ。

TYPE B: Main Collage Scene
・主役のモノクロ切り抜き写真（人物/手/顔の一部可）＋グリッド構成。
・見出しは写真と余白の境界に大きく置く。本文は最小。
・01-03コールアウトで「どこを見ればいいか」を指す（線は細く統一）。

TYPE C: Logic / Process
・手順/比較/因果/構造を、グリッド上の“写真パーツ＋四角形＋線”で見せる。
・ステップ最大3〜5、主要要素最大5〜7。超えるなら分割。
・図形は直線と矩形が基本。曲線や装飾は最小。
・最下部は空白。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定（ここだけ強化）
────────────────────────
目的
・表紙は文字だけで寂しいを禁止。TYPE A基礎＋装飾モチーフのモノクロ切り抜き人物パーツを必ず入れる。
・主役はタイポ。写真は飾りで、視線誘導と世界観の立ち上げのみ（情報量を増やさない）。

構図
・黄金比を意識したグリッド（大きな余白＋強い非対称）。
・見出しは画面の支配者。左上〜中央寄せの大塊で、余白に食い込むように置く。
・コラージュ人物は 2〜4点（顔/手/上半身など混在OK）。余白の中に“点”として配置。
・人物の向き/目線/手の指差しで「視線が見出しへ戻る」ように設計。
・人物以外の大きな構造物は置かない。置くとしても極小の図形1つまで。

人物の描画ルール
・モノクロ切り抜き写真。日本人。都会的ミニマル服。柄・ロゴ禁止。
・切り抜きの縁は綺麗に。髪や指の破綻禁止。
・紙の切り抜き感の薄い影を必ず付け、レイヤー感を出す。

テキスト設計（表紙）
・Main Headline（日本語）を1つだけ。強い言い切り/矛盾/境界線/罠の命名。
・Subcopy（日本語）を1行だけ。読むと何が変わるかを約束し、{Goal}へ接続。
・Optional English Tag（1〜4語）は入れてもいいが、見出し塊の一部として読めるサイズで。飾りの極小は禁止。
・最下部は必ず完全に空白。

配色（表紙）
・背景は白 or #F5F5F5。
・モノクロ固定。アクセント色は原則使わない。使うなら見出しの1箇所だけ、極小面積。`,"iso-blue-orange":`1) デザインスタイル（Stylish Isometric Infographic）
────────────────────────
【Perspective】
・等角投影（isometric）。2Dアイコン禁止。全要素に厚みと奥行き。
・オブジェクトは建築模型/クリーンなプラモデル/ミニチュア世界の質感。
・線は均一でシャープなベクター線。線幅は統一。ラフ/手描き/筆致は禁止。

【Characters】
・毎回 1〜3人の「City Boy」等角人物を入れる。
・原則 日本人。都会的でミニマルな服装（フーディー、キャップ、眼鏡、コート等）。
・図解に干渉する動きが必須（運ぶ、選ぶ、押す、歩く、組み立てる）。

【Color】
・厳密に「3色＋黒白」だけ（色を増やさない）。
・Background: #FFFFFF or #F5F5F5（ベージュ/茶/くすみ禁止）
・Primary: Electric Blue（知的で鮮やか）
・Accent: Vibrant Orange か Neon Yellow のどちらか1つに固定
・Text/Detail: Rich Black / Dark Grey
・陰影は同一色の明度差のみ。新しい色相を足さない。

【Editorial Layout】
・フルブリード。グリッドと余白で編集感。
・中央に「主役の等角構造」を1つ大きく配置。
・周囲に小さな浮遊島/コールアウトを置く。
・01,02,03…の番号＋細い接続線で部位を指す（線幅統一）。

【Typography】
・タイトルはロゴ級。太く幾何学的なサンセリフ。ジャンプ率を極端に。
・見出し > リード > 補足 の差を強く。中途半端禁止。

【禁止】
・画像に文字を焼き込まない（テキスト要素で配置）。
・四隅/端に「小さすぎる英語ラベル」だけを飾りで置かない。
・最下部（ページ下端）は完全に空白。ロゴ、クレジット、注釈、ページ番号、極小文字を置かない。
・Markdown記号（# * **）を入れない。

────────────────────────
2) スライドTYPE（必ず混ぜる）
────────────────────────
TYPE A: Typography Impact
・白/薄灰背景。巨大見出し＋リード1行まで。図解なしでも勝つ。
・余白は大きく（空気を設計）。最下部は空白。

TYPE B: Main Isometric World
・中央の主役等角構造＋人物＋01-03コールアウト。
・テキストは最小限。図で理解させる。最下部は空白。

TYPE C: Logic / Process Isometric
・手順/比較/因果/構造を等角の“立体関係”で見せる。
・ステップ最大3〜5、主要要素最大5〜7。超えるなら分割。
・最下部は空白。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定（ここだけ強化）
────────────────────────
目的
・表紙は「文字だけで寂しい」を禁止。タイプはTYPE Aを基礎にしつつ、装飾モチーフとして“極小の等角人物”を必ず入れる。
・主役はタイポ。人物は飾りで、視線誘導と世界観の立ち上げだけを担う（情報量を増やさない）。

構図
・黄金比を意識したグリッド（大きな余白＋強い非対称）。
・見出しは画面の支配者。左上〜中央寄せの大塊で、余白に食い込むように置く。
・小さな等角人物は 2〜4体。見出しの周辺か、余白の中に“点”として配置。
・人物の動きは「視線が見出しへ戻る」ように設計（見出しを見上げる、近づく、指差す、運ぶ等）。
・人物以外の大きな構造物は置かない（表紙が図解っぽくなるのを防ぐ）。置くとしても極小の立体ブロック1つまで。

人物の描画ルール
・等角投影で立体。線幅統一。2D化禁止。
・日本人のCity Boy。ミニマル服。顔は簡略（点目など）。
・人物は「装飾モチーフ」なので、サイズは小さく、数も絞る。視線を奪いすぎない。

テキスト設計（表紙）
・Main Headline（日本語）を1つだけ。強い言い切り/矛盾/境界線/罠の命名。
・Subcopy（日本語）を1行だけ。読むと何が変わるかを約束し、{Goal}へ接続。
・Optional English Tag（1〜4語）は入れてもいいが、見出し塊の一部として読めるサイズで。飾りの極小は禁止。
・最下部は必ず完全に空白。

配色（表紙）
・背景は白 or #F5F5F5。
・色は「3色＋黒白」厳守。アクセントは見出しの1箇所か人物の小物の1点だけ。
・表紙で色を散らさない。タイポのコントラストで勝つ。`,"iso-color":`【世界観・ビジュアルOS（参照画像アイソメ準拠：主線なし・カラー版）】
トーン
ミニマルで知的。だけど無彩色ではない。テック編集の空気感を、濃色ベース＋限定した鮮やかな発光色で作る。
余白とコントラストで信頼を作り、写真の情緒ではなく、整った幾何学と光で理解の気持ちよさを作る。

比喩メタファー選択（内部で必ず実行）
【入力変数：テーマ】から、最も直感的で自分ごと化しやすい比喩を1つだけ選ぶ。
候補：都市／交通（路線・乗り換え）／料理（レシピ・仕込み）／登山（ルート・装備）／工場（ライン・工程）／図書館（索引・棚）／ゲーム（クエスト・UI）
以後の図解・イラストは、その比喩に統一（世界観のブレ禁止）。

視点・質感・アイソメ描画スタイル（最重要）
図解・場面表現は原則アイソメトリック（等角投影、正投影3/4、約30°）。パースは禁止。
主線なし。アウトライン線、輪郭線、黒線、ストローク表現は使わない。
境界は「面の色差」「陰影」「エッジのハイライト」で表現する。
ベクター調のクリーンさ。形状はシンプルな幾何学に統制し、情報量が多くても散らからない構造にする。
陰影は滑らかなグラデーションを最小限に許可（立体と光源の気配を作るため）。ただし写実的質感、写真っぽい反射、粒子感、ノイズは禁止。
影は柔らかい落ち影のみ。床への接地影は薄く、ぼかして軽く。硬い影やリアル演算は禁止。
スクリーンや重要箇所は、強めの明度差と発光感で視線誘導する（発光は色数を増やさず明度差中心）。
背景は白または非常に薄いグレーの無地。グリッド全面敷きは禁止。必要なら、ごく局所的に極薄ドット程度。
アイソメ図解には必ず人間（視聴者の代理）を1〜3人入れる。見ている／迷っている／選んでいる等、行動が分かるポーズ。
写真は原則使わない。使う場合も全面敷きは禁止。小さな切り抜き素材として控えめに1枚まで（ただし基本は使わない）。

【カラーパレット（参照画像寄せ：無彩色縛り解除、ただし限定）】
背景：白(#FFFFFF) または きわめて薄いクールグレー(#F5F5F5)
ベース（環境・大面積）：ディープネイビー〜チャコール（例：#0B1220 / #111827 / #1F2937）
クール発光：シアン〜ティール（例：#22D3EE / #06B6D4）
ブルー発光：エレクトリックブルー（例：#3B82F6）
ウォームアクセント：コーラル/レッド（例：#F43F5E）を少量
ハイライト：ソフトイエロー（例：#FACC15）を少量
テキスト：ほぼ黒(#111111)
色数は最大5系統まで。装飾で散らさず、意味（重要・焦点・選択・リスク・成功）にだけ割り当てる。

【タイポグラフィ】
見出し
極太ゴシック。各スライドで最も大きい要素は必ず見出し。本文の少なくとも15倍。縦の約3分の1以上を占める大きさ。
必要なら見出し近くに短い英語短語を小さく添える（限定語彙のみ）。

本文
可読性の高いゴシック体。
1ブロック30〜40文字×最大2行目安、最大3行まで。見出しだけで意味が曖昧なら本文1行を足して補強。

強調
重要な数字やキーワードは、色面のハイライトで強調する（線のマーカー表現は禁止）。
ハイライトは1スライド1〜2箇所まで。色は上記パレットのウォームまたはイエローに限定。

【コピーのエッジ指定（日本語の言い切り＋短い英語タグ）】
英語は1〜4語でタグ的に置く（Overload / Wrong Game / Decision Trap / One Move / Signal First / Choose One / Stop Scrolling 等）。
日本語は自分ごと化の痛み、境界線、矛盾、罠の命名を優先。例文は引用せず毎回新規生成。

【スライド構成：3タイプ】
各スライドは必ずTYPE A/B/Cのいずれかに分類。

TYPE A：インパクト（文字重視）
画像なし。背景＋巨大テキストのみ。テキスト1〜2行。本文なしも可。
色はベース濃色＋白文字、または白背景＋濃文字。アクセント色は1点だけ。

TYPE B：ビジュアル（主線なしカラーアイソメ場面）
写真ではなく、比喩メタファーに沿った「主線なし・カラーアイソメ」の場面イラストを使用（人物必須）。
イラストはスライド幅いっぱいに大きく配置し、端まで到達させる。必要ならはみ出しトリミング可。
見出しはイラストの上または周囲に大きく配置。本文は短い一文のみ小さく添える。
罠や危機は構図を重くし、ウォーム色やイエローは危険箇所/詰まり/焦点だけに置く。

TYPE C：ロジック（主線なしカラーアイソメ図解）
長文説明は禁止。アイソメの図解やミニマル概念図で見せる。
要素数の上限：主要要素は最大5つ、比較は最大3点、ステップは最大3〜4段まで。増やすなら分割。
四隅に小さな英語短語で誌面感（内部語禁止）。ただし飾り箱や枠パネルは禁止。
発光色は「焦点」だけに付与し、図解がゲームUIみたいに読める整理を優先する。

TYPE Cレイアウト例
オーバービュー：俯瞰＋重要エリアのみ発光色で強調。
分解図：3層/3ステップで関係だけ。
ボトルネック：詰まりだけウォーム色＋困る人物。
フロー：流れと分岐を明確化。
A/B比較：左右、違い3点まで。

【表紙スライドの特別指定】
表紙は最もインパクトが強い。文字だけ表紙は禁止。TYPE B＋TYPE Cのハイブリッド。
スイス・スタイル／バウハウスのグリッドベース（ただし見えるグリッドは基本出さない）。
比喩メタファーの主役アイソメモチーフを必ず1つ（人物も必ず入れる）。
タイトル中央揃え禁止。四隅または上下端に寄せた非対称。
上部帯ラベルは置かない。必要なら端に短い英語短語のみ（限定語彙）。

タイトルコピー
メインコピー（極大）：抽象名詞1語だけ禁止。ペインや境界線を1文で言い切る。
サブコピー（極小）：読み進めると何が変わるかを1文で約束。近くに短い英語タグ可（限定語彙）。

【画像内の禁止（混入事故防止）】
画像内に文字を描かない（文字はスライドのテキスト要素として配置）。
ピン、POIマーカー、矢印、吹き出し、コンパス、スケールバー等の地図UI表現を入れない。
ロゴ、商標、固有のサイネージを再現しない。
人物は1〜3人まで。車・自転車・乗り物は不要。
アウトライン線、輪郭線、黒線、ストローク表現は禁止（主線なし）。
グレイン、ノイズ、重いテクスチャ、写真っぽい写実、過剰な反射は禁止。`,"iso-yellow":`【世界観・ビジュアルOS（オリジナル版）】
トーン
- ミニマル、無彩色、硬質で知的。だけど冷たすぎない。
- ニューエコノミー系の編集デザインとして、余白とコントラストで“信頼”を作る。
- 写真の情緒ではなく、比喩アイコン化された「理解の気持ちよさ」で気分を上げる。

比喩メタファー選択（内部で必ず実行）
- 【入力変数：テーマ】から、最も直感的で自分ごと化しやすい比喩を1つだけ選ぶ。
- 候補：都市／交通（路線・乗り換え）／料理（レシピ・仕込み）／登山（ルート・装備）／工場（ライン・工程）／図書館（索引・棚）／ゲーム（クエスト・UI）
- 以後の図解・イラストは、その比喩に統一して展開する（世界観のブレ禁止）。

視点・質感・イラスト方針
- 図解・場面表現は原則ミニマルで、やや丸みのあるアイソメトリック（等角投影）。
- 線は黒〜濃グレーのクリーンな、太い主線のラインアート＋薄い影（主張しすぎない）。
- 面はベース背景は白、もしくは部分的にライトグレーで構成し、情報の“構造”が見える設計図感を出す。
- アイソメ図解には、必ず人間（視聴者の代理）を1〜3人入れる。見ている／迷っている／選んでいる等の行動が分かるポーズにする。
- 写真は原則使わない（コラージュ写真なし型）。使う場合も全面敷きは禁止。小さな切り抜き素材として、ごく控えめに1枚まで（ただし基本は使わない）。

グリッド
- 背景には薄いグリッドを敷き、編集デザインとしての“設計感”を出す（ごく薄く、邪魔しない）。

【カラーパレット（差し替え）】
- 背景：白(#FFFFFF) または クールグレー(#F5F5F5)
- ベース要素：ライトグレー〜ホワイト
- テキスト：スミ(#111111)
- アクセントは1色のみ
  - **エレクトリックイエロー(#FFCC00)**
- 他の有彩色（シアン、レッド等）は使わない。発光表現も黄色の明度差だけで作る。
- 色はすべて「意味（重要・焦点・選択・リスク）」のインジケーターとして使う。装飾として散らさない。

【タイポグラフィ（補強）】
見出し
- 極太ゴシック（ImpactやヒラギノW8級イメージ）の日本語。
- 各スライドで、最も大きい要素は必ず見出しテキストとする。
- 見出しの文字サイズは、本文の少なくとも15倍。行の高さはスライド縦の約3分の1以上を占めるイメージで大きく。
- 必要に応じて、見出しの近くに細い英語短語を小さく添えてよい（上記の限定語彙のみ）。

本文
- 可読性の高いゴシック体。
- 1ブロックあたり30〜40文字×最大2行を目安とし、3行を超えない。
- 文字サイズは、見出しの20％以下に抑え、**強いジャンプ率**をつける。

強調
- 重要な数字やキーワードは、エレクトリックイエローのマーカーラインでなぞったようなイメージで表現する。
- 1スライドあたり強調は1〜2箇所まで。

【コピーの“エッジ”指定（追加）】
- キーポイントの見出しは、日本語の強い言い切り＋短い英語（1〜4語）をセットで置いてよい。
- 英語は説明文ではなく“タグ/断言”として短く置く（例：Overload / One Move / Wrong Game / Signal First / Choose One / Stop Scrolling）。
- 日本語は自分ごと化の痛み、境界線、矛盾、罠の命名を優先する。
- 例の型（そのまま引用しないで新規生成する）
  - 情報だけ増えて、前に進めない。Overload
  - その努力、違うゲームだ。Wrong Game
  - 迷うほど、手が止まる。Decision Trap
  - “一手”だけ決める。One Move

【スライド構成：3タイプ】
各スライドは必ず次のいずれか1種類に分類して構成する。

1. TYPE A：インパクト（文字重視）
用途：最重要メッセージ／強い結論／問いかけ／転換点。
構成：
- 画像を使わず、背景＋巨大なテキストのみ。
- 背景は白またはクールグレー＋アクセントカラー少量。
- テキストは1〜2行に絞る。本文はなくてもよい。

2. TYPE B：ビジュアル（イラスト重視に変更）
用途：利用シーン／感情／ペイン／罠や危機の描写。
構成：
- 写真ではなく、比喩メタファーに沿ったアイソメ／ラインアートの場面イラストを使用する（人物を必ず入れる）。
- イラストはサムネサイズではなく、スライド幅いっぱいに大きく配置し、上下左右いずれかは画面端まで到達させる。必要ならはみ出すほどトリミングしてよい。
- 見出しはイラストの上または周囲に大きく配置し、本文は短い一文だけ小さく添える。
- 罠や危機のスライドでは、構図を重くし、黄色のアクセントは“危険箇所/詰まり/焦点”だけに置く。

3. TYPE C：ロジック（図解・イラスト重視）
用途：構造／比較／プロセス／仕組み。
構成：
- 長文説明ではなく、アイソメトリックな図解やミニマルな概念図で見せる。
- アクセントカラーはエレクトリックイエローのみ。
- 床面にグリッド、四隅に小さな英語短語を置き、編集デザインの“誌面感”を保つ（ただし内部っぽい語は禁止）。

TYPE Cの代表レイアウト例（必要に応じて使用）
- オーバービュー：比喩世界を俯瞰し、重要エリアだけ黄色でハイライト。
- 分解図：3層や3ステップに分けて、関係だけ見せる（要素を増やしすぎない）。
- ボトルネック図：詰まり箇所だけ黄色で示し、人間が困っている様子を入れる。
- フロー：流れを線で示し、迷う分岐を明確に描く。
- A/B比較：左右に並べて、違いは3点まで。

【表紙スライドの特別指定】
表紙はシリーズ中で最もインパクトが強いスライドとする。文字だけ表紙は禁止。TYPE B＋TYPE Cのハイブリッド構成にすること。

デザイン・レイアウト
- スイス・スタイル／バウハウスを意識したグリッドベース。
- 比喩メタファーに沿った“主役のアイソメモチーフ”を必ず1つ置く（人物も必ず入れる）。
- タイトルの中央揃えは禁止。四隅または上下いずれかの端に寄せた非対称レイアウトにする。
- スライド上部に帯状・タブ状ラベルは置かない。必要なら、端に小さな英語短語だけ添える（限定語彙）。

タイトルコピー
- メインコピー（極大）：
  - 抽象名詞1語だけのタイトルは禁止。
  - 読者のペインや境界線を1文で言い切るキャッチコピーとする。
  - スライド内で最大サイズの文字とし、本文の少なくとも15倍の大きさにする。
- サブコピー（極小）：
  - 読み進めると何が変わるかを1文で約束する。
  - 近くに短い英語（1〜4語）を添えて“誌面の抜け”を作ってよい（限定語彙、内部語禁止）。`,"watercolor-sketch":`【世界観・ビジュアルOS（建築スケッチ水彩：女性っぽい空気感）】
トーン
静かでやさしい。日常のまま、少しだけ前向きになれる温度。
信頼は余白と整理で作る。感情は小さな暖色と表情で足す。
派手な演出で煽らない。安心と自己効力感を積み上げる。

ビジュアルスタイル（最重要）
建築スケッチ水彩のインク＆ウォッシュ。コールドプレスのコットンペーパー質感。
大きな寒色の水彩ウォッシュ（シアン／ティール／グレー）をベースに、被写体の近くにだけ小さな暖色アクセント（テラコッタ／木／くすみオレンジ）。
線は均一なアウトライン禁止。インク線は太さと濃度がわずかに揺れ、途切れや抜けがある。構造線やガイド線、無意味な水平線は出さない。
背景は描き込みすぎない。空気感は残し、情報は増やさない。紙の白を積極的に残す。
光は左からの柔らかい昼光。影は控えめで、にじみと明度差で表現する。
場面はイベントではなく日常。季節感は小物と色だけで添える。屋台、パレード、群衆、派手な看板は禁止。

被写体の方向性（女性っぽさ）
柔らかい表情、丸みのある形、穏やかな室内。色のコントラストは強すぎない。
人物が出る場合は、生活の中の仕草が分かるポーズ。安心感と親密さを優先。
過度なデフォルメ、過度な萌え、過度な子ども向けは避け、上品な雑誌挿絵に寄せる。

背景小物ルール
普通の家庭の要素だけ。ソファ、ローテーブル、本棚、観葉植物、シンプルなランプ、カーテン窓。
派手なロゴ、企業名、アイコン化されたサービス画面、巨大なUI演出は禁止。

【カラーパレット（基本）】
背景：紙白（ほぼ白）または極薄グレー
ベースウォッシュ：淡いシアン／ティール／グレー
アクセント：テラコッタ、木の色、くすみオレンジを少量
テキスト：スミ寄りの濃グレー
色は散らさない。暖色は被写体の周辺だけ。

【コピーライティング方針（やさしいのに刺さる）】
ターゲットの感情を先に受け止める。不安、置いていかれる感覚、時間がない焦り、失敗が怖い気持ち。
断言で殴らない。小さな前進の約束にする。
言い切りは「責める」より「ほどく」。でも曖昧にせず、次の一歩が分かる言葉にする。
語感は短く、やわらかく、日常語で。難語を避ける。
核心は一撃で通す。優しい言葉で、痛点は外さない。

【タイポグラフィ（通常）】
見出し
極太ゴシック。各スライドで最大サイズ。本文の少なくとも15倍。縦の約3分の1以上の存在感。
必要なら見出し近くに短い英語短語を小さく添える（限定語彙のみ）。

本文
可読性の高いゴシック体。
1ブロック30〜40文字×最大2行目安、最大3行まで。
見出しだけで曖昧なら本文1行で支える。

強調
重要な数字やキーワードは、淡い暖色の下敷きハイライトで強調する（線で囲む、蛍光ペン線の誇張はしない）。
1スライド1〜2箇所まで。

【手書き文字スライド（核心だけ）】
シリーズ全体のうち、10〜20％のスライドだけ、見出しテキストを手書き風の走り書きにする。
右肩上がりのベースライン、少しラフで人が書いた感じ。感情のピークや決断の一言にだけ使う。
使いどころは「決める」「救う」「背中を押す」スライド。説明スライドには使わない。
手書き文字はスライドのテキスト要素として配置する。画像内に文字を描かない。

【スライド構成：3タイプ】
各スライドは必ず次のいずれか1種類に分類して構成する。

TYPE A：インパクト（文字重視）
用途：最重要メッセージ／強い結論／問いかけ／転換点。
構成：画像を使わず、背景＋巨大なテキストのみ。
背景は紙白または極薄グレー。必要なら淡い寒色ウォッシュをうっすら敷く。
テキストは1〜2行。本文はなくてもよい。
このTYPEの一部を「手書き文字スライド」にしてよい。

TYPE B：ビジュアル（挿絵：建築スケッチ水彩）
用途：利用シーン／感情／つまずき／安心の描写。
構成：写真ではなく、建築スケッチ水彩の挿絵を大きく使用する（人物は必要に応じて）。
挿絵はスライド幅いっぱいに大きく配置し、端まで到達させる。必要ならはみ出しトリミング可。
見出しは挿絵の上または周囲に大きく配置。本文は短い一文だけ小さく添える。
季節感は控えめ。日常の空気を崩さない。

TYPE C：ロジック（スケッチ図解）
用途：構造／比較／プロセス／仕組み。
構成：長文説明ではなく、手描きスケッチ風の図解で見せる。
図解はインク線＋淡いウォッシュ。線は均一にしない。ガイド線や罫線は出さない。
要素数の上限：主要要素は最大5つ、比較は最大3点、ステップは最大3〜4段まで。増やすなら分割。
四隅に小さな英語短語を置いて誌面感を作る（限定語彙、内部語禁止）。ボックスやパネルは禁止。
このTYPEの一部で、見出しだけ手書き文字を使ってよい（図解内に文字は描かない）。

TYPE Cの代表レイアウト例（必要に応じて使用）
オーバービュー：全体を俯瞰し、重要箇所だけ暖色で温度を足す。
分解図：3層や3ステップに分けて関係だけ見せる。
ボトルネック：詰まり箇所だけ暖色で示し、困っている気配を添える。
フロー：流れを整理し、迷う分岐を明確にする。
A/B比較：左右に並べて、違いは3点まで。

【表紙スライドの特別指定】
表紙はシリーズ中で最も印象が強いスライドとする。文字だけ表紙は禁止。
TYPE B＋TYPE Cのハイブリッド構成。
紙白の余白を大きく残し、日常のワンシーン挿絵を主役にする。
タイトルの中央揃えは禁止。四隅または上下いずれかの端に寄せた非対称レイアウト。
上部帯ラベルは置かない。必要なら端に短い英語短語だけ添える（限定語彙）。

タイトルコピー
メインコピー（極大）
抽象名詞1語だけのタイトルは禁止。
不安を受け止めつつ、前に進める一文で言い切る。
サブコピー（極小）
読み進めると何が変わるかを一文で約束する。
必要なら短い英語タグを添える（限定語彙）。

【画像内の禁止（重要）】
画像内に文字を描かない（英字、数字、記号、日本語すべて禁止）。
ピン、POIマーカー、矢印、吹き出し、コンパス、スケールバー等の地図UI表現を入れない。
ロゴ、商標、固有のサイネージを再現しない。
屋台、群衆、イベント演出、派手な看板、過度な装飾は禁止。
構造ガイド線、作図補助線、不要な水平線、罫線は禁止。`,"handwritten-mono":`【世界観・ビジュアルOS（和風スイススタイル：ミニマム＆オーガニック建築線画）】
トーン
静かでやさしい。日常のまま、少しだけ前向きになれる温度。
信頼は余白と整列で作る。感情は線の呼吸と紙の温度で足す。
派手な演出で煽らない。安心と自己効力感を積み上げる。
余白の美が主役のエディトリアルデザインを意識する（洗練、静けさ、整列、跳躍）。

ビジュアルスタイル（重要）
背景はコールドプレスのコットンペーパー質感（元の紙の質感を維持）。
ビジュアルは人間が手で描いたと思える、建築風の繊細な手描き線画（インク／鉛筆のような線）。
原則としてモノクローム。水彩・ウォッシュ・にじみ表現は禁止。色面の塗りは基本しない。
線は均一禁止。わずかな線幅差、かすれ、途切れ、重なりで手を感じさせる。
ハッチングは最小限。陰影は塗りではなく、薄い線密度の差で控えめに表現する。
構造ガイド線や作図補助線、無意味な水平線、罫線は禁止。情報のための線だけを引く。
描き込みすぎない。紙の白を主役にして、余白で呼吸を作る。

被写体の方向性
日常の静かなワンシーンを意識する。
人物が出る場合も最小限。表情や仕草は穏やかに、誇張しない。
過度なデフォルメ、過度な萌え、過度な子ども向けは避け、上品な雑誌挿絵の線画に寄せる。

背景小物ルール
普通の家庭の要素だけ。ソファ、ローテーブル、本棚、観葉植物、カーテン窓。
派手なロゴ、企業名、アイコン化されたサービス画面、巨大なUI演出は禁止。

【カラーパレット（基本）】
背景：紙白（ほぼ白）または極薄ウォームグレー（紙のムラ程度）
線画：黒に近い焦茶〜チャコール（単色の濃淡のみで運用）
テキスト：黒に限りなく近い焦茶色（温かみのあるダークブラウン）
アクセント：色は禁止。必要な場合のみ、同系統の淡い焦茶の薄い下敷き（面ではなくごく薄い帯）で1スライド1箇所まで。
色は散らさない。モノクロームの濃淡だけで階層を作る。

【コピーライティング方針（やさしいのに刺さる）】
ターゲットの感情を先に受け止める。不安、置いていかれる感覚、時間がない焦り、失敗が怖い気持ち。
断言で殴らない。小さな前進の約束にする。
言い切りは「責める」より「ほどく」。でも曖昧にせず、次の一歩が分かる言葉にする。
語感は短く、やわらかく、日常語で。難語を避ける。
核心は一撃で通す。優しい言葉で、痛点は外さない。
文章が長くなるなら、短い言い切りに直すか、改行を入れて視線を休ませる。

【タイポグラフィ（和風スイススタイル：明朝主役）】
基本
メインフォントは美しく可読性の高い明朝体。見出しも本文も明朝を基本にして情緒を作る。
文字色は黒に限りなく近い焦茶色で統一する（暖かいダークブラウン）。

見出し
明朝体で大きく。ウェイト差とサイズ差で階層を作る（装飾はしない）。
1スライド1〜2行まで。余白を壊さない。
字間と行間はゆったり。詰めすぎ禁止。
長くなりそうなら短く言い換えるか、スライドを分割する。

本文
明朝体。1ブロックは短文で最大2行目安、最大でも3行まで。
1行あたり最大18字程度を目安に、短めに改行する。
1スライド内の本文ブロックは原則1つだけ。
本文が3行を超えそうなら、分割する。

英語アクセント（縦書き）
たまに、四隅や端に極小の英字を縦書きで配置する。
縦書き英字は「細めのセリフ体」かつ「イタリック体」で統一する。
英語は短語ではなく、短い一文にする。端のデザイン要素として使う。
記号や装飾（*、#、-、: など）は入れない。大文字の連発も避ける。
大きさは本文より明確に小さく、存在感は気配程度。中央付近には置かない。
枠線付きボックスや塗りつぶしパネルは禁止。

英語の許可フレーズ（この中から選ぶ）
Keep it simple, keep it true
Small steps change the day
Less noise, more clarity
Make space for the point
Choose the next small move
Calm mind, clear choice
What matters comes first
Breathe, then decide
Trust the quiet structure
Clarity beats complexity
Let the idea breathe
One message is enough

強調
蛍光ペン風や派手な下線は禁止。
強調は「言葉を短くする」「改行で区切る」「ごく薄い同系色の下敷き（細い帯）」のいずれかで、1スライド1箇所まで。

【手書き文字スライド（慎重運用）】
シリーズ全体のうち、10％程度だけ、見出しの一部を手書き風にしてよい。
筆文字ではなく、建築スケッチに馴染む鉛筆の走り書き寄り。崩しすぎない。
タイポ崩れが起きやすいので、文字数は短く、配置は固定的にする。
手書き文字はスライドのテキスト要素として配置する。画像内に文字を描かない。

【レイアウト原則（和風スイススタイル）】
グリッドで整列。左右どちらかに寄せた非対称を基本に、余白で安定させる。
中央揃えは「決めの一言」や「表紙」など、意図があるときだけ許可する。連発は禁止。
要素同士を近づけすぎない。詰め込み禁止。
大きい要素（見出し／挿絵／図解）は1つだけ主役にする。
見出し、本文、線画の位置関係は、端と端、ベースライン、余白幅で美しく整列させる。
余白60％以上を守れない場合は、必ずスライドを分割する。

【スライド構成：3タイプ】
各スライドは必ず次のいずれか1種類に分類して構成する。

TYPE A：インパクト（文字重視）
用途：最重要メッセージ／強い結論／問いかけ／転換点。
構成：画像を使わず、背景＋大きなテキストのみ。
背景は紙白または極薄ウォームグレー（紙の質感は維持）。
テキストは1〜2行。本文はなくてもよい。
長文は作らない。短い言い切りにする。

TYPE B：ビジュアル（挿絵：建築線画モノクロ）
用途：利用シーン／感情／つまずき／安心の描写。
構成：写真ではなく、建築風の繊細な手描き線画（モノクロ）を大きく使用する（人物は必要に応じて最小限）。
塗りは基本なし。陰影は線の密度で控えめに。
挿絵は大きく置くが、余白を必ず残す。全面ベタは禁止。
見出しは余白側に配置。本文は短い一文だけ小さく添える。
余白を壊す情報追加は禁止。挿絵が主役、文字は添えるだけ。

TYPE C：ロジック（スケッチ図解：建築図面の気配）
用途：構造／比較／プロセス／仕組み。
構成：長文説明ではなく、手描きスケッチ風の図解で見せる。
図解は建築線画のように繊細で、線幅の揺れを許容。均一線・罫線は禁止。
塗り面を使わず、点線や線密度で階層を表現する。
要素数の上限：主要要素は最大5つ、比較は最大3点、ステップは最大3〜4段まで。増やすなら分割。
四隅や端に英語の短い一文を縦書きで置いて誌面感を作ってよい（許可フレーズから選ぶ）。
ボックスやパネルは禁止。図解内に文字を描き込まない。

TYPE Cの代表レイアウト例（必要に応じて使用）
オーバービュー：全体を俯瞰し、重要箇所は配置の強弱で際立たせる（色で煽らない）。
分解図：3層や3ステップに分けて関係だけ見せる。
ボトルネック：詰まり箇所は線の密度か余白の切り方で示す。
フロー：流れを整理し、迷う分岐を明確にする（矢印は最小限、装飾的にしない）。
A/B比較：左右に並べて、違いは3点まで。

【表紙スライドの特別指定（中央揃えの縦書き表紙）】
表紙はシリーズ中で最も印象が強いスライドとする。文字だけ表紙は禁止。
紙白の余白を大きく残し、タイポと余白で勝つ。
タイトルは中央揃えの縦書きを許可する。太くしない。間で美しく見せる。
表紙の要素は3つまで
縦書きタイトル（主役）
極小のサブコピー（端に小さく）
静かな線画（中央の軸を避け、余白の中に展示物のように置く）
線画は描き込みすぎない。全面ベタは禁止。
英語アクセントを入れる場合は、端に縦書きで短い一文を1つだけ（許可フレーズから選ぶ）。
帯ラベル、囲み、派手な装飾は禁止。

タイトルコピー
メインコピー（極大）
抽象名詞1語だけのタイトルは禁止。
不安を受け止めつつ、前に進める一文で言い切る。
長くなるなら改行し、行を短く保つ。

サブコピー（極小）
読み進めると何が変わるかを一文で約束する。
短く。端に置く。主役にしない。

【画像内の禁止（重要）】
画像内に文字を描かない（英字、数字、記号、日本語すべて禁止）。
ピン、POIマーカー、矢印、吹き出し、コンパス、スケールバー等の地図UI表現を入れない。
ロゴ、商標、固有のサイネージを再現しない。
屋台、群衆、イベント演出、派手な看板、過度な装飾は禁止。
構造ガイド線、作図補助線、不要な水平線、罫線は禁止。`},we={"corporate-clean":`────────────────────────
1) デザインスタイル（Corporate Clean — McKinsey × Apple Keynote）
────────────────────────
【Core Concept】
・スライドの主役は「数値・ロジック・構造」。装飾は信頼を下げる。
・ホワイト/ライトグレー基調。アクセントは企業ブルー（#2864FF）を控えめに。
・フォトグラフィは使う場合、ビジネス文脈の高品質なプロフォト（人物は自信・知性・対話の表情）。
・グラフ・表・フレームワーク図が主要ビジュアル。手書き風・イラスト禁止。

【Data / Chart Rules】
・数値は大きく。その数値が意味すること（コンテキスト）を2行以内で添える。
・グラフは折れ線/棒/散布図のみ。パイチャート・3Dグラフ禁止。
・比較は左右2列または上下2段。3つ以上の比較は表に。

【Color】
・背景: #FFFFFF or #F4F7FB。
・テキスト: #0A1628（濃紺）。
・アクセント: #2864FF（1スライドにつき1〜2箇所まで）。見出しの1語、グラフの主軸、CTA背景のみ許可。
・その他の色は禁止。インフォグラフィックは グレースケール＋アクセントブルーのみ。

【Editorial Layout】
・16:9 グリッド。左上タイトル、右エリアにビジュアル or 右カラムにデータ。
・余白は最低20%確保。詰め込み禁止。
・ページ左端に細い縦線（2px、#2864FF）でセクション区切りを表現してもよい。
・最下部: スライド番号のみ許可（極小サイズ、右下）。ロゴ・注釈禁止。

【Typography】
・見出し: Noto Sans JP ExtraBold / Inter ExtraBold。サイズ36〜48pt。
・本文: Noto Sans JP Regular / Inter Regular。サイズ16〜18pt。
・ジャンプ率は2〜3倍。中途半端なサイズ混在は禁止。
・英語タグ（1〜3語）: 見出し上部に極小で添えて"文脈を一行で"補完する。

【禁止】
・手描き・スクリブル風のグラフ。
・影やグロー効果。
・3D文字・エフェクト文字。
・アイコン多用（ピクトグラムは1スライドに1点まで）。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: Executive Summary — 白背景、大見出し＋数値ハイライト、本文なし or 1行。
TYPE B: Data Scene — グラフ/表/フレームワーク図が主役。見出し＋コールアウト2〜3点。
TYPE C: Logic Flow — フロー/比較/マトリクス。最大5要素、線と矢印でつなぐ。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・背景: 企業ブルー（#2864FF）グラデーション or 白。
・Main Headline: 太く短く、3〜8文字の力強い命名 or 問い。
・Subcopy: {ゴール}へ直結する約束文（1行）。
・ビジュアル: 高品質なビジネス写真（人物 or 建築 or 数値クローズアップ）、右半分に配置。
・最下部: 完全に空白。`,"natural-japanese":`────────────────────────
1) デザインスタイル（Natural Japanese — 和の編集美学）
────────────────────────
【Core Concept】
・「間（ま）」と「余白」が設計の中心。情報を詰めない。空白は雑音を消す余白として積極的に設計する。
・色は墨（#1a1a14）・和紙色（#F5EDD8）・苔色（#4a6741）・山吹（#d4a132）の4色以内。
・テクスチャ: 和紙の目/布目の微細なノイズを背景に薄く乗せる（ただし汚れ・傷・ヴィンテージ加工は禁止）。
・写真は四季・手仕事・食材・人の所作。人物は日本人のみ。穏やかな光、正面を向かない角度を優先。

【Photo Rules】
・切り抜き or フルブリード。矩形貼りは和紙マスク or 墨流し形状で変形してもよい。
・人物の表情: 微笑・集中・手仕事・対話。強い感情や劇的な表情は禁止。
・食や物の写真: 上から俯瞰 or 横から自然光。人工的なスタジオ照明感は避ける。

【Color】
・背景: #F5EDD8（和紙色）or 白（#FFFFFF）。
・墨: #1a1a14（テキスト・細線）。
・アクセント: 苔色（#4a6741）or 山吹色（#d4a132）の1色のみ。どちらかを選ぶ。
・金箔的なラインやドットを極小で1〜2点使ってもよい。
・3色を超えたら整理する。

【Editorial Layout】
・縦横を意識した非対称グリッド。写真と余白のバランスを黄金比で設計。
・毛筆風の細い横線（1px、#1a1a14 30%透明）でセクション分けしてもよい。
・右端または下端に"走り書き風"の小さな注記（日本語カナのみ）を1点だけ許可。
・最下部は完全に空白。

【Typography】
・見出し: Shippori Mincho B1（太め）or 游明朝 Demibold。縦書きを積極活用。
・本文: Noto Serif JP Regular。サイズは小さめ（12〜14pt）。行間を広く（1.9〜2.2）。
・英語は添えない or 極小プレーン（装飾英語・カリグラフィ禁止）。

【禁止】
・原色・鮮やか過ぎる色。
・ドロップシャドウ・グロー・ネオン。
・幾何学的な西洋的図解（矢印の多用、フロー図の多用）。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: 余白の詩 — 和紙背景、大きな見出し（縦書き可）＋小さなビジュアル1点。余白70%以上。
TYPE B: 写真主役 — フルブリードor大判写真、見出しをオーバーレイ（墨テキスト or 白テキスト）。
TYPE C: 所作の図解 — 手順・ステップを、写真＋細い線矢印＋番号で流れるように見せる。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・背景: 和紙色（#F5EDD8）or 季節感ある写真（フルブリード・明るめ・ぼかし不要）。
・Main Headline: 縦書きまたは大きな横書き。5〜10文字の美しい日本語。
・季節・素材感を感じる写真を1点（右寄り or 中央下）。
・英語タグは原則なし。あっても極小・極薄で。`,"pop-3d":`────────────────────────
1) デザインスタイル（Pop 3D — Inflated Clay × Bold Color）
────────────────────────
【Core Concept】
・主役は「3Dインフレート（膨らんだ）オブジェクトまたはクレイ（粘土）素材の立体キャラ・アイコン」。
・色はビビッドな原色系（コーラルピンク・シアン・イエロー・パープル）。暗い色は使わない。
・全体的に「かわいくてちょっとアホみたいに楽しい」雰囲気を維持する。ただしメッセージは真剣。
・ランダムに配置されたオブジェクトが画面全体を埋める「散乱レイアウト」または中央集中レイアウトを使い分ける。

【3D Object Rules】
・オブジェクトはふっくら・丸みが強い（角なし・シャープエッジなし）。
・素材感: つやあり（グミ感 or 光沢プラ）or マット（粘土感）のどちらか。混在禁止。
・影は柔らかい落ち影（ドロップシャドウ、ソフト、不透明度30%）。劇的な影は禁止。
・人物は「ミニマルでかわいい3Dキャラ（顔あり、表情シンプル）」。写真人物は使わない。
・1スライドのオブジェクト数は3〜7点まで。詰め込みすぎると「うるさい」になる。

【Color】
・背景: パステル（#FFF0F8・#E8F8FF・#FFFCE8）or ビビッド単色（コーラル・シアン・イエロー）。
・オブジェクト: 背景の補色または同系色の濃い色。
・テキスト: 白 or 濃色（#1a1a1a）。可読性最優先。
・4色以内に収める。ただし各色がハッキリ違うことが条件。

【Editorial Layout】
・フルブリードまたはラウンドカード（カード形状で角丸40px、背景ビビッド）を使い分ける。
・テキストは大きく・太く・短く。吹き出しやステッカー型ラベルを活用してよい。
・3Dオブジェクトは「はみ出し」が効果的（画面外にかかるようにレイアウト）。
・ページ番号・ロゴ: なし。最下部空白。

【Typography】
・見出し: 丸ゴシック系（Rounded M+・DotGothic16系）or 太めの幾何学サンセリフ。
・本文: 読みやすい丸ゴシック、または普通のサンセリフ（Inter等）。
・英語タグ: 大きめステッカーとして使ってもOK。

【禁止】
・現実の写真人物（3Dキャラに統一）。
・細い線・小さい文字・複雑な図解。
・暗い色・モノクロ。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: Big Type — ビビッド単色背景、巨大な見出し、3Dオブジェクト1〜2点（はみ出し）。
TYPE B: Object Scene — 3Dキャラ or アイコンが主役、コメント吹き出しで情報補完。
TYPE C: Card Grid — ラウンドカードを3〜4個並べて比較 or ステップを見せる。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・背景: ビビッドグラデーション（コーラル×シアン or イエロー×ピンク）。
・Main Headline: 超大きく・太く・白文字。ステッカー型でもよい。
・3Dキャラを2〜3点散らす。メインキャラは画面右に大きく。
・笑いのフック: キャラのリアクション（目が飛び出る、汗が飛ぶ等）をさりげなく。`,"neon-cyber":`────────────────────────
1) デザインスタイル（Neon Cyber — Dark × Glow × Digital Grid）
────────────────────────
【Core Concept】
・純粋な黒（#040318）を背景基調。ネオングロー（シアン・マゼンタ・グリーン）が情報を照らす。
・情報の密度は高くしてよい。ただし「読めない密度」は禁止。
・グリッドライン（細い・低透明度）が画面全体に走る。情報の骨格として機能させる。
・写真は使わない or モノクロ化して暗背景に馴染ませる。ビジュアルはデータ・グラフ・図解が主役。

【Data / Visual Rules】
・グラフは折れ線・面グラフ・ヒートマップ優先。色はグロー色（シアン・マゼンタ）1〜2色。
・データ値はポイントサイズ大（40pt〜）でハイライト。単位は小さく添える。
・接続線（矢印）: 水平・垂直のみ。斜め禁止。太さ1px。グロー色をボーダーとして使う。
・ターミナル風のモノスペースフォントを1スライドに1〜2ブロック使うと「テック感」が増す（装飾目的のみ、機能テキストに使わない）。

【Color】
・背景: #040318（ほぼ純黒のネイビー）固定。
・グロー1: #00F5FF（ネオンシアン）— 主要テキスト・グラフ主軸・CTAに使う。
・グロー2: #FF2CF4（ネオンマゼンタ）— サブアクセント・警告・対比に使う。極小面積。
・グロー3: #39FF14（ネオングリーン）— 補足的に使う。1スライド1箇所まで。
・ホワイト（#E8EAF2）: 見出し・本文テキスト。
・グレー（#6B7580）: 注記・補足テキスト。

【Glow Effects】
・text-shadow: 0 0 20px #00F5FF — 見出しの1〜2語にだけ適用。全体に使わない。
・box-shadow（アウトライン）: ネオン色で細い輝きをボーダーに。内側グロー禁止。

【Typography】
・見出し: Space Grotesk ExtraBold / Rajdhani Bold（幾何学的でシャープ）。
・モノスペース装飾: JetBrains Mono / Fira Code（コードブロック、ターミナル感）。
・和文: Noto Sans JP（グロー効果をかけない）。

【禁止】
・パステル・温かみのある色。
・手書き風・イラスト・アナログテクスチャ。
・丸みのある形状（シャープかつ直線的に）。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: Data Highlight — 漆黒背景、グロー数値（巨大）＋コンテキスト2行。
TYPE B: Grid Viz — データ可視化が主役。グロー色のグラフ＋グリッドライン。
TYPE C: System Flow — ネットワーク/アーキテクチャ図。ノード＋接続線（水平・垂直）。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・背景: 純黒（#040318）。グリッドラインを薄く（5%透明度）。
・Main Headline: ホワイト、極大フォント。1〜2語にネオンシアンのglow。
・バックグラウンドに薄いデータ可視化（散布図 or ラインチャートのシルエット）を飾りとして置く。
・英語タグ（1〜3語）: モノスペース、ネオン色で小さく。`,"minimal-editorial":`────────────────────────
1) デザインスタイル（Minimal Editorial — The Economist × Monocle × Wallpaper*）
────────────────────────
【Core Concept】
・「文字そのものがデザインになる」タイポグラフィ主役スタイル。
・色は黒・白・グレーの3段階。それ以外の色を使うなら1色のみ（赤#CC0000 or 濃紺#1a2a4e）。
・装飾ゼロ。飾り要素、影、グラデーション、グロー、アイコン群は全て禁止。
・写真はあくまで「証拠」として使う（報道写真的なクオリティ、自然光、白黒可）。

【Typography Rules（最重要）】
・見出しは極端に大きく（60〜96pt）、細ウェイト or 太ウェイトの二択。中間はない。
・行間: 0.9〜1.1（見出し）。1.6〜1.8（本文）。
・見出しと本文のジャンプ率: 4〜6倍。
・水平ルール（細線1px、黒）を見出しの上下に1本ずつ置いてよい。
・セリフ体と無セリフ体を意図的に混在させてコントラストを作る。

【Photo Rules】
・使う場合は白黒か超低彩度。カラー写真禁止。
・切り抜きは使わない。矩形クロップのみ（整然とさせる）。
・1スライドに1点まで。写真が主役になってはいけない。テキストが常に主役。

【Color】
・白（#FFFFFF）+ 黒（#0A0A0A）のみが基本。
・オプションで赤（#CC0000）か濃紺（#1a2a4e）の1色のみ追加可。
・グレーは#555555 / #999999 / #CCCCCC の3段階のみ。

【Editorial Layout】
・3カラムまたは5カラムの「本文グリッド」を使う。
・左端にセクション番号/カテゴリラベル（小さく・グレー）を縦置きしてもよい。
・上部に細い水平ルール → 見出し → 本文、というタテの流れを崩さない。
・最下部: ページ番号のみ許可（1pt、左下）。ロゴ禁止。

【禁止】
・カラー写真・鮮やかな色。
・装飾線（二重線・波線・破線は最小限）。
・アイコン・ピクトグラム（テキストで代替）。
・グラデーション。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: Typographic Statement — 白背景、極大見出し（1〜5語）。本文なしか1行のみ。
TYPE B: Text + Data — テキスト3〜4段落＋モノクロ写真or白黒グラフ。情報密度高め。
TYPE C: Comparative Grid — 表or2列比較。テキストと数値のみ。装飾禁止。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・白地に黒テキスト。または黒地に白テキスト。
・Main Headline: 极大（72〜96pt）、太ウェイト or 細ウェイトの二択。
・Subcopy（細小）: 見出し下に水平ルール→1行のみ。
・写真を使う場合: 左半分にモノクロ写真、右に見出し。または中央上部に極小写真。
・日付・号数のような「媒体感」のメタ情報（日本語）を小さく置いてもよい。`,"vintage-craft":`────────────────────────
1) デザインスタイル（Vintage Craft — Letterpress × Washi × Warm Analog）
────────────────────────
【Core Concept】
・温かみのある「手作り感」と「本物の質感」を伝えるスタイル。
・色はアンバー・クリーム・テラコッタ・フォレストグリーンの暖系4色以内。
・テクスチャ: 活版印刷（レタープレス）の微細な圧痕 or 和紙のざらつき感を薄く背景に乗せる。
・写真は「手仕事・食材・職人・自然素材」のクローズアップ。温かい自然光、色温度高め。

【Photo Rules】
・人物: 日本人の職人・農家・料理人。作業中・制作中の横顔・手元が最適。
・物: 食材・道具・素材のマクロ撮影。背景はシンプル（木の机 or 布 or 土）。
・光: 窓からの横光 or 自然光。強いフラッシュ・スタジオ照明感は禁止。
・写真の切り抜き: 楕円マスク or 不規則な手書きマスク（シャープな矩形禁止）。

【Color】
・クリーム: #F5EAD5（背景メイン）。
・アンバー: #C8903A（見出しアクセント・CTAボタン）。
・テラコッタ: #C05A3A（強調・数値）。
・フォレストグリーン: #3D5A35（本文・注記）。
・墨: #2A2418（テキスト）。
・上記5色から3〜4色を選んで使う。鮮やか過ぎる色は追加しない。

【Texture & Craft Elements】
・スタンプ的な幾何学モチーフ（円・菱形・小花）を背景に薄く（15〜25%透明度）散らす。
・罫線はダブルライン（細×細）で枠を作ってよい（ただし1スライド1点まで）。
・手書き風矢印や小さな手書き注記（あくまで"添え"で、主テキストは活版体）。
・活版体（Playfair Display / Cormorant Garamond / 游明朝）を見出しに使う。

【Typography】
・見出し: Playfair Display Bold / Cormorant Garamond Bold。和文は游明朝 Demibold。
・本文: Noto Serif JP Regular / 游明朝 Regular。行間1.8〜2.0。
・サイズジャンプ率: 2〜3倍（モダン系よりやや控えめに）。
・英語タグ: セリフ体で小さく。装飾英語は禁止。

【禁止】
・ネオン・グロー・原色。
・モダンな幾何学的グラフ（棒グラフ・散布図）を多用しない（数値は文字で語る）。
・プラスチック感・デジタル感の素材（3Dレンダ・グラデーションボタン等）。
・ヴィンテージ「風」フィルター（セピア強め・褪色・フィルム傷）は禁止。あくまで「現代の上質なクラフト感」。
・Markdown記号を入れない。

────────────────────────
2) スライドTYPE
────────────────────────
TYPE A: Warm Statement — クリーム背景、アンバーの大見出し、手仕事の写真1点（楕円マスク）。余白50%以上。
TYPE B: Craft Scene — 職人・食材・素材の写真が主役。見出しをオーバーレイ（半透明のクリームバー）。
TYPE C: Story Flow — 「素材→工程→完成品」のような時系列を横流れの写真＋矢印で見せる。

────────────────────────
2.5) 表紙スライド（Slide 01）特別指定
────────────────────────
・背景: クリーム（#F5EAD5）or 職人/素材のフルブリード写真（温かい光）。
・Main Headline: 游明朝 or Playfair Display、アンバー色。温かくて強い命名。
・手仕事素材のクローズアップ写真を右側または下部に配置。
・細いダブルライン枠を見出しの外側に（装飾として1点のみ）。
・最下部は完全に空白。`,"j_dark-editorial":`【世界観・ビジュアルOS】（Dark Financial Editorial / ダーク・フィナンシャル・エディトリアル）
高級金融・建築・知的ブランドのプレゼンに特化した様式。黒を基調とした背景に明度差の強いタイポグラフィ、建築写真とモノクロームを組み合わせ「富と知性の静かな権威」を演出する。WSJやFT（フィナンシャル・タイムズ）のエディトリアルデザインが源流。
Mood: Luxury / Minimal / Editorial / Architectural
想定用途: 投資・金融・建築・高級ブランドのプレゼン
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_dark_financial_editorial.yaml
# Style: Dark Financial Editorial
# Concept: "高級感・知性・モダン建築美を融合した資産形成プレゼンデザイン"

Design Style:
  Name: "Dark Financial Editorial"
  Concept: "高級感・知性・モダン建築美を融合した資産形成プレゼンデザイン"

Canvas:
  Ratio: "16:9"
  Background:
    Primary: "#1B1B1D"
    Secondary: "#E7E7E7"

Mood:
  - "Luxury"
  - "Minimal"
  - "Editorial"
  - "Architectural"

Color Palette:
  Background:
    - "#1B1B1D"
    - "#222224"
    - "#2A2A2C"
  Text:
    Primary: "#E7E7E7"
    Secondary: "#999999"
    Accent: "#FFFFFF"
  Accent:
    Gold: "#C9A84C"
    Warm: "#D4B483"
  Light:
    - "#F5F5F3"
    - "#E0E0DE"

Typography:
  Heading:
    Font: "Editorial Serif or Elegant Sans-Serif"
    Weight: "300-700"
    Tracking: "Wide"
    Style:
      - "High contrast weight"
      - "Architectural spacing"
      - "Luxury editorial"
  SubHeading:
    Font: "Light Sans Serif"
    Weight: "400"
    Tracking: "Wide"
  Body:
    Font: "Refined Sans Serif"
    Weight: "300"
    LineHeight: "1.8"
  Caption:
    Font: "Thin Sans Serif"
    Weight: "300"
    Tracking: "Wide"

Layout:
  Structure:
    - "Dark cinematic composition"
    - "High contrast panels"
    - "Editorial grid"
    - "Architectural proportions"
  Margins:
    Outer: "Generous"
  Alignment:
    - "Left aligned with dramatic contrast"
    - "Vertical rhythm emphasis"

Slide Patterns:
  Cover:
    Layout:
      - "Full dark background"
      - "Large architectural or portrait image"
      - "Minimal gold accent line"
  Section Break:
    Layout:
      - "Dark with white headline"
      - "Thin gold rule"

Effects:
  Shadows: "Subtle dark elevation"
  Gradients: "Dark to darker only"
  Borders: "Thin gold or white lines"

Avoid:
  - "Bright multicolor"
  - "Rounded UI elements"
  - "Playful illustrations"
  - "Heavy drop shadows"

Rendering Keywords:
  - "Dark luxury editorial"
  - "Financial architecture"
  - "Premium investment deck"
  - "Monochrome authority"
  - "Night mode editorial"`,"j_modern-minimal":`【世界観・ビジュアルOS】（Modern Minimal Corporate / モダン・ミニマル・コーポレート）
スイス国際タイポグラフィの現代的継承。建築・人物・プロダクト写真のモノクロームにシアンの一点差し色を組み合わせ、過剰な装飾を徹底的に排除する。清潔で洗練された都会的な知性を演出する、スタートアップから大企業まで汎用性の高い様式。
Mood: Modern / Minimal / Corporate / Architectural / Clean / Urban
想定用途: スタートアップ・テック・コーポレート・都市系プレゼン
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_modern_corporate_blue.yaml
# Style: Modern Minimal Corporate
# Concept: "モノクロ写真とシアンブルーアクセントを使った洗練された都会的プレゼンテーション"

Design Style:
  Name: "Modern Corporate Cyan Minimal"
  Concept: "建築・人物・プロダクト写真を活かしたモダンミニマルデザイン"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#ECECEC"

Mood:
  - "Modern"
  - "Minimal"
  - "Corporate"
  - "Architectural"
  - "Clean"
  - "Professional"
  - "Editorial"
  - "Urban"

Color Palette:
  Background:
    - "#ECECEC"
    - "#F5F5F5"
    - "#FFFFFF"
  Text:
    Primary: "#111111"
    Secondary: "#666666"
  Accent:
    Cyan: "#4FC6DF"
    SkyBlue: "#8EDAE8"
  Dark:
    - "#000000"
    - "#2A2A2A"
    - "#4E4E4E"

Typography:
  Heading:
    Font: "Modern Geometric Sans Serif"
    Weight: "700-900"
    Tracking: "Wide"
    Style:
      - "Uppercase"
      - "Minimal"
      - "Architectural"
      - "Strong hierarchy"
  SubHeading:
    Font: "Light Sans Serif"
    Weight: "500-600"
    Tracking: "Medium"
  Body:
    Font: "Modern Sans Serif"
    Weight: "300-400"
    LineHeight: "1.7"
    Style:
      - "Readable"
      - "Minimal"
      - "Corporate editorial"
  Caption:
    Font: "Thin Sans Serif"
    Weight: "300"
    Tracking: "Wide"

Layout:
  Structure:
    - "Editorial modular grid"
    - "Asymmetrical composition"
    - "Floating content panels"
    - "Image-driven layouts"
    - "Balanced whitespace"
  Margins:
    Outer: "Wide"
  Alignment:
    - "Primarily left aligned"
    - "Layered visual hierarchy"
    - "Clean geometric positioning"

Components:
  Image Style:
    - "Black and white photography"
    - "Modern architecture"
    - "Lifestyle portraits"
    - "Minimal product photography"
    - "Soft monochrome contrast"
  Shapes:
    - "Thin cyan accent bars"
    - "Minimal rectangular panels"
    - "Rounded micro accents"
    - "Clean geometric blocks"
  Cards:
    - "Flat minimal cards"
    - "No shadows"
    - "Soft layering"
    - "Editorial spacing"
  Composition Rules:
    - "Use cyan accents sparingly"
    - "Keep layouts spacious"
    - "Avoid visual clutter"
    - "Mix monochrome and muted color photography"
    - "Use large image areas"
    - "Allow cropped photography"
    - "Prioritize typography and image balance"

Slide Patterns:
  Cover:
    Layout:
      - "Large cinematic monochrome image"
      - "Centered or offset title"
      - "Minimal cyan underline accent"
  Section Break:
    Layout:
      - "Dark background with white typography"
      - "Minimal cyan decorative line"
      - "Editorial composition"
  Team:
    Layout:
      - "Portrait grid layout"
      - "Minimal profile cards"
      - "Wide spacing between elements"
  Process:
    Layout:
      - "Horizontal step structure"
      - "Thin line separators"
      - "Minimal iconography"
  Gallery:
    Layout:
      - "Editorial collage grid"
      - "Alternating white and dark sections"
      - "Large whitespace areas"

Effects:
  Shadows: "None"
  Gradients: "None"
  Borders: "Very thin gray lines only"

Icons:
  Style:
    - "Outline icons"
    - "Minimal"
    - "Thin stroke"
    - "Monochrome with cyan accent"

Avoid:
  - "Heavy gradients"
  - "Glassmorphism"
  - "Bright multicolor palettes"
  - "Rounded bulky UI"
  - "Cute illustration styles"
  - "Complex dashboards"
  - "3D rendering"
  - "Overcrowded text"

Rendering Keywords:
  - "Modern corporate editorial"
  - "Architectural minimal presentation"
  - "Monochrome cyan branding"
  - "Swiss modernism"
  - "Clean urban layout"
  - "Luxury startup deck"
  - "Minimal technology presentation"
  - "Contemporary editorial design"`,"j_dada-collage":`【世界観・ビジュアルOS】（Dada Collage / ダダ・コラージュ）
第一次大戦への反発から生まれたアンチアート運動。チューリッヒのカバレ・ヴォルテールで始まり、新聞・広告を切り貼りするコラージュで「意味の解体と再構築」を試みた。ハンナ・ヘッヒのフォトモンタージュは政治的批評の道具だった。現代のZine・グランジデザイン・ストリートアートの直接の祖先。
Mood: Anarchic / Raw / Energetic / Subversive / Creative
想定用途: クリエイティブ・アート系・反骨・エネルギッシュなプレゼン
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_dada_collage.yaml
# Style: Dada Collage
# Concept: "秩序の破壊から生まれる新しい意味 — コラージュ表現のプレゼンデザイン"

Design Style:
  Name: "Dada Collage"
  Concept: "切り貼りとタイポグラフィの衝突が生む反秩序的エネルギーのプレゼンテーション"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#F5F0E8"

Mood:
  - "Anarchic"
  - "Raw"
  - "Energetic"
  - "Subversive"
  - "Creative"
  - "Anti-corporate"

Color Palette:
  Background:
    - "#F5F0E8"
    - "#EDE8D8"
    - "Newsprint texture"
  Text:
    Primary: "#1A1A1A"
    Secondary: "#333333"
  Accent:
    Red: "#FF3D00"
    Yellow: "#FFE600"
    Blue: "#1A237E"
  Texture:
    - "Torn paper edges"
    - "Aged newsprint"
    - "Rubber stamp ink"

Typography:
  Heading:
    Font: "Mixed typefaces, varied sources"
    Weight: "Bold and Light mixed"
    Style:
      - "Intentionally mismatched"
      - "Cut-out letter effect"
      - "Ransom note aesthetic"
  SubHeading:
    Font: "Typewriter or newspaper print"
    Weight: "Regular"
  Body:
    Font: "Readable sans-serif"
    Weight: "400"
    LineHeight: "1.6"
  Caption:
    Font: "Stamped or stencil feel"
    Weight: "Bold"
    Tracking: "Wide"

Layout:
  Structure:
    - "Anti-grid (intentional chaos)"
    - "Rotated elements (-5 to +8 degrees)"
    - "Overlapping layers"
    - "Unpredictable composition"
  Alignment:
    - "Intentionally inconsistent"
    - "Diagonal tension"
    - "Layered depth"

Components:
  Image Style:
    - "Cut-out photographs"
    - "Mismatched scales"
    - "Black and white mixed with color"
    - "Vintage or archival imagery"
    - "Torn edge treatment"
  Textures:
    - "Torn paper edges"
    - "Newsprint background"
    - "Rubber stamp marks"
    - "Ink splatter"
    - "Tape and glue marks"
  Shapes:
    - "Torn paper fragments"
    - "Geometric cutouts"
    - "Scattered elements"
  Composition Rules:
    - "Embrace intentional disorder"
    - "Layer without hierarchy"
    - "Mix typographic scales radically"
    - "Let elements bleed off edges"
    - "Use rotation as an expressive tool"

Slide Patterns:
  Cover:
    Layout:
      - "Collaged headline from mixed sources"
      - "Overlapping photomontage"
      - "Energetic diagonal composition"
  Content:
    Layout:
      - "Cut-out text blocks at angles"
      - "Stamped emphasis marks"
      - "Torn border treatments"

Effects:
  Shadows: "None (paper is flat)"
  Gradients: "None"
  Borders: "Torn or stamped edges"
  Textures: "Essential — paper grain, ink, newsprint"

Avoid:
  - "Perfect alignment"
  - "Smooth gradients"
  - "Corporate polish"
  - "Single consistent typeface"
  - "Clean digital look"

Rendering Keywords:
  - "Dada photomontage"
  - "Collage typography"
  - "Anti-design aesthetic"
  - "Raw newsprint energy"
  - "Cut-and-paste rebellion"
  - "Punk zine aesthetic"`,"j_neo-mondrian":`【世界観・ビジュアルOS】（Neo Mondrian / ネオ・モンドリアン）
ピエト・モンドリアンが率いた「デ・ステイル」運動の現代的解釈。赤・青・黄の三原色と黒い格子線だけで構成された「コンポジション」は、視覚的純粋さの究極形。ファッション（イヴ・サンローラン1965年コレクション）からUI設計まで繰り返し参照される永遠の文法。
Mood: Pure / Bold / Structural / Timeless
想定用途: アート・建築・ファッション・前衛的ブランドプレゼン
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_neo_mondrian.yaml
# Style: Neo Mondrian
# Concept: "垂直と水平、三原色だけで構成される純粋抽象のプレゼンデザイン"

Design Style:
  Name: "Neo Mondrian"
  Concept: "色の純粋さと直線のみで宇宙の秩序を表現するデ・ステイル継承デザイン"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#FAFAFA"

Mood:
  - "Pure"
  - "Bold"
  - "Structural"
  - "Timeless"
  - "Primary"

Color Palette:
  Background:
    - "#FAFAFA"
    - "#FFFFFF"
  Text:
    Primary: "#1A1A1A"
    Secondary: "#444444"
  Accent:
    Red: "#E63946"
    Blue: "#1D3557"
    Yellow: "#F4D03F"
  Structure:
    Border: "#1A1A1A"
    LineWeight: "3-6px solid black"

Typography:
  Heading:
    Font: "Bold Geometric Sans-Serif"
    Weight: "800-900"
    Style:
      - "Strong contrast with structural elements"
      - "Anchored within grid cells"
  SubHeading:
    Font: "Medium Sans-Serif"
    Weight: "500"
  Body:
    Font: "Clean Neutral Sans-Serif"
    Weight: "400"
    LineHeight: "1.6"

Layout:
  Structure:
    - "Rigid orthogonal grid only"
    - "Thick black border lines"
    - "Asymmetric colored rectangles"
    - "No diagonal elements"
  Alignment:
    - "Strict horizontal and vertical only"
    - "Elements snap to grid"

Components:
  Shapes:
    - "Rectangles only"
    - "Colored blocks (red, blue, yellow)"
    - "White and black spaces"
    - "No curves"
  Composition Rules:
    - "Only horizontal and vertical lines"
    - "Rectangles fill colored areas"
    - "Asymmetric but balanced"
    - "Text lives within grid cells"
    - "Never more than 3 colors plus black and white"

Slide Patterns:
  Cover:
    Layout:
      - "Large grid composition as hero"
      - "Title within a white cell"
      - "Primary color blocks frame the composition"
  Content:
    Layout:
      - "Grid divides information zones"
      - "Color coding by section"

Effects:
  Shadows: "None"
  Gradients: "Never"
  Borders: "3-6px solid #1A1A1A — structural only"

Avoid:
  - "Curves or rounded corners"
  - "Gradients"
  - "Secondary colors (orange, green, purple)"
  - "Diagonal lines"
  - "Decorative typography"
  - "More than 3 accent colors"

Rendering Keywords:
  - "Mondrian grid composition"
  - "De Stijl primary colors"
  - "Neoplastic structure"
  - "Orthogonal perfection"
  - "Primary color blocking"`,"j_japanese-ma":`【世界観・ビジュアルOS】（Ma — 間 / 間（ま）の美学）
日本の美学概念「間（ま）」。物と物の間の空間・時間的な間合いを意味し、その「空白」が意味を生む。俳句の季語後の沈黙、生け花の余白、能の間—すべてに宿る。デザインでは「足すことより引くこと」として表れ、MUJIや原研哉の作品に体現される。「余白は設計された無音である」。
Mood: Serene / Minimal / Contemplative / Profound / Zen
想定用途: 和系ブランド・瞑想・ウェルネス・禅・高級感の演出
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_japanese_ma.yaml
# Style: Ma — Japanese Negative Space
# Concept: "何もない空間に意味が宿る — 間の美学によるプレゼンデザイン"

Design Style:
  Name: "Ma Japanese Minimal"
  Concept: "余白こそが語る — 引き算の美学と間の思想に基づくプレゼンテーション"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#F9F7F2"

Mood:
  - "Serene"
  - "Minimal"
  - "Contemplative"
  - "Profound"
  - "Zen"
  - "Restrained"

Color Palette:
  Background:
    - "#F9F7F2"
    - "#F2EFE8"
    - "#FFFFFF"
  Text:
    Primary: "#2C2C2C"
    Secondary: "#7A7A7A"
    Light: "#B0A898"
  Accent:
    Sage: "#8B9D77"
    Clay: "#C4956A"
    Ink: "#1A1A1A"
  Atmospheric:
    - "Washi paper tone"
    - "Ink wash gray"

Typography:
  Heading:
    Font: "Thin weight sans-serif or Mincho"
    Weight: "200-300"
    Tracking: "Very wide"
    Style:
      - "Restrained size"
      - "Breathe with surrounding space"
      - "Japanese or bilingual acceptable"
  SubHeading:
    Font: "Light sans-serif"
    Weight: "300"
    Tracking: "Wide"
  Body:
    Font: "Light weight"
    Weight: "300"
    LineHeight: "2.0"
    Style:
      - "Very sparse"
      - "Short lines"
  Caption:
    Font: "Ultra thin"
    Weight: "200"
    Tracking: "Very wide"

Layout:
  Structure:
    - "60% or more empty space"
    - "Single focal point per slide"
    - "Asymmetric organic placement"
    - "Content breathes"
  Margins:
    Outer: "Very generous"
  Alignment:
    - "Asymmetric"
    - "Off-center"
    - "Follow natural eye flow"

Components:
  Image Style:
    - "Single, understated photograph"
    - "Nature, stone, water, fabric"
    - "Muted natural tones"
    - "Centered or minimally placed"
  Shapes:
    - "Single brushstroke line"
    - "Subtle circle"
    - "Washi texture"
    - "Or nothing at all"
  Composition Rules:
    - "Remove until only the essential remains"
    - "One idea per slide"
    - "Let silence carry meaning"
    - "Resist the urge to fill space"

Slide Patterns:
  Cover:
    Layout:
      - "Single restrained element"
      - "Title as the only voice"
      - "Space as welcome"
  Content:
    Layout:
      - "One concept, one breath"
      - "Generous margins"
      - "Text as texture, not block"

Effects:
  Shadows: "None or faint"
  Gradients: "None"
  Borders: "Single thin ink line or none"
  Textures: "Washi paper, subtle grain"

Avoid:
  - "Visual clutter"
  - "Multiple competing elements"
  - "Bright saturated colors"
  - "Heavy typography"
  - "Busy backgrounds"
  - "Decorative ornaments"

Rendering Keywords:
  - "Japanese negative space"
  - "Ma aesthetic"
  - "Wabi-sabi minimalism"
  - "Zen presentation"
  - "MUJI design philosophy"
  - "Ink wash restraint"`,"j_neo-brutalism":`【世界観・ビジュアルOS】（Neo-Brutalism / ネオ・ブルータリズム）
建築のブルータリズム（コンクリート打ちっぱなし）からインスパイアされたWebデザイン潮流。太い黒ボーダー・オフセットシャドウ・原色・粗いグリッドを特徴とし、過度に「整えられた」UXへの反発として台頭。Figma・Linear・Gumroadなどスタートアップ界隈で広まり、今や独立したデザイン言語として確立。
Mood: Raw / Energetic / Anti-corporate / Direct / Bold
想定用途: スタートアップ・インディーテック・個人ブランド・エネルギッシュなプレゼン
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_neo_brutalism.yaml
# Style: Neo-Brutalism
# Concept: "太い線と原色で反洗練の美学を体現するプレゼンデザイン"

Design Style:
  Name: "Neo-Brutalism"
  Concept: "ポリッシュを拒絶する — 生のエネルギーと直接性のプレゼンテーション"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#FFFFFF"

Mood:
  - "Raw"
  - "Energetic"
  - "Anti-corporate"
  - "Direct"
  - "Bold"
  - "Confident"

Color Palette:
  Background:
    - "#FFFFFF"
    - "#FFE500"
    - "#F5F5F5"
  Text:
    Primary: "#000000"
    Secondary: "#333333"
  Accent:
    Yellow: "#FFE500"
    Red: "#FF3D00"
    Blue: "#0033FF"
    Green: "#00CC44"
  Border: "#000000"

Typography:
  Heading:
    Font: "Heavy weight sans-serif"
    Weight: "800-900"
    Style:
      - "Large, dominant"
      - "Left aligned"
      - "No apologies"
  SubHeading:
    Font: "Bold sans-serif"
    Weight: "700"
  Body:
    Font: "Medium sans-serif"
    Weight: "400-500"
    LineHeight: "1.5"
  Caption:
    Font: "Monospace or bold sans-serif"
    Weight: "500"
    Tracking: "Normal"

Layout:
  Structure:
    - "Loose but intentional grid"
    - "Heavy borders everywhere"
    - "Offset shadows on key elements"
    - "Visible structure"
  Margins:
    Outer: "Normal to tight"
  Alignment:
    - "Primarily left"
    - "Bold visual anchors"

Components:
  Shapes:
    - "Rectangles with 3-4px solid black border"
    - "Offset shadow (4-6px, solid black)"
    - "Diagonal stripe patterns"
    - "Large filled color blocks"
  Image Style:
    - "Photography with thick border frame"
    - "High contrast"
    - "Direct, unposed"
  Cards:
    - "Thick black border"
    - "Offset shadow bottom-right"
    - "Yellow or color fill"
  Composition Rules:
    - "Every key element gets a thick border"
    - "Offset shadows are not optional"
    - "Color fills with black borders"
    - "Hand-drawn arrows welcome"
    - "Rubber stamp accents acceptable"

Slide Patterns:
  Cover:
    Layout:
      - "Large bold headline"
      - "Color block behind title"
      - "Thick border frame"
  Content:
    Layout:
      - "Bordered cards for each point"
      - "Yellow highlight for emphasis"
      - "Big text, minimal decoration"

Effects:
  Shadows: "4-6px solid black offset (bottom-right)"
  Gradients: "None"
  Borders: "3-4px solid #000000 on all interactive elements"

Avoid:
  - "Smooth gradients"
  - "Glassmorphism"
  - "Soft drop shadows"
  - "Rounded corners (>4px)"
  - "Corporate politeness"
  - "Subtle color palettes"

Rendering Keywords:
  - "Neo-brutalist web design"
  - "Thick black borders"
  - "Offset shadow cards"
  - "Raw startup energy"
  - "Anti-polish aesthetic"
  - "Bold direct communication"`,j_memphis:`【世界観・ビジュアルOS】（Memphis / メンフィス）
1981年、エットレ・ソットサスが率いたミラノのデザイングループ。ボブ・ディランの「Memphis Blues Again」が流れる中で命名された。ゼブラ柄・水玉・ジグザグとネオンカラーを組み合わせ、バウハウス的な機能主義を笑い飛ばした。80年代ポップカルチャーの象徴として、VaporwaveやY2Kリバイバルとともに再評価されている。
Mood: Playful / Maximalist / Anti-serious / Joyful / Retro
想定用途: ファッション・エンタメ・ポップカルチャー・Y2Kリバイバル系
このスタイルは以下の仕様（YAML）に厳密に従って生成する。スタイル名だけで終わらせず、Color / Typography / Layout / Avoid などの各項目を必ず展開すること。
# presentation_style_memphis.yaml
# Style: Memphis
# Concept: "ジグザグ・水玉・ネオンカラーで機能主義を笑い飛ばすポストモダンデザイン"

Design Style:
  Name: "Memphis Pop"
  Concept: "機能主義への陽気な反乱 — 80年代ミラノのカーニバル的プレゼンテーション"

Canvas:
  Ratio: "16:9"
  Background:
    Base: "#FAFAFA"

Mood:
  - "Playful"
  - "Maximalist"
  - "Anti-serious"
  - "Joyful"
  - "Retro"
  - "Carnival"

Color Palette:
  Background:
    - "#FAFAFA"
    - "#FFE5F0"
    - "#FFF9E6"
  Text:
    Primary: "#1A1A1A"
    Secondary: "#444444"
  Accent:
    Pink: "#FF6B9D"
    Yellow: "#FFD700"
    Teal: "#00CED1"
    Orange: "#FF6B35"
    Lime: "#95E06C"
  Border: "#1A1A1A"

Typography:
  Heading:
    Font: "Bold decorative sans-serif"
    Weight: "700-900"
    Style:
      - "Large and unapologetic"
      - "Mixed with pattern elements"
  SubHeading:
    Font: "Playful rounded sans-serif"
    Weight: "600"
  Body:
    Font: "Readable sans-serif"
    Weight: "400"
    LineHeight: "1.6"

Layout:
  Structure:
    - "Irregular playful grid"
    - "Welcome overlaps"
    - "Thick black borders"
    - "Pattern-filled backgrounds"
  Alignment:
    - "Varied and intentionally inconsistent"
    - "Pattern elements fill gaps"

Components:
  Patterns:
    - "Zigzag lines"
    - "Polka dots"
    - "Squiggles"
    - "Diagonal stripes"
    - "Checkerboard"
  Shapes:
    - "Stars"
    - "Lightning bolts"
    - "Squiggly lines"
    - "Organic blobs"
    - "Geometric mixed with organic"
  Composition Rules:
    - "More is more"
    - "Pattern as decoration and structure"
    - "Joyful color collision"
    - "Thick black outlines on shapes"
    - "Let elements celebrate each other"

Slide Patterns:
  Cover:
    Layout:
      - "Pattern-filled background"
      - "Bold outlined title"
      - "Decorative shape cluster"
  Content:
    Layout:
      - "Color-coded sections"
      - "Pattern borders"
      - "Icon-rich layout"

Effects:
  Shadows: "Thick offset (Memphis style)"
  Gradients: "None (flat colors only)"
  Borders: "Thick black outlines on all shapes"
  Patterns: "Essential — fills all empty spaces"

Avoid:
  - "Minimalism"
  - "Neutral color palette"
  - "Serious corporate tone"
  - "Empty white space"
  - "Single typeface"

Rendering Keywords:
  - "Memphis design group"
  - "80s postmodern pattern"
  - "Pop color maximalism"
  - "Anti-grid playful layout"
  - "Carnival decoration"
  - "Retro future fun"`},G={"doodle-collage":`【世界観・ビジュアルOS】（Doodle Collage — ヴィンテージ雑誌エディトリアル × 手描き落書きコラージュ）
トーン
北極星は「ヴィンテージ雑誌の誌面を切り貼りしたノート」。モノクロ写真を大胆に切り抜き、手描きの矢印・囲み・アンダーラインを添えて、感性的で温かく個性のある世界観をつくる。エディトリアルでアーティスティック、遊び心があり、人間味・郷愁・現代性が同居する。ファッション、ブランドストーリー、心理学、カルチャー、教育、ウェルビーイング、ライフスタイル提案、クリエイティブワークショップに似合う“感情に届く”プレゼン。情緒で語り、煽らない。

写真の方針（最重要）
主役はモノクロのポートレート写真（高コントラストのグレースケール・ソフトでマットな仕上がり・ごく微量のグレイン）。被写体は感情の表れる表情／人と人の関わり／ライフスタイルの肖像／ファッション誌的なポーズ／多様な人々。
写真は必ず背景を切り抜いたカットアウト（矩形貼り付け禁止）。大胆な部分クロップ（顔・手・しぐさを強調）を必ず混ぜる。輪郭は整え、髪や指が崩れる切り抜きは禁止。フルカラー写真・写実カラー画像は使わない（モノクロ固定）。

コラージュ方針
モノクロ切り抜き写真＋マスタードの幾何ブロック（矩形）＋重なり合う長方形でレイヤーを作る。非対称バランス、雑誌の“切り貼り”感、意図的なトリミング、たっぷりの余白（ネガティブスペース）を強調。影・ドロップシャドウ・枠線・グラデーションは禁止（フラットに紙へ貼った質感）。地は柔らかい紙のグレイン。

【ドゥードル（手描き落書き）】
手描きマーカー風（中程度の太さ）でコーラル色（#E56A67）。要素＝矢印／ジグザグ線／走り書き／ループ／アンダーライン／星バースト／円／三角／フリーフォームの囲み。
落書きは“控えめに・タイポの脇役として”使う（主役はあくまで写真とタイポ）。キーワードを丸で囲む、名前にアンダーライン、矢印で視線誘導——意味のある所だけに。多用してうるさくしない。

【ハイライト（マーカー）】
マーカーで引いた蛍光ハイライト風、色はマスタード（#DDBE63）。キーワードの背後／名前の下／サブタイトルの背後／セクションタイトルの背後に敷く。可読性を最優先し、色面はうるさくしない。

【Color】
背景はウォームなクリーム（#F2EEE7）。本文テキストは #111111（補助 #444444）。アクセントは2色のみ＝コーラル #E56A67（ドゥードル）とマスタード #DDBE63（ハイライト/幾何ブロック）。コーポレート的な青系パレットは禁止。色を増やさず、モノクロ写真＋クリーム地＋コーラル＋マスタードで成立させる。

【タイポグラフィ】
見出しはエレガントなエディトリアル・セリフ（明朝/Didone寄りの上品なセリフ・太め700）で、オーバーサイズに大きく。本文はクリーンなヒューマニスト・サンセリフ（細め400）で最小限。ハイライト語はエディトリアル・セリフ600。ジャンプ率を強く、見出し＞リード＞本文の差を明確に。本文は最大2行。

【レイアウト】
12カラム・広いマージン・柔軟なグリッド。大きなポートレート写真＋オーバーサイズのセリフ見出し＋意図的な非対称＋強い焦点ヒエラルキー＋ゆとりある構成。視覚バランスの目安＝余白50%／タイポ25%／写真25%。端まで詰め込まず、洗練のために余白を活かす。

【コピー設計】
1スライド1メッセージ。感情的で簡潔に。情緒に届く言い切りを1つ、最後は視聴者の次の一手へやわらかく接続。例文は引用せず資料から新規生成。

【スライド構成：3タイプ】（必ず混ぜる・同じTYPEを3枚以上続けない）
TYPE A：Statement（オーバーサイズ・ワード）
クリーム地に巨大なセリフの一語/一文を中央〜左に。下に短い補足、要所にコーラルの強調マーク（丸/アンダーライン/星バースト）を1〜2点だけ。写真は0〜1点の“点”、余白を大きく。
TYPE B：Portrait Collage（肖像コラージュ主役）
大胆にクロップしたモノクロ肖像のカットアウトを主役に、マスタードの幾何ブロックと重なる長方形でレイヤー。見出しはセリフで大きく、キーワードの背後にマスタードのハイライト、名前にアンダーライン。コーラルの矢印/囲みで視線誘導（控えめに）。本文は最小。
TYPE C：Agenda / Comparison（番号・対比）
2カラム構成や大きなセクション番号。項目はセリフのタイトル＋短い説明、タイトル背後にマスタードのハイライト。比較は中央のビジュアルアンカー＋手描きのカーブ矢印（コーラル）で関係を示す。図はシンプルに、複雑なインフォグラフィック・密な表は避ける。

【表紙スライドの特別指定】
左に大きなセリフのタイトル、右にモノクロのポートレート（大胆クロップのカットアウト）という非対称構図。サブタイトルはマスタードのマーカーハイライトを敷く。装飾の手描きドゥードル（コーラルの矢印/円/星バースト）を要所に少しだけ。背景はクリーム #F2EEE7。Main Headline（情緒に届く言い切り1つ・セリフ最大サイズ）＋Subcopy（1行・何が変わるかを約束しGoalへ）。影・枠線なし、余白たっぷり、わずかな不完全さ（手作業の温度）を許容。

【FINAL CHECK】写真がモノクロ高コントラストのカットアウトで大胆にクロップされているか。見出しがエレガントなセリフでオーバーサイズか。色がクリーム＋モノクロ写真＋コーラル＋マスタードに収まっているか（青系コーポレートになっていないか）。ドゥードルがタイポの脇役に留まりうるさくないか。余白がたっぷり（目安50%）で“切り貼りノート”の温度が出ているか。

【禁止】
コーポレート的な青系パレット、複雑なインフォグラフィック、重い影・ドロップシャドウ・枠線・グラデーション、写実カラー写真（モノクロ固定）、技術的な図解・密な表、過度なアニメーション演出の示唆、堅い formal なビジネスレイアウト、落書きの使いすぎ（タイポを邪魔する量）、画像への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"editorial-infographic":`【世界観・ビジュアルOS】（Editorial Infographic — 北欧ミニマル × 雑誌エディトリアル × ロングシャドウ図解）
トーン
北欧ミニマルデザインと雑誌のエディトリアルレイアウトを融合した、軽やかで親しみやすいインフォグラフィック。大胆なタイポグラフィ、柔らかなパステル、フラットアイコン、ロングドロップシャドウを組み合わせ、情報を楽しく直感的に理解させる。教育資料・ワークショップ・スタートアップ提案・マーケ資料・社内報に似合う、カジュアルかつ洗練された世界観。フレッシュで親しみやすく、でも品がある。

イラスト/アイコンの方針（最重要）
イラストはミニマル・フラット・エディトリアル＝フラットベクター、丸みのあるジオメトリ、細いアウトライン、最小限のディテール。そして必ず「ロングシャドウ（long shadow）」を右下方向・控えめな不透明度で一貫して付ける（このスタイルの指紋）。アイコンはアウトラインのピクトグラム＝細いストローク・丸い角・親しみやすい・視覚的ウェイト統一・シンプルな象徴。写実的レンダリングや重い装飾は使わない。デバイス（モニター/タブレット/ノートPC）・封筒・地球とネットワーク・眼鏡などのモチーフをフラットに。

【Color】
背景はオフホワイト（#F7F7F5）。文字は #1E1F23（補助 #9EA5AC／淡 #C8CDD2、本文 #666C73）。アクセントはパステル3色まで＝ミント #74D7D3／ピンク #F27EB2／スレート #547283 を“控えめに強調だけ”に使う。ニュートラルのグレー（#DADDE2／#EEF0F2）で罫線や面を作る。グラデーション・テクスチャは禁止（フラット）。データ強調は色のコントラストで。

【タイポグラフィ】
見出しはコンデンス（横幅の狭い）サンセリフ・800・大文字・字間 -0.03em でギュッと締めて大胆に。サブ見出しはサンセリフ600・大文字・淡グレー #C3C8CC。本文はサンセリフ400・#666C73・行間1.6。数字はコンデンス700で見せる。コンデンス大文字の見出しでヒエラルキーを立てるのが核。

【レイアウト】
雑誌の3カラム・エディトリアルなインフォグラフィック構成。独立したコンテンツモジュールを縦のストーリーで流す。ワイドなガター、大きな外マージン、たっぷりの余白（モジュール間を広く空ける）。要素はフラットで軽量、グリッドに整列。フローティングなエディトリアルブロック（背景透明・小さな角丸・枠なし）でカード化。

【コンポーネント】
チャート＝ドーナツ/リング/パーセント円/円グラフ/横棒比較/ミニダッシュボード/タイムライン/バブル比較。図解＝縦タイムライン/チェックリスト/比較表/オプションカード/重なる円ダイアグラム/プロセス矢印/統計コールアウト/情報パネル。チャートの軸は細く #DADDE2、ラベルは小さく #666C73、グリッド線は最小・#EEF0F2、アクセントは最大3色。比較表はヘッダー背景スレート #547283＋白文字、セルは白＋罫線 #EEF0F2。

【コピー設計】
1スライド1メッセージ。素早くスキャンでき直感的に理解できることを最優先。短い見出し＋最小限の説明＋数字やチャートで語る。例文は引用せず資料から新規生成。

【スライド構成：3タイプ】（必ず混ぜる・同じTYPEを3枚以上続けない）
TYPE A：Editorial Cover / Statement
オフホワイト地に巨大なコンデンス大文字見出し。フラットアイコン（ロングシャドウ付き）を1〜2点、パステルの小さな面を添える。余白大きく。
TYPE B：Infographic Modules（3カラム）
雑誌の3カラムに独立モジュール（チャート/統計コールアウト/情報パネル）を並べる。ドーナツ/リング/パーセント円を主役に、アイコンはロングシャドウで統一。細い区切り線・破線ガイド・ミニマルなコネクタで関係を示す。
TYPE C：Comparison / Timeline
比較表（スレートのヘッダー）or 縦タイムライン or プロセス矢印。データ強調は色コントラストで一点、アクセントは3色以内。

【FINAL CHECK】アイコン/イラストにロングシャドウ（右下・控えめ）が一貫して付いているか。見出しがコンデンス大文字・字間タイトで大胆か。パステル（ミント/ピンク/スレート）が3色以内の控えめ強調か。3カラムのモジュールがたっぷりの余白で分かれているか。チャート/アイコン/図が統一されたビジュアル言語か。フラットで軽量、写実レンダや重装飾になっていないか。

【禁止】
写実的レンダリング、重い装飾・重い影（ロングシャドウは可だが控えめ）、グラデーション、テクスチャ、パステルの使いすぎ（3色以内・控えめ強調）、3Dイラスト、要素の詰め込み（余白を広く）、バラバラなアイコン言語、画像への文字焼き込み、四隅の内部っぽい英語ラベル飾り、Markdown記号（# * **）。`,"soft-brand-system":`【世界観・ビジュアルOS】（Soft Neo Brand Guidelines — パステル × ミニマルグリッドのブランドガイドライン）
トーン
北極星は現代的で洗練されたブランドガイドライン（ブランドブック）の誌面。パステルカラーとミニマルなグリッドで、静かでプレミアム、カーム（穏やか）な印象。エディトリアルでクリーン、装飾を排し、タイポグラフィと整列で語る。化粧品・ファッション・スキンケア系ブランドのプロダクト提示に似合う。

写真/画像の方針
ミニマルなライフスタイル写真／コスメ・ブランドのビジュアル／ニュートラルなプロダクト写真。柔らかな自然光、クリーンなモノクロ（無彩色）背景、最小限のオブジェ構成。ファッション・スキンケア着想のクリーンな質感。写真は必ず整然とした矩形フレームの中に配置する（円形ではなく、端正な長方形）。

【Color】
文字は #222222（補助 #666666、反転時 #FFFFFF）。アクセントはパステルを“ソフトに少しだけ”＝ミント #78E7D5／ソフトラベンダー #DCD2FF、引き締めにチャコール #3B3B3B、面にペールグレー #EEF1F3。ニュートラル（#F4F4F4／#D8D8D8／罫線 #CFCFCF）で構造を作る。パステルは小面積のアクセント/カラーブロックに留め、白の余白を強く保つ。グラデーション・光沢は禁止（フラット）。

【タイポグラフィ】
見出しはモダンな幾何学サンセリフ（Bold）で大きくクリーンに、字間を広めに取り強い余白感。ディスプレイは横幅の広いサンセリフ（ExtraBold）でオーバーサイズに大胆クロップ（画面外へ抜ける見せ方）。本文はミニマルなグロテスク（Regular）で小さく構造的。キャプションはコンデンスのサンセリフ（Medium）で、端や隅に極小のナビゲーション/注釈ラベル。

【レイアウト】
12カラムのクリーンなモジュラーグリッド。広いマージン、厳密な幾何整列、開放的でバランスの取れたスペーシング。フラットな幾何構造、大きなタイポグラフィ領域、構造化された情報ヒエラルキー。すべての要素をグリッド線へ正確に整列。端/隅に小さなナビ文字を置いてよい。要素を詰め込まず、強い余白を全体に維持。

【コピー設計】
1スライド1メッセージ。短くクリーンに、ブランドの語彙で。本文は最小限、見出しとタイポで語る。例文は引用せず資料から新規生成。

【スライド構成：タイプ別】（同じタイプを3枚以上続けない）
表紙（Cover）：巨大な大胆クロップのタイポグラフィ＋中央のロゴ。余白を大きく。
ミッション：最小限のテキスト＋プロダクト写真の構成。
ブランドシステム：グリッドベースのロゴ／アイデンティティ提示。
カラーパレット：フラットなパステルのカラー配分ブロック（小さな%ラベル付き）。
タイポグラフィ：フォントの階層ショーケース（構造化された見せ方）。
ユーザビリティ/使用例：モジュラーな画像レイアウトの最小例。
ソーシャル/メディア：クリーンなデバイスモックアップ提示。

【グラフィック要素】
細い区切り線、ミニマルなアイコン、フラットなカラーブロック、小さな%ラベル、タイポグラフィのショーケース、ロゴのバリエーション、構造化されたパレット節。装飾は最小限。

【FINAL CHECK】グリッドに正確整列したモジュラーな構成か。パステル（ミント/ラベンダー）が小面積のソフトアクセントに留まり白の余白が強いか。タイポが主役でディスプレイのオーバーサイズ・クロップが効いているか。写真が端正な矩形フレームに収まっているか。グラデ/光沢/3Dがなくフラットでカーム・プレミアムか。

【禁止】
グラデーション、光沢（glossy）エフェクト、複雑な3Dイラスト、円形主体のレイアウト（矩形フレーム基本）、パステルの過剰使用（ソフトアクセントのみ）、装飾過多、余白の詰め込み、グリッド無視の自由配置、画像への文字焼き込み、四隅の内部っぽい英語ラベル飾り、Markdown記号（# * **）。`,"neo-circle-editorial":`【世界観・ビジュアルOS】（Neo Circle Editorial — 大胆な赤い円形 × モノクロ写真のアートディレクション）
トーン
北極星はモダンアート・ポスターの構図。大胆な赤い円形グラフィックとモノクロ写真を組み合わせた、アートディレクション性の高いミニマル・エディトリアル。ファッション誌から着想した、プレミアムで創造的なクリエイティブエージェントの空気。ミニマルだがドラマティック、高コントラストで一撃の視覚インパクト。

写真/画像の方針（最重要）
写真はモノクロで統一（高コントラストのポートレート、創造的なオフィス/ライフスタイルのシーン）。円形マスクでトリミングするのが基本＝丸い写真フレーム、重なる写真の円、クロップしたエディトリアル写真。フルカラー写真は使わない（モノクロ固定で統一感）。

【シェイプ言語（円形が主役）】
円形モチーフをデザイン全体の中心に置く。大きな赤い円、同心円（concentric rings）、輪郭線だけの円形フレーム、浮遊する小さなドット、細い斜線（diagonal lines）、半円のグラフィック要素。装飾は赤の細い斜線／小さな円ドット／ミニマルなアイコン／エディトリアルの区切り線／淡いグレースケールのリングに留め、最小限に。

【Color】
背景はホワイト（#FFFFFF）、またはダーク（#0A0A0A）、補助にソフトグレー（#EFEFEF）。1スライド1基調。文字は #111111（補助 #666666、反転時 #FFFFFF）。主役アクセントは赤＝ブライトレッド #FF1A1A／ディープレッド #D60000 を大胆に使う。黒とグレースケール（#D9D9D9〜#8C8C8C）で階調を作る。赤・黒・グレー以外の色は増やさない。

【タイポグラフィ】
見出しは太い幾何学サンセリフ（Bold Geometric Sans・700〜900）で大きくエディトリアルに。短く太い見出しで、キーワードを黒と赤で混ぜる（fashion magazine的）。本文はモダンサンセリフ（400〜500）で小さく可読、エディトリアルなゆとりの行間。数字はコンデンス・サンセリフ（Condensed・700）で見せる。ジャンプ率を強く。

【レイアウト】
広い余白＋強い非対称＋円形コンポジション。エディトリアル誌のバランス、ミニマルだがドラマティック、高コントラスト構図。2〜4カラムの柔軟グリッド、広いマージン、基本は左揃え。ヘッダーは小さな中央ロゴ/タイトル＋最小ナビ、フッターはミニマルなページ番号・極小エディトリアルラベル（うるさくしない）。

【コピー設計】
1スライド1メッセージ。短く太い言い切り、キーワードを赤で立てる。本文は最小限。最後は視聴者の次の一手へ。例文は引用せず資料から新規生成。

【スライド構成：タイプ別】（同じタイプを3枚以上続けない）
表紙（Cover）：全面モノクロ写真の上に大きな同心円の赤いオーバーレイ。太い白タイトル＋最小サブタイトル。ドラマティックな視覚ヒエラルキー、ハイエンドなクリエイティブエージェントの空気。
イントロ/ヒストリー：左に大きな見出し、円形写真コンポジション、赤の細い斜線アクセント、最小限の補足。
ミッション/ビジョン：背景ダーク #0A0A0A＋大きな赤い同心円＋白タイポ＋赤のキーワードハイライト。シネマティックでプレミアムなブランディング。
チーム/プロフィール：円形フレームに人物、赤い細いアウトラインリング、最小プロフィール、均等なスペーシング。
サービス/ポートフォリオ：アイコンの円形サービスカード or 重なる写真の円。赤と黒のコントラスト、接続する細線、最小キャプション。
チャート：シンプルな図解、赤・黒・グレーのみ、太い円形グラフ、最小グリッド線、エディトリアルなデータ可視化。

【FINAL CHECK】円形モチーフ（赤い円・同心円・円形マスク写真）が画面の中心にあるか。写真がモノクロ高コントラストで統一されているか。色が赤・黒・白・グレーに収まり赤が主役か。余白が広くミニマルだがドラマティックか。モダンアートポスターのような構図か。見出しにキーワードの赤×黒の混在があるか。

【禁止】
フルカラー写真（モノクロ固定）、赤・黒・グレー以外の多色化、円形モチーフの欠如（円が主役）、装飾過多・要素の詰め込み、重い影・グラデーション、矩形ベタ貼り写真（円形マスク基本）、中央揃えで小さくまとめた弱い構図、画像への文字焼き込み、四隅の内部っぽい英語ラベル飾り、Markdown記号（# * **）。`,"tech-infographic":`【世界観・ビジュアルOS】（Clean Tech Infographic — 白×ブルー×円形のミニマル図解）
トーン
IT/サービス紹介向けの、クリーンでモダンなテック・プレゼン。文字を減らし図解を主役に、白の余白とブルーの円形で「わかりやすさ」と「先進性」を両立する。プロフェッショナルで動きがあり、装飾過多にしない。SaaSのサービス紹介・プロダクト説明・プロセス図解に最適。

写真/画像の方針
写真は必ず円形、または有機的な丸いブロブ（blob）形でトリミングする。デバイスモックアップのフレームに収めてもよい。ハイコントラストのテック写真／青と赤のライティングの写真／クリーンなプロダクトモックアップを使う。矩形のベタ貼りは避け、丸い形で抜くのが基本。

【Color】
背景は基本ホワイト（#FFFFFF）。淡いソフトブルー面（#EAF4FF）を補助に使ってよい。文字は #111111（補助 #555555、反転時 #FFFFFF）。メインアクセントはブルー #1768E8、サブのグレー #D9D9D9。レッド #FF1744 は“視線を一点に集めたい時だけ”極小面積で使う（多用禁止）。色を増やさず、白＋ブルー＋（必要時のみレッド）で成立させる。

【インフォグラフィック（主役）】
細い線の円（thin line circles）、シンプルなアウトラインアイコン、番号付きステップ、タイムライン、プロセス図、円グラフ/折れ線/ゲージチャート、サービスの円形ダイアグラムを多用する。線の太さは1.5〜2px、色はアクセントカラーのみ。アイコンはミニマルなアウトライン（ブルー）。図解はシンプルに保ち、ラベルは最小限に。

【タイポグラフィ】
見出しは太い幾何学サンセリフ（Bold Geometric Sans・800〜900）で大きく短く、モダンなテックの見え方。本文はクリーンなサンセリフ（400〜500・#555555）でコンパクト・高可読性。見出し＞本文のジャンプ率を明確に。タイトルの直後に小さなレッドのドットを置いてよい（装飾の決め）。

【レイアウト】
広い余白＋非対称レイアウト。太いタイトルは左 or 中央。コンテンツはクリーンなグリッド（3〜4カラム）に整列。円形を構成要素として活かす。細い水平ガイド線、ページ番号は小さくレッド/ブルーで。装飾は最小限、要素を詰め込みすぎない。影は弱め、または使わない（グラデーション・重い影は避ける）。

【コピー設計】
1スライド1メッセージ。文字量は少なく、図解で語る。短い見出し＋最小限の説明。最後は視聴者の次の一手へ。例文は引用せず資料から新規生成。

【スライド構成：タイプ別】
表紙（Cover）：背景ブルー #1768E8＋白文字。左に大きな太字タイトル、右に円形トリミングの写真。レッドの円形アクセントを一点。テキストは最小。
セクション扉（Divider）：背景ブルー＋白文字。左揃えタイトル＋大きな有機的（blob）画像クロップ。太く・シンプル・ハイコントラスト。
コンテンツ：背景ホワイト。タイトルは上 or 左。3〜4カラムのグリッドに小さなアイコン＋短いテキスト。細い区切り線。
インフォグラフィック：背景ホワイト。中央に図（大きな円）を据え、周囲に最小限のラベル。
チャート：背景ホワイト。右 or 中央にチャート、左にタイトルと短い説明。隅に淡いパステルの円アクセント。
（同じタイプを3枚以上続けない。白基調を保ち、扉・まとめだけ青を許可。）

【FINAL CHECK】写真が円形/有機的blobでトリミングされているか。背景が白基調で、扉/まとめのみ青か。ブルーが主役でレッドは一点集中だけか。図解が主役で文字量が少ないか。余白が広く影が弱い/無いか。見出しが太い幾何サンセリフでタイトル後に小さな赤ドットがあるか。

【禁止】
矩形ベタ貼りの写真（円/blobトリミング固定）、重い影・強いドロップシャドウ・グラデーション、レッドの多用（一点集中のみ）、装飾過多・要素の詰め込み、文字だらけで図解が脇役になる構成、青系以外の多色化、画像への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"mono-collage":`【世界観・ビジュアルOS】（Monochrome Cutout Collage — モノクロ切り抜きコラージュ × エディトリアル・インフォグラフィック）
トーン
NewsPicks系の現代日本ビジネス媒体の編集デザイン。ハイセンスでクリーン。「理解の快感」と「意思決定の加速」を同時に起こし、視聴者が今すぐ一歩動きたくなる編集を作る。笑いのフックは1スライド1箇所だけ、邪魔せず記憶に残す。岡本一宣的に「余白の設計」を最優先する。

写真/コラージュの方針（最重要）
図解の主役は「モノクロの切り抜きコラージュ写真」。人物/手/顔のパーツ/目元/口元/全身などの“部分使い”で編集のリズムを作る。
写真は高級ビジネス誌の落ち着いた空気（低彩度・硬すぎないコントラスト・上品）。コラージュは紙の切り抜き感（硬いエッジ、わずかな影、レイヤーの段差）で成立させ、フラット合成は禁止。
人物は原則 日本人・都会的ミニマル服（柄/ロゴ禁止）。背景はシンプルなオフィス/会議/PC作業/資料を見る手元など。生活感の雑多さ（散らかった机・ケーブル・紙の散乱）は禁止。
切り抜きは必ず行う（矩形貼り付け禁止）。輪郭は整え、髪や指が破綻する切り抜きは禁止。部分写真の例＝顔だけ（目線/表情の温度）/手だけ（押す・選ぶ・置く・貼る）/上半身（うなずく・考える）/足元（進む・止まるの比喩）。
笑いのフック（1スライド1箇所）：ありえない大きさの付箋、巨大クリップを運ぶ手、顕微鏡で「当たり前」を覗く顔など。ギャグは主役にせず、メッセージ理解の補助のみ。

ライティング/質感
硬い影・劇的照明・強い粒状ノイズは禁止。切り抜き影は極薄で一定（影でドラマを作らない）。紙/マットな質感のコラージュ感はOK。ヴィンテージ加工・汚し・傷・フィルム風は禁止。

【Color】
基本はモノクロ＋グレースケールのみ（色を増やさない）。どうしても必要な時だけアクセント1色を極小面積で許可（デフォルト: ネオンイエロー）。アクセントは「視線を止める一点」だけに使い、装飾目的では使わない。色は意味（状態/重要/危険）のインジケータとして扱う。

【エディトリアル・レイアウト】
フルブリード。グリッドと余白で編集感を出す。中央に主役要素（巨大タイポ or 主役コラージュ構造）を1つ。周囲に小さなコラージュ素材や図形を点在させ視線誘導を作る。01,02,03…の番号＋細い接続線で部位を指す（線幅統一・過剰装飾なし）。最下部（ページ下端）は完全に空白＝ロゴ/クレジット/注釈/ページ番号/極小文字を置かない。

【タイポグラフィ】
タイトルはロゴ級。太く幾何学的なサンセリフでジャンプ率を極端に。見出し＞リード＞補足の差を強く（中途半端禁止）。日本語見出しの近くに極細サンセリフ英語を“読めるサイズ”で1〜4語添え、余白の知性を作る（飾りの極小ラベルは禁止）。本文は最大2行、3行になるなら分割。見出しだけ追っても話が通る。

【コピー設計】
1スライド1メッセージ（結論/問い/命名を1つだけ）。強い言い切り・矛盾・境界線・罠の命名で一撃で刺す。最後は必ず視聴者の「次の一手」（具体・短い）で終える。例文は引用せず資料内容から言い換えて新規生成。

【スライド構成：3タイプ】（必ず混ぜる・同じTYPEを3枚以上続けない）
TYPE A：Typography Impact
白/薄灰背景。巨大見出し＋リード1行まで。余白は大きく（目安60%）、最下部は空白。コラージュは0〜1点の“点”に留め、主役はタイポ。中央の小さなタイトルはNG、左右に寄せて面を取る。
TYPE B：Main Collage Scene
主役のモノクロ切り抜き写真（人物/手/顔の一部可）＋グリッド構成。見出しは写真と余白の境界に大きく置き、本文は最小。01-03コールアウトで「どこを見ればいいか」を細い統一線で指す。
TYPE C：Logic / Process
手順/比較/因果/構造を、グリッド上の“写真パーツ＋矩形＋線”で見せる。ステップ最大3〜5、主要要素最大5〜7（超えるなら分割）。図形は直線と矩形が基本、曲線・装飾は最小。最下部は空白。

【表紙スライドの特別指定】
文字だけで寂しいは禁止。TYPE A基礎＋装飾モチーフのモノクロ切り抜き人物パーツを必ず入れる。主役はタイポ、写真は視線誘導と世界観の立ち上げのみ（情報量を増やさない）。
構図：黄金比を意識したグリッド（大きな余白＋強い非対称、中央揃え禁止）。見出しは画面の支配者＝左上〜中央寄せの大塊で余白に食い込ませる（本文の20倍以上・横幅70%以上）。コラージュ人物は2〜4点（顔/手/上半身を混在）を余白に“点”として配置し、向き/目線/指差しで視線が見出しへ戻るよう設計。人物以外の大きな構造物は置かない。
テキスト：Main Headline（日本語・強い言い切り/矛盾/罠の命名を1つ）＋Subcopy（日本語1行・読むと何が変わるかを約束しGoalへ接続）＋任意のEnglish Tag（1〜4語・読めるサイズ）。最下部は完全に空白。配色は白 or #F5F5F5、モノクロ固定（アクセントは使うなら見出しの1箇所・極小）。

【禁止】
画像への文字焼き込み、四隅/端の極小英語ラベル飾り、青っぽいイラスト化/線画化/アイコン化/3Dレンダ風/ミニチュアフィギュア化（写真コラージュ固定）、矩形貼り付けや雑な合成、生活感ある雑多な机・ケーブル・紙の散乱、過度なボケ・粒状ノイズ・フィルム傷・ヴィンテージ加工、色の増やしすぎ、Markdown記号（# * **）。`,"collage-typo":`【世界観・ビジュアルOS】（Swiss Typographic Collage — スイス・タイポグラフィック・コラージュ）
トーン
日本のニューエコノミー系ビジネスメディアを牽引するトップADの編集。スタイルは Minimalist Swiss Style / International Typographic Style。ミニマル・構造的・理性的だが硬すぎず、少しエンタメ感を持たせる。建築/ファッション/コンサル系ブランドのクリーンさと権威性。「写真の情緒」より「結論をドンと見せる爽快感」「タイポグラフィの壁」で視線を奪う。

イラスト禁止ルール（最重要）
人物・物体・シーンを描いたイラスト（手描き/ベクター/3D）は一切使わない。何かを示したい時は必ず「背景を切り抜いたモノクロ写真」だけを使う。グラフ・チャート・単純図形（棒/折れ線/マトリクス/矢印）はイラスト扱いにせず使用してよい。

視点とコラージュ方針
フラットな2D構成。立体感・アイソメ視点は基本使わない。モノクロ人物写真や手元写真の複数枚コラージュを多用する。人物写真は必ず背景を切り抜いたカットアウトにし、2〜3枚を重ねたり、わずかにずらしてレイアウト。写真のエッジはシャープ、ドロップシャドウ・ぼかしは禁止。

グリッドとレイアウト
厳密なグリッドシステム前提。列幅・行間・余白を整然とそろえる。中央揃えは避け、左揃え・非対称を基本に。1スライドに支配的な大要素を1つだけ置き、他は抑える。大きなカラー面（赤/青/黄のベタ）と白い余白のコントラストで視線を操る。

【Color】
使用色は原色3色＋黒白のみ。背景候補＝赤 #FF1A1A / 青 #0047FF / 黄 #FFCC00 / 白 #FFFFFF。1スライドのメイン背景色は1色に限定。テキストは #111111 か #FFFFFF（コントラストが強い方）。図形・線もモノクロ＋原色、グラデーション禁止。同一スライドで使う原色は最大2色（背景1＋アクセント1）。人物写真は必ずグレースケール。

【タイポグラフィ】
日本語は極太ゴシック（ヒラギノ角ゴW8 / Noto Sans JP Black級）、英語はクセの少ないサンセリフ（Helvetica/Roboto系）。
見出しは視覚面積の40〜60%を占めるほど極端に大きく。見出し:リード:本文 ≒ 25:5:1、見出し対本文は最低20:1（理想25:1）。見出しは2〜8語・1〜2行に圧縮。見出しの字間はやや詰めて「塊」に、英語大文字はトラッキングを広げ「壁」の面を作る。

タイポグラフィ壁（背景扱い）
テーマに関連する英単語を大文字で敷き詰めた「タイポの壁」を使ってよい（INNOVATION/FUTURE/INTELLIGENCE等、必ずテーマに合う語へ置換）。文字色は白のみ、塗りとアウトラインを混在させ密度とリズムを出す。表紙やキーメッセージは全面を壁にしてよい。中面の文字ドン型は見出し背後に薄く模様として敷き、可読性を最優先（背景文字はコントラストを落とす）。見出し近くの英語は1〜3語のタグに限定し説明文にしない。

強調・コピーのトーン
強調は「色」「サイズ」「配置」のどれか1つだけ、やりすぎない。アンダーラインや囲みは最小限、太いサンセリフ＋カラー面＋タイポ壁でインパクトを作る。
見出しは硬めのビジネスワード×人間の本音の組み合わせを狙う（例の方向性「効率化のはずが、仕事が増える。」※そのまま使わず新規生成）。英語は1〜3語のタグ（REAL/ISSUE/NEXT MOVE/DEEP WORK等）。

【スライド構成：3タイプ】
TYPE A：文字ドン型（インパクト）
最重要メッセージ/結論/問い/セクション扉。背景に原色ベタ面、または原色＋白文字のタイポ壁。巨大見出しを1〜2行。必要ならリードを近くに中間サイズで1行。本文は無し〜ごく短い1行。中央に小さく置かず左右へ寄せ、画面の半分以上を文字で埋める。
TYPE B：モノクロ人物コラージュ型
利用シーン/感情/ペイン/現実描写。モノクロ人物写真2〜3枚を必ずカットアウトで重ね、少しずらし、最低1辺をスライド端へ届かせる。背景は原色ベタor薄いタイポ壁。人物コラージュの上か隣に原色ブロックを重ね、その上に巨大見出し。本文は短い一文を小さく。表情は大げさにせず、仕事でよくある所作に。
TYPE C：ロジック（グラフ・チャート型）
構造/比較/プロセス/結果。棒・折れ線・2×2マトリクス・ステップ図など見慣れた図をシンプルに。背景は白、図形は黒＋原色1色のみ。最も伝えたいバー/領域だけ原色、他はモノクロ。図の近くに大きな数字を1つ浮かせ、本文は短いキャプションのみ。
（TYPE C例：The Proof＝棒グラフ＋最良バーだけ原色＋大きな数字／Before After＝原色はAfter側のみ／3 Steps＝現在地と次の一歩だけ原色）

【表紙スライドの特別指定】
シリーズ最強のインパクト。文字だけ表紙は禁止＝TYPE A＋Bのハイブリッド。背景に原色ベタ、または青系原色＋白文字のタイポ壁（テーマ関連の英単語を大文字で塗り/アウトライン混在）。前景にモノクロ人物カットアウトを2〜3枚コラージュ（顔/横顔/後ろ姿/手元）して部分的に重ねレイヤーと動きを作る。タイトルは左右へ大きく寄せコントラスト最大。メインコピーは抽象名詞1語禁止、読者のペインや境界線を1文で言い切る（最大サイズ・本文の20倍以上）。サブコピーは「見終わると何が変わるか」を1文で約束。近くに短い英語(1〜3語)を添えてよい。

【禁止】
人物/物体/シーンのイラスト（手描き/ベクター/3D）、写真へのドロップシャドウ・ぼかし、グラデーション、立体アイソメ化、中央揃えの小さい見出し、帯状ラベル/タブ/枠線付き大見出しパネル、画像内への文字焼き込み、四隅の内部っぽい英語（X/Y/LAYER/API/PARAM/DEBUG等）、Markdown記号（# * **）。`,"citypop-collage":`【世界観・ビジュアルOS】（City Pop Collage — 都市を切り取る洗練エディトリアル × シティポップのメロウさ）
トーン
北極星は80年代日本シティポップのジャケット美学（永井博・鈴木英人的な「夏の都市・午後の光・少しの郷愁」）を、写真コラージュで上品に再構築した編集デザイン。攻めのビジネス煽りではなく、「洗練と親しみを両立」させる温度。都市の表情を主役に、メロウで知的、見ていて気持ちのいい余白設計（岡本一宣的）。クリーンで静か、でもどこか懐かしい。

写真/コラージュの方針（最重要）
図解の主役は「実在する“都市の風景”を切り抜いたコラージュ写真」。高層ビル群／商店街（カフェ・レコード店の看板）／ストリート／街路樹／横断歩道／メリーゴーラウンド／夏の空と雲——都会の手触りのある被写体を主役に置く。これが“シティポップ＝シティ”の核。オフィス/会議/PC作業のような無機質な室内は使わない。
人物は原則 日本人（女性中心）・都会的でミニマルな服装（柄/ロゴ禁止）。後ろ姿・横顔・街を見上げる構図を優先し、人物は風景の中の“点”として配置（顔の超ドアップで圧をかけない＝モノクロコラージュとの差別化）。たたずまいは日本のおしゃれな雑誌写真＝清潔・自然な肌と素材感・雑味なし。
光は夏〜夕方の柔らかい自然光（午後のメロウな空気）。硬い影・劇的照明・強い粒状ノイズは禁止。切り抜きは必ず行い（矩形貼り付け禁止）、輪郭を整え、紙の切り抜き感（硬いエッジ・極薄で一定の影・レイヤーの段差）で成立させる。フラット合成・ヴィンテージ汚し・フィルム傷は禁止。
モチーフはAD基準で象徴性の強い少数に絞る（ダサい小物・説明臭い素材は禁止）。

【Color】
クリーム/アイボリーの明るい背景（#F5F3ED 〜 #FAF8F2）を基調に、青へ寄せた限定トーンで統一する。主役カラー＝ネイビー（#1E3A5F級）とダスティブルー（くすんだ水色）。アクセントはマスタード/くすみイエロー1色を“視線を止める一点”に小面積で（円や下線・丸番号など）。彩度は全体に落として上品に。色を増やしすぎない（クリーム背景＋ネイビー＋ダスティブルー＋マスタード一点で成立）。派手な原色・グラデ・柄背景は禁止。

【エディトリアル・レイアウト】
グリッドと大きめ余白で“ゆとりある洗練”を作る。左に主役テキスト（明朝の見出し＋リード）、右に都市コラージュという非対称が基本。背景装飾として円形（ダスティブルーの大きな円・マスタードの円）／細かいドットパターン／細い罫線を点在させ、リズムと“やわらかさ”を出す。番号は丸番号①②③＋点線リーダー（dotted leader）で項目をそろえる（線は細く上品に）。フルブリードでも端まで詰め込みすぎず、空気を残す。

【タイポグラフィ】
見出しは上品な明朝体（日本語）か、細く端正なサンセリフを主役に。太く武骨なゴシック/極太グロテスクは禁止（＝モノクロコラージュとの最大の差別化点）。ジャンプ率は付けつつも“優雅さ”を壊さない。日本語は横書き基本だが、縦書きを1スライド1箇所アクセントに使ってよい（「明日の気分 シティ・ポップ」のような短い添え）。英語タグは細いサンセリフで1〜4語、飾りとして小さく。見出し＞リード＞補足の差を明確に、本文は最大2行。

【コピー設計】
1スライド1メッセージ。トーンは「洗練×親しみ」＝言い切るが煽らない、知的だが気取らない（例の方向性「都市の温度を、企画にする」「洗練と親しみを両立」※そのまま使わず資料から新規生成）。最後は視聴者の「次の一手」へやわらかく接続する。

【スライド構成：3タイプ】（必ず混ぜる・同じTYPEを3枚以上続けない）
TYPE A：Typography Impact（明朝の余白）
クリーム背景。明朝の見出し（ネイビー）＋リード1行。余白大きく（目安60%）。コラージュは0〜1点の都市の“点”に留め、円形やドットの幾何装飾でメロウさを添える。
TYPE B：City Collage Scene（都市コラージュ主役）
主役は街並みの切り抜きコラージュ（ビル群＋商店街＋ストリート＋人物の後ろ姿）。複数の都市パーツを紙の段差で重ね、背景にダスティブルー/マスタードの円を効かせる。見出しは左の余白に明朝で大きく、本文は最小。丸番号＋点線リーダーで見どころを指す。
TYPE C：Logic / Process
手順/比較/因果/構造を、グリッド上の“都市パーツ＋矩形＋細線＋丸番号”で。ステップ最大3〜5、主要要素最大5〜7（超えるなら分割）。図形は直線・矩形・円が基本、点線リーダーで項目をそろえる。背景はクリーム、アクセントはマスタード一点。

【表紙スライドの特別指定】
左にロゴ級の明朝タイトル（ネイビー）＋短いリード、右に都市コラージュ（高層ビル＋ストリート＋街を見上げる/見つめる日本人の後ろ姿か横顔）という非対称構図。背景はクリーム/アイボリー、ダスティブルーの大きな円とマスタードの円・ドットパターンを装飾に。縦書き日本語の短い添え（シティ・ポップ等）を1箇所アクセントに置いてよい。Main Headline（日本語1つ・洗練×親しみで言い切る）＋Subcopy（1行・何が変わるかを約束しGoalへ）＋任意のEnglish Tag（細サンセリフ1〜4語）。アクセントはマスタード一点のみ。夏〜午後の光のメロウな空気。

【FINAL CHECK】“シティ”が画面にあるか（実在の都市風景＝ビル/商店街/ストリート/夏の空）。色がクリーム＋ネイビー＋ダスティブルー＋マスタード一点に収まり青へ寄っているか。見出しが明朝/細サンセリフで、太い武骨ゴシックになっていないか（＝monoと混同していないか）。人物が風景の“点”として品よく置かれ、顔ドアップの圧になっていないか。余白でメロウな洗練が出ているか。

【禁止】
太く武骨なゴシック/極太グロテスク見出し（モノクロコラージュと混同するため禁止）、オフィス/会議/PCの無機質室内、顔の過剰ドアップで圧をかける構図、外国人モデル指定、画像への文字焼き込み、四隅の極小英語ラベル飾り、青っぽいイラスト化/線画化/アイコン化/3Dレンダ風/ミニチュアフィギュア化（写真コラージュ固定）、矩形貼り付けや雑な合成、過度なボケ・強い粒状ノイズ・フィルム傷・ヴィンテージ加工、グラデ/柄背景、派手な原色・色のうるささ、Markdown記号（# * **）。`,"miniature-figure":`【世界観・ビジュアルOS】（Miniature Photoreal — 田中達也「MINIATURE CALENDAR」的な見立て × エディトリアル・インフォグラフィック）
トーン
北極星は写真家・田中達也の「MINIATURE CALENDAR」＝日用品やミニチュアを風景・場面に「見立てる（mitate）」機知。実写ミニチュアの精巧さと、ハッとする比喩のユーモアを両立する。高級プロダクト広告並みにクリアな写真品質で、難しい概念を「小さな世界の出来事」として腑に落とす。チープなCG感・ジオラマ感は禁止。1スライドに見立ての驚きを1つ。

写真/撮影の方針（最重要）
被写体はスタジオ撮影の実写ミニチュア（フィギュア人物＋単純な小物）。本物の素材感・微細な被写界深度（チルトシフト的な“小ささ”の説得力）・自然な接地影で「本当に小さい」と信じさせる。プラモ然・CG然は禁止。
カメラは45度俯瞰を基本（アイソメの読みやすさをカメラ角で再現）。中望遠の自然なパース、極端な広角は禁止。光はソフトで均一、硬い影・ドラマ照明は禁止。明るくクリア、白飛び/黒つぶれを作らない。
見立ての発想：抽象概念を日用品×ミニチュア人物の場面に翻訳する（例: 階段＝成長、付箋＝タスク、ルーペ＝精査、ブロック＝積み上げ）。AD基準で象徴性の高い少数の小物に絞り、説明臭い素材・ダサい小物は禁止。

【キャラクター】
毎回1〜3体のミニチュア実写フィギュア人物を入れる。原則 日本人・都会的でミニマルな服（柄/ロゴ禁止）。図解に干渉する所作が必須（運ぶ/選ぶ/押す/組み立てる/付箋を貼る/矢印を差す）。表情は作り込みすぎず、小さくても“意図が読めるポーズ”を優先。

【Color】
厳密に「3色＋黒白」。背景は #FFFFFF or #F5F5F5（ベージュ/茶/くすみ禁止）。Primaryは知的で鮮やかな1色（例: Electric Blue）、Accentは喧嘩しない1色（例: Vibrant Orange / Neon Yellow）を視線を止める一点に。文字/ディテールはRich Black/Dark Grey。小物・衣服も3色制限に従い、陰影は照明で作り色相は増やさない。

【エディトリアル・レイアウト】
フルブリード。グリッドと余白で編集感。中央に主役のミニチュア構造を1つ大きく、周囲に小さな部品を点在させ視線誘導。01,02,03…の番号＋細い接続線で部位を指す（線幅統一）。最下部は完全に空白（ロゴ/クレジット/ページ番号/極小文字を置かない）。

【タイポグラフィ】
タイトルはロゴ級・太く幾何学的なサンセリフ・ジャンプ率を極端に。見出し＞リード＞補足の差を強く。英語タグは1〜4語まで、見出し塊の一部として読めるサイズで（四隅の極小飾りは禁止）。

【コピー設計】
見立ての機知が伝わる一言。難しい概念を「小さな世界の動詞（積む・選ぶ・運ぶ・貼る）」で言い換える。1スライド1メッセージ、最後はGoalの一手。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：見立てヒーロー
主役の見立てシーン1つを大きく俯瞰＋巨大見出し。背景はクリーンな単色、余白で1点を際立たせる。
TYPE B：ミニチュア・シーン
フィギュア人物が図解に干渉する場面を大きく。極端な接写（手元・小物）と引きの俯瞰を混ぜる。01-03コールアウトで見どころを指す。高彩度アクセントは一点。
TYPE C：ブロック図解
手順/比較をミニチュアの積み木・階段・矢印で。ステップは段差や並びで、現在地と次の一歩だけアクセント色。主要要素5〜7まで。

【表紙スライドの特別指定】
田中達也的な“見立ての驚き”を最初の1枚に。象徴的なミニチュアシーンを俯瞰で大きく＋ロゴ級タイトル。メインコピーは抽象名詞1語禁止、見立てを一文で言い切る（本文の20倍以上）。サブで変化を約束しGoalへ。3色厳守・最下部は空白・アクセント一点。

【FINAL CHECK】実写ミニチュアの説得力（被写界深度・素材感・接地影）でCG/プラモに見えないか。見立て＝抽象概念の翻訳が機知として効いているか。色が3色＋黒白に収まり高彩度が一点か。フィギュアが図解に干渉しているか。見出しだけで流れが通り最後がGoalの一手か。

【禁止】
チープなCG感・ジオラマ/プラモ然、硬い影・ドラマ照明・極端広角、3色超えの多色、ベージュ/茶/くすみ背景、画像内への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"miniature-keyboard":`【世界観・ビジュアルOS】（Miniature Keyboard — キーボードの上に広がる小さな街 × ストーリーテリング・エディトリアル）
トーン
北極星は田中達也「MINIATURE CALENDAR / MINIATURE LIFE」のミニチュア実写×見立て。ただし舞台は“キーボードとデジタル道具”。キーボードを単なる道具でなく、人々が暮らし・働き・学び・冒険する世界として描く。情報は箇条書きでなく、小さな住人たちが体験する「物語」として表現する。Playful・Imaginative・Human・Warm・Whimsical・Contemporary。1スライド＝小さな世界の写真1枚。チープなCG/プラモ感は禁止。

写真/撮影の方針（最重要）
被写体はスタジオ撮影の実写ミニチュア・ジオラマ。マクロレンズ視点、浅い被写界深度（手前シャープ／背景はソフトなボケ）で“本当に小さい”説得力を出す。自然な写真の影・本物の素材感。硬いドラマ照明・極端広角・グラスモーフィズム・人工グラデは禁止（光は柔らかいスタジオ照明のみ）。背景はミニマルなデスク環境＝中立で柔らかい面。
見立ての核：キーボードのキー＝ビル/街区/道路/山/舞台/教室/工房/風景。日用デジタル道具＝大スケールの情景。象徴性の高い少数の小物に絞る（説明臭い・ダサい小物は禁止）。

【キャラクター】
毎回ミニチュア模型のフィギュア人物を配置（複数可）。所作で物語を駆動：働く/建てる/学ぶ/探検/協力/祝う/直す/作る。スケール対比（巨大なキー × 小さな人）で驚きを出す。人の活動が視覚的ヒエラルキーを作る＝強い焦点を1つ。

【Color】
背景＝Soft Ivory #F4F1EB。オブジェクト＝Matte Black #2D2D2D / Warm White #FAFAF7。アクセント3色＝Coral #F46A5A / Teal #3CB8B2 / Mustard #D9A441 を視線誘導に。色は素材と照明で表現し、増やしすぎない。Warmな全体温度。

【タイポグラフィ】
親しみのあるモダン・サンセリフ（丸みのある字形）。雑誌エディトリアルの品位。人間中心で近づきやすい。ジャンプ率で主役を立てる。英語タグは短く（1〜4語）。

【レイアウト／構図】
大きなキーが建築ブロックになる。1スライド＝1つのミニチュアシーンに集中。コンテンツは箱で分離せず“環境の中に統合”（看板・画面・壁・キー・構造物にタイトルを埋め込む）。映画的ストーリーテリング、強い焦点、人の活動で階層を作る。各スライドは「小さな世界からの一枚の写真」のように。最下部は空白（ロゴ/クレジット/ページ番号を置かない）。

【コンテンツの容れ物】
タイトル＝物理オブジェクト（看板/画面/壁/キー/構造物）に統合。本文＝最小・文脈依存。画像＝ミニチュア環境の一部として扱う。チャート＝シーン内の物理オブジェクトとして再解釈（積み木・道・階段・標識など）。

【シーン設計の原則】
どのスライドにも小さな物語を1つ。例：アイデアを建設する小さな作業員／キーの中で暮らすデザイナー／デジタル風景を旅する探検家／句読点キーを教室にする先生／巨大なEnterキーに集う住人たち。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：ワールド・ヒーロー
象徴的なミニチュア・シーン1つを俯瞰／マクロで大きく＋ロゴ級タイトルを環境に統合。背景はクリーンなアイボリー、浅い被写界深度で主役を際立たせる。
TYPE B：物語シーン
フィギュア人物がキー＝建築/環境に干渉する場面を大きく。接写（手元・小物）と引きを混ぜ、アクセント色を一点。看板や画面に短いコピー。
TYPE C：物理図解
手順/比較をシーン内の物理物で（積み木・道・階段・標識・矢印）。現在地と次の一歩だけアクセント色。要素は5〜7まで。

【表紙スライドの特別指定】
キーボード都市の“見立ての驚き”を1枚目に。象徴的なミニチュア・シーンを大きく＋ロゴ級タイトルを環境に統合。メインコピーは抽象名詞1語禁止、物語を一文で言い切る。3アクセント＋黒白に収め、最下部は空白。

【FINAL CHECK】実写ミニチュア／浅い被写界深度で“本当に小さい”か（CG/プラモに見えない）。キー＝街/建築の見立てが効いているか。各スライドに小さな物語が1つあるか。色がアイボリー＋黒白＋3アクセントに収まるか。タイトルが箱でなく物理オブジェクトに統合されているか。最後がGoalの一手か。

【禁止】
チープなCG/プラモ/ジオラマ然、硬いドラマ照明・極端広角、グラスモーフィズム・人工グラデ、箱で区切った箇条書きレイアウト、3アクセント超えの多色、くすんだ寒色背景、画像内への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"impossible-monument":`【世界観・ビジュアルOS】（Impossible Monument — エッシャー的錯視 × アイソメトリック・パズル建築エディトリアル）
トーン
北極星はM.C.エッシャーの錯視建築、ペルシャ/イスラム建築のアーチ、ミニマル建築模型、禅庭園の静寂。重力から解放された建築空間に階段・水路・橋・塔を配置し、「視点で世界の見え方が変わる」「思考によって道が生まれる」という哲学的世界観を作る。現実と幻想の境界を曖昧にし、複雑さの中に秩序を見出す。Dreamlike・Minimal・Meditative・Mysterious・Elegant・Surreal・Timeless。静謐で知的な没入。

描画/レンダリングの方針（最重要）
固定アイソメトリック投影・30度角・パース歪みなし。フラットな幾何シェーディング、柔らかい方向性の影（ソフトなアイソメ・ドロップシャドウ）、くっきりしたベクターエッジ、テクスチャは最小。均一なアンビエント光。雰囲気＝Quiet・Weightless・Ethereal。写実・重いグラデ・派手な色・密なインフォグラフィックは禁止。

【建築エレメント】
浮遊するプラットフォーム／果てしない階段／吊り橋／不可能な回廊／滝／塔／アーチ／隠し扉／開けた中庭／高架の通路。エッシャー的な“不可能な連続性”と複数の経路（隠れたルート）で哲学性を出す。

【水】
垂直の滝・静かな反射プール・幾何学的な流れ・柔らかな透明感。水のグラデは #AEEBFF→#63D7F6。

【キャラクター】
存在は最小・非常に小さく。匿名のフィギュア／フードを被った旅人／静かな観察者／孤独な探検家。役割＝スケールを与える・瞑想を誘う・物語を示唆する。主役は建築そのもの。

【Color】
背景＝#EAF0F3 / #C9D9DF。建築＝Ivory #F4EFE9 / Sand #DCCFCB / Blush #D8C4C6 / Stone #B7B1B0。アクセント＝Aqua #73D4F3 / Turquoise #42C5D6 / Gold #E8B448 / Coral #F1A27D を要所に。影＝Cool Gray #9EA7B1。文字＝#4B5057（主）/ #7A828A（副）。静かで上質なトーン、派手な多色は禁止。

【タイポグラフィ】
見出し＝エレガントなサンセリフ（Avenir/Futura/Montserrat系）、ウェイト500–600、トラッキングをやや広く、色 #4B5057。本文＝ミニマルなサンセリフ（Inter/Noto Sans/Source Sans系）、ウェイト400、色 #7A828A。

【構図／空間設計】
建築そのものが物語。強い中央モニュメント＋大きな余白＋垂直方向の視覚移動＋複数経路＋隠れたルート＋不可能な連続性。モニュメントは画面の30–40%、ネガティブスペース60–70%。リズムは穏やかで意図的。ボーダーは無し。アイコンはミニマルなアウトライン。装飾は控えめに：小さな鳥・波紋・浮遊タイル・幾何記号・光の粒。最下部は空白（ロゴ/クレジット/ページ番号なし）。

【コンテンツの容れ物】
情報は“浮遊するカード”として配置し、モニュメントのイラストをアンカーに非対称構図。テキストは最小・密な文章塊は禁止。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：モニュメント・ヒーロー（表紙/章扉）
中央に主役モニュメント＋小さな旅人フィギュア、ミニマルなタイポ、広大な余白。章扉は建築ディテールをトリミングし、章番号を幾何形状に統合。
TYPE B：浮遊カード・コンテンツ
モニュメントをアンカーに、浮遊する情報カードを非対称に配置。アクセント色は一点。
TYPE C：経路の図解（タイムライン/プロセス/比較）
階段状の段階進行・橋の遷移で時間を、連続する小径＝探検家の旅の比喩でプロセスを、並列/鏡像のモニュメントで比較を表現。現在地と次の一歩だけアクセント色。

【表紙スライドの特別指定】
不可能建築の“静かな驚き”を1枚目に。中央にモニュメント＋極小の旅人、ミニマルな見出し、広大な空の余白。メインコピーは抽象名詞1語禁止、世界観を一文で言い切る。

【FINAL CHECK】固定アイソメ30度・パース歪みなしか。エッシャー的な不可能な連続性/複数経路があるか。モニュメント30–40%・余白60–70%か。色が指定パレット内に収まり静謐か。人物は極小でスケールと瞑想を与えているか。最後がGoalの一手か。

【禁止】写実・リアルなパース描画、重いグラデ、派手/騒がしい色、密な文章塊・ビジーなインフォグラフィック、企業ストック画像、ボーダー多用、画像内への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"pop-portfolio":`【世界観・ビジュアルOS】（Pop Minimal Web Portfolio — モダンWebポートフォリオ × ミニマル＆ポップ・エディトリアル）
トーン
WebデザインのポートフォリオサイトのようなプレゼンOS。大きな余白を主役に、左揃え・グリッド・鮮やかな差し色で「ミニマルなのにポップ」を成立させる。Minimal・Modern・Clean・Creative・Editorialでありながら、明るいアクセントで軽快さを出す。装飾背景・重い影・密な文章は禁止。各スライドは清潔で空間的に。

【Color】
背景＝白 #FFFFFF / Soft Gray #F4F4F4 / Dark #0B1117（反転スライド用）。アクセントはビビッドに：Bright Yellow #FFD900 / Cyan #16CFE0 / Hot Pink #FF5278 / Purple #7B4DFF、淡色面に Soft Pink #F8C7D8 / Pale Yellow #FFF3C4。文字＝#111111（主）/ #666666（副）/ 白（濃色面上）。鮮やかな色は“アクセントかセクションのカラーブロック”としてのみ使い、塗りすぎない。

【タイポグラフィ】
見出し＝モダンな幾何サンセリフ、太字、ややラウンド。大きいがシンプルなタイトルを強い左揃えで。見出しの上に小さなラベル（セクション名）を置く。本文＝ミニマルなサンセリフ、レギュラー、小さめで読みやすく、行間広め・短い段落。アクセントに細いスクリプト/署名体をごく稀に手書き風の飾りとして。

【レイアウト】
大きな白い余白。エアリーでミニマル。明確なグリッド（2カラム/3カラム）。強い左揃え。詰め込み禁止。多くのスライドでネガティブスペースを40%以上。大きな文字エリアと画像ブロックを混在。非対称レイアウトでエディトリアルなリズム。時折フルハイトのカラーパネル。重なるイメージカードは必要な時だけ。主タイトルは左上寄り。細い線・小さなキャプション・ミニマルなアイコンを差し色に。

【ビジュアル要素】
画像＝トリミングしたライフスタイル/ポートレート/ワークスペース/抽象。矩形クロップとクリーンな白レイアウトを混ぜる。パステル/カラーブロックの中に画像を置いてもよい。影は最小か無し。
シェイプ＝角丸長方形・細いアウトライン枠・小さな円アクセント・シンプルなプログレスバー・ミニマルなチャートブロック・柔らかいグラデパネル。
チャート＝簡素な棒/円/メトリクスカード。データのハイライトに明るいアクセント色。フラットでミニマル、重いグリッド線は禁止。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：カラータイトル / 表紙
鮮やかなカラーブロック or 白地に大きなシンプル見出しを左上揃え、上に小ラベル。広い余白。
TYPE B：ミニマル・コンテンツ
白地＋グリッド（2/3カラム）。テキストエリアと矩形画像/淡色ブロックを非対称に。細い線と小キャプションで整える。
TYPE C：メトリクス/戦略
カラフルなメトリクスカード or 横並びのカラーバー、簡素な棒/円グラフ。差し色でデータを強調、余白を保つ。

【表紙スライドの特別指定】
ポートフォリオサイトのトップのように。大きなシンプル見出しを左上、上に小さなセクションラベル、広大な白 or 1枚のカラーブロック。メインコピーは抽象名詞1語禁止、提供価値を一文で。アクセント色は一点〜セクションブロックに限定。

【FINAL CHECK】余白が主役で40%以上空いているか。強い左揃え＋グリッドが効いているか。鮮やかな色が“アクセント/セクションブロック”に限定され塗りすぎていないか。影が最小/無しでフラットか。中央揃えに逃げていないか。モダンWebポートフォリオの清潔感があるか。最後がGoalの一手か。

【禁止】装飾的な背景、重い影、密な文章塊、全要素の中央揃え、鮮やかな色のベタ塗りすぎ、重いグリッド線、画像内への文字焼き込み、四隅の極小英語ラベル飾り、Markdown記号（# * **）。`,"mode-editorial":`【世界観・ビジュアルOS】（Mode Editorial — ハイファッション・モード誌）
トーン
Vogue / Harper's Bazaar のエディトリアル美学。ハイブランドのルックブックのような、静かで確信に満ちた高級感。情緒で説明せず、写真・余白・タイポの緊張感だけで「品と知性」を語る。煽らない、媚びない。

写真の方針（最重要）
被写体（モデル/プロダクト）は「彫刻」として扱う。光が彫刻刀、影が布。ハイコントラストのモノクロ写真を主役にする。
ファッション写真専門のフォトグラファーが撮影した水準（肌・素材・陰影のリアリティ、雑味ゼロ）。
人物は1人を大きく見せる構図を基本とし、トリミングは大胆に（顔の一部、肩のライン、手、シルエットのみ等の極端なクロップを必ず混ぜる）。
全面ブリード、または片側1/2〜2/3に大胆配置。中途半端なサイズで中央に小さく置かない。

ライティング/質感
硬質で方向性のある光。ディープシャドウと白とびギリギリのハイライトで立体を彫る。
粒状ノイズ・HDR・過度なレタッチ感は禁止。マットで上質な階調。

【Color】
原則モノクロ（白・黒・グレースケール）。写真がカラーの物語を引き受ける。
アクセントは1色だけ、ごく小面積で許可（デフォルト: 鮮烈なレッド #D7263D、またはゴールド #C9A84C のどちらか）。アクセントは服の一点・見出しの1語・細い罫線のいずれかに限定。
グラデーション禁止。フラットな単色のベタ面で構成し、確信を示す。背景は白(#FFFFFF) または黒(#0A0A0A)。1スライド1基調色。

【タイポグラフィ】
見出しはコンデンスド・サンセリフ（細長い高コントラスト書体）を主役に。極端なジャンプ率で大きく。大文字はトラッキングを広げ、誌面に「壁」のような面を作る。
英語の見出しと日本語の言い切りを併置してよい。英語はタグ/断言として短く（説明文にしない）。
本文は細いウェイトで小さく、行間にゆとりを持たせ余白を呼吸させる。
強調は1スライド1〜2箇所、コントラストのみで。蛍光色・装飾は禁止。

【コピー設計】
メインは日本語の強い言い切り（ペイン/矛盾/境界線の命名）。英語タグ(1〜4語)を見出し塊の一部として添えてよい。例文は引用せず毎回新規生成。

【スライド構成：3タイプ】
TYPE A：タイポグラフィ・インパクト
白または黒の地に、コンデンス体の巨大見出し＋短いリード1行。写真なしでも勝つ。余白を大きく、最下部は空白。アクセント色は1点だけ。

TYPE B：ファッション・ヒーロー
ハイコントラストのモノクロ写真を主役に、大胆クロップで全面または片側配置。見出しは写真と余白の境界に大きく置く。本文は最小限。極端な寄りのクロップを必ず1枚は入れる。

TYPE C：ロジック／エディトリアル図解
比較・手順・構造を、細い罫線とコンデンス体の数字で誌面的に。要素は主要5・比較3・ステップ3〜4まで。装飾を足さず、余白とタイポの強弱だけで整理する。

【表紙スライドの特別指定】
コレクションの「表紙ルック」。文字だけで寂しいを禁止。モノクロのヒーロー写真（被写体は彫刻的）＋クロップド・タイポグラフィの巨大見出しのハイブリッド。非対称・大胆な余白・極端なジャンプ率で、最初の1枚で視線と意識を奪う。メインは抽象名詞1語を禁止し、ペイン/矛盾を1文で言い切る。サブは読むと何が変わるかを1行でGoalへ接続。アクセント1点、最下部は空白。

【禁止】
暗くも明るくもない中途半端なトーン、多色、グラデ、ドロップシャドウ/グロー、丸いポップ書体、装飾過多、画像内への文字焼き込み、Markdown記号（# * **）。`,"manga-comic":`【世界観・ビジュアルOS】（Manga Comic — 日本の漫画/コミック）
トーン
週刊連載の白黒原稿のような力強いインク表現。少年漫画の熱量（勢い・きめ）と青年漫画の陰影（間・苦み）を併せ持つ。北極星は劇画の作画密度＝井上雄彦的な線の強弱と、大ゴマで「ためて落とす」コマ運び。読者を1ページで物語に引き込み、最後はGoalへの一手で締める。スピード感と感情の振れ幅を、線と余白で鳴らす。

描画/質感（最重要）
主線は入り抜きのあるGペンタッチのインク（白黒）。キャラ輪郭は太く、背景・ディテールは細い線で描き分け、画面に遠近と主従を作る。
陰影はベタ（黒の面）とスクリーントーン（網点61〜系の濃淡）の貼り分け。トーンの削り（ハイライト）、カケアミ、ホワイト飛ばしで立体と空気を出す。べた面を恐れず、黒の量で感情の重さを変える。
動きは集中線・流線・スピード線で увелич。感情はコマの「割り方」と背景効果（ベタフラッシュ＝歓喜/衝撃、ウニフラッシュ＝動揺、砂目トーン＝静寂）で増幅。
構図はアオリ（煽り）と俯瞰を使い分け、寄り（目・手・口元の芝居）と引き（全身・情景）を必ず混ぜる。大ゴマ1つに対し小ゴマで支える「ジャンプ率のあるコマ構成」。

【Color】
基本はモノクロ（白・黒・網点グレー）。色で飾らず、線と面の密度で見せる。
アクセントは1色だけ少量（デフォルト: 鮮烈なレッド #D7263D）。決め台詞・キーアイテム・最重要の一撃にだけ差す「視線を止める一点」。多色は禁止。

【タイポグラフィ】
見出しは極太の手描き風レタリング、または力強い角ゴシックで特大に。ジャンプ率を極端に（見出し:本文 20:1以上）。
擬音（描き文字）を構図の一部として大胆に効かせてよい（ドン・ザッ・…等／ただし可読性を保ち、説明文にしない）。
本文は最小限。説明はナレーション枠（角丸/角の囲み）に短く1〜2行。吹き出しのセリフは生っぽく短く。英語タグは小さく1〜3語。

【コピー設計】
見出しは漫画の「決め台詞」。感情を一撃で刺す日本語＝問い・矛盾・宣言を短く。1スライド1メッセージ。見出しだけ追って「注意→感情→理解→行動」が通る。例文は引用せず資料から新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：扉/大ゴマ・インパクト
1枚絵の大ゴマ＋巨大見出し。集中線かベタフラッシュで主役を画面中央〜やや寄せに強調。周囲は大胆に空けるか、効果線で埋めて「ためる」。最重要メッセージ・章扉に使う。
TYPE B：人物ドラマ
表情/リアクションの大きな寄りコマを主役に、短い吹き出し1〜2個で感情を見せる。背景は効果線（フラッシュ/流線）。同一スライド内に引きの小ゴマを1つ添え、寄りと引きを対比。本文は最小。
TYPE C：コマ割り解説
手順/比較/因果を2〜4コマの時系列で。コマの大きさに強弱（重要コマを大きく）、視線の流れはZ字か右上→左下の縦書き的導線。番号やトーンの濃淡で順序を示し、見出しだけで流れが通る。

【表紙スライドの特別指定】
扉絵＝シリーズ最大の画力を投入する1枚。主役キャラか象徴モチーフを大きく、ロゴ級の力強い手描きタイトルを画面を支配する大きさで。集中線・ベタフラッシュ・トーンで「最初の1ページ」の引きを作る。メインコピーは抽象名詞1語を禁止、ペイン/矛盾を1文で言い切る（本文の20倍以上）。サブで「読むと何が変わるか」を約束しGoalへ接続。アクセント赤は一点のみ。

【FINAL CHECK】白黒の線と網点で成立しているか（安易なフルカラー/写実に逃げていないか）。大ゴマ1つを主役に、寄りと引きが混ざっているか。擬音が構図の一部で説明文化していないか。赤が決めの一点だけか。見出しだけでストーリーが通るか。最後がGoalの一手で終わるか。

【禁止】
写真の多用、淡い水彩、3Dレンダ、グラデの多用、CG的なつるっとした陰影、画像内への過剰な文字（セリフ/擬音以外の焼き込み）、整いすぎたベクター線、Markdown記号（# * **）。`,"voxel-craft":`【世界観・ビジュアルOS】（Voxel Craft — マインクラフト風ボクセル）
トーン
すべてが立方体（ボクセル）でできた3Dの箱庭世界。北極星はMinecraft／Crossy Road的なクリーンなボクセルアート＝親しみと遊び心がありながら構造が明快。ゲームのジオラマを上からのぞき込むワクワク感で、難しい話も「ブロックを積んで理解する」体験に変える。子どもっぽくしすぎず、整理された知的な可愛さを保つ。

描画/質感（最重要）
等角投影（アイソメトリック・約30度）の3Dボクセル。オブジェクト・キャラ・地形・アイコンをすべて統一サイズの低解像度キューブで構成し、グリッドに正しく乗せる。
表面はテクセル（ピクセル）質感のマット。鏡面反射・リアルな映り込み・被写界深度は使わない。
ライティングは柔らかく均一、面ごとに明度差（上面=明るい／正面=中／側面=暗い）で立体を読ませる。落ち影は軽く短く、淡い。弱いアンビエントオクルージョンで接地感だけ出す。
雲・水・草・光線などの自然要素もボクセルで表現。背景は空のフラットな単色か白で抜けを作り、主役のジオラマを浮かせる。スケール感（小さなキャラ×大きな構造物）で世界の広がりを見せる。

【Color】
鮮やかだが整理された配色。原色〜キャンディカラーをブロック単位（面ごと）で使う。主役オブジェは3〜4色に絞り散らかさない。背景は空色(#7EC8E3)や白で抜けを作る。
くすみ色・濁色は避けゲーム的な明るさを保つ。最重要の一点だけ高彩度（赤/黄）で「ここを見て」を作り、他は中彩度で支える。

【タイポグラフィ】
見出しはブロック/ピクセル調、または太い丸ゴシックで大きく。軽い立体押し出し（ベベル）可だがドット過多にせず可読性優先。ジャンプ率を強く。
本文は丸ゴシックで簡潔に1〜2行。英語タグはピクセル体で小さく1〜3語。文字は画面に焼き込まずテキスト要素として配置。

【コピー設計】
前向きでキャッチー。難しい概念を「ブロックを積む/集める/壊す/組み替える」の比喩で言い換えると世界観に一致。1スライド1メッセージ、最後はGoalの一手。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：タイトル・インパクト
象徴的なボクセルオブジェ1つ＋巨大見出し。背景は抜けのある単色空か白。余白を大きく取り主役を1つに絞る。
TYPE B：ボクセル・ワールド
主役の立体ジオラマを大きく俯瞰配置。ブロックのキャラが操作/行動（積む・運ぶ・選ぶ）する様子で意味を見せる。01-03の番号＋細い線で見どころを指す。図で理解させ文字は最小。スケール対比を必ず入れる。
TYPE C：ブロック図解
手順/比較をボクセルの積み木で。ステップは段差（高さ／階段状）で表現し、比較は左右のブロック群で。現在地と次の一歩だけ高彩度で。主要要素5〜7まで、超えるなら分割。

【表紙スライドの特別指定】
ボクセルの主役シーン（島・建物・象徴キャラ）を俯瞰で大きく＋ブロック調の大タイトル。冒険の入口のようなワクワク感で世界の広がりを見せる。メインコピーは抽象名詞1語禁止、1文で言い切り（本文の20倍以上）。サブで変化を約束しGoalへ。高彩度アクセントは一点のみ、最下部は空白。

【FINAL CHECK】全要素が統一サイズのキューブで等角グリッドに乗っているか。鏡面/写実/被写界深度に逃げていないか。配色が整理され高彩度が一点か。スケール対比で広がりが出ているか。見出しだけで流れが通り、最後がGoalの一手か。

【禁止】
写実写真、繊細な曲線/水彩、鏡面反射・リアルな質感、過度な装飾、濁色の多用、画像内への文字焼き込み、Markdown記号（# * **）。`,"greek-collage":`【世界観・ビジュアルOS】（Greek Sculpture Collage — 古典彫刻 × コミカル・コラージュ）
トーン
白い石膏/大理石のギリシャ彫像を主役にした、知的だが少しユーモラスな編集コラージュ。北極星は美術館の企画展ポスター＋現代エディトリアルの編集眼＝古典の権威と現代のポップさの上品な衝突。「古典彫刻＝永続する知」という視覚ナラティブ（人類の知恵を受け継ぐ含み）を漂わせる。格調を保ちつつ、1スライド1箇所だけクスッとさせる。

写真/コラージュの方針（最重要）
被写体はダヴィデ/ヴィーナス/アポロン的な石膏彫像。モノクロ〜低彩度の高解像度写真を、紙の切り抜きのように硬いエッジでカットアウト（輪郭を整え、わずかな影とレイヤーの段差で立体感）。フラット合成・雑な合成は禁止。
部分使いを積極的に＝顔の半分・横顔・手・胴体・足。引き（全身）と極端な寄り（目・口元・指）を必ず混ぜ、編集のリズムを作る。
彫像に現代的な小物を1点だけ添えてユーモアを作る（サングラス、吹き出し、矢印、付箋、イヤホン等）。やりすぎず品を保ち、ギャグを主役にしない。
幾何学色面（大きな矩形・円）と組み合わせ、彫像を色面の前後に配置してレイヤーを作る。美術館ポスターの構築感。

ライティング/質感
石膏のマットな質感、柔らかく回り込む光。硬い影でドラマを作りすぎない。切り抜き影は極薄で一定。粒状ノイズ・ヴィンテージ加工・安っぽいミーム加工は禁止。

【Color】
白〜オフホワイト基調＋石膏のグレー。アクセントは1〜2色（テラコッタ #B5651D／クラシックブルー／ゴールドのいずれか）を大きな色面で。低彩度で上品に、多色で散らさない。最重要の一点だけ彩度を上げる。

【タイポグラフィ】
見出しはクラシックな高コントラストのセリフ（Didone系）と現代的なサンセリフの対比で組む。ジャンプ率を強く（見出し:本文 20:1）。英語の見出しを大きく使い、日本語の言い切りを短く添える＝古典と現代の対話を文字でも。英語タグは1〜3語、四隅に飾りで散らさない。

【コピー設計】
知的でウィットのある言い切り。普遍的な問い（人間とは/知とは/賢さとは）を現代の文脈に接続する一文を狙う。1スライド1メッセージ、最後はGoalの一手。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：彫刻ヒーロー
彫像の大きな切り抜き1点＋巨大見出し。美術館的な大きな余白で1点を際立たせる。色面は最小、静けさで見せる。
TYPE B：コラージュ・ユーモア
彫像＋現代小物＋幾何学色面で1つの機知（視覚的ジョーク）を見せる。顔・手の大胆な寄りクロップを必ず使い、色面の前後に彫像を重ねてレイヤーを作る。本文は短く。
TYPE C：ロジック
彫像のパーツや古典モチーフ（柱・アーチ・月桂冠・壺絵）を使い、手順/比較/構造を編集的に図解。線は細く上品に、数字を大きく。装飾を排し余白で整理。

【表紙スライドの特別指定】
美術館の企画展ポスターのような格調＋一捻りのユーモア。彫像を主役に大きく切り抜き、クラシックな大タイトル（セリフ×サンセリフ対比）。大胆な色面1つと贅沢な余白で「知的な驚き」を最初に提示。メインコピーは抽象名詞1語禁止、1文で言い切り（本文の20倍以上）。サブで変化を約束しGoalへ。小物のユーモアは1点まで、最下部は空白。

【FINAL CHECK】彫像が紙の切り抜き感（硬いエッジ＋薄い影＋段差）で成立しているか。寄りと引きが混ざりメリハリがあるか。ユーモアが1点に収まり格調を壊していないか。色が低彩度で上品に整理され高彩度が一点か。見出しだけで流れが通り、最後がGoalの一手か。

【禁止】
けばけばしい多色、3Dレンダ風、安っぽいミーム加工、粒状ノイズ・ヴィンテージ加工、矩形貼り付けの雑な合成、画像内への文字焼き込み、Markdown記号（# * **）。`,"vogue-white":`【世界観・ビジュアルOS】（Vogue White — 白基調ハイファッション・エディトリアル）
トーン
白い無限背景のスタジオ撮影。北極星はIrving Penn／ハイブランドのルックブック＝静謐で清潔、贅沢な余白、「光が彫刻、影が布」。明るく上質で、何も足さない強さ＝引き算の美。VogueやKinfolk的な余白の設計を最優先し、要素を増やさないことで格を出す。

写真の方針（最重要）
白〜オフホワイトの無限背景に、ハイファッションの人物/プロダクト写真を1点だけ大胆に、彫刻的に配置する。被写体を画面の主役として大きく。
彩度はやや抑えめで上品。肌・素材・布の質感、ハイライトと陰影の階調を繊細に。雑味ゼロの、雑誌の表紙に載る一枚を狙う。
トリミングは大胆に＝全身の長いシルエット、または顔・手・素材・布の極端な寄り。引きと寄りを必ず混ぜる。被写体の所作・指先・視線の角度まで指定する。
背景に被写体が溶けないよう、輪郭をエッジライトか淡い影で上品に立てる。

ライティング/質感
やわらかく回り込むスタジオ光（大きなソフトボックス）。影は淡く繊細で短い。ハイキー基調で白を飛ばしすぎず階調を残す。粒状ノイズ・ヴィンテージ・強い影は禁止。

【Color】
白基調。ニュートラル（白・オフホワイト・グレー・ベージュ・黒）が中心。アクセントは1色だけ小面積（モードレッド #D7263D／ゴールド／スキンベージュ）＝口紅の一点、布の一色のように差す「視線を止める一点」。グラデーション禁止、フラットな確信。

【タイポグラフィ】
細身でエレガントな高コントラストのセリフ（Didone＝Vogueロゴ的）、またはコンデンスド・サンセリフ。大きく上品に、トラッキングを効かせて「面」を作る。ジャンプ率を強く。
英語の見出しを主役に、日本語の言い切りを短く添える。本文は細く小さく、たっぷりの行間で余白を呼吸させる。英語タグは意味のある語を1〜3語、極小で。

【コピー設計】
最小限の言葉で品格を出す。説明しすぎず、余韻と約束で語る。1スライド1メッセージ、最後はGoalへの一手。英語タグは飾りでなく意味のある語。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：タイポ・ラグジュアリー
白地に細く大きな見出し＋短いリード1行。贅沢な余白（目安65%以上）で「静けさ」を見せる。写真なし、または極小の素材片1点でも成立。
TYPE B：ファッション・ヒーロー
白背景の人物/プロダクト写真を1点大きく配置（全身の引き or 素材の極端な寄り）。見出しは余白側に置き写真と干渉させない。シリーズ内に必ず極端な寄りのクロップを1枚入れる。本文は最小。
TYPE C：ロジック
細い罫線とエレガントな数字（Didone）で比較/構造を誌面的に。装飾を排し、余白と階調だけで整理。最重要の数値/領域だけアクセント色。

【表紙スライドの特別指定】
白の余白を最大に取り、被写体1点＋細く大きなタイトルで品格と緊張感を立ち上げる。被写体は彫刻的に大きく、または極端な寄り。メインコピーは抽象名詞1語を禁止、1文で言い切る（本文の20倍以上）。サブで「見終わると何が変わるか」を約束しGoalへ。アクセントは一点のみ、最下部は完全に空白。

【FINAL CHECK】白の余白が主役級に効いているか（埋めすぎていないか）。被写体が1点に絞られ彫刻的に見えるか。寄りと引きが混ざっているか。アクセントが口紅の一点だけか。影が淡く上品か。見出しだけで流れが通り、最後がGoalの一手か。

【禁止】
暗い背景、多色、ドロップシャドウ/グロー、装飾過多、丸いポップ書体、粒状ノイズ、被写体の溶け込み、画像内への文字焼き込み、Markdown記号（# * **）。`,"blue-note-jazz":`【世界観・ビジュアルOS】（Blue Note Jazz — Reid Miles的ジャズLP編集）
トーン
1950-60sのBlue Noteレコードのジャケット。北極星はアートディレクターReid Miles＋写真家Francis Wolff＝非対称タイポグラフィの緊張感、大胆にクロップしたモノクロ写真、2色制限の洒脱さ。タイプが写真を貫く即興的レイアウト。スイス様式の規律の上で「鳴る（スイングする）」デザイン。クールで知的、間（ま）が効いている。

写真の方針（最重要）
モノクロ写真（人物の横顔/楽器/手元/眼差し）を大胆にトリミングし、画面の片側に大きく寄せて配置する。Francis Wolff的なキャンディッド（決定的瞬間）の質感。
高コントラストの白黒、粒状感は上品に抑える。被写体の「間」と所作、視線の方向を生かして余白に意味を持たせる。
写真とタイポを重ね、タイプが写真を貫く／回り込む構図を積極的に作る。写真は1スライド1点を大きく、寄りと引きを混ぜる。

【Color】
厳格な2色制限＝背景の単色（オーカー #E09F3E／バーミリオン／インディゴ #14213D／ティールのいずれか）＋黒白。高彩度の単色を大きな面で効かせ、写真は単色面の上にモノクロで置く。多色禁止。色＝意味として使い、装飾で散らさない。

【タイポグラフィ】
コンデンスド・ゴシック（Franklin Gothic / News Gothic 系）を主役に。大小混合、トラッキングを広げて文字で「面（壁）」を作る。ジャンプ率を極端に。
タイプがフレームや写真を貫いてよい（重なり・回り込み・縦組み）。非対称・即興的に配置し、グリッドの規律の上で崩す。英語主体＋短い日本語の言い切りを添える。英語タグは1〜3語。

【コピー設計】
ジャズのタイトルのように、短く洒脱で余韻のある言葉。説明より「響き」を狙う。1スライド1メッセージ、最後はGoalへの一手。英語タグを効果的に。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：タイポ・ジャズ
単色地に大小のタイプを非対称に配置し、文字組だけで見せる。写真なしで成立。余白とタイプの緊張、トラッキングの「面」でリズムを作る。
TYPE B：クロップ・フォト
モノクロ写真を大胆クロップ（横顔・手・楽器）し片側へ大きく寄せ、反対側を単色面に。タイプが写真を貫く構図を必ず作る。本文は最小、視線の先に余白を残す。
TYPE C：ロジック
細い線と大きな数字（コンデンス体）で比較/手順を2色の規律で整理。最重要のバー/数値だけ単色アクセント、他は黒白。スイングするリズムで配置。

【表紙スライドの特別指定】
非対称・大胆クロップのモノクロ写真＋単色面＋貫くタイポ。ジャケットのような「鳴る」構図で最初の1枚に強い個性を立てる。メインコピーは抽象名詞1語禁止、1文で言い切り（本文の20倍以上）。サブで変化を約束しGoalへ向かう「1曲目」に。2色厳守、最下部は空白。

【FINAL CHECK】色が2色（単色＋黒白）に収まっているか。タイプが写真を貫く非対称の緊張があるか。写真の「間」と視線が余白に効いているか。コンデンス体のトラッキングで面ができているか。見出しだけで流れが通り、最後がGoalの一手か。

【禁止】
3色以上、グラデ、3D、丸いポップ書体、過度な粒状ノイズ、整いすぎた対称レイアウト、画像内への文字焼き込み、Markdown記号（# * **）。`,"ghibli-nature":`【世界観・ビジュアルOS】（Ghibli Nature — 手描きアニメ背景美術風）
トーン
スタジオジブリ的な手描きの背景美術。北極星は背景美術家・男鹿和雄の世界＝やわらかな光、風や緑の息づかい、ノスタルジックで温かい情景。1枚1枚が映画のワンシーンのよう。観る人の感情をそっと開き、難しい話も「物語の風景」として腑に落とし、Goalへ向かう気持ちを育てる。説得より共感、断言より余韻。

描画/質感（最重要）
水彩/グワッシュ調の手描き背景。空・雲・草原・木漏れ日・水面・遠景の山を、層（レイヤー）の重なりで奥行きを作る（近景=濃く細密／遠景=淡く霞む）。
筆致は緻密だが優しい。輪郭線は最小限、面と光で形を取る。葉の一枚、雲の縁、光の差し方まで意図を込める。
人物や象徴は小さく情景の中に置き、世界の広さと「居場所」を感じさせる。引きの構図を基本に、時々ディテール（手元・草花）の寄りを混ぜる。時間帯（朝・昼・夕・逆光）で感情の温度を変える。

ライティング
やわらかな自然光と暖かい木漏れ日。逆光・薄明・夕暮れのオレンジを効果的に。影は青みのある柔らかい色（黒く締めない）。光に方向と物語を持たせる。

【Color】
自然由来の豊かなパレット（空色・新緑・土・夕暮れのオレンジ #F2B85A／苔の緑 #9BCF7A）。彩度は中〜やや高だが調和的でくすませない。暖かい光を基調に、影は寒色で締めてコントラストを作る。色数は情景に必要な分だけ、けばけばしくしない。

【タイポグラフィ】
見出しは柔らかいゴシック、またはやさしい明朝に手書きの温度を少し。画面の情緒を壊さない控えめな上品さで、情景の余白側に置く。本文は読みやすく短く、たっぷりの行間で。英語タグは控えめに1〜2語。文字は情景に焼き込まずテキスト要素として。

【コピー設計】
やさしいのに芯のある言葉。断言で殴らず、小さな希望と「次の小さな一歩」を約束する。日常語で難語を避ける。1スライド1メッセージ、最後はGoalへの一手。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：情景・インパクト
広い風景を画面いっぱいに＋小さめの見出しを余白（空や草原）に。余韻のある余白で感情を置く間（ま）を作る。光の方向で気持ちを導く。
TYPE B：シーン
情景の中に人物や象徴（小さな後ろ姿・開いた窓・一本道）を置き、物語の一場面として見せる。光と季節で温度を演出し、引きの構図で世界を感じさせる。本文は短い一文。
TYPE C：やさしい図解
手描き風のアイコンと自然モチーフ（道・川・木・橋）で手順や関係を。線は柔らかく、配色は調和的に。現在地と次の一歩だけ暖色で灯す。

【表紙スライドの特別指定】
映画の冒頭のような情景＋やわらかな大タイトル。光の差す風景（朝/夕の逆光が効く）で世界に引き込む。メインコピーは抽象名詞1語禁止、やさしく芯のある1文（本文の20倍以上だが画面の静けさを壊さない）。サブで「見終わると心がどう動くか」を約束しGoalへそっといざなう。最下部は空白、文字は情景の余白に。

【FINAL CHECK】水彩/グワッシュの手描き背景として成立しているか（硬いベクター/写実に逃げていないか）。光に方向と物語があるか。影が黒でなく寒色で柔らかいか。引きの情景に小さな人物/象徴で居場所が出ているか。言葉がやさしく芯があり、最後がGoalの一手か。

【禁止】
硬いベクター/3Dレンダ、ネオン、過度な幾何学、写実写真、けばけばしい/くすんだ彩度、黒く硬い影、画像内への文字焼き込み、Markdown記号（# * **）。`,"soviet-construct":`【世界観・ビジュアルOS】（Soviet Constructivism — 構成主義プロパガンダ）
トーン
1920sロシア構成主義。北極星はRodchenko／El Lissitzky／Stenberg兄弟＝赤い斜めの力線、力強い幾何学、写真モンタージュ、革命的なエネルギーと秩序。見る者を「動かす」ための宣言のデザイン。規律（グリッド）の上で大胆に崩し、静と激のメリハリで畳みかける。煽りすぎず、構築の知性を保つ。

ビジュアルの方針（最重要）
強い対角線が構図の骨格。主要素を斜めの力線（30〜45度）に沿わせ、運動と緊張を作る。水平垂直の安定を意図的に崩す。
写真はモノクロの高コントラスト。労働者・機械・建築・手・眼などを大胆にカットアウト（硬いエッジ）し、幾何学（太い帯・円・三角）と重ねるフォトモンタージュに。スケールを誇張（巨大な手、極小の群衆）して力を出す。
赤い斜め帯を画面を貫くように1〜2本。視線を画面端から端へ強制的に動かす導線として機能させる。

ライティング/質感
ハードでドラマチックな白黒。粒状感は版画/活版/孔版印刷のように荒くてよい。インクの質感、紙の風合い、刷りムラを生かす。

【Color】
赤(#D7263D)＋黒＋生成り/白の厳格な3色。赤は力線・面・最重要の強調にだけ使う「意味の色（力・危険・前進）」。多色・パステル禁止。

【タイポグラフィ】
極太のサンセリフ大文字（Grotesque系）。斜め配置・縦組み・回転を恐れない。トラッキングで構築感（壁）を出し、大小のジャンプ率を極端に。
英語と日本語を構造材（バー/ブロック）として組み、帯や写真と噛み合わせる。スローガン的な力強い言い切り。英語タグは1〜3語。

【コピー設計】
スローガンのように短く、命令形/宣言形で人を動かす。問いと宣言を畳みかける。1スライド1メッセージ、最後はGoalへの一手（次の行動の号令）。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：スローガン・インパクト
対角の赤帯＋極太見出しを画面いっぱいに。最小限の言葉で力強く。余白と帯の緊張で「ためて落とす」。
TYPE B：フォトモンタージュ
モノクロ写真の大胆カットアウト＋幾何学＋赤の力線。対角構図とスケール誇張で運動を作り、視線を強制誘導。本文は最小、号令的見出しを大きく。
TYPE C：ロジック
幾何学（矢印・円・帯・ブロック）で手順/構造/比較を、対角の動きを保ちつつ整理。数字を巨大に構造材として使い、最重要だけ赤。要素を増やしすぎない。

【表紙スライドの特別指定】
対角構図＋赤・黒・白＋極太タイトルで「宣言」の初速を最大化。フォトモンタージュの主役（巨大な手/眼/機械）を大胆に配置し、赤い力線で視線を起こす。メインコピーは抽象名詞1語禁止、号令的な1文で言い切り（本文の20倍以上）。サブで変化を約束しGoalへ向かう運動の起点に。3色厳守、最下部は空白。

【FINAL CHECK】対角の力線が骨格になっているか（水平垂直で安定しすぎていないか）。色が赤・黒・白の3色に収まり赤が意味で機能しているか。写真がカットアウト＋幾何学のモンタージュで成立しスケール誇張が効いているか。極太大文字に構築感があるか。見出しだけで流れが通り、最後がGoalの号令か。

【禁止】
パステル/多色、グラデ、3D、写実的なつるっとした質感、丸いポップ書体、水平垂直の優等生レイアウト、画像内への文字焼き込み、Markdown記号（# * **）。`,"risograph-retro":`【世界観・ビジュアルOS】（Risograph Retro — リソグラフ印刷風）
トーン
リソグラフ/孔版印刷の温かみ。北極星は現代のインディー出版・アートブックフェア（ZINE）のリソ作品＝わずかな版ズレ、粒状感、限定スポットカラーの重なり。手仕事の体温と、抜けの良い現代的な編集眼の両立。クラフト感はあるが雑ではなく、色の重なりを計算したセンスで魅せる。

描画/質感（最重要）
2〜3色のスポットカラーを半透明インクで重ね刷りする表現。版が意図的に少しズレ（ミスレジストレーション）、重なった部分に第3の中間色が生まれる（ピンク×ブルー=紫等）。
全面にうっすら粒状・ドット（網点）のテクスチャ。紙の白（地）とインクのムラ・かすれを生かす。ベタ面にも粒状感を残す。
イラスト/幾何学/シンプルな人物はフラットに、塗りはベタ＋ハーフトーンの諧調。写実・グラデの精密表現は避け、版で表現できる範囲に留める。

【Color】
リソ定番のスポットカラー2〜3色（フローレセントピンク #FF6F91／ブルー #6A8EAE／イエロー #FFD23F／グリーンから2〜3色）＋紙白。重なりで中間色を作り、色数を絞って重なりの妙で魅せる。CMYK的な写実フルカラーは禁止。最重要の一点は蛍光色のベタで視線を止める。

【タイポグラフィ】
レトロな太めサンセリフ、または味のあるディスプレイ書体。版ズレ風に同じ文字を別色で少しずらして重ねてよい（1スライド1箇所）。見出しは大きく遊び心を持ってジャンプ率を強く。英語＋短い日本語。ラフだが可読性は保つ。文字は焼き込まずテキスト要素として。

【コピー設計】
カジュアルで親しみやすく、でもセンスのある言葉。インディー誌の見出しのように軽快に。1スライド1メッセージ、最後はGoalへの一手。例文は引用せず新規生成。

【スライド構成：3タイプ】（同じTYPEを3枚以上続けない）
TYPE A：タイポ・インパクト
紙地にスポットカラーの大見出し。版ズレと粒状感を効かせ、余白で抜けを作る。色の重なりを1箇所見せ場に。
TYPE B：イラスト・シーン
リソ調のフラットイラスト（人物・場面・象徴モチーフ）を大きく。2〜3色の重なりで温度と奥行きを出し、ベタとハーフトーンを混ぜる。本文は短く。
TYPE C：図解
半透明の重なりと網点で手順/比較/関係を。図形はフラット、色の重なり（ベン図的）で関係を示す。現在地と次の一歩だけ蛍光色のベタで。温かみを保つ。

【表紙スライドの特別指定】
ZINEの表紙のようなクラフト感＋大タイトル＋スポットカラーの遊び。版ズレと紙質感、色の重なりで「手に取りたくなる」一枚に。メインコピーは抽象名詞1語禁止、軽快だが芯のある1文（本文の20倍以上）。サブで変化を約束しGoalへ。色は2〜3色厳守、最下部は空白。

【FINAL CHECK】2〜3色のスポットカラーの重ね刷りとして成立し中間色が生まれているか。版ズレと粒状感が効いているか（CMYK写実に逃げていないか）。色数が絞られ蛍光の一点が効いているか。フラット＋ハーフトーンの塗りか。見出しだけで流れが通り、最後がGoalの一手か。

【禁止】
写実写真の多用、3D、鏡面/グロス、過度な精密グラデ、フルカラーCG感、4色以上の乱用、画像内への文字焼き込み、Markdown記号（# * **）。`,"underground-comic":`【世界観・ビジュアルOS】（Underground Comic — インディーコミック/ZINE/リソグラフ）
トーン
80〜90年代のアンダーグラウンドZINE、オルタナ新聞、DIYコミックフェスの実験的ナラティブ。物語・落書き・奇妙なユーモア・詩的断片をコマに閉じ込め、「読む」と「眺める」の中間体験を作る。完成された物語ではなく、夢の断片や都市伝説のような曖昧さをあえて残す。遊び心とシュール、手作りの温度が同居する。

描画/質感（最重要）
各スライドを1ページの漫画として扱う。コミックのコマ割り（パネルグリッド）をベースに、独立した小宇宙を並べてページ全体で一つの視覚リズムを作る。
線は手描きの不揃いさを残し、コマ枠・吹き出し・スターバースト・角丸キャプションを混在させる。非対称パネルと密度の濃淡で緊張と弛緩を交互に。
質感はリソグラフのグレイン、網点（ハーフトーン）、コピー機ノイズ、オフセットの版ズレ、ドライインク。影は使わず、フラットなナラティブ・レイヤリングで重ねる。
モチーフ：目、月、炎、小さな人物、仮面、抽象的な生き物、走り書き、矢印。子どもの絵のような素朴さとアートコミックの不穏さを共存させる。

【Color】
オフホワイトの紙面（#F7F4EF）を基調に、コマごとに赤(#F14A2B)・ネオンピンク(#E95DFF)・ディープチャコール(#1E1E1E)の色面を切り替える。アクセントは白とラベンダーグレー(#D7D2E3)。パレットは赤・ピンク・黒・紙白に厳格に限定し、新聞/ZINEのような印刷物の統一感を保つ。多色で散らさない。

【タイポグラフィ】
見出しは手描きレタリング/コミックタイトル/ラフな筆記体を組み合わせ、ページ上部を横断する雑誌表紙級の存在感に。特大・オーガニックなトラッキング。
サブはタイプライター風か細いサンセリフで、吹き出し・キャプション・モノローグとして。本文は行間1.3〜1.5で詰めすぎない。手描き要素が構造を割り込んで邪魔してよい。

【コピー設計】
都市伝説や夢の断片のような、説明しすぎない言い切り。問い・矛盾・詩的断片で余白を残す。説明より謎を優先。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：表紙コマ・大ゴマ
ページ横断の手描き大タイトル＋象徴的な1コマ。スターバーストや走り書きで「最初のページ」の引きを作る。
TYPE B：コマ割りナラティブ
2〜5コマの非対称パネルで物語を断片的に。各コマに独自のムード（静と激）を持たせ、吹き出しと走り書きで声を足す。視線の流れを設計。
TYPE C：キャプション編集
1つの大きなビジュアル＋細かいキャプション群とハーフトーンの色面で、手順や比較を編集的に。密と疎を交互に。

【表紙スライドの特別指定】
ZINEの表紙のように、ページを横断する手描き大タイトル＋謎めいた主役モチーフ＋スポットカラーの色面。版ズレと網点で「手に取りたくなる」一枚にし、曖昧さを残したままGoalへ誘う。

【禁止】
コーポレート的洗練、ラグジュアリーミニマル、グラスモーフィズム、滑らかなグラデ、写実イラスト、複雑な3D、可愛いマスコット、磨き上げたベクター、過剰な情報密度、画像内への文字焼き込み、Markdown記号（# * **）。`,"street-editorial":`【世界観・ビジュアルOS】（Street Editorial — アーバン・エディトリアル/ストリートポスター）
トーン
ストリートカルチャー、アングラ音楽ポスター、90年代スポーツブランド広告、グランジタイポ、街の壁ポスター文化から来たエモーショナルな都市編集デザイン。都市のざらつきと衝動を、巨大タイポ・写真の断片・手書きの痕跡で可視化する。完璧に洗練された都会ではなく「街で生きる本能」=若さ・反骨・仲間意識を表現。クールでロウ、本物の手触り。

描画/質感（最重要）
ファッション広告とストリートポスターを融合した高コントラストな編集。厳格なグリッドをベースに、タイポと写真を大胆に越境させる（コントロールされたカオス＝中程度）。
巨大なタイポグラフィを建築物のように扱い、ページを縦断させ、時にキャンバス外へはみ出させる。縦組みの文字列、大胆なクロップ。余白を大きく取り、緊張感を残す。
質感はスクリーンプリントのグレイン、新聞紙の柔らかさ、布目、かすれた紙、壁の劣化。影は最小、フラットな編集レイヤリング。アナログスキャンのアーティファクト、波状の干渉、わずかな文字の引き伸ばし。
図形：縦のバー、細い罫線、放射線、幾何ブロック、ラフな矩形、ポスター枠。記号は翼・解剖学的ハート・手書きサイン・矢印などアイコニックに少数。

【Color】
コンクリートのグレー(#D8D6D1)とアスファルトの黒(#1D1B1F)を基調。アクセントはエレクトリックティール(#27D6D6)のみを唯一の鮮やかな色として差す。チャコール(#343238)、白、ソフトグレー(#A5A3A0)で構成。夜の都市にネオンが灯るような緊張感を、ティールのインク一点で生む。多色は禁止。

【タイポグラフィ】
見出しは極端に縦長で圧縮されたサンセリフ（Bebas/Helvetica Condensed/Agency系）。ウェイト700〜900、トラッキングは極めて詰める、モニュメンタルな特大。縦積み・大胆クロップ。
サブは手書きスクリプト/ラフな筆記体を感情的アクセントに。本文は細身サンセリフで、小さな声明文/マニフェストのように配置（300〜400、行間1.3〜1.5）。

【コピー設計】
反骨と熱量のある言い切り。マニフェスト調の短い宣言、街のスローガンのような一撃。感情と本能に訴える日本語。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：モニュメンタル・タイトル
ページを縦断する超特大タイポ＋大きな余白＋写真の断片。文字が主役、画像は従。はみ出しクロップで勢いを出す。
TYPE B：写真×タイポの越境
ティールのデュオトーン写真を大胆に配置し、巨大タイポと縦組みテキストを重ねる。グリッドを意図的に破る。マニフェストブロックを添える。
TYPE C：声明＋ロジック
細い罫線と幾何ブロックで手順/比較を編集的に。理性的グリッドに感情的なジェスチャー（手書き）を混ぜる。

【表紙スライドの特別指定】
ストリートポスターの表紙。ページを縦断する超特大タイトル＋ティールで染めた都市写真の断片＋手書きの痕跡。大きな余白と緊張感で「街の宣言」を最初に叩きつけ、Goalへ誘う。モバイルでも成立する強さを保つ。

【禁止】
コーポレート的洗練、ラグジュアリーミニマル、明るい多色パレット、グラスモーフィズム、写実的なライフスタイル写真、滑らかなグラデ、可愛いイラスト、複雑な3D、過剰装飾、画像内への文字焼き込み、Markdown記号（# * **）。`,"playground-graffiti":`【世界観・ビジュアルOS】（Playground Graffiti — ポップで親しみやすいグラフィティ）
トーン
ストリートアート、ヒップホップ、スケートパーク、街の壁面アートから来たグラフィティ風。落書きの自由さと遊び心を、親しみやすく整理されたレイアウトに乗せる。ポップな吹き出し・ドリップ文字・手描きアイコンで「自由な発想」と「楽しいエネルギー」を表現。学校新聞・子ども向け企画・ワークショップ・地域イベント・社内コミュニケーションなど、カジュアルで温かい資料に。

描画/質感（最重要）
クリーンな編集レイアウトをベースに、大きく遊び心のある見出しと装飾的なコーナー要素を配置（12カラムグリッド、外周マージン広め、バランスの取れた余白）。混在した非対称。
背景は古びたコンクリート壁：薄ベージュの漆喰、ヘアライン状のひび、わずかな風化と染み、マットな質感。ノイズはごく弱く、マットな壁画の仕上がり。
イラストはフラットベクター＋柔らかな不完全さ＋ステッカー風。バブルレター、ドリップ（垂れる塗料）、手描きタグ、矢印、ドット、スパークル、小さな星、ミニ落書き。装飾は「枠取り」として使い、コンテンツ領域は散らかさない。

【Color】
壁のベージュ系（#E8E2D8 / #D9D1C4 / #B8B0A4）を基調。アクセントはアクア(#7DE2E3)、スカイブルー(#67C7E8)、バブルピンク(#E9B7D8)。文字は濃いブラック(#1D191B)とセカンダリ(#3F3B3D)。スパークルは白、ドットと塗料の滴は黒。明るく親しみやすいトーンを保ち、暗く攻撃的なグラフィティにしない。

【タイポグラフィ】
見出しはグラフィティマーカー調（太字700、黒）。グラフィティワードアートはバブル体で、塗りはピンク〜アクアのグラデ、太い黒ストローク、塗料の垂れ・ハイライト・ラフなエッジ付き。
数字は手描きマーカー風（700、黒）。本文は丸ゴシック（400）。可読性を最優先し、装飾過多にしない。

【コピー設計】
前向きでフレンドリー、親しみやすい語りかけ。子ども・地域・仲間に届く温かい言葉。難しい概念も楽しく言い換える。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：表紙・大グラフィティ
大きなグラフィティタイトル＋バブルクラウドの背景＋サブタイトルのボックス＋コーナーの落書き＋壁テクスチャ。
TYPE B：コンテンツ
グラフィティイラスト領域＋マーカー見出し＋キーメッセージのハイライトボックス＋ゆとりあるコンテンツゾーン。余白を大きく。
TYPE C：大きな数字／目次
特大の数字（手描きマーカー）＋最小限の補足、またはバブル番号バッジ付きの5項目目次。底部にグラフィティ装飾。

【表紙スライドの特別指定】
大きなバブルグラフィティのタイトル＋雲状の吹き出し背景＋壁テクスチャ＋コーナーのミニ落書き。楽しくて温かい「ようこそ」の空気を作り、ゆとりある余白でGoalへ誘う。

【禁止】
ラグジュアリー、コーポレートミニマル、過度な写実、重いデータ表、暗く攻撃的なグラフィティ、複雑なインフォグラフィック、画像内への文字焼き込み、Markdown記号（# * **）。`,"urban-graffiti":`【世界観・ビジュアルOS】（Urban Graffiti — 夜の都市×ドキュメンタリー写真エディトリアル）
トーン
ストリートカルチャー、Z世代の自己表現、インディーズブランド、アングラアートから来たエディトリアル。夜の都市風景とリアルな人物写真を大胆に使い、ピクセルタイポ・手描きの落書き・DIY精神のグラフィックを重ね、「不完全さ」と「勢い」をデザインに昇華する。起業家精神・ブランド戦略・若者向け・社会課題への挑戦など、熱量とリアリティを伝える資料に。ボールド、反骨、本物、ロウ。

描画/質感（最重要）
フルブリードの写真を主役に、エディトリアルな非対称・特大ステートメントタイポ・レイヤー状のグラフィック介入で動的な構図を作る（12カラム、外周マージン中）。秩序とカオスの緊張を保つ。
写真はドキュメンタリー・ストリート編集：都市の若者、多様なコミュニティ、夜の街、横断歩道、バスケコート、公共空間、日常の反骨。処理はデュオトーン（ブルー単色ティント）、高コントラスト、フィルムグレイン、わずかなブラー、低照度の空気。
質感：印刷ハーフトーン（中）、繊細なノイズ、マットな紙。乗算オーバーレイ。ピクセル化は選択的にタイポだけ。歪みは低め。
手描きグラフィティ：走り書き、矢印、バツ印、ループ、丸囲み、ラフな下線、不完全なストローク（ネオンイエロー #F3EB3C）。アイコンはミニマルなアウトラインで角・余白・タイムライン見出しに。

【Color】
ミッドナイト(#19161B)・アスファルト(#2A2523)・コンクリート(#4B4B52)のダーク基調。アクセントはエレクトリックブルー(#455BFF)とネオンイエロー(#F3EB3C)。文字はオフホワイト(#F7F7F7)とセカンダリ(#D7D7D7)、数字はネオンイエロー。写真はブルー単色に染め、黄色を手書き介入の一点に使う。

【タイポグラフィ】
見出しは圧縮された幾何サンセリフ、700、UPPERCASE、白。特大〜超特大。一部の文字・語尾・セクション強調にピクセル表示体を選択的に混ぜる。
数字は圧縮サンセリフ700・ネオンイエロー。本文はモノスペース400・オフホワイト。文字周りに大きな余白を残す。

【コピー設計】
熱量とリアリティのある宣言。マニフェスト調の一文、本能と衝動に訴える短い言い切り。起業・社会課題・若者文化の文脈。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：表紙・フルブリード写真
全画面のストリート写真＋分割した特大タイトル＋手書き注釈＋小さなマニフェスト文。
TYPE B：写真ステートメント／引用
全面の都市写真の上に、一撃の強い一文を中央またはエディトリアルに配置。手描きの走り書きで強調。
TYPE C：プロセス／二段組ストーリー
水平のプログレスバーやアイコン主導の4ステップ、またはモノスペース本文の二段組＋補助写真。強い視覚リズム。

【表紙スライドの特別指定】
全画面のドキュメンタリー写真（ブルーデュオトーン）＋分割した特大タイトル＋ネオンイエローの手描き注釈＋小さなマニフェスト。秩序とカオスの緊張を最初に提示し、熱量でGoalへ引き込む。

【禁止】
コーポレートのストックフォト、磨き上げた3D、過剰なグラデ、フォーマルなビジネスチャート、保守的レイアウト、密な分析テーブル、可愛いイラスト、画像内への文字焼き込み、Markdown記号（# * **）。`,"multi-neumo":`【世界観・ビジュアルOS】（Multi Neumo — ニューモーフィズム×ミニマル・インフォグラフィック）
トーン
ニューモーフィズムの柔らかな立体感とミニマルなインフォグラフィックを融合した、モダンで親しみやすいプレゼン。丸みのあるカード・浮遊する円形バッジ・繊細なシャドウ・シンプルなラインアイコンで、プロセスやステップを直感的に整理する。情報量を絞り余白を大胆に活かし、上質さと視認性を両立。サービス紹介・業務フロー・ロードマップ・教育・ワークショップ・スタートアップ提案に。

描画/質感（最重要）
背景と同色のサーフェスから「押し出された/へこんだ」ように見せるニューモーフィック表現が核。すべての要素を角丸の幾何にし、統一されたソフトシャドウで柔らかい立体を作る。
カードは角丸長方形（大きめの半径）。光源は常に左上：ハイライト（白 #FFFFFF）を左上(-8px,-8px/blur18)、ダークシャドウ(rgba0,0,0,0.12)を右下(8px,8px/blur18)に一貫させる。影は拡散ソフト・低コントラスト・方向統一。
円形バッジを浮遊要素としてカードの縁に重ねる（上/下/角/横）。中にステップ番号・アイコン・カテゴリーマーカー。
イラストはフラットベクター＋角丸ジオメトリ＋シンプルな形＋最小限のディテール。テクスチャは使わない。

【Color】
背景はライトグレー(#ECECEC)、カードは#F3F3F3。文字は#2F3137/#8F949C/#B8BDC4。アクセントはコーラル/オレンジ/ミント/ティール/スカイ/インディゴ/パープル/ピンク/ネイビー/スレートの多色だが、使うのはステップ番号・バッジの円・アイコン・キー数字だけに限定。面は常にモノトーン、色は階層付けにごく少量。
グラデは単方向・低彩度でごく控えめ。ボーダーは最小（白50%・極細）。

【タイポグラフィ】
見出しは圧縮サンセリフ700・UPPERCASE・字間0.08em・#2F3137。サブは500・#8F949C。本文は400・#6E747C・行間1.7。数字は圧縮サンセリフ700・白（バッジ内）。ロゴは一部の文字だけアクセント色を交互に差し、見出し系はモノクロを保つ。

【コピー設計】
1カード=1メッセージ。簡潔でモジュラー。落ち着いた上質さと親しみを両立する言葉。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：表紙・大余白
中央寄せ構図＋特大見出し＋浮遊する円形バッジ1つ。極端に大きな余白で上質さを出す。
TYPE B：ステップ／プロセス
3・4・6ステップのカードを水平フローか縦シーケンスで。各カードに大きなステップ番号＋円形バッジ＋短い説明。角丸タイムラインバーで接続。
TYPE C：情報ブロック比較
モジュラーなインフォグラフィックカードをグリッドで並べ、ラインアイコン＋短文で機能/カテゴリを整理。進捗インジケーターやパーセント強調を最小限のチャートで。

【表紙スライドの特別指定】
中央寄せの特大見出し＋浮遊する円形バッジ＋極端な余白。柔らかなニューモーフィックシャドウで「触れたくなる」上質さを出し、静かにGoalへ誘う。

【禁止】
重いチャート・密なデータ可視化、テクスチャ、強い影や高コントラスト、装飾過多、ダーク基調、写実写真の多用、3Dレンダ、画像内への文字焼き込み、Markdown記号（# * **）。`,"neon-neumo":`【世界観・ビジュアルOS】（Neon Neumo — プレミアム・ニューモーフィズム×ビジネス・エディトリアル）
トーン
プレミアムなニューモーフィズムとビジネス向けエディトリアルを融合した次世代プレゼン。柔らかな立体の白いカード・繊細なエンボス・ネオンのようなグラデアクセントで、高級感と先進性を両立。AI・DX・SaaS・コンサル・スタートアップ提案・事業戦略に適した「静かな未来感」。エグゼクティブで知的、ソフト。

描画/質感（最重要）
モノクロのニューモーフィックサーフェスを土台に、エンボス（同色レリーフ＝極めて繊細なコントラストでの浮き彫り）を表紙・締め・ヒーロー語・背景の数字に使う。
カードは浮遊するエグゼクティブパネル：背景#EEF0F5、半径36px。ハイライト(rgba255,255,255,0.95)を左上(-10,-10/blur24)、シャドウ(rgba198,203,214,0.45)を右下(10,10/blur24)。押し込み(pressed)はインセット影で表現。影は多層・拡散ソフト・低コントラスト・方向統一。
ダッシュボード由来の構図＋エディトリアル。大きな余白、モジュラー、バランスの取れた非対称。装飾は細い軌道カーブ・最小の円ガイド・柔らかなエンボス形のみ。
人物は円形クロップ＋グラデーションのリングフレームで強調。アイコンは2px outline・角丸端子・グラデ塗り。

【Color】
背景#EEF0F5/#F5F6F8のモノクロ。文字は#6E7085/#A5A9B7/#C9CDD8。アクセントはパープル(#6E3BFF)→マゼンタ(#FF2E8C)の135度リニアグラデを、アイコン・人物背景・KPI強調・進捗・CTAだけに限定使用。面はモノトーンを保ち、グラデは「強調の瞬間」に予約する。ボーダーは避ける。テクスチャなし。

【タイポグラフィ】
見出しは幾何サンセリフ700・#6E7085。ディスプレイは600・#7A7E8F。サブは500・#A5A9B7。本文400・#8F93A3・行間1.6。ハイライトはパープル→マゼンタのグラデテキスト。エンボス文字は控えめに、洗練のために使う。

【コピー設計】
エグゼクティブ向けの簡潔で知的な言い切り。先進性と信頼を両立する言葉。誇張せず静かに未来を語る。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：表紙・エンボスヒーロー
エンボスのヒーロータイトル＋グラデの人物アクセント（円形クロップ＋グラデリング）＋最小の装飾カーブ＋小さなCTAカプセル。
TYPE B：サービス／プロセス
3カードの浮遊パネル＋円形アイコンバッジ＋パーセント要約、または水平ステップ図・放射ワークフロー・円形プロセスマップ。
TYPE C：アナリティクス／戦略
KPIダッシュボード（グラデのバー/円形KPI/進捗/バブル）やSWOT・ハブ&スポークの関係図。エグゼクティブが一目で読める密度に絞る。

【表紙スライドの特別指定】
エンボスの特大タイトル＋パープル→マゼンタのグラデを纏った円形ポートレート＋繊細な軌道カーブ。静かな未来感と高級感を最初に提示し、Goalへ誘う。

【禁止】
密なスプレッドシート・複雑なデータ表、ボーダー多用、テクスチャ、強い影や高コントラスト、けばけばしい多色、ダーク基調、写実写真の多用、画像内への文字焼き込み、Markdown記号（# * **）。`,"industrial-manual":`【世界観・ビジュアルOS】（Industrial Manual — 取扱説明書/分解図/スイス・テクニカル）
トーン
工業製品の取扱説明書、分解図（Exploded View）、テクニカルドローイング、スイス・タイポグラフィ、実験的エディトリアルから来た情報設計重視のスタイル。製品や概念を「組み立てられるシステム」と捉え、線画・注釈・番号付けで構造を可視化する。説明を装飾するのではなく、理解のプロセスそのものをデザインする。知性と機能美。テクニカル、精密、分析的、機能的。

描画/質感（最重要）
テクニカルなライン・イラストが核。均一なストローク幅のベクター輪郭、内部ディテールは最小、アイソメトリックな簡略化、分解図（パーツを視覚的に分離）、図解的明晰さ。陰影なし・写実なし。
オブジェクトはシステム=製品として扱い、隠れた構造を露わにし、機構や組み立て手順を見せる。リーダー線・番号付きコールアウト・テクニカル矢印・寸法ガイド・チェック・警告アイコン・バツ・セクション区切りを使う。
印刷効果：シャープなベクター仕上げ、フラットなモノクロインク、グラデなし、影なし、エンジニアリング精度。

【Color】
ウォームグレー(#F4F2F0)の紙面を基調。線と文字はチャコール(#2D2D2D)とグレー(#6A6A6A)。アクセントはシグナルレッド(#FF3658)のみを、線画・重要コールアウト・強調に一点投入。色数を増やさず、テクニカルな一貫性を保つ。

【タイポグラフィ】
見出しは太い幾何サンセリフ800・UPPERCASE・トラッキング詰め。ラベルはネオグロテスク500・小さめ。注釈はモノスペース400。本文はニュートラルなサンセリフ400。強い縦アラインメントと明確な読み順を作る。

【コピー設計】
機能が形を決める。説明的で簡潔、手順・因果・分解の言語。装飾的な情緒を避け、理解の順序を言葉でも設計する。例文は引用せず新規生成。

【スライド構成：3タイプ】
TYPE A：ヒーロー分解図
中央に主役の分解図（Exploded View）＋周囲に番号付きの注釈と説明。底部にサマリーストリップ。
TYPE B：手順／組み立てシーケンス
連番のステップで機構や手順を分解。リーダー線とテクニカル矢印で関係を示す。マルチカラムの編集グリッド。
TYPE C：システムマップ／意思決定
プロセスフロー・システムマップ・決定木・連続フレームワークで、見えない構造を可視化。図を段落より先に。

【表紙スライドの特別指定】
取扱説明書の表紙のような機能美。中央に象徴的なテクニカル線画（分解図）＋太い大見出し＋シグナルレッドの一点。精密さと明晰さで「これから理解できる」期待を作り、Goalへ誘う。

【禁止】
写実レンダ、装飾的イラスト、手描きスケッチ、重いテクスチャ、大きな画像背景、情緒的な物語写真、過度な色数、複雑な装飾、影・グラデ、画像内への文字焼き込み、Markdown記号（# * **）。`},ae=(e=50)=>({key:"brightness",label:"明るさ",type:"slider",defaultValue:e,min:0,max:100,leftLabel:"落ち着き",rightLabel:"明るい"}),B=(e=50)=>({key:"contrast",label:"コントラスト",type:"slider",defaultValue:e,min:0,max:100,leftLabel:"穏やか",rightLabel:"強い"}),M=(e=60)=>({key:"margin",label:"余白",type:"slider",defaultValue:e,min:0,max:100,leftLabel:"密度高め",rightLabel:"余白広め"}),Ge=(e=60)=>({key:"depth",label:"立体感",type:"slider",defaultValue:e,min:0,max:100,leftLabel:"フラット",rightLabel:"立体的"}),A=e=>({key:"brandColor",label:"アクセントカラー",type:"color",defaultValue:e}),jp=[{id:"swiss-bauhaus",name:"スイスグリッド・バウハウス",nameEn:"Swiss Bauhaus Grid",category:"structure",description:"方眼グリッドと赤の一点突破。機能主義モダニズムの権威と明晰さ。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #f1f1f1 55%, #e11d2a 100%)",tags:["グリッド","モダニズム","機能主義"],impressions:["知的・構造的","信頼感","ミニマル","大胆"],colorTones:["モノクロ","アクセント単色","ライト"],suitableFor:["論理的な比較・分類","コンサル/調査レポート","権威性を出したい資料"],unsuitableFor:["親しみや温かさを出したい場面","感情に訴える物語"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"medium"},tuning:[B(70),M(55),A("#E11D2A")],brandColor:"#E11D2A",promptBlock:mn["swiss-bauhaus"]},{id:"business-standard",name:"ビジネス・スタンダード",nameEn:"Business Standard",category:"business",description:"日本市場向けモノクロ写真ベース。誠実さと先進性を両立する法人資料の定番。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #ededed 60%, #c9c9c9 100%)",tags:["法人","モノクロ写真","エディトリアル"],impressions:["信頼感","高級感","知的・構造的","ミニマル"],colorTones:["モノクロ","ライト"],suitableFor:["法人営業・サービス紹介","誠実さと安心感が要る資料","日本国内のビジネス文脈"],unsuitableFor:["ポップで賑やかな表現","若年層向けのカジュアルな訴求"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"medium"},tuning:[ae(55),B(50),M(60)],brandColor:"#111111",promptBlock:mn["business-standard"]},{id:"pop-portfolio",name:"ポップ・ポートフォリオ",nameEn:"Pop Minimal Web Portfolio",category:"editorial",description:"Webポートフォリオ風。大きな余白×左揃え×鮮やかな差し色のミニマル＆ポップ。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #16cfe0 55%, #ff5278 100%)",tags:["Webポートフォリオ","ミニマル","差し色"],impressions:["ミニマル","革新","エネルギッシュ"],colorTones:["ライト","ビビッド","カラフル"],suitableFor:["ポートフォリオ/実績紹介","クリエイティブな提案","スタートアップ/Web系の資料"],unsuitableFor:["高密度の文章","堅いフォーマル資料"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(70),M(70),A("#FF5278")],brandColor:"#FF5278",promptBlock:G["pop-portfolio"]},{id:"collage-typo",name:"コラージュ・タイポ",nameEn:"Swiss Typographic Collage",category:"collage",description:"原色のベタ面とタイポグラフィの壁。結論をドンと見せる爽快なインパクト。",thumbnailClass:"linear-gradient(135deg, #0047ff 0%, #ff1a1a 60%, #ffcc00 100%)",tags:["タイポグラフィ","原色","スイススタイル"],impressions:["大胆","革新","エネルギッシュ","知的・構造的"],colorTones:["原色","ビビッド","モノクロ"],suitableFor:["強い結論を一撃で伝えたい時","ブランドの主張・宣言","注目を奪う表紙"],unsuitableFor:["落ち着いた高級感","繊細で静かなトーン"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(75),M(50),A("#0047FF")],brandColor:"#0047FF",promptBlock:G["collage-typo"]},{id:"mono-collage",name:"モノクロ・コラージュ",nameEn:"Monochrome Cutout Collage",category:"collage",description:"モノクロ切り抜き写真と余白の編集感。高級ビジネス誌の落ち着いた知性。",thumbnailClass:"linear-gradient(135deg, #1c1c1c 0%, #4a4a4a 70%, #e8e800 100%)",tags:["コラージュ","モノクロ写真","編集"],impressions:["知的・構造的","高級感","ミニマル","大胆"],colorTones:["モノクロ","アクセント単色"],suitableFor:["編集感のある読み物的な資料","人物・現場の空気を見せたい時","上品さと知性の両立"],unsuitableFor:["データ密度の高い分析","カラフルで明るい表現"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(55),M(60),A("#E8E800")],brandColor:"#E8E800",promptBlock:G["mono-collage"]},{id:"mono-edge",name:"モノクロエッジ",nameEn:"Monochrome Edge",category:"editorial",description:"モノクロ切り抜き×ネオンイエローの一点。岡本一宣的な余白設計のエッジ感。",thumbnailClass:"linear-gradient(135deg, #111111 0%, #3a3a3a 65%, #c8ff00 100%)",tags:["コラージュ","モノクロ写真","エッジ"],impressions:["大胆","知的・構造的","ミニマル","革新"],colorTones:["モノクロ","アクセント単色"],suitableFor:["鋭く印象づけたい資料","余白を活かした編集デザイン","若手ビジネス層への訴求"],unsuitableFor:["温かく柔らかい雰囲気","高密度のデータ表現"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(65),M(60),A("#C8FF00")],brandColor:"#C8FF00",promptBlock:mn["mono-edge"]},{id:"citypop-collage",name:"シティポップ・コラージュ",nameEn:"City Pop Collage",category:"editorial",description:"都市風景の切り抜きと明朝の余白。シティポップの夏の午後のようなメロウな洗練。",thumbnailClass:"linear-gradient(135deg, #f5f3ed 0%, #ddbe63 50%, #1e3a5f 100%)",tags:["コラージュ","都市風景","シティポップ"],impressions:["高級感","温かさ","ミニマル","知的・構造的"],colorTones:["寒色","暖色","アクセント単色"],suitableFor:["ライフスタイル寄りのサービス","都会的でメロウな訴求","洗練と親しみを両立したい時"],unsuitableFor:["厳格なデータレポート","モノクロで硬派にしたい時"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(55),B(40),M(60),A("#1E3A5F")],brandColor:"#1E3A5F",promptBlock:G["citypop-collage"]},{id:"doodle-collage",name:"ドゥードル・コラージュ",nameEn:"Doodle Collage",category:"editorial",description:"モノクロ写真の切り貼りに手描きの落書き。雑誌を切り抜いたノートのような温かい個性。",thumbnailClass:"linear-gradient(135deg, #f2eee7 0%, #ddbe63 55%, #e56a67 100%)",tags:["コラージュ","モノクロ写真","手描き"],impressions:["温かさ","大胆","ミニマル","革新"],colorTones:["暖色","モノクロ","アクセント単色"],suitableFor:["ブランドストーリー・ファッション","心理学・ウェルビーイング・教育","感情に届く個性的な訴求"],unsuitableFor:["厳格なデータレポート","堅いビジネス・複雑な図解"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(70),M(60),A("#E56A67")],brandColor:"#E56A67",promptBlock:G["doodle-collage"]},{id:"tech-infographic",name:"テック・インフォグラフィック",nameEn:"Clean Tech Infographic",category:"business",description:"白×ブルー×円形のミニマル図解。IT/サービス紹介の先進性とわかりやすさ。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #1768e8 60%, #ff1744 100%)",tags:["インフォグラフィック","テック","円形"],impressions:["知的・構造的","ミニマル","革新","信頼感"],colorTones:["寒色","アクセント単色","モノクロ"],suitableFor:["IT・SaaSのサービス紹介","プロダクト・プロセスの図解","先進的でクリーンな訴求"],unsuitableFor:["温かく情緒的な表現","高密度の長文資料"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"low"},tuning:[B(50),M(60),A("#1768E8")],brandColor:"#1768E8",promptBlock:G["tech-infographic"]},{id:"neo-circle-editorial",name:"ネオ・サークル・エディトリアル",nameEn:"Neo Circle Editorial",category:"editorial",description:"大胆な赤い円形とモノクロ写真。モダンアートポスターのようなアートディレクション。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #8c8c8c 55%, #ff1a1a 100%)",tags:["円形","モノクロ写真","アートディレクション"],impressions:["大胆","高級感","ミニマル","革新"],colorTones:["モノクロ","アクセント単色"],suitableFor:["クリエイティブエージェントの提案","ブランドの世界観を立てたい時","一撃の視覚インパクト"],unsuitableFor:["親しみやすく柔らかい雰囲気","データ密度の高い分析"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(75),M(60),A("#FF1A1A")],brandColor:"#FF1A1A",promptBlock:G["neo-circle-editorial"]},{id:"soft-brand-system",name:"ソフト・ブランドシステム",nameEn:"Soft Neo Brand Guidelines",category:"soft",description:"パステルとミニマルグリッドのブランドガイドライン。静かでプレミアムな洗練。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #dcd2ff 55%, #78e7d5 100%)",tags:["ブランドガイド","パステル","グリッド"],impressions:["ミニマル","高級感","温かさ","知的・構造的"],colorTones:["パステル","寒色","アクセント単色"],suitableFor:["ブランドガイドライン・ブランドブック","コスメ/ファッション/スキンケア提示","静かで上質な世界観"],unsuitableFor:["力強く煽りたい時","高密度のデータレポート"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(40),M(70),A("#78E7D5")],brandColor:"#78E7D5",promptBlock:G["soft-brand-system"]},{id:"editorial-infographic",name:"エディトリアル・インフォグラフィック",nameEn:"Editorial Infographic",category:"structure",description:"北欧ミニマル×雑誌レイアウト×ロングシャドウ。情報を楽しく直感的に見せる図解。",thumbnailClass:"linear-gradient(135deg, #f7f7f5 0%, #74d7d3 55%, #f27eb2 100%)",tags:["インフォグラフィック","パステル","ロングシャドウ"],impressions:["知的・構造的","温かさ","ミニマル","革新"],colorTones:["パステル","アクセント単色","寒色"],suitableFor:["教育・ワークショップ資料","スタートアップ提案・社内報","データを楽しく直感的に見せたい時"],unsuitableFor:["重厚で硬派な高級感","モノクロで静かなトーン"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"medium"},tuning:[B(45),M(65),A("#74D7D3")],brandColor:"#74D7D3",promptBlock:G["editorial-infographic"]},{id:"iso-blue-orange",name:"アイソメ・ブルーオレンジ",nameEn:"Isometric Blue Orange",category:"immersive",description:"等角投影の立体世界に City Boy が干渉。3色＋黒白で理解の快感を設計。",thumbnailClass:"linear-gradient(135deg, #2563eb 0%, #60a5fa 55%, #f97316 100%)",tags:["アイソメトリック","3色制限","インフォグラフィック"],impressions:["革新","知的・構造的","エネルギッシュ","大胆"],colorTones:["ビビッド","寒色","暖色","アクセント単色"],suitableFor:["構造・プロセスの図解","テック/SaaSの説明","理解を加速させたい時"],unsuitableFor:["写実的・情緒的な表現","落ち着いた高級感"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"high",textAmount:"low"},tuning:[Ge(65),B(60),M(55),A("#2563EB")],brandColor:"#2563EB",promptBlock:mn["iso-blue-orange"]},{id:"iso-color",name:"アイソメ・カラー",nameEn:"Isometric Color (Lineless)",category:"immersive",description:"主線なし・濃色ベース＋発光色の等角世界。整った幾何学と光で魅せる。",thumbnailClass:"linear-gradient(135deg, #0b1220 0%, #1f2937 50%, #22d3ee 100%)",tags:["アイソメトリック","主線なし","発光色"],impressions:["革新","知的・構造的","大胆","エネルギッシュ"],colorTones:["ダーク","ビビッド","寒色"],suitableFor:["テック・AIプロダクトの説明","近未来的な世界観","構造を美しく見せたい時"],unsuitableFor:["温かみのある親しみやすさ","紙的な手触り"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"high",textAmount:"low"},tuning:[Ge(60),ae(40),B(60),A("#22D3EE")],brandColor:"#22D3EE",promptBlock:mn["iso-color"]},{id:"iso-yellow",name:"アイソメ・イエロー",nameEn:"Isometric Yellow",category:"immersive",description:"無彩色＋エレクトリックイエロー1色。比喩メタファーで構造を直感に落とす。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #f0f0f0 55%, #ffcc00 100%)",tags:["アイソメトリック","単一アクセント","比喩図解"],impressions:["知的・構造的","ミニマル","革新","大胆"],colorTones:["モノクロ","アクセント単色","ライト"],suitableFor:["仕組みの分解・俯瞰","ボトルネックの可視化","ミニマルに構造を見せたい時"],unsuitableFor:["カラフルで賑やかな表現","写実的な情緒"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"high",textAmount:"low"},tuning:[Ge(55),B(60),M(60),A("#FFCC00")],brandColor:"#FFCC00",promptBlock:mn["iso-yellow"]},{id:"miniature-figure",name:"ミニチュア・フィギュア",nameEn:"Miniature Photoreal Figure",category:"immersive",description:"実写ミニチュアの世界で図解。高級プロダクト広告のようなクリアな質感。",thumbnailClass:"linear-gradient(135deg, #f5f5f5 0%, #d6d6d6 55%, #2563eb 100%)",tags:["ミニチュア","実写","プロダクト感"],impressions:["高級感","革新","温かさ","知的・構造的"],colorTones:["ライト","アクセント単色","カラフル"],suitableFor:["手触りのある世界観で魅せたい時","プロダクト/サービスの比喩表現","記憶に残す表紙"],unsuitableFor:["高密度の論理データ","フラットでクールな表現"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(55),Ge(70),A("#2563EB")],brandColor:"#2563EB",promptBlock:G["miniature-figure"]},{id:"miniature-keyboard",name:"ミニチュア・キーボード",nameEn:"Miniature Keyboard",category:"immersive",description:"キーボードを街に見立てたミニチュア実写。小さな住人の物語として情報を魅せる。",thumbnailClass:"linear-gradient(135deg, #f4f1eb 0%, #d9a441 50%, #f46a5a 100%)",tags:["ミニチュア","キーボード都市","物語性"],impressions:["温かさ","エネルギッシュ","革新"],colorTones:["暖色","カラフル","ライト"],suitableFor:["手触りのある世界観で魅せたい時","サービス/プロセスを物語で見せる","記憶に残す表紙"],unsuitableFor:["高密度の論理データ","フォーマルで堅い企業資料"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(60),Ge(70),A("#F46A5A")],brandColor:"#F46A5A",promptBlock:G["miniature-keyboard"]},{id:"impossible-monument",name:"インポッシブル・モニュメント",nameEn:"Impossible Monument",category:"immersive",description:"エッシャー的な錯視アイソメ建築。静謐で知的、余白の効いた哲学的世界観。",thumbnailClass:"linear-gradient(135deg, #eaf0f3 0%, #c9d9df 55%, #42c5d6 100%)",tags:["アイソメ","錯視建築","静謐"],impressions:["知的・構造的","ミニマル","高級感"],colorTones:["寒色","パステル","ライト"],suitableFor:["戦略/未来ビジョン/ロードマップ","哲学・システム思考の説明","AIの概念フレーム提示"],unsuitableFor:["写実表現","高密度インフォグラフィック"],tendencies:{reliability:"high",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(55),Ge(60),A("#42C5D6")],brandColor:"#42C5D6",promptBlock:G["impossible-monument"]},{id:"watercolor-sketch",name:"手書き水彩風",nameEn:"Architectural Watercolor Sketch",category:"soft",description:"建築スケッチ水彩の柔らかい空気感。安心と自己効力感を積み上げる温度。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #cfe3e6 55%, #d98b6a 100%)",tags:["水彩","手書き","日常"],impressions:["温かさ","ミニマル","高級感"],colorTones:["寒色","暖色","パステル","ライト"],suitableFor:["不安をほどく教育・セミナー","寄り添うトーンの資料","女性向け・ライフスタイル"],unsuitableFor:["権威的・データ重視の資料","大胆でクールな主張"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(60),B(35),M(70),A("#D98B6A")],brandColor:"#D98B6A",promptBlock:mn["watercolor-sketch"]},{id:"handwritten-mono",name:"手書きシンプルモノクロ",nameEn:"Wafu Swiss Handwritten Mono",category:"soft",description:"和風スイススタイル。明朝主役の線画と手書き文字で、静かに背中を押す。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #f0efe9 60%, #9a9a90 100%)",tags:["手書き","明朝","和風ミニマル"],impressions:["温かさ","ミニマル","高級感","知的・構造的"],colorTones:["モノクロ","ライト"],suitableFor:["静かに決断を促したい時","文化的な落ち着きを出す資料","不安に寄り添うセミナー"],unsuitableFor:["賑やかでカラフルな訴求","高密度のデータ表現"],tendencies:{reliability:"medium",visualPriority:"medium",dataCompatibility:"low",textAmount:"medium"},tuning:[B(40),M(70),A("#111111")],brandColor:"#111111",promptBlock:mn["handwritten-mono"]}],Pp=[{id:"corporate-clean",name:"コーポレートクリーン",nameEn:"Corporate Clean",category:"business",description:"数値・ロジック・構造が主役。McKinsey×Apple Keynoteの信頼感ある法人プレゼン。",thumbnailClass:"linear-gradient(135deg, #1a3a6e 0%, #2864c8 100%)",tags:["企業ブルー","データ","ロジック"],impressions:["信頼感","知的・構造的","ミニマル","革新"],colorTones:["ライト","アクセント単色","寒色"],suitableFor:["IR・投資家向け","データ・数値が主役の資料","経営層への提案"],unsuitableFor:["感情に訴える物語","手描きの温かみ"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"medium"},tuning:[B(55),M(60),A("#2864FF")],brandColor:"#2864FF",promptBlock:we["corporate-clean"]},{id:"modern-minimal",name:"モダンミニマル",nameEn:"Modern Minimal Corporate",category:"business",description:"クリーンな都市的モダン。スタートアップ・テック・コーポレートの定番。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #e8f6fa 55%, #4fc6df 100%)",tags:["モダン","クリーン","都市"],impressions:["ミニマル","革新","信頼感","知的・構造的"],colorTones:["ライト","寒色","アクセント単色"],suitableFor:["スタートアップ・テック","コーポレート資料","都市的な清潔感"],unsuitableFor:["温かい手描き","装飾的な表現"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"high",textAmount:"medium"},tuning:[B(50),M(65),A("#4FC6DF")],brandColor:"#4FC6DF",promptBlock:we["j_modern-minimal"]},{id:"neo-mondrian",name:"ネオ・モンドリアン",nameEn:"Neo Mondrian",category:"structure",description:"原色の矩形と黒い格子。純粋・大胆・時代を超える幾何学構造。",thumbnailClass:"linear-gradient(135deg, #e63946 0%, #ffffff 50%, #1d4ed8 100%)",tags:["幾何学","原色","グリッド"],impressions:["大胆","ミニマル","知的・構造的","革新"],colorTones:["原色","ライト","モノクロ"],suitableFor:["アート・建築・ファッション","前衛的ブランド","構造を大胆に見せる"],unsuitableFor:["温かみ・親しみ","写実的な情緒"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(70),M(55),A("#E63946")],brandColor:"#E63946",promptBlock:we["j_neo-mondrian"]},{id:"minimal-editorial",name:"ミニマルエディトリアル",nameEn:"Minimal Editorial",category:"structure",description:"テキストが主役。余白と知性で語るミニマルなエディトリアル。",thumbnailClass:"linear-gradient(135deg, #d0d0d0 0%, #909090 100%)",tags:["エディトリアル","余白","タイポ"],impressions:["ミニマル","知的・構造的","高級感","信頼感"],colorTones:["モノクロ","ライト"],suitableFor:["知識層・上質B2B","思想・コンセプトを語る","静かに知性を出す"],unsuitableFor:["賑やかでカラフル","高密度の図解"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"medium",textAmount:"medium"},tuning:[B(45),M(75),A("#1A1A1A")],brandColor:"#1A1A1A",promptBlock:we["minimal-editorial"]},{id:"dark-editorial",name:"ダーク・フィナンシャル",nameEn:"Dark Financial Editorial",category:"business",description:"黒基調×ゴールド。金融・建築・高級ブランドの静かな権威（FT/WSJ系）。",thumbnailClass:"linear-gradient(135deg, #1b1b1d 0%, #2a2a2c 60%, #c9a84c 100%)",tags:["ダーク","ゴールド","高級"],impressions:["高級感","知的・構造的","ミニマル","大胆"],colorTones:["ダーク","モノクロ","アクセント単色"],suitableFor:["投資・金融","高級ブランド","建築・知的B2B"],unsuitableFor:["親しみやすいポップ","明るく軽い訴求"],tendencies:{reliability:"high",visualPriority:"high",dataCompatibility:"medium",textAmount:"medium"},tuning:[B(70),M(65),A("#C9A84C")],brandColor:"#C9A84C",promptBlock:we["j_dark-editorial"]},{id:"dada-collage",name:"ダダ・コラージュ",nameEn:"Dada Collage",category:"collage",description:"反骨と偶然のコラージュ。切り抜き・混沌・エネルギーの前衛表現。",thumbnailClass:"linear-gradient(135deg, #ff3d00 0%, #1a1a1a 100%)",tags:["コラージュ","前衛","アナーキー"],impressions:["大胆","エネルギッシュ","革新"],colorTones:["原色","ビビッド","モノクロ"],suitableFor:["クリエイティブ・アート","反骨・エネルギッシュ","記憶に残すインパクト"],unsuitableFor:["信頼感・誠実さ重視","整然としたデータ資料"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(75),A("#FF3D00")],brandColor:"#FF3D00",promptBlock:we["j_dada-collage"]},{id:"neo-brutalism",name:"ネオ・ブルータリズム",nameEn:"Neo-Brutalism",category:"pop",description:"極太ボーダーと原色、ハードな影。反コーポレートで直接的なインパクト。",thumbnailClass:"linear-gradient(135deg, #ffe500 0%, #ffffff 55%, #000000 100%)",tags:["ブルータリズム","太ボーダー","原色"],impressions:["大胆","エネルギッシュ","革新"],colorTones:["原色","ビビッド","ライト"],suitableFor:["スタートアップ・インディーテック","個人ブランド","エネルギッシュな主張"],unsuitableFor:["落ち着いた高級感","繊細で静かなトーン"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(80),M(45),A("#FFE500")],brandColor:"#FFE500",promptBlock:we["j_neo-brutalism"]},{id:"memphis",name:"メンフィス",nameEn:"Memphis",category:"pop",description:"80sメンフィスの遊び心。原色・幾何学・マキシマリズムでY2Kポップ。",thumbnailClass:"linear-gradient(135deg, #ff6b9d 0%, #ffe14d 55%, #3ad6c4 100%)",tags:["メンフィス","ポップ","幾何学"],impressions:["エネルギッシュ","大胆","温かさ","革新"],colorTones:["原色","ビビッド","カラフル","パステル"],suitableFor:["ファッション・エンタメ","ポップカルチャー・Y2K","楽しく記憶に残す"],unsuitableFor:["厳格なデータ資料","落ち着いた高級感"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(65),A("#FF6B9D")],brandColor:"#FF6B9D",promptBlock:we.j_memphis},{id:"pop-3d",name:"ポップ3D",nameEn:"Pop 3D",category:"pop",description:"原色×立体×遊び心。SNSネイティブに刺さるポップな3Dビジュアル。",thumbnailClass:"linear-gradient(135deg, #ff6eb4 0%, #38cfff 100%)",tags:["3D","原色","ポップ"],impressions:["エネルギッシュ","革新","温かさ","大胆"],colorTones:["原色","ビビッド","カラフル"],suitableFor:["10〜30代/SNS向け","エンタメ・消費者サービス","楽しさを前面に"],unsuitableFor:["高級感・落ち着き","厳格なデータ資料"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[Ge(70),ae(60),A("#FF4F9A")],brandColor:"#FF4F9A",promptBlock:we["pop-3d"]},{id:"neon-cyber",name:"ネオンサイバー",nameEn:"Neon Cyber",category:"immersive",description:"ダーク背景×ネオングロー。先端テック・AI・Web3の近未来感。",thumbnailClass:"linear-gradient(135deg, #040318 0%, #0a0a30 55%, #00f5ff 100%)",tags:["ネオン","ダーク","テック"],impressions:["革新","大胆","エネルギッシュ","知的・構造的"],colorTones:["ダーク","ビビッド","寒色"],suitableFor:["AI・Web3・DX","近未来的な世界観","スタートアップのインパクト"],unsuitableFor:["温かみ・親しみ","紙的な手触り"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(70),Ge(55),A("#00F5FF")],brandColor:"#00F5FF",promptBlock:we["neon-cyber"]},{id:"natural-japanese",name:"ナチュラル和風",nameEn:"Natural Japanese",category:"soft",description:"和紙の余白と静寂。間（ま）を生かしたナチュラルで上品な和の世界。",thumbnailClass:"linear-gradient(135deg, #c8a45a 0%, #8b6914 100%)",tags:["和紙","余白","静寂"],impressions:["温かさ","ミニマル","高級感"],colorTones:["暖色","ライト"],suitableFor:["和系ブランド・伝統","静かに上質さを伝える","ウェルネス・食・文化"],unsuitableFor:["データ密度の高い分析","派手でクールな表現"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(55),M(70),A("#8B6914")],brandColor:"#8B6914",promptBlock:we["natural-japanese"]},{id:"vintage-craft",name:"ヴィンテージクラフト",nameEn:"Vintage Craft",category:"soft",description:"手仕事の温度感とアナログ美。クラフト感のあるヴィンテージトーン。",thumbnailClass:"linear-gradient(135deg, #c8903a 0%, #8b5e1a 100%)",tags:["クラフト","アナログ","温かみ"],impressions:["温かさ","高級感"],colorTones:["暖色","ライト"],suitableFor:["クラフト・食・地方","温度感のあるブランド","アナログな世界観"],unsuitableFor:["クールなテック表現","高密度データ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(50),B(50),A("#C8903A")],brandColor:"#C8903A",promptBlock:we["vintage-craft"]},{id:"japanese-ma",name:"間（ま）",nameEn:"Ma — 間",category:"soft",description:"間（ま）の美学。余白・静寂・禅。和の高級感と瞑想的な深み。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #eef0e8 55%, #8b9d77 100%)",tags:["間","禅","余白"],impressions:["ミニマル","高級感","温かさ","知的・構造的"],colorTones:["ライト","暖色"],suitableFor:["和系ブランド・ウェルネス","静かな高級感","瞑想・禅・文化"],unsuitableFor:["賑やかでエネルギッシュ","高密度データ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[M(80),B(35),A("#8B9D77")],brandColor:"#8B9D77",promptBlock:we["j_japanese-ma"]},{id:"mode-editorial",name:"モード・エディトリアル",nameEn:"Mode Editorial",category:"editorial",description:"Vogue/Balenciaga的ハイファッション。モノクロ写真×コンデンス体×大胆な余白の確信。",thumbnailClass:"linear-gradient(135deg, #0a0a0a 0%, #4a4a4a 55%, #d7263d 100%)",tags:["ファッション","モード","エディトリアル"],impressions:["高級感","大胆","ミニマル","知的・構造的"],colorTones:["モノクロ","アクセント単色","ダーク"],suitableFor:["ファッション・ビューティー","高級・ラグジュアリーブランド","世界観で魅せたい時"],unsuitableFor:["親しみやすいポップ","データ密度の高い分析"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(75),M(75),A("#D7263D")],brandColor:"#D7263D",promptBlock:G["mode-editorial"]}],Tp=[{id:"manga-comic",name:"漫画・コミック",nameEn:"Manga Comic",category:"pop",description:"白黒インクの漫画表現。集中線とコマ割りで感情とスピードを伝える。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #cfcfcf 50%, #111111 100%)",tags:["漫画","インク","コマ割り"],impressions:["大胆","エネルギッシュ","革新"],colorTones:["モノクロ","アクセント単色"],suitableFor:["ストーリーで惹きつけたい時","若年層・エンタメ","感情に訴える訴求"],unsuitableFor:["厳格なデータ資料","落ち着いた高級感"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(75),A("#D7263D")],brandColor:"#D7263D",promptBlock:G["manga-comic"]},{id:"voxel-craft",name:"ボクセル・クラフト",nameEn:"Voxel Craft",category:"immersive",description:"すべてが立方体の3D世界。ゲーム的なワクワク感で構造を見せる。",thumbnailClass:"linear-gradient(135deg, #7ec8e3 0%, #a3e635 55%, #f59e0b 100%)",tags:["ボクセル","3Dブロック","ゲーム"],impressions:["エネルギッシュ","温かさ","革新","大胆"],colorTones:["カラフル","ビビッド","ライト"],suitableFor:["子ども・教育","ゲーム・エンタメ","楽しく構造を見せる"],unsuitableFor:["高級感・落ち着き","厳格な法人資料"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[Ge(70),ae(60),A("#7EC8E3")],brandColor:"#7EC8E3",promptBlock:G["voxel-craft"]},{id:"greek-collage",name:"ギリシャ彫刻コラージュ",nameEn:"Greek Sculpture Collage",category:"collage",description:"白い古典彫像 × コミカルな編集コラージュ。知性とユーモアの衝突。",thumbnailClass:"linear-gradient(135deg, #f5f3ee 0%, #d9d4c7 55%, #b5651d 100%)",tags:["古典彫刻","コラージュ","アート"],impressions:["知的・構造的","高級感","大胆","革新"],colorTones:["モノクロ","ライト","アクセント単色"],suitableFor:["アート・教養系","機知で記憶に残す","AI・知の文脈"],unsuitableFor:["堅実なデータ報告","賑やかなポップ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(55),M(65),A("#B5651D")],brandColor:"#B5651D",promptBlock:G["greek-collage"]},{id:"vogue-white",name:"Vogue・ホワイト",nameEn:"Vogue White",category:"editorial",description:"白い無限背景のハイファッション。贅沢な余白と上質な光。",thumbnailClass:"linear-gradient(135deg, #ffffff 0%, #efe9e3 55%, #d7263d 100%)",tags:["ファッション","白基調","ラグジュアリー"],impressions:["高級感","ミニマル","大胆","知的・構造的"],colorTones:["ライト","モノクロ","アクセント単色"],suitableFor:["ファッション・ビューティー","高級ブランド","上質に魅せたい時"],unsuitableFor:["親しみやすいポップ","高密度データ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(65),M(75),A("#D7263D")],brandColor:"#D7263D",promptBlock:G["vogue-white"]},{id:"blue-note-jazz",name:"ブルーノート・ジャズ",nameEn:"Blue Note Jazz",category:"editorial",description:"ジャズLPジャケット風。2色制限と非対称タイポ、大胆クロップ写真。",thumbnailClass:"linear-gradient(135deg, #14213d 0%, #1d3557 55%, #e09f3e 100%)",tags:["ジャズ","2色","タイポグラフィ"],impressions:["高級感","大胆","知的・構造的","革新"],colorTones:["アクセント単色","モノクロ","ダーク"],suitableFor:["音楽・カルチャー","洒脱に見せたい時","ブランドの個性"],unsuitableFor:["多色で賑やか","高密度データ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(70),M(60),A("#E09F3E")],brandColor:"#E09F3E",promptBlock:G["blue-note-jazz"]},{id:"soviet-construct",name:"ソビエト構成主義",nameEn:"Soviet Constructivism",category:"structure",description:"赤い斜めの力線と幾何学、写真モンタージュ。革命的なエネルギーと秩序。",thumbnailClass:"linear-gradient(135deg, #f5f1e6 0%, #111111 55%, #d7263d 100%)",tags:["構成主義","対角線","プロパガンダ"],impressions:["大胆","エネルギッシュ","知的・構造的","革新"],colorTones:["原色","アクセント単色","モノクロ"],suitableFor:["力強い主張・宣言","変革のメッセージ","インパクト重視"],unsuitableFor:["穏やか・親しみ","繊細な高級感"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"medium",textAmount:"low"},tuning:[B(80),M(50),A("#D7263D")],brandColor:"#D7263D",promptBlock:G["soviet-construct"]},{id:"ghibli-nature",name:"ジブリ風ネイチャー",nameEn:"Ghibli Nature",category:"soft",description:"手描きアニメ背景美術風。やわらかな光と自然の息づかい、ノスタルジー。",thumbnailClass:"linear-gradient(135deg, #aee0f5 0%, #9bcf7a 55%, #f2b85a 100%)",tags:["手描き","自然","ノスタルジー"],impressions:["温かさ","高級感"],colorTones:["カラフル","暖色","寒色","ライト"],suitableFor:["情緒・物語で惹きつけたい","ウェルネス・環境・教育","余韻を残す"],unsuitableFor:["硬派なデータ資料","クールなテック"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[ae(60),M(65),A("#9BCF7A")],brandColor:"#9BCF7A",promptBlock:G["ghibli-nature"]},{id:"risograph-retro",name:"リソグラフ・レトロ",nameEn:"Risograph Retro",category:"pop",description:"孔版印刷の温かみ。版ズレと粒状感、限定スポットカラーのZINE感。",thumbnailClass:"linear-gradient(135deg, #ff6f91 0%, #6a8eae 55%, #ffd23f 100%)",tags:["リソグラフ","スポットカラー","ZINE"],impressions:["温かさ","革新","エネルギッシュ","大胆"],colorTones:["ビビッド","パステル","カラフル"],suitableFor:["インディー・クリエイティブ","親しみとセンスの両立","イベント・カルチャー"],unsuitableFor:["厳格な法人・データ","高精細な写実"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(55),A("#FF6F91")],brandColor:"#FF6F91",promptBlock:G["risograph-retro"]},{id:"underground-comic",name:"アンダーグラウンド・コミック",nameEn:"Underground Comic",category:"collage",description:"インディーZINE/リソグラフのコマ割りナラティブ。夢の断片のような曖昧さと手作りの温度。",thumbnailClass:"linear-gradient(135deg, #F7F4EF 0%, #E95DFF 50%, #F14A2B 100%)",tags:["ZINE","コミック","リソグラフ"],impressions:["革新","エネルギッシュ","大胆","温かさ"],colorTones:["ビビッド","アクセント単色","モノクロ"],suitableFor:["カルチャー・アート系","物語や断片で惹きつけたい","若年層・インディー"],unsuitableFor:["厳格な法人・データ","繊細な高級感"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(60),M(50),A("#F14A2B")],brandColor:"#F14A2B",promptBlock:G["underground-comic"]},{id:"street-editorial",name:"ストリート・エディトリアル",nameEn:"Street Editorial",category:"editorial",description:"巨大タイポと都市写真の断片。ティール一点が灯る、反骨とアーバンの編集デザイン。",thumbnailClass:"linear-gradient(135deg, #D8D6D1 0%, #1D1B1F 60%, #27D6D6 100%)",tags:["ストリート","巨大タイポ","グランジ"],impressions:["大胆","エネルギッシュ","革新"],colorTones:["モノクロ","アクセント単色","寒色"],suitableFor:["ブランド・カルチャー主張","若者向け・熱量重視","インパクトのある宣言"],unsuitableFor:["穏やか・親しみ","硬派なデータ資料"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(75),M(65),A("#27D6D6")],brandColor:"#27D6D6",promptBlock:G["street-editorial"]},{id:"playground-graffiti",name:"プレイグラウンド・グラフィティ",nameEn:"Playground Graffiti",category:"pop",description:"親しみやすいポップなグラフィティ。バブル文字と落書きで、楽しく整理された資料に。",thumbnailClass:"linear-gradient(135deg, #E8E2D8 0%, #7DE2E3 55%, #E9B7D8 100%)",tags:["グラフィティ","ポップ","手描き"],impressions:["温かさ","エネルギッシュ","革新"],colorTones:["パステル","カラフル","ライト"],suitableFor:["学校・教育・ワークショップ","子ども向け・地域イベント","社内のカジュアル資料"],unsuitableFor:["硬派な法人・データ","繊細な高級感"],tendencies:{reliability:"low",visualPriority:"high",dataCompatibility:"low",textAmount:"medium"},tuning:[ae(65),M(60),A("#7DE2E3")],brandColor:"#7DE2E3",promptBlock:G["playground-graffiti"]},{id:"urban-graffiti",name:"アーバン・グラフィティ",nameEn:"Urban Graffiti",category:"immersive",description:"夜の都市×ドキュメンタリー写真。ブルーデュオトーンと手書きの落書きで熱量とリアルを伝える。",thumbnailClass:"linear-gradient(135deg, #19161B 0%, #455BFF 60%, #F3EB3C 100%)",tags:["ストリート写真","デュオトーン","DIY"],impressions:["大胆","エネルギッシュ","革新"],colorTones:["ダーク","寒色","アクセント単色"],suitableFor:["起業・ブランド戦略","若者向け・社会課題","熱量とリアリティを出す"],unsuitableFor:["保守的な法人資料","穏やか・親しみ"],tendencies:{reliability:"medium",visualPriority:"high",dataCompatibility:"low",textAmount:"low"},tuning:[B(75),M(55),A("#455BFF")],brandColor:"#455BFF",promptBlock:G["urban-graffiti"]},{id:"multi-neumo",name:"マルチ・ニューモ",nameEn:"Multi Neumo",category:"soft",description:"ニューモーフィズム×ミニマル・インフォグラフィック。柔らかい立体カードでプロセスを直感整理。",thumbnailClass:"linear-gradient(135deg, #ECECEC 0%, #48D8C4 55%, #5963D9 100%)",tags:["ニューモーフィズム","インフォグラフィック","丸み"],impressions:["ミニマル","温かさ","高級感","革新"],colorTones:["ライト","カラフル","モノクロ"],suitableFor:["サービス紹介・業務フロー","ロードマップ・教育","スタートアップ提案"],unsuitableFor:["重いデータ・分析資料","ダークで硬派なトーン"],tendencies:{reliability:"medium",visualPriority:"medium",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(55),M(70),Ge(55),A("#48D8C4")],brandColor:"#48D8C4",promptBlock:G["multi-neumo"]},{id:"neon-neumo",name:"ネオン・ニューモ",nameEn:"Neon Neumo",category:"business",description:"プレミアム・ニューモーフィズム×ビジネス編集。エンボスとネオングラデで静かな未来感。",thumbnailClass:"linear-gradient(135deg, #EEF0F5 0%, #6E3BFF 55%, #FF2E8C 100%)",tags:["ニューモーフィズム","グラデ","エグゼクティブ"],impressions:["高級感","革新","ミニマル","信頼感"],colorTones:["ライト","モノクロ","アクセント単色"],suitableFor:["AI/DX/SaaS提案","コンサル・事業戦略","プレミアムな先進性"],unsuitableFor:["親しみ・カジュアル","密なデータ表"],tendencies:{reliability:"high",visualPriority:"medium",dataCompatibility:"medium",textAmount:"low"},tuning:[ae(50),M(65),Ge(60),A("#6E3BFF")],brandColor:"#6E3BFF",promptBlock:G["neon-neumo"]},{id:"industrial-manual",name:"インダストリアル・マニュアル",nameEn:"Industrial Manual",category:"structure",description:"分解図とスイス・テクニカル。線画と番号付けで構造を可視化する情報設計重視のデザイン。",thumbnailClass:"linear-gradient(135deg, #F4F2F0 0%, #6A6A6A 60%, #FF3658 100%)",tags:["テクニカル","分解図","スイス"],impressions:["知的・構造的","ミニマル","信頼感","大胆"],colorTones:["モノクロ","アクセント単色","ライト"],suitableFor:["製品・仕組みの解説","業務プロセス・手順","システム構成・方法論"],unsuitableFor:["情緒・物語で惹きつけたい","温かさ・親しみ"],tendencies:{reliability:"high",visualPriority:"high",dataCompatibility:"high",textAmount:"medium"},tuning:[B(70),M(55),A("#FF3658")],brandColor:"#FF3658",promptBlock:G["industrial-manual"]}],Ft=[...jp,...Pp,...Tp],vs={business:"ビジネス",structure:"構造・モダニズム",editorial:"エディトリアル・モード",collage:"コラージュ・アート",pop:"ポップ・エクスプレッシブ",immersive:"イマーシブ・立体",soft:"ソフト・和／手書き"},yi=["business","structure","editorial","collage","pop","immersive","soft"];function on(e){return Ft.find(n=>n.id===e)}function vr(e){return`url("/thumbs/${e.id}.webp") center / cover no-repeat, ${e.thumbnailClass}`}function Ap(){return Array.from(new Set(Ft.flatMap(e=>e.impressions)))}function bp(){return Array.from(new Set(Ft.flatMap(e=>e.colorTones)))}function Dp({title:e,children:n}){const[t,r]=k.useState(!1);return a.jsxs("span",{className:"su-help-pop",children:[a.jsx("button",{type:"button",className:"su-help-btn","aria-label":`${e}の説明`,"aria-expanded":t,onClick:()=>r(l=>!l),children:a.jsx(T,{name:"help",size:15})}),t&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"su-help-pop__catch",onClick:()=>r(!1),"aria-hidden":"true"}),a.jsxs("span",{className:"su-help-pop__card",role:"dialog","aria-label":e,children:[a.jsx("span",{className:"su-help-pop__title",children:e}),a.jsx("span",{className:"su-help-pop__body",children:n})]})]})]})}function qn({icon:e,step:n,title:t,hint:r,help:l,children:i}){return a.jsxs("section",{className:"su-q",id:`su-q-${n}`,children:[a.jsxs("div",{className:"su-q__head",children:[a.jsx("span",{className:"su-q__icon","aria-hidden":"true",children:a.jsx(T,{name:e,size:18})}),a.jsxs("span",{className:"su-q__step",children:["Q",n]}),a.jsx("h2",{className:"su-q__title",children:t}),r&&a.jsx("span",{className:"su-q__hint",children:r}),l&&a.jsx(Dp,{title:t,children:l})]}),a.jsx("div",{className:"su-q__body",children:i})]})}function Bp({api:e,onOpenLibrary:n}){const{state:t}=e,r=on(t.styleId),l=k.useMemo(()=>[...Ft].sort(()=>Math.random()-.5).slice(0,4),[]),i=o=>{requestAnimationFrame(()=>{var s;(s=document.getElementById(`su-q-${o}`))==null||s.scrollIntoView({behavior:"smooth",block:"start"})})};return k.useEffect(()=>{t.styleId&&i(6)},[t.styleId]),a.jsxs("div",{className:"su-questions",children:[a.jsx(qn,{icon:"description",step:1,title:"どんな資料を作りますか？",children:a.jsx("div",{className:"su-chips",children:Yc.map(o=>a.jsx("button",{type:"button",className:`su-chip${t.useCase===o.id?" is-selected":""}`,"aria-pressed":t.useCase===o.id,onClick:()=>{e.setUseCase(o.id),i(2)},children:o.label},o.id))})}),a.jsx(qn,{icon:"groups",step:2,title:"ターゲットはどんな人ですか？",hint:"5文字以上",children:a.jsx("input",{type:"text",className:"su-input",value:t.audience,placeholder:"例: 都市部の20〜30代ビジネス層 / 企画職 / マーケ担当","aria-label":"対象者",onChange:o=>e.setAudience(o.target.value)})}),a.jsx(qn,{icon:"flag",step:3,title:"プレゼンのゴールは？",help:a.jsxs(a.Fragment,{children:["このプレゼンを見た人に",a.jsx("strong",{children:"最終的に取ってほしい行動"}),"を選びます。すべてのスライドはこのゴールに向けて設計されます。",a.jsx("br",{}),a.jsx("br",{}),"例：問い合わせ・申し込み・社内の合意・深い納得・記憶に残す・次の一歩 など。"]}),children:a.jsx("div",{className:"su-chips",children:Bn.map(o=>a.jsx("button",{type:"button",className:`su-chip${t.goal===o.id?" is-selected":""}`,"aria-pressed":t.goal===o.id,onClick:()=>{e.setGoal(o.id),i(4)},children:o.label},o.id))})}),a.jsx(qn,{icon:"auto_awesome",step:4,title:"どんな印象にしたいですか？",hint:`最大3つ・${t.impressions.length}/3`,children:a.jsx("div",{className:"su-chips",children:Pt.map(o=>{const s=t.impressions.includes(o.id),u=!s&&t.impressions.length>=3;return a.jsx("button",{type:"button",className:`su-chip${s?" is-selected":""}`,"aria-pressed":s,disabled:u,onClick:()=>{e.toggleImpression(o.id),s||i(5)},children:o.label},o.id)})})}),a.jsx(qn,{icon:"palette",step:5,title:"世界観（ビジュアルスタイル）を選びましょう",children:r?a.jsxs("div",{className:"su-style-selected",children:[a.jsx("span",{className:"su-style-selected__thumb",style:{background:vr(r)},"aria-hidden":"true"}),a.jsxs("div",{className:"su-style-selected__meta",children:[a.jsx("span",{className:"su-style-selected__name",children:r.name}),a.jsx("span",{className:"su-style-selected__desc",children:r.description})]}),a.jsx("button",{type:"button",className:"su-btn su-btn--ghost su-btn--sm",onClick:n,children:"変更"})]}):a.jsxs("div",{className:"su-style-teaser",children:[a.jsx("button",{type:"button",className:"su-style-teaser__thumbs",onClick:n,"aria-label":"世界観ライブラリを開く",children:l.map(o=>a.jsx("span",{className:"su-style-teaser__thumb",style:{background:vr(o)}},o.id))}),a.jsxs("button",{type:"button",className:"su-style-teaser__cta",onClick:n,children:[a.jsx(T,{name:"palette",size:18}),"すべての世界観を見る（",Ft.length,"スタイル）"]})]})}),a.jsx(qn,{icon:"tune",step:6,title:"どのくらい詳しく作りますか？",help:a.jsxs(a.Fragment,{children:["生成するプロンプトの",a.jsx("strong",{children:"詳しさ"}),"を選びます。濃いほどプロンプトは長く、スライドへの指定が細かくなります。",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"要約プロンプト"}),"：構成と要点だけ。まず全体像をつかみたい時。",a.jsx("br",{}),a.jsx("strong",{children:"標準"}),"：各スライドの見出し・要点・ビジュアル方針までバランスよく。",a.jsx("br",{}),a.jsx("strong",{children:"制作指示レベル"}),"：コピー・ビジュアル・レイアウト・配色まで1枚ずつ詳細に指示。作り込みたい時。"]}),children:a.jsx("div",{className:"su-depths",children:aa.map(o=>a.jsxs("button",{type:"button",className:`su-depth${t.outputDepth===o.id?" is-selected":""}`,"aria-pressed":t.outputDepth===o.id,onClick:()=>e.setOutputDepth(o.id),children:[a.jsx("span",{className:"su-depth__label",children:o.label}),a.jsx("span",{className:"su-depth__hint",children:o.hint})]},o.id))})})]})}function Mp({src:e,label:n,gradient:t}){const[r,l]=k.useState(!1);return k.useEffect(()=>l(!1),[e]),r?a.jsx("div",{className:"su-thumb3__ph",style:{background:t},"aria-label":`${n}（準備中）`,children:a.jsx(T,{name:"image",size:18})}):a.jsx("img",{src:e,alt:n,className:"su-thumb3__img",loading:"lazy",decoding:"async",onError:()=>l(!0)})}function Lp({style:e}){const n=[{src:`/thumbs/${e.id}.webp`,label:"キービジュアル"},{src:`/thumbs/${e.id}-1.webp`,label:"資料イメージ 1"},{src:`/thumbs/${e.id}-2.webp`,label:"資料イメージ 2"}];return a.jsx("div",{className:"su-thumb3",children:n.map(t=>a.jsx(Mp,{src:t.src,label:t.label,gradient:e.thumbnailClass},t.label))})}function $c(e){return[{key:"useCase",label:"用途",done:!!e.useCase},{key:"audience",label:"対象者",done:e.audience.trim().length>=5},{key:"goal",label:"ゴール",done:!!e.goal},{key:"impressions",label:"印象",done:e.impressions.length>=1&&e.impressions.length<=3},{key:"styleId",label:"世界観",done:!!e.styleId},{key:"outputDepth",label:"詳しさ",done:!!e.outputDepth}]}function Gc(e){return $c(e).filter(n=>!n.done).length}function Ip(e){return Gc(e)===0}const Uc={slideCount:"auto",additionalRequest:"",additionalProhibitions:""},Op={useCase:null,audience:"",goal:null,impressions:[],styleId:null,tuning:{},outputDepth:null,detailSettings:Uc},Hc="su.brand",qt={audience:"",promise:"",belief:"",useWords:"",avoidWords:"",keepImpression:"",avoidImpression:"",notDo:""};function Nl(e){return!!e&&Object.values(e).some(n=>typeof n=="string"&&n.trim()!=="")}const Rp={key:"balance",label:"文字 ⇄ ビジュアル",type:"slider",defaultValue:50,min:0,max:100,leftLabel:"文字主役",rightLabel:"ビジュアル主役"};function Wc(e){const n=e.tendencies.visualPriority;return n==="high"?70:n==="medium"?50:35}function zp(e){return[Rp,...e.tuning]}function Yp(e){const n={balance:Wc(e)};for(const t of e.tuning)n[t.key]=t.defaultValue;return n}const Gr="────────────────────────",sa=["1スライド1メッセージを徹底する","本文は短く、簡潔にまとめる","画像内に文字を焼き込まない","Markdown記号をスライド本文に入れない","内部指示やプロンプト文をスライドに出さない","見出しだけで流れが通る構成にする","最後はGoalに接続するストーリーにする"];function Cs(e,n){var o,s;const t=((o=Jn(e.useCase))==null?void 0:o.label)??"未設定",r=Ie(Bn,e.goal)??"未設定",l=e.impressions.map(u=>Ie(Pt,u)).filter(Boolean).join(" / ")||"未設定",i=((s=aa.find(u=>u.id===e.outputDepth))==null?void 0:s.label)??"標準";return["【INPUT】",`Theme / Use Case: ${t}`,`Goal: ${r}（視聴者に起こしたい最終行動）`,`Audience: ${e.audience.trim()||"未設定"}`,"Materials: NotebookLM に入っている資料一式",`Impression: ${l}`,`Style: ${n.name}（${n.nameEn}）`,`Output Level: ${i}`].join(`
`)}function xs(e){if(!Nl(e))return"";const n=e,t=["【ブランド前提（brand.md）／最優先の判断基準】"];t.push("・以下はこのブランドの判断基準。一般論・どこかで見た言葉を禁止し、すべての見出し・本文・ビジュアル方針をこの前提に従わせる。これは内部指示でありスライドに出さない。");const r=(s,u)=>{const c=u.trim();c&&t.push(`・${s}: ${c}`)};r("誰に届けるか",n.audience),r("約束する変化",n.promise),r("信じていること",n.belief),r("使う言葉（語彙・トーンを寄せる）",n.useWords),r("残したい印象",n.keepImpression);const l=n.avoidWords.trim(),i=n.avoidImpression.trim(),o=n.notDo.trim();return l&&t.push(`・使わない言葉（絶対に出さない・言い換えも禁止）: ${l}`),i&&t.push(`・避けたい印象（この印象に寄せない）: ${i}`),o&&t.push(`・やらないこと（提案・表現として持ち込まない）: ${o}`),t.join(`
`)}function $p(){return["【内部指示】","・ここから下はあなたへの指示であり、スライドには一切表示しない。","・この文章・見出し・例文をそのままスライド本文に使わない。","・画像内に文字を描き込まない。","・NotebookLM内の資料内容から要点を抽出し、言い換えて再生成する。","・推測や一般論で内容を埋めない。資料（ソース）に書かれた事実・数字・固有名詞だけを使い、ソースにない常套句・一般論で水増ししない。不明な点は断定せず「条件付き」で示す。"].join(`
`)}function Gp(e){var t;return["【Role】",`あなたは、日本のトップメディアを牽引するアートディレクター兼${((t=Jn(e.useCase))==null?void 0:t.role)??"プレゼンテーションデザイナー兼編集者"}。`,"スマホ世代の知的興奮を誘い、読み手が「今すぐ一歩動きたくなる」成果直結スライドを設計する。","きれいなだけのスライドではなく、人を動かすスライドを作る。凡庸・テンプレ・説明過多を最も嫌う。"].join(`
`)}function Up(e){return["【Goal】",`・最優先はユーザーが入力したGoalの達成: 「${Ie(Bn,e.goal)??"視聴者の行動"}」`,"・全スライドはこのGoalに収束させる。きれいさより、Goalへ動きたくなるかで判断する。"].join(`
`)}function Hp(){return["【出力の作り方（この順で内部設計してから生成する）】","A. 抽出: 資料全体から、Goalに直結する要点だけを12〜18個抽出する（事実 / 主張 / 根拠 / 具体例 / 手順）。重複は統合し、曖昧な点は「条件付き」で表現する。","B. 変換: 要点を「注意 → 感情 → 理解 → 行動」の順に並べ替える。最後は必ず「視聴者が次にやる一手」で終える（具体的で短く）。","C. デッキ設計: 序盤＝違和感や問いで注意を奪い感情を刺す / 中盤＝最小限の図解で理解を構造化する / 終盤＝行動（次の一手・合意形成・問い合わせ導線）へ。同じレイアウトTYPEを3枚以上続けない。","D. 各スライドの原則: 1スライド1メッセージ（結論/問い/命名を1つだけ）。本文は最大2行、3行になるなら分割。見出しだけを追っても話と感情の抑揚が通る。"].join(`
`)}function Wp(e){return e.tendencies.visualPriority!=="high"?"":["【比喩メタファー（図解・イラストを使う場合）】","・テーマから、最も直感的で自分ごと化しやすい比喩を1つだけ選ぶ（例: 都市 / 交通 / 料理 / 登山 / 工場 / 図書館 / ゲーム など）。","・以後の図解・モチーフはその比喩に統一し、世界観をブレさせない。比喩を通じて、テーマの価値とGoalへの道筋が一目で腑に落ちるようにする。"].join(`
`)}function Es(e){var t;return["【Story Arc】",`・用途に合わせた流れ: ${((t=Jn(e.useCase))==null?void 0:t.storyArc)??"注意 → 共感 → 理解 → 行動"}`,"・3〜4枚のかたまりで設計し、違和感 → 構造理解 → 行動 の強弱が「見出しだけ追っても分かる」ようにする。","・表紙（1枚目）はシリーズ中で最もインパクトを強く。文字だけで寂しいを禁止し、最初の1枚で視線と意識を奪う。"].join(`
`)}function Vp(e,n,t){var s;const r=((s=Jn(n.useCase))==null?void 0:s.label)??"資料のテーマ",l=Ie(Bn,n.goal)??"視聴者の行動",i=n.audience.trim()||"想定視聴者";return[[/【入力変数：テーマ】/g,r],[/\{テーマ\}|\{Theme\}/g,r],[/【入力変数：ゴール】/g,l],[/\{ゴール\}|\{Goal\}/g,l],[/\{想定視聴者\}|\{Audience\}/g,i],[/\{Primary Color\}/g,t.brandColor],[/\{Accent Color\}/g,"プリセット指定のアクセント色"]].reduce((u,[c,h])=>u.replace(c,h),e)}function Kp(e,n){var l;const t=Number(((l=n.tuning)==null?void 0:l.balance)??Wc(e)),r=[];return t>=65?(r.push("・ビジュアル（図解/写真/イラスト）を主役にする。各スライドでビジュアルを画面のおおむね半分以上の存在感で配置し、文字だけで余白が間延びしたスライドを作らない。"),r.push("・文字のみのスライド（タイポグラフィ型）は全体の3分の1までに抑え、3枚以上連続させない。残りはビジュアル主役のスライドにする。"),r.push("・装飾的に小さな要素を1つだけ浮かべて広い空白を残すのを避ける。主役ビジュアルは意味のある大きさで描く。")):t<=35?(r.push("・文字（見出しのタイポグラフィ）を主役にする。ビジュアルは要点を補助する範囲に留める。"),r.push("・ただし装飾的な小要素だけで広い空白を間延びさせない。1スライドに必ず1つは意味のあるビジュアルを置く。")):r.push("・文字とビジュアルを均衡させる。見出しが大きいスライドには、必ず意味のあるビジュアルを添える。"),e.tendencies.textAmount==="low"&&r.push("・本文は最小限に。見出しとビジュアルで理解させ、説明文で埋めない。"),`【構成バランス（文字⇄ビジュアル: ${t}/100）】
${r.join(`
`)}`}function Ss(e,n){const t=Qp(e,n),r=n.impressions.map(o=>Ie(Pt,o)).filter(Boolean).join(" / "),l=Vp(e.promptBlock,n,e),i=Kp(e,n);return["【Style OS】",`世界観プリセット: ${e.name}（${e.nameEn}）`,r?`狙う印象: ${r}。配色・タイポ・写真/イラスト選定・余白の取り方を、この印象に寄せて調整する（プリセットの範囲内で）。`:"",l,i?`
${i}`:"",t?`
【プリセット内の微調整】
${t}`:""].filter(Boolean).join(`
`)}function Qp(e,n){const t=n.tuning??{},r=[];for(const l of e.tuning){const i=t[l.key]??l.defaultValue;if(l.type==="color"&&r.push(`・アクセント（差し色）は ${i} を起点にする（プリセットの配色ルールは維持する）。`),l.type==="slider"){const o=Number(i);o>=65&&l.rightLabel?r.push(`・${l.label}は「${l.rightLabel}」寄りにする。`):o<=35&&l.leftLabel&&r.push(`・${l.label}は「${l.leftLabel}」寄りにする。`)}}return r.join(`
`)}function Xp(){return["【標準品質ルール（必ず守る）】",...sa.map(e=>`・${e}`)].join(`
`)}function Jp(){return["【アートディレクション（全スタイル共通の品質基準）】","■ スタイル忠実（最優先・厳守）","・上の【Style OS】の「描画/質感」と「禁止」を絶対の規範とする。スタイルが明示的に指定していない限り、勝手に立体アイソメ図（isometric）・3Dレンダ・ミニチュアフィギュア化・クレイ/粘土風・ワイヤーフレーム化に変換しない。","・写真指定のスタイルは必ず実写ベースの写真/コラージュで、フラット指定のスタイルは平面の2Dで描く。画像生成モデルが既定で寄せがちな「アイソメ3Dイラスト」へ勝手に流れないこと。","・各スタイルの世界観・画材・視点をそのまま守る。複数スタイルが似た見た目に収束するのを禁止する。","■ ビジュアルの質","・写真/イラスト/図解は、一流のアートディレクターが監修した高級エディトリアル誌の水準を目指す。ストックフォト感・テンプレ感・安っぽいクリップアートは禁止。","・写真を使う場合は、光源・影・質感・色のグレーディングを具体的に指定し、被写体の表情や所作までディレクションする。雑味のない、意図された一枚にする。","・各スライドの Visual Direction は「何を／どんな構図で／どこを大胆にクロップし／視線をどこへ誘導するか」まで具体的に書く。「美しい画像」「適切なイメージ」のような曖昧指示で終わらせない。","■ 単調を避ける（最重要）","・同じレイアウトTYPEを3枚以上連続させない。全面ビジュアル → テキスト主役 → 図解 を意図的に交互に配置し、視線のリズムを作る。","・クロップと縮尺に変化をつける。極端な寄り（顔/手/部分）と大きな引き（全景）を混ぜ、毎スライド同じ構図にしない。","・見出しと本文のジャンプ率を極端につける。中途半端なサイズを禁止。余白を恐れない。","・1スライドに置く主役要素は1つだけ。脇役は徹底して抑え、密度のメリハリを作る。","■ 一貫性と密度","・シリーズ全体で、一流のビジネス/カルチャーメディアの特集記事をそのままスライド化したような、一貫したトーンと強弱を保つ。","・各スライドは「見た瞬間に意図が立ち上がる」密度を持たせる（ただし1スライド1メッセージは死守）。","■ プロの仕上げ（引き算と記憶）","・余白は「設計対象」として意図的に大きく取り、要素で埋めない。端や最下部に、意味のない極小の英語ラベル・クレジット・ページ番号・ロゴを散らさない（引き算こそが品位を生む）。","・画像の中に説明文を焼き込まない。文字は必ずテキスト要素として、レイアウトの一部として置く。","・北極星を持つ: そのスタイルが手本とする一流の実例（媒体・作家・スタジオ・デザイン運動）を1つ念頭に置き、その水準を基準点にする。素人っぽい既製テンプレ感を徹底排除する。","・記憶に残す仕掛けを、シリーズ中ごく少数だけ仕込む（意外なスケール・対比・1箇所のユーモア等）。ただし主役メッセージを邪魔せず、装飾の乱用にしない。1スライド1メッセージは死守。"].join(`
`)}function Zp(){return["【タイポグラフィ品位（日本語・英語ともに）】","・日本語も英語も、文字は美しく扱う。字形を崩さない、歪ませない、文字化けさせない。","・英語は飾りや埋め草にしない。意味のある語を、日本語と同等の品位とジャンプ率で組む。","・X / Y / LAYER / API / PARAM / DEBUG などの内部的な語や、無意味な英語ラベルを表示しない。","・四隅の極小英語ラベルを飾りで置かない。可読性とタイポグラフィの品位を最優先する。"].join(`
`)}function ks(e,n){const r=["【Slide Output Format】",`・${n==="auto"?"内容に応じて最適な枚数で構成する":`全${n}枚で構成する`}。`];return e==="summary"?[...r,"・各スライドは Slide番号 / 役割 / Main Headline / 一言の要点 のみを簡潔に出力する。","・ビジュアル指示は方向性の一言に留める。"].join(`
`):e==="production"?[...r,"・各スライドについて以下を詳細に出力する:","  - Slide Number","  - Role in Story","  - Slide Type","  - Main Headline（日本語の強い言い切り。1つだけ）","  - Optional English Tag（1〜4語。飾りでなくタグ/断言として）","  - Lead Text（最大2行。結論の補助だけ）","  - Visual Direction（被写体は何か／どんな構図か／どこを大胆にクロップするか／01-03のコールアウトで視線をどこへ誘導するか／光と質感）","  - Layout Direction（グリッド・余白・非対称・主役の置き場所）","  - Color / Typography Direction（配色の意味づけと、見出し:本文のジャンプ率）","  - Action Hook（このスライドで視聴者の「次の一手」が頭に浮かぶ一言）"].join(`
`):[...r,"・各スライドについて以下を出力する:","  - Slide Number","  - Role in Story","  - Slide Type","  - Main Headline（日本語の言い切り）","  - Lead Text（最大2行）","  - Visual Direction（被写体・構図の方針）","  - Action Hook（次の一手が浮かぶ一言）"].join(`
`)}function ws(e){const n=e.detailSettings.additionalRequest.trim();return n?["【追加要望】",n].join(`
`):""}function Fs(e){const n=e.detailSettings.additionalProhibitions.trim();return n?["【追加の禁止事項】",n].join(`
`):""}function qp(){return["【Final Check（出力前に必ず自己点検する）】","・表紙（1枚目）で視線と意識を奪えているか。文字だけで寂しくないか。","・見出しだけを追って「注意 → 感情 → 理解 → 行動」になっているか。","・最後がGoalに直結する具体的な一手で終わっているか。","・同じレイアウトTYPEが3枚以上続いていないか。クロップと縮尺に変化があるか。","・写真/図解が高級誌の水準か。ストックフォト感・テンプレ感・凡庸さがないか。","・世界観プリセットから逸脱していないか。配色・タイポのルールを守っているか。","・1スライド1メッセージか。本文が長すぎないか。見出しのジャンプ率は十分か。","・画像内に文字を焼き込んでいないか。Markdown記号を本文に入れていないか。"].join(`
`)}function em(e){return["【共通ルール（圧縮版）／下のStyle OSを最優先で厳守】","・あなたは人を動かすスライドを設計するADクラスの編集者。凡庸・テンプレ・説明過多を排す。これは内部指示でありスライドに出さない。資料（ソース）にある事実だけを使い、推測・一般論で水増しせず言い換えて再生成する。","A. 抽出: 資料からGoalに直結する要点を抽出し統合する。","B. 構成: 「注意 → 感情 → 理解 → 行動」に並べ、最後は必ず視聴者の次の一手で終える。","C. 各スライド: 1スライド1メッセージ／本文は最大2行／見出しだけで流れが通る／同じレイアウトTYPEを3枚以上続けない／寄り引き・ジャンプ率でメリハリ。","D. 品質: 写真/図解は高級誌水準（ストックフォト・テンプレ感禁止）。表紙は文字だけにしない。画像内に文字を焼き込まない。四隅の意味なき極小英語ラベルや内部用語を出さない。日本語/英語の字形を崩さない。Markdown記号（# * **）を本文に入れない。",`・最優先のGoal: 「${Ie(Bn,e.goal)??"視聴者の行動"}」。全スライドをここへ収束させる。下のStyle OSの「描画/質感・Color・タイポ・TYPE A/B/C・表紙・禁止」を絶対の規範とする。`].join(`
`)}function _s(e,n,t){return(e.outputDepth==="summary"?[Cs(e,n),xs(t),em(e),Es(e),`${Gr}
${Ss(n,e)}
${Gr}`,ks(e.outputDepth,e.detailSettings.slideCount),ws(e),Fs(e)]:[Cs(e,n),xs(t),$p(),Gp(e),Up(e),Hp(),Es(e),Wp(n),`${Gr}
${Ss(n,e)}
${Gr}`,Jp(),Xp(),Zp(),ks(e.outputDepth,e.detailSettings.slideCount),ws(e),Fs(e),qp()]).filter(Boolean).join(`

`)}function Rt({icon:e,title:n,active:t,children:r}){return a.jsxs("section",{className:`su-pcard${t?" is-active":""}`,children:[a.jsxs("div",{className:"su-pcard__head",children:[a.jsx(T,{name:e,size:18}),a.jsx("h3",{className:"su-pcard__title",children:n}),!t&&a.jsx("span",{className:"su-pcard__badge",children:"未設定"})]}),a.jsx("div",{className:"su-pcard__body",children:r})]})}function nm({api:e,onGenerate:n,onOpenDetail:t,onSaveSetting:r}){const{state:l}=e,i=Jn(l.useCase),o=on(l.styleId),s=aa.find(C=>C.id===l.outputDepth),u=!!l.useCase||l.audience.trim().length>0||!!l.goal||l.impressions.length>0,c=!!l.useCase,h=!!o,g=!!o&&!!l.outputDepth,y=Ip(l),v=Gc(l);return a.jsxs("div",{className:"su-preview",children:[a.jsx("div",{className:"su-preview__head",children:a.jsx("h2",{className:"su-preview__heading",children:"あなたの目的にあわせたスライド設計プレビュー"})}),a.jsxs("div",{className:"su-preview__scroll",children:[a.jsx(Rt,{icon:"summarize",title:"入力条件のまとめ",active:u,children:u?a.jsxs("dl",{className:"su-summary",children:[a.jsxs("div",{children:[a.jsx("dt",{children:"用途"}),a.jsx("dd",{children:(i==null?void 0:i.label)??"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"対象者"}),a.jsx("dd",{children:l.audience.trim()||"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"ゴール"}),a.jsx("dd",{children:Ie(Bn,l.goal)??"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"印象"}),a.jsx("dd",{children:l.impressions.map(C=>Ie(Pt,C)).join(" / ")||"—"})]})]}):a.jsx("p",{className:"su-muted",children:"設問に答えると、ここに条件がまとまります。"})}),a.jsx(Rt,{icon:"route",title:"ストーリーの流れ",active:c,children:i?a.jsx("ol",{className:"su-arc",children:i.storyArc.split("→").map((C,S)=>a.jsxs(k.Fragment,{children:[S>0&&a.jsx("li",{className:"su-arc__sep","aria-hidden":"true",children:a.jsx(T,{name:"arrow_forward",size:14})}),a.jsxs("li",{className:"su-arc__step",children:[a.jsx("span",{className:"su-arc__num",children:S+1}),a.jsx("span",{className:"su-arc__label",children:C.trim()})]})]},S))}):a.jsx("p",{className:"su-muted",children:"用途を選ぶと、視聴者を動かす流れが決まります。"})}),a.jsx(Rt,{icon:"palette",title:"選択中の世界観",active:h,children:o?a.jsxs("div",{className:"su-pstyle",children:[a.jsx(Lp,{style:o}),a.jsxs("div",{className:"su-pstyle__meta",children:[a.jsx("div",{className:"su-pstyle__name",children:o.name}),a.jsx("div",{className:"su-pstyle__tags",children:o.impressions.slice(0,3).map(C=>a.jsx("span",{className:"su-tag",children:C},C))})]})]}):a.jsx("p",{className:"su-muted",children:"世界観を選ぶと、ここに反映されます。"})}),a.jsxs(Rt,{icon:"verified",title:"自動で適用されるルール",active:g,children:[g?a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"su-rules__lead",children:["詳しさ「",s==null?void 0:s.label,"」で、以下の品質ルールを自動適用します。"]}),a.jsx("ul",{className:"su-rules",children:sa.map(C=>a.jsxs("li",{children:[a.jsx(T,{name:"check",size:16}),C]},C))})]}):a.jsx("p",{className:"su-muted",children:"世界観と詳しさを選ぶと、品質ルールが確定します。"}),a.jsxs("button",{type:"button",className:"su-rules-detail",onClick:t,children:[a.jsx(T,{name:"settings",size:16}),"詳細設定（枚数・追加ルール）",a.jsx(T,{name:"chevron_right",size:16})]})]}),a.jsx(Rt,{icon:"checklist",title:"生成準備",active:y,children:a.jsx("ul",{className:"su-readiness",children:$c(l).map(C=>a.jsxs("li",{className:C.done?"is-done":"",children:[a.jsx(T,{name:C.done?"check_circle":"radio_button_unchecked",size:16,filled:C.done}),C.label]},C.label))})})]}),a.jsxs("div",{className:"su-preview__footer",children:[a.jsxs("button",{type:"button",className:"su-btn su-btn--primary su-btn--block",disabled:!y,onClick:n,children:[a.jsx(T,{name:"bolt",size:20,filled:!0}),y?"プロンプトを生成する":`あと${v}項目で生成できます`]}),a.jsxs("button",{type:"button",className:"su-btn su-btn--ghost su-btn--block su-btn--save",disabled:!h,onClick:r,children:[a.jsx(T,{name:"star",size:18}),"この設定をお気に入り保存"]}),!y&&a.jsx("p",{className:"su-preview__note",children:"6つの設問をすべて入力すると生成できます。"})]})]})}const tm='a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';function fn(e,n){const t=k.useRef(null);return k.useEffect(()=>{if(!e)return;const r=t.current,l=document.activeElement,i=()=>Array.from((r==null?void 0:r.querySelectorAll(tm))??[]),o=i()[0];o==null||o.focus();const s=c=>{if(c.key==="Escape"){c.stopPropagation(),n();return}if(c.key!=="Tab")return;const h=i();if(h.length===0)return;const g=h[0],y=h[h.length-1];c.shiftKey&&document.activeElement===g?(c.preventDefault(),y.focus()):!c.shiftKey&&document.activeElement===y&&(c.preventDefault(),g.focus())};document.addEventListener("keydown",s,!0);const u=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",s,!0),document.body.style.overflow=u,l==null||l.focus()}},[e,n]),t}const Vc="su.favorites.presets";function rm(){try{const e=localStorage.getItem(Vc),n=e?JSON.parse(e):[];return Array.isArray(n)?n.filter(t=>typeof t=="string"):[]}catch{return[]}}function lm(){const[e,n]=k.useState(rm);k.useEffect(()=>{try{localStorage.setItem(Vc,JSON.stringify(e))}catch{}},[e]);const t=k.useCallback(l=>e.includes(l),[e]),r=k.useCallback(l=>{n(i=>i.includes(l)?i.filter(o=>o!==l):[...i,l])},[]);return{favorites:e,isFavorite:t,toggle:r,count:e.length}}function im({style:e,compact:n=!1}){const t=k.useMemo(()=>[{src:`/thumbs/${e.id}.webp`,label:"キービジュアル"},{src:`/thumbs/${e.id}-1.webp`,label:"資料イメージ 1"},{src:`/thumbs/${e.id}-2.webp`,label:"資料イメージ 2"}],[e.id]),[r,l]=k.useState(0),[i,o]=k.useState({});k.useEffect(()=>{l(0),o({})},[e.id]);const s=c=>l(h=>(h+c+t.length)%t.length),u=t[r];return a.jsxs("div",{className:`su-slider${n?" su-slider--compact":""}`,tabIndex:0,onKeyDown:c=>{c.key==="ArrowLeft"&&s(-1),c.key==="ArrowRight"&&s(1)},children:[a.jsxs("div",{className:"su-slider__stage",style:{background:e.thumbnailClass},children:[a.jsx("div",{className:"su-slider__track",style:{transform:`translateX(-${r*100}%)`},children:t.map((c,h)=>a.jsx("div",{className:"su-slider__slide",children:i[h]?a.jsxs("div",{className:"su-slider__ph",children:[a.jsx(T,{name:"image",size:n?22:30}),a.jsxs("span",{children:[c.label,"（準備中）"]})]}):a.jsx("img",{src:c.src,alt:`${e.name} ${c.label}`,className:"su-slider__img",loading:"lazy",decoding:"async",onError:()=>o(g=>({...g,[h]:!0}))})},c.label))}),a.jsx("button",{type:"button",className:"su-slider__nav su-slider__nav--prev","aria-label":"前へ",onClick:()=>s(-1),children:a.jsx(T,{name:"chevron_left",size:n?18:26})}),a.jsx("button",{type:"button",className:"su-slider__nav su-slider__nav--next","aria-label":"次へ",onClick:()=>s(1),children:a.jsx(T,{name:"chevron_right",size:n?18:26})}),!n&&a.jsx("span",{className:"su-slider__caption",children:u.label})]}),a.jsx("div",{className:"su-slider__dots",children:t.map((c,h)=>a.jsx("button",{type:"button",className:`su-slider__dot${h===r?" is-on":""}`,"aria-label":`${h+1}枚目: ${c.label}`,onClick:()=>l(h)},c.label))})]})}const om={low:"低",medium:"中",high:"高"};function Ur({label:e,value:n}){const t=n==="high"?100:n==="medium"?60:25;return a.jsxs("div",{className:"su-tend",children:[a.jsx("span",{className:"su-tend__label",children:e}),a.jsx("span",{className:"su-tend__track",children:a.jsx("span",{className:"su-tend__fill",style:{width:`${t}%`}})}),a.jsx("span",{className:"su-tend__val",children:om[n]})]})}function am({open:e,currentStyleId:n,currentTuning:t,onApply:r,onClose:l}){const i=fn(e,l),[o,s]=k.useState(n),[u,c]=k.useState({}),[h,g]=k.useState(null),[y,v]=k.useState("all"),[C,S]=k.useState(null),[O,f]=k.useState(null),[d,p]=k.useState(""),[x,F]=k.useState("category"),[_,j]=k.useState(!1),{isFavorite:P,toggle:Y,count:D}=lm(),me=k.useMemo(()=>Ap(),[]),qe=k.useMemo(()=>bp(),[]),$=k.useMemo(()=>{let m=Ft.filter(w=>{if(_&&!P(w.id)||y!=="all"&&w.category!==y||C&&!w.impressions.includes(C)||O&&!w.colorTones.includes(O))return!1;if(d.trim()){const b=d.trim().toLowerCase();if(!`${w.name} ${w.nameEn} ${w.description} ${w.tags.join(" ")}`.toLowerCase().includes(b))return!1}return!0});return x==="name"?m=[...m].sort((w,b)=>w.name.localeCompare(b.name,"ja")):m=[...m].sort((w,b)=>yi.indexOf(w.category)-yi.indexOf(b.category)),m},[y,C,O,d,x,_,P]),R=on(o)??$[0];k.useEffect(()=>{R&&(R.id===n&&Object.keys(t).length>0?c(t):c(Yp(R)))},[R==null?void 0:R.id,e]);const Oe=(m,w)=>c(b=>({...b,[m]:w})),Tt=()=>{v("all"),S(null),f(null),p(""),j(!1)},Ve=on(h);return e?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"su-overlay",onMouseDown:m=>m.target===m.currentTarget&&l(),children:a.jsxs("div",{className:"su-modal su-modal--library",role:"dialog","aria-modal":"true","aria-label":"世界観ライブラリ",ref:i,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"世界観ライブラリ"}),a.jsx("p",{className:"su-modal__sub",children:"資料の世界観を1つ選びます。あとから変更できます。"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:l,children:a.jsx(T,{name:"close",size:22})})]}),a.jsxs("div",{className:"su-library",children:[a.jsxs("aside",{className:"su-library__filters",children:[a.jsx("div",{className:"su-filter-group",children:a.jsxs("button",{type:"button",className:`su-filter su-filter--fav${_?" is-on":""}`,"aria-pressed":_,onClick:()=>j(m=>!m),children:[a.jsx(T,{name:"star",size:16,filled:_}),"お気に入りだけ",D>0?`（${D}）`:""]})}),a.jsxs("div",{className:"su-filter-group",children:[a.jsxs("div",{className:"su-filter-group__head",children:[a.jsx("span",{children:"カテゴリ"}),a.jsx("button",{type:"button",className:"su-link",onClick:Tt,children:"リセット"})]}),a.jsx("button",{type:"button",className:`su-filter${y==="all"?" is-on":""}`,onClick:()=>v("all"),children:"すべて"}),yi.map(m=>a.jsx("button",{type:"button",className:`su-filter${y===m?" is-on":""}`,onClick:()=>v(m),children:vs[m]},m))]}),a.jsxs("div",{className:"su-filter-group",children:[a.jsx("div",{className:"su-filter-group__head",children:a.jsx("span",{children:"印象"})}),a.jsx("div",{className:"su-filter-tags",children:me.map(m=>a.jsx("button",{type:"button",className:`su-filter-tag${C===m?" is-on":""}`,onClick:()=>S(C===m?null:m),children:m},m))})]}),a.jsxs("div",{className:"su-filter-group",children:[a.jsx("div",{className:"su-filter-group__head",children:a.jsx("span",{children:"色味の傾向"})}),a.jsx("div",{className:"su-filter-tags",children:qe.map(m=>a.jsx("button",{type:"button",className:`su-filter-tag${O===m?" is-on":""}`,onClick:()=>f(O===m?null:m),children:m},m))})]})]}),a.jsxs("div",{className:"su-library__list",children:[a.jsxs("div",{className:"su-library__toolbar",children:[a.jsxs("div",{className:"su-search",children:[a.jsx(T,{name:"search",size:18}),a.jsx("input",{type:"text",className:"su-search__input",placeholder:"世界観を検索","aria-label":"世界観を検索",value:d,onChange:m=>p(m.target.value)})]}),a.jsxs("label",{className:"su-sort",children:["並び替え",a.jsxs("select",{value:x,onChange:m=>F(m.target.value),children:[a.jsx("option",{value:"category",children:"カテゴリ順"}),a.jsx("option",{value:"name",children:"名前順"})]})]})]}),a.jsxs("div",{className:"su-cards",children:[$.map(m=>a.jsxs("div",{className:`su-card${o===m.id?" is-focus":""}${n===m.id?" is-current":""}`,role:"button",tabIndex:0,"aria-pressed":o===m.id,onClick:()=>s(m.id),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),s(m.id))},children:[a.jsxs("span",{className:"su-card__thumb",style:{background:vr(m)},children:[n===m.id&&a.jsxs("span",{className:"su-card__current",children:[a.jsx(T,{name:"check",size:14,filled:!0}),"選択中"]}),a.jsx("button",{type:"button",className:`su-card__fav${P(m.id)?" is-on":""}`,"aria-label":`${m.name} をお気に入り${P(m.id)?"から外す":"に追加"}`,"aria-pressed":P(m.id),onClick:w=>{w.stopPropagation(),Y(m.id)},children:a.jsx(T,{name:"star",size:18,filled:P(m.id)})}),a.jsx("button",{type:"button",className:"su-card__zoom","aria-label":`${m.name} のプレビューを拡大`,onClick:w=>{w.stopPropagation(),g(m.id)},children:a.jsx(T,{name:"visibility",size:20,filled:!0})})]}),a.jsx("span",{className:"su-card__name",children:m.name}),a.jsx("span",{className:"su-card__desc",children:m.description}),a.jsxs("span",{className:"su-card__tags",children:[a.jsx("span",{className:"su-tag su-tag--cat",children:vs[m.category]}),m.impressions.slice(0,2).map(w=>a.jsx("span",{className:"su-tag",children:w},w))]})]},m.id)),$.length===0&&a.jsx("p",{className:"su-muted su-cards__empty",children:_&&D===0?"お気に入りがまだありません。カードの星マークを押すと登録できます。":"条件に合う世界観がありません。"})]})]}),a.jsxs("aside",{className:"su-library__detail",children:[R?a.jsxs("div",{className:"su-detail__scroll",children:[a.jsx("button",{type:"button",className:"su-detail__thumb",style:{background:vr(R)},"aria-label":`${R.name} のプレビューを拡大`,onClick:()=>g(R.id),children:a.jsx("span",{className:"su-detail__zoom",children:a.jsx(T,{name:"visibility",size:20,filled:!0})})}),a.jsx("h3",{className:"su-detail__name",children:R.name}),a.jsx("p",{className:"su-detail__en",children:R.nameEn}),a.jsx("p",{className:"su-detail__desc",children:R.description}),a.jsx("div",{className:"su-detail__tags",children:R.tags.map(m=>a.jsx("span",{className:"su-tag",children:m},m))}),a.jsxs("div",{className:"su-detail__cols",children:[a.jsxs("div",{children:[a.jsxs("h4",{children:[a.jsx(T,{name:"thumb_up",size:15}),"向いている用途"]}),a.jsx("ul",{className:"su-list",children:R.suitableFor.map(m=>a.jsx("li",{children:m},m))})]}),a.jsxs("div",{children:[a.jsxs("h4",{children:[a.jsx(T,{name:"thumb_down",size:15}),"向いていない用途"]}),a.jsx("ul",{className:"su-list su-list--muted",children:R.unsuitableFor.map(m=>a.jsx("li",{children:m},m))})]})]}),a.jsxs("div",{className:"su-detail__section",children:[a.jsx("h4",{children:"スタイル傾向"}),a.jsx(Ur,{label:"信頼感",value:R.tendencies.reliability}),a.jsx(Ur,{label:"ビジュアル優先",value:R.tendencies.visualPriority}),a.jsx(Ur,{label:"データ相性",value:R.tendencies.dataCompatibility}),a.jsx(Ur,{label:"文字量",value:R.tendencies.textAmount})]}),a.jsxs("div",{className:"su-detail__section",children:[a.jsx("h4",{children:"微調整"}),zp(R).map(m=>a.jsxs("div",{className:"su-tuning",children:[a.jsx("span",{className:"su-tuning__label",children:m.label}),m.type==="slider"&&a.jsxs("span",{className:"su-tuning__slider",children:[a.jsx("input",{type:"range",min:m.min,max:m.max,value:Number(u[m.key]??m.defaultValue),"aria-label":m.label,onChange:w=>Oe(m.key,Number(w.target.value))}),m.leftLabel&&a.jsxs("span",{className:"su-tuning__ends",children:[a.jsx("span",{children:m.leftLabel}),a.jsx("span",{children:m.rightLabel})]})]}),m.type==="color"&&a.jsxs("label",{className:"su-tuning__color",children:[a.jsx("input",{type:"color",value:String(u[m.key]??m.defaultValue),"aria-label":m.label,onChange:w=>Oe(m.key,w.target.value)}),a.jsx("span",{className:"su-swatch",style:{background:String(u[m.key]??m.defaultValue)}}),u[m.key]??m.defaultValue]})]},m.key)),a.jsx("p",{className:"su-tuning__note",children:"微調整はプリセットの範囲内で生成プロンプトに反映されます。"})]})]}):a.jsx("p",{className:"su-muted",children:"左のカードから世界観を選んでください。"}),a.jsxs("div",{className:"su-library__detail-footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:l,children:"キャンセル"}),a.jsxs("button",{type:"button",className:"su-btn su-btn--primary su-btn--go",disabled:!R,onClick:()=>R&&r(R.id,u),children:[a.jsx(T,{name:"rocket_launch",size:20,filled:!0}),"GO!"]})]})]})]})]})}),Ve&&a.jsx("div",{className:"su-overlay su-lightbox",onMouseDown:m=>m.target===m.currentTarget&&g(null),children:a.jsxs("div",{className:"su-lightbox__inner",role:"dialog","aria-modal":"true","aria-label":`${Ve.name} プレビュー`,children:[a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:()=>g(null),children:a.jsx(T,{name:"close",size:22})}),a.jsx(im,{style:Ve}),a.jsxs("div",{className:"su-lightbox__meta",children:[a.jsx("h3",{className:"su-lightbox__name",children:Ve.name}),a.jsx("p",{className:"su-lightbox__en",children:Ve.nameEn}),a.jsx("p",{className:"su-lightbox__desc",children:Ve.description})]})]})})]}):null}const sm=[{id:"auto",label:"自動"},{id:"8",label:"8枚"},{id:"12",label:"12枚"},{id:"16",label:"16枚"}];function um({open:e,value:n,onApply:t,onClose:r}){const l=fn(e,r),[i,o]=k.useState(n);return k.useEffect(()=>{e&&o(n)},[e,n]),e?a.jsx("div",{className:"su-overlay su-overlay--right",onMouseDown:s=>s.target===s.currentTarget&&r(),children:a.jsxs("aside",{className:"su-drawer",role:"dialog","aria-modal":"true","aria-label":"詳細設定（枚数・追加ルール）",ref:l,children:[a.jsxs("header",{className:"su-drawer__head",children:[a.jsx("h2",{className:"su-drawer__title",children:"詳細設定"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:r,children:a.jsx(T,{name:"close",size:22})})]}),a.jsx("p",{className:"su-drawer__sub",children:"枚数・追加ルールを調整します。世界観や配色はここでは変更しません。"}),a.jsxs("div",{className:"su-drawer__scroll",children:[a.jsxs("section",{className:"su-field",children:[a.jsx("h3",{className:"su-field__label",children:"スライド枚数"}),a.jsx("div",{className:"su-segmented",children:sm.map(s=>a.jsx("button",{type:"button",className:`su-segmented__item${i.slideCount===s.id?" is-on":""}`,"aria-pressed":i.slideCount===s.id,onClick:()=>o({...i,slideCount:s.id}),children:s.label},s.id))})]}),a.jsxs("section",{className:"su-field",children:[a.jsxs("h3",{className:"su-field__label",children:["追加要望 ",a.jsxs("span",{className:"su-field__count",children:[i.additionalRequest.length,"/300"]})]}),a.jsx("textarea",{className:"su-textarea",rows:3,maxLength:300,placeholder:"例: 冒頭に課題提起のスライドを必ず入れる / 数値は具体的に示す",value:i.additionalRequest,onChange:s=>o({...i,additionalRequest:s.target.value})})]}),a.jsxs("section",{className:"su-field",children:[a.jsxs("h3",{className:"su-field__label",children:["標準品質ルール ",a.jsxs("span",{className:"su-lock",children:[a.jsx(T,{name:"lock",size:14}),"適用中"]})]}),a.jsx("ul",{className:"su-rules su-rules--locked",children:sa.map(s=>a.jsxs("li",{children:[a.jsx(T,{name:"check",size:16}),s]},s))})]}),a.jsxs("section",{className:"su-field",children:[a.jsxs("h3",{className:"su-field__label",children:["追加の禁止事項 ",a.jsxs("span",{className:"su-field__count",children:[i.additionalProhibitions.length,"/200"]})]}),a.jsx("textarea",{className:"su-textarea",rows:3,maxLength:200,placeholder:"例: 競合名を出さない / 特定の色を使わない",value:i.additionalProhibitions,onChange:s=>o({...i,additionalProhibitions:s.target.value})})]})]}),a.jsxs("div",{className:"su-drawer__footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:()=>o(Uc),children:"初期値に戻す"}),a.jsx("button",{type:"button",className:"su-btn su-btn--primary",onClick:()=>t(i),children:"適用する"})]})]})}):null}const fo="su.cookie-consent";function cm(){try{return localStorage.getItem(fo)==="accepted"}catch{return!1}}function er(e,n={}){typeof window>"u"||cm()&&typeof window.gtag=="function"&&window.gtag("event",e,n)}function Ns(e){var t;const n=on(e.styleId);return{style_id:e.styleId??"(none)",style_name:(n==null?void 0:n.name)??"(none)",style_category:(n==null?void 0:n.category)??"(none)",use_case:((t=Jn(e.useCase))==null?void 0:t.label)??"(none)",goal:Ie(Bn,e.goal)??"(none)",impressions:e.impressions.map(r=>Ie(Pt,r)).filter(Boolean).join(" / ")||"(none)",output_depth:e.outputDepth??"(none)",slide_count:e.detailSettings.slideCount}}function dm({open:e,prompt:n,onClose:t,onReedit:r}){const l=fn(e,t),[i,o]=k.useState(!1),s=async()=>{try{await navigator.clipboard.writeText(n)}catch{const u=document.createElement("textarea");u.value=n,document.body.appendChild(u),u.select(),document.execCommand("copy"),document.body.removeChild(u)}o(!0),setTimeout(()=>o(!1),2e3),er("copy_prompt",{chars:n.length})};return e?a.jsx("div",{className:"su-overlay",onMouseDown:u=>u.target===u.currentTarget&&t(),children:a.jsxs("div",{className:"su-modal su-modal--prompt",role:"dialog","aria-modal":"true","aria-label":"生成されたプロンプト",ref:l,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"生成されたプロンプト"}),a.jsx("p",{className:"su-modal__sub",children:"このプロンプトをコピーして、NotebookLMに貼り付けてください。"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:t,children:a.jsx(T,{name:"close",size:22})})]}),a.jsx("pre",{className:"su-prompt-text",tabIndex:0,children:n}),a.jsxs("div",{className:"su-modal__footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:t,children:"閉じる"}),r&&a.jsxs("button",{type:"button",className:"su-btn su-btn--ghost",onClick:r,children:[a.jsx(T,{name:"edit",size:18}),"再編集する"]}),a.jsxs("button",{type:"button",className:"su-btn su-btn--primary",onClick:s,children:[a.jsx(T,{name:i?"check":"content_copy",size:18}),i?"コピーしました":"コピーする"]})]})]})}):null}function Kc({state:e,compact:n=!1}){const t=Jn(e.useCase),r=on(e.styleId);return a.jsxs("div",{className:`su-setsum${n?" su-setsum--compact":""}`,children:[a.jsx("span",{className:"su-setsum__thumb",style:{background:r?vr(r):"rgba(255,255,255,0.08)"},"aria-hidden":"true"}),a.jsxs("dl",{className:"su-setsum__list",children:[a.jsxs("div",{children:[a.jsx("dt",{children:"世界観"}),a.jsx("dd",{children:(r==null?void 0:r.name)??"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"用途"}),a.jsx("dd",{children:(t==null?void 0:t.label)??"—"})]}),!n&&a.jsxs("div",{children:[a.jsx("dt",{children:"対象"}),a.jsx("dd",{children:e.audience.trim()||"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"ゴール"}),a.jsx("dd",{children:Ie(Bn,e.goal)??"—"})]}),a.jsxs("div",{children:[a.jsx("dt",{children:"印象"}),a.jsx("dd",{children:e.impressions.map(l=>Ie(Pt,l)).join(" / ")||"—"})]})]})]})}function fm({state:e,onSave:n,onClose:t}){const r=fn(!0,t),[l,i]=k.useState(""),o=()=>n(l);return a.jsx("div",{className:"su-overlay",onMouseDown:s=>s.target===s.currentTarget&&t(),children:a.jsxs("div",{className:"su-modal su-modal--save",role:"dialog","aria-modal":"true","aria-label":"設定をお気に入り保存",ref:r,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"この設定をお気に入り保存"}),a.jsx("p",{className:"su-modal__sub",children:"名前を付けて保存すると、あとから呼び出して再編集できます。"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:t,children:a.jsx(T,{name:"close",size:22})})]}),a.jsxs("div",{className:"su-modal__body su-save__body",children:[a.jsxs("label",{className:"su-field",children:[a.jsx("span",{className:"su-field__label",children:"お気に入りの名称"}),a.jsx("input",{type:"text",className:"su-input",placeholder:"例: 営業資料・モノクロコラージュ",value:l,autoFocus:!0,maxLength:60,onChange:s=>i(s.target.value),onKeyDown:s=>{s.key==="Enter"&&(s.preventDefault(),o())}})]}),a.jsxs("div",{className:"su-save__summary",children:[a.jsx("span",{className:"su-field__label",children:"保存される内容"}),a.jsx(Kc,{state:e})]})]}),a.jsxs("div",{className:"su-modal__footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:t,children:"キャンセル"}),a.jsxs("button",{type:"button",className:"su-btn su-btn--primary",onClick:o,children:[a.jsx(T,{name:"star",size:18,filled:!0}),"保存する"]})]})]})})}function pm(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}/${t(n.getMonth()+1)}/${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function mm({open:e,items:n,onOpenItem:t,onRemove:r,onClose:l}){const i=fn(e,l);return e?a.jsx("div",{className:"su-overlay su-overlay--right",onMouseDown:o=>o.target===o.currentTarget&&l(),children:a.jsxs("div",{className:"su-drawer",role:"dialog","aria-modal":"true","aria-label":"お気に入りの設定",ref:i,children:[a.jsxs("header",{className:"su-drawer__head",children:[a.jsx("h2",{className:"su-drawer__title",children:"お気に入りの設定"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:l,children:a.jsx(T,{name:"close",size:22})})]}),a.jsx("p",{className:"su-drawer__sub",children:"保存した設定です。押すとプロンプトを確認・再編集できます。"}),a.jsx("div",{className:"su-drawer__scroll",children:n.length===0?a.jsxs("div",{className:"su-drawer-empty",children:[a.jsx("span",{className:"su-drawer-empty__icon",children:a.jsx(T,{name:"star",size:30})}),a.jsx("p",{className:"su-drawer-empty__title",children:"まだお気に入りがありません"}),a.jsx("p",{className:"su-drawer-empty__text",children:"設問を入力して「この設定をお気に入り保存」から登録すると、ここに並びます。"})]}):a.jsx("ul",{className:"su-savelist",children:n.map(o=>a.jsxs("li",{className:"su-savecard",children:[a.jsxs("button",{type:"button",className:"su-savecard__main",onClick:()=>t(o),children:[a.jsx("span",{className:"su-savecard__name",children:o.name}),a.jsx("span",{className:"su-savecard__date",children:pm(o.createdAt)}),a.jsx(Kc,{state:o.state,compact:!0})]}),a.jsx("button",{type:"button",className:"su-savecard__del","aria-label":`${o.name} を削除`,onClick:()=>r(o.id),children:a.jsx(T,{name:"delete",size:18})})]},o.id))})})]})}):null}const hm=[{icon:"description",text:"6つの設問に答えて、目的・対象・印象を伝えます。"},{icon:"palette",text:"世界観ライブラリから、資料に合うビジュアルスタイルを1つ選びます。"},{icon:"tune",text:"必要なら詳細設定で枚数や追加ルールを調整します。"},{icon:"bolt",text:"プロンプトを生成し、コピーしてNotebookLMに貼り付けます。"}];function gm({open:e,onClose:n}){const t=fn(e,n);return e?a.jsx("div",{className:"su-overlay",onMouseDown:r=>r.target===r.currentTarget&&n(),children:a.jsxs("div",{className:"su-modal su-modal--help",role:"dialog","aria-modal":"true","aria-label":"使い方",ref:t,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"使い方"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:n,children:a.jsx(T,{name:"close",size:22})})]}),a.jsx("ol",{className:"su-help",children:hm.map((r,l)=>a.jsxs("li",{className:"su-help__step",children:[a.jsx("span",{className:"su-help__num",children:l+1}),a.jsx(T,{name:r.icon,size:20}),a.jsx("span",{children:r.text})]},l))}),a.jsx("div",{className:"su-modal__footer",children:a.jsx("button",{type:"button",className:"su-btn su-btn--primary",onClick:n,children:"はじめる"})})]})}):null}function ym({open:e,onClose:n}){const t=fn(e,n);return e?a.jsx("div",{className:"su-overlay",onMouseDown:r=>r.target===r.currentTarget&&n(),children:a.jsxs("div",{className:"su-modal su-modal--privacy",role:"dialog","aria-modal":"true","aria-label":"プライバシー・Cookieポリシー",ref:t,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"プライバシー・Cookieポリシー"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:n,children:a.jsx(T,{name:"close",size:22})})]}),a.jsxs("div",{className:"su-policy",children:[a.jsxs("section",{children:[a.jsx("h3",{children:"取得・利用する情報"}),a.jsx("p",{children:"SLIDE UNIVERSE（以下「本サービス」）は、サービス改善とより良い体験のため、以下の情報を扱います。 氏名・メールアドレス等の個人を直接特定する情報は取得しません。"})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"1. ブラウザ内保存（localStorage）"}),a.jsx("p",{children:"「お気に入り」（プリセット・設定の保存）は、お使いのブラウザ内にのみ保存されます。 サーバーには送信されず、当方が閲覧することはできません。ブラウザのデータを消去すれば削除されます。"})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"2. アクセス解析（Cookie・Google アナリティクス）"}),a.jsx("p",{children:"利用状況の把握のため、Google アナリティクス（GA4）を利用します。 これにより Cookie 等を用いて、ページの閲覧やボタン操作（どの世界観・どの組み合わせが使われたか等）を 個人を特定しない統計情報として収集します。これらは本サービスの改善のみに用います。"}),a.jsxs("p",{children:["本サービスは Google Consent Mode v2 を採用し、",a.jsx("strong",{children:"既定ではすべての計測を停止"}),"しています。 下部のCookie通知で「同意する」を選んだ場合にのみ、GA4による計測Cookieが有効になります（オプトイン方式）。 データは Google 社のプライバシーポリシーに基づき処理され、データの一部は米国等へ移転される場合があります。"]})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"3. 同意の管理（オプトイン）"}),a.jsxs("p",{children:["初回訪問時にCookie利用の通知を表示します。",a.jsx("strong",{children:"「同意する」を選ぶまで計測Cookieは設定されません。"}),"「拒否」を選んだ場合も計測は行いません。選択はいつでもブラウザのデータ（localStorage / Cookie）消去で取り消せ、 次回訪問時に再度選択できます。"]})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"4. 利用者の権利"}),a.jsx("p",{children:"本サービスは個人を直接特定する情報を保持しませんが、ご自身に関する情報の確認・削除等のご要望は 運営者までご連絡ください。Cookie・localStorageはブラウザ側でいつでも削除できます。"})]}),a.jsxs("section",{children:[a.jsx("h3",{children:"運営者・お問い合わせ"}),a.jsx("p",{children:"運営者: SLIDE UNIVERSE。本ポリシーに関するお問い合わせは運営者までご連絡ください （お問い合わせ窓口は今後設置予定です）。本ポリシーは予告なく改定する場合があります。"}),a.jsx("p",{className:"su-policy__date",children:"最終更新日: 2026年6月20日"})]})]}),a.jsx("div",{className:"su-modal__footer",children:a.jsx("button",{type:"button",className:"su-btn su-btn--primary",onClick:n,children:"閉じる"})})]})}):null}function vm({onDetails:e}){const[n,t]=k.useState(()=>{try{return!localStorage.getItem(fo)}catch{return!1}});if(!n)return null;const r=l=>{try{localStorage.setItem(fo,l)}catch{}if(typeof window<"u"){window.dataLayer=window.dataLayer||[];const i=window.gtag;typeof i=="function"&&i("consent","update",{analytics_storage:l==="accepted"?"granted":"denied"}),window.dataLayer.push({event:"cookie_consent",consent:l})}t(!1)};return a.jsxs("div",{className:"su-cookie",role:"dialog","aria-label":"Cookieの利用について",children:[a.jsxs("p",{className:"su-cookie__text",children:["本サイトは利用状況の分析のため Cookie（Google アナリティクス）を使用します。",a.jsx("strong",{children:"同意いただくまで分析Cookieは設定されません。"}),a.jsx("button",{type:"button",className:"su-cookie__link",onClick:e,children:"詳細"})]}),a.jsxs("div",{className:"su-cookie__actions",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost su-btn--sm",onClick:()=>r("declined"),children:"拒否"}),a.jsx("button",{type:"button",className:"su-btn su-btn--primary su-btn--sm",onClick:()=>r("accepted"),children:"同意する"})]})]})}const Cm=[{key:"audience",label:"誰に届けるか",placeholder:"例: 40〜60代の個人事業主・講師・経営者。発信や商品説明がブレて困っている人。"},{key:"promise",label:"約束する変化",placeholder:"例: 言葉と見た目がブレない状態。一読で「自分向けだ」と伝わる発信になる。"},{key:"belief",label:"信じていること",placeholder:"例: 見た目の前に、誰に何を約束するかを言葉にする必要がある。"},{key:"useWords",label:"使う言葉",placeholder:"例: 判断基準 / 前提 / 言い切る / 整える。語彙とトーンをここに寄せる。"},{key:"avoidWords",label:"使わない言葉",placeholder:"例: 誰でも簡単 / 爆速で成果 / AIで全部解決 / 自分らしく輝く / 未来が変わる",hint:"言い換えも禁止。AIは禁止されていない言葉を平気で出すので、ここが一番効きます。",strong:!0},{key:"keepImpression",label:"残したい印象",placeholder:"例: 落ち着いた知性。煽らない確信。事業者に信頼される。"},{key:"avoidImpression",label:"避けたい印象",placeholder:"例: ふわっとした自己啓発 / 派手な自己ブランディング / プロンプト小技集っぽさ"},{key:"notDo",label:"やらないこと",placeholder:"例: 煽り / 誇大な数字の約束 / 一般論の量産 / テンプレ丸写し",hint:"提案や表現として持ち込ませない境界線。",strong:!0}];function xm({value:e,onSave:n,onClear:t,onClose:r}){const l=fn(!0,r),[i,o]=k.useState({...qt,...e}),s=(c,h)=>o(g=>({...g,[c]:h})),u=Nl(i);return a.jsx("div",{className:"su-overlay",onMouseDown:c=>c.target===c.currentTarget&&r(),children:a.jsxs("div",{className:"su-modal su-modal--brand",role:"dialog","aria-modal":"true","aria-label":"ブランド前提（brand.md）",ref:l,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"ブランド前提（brand.md）"}),a.jsx("p",{className:"su-modal__sub",children:"AIに一般論を書かせないための「判断基準」。記入した項目だけが、生成する全プロンプトの最優先制約として効きます（全部任意・空欄はプロンプトに出ません）。"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:r,children:a.jsx(T,{name:"close",size:22})})]}),a.jsx("div",{className:"su-modal__body su-brand__body",children:Cm.map(c=>a.jsxs("label",{className:"su-field",children:[a.jsxs("span",{className:"su-field__label",children:[c.label,c.strong&&a.jsx("span",{className:"su-brand__badge",children:"特に効く"})]}),a.jsx("textarea",{className:"su-textarea su-brand__textarea",placeholder:c.placeholder,value:i[c.key],rows:2,onChange:h=>s(c.key,h.target.value)}),c.hint&&a.jsx("span",{className:"su-field__hint",children:c.hint})]},c.key))}),a.jsxs("div",{className:"su-modal__footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:t,children:"クリア"}),a.jsx("span",{className:"su-brand__spacer"}),a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:r,children:"キャンセル"}),a.jsxs("button",{type:"button",className:"su-btn su-btn--primary",onClick:()=>n(i),children:[a.jsx(T,{name:u?"check":"edit",size:18}),"保存する"]})]})]})})}function Em(e){return e==="4:3"?"- キャンバスは4:3（10 × 7.5 inch）。原画の縦横比が違う場合のみ原画の比率を優先する。":e==="original"?"- キャンバスは原画の縦横比に正確に合わせる（一般的な比率に丸めない）。":"- キャンバスは16:9（13.333 × 7.5 inch）。原画の縦横比が違う場合のみ原画の比率を優先する。"}function Sm(e){const n=`# Color Palette
- 配色は原画からHEXで抽出して再現する（近似で済ませない）。`,t=e.split(`
`).map(r=>r.trim()).filter(Boolean);return t.length===0?`${n}
- 色を上書きしたい場合のみ、ここに「# RRGGBB」形式で指定する。`:`${n}
- 以下の配色で上書きする（HEXそのまま適用・近似に丸めない）。白・グレー・黒はそのまま。
${t.map(r=>`  - ${r}`).join(`
`)}`}function km(e){return e==="keep"?`
- 写真・複雑なイラストなど図形で再現できない要素は、原画から該当領域だけを切り出し、同じ位置・サイズに画像（Picture）として貼って残す。見た目を保つことを優先する。
  ※ テキストと図形はネイティブのまま（文字の画像化は禁止）。写真の領域だけを実画像にする。スライド全面・背景を丸ごと画像化するのは引き続き禁止。`:e==="placeholder"?`
- 写真・複雑なイラストなど図形で再現できない要素は、削除せず「差し替え用プレースホルダ」として残す。
  原画と同じ位置・サイズに、淡いグレーの塗りなし矩形 ＋ 中央に「写真」等の小ラベルを置く。
  ユーザーが後から画像を挿入して差し替えられる状態にする（スライド全面のラスタ貼付は引き続き禁止）。`:`
- 写真・複雑なイラストなど図形で再現できない要素は、無理に再現せず省略してよい（全体のレイアウト・余白バランスは崩さない）。`}function wm(e){return`# Input
変換したいスライドの画像またはPDFを、このメッセージに添付してください。
（添付したファイルが、そのまま変換の対象になります）

# Role
あなたは、画像/PDFのスライドを「見た目はほぼ同じ・中身は完全に編集可能」な .pptx に組み直すプロです。python-pptx でゼロから再構築してください。

# Task
Step 1. 原画を観察し、実在する要素だけを列挙する（テンプレ的な要素を勝手に足さない）。
Step 2. 各要素の位置・色・フォントサイズを実測し、原画ピクセル → スライドpt に等比正規化する。
Step 3. テキストは一字一句コピーする（全角/半角・括弧の種類・句点位置・記号まで一致させる）。
Step 4. テキストはネイティブTextBox、装飾はすべてネイティブShapeで組む。
Step 5. 出力後にレンダリングして原画と並べ、見る人にバレるレベルのズレだけ直す（最大3周）。

# Output Format
${Em(e.aspect)}
- 納品物は編集可能な .pptx を1ファイル。

# Design Specifications
- 全テキストが選択・編集できること（文字の画像化・アウトライン化・SmartArt化は禁止）。
- 全シェイプが1つずつ選択・移動・リサイズできること。
- SVGの埋め込み禁止。スライド全面へのラスタ画像（背景含む）貼付も禁止。${km(e.photoMode)}
- 【最重要】点線・破線の枠は「塗りなしシェイプ ＋ 破線アウトライン」で表現する。
  破線は prstDash を dash / sysDash / sysDot から指定し、線幅は1〜2pt。
  ※点や短い線を多数並べて破線を"自作"するのは禁止（等間隔の崩れ・角の潰れの原因になる）。
- 日本語フォントは ea（eastAsia）と latin の両方に同じフェイスを指定する
  （片方だけだと日本語と英数字の境目に半角スペースが入って見える）。
- テキストボックスは右マージンを30〜100pt広めに取り、word_wrap=false にする（末尾の句点切れ防止）。

${Sm(e.colorOverride)}

# Rules
- 原画にない要素を足さない／原画にある要素を落とさない。
- Boldは保守的に当てる（24pt以上の見出し・英語ラベル・アクセント色の小ラベルのみ）。本文中の単語を勝手に太字にしない。
- 破線のチェックは必ずPowerPoint実体で確認する。レンダリングしたPNG画像だけを見て「破線が崩れた」と判定しない（PNG変換側の描画差で崩れて見えることがあるため）。
- 完成基準は「原画と並べて、見る人にバレる破綻がないこと」。ピクセル単位の追い込みはしない。`}const Fm=[{icon:"image",text:"変換したいスライドを画像かPDFで用意（1スライド＝1枚が一番きれい）。"},{icon:"smart_toy",text:"コードを実行できるAIを開く（ChatGPTのコードインタプリタ / Claude）。文章だけのAIは不可。"},{icon:"content_paste",text:"下のプロンプトをコピーして貼り、同じメッセージに資料（画像/PDF）を添付して送信。"},{icon:"download",text:"出てきた .pptx をダウンロード → スライドアプリで開き、全選択で編集できるか確認。"}],_m=[{id:"16:9",label:"16:9"},{id:"4:3",label:"4:3"},{id:"original",label:"原画のまま"}],js=[{id:"keep",label:"そのまま残す",hint:"写真は原画から切り出して実画像として残します（見た目はそのまま・移動やリサイズ可）。文字と図形は編集可能なまま。"},{id:"placeholder",label:"差し替え枠",hint:"写真は「ここに写真」のプレースホルダ枠にします。あとから自分の画像に差し替えたいとき向け。"},{id:"drop",label:"省く",hint:"写真は再現せず省略します。文字と図形だけの軽いスライドにしたいとき向け。"}];function Nm({onClose:e}){var y;const n=fn(!0,e),[t,r]=k.useState("16:9"),[l,i]=k.useState(""),[o,s]=k.useState("keep"),[u,c]=k.useState(!1),h=k.useMemo(()=>wm({aspect:t,colorOverride:l,photoMode:o}),[t,l,o]),g=async()=>{try{await navigator.clipboard.writeText(h)}catch{const v=document.createElement("textarea");v.value=h,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v)}c(!0),setTimeout(()=>c(!1),2e3),er("copy_convert_prompt",{aspect:t,color_override:l.trim().length>0,photo_mode:o})};return a.jsx("div",{className:"su-overlay",onMouseDown:v=>v.target===v.currentTarget&&e(),children:a.jsxs("div",{className:"su-modal su-modal--convert",role:"dialog","aria-modal":"true","aria-label":"画像/PDF → 編集可能パワポに変換",ref:n,children:[a.jsxs("header",{className:"su-modal__head",children:[a.jsx("h2",{className:"su-modal__title",children:"画像/PDF → 編集できるパワポに変換"}),a.jsx("p",{className:"su-modal__sub",children:"AIで作った「1枚画像」のスライドを、文字も図形も編集できる .pptx に組み直す変換プロンプトを発行します。変換はお手元のコード実行AI（ChatGPT/Claude）で行います。"}),a.jsx("button",{type:"button",className:"su-iconbtn","aria-label":"閉じる",onClick:e,children:a.jsx(T,{name:"close",size:22})})]}),a.jsxs("div",{className:"su-modal__body su-convert__body",children:[a.jsx("ol",{className:"su-convert__steps",children:Fm.map((v,C)=>a.jsxs("li",{className:"su-convert__step",children:[a.jsx("span",{className:"su-convert__num",children:C+1}),a.jsx(T,{name:v.icon,size:20}),a.jsx("span",{children:v.text})]},C))}),a.jsxs("div",{className:"su-convert__opts",children:[a.jsxs("div",{className:"su-field",children:[a.jsx("span",{className:"su-field__label",children:"出力の比率"}),a.jsx("div",{className:"su-segmented su-convert__aspect",children:_m.map(v=>a.jsx("button",{type:"button",className:`su-segmented__item${t===v.id?" is-on":""}`,onClick:()=>r(v.id),children:v.label},v.id))})]}),a.jsxs("label",{className:"su-field",children:[a.jsx("span",{className:"su-field__label",children:"配色の上書き（任意）"}),a.jsx("textarea",{className:"su-textarea",rows:3,placeholder:`空欄なら原画からHEX抽出。上書きする時だけ1行ずつ:
メイン：#1976D2
アクセント：#D84315`,value:l,onChange:v=>i(v.target.value)}),a.jsx("span",{className:"su-field__hint",children:"白・グレー・黒はそのまま。指定した色だけHEXで上書きされます。"})]}),a.jsxs("div",{className:"su-field",children:[a.jsx("span",{className:"su-field__label",children:"写真・イラストの扱い"}),a.jsx("div",{className:"su-segmented su-convert__aspect",children:js.map(v=>a.jsx("button",{type:"button",className:`su-segmented__item${o===v.id?" is-on":""}`,onClick:()=>s(v.id),children:v.label},v.id))}),a.jsx("span",{className:"su-field__hint",children:(y=js.find(v=>v.id===o))==null?void 0:y.hint})]})]}),a.jsx("p",{className:"su-convert__pre-label",children:"送信するプロンプト"}),a.jsx("p",{className:"su-field__hint su-convert__pre-hint",children:"中身はAIへの指示です。あなたは編集不要 — コピーして貼り、ファイルを添付して送るだけ。"}),a.jsx("pre",{className:"su-prompt-text su-convert__pre",tabIndex:0,children:h}),a.jsxs("a",{className:"su-convert__faqlink",href:"#/faq",children:[a.jsx(T,{name:"help",size:18}),"使い方・つまずいたら → よくある質問（FAQ）"]})]}),a.jsxs("div",{className:"su-modal__footer",children:[a.jsx("button",{type:"button",className:"su-btn su-btn--ghost",onClick:e,children:"閉じる"}),a.jsxs("button",{type:"button",className:"su-btn su-btn--primary",onClick:g,children:[a.jsx(T,{name:u?"check":"content_copy",size:18}),u?"コピーしました":"プロンプトをコピー"]})]})]})})}function jm(){const[e,n]=k.useState(Op),t=k.useCallback(h=>n(g=>({...g,useCase:h})),[]),r=k.useCallback(h=>n(g=>({...g,audience:h})),[]),l=k.useCallback(h=>n(g=>({...g,goal:h})),[]),i=k.useCallback(h=>{n(g=>g.impressions.includes(h)?{...g,impressions:g.impressions.filter(v=>v!==h)}:g.impressions.length>=3?g:{...g,impressions:[...g.impressions,h]})},[]),o=k.useCallback((h,g)=>n(y=>({...y,styleId:h,tuning:g})),[]),s=k.useCallback(h=>n(g=>({...g,outputDepth:h})),[]),u=k.useCallback(h=>n(g=>({...g,detailSettings:h})),[]),c=k.useCallback(h=>n(h),[]);return{state:e,setUseCase:t,setAudience:r,setGoal:l,toggleImpression:i,setStyle:o,setOutputDepth:s,setDetailSettings:u,restoreState:c}}const Qc="su.favorites.settings";function Pm(){try{const e=localStorage.getItem(Qc),n=e?JSON.parse(e):[];return Array.isArray(n)?n:[]}catch{return[]}}function Tm(){return`s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`}function Am(){const[e,n]=k.useState(Pm);k.useEffect(()=>{try{localStorage.setItem(Qc,JSON.stringify(e))}catch{}},[e]);const t=k.useCallback((l,i)=>{const o={id:Tm(),name:l.trim()||"名称未設定",createdAt:Date.now(),state:structuredClone(i)};n(s=>[o,...s])},[]),r=k.useCallback(l=>{n(i=>i.filter(o=>o.id!==l))},[]);return{items:e,add:t,remove:r,count:e.length}}function bm(){try{const e=localStorage.getItem(Hc);if(!e)return{...qt};const n=JSON.parse(e);return{...qt,...n&&typeof n=="object"?n:{}}}catch{return{...qt}}}function Dm(){const[e,n]=k.useState(bm);k.useEffect(()=>{try{localStorage.setItem(Hc,JSON.stringify(e))}catch{}},[e]);const t=k.useCallback(l=>n(l),[]),r=k.useCallback(()=>n({...qt}),[]);return{brand:e,setBrand:t,clearBrand:r}}function Bm(){const[e,n]=k.useState(()=>window.location.hash);return k.useEffect(()=>{const t=()=>{n(window.location.hash),window.scrollTo(0,0)};return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),e}function Mm(){const e=Bm(),n=jm(),t=Am(),{brand:r,setBrand:l,clearBrand:i}=Dm(),[o,s]=k.useState(!1),[u,c]=k.useState(!1),[h,g]=k.useState(!1),[y,v]=k.useState(!1),[C,S]=k.useState(!1),[O,f]=k.useState(!1),[d,p]=k.useState(null),[x,F]=k.useState(!1),[_,j]=k.useState(!1),[P,Y]=k.useState(null),D=()=>{const $=on(n.state.styleId);$&&(Y(null),p(_s(n.state,$,r)),er("generate_prompt",{...Ns(n.state),brand_set:Nl(r)}))},me=$=>{const R=on($.styleId);j(!1),Y($),p(R?_s($,R,r):"（この設定には世界観が未選択のため、プロンプトを生成できません。再編集で世界観を選んでください。）")},qe=()=>{P&&n.restoreState(P),p(null),Y(null),j(!1)};return e==="#/faq"?a.jsx(Np,{}):a.jsxs("div",{className:"su-app",children:[a.jsx(Fp,{onHelp:()=>g(!0),onOpenFavorites:()=>j(!0),favoritesCount:t.count,onOpenBrand:()=>S(!0),brandActive:Nl(r),onOpenConvert:()=>f(!0)}),a.jsxs("main",{className:"su-top",children:[a.jsx("div",{className:"su-top__left",children:a.jsx(Bp,{api:n,onOpenLibrary:()=>s(!0)})}),a.jsx("div",{className:"su-top__right",children:a.jsx(nm,{api:n,onGenerate:D,onOpenDetail:()=>c(!0),onSaveSetting:()=>F(!0)})})]}),a.jsx(am,{open:o,currentStyleId:n.state.styleId,currentTuning:n.state.tuning,onApply:($,R)=>{n.setStyle($,R),s(!1);const Oe=on($);er("select_style",{style_id:$,style_name:Oe==null?void 0:Oe.name,style_category:Oe==null?void 0:Oe.category})},onClose:()=>s(!1)}),a.jsx(um,{open:u,value:n.state.detailSettings,onApply:$=>{n.setDetailSettings($),c(!1)},onClose:()=>c(!1)}),a.jsx(dm,{open:d!==null,prompt:d??"",onClose:()=>{p(null),Y(null)},onReedit:P?qe:void 0}),x&&a.jsx(fm,{state:n.state,onSave:$=>{t.add($,n.state),F(!1),er("save_setting",Ns(n.state))},onClose:()=>F(!1)}),a.jsx(mm,{open:_,items:t.items,onOpenItem:$=>me($.state),onRemove:t.remove,onClose:()=>j(!1)}),a.jsx(gm,{open:h,onClose:()=>g(!1)}),C&&a.jsx(xm,{value:r,onSave:$=>{l($),S(!1)},onClear:()=>{i(),S(!1)},onClose:()=>S(!1)}),O&&a.jsx(Nm,{onClose:()=>f(!1)}),a.jsxs("footer",{className:"su-footer",children:[a.jsx("span",{children:"© 2026 SLIDE UNIVERSE"}),a.jsx("a",{className:"su-footer__link",href:"#/faq",children:"PPTX変換 FAQ"}),a.jsx("button",{type:"button",className:"su-footer__link",onClick:()=>v(!0),children:"プライバシー・Cookieポリシー"})]}),a.jsx(ym,{open:y,onClose:()=>v(!1)}),a.jsx(vm,{onDetails:()=>v(!0)})]})}vi.createRoot(document.getElementById("root")).render(a.jsx(fd.StrictMode,{children:a.jsx(Mm,{})}));
