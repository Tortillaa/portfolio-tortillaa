(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var jd={exports:{}},Qo={};var zg;function Ky(){if(zg)return Qo;zg=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return Qo.Fragment=n,Qo.jsx=a,Qo.jsxs=a,Qo}var Pg;function Qy(){return Pg||(Pg=1,jd.exports=Ky()),jd.exports}var jt=Qy(),Zd={exports:{}},fe={};var Ig;function Jy(){if(Ig)return fe;Ig=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(P){return P===null||typeof P!="object"?null:(P=M&&P[M]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,v={};function z(P,dt,J){this.props=P,this.context=dt,this.refs=v,this.updater=J||C}z.prototype.isReactComponent={},z.prototype.setState=function(P,dt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,dt,"setState")},z.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=z.prototype;function F(P,dt,J){this.props=P,this.context=dt,this.refs=v,this.updater=J||C}var V=F.prototype=new O;V.constructor=F,y(V,z.prototype),V.isPureReactComponent=!0;var L=Array.isArray;function N(){}var j={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function R(P,dt,J){var nt=J.ref;return{$$typeof:o,type:P,key:dt,ref:nt!==void 0?nt:null,props:J}}function H(P,dt){return R(P.type,dt,P.props)}function K(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ot(P){var dt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(J){return dt[J]})}var ft=/\/+/g;function lt(P,dt){return typeof P=="object"&&P!==null&&P.key!=null?ot(""+P.key):dt.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(N,N):(P.status="pending",P.then(function(dt){P.status==="pending"&&(P.status="fulfilled",P.value=dt)},function(dt){P.status==="pending"&&(P.status="rejected",P.reason=dt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function at(P,dt,J,nt,yt){var Ot=typeof P;(Ot==="undefined"||Ot==="boolean")&&(P=null);var At=!1;if(P===null)At=!0;else switch(Ot){case"bigint":case"string":case"number":At=!0;break;case"object":switch(P.$$typeof){case o:case n:At=!0;break;case _:return At=P._init,at(At(P._payload),dt,J,nt,yt)}}if(At)return yt=yt(P),At=nt===""?"."+lt(P,0):nt,L(yt)?(J="",At!=null&&(J=At.replace(ft,"$&/")+"/"),at(yt,dt,J,"",function(oe){return oe})):yt!=null&&(K(yt)&&(yt=H(yt,J+(yt.key==null||P&&P.key===yt.key?"":(""+yt.key).replace(ft,"$&/")+"/")+At)),dt.push(yt)),1;At=0;var Mt=nt===""?".":nt+":";if(L(P))for(var Gt=0;Gt<P.length;Gt++)nt=P[Gt],Ot=Mt+lt(nt,Gt),At+=at(nt,dt,J,Ot,yt);else if(Gt=A(P),typeof Gt=="function")for(P=Gt.call(P),Gt=0;!(nt=P.next()).done;)nt=nt.value,Ot=Mt+lt(nt,Gt++),At+=at(nt,dt,J,Ot,yt);else if(Ot==="object"){if(typeof P.then=="function")return at(Y(P),dt,J,nt,yt);throw dt=String(P),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return At}function Z(P,dt,J){if(P==null)return P;var nt=[],yt=0;return at(P,nt,"","",function(Ot){return dt.call(J,Ot,yt++)}),nt}function xt(P){if(P._status===-1){var dt=P._result,J=dt();J.then(function(nt){(P._status===0||P._status===-1)&&(P._status=1,P._result=nt,J.status===void 0&&(J.status="fulfilled",J.value=nt))},function(nt){(P._status===0||P._status===-1)&&(P._status=2,P._result=nt,J.status===void 0&&(J.status="rejected",J.reason=nt))}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var _t=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ht(P){var dt=j.T,J={};J.types=dt!==null?dt.types:null,j.T=J;try{var nt=P(),yt=j.S;yt!==null&&yt(J,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(N,_t)}catch(Ot){_t(Ot)}finally{dt!==null&&J.types!==null&&(dt.types=J.types),j.T=dt}}function ue(P){var dt=j.T;if(dt!==null){var J=dt.types;J===null?dt.types=[P]:J.indexOf(P)===-1&&J.push(P)}else Ht(ue.bind(null,P))}var ye={map:Z,forEach:function(P,dt,J){Z(P,function(){dt.apply(this,arguments)},J)},count:function(P){var dt=0;return Z(P,function(){dt++}),dt},toArray:function(P){return Z(P,function(dt){return dt})||[]},only:function(P){if(!K(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return fe.Activity=m,fe.Children=ye,fe.Component=z,fe.Fragment=a,fe.Profiler=u,fe.PureComponent=F,fe.StrictMode=s,fe.Suspense=g,fe.ViewTransition=S,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,fe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return j.H.useMemoCache(P)}},fe.addTransitionType=ue,fe.cache=function(P){return function(){return P.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(P,dt,J){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var nt=y({},P.props),yt=P.key;if(dt!=null)for(Ot in dt.key!==void 0&&(yt=""+dt.key),dt)!D.call(dt,Ot)||Ot==="key"||Ot==="__self"||Ot==="__source"||Ot==="ref"&&dt.ref===void 0||(nt[Ot]=dt[Ot]);var Ot=arguments.length-2;if(Ot===1)nt.children=J;else if(1<Ot){for(var At=Array(Ot),Mt=0;Mt<Ot;Mt++)At[Mt]=arguments[Mt+2];nt.children=At}return R(P.type,yt,nt)},fe.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:f,_context:P},P},fe.createElement=function(P,dt,J){var nt,yt={},Ot=null;if(dt!=null)for(nt in dt.key!==void 0&&(Ot=""+dt.key),dt)D.call(dt,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(yt[nt]=dt[nt]);var At=arguments.length-2;if(At===1)yt.children=J;else if(1<At){for(var Mt=Array(At),Gt=0;Gt<At;Gt++)Mt[Gt]=arguments[Gt+2];yt.children=Mt}if(P&&P.defaultProps)for(nt in At=P.defaultProps,At)yt[nt]===void 0&&(yt[nt]=At[nt]);return R(P,Ot,yt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(P){return{$$typeof:h,render:P}},fe.isValidElement=K,fe.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:xt}},fe.memo=function(P,dt){return{$$typeof:x,type:P,compare:dt===void 0?null:dt}},fe.startTransition=Ht,fe.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},fe.use=function(P){return j.H.use(P)},fe.useActionState=function(P,dt,J){return j.H.useActionState(P,dt,J)},fe.useCallback=function(P,dt){return j.H.useCallback(P,dt)},fe.useContext=function(P){return j.H.useContext(P)},fe.useDebugValue=function(){},fe.useDeferredValue=function(P,dt){return j.H.useDeferredValue(P,dt)},fe.useEffect=function(P,dt){return j.H.useEffect(P,dt)},fe.useEffectEvent=function(P){return j.H.useEffectEvent(P)},fe.useId=function(){return j.H.useId()},fe.useImperativeHandle=function(P,dt,J){return j.H.useImperativeHandle(P,dt,J)},fe.useInsertionEffect=function(P,dt){return j.H.useInsertionEffect(P,dt)},fe.useLayoutEffect=function(P,dt){return j.H.useLayoutEffect(P,dt)},fe.useMemo=function(P,dt){return j.H.useMemo(P,dt)},fe.useOptimistic=function(P,dt){return j.H.useOptimistic(P,dt)},fe.useReducer=function(P,dt,J){return j.H.useReducer(P,dt,J)},fe.useRef=function(P){return j.H.useRef(P)},fe.useState=function(P){return j.H.useState(P)},fe.useSyncExternalStore=function(P,dt,J){return j.H.useSyncExternalStore(P,dt,J)},fe.useTransition=function(){return j.H.useTransition()},fe.version="19.3.0",fe}var Bg;function v0(){return Bg||(Bg=1,Zd.exports=Jy()),Zd.exports}var Zn=v0(),Kd={exports:{}},Jo={},Qd={exports:{}},Jd={};var Fg;function $y(){return Fg||(Fg=1,(function(o){function n(Y,at){var Z=Y.length;Y.push(at);t:for(;0<Z;){var xt=Z-1>>>1,_t=Y[xt];if(0<u(_t,at))Y[xt]=at,Y[Z]=_t,Z=xt;else break t}}function a(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var at=Y[0],Z=Y.pop();if(Z!==at){Y[0]=Z;t:for(var xt=0,_t=Y.length,Ht=_t>>>1;xt<Ht;){var ue=2*(xt+1)-1,ye=Y[ue],P=ue+1,dt=Y[P];if(0>u(ye,Z))P<_t&&0>u(dt,ye)?(Y[xt]=dt,Y[P]=Z,xt=P):(Y[xt]=ye,Y[ue]=Z,xt=ue);else if(P<_t&&0>u(dt,Z))Y[xt]=dt,Y[P]=Z,xt=P;else break t}}return at}function u(Y,at){var Z=Y.sortIndex-at.sortIndex;return Z!==0?Z:Y.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],x=[],_=1,m=null,S=3,M=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function F(Y){for(var at=a(x);at!==null;){if(at.callback===null)s(x);else if(at.startTime<=Y)s(x),at.sortIndex=at.expirationTime,n(g,at);else break;at=a(x)}}function V(Y){if(C=!1,F(Y),!A)if(a(g)!==null)A=!0,L||(L=!0,K());else{var at=a(x);at!==null&&lt(V,at.startTime-Y)}}var L=!1,N=-1,j=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<j)}function H(){if(y=!1,L){var Y=o.unstable_now();D=Y;var at=!0;try{t:{A=!1,C&&(C=!1,z(N),N=-1),M=!0;var Z=S;try{e:{for(F(Y),m=a(g);m!==null&&!(m.expirationTime>Y&&R());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,S=m.priorityLevel;var _t=xt(m.expirationTime<=Y);if(Y=o.unstable_now(),typeof _t=="function"){m.callback=_t,F(Y),at=!0;break e}m===a(g)&&s(g),F(Y)}else s(g);m=a(g)}if(m!==null)at=!0;else{var Ht=a(x);Ht!==null&&lt(V,Ht.startTime-Y),at=!1}}break t}finally{m=null,S=Z,M=!1}at=void 0}}finally{at?K():L=!1}}}var K;if(typeof O=="function")K=function(){O(H)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ft=ot.port2;ot.port1.onmessage=H,K=function(){ft.postMessage(null)}}else K=function(){v(H,0)};function lt(Y,at){N=v(function(){Y(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var Z=S;S=at;try{return Y()}finally{S=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Y,at){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var Z=S;S=Y;try{return at()}finally{S=Z}},o.unstable_scheduleCallback=function(Y,at,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,Y){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Z+_t,Y={id:_++,callback:at,priorityLevel:Y,startTime:Z,expirationTime:_t,sortIndex:-1},Z>xt?(Y.sortIndex=Z,n(x,Y),a(g)===null&&Y===a(x)&&(C?(z(N),N=-1):C=!0,lt(V,Z-xt))):(Y.sortIndex=_t,n(g,Y),A||M||(A=!0,L||(L=!0,K()))),Y},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(Y){var at=S;return function(){var Z=S;S=at;try{return Y.apply(this,arguments)}finally{S=Z}}}})(Jd)),Jd}var Hg;function tM(){return Hg||(Hg=1,Qd.exports=$y()),Qd.exports}var $d={exports:{}},wn={};var Gg;function eM(){if(Gg)return wn;Gg=1;var o=v0();function n(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)m+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,m,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===d?d:""+M,children:_,containerInfo:m,implementation:S}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.browser=function(_){return{$$typeof:f,_reason:_}},wn.createPortal=function(_,m){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return h(_,m,null,S)},wn.flushSync=function(_){var m=g.T,S=s.p;try{if(g.T=null,s.p=2,_)return _()}finally{g.T=m,s.p=S,s.d.f()}},wn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},wn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},wn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var S=m.as,M=x(S,m.crossOrigin),A=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;S==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:C}):S==="script"&&s.d.X(_,{crossOrigin:M,integrity:A,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var S=x(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},wn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var S=m.as,M=x(S,m.crossOrigin);s.d.L(_,S,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(_,m){if(typeof _=="string")if(m){var S=x(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},wn.requestFormReset=function(_){s.d.r(_)},wn.unstable_batchedUpdates=function(_,m){return _(m)},wn.useFormState=function(_,m,S){return g.H.useFormState(_,m,S)},wn.useFormStatus=function(){return g.H.useHostTransitionStatus()},wn.version="19.3.0",wn}var Vg;function nM(){if(Vg)return $d.exports;Vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),$d.exports=eM(),$d.exports}var Xg;function iM(){if(Xg)return Jo;Xg=1;var o=tM(),n=v0(),a=nM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function h(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function x(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return g(l),t;if(c===r)return g(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var p=!1,b=l.child;b;){if(b===i){p=!0,i=l,r=c;break}if(b===r){p=!0,r=l,i=c;break}b=b.sibling}if(!p){for(b=c.child;b;){if(b===i){p=!0,i=c,r=l;break}if(b===r){p=!0,r=c,i=l;break}b=b.sibling}if(!p)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function _(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=_(t),e!==null)return e;t=t.sibling}return null}function m(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&m(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function A(t){var e=[null,null],i=S(t);return i===null||C(e,t,i.child,{foundSelf:!1}),e}function C(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,z=null;function O(t,e,i){return t===i?!0:t===e?(v=t,!0):!1}function F(t,e,i){return t===i?(z=t,!1):t===e?(z!==null&&(v=t),!0):!1}function V(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var N=Object.assign,j=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),ft=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),ue=Symbol.for("react.legacy_hidden"),ye=Symbol.for("react.memo_cache_sentinel"),P=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),J=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function Ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case ot:return"Profiler";case K:return"StrictMode";case at:return"Suspense";case Z:return"SuspenseList";case Ht:return"Activity";case P:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case lt:return t.displayName||"Context";case ft:return(t._context.displayName||"Context")+".Consumer";case Y:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return e=t.displayName||null,e!==null?e:Ot(t.type)||"Memo";case _t:e=t._payload,t=t._init;try{return Ot(t(e))}catch{}}return null}var At=Array.isArray,Mt=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Ve=[],B=-1;function le(t){return{current:t}}function Jt(t){0>B||(t.current=Ve[B],Ve[B]=null,B--)}function te(t,e){B++,Ve[B]=t.current,t.current=e}var It=le(null),Ie=le(null),kt=le(null),re=le(null);function w(t,e){switch(te(kt,e),te(Ie,t),te(It,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?qx(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=qx(e),t=kx(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(It),te(It,t)}function E(){Jt(It),Jt(Ie),Jt(kt)}function et(t){var e=t.memoizedState;e!==null&&(Ns._currentValue=e.memoizedState,te(re,t)),e=It.current;var i=kx(e,t.type);e!==i&&(te(Ie,t),te(It,i))}function mt(t){Ie.current===t&&(Jt(It),Jt(Ie)),re.current===t&&(Jt(re),Ns._currentValue=oe)}var vt,ut;function Vt(t){if(vt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);vt=e&&e[1]||"",ut=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ut}var Ut=!1;function Kt(t,e){if(!t||Ut)return"";Ut=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(wt){var X=wt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(wt){X=wt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(wt){X=wt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(wt){if(wt&&X&&typeof wt.stack=="string")return[wt.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],b=c[1];if(p&&b){var U=p.split(`
`),k=b.split(`
`);for(l=r=0;r<U.length&&!U[r].includes("DetermineComponentFrameRoot");)r++;for(;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;if(r===U.length||l===k.length)for(r=U.length-1,l=k.length-1;1<=r&&0<=l&&U[r]!==k[l];)l--;for(;1<=r&&0<=l;r--,l--)if(U[r]!==k[l]){if(r!==1||l!==1)do if(r--,l--,0>l||U[r]!==k[l]){var it=`
`+U[r].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=r&&0<=l);break}}}finally{Ut=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Vt(i):""}function Yt(t,e){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==e&&e!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Kt(t.type,!1);case 11:return Kt(t.type.render,!1);case 1:return Kt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function St(t){try{var e="",i=null;do e+=Yt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Rt=Object.prototype.hasOwnProperty,ee=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,se=o.unstable_requestPaint,I=o.unstable_now,Nt=o.unstable_getCurrentPriorityLevel,Ct=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,bt=o.unstable_NormalPriority,gt=o.unstable_LowPriority,Xt=o.unstable_IdlePriority,ce=o.log,Ye=o.unstable_setDisableYieldValue,Ce=null,Je=null;function ln(t){if(typeof ce=="function"&&Ye(t),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Ce,t)}catch{}}var zn=Math.clz32?Math.clz32:Ki,xl=Math.log,gl=Math.LN2;function Ki(t){return t>>>=0,t===0?32:31-(xl(t)/gl|0)|0}var Ra=256,dr=262144,hr=4194304;function ci(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pr(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~c,r!==0?l=ci(r):(p&=b,p!==0?l=ci(p):i||(i=b&~t,i!==0&&(l=ci(i))))):(b=r&~c,b!==0?l=ci(b):p!==0?l=ci(p):i||(i=r&~t,i!==0&&(l=ci(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Oi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ro(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-zn(i),l=1<<r;e|=t[r],i&=~l}return e}function _l(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vl(){var t=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),t}function so(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function mr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mc(t,e,i,r,l,c){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var b=t.entanglements,U=t.expirationTimes,k=t.hiddenUpdates;for(i=p&~i;0<i;){var it=31-zn(i),pt=1<<it;b[it]=0,U[it]=-1;var X=k[it];if(X!==null)for(k[it]=null,it=0;it<X.length;it++){var tt=X[it];tt!==null&&(tt.lane&=-536870913)}i&=~pt}r!==0&&Sl(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~e))}function Sl(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-zn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function yl(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-zn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function T(t,e){var i=e&-e;return i=(i&42)!==0?1:W(i),(i&(t.suspendedLanes|e))!==0?0:i}function W(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function st(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:Cg(t.type))}function Q(t,e){var i=Gt.p;try{return Gt.p=t,e()}finally{Gt.p=i}}var Et=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Et,Lt="__reactProps$"+Et,Pt="__reactContainer$"+Et,ne="__reactEvents$"+Et,ae="__reactListeners$"+Et,Qt="__reactHandles$"+Et,_e="__reactResources$"+Et,De="__reactMarker$"+Et,We="__reactLoad$"+Et;function je(t){delete t[Tt],delete t[Lt],delete t[ae],delete t[Qt]}function Ae(t){var e;if(e=t[Tt])return e;for(var i=t.parentNode;i;){if(e=i[Pt]||i[Tt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=lg(t);t!==null;){if(i=t[Tt])return i;t=lg(t)}return e}t=i,i=t.parentNode}return null}function Wt(t){if(t=t[Tt]||t[Pt]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Be(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function ve(t){var e=t[_e];return e||(e=t[_e]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ne(t){t[De]=!0}function Qi(t){t[We]=void 0}var Un=new Set,Ca={};function Oe(t,e){an(t,e),an(t+"Capture",e)}function an(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Un.add(e[t])}var Vn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vn={},En={};function oo(t){return Rt.call(En,t)?!0:Rt.call(vn,t)?!1:Vn.test(t)?En[t]=!0:(vn[t]=!0,!1)}var xe=!1;function w0(){var t=xe;return xe=!1,t}function Ml(t,e,i){if(oo(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function bl(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function Ji(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Qn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xv(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){i=""+p,c.call(this,p)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bc(t){if(!t._valueTracker){var e=U0(t)?"checked":"value";t._valueTracker=xv(t,e,""+t[e])}}function N0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=U0(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var gv=/[\n"\\]/g;function fi(t){return t.replace(gv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ec(t,e,i,r,l,c,p,b){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Qn(e)):t.value!==""+Qn(e)&&(t.value=""+Qn(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?p==="number"&&t.value==e?Tc(t,Qn(t.value)):Tc(t,Qn(e)):i!=null?Tc(t,Qn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Qn(b):t.removeAttribute("name")}function L0(t,e,i,r,l,c,p,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){bc(t);return}i=i!=null?""+Qn(i):"",e=e!=null?""+Qn(e):i,b||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),bc(t)}function Tc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Kr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Qn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function O0(t,e,i){if(e!=null&&(e=""+Qn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Qn(i):""}function z0(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(At(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Qn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),bc(t)}function Qr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var _v=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function P0(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||_v.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function I0(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",xe=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(P0(t,l,r),xe=!0)}else for(var c in e)e.hasOwnProperty(c)&&P0(t,c,e[c])}function Ac(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Rc=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function B0(t){var e=Wt(t);if(e&&(t=e.stateNode)){var i=t[Lt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ec(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+fi(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Lt]||null;if(!l)throw Error(s(90));Ec(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&N0(r)}break t;case"textarea":O0(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Kr(t,!!i.multiple,e,!1)}}}var Dc=!1;function F0(t,e,i){if(Dc)return t(e,i);Dc=!0;try{var r=t(e);return r}finally{if(Dc=!1,(Jr!==null||$r!==null)&&(Eu(),Jr&&(e=Jr,t=$r,$r=Jr=null,B0(e),t)))for(e=0;e<t.length;e++)B0(t[e])}}function lo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Lt]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=!1;if($i)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){wc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{wc=!1}var Da=null,Uc=null,Tl=null;function H0(){if(Tl)return Tl;var t,e=Uc,i=e.length,r,l="value"in Da?Da.value:Da.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var p=i-t;for(r=1;r<=p&&e[i-r]===l[c-r];r++);return Tl=l.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function G0(){return!1}function Pn(t){function e(i,r,l,c,p){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(i=t[b],this[b]=i?i(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Rl:G0,this.isPropagationStopped=G0,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=Pn(wa),co=N({},wa,{view:0,detail:0}),yv=Pn(co),Nc,Lc,fo,Dl=N({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Nc=t.screenX-fo.screenX,Lc=t.screenY-fo.screenY):Lc=Nc=0,fo=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),V0=Pn(Dl),Mv=N({},Dl,{dataTransfer:0}),bv=Pn(Mv),Ev=N({},co,{relatedTarget:0}),Oc=Pn(Ev),Tv=N({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=Pn(Tv),Rv=N({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=Pn(Rv),Dv=N({},wa,{data:0}),X0=Pn(Dv),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function zc(){return Lv}var Ov=N({},co,{key:function(t){if(t.key){var e=wv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zv=Pn(Ov),Pv=N({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=Pn(Pv),Iv=N({},wa,{submitter:0}),Bv=Pn(Iv),Fv=N({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),Hv=Pn(Fv),Gv=N({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=Pn(Gv),Xv=N({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Pn(Xv),kv=N({},wa,{newState:0,oldState:0,source:0}),Yv=Pn(kv),Wv=[9,13,27,32],Pc=$i&&"CompositionEvent"in window,ho=null;$i&&"documentMode"in document&&(ho=document.documentMode);var jv=$i&&"TextEvent"in window&&!ho,k0=$i&&(!Pc||ho&&8<ho&&11>=ho),Y0=" ",W0=!1;function j0(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Zv(t,e){switch(t){case"compositionend":return Z0(e);case"keypress":return e.which!==32?null:(W0=!0,Y0);case"textInput":return t=e.data,t===Y0&&W0?null:t;default:return null}}function Kv(t,e){if(ts)return t==="compositionend"||!Pc&&j0(t,e)?(t=H0(),Tl=Uc=Da=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qv[t.type]:e==="textarea"}function Q0(t,e,i,r){Jr?$r?$r.push(r):$r=[r]:Jr=r,e=wu(e,"onChange"),0<e.length&&(i=new Cl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var po=null,mo=null;function Jv(t){Bx(t,0)}function wl(t){var e=Be(t);if(N0(e))return t}function J0(t,e){if(t==="change")return e}var $0=!1;if($i){var Ic;if($i){var Bc="oninput"in document;if(!Bc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Bc=typeof tp.oninput=="function"}Ic=Bc}else Ic=!1;$0=Ic&&(!document.documentMode||9<document.documentMode)}function ep(){po&&(po.detachEvent("onpropertychange",np),mo=po=null)}function np(t){if(t.propertyName==="value"&&wl(mo)){var e=[];Q0(e,mo,t,Cc(t)),F0(Jv,e)}}function $v(t,e,i){t==="focusin"?(ep(),po=e,mo=i,po.attachEvent("onpropertychange",np)):t==="focusout"&&ep()}function tS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(mo)}function eS(t,e){if(t==="click")return wl(e)}function nS(t,e){if(t==="input"||t==="change")return wl(e)}function iS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:iS;function xo(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Rt.call(e,l)||!Jn(t[l],e[l]))return!1}return!0}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var i=ip(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=ip(i)}}function rp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Fc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Fc(t.document)}return e}function Hc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var aS=$i&&"documentMode"in document&&11>=document.documentMode,es=null,Gc=null,go=null,Vc=!1;function op(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Vc||es==null||es!==Fc(r)||(r=es,"selectionStart"in r&&Hc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&xo(go,r)||(go=r,r=wu(Gc,"onSelect"),0<r.length&&(e=new Cl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=es)))}function xr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ns={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},Xc={},lp={};$i&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function gr(t){if(Xc[t])return Xc[t];if(!ns[t])return t;var e=ns[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in lp)return Xc[t]=e[i];return t}var up=gr("animationend"),cp=gr("animationiteration"),fp=gr("animationstart"),rS=gr("transitionrun"),sS=gr("transitionstart"),oS=gr("transitioncancel"),dp=gr("transitionend"),hp=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function Mi(t,e){hp.set(t,e),Oe(e,[t])}var lS=0;function ta(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ai.identifierPrefix;var i=lS++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function pp(t){if(t==null||typeof t=="string")return t;var e=null,i=Ms;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function ea(t,e){return t=pp(t),e=pp(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],is=0,kc=0;function Nl(){for(var t=is,e=kc=is=0;e<t;){var i=di[e];di[e++]=null;var r=di[e];di[e++]=null;var l=di[e];di[e++]=null;var c=di[e];if(di[e++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&mp(i,l,c)}}function Ll(t,e,i,r){di[is++]=t,di[is++]=e,di[is++]=i,di[is++]=r,kc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Yc(t,e,i,r){return Ll(t,e,i,r),Ol(t)}function _r(t,e){return Ll(t,null,null,e),Ol(t)}function mp(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-zn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Ol(t){if(50<Fo)throw Fo=0,bu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var as={};function uS(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,i,r){return new uS(t,e,i,r)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,e){var i=t.alternate;return i===null?(i=Xn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function xp(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zl(t,e,i,r,l,c){var p=0;if(r=t,typeof r=="function")Wc(r)&&(p=1);else if(typeof r=="string")p=Iy(t,i,It.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ht:return t=Xn(31,i,e,l),t.elementType=Ht,t.lanes=c,t;case H:return vr(i.children,l,c,e);case K:p=8,l|=24;break;case ot:return t=Xn(12,i,e,l|2),t.elementType=ot,t.lanes=c,t;case at:return t=Xn(13,i,e,l),t.elementType=at,t.lanes=c,t;case Z:return t=Xn(19,i,e,l),t.elementType=Z,t.lanes=c,t;case ue:case P:return t=l|32,t=Xn(30,i,e,t),t.elementType=P,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case lt:p=10;break t;case ft:p=9;break t;case Y:p=11;break t;case xt:p=14;break t;case _t:p=16,r=null;break t}p=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Xn(p,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function vr(t,e,i,r){return t=Xn(7,t,r,e),t.lanes=i,t}function jc(t,e,i){return t=Xn(6,t,null,e),t.lanes=i,t}function gp(t){var e=Xn(18,null,null,0);return e.stateNode=t,e}function Zc(t,e,i){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var _p=new WeakMap;function hi(t,e){if(typeof t=="object"&&t!==null){var i=_p.get(t);return i!==void 0?i:(e={value:t,source:e,stack:St(e)},_p.set(t,e),e)}return{value:t,source:e,stack:St(e)}}var rs=[],ss=0,Pl=null,_o=0,pi=[],mi=0,Ua=null,Pi=1,Ii="";function ia(t,e){rs[ss++]=_o,rs[ss++]=Pl,Pl=t,_o=e}function vp(t,e,i){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Ua=t;var r=Pi;t=Ii;var l=32-zn(r)-1;r&=~(1<<l),i+=1;var c=32-zn(e)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Pi=1<<32-zn(e)+l|i<<l|r,Ii=c+t}else Pi=1<<c|i<<l|r,Ii=t}function Il(t){t.return!==null&&(ia(t,1),vp(t,1,0))}function Kc(t){for(;t===Pl;)Pl=rs[--ss],rs[ss]=null,_o=rs[--ss],rs[ss]=null;for(;t===Ua;)Ua=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Pi=pi[--mi],pi[mi]=null}function Sp(t,e){pi[mi++]=Pi,pi[mi++]=Ii,pi[mi++]=Ua,Pi=e.id,Ii=e.overflow,Ua=t}var Sn=null,Ke=null,Se=!1,Na=null,xi=!1,Qc=Error(s(519));function La(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(hi(e,t)),Qc}function yp(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[Tt]=t,e[Lt]=r,i){case"dialog":be("cancel",e),be("close",e);break;case"iframe":case"object":case"embed":be("load",e);break;case"video":case"audio":for(i=0;i<Go.length;i++)be(Go[i],e);break;case"source":be("error",e);break;case"img":case"image":case"link":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"input":be("invalid",e),L0(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",e);break;case"textarea":be("invalid",e),z0(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||Vx(e.textContent,i)?(r.popover!=null&&(be("beforetoggle",e),be("toggle",e)),r.onScroll!=null&&be("scroll",e),r.onScrollEnd!=null&&be("scrollend",e),r.onClick!=null&&(e.onclick=zi),e=!0):e=!1,e||La(t,!0)}function Bl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Sn=Sn.return}}function os(t){if(t!==Sn)return!1;if(!Se)return Bl(t),Se=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Cd(t.type,t.memoizedProps)),i=!i),i&&Ke&&La(t),Bl(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=og(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=og(t)}else e===27?(e=Ke,Za(t.type)?(t=Id,Id=null,Ke=t):Ke=e):Ke=Sn?_i(t.stateNode.nextSibling):null;return!0}function Sr(){Ke=Sn=null,Se=!1}function Jc(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function vo(t){Na===null?Na=[t]:Na.push(t)}var $c=le(null),yr=null,aa=null;function Oa(t,e,i){te($c,e._currentValue),e._currentValue=i}function ra(t){t._currentValue=$c.current,Jt($c)}function Fl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function tf(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var b=c;c=l;for(var U=0;U<e.length;U++)if(b.context===e[U]){c.lanes|=i,b=c.alternate,b!==null&&(b.lanes|=i),Fl(c.return,i,t),r||(p=null);break t}c=b.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=i,c=p.alternate,c!==null&&(c.lanes|=i),Fl(p,i,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,p=l.alternate,p!==null&&(p.lanes|=i),Fl(l.return,i,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Mr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var b=l.type;Jn(l.pendingProps.value,p.value)||(t!==null?t.push(b):t=[b])}}else if(l===re.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ns):t=[Ns])}l=l.return}return t!==null&&tf(e,t,i,r),e.flags|=262144,t!==null}function Hl(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){yr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Mp(yr,t)}function Gl(t,e){return yr===null&&br(t),Mp(t,e)}function Mp(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},aa===null){if(t===null)throw Error(s(308));aa=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else aa=aa.next=e;return i}var cS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},fS=o.unstable_scheduleCallback,dS=o.unstable_NormalPriority,un={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new cS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&fS(dS,function(){t.controller.abort()})}function bp(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var yo=null;function hS(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var Mo=null,nf=0,Er=0,ls=null;function pS(t,e){if(Mo===null){var i=Mo=[];nf=0,Er=vd(),ls={status:"pending",value:void 0,then:function(r){i.push(r)}}}return nf++,e.then(Ep,Ep),e}function Ep(){if(--nf===0&&(yo=null,Mo!==null)){ls!==null&&(ls.status="fulfilled");var t=Mo;Mo=null,Er=0,ls=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function mS(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Tp=Mt.S;Mt.S=function(t,e){if(gx=I(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&pS(t,e),yo!==null)for(var i=As;i!==null;)bp(i,yo),i=i.next;if(i=t.types,i!==null){for(var r=As;r!==null;)bp(r,i),r=r.next;if(Er!==0){r=yo,r===null&&(r=yo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Tp!==null&&Tp(t,e)};var Tr=le(null);function af(){var t=Tr.current;return t!==null?t:Ze.pooledCache}function Vl(t,e){e===null?te(Tr,Tr.current):te(Tr,e.pool)}function Ap(){var t=af();return t===null?null:{parent:un._currentValue,pool:t}}var us=Error(s(460)),rf=Error(s(474)),Xl=Error(s(542)),ql={then:function(){}};function Rp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cp(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(zi,zi),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wp(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(zi,zi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wp(t),t}throw Rr=e,us}}function Ar(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Rr=i,us):i}}var Rr=null;function Dp(){if(Rr===null)throw Error(s(459));var t=Rr;return Rr=null,t}function wp(t){if(t===us||t===Xl)throw Error(s(483))}var cs=null,bo=0;function kl(t){var e=bo;return bo+=1,cs===null&&(cs=[]),Cp(cs,t,e)}function za(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yl(t,e){throw e.$$typeof===j?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Up(t){function e(q,G){if(t){var $=q.deletions;$===null?(q.deletions=[G],q.flags|=16):$.push(G)}}function i(q,G){if(!t)return null;for(;G!==null;)e(q,G),G=G.sibling;return null}function r(q){for(var G=new Map;q!==null;)q.key===null?G.set(q.index,q):G.set(q.key,q),q=q.sibling;return G}function l(q,G){return q=na(q,G),q.index=0,q.sibling=null,q}function c(q,G,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<G?(q.flags|=2,G):$):(q.flags|=134217730,G)):(q.flags|=1048576,G)}function p(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function b(q,G,$,ht){return G===null||G.tag!==6?(G=jc($,q.mode,ht),G.return=q,G):(G=l(G,$),G.return=q,G)}function U(q,G,$,ht){var Ft=$.type;return Ft===H?(q=it(q,G,$.props.children,ht,$.key),za(q,$),q):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===_t&&Ar(Ft)===G.type)?(G=l(G,$.props),za(G,$),G.return=q,G):(G=zl($.type,$.key,$.props,null,q.mode,ht),za(G,$),G.return=q,G)}function k(q,G,$,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Zc($,q.mode,ht),G.return=q,G):(G=l(G,$.children||[]),G.return=q,G)}function it(q,G,$,ht,Ft){return G===null||G.tag!==7?(G=vr($,q.mode,ht,Ft),G.return=q,G):(G=l(G,$),G.return=q,G)}function pt(q,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=jc(""+G,q.mode,$),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return $=zl(G.type,G.key,G.props,null,q.mode,$),za($,G),$.return=q,$;case R:return G=Zc(G,q.mode,$),G.return=q,G;case _t:return G=Ar(G),pt(q,G,$)}if(At(G)||nt(G))return G=vr(G,q.mode,$,null),G.return=q,G;if(typeof G.then=="function")return pt(q,kl(G),$);if(G.$$typeof===lt)return pt(q,Gl(q,G),$);Yl(q,G)}return null}function X(q,G,$,ht){var Ft=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ft!==null?null:b(q,G,""+$,ht);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===Ft?U(q,G,$,ht):null;case R:return $.key===Ft?k(q,G,$,ht):null;case _t:return $=Ar($),X(q,G,$,ht)}if(At($)||nt($))return Ft!==null?null:it(q,G,$,ht,null);if(typeof $.then=="function")return X(q,G,kl($),ht);if($.$$typeof===lt)return X(q,G,Gl(q,$),ht);Yl(q,$)}return null}function tt(q,G,$,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get($)||null,b(G,q,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return q=q.get(ht.key===null?$:ht.key)||null,U(G,q,ht,Ft);case R:return q=q.get(ht.key===null?$:ht.key)||null,k(G,q,ht,Ft);case _t:return ht=Ar(ht),tt(q,G,$,ht,Ft)}if(At(ht)||nt(ht))return q=q.get($)||null,it(G,q,ht,Ft,null);if(typeof ht.then=="function")return tt(q,G,$,kl(ht),Ft);if(ht.$$typeof===lt)return tt(q,G,$,Gl(G,ht),Ft);Yl(G,ht)}return null}function wt(q,G,$,ht){for(var Ft=null,Te=null,Zt=G,ie=G=0,dn=null;Zt!==null&&ie<$.length;ie++){Zt.index>ie?(dn=Zt,Zt=null):dn=Zt.sibling;var we=X(q,Zt,$[ie],ht);if(we===null){Zt===null&&(Zt=dn);break}t&&Zt&&we.alternate===null&&e(q,Zt),G=c(we,G,ie),Te===null?Ft=we:Te.sibling=we,Te=we,Zt=dn}if(ie===$.length)return i(q,Zt),Se&&ia(q,ie),Ft;if(Zt===null){for(;ie<$.length;ie++)Zt=pt(q,$[ie],ht),Zt!==null&&(G=c(Zt,G,ie),Te===null?Ft=Zt:Te.sibling=Zt,Te=Zt);return Se&&ia(q,ie),Ft}for(Zt=r(Zt);ie<$.length;ie++)dn=tt(Zt,q,ie,$[ie],ht),dn!==null&&(t&&(we=dn.alternate,we!==null&&Zt.delete(we.key===null?ie:we.key)),G=c(dn,G,ie),Te===null?Ft=dn:Te.sibling=dn,Te=dn);return t&&Zt.forEach(function(tr){return e(q,tr)}),Se&&ia(q,ie),Ft}function qt(q,G,$,ht){if($==null)throw Error(s(151));for(var Ft=null,Te=null,Zt=G,ie=G=0,dn=null,we=$.next();Zt!==null&&!we.done;ie++,we=$.next()){Zt.index>ie?(dn=Zt,Zt=null):dn=Zt.sibling;var tr=X(q,Zt,we.value,ht);if(tr===null){Zt===null&&(Zt=dn);break}t&&Zt&&tr.alternate===null&&e(q,Zt),G=c(tr,G,ie),Te===null?Ft=tr:Te.sibling=tr,Te=tr,Zt=dn}if(we.done)return i(q,Zt),Se&&ia(q,ie),Ft;if(Zt===null){for(;!we.done;ie++,we=$.next())we=pt(q,we.value,ht),we!==null&&(G=c(we,G,ie),Te===null?Ft=we:Te.sibling=we,Te=we);return Se&&ia(q,ie),Ft}for(Zt=r(Zt);!we.done;ie++,we=$.next())we=tt(Zt,q,ie,we.value,ht),we!==null&&(t&&(dn=we.alternate,dn!==null&&Zt.delete(dn.key===null?ie:dn.key)),G=c(we,G,ie),Te===null?Ft=we:Te.sibling=we,Te=we);return t&&Zt.forEach(function(Zy){return e(q,Zy)}),Se&&ia(q,ie),Ft}function he(q,G,$,ht){if(typeof $=="object"&&$!==null&&$.type===H&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:t:{for(var Ft=$.key;G!==null;){if(G.key===Ft){if(Ft=$.type,Ft===H){if(G.tag===7){i(q,G.sibling),ht=l(G,$.props.children),za(ht,$),ht.return=q,q=ht;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===_t&&Ar(Ft)===G.type){i(q,G.sibling),ht=l(G,$.props),za(ht,$),ht.return=q,q=ht;break t}i(q,G);break}else e(q,G);G=G.sibling}$.type===H?(ht=vr($.props.children,q.mode,ht,$.key),za(ht,$),ht.return=q,q=ht):(ht=zl($.type,$.key,$.props,null,q.mode,ht),za(ht,$),ht.return=q,q=ht)}return p(q);case R:t:{for(Ft=$.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){i(q,G.sibling),ht=l(G,$.children||[]),ht.return=q,q=ht;break t}else{i(q,G);break}else e(q,G);G=G.sibling}ht=Zc($,q.mode,ht),ht.return=q,q=ht}return p(q);case _t:return $=Ar($),he(q,G,$,ht)}if(At($))return wt(q,G,$,ht);if(nt($)){if(Ft=nt($),typeof Ft!="function")throw Error(s(150));return $=Ft.call($),qt(q,G,$,ht)}if(typeof $.then=="function")return he(q,G,kl($),ht);if($.$$typeof===lt)return he(q,G,Gl(q,$),ht);Yl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(i(q,G.sibling),ht=l(G,$),ht.return=q,q=ht):(i(q,G),ht=jc($,q.mode,ht),ht.return=q,q=ht),p(q)):i(q,G)}return function(q,G,$,ht){try{bo=0;var Ft=he(q,G,$,ht);return cs=null,Ft}catch(Zt){if(Zt===us||Zt===Xl)throw Zt;var Te=Xn(29,Zt,null,q.mode);return Te.lanes=ht,Te.return=q,Te}}}var Cr=Up(!0),Np=Up(!1),Pa=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Ol(t),mp(t,null,i),e}return Ll(t,r,e,i),Ol(t)}function Eo(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,yl(t,i)}}function lf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var uf=!1;function To(){if(uf){var t=ls;if(t!==null)throw t}}function Ao(t,e,i,r){uf=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var U=b,k=U.next;U.next=null,p===null?c=k:p.next=k,p=U;var it=t.alternate;it!==null&&(it=it.updateQueue,b=it.lastBaseUpdate,b!==p&&(b===null?it.firstBaseUpdate=k:b.next=k,it.lastBaseUpdate=U))}if(c!==null){var pt=l.baseState;p=0,it=k=U=null,b=c;do{var X=b.lane&-536870913,tt=X!==b.lane;if(tt?(Ee&X)===X:(r&X)===X){X!==0&&X===Er&&(uf=!0),it!==null&&(it=it.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var wt=t,qt=b;X=e;var he=i;switch(qt.tag){case 1:if(wt=qt.payload,typeof wt=="function"){pt=wt.call(he,pt,X);break t}pt=wt;break t;case 3:wt.flags=wt.flags&-65537|128;case 0:if(wt=qt.payload,X=typeof wt=="function"?wt.call(he,pt,X):wt,X==null)break t;pt=N({},pt,X);break t;case 2:Pa=!0}}X=b.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:b.tag,payload:b.payload,callback:b.callback,next:null},it===null?(k=it=tt,U=pt):it=it.next=tt,p|=X;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;tt=b,b=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);it===null&&(U=pt),l.baseState=U,l.firstBaseUpdate=k,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),ka|=p,t.lanes=p,t.memoizedState=pt}}function Lp(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Op(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Lp(i[t],e)}var Fa=le(null),Wl=le(0);function zp(t,e){t=ca,te(Wl,t),te(Fa,e),ca=t|e.baseLanes}function cf(){te(Wl,ca),te(Fa,Fa.current)}function ff(){ca=Wl.current,Jt(Fa),Jt(Wl)}var An=le(null),Nn=null;function Ha(t){var e=t.alternate;te(Rn,Rn.current&1),te(An,t),Nn===null&&(e===null||Fa.current!==null||e.memoizedState!==null)&&(Nn=t)}function df(t){te(Rn,Rn.current),te(An,t),Nn===null&&(Nn=t)}function Pp(t){t.tag===22?(te(Rn,Rn.current),te(An,t),Nn===null&&(Nn=t)):Ga()}function Ga(){te(Rn,Rn.current),te(An,An.current)}function $n(t){Jt(An),Nn===t&&(Nn=null),Jt(Rn)}var Rn=le(0);function Ro(t,e){te(An,An.current),te(Rn,e)}function hf(t){Jt(Rn),Jt(An),Nn===t&&(Nn=null)}function jl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||zd(i)||Pd(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sa=0,de=null,Xe=null,cn=null,Zl=!1,fs=!1,Dr=!1,Kl=0,Co=0,ds=null,xS=0;function en(){throw Error(s(321))}function pf(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Jn(t[i],e[i]))return!1;return!0}function mf(t,e,i,r,l,c){return sa=c,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mt.H=t===null||t.memoizedState===null?vm:Sm,Dr=!1,c=i(r,l),Dr=!1,fs&&(c=Bp(e,i,r,l)),Ip(t),c}function Ip(t){Mt.H=iu;var e=Xe!==null&&Xe.next!==null;if(sa=0,cn=Xe=de=null,Zl=!1,Co=0,ds=null,e)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Hl(t)&&(fn=!0))}function Bp(t,e,i,r){de=t;var l=0;do{if(fs&&(ds=null),Co=0,fs=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=ES,c=e(i,r)}while(fs);return c}function gS(){var t=Mt.H,e=t.useState()[0];return e=typeof e.then=="function"?Do(e):e,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(de.flags|=1024),e}function xf(){var t=Kl!==0;return Kl=0,t}function gf(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function _f(t){if(Zl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zl=!1}sa=0,cn=Xe=de=null,fs=!1,Co=Kl=0,ds=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?de.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Xe===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=cn===null?de.memoizedState:cn.next;if(e!==null)cn=e,Xe=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?de.memoizedState=cn=t:cn=cn.next=t}return cn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var e=Co;return Co+=1,ds===null&&(ds=[]),t=Cp(ds,t,e),e=de,(cn===null?e.memoizedState:cn.next)===null&&(e=e.alternate,Mt.H=e===null||e.memoizedState===null?vm:Sm),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===dt)return;if(t.$$typeof===lt)return Tn(t)}throw Error(s(438,String(t)))}function vf(t){var e=null,i=de.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Ql(),de.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=ye;return e.index++,i}function oa(t,e){return typeof e=="function"?e(t):e}function $l(t){var e=rn();return Sf(e,Xe,t)}function Sf(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var b=p=null,U=null,k=e,it=!1;do{var pt=k.lane&-536870913;if(pt!==k.lane?(Ee&pt)===pt:(sa&pt)===pt){var X=k.revertLane;if(X===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),pt===Er&&(it=!0);else if((sa&X)===X){k=k.next,X===Er&&(it=!0);continue}else pt={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},U===null?(b=U=pt,p=c):U=U.next=pt,de.lanes|=X,ka|=X;pt=k.action,Dr&&i(c,pt),c=k.hasEagerState?k.eagerState:i(c,pt)}else X={lane:pt,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},U===null?(b=U=X,p=c):U=U.next=X,de.lanes|=pt,ka|=pt;k=k.next}while(k!==null&&k!==e);if(U===null?p=c:U.next=b,!Jn(c,t.memoizedState)&&(fn=!0,it&&(i=ls,i!==null)))throw i;t.memoizedState=c,t.baseState=p,t.baseQueue=U,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function yf(t){var e=rn(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);Jn(c,e.memoizedState)||(fn=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Fp(t,e,i){var r=de,l=rn(),c=Se;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var p=!Jn((Xe||l).memoizedState,i);if(p&&(l.memoizedState=i,fn=!0),l=l.queue,Ef(Vp.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||p||cn!==null&&(cn.memoizedState.tag&1)!==0,hs(t?9:8,{destroy:void 0},Gp.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Ze===null)throw Error(s(349));c||(sa&127)!==0||Hp(r,e,i)}return i}function Hp(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=de.updateQueue,e===null?(e=Ql(),de.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Gp(t,e,i,r){e.value=i,e.getSnapshot=r,Xp(e)&&qp(t)}function Vp(t,e,i){return i(function(){Xp(e)&&qp(t)})}function Xp(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Jn(t,i)}catch{return!0}}function qp(t){var e=_r(t,2);e!==null&&Wn(e,t,2)}function Mf(t){var e=In();if(typeof t=="function"){var i=t;if(t=i(),Dr){ln(!0);try{i()}finally{ln(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e}function kp(t,e,i,r){return t.baseState=i,Sf(t,Xe,typeof r=="function"?r:oa)}function _S(t,e,i,r,l){if(nu(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};Mt.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,Yp(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Yp(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Mt.T,p={};p.types=c!==null?c.types:null,Mt.T=p;try{var b=i(l,r),U=Mt.S;U!==null&&U(p,b),Wp(t,e,b)}catch(k){bf(t,e,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),Mt.T=c}}else try{c=i(l,r),Wp(t,e,c)}catch(k){bf(t,e,k)}}function Wp(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){jp(t,e,r)},function(r){return bf(t,e,r)}):jp(t,e,i)}function jp(t,e,i){e.status="fulfilled",e.value=i,Zp(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Yp(t,i)))}function bf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,Zp(e),e=e.next;while(e!==r)}t.action=null}function Zp(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Kp(t,e){return e}function Qp(t,e){if(Se){var i=Ze.formState;if(i!==null){t:{var r=de;if(Se){if(Ke){e:{for(var l=Ke,c=xi;l.nodeType!==8;){if(!c){l=null;break e}if(l=_i(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ke=_i(l.nextSibling),r=l.data==="F!";break t}}La(r)}r=!1}r&&(e=i[0])}}return i=In(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:e},i.queue=r,i=xm.bind(null,de,r),r.dispatch=i,r=Mf(!1),c=Df.bind(null,de,!1,r.queue),r=In(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=_S.bind(null,de,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function Jp(t){var e=rn();return $p(e,Xe,t)}function $p(t,e,i){if(e=Sf(t,e,Kp)[0],t=$l(oa)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Do(e)}catch(p){throw p===us?Xl:p}else r=e;e=rn();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(de.flags|=2048,hs(9,{destroy:void 0},vS.bind(null,l,i),null)),[r,c,t]}function vS(t,e){t.action=e}function tm(t){var e=rn(),i=Xe;if(i!==null)return $p(e,i,t);rn(),e=e.memoizedState,i=rn();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function hs(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=de.updateQueue,e===null&&(e=Ql(),de.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function em(){return rn().memoizedState}function tu(t,e,i,r){var l=In();de.flags|=t,l.memoizedState=hs(1|e,{destroy:void 0},i,r===void 0?null:r)}function eu(t,e,i,r){var l=rn();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&pf(r,Xe.memoizedState.deps)?l.memoizedState=hs(e,c,i,r):(de.flags|=t,l.memoizedState=hs(1|e,c,i,r))}function nm(t,e){tu(8390656,8,t,e)}function Ef(t,e){eu(2048,8,t,e)}function SS(t){de.flags|=4;var e=de.updateQueue;if(e===null)e=Ql(),de.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function im(t){var e=rn().memoizedState;return SS({ref:e,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function am(t,e){return eu(4,2,t,e)}function rm(t,e){return eu(4,4,t,e)}function sm(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function om(t,e,i){i=i!=null?i.concat([t]):null,eu(4,4,sm.bind(null,e,t),i)}function Tf(){}function lm(t,e){var i=rn();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&pf(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function um(t,e){var i=rn();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&pf(e,r[1]))return r[0];if(r=t(),Dr){ln(!0);try{t()}finally{ln(!1)}}return i.memoizedState=[r,e],r}function Af(t,e,i){return i===void 0||(sa&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=vx(),de.lanes|=t,ka|=t,i)}function cm(t,e,i,r){return Jn(i,e)?i:Fa.current!==null?(t=Af(t,i,r),Jn(t,e)||(fn=!0),t):(sa&106)===0||(sa&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=i):(t=vx(),de.lanes|=t,ka|=t,e)}function fm(t,e,i,r,l){var c=Gt.p;Gt.p=c!==0&&8>c?c:8;var p=Mt.T,b={};b.types=p!==null?p.types:null,Mt.T=b,Df(t,!1,e,i);try{var U=l(),k=Mt.S;if(k!==null&&k(b,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var it=mS(U,r);wo(t,e,it,ii(t))}else wo(t,e,r,ii(t))}catch(pt){wo(t,e,{then:function(){},status:"rejected",reason:pt},ii())}finally{Gt.p=c,p!==null&&b.types!==null&&(p.types=b.types),Mt.T=p}}function yS(){}function Rf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=dm(t).queue;fm(t,l,e,oe,i===null?yS:function(){return hm(t),i(r)})}function dm(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:oe},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function hm(t){var e=dm(t);e.next===null&&(e=t.alternate.memoizedState),wo(t,e.next.queue,{},ii())}function Cf(){return Tn(Ns)}function pm(){return rn().memoizedState}function mm(){return rn().memoizedState}function MS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ii();t=Ia(i);var r=Ba(e,t,i);r!==null&&(Wn(r,e,i),Eo(r,e,i)),e={cache:ef()},t.payload=e;return}e=e.return}}function bS(t,e,i){var r=ii();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},nu(t)?gm(e,i):(i=Yc(t,e,i,r),i!==null&&(Wn(i,t,r),_m(i,e,r)))}function xm(t,e,i){var r=ii();wo(t,e,i,r)}function wo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(nu(t))gm(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,b=c(p,i);if(l.hasEagerState=!0,l.eagerState=b,Jn(b,p))return Ll(t,e,l,0),Ze===null&&Nl(),!1}catch{}if(i=Yc(t,e,l,r),i!==null)return Wn(i,t,r),_m(i,e,r),!0}return!1}function Df(t,e,i,r){if(r={lane:2,revertLane:vd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nu(t)){if(e)throw Error(s(479))}else e=Yc(t,i,r,2),e!==null&&Wn(e,t,2)}function nu(t){var e=t.alternate;return t===de||e!==null&&e===de}function gm(t,e){fs=Zl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function _m(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,yl(t,i)}}var iu={readContext:Tn,use:Jl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},vm={readContext:Tn,use:Jl,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:nm,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,tu(4194308,4,sm.bind(null,e,t),i)},useLayoutEffect:function(t,e){return tu(4194308,4,t,e)},useInsertionEffect:function(t,e){tu(4,2,t,e)},useMemo:function(t,e){var i=In();e=e===void 0?null:e;var r=t();if(Dr){ln(!0);try{t()}finally{ln(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=In();if(i!==void 0){var l=i(e);if(Dr){ln(!0);try{i(e)}finally{ln(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=bS.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:function(t){t=Mf(t);var e=t.queue,i=xm.bind(null,de,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Tf,useDeferredValue:function(t,e){var i=In();return Af(i,t,e)},useTransition:function(){var t=Mf(!1);return t=fm.bind(null,de,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=de,l=In();if(Se){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Ze===null)throw Error(s(349));(Ee&127)!==0||Hp(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,nm(Vp.bind(null,r,c,t),[t]),r.flags|=2048,hs(9,{destroy:void 0},Gp.bind(null,r,c,i,e),null),i},useId:function(){var t=In(),e=Ze.identifierPrefix;if(Se){var i=Ii,r=Pi;i=(r&~(1<<32-zn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Kl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=xS++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Cf,useFormState:Qp,useActionState:Qp,useOptimistic:function(t){var e=In();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Df.bind(null,de,!0,i),i.dispatch=e,[t,e]},useMemoCache:vf,useCacheRefresh:function(){return In().memoizedState=MS.bind(null,de)},useEffectEvent:function(t){var e=In(),i={impl:t};return e.memoizedState=i,function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Sm={readContext:Tn,use:Jl,useCallback:lm,useContext:Tn,useEffect:Ef,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:$l,useRef:em,useState:function(){return $l(oa)},useDebugValue:Tf,useDeferredValue:function(t,e){var i=rn();return cm(i,Xe.memoizedState,t,e)},useTransition:function(){var t=$l(oa)[0],e=rn().memoizedState;return[typeof t=="boolean"?t:Do(t),e]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Cf,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,e){var i=rn();return kp(i,Xe,t,e)},useMemoCache:vf,useCacheRefresh:mm,useEffectEvent:im},ES={readContext:Tn,use:Jl,useCallback:lm,useContext:Tn,useEffect:Ef,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:yf,useRef:em,useState:function(){return yf(oa)},useDebugValue:Tf,useDeferredValue:function(t,e){var i=rn();return Xe===null?Af(i,t,e):cm(i,Xe.memoizedState,t,e)},useTransition:function(){var t=yf(oa)[0],e=rn().memoizedState;return[typeof t=="boolean"?t:Do(t),e]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Cf,useFormState:tm,useActionState:tm,useOptimistic:function(t,e){var i=rn();return Xe!==null?kp(i,Xe,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:vf,useCacheRefresh:mm,useEffectEvent:im};function wf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:N({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Uf={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ii(),l=Ia(r);l.payload=e,i!=null&&(l.callback=i),e=Ba(t,l,r),e!==null&&(Wn(e,t,r),Eo(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ii(),l=Ia(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=Ba(t,l,r),e!==null&&(Wn(e,t,r),Eo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ii(),r=Ia(i);r.tag=2,e!=null&&(r.callback=e),e=Ba(t,r,i),e!==null&&(Wn(e,t,i),Eo(e,t,i))}};function ym(t,e,i,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):e.prototype&&e.prototype.isPureReactComponent?!xo(i,r)||!xo(l,c):!0}function Mm(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&Uf.enqueueReplaceState(e,e.state,null)}function wr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=N({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function bm(t){Ul(t)}function Em(t){console.error(t)}function Tm(t){Ul(t)}function au(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Am(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Nf(t,e,i){return i=Ia(i),i.tag=3,i.payload={element:null},i.callback=function(){au(t,e)},i}function Rm(t){return t=Ia(t),t.tag=3,t}function Cm(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Am(e,i,r)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Am(e,i,r),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function TS(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&Mr(e,i,l,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Nn===null?Tu():i.alternate===null&&nn===0&&(nn=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===ql?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),xd(t,r,l)),!1;case 22:return i.flags|=65536,r===ql?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),xd(t,r,l)),!1}throw Error(s(435,i.tag))}return xd(t,r,l),Tu(),!1}if(Se)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==Qc&&(t=Error(s(422),{cause:r}),vo(hi(t,i)))):(r!==Qc&&(e=Error(s(423),{cause:r}),vo(hi(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=hi(r,i),l=Nf(t.stateNode,r,l),lf(t,l),nn!==4&&(nn=2)),!1;var c=Error(s(520),{cause:r});if(c=hi(c,i),Bo===null?Bo=[c]:Bo.push(c),nn!==4&&(nn=2),e===null)return!0;r=hi(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Nf(i.stateNode,r,t),lf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Rm(l),Cm(l,t,i,r),lf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Lf=Error(s(461)),fn=!1;function mn(t,e,i,r){e.child=t===null?Np(e,null,i,r):Cr(e,t.child,i,r)}function Dm(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var p={};for(var b in r)b!=="ref"&&(p[b]=r[b])}else p=r;return br(e),r=mf(t,e,i,p,c,l),b=xf(),t!==null&&!fn?(gf(t,e,l),la(t,e,l)):(Se&&b&&Il(e),e.flags|=1,mn(t,e,r,l),e.child)}function wm(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Wc(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Um(t,e,c,r,l)):(t=zl(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Gf(t,l)){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:xo,i(p,r)&&t.ref===e.ref)return la(t,e,l)}return e.flags|=1,t=na(c,r),t.ref=e.ref,t.return=e,e.child=t}function Um(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(xo(c,r)&&t.ref===e.ref)if(fn=!1,e.pendingProps=r=c,Gf(t,l))(t.flags&131072)!==0&&(fn=!0);else return e.lanes=t.lanes,la(t,e,l)}return Of(t,e,i,r,l)}function Nm(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return Lm(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(e,c!==null?c.cachePool:null),c!==null?zp(e,c):cf(),Pp(e);else return r=e.lanes=536870912,Lm(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Vl(e,c.cachePool),zp(e,c),Ga(),e.memoizedState=null):(t!==null&&Vl(e,null),cf(),Ga());return mn(t,e,l,i),e.child}function Uo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Lm(t,e,i,r,l){var c=af();return c=c===null?null:{parent:un._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Vl(e,null),cf(),Pp(e),t!==null&&Mr(t,e,r,!0),e.childLanes=l,null}function ru(t,e){return e=su({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Om(t,e,i){return Cr(e,t.child,null,i),t=ru(e,e.pendingProps),t.flags|=2,$n(e),e.memoizedState=null,t}function AS(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=ru(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Uo(null,t);if(df(e),(t=Ke)?(t=sg(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=gp(t),i.return=e,e.child=i,Sn=e,Ke=null)):t=null,t===null)throw La(e);return e.lanes=536870912,null}return ru(e,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(df(e),l)if(e.flags&256)e.flags&=-257,e=Om(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(fn||Mr(t,e,i,!1),l=(i&t.childLanes)!==0,fn||l){if(Fa.current===null){if(r=Ze,r!==null&&(p=T(r,i),p!==0&&p!==c.retryLane))throw c.retryLane=p,_r(t,p),Wn(r,t,p),Lf;Tu()}e=Om(t,e,i)}else t=c.treeContext,Ke=_i(p.nextSibling),Sn=e,Se=!0,Na=null,xi=!1,t!==null&&Sp(e,t),e=ru(e,r),e.flags|=134221824;return e}return t=na(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ps(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Of(t,e,i,r,l){return br(e),i=mf(t,e,i,r,void 0,l),r=xf(),t!==null&&!fn?(gf(t,e,l),la(t,e,l)):(Se&&r&&Il(e),e.flags|=1,mn(t,e,i,l),e.child)}function zm(t,e,i,r,l,c){return br(e),e.updateQueue=null,i=Bp(e,r,i,l),Ip(t),r=xf(),t!==null&&!fn?(gf(t,e,c),la(t,e,c)):(Se&&r&&Il(e),e.flags|=1,mn(t,e,i,c),e.child)}function Pm(t,e,i,r,l){if(br(e),e.stateNode===null){var c=as,p=i.contextType;typeof p=="object"&&p!==null&&(c=Tn(p)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Uf,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},sf(e),p=i.contextType,c.context=typeof p=="object"&&p!==null?Tn(p):as,c.state=e.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(wf(e,i,p,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Uf.enqueueReplaceState(c,c.state,null),Ao(e,r,c,l),To(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var b=e.memoizedProps,U=wr(i,b);c.props=U;var k=c.context,it=i.contextType;p=as,typeof it=="object"&&it!==null&&(p=Tn(it));var pt=i.getDerivedStateFromProps;it=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=e.pendingProps!==b,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||k!==p)&&Mm(e,c,r,p),Pa=!1;var X=e.memoizedState;c.state=X,Ao(e,r,c,l),To(),k=e.memoizedState,b||X!==k||Pa?(typeof pt=="function"&&(wf(e,i,pt,r),k=e.memoizedState),(U=Pa||ym(e,i,U,r,X,k,p))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=k),c.props=r,c.state=k,c.context=p,r=U):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,of(t,e),p=e.memoizedProps,it=wr(i,p),c.props=it,pt=e.pendingProps,X=c.context,k=i.contextType,U=as,typeof k=="object"&&k!==null&&(U=Tn(k)),b=i.getDerivedStateFromProps,(k=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==pt||X!==U)&&Mm(e,c,r,U),Pa=!1,X=e.memoizedState,c.state=X,Ao(e,r,c,l),To();var tt=e.memoizedState;p!==pt||X!==tt||Pa||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof b=="function"&&(wf(e,i,b,r),tt=e.memoizedState),(it=Pa||ym(e,i,it,r,X,tt,U)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,tt,U),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,tt,U)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=tt),c.props=r,c.state=tt,c.context=U,r=it):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,ps(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=Cr(e,t.child,null,l),e.child=Cr(e,null,i,l)):mn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=la(t,e,l),t}function Im(t,e,i,r){return Sr(),e.flags|=256,mn(t,e,i,r),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(t){return{baseLanes:t,cachePool:Ap()}}function If(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ni),t}function Bm(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(Se){if(l?Ha(e):Ga(),(t=Ke)?(t=sg(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=gp(t),i.return=e,e.child=i,Sn=e,Ke=null)):t=null,t===null)throw La(e);return Pd(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ga(),l=e.mode,c=su({mode:"hidden",children:c},l),r=vr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Pf(i),r.childLanes=If(t,p,i),e.memoizedState=zf,Uo(null,r)):(Ha(e),Bf(e,c))}var b=t.memoizedState;if(b!==null){var U=b.dehydrated;if(U!==null)return RS(t,e,c,p,r,U,b,i)}return l?(Ga(),l=r.fallback,c=e.mode,b=t.child,U=b.sibling,r=na(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&1206910976,U!==null?l=na(U,l):(l=vr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Uo(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Pf(i):(c=l.cachePool,c!==null?(b=un._currentValue,c=c.parent!==b?{parent:b,pool:b}:c):c=Ap(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=If(t,p,i),e.memoizedState=zf,Uo(t.child,r)):(Ha(e),i=t.child,t=i.sibling,i=na(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=i,e.memoizedState=null,i)}function Bf(t,e){return e=su({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function su(t,e){return t=Xn(22,t,null,e),t.lanes=0,t}function ou(t,e,i){return Cr(e,t.child,null,i),t=Bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RS(t,e,i,r,l,c,p,b){if(i)return e.flags&256?(Ha(e),e.flags&=-257,ou(t,e,b)):e.memoizedState!==null?(Ga(),e.child=t.child,e.flags|=128,null):(Ga(),c=l.fallback,p=e.mode,l=su({mode:"visible",children:l.children},p),c=vr(c,p,b,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,Cr(e,t.child,null,b),l=e.child,l.memoizedState=Pf(b),l.childLanes=If(t,r,b),e.memoizedState=zf,Uo(null,l));if(Ha(e),Pd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var U=r.dgst;return r=U,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,vo({value:l,source:null,stack:null})),ou(t,e,b)}if(fn||Mr(t,e,b,!1),r=(b&t.childLanes)!==0,fn||r){if(Fa.current!==null)return ou(t,e,b);if(r=Ze,r!==null&&(l=T(r,b),l!==0&&l!==p.retryLane))throw p.retryLane=l,_r(t,l),Wn(r,t,l),Lf;return zd(c)||Tu(),ou(t,e,b)}return zd(c)?(e.flags|=192,e.child=t.child,null):(t=p.treeContext,Ke=_i(c.nextSibling),Sn=e,Se=!0,Na=null,xi=!1,t!==null&&Sp(e,t),e=Bf(e,l.children),e.flags|=134221824,e)}function Fm(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fl(t.return,e,i)}function Hm(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&jl(i)===null&&(e=t),t=t.sibling}return e}function lu(t,e,i,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=i,p.tailMode=l,p.treeForkCount=c)}function Ff(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Hf(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Rn.current;if(e.flags&128)return Ro(e,p),null;var b=(p&2)!==0;if(b?(p=p&1|2,e.flags|=128):p&=1,Ro(e,p),l==="backwards"&&t!==null?(Ff(t),mn(t,e,r,i),Ff(t)):mn(t,e,r,i),r=Se?_o:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fm(t,i,e);else if(t.tag===19)Fm(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Hm(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,Ff(e)),lu(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&jl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}lu(e,!0,i,null,c,r);break;case"together":lu(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Hm(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),lu(e,!1,l,i,c,r)}return e.child}function Gm(t,e,i){var r=e.pendingProps;return Oa(e,e.type,r.value),mn(t,e,r.children,i),e.child}function la(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),ka|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(Mr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=na(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=na(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Gf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function CS(t,e,i){switch(e.tag){case 3:w(e,e.stateNode.containerInfo),Oa(e,un,t.memoizedState.cache),Sr();break;case 27:case 5:et(e);break;case 4:w(e,e.stateNode.containerInfo);break;case 10:Oa(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,df(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ha(e),e.flags|=128,null;r=Mr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?Bm(t,e,i):(Ha(e),t=la(t,e,i),t!==null?t.sibling:null)}Ha(e);break;case 19:if(e.flags&128)return Hf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(Mr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Hf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ro(e,Rn.current),r)break;return null;case 22:return e.lanes=0,Nm(t,e,i,e.pendingProps);case 24:Oa(e,un,t.memoizedState.cache)}return la(t,e,i)}function Vm(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)fn=!0;else{if(!Gf(t,i)&&(e.flags&128)===0)return fn=!1,CS(t,e,i);fn=(t.flags&131072)!==0}else fn=!1,Se&&(e.flags&1048576)!==0&&vp(e,_o,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Ar(e.elementType),e.type=t,typeof t=="function")Wc(t)?(r=wr(t,r),e.tag=1,e=Pm(null,e,t,r,i)):(e.tag=0,e=Of(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===Y){e.tag=11,e=Dm(null,e,t,r,i);break t}else if(l===xt){e.tag=14,e=wm(null,e,t,r,i);break t}else if(l===lt){e.tag=10,e.type=t,e=Gm(null,e,i);break t}}throw e=Ot(t)||t,Error(s(306,e,""))}}return e;case 0:return Of(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=wr(r,e.pendingProps),Pm(t,e,r,l,i);case 3:t:{if(w(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,of(t,e),Ao(e,r,null,i);var p=e.memoizedState;if(r=p.cache,Oa(e,un,r),r!==c.cache&&tf(e,[un],i,!0),To(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Im(t,e,r,i);break t}else if(r!==l){l=hi(Error(s(424)),e),vo(l),e=Im(t,e,r,i);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=_i(t.firstChild),Sn=e,Se=!0,Na=null,xi=!0,i=Np(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling;else{if(Sr(),r===l){e=la(t,e,i);break t}mn(t,e,r,i)}e=e.child}return e;case 26:return ps(t,e),t===null?(i=hg(e.type,null,e.pendingProps,null))?e.memoizedState=i:Se||(e.stateNode=Yx(e.type,e.pendingProps,kt.current,e)):e.memoizedState=hg(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return et(e),t===null&&Se&&(r=e.stateNode=ug(e.type,e.pendingProps,kt.current),Sn=e,xi=!0,l=Ke,Za(e.type)?(Id=l,Ke=_i(r.firstChild)):Ke=l),mn(t,e,e.pendingProps.children,i),ps(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Se&&((l=r=Ke)&&(r=My(r,e.type,e.pendingProps,xi),r!==null?(e.stateNode=r,Sn=e,Ke=_i(r.firstChild),xi=!1,l=!0):l=!1),l||La(e)),et(e),l=e.type,c=e.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,Cd(l,c)?r=null:p!==null&&Cd(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=mf(t,e,gS,null,null,i),Ns._currentValue=l),ps(t,e),mn(t,e,r,i),e.child;case 6:return t===null&&Se&&((t=i=Ke)&&(i=by(i,e.pendingProps,xi),i!==null?(e.stateNode=i,Sn=e,Ke=null,t=!0):t=!1),t||La(e)),null;case 13:return Bm(t,e,i);case 4:return w(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cr(e,null,r,i):mn(t,e,r,i),e.child;case 11:return Dm(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,ps(t,e),mn(t,e,r,i),e.child;case 8:return mn(t,e,e.pendingProps.children,i),e.child;case 12:return mn(t,e,e.pendingProps.children,i),e.child;case 10:return Gm(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,br(e),l=Tn(l),r=r(l),e.flags|=1,mn(t,e,r,i),e.child;case 14:return wm(t,e,e.type,e.pendingProps,i);case 15:return Um(t,e,e.type,e.pendingProps,i);case 19:return Hf(t,e,i);case 31:return AS(t,e,i);case 22:return Nm(t,e,i,e.pendingProps);case 24:return br(e),r=Tn(un),t===null?(l=af(),l===null&&(l=Ze,c=ef(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},sf(e),Oa(e,un,l)):((t.lanes&i)!==0&&(of(t,e),Ao(e,null,null,i),To()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Oa(e,un,r)):(r=c.cache,Oa(e,un,r),r!==l.cache&&tf(e,[un],i,!0))),mn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:Se&&Il(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:ps(t,e),mn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ua(t){t.flags|=4}function Vf(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?gg(e,r):gg(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(bx())t.flags|=8192;else throw Rr=ql,rf}else t.flags&=-16777217}function Xm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_g(e))if(bx())t.flags|=8192;else throw Rr=ql,rf}function uu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?vl():536870912,t.lanes|=e,vs|=e)}function No(t,e){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function DS(t,e,i){var r=e.pendingProps;switch(Kc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return Qe(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),ra(un),E(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(os(e)?ua(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jc())),Qe(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(ua(e),c!==null?(Qe(e),Xm(e,c)):(Qe(e),Vf(e,l,null,r,i))):c?c!==t.memoizedState?(ua(e),Qe(e),Xm(e,c)):(Qe(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&ua(e),Qe(e),Vf(e,l,t,r,i)),null;case 27:if(mt(e),i=kt.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ua(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Qe(e),e.subtreeFlags&=-33554433,null}t=It.current,os(e)?yp(e):(t=ug(l,r,i),e.stateNode=t,ua(e))}return Qe(e),e.subtreeFlags&=-33554433,null;case 5:if(mt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ua(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Qe(e),e.subtreeFlags&=-33554433,null}if(c=It.current,os(e))yp(e);else{var p=Xo(kt.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[Tt]=e,c[Lt]=r;t:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break t;for(;p.sibling===null;){if(p.return===null||p.return===e)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ua(e)}}return Qe(e),e.subtreeFlags&=-33554433,Vf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&ua(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=kt.current,os(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=Sn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Tt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||Vx(t.nodeValue,i)),t||La(e,!0)}else t=Xo(t).createTextNode(r),t[Tt]=e,e.stateNode=t}return Qe(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=os(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Tt]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qe(e),t=!1}else i=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?($n(e),e):($n(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Qe(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=os(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Tt]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qe(e),l=!1}else l=Jc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?($n(e),e):($n(e),null)}return $n(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),uu(e,e.updateQueue),Qe(e),null);case 4:return E(),t===null&&bd(e.stateNode.containerInfo),e.flags|=67108864,Qe(e),null;case 10:return ra(e.type),Qe(e),null;case 19:if(hf(e),r=e.memoizedState,r===null)return Qe(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)No(r,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=jl(t),c!==null){for(e.flags|=128,No(r,!1),t=c.updateQueue,e.updateQueue=t,uu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)xp(i,t),i=i.sibling;return Ro(e,Rn.current&1|2),Se&&ia(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&I()>yu&&(e.flags|=128,l=!0,No(r,!1),e.lanes=4194304)}else{if(!l)if(t=jl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,uu(e,t),No(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return Qe(e),null}else 2*I()-r.renderingStartTime>yu&&i!==536870912&&(e.flags|=128,l=!0,No(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=I(),t.sibling=null,c=Rn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||Se?Ro(e,c):(i=c,te(An,e),te(Rn,i),Nn===null&&(Nn=e)),Se&&ia(e,r.treeForkCount),t}return Qe(e),null;case 22:case 23:return $n(e),ff(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),i=e.updateQueue,i!==null&&uu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Jt(Tr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ra(un),Qe(e),null;case 25:return null;case 30:return e.flags|=33554432,Qe(e),null}throw Error(s(156,e.tag))}function wS(t,e){switch(Kc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ra(un),E(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 31:if(e.memoizedState!==null){if($n(e),e.alternate===null)throw Error(s(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if($n(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return hf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return E(),null;case 10:return ra(e.type),null;case 22:case 23:return $n(e),ff(),t!==null&&Jt(Tr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ra(un),null;case 25:return null;default:return null}}function qm(t,e){switch(Kc(e),e.tag){case 3:ra(un),E();break;case 26:case 27:case 5:mt(e);break;case 4:E();break;case 31:e.memoizedState!==null&&$n(e);break;case 13:$n(e);break;case 19:hf(e);break;case 10:ra(e.type);break;case 22:case 23:$n(e),ff(),t!==null&&Jt(Tr);break;case 24:ra(un)}}function Lo(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,p=i.inst;r=c(),p.destroy=r}i=i.next}while(i!==l)}}catch(b){He(e,e.return,b)}}function Va(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,l=e;var U=i,k=b;try{k()}catch(it){He(l,U,it)}}}r=r.next}while(r!==c)}}catch(it){He(e,e.return,it)}}function km(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Op(e,i)}catch(r){He(t,t.return,r)}}}function Ym(t,e,i){i.props=wr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){He(t,e,r)}}function Bi(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ta(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=$x(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ai(t);m(t.child,!1,Sy,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(b){He(t,e,b)}}function Cn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){He(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){He(t,e,l)}else i.current=null}function cu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)rg(t.stateNode,e[i])}function Wm(t){for(var e=t.return;e!==null&&(qf(e)&&rg(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Oo(t){for(var e=t.return;e!==null&&(qf(e)&&yy(t.stateNode,e.stateNode),!Xf(e));)e=e.return}function Xf(t){return t.tag===5||t.tag===3||t.tag===27}function qf(t){return t&&t.tag===7&&t.stateNode!==null}function kf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){He(t,t.return,l)}}function Yf(t,e,i){try{var r=t.stateNode;ny(r,t.type,i,e),r[Lt]=e}catch(l){He(t,t.return,l)}}function jm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Wf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=zi)),cu(t,r),xe=!0;else if(l!==4&&(l===27&&(cu(t,r),r=null,Za(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(jf(t,e,i,r),t=t.sibling;t!==null;)jf(t,e,i,r),t=t.sibling}function fu(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),cu(t,r),xe=!0;else if(l!==4&&(l===27&&(cu(t,r),r=null,Za(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(fu(t,e,i,r),t=t.sibling;t!==null;)fu(t,e,i,r),t=t.sibling}function Zm(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Dn(e,r,i),e[Tt]=t,e[Lt]=i}catch(c){He(t,t.return,c)}}var du=!1,ti=null;function Km(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(du=!0)}var Fi=null;function Qm(){var t=Fi;return Fi=null,t}var qn=0;function ms(t,e,i,r,l){return qn=0,Jm(t.child,e,i,r,l)}function Jm(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var b=Ud(p);r.push(b),b.view&&(c=!0)}else c||Ud(p).view&&(c=!0);du=!0,Qx(p,qn===0?e:e+"_"+qn,i),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||Jm(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Hi(t,e){for(;t!==null;)t.tag===5?Jx(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Hi(t.child,e)),t=t.sibling}function hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=ea(e.default,e.share),e!=="none"&&(ms(t,i,e,null,!1)||Hi(t.child,!1))}t=t.sibling}}function Zf(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ta(r,i),c=ea(r.default,i.paired?r.share:r.enter);c!=="none"?ms(t,l,c,null,!1)?(hu(t),i.paired||e||bs(t,r.onEnter)):Hi(t.child,!1):hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling;else hu(t)}function Kf(t){if(ti!==null&&ti.size!==0){var e=ti;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=ea(i.default,i.share);if(c!=="none"&&(ms(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,bs(t,i.onShare)):Hi(t.child,!1)),e.delete(r),e.size===0)break}}}Kf(t)}t=t.sibling}}}function Qf(t){if(t.tag===30){var e=t.memoizedProps,i=ta(e,t.stateNode),r=ti!==null?ti.get(i):void 0,l=ea(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ms(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ti.delete(i),bs(t,e.onShare)):bs(t,e.onExit):Hi(t.child,!1)),ti!==null&&Kf(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Qf(t),t=t.sibling;else ti!==null&&Kf(t)}function $m(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=ta(e,t.stateNode);e=ea(e.default,e.update),t.flags&=-5,e!=="none"&&ms(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&$m(t);t=t.sibling}}function Jf(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Hi(t.child,!1))}Jf(t)}t=t.sibling}}function pu(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),Jf(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pu(t),t=t.sibling;else Jf(t)}function tx(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&tx(t),t=t.sibling}function $f(t,e,i,r,l,c,p){for(var b=!1;e!==null;){if(e.tag===5){var U=e.stateNode;if(c!==null&&qn<c.length){var k=c[qn],it=Ud(U);(k.view||it.view)&&(b=!0);var pt;if(pt=(t.flags&4)===0)if(it.clip)pt=!0;else{pt=k.rect;var X=it.rect;pt=pt.y!==X.y||pt.x!==X.x||pt.height!==X.height||pt.width!==X.width}pt&&(t.flags|=4),it.abs?it=!k.abs:(k=k.rect,it=it.rect,it=k.height!==it.height||k.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Qx(U,qn===0?i:i+"_"+qn,l),b&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(U,qn===0?r:r+"_"+qn,e.memoizedProps)),qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&p?t.flags|=e.flags&32:$f(t,e.child,i,r,l,c,p)&&(b=!0));e=e.sibling}return b}function ex(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ta(i,r),c=ea(i.default,i.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var b=t.child;qn=0,l=$f(r,b,l,l,c,p,!1),(t.flags&4)!==0&&l&&bs(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&ex(t);t=t.sibling}}var yn=!1,Pe=!1,Gi=!1,td=!1,nx=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Vi=!1,zo=!1,mu=!1,ed=!1;function US(t,e,i){if(t=t.containerInfo,Ad=Ls,t=sp(t),Hc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var b=0,U=-1,k=-1,it=0,pt=0,X=t,tt=null;e:for(;;){for(var wt;X!==r||c!==0&&X.nodeType!==3||(U=b+c),X!==p||l!==0&&X.nodeType!==3||(k=b+l),X.nodeType===3&&(b+=X.nodeValue.length),(wt=X.firstChild)!==null;)tt=X,X=wt;for(;;){if(X===t)break e;if(tt===r&&++it===c&&(U=b),tt===p&&++pt===l&&(k=b),(wt=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=wt}r=U===-1||k===-1?null:{start:U,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rd={focusedElem:t,selectionRange:r},Ls=!1,i=(i&335544064)===i,Mn=e,e=i?9270:1024;Mn!==null;){if(t=Mn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&Qf(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&Km(t),xu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&Qf(r),xu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&Km(t),xu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,Mn=r):(i&&$m(t),xu(i))}}ti=null}function xu(t){for(;Mn!==null;){var e=Mn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var p=wr(e.type,l);i=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(b){He(e,e.return,b)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Od(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Od(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ta(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=ea(l.default,l.update),l!=="none"&&ms(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,Mn=r;break}Mn=e.return}}function ix(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),r&4&&Lo(5,i);break;case 1:if(Xi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(p){He(i,i.return,p)}else{var l=wr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){He(i,i.return,p)}}r&64&&km(i),r&512&&Bi(i,i.return);break;case 3:if(Xi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Op(t,e)}catch(p){He(i,i.return,p)}}break;case 27:e===null&&r&4&&Zm(i);case 26:case 5:Xi(t,i),e===null&&r&4&&kf(i),r&512&&Bi(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),r&4&&ox(t,i);break;case 13:Xi(t,i),r&4&&lx(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=XS.bind(null,i),Ey(t,i))));break;case 22:if(r=i.memoizedState!==null||yn,!r){var c=e!==null&&e.memoizedState!==null||Pe;e=yn,l=Pe,yn=r,(Pe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Ti(t,i,r)):Xi(t,i),yn=e,Pe=l}break;case 30:Xi(t,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Xi(t,i)}}function nd(t,e){for(t=t.child;t!==null;)ax(t,e),t=t.sibling}function ax(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(U){He(t,t.return,U)}id(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,xe=!0}catch(U){He(t,t.return,U)}break;case 18:try{var b=t.stateNode;e?Kx(b,!0):Kx(t.stateNode,!1)}catch(U){He(t,t.return,U)}break;case 22:case 23:t.memoizedState===null&&nd(t,e);break;default:nd(t,e)}}function id(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:ax(i,r);break t;case 22:i.memoizedState===null&&id(i,r);break t;default:id(i,r)}}t=t.sibling}}function rx(t){var e=t.alternate;e!==null&&(t.alternate=null,rx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&je(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,kn=!1;function bi(t,e,i){for(i=i.child;i!==null;)sx(t,e,i),i=i.sibling}function sx(t,e,i){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ce,i)}catch{}switch(i.tag){case 26:Pe||Cn(i,e),bi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||Cn(i,e),Oo(i);var r=$e,l=kn;Za(i.type)&&($e=i.stateNode,kn=!1),bi(t,e,i),cg(i.stateNode,i.type,i.memoizedProps),$e=r,kn=l;break;case 5:Pe||Cn(i,e),Oo(i);case 6:if(i.tag===6&&Oo(i),r=$e,l=kn,$e=null,bi(t,e,i),$e=r,kn=l,$e!==null)if(kn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(i.stateNode),xe=!0}catch(c){He(i,e,c)}else try{$e.removeChild(i.stateNode),xe=!0}catch(c){He(i,e,c)}break;case 18:$e!==null&&(kn?(t=$e,Zx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Os(t)):Zx($e,i.stateNode));break;case 4:r=$e,l=kn,$e=i.stateNode.containerInfo,kn=!0,bi(t,e,i),$e=r,kn=l;break;case 0:case 11:case 14:case 15:Va(2,i,e),Pe||Va(4,i,e),bi(t,e,i);break;case 1:Pe||(Cn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&Ym(i,e,r)),bi(t,e,i);break;case 21:bi(t,e,i);break;case 22:Pe=(r=Pe)||i.memoizedState!==null,bi(t,e,i),Pe=r;break;case 30:Cn(i,e),bi(t,e,i);break;case 7:Pe||Cn(i,e),bi(t,e,i);break;default:bi(t,e,i)}}function ox(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(i){He(e,e.return,i)}}}function lx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(i){He(e,e.return,i)}}function NS(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new nx),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new nx),e;default:throw Error(s(435,t.tag))}}function gu(t,e){var i=NS(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=qS.bind(null,t,r);r.then(l,l)}})}function Bn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,b=e,U=b;t:for(;U!==null;){switch(U.tag){case 27:if(Za(U.type)){$e=U.stateNode,kn=!1;break t}break;case 5:$e=U.stateNode,kn=!1;break t;case 3:case 4:$e=U.stateNode.containerInfo,kn=!0;break t}U=U.return}if($e===null)throw Error(s(160));sx(p,b,c),$e=null,kn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)ux(e,t,i),e=e.sibling}var Ei=null;function ux(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Bn(e,t,i),Fn(t),l&4&&(Va(3,t,t.return),Lo(3,t),Va(5,t,t.return));break;case 1:Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=Ei,Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(yn)t.stateNode=Yx(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[De]||r[Tt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,e,i),r[Tt]=t,Ne(r),e=r;break t;case"link":if(c=xg("link","href",l).get(e+(i.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(e),Dn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=xg("meta","content",l).get(e+(i.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(p,1);break e}}r=l.createElement(e),Dn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[Tt]=t,Ne(r),e=r}t.stateNode=e}else yn||Gd(c,t.type,t.stateNode);else t.stateNode=mg(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Pe||e.parentNode.removeChild(e)):l.count--,i===null?yn||Gd(c,t.type,t.stateNode):mg(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 27:Bn(e,t,i),Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),r!==null&&l&4&&Yf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Gi,Gi=!1,Bn(e,t,i),Gi=c,Fn(t),l&512&&(Pe||r===null||Cn(r,r.return)),t.flags&32){e=t.stateNode;try{Qr(e,""),xe=!0}catch(it){He(t,t.return,it)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Yf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(td=!0);break;case 6:if(Bn(e,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,xe=!0}catch(it){He(t,t.return,it)}}break;case 3:if(xe=!1,Nu=null,c=Ei,Ei=qo(e.containerInfo),Bn(e,t,i),Ei=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(it){He(t,t.return,it)}td&&(td=!1,cx(t)),xe=!1;break;case 4:l=Gi,Gi=yn,r=w0(),c=Ei,Ei=qo(t.stateNode.containerInfo),Bn(e,t,i),Fn(t),Ei=c,xe&&zo&&(mu=!0),xe=r,Gi=l;break;case 12:Bn(e,t,i),Fn(t);break;case 31:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 13:Bn(e,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Su=I()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var b=yn,U=Pe,k=Gi;yn=b||c,Gi=k||c,Pe=U||p,Bn(e,t,i),Pe=U,Gi=k,yn=b,Fn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||p||yn||Pe||(e=p||Pe,i=yn,r=Pe,yn=c||yn,Pe=e,Xa(t,2),yn=i,Pe=r),!c&&Gi||nd(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,gu(t,i))));break;case 19:Bn(e,t,i),Fn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 30:l&512&&(Pe||r===null||Cn(r,r.return)),l=w0(),c=zo,p=(i&335544064)===i,b=t.memoizedProps,zo=p&&ea(b.default,b.update)!=="none",Bn(e,t,i),Fn(t),p&&r!==null&&xe&&(t.flags|=4),zo=c,xe=l;break;case 21:break;case 7:l&512&&(Pe||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Bn(e,t,i),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(jm(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(qf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Xf(l))break;l=l.return}var p=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var b=i.stateNode,U=Wf(t);fu(t,U,b,p);break;case 5:var k=i.stateNode;i.flags&32&&(Qr(k,""),i.flags&=-33);var it=Wf(t);fu(t,it,k,p);break;case 3:case 4:var pt=i.stateNode.containerInfo,X=Wf(t);jf(t,X,pt,p);break;default:throw Error(s(161))}}catch(tt){He(t,t.return,tt)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;cx(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Ls=!0,e.reset(),Ls=!1),t=t.sibling}}function xs(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)fx(e,t),e=e.sibling;else ex(e)}function fx(t,e){var i=t.alternate;if(i===null)Zf(t,!1);else switch(t.tag){case 3:if(ed=Vi=!1,Qm(),xs(e,t),!Vi&&!mu){if(t=Fi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];Jx(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ed=!0}Fi=null;break;case 5:xs(e,t);break;case 4:r=Vi,Vi=!1,xs(e,t),Vi&&(mu=!0),Vi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?Zf(t,!1):xs(e,t));break;case 30:r=Vi,l=Qm(),Vi=!1,xs(e,t),Vi&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;e=ta(c,p),p=ta(i.memoizedProps,p);var b=ea(c.default,c.update);b==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,qn=0,e=$f(t,i,e,p,b,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(bs(t,t.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(t.flags&32)!==0?!0:r;break;default:xs(e,t)}}function Xi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ix(t,e.alternate,e),e=e.sibling}function Xa(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Va(4,i,i.return),Xa(i,r);break;case 1:Cn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&Ym(i,i.return,l),Xa(i,r);break;case 27:(r&2)!==0&&cg(i.stateNode,i.type,i.memoizedProps);case 5:Cn(i,i.return),i.tag!==5&&i.tag!==27||Oo(i),Xa(i,r);break;case 6:Oo(i);break;case 26:Cn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Xa(i,r);break;case 22:i.memoizedState===null&&Xa(i,r);break;case 30:Cn(i,i.return),Xa(i,r);break;case 7:Cn(i,i.return);default:Xa(i,r)}t=t.sibling}}function Ti(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,p=c.flags,b=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Ti(l,c,i),Lo(4,c);break;case 1:if(Ti(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){He(r,r.return,it)}if(r=c,l=r.updateQueue,l!==null){var U=r.stateNode;try{var k=l.shared.hiddenCallbacks;if(k!==null)for(l.shared.hiddenCallbacks=null,l=0;l<k.length;l++)Lp(k[l],U)}catch(it){He(r,r.return,it)}}b&&p&64&&km(c),Bi(c,c.return);break;case 27:(i&2)!==0&&Zm(c);case 5:c.tag!==5&&c.tag!==27||Wm(c),Ti(l,c,i),b&&r===null&&p&4&&kf(c),Bi(c,c.return);break;case 6:Wm(c);break;case 26:U=c.stateNode,c.memoizedState!==null||U===null||yn||Gd(qo(U.ownerDocument),c.type,U),Ti(l,c,i),b&&r===null&&p&4&&kf(c),Bi(c,c.return);break;case 12:Ti(l,c,i);break;case 31:Ti(l,c,i),b&&p&4&&ox(l,c);break;case 13:Ti(l,c,i),b&&p&4&&lx(l,c);break;case 22:c.memoizedState===null&&Ti(l,c,i),Bi(c,c.return);break;case 30:Ti(l,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:Ti(l,c,i)}e=e.sibling}}function ad(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&So(i))}function rd(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&So(t))}function gi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)dx(t,e,i,r),e=e.sibling;else l&&tx(e)}function dx(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&pu(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:gi(t,e,i,r),c&2048&&Lo(9,e);break;case 1:gi(t,e,i,r);break;case 3:gi(t,e,i,r),l&&ed&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&So(c)));break;case 12:if(c&2048){gi(t,e,i,r),c=e.stateNode;try{var p=e.memoizedProps,b=p.id,U=p.onPostCommit;typeof U=="function"&&U(b,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(k){He(e,e.return,k)}}else gi(t,e,i,r);break;case 31:gi(t,e,i,r);break;case 13:gi(t,e,i,r);break;case 23:break;case 22:p=e.stateNode,b=e.alternate,e.memoizedState!==null?(l&&b!==null&&b.memoizedState===null&&pu(b),p._visibility&2?gi(t,e,i,r):Po(t,e)):(l&&b!==null&&b.memoizedState!==null&&pu(e),p._visibility&2?gi(t,e,i,r):(p._visibility|=2,gs(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&ad(b,e);break;case 24:gi(t,e,i,r),c&2048&&rd(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Hi(c.child,!0),Hi(e.child,!0))),gi(t,e,i,r);break;default:gi(t,e,i,r)}}function gs(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,p=e,b=i,U=r,k=p.flags;switch(p.tag){case 0:case 11:case 15:gs(c,p,b,U,l),Lo(8,p);break;case 23:break;case 22:var it=p.stateNode;p.memoizedState!==null?it._visibility&2?gs(c,p,b,U,l):Po(c,p):(it._visibility|=2,gs(c,p,b,U,l)),l&&k&2048&&ad(p.alternate,p);break;case 24:gs(c,p,b,U,l),l&&k&2048&&rd(p.alternate,p);break;default:gs(c,p,b,U,l)}e=e.sibling}}function Po(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Po(i,r),l&2048&&ad(r.alternate,r);break;case 24:Po(i,r),l&2048&&rd(r.alternate,r);break;default:Po(i,r)}e=e.sibling}}var Ur=8192;function Nr(t,e,i){if(t.subtreeFlags&Ur)for(t=t.child;t!==null;)hx(t,e,i),t=t.sibling}function hx(t,e,i){switch(t.tag){case 26:Nr(t,e,i),t.flags&Ur&&(t.memoizedState!==null?By(i,Ei,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Sg(i,t)));break;case 5:Nr(t,e,i),t.flags&Ur&&(t=t.stateNode,(e&335544128)===e&&Sg(i,t));break;case 3:case 4:var r=Ei;Ei=qo(t.stateNode.containerInfo),Nr(t,e,i),Ei=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ur,Ur=16777216,Nr(t,e,i),Ur=r):Nr(t,e,i));break;case 30:if((t.flags&Ur)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ti===null&&(ti=new Map),ti.set(r,l)}Nr(t,e,i);break;default:Nr(t,e,i)}}function px(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Io(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Mn=r,xx(r,t)}px(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mx(t),t=t.sibling}function mx(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_u(t)):Io(t);break;default:Io(t)}}function _u(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];Mn=r,xx(r,t)}px(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Va(8,e,e.return),_u(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,_u(e));break;default:_u(e)}t=t.sibling}}function xx(t,e){for(;Mn!==null;){var i=Mn;switch(i.tag){case 0:case 11:case 15:Va(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:So(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,Mn=r;else t:for(i=t;Mn!==null;){r=Mn;var l=r.sibling,c=r.return;if(rx(r),r===i){Mn=null;break t}if(l!==null){l.return=c,Mn=l;break t}Mn=c}}}var LS={getCacheForType:function(t){var e=Tn(un),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return Tn(un).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ze=null,Me=null,Ee=0,Fe=0,ei=null,qa=!1,_s=!1,sd=!1,ca=0,nn=0,ka=0,Lr=0,vu=0,ni=0,vs=0,Bo=null,Yn=null,od=!1,Su=0,gx=0,yu=1/0,Mu=null,Ya=null,tn=0,Ai=null,Or=null,qi=0,ld=0,ud=null,_x=null,Ss=null,ys=null,Ms=null,Fo=0,bu=null;function ii(){return(ze&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?vd():st()}function vx(){if(ni===0)if((Ee&536870912)===0||Se){var t=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),ni=t}else ni=536870912;return t=An.current,t!==null&&(t.flags|=32),ni}function bs(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=$x(ta(t.memoizedProps,i))),ys===null&&(ys=[]),ys.push(e.bind(null,r))}}function Wn(t,e,i){(t===Ze&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Es(t,0),Wa(t,Ee,ni,!1)),mr(t,i),((ze&2)===0||t!==Ze)&&(t===Ze&&((ze&2)===0&&(Lr|=i),nn===4&&Wa(t,Ee,ni,!1)),ki(t))}function Sx(t,e,i){if((ze&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Oi(t,e),l=r?IS(t,e):fd(t,e,!0),c=r;do{if(l===0){_s&&!r&&Wa(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!zS(i)){l=fd(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var b=t;l=Bo;var U=b.current.memoizedState.isDehydrated;if(U&&(Es(b,p).flags|=256),p=fd(b,p,!1),p!==2&&p!==6){if(sd&&!U){b.errorRecoveryDisabledLanes|=c,Lr|=c,l=4;break t}c=Yn,Yn=l,c!==null&&(Yn===null?Yn=c:Yn.push.apply(Yn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){Es(t,0),Wa(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Wa(r,e,ni,!qa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=Su+300-I(),10<l)){if(Wa(r,e,ni,!qa),pr(r,0,!0)!==0)break t;qi=e,r.timeoutHandle=wd(yx.bind(null,r,i,Yn,Mu,od,e,ni,Lr,vs,qa,c,"Throttled",-0,0),l);break t}yx(r,i,Yn,Mu,od,e,ni,Lr,vs,qa,c,null,-0,0)}}break}while(!0);ki(t)}function yx(t,e,i,r,l,c,p,b,U,k,it,pt,X,tt){t.timeoutHandle=-1;var wt=e.subtreeFlags,qt=(c&335544064)===c;if(pt=null,(qt||wt&8192||(wt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ti=null,hx(e,c,pt),qt&&(wt=pt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(wt.count++,wt.waitingForViewTransition=!0,wt=Wo.bind(wt),qt.finished.then(wt,wt))),wt=(c&62914560)===c?Su-I():(c&4194048)===c?gx-I():0,wt=Fy(pt,wt),wt!==null)){qi=c,t.cancelPendingCommit=wt(Dx.bind(null,t,e,c,i,r,l,p,b,U,k,it,pt,null,X,tt)),Wa(t,c,p,!k);return}Dx(t,e,c,i,r,l,p,b,U,k,it,pt)}function zS(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Jn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wa(t,e,i,r){e=ro(t,e),e&=~vu,e&=~Lr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-zn(l),p=1<<c;r[c]=-1,l&=~p}i!==0&&Sl(t,i,e)}function Eu(){return(ze&6)===0?(Ho(0),!1):!0}function cd(){if(Me!==null){if(Fe===0)var t=Me.return;else t=Me,aa=yr=null,_f(t),cs=null,bo=0,t=Me;for(;t!==null;)qm(t.alternate,t),t=t.return;Me=null}}function Es(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,ry(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),qi=0,cd(),Ze=t,Me=i=na(t.current,null),Ee=e,Fe=0,ei=null,qa=!1,_s=Oi(t,e),sd=!1,vs=ni=vu=Lr=ka=nn=0,Yn=Bo=null,od=!1,ca=ro(t,e),Nl(),i}function Mx(t,e){de=null,Mt.H=iu,e===us||e===Xl?(e=Dp(),Fe=3):e===rf?(e=Dp(),Fe=4):Fe=e===Lf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ei=e,Me===null&&(nn=1,au(t,hi(e,t.current)))}function bx(){var t=An.current;return t===null?!0:(Ee&4194048)===Ee?Nn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Nn:!1}function Ex(){var t=Mt.H;return Mt.H=iu,t===null?iu:t}function Tx(){var t=Mt.A;return Mt.A=LS,t}function Tu(){nn=4,qa||(Ee&4194048)!==Ee&&An.current!==null||(_s=!0),(ka&134217727)===0&&(Lr&134217727)===0||Ze===null||Wa(Ze,Ee,ni,!1)}function fd(t,e,i){var r=ze;ze|=2;var l=Ex(),c=Tx();(Ze!==t||Ee!==e)&&(Mu=null,Es(t,e)),e=!1;var p=nn;t:do try{if(Fe!==0&&Me!==null){var b=Me,U=ei;switch(Fe){case 8:cd(),p=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var k=Fe;if(Fe=0,ei=null,Ts(t,b,U,k),i&&_s){p=0;break t}break;default:k=Fe,Fe=0,ei=null,Ts(t,b,U,k)}}PS(),p=nn;break}catch(it){Mx(t,it)}while(!0);return e&&t.shellSuspendCounter++,aa=yr=null,ze=r,Mt.H=l,Mt.A=c,Me===null&&(Ze=null,Ee=0,Nl()),p}function PS(){for(;Me!==null;)Ax(Me)}function IS(t,e){var i=ze;ze|=2;var r=Ex(),l=Tx();Ze!==t||Ee!==e?(Mu=null,yu=I()+500,Es(t,e)):_s=Oi(t,e);t:do try{if(Fe!==0&&Me!==null){e=Me;var c=ei;e:switch(Fe){case 1:Fe=0,ei=null,Ts(t,e,c,1);break;case 2:case 9:if(Rp(c)){Fe=0,ei=null,Rx(e);break}e=function(){Fe!==2&&Fe!==9||Ze!==t||(Fe=7),ki(t)},c.then(e,e);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Rp(c)?(Fe=0,ei=null,Rx(e)):(Fe=0,ei=null,Ts(t,e,c,7));break;case 5:var p=null;switch(Me.tag){case 26:p=Me.memoizedState;case 5:case 27:var b=Me;if(p?_g(p):b.stateNode.complete){Fe=0,ei=null;var U=b.sibling;if(U!==null)Me=U;else{var k=b.return;k!==null?(Me=k,Au(k)):Me=null}break e}}Fe=0,ei=null,Ts(t,e,c,5);break;case 6:Fe=0,ei=null,Ts(t,e,c,6);break;case 8:cd(),nn=6;break t;default:throw Error(s(462))}}BS();break}catch(it){Mx(t,it)}while(!0);return aa=yr=null,Mt.H=r,Mt.A=l,ze=i,Me!==null?0:(Ze=null,Ee=0,Nl(),nn)}function BS(){for(;Me!==null&&!Bt();)Ax(Me)}function Ax(t){var e=Vm(t.alternate,t,ca);t.memoizedProps=t.pendingProps,e===null?Au(t):Me=e}function Rx(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=zm(i,e,e.pendingProps,e.type,void 0,Ee);break;case 11:e=zm(i,e,e.pendingProps,e.type.render,e.ref,Ee);break;case 5:_f(e);var r=e;r===Sn&&(Se?(Bl(r),r.tag===5&&r.stateNode!=null&&(Ke=r.stateNode)):(Bl(r),Se=!0));default:qm(i,e),e=Me=xp(e,ca),e=Vm(i,e,ca)}t.memoizedProps=t.pendingProps,e===null?Au(t):Me=e}function Ts(t,e,i,r){aa=yr=null,_f(e),cs=null,bo=0;var l=e.return;try{if(TS(t,l,e,i,Ee)){nn=1,au(t,hi(i,t.current)),Me=null;return}}catch(c){if(l!==null)throw Me=l,c;nn=1,au(t,hi(i,t.current)),Me=null;return}e.flags&32768?(Se||r===1?t=!0:_s||(Ee&536870912)!==0?t=!1:(qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),Cx(e,t)):Au(e)}function Au(t){var e=t;do{if((e.flags&32768)!==0){Cx(e,qa);return}t=e.return;var i=DS(e.alternate,e,ca);if(i!==null){Me=i;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);nn===0&&(nn=5)}function Cx(t,e){do{var i=wS(t.alternate,t);if(i!==null){i.flags&=32767,Me=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){Me=t;return}Me=t=i}while(t!==null);nn=6,Me=null}function Dx(t,e,i,r,l,c,p,b,U,k,it,pt){t.cancelPendingCommit=null;do Ru();while(tn!==0);if((ze&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Ze&&(Me=Ze=null,Ee=0),Or=e,Ai=t,qi=i,ud=l,_x=r,FS(t,e,i,p,b,U,pt)}}function FS(t,e,i,r,l,c,p){var b=e.lanes|e.childLanes;if(ld=b,b|=kc,Mc(t,i,b,r,l,c),ys=null,(i&335544064)===i?(Ms=hS(t),r=10262):(Ms=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,kS(bt,function(){return md(),null})):(t.callbackNode=null,t.callbackPriority=0),du=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,l=Gt.p,Gt.p=2,c=ze,ze|=4;try{US(t,e,i)}finally{ze=c,Gt.p=l,Mt.T=r}}tn=1,du?Ss=fy(p,t.containerInfo,Ms,dd,hd,GS,pd,md,HS):(dd(),hd(),pd())}function HS(t){if(tn!==0){var e=Ai.onRecoverableError;e(t,{componentStack:null})}}function GS(){tn===3&&(tn=0,fx(Or,Ai),tn=4)}function dd(){if(tn===1){tn=0;var t=Ai,e=Or,i=qi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var l=Gt.p;Gt.p=2;var c=ze;ze|=4;try{zo=mu=!1,ux(e,t,i),i=Rd;var p=sp(t.containerInfo),b=i.focusedElem,U=i.selectionRange;if(p!==b&&b&&b.ownerDocument&&rp(b.ownerDocument.documentElement,b)){if(U!==null&&Hc(b)){var k=U.start,it=U.end;if(it===void 0&&(it=k),"selectionStart"in b)b.selectionStart=k,b.selectionEnd=Math.min(it,b.value.length);else{var pt=b.ownerDocument||document,X=pt&&pt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),wt=b.textContent.length,qt=Math.min(U.start,wt),he=U.end===void 0?qt:Math.min(U.end,wt);!tt.extend&&qt>he&&(p=he,he=qt,qt=p);var q=ap(b,qt),G=ap(b,he);if(q&&G&&(tt.rangeCount!==1||tt.anchorNode!==q.node||tt.anchorOffset!==q.offset||tt.focusNode!==G.node||tt.focusOffset!==G.offset)){var $=pt.createRange();$.setStart(q.node,q.offset),tt.removeAllRanges(),qt>he?(tt.addRange($),tt.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),tt.addRange($))}}}}for(pt=[],tt=b;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pt.length;b++){var ht=pt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Ls=!!Ad,Rd=Ad=null}finally{ze=c,Gt.p=l,Mt.T=r}}t.current=e,tn=2}}function hd(){if(tn===2){tn=0;var t=Ai,e=Or,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Mt.T,Mt.T=null;var r=Gt.p;Gt.p=2;var l=ze;ze|=4;try{ix(t,e.alternate,e)}finally{ze=l,Gt.p=r,Mt.T=i}}tn=3}}function pd(){if(tn===4||tn===3){tn=0;var t=Ss;Ss=null,se();var e=Ai,i=Or,r=qi,l=_x,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Or=Ai=null,wx(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Ya=null),rt(r),i=i.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ce,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Mt.T,c=Gt.p,Gt.p=2,Mt.T=null;try{for(var p=e.onRecoverableError,b=0;b<l.length;b++){var U=l[b];p(U.value,{componentStack:U.stack})}}finally{Mt.T=i,Gt.p=c}}if(l=ys,p=Ms,Ms=null,l!==null&&(ys=null,p===null&&(p=[]),t!==null))for(U=0;U<l.length;U++)i=(0,l[U])(p),i!==void 0&&t.finished.finally(i);(qi&3)!==0&&Ru(),ki(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===bu?Fo++:(Fo=0,bu=e):(Fo=0,bu=null),Ho(0)}}function wx(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,So(e)))}function Ru(){return Ss!==null&&(Ss.skipTransition(),Ss=null),dd(),hd(),pd(),md()}function md(){if(tn!==5)return!1;var t=Ai,e=ld;ld=0;var i=rt(qi),r=Mt.T,l=Gt.p;try{Gt.p=32>i?32:i,Mt.T=null,i=ud,ud=null;var c=Ai,p=qi;if(tn=0,Or=Ai=null,qi=0,(ze&6)!==0)throw Error(s(331));var b=ze;if(ze|=4,mx(c.current),dx(c,c.current,p,i),ze=b,Ho(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ce,c)}catch{}return!0}finally{Gt.p=l,Mt.T=r,wx(t,e)}}function Ux(t,e,i){e=hi(i,e),e=Nf(t.stateNode,e,2),t=Ba(t,e,2),t!==null&&(mr(t,2),ki(t))}function He(t,e,i){if(t.tag===3)Ux(t,t,i);else for(;e!==null;){if(e.tag===3){Ux(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){t=hi(i,t),i=Rm(2),r=Ba(e,i,2),r!==null&&(Cm(i,r,e,t),mr(r,2),ki(r));break}}e=e.return}}function xd(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new OS;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(sd=!0,l.add(i),t=VS.bind(null,t,e,i),e.then(t,t))}function VS(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ze===t&&(Ee&i)===i&&((nn===4||nn===3&&(Ee&62914560)===Ee&&300>I()-Su)&&(ze&2)===0?Es(t,0):vu|=i,vs===Ee&&(vs=0)),ki(t)}function Nx(t,e){e===0&&(e=vl()),t=_r(t,e),t!==null&&(mr(t,e),ki(t))}function XS(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Nx(t,i)}function qS(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),Nx(t,i)}function kS(t,e){return ee(t,e)}var As=null,Rs=null,gd=!1,Cu=!1,_d=!1,ja=0;function ki(t){t!==Rs&&t.next===null&&(Rs===null?As=Rs=t:Rs=Rs.next=t),Cu=!0,gd||(gd=!0,WS())}function Ho(t,e){if(!_d&&Cu){_d=!0;do for(var i=!1,r=As;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,b=r.pingedLanes;c=(1<<31-zn(42|t)+1)-1,c&=l&~(p&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,Px(r,c))}else c=Ee,c=pr(r,r===Ze?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Oi(r,c)||(i=!0,Px(r,c));r=r.next}while(i);_d=!1}}function YS(){Lx()}function Lx(){Cu=gd=!1;var t=0;ja!==0&&ay()&&(t=ja);for(var e=I(),i=null,r=As;r!==null;){var l=r.next,c=Ox(r,e);c===0?(r.next=null,i===null?As=l:i.next=l,l===null&&(Rs=i)):(i=r,(t!==0||(c&3)!==0)&&(Cu=!0)),r=l}tn!==0&&tn!==5||Ho(t),ja!==0&&(ja=0)}function Ox(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-zn(c),b=1<<p,U=l[p];U===-1?((b&i)===0||(b&r)!==0)&&(l[p]=_l(b,e)):U<=e&&(t.expiredLanes|=b),c&=~b}if(e=Ze,i=Ee,i=pr(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Oi(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&$t(r),rt(i)){case 2:case 8:i=Dt;break;case 32:i=bt;break;case 268435456:i=Xt;break;default:i=bt}return r=zx.bind(null,t),i=ee(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function zx(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Ru()&&t.callbackNode!==i)return null;var r=Ee;return r=pr(t,t===Ze?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Sx(t,r,e),Ox(t,I()),t.callbackNode!=null&&t.callbackNode===i?zx.bind(null,t):null)}function Px(t,e){if(Ru())return null;Sx(t,e,!0)}function WS(){sy(function(){(ze&6)!==0?ee(Ct,YS):Lx()})}function vd(){if(ja===0){var t=Er;t===0&&(t=Ra,Ra<<=1,(Ra&261888)===0&&(Ra=256)),ja=t}return ja}function Ix(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(t)}function jS(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=Ix((l[Lt]||null).action),p=r.submitter;p&&(e=(e=p[Lt]||null)?Ix(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var b=new Cl("action","action",null,r,l);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var U=new FormData(l,p);Rf(i,{pending:!0,data:U,method:l.method,action:c},null,U)}}else typeof c=="function"&&(b.preventDefault(),U=new FormData(l,p),Rf(i,{pending:!0,data:U,method:l.method,action:c},c,U))},currentTarget:l}]})}}for(var Sd=0;Sd<qc.length;Sd++){var yd=qc[Sd],ZS=yd.toLowerCase(),KS=yd[0].toUpperCase()+yd.slice(1);Mi(ZS,"on"+KS)}Mi(up,"onAnimationEnd"),Mi(cp,"onAnimationIteration"),Mi(fp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(rS,"onTransitionRun"),Mi(sS,"onTransitionStart"),Mi(oS,"onTransitionCancel"),Mi(dp,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Bx(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var p=r.length-1;0<=p;p--){var b=r[p],U=b.instance,k=b.currentTarget;if(b=b.listener,U!==c&&l.isPropagationStopped())break t;c=b,l.currentTarget=k;try{c(l)}catch(it){Ul(it)}l.currentTarget=null,c=U}else for(p=0;p<r.length;p++){if(b=r[p],U=b.instance,k=b.currentTarget,b=b.listener,U!==c&&l.isPropagationStopped())break t;c=b,l.currentTarget=k;try{c(l)}catch(it){Ul(it)}l.currentTarget=null,c=U}}}}function be(t,e){var i=e[ne];i===void 0&&(i=e[ne]=new Set);var r=t+"__bubble";i.has(r)||(Fx(e,t,2,!1),i.add(r))}function Md(t,e,i){var r=0;e&&(r|=4),Fx(i,t,r,e)}var Du="_reactListening"+Math.random().toString(36).slice(2);function bd(t){if(!t[Du]){t[Du]=!0,Un.forEach(function(i){i!=="selectionchange"&&(QS.has(i)||Md(i,!1,t),Md(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Du]||(e[Du]=!0,Md("selectionchange",!1,e))}}function Fx(t,e,i,r){switch(Cg(e)){case 2:var l=Xy;break;case 8:l=qy;break;default:l=Xd}i=l.bind(null,e,i,t),l=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Ed(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var b=r.stateNode.containerInfo;if(b===l)break;if(p===4)for(p=r.return;p!==null;){var U=p.tag;if((U===3||U===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;b!==null;){if(p=Ae(b),p===null)return;if(U=p.tag,U===5||U===6||U===26||U===27){r=c=p;continue t}b=b.parentNode}}r=r.return}F0(function(){var k=c,it=Cc(i),pt=[];t:{var X=hp.get(t);if(X!==void 0){var tt=Cl,wt=t;switch(t){case"keypress":if(Al(i)===0)break t;case"keydown":case"keyup":tt=zv;break;case"focusin":wt="focus",tt=Oc;break;case"focusout":wt="blur",tt=Oc;break;case"beforeblur":case"afterblur":tt=Oc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Hv;break;case up:case cp:case fp:tt=Av;break;case dp:tt=Vv;break;case"scroll":case"scrollend":tt=yv;break;case"wheel":tt=qv;break;case"copy":case"cut":case"paste":tt=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=q0;break;case"submit":tt=Bv;break;case"toggle":case"beforetoggle":tt=Yv}var qt=(e&4)!==0,he=!qt&&(t==="scroll"||t==="scrollend"),q=qt?X!==null?X+"Capture":null:X;qt=[];for(var G=k,$;G!==null;){var ht=G;if($=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||$===null||q===null||(ht=lo(G,q),ht!=null&&qt.push(Vo(G,ht,$))),he)break;G=G.return}0<qt.length&&(X=new tt(X,wt,null,i,it),pt.push({event:X,listeners:qt}))}}if((e&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&i!==Rc&&(wt=i.relatedTarget||i.fromElement)&&(Ae(wt)||wt[Pt]))break t;(X||tt)&&(wt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=i.relatedTarget||i.toElement,X=k,tt=tt?Ae(tt):null,tt!==null&&(he=f(tt),qt=tt.tag,tt!==he||qt!==5&&qt!==27&&qt!==6)&&(tt=null)):(X=null,tt=k),X!==tt&&(qt=V0,ht="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(qt=q0,ht="onPointerLeave",q="onPointerEnter",G="pointer"),he=X==null?wt:Be(X),$=tt==null?wt:Be(tt),wt=new qt(ht,G+"leave",X,i,it),wt.target=he,wt.relatedTarget=$,ht=null,Ae(it)===k&&(qt=new qt(q,G+"enter",tt,i,it),qt.target=$,qt.relatedTarget=he,ht=qt),he=ht,qt=X&&tt?L(X,tt,JS):null,X!==null&&Hx(pt,wt,X,qt,!1),tt!==null&&he!==null&&Hx(pt,he,tt,qt,!0)))}t:{if(X=k?Be(k):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ft=J0;else if(K0(X))if($0)Ft=nS;else{Ft=tS;var Te=$v}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?k&&Ac(k.elementType)&&(Ft=J0):Ft=eS;if(Ft&&(Ft=Ft(t,k))){Q0(pt,Ft,i,it);break t}Te&&Te(t,X,k)}switch(Te=k?Be(k):window,t){case"focusin":(K0(Te)||Te.contentEditable==="true")&&(es=Te,Gc=k,go=null);break;case"focusout":go=Gc=es=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,op(pt,i,it);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":op(pt,i,it)}var Zt;if(Pc)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else ts?j0(t,i)&&(ie="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(ie="onCompositionStart");ie&&(k0&&i.locale!=="ko"&&(ts||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ts&&(Zt=H0()):(Da=it,Uc="value"in Da?Da.value:Da.textContent,ts=!0)),Te=wu(k,ie),0<Te.length&&(ie=new X0(ie,t,null,i,it),pt.push({event:ie,listeners:Te}),Zt?ie.data=Zt:(Zt=Z0(i),Zt!==null&&(ie.data=Zt)))),(Zt=jv?Zv(t,i):Kv(t,i))&&(ie=wu(k,"onBeforeInput"),0<ie.length&&(Te=new X0("onBeforeInput","beforeinput",null,i,it),pt.push({event:Te,listeners:ie}),Te.data=Zt)),jS(pt,t,k,i,it)}Bx(pt,e)})}function Vo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function wu(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=lo(t,i),l!=null&&r.unshift(Vo(t,l,c)),l=lo(t,e),l!=null&&r.push(Vo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function JS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hx(t,e,i,r,l){for(var c=e._reactName,p=[];i!==null&&i!==r;){var b=i,U=b.alternate,k=b.stateNode;if(b=b.tag,U!==null&&U===r)break;b!==5&&b!==26&&b!==27||k===null||(U=k,l?(k=lo(i,c),k!=null&&p.unshift(Vo(i,k,U))):l||(k=lo(i,c),k!=null&&p.push(Vo(i,k,U)))),i=i.return}p.length!==0&&t.push({event:e,listeners:p})}var $S=/\r\n?/g,ty=/\u0000|\uFFFD/g;function Gx(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(ty,"")}function Vx(t,e){return e=Gx(e),Gx(t)===e}function Ge(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Qr(t,""+r);else return;break;case"className":bl(t,"class",r);break;case"tabIndex":bl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,i,r);break;case"style":I0(t,r,c);return;case"data":if(e!=="object"){bl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Ge(t,e,"name",l.name,l,null),Ge(t,e,"formEncType",l.formEncType,l,null),Ge(t,e,"formMethod",l.formMethod,l,null),Ge(t,e,"formTarget",l.formTarget,l,null)):(Ge(t,e,"encType",l.encType,l,null),Ge(t,e,"method",l.method,l,null),Ge(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=zi);return;case"onScroll":r!=null&&be("scroll",t);return;case"onScrollEnd":r!=null&&be("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=El(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":be("beforetoggle",t),be("toggle",t),Ml(t,"popover",r);break;case"xlinkActuate":Ji(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ji(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ji(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ji(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ji(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ji(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ji(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ml(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=vv.get(i)||i,Ml(t,i,r);else return}xe=!0}function Td(t,e,i,r,l,c){switch(i){case"style":I0(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));c?.__html!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")Qr(t,""+r);else return;break;case"onScroll":r!=null&&be("scroll",t);return;case"onScrollEnd":r!=null&&be("scrollend",t);return;case"onClick":r!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ca.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[Lt]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}xe=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Ml(t,i,r)}return}xe=!0}function Dn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var p=i[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ge(t,e,c,p,i,null)}}l&&Ge(t,e,"srcSet",i.srcSet,i,null),r&&Ge(t,e,"src",i.src,i,null);return;case"input":be("invalid",t);var b=c=p=l=null,U=null,k=null;for(r in i)if(i.hasOwnProperty(r)){var it=i[r];if(it!=null)switch(r){case"name":l=it;break;case"type":p=it;break;case"checked":U=it;break;case"defaultChecked":k=it;break;case"value":c=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,e));break;default:Ge(t,e,r,it,i,null)}}L0(t,c,b,U,k,p,l,!1);return;case"select":be("invalid",t),r=p=c=null;for(l in i)if(i.hasOwnProperty(l)&&(b=i[l],b!=null))switch(l){case"value":c=b;break;case"defaultValue":p=b;break;case"multiple":r=b;default:Ge(t,e,l,b,i,null)}e=c,i=p,t.multiple=!!r,e!=null?Kr(t,!!r,e,!1):i!=null&&Kr(t,!!r,i,!0);return;case"textarea":be("invalid",t),c=l=r=null;for(p in i)if(i.hasOwnProperty(p)&&(b=i[p],b!=null))switch(p){case"value":r=b;break;case"defaultValue":l=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ge(t,e,p,b,i,null)}z0(t,r,l,c);return;case"option":for(U in i)i.hasOwnProperty(U)&&(r=i[U],r!=null)&&(U==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ge(t,e,U,r,i,null));return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(r=0;r<Go.length;r++)be(Go[r],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in i)if(i.hasOwnProperty(k)&&(r=i[k],r!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Ge(t,e,k,r,i,null)}return;default:if(Ac(e)){for(it in i)i.hasOwnProperty(it)&&(r=i[it],r!==void 0&&Td(t,e,it,r,i,void 0));return}}for(b in i)i.hasOwnProperty(b)&&(r=i[b],r!=null&&Ge(t,e,b,r,i,null))}var ey={};function ny(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,b=null,U=null,k=null,it=null;for(tt in i){var pt=i[tt];if(i.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":U=pt;default:r.hasOwnProperty(tt)||Ge(t,e,tt,null,r,pt)}}for(var X in r){var tt=r[X];if(pt=i[X],r.hasOwnProperty(X)&&(tt!=null||pt!=null))switch(X){case"type":tt!==pt&&(xe=!0),c=tt;break;case"name":tt!==pt&&(xe=!0),l=tt;break;case"checked":tt!==pt&&(xe=!0),k=tt;break;case"defaultChecked":tt!==pt&&(xe=!0),it=tt;break;case"value":tt!==pt&&(xe=!0),p=tt;break;case"defaultValue":tt!==pt&&(xe=!0),b=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,e));break;default:tt!==pt&&Ge(t,e,X,tt,r,pt)}}Ec(t,p,b,U,k,it,c,l);return;case"select":tt=p=b=X=null;for(c in i)if(U=i[c],i.hasOwnProperty(c)&&U!=null)switch(c){case"value":break;case"multiple":tt=U;default:r.hasOwnProperty(c)||Ge(t,e,c,null,r,U)}for(l in r)if(c=r[l],U=i[l],r.hasOwnProperty(l)&&(c!=null||U!=null))switch(l){case"value":c!==U&&(xe=!0),X=c;break;case"defaultValue":c!==U&&(xe=!0),b=c;break;case"multiple":c!==U&&(xe=!0),p=c;default:c!==U&&Ge(t,e,l,c,r,U)}e=b,i=p,r=tt,X!=null?Kr(t,!!i,X,!1):!!r!=!!i&&(e!=null?Kr(t,!!i,e,!0):Kr(t,!!i,i?[]:"",!1));return;case"textarea":tt=X=null;for(b in i)if(l=i[b],i.hasOwnProperty(b)&&l!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,e,b,null,r,l)}for(p in r)if(l=r[p],c=i[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(xe=!0),X=l;break;case"defaultValue":l!==c&&(xe=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ge(t,e,p,l,r,c)}O0(t,X,tt);return;case"option":for(var wt in i)X=i[wt],i.hasOwnProperty(wt)&&X!=null&&!r.hasOwnProperty(wt)&&(wt==="selected"?t.selected=!1:Ge(t,e,wt,null,r,X));for(U in r)X=r[U],tt=i[U],r.hasOwnProperty(U)&&X!==tt&&(X!=null||tt!=null)&&(U==="selected"?(X!==tt&&(xe=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol"):Ge(t,e,U,X,r,tt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in i)X=i[qt],i.hasOwnProperty(qt)&&X!=null&&!r.hasOwnProperty(qt)&&Ge(t,e,qt,null,r,X);for(k in r)if(X=r[k],tt=i[k],r.hasOwnProperty(k)&&X!==tt&&(X!=null||tt!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,e));break;default:Ge(t,e,k,X,r,tt)}return;default:if(Ac(e)){for(var he in i)X=i[he],i.hasOwnProperty(he)&&X!==void 0&&!r.hasOwnProperty(he)&&Td(t,e,he,void 0,r,X);for(it in r)X=r[it],tt=i[it],!r.hasOwnProperty(it)||X===tt||X===void 0&&tt===void 0||Td(t,e,it,X,r,tt);return}}for(var q in i)X=i[q],i.hasOwnProperty(q)&&X!=null&&!r.hasOwnProperty(q)&&Ge(t,e,q,null,r,X);for(pt in r)X=r[pt],tt=i[pt],!r.hasOwnProperty(pt)||X===tt||X==null&&tt==null||Ge(t,e,pt,X,r,tt)}function Xx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,p=l.initiatorType,b=l.duration;if(c&&b&&Xx(p)){for(p=0,b=l.responseEnd,r+=1;r<i.length;r++){var U=i[r],k=U.startTime;if(k>b)break;var it=U.transferSize,pt=U.initiatorType;it&&Xx(pt)&&(U=U.responseEnd,p+=it*(U<b?1:(b-k)/(U-k)))}if(--r,e+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ad=null,Rd=null;function Xo(t){return t.nodeType===9?t:t.ownerDocument}function qx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kx(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Yx(t,e,i,r){return i=Xo(i).createElement(t),i[Tt]=r,i[Lt]=e,Dn(i,t,e),Ne(i),i}function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=null;function ay(){var t=window.event;return t&&t.type==="popstate"?t===Dd?!1:(Dd=t,!0):(Dd=null,!1)}var wd=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,Wx=typeof Promise=="function"?Promise:void 0,jx=typeof requestAnimationFrame=="function"?requestAnimationFrame:wd,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Wx<"u"?function(t){return Wx.resolve(null).then(t).catch(oy)}:wd;function oy(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Zx(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Os(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Bd(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Bd(i);for(var c=i.firstChild;c;){var p=c.nextSibling,b=c.nodeName;c[De]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=p}}else i==="body"&&Bd(t.ownerDocument.body);i=l}while(i);Os(e)}function Kx(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function Qx(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function Jx(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function ly(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ud(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return ly(e,i,t)}function uy(t){return t.documentElement.clientHeight}function cy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fy(t,e,i,r,l,c,p,b,U){var k=e.nodeType===9?e:e.ownerDocument;try{var it=k.startViewTransition({update:function(){var X=k.defaultView,tt=X.navigation&&X.navigation.transition,wt=k.fonts.status;r();var qt=[];if(wt==="loaded"&&(uy(k),k.fonts.status==="loading"&&qt.push(k.fonts.ready)),wt=qt.length,t!==null)for(var he=t.suspenseyImages,q=0,G=0;G<he.length;G++){var $=he[G];if(!$.complete){var ht=$.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<X.innerHeight&&ht.left<X.innerWidth){if(q+=vg($),q>Lu){qt.length=wt;break}$=new Promise(cy.bind($)),qt.push($)}}}if(0<qt.length)return X=Promise.race([Promise.all(qt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,X]):X).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:i});k.__reactViewTransition=it;var pt=[];return it.ready.then(function(){for(var X=k.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var wt=X[tt],qt=wt.effect,he=qt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){pt.push(wt),wt=qt.getKeyframes();for(var q=he=void 0,G=!0,$=0;$<wt.length;$++){var ht=wt[$],Ft=ht.width;if(he===void 0)he=Ft;else if(he!==Ft){G=!1;break}if(Ft=ht.height,q===void 0)q=Ft;else if(q!==Ft){G=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}G&&he!==void 0&&q!==void 0&&(qt.setKeyframes(wt),G=getComputedStyle(qt.target,qt.pseudoElement),G.width!==he||G.height!==q)&&(G=wt[0],G.width=he,G.height=q,G=wt[wt.length-1],G.width=he,G.height=q,qt.setKeyframes(wt))}}p()},function(X){k.__reactViewTransition===it&&(k.__reactViewTransition=null);try{typeof X=="object"&&X!==null&&X.name==="InvalidStateError"&&(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null),X!==null&&U(X)}finally{r(),l(),p()}}),it.finished.finally(function(){for(var X=0;X<pt.length;X++)pt[X].cancel();k.__reactViewTransition===it&&(k.__reactViewTransition=null),b()}),it}catch{return r(),l(),p(),null}}function zr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}zr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:N({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},zr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},zr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function $x(t){return{name:t,group:new zr("group",t),imagePair:new zr("image-pair",t),old:new zr("old",t),new:new zr("new",t)}}function ai(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ai.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(eg(c,t,e,i)===-1){var p=this,b=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(b=function(U){p.removeEventListener(t,e,i),typeof e=="function"?e.call(this,U):e.handleEvent(U)}),r!==null&&(l=p.removeEventListener.bind(p,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:b,cleanup:l}),m(this._fragmentFiber.child,!1,dy,t,b,r)}this._eventListeners=c}};function dy(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ai.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=eg(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=Cs(l.optionsOrUseCapture),m(this._fragmentFiber.child,!1,hy,t,i,l),r.splice(e,1),c!==null&&c()}};function hy(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function tg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function eg(t,e,i,r){if(t.length===0)return-1;r=tg(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&tg(c.optionsOrUseCapture)===r)return l}return-1}ai.prototype.dispatchEvent=function(t){var e=S(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ai.prototype.focus=function(t){m(this._fragmentFiber.child,!0,ng,t,void 0,void 0)};function ng(t,e){return t.tag===6?!1:(t=y(t),Ty(t,e))}ai.prototype.focusLast=function(t){var e=[];m(this._fragmentFiber.child,!0,Nd,e,void 0,void 0);for(var i=e.length-1;0<=i&&!ng(e[i],t);i--);};function Nd(t,e){return e.push(t),!1}ai.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=Xo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,py,t,void 0,void 0))};function py(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ai.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,my,t,void 0,void 0)};function my(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ai.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),m(this._fragmentFiber.child,!1,xy,t,void 0,void 0);for(var i=e=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ri[e++]=r}Ri.length=e}};function xy(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ri=[],Ld=!1;function gy(t,e,i){Ri.push({fragmentInstance:t,observer:e,instance:i}),Ld||(Ld=!0,Ay(function(){Ld=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ai.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,_y,t,void 0,void 0),t};function _y(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ai.prototype.getRootNode=function(t){var e=S(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ai.prototype.compareDocumentPosition=function(t){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];m(this._fragmentFiber.child,!1,Nd,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=A(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=e.compareDocumentPosition(t),b=l.compareDocumentPosition(t),U=p&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||U||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vy(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vy(t,e,i,r,l){var c=Ae(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=S(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=L(i,c,V),e===null?e=!1:(m(e,!0,O,c,i),c=v,v=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=L(r,c,V),e===null?e=!1:(m(e,!0,F,c,r),c=v,z=v=null,e=c!==null)),e):!1}function ig(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ai.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];m(this._fragmentFiber.child,!1,Nd,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=A(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),ig(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),ig(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Sy(t,e){return t=y(t),ag(t,e),!1}function ag(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function rg(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var p=0,b=0;b<Ri.length;b++){var U=Ri[b];(U.fragmentInstance!==e||U.observer!==c||U.instance!==t)&&(Ri[p++]=U)}Ri.length=p,c.observe(t)}),ag(t,e))}function yy(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?gy(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Od(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Od(i),je(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function My(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[De])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function by(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function sg(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=_i(t.nextSibling),t===null))return null;return t}function zd(t){return t.data==="$?"||t.data==="$~"}function Pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ey(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function _i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Id=null;function og(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return _i(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function Ty(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function Ay(t){jx(function(){jx(function(e){return t(e)})})}function ug(t,e,i){switch(e=Xo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function cg(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Ge(t,e,r,null,ey,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),je(t)}function Bd(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);je(t)}var vi=new Map,fg=new Set;function qo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var fa=Gt.d;Gt.d={f:Ry,r:Cy,D:Dy,C:wy,L:Uy,m:Ny,X:Oy,S:Ly,M:zy};function Ry(){var t=fa.f(),e=Eu();return t||e}function Cy(t){var e=Wt(t);e!==null&&e.tag===5&&e.type==="form"?hm(e):fa.r(t)}var Ds=typeof document>"u"?null:document;function dg(t,e,i){var r=Ds;if(r&&typeof e=="string"&&e){var l=fi(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),fg.has(l)||(fg.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Dn(e,"link",t),Ne(e),r.head.appendChild(e)))}}function Dy(t){fa.D(t),dg("dns-prefetch",t,null)}function wy(t,e){fa.C(t,e),dg("preconnect",t,e)}function Uy(t,e,i){fa.L(t,e,i);var r=Ds;if(r&&t&&e){var l='link[rel="preload"][as="'+fi(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+fi(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+fi(i.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(e){case"style":c=ws(t);break;case"script":c=Us(t)}if(!(vi.has(c)||(t=N({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),vi.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(ko(c))||e==="script"&&r.querySelector(Yo(c))))){var p=r.createElement("link");Dn(p,"link",t),e==="style"&&(p[We]=!0,p.onload=p.onerror=function(){Qi(p)}),Ne(p),r.head.appendChild(p)}}}function Ny(t,e){fa.m(t,e);var i=Ds;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Us(t)}if(!vi.has(c)&&(t=N({rel:"modulepreload",href:t},e),vi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Yo(c)))return}r=i.createElement("link"),Dn(r,"link",t),Ne(r),i.head.appendChild(r)}}}function Ly(t,e,i){fa.S(t,e,i);var r=Ds;if(r&&t){var l=ve(r).hoistableStyles,c=ws(t);e=e||"default";var p=l.get(c);if(!p){var b={loading:0,preload:null};if(p=r.querySelector(ko(c)))b.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":e},i),(i=vi.get(c))&&Fd(t,i);var U=p=r.createElement("link");Ne(U),Dn(U,"link",t),U._p=new Promise(function(k,it){U.onload=k,U.onerror=it}),U.addEventListener("load",function(){b.loading|=1}),U.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Uu(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:b},l.set(c,p)}}}function Oy(t,e){fa.X(t,e);var i=Ds;if(i&&t){var r=ve(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=N({src:t,async:!0},e),(e=vi.get(l))&&Hd(t,e),c=i.createElement("script"),Ne(c),Dn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function zy(t,e){fa.M(t,e);var i=Ds;if(i&&t){var r=ve(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Yo(l)),c||(t=N({src:t,async:!0,type:"module"},e),(e=vi.get(l))&&Hd(t,e),c=i.createElement("script"),Ne(c),Dn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function hg(t,e,i,r){var l=(l=kt.current)?qo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=ws(i.href),e=ve(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ws(i.href);var c=ve(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(ko(t)))?c._p||(p.instance=c,p.state.loading=5):(c=vi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vi.set(t,c)),Py(l,t,c,p.state))),e&&r===null)throw Error(s(528,""));return p}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Us(i),e=ve(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ws(t){return'href="'+fi(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function pg(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function Py(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[We]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[We]=!0,e.onload=e.onerror=Qi.bind(null,e),Dn(e,"link",i),Ne(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Us(t){return'[src="'+fi(t)+'"]'}function Yo(t){return"script[async]"+t}function mg(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+fi(i.href)+'"]');if(r)return e.instance=r,Ne(r),r;var l=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ne(r),Dn(r,"style",l),Uu(r,i.precedence,t),e.instance=r;case"stylesheet":l=ws(i.href);var c=t.querySelector(ko(l));if(c)return e.state.loading|=4,e.instance=c,Ne(c),c;r=pg(i),(l=vi.get(l))&&Fd(r,l),c=(t.ownerDocument||t).createElement("link"),Ne(c);var p=c;return p._p=new Promise(function(b,U){p.onload=b,p.onerror=U}),Dn(c,"link",r),e.state.loading|=4,Uu(c,i.precedence,t),e.instance=c;case"script":return c=Us(i.src),(l=t.querySelector(Yo(c)))?(e.instance=l,Ne(l),l):(r=i,(l=vi.get(c))&&(r=N({},i),Hd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ne(l),Dn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Uu(r,i.precedence,t));return e.instance}function Uu(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var b=r[p];if(b.dataset.precedence===e)c=b;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function Fd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Hd(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Nu=null;function xg(t,e,i){if(Nu===null){var r=new Map,l=Nu=new Map;l.set(i,r)}else l=Nu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[De]||c[Tt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=t+p;var b=r.get(p);b?b.push(c):r.set(p,[c])}}return r}function Gd(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function Iy(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function gg(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function _g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vg(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Sg(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=vg(e),t.suspenseyImages.push(e)),t=Hy.bind(t),e.decode().then(t,t))}function By(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ws(r.href),c=e.querySelector(ko(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Wo.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Ne(c);return}c=e.ownerDocument||e,r=pg(r),(l=vi.get(l))&&Fd(r,l),c=c.createElement("link"),Ne(c);var p=c;p._p=new Promise(function(b,U){p.onload=b,p.onerror=U}),Dn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Wo.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Lu=0;function Fy(t,e){return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Lu===0&&(Lu=62500*iy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Lu?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function yg(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Wo(){this.count--,yg(this)}function Hy(){this.imgCount--,yg(this)}var Ou=null;function zu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ou=new Map,e.forEach(Gy,t),Ou=null,Wo.call(t))}function Gy(t,e){if(!(e.state.loading&4)){var i=Ou.get(t);if(i)var r=i.get(null);else{i=new Map,Ou.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),r=p)}r&&i.set(null,r)}l=e.instance,p=l.getAttribute("data-precedence"),c=i.get(p)||r,c===r&&i.set(null,l),i.set(p,l),this.count++,r=Wo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Ns={$$typeof:lt,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Vy(t,e,i,r,l,c,p,b,U){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.transitionTypes=null,this.incompleteTransitions=new Map}function Mg(t,e,i,r,l,c,p,b,U,k,it,pt){return t=new Vy(t,e,i,p,U,k,it,pt,b),e=1,c===!0&&(e|=24),c=Xn(3,null,null,e),t.current=c,c.stateNode=t,e=ef(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},sf(c),t}function bg(t){return t?(t=as,t):as}function Eg(t,e,i,r,l,c){l=bg(l),r.context===null?r.context=l:r.pendingContext=l,r=Ia(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Ba(t,r,e),i!==null&&(Wn(i,t,e),Eo(i,t,e))}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Vd(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function Ag(t){if(t.tag===13||t.tag===31){var e=_r(t,67108864);e!==null&&Wn(e,t,67108864),Vd(t,67108864)}}function Rg(t){if(t.tag===13||t.tag===31){var e=ii();e=W(e);var i=_r(t,e);i!==null&&Wn(i,t,e),Vd(t,e)}}var Ls=!0;function Xy(t,e,i,r){var l=Mt.T;Mt.T=null;var c=Gt.p;try{Gt.p=2,Xd(t,e,i,r)}finally{Gt.p=c,Mt.T=l}}function qy(t,e,i,r){var l=Mt.T;Mt.T=null;var c=Gt.p;try{Gt.p=8,Xd(t,e,i,r)}finally{Gt.p=c,Mt.T=l}}function Xd(t,e,i,r){if(Ls){var l=qd(r);if(l===null)Ed(t,e,r,Pu,i),Dg(t,r);else if(Yy(l,t,e,i,r))r.stopPropagation();else if(Dg(t,r),e&4&&-1<ky.indexOf(t)){for(;l!==null;){var c=Wt(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ci(c.pendingLanes);if(p!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var U=1<<31-zn(p);b.entanglements[1]|=U,p&=~U}ki(c),(ze&6)===0&&(yu=I()+500,Ho(0))}}break;case 31:case 13:b=_r(c,2),b!==null&&Wn(b,c,2),Eu(),Vd(c,2)}if(c=qd(r),c===null&&Ed(t,e,r,Pu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Ed(t,e,r,null,i)}}function qd(t){return t=Cc(t),kd(t)}var Pu=null;function kd(t){if(Pu=null,t=Ae(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=d(e),t!==null)return t;t=null}else if(i===31){if(t=h(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pu=t,null}function Cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case Ct:return 2;case Dt:return 8;case bt:case gt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var Yd=!1,Ka=null,Qa=null,Ja=null,jo=new Map,Zo=new Map,$a=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(t,e){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function Ko(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=Wt(e),e!==null&&Ag(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Yy(t,e,i,r,l){switch(e){case"focusin":return Ka=Ko(Ka,t,e,i,r,l),!0;case"dragenter":return Qa=Ko(Qa,t,e,i,r,l),!0;case"mouseover":return Ja=Ko(Ja,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return jo.set(c,Ko(jo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Zo.set(c,Ko(Zo.get(c)||null,t,e,i,r,l)),!0}return!1}function wg(t){var e=Ae(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=d(i),e!==null){t.blockedOn=e,Q(t.priority,function(){Rg(i)});return}}else if(e===31){if(e=h(i),e!==null){t.blockedOn=e,Q(t.priority,function(){Rg(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=qd(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Rc=r,i.target.dispatchEvent(r),Rc=null}else return e=Wt(i),e!==null&&Ag(e),t.blockedOn=i,!1;e.shift()}return!0}function Ug(t,e,i){Iu(t)&&i.delete(e)}function Wy(){Yd=!1,Ka!==null&&Iu(Ka)&&(Ka=null),Qa!==null&&Iu(Qa)&&(Qa=null),Ja!==null&&Iu(Ja)&&(Ja=null),jo.forEach(Ug),Zo.forEach(Ug)}function Bu(t,e){t.blockedOn===e&&(t.blockedOn=null,Yd||(Yd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Wy)))}var Fu=null;function Ng(t){Fu!==t&&(Fu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Fu===t&&(Fu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(kd(r||i)===null)continue;break}var c=Wt(i);c!==null&&(t.splice(e,3),e-=3,Rf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Os(t){function e(U){return Bu(U,t)}Ka!==null&&Bu(Ka,t),Qa!==null&&Bu(Qa,t),Ja!==null&&Bu(Ja,t),jo.forEach(e),Zo.forEach(e);for(var i=0;i<$a.length;i++){var r=$a[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<$a.length&&(i=$a[0],i.blockedOn===null);)wg(i),i.blockedOn===null&&$a.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],p=l[Lt]||null;if(typeof c=="function")p||Ng(i);else if(p){var b=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[Lt]||null)b=p.formAction;else if(kd(l)!==null)continue}else b=p.action;typeof b=="function"?i[r+1]=b:(i.splice(r,3),r-=3),Ng(i)}}}function Lg(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function Wd(t){this._internalRoot=t}Hu.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ii();Eg(i,r,t,e,null,null)},Hu.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Eg(t.current,2,null,t,null,null),Eu(),e[Pt]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=st();t={blockedOn:null,target:t,priority:e};for(var i=0;i<$a.length&&e!==0&&e<$a[i].priority;i++);$a.splice(i,0,t),i===0&&wg(t)}};var Og=n.version;if(Og!=="19.3.0")throw Error(s(527,Og,"19.3.0"));Gt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=x(e),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var jy={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Ce=Gu.inject(jy),Je=Gu}catch{}}return Jo.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=bm,c=Em,p=Tm;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=Mg(t,1,!1,null,null,i,r,null,l,c,p,Lg),t[Pt]=e.current,bd(t),new Wd(e)},Jo.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=bm,p=Em,b=Tm,U=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError),i.formState!==void 0&&(U=i.formState)),e=Mg(t,1,!0,e,i??null,r,l,U,c,p,b,Lg),e.context=bg(null),i=e.current,r=ii(),r=W(r),l=Ia(r),l.callback=null,Ba(i,l,r),i=r,e.current.lanes=i,mr(e,i),ki(e),t[Pt]=e.current,bd(t),new Hu(e)},Jo.version="19.3.0",Jo}var qg;function aM(){if(qg)return Kd.exports;qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Kd.exports=iM(),Kd.exports}var rM=aM();const S0="181",sM=0,kg=1,oM=2,H_=1,lM=2,_a=3,cr=0,Kn=1,va=2,Ma=0,Zs=1,Yg=2,Wg=3,jg=4,uM=5,qr=100,cM=101,fM=102,dM=103,hM=104,pM=200,mM=201,xM=202,gM=203,wh=204,Uh=205,_M=206,vM=207,SM=208,yM=209,MM=210,bM=211,EM=212,TM=213,AM=214,Nh=0,Lh=1,Oh=2,Qs=3,zh=4,Ph=5,Ih=6,Bh=7,G_=0,RM=1,CM=2,ur=0,DM=1,wM=2,UM=3,NM=4,LM=5,OM=6,zM=7,V_=300,Js=301,$s=302,Fh=303,Hh=304,_c=306,Gh=1e3,Sa=1001,Vh=1002,li=1003,PM=1004,Vu=1005,yi=1006,th=1007,Yr=1008,Ea=1009,X_=1010,q_=1011,sl=1012,y0=1013,jr=1014,ya=1015,no=1016,M0=1017,b0=1018,ol=1020,k_=35902,Y_=35899,W_=1021,j_=1022,Li=1023,ll=1026,ul=1027,Z_=1028,E0=1029,T0=1030,A0=1031,R0=1033,uc=33776,cc=33777,fc=33778,dc=33779,Xh=35840,qh=35841,kh=35842,Yh=35843,Wh=36196,jh=37492,Zh=37496,Kh=37808,Qh=37809,Jh=37810,$h=37811,t0=37812,e0=37813,n0=37814,i0=37815,a0=37816,r0=37817,s0=37818,o0=37819,l0=37820,u0=37821,c0=36492,f0=36494,d0=36495,h0=36283,p0=36284,m0=36285,x0=36286,IM=3200,BM=3201,FM=0,HM=1,or="",oi="srgb",to="srgb-linear",mc="linear",qe="srgb",zs=7680,Zg=519,GM=512,VM=513,XM=514,K_=515,qM=516,kM=517,YM=518,WM=519,Kg=35044,Qg="300 es",Wi=2e3,xc=2001;function Q_(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jM(){const o=gc("canvas");return o.style.display="block",o}const Jg={};function $g(...o){const n="THREE."+o.shift();console.log(n,...o)}function pe(...o){const n="THREE."+o.shift();console.warn(n,...o)}function sn(...o){const n="THREE."+o.shift();console.error(n,...o)}function cl(...o){const n=o.join(" ");n in Jg||(Jg[n]=!0,pe(...o))}function ZM(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}class io{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){const s=this._listeners;return s===void 0?!1:s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){const s=this._listeners;if(s===void 0)return;const u=s[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const s=a[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,n);n.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=Math.PI/180,g0=180/Math.PI;function fl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[n&255]+Ln[n>>8&255]+"-"+Ln[n>>16&15|64]+Ln[n>>24&255]+"-"+Ln[a&63|128]+Ln[a>>8&255]+"-"+Ln[a>>16&255]+Ln[a>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Re(o,n,a){return Math.max(n,Math.min(a,o))}function KM(o,n){return(o%n+n)%n}function nh(o,n,a){return(1-a)*o+a*n}function $o(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(n=0,a=0){Ue.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Re(this.x,n.x,a.x),this.y=Re(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Re(this.x,n,a),this.y=Re(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Re(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*s-d*u+n.x,this.y=f*u+d*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dl{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,d,h){let g=s[u+0],x=s[u+1],_=s[u+2],m=s[u+3],S=f[d+0],M=f[d+1],A=f[d+2],C=f[d+3];if(h<=0){n[a+0]=g,n[a+1]=x,n[a+2]=_,n[a+3]=m;return}if(h>=1){n[a+0]=S,n[a+1]=M,n[a+2]=A,n[a+3]=C;return}if(m!==C||g!==S||x!==M||_!==A){let y=g*S+x*M+_*A+m*C;y<0&&(S=-S,M=-M,A=-A,C=-C,y=-y);let v=1-h;if(y<.9995){const z=Math.acos(y),O=Math.sin(z);v=Math.sin(v*z)/O,h=Math.sin(h*z)/O,g=g*v+S*h,x=x*v+M*h,_=_*v+A*h,m=m*v+C*h}else{g=g*v+S*h,x=x*v+M*h,_=_*v+A*h,m=m*v+C*h;const z=1/Math.sqrt(g*g+x*x+_*_+m*m);g*=z,x*=z,_*=z,m*=z}}n[a]=g,n[a+1]=x,n[a+2]=_,n[a+3]=m}static multiplyQuaternionsFlat(n,a,s,u,f,d){const h=s[u],g=s[u+1],x=s[u+2],_=s[u+3],m=f[d],S=f[d+1],M=f[d+2],A=f[d+3];return n[a]=h*A+_*m+g*M-x*S,n[a+1]=g*A+_*S+x*m-h*M,n[a+2]=x*A+_*M+h*S-g*m,n[a+3]=_*A-h*m-g*S-x*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,d=n._order,h=Math.cos,g=Math.sin,x=h(s/2),_=h(u/2),m=h(f/2),S=g(s/2),M=g(u/2),A=g(f/2);switch(d){case"XYZ":this._x=S*_*m+x*M*A,this._y=x*M*m-S*_*A,this._z=x*_*A+S*M*m,this._w=x*_*m-S*M*A;break;case"YXZ":this._x=S*_*m+x*M*A,this._y=x*M*m-S*_*A,this._z=x*_*A-S*M*m,this._w=x*_*m+S*M*A;break;case"ZXY":this._x=S*_*m-x*M*A,this._y=x*M*m+S*_*A,this._z=x*_*A+S*M*m,this._w=x*_*m-S*M*A;break;case"ZYX":this._x=S*_*m-x*M*A,this._y=x*M*m+S*_*A,this._z=x*_*A-S*M*m,this._w=x*_*m+S*M*A;break;case"YZX":this._x=S*_*m+x*M*A,this._y=x*M*m+S*_*A,this._z=x*_*A-S*M*m,this._w=x*_*m-S*M*A;break;case"XZY":this._x=S*_*m-x*M*A,this._y=x*M*m-S*_*A,this._z=x*_*A+S*M*m,this._w=x*_*m+S*M*A;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],d=a[1],h=a[5],g=a[9],x=a[2],_=a[6],m=a[10],S=s+h+m;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-g)*M,this._y=(f-x)*M,this._z=(d-u)*M}else if(s>h&&s>m){const M=2*Math.sqrt(1+s-h-m);this._w=(_-g)/M,this._x=.25*M,this._y=(u+d)/M,this._z=(f+x)/M}else if(h>m){const M=2*Math.sqrt(1+h-s-m);this._w=(f-x)/M,this._x=(u+d)/M,this._y=.25*M,this._z=(g+_)/M}else{const M=2*Math.sqrt(1+m-s-h);this._w=(d-u)/M,this._x=(f+x)/M,this._y=(g+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<1e-8?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Re(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,d=n._w,h=a._x,g=a._y,x=a._z,_=a._w;return this._x=s*_+d*h+u*x-f*g,this._y=u*_+d*g+f*h-s*x,this._z=f*_+d*x+s*g-u*h,this._w=d*_-s*h-u*g-f*x,this._onChangeCallback(),this}slerp(n,a){if(a<=0)return this;if(a>=1)return this.copy(n);let s=n._x,u=n._y,f=n._z,d=n._w,h=this.dot(n);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let g=1-a;if(h<.9995){const x=Math.acos(h),_=Math.sin(x);g=Math.sin(g*x)/_,a=Math.sin(a*x)/_,this._x=this._x*g+s*a,this._y=this._y*g+u*a,this._z=this._z*g+f*a,this._w=this._w*g+d*a,this._onChangeCallback()}else this._x=this._x*g+s*a,this._y=this._y*g+u*a,this._z=this._z*g+f*a,this._w=this._w*g+d*a,this.normalize();return this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(n=0,a=0,s=0){ct.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(t_.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(t_.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,d=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,d=n.y,h=n.z,g=n.w,x=2*(d*u-h*s),_=2*(h*a-f*u),m=2*(f*s-d*a);return this.x=a+g*x+d*m-h*_,this.y=s+g*_+h*x-f*m,this.z=u+g*m+f*_-d*x,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Re(this.x,n.x,a.x),this.y=Re(this.y,n.y,a.y),this.z=Re(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Re(this.x,n,a),this.y=Re(this.y,n,a),this.z=Re(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,d=a.x,h=a.y,g=a.z;return this.x=u*g-f*h,this.y=f*d-s*g,this.z=s*h-u*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return ih.copy(this).projectOnVector(n),this.sub(ih)}reflect(n){return this.sub(ih.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(Re(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new ct,t_=new dl;class me{constructor(n,a,s,u,f,d,h,g,x){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,d,h,g,x)}set(n,a,s,u,f,d,h,g,x){const _=this.elements;return _[0]=n,_[1]=u,_[2]=h,_[3]=a,_[4]=f,_[5]=g,_[6]=s,_[7]=d,_[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,d=s[0],h=s[3],g=s[6],x=s[1],_=s[4],m=s[7],S=s[2],M=s[5],A=s[8],C=u[0],y=u[3],v=u[6],z=u[1],O=u[4],F=u[7],V=u[2],L=u[5],N=u[8];return f[0]=d*C+h*z+g*V,f[3]=d*y+h*O+g*L,f[6]=d*v+h*F+g*N,f[1]=x*C+_*z+m*V,f[4]=x*y+_*O+m*L,f[7]=x*v+_*F+m*N,f[2]=S*C+M*z+A*V,f[5]=S*y+M*O+A*L,f[8]=S*v+M*F+A*N,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],d=n[4],h=n[5],g=n[6],x=n[7],_=n[8];return a*d*_-a*h*x-s*f*_+s*h*g+u*f*x-u*d*g}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],d=n[4],h=n[5],g=n[6],x=n[7],_=n[8],m=_*d-h*x,S=h*g-_*f,M=x*f-d*g,A=a*m+s*S+u*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return n[0]=m*C,n[1]=(u*x-_*s)*C,n[2]=(h*s-u*d)*C,n[3]=S*C,n[4]=(_*a-u*g)*C,n[5]=(u*f-h*a)*C,n[6]=M*C,n[7]=(s*g-x*a)*C,n[8]=(d*a-s*f)*C,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,d,h){const g=Math.cos(f),x=Math.sin(f);return this.set(s*g,s*x,-s*(g*d+x*h)+d+n,-u*x,u*g,-u*(-x*d+g*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(ah.makeScale(n,a)),this}rotate(n){return this.premultiply(ah.makeRotation(-n)),this}translate(n,a){return this.premultiply(ah.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new me,e_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QM(){const o={enabled:!0,workingColorSpace:to,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=ba(u.r),u.g=ba(u.g),u.b=ba(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=Ks(u.r),u.g=Ks(u.g),u.b=Ks(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===or?mc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[to]:{primaries:n,whitePoint:s,transfer:mc,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:n,whitePoint:s,transfer:qe,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Le=QM();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ks(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ps;class JM{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let s;if(n instanceof HTMLCanvasElement)s=n;else{Ps===void 0&&(Ps=gc("canvas")),Ps.width=n.width,Ps.height=n.height;const u=Ps.getContext("2d");n instanceof ImageData?u.putImageData(n,0,0):u.drawImage(n,0,0,n.width,n.height),s=Ps}return s.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=gc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=ba(f[d]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(ba(a[s]/255)*255):a[s]=ba(a[s]);return{data:a,width:n.width,height:n.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let $M=0;class C0{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=fl(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?n.set(a.displayHeight,a.displayWidth,0):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(rh(u[d].image)):f.push(rh(u[d]))}else f=rh(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function rh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let t3=0;const sh=new ct;class Gn extends io{constructor(n=Gn.DEFAULT_IMAGE,a=Gn.DEFAULT_MAPPING,s=Sa,u=Sa,f=yi,d=Yr,h=Li,g=Ea,x=Gn.DEFAULT_ANISOTROPY,_=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=fl(),this.name="",this.source=new C0(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=x,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const s=n[a];if(s===void 0){pe(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){pe(`Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==V_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Gh:n.x=n.x-Math.floor(n.x);break;case Sa:n.x=n.x<0?0:1;break;case Vh:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Gh:n.y=n.y-Math.floor(n.y);break;case Sa:n.y=n.y<0?0:1;break;case Vh:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=V_;Gn.DEFAULT_ANISOTROPY=1;class on{constructor(n=0,a=0,s=0,u=1){on.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*a+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*a+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*a+d[7]*s+d[11]*u+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const g=n.elements,x=g[0],_=g[4],m=g[8],S=g[1],M=g[5],A=g[9],C=g[2],y=g[6],v=g[10];if(Math.abs(_-S)<.01&&Math.abs(m-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(m+C)<.1&&Math.abs(A+y)<.1&&Math.abs(x+M+v-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(x+1)/2,F=(M+1)/2,V=(v+1)/2,L=(_+S)/4,N=(m+C)/4,j=(A+y)/4;return O>F&&O>V?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=L/s,f=N/s):F>V?F<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(F),s=L/u,f=j/u):V<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(V),s=N/f,u=j/f),this.set(s,u,f,a),this}let z=Math.sqrt((y-A)*(y-A)+(m-C)*(m-C)+(S-_)*(S-_));return Math.abs(z)<.001&&(z=1),this.x=(y-A)/z,this.y=(m-C)/z,this.z=(S-_)/z,this.w=Math.acos((x+M+v-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Re(this.x,n.x,a.x),this.y=Re(this.y,n.y,a.y),this.z=Re(this.z,n.z,a.z),this.w=Re(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Re(this.x,n,a),this.y=Re(this.y,n,a),this.z=Re(this.z,n,a),this.w=Re(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e3 extends io{constructor(n=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=s.depth,this.scissor=new on(0,0,n,a),this.scissorTest=!1,this.viewport=new on(0,0,n,a);const u={width:n,height:a,depth:s.depth},f=new Gn(u);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(n={}){const a={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,s=n.textures.length;a<s;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},n.textures[a].image);this.textures[a].source=new C0(u)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends e3{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class J_ extends Gn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=li,this.minFilter=li,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class n3 extends Gn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=li,this.minFilter=li,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(n=new ct(1/0,1/0,1/0),a=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,Ci):Ci.fromBufferAttribute(f,d),Ci.applyMatrix4(n.matrixWorld),this.expandByPoint(Ci);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Xu.copy(s.boundingBox)),Xu.applyMatrix4(n.matrixWorld),this.union(Xu)}const u=n.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Ci),Ci.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(tl),qu.subVectors(this.max,tl),Is.subVectors(n.a,tl),Bs.subVectors(n.b,tl),Fs.subVectors(n.c,tl),er.subVectors(Bs,Is),nr.subVectors(Fs,Bs),Pr.subVectors(Is,Fs);let a=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Pr.z,Pr.y,er.z,0,-er.x,nr.z,0,-nr.x,Pr.z,0,-Pr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Pr.y,Pr.x,0];return!oh(a,Is,Bs,Fs,qu)||(a=[1,0,0,0,1,0,0,0,1],!oh(a,Is,Bs,Fs,qu))?!1:(ku.crossVectors(er,nr),a=[ku.x,ku.y,ku.z],oh(a,Is,Bs,Fs,qu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Ci).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Ci).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(da),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const da=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],Ci=new ct,Xu=new hl,Is=new ct,Bs=new ct,Fs=new ct,er=new ct,nr=new ct,Pr=new ct,tl=new ct,qu=new ct,ku=new ct,Ir=new ct;function oh(o,n,a,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Ir.fromArray(o,f);const h=u.x*Math.abs(Ir.x)+u.y*Math.abs(Ir.y)+u.z*Math.abs(Ir.z),g=n.dot(Ir),x=a.dot(Ir),_=s.dot(Ir);if(Math.max(-Math.max(g,x,_),Math.min(g,x,_))>h)return!1}return!0}const i3=new hl,el=new ct,lh=new ct;class D0{constructor(n=new ct,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):i3.setFromPoints(n).getCenter(s);let u=0;for(let f=0,d=n.length;f<d;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;el.subVectors(n,this.center);const a=el.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(el,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(lh.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(el.copy(n.center).add(lh)),this.expandByPoint(el.copy(n.center).sub(lh))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const ha=new ct,uh=new ct,Yu=new ct,ir=new ct,ch=new ct,Wu=new ct,fh=new ct;class a3{constructor(n=new ct,a=new ct(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ha)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ha.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ha.copy(this.origin).addScaledVector(this.direction,a),ha.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){uh.copy(n).add(a).multiplyScalar(.5),Yu.copy(a).sub(n).normalize(),ir.copy(this.origin).sub(uh);const f=n.distanceTo(a)*.5,d=-this.direction.dot(Yu),h=ir.dot(this.direction),g=-ir.dot(Yu),x=ir.lengthSq(),_=Math.abs(1-d*d);let m,S,M,A;if(_>0)if(m=d*g-h,S=d*h-g,A=f*_,m>=0)if(S>=-A)if(S<=A){const C=1/_;m*=C,S*=C,M=m*(m+d*S+2*h)+S*(d*m+S+2*g)+x}else S=f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*g)+x;else S=-f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*g)+x;else S<=-A?(m=Math.max(0,-(-d*f+h)),S=m>0?-f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+x):S<=A?(m=0,S=Math.min(Math.max(-f,-g),f),M=S*(S+2*g)+x):(m=Math.max(0,-(d*f+h)),S=m>0?f:Math.min(Math.max(-f,-g),f),M=-m*m+S*(S+2*g)+x);else S=d>0?-f:f,m=Math.max(0,-(d*S+h)),M=-m*m+S*(S+2*g)+x;return s&&s.copy(this.origin).addScaledVector(this.direction,m),u&&u.copy(uh).addScaledVector(Yu,S),M}intersectSphere(n,a){ha.subVectors(n.center,this.origin);const s=ha.dot(this.direction),u=ha.dot(ha)-s*s,f=n.radius*n.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,a):this.at(h,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,d,h,g;const x=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,S=this.origin;return x>=0?(s=(n.min.x-S.x)*x,u=(n.max.x-S.x)*x):(s=(n.max.x-S.x)*x,u=(n.min.x-S.x)*x),_>=0?(f=(n.min.y-S.y)*_,d=(n.max.y-S.y)*_):(f=(n.max.y-S.y)*_,d=(n.min.y-S.y)*_),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),m>=0?(h=(n.min.z-S.z)*m,g=(n.max.z-S.z)*m):(h=(n.max.z-S.z)*m,g=(n.min.z-S.z)*m),s>g||h>u)||((h>s||s!==s)&&(s=h),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,ha)!==null}intersectTriangle(n,a,s,u,f){ch.subVectors(a,n),Wu.subVectors(s,n),fh.crossVectors(ch,Wu);let d=this.direction.dot(fh),h;if(d>0){if(u)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ir.subVectors(this.origin,n);const g=h*this.direction.dot(Wu.crossVectors(ir,Wu));if(g<0)return null;const x=h*this.direction.dot(ch.cross(ir));if(x<0||g+x>d)return null;const _=-h*ir.dot(fh);return _<0?null:this.at(_/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(n,a,s,u,f,d,h,g,x,_,m,S,M,A,C,y){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,d,h,g,x,_,m,S,M,A,C,y)}set(n,a,s,u,f,d,h,g,x,_,m,S,M,A,C,y){const v=this.elements;return v[0]=n,v[4]=a,v[8]=s,v[12]=u,v[1]=f,v[5]=d,v[9]=h,v[13]=g,v[2]=x,v[6]=_,v[10]=m,v[14]=S,v[3]=M,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Hs.setFromMatrixColumn(n,0).length(),f=1/Hs.setFromMatrixColumn(n,1).length(),d=1/Hs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*d,a[9]=s[9]*d,a[10]=s[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(u),x=Math.sin(u),_=Math.cos(f),m=Math.sin(f);if(n.order==="XYZ"){const S=d*_,M=d*m,A=h*_,C=h*m;a[0]=g*_,a[4]=-g*m,a[8]=x,a[1]=M+A*x,a[5]=S-C*x,a[9]=-h*g,a[2]=C-S*x,a[6]=A+M*x,a[10]=d*g}else if(n.order==="YXZ"){const S=g*_,M=g*m,A=x*_,C=x*m;a[0]=S+C*h,a[4]=A*h-M,a[8]=d*x,a[1]=d*m,a[5]=d*_,a[9]=-h,a[2]=M*h-A,a[6]=C+S*h,a[10]=d*g}else if(n.order==="ZXY"){const S=g*_,M=g*m,A=x*_,C=x*m;a[0]=S-C*h,a[4]=-d*m,a[8]=A+M*h,a[1]=M+A*h,a[5]=d*_,a[9]=C-S*h,a[2]=-d*x,a[6]=h,a[10]=d*g}else if(n.order==="ZYX"){const S=d*_,M=d*m,A=h*_,C=h*m;a[0]=g*_,a[4]=A*x-M,a[8]=S*x+C,a[1]=g*m,a[5]=C*x+S,a[9]=M*x-A,a[2]=-x,a[6]=h*g,a[10]=d*g}else if(n.order==="YZX"){const S=d*g,M=d*x,A=h*g,C=h*x;a[0]=g*_,a[4]=C-S*m,a[8]=A*m+M,a[1]=m,a[5]=d*_,a[9]=-h*_,a[2]=-x*_,a[6]=M*m+A,a[10]=S-C*m}else if(n.order==="XZY"){const S=d*g,M=d*x,A=h*g,C=h*x;a[0]=g*_,a[4]=-m,a[8]=x*_,a[1]=S*m+C,a[5]=d*_,a[9]=M*m-A,a[2]=A*m-M,a[6]=h*_,a[10]=C*m+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(r3,n,s3)}lookAt(n,a,s){const u=this.elements;return ri.subVectors(n,a),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ar.crossVectors(s,ri),ar.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ar.crossVectors(s,ri)),ar.normalize(),ju.crossVectors(ri,ar),u[0]=ar.x,u[4]=ju.x,u[8]=ri.x,u[1]=ar.y,u[5]=ju.y,u[9]=ri.y,u[2]=ar.z,u[6]=ju.z,u[10]=ri.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,d=s[0],h=s[4],g=s[8],x=s[12],_=s[1],m=s[5],S=s[9],M=s[13],A=s[2],C=s[6],y=s[10],v=s[14],z=s[3],O=s[7],F=s[11],V=s[15],L=u[0],N=u[4],j=u[8],D=u[12],R=u[1],H=u[5],K=u[9],ot=u[13],ft=u[2],lt=u[6],Y=u[10],at=u[14],Z=u[3],xt=u[7],_t=u[11],Ht=u[15];return f[0]=d*L+h*R+g*ft+x*Z,f[4]=d*N+h*H+g*lt+x*xt,f[8]=d*j+h*K+g*Y+x*_t,f[12]=d*D+h*ot+g*at+x*Ht,f[1]=_*L+m*R+S*ft+M*Z,f[5]=_*N+m*H+S*lt+M*xt,f[9]=_*j+m*K+S*Y+M*_t,f[13]=_*D+m*ot+S*at+M*Ht,f[2]=A*L+C*R+y*ft+v*Z,f[6]=A*N+C*H+y*lt+v*xt,f[10]=A*j+C*K+y*Y+v*_t,f[14]=A*D+C*ot+y*at+v*Ht,f[3]=z*L+O*R+F*ft+V*Z,f[7]=z*N+O*H+F*lt+V*xt,f[11]=z*j+O*K+F*Y+V*_t,f[15]=z*D+O*ot+F*at+V*Ht,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],d=n[1],h=n[5],g=n[9],x=n[13],_=n[2],m=n[6],S=n[10],M=n[14],A=n[3],C=n[7],y=n[11],v=n[15];return A*(+f*g*m-u*x*m-f*h*S+s*x*S+u*h*M-s*g*M)+C*(+a*g*M-a*x*S+f*d*S-u*d*M+u*x*_-f*g*_)+y*(+a*x*m-a*h*M-f*d*m+s*d*M+f*h*_-s*x*_)+v*(-u*h*_-a*g*m+a*h*S+u*d*m-s*d*S+s*g*_)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],d=n[4],h=n[5],g=n[6],x=n[7],_=n[8],m=n[9],S=n[10],M=n[11],A=n[12],C=n[13],y=n[14],v=n[15],z=m*y*x-C*S*x+C*g*M-h*y*M-m*g*v+h*S*v,O=A*S*x-_*y*x-A*g*M+d*y*M+_*g*v-d*S*v,F=_*C*x-A*m*x+A*h*M-d*C*M-_*h*v+d*m*v,V=A*m*g-_*C*g-A*h*S+d*C*S+_*h*y-d*m*y,L=a*z+s*O+u*F+f*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return n[0]=z*N,n[1]=(C*S*f-m*y*f-C*u*M+s*y*M+m*u*v-s*S*v)*N,n[2]=(h*y*f-C*g*f+C*u*x-s*y*x-h*u*v+s*g*v)*N,n[3]=(m*g*f-h*S*f-m*u*x+s*S*x+h*u*M-s*g*M)*N,n[4]=O*N,n[5]=(_*y*f-A*S*f+A*u*M-a*y*M-_*u*v+a*S*v)*N,n[6]=(A*g*f-d*y*f-A*u*x+a*y*x+d*u*v-a*g*v)*N,n[7]=(d*S*f-_*g*f+_*u*x-a*S*x-d*u*M+a*g*M)*N,n[8]=F*N,n[9]=(A*m*f-_*C*f-A*s*M+a*C*M+_*s*v-a*m*v)*N,n[10]=(d*C*f-A*h*f+A*s*x-a*C*x-d*s*v+a*h*v)*N,n[11]=(_*h*f-d*m*f-_*s*x+a*m*x+d*s*M-a*h*M)*N,n[12]=V*N,n[13]=(_*C*u-A*m*u+A*s*S-a*C*S-_*s*y+a*m*y)*N,n[14]=(A*h*u-d*C*u-A*s*g+a*C*g+d*s*y-a*h*y)*N,n[15]=(d*m*u-_*h*u+_*s*g-a*m*g-d*s*S+a*h*S)*N,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,d=n.x,h=n.y,g=n.z,x=f*d,_=f*h;return this.set(x*d+s,x*h-u*g,x*g+u*h,0,x*h+u*g,_*h+s,_*g-u*d,0,x*g-u*h,_*g+u*d,f*g*g+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,d){return this.set(1,s,f,0,n,1,d,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,d=a._y,h=a._z,g=a._w,x=f+f,_=d+d,m=h+h,S=f*x,M=f*_,A=f*m,C=d*_,y=d*m,v=h*m,z=g*x,O=g*_,F=g*m,V=s.x,L=s.y,N=s.z;return u[0]=(1-(C+v))*V,u[1]=(M+F)*V,u[2]=(A-O)*V,u[3]=0,u[4]=(M-F)*L,u[5]=(1-(S+v))*L,u[6]=(y+z)*L,u[7]=0,u[8]=(A+O)*N,u[9]=(y-z)*N,u[10]=(1-(S+C))*N,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Hs.set(u[0],u[1],u[2]).length();const d=Hs.set(u[4],u[5],u[6]).length(),h=Hs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],Di.copy(this);const x=1/f,_=1/d,m=1/h;return Di.elements[0]*=x,Di.elements[1]*=x,Di.elements[2]*=x,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=m,Di.elements[9]*=m,Di.elements[10]*=m,a.setFromRotationMatrix(Di),s.x=f,s.y=d,s.z=h,this}makePerspective(n,a,s,u,f,d,h=Wi,g=!1){const x=this.elements,_=2*f/(a-n),m=2*f/(s-u),S=(a+n)/(a-n),M=(s+u)/(s-u);let A,C;if(g)A=f/(d-f),C=d*f/(d-f);else if(h===Wi)A=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===xc)A=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return x[0]=_,x[4]=0,x[8]=S,x[12]=0,x[1]=0,x[5]=m,x[9]=M,x[13]=0,x[2]=0,x[6]=0,x[10]=A,x[14]=C,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(n,a,s,u,f,d,h=Wi,g=!1){const x=this.elements,_=2/(a-n),m=2/(s-u),S=-(a+n)/(a-n),M=-(s+u)/(s-u);let A,C;if(g)A=1/(d-f),C=d/(d-f);else if(h===Wi)A=-2/(d-f),C=-(d+f)/(d-f);else if(h===xc)A=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return x[0]=_,x[4]=0,x[8]=0,x[12]=S,x[1]=0,x[5]=m,x[9]=0,x[13]=M,x[2]=0,x[6]=0,x[10]=A,x[14]=C,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Hs=new ct,Di=new xn,r3=new ct(0,0,0),s3=new ct(1,1,1),ar=new ct,ju=new ct,ri=new ct,i_=new xn,a_=new dl;class Ta{constructor(n=0,a=0,s=0,u=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],d=u[4],h=u[8],g=u[1],x=u[5],_=u[9],m=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(S,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(g,x)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-d,x)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,x));break;case"YZX":this._z=Math.asin(Re(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,x),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,x),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return i_.makeRotationFromQuaternion(n),this.setFromRotationMatrix(i_,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return a_.setFromEuler(this),this.setFromQuaternion(a_,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let o3=0;const r_=new ct,Gs=new dl,pa=new xn,Zu=new ct,nl=new ct,l3=new ct,u3=new dl,s_=new ct(1,0,0),o_=new ct(0,1,0),l_=new ct(0,0,1),u_={type:"added"},c3={type:"removed"},Vs={type:"childadded",child:null},dh={type:"childremoved",child:null};class ui extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const n=new ct,a=new Ta,s=new dl,u=new ct(1,1,1);function f(){s.setFromEuler(a,!1)}function d(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new xn},normalMatrix:{value:new me}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(n,a){return Gs.setFromAxisAngle(n,a),this.quaternion.premultiply(Gs),this}rotateX(n){return this.rotateOnAxis(s_,n)}rotateY(n){return this.rotateOnAxis(o_,n)}rotateZ(n){return this.rotateOnAxis(l_,n)}translateOnAxis(n,a){return r_.copy(n).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(s_,n)}translateY(n){return this.translateOnAxis(o_,n)}translateZ(n){return this.translateOnAxis(l_,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?Zu.copy(n):Zu.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(nl,Zu,this.up):pa.lookAt(Zu,nl,this.up),this.quaternion.setFromRotationMatrix(pa),u&&(pa.extractRotation(u.matrixWorld),Gs.setFromRotationMatrix(pa),this.quaternion.premultiply(Gs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(sn("Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(u_),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(c3),dh.child=n,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),pa.multiply(n.parent.matrixWorld)),n.applyMatrix4(pa),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(u_),Vs.child=n,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,n,l3),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,u3,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(n),u.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(n)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let x=0,_=g.length;x<_;x++){const m=g[x];f(n.shapes,m)}else f(n.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,x=this.material.length;g<x;g++)h.push(f(n.materials,this.material[g]));u.material=h}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];u.animations.push(f(n.animations,g))}}if(a){const h=d(n.geometries),g=d(n.materials),x=d(n.textures),_=d(n.images),m=d(n.shapes),S=d(n.skeletons),M=d(n.animations),A=d(n.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),x.length>0&&(s.textures=x),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=u,s;function d(h){const g=[];for(const x in h){const _=h[x];delete _.metadata,g.push(_)}return g}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}ui.DEFAULT_UP=new ct(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new ct,ma=new ct,hh=new ct,xa=new ct,Xs=new ct,qs=new ct,c_=new ct,ph=new ct,mh=new ct,xh=new ct,gh=new on,_h=new on,vh=new on;class Ni{constructor(n=new ct,a=new ct,s=new ct){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),wi.subVectors(n,a),u.cross(wi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){wi.subVectors(u,a),ma.subVectors(s,a),hh.subVectors(n,a);const d=wi.dot(wi),h=wi.dot(ma),g=wi.dot(hh),x=ma.dot(ma),_=ma.dot(hh),m=d*x-h*h;if(m===0)return f.set(0,0,0),null;const S=1/m,M=(x*g-h*_)*S,A=(d*_-h*g)*S;return f.set(1-M-A,A,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(n,a,s,u,f,d,h,g){return this.getBarycoord(n,a,s,u,xa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,xa.x),g.addScaledVector(d,xa.y),g.addScaledVector(h,xa.z),g)}static getInterpolatedAttribute(n,a,s,u,f,d){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(n,a),_h.fromBufferAttribute(n,s),vh.fromBufferAttribute(n,u),d.setScalar(0),d.addScaledVector(gh,f.x),d.addScaledVector(_h,f.y),d.addScaledVector(vh,f.z),d}static isFrontFacing(n,a,s,u){return wi.subVectors(s,a),ma.subVectors(n,a),wi.cross(ma).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ni.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ni.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ni.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ni.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ni.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let d,h;Xs.subVectors(u,s),qs.subVectors(f,s),ph.subVectors(n,s);const g=Xs.dot(ph),x=qs.dot(ph);if(g<=0&&x<=0)return a.copy(s);mh.subVectors(n,u);const _=Xs.dot(mh),m=qs.dot(mh);if(_>=0&&m<=_)return a.copy(u);const S=g*m-_*x;if(S<=0&&g>=0&&_<=0)return d=g/(g-_),a.copy(s).addScaledVector(Xs,d);xh.subVectors(n,f);const M=Xs.dot(xh),A=qs.dot(xh);if(A>=0&&M<=A)return a.copy(f);const C=M*x-g*A;if(C<=0&&x>=0&&A<=0)return h=x/(x-A),a.copy(s).addScaledVector(qs,h);const y=_*A-M*m;if(y<=0&&m-_>=0&&M-A>=0)return c_.subVectors(f,u),h=(m-_)/(m-_+(M-A)),a.copy(u).addScaledVector(c_,h);const v=1/(y+C+S);return d=C*v,h=S*v,a.copy(s).addScaledVector(Xs,d).addScaledVector(qs,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function Sh(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class ke{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=oi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Le.colorSpaceToWorking(this,a),this}setRGB(n,a,s,u=Le.workingColorSpace){return this.r=n,this.g=a,this.b=s,Le.colorSpaceToWorking(this,u),this}setHSL(n,a,s,u=Le.workingColorSpace){if(n=KM(n,1),a=Re(a,0,1),s=Re(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,d=2*s-f;this.r=Sh(d,f,n+1/3),this.g=Sh(d,f,n),this.b=Sh(d,f,n-1/3)}return Le.colorSpaceToWorking(this,u),this}setStyle(n,a=oi){function s(f){f!==void 0&&parseFloat(f)<1&&pe("Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:pe("Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);pe("Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=oi){const s=tv[n.toLowerCase()];return s!==void 0?this.setHex(s,a):pe("Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=ba(n.r),this.g=ba(n.g),this.b=ba(n.b),this}copyLinearToSRGB(n){return this.r=Ks(n.r),this.g=Ks(n.g),this.b=Ks(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=oi){return Le.workingToColorSpace(On.copy(this),n),Math.round(Re(On.r*255,0,255))*65536+Math.round(Re(On.g*255,0,255))*256+Math.round(Re(On.b*255,0,255))}getHexString(n=oi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Le.workingColorSpace){Le.workingToColorSpace(On.copy(this),a);const s=On.r,u=On.g,f=On.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let g,x;const _=(h+d)/2;if(h===d)g=0,x=0;else{const m=d-h;switch(x=_<=.5?m/(d+h):m/(2-d-h),d){case s:g=(u-f)/m+(u<f?6:0);break;case u:g=(f-s)/m+2;break;case f:g=(s-u)/m+4;break}g/=6}return n.h=g,n.s=x,n.l=_,n}getRGB(n,a=Le.workingColorSpace){return Le.workingToColorSpace(On.copy(this),a),n.r=On.r,n.g=On.g,n.b=On.b,n}getStyle(n=oi){Le.workingToColorSpace(On.copy(this),n);const a=On.r,s=On.g,u=On.b;return n!==oi?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(rr),this.setHSL(rr.h+n,rr.s+a,rr.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(rr),n.getHSL(Ku);const s=nh(rr.h,Ku.h,a),u=nh(rr.s,Ku.s,a),f=nh(rr.l,Ku.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new ke;ke.NAMES=tv;let f3=0;class vc extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Zs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Uh,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){pe(`Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){pe(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(n).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(n).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(s.blending=this.blending),this.side!==cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Uh&&(s.blendDst=this.blendDst),this.blendEquation!==qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(a){const f=u(n.textures),d=u(n.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class ev extends vc{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const hn=new ct,Qu=new Ue;let d3=0;class ji{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d3++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=Kg,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Qu.fromBufferAttribute(this,a),Qu.applyMatrix3(n),this.setXY(a,Qu.x,Qu.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix3(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyMatrix4(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.applyNormalMatrix(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)hn.fromBufferAttribute(this,a),hn.transformDirection(n),this.setXYZ(a,hn.x,hn.y,hn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=$o(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=jn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=$o(a,this.array)),a}setX(n,a){return this.normalized&&(a=jn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=$o(a,this.array)),a}setY(n,a){return this.normalized&&(a=jn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=$o(a,this.array)),a}setZ(n,a){return this.normalized&&(a=jn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=$o(a,this.array)),a}setW(n,a){return this.normalized&&(a=jn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array),u=jn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=jn(a,this.array),s=jn(s,this.array),u=jn(u,this.array),f=jn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==Kg&&(n.usage=this.usage),n}}class nv extends ji{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class iv extends ji{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class Wr extends ji{constructor(n,a,s){super(new Float32Array(n),a,s)}}let h3=0;const Si=new xn,yh=new ui,ks=new ct,si=new hl,il=new hl,bn=new ct;class fr extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(Q_(n)?iv:nv)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new me().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return Si.makeRotationFromQuaternion(n),this.applyMatrix4(Si),this}rotateX(n){return Si.makeRotationX(n),this.applyMatrix4(Si),this}rotateY(n){return Si.makeRotationY(n),this.applyMatrix4(Si),this}rotateZ(n){return Si.makeRotationZ(n),this.applyMatrix4(Si),this}translate(n,a,s){return Si.makeTranslation(n,a,s),this.applyMatrix4(Si),this}scale(n,a,s){return Si.makeScale(n,a,s),this.applyMatrix4(Si),this}lookAt(n){return yh.lookAt(n),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const d=n[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Wr(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];si.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new D0);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(n){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];il.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(si.min,il.min),si.expandByPoint(bn),bn.addVectors(si.max,il.max),si.expandByPoint(bn)):(si.expandByPoint(il.min),si.expandByPoint(il.max))}si.getCenter(s);let u=0;for(let f=0,d=n.count;f<d;f++)bn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(bn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],g=this.morphTargetsRelative;for(let x=0,_=h.count;x<_;x++)bn.fromBufferAttribute(h,x),g&&(ks.fromBufferAttribute(n,x),bn.add(ks)),u=Math.max(u,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],g=[];for(let j=0;j<s.count;j++)h[j]=new ct,g[j]=new ct;const x=new ct,_=new ct,m=new ct,S=new Ue,M=new Ue,A=new Ue,C=new ct,y=new ct;function v(j,D,R){x.fromBufferAttribute(s,j),_.fromBufferAttribute(s,D),m.fromBufferAttribute(s,R),S.fromBufferAttribute(f,j),M.fromBufferAttribute(f,D),A.fromBufferAttribute(f,R),_.sub(x),m.sub(x),M.sub(S),A.sub(S);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(m,-M.y).multiplyScalar(H),y.copy(m).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(H),h[j].add(C),h[D].add(C),h[R].add(C),g[j].add(y),g[D].add(y),g[R].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:n.count}]);for(let j=0,D=z.length;j<D;++j){const R=z[j],H=R.start,K=R.count;for(let ot=H,ft=H+K;ot<ft;ot+=3)v(n.getX(ot+0),n.getX(ot+1),n.getX(ot+2))}const O=new ct,F=new ct,V=new ct,L=new ct;function N(j){V.fromBufferAttribute(u,j),L.copy(V);const D=h[j];O.copy(D),O.sub(V.multiplyScalar(V.dot(D))).normalize(),F.crossVectors(L,D);const H=F.dot(g[j])<0?-1:1;d.setXYZW(j,O.x,O.y,O.z,H)}for(let j=0,D=z.length;j<D;++j){const R=z[j],H=R.start,K=R.count;for(let ot=H,ft=H+K;ot<ft;ot+=3)N(n.getX(ot+0)),N(n.getX(ot+1)),N(n.getX(ot+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new ct,f=new ct,d=new ct,h=new ct,g=new ct,x=new ct,_=new ct,m=new ct;if(n)for(let S=0,M=n.count;S<M;S+=3){const A=n.getX(S+0),C=n.getX(S+1),y=n.getX(S+2);u.fromBufferAttribute(a,A),f.fromBufferAttribute(a,C),d.fromBufferAttribute(a,y),_.subVectors(d,f),m.subVectors(u,f),_.cross(m),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,C),x.fromBufferAttribute(s,y),h.add(_),g.add(_),x.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(y,x.x,x.y,x.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),d.fromBufferAttribute(a,S+2),_.subVectors(d,f),m.subVectors(u,f),_.cross(m),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)bn.fromBufferAttribute(n,a),bn.normalize(),n.setXYZ(a,bn.x,bn.y,bn.z)}toNonIndexed(){function n(h,g){const x=h.array,_=h.itemSize,m=h.normalized,S=new x.constructor(g.length*_);let M=0,A=0;for(let C=0,y=g.length;C<y;C++){h.isInterleavedBufferAttribute?M=g[C]*h.data.stride+h.offset:M=g[C]*_;for(let v=0;v<_;v++)S[A++]=x[M++]}return new ji(S,_,m)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new fr,s=this.index.array,u=this.attributes;for(const h in u){const g=u[h],x=n(g,s);a.setAttribute(h,x)}const f=this.morphAttributes;for(const h in f){const g=[],x=f[h];for(let _=0,m=x.length;_<m;_++){const S=x[_],M=n(S,s);g.push(M)}a.morphAttributes[h]=g}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const x=d[h];a.addGroup(x.start,x.count,x.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const x in g)g[x]!==void 0&&(n[x]=g[x]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const g in s){const x=s[g];n.data.attributes[g]=x.toJSON(n.data)}const u={};let f=!1;for(const g in this.morphAttributes){const x=this.morphAttributes[g],_=[];for(let m=0,S=x.length;m<S;m++){const M=x[m];_.push(M.toJSON(n.data))}_.length>0&&(u[g]=_,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere=h.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone());const u=n.attributes;for(const x in u){const _=u[x];this.setAttribute(x,_.clone(a))}const f=n.morphAttributes;for(const x in f){const _=[],m=f[x];for(let S=0,M=m.length;S<M;S++)_.push(m[S].clone(a));this.morphAttributes[x]=_}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let x=0,_=d.length;x<_;x++){const m=d[x];this.addGroup(m.start,m.count,m.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=n.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new xn,Br=new a3,Ju=new D0,d_=new ct,$u=new ct,tc=new ct,ec=new ct,Mh=new ct,nc=new ct,h_=new ct,ic=new ct;class Aa extends ui{constructor(n=new fr,a=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const h=this.morphTargetInfluences;if(f&&h){nc.set(0,0,0);for(let g=0,x=f.length;g<x;g++){const _=h[g],m=f[g];_!==0&&(Mh.fromBufferAttribute(m,n),d?nc.addScaledVector(Mh,_):nc.addScaledVector(Mh.sub(a),_))}a.add(nc)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ju.copy(s.boundingSphere),Ju.applyMatrix4(f),Br.copy(n.ray).recast(n.near),!(Ju.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Ju,d_)===null||Br.origin.distanceToSquared(d_)>(n.far-n.near)**2))&&(f_.copy(f).invert(),Br.copy(n.ray).applyMatrix4(f_),!(s.boundingBox!==null&&Br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,Br)))}_computeIntersections(n,a,s){let u;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,x=f.attributes.uv,_=f.attributes.uv1,m=f.attributes.normal,S=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),O=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let F=z,V=O;F<V;F+=3){const L=h.getX(F),N=h.getX(F+1),j=h.getX(F+2);u=ac(this,v,n,s,x,_,m,L,N,j),u&&(u.faceIndex=Math.floor(F/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=h.getX(y),O=h.getX(y+1),F=h.getX(y+2);u=ac(this,d,n,s,x,_,m,z,O,F),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(g!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],z=Math.max(y.start,M.start),O=Math.min(g.count,Math.min(y.start+y.count,M.start+M.count));for(let F=z,V=O;F<V;F+=3){const L=F,N=F+1,j=F+2;u=ac(this,v,n,s,x,_,m,L,N,j),u&&(u.faceIndex=Math.floor(F/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const A=Math.max(0,M.start),C=Math.min(g.count,M.start+M.count);for(let y=A,v=C;y<v;y+=3){const z=y,O=y+1,F=y+2;u=ac(this,d,n,s,x,_,m,z,O,F),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function p3(o,n,a,s,u,f,d,h){let g;if(n.side===Kn?g=s.intersectTriangle(d,f,u,!0,h):g=s.intersectTriangle(u,f,d,n.side===cr,h),g===null)return null;ic.copy(h),ic.applyMatrix4(o.matrixWorld);const x=a.ray.origin.distanceTo(ic);return x<a.near||x>a.far?null:{distance:x,point:ic.clone(),object:o}}function ac(o,n,a,s,u,f,d,h,g,x){o.getVertexPosition(h,$u),o.getVertexPosition(g,tc),o.getVertexPosition(x,ec);const _=p3(o,n,a,s,$u,tc,ec,h_);if(_){const m=new ct;Ni.getBarycoord(h_,$u,tc,ec,m),u&&(_.uv=Ni.getInterpolatedAttribute(u,h,g,x,m,new Ue)),f&&(_.uv1=Ni.getInterpolatedAttribute(f,h,g,x,m,new Ue)),d&&(_.normal=Ni.getInterpolatedAttribute(d,h,g,x,m,new ct),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:g,c:x,normal:new ct,materialIndex:0};Ni.getNormal($u,tc,ec,S.normal),_.face=S,_.barycoord=m}return _}class pl extends fr{constructor(n=1,a=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const g=[],x=[],_=[],m=[];let S=0,M=0;A("z","y","x",-1,-1,s,a,n,d,f,0),A("z","y","x",1,-1,s,a,-n,d,f,1),A("x","z","y",1,1,n,s,a,u,d,2),A("x","z","y",1,-1,n,s,-a,u,d,3),A("x","y","z",1,-1,n,a,s,u,f,4),A("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new Wr(x,3)),this.setAttribute("normal",new Wr(_,3)),this.setAttribute("uv",new Wr(m,2));function A(C,y,v,z,O,F,V,L,N,j,D){const R=F/N,H=V/j,K=F/2,ot=V/2,ft=L/2,lt=N+1,Y=j+1;let at=0,Z=0;const xt=new ct;for(let _t=0;_t<Y;_t++){const Ht=_t*H-ot;for(let ue=0;ue<lt;ue++){const ye=ue*R-K;xt[C]=ye*z,xt[y]=Ht*O,xt[v]=ft,x.push(xt.x,xt.y,xt.z),xt[C]=0,xt[y]=0,xt[v]=L>0?1:-1,_.push(xt.x,xt.y,xt.z),m.push(ue/N),m.push(1-_t/j),at+=1}}for(let _t=0;_t<j;_t++)for(let Ht=0;Ht<N;Ht++){const ue=S+Ht+lt*_t,ye=S+Ht+lt*(_t+1),P=S+(Ht+1)+lt*(_t+1),dt=S+(Ht+1)+lt*_t;g.push(ue,ye,dt),g.push(ye,P,dt),Z+=6}h.addGroup(M,Z,D),M+=Z,S+=at}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new pl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function eo(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Hn(o){const n={};for(let a=0;a<o.length;a++){const s=eo(o[a]);for(const u in s)n[u]=s[u]}return n}function m3(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function av(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Le.workingColorSpace}const x3={clone:eo,merge:Hn};var g3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends vc{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g3,this.fragmentShader=_3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=eo(n.uniforms),this.uniformsGroups=m3(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?a.uniforms[u]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[u]={type:"m4",value:d.toArray()}:a.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class rv extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new ct,p_=new Ue,m_=new Ue;class Ui extends rv{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=g0*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(eh*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return g0*2*Math.atan(Math.tan(eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sr.x,sr.y).multiplyScalar(-n/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(sr.x,sr.y).multiplyScalar(-n/sr.z)}getViewSize(n,a){return this.getViewBounds(n,p_,m_),a.subVectors(m_,p_)}setViewOffset(n,a,s,u,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(eh*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,x=d.fullHeight;f+=d.offsetX*u/g,a-=d.offsetY*s/x,u*=d.width/g,s*=d.height/x}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ys=-90,Ws=1;class v3 extends ui{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ui(Ys,Ws,n,a);u.layers=this.layers,this.add(u);const f=new Ui(Ys,Ws,n,a);f.layers=this.layers,this.add(f);const d=new Ui(Ys,Ws,n,a);d.layers=this.layers,this.add(d);const h=new Ui(Ys,Ws,n,a);h.layers=this.layers,this.add(h);const g=new Ui(Ys,Ws,n,a);g.layers=this.layers,this.add(g);const x=new Ui(Ys,Ws,n,a);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,d,h,g]=a;for(const x of a)this.remove(x);if(n===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(n===xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const x of a)this.add(x),x.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,x,_]=this.children,m=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),A=n.xr.enabled;n.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,d),n.setRenderTarget(s,2,u),n.render(a,h),n.setRenderTarget(s,3,u),n.render(a,g),n.setRenderTarget(s,4,u),n.render(a,x),s.texture.generateMipmaps=C,n.setRenderTarget(s,5,u),n.render(a,_),n.setRenderTarget(m,S,M),n.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class sv extends Gn{constructor(n=[],a=Js,s,u,f,d,h,g,x,_){super(n,a,s,u,f,d,h,g,x,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class S3 extends Zr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new sv(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new pl(5,5,5),f=new Zi({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ma});f.uniforms.tEquirect.value=a;const d=new Aa(u,f),h=a.minFilter;return a.minFilter===Yr&&(a.minFilter=yi),new v3(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a=!0,s=!0,u=!0){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,s,u);n.setRenderTarget(f)}}class rc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y3={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,d=null;const h=this._targetRay,g=this._grip,x=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(x&&n.hand){d=!0;for(const C of n.hand.values()){const y=a.getJointPose(C,s),v=this._getHandJoint(x,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=x.joints["index-finger-tip"],m=x.joints["thumb-tip"],S=_.position.distanceTo(m.position),M=.02,A=.005;x.inputState.pinching&&S>M+A?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!x.inputState.pinching&&S<=M-A&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else g!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));h!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(y3)))}return h!==null&&(h.visible=u!==null),g!==null&&(g.visible=f!==null),x!==null&&(x.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new rc;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}class M3 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class b3 extends Gn{constructor(n=null,a=1,s=1,u,f,d,h,g,x=li,_=li,m,S){super(null,d,h,g,x,_,u,f,m,S),this.isDataTexture=!0,this.image={data:n,width:a,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new ct,E3=new ct,T3=new me;class Xr{constructor(n=new ct(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=Eh.subVectors(s,a).cross(E3.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Eh),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||T3.getNormalMatrix(n),u=this.coplanarPoint(Eh).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new D0,A3=new Ue(.5,.5),sc=new ct;class ov{constructor(n=new Xr,a=new Xr,s=new Xr,u=new Xr,f=new Xr,d=new Xr){this.planes=[n,a,s,u,f,d]}set(n,a,s,u,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=Wi,s=!1){const u=this.planes,f=n.elements,d=f[0],h=f[1],g=f[2],x=f[3],_=f[4],m=f[5],S=f[6],M=f[7],A=f[8],C=f[9],y=f[10],v=f[11],z=f[12],O=f[13],F=f[14],V=f[15];if(u[0].setComponents(x-d,M-_,v-A,V-z).normalize(),u[1].setComponents(x+d,M+_,v+A,V+z).normalize(),u[2].setComponents(x+h,M+m,v+C,V+O).normalize(),u[3].setComponents(x-h,M-m,v-C,V-O).normalize(),s)u[4].setComponents(g,S,y,F).normalize(),u[5].setComponents(x-g,M-S,v-y,V-F).normalize();else if(u[4].setComponents(x-g,M-S,v-y,V-F).normalize(),a===Wi)u[5].setComponents(x+g,M+S,v+y,V+F).normalize();else if(a===xc)u[5].setComponents(g,S,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Fr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(n){Fr.center.set(0,0,0);const a=A3.distanceTo(n.center);return Fr.radius=.7071067811865476+a,Fr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(sc.x=u.normal.x>0?n.max.x:n.min.x,sc.y=u.normal.y>0?n.max.y:n.min.y,sc.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(sc)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends Gn{constructor(n,a,s=jr,u,f,d,h=li,g=li,x,_=ll,m=1){if(_!==ll&&_!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:n,height:a,depth:m};super(S,u,f,d,h,g,_,s,x),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new C0(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class uv extends Gn{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}copy(n){return super.copy(n),this.sourceTexture=n.sourceTexture,this}}class ml extends fr{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,d=a/2,h=Math.floor(s),g=Math.floor(u),x=h+1,_=g+1,m=n/h,S=a/g,M=[],A=[],C=[],y=[];for(let v=0;v<_;v++){const z=v*S-d;for(let O=0;O<x;O++){const F=O*m-f;A.push(F,-z,0),C.push(0,0,1),y.push(O/h),y.push(1-v/g)}}for(let v=0;v<g;v++)for(let z=0;z<h;z++){const O=z+x*v,F=z+x*(v+1),V=z+1+x*(v+1),L=z+1+x*v;M.push(O,F,L),M.push(F,V,L)}this.setIndex(M),this.setAttribute("position",new Wr(A,3)),this.setAttribute("normal",new Wr(C,3)),this.setAttribute("uv",new Wr(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new ml(n.width,n.height,n.widthSegments,n.heightSegments)}}class R3 extends vc{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class C3 extends vc{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class cv extends rv{constructor(n=-1,a=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,d=s+n,h=u+a,g=u-a;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=x*this.view.offsetX,d=f+x*this.view.width,h-=_*this.view.offsetY,g=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class D3 extends Ui{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}class w3{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=performance.now();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}}function x_(o,n,a,s){const u=U3(s);switch(a){case W_:return o*n;case Z_:return o*n/u.components*u.byteLength;case E0:return o*n/u.components*u.byteLength;case T0:return o*n*2/u.components*u.byteLength;case A0:return o*n*2/u.components*u.byteLength;case j_:return o*n*3/u.components*u.byteLength;case Li:return o*n*4/u.components*u.byteLength;case R0:return o*n*4/u.components*u.byteLength;case uc:case cc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case fc:case dc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case qh:case Yh:return Math.max(o,16)*Math.max(n,8)/4;case Xh:case kh:return Math.max(o,8)*Math.max(n,8)/2;case Wh:case jh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case Zh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Kh:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case Jh:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case t0:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case e0:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case n0:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case i0:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case a0:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case r0:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case s0:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case o0:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case l0:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case u0:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case c0:case f0:case d0:return Math.ceil(o/4)*Math.ceil(n/4)*16;case h0:case p0:return Math.ceil(o/4)*Math.ceil(n/4)*8;case m0:case x0:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function U3(o){switch(o){case Ea:case X_:return{byteLength:1,components:1};case sl:case q_:case no:return{byteLength:2,components:1};case M0:case b0:return{byteLength:2,components:4};case jr:case y0:case ya:return{byteLength:4,components:1};case k_:case Y_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:S0}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=S0);function fv(){let o=null,n=!1,a=null,s=null;function u(f,d){a(f,d),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function N3(o){const n=new WeakMap;function a(h,g){const x=h.array,_=h.usage,m=x.byteLength,S=o.createBuffer();o.bindBuffer(g,S),o.bufferData(g,x,_),h.onUploadCallback();let M;if(x instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&x instanceof Float16Array)M=o.HALF_FLOAT;else if(x instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)M=o.SHORT;else if(x instanceof Uint32Array)M=o.UNSIGNED_INT;else if(x instanceof Int32Array)M=o.INT;else if(x instanceof Int8Array)M=o.BYTE;else if(x instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:S,type:M,bytesPerElement:x.BYTES_PER_ELEMENT,version:h.version,size:m}}function s(h,g,x){const _=g.array,m=g.updateRanges;if(o.bindBuffer(x,h),m.length===0)o.bufferSubData(x,0,_);else{m.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<m.length;M++){const A=m[S],C=m[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,m[S]=C)}m.length=S+1;for(let M=0,A=m.length;M<A;M++){const C=m[M];o.bufferSubData(x,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);g&&(o.deleteBuffer(g.buffer),n.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const x=n.get(h);if(x===void 0)n.set(h,a(h,g));else if(x.version<h.version){if(x.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(x.buffer,h,g),x.version=h.version}}return{get:u,remove:f,update:d}}var L3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,V3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ub=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:L3,alphahash_pars_fragment:O3,alphamap_fragment:z3,alphamap_pars_fragment:P3,alphatest_fragment:I3,alphatest_pars_fragment:B3,aomap_fragment:F3,aomap_pars_fragment:H3,batching_pars_vertex:G3,batching_vertex:V3,begin_vertex:X3,beginnormal_vertex:q3,bsdfs:k3,iridescence_fragment:Y3,bumpmap_pars_fragment:W3,clipping_planes_fragment:j3,clipping_planes_pars_fragment:Z3,clipping_planes_pars_vertex:K3,clipping_planes_vertex:Q3,color_fragment:J3,color_pars_fragment:$3,color_pars_vertex:tb,color_vertex:eb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:ab,displacementmap_pars_vertex:rb,displacementmap_vertex:sb,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,colorspace_fragment:ub,colorspace_pars_fragment:cb,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:hb,envmap_pars_vertex:pb,envmap_physical_pars_fragment:Tb,envmap_vertex:mb,fog_vertex:xb,fog_pars_vertex:gb,fog_fragment:_b,fog_pars_fragment:vb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:yb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:bb,lights_pars_begin:Eb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Rb,lights_phong_fragment:Cb,lights_phong_pars_fragment:Db,lights_physical_fragment:wb,lights_physical_pars_fragment:Ub,lights_fragment_begin:Nb,lights_fragment_maps:Lb,lights_fragment_end:Ob,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Bb,map_fragment:Fb,map_pars_fragment:Hb,map_particle_fragment:Gb,map_particle_pars_fragment:Vb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:qb,morphinstance_vertex:kb,morphcolor_vertex:Yb,morphnormal_vertex:Wb,morphtarget_pars_vertex:jb,morphtarget_vertex:Zb,normal_fragment_begin:Kb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:$b,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:uE,dithering_fragment:cE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:xE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:vE,skinning_vertex:SE,skinnormal_vertex:yE,specularmap_fragment:ME,specularmap_pars_fragment:bE,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:DE,uv_vertex:wE,worldpos_vertex:UE,background_vert:NE,background_frag:LE,backgroundCube_vert:OE,backgroundCube_frag:zE,cube_vert:PE,cube_frag:IE,depth_vert:BE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:XE,linedashed_vert:qE,linedashed_frag:kE,meshbasic_vert:YE,meshbasic_frag:WE,meshlambert_vert:jE,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:t1,meshphong_frag:e1,meshphysical_vert:n1,meshphysical_frag:i1,meshtoon_vert:a1,meshtoon_frag:r1,points_vert:s1,points_frag:o1,shadow_vert:l1,shadow_frag:u1,sprite_vert:c1,sprite_frag:f1},zt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Yi={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ke(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ke(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Yi.physical={uniforms:Hn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const oc={r:0,b:0,g:0},Hr=new Ta,d1=new xn;function h1(o,n,a,s,u,f,d){const h=new ke(0);let g=f===!0?0:1,x,_,m=null,S=0,M=null;function A(O){let F=O.isScene===!0?O.background:null;return F&&F.isTexture&&(F=(O.backgroundBlurriness>0?a:n).get(F)),F}function C(O){let F=!1;const V=A(O);V===null?v(h,g):V&&V.isColor&&(v(V,1),F=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,F){const V=A(F);V&&(V.isCubeTexture||V.mapping===_c)?(_===void 0&&(_=new Aa(new pl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:eo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,N,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(_)),Hr.copy(F.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(Hr)),_.material.toneMapped=Le.getTransfer(V.colorSpace)!==qe,(m!==V||S!==V.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=V,S=V.version,M=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(x===void 0&&(x=new Aa(new ml(2,2),new Zi({name:"BackgroundMaterial",uniforms:eo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),Object.defineProperty(x.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(x)),x.material.uniforms.t2D.value=V,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.toneMapped=Le.getTransfer(V.colorSpace)!==qe,V.matrixAutoUpdate===!0&&V.updateMatrix(),x.material.uniforms.uvTransform.value.copy(V.matrix),(m!==V||S!==V.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,m=V,S=V.version,M=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null))}function v(O,F){O.getRGB(oc,av(o)),s.buffers.color.setClear(oc.r,oc.g,oc.b,F,d)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,F=1){h.set(O),g=F,v(h,g)},getClearAlpha:function(){return g},setClearAlpha:function(O){g=O,v(h,g)},render:C,addToRenderList:y,dispose:z}}function p1(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,d=!1;function h(R,H,K,ot,ft){let lt=!1;const Y=m(ot,K,H);f!==Y&&(f=Y,x(f.object)),lt=M(R,ot,K,ft),lt&&A(R,ot,K,ft),ft!==null&&n.update(ft,o.ELEMENT_ARRAY_BUFFER),(lt||d)&&(d=!1,F(R,H,K,ot),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(ft).buffer))}function g(){return o.createVertexArray()}function x(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function m(R,H,K){const ot=K.wireframe===!0;let ft=s[R.id];ft===void 0&&(ft={},s[R.id]=ft);let lt=ft[H.id];lt===void 0&&(lt={},ft[H.id]=lt);let Y=lt[ot];return Y===void 0&&(Y=S(g()),lt[ot]=Y),Y}function S(R){const H=[],K=[],ot=[];for(let ft=0;ft<a;ft++)H[ft]=0,K[ft]=0,ot[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ot,object:R,attributes:{},index:null}}function M(R,H,K,ot){const ft=f.attributes,lt=H.attributes;let Y=0;const at=K.getAttributes();for(const Z in at)if(at[Z].location>=0){const _t=ft[Z];let Ht=lt[Z];if(Ht===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Ht=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Ht=R.instanceColor)),_t===void 0||_t.attribute!==Ht||Ht&&_t.data!==Ht.data)return!0;Y++}return f.attributesNum!==Y||f.index!==ot}function A(R,H,K,ot){const ft={},lt=H.attributes;let Y=0;const at=K.getAttributes();for(const Z in at)if(at[Z].location>=0){let _t=lt[Z];_t===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const Ht={};Ht.attribute=_t,_t&&_t.data&&(Ht.data=_t.data),ft[Z]=Ht,Y++}f.attributes=ft,f.attributesNum=Y,f.index=ot}function C(){const R=f.newAttributes;for(let H=0,K=R.length;H<K;H++)R[H]=0}function y(R){v(R,0)}function v(R,H){const K=f.newAttributes,ot=f.enabledAttributes,ft=f.attributeDivisors;K[R]=1,ot[R]===0&&(o.enableVertexAttribArray(R),ot[R]=1),ft[R]!==H&&(o.vertexAttribDivisor(R,H),ft[R]=H)}function z(){const R=f.newAttributes,H=f.enabledAttributes;for(let K=0,ot=H.length;K<ot;K++)H[K]!==R[K]&&(o.disableVertexAttribArray(K),H[K]=0)}function O(R,H,K,ot,ft,lt,Y){Y===!0?o.vertexAttribIPointer(R,H,K,ft,lt):o.vertexAttribPointer(R,H,K,ot,ft,lt)}function F(R,H,K,ot){C();const ft=ot.attributes,lt=K.getAttributes(),Y=H.defaultAttributeValues;for(const at in lt){const Z=lt[at];if(Z.location>=0){let xt=ft[at];if(xt===void 0&&(at==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),at==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const _t=xt.normalized,Ht=xt.itemSize,ue=n.get(xt);if(ue===void 0)continue;const ye=ue.buffer,P=ue.type,dt=ue.bytesPerElement,J=P===o.INT||P===o.UNSIGNED_INT||xt.gpuType===y0;if(xt.isInterleavedBufferAttribute){const nt=xt.data,yt=nt.stride,Ot=xt.offset;if(nt.isInstancedInterleavedBuffer){for(let At=0;At<Z.locationSize;At++)v(Z.location+At,nt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<Z.locationSize;At++)y(Z.location+At);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let At=0;At<Z.locationSize;At++)O(Z.location+At,Ht/Z.locationSize,P,_t,yt*dt,(Ot+Ht/Z.locationSize*At)*dt,J)}else{if(xt.isInstancedBufferAttribute){for(let nt=0;nt<Z.locationSize;nt++)v(Z.location+nt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let nt=0;nt<Z.locationSize;nt++)y(Z.location+nt);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let nt=0;nt<Z.locationSize;nt++)O(Z.location+nt,Ht/Z.locationSize,P,_t,Ht*dt,Ht/Z.locationSize*nt*dt,J)}}else if(Y!==void 0){const _t=Y[at];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Z.location,_t);break;case 3:o.vertexAttrib3fv(Z.location,_t);break;case 4:o.vertexAttrib4fv(Z.location,_t);break;default:o.vertexAttrib1fv(Z.location,_t)}}}}z()}function V(){j();for(const R in s){const H=s[R];for(const K in H){const ot=H[K];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete H[K]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const K in H){const ot=H[K];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete H[K]}delete s[R.id]}function N(R){for(const H in s){const K=s[H];if(K[R.id]===void 0)continue;const ot=K[R.id];for(const ft in ot)_(ot[ft].object),delete ot[ft];delete K[R.id]}}function j(){D(),d=!0,f!==u&&(f=u,x(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:j,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function m1(o,n,a){let s;function u(x){s=x}function f(x,_){o.drawArrays(s,x,_),a.update(_,s,1)}function d(x,_,m){m!==0&&(o.drawArraysInstanced(s,x,_,m),a.update(_,s,m))}function h(x,_,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,x,0,_,0,m);let M=0;for(let A=0;A<m;A++)M+=_[A];a.update(M,s,1)}function g(x,_,m,S){if(m===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<x.length;A++)d(x[A],_[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(s,x,0,_,0,S,0,m);let A=0;for(let C=0;C<m;C++)A+=_[C]*S[C];a.update(A,s,1)}}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=g}function x1(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(N){return!(N!==Li&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const j=N===no&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Ea&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ya&&!j)}function g(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=a.precision!==void 0?a.precision:"highp";const _=g(x);_!==x&&(pe("WebGLRenderer:",x,"not supported, using",_,"instead."),x=_);const m=a.logarithmicDepthBuffer===!0,S=a.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=A>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:x,logarithmicDepthBuffer:m,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:F,vertexTextures:V,maxSamples:L}}function g1(o){const n=this;let a=null,s=0,u=!1,f=!1;const d=new Xr,h=new me,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,S){const M=m.length!==0||S||s!==0||u;return u=S,s=m.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,S){a=_(m,S,0)},this.setState=function(m,S,M){const A=m.clippingPlanes,C=m.clipIntersection,y=m.clipShadows,v=o.get(m);if(!u||A===null||A.length===0||f&&!y)f?_(null):x();else{const z=f?0:s,O=z*4;let F=v.clippingState||null;g.value=F,F=_(A,S,O,M);for(let V=0;V!==O;++V)F[V]=a[V];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function x(){g.value!==a&&(g.value=a,g.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function _(m,S,M,A){const C=m!==null?m.length:0;let y=null;if(C!==0){if(y=g.value,A!==!0||y===null){const v=M+C*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,F=M;O!==C;++O,F+=4)d.copy(m[O]).applyMatrix4(z,h),d.normal.toArray(y,F),y[F+3]=d.constant}g.value=y,g.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,y}}function _1(o){let n=new WeakMap;function a(d,h){return h===Fh?d.mapping=Js:h===Hh&&(d.mapping=$s),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fh||h===Hh)if(n.has(d)){const g=n.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new S3(g.height);return x.fromEquirectangularTexture(o,d),n.set(d,x),d.addEventListener("dispose",u),a(x.texture,d.mapping)}else return null}}return d}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const lr=4,g_=[.125,.215,.35,.446,.526,.582],kr=20,v1=256,al=new cv,__=new ke;let Th=null,Ah=0,Rh=0,Ch=!1;const S1=new ct;class v_{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,a=0,s=.1,u=100,f={}){const{size:d=256,position:h=S1}=f;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(n,s,u,g,h),a>0&&this._blur(g,0,0,a),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,n.scissorTest=!1,js(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===Js||n.mapping===$s?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:no,format:Li,colorSpace:to,depthBuffer:!1},u=S_(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(n,a,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y1(f)),this._blurMaterial=b1(f,n,a),this._ggxMaterial=M1(f,n,a)}return u}_compileMaterial(n){const a=new Aa(new fr,n);this._renderer.compile(a,al)}_sceneToCubeUV(n,a,s,u,f){const g=new Ui(90,1,a,s),x=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,S=m.autoClear,M=m.toneMapping;m.getClearColor(__),m.toneMapping=ur,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(u),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Aa(new pl,new ev({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const z=n.background;z?z.isColor&&(y.color.copy(z),n.background=null,v=!0):(y.color.copy(__),v=!0);for(let O=0;O<6;O++){const F=O%3;F===0?(g.up.set(0,x[O],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+_[O],f.y,f.z)):F===1?(g.up.set(0,0,x[O]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+_[O],f.z)):(g.up.set(0,x[O],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+_[O]));const V=this._cubeSize;js(u,F*V,O>2?V:0,V,V),m.setRenderTarget(u),v&&m.render(C,g),m.render(n,g)}m.toneMapping=M,m.autoClear=S,n.background=z}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===Js||n.mapping===$s;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=n;const g=this._cubeSize;js(a,0,0,3*g,2*g),s.setRenderTarget(a),s.render(d,al)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(n,f-1,f);a.autoClear=s}_applyGGXFilter(n,a,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,x=s/(this._lodMeshes.length-1),_=a/(this._lodMeshes.length-1),m=Math.sqrt(x*x-_*_),S=.05+x*.95,M=m*S,{_lodMax:A}=this,C=this._sizeLods[s],y=3*C*(s>A-lr?s-A+lr:0),v=4*(this._cubeSize-C);g.envMap.value=n.texture,g.roughness.value=M,g.mipInt.value=A-a,js(f,y,v,3*C,2*C),u.setRenderTarget(f),u.render(h,al),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=A-s,js(n,y,v,3*C,2*C),u.setRenderTarget(n),u.render(h,al)}_blur(n,a,s,u,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,s,u,"latitudinal",f),this._halfBlur(d,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,d,h){const g=this._renderer,x=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,m=this._lodMeshes[u];m.material=x;const S=x.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*kr-1),C=f/A,y=isFinite(f)?1+Math.floor(_*C):kr;y>kr&&pe(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${kr}`);const v=[];let z=0;for(let N=0;N<kr;++N){const j=N/C,D=Math.exp(-j*j/2);v.push(D),N===0?z+=D:N<y&&(z+=2*D)}for(let N=0;N<v.length;N++)v[N]=v[N]/z;S.envMap.value=n.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:O}=this;S.dTheta.value=A,S.mipInt.value=O-s;const F=this._sizeLods[u],V=3*F*(u>O-lr?u-O+lr:0),L=4*(this._cubeSize-F);js(a,V,L,3*F,2*F),g.setRenderTarget(a),g.render(m,al)}}function y1(o){const n=[],a=[],s=[];let u=o;const f=o-lr+1+g_.length;for(let d=0;d<f;d++){const h=Math.pow(2,u);n.push(h);let g=1/h;d>o-lr?g=g_[d-o+lr-1]:d===0&&(g=0),a.push(g);const x=1/(h-2),_=-x,m=1+x,S=[_,_,m,_,m,m,_,_,m,m,_,m],M=6,A=6,C=3,y=2,v=1,z=new Float32Array(C*A*M),O=new Float32Array(y*A*M),F=new Float32Array(v*A*M);for(let L=0;L<M;L++){const N=L%3*2/3-1,j=L>2?0:-1,D=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];z.set(D,C*A*L),O.set(S,y*A*L);const R=[L,L,L,L,L,L];F.set(R,v*A*L)}const V=new fr;V.setAttribute("position",new ji(z,C)),V.setAttribute("uv",new ji(O,y)),V.setAttribute("faceIndex",new ji(F,v)),s.push(new Aa(V,null)),u>lr&&u--}return{lodMeshes:s,sizeLods:n,sigmas:a}}function S_(o,n,a){const s=new Zr(o,n,a);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function js(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function M1(o,n,a){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function b1(o,n,a){const s=new Float32Array(kr),u=new ct(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function y_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function M_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E1(o){let n=new WeakMap,a=null;function s(h){if(h&&h.isTexture){const g=h.mapping,x=g===Fh||g===Hh,_=g===Js||g===$s;if(x||_){let m=n.get(h);const S=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return a===null&&(a=new v_(o)),m=x?a.fromEquirectangular(h,m):a.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return x&&M&&M.height>0||_&&M&&u(M)?(a===null&&(a=new v_(o)),m=x?a.fromEquirectangular(h):a.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function u(h){let g=0;const x=6;for(let _=0;_<x;_++)h[_]!==void 0&&g++;return g===x}function f(h){const g=h.target;g.removeEventListener("dispose",f);const x=n.get(g);x!==void 0&&(n.delete(g),x.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:d}}function T1(o){const n={};function a(s){if(n[s]!==void 0)return n[s];const u=o.getExtension(s);return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&cl("WebGLRenderer: "+s+" extension not supported."),u}}}function A1(o,n,a,s){const u={},f=new WeakMap;function d(m){const S=m.target;S.index!==null&&n.remove(S.index);for(const A in S.attributes)n.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete u[S.id];const M=f.get(S);M&&(n.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function h(m,S){return u[S.id]===!0||(S.addEventListener("dispose",d),u[S.id]=!0,a.memory.geometries++),S}function g(m){const S=m.attributes;for(const M in S)n.update(S[M],o.ARRAY_BUFFER)}function x(m){const S=[],M=m.index,A=m.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let O=0,F=z.length;O<F;O+=3){const V=z[O+0],L=z[O+1],N=z[O+2];S.push(V,L,L,N,N,V)}}else if(A!==void 0){const z=A.array;C=A.version;for(let O=0,F=z.length/3-1;O<F;O+=3){const V=O+0,L=O+1,N=O+2;S.push(V,L,L,N,N,V)}}else return;const y=new(Q_(S)?iv:nv)(S,1);y.version=C;const v=f.get(m);v&&n.remove(v),f.set(m,y)}function _(m){const S=f.get(m);if(S){const M=m.index;M!==null&&S.version<M.version&&x(m)}else x(m);return f.get(m)}return{get:h,update:g,getWireframeAttribute:_}}function R1(o,n,a){let s;function u(S){s=S}let f,d;function h(S){f=S.type,d=S.bytesPerElement}function g(S,M){o.drawElements(s,M,f,S*d),a.update(M,s,1)}function x(S,M,A){A!==0&&(o.drawElementsInstanced(s,M,f,S*d,A),a.update(M,s,A))}function _(S,M,A){if(A===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,A);let y=0;for(let v=0;v<A;v++)y+=M[v];a.update(y,s,1)}function m(S,M,A,C){if(A===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)x(S[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=M[z]*C[z];a.update(v,s,1)}}this.setMode=u,this.setIndex=h,this.render=g,this.renderInstances=x,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function C1(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(a.calls++,d){case o.TRIANGLES:a.triangles+=h*(f/3);break;case o.LINES:a.lines+=h*(f/2);break;case o.LINE_STRIP:a.lines+=h*(f-1);break;case o.LINE_LOOP:a.lines+=h*f;break;case o.POINTS:a.points+=h*f;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function D1(o,n,a){const s=new WeakMap,u=new on;function f(d,h,g){const x=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let S=s.get(h);if(S===void 0||S.count!==m){let R=function(){j.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),y===!0&&(F=3);let V=h.attributes.position.count*F,L=1;V>n.maxTextureSize&&(L=Math.ceil(V/n.maxTextureSize),V=n.maxTextureSize);const N=new Float32Array(V*L*4*m),j=new J_(N,V,L,m);j.type=ya,j.needsUpdate=!0;const D=F*4;for(let H=0;H<m;H++){const K=v[H],ot=z[H],ft=O[H],lt=V*L*4*H;for(let Y=0;Y<K.count;Y++){const at=Y*D;A===!0&&(u.fromBufferAttribute(K,Y),N[lt+at+0]=u.x,N[lt+at+1]=u.y,N[lt+at+2]=u.z,N[lt+at+3]=0),C===!0&&(u.fromBufferAttribute(ot,Y),N[lt+at+4]=u.x,N[lt+at+5]=u.y,N[lt+at+6]=u.z,N[lt+at+7]=0),y===!0&&(u.fromBufferAttribute(ft,Y),N[lt+at+8]=u.x,N[lt+at+9]=u.y,N[lt+at+10]=u.z,N[lt+at+11]=ft.itemSize===4?u.w:1)}}S={count:m,texture:j,size:new Ue(V,L)},s.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,a);else{let A=0;for(let y=0;y<x.length;y++)A+=x[y];const C=h.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",C),g.getUniforms().setValue(o,"morphTargetInfluences",x)}g.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),g.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function w1(o,n,a,s){let u=new WeakMap;function f(g){const x=s.render.frame,_=g.geometry,m=n.get(g,_);if(u.get(m)!==x&&(n.update(m),u.set(m,x)),g.isInstancedMesh&&(g.hasEventListener("dispose",h)===!1&&g.addEventListener("dispose",h),u.get(g)!==x&&(a.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&a.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,x))),g.isSkinnedMesh){const S=g.skeleton;u.get(S)!==x&&(S.update(),u.set(S,x))}return m}function d(){u=new WeakMap}function h(g){const x=g.target;x.removeEventListener("dispose",h),a.remove(x.instanceMatrix),x.instanceColor!==null&&a.remove(x.instanceColor)}return{update:f,dispose:d}}const dv=new Gn,b_=new lv(1,1),hv=new J_,pv=new n3,mv=new sv,E_=[],T_=[],A_=new Float32Array(16),R_=new Float32Array(9),C_=new Float32Array(4);function ao(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=E_[u];if(f===void 0&&(f=new Float32Array(u),E_[u]=f),n!==0){s.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,o[d].toArray(f,h)}return f}function gn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function _n(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function yc(o,n){let a=T_[n];a===void 0&&(a=new Int32Array(n),T_[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function U1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function N1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2fv(this.addr,n),_n(a,n)}}function L1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;o.uniform3fv(this.addr,n),_n(a,n)}}function O1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4fv(this.addr,n),_n(a,n)}}function z1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;C_.set(s),o.uniformMatrix2fv(this.addr,!1,C_),_n(a,s)}}function P1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;R_.set(s),o.uniformMatrix3fv(this.addr,!1,R_),_n(a,s)}}function I1(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(gn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),_n(a,n)}else{if(gn(a,s))return;A_.set(s),o.uniformMatrix4fv(this.addr,!1,A_),_n(a,s)}}function B1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function F1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2iv(this.addr,n),_n(a,n)}}function H1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3iv(this.addr,n),_n(a,n)}}function G1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4iv(this.addr,n),_n(a,n)}}function V1(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function X1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;o.uniform2uiv(this.addr,n),_n(a,n)}}function q1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;o.uniform3uiv(this.addr,n),_n(a,n)}}function k1(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;o.uniform4uiv(this.addr,n),_n(a,n)}}function Y1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(b_.compareFunction=K_,f=b_):f=dv,a.setTexture2D(n||f,u)}function W1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||pv,u)}function j1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||mv,u)}function Z1(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||hv,u)}function K1(o){switch(o){case 5126:return U1;case 35664:return N1;case 35665:return L1;case 35666:return O1;case 35674:return z1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return B1;case 35667:case 35671:return F1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return X1;case 36295:return q1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Z1}}function Q1(o,n){o.uniform1fv(this.addr,n)}function J1(o,n){const a=ao(n,this.size,2);o.uniform2fv(this.addr,a)}function $1(o,n){const a=ao(n,this.size,3);o.uniform3fv(this.addr,a)}function tT(o,n){const a=ao(n,this.size,4);o.uniform4fv(this.addr,a)}function eT(o,n){const a=ao(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function nT(o,n){const a=ao(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function iT(o,n){const a=ao(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function aT(o,n){o.uniform1iv(this.addr,n)}function rT(o,n){o.uniform2iv(this.addr,n)}function sT(o,n){o.uniform3iv(this.addr,n)}function oT(o,n){o.uniform4iv(this.addr,n)}function lT(o,n){o.uniform1uiv(this.addr,n)}function uT(o,n){o.uniform2uiv(this.addr,n)}function cT(o,n){o.uniform3uiv(this.addr,n)}function fT(o,n){o.uniform4uiv(this.addr,n)}function dT(o,n,a){const s=this.cache,u=n.length,f=yc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)a.setTexture2D(n[d]||dv,f[d])}function hT(o,n,a){const s=this.cache,u=n.length,f=yc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)a.setTexture3D(n[d]||pv,f[d])}function pT(o,n,a){const s=this.cache,u=n.length,f=yc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)a.setTextureCube(n[d]||mv,f[d])}function mT(o,n,a){const s=this.cache,u=n.length,f=yc(a,u);gn(s,f)||(o.uniform1iv(this.addr,f),_n(s,f));for(let d=0;d!==u;++d)a.setTexture2DArray(n[d]||hv,f[d])}function xT(o){switch(o){case 5126:return Q1;case 35664:return J1;case 35665:return $1;case 35666:return tT;case 35674:return eT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return aT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return lT;case 36294:return uT;case 36295:return cT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}class gT{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=K1(a.type)}}class _T{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=xT(a.type)}}class vT{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(n,a[h.id],s)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function D_(o,n){o.seq.push(n),o.map[n.id]=n}function ST(o,n,a){const s=o.name,u=s.length;for(Dh.lastIndex=0;;){const f=Dh.exec(s),d=Dh.lastIndex;let h=f[1];const g=f[2]==="]",x=f[3];if(g&&(h=h|0),x===void 0||x==="["&&d+2===u){D_(a,x===void 0?new gT(h,o,n):new _T(h,o,n));break}else{let m=a.map[h];m===void 0&&(m=new vT(h),D_(a,m)),a=m}}}class hc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),d=n.getUniformLocation(a,f.name);ST(f,d,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,d=a.length;f!==d;++f){const h=a[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(n,g.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const d=n[u];d.id in a&&s.push(d)}return s}}function w_(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const yT=37297;let MT=0;function bT(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return s.join(`
`)}const U_=new me;function ET(o){Le._getMatrix(U_,Le.workingColorSpace,o);const n=`mat3( ${U_.elements.map(a=>a.toFixed(4))} )`;switch(Le.getTransfer(o)){case mc:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function N_(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),f=(o.getShaderInfoLog(n)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return a.toUpperCase()+`

`+f+`

`+bT(o.getShaderSource(n),h)}else return f}function TT(o,n){const a=ET(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function AT(o,n){let a;switch(n){case DM:a="Linear";break;case wM:a="Reinhard";break;case UM:a="Cineon";break;case NM:a="ACESFilmic";break;case OM:a="AgX";break;case zM:a="Neutral";break;case LM:a="Custom";break;default:pe("WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const lc=new ct;function RT(){Le.getLuminanceCoefficients(lc);const o=lc.x.toFixed(4),n=lc.y.toFixed(4),a=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function DT(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function wT(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:o.getAttribLocation(n,d),locationSize:h}}return a}function rl(o){return o!==""}function L_(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function O_(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const UT=/^[ \t]*#include +<([\w\d./]+)>/gm;function _0(o){return o.replace(UT,LT)}const NT=new Map;function LT(o,n){let a=ge[n];if(a===void 0){const s=NT.get(n);if(s!==void 0)a=ge[s],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return _0(a)}const OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(o){return o.replace(OT,zT)}function zT(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function P_(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function PT(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===H_?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===lM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===_a&&(n="SHADOWMAP_TYPE_VSM"),n}function IT(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Js:case $s:n="ENVMAP_TYPE_CUBE";break;case _c:n="ENVMAP_TYPE_CUBE_UV";break}return n}function BT(o){let n="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===$s&&(n="ENVMAP_MODE_REFRACTION"),n}function FT(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case G_:n="ENVMAP_BLENDING_MULTIPLY";break;case RM:n="ENVMAP_BLENDING_MIX";break;case CM:n="ENVMAP_BLENDING_ADD";break}return n}function HT(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function GT(o,n,a,s){const u=o.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const g=PT(a),x=IT(a),_=BT(a),m=FT(a),S=HT(a),M=CT(a),A=DT(f),C=u.createProgram();let y,v,z=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(rl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A].filter(rl).join(`
`),v.length>0&&(v+=`
`)):(y=[P_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),v=[P_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,A,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+x:"",a.envMap?"#define "+_:"",a.envMap?"#define "+m:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+g:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ur?"#define TONE_MAPPING":"",a.toneMapping!==ur?ge.tonemapping_pars_fragment:"",a.toneMapping!==ur?AT("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,TT("linearToOutputTexel",a.outputColorSpace),RT(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(rl).join(`
`)),d=_0(d),d=L_(d,a),d=O_(d,a),h=_0(h),h=L_(h,a),h=O_(h,a),d=z_(d),h=z_(h),a.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",a.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=z+y+d,F=z+v+h,V=w_(u,u.VERTEX_SHADER,O),L=w_(u,u.FRAGMENT_SHADER,F);u.attachShader(C,V),u.attachShader(C,L),a.index0AttributeName!==void 0?u.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(C,0,"position"),u.linkProgram(C);function N(H){if(o.debug.checkShaderErrors){const K=u.getProgramInfoLog(C)||"",ot=u.getShaderInfoLog(V)||"",ft=u.getShaderInfoLog(L)||"",lt=K.trim(),Y=ot.trim(),at=ft.trim();let Z=!0,xt=!0;if(u.getProgramParameter(C,u.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,C,V,L);else{const _t=N_(u,V,"vertex"),Ht=N_(u,L,"fragment");sn("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(C,u.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+_t+`
`+Ht)}else lt!==""?pe("WebGLProgram: Program Info Log:",lt):(Y===""||at==="")&&(xt=!1);xt&&(H.diagnostics={runnable:Z,programLog:lt,vertexShader:{log:Y,prefix:y},fragmentShader:{log:at,prefix:v}})}u.deleteShader(V),u.deleteShader(L),j=new hc(u,C),D=wT(u,C)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(C,yT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=MT++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=L,this}let VT=0;class XT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),d=this._getShaderCacheForMaterial(n);return d.has(u)===!1&&(d.add(u),u.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new qT(n),a.set(n,s)),s}}class qT{constructor(n){this.id=VT++,this.code=n,this.usedTimes=0}}function kT(o,n,a,s,u,f,d){const h=new $_,g=new XT,x=new Set,_=[],m=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return x.add(D),D===0?"uv":`uv${D}`}function y(D,R,H,K,ot){const ft=K.fog,lt=ot.geometry,Y=D.isMeshStandardMaterial?K.environment:null,at=(D.isMeshStandardMaterial?a:n).get(D.envMap||Y),Z=at&&at.mapping===_c?at.image.height:null,xt=A[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&pe("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const _t=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ht=_t!==void 0?_t.length:0;let ue=0;lt.morphAttributes.position!==void 0&&(ue=1),lt.morphAttributes.normal!==void 0&&(ue=2),lt.morphAttributes.color!==void 0&&(ue=3);let ye,P,dt,J;if(xt){const Ce=Yi[xt];ye=Ce.vertexShader,P=Ce.fragmentShader}else ye=D.vertexShader,P=D.fragmentShader,g.update(D),dt=g.getVertexShaderID(D),J=g.getFragmentShaderID(D);const nt=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),Ot=ot.isInstancedMesh===!0,At=ot.isBatchedMesh===!0,Mt=!!D.map,Gt=!!D.matcap,oe=!!at,Ve=!!D.aoMap,B=!!D.lightMap,le=!!D.bumpMap,Jt=!!D.normalMap,te=!!D.displacementMap,It=!!D.emissiveMap,Ie=!!D.metalnessMap,kt=!!D.roughnessMap,re=D.anisotropy>0,w=D.clearcoat>0,E=D.dispersion>0,et=D.iridescence>0,mt=D.sheen>0,vt=D.transmission>0,ut=re&&!!D.anisotropyMap,Vt=w&&!!D.clearcoatMap,Ut=w&&!!D.clearcoatNormalMap,Kt=w&&!!D.clearcoatRoughnessMap,Yt=et&&!!D.iridescenceMap,St=et&&!!D.iridescenceThicknessMap,Rt=mt&&!!D.sheenColorMap,ee=mt&&!!D.sheenRoughnessMap,$t=!!D.specularMap,Bt=!!D.specularColorMap,se=!!D.specularIntensityMap,I=vt&&!!D.transmissionMap,Nt=vt&&!!D.thicknessMap,Ct=!!D.gradientMap,Dt=!!D.alphaMap,bt=D.alphaTest>0,gt=!!D.alphaHash,Xt=!!D.extensions;let ce=ur;D.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ye={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:ye,fragmentShader:P,defines:D.defines,customVertexShaderID:dt,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:At,batchingColor:At&&ot._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&ot.instanceColor!==null,instancingMorph:Ot&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:to,alphaToCoverage:!!D.alphaToCoverage,map:Mt,matcap:Gt,envMap:oe,envMapMode:oe&&at.mapping,envMapCubeUVHeight:Z,aoMap:Ve,lightMap:B,bumpMap:le,normalMap:Jt,displacementMap:S&&te,emissiveMap:It,normalMapObjectSpace:Jt&&D.normalMapType===HM,normalMapTangentSpace:Jt&&D.normalMapType===FM,metalnessMap:Ie,roughnessMap:kt,anisotropy:re,anisotropyMap:ut,clearcoat:w,clearcoatMap:Vt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:E,iridescence:et,iridescenceMap:Yt,iridescenceThicknessMap:St,sheen:mt,sheenColorMap:Rt,sheenRoughnessMap:ee,specularMap:$t,specularColorMap:Bt,specularIntensityMap:se,transmission:vt,transmissionMap:I,thicknessMap:Nt,gradientMap:Ct,opaque:D.transparent===!1&&D.blending===Zs&&D.alphaToCoverage===!1,alphaMap:Dt,alphaTest:bt,alphaHash:gt,combine:D.combine,mapUv:Mt&&C(D.map.channel),aoMapUv:Ve&&C(D.aoMap.channel),lightMapUv:B&&C(D.lightMap.channel),bumpMapUv:le&&C(D.bumpMap.channel),normalMapUv:Jt&&C(D.normalMap.channel),displacementMapUv:te&&C(D.displacementMap.channel),emissiveMapUv:It&&C(D.emissiveMap.channel),metalnessMapUv:Ie&&C(D.metalnessMap.channel),roughnessMapUv:kt&&C(D.roughnessMap.channel),anisotropyMapUv:ut&&C(D.anisotropyMap.channel),clearcoatMapUv:Vt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:ee&&C(D.sheenRoughnessMap.channel),specularMapUv:$t&&C(D.specularMap.channel),specularColorMapUv:Bt&&C(D.specularColorMap.channel),specularIntensityMapUv:se&&C(D.specularIntensityMap.channel),transmissionMapUv:I&&C(D.transmissionMap.channel),thicknessMapUv:Nt&&C(D.thicknessMap.channel),alphaMapUv:Dt&&C(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Jt||re),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!lt.attributes.uv&&(Mt||Dt),fog:!!ft,useFog:D.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:yt,skinning:ot.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:ue,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Mt&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===qe,decodeVideoTextureEmissive:It&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===qe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===va,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Xt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&D.extensions.multiDraw===!0||At)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ye.vertexUv1s=x.has(1),Ye.vertexUv2s=x.has(2),Ye.vertexUv3s=x.has(3),x.clear(),Ye}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(z(R,D),O(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function z(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function O(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function F(D){const R=A[D.type];let H;if(R){const K=Yi[R];H=x3.clone(K.uniforms)}else H=D.uniforms;return H}function V(D,R){let H;for(let K=0,ot=_.length;K<ot;K++){const ft=_[K];if(ft.cacheKey===R){H=ft,++H.usedTimes;break}}return H===void 0&&(H=new GT(o,R,D,f),_.push(H)),H}function L(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function N(D){g.remove(D)}function j(){g.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:F,acquireProgram:V,releaseProgram:L,releaseShaderCache:N,programs:_,dispose:j}}function YT(){let o=new WeakMap;function n(d){return o.has(d)}function a(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function WT(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function I_(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function B_(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function d(m,S,M,A,C,y){let v=o[n];return v===void 0?(v={id:m.id,object:m,geometry:S,material:M,groupOrder:A,renderOrder:m.renderOrder,z:C,group:y},o[n]=v):(v.id=m.id,v.object=m,v.geometry=S,v.material=M,v.groupOrder=A,v.renderOrder=m.renderOrder,v.z=C,v.group=y),n++,v}function h(m,S,M,A,C,y){const v=d(m,S,M,A,C,y);M.transmission>0?s.push(v):M.transparent===!0?u.push(v):a.push(v)}function g(m,S,M,A,C,y){const v=d(m,S,M,A,C,y);M.transmission>0?s.unshift(v):M.transparent===!0?u.unshift(v):a.unshift(v)}function x(m,S){a.length>1&&a.sort(m||WT),s.length>1&&s.sort(S||I_),u.length>1&&u.sort(S||I_)}function _(){for(let m=n,S=o.length;m<S;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:h,unshift:g,finish:_,sort:x}}function jT(){let o=new WeakMap;function n(s,u){const f=o.get(s);let d;return f===void 0?(d=new B_,o.set(s,[d])):u>=f.length?(d=new B_,f.push(d)):d=f[u],d}function a(){o=new WeakMap}return{get:n,dispose:a}}function ZT(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new ct,color:new ke};break;case"SpotLight":a={position:new ct,direction:new ct,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new ct,color:new ke,distance:0,decay:0};break;case"HemisphereLight":a={direction:new ct,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":a={color:new ke,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[n.id]=a,a}}}function KT(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let QT=0;function JT(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function $T(o){const n=new ZT,a=KT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)s.probe.push(new ct);const u=new ct,f=new xn,d=new xn;function h(x){let _=0,m=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,v=0,z=0,O=0,F=0,V=0,L=0,N=0;x.sort(JT);for(let D=0,R=x.length;D<R;D++){const H=x[D],K=H.color,ot=H.intensity,ft=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=K.r*ot,m+=K.g*ot,S+=K.b*ot;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(H.sh.coefficients[Y],ot);N++}else if(H.isDirectionalLight){const Y=n.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const at=H.shadow,Z=a.get(H);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=H.shadow.matrix,z++}s.directional[M]=Y,M++}else if(H.isSpotLight){const Y=n.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(K).multiplyScalar(ot),Y.distance=ft,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,s.spot[C]=Y;const at=H.shadow;if(H.map&&(s.spotLightMap[V]=H.map,V++,at.updateMatrices(H),H.castShadow&&L++),s.spotLightMatrix[C]=at.matrix,H.castShadow){const Z=a.get(H);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=lt,F++}C++}else if(H.isRectAreaLight){const Y=n.get(H);Y.color.copy(K).multiplyScalar(ot),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=Y,y++}else if(H.isPointLight){const Y=n.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const at=H.shadow,Z=a.get(H);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,s.pointShadow[A]=Z,s.pointShadowMap[A]=lt,s.pointShadowMatrix[A]=H.shadow.matrix,O++}s.point[A]=Y,A++}else if(H.isHemisphereLight){const Y=n.get(H);Y.skyColor.copy(H.color).multiplyScalar(ot),Y.groundColor.copy(H.groundColor).multiplyScalar(ot),s.hemi[v]=Y,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==M||j.pointLength!==A||j.spotLength!==C||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==z||j.numPointShadows!==O||j.numSpotShadows!==F||j.numSpotMaps!==V||j.numLightProbes!==N)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=F+V-L,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=N,j.directionalLength=M,j.pointLength=A,j.spotLength=C,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=z,j.numPointShadows=O,j.numSpotShadows=F,j.numSpotMaps=V,j.numLightProbes=N,s.version=QT++)}function g(x,_){let m=0,S=0,M=0,A=0,C=0;const y=_.matrixWorldInverse;for(let v=0,z=x.length;v<z;v++){const O=x[v];if(O.isDirectionalLight){const F=s.directional[m];F.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(y),m++}else if(O.isSpotLight){const F=s.spot[M];F.position.setFromMatrixPosition(O.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),F.direction.sub(u),F.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const F=s.rectArea[A];F.position.setFromMatrixPosition(O.matrixWorld),F.position.applyMatrix4(y),d.identity(),f.copy(O.matrixWorld),f.premultiply(y),d.extractRotation(f),F.halfWidth.set(O.width*.5,0,0),F.halfHeight.set(0,O.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(O.isPointLight){const F=s.point[S];F.position.setFromMatrixPosition(O.matrixWorld),F.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const F=s.hemi[C];F.direction.setFromMatrixPosition(O.matrixWorld),F.direction.transformDirection(y),C++}}}return{setup:h,setupView:g,state:s}}function F_(o){const n=new $T(o),a=[],s=[];function u(_){x.camera=_,a.length=0,s.length=0}function f(_){a.push(_)}function d(_){s.push(_)}function h(){n.setup(a)}function g(_){n.setupView(a,_)}const x={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:x,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:d}}function t2(o){let n=new WeakMap;function a(u,f=0){const d=n.get(u);let h;return d===void 0?(h=new F_(o),n.set(u,[h])):f>=d.length?(h=new F_(o),d.push(h)):h=d[f],h}function s(){n=new WeakMap}return{get:a,dispose:s}}const e2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i2(o,n,a){let s=new ov;const u=new Ue,f=new Ue,d=new on,h=new R3({depthPacking:BM}),g=new C3,x={},_=a.maxTextureSize,m={[cr]:Kn,[Kn]:cr,[va]:va},S=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:e2,fragmentShader:n2}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new fr;A.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Aa(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H_;let v=this.type;this.render=function(L,N,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Ma),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=v!==_a&&this.type===_a,ft=v===_a&&this.type!==_a;for(let lt=0,Y=L.length;lt<Y;lt++){const at=L[lt],Z=at.shadow;if(Z===void 0){pe("WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;u.copy(Z.mapSize);const xt=Z.getFrameExtents();if(u.multiply(xt),f.copy(Z.mapSize),(u.x>_||u.y>_)&&(u.x>_&&(f.x=Math.floor(_/xt.x),u.x=f.x*xt.x,Z.mapSize.x=f.x),u.y>_&&(f.y=Math.floor(_/xt.y),u.y=f.y*xt.y,Z.mapSize.y=f.y)),Z.map===null||ot===!0||ft===!0){const Ht=this.type!==_a?{minFilter:li,magFilter:li}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Zr(u.x,u.y,Ht),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const _t=Z.getViewportCount();for(let Ht=0;Ht<_t;Ht++){const ue=Z.getViewport(Ht);d.set(f.x*ue.x,f.y*ue.y,f.x*ue.z,f.y*ue.w),K.viewport(d),Z.updateMatrices(at,Ht),s=Z.getFrustum(),F(N,j,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===_a&&z(Z,j),Z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,H)};function z(L,N){const j=n.update(C);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zr(u.x,u.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(N,null,j,S,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(N,null,j,M,C,null)}function O(L,N,j,D){let R=null;const H=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)R=H;else if(R=j.isPointLight===!0?g:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=R.uuid,ot=N.uuid;let ft=x[K];ft===void 0&&(ft={},x[K]=ft);let lt=ft[ot];lt===void 0&&(lt=R.clone(),ft[ot]=lt,N.addEventListener("dispose",V)),R=lt}if(R.visible=N.visible,R.wireframe=N.wireframe,D===_a?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:m[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=o.properties.get(R);K.light=j}return R}function F(L,N,j,D,R){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===_a)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const ot=n.update(L),ft=L.material;if(Array.isArray(ft)){const lt=ot.groups;for(let Y=0,at=lt.length;Y<at;Y++){const Z=lt[Y],xt=ft[Z.materialIndex];if(xt&&xt.visible){const _t=O(L,xt,D,R);L.onBeforeShadow(o,L,N,j,ot,_t,Z),o.renderBufferDirect(j,null,ot,_t,L,Z),L.onAfterShadow(o,L,N,j,ot,_t,Z)}}}else if(ft.visible){const lt=O(L,ft,D,R);L.onBeforeShadow(o,L,N,j,ot,lt,null),o.renderBufferDirect(j,null,ot,lt,L,null),L.onAfterShadow(o,L,N,j,ot,lt,null)}}const K=L.children;for(let ot=0,ft=K.length;ot<ft;ot++)F(K[ot],N,j,D,R)}function V(L){L.target.removeEventListener("dispose",V);for(const j in x){const D=x[j],R=L.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const a2={[Nh]:Lh,[Oh]:Ih,[zh]:Bh,[Qs]:Ph,[Lh]:Nh,[Ih]:Oh,[Bh]:zh,[Ph]:Qs};function r2(o,n){function a(){let I=!1;const Nt=new on;let Ct=null;const Dt=new on(0,0,0,0);return{setMask:function(bt){Ct!==bt&&!I&&(o.colorMask(bt,bt,bt,bt),Ct=bt)},setLocked:function(bt){I=bt},setClear:function(bt,gt,Xt,ce,Ye){Ye===!0&&(bt*=ce,gt*=ce,Xt*=ce),Nt.set(bt,gt,Xt,ce),Dt.equals(Nt)===!1&&(o.clearColor(bt,gt,Xt,ce),Dt.copy(Nt))},reset:function(){I=!1,Ct=null,Dt.set(-1,0,0,0)}}}function s(){let I=!1,Nt=!1,Ct=null,Dt=null,bt=null;return{setReversed:function(gt){if(Nt!==gt){const Xt=n.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Nt=gt;const ce=bt;bt=null,this.setClear(ce)}},getReversed:function(){return Nt},setTest:function(gt){gt?nt(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(gt){Ct!==gt&&!I&&(o.depthMask(gt),Ct=gt)},setFunc:function(gt){if(Nt&&(gt=a2[gt]),Dt!==gt){switch(gt){case Nh:o.depthFunc(o.NEVER);break;case Lh:o.depthFunc(o.ALWAYS);break;case Oh:o.depthFunc(o.LESS);break;case Qs:o.depthFunc(o.LEQUAL);break;case zh:o.depthFunc(o.EQUAL);break;case Ph:o.depthFunc(o.GEQUAL);break;case Ih:o.depthFunc(o.GREATER);break;case Bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Dt=gt}},setLocked:function(gt){I=gt},setClear:function(gt){bt!==gt&&(Nt&&(gt=1-gt),o.clearDepth(gt),bt=gt)},reset:function(){I=!1,Ct=null,Dt=null,bt=null,Nt=!1}}}function u(){let I=!1,Nt=null,Ct=null,Dt=null,bt=null,gt=null,Xt=null,ce=null,Ye=null;return{setTest:function(Ce){I||(Ce?nt(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(Ce){Nt!==Ce&&!I&&(o.stencilMask(Ce),Nt=Ce)},setFunc:function(Ce,Je,ln){(Ct!==Ce||Dt!==Je||bt!==ln)&&(o.stencilFunc(Ce,Je,ln),Ct=Ce,Dt=Je,bt=ln)},setOp:function(Ce,Je,ln){(gt!==Ce||Xt!==Je||ce!==ln)&&(o.stencilOp(Ce,Je,ln),gt=Ce,Xt=Je,ce=ln)},setLocked:function(Ce){I=Ce},setClear:function(Ce){Ye!==Ce&&(o.clearStencil(Ce),Ye=Ce)},reset:function(){I=!1,Nt=null,Ct=null,Dt=null,bt=null,gt=null,Xt=null,ce=null,Ye=null}}}const f=new a,d=new s,h=new u,g=new WeakMap,x=new WeakMap;let _={},m={},S=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,O=null,F=null,V=null,L=null,N=new ke(0,0,0),j=0,D=!1,R=null,H=null,K=null,ot=null,ft=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,at=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=at>=2);let xt=null,_t={};const Ht=o.getParameter(o.SCISSOR_BOX),ue=o.getParameter(o.VIEWPORT),ye=new on().fromArray(Ht),P=new on().fromArray(ue);function dt(I,Nt,Ct,Dt){const bt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(I,gt),o.texParameteri(I,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(I,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<Ct;Xt++)I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Dt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Nt+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return gt}const J={};J[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),nt(o.DEPTH_TEST),d.setFunc(Qs),le(!1),Jt(kg),nt(o.CULL_FACE),Ve(Ma);function nt(I){_[I]!==!0&&(o.enable(I),_[I]=!0)}function yt(I){_[I]!==!1&&(o.disable(I),_[I]=!1)}function Ot(I,Nt){return m[I]!==Nt?(o.bindFramebuffer(I,Nt),m[I]=Nt,I===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Nt),I===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function At(I,Nt){let Ct=M,Dt=!1;if(I){Ct=S.get(Nt),Ct===void 0&&(Ct=[],S.set(Nt,Ct));const bt=I.textures;if(Ct.length!==bt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Xt=bt.length;gt<Xt;gt++)Ct[gt]=o.COLOR_ATTACHMENT0+gt;Ct.length=bt.length,Dt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Dt=!0);Dt&&o.drawBuffers(Ct)}function Mt(I){return A!==I?(o.useProgram(I),A=I,!0):!1}const Gt={[qr]:o.FUNC_ADD,[cM]:o.FUNC_SUBTRACT,[fM]:o.FUNC_REVERSE_SUBTRACT};Gt[dM]=o.MIN,Gt[hM]=o.MAX;const oe={[pM]:o.ZERO,[mM]:o.ONE,[xM]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[MM]:o.SRC_ALPHA_SATURATE,[SM]:o.DST_COLOR,[_M]:o.DST_ALPHA,[gM]:o.ONE_MINUS_SRC_COLOR,[Uh]:o.ONE_MINUS_SRC_ALPHA,[yM]:o.ONE_MINUS_DST_COLOR,[vM]:o.ONE_MINUS_DST_ALPHA,[bM]:o.CONSTANT_COLOR,[EM]:o.ONE_MINUS_CONSTANT_COLOR,[TM]:o.CONSTANT_ALPHA,[AM]:o.ONE_MINUS_CONSTANT_ALPHA};function Ve(I,Nt,Ct,Dt,bt,gt,Xt,ce,Ye,Ce){if(I===Ma){C===!0&&(yt(o.BLEND),C=!1);return}if(C===!1&&(nt(o.BLEND),C=!0),I!==uM){if(I!==y||Ce!==D){if((v!==qr||F!==qr)&&(o.blendEquation(o.FUNC_ADD),v=qr,F=qr),Ce)switch(I){case Zs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFunc(o.ONE,o.ONE);break;case Wg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",I);break}else switch(I){case Zs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Yg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Wg:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",I);break}z=null,O=null,V=null,L=null,N.set(0,0,0),j=0,y=I,D=Ce}return}bt=bt||Nt,gt=gt||Ct,Xt=Xt||Dt,(Nt!==v||bt!==F)&&(o.blendEquationSeparate(Gt[Nt],Gt[bt]),v=Nt,F=bt),(Ct!==z||Dt!==O||gt!==V||Xt!==L)&&(o.blendFuncSeparate(oe[Ct],oe[Dt],oe[gt],oe[Xt]),z=Ct,O=Dt,V=gt,L=Xt),(ce.equals(N)===!1||Ye!==j)&&(o.blendColor(ce.r,ce.g,ce.b,Ye),N.copy(ce),j=Ye),y=I,D=!1}function B(I,Nt){I.side===va?yt(o.CULL_FACE):nt(o.CULL_FACE);let Ct=I.side===Kn;Nt&&(Ct=!Ct),le(Ct),I.blending===Zs&&I.transparent===!1?Ve(Ma):Ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),f.setMask(I.colorWrite);const Dt=I.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(I){R!==I&&(I?o.frontFace(o.CW):o.frontFace(o.CCW),R=I)}function Jt(I){I!==sM?(nt(o.CULL_FACE),I!==H&&(I===kg?o.cullFace(o.BACK):I===oM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),H=I}function te(I){I!==K&&(Y&&o.lineWidth(I),K=I)}function It(I,Nt,Ct){I?(nt(o.POLYGON_OFFSET_FILL),(ot!==Nt||ft!==Ct)&&(o.polygonOffset(Nt,Ct),ot=Nt,ft=Ct)):yt(o.POLYGON_OFFSET_FILL)}function Ie(I){I?nt(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function kt(I){I===void 0&&(I=o.TEXTURE0+lt-1),xt!==I&&(o.activeTexture(I),xt=I)}function re(I,Nt,Ct){Ct===void 0&&(xt===null?Ct=o.TEXTURE0+lt-1:Ct=xt);let Dt=_t[Ct];Dt===void 0&&(Dt={type:void 0,texture:void 0},_t[Ct]=Dt),(Dt.type!==I||Dt.texture!==Nt)&&(xt!==Ct&&(o.activeTexture(Ct),xt=Ct),o.bindTexture(I,Nt||J[I]),Dt.type=I,Dt.texture=Nt)}function w(){const I=_t[xt];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function mt(){try{o.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function vt(){try{o.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Ut(){try{o.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Kt(){try{o.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Yt(){try{o.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function St(){try{o.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Rt(I){ye.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),ye.copy(I))}function ee(I){P.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),P.copy(I))}function $t(I,Nt){let Ct=x.get(Nt);Ct===void 0&&(Ct=new WeakMap,x.set(Nt,Ct));let Dt=Ct.get(I);Dt===void 0&&(Dt=o.getUniformBlockIndex(Nt,I.name),Ct.set(I,Dt))}function Bt(I,Nt){const Dt=x.get(Nt).get(I);g.get(Nt)!==Dt&&(o.uniformBlockBinding(Nt,Dt,I.__bindingPointIndex),g.set(Nt,Dt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,_t={},m={},S=new WeakMap,M=[],A=null,C=!1,y=null,v=null,z=null,O=null,F=null,V=null,L=null,N=new ke(0,0,0),j=0,D=!1,R=null,H=null,K=null,ot=null,ft=null,ye.set(0,0,o.canvas.width,o.canvas.height),P.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:nt,disable:yt,bindFramebuffer:Ot,drawBuffers:At,useProgram:Mt,setBlending:Ve,setMaterial:B,setFlipSided:le,setCullFace:Jt,setLineWidth:te,setPolygonOffset:It,setScissorTest:Ie,activeTexture:kt,bindTexture:re,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Yt,texImage3D:St,updateUBOMapping:$t,uniformBlockBinding:Bt,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:mt,texSubImage3D:vt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Vt,scissor:Rt,viewport:ee,reset:se}}function s2(o,n,a,s,u,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new Ue,_=new WeakMap;let m;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,E){return M?new OffscreenCanvas(w,E):gc("canvas")}function C(w,E,et){let mt=1;const vt=re(w);if((vt.width>et||vt.height>et)&&(mt=et/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ut=Math.floor(mt*vt.width),Vt=Math.floor(mt*vt.height);m===void 0&&(m=A(ut,Vt));const Ut=E?A(ut,Vt):m;return Ut.width=ut,Ut.height=Vt,Ut.getContext("2d").drawImage(w,0,0,ut,Vt),pe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+Vt+")."),Ut}else return"data"in w&&pe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),w;return w}function y(w){return w.generateMipmaps}function v(w){o.generateMipmap(w)}function z(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(w,E,et,mt,vt=!1){if(w!==null){if(o[w]!==void 0)return o[w];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Vt=vt?mc:Le.getTransfer(mt);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Vt===qe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&n.get("EXT_color_buffer_float"),ut}function F(w,E){let et;return w?E===null||E===jr||E===ol?et=o.DEPTH24_STENCIL8:E===ya?et=o.DEPTH32F_STENCIL8:E===sl&&(et=o.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===jr||E===ol?et=o.DEPTH_COMPONENT24:E===ya?et=o.DEPTH_COMPONENT32F:E===sl&&(et=o.DEPTH_COMPONENT16),et}function V(w,E){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==li&&w.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function L(w){const E=w.target;E.removeEventListener("dispose",L),j(E),E.isVideoTexture&&_.delete(E)}function N(w){const E=w.target;E.removeEventListener("dispose",N),R(E)}function j(w){const E=s.get(w);if(E.__webglInit===void 0)return;const et=w.source,mt=S.get(et);if(mt){const vt=mt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(w),Object.keys(mt).length===0&&S.delete(et)}s.remove(w)}function D(w){const E=s.get(w);o.deleteTexture(E.__webglTexture);const et=w.source,mt=S.get(et);delete mt[E.__cacheKey],d.memory.textures--}function R(w){const E=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(E.__webglFramebuffer[mt]))for(let vt=0;vt<E.__webglFramebuffer[mt].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[mt][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[mt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[mt])}else{if(Array.isArray(E.__webglFramebuffer))for(let mt=0;mt<E.__webglFramebuffer.length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[mt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let mt=0;mt<E.__webglColorRenderbuffer.length;mt++)E.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[mt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=w.textures;for(let mt=0,vt=et.length;mt<vt;mt++){const ut=s.get(et[mt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),d.memory.textures--),s.remove(et[mt])}s.remove(w)}let H=0;function K(){H=0}function ot(){const w=H;return w>=u.maxTextures&&pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+u.maxTextures),H+=1,w}function ft(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function lt(w,E){const et=s.get(w);if(w.isVideoTexture&&Ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&et.__version!==w.version){const mt=w.image;if(mt===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,w,E);return}}else w.isExternalTexture&&(et.__webglTexture=w.sourceTexture?w.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function Y(w,E){const et=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&et.__version!==w.version){J(et,w,E);return}else w.isExternalTexture&&(et.__webglTexture=w.sourceTexture?w.sourceTexture:null);a.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function at(w,E){const et=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&et.__version!==w.version){J(et,w,E);return}a.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function Z(w,E){const et=s.get(w);if(w.version>0&&et.__version!==w.version){nt(et,w,E);return}a.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const xt={[Gh]:o.REPEAT,[Sa]:o.CLAMP_TO_EDGE,[Vh]:o.MIRRORED_REPEAT},_t={[li]:o.NEAREST,[PM]:o.NEAREST_MIPMAP_NEAREST,[Vu]:o.NEAREST_MIPMAP_LINEAR,[yi]:o.LINEAR,[th]:o.LINEAR_MIPMAP_NEAREST,[Yr]:o.LINEAR_MIPMAP_LINEAR},Ht={[GM]:o.NEVER,[WM]:o.ALWAYS,[VM]:o.LESS,[K_]:o.LEQUAL,[XM]:o.EQUAL,[YM]:o.GEQUAL,[qM]:o.GREATER,[kM]:o.NOTEQUAL};function ue(w,E){if(E.type===ya&&n.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===th||E.magFilter===Vu||E.magFilter===Yr||E.minFilter===yi||E.minFilter===th||E.minFilter===Vu||E.minFilter===Yr)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,xt[E.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,_t[E.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,Ht[E.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==Vu&&E.minFilter!==Yr||E.type===ya&&n.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=n.get("EXT_texture_filter_anisotropic");o.texParameterf(w,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,u.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ye(w,E){let et=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",L));const mt=E.source;let vt=S.get(mt);vt===void 0&&(vt={},S.set(mt,vt));const ut=ft(E);if(ut!==w.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),vt[ut].usedTimes++;const Vt=vt[w.__cacheKey];Vt!==void 0&&(vt[w.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(E)),w.__cacheKey=ut,w.__webglTexture=vt[ut].texture}return et}function P(w,E,et){return Math.floor(Math.floor(w/et)/E)}function dt(w,E,et,mt){const ut=w.updateRanges;if(ut.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,mt,E.data);else{ut.sort((St,Rt)=>St.start-Rt.start);let Vt=0;for(let St=1;St<ut.length;St++){const Rt=ut[Vt],ee=ut[St],$t=Rt.start+Rt.count,Bt=P(ee.start,E.width,4),se=P(Rt.start,E.width,4);ee.start<=$t+1&&Bt===se&&P(ee.start+ee.count-1,E.width,4)===Bt?Rt.count=Math.max(Rt.count,ee.start+ee.count-Rt.start):(++Vt,ut[Vt]=ee)}ut.length=Vt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let St=0,Rt=ut.length;St<Rt;St++){const ee=ut[St],$t=Math.floor(ee.start/4),Bt=Math.ceil(ee.count/4),se=$t%E.width,I=Math.floor($t/E.width),Nt=Bt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,I),a.texSubImage2D(o.TEXTURE_2D,0,se,I,Nt,Ct,et,mt,E.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function J(w,E,et){let mt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(mt=o.TEXTURE_3D);const vt=ye(w,E),ut=E.source;a.bindTexture(mt,w.__webglTexture,o.TEXTURE0+et);const Vt=s.get(ut);if(ut.version!==Vt.__version||vt===!0){a.activeTexture(o.TEXTURE0+et);const Ut=Le.getPrimaries(Le.workingColorSpace),Kt=E.colorSpace===or?null:Le.getPrimaries(E.colorSpace),Yt=E.colorSpace===or||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let St=C(E.image,!1,u.maxTextureSize);St=kt(E,St);const Rt=f.convert(E.format,E.colorSpace),ee=f.convert(E.type);let $t=O(E.internalFormat,Rt,ee,E.colorSpace,E.isVideoTexture);ue(mt,E);let Bt;const se=E.mipmaps,I=E.isVideoTexture!==!0,Nt=Vt.__version===void 0||vt===!0,Ct=ut.dataReady,Dt=V(E,St);if(E.isDepthTexture)$t=F(E.format===ul,E.type),Nt&&(I?a.texStorage2D(o.TEXTURE_2D,1,$t,St.width,St.height):a.texImage2D(o.TEXTURE_2D,0,$t,St.width,St.height,0,Rt,ee,null));else if(E.isDataTexture)if(se.length>0){I&&Nt&&a.texStorage2D(o.TEXTURE_2D,Dt,$t,se[0].width,se[0].height);for(let bt=0,gt=se.length;bt<gt;bt++)Bt=se[bt],I?Ct&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Rt,ee,Bt.data):a.texImage2D(o.TEXTURE_2D,bt,$t,Bt.width,Bt.height,0,Rt,ee,Bt.data);E.generateMipmaps=!1}else I?(Nt&&a.texStorage2D(o.TEXTURE_2D,Dt,$t,St.width,St.height),Ct&&dt(E,St,Rt,ee)):a.texImage2D(o.TEXTURE_2D,0,$t,St.width,St.height,0,Rt,ee,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){I&&Nt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,$t,se[0].width,se[0].height,St.depth);for(let bt=0,gt=se.length;bt<gt;bt++)if(Bt=se[bt],E.format!==Li)if(Rt!==null)if(I){if(Ct)if(E.layerUpdates.size>0){const Xt=x_(Bt.width,Bt.height,E.format,E.type);for(const ce of E.layerUpdates){const Ye=Bt.data.subarray(ce*Xt/Bt.data.BYTES_PER_ELEMENT,(ce+1)*Xt/Bt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ce,Bt.width,Bt.height,1,Rt,Ye)}E.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,St.depth,Rt,Bt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,$t,Bt.width,Bt.height,St.depth,0,Bt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?Ct&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,St.depth,Rt,ee,Bt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,bt,$t,Bt.width,Bt.height,St.depth,0,Rt,ee,Bt.data)}else{I&&Nt&&a.texStorage2D(o.TEXTURE_2D,Dt,$t,se[0].width,se[0].height);for(let bt=0,gt=se.length;bt<gt;bt++)Bt=se[bt],E.format!==Li?Rt!==null?I?Ct&&a.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Rt,Bt.data):a.compressedTexImage2D(o.TEXTURE_2D,bt,$t,Bt.width,Bt.height,0,Bt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?Ct&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Rt,ee,Bt.data):a.texImage2D(o.TEXTURE_2D,bt,$t,Bt.width,Bt.height,0,Rt,ee,Bt.data)}else if(E.isDataArrayTexture)if(I){if(Nt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,$t,St.width,St.height,St.depth),Ct)if(E.layerUpdates.size>0){const bt=x_(St.width,St.height,E.format,E.type);for(const gt of E.layerUpdates){const Xt=St.data.subarray(gt*bt/St.data.BYTES_PER_ELEMENT,(gt+1)*bt/St.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Rt,ee,Xt)}E.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Rt,ee,St.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,$t,St.width,St.height,St.depth,0,Rt,ee,St.data);else if(E.isData3DTexture)I?(Nt&&a.texStorage3D(o.TEXTURE_3D,Dt,$t,St.width,St.height,St.depth),Ct&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Rt,ee,St.data)):a.texImage3D(o.TEXTURE_3D,0,$t,St.width,St.height,St.depth,0,Rt,ee,St.data);else if(E.isFramebufferTexture){if(Nt)if(I)a.texStorage2D(o.TEXTURE_2D,Dt,$t,St.width,St.height);else{let bt=St.width,gt=St.height;for(let Xt=0;Xt<Dt;Xt++)a.texImage2D(o.TEXTURE_2D,Xt,$t,bt,gt,0,Rt,ee,null),bt>>=1,gt>>=1}}else if(se.length>0){if(I&&Nt){const bt=re(se[0]);a.texStorage2D(o.TEXTURE_2D,Dt,$t,bt.width,bt.height)}for(let bt=0,gt=se.length;bt<gt;bt++)Bt=se[bt],I?Ct&&a.texSubImage2D(o.TEXTURE_2D,bt,0,0,Rt,ee,Bt):a.texImage2D(o.TEXTURE_2D,bt,$t,Rt,ee,Bt);E.generateMipmaps=!1}else if(I){if(Nt){const bt=re(St);a.texStorage2D(o.TEXTURE_2D,Dt,$t,bt.width,bt.height)}Ct&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,ee,St)}else a.texImage2D(o.TEXTURE_2D,0,$t,Rt,ee,St);y(E)&&v(mt),Vt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function nt(w,E,et){if(E.image.length!==6)return;const mt=ye(w,E),vt=E.source;a.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+et);const ut=s.get(vt);if(vt.version!==ut.__version||mt===!0){a.activeTexture(o.TEXTURE0+et);const Vt=Le.getPrimaries(Le.workingColorSpace),Ut=E.colorSpace===or?null:Le.getPrimaries(E.colorSpace),Kt=E.colorSpace===or||Vt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let gt=0;gt<6;gt++)!Yt&&!St?Rt[gt]=C(E.image[gt],!0,u.maxCubemapSize):Rt[gt]=St?E.image[gt].image:E.image[gt],Rt[gt]=kt(E,Rt[gt]);const ee=Rt[0],$t=f.convert(E.format,E.colorSpace),Bt=f.convert(E.type),se=O(E.internalFormat,$t,Bt,E.colorSpace),I=E.isVideoTexture!==!0,Nt=ut.__version===void 0||mt===!0,Ct=vt.dataReady;let Dt=V(E,ee);ue(o.TEXTURE_CUBE_MAP,E);let bt;if(Yt){I&&Nt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,se,ee.width,ee.height);for(let gt=0;gt<6;gt++){bt=Rt[gt].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){const ce=bt[Xt];E.format!==Li?$t!==null?I?Ct&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ce.width,ce.height,$t,ce.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,se,ce.width,ce.height,0,ce.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Ct&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ce.width,ce.height,$t,Bt,ce.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,se,ce.width,ce.height,0,$t,Bt,ce.data)}}}else{if(bt=E.mipmaps,I&&Nt){bt.length>0&&Dt++;const gt=re(Rt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){I?Ct&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt[gt].width,Rt[gt].height,$t,Bt,Rt[gt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Rt[gt].width,Rt[gt].height,0,$t,Bt,Rt[gt].data);for(let Xt=0;Xt<bt.length;Xt++){const Ye=bt[Xt].image[gt].image;I?Ct&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,Ye.width,Ye.height,$t,Bt,Ye.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,se,Ye.width,Ye.height,0,$t,Bt,Ye.data)}}else{I?Ct&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$t,Bt,Rt[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,$t,Bt,Rt[gt]);for(let Xt=0;Xt<bt.length;Xt++){const ce=bt[Xt];I?Ct&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,$t,Bt,ce.image[gt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,se,$t,Bt,ce.image[gt])}}}y(E)&&v(o.TEXTURE_CUBE_MAP),ut.__version=vt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function yt(w,E,et,mt,vt,ut){const Vt=f.convert(et.format,et.colorSpace),Ut=f.convert(et.type),Kt=O(et.internalFormat,Vt,Ut,et.colorSpace),Yt=s.get(E),St=s.get(et);if(St.__renderTarget=E,!Yt.__hasExternalTextures){const Rt=Math.max(1,E.width>>ut),ee=Math.max(1,E.height>>ut);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?a.texImage3D(vt,ut,Kt,Rt,ee,E.depth,0,Vt,Ut,null):a.texImage2D(vt,ut,Kt,Rt,ee,0,Vt,Ut,null)}a.bindFramebuffer(o.FRAMEBUFFER,w),It(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,vt,St.__webglTexture,0,te(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,vt,St.__webglTexture,ut),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(w,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,w),E.depthBuffer){const mt=E.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,ut=F(E.stencilBuffer,vt),Vt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=te(E);It(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,w)}else{const mt=E.textures;for(let vt=0;vt<mt.length;vt++){const ut=mt[vt],Vt=f.convert(ut.format,ut.colorSpace),Ut=f.convert(ut.type),Kt=O(ut.internalFormat,Vt,Ut,ut.colorSpace),Yt=te(E);et&&It(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Kt,E.width,E.height):It(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(E.depthTexture);mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const vt=mt.__webglTexture,ut=te(E);if(E.depthTexture.format===ll)It(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===ul)It(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(w){const E=s.get(w),et=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const mt=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),mt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=mt}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const mt=w.texture.mipmaps;mt&&mt.length>0?At(E.__webglFramebuffer[0],w):At(E.__webglFramebuffer,w)}else if(et){E.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(a.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[mt]),E.__webglDepthbuffer[mt]===void 0)E.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ot(E.__webglDepthbuffer[mt],w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}else{const mt=w.texture.mipmaps;if(mt&&mt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ot(E.__webglDepthbuffer,w,!1);else{const vt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(w,E,et){const mt=s.get(w);E!==void 0&&yt(mt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Mt(w)}function oe(w){const E=w.texture,et=s.get(w),mt=s.get(E);w.addEventListener("dispose",N);const vt=w.textures,ut=w.isWebGLCubeRenderTarget===!0,Vt=vt.length>1;if(Vt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=E.version,d.memory.textures++),ut){et.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<E.mipmaps.length;Kt++)et.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else et.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)et.__webglFramebuffer[Ut]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const Yt=s.get(vt[Ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&It(w)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Kt=vt[Ut];et.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut]);const Yt=f.convert(Kt.format,Kt.colorSpace),St=f.convert(Kt.type),Rt=O(Kt.internalFormat,Yt,St,Kt.colorSpace,w.isXRRenderTarget===!0),ee=te(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Rt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(et.__webglDepthRenderbuffer,w,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){a.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),ue(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)yt(et.__webglFramebuffer[Ut][Kt],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else yt(et.__webglFramebuffer[Ut],w,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&v(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Vt){for(let Ut=0,Kt=vt.length;Ut<Kt;Ut++){const Yt=vt[Ut],St=s.get(Yt);let Rt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Rt,St.__webglTexture),ue(Rt,Yt),yt(et.__webglFramebuffer,w,Yt,o.COLOR_ATTACHMENT0+Ut,Rt,0),y(Yt)&&v(Rt)}a.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ut,mt.__webglTexture),ue(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Kt=0;Kt<E.mipmaps.length;Kt++)yt(et.__webglFramebuffer[Kt],w,E,o.COLOR_ATTACHMENT0,Ut,Kt);else yt(et.__webglFramebuffer,w,E,o.COLOR_ATTACHMENT0,Ut,0);y(E)&&v(Ut),a.unbindTexture()}w.depthBuffer&&Mt(w)}function Ve(w){const E=w.textures;for(let et=0,mt=E.length;et<mt;et++){const vt=E[et];if(y(vt)){const ut=z(w),Vt=s.get(vt).__webglTexture;a.bindTexture(ut,Vt),v(ut),a.unbindTexture()}}}const B=[],le=[];function Jt(w){if(w.samples>0){if(It(w)===!1){const E=w.textures,et=w.width,mt=w.height;let vt=o.COLOR_BUFFER_BIT;const ut=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(w),Ut=E.length>1;if(Ut)for(let Yt=0;Yt<E.length;Yt++)a.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Kt=w.texture.mipmaps;Kt&&Kt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Yt]);const St=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,et,mt,0,0,et,mt,vt,o.NEAREST),g===!0&&(B.length=0,le.length=0,B.push(o.COLOR_ATTACHMENT0+Yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(ut),le.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Yt=0;Yt<E.length;Yt++){a.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Yt]);const St=s.get(E[Yt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,St,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&g){const E=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function te(w){return Math.min(u.maxSamples,w.samples)}function It(w){const E=s.get(w);return w.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(w){const E=d.render.frame;_.get(w)!==E&&(_.set(w,E),w.update())}function kt(w,E){const et=w.colorSpace,mt=w.format,vt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||et!==to&&et!==or&&(Le.getTransfer(et)===qe?(mt!==Li||vt!==Ea)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",et)),E}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(x.width=w.naturalWidth||w.width,x.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(x.width=w.displayWidth,x.height=w.displayHeight):(x.width=w.width,x.height=w.height),x}this.allocateTextureUnit=ot,this.resetTextureUnits=K,this.setTexture2D=lt,this.setTexture2DArray=Y,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=Gt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=It}function o2(o,n){function a(s,u=or){let f;const d=Le.getTransfer(u);if(s===Ea)return o.UNSIGNED_BYTE;if(s===M0)return o.UNSIGNED_SHORT_4_4_4_4;if(s===b0)return o.UNSIGNED_SHORT_5_5_5_1;if(s===k_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Y_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===X_)return o.BYTE;if(s===q_)return o.SHORT;if(s===sl)return o.UNSIGNED_SHORT;if(s===y0)return o.INT;if(s===jr)return o.UNSIGNED_INT;if(s===ya)return o.FLOAT;if(s===no)return o.HALF_FLOAT;if(s===W_)return o.ALPHA;if(s===j_)return o.RGB;if(s===Li)return o.RGBA;if(s===ll)return o.DEPTH_COMPONENT;if(s===ul)return o.DEPTH_STENCIL;if(s===Z_)return o.RED;if(s===E0)return o.RED_INTEGER;if(s===T0)return o.RG;if(s===A0)return o.RG_INTEGER;if(s===R0)return o.RGBA_INTEGER;if(s===uc||s===cc||s===fc||s===dc)if(d===qe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===uc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===uc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xh||s===qh||s===kh||s===Yh)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Xh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yh)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wh||s===jh||s===Zh)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Wh||s===jh)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Zh)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===t0||s===e0||s===n0||s===i0||s===a0||s===r0||s===s0||s===o0||s===l0||s===u0)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Kh)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===t0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===e0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===n0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===i0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===a0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===r0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===s0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===o0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===l0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===u0)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===c0||s===f0||s===d0)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===c0)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===f0)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===d0)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===h0||s===p0||s===m0||s===x0)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===h0)return f.COMPRESSED_RED_RGTC1_EXT;if(s===p0)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===m0)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===x0)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const l2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a){if(this.texture===null){const s=new uv(n.texture);(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new Zi({vertexShader:l2,fragmentShader:u2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Aa(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f2 extends io{constructor(n,a){super();const s=this;let u=null,f=1,d=null,h="local-floor",g=1,x=null,_=null,m=null,S=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new c2,v={},z=a.getContextAttributes();let O=null,F=null;const V=[],L=[],N=new Ue;let j=null;const D=new Ui;D.viewport=new on;const R=new Ui;R.viewport=new on;const H=[D,R],K=new D3;let ot=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=V[J];return nt===void 0&&(nt=new bh,V[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=V[J];return nt===void 0&&(nt=new bh,V[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=V[J];return nt===void 0&&(nt=new bh,V[J]=nt),nt.getHandSpace()};function lt(J){const nt=L.indexOf(J.inputSource);if(nt===-1)return;const yt=V[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,x||d),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){u.removeEventListener("select",lt),u.removeEventListener("selectstart",lt),u.removeEventListener("selectend",lt),u.removeEventListener("squeeze",lt),u.removeEventListener("squeezestart",lt),u.removeEventListener("squeezeend",lt),u.removeEventListener("end",Y),u.removeEventListener("inputsourceschange",at);for(let J=0;J<V.length;J++){const nt=L[J];nt!==null&&(L[J]=null,V[J].disconnect(nt))}ot=null,ft=null,y.reset();for(const J in v)delete v[J];n.setRenderTarget(O),M=null,S=null,m=null,u=null,F=null,dt.stop(),s.isPresenting=!1,n.setPixelRatio(j),n.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,s.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||d},this.setReferenceSpace=function(J){x=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return m===null&&C&&(m=new XRWebGLBinding(u,a)),m},this.getFrame=function(){return A},this.getSession=function(){return u},this.setSession=async function(J){if(u=J,u!==null){if(O=n.getRenderTarget(),u.addEventListener("select",lt),u.addEventListener("selectstart",lt),u.addEventListener("selectend",lt),u.addEventListener("squeeze",lt),u.addEventListener("squeezestart",lt),u.addEventListener("squeezeend",lt),u.addEventListener("end",Y),u.addEventListener("inputsourceschange",at),z.xrCompatible!==!0&&await a.makeXRCompatible(),j=n.getPixelRatio(),n.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ot=null,At=null;z.depth&&(At=z.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,yt=z.stencil?ul:ll,Ot=z.stencil?ol:jr);const Mt={colorFormat:a.RGBA8,depthFormat:At,scaleFactor:f};m=this.getBinding(),S=m.createProjectionLayer(Mt),u.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),F=new Zr(S.textureWidth,S.textureHeight,{format:Li,type:Ea,depthTexture:new lv(S.textureWidth,S.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:z.stencil,colorSpace:n.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const yt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,yt),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new Zr(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Ea,colorSpace:n.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(g),x=null,d=await u.requestReferenceSpace(h),dt.setContext(u),dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(J){for(let nt=0;nt<J.removed.length;nt++){const yt=J.removed[nt],Ot=L.indexOf(yt);Ot>=0&&(L[Ot]=null,V[Ot].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){const yt=J.added[nt];let Ot=L.indexOf(yt);if(Ot===-1){for(let Mt=0;Mt<V.length;Mt++)if(Mt>=L.length){L.push(yt),Ot=Mt;break}else if(L[Mt]===null){L[Mt]=yt,Ot=Mt;break}if(Ot===-1)break}const At=V[Ot];At&&At.connect(yt)}}const Z=new ct,xt=new ct;function _t(J,nt,yt){Z.setFromMatrixPosition(nt.matrixWorld),xt.setFromMatrixPosition(yt.matrixWorld);const Ot=Z.distanceTo(xt),At=nt.projectionMatrix.elements,Mt=yt.projectionMatrix.elements,Gt=At[14]/(At[10]-1),oe=At[14]/(At[10]+1),Ve=(At[9]+1)/At[5],B=(At[9]-1)/At[5],le=(At[8]-1)/At[0],Jt=(Mt[8]+1)/Mt[0],te=Gt*le,It=Gt*Jt,Ie=Ot/(-le+Jt),kt=Ie*-le;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const re=Gt+Ie,w=oe+Ie,E=te-kt,et=It+(Ot-kt),mt=Ve*oe/w*re,vt=B*oe/w*re;J.projectionMatrix.makePerspective(E,et,mt,vt,re,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ht(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(u===null)return;let nt=J.near,yt=J.far;y.texture!==null&&(y.depthNear>0&&(nt=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),K.near=R.near=D.near=nt,K.far=R.far=D.far=yt,(ot!==K.near||ft!==K.far)&&(u.updateRenderState({depthNear:K.near,depthFar:K.far}),ot=K.near,ft=K.far),K.layers.mask=J.layers.mask|6,D.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const Ot=J.parent,At=K.cameras;Ht(K,Ot);for(let Mt=0;Mt<At.length;Mt++)Ht(At[Mt],Ot);At.length===2?_t(K,D,R):K.projectionMatrix.copy(D.projectionMatrix),ue(J,K,Ot)};function ue(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=g0*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(S===null&&M===null))return g},this.setFoveation=function(J){g=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(J){return v[J]};let ye=null;function P(J,nt){if(_=nt.getViewerPose(x||d),A=nt,_!==null){const yt=_.views;M!==null&&(n.setRenderTargetFramebuffer(F,M.framebuffer),n.setRenderTarget(F));let Ot=!1;yt.length!==K.cameras.length&&(K.cameras.length=0,Ot=!0);for(let oe=0;oe<yt.length;oe++){const Ve=yt[oe];let B=null;if(M!==null)B=M.getViewport(Ve);else{const Jt=m.getViewSubImage(S,Ve);B=Jt.viewport,oe===0&&(n.setRenderTargetTextures(F,Jt.colorTexture,Jt.depthStencilTexture),n.setRenderTarget(F))}let le=H[oe];le===void 0&&(le=new Ui,le.layers.enable(oe),le.viewport=new on,H[oe]=le),le.matrix.fromArray(Ve.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ve.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(B.x,B.y,B.width,B.height),oe===0&&(K.matrix.copy(le.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ot===!0&&K.cameras.push(le)}const At=u.enabledFeatures;if(At&&At.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&C){m=s.getBinding();const oe=m.getDepthInformation(yt[0]);oe&&oe.isValid&&oe.texture&&y.init(oe,u.renderState)}if(At&&At.includes("camera-access")&&C){n.state.unbindTexture(),m=s.getBinding();for(let oe=0;oe<yt.length;oe++){const Ve=yt[oe].camera;if(Ve){let B=v[Ve];B||(B=new uv,v[Ve]=B);const le=m.getCameraImage(Ve);B.sourceTexture=le}}}}for(let yt=0;yt<V.length;yt++){const Ot=L[yt],At=V[yt];Ot!==null&&At!==void 0&&At.update(Ot,nt,x||d)}ye&&ye(J,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),A=null}const dt=new fv;dt.setAnimationLoop(P),this.setAnimationLoop=function(J){ye=J},this.dispose=function(){}}}const Gr=new Ta,d2=new xn;function h2(o,n){function a(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,av(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function u(y,v,z,O,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(y,v):v.isMeshToonMaterial?(f(y,v),m(y,v)):v.isMeshPhongMaterial?(f(y,v),_(y,v)):v.isMeshStandardMaterial?(f(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,F)):v.isMeshMatcapMaterial?(f(y,v),A(y,v)):v.isMeshDepthMaterial?f(y,v):v.isMeshDistanceMaterial?(f(y,v),C(y,v)):v.isMeshNormalMaterial?f(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?g(y,v,z,O):v.isSpriteMaterial?x(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,a(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,a(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,a(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,a(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,a(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,a(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,a(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=n.get(v),O=z.envMap,F=z.envMapRotation;O&&(y.envMap.value=O,Gr.copy(F),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(d2.makeRotationFromEuler(Gr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,a(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,a(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,a(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function g(y,v,z,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=O*.5,v.map&&(y.map.value=v.map,a(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,a(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,a(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,a(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function m(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,a(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,a(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,a(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,a(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,a(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,a(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,a(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,a(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,a(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,a(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,a(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,a(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,a(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,a(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const z=n.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function p2(o,n,a,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(z,O){const F=O.program;s.uniformBlockBinding(z,F)}function x(z,O){let F=u[z.id];F===void 0&&(A(z),F=_(z),u[z.id]=F,z.addEventListener("dispose",y));const V=O.program;s.updateUBOMapping(z,V);const L=n.render.frame;f[z.id]!==L&&(S(z),f[z.id]=L)}function _(z){const O=m();z.__bindingPointIndex=O;const F=o.createBuffer(),V=z.__size,L=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,V,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,F),F}function m(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const O=u[z.id],F=z.uniforms,V=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let L=0,N=F.length;L<N;L++){const j=Array.isArray(F[L])?F[L]:[F[L]];for(let D=0,R=j.length;D<R;D++){const H=j[D];if(M(H,L,D,V)===!0){const K=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let lt=0;lt<ot.length;lt++){const Y=ot[lt],at=C(Y);typeof Y=="number"||typeof Y=="boolean"?(H.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,K+ft,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=0,H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=0,H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=0):(Y.toArray(H.__data,ft),ft+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,O,F,V){const L=z.value,N=O+"_"+F;if(V[N]===void 0)return typeof L=="number"||typeof L=="boolean"?V[N]=L:V[N]=L.clone(),!0;{const j=V[N];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return V[N]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function A(z){const O=z.uniforms;let F=0;const V=16;for(let N=0,j=O.length;N<j;N++){const D=Array.isArray(O[N])?O[N]:[O[N]];for(let R=0,H=D.length;R<H;R++){const K=D[R],ot=Array.isArray(K.value)?K.value:[K.value];for(let ft=0,lt=ot.length;ft<lt;ft++){const Y=ot[ft],at=C(Y),Z=F%V,xt=Z%at.boundary,_t=Z+xt;F+=xt,_t!==0&&V-_t<at.storage&&(F+=V-_t),K.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=at.storage}}}const L=F%V;return L>0&&(F+=V-L),z.__size=F,z.__cache={},this}function C(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",z),O}function y(z){const O=z.target;O.removeEventListener("dispose",y);const F=d.indexOf(O.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function v(){for(const z in u)o.deleteBuffer(u[z]);d=[],u={},f={}}return{bind:g,update:x,dispose:v}}const m2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ga=null;function x2(){return ga===null&&(ga=new b3(m2,32,32,T0,no),ga.minFilter=yi,ga.magFilter=yi,ga.wrapS=Sa,ga.wrapT=Sa,ga.generateMipmaps=!1,ga.needsUpdate=!0),ga}class g2{constructor(n={}){const{canvas:a=jM(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:x=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=d;const A=new Set([R0,A0,E0]),C=new Set([Ea,jr,sl,ol,M0,b0]),y=new Uint32Array(4),v=new Int32Array(4);let z=null,O=null;const F=[],V=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let N=!1;this._outputColorSpace=oi;let j=0,D=0,R=null,H=-1,K=null;const ot=new on,ft=new on;let lt=null;const Y=new ke(0);let at=0,Z=a.width,xt=a.height,_t=1,Ht=null,ue=null;const ye=new on(0,0,Z,xt),P=new on(0,0,Z,xt);let dt=!1;const J=new ov;let nt=!1,yt=!1;const Ot=new xn,At=new ct,Mt=new on,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Ve(){return R===null?_t:1}let B=s;function le(T,W){return a.getContext(T,W)}try{const T={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:x,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${S0}`),a.addEventListener("webglcontextlost",bt,!1),a.addEventListener("webglcontextrestored",gt,!1),a.addEventListener("webglcontextcreationerror",Xt,!1),B===null){const W="webgl2";if(B=le(W,T),B===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let Jt,te,It,Ie,kt,re,w,E,et,mt,vt,ut,Vt,Ut,Kt,Yt,St,Rt,ee,$t,Bt,se,I,Nt;function Ct(){Jt=new T1(B),Jt.init(),se=new o2(B,Jt),te=new x1(B,Jt,n,se),It=new r2(B,Jt),te.reversedDepthBuffer&&S&&It.buffers.depth.setReversed(!0),Ie=new C1(B),kt=new YT,re=new s2(B,Jt,It,kt,te,se,Ie),w=new _1(L),E=new E1(L),et=new N3(B),I=new p1(B,et),mt=new A1(B,et,Ie,I),vt=new w1(B,mt,et,Ie),ee=new D1(B,te,re),Yt=new g1(kt),ut=new kT(L,w,E,Jt,te,I,Yt),Vt=new h2(L,kt),Ut=new jT,Kt=new t2(Jt),Rt=new h1(L,w,E,It,vt,M,g),St=new i2(L,vt,te),Nt=new p2(B,Ie,te,It),$t=new m1(B,Jt,Ie),Bt=new R1(B,Jt,Ie),Ie.programs=ut.programs,L.capabilities=te,L.extensions=Jt,L.properties=kt,L.renderLists=Ut,L.shadowMap=St,L.state=It,L.info=Ie}Ct();const Dt=new f2(L,B);this.xr=Dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(Z,xt,!1))},this.getSize=function(T){return T.set(Z,xt)},this.setSize=function(T,W,rt=!0){if(Dt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,xt=W,a.width=Math.floor(T*_t),a.height=Math.floor(W*_t),rt===!0&&(a.style.width=T+"px",a.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(Z*_t,xt*_t).floor()},this.setDrawingBufferSize=function(T,W,rt){Z=T,xt=W,_t=rt,a.width=Math.floor(T*rt),a.height=Math.floor(W*rt),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(ot)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,W,rt,st){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,W,rt,st),It.viewport(ot.copy(ye).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,W,rt,st){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,W,rt,st),It.scissor(ft.copy(P).multiplyScalar(_t).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(T){It.setScissorTest(dt=T)},this.setOpaqueSort=function(T){Ht=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,rt=!0){let st=0;if(T){let Q=!1;if(R!==null){const Et=R.texture.format;Q=A.has(Et)}if(Q){const Et=R.texture.type,Tt=C.has(Et),Lt=Rt.getClearColor(),Pt=Rt.getClearAlpha(),ne=Lt.r,ae=Lt.g,Qt=Lt.b;Tt?(y[0]=ne,y[1]=ae,y[2]=Qt,y[3]=Pt,B.clearBufferuiv(B.COLOR,0,y)):(v[0]=ne,v[1]=ae,v[2]=Qt,v[3]=Pt,B.clearBufferiv(B.COLOR,0,v))}else st|=B.COLOR_BUFFER_BIT}W&&(st|=B.DEPTH_BUFFER_BIT),rt&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",bt,!1),a.removeEventListener("webglcontextrestored",gt,!1),a.removeEventListener("webglcontextcreationerror",Xt,!1),Rt.dispose(),Ut.dispose(),Kt.dispose(),kt.dispose(),w.dispose(),E.dispose(),vt.dispose(),I.dispose(),Nt.dispose(),ut.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",xl),Dt.removeEventListener("sessionend",gl),Ki.stop()};function bt(T){T.preventDefault(),$g("WebGLRenderer: Context Lost."),N=!0}function gt(){$g("WebGLRenderer: Context Restored."),N=!1;const T=Ie.autoReset,W=St.enabled,rt=St.autoUpdate,st=St.needsUpdate,Q=St.type;Ct(),Ie.autoReset=T,St.enabled=W,St.autoUpdate=rt,St.needsUpdate=st,St.type=Q}function Xt(T){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const W=T.target;W.removeEventListener("dispose",ce),Ye(W)}function Ye(T){Ce(T),kt.remove(T)}function Ce(T){const W=kt.get(T).programs;W!==void 0&&(W.forEach(function(rt){ut.releaseProgram(rt)}),T.isShaderMaterial&&ut.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,rt,st,Q,Et){W===null&&(W=Gt);const Tt=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=vl(T,W,rt,st,Q);It.setMaterial(st,Tt);let Pt=rt.index,ne=1;if(st.wireframe===!0){if(Pt=mt.getWireframeAttribute(rt),Pt===void 0)return;ne=2}const ae=rt.drawRange,Qt=rt.attributes.position;let _e=ae.start*ne,De=(ae.start+ae.count)*ne;Et!==null&&(_e=Math.max(_e,Et.start*ne),De=Math.min(De,(Et.start+Et.count)*ne)),Pt!==null?(_e=Math.max(_e,0),De=Math.min(De,Pt.count)):Qt!=null&&(_e=Math.max(_e,0),De=Math.min(De,Qt.count));const We=De-_e;if(We<0||We===1/0)return;I.setup(Q,st,Lt,rt,Pt);let je,Ae=$t;if(Pt!==null&&(je=et.get(Pt),Ae=Bt,Ae.setIndex(je)),Q.isMesh)st.wireframe===!0?(It.setLineWidth(st.wireframeLinewidth*Ve()),Ae.setMode(B.LINES)):Ae.setMode(B.TRIANGLES);else if(Q.isLine){let Wt=st.linewidth;Wt===void 0&&(Wt=1),It.setLineWidth(Wt*Ve()),Q.isLineSegments?Ae.setMode(B.LINES):Q.isLineLoop?Ae.setMode(B.LINE_LOOP):Ae.setMode(B.LINE_STRIP)}else Q.isPoints?Ae.setMode(B.POINTS):Q.isSprite&&Ae.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Wt=Q._multiDrawStarts,Be=Q._multiDrawCounts,ve=Q._multiDrawCount,Ne=Pt?et.get(Pt).bytesPerElement:1,Qi=kt.get(st).currentProgram.getUniforms();for(let Un=0;Un<ve;Un++)Qi.setValue(B,"_gl_DrawID",Un),Ae.render(Wt[Un]/Ne,Be[Un])}else if(Q.isInstancedMesh)Ae.renderInstances(_e,We,Q.count);else if(rt.isInstancedBufferGeometry){const Wt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Be=Math.min(rt.instanceCount,Wt);Ae.renderInstances(_e,We,Be)}else Ae.render(_e,We)};function Je(T,W,rt){T.transparent===!0&&T.side===va&&T.forceSinglePass===!1?(T.side=Kn,T.needsUpdate=!0,Oi(T,W,rt),T.side=cr,T.needsUpdate=!0,Oi(T,W,rt),T.side=va):Oi(T,W,rt)}this.compile=function(T,W,rt=null){rt===null&&(rt=T),O=Kt.get(rt),O.init(W),V.push(O),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),T!==rt&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const st=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Tt=0;Tt<Et.length;Tt++){const Lt=Et[Tt];Je(Lt,rt,Q),st.add(Lt)}else Je(Et,rt,Q),st.add(Et)}),O=V.pop(),st},this.compileAsync=function(T,W,rt=null){const st=this.compile(T,W,rt);return new Promise(Q=>{function Et(){if(st.forEach(function(Tt){kt.get(Tt).currentProgram.isReady()&&st.delete(Tt)}),st.size===0){Q(T);return}setTimeout(Et,10)}Jt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ln=null;function zn(T){ln&&ln(T)}function xl(){Ki.stop()}function gl(){Ki.start()}const Ki=new fv;Ki.setAnimationLoop(zn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(T){ln=T,Dt.setAnimationLoop(T),T===null?Ki.stop():Ki.start()},Dt.addEventListener("sessionstart",xl),Dt.addEventListener("sessionend",gl),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(W),W=Dt.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,W,R),O=Kt.get(T,V.length),O.init(W),V.push(O),Ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Ot,Wi,W.reversedDepth),yt=this.localClippingEnabled,nt=Yt.init(this.clippingPlanes,yt),z=Ut.get(T,F.length),z.init(),F.push(z),Dt.enabled===!0&&Dt.isPresenting===!0){const Et=L.xr.getDepthSensingMesh();Et!==null&&Ra(Et,W,-1/0,L.sortObjects)}Ra(T,W,0,L.sortObjects),z.finish(),L.sortObjects===!0&&z.sort(Ht,ue),oe=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,oe&&Rt.addToRenderList(z,T),this.info.render.frame++,nt===!0&&Yt.beginShadows();const rt=O.state.shadowsArray;St.render(rt,T,W),nt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=z.opaque,Q=z.transmissive;if(O.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Q.length>0)for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++){const Pt=Et[Tt];hr(st,Q,T,Pt)}oe&&Rt.render(T);for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++){const Pt=Et[Tt];dr(z,T,Pt,Pt.viewport)}}else Q.length>0&&hr(st,Q,T,W),oe&&Rt.render(T),dr(z,T,W);R!==null&&D===0&&(re.updateMultisampleRenderTarget(R),re.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(L,T,W),I.resetDefaultState(),H=-1,K=null,V.pop(),V.length>0?(O=V[V.length-1],nt===!0&&Yt.setGlobalState(L.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?z=F[F.length-1]:z=null};function Ra(T,W,rt,st){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)O.pushLight(T),T.castShadow&&O.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){st&&Mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ot);const Tt=vt.update(T),Lt=T.material;Lt.visible&&z.push(T,Tt,Lt,rt,Mt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Tt=vt.update(T),Lt=T.material;if(st&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Mt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Mt.copy(Tt.boundingSphere.center)),Mt.applyMatrix4(T.matrixWorld).applyMatrix4(Ot)),Array.isArray(Lt)){const Pt=Tt.groups;for(let ne=0,ae=Pt.length;ne<ae;ne++){const Qt=Pt[ne],_e=Lt[Qt.materialIndex];_e&&_e.visible&&z.push(T,Tt,_e,rt,Mt.z,Qt)}}else Lt.visible&&z.push(T,Tt,Lt,rt,Mt.z,null)}}const Et=T.children;for(let Tt=0,Lt=Et.length;Tt<Lt;Tt++)Ra(Et[Tt],W,rt,st)}function dr(T,W,rt,st){const{opaque:Q,transmissive:Et,transparent:Tt}=T;O.setupLightsView(rt),nt===!0&&Yt.setGlobalState(L.clippingPlanes,rt),st&&It.viewport(ot.copy(st)),Q.length>0&&ci(Q,W,rt),Et.length>0&&ci(Et,W,rt),Tt.length>0&&ci(Tt,W,rt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function hr(T,W,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;O.state.transmissionRenderTarget[st.id]===void 0&&(O.state.transmissionRenderTarget[st.id]=new Zr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?no:Ea,minFilter:Yr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Et=O.state.transmissionRenderTarget[st.id],Tt=st.viewport||ot;Et.setSize(Tt.z*L.transmissionResolutionScale,Tt.w*L.transmissionResolutionScale);const Lt=L.getRenderTarget(),Pt=L.getActiveCubeFace(),ne=L.getActiveMipmapLevel();L.setRenderTarget(Et),L.getClearColor(Y),at=L.getClearAlpha(),at<1&&L.setClearColor(16777215,.5),L.clear(),oe&&Rt.render(rt);const ae=L.toneMapping;L.toneMapping=ur;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),O.setupLightsView(st),nt===!0&&Yt.setGlobalState(L.clippingPlanes,st),ci(T,rt,st),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let De=0,We=W.length;De<We;De++){const je=W[De],{object:Ae,geometry:Wt,material:Be,group:ve}=je;if(Be.side===va&&Ae.layers.test(st.layers)){const Ne=Be.side;Be.side=Kn,Be.needsUpdate=!0,pr(Ae,rt,st,Wt,Be,ve),Be.side=Ne,Be.needsUpdate=!0,_e=!0}}_e===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}L.setRenderTarget(Lt,Pt,ne),L.setClearColor(Y,at),Qt!==void 0&&(st.viewport=Qt),L.toneMapping=ae}function ci(T,W,rt){const st=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Et=T.length;Q<Et;Q++){const Tt=T[Q],{object:Lt,geometry:Pt,group:ne}=Tt;let ae=Tt.material;ae.allowOverride===!0&&st!==null&&(ae=st),Lt.layers.test(rt.layers)&&pr(Lt,W,rt,Pt,ae,ne)}}function pr(T,W,rt,st,Q,Et){T.onBeforeRender(L,W,rt,st,Q,Et),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(L,W,rt,st,T,Et),Q.transparent===!0&&Q.side===va&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,L.renderBufferDirect(rt,W,st,Q,T,Et),Q.side=cr,Q.needsUpdate=!0,L.renderBufferDirect(rt,W,st,Q,T,Et),Q.side=va):L.renderBufferDirect(rt,W,st,Q,T,Et),T.onAfterRender(L,W,rt,st,Q,Et)}function Oi(T,W,rt){W.isScene!==!0&&(W=Gt);const st=kt.get(T),Q=O.state.lights,Et=O.state.shadowsArray,Tt=Q.state.version,Lt=ut.getParameters(T,Q.state,Et,W,rt),Pt=ut.getProgramCacheKey(Lt);let ne=st.programs;st.environment=T.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(T.isMeshStandardMaterial?E:w).get(T.envMap||st.environment),st.envMapRotation=st.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,ne===void 0&&(T.addEventListener("dispose",ce),ne=new Map,st.programs=ne);let ae=ne.get(Pt);if(ae!==void 0){if(st.currentProgram===ae&&st.lightsStateVersion===Tt)return _l(T,Lt),ae}else Lt.uniforms=ut.getUniforms(T),T.onBeforeCompile(Lt,L),ae=ut.acquireProgram(Lt,Pt),ne.set(Pt,ae),st.uniforms=Lt.uniforms;const Qt=st.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qt.clippingPlanes=Yt.uniform),_l(T,Lt),st.needsLights=mr(T),st.lightsStateVersion=Tt,st.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),st.currentProgram=ae,st.uniformsList=null,ae}function ro(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=hc.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function _l(T,W){const rt=kt.get(T);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function vl(T,W,rt,st,Q){W.isScene!==!0&&(W=Gt),re.resetTextureUnits();const Et=W.fog,Tt=st.isMeshStandardMaterial?W.environment:null,Lt=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:to,Pt=(st.isMeshStandardMaterial?E:w).get(st.envMap||Tt),ne=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let We=ur;st.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(We=L.toneMapping);const je=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ae=je!==void 0?je.length:0,Wt=kt.get(st),Be=O.state.lights;if(nt===!0&&(yt===!0||T!==K)){const vn=T===K&&st.id===H;Yt.setState(st,T,vn)}let ve=!1;st.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Be.state.version||Wt.outputColorSpace!==Lt||Q.isBatchedMesh&&Wt.batching===!1||!Q.isBatchedMesh&&Wt.batching===!0||Q.isBatchedMesh&&Wt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Wt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Wt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Wt.instancingMorph===!1&&Q.morphTexture!==null||Wt.envMap!==Pt||st.fog===!0&&Wt.fog!==Et||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Yt.numPlanes||Wt.numIntersection!==Yt.numIntersection)||Wt.vertexAlphas!==ne||Wt.vertexTangents!==ae||Wt.morphTargets!==Qt||Wt.morphNormals!==_e||Wt.morphColors!==De||Wt.toneMapping!==We||Wt.morphTargetsCount!==Ae)&&(ve=!0):(ve=!0,Wt.__version=st.version);let Ne=Wt.currentProgram;ve===!0&&(Ne=Oi(st,W,Q));let Qi=!1,Un=!1,Ca=!1;const Oe=Ne.getUniforms(),an=Wt.uniforms;if(It.useProgram(Ne.program)&&(Qi=!0,Un=!0,Ca=!0),st.id!==H&&(H=st.id,Un=!0),Qi||K!==T){It.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Oe.setValue(B,"projectionMatrix",T.projectionMatrix),Oe.setValue(B,"viewMatrix",T.matrixWorldInverse);const En=Oe.map.cameraPosition;En!==void 0&&En.setValue(B,At.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&Oe.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Oe.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,Un=!0,Ca=!0)}if(Q.isSkinnedMesh){Oe.setOptional(B,Q,"bindMatrix"),Oe.setOptional(B,Q,"bindMatrixInverse");const vn=Q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Oe.setValue(B,"boneTexture",vn.boneTexture,re))}Q.isBatchedMesh&&(Oe.setOptional(B,Q,"batchingTexture"),Oe.setValue(B,"batchingTexture",Q._matricesTexture,re),Oe.setOptional(B,Q,"batchingIdTexture"),Oe.setValue(B,"batchingIdTexture",Q._indirectTexture,re),Oe.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Oe.setValue(B,"batchingColorTexture",Q._colorsTexture,re));const Vn=rt.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ee.update(Q,rt,Ne),(Un||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,Oe.setValue(B,"receiveShadow",Q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(an.envMap.value=Pt,an.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(an.envMapIntensity.value=W.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=x2()),Un&&(Oe.setValue(B,"toneMappingExposure",L.toneMappingExposure),Wt.needsLights&&so(an,Ca),Et&&st.fog===!0&&Vt.refreshFogUniforms(an,Et),Vt.refreshMaterialUniforms(an,st,_t,xt,O.state.transmissionRenderTarget[T.id]),hc.upload(B,ro(Wt),an,re)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(hc.upload(B,ro(Wt),an,re),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Oe.setValue(B,"center",Q.center),Oe.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Oe.setValue(B,"normalMatrix",Q.normalMatrix),Oe.setValue(B,"modelMatrix",Q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const vn=st.uniformsGroups;for(let En=0,oo=vn.length;En<oo;En++){const xe=vn[En];Nt.update(xe,Ne),Nt.bind(xe,Ne)}}return Ne}function so(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function mr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,W,rt){const st=kt.get(T);st.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),kt.get(T.texture).__webglTexture=W,kt.get(T.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const rt=kt.get(T);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const Mc=B.createFramebuffer();this.setRenderTarget=function(T,W=0,rt=0){R=T,j=W,D=rt;let st=!0,Q=null,Et=!1,Tt=!1;if(T){const Pt=kt.get(T);if(Pt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(Pt.__webglFramebuffer===void 0)re.setupRenderTarget(T);else if(Pt.__hasExternalTextures)re.rebindTextures(T,kt.get(T.texture).__webglTexture,kt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qt=T.depthTexture;if(Pt.__boundDepthTexture!==Qt){if(Qt!==null&&kt.has(Qt)&&(T.width!==Qt.image.width||T.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(T)}}const ne=T.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Tt=!0);const ae=kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ae[W])?Q=ae[W][rt]:Q=ae[W],Et=!0):T.samples>0&&re.useMultisampledRTT(T)===!1?Q=kt.get(T).__webglMultisampledFramebuffer:Array.isArray(ae)?Q=ae[rt]:Q=ae,ot.copy(T.viewport),ft.copy(T.scissor),lt=T.scissorTest}else ot.copy(ye).multiplyScalar(_t).floor(),ft.copy(P).multiplyScalar(_t).floor(),lt=dt;if(rt!==0&&(Q=Mc),It.bindFramebuffer(B.FRAMEBUFFER,Q)&&st&&It.drawBuffers(T,Q),It.viewport(ot),It.scissor(ft),It.setScissorTest(lt),Et){const Pt=kt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,rt)}else if(Tt){const Pt=W;for(let ne=0;ne<T.textures.length;ne++){const ae=kt.get(T.textures[ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ne,ae.__webglTexture,rt,Pt)}}else if(T!==null&&rt!==0){const Pt=kt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,rt)}H=-1},this.readRenderTargetPixels=function(T,W,rt,st,Q,Et,Tt,Lt=0){if(!(T&&T.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){It.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const ne=T.textures[Lt],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-st&&rt>=0&&rt<=T.height-Q&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt),B.readPixels(W,rt,st,Q,se.convert(ae),se.convert(Qt),Et))}finally{const ne=R!==null?kt.get(R).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(T,W,rt,st,Q,Et,Tt,Lt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(W>=0&&W<=T.width-st&&rt>=0&&rt<=T.height-Q){It.bindFramebuffer(B.FRAMEBUFFER,Pt);const ne=T.textures[Lt],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_e),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Lt),B.readPixels(W,rt,st,Q,se.convert(ae),se.convert(Qt),0);const De=R!==null?kt.get(R).__webglFramebuffer:null;It.bindFramebuffer(B.FRAMEBUFFER,De);const We=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ZM(B,We,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_e),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(_e),B.deleteSync(We),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,rt=0){const st=Math.pow(2,-rt),Q=Math.floor(T.image.width*st),Et=Math.floor(T.image.height*st),Tt=W!==null?W.x:0,Lt=W!==null?W.y:0;re.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,rt,0,0,Tt,Lt,Q,Et),It.unbindTexture()};const Sl=B.createFramebuffer(),yl=B.createFramebuffer();this.copyTextureToTexture=function(T,W,rt=null,st=null,Q=0,Et=null){Et===null&&(Q!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Tt,Lt,Pt,ne,ae,Qt,_e,De,We;const je=T.isCompressedTexture?T.mipmaps[Et]:T.image;if(rt!==null)Tt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Pt=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,ae=rt.min.y,Qt=rt.isBox3?rt.min.z:0;else{const Vn=Math.pow(2,-Q);Tt=Math.floor(je.width*Vn),Lt=Math.floor(je.height*Vn),T.isDataArrayTexture?Pt=je.depth:T.isData3DTexture?Pt=Math.floor(je.depth*Vn):Pt=1,ne=0,ae=0,Qt=0}st!==null?(_e=st.x,De=st.y,We=st.z):(_e=0,De=0,We=0);const Ae=se.convert(W.format),Wt=se.convert(W.type);let Be;W.isData3DTexture?(re.setTexture3D(W,0),Be=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),Be=B.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),Be=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ve=B.getParameter(B.UNPACK_ROW_LENGTH),Ne=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qi=B.getParameter(B.UNPACK_SKIP_PIXELS),Un=B.getParameter(B.UNPACK_SKIP_ROWS),Ca=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,je.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,ae),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);const Oe=T.isDataArrayTexture||T.isData3DTexture,an=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Vn=kt.get(T),vn=kt.get(W),En=kt.get(Vn.__renderTarget),oo=kt.get(vn.__renderTarget);It.bindFramebuffer(B.READ_FRAMEBUFFER,En.__webglFramebuffer),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,oo.__webglFramebuffer);for(let xe=0;xe<Pt;xe++)Oe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,kt.get(T).__webglTexture,Q,Qt+xe),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,kt.get(W).__webglTexture,Et,We+xe)),B.blitFramebuffer(ne,ae,Tt,Lt,_e,De,Tt,Lt,B.DEPTH_BUFFER_BIT,B.NEAREST);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||kt.has(T)){const Vn=kt.get(T),vn=kt.get(W);It.bindFramebuffer(B.READ_FRAMEBUFFER,Sl),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,yl);for(let En=0;En<Pt;En++)Oe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vn.__webglTexture,Q,Qt+En):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vn.__webglTexture,Q),an?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vn.__webglTexture,Et,We+En):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vn.__webglTexture,Et),Q!==0?B.blitFramebuffer(ne,ae,Tt,Lt,_e,De,Tt,Lt,B.COLOR_BUFFER_BIT,B.NEAREST):an?B.copyTexSubImage3D(Be,Et,_e,De,We+En,ne,ae,Tt,Lt):B.copyTexSubImage2D(Be,Et,_e,De,ne,ae,Tt,Lt);It.bindFramebuffer(B.READ_FRAMEBUFFER,null),It.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else an?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Be,Et,_e,De,We,Tt,Lt,Pt,Ae,Wt,je.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,Et,_e,De,We,Tt,Lt,Pt,Ae,je.data):B.texSubImage3D(Be,Et,_e,De,We,Tt,Lt,Pt,Ae,Wt,je):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,_e,De,Tt,Lt,Ae,Wt,je.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,_e,De,je.width,je.height,Ae,je.data):B.texSubImage2D(B.TEXTURE_2D,Et,_e,De,Tt,Lt,Ae,Wt,je);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ne),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Un),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ca),Et===0&&W.generateMipmaps&&B.generateMipmap(Be),It.unbindTexture()},this.initRenderTarget=function(T){kt.get(T).__webglFramebuffer===void 0&&re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?re.setTextureCube(T,0):T.isData3DTexture?re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?re.setTexture2DArray(T,0):re.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){j=0,D=0,R=null,It.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(n),a.unpackColorSpace=Le._getUnpackColorSpace()}}const pc=8,_2=`
#define MAX_COLORS ${pc}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,v2=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function S2({className:o,style:n,rotation:a=45,speed:s=.2,colors:u=[],transparent:f=!0,autoRotate:d=0,scale:h=1,frequency:g=1,warpStrength:x=1,mouseInfluence:_=1,parallax:m=.5,noise:S=.1}){const M=Zn.useRef(null),A=Zn.useRef(null),C=Zn.useRef(null),y=Zn.useRef(null),v=Zn.useRef(null),z=Zn.useRef(a),O=Zn.useRef(d),F=Zn.useRef(new Ue(0,0)),V=Zn.useRef(new Ue(0,0)),L=Zn.useRef(8);return Zn.useEffect(()=>{const N=M.current,j=new M3,D=new cv(-1,1,1,-1,0,1),R=new ml(2,2),H=Array.from({length:pc},()=>new ct(0,0,0)),K=new Zi({vertexShader:v2,fragmentShader:_2,uniforms:{uCanvas:{value:new Ue(1,1)},uTime:{value:0},uSpeed:{value:s},uRot:{value:new Ue(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:f?1:0},uScale:{value:h},uFrequency:{value:g},uWarpStrength:{value:x},uPointer:{value:new Ue(0,0)},uMouseInfluence:{value:_},uParallax:{value:m},uNoise:{value:S}},premultipliedAlpha:!0,transparent:!0});y.current=K;const ot=new Aa(R,K);j.add(ot);const ft=new g2({antialias:!1,powerPreference:"high-performance",alpha:!0});A.current=ft,ft.outputColorSpace=oi,ft.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ft.setClearColor(0,f?0:1),ft.domElement.style.width="100%",ft.domElement.style.height="100%",ft.domElement.style.display="block",N.appendChild(ft.domElement);const lt=new w3,Y=()=>{const Z=N.clientWidth||1,xt=N.clientHeight||1;ft.setSize(Z,xt,!1),K.uniforms.uCanvas.value.set(Z,xt)};if(Y(),"ResizeObserver"in window){const Z=new ResizeObserver(Y);Z.observe(N),v.current=Z}else window.addEventListener("resize",Y);const at=()=>{const Z=lt.getDelta(),xt=lt.elapsedTime;K.uniforms.uTime.value=xt;const Ht=(z.current%360+O.current*xt)*Math.PI/180,ue=Math.cos(Ht),ye=Math.sin(Ht);K.uniforms.uRot.value.set(ue,ye);const P=V.current,dt=F.current,J=Math.min(1,Z*L.current);P.lerp(dt,J),K.uniforms.uPointer.value.copy(P),ft.render(j,D),C.current=requestAnimationFrame(at)};return C.current=requestAnimationFrame(at),()=>{C.current!==null&&cancelAnimationFrame(C.current),v.current?v.current.disconnect():window.removeEventListener("resize",Y),R.dispose(),K.dispose(),ft.dispose(),ft.domElement&&ft.domElement.parentElement===N&&N.removeChild(ft.domElement)}},[g,_,S,m,h,s,f,x]),Zn.useEffect(()=>{const N=y.current,j=A.current;if(!N)return;z.current=a,O.current=d,N.uniforms.uSpeed.value=s,N.uniforms.uScale.value=h,N.uniforms.uFrequency.value=g,N.uniforms.uWarpStrength.value=x,N.uniforms.uMouseInfluence.value=_,N.uniforms.uParallax.value=m,N.uniforms.uNoise.value=S;const D=H=>{const K=H.replace("#","").trim(),ot=K.length===3?[parseInt(K[0]+K[0],16),parseInt(K[1]+K[1],16),parseInt(K[2]+K[2],16)]:[parseInt(K.slice(0,2),16),parseInt(K.slice(2,4),16),parseInt(K.slice(4,6),16)];return new ct(ot[0]/255,ot[1]/255,ot[2]/255)},R=(u||[]).filter(Boolean).slice(0,pc).map(D);for(let H=0;H<pc;H++){const K=N.uniforms.uColors.value[H];H<R.length?K.copy(R[H]):K.set(0,0,0)}N.uniforms.uColorCount.value=R.length,N.uniforms.uTransparent.value=f?1:0,j&&j.setClearColor(0,f?0:1)},[a,d,s,h,g,x,_,m,S,u,f]),Zn.useEffect(()=>{const N=y.current,j=M.current;if(!N||!j)return;const D=R=>{const H=j.getBoundingClientRect(),K=(R.clientX-H.left)/(H.width||1)*2-1,ot=-((R.clientY-H.top)/(H.height||1)*2-1);F.current.set(K,ot)};return j.addEventListener("pointermove",D),()=>{j.removeEventListener("pointermove",D)}},[]),jt.jsx("div",{ref:M,className:`color-bends-container ${o}`,style:n})}const y2="/portfolio-tortillaa/assets/avatar-CqeiaKfV.jpg",pn={name:"Aitor Pérez",headline:"Desarrollador de aplicaciones multiplataforma y data analyst en Barcelona. Uniendo software y análisis de datos para crear tecnología útil.",about:{intro:"Me llamo Aitor, soy programador y analista de datos, y vivo en Barcelona. Desde pequeño tenía claro a qué me quería dedicar: empecé con juegos en Scratch y fui escalando, por eso me gusta estar al día con las tecnologías.",trajectoryLabel:"Mi trayectoria",path:[{label:"Desarrollo",text:"Estudié Desarrollo de Aplicaciones Multiplataforma con React y Java. Eso me dio una base lógica sólida sobre cómo se construye software."},{label:"Datos",text:"En las prácticas me pasé al análisis de datos. Ahora diseño procesos ETL que convierten datos en bruto en ideas claras para tomar decisiones."}]},experience:{role:"Data analyst intern",company:"Foxize",contract:"contrato de prácticas",meta:"Ene. 2026 – actualidad · Barcelona · híbrido",bullets:["Diseño y ejecución de procesos ETL con Python y SQL","Optimización de flujos poco eficientes hacia pipelines ETL reutilizables","Bases técnicas para procesos de datos escalables y mantenibles"]},education:[{title:"Grado superior: Desarrollo de Aplicaciones Multiplataforma",place:"Escola del Treball",extra:"en curso"},{title:"Grado medio: Sistemas Microinformáticos y Redes",place:"Torre de Malla"},{title:"Certificación Oracle + Alura (62 h)",place:"JavaScript, HTML & CSS, UI Design"}],skillGroups:[{label:"Lenguajes",items:["Java","JavaScript","Python","HTML5","CSS3","XML","SQL"]},{label:"Backend / tools",items:["Node.js","Docker","Git","GitHub","GitLab"]},{label:"Frontend",items:["React"]},{label:"Sistemas",items:["Windows","Linux","Redes locales","Hardware"]},{label:"Datos",items:["ETL","Python","SQL"]},{label:"Herramientas IA",items:["Cursor","GrokBot","Windsurf"]},{label:"Idiomas",items:["Español (nativo)","Catalán (nativo)","Inglés (First Certificate)"]},{label:"Interés",items:["IA","Ciberseguridad"]}],projects:[{title:"Portfolio web",description:"React + Vite + Three.js. Deploy en GitHub Pages.",href:"https://tortillaa.github.io/portfolio-tortillaa/"},{title:"Coming soon",description:"Nuevo proyecto en camino."}],contact:{cta:"¿Colaboramos?",email:"aitor.house@hotmail.com",links:[{label:"LinkedIn",href:"https://www.linkedin.com/in/aitor-perez-2b070b2b1"},{label:"GitHub",href:"https://github.com/Tortillaa"}]}};function Vr({title:o,col:n=1,colMd:a,row:s=1,variant:u="quiet",className:f="",children:d}){const h=["grid-cell",`grid-cell-${u}`,f].filter(Boolean).join(" ");return jt.jsxs("article",{className:h,style:{"--col":n,"--col-md":a??n,"--row":s},children:[o?jt.jsx("h2",{className:"grid-label",children:o}):null,d]})}function M2(){return jt.jsxs("section",{className:"portfolio-grid","aria-label":"Portfolio",children:[jt.jsxs(Vr,{col:8,colMd:6,variant:"elevated",className:"grid-cell-intro",children:[jt.jsx("img",{src:y2,alt:pn.name,className:"grid-photo"}),jt.jsxs("div",{className:"intro-copy",children:[jt.jsx("h1",{className:"intro-name",children:pn.name}),jt.jsx("p",{className:"intro-headline",children:pn.headline})]})]}),jt.jsxs(Vr,{title:"Contacto",col:4,colMd:6,variant:"elevated",className:"grid-cell-contact",children:[jt.jsx("p",{className:"contact-cta",children:pn.contact.cta}),jt.jsx("a",{className:"contact-email",href:`mailto:${pn.contact.email}`,children:pn.contact.email}),jt.jsx("ul",{className:"contact-pills",children:pn.contact.links.map(o=>jt.jsx("li",{children:jt.jsx("a",{className:"pill",href:o.href,target:"_blank",rel:"noreferrer",children:o.label})},o.href))})]}),jt.jsxs(Vr,{title:"Sobre mí",col:12,variant:"quiet",className:"grid-cell-about",children:[jt.jsx("p",{className:"grid-body",children:pn.about.intro}),jt.jsx("h3",{className:"grid-label",children:pn.about.trajectoryLabel}),jt.jsx("ul",{className:"about-path",children:pn.about.path.map(o=>jt.jsxs("li",{className:"about-path-item",children:[jt.jsx("p",{className:"grid-label",children:o.label}),jt.jsx("p",{className:"grid-body",children:o.text})]},o.label))})]}),jt.jsx(Vr,{title:"Skills",col:12,variant:"quiet",children:jt.jsx("div",{className:"skill-groups",children:pn.skillGroups.map(o=>jt.jsxs("div",{className:"skill-group",children:[jt.jsx("h3",{className:"skill-label",children:o.label}),jt.jsx("ul",{className:"skill-chips",children:o.items.map(n=>jt.jsx("li",{className:"skill-chip",children:n},n))})]},o.label))})}),pn.projects.map(o=>jt.jsxs(Vr,{title:"Proyecto",col:6,colMd:6,variant:"quiet",className:o.href?"grid-cell-project":"grid-cell-project grid-cell-soon",children:[jt.jsx("p",{className:"entry-title",children:o.title}),jt.jsx("p",{className:"grid-body",children:o.description}),o.href?jt.jsx("a",{className:"pill",href:o.href,target:"_blank",rel:"noreferrer",children:"repo"}):jt.jsx("span",{className:"pill pill-empty",children:"coming soon"})]},o.title)),jt.jsx(Vr,{title:"Experiencia",col:6,colMd:6,variant:"quiet",children:jt.jsxs("div",{className:"entry",children:[jt.jsxs("p",{className:"entry-title",children:[pn.experience.role," — ",pn.experience.company]}),jt.jsxs("p",{className:"entry-meta",children:[pn.experience.contract," · ",pn.experience.meta]}),jt.jsx("ul",{className:"entry-bullets",children:pn.experience.bullets.map(o=>jt.jsx("li",{children:o},o))})]})}),jt.jsx(Vr,{title:"Formación",col:6,colMd:6,variant:"quiet",children:jt.jsx("ul",{className:"entry-list",children:pn.education.map(o=>jt.jsxs("li",{className:"entry",children:[jt.jsx("p",{className:"entry-title",children:o.title}),jt.jsxs("p",{className:"entry-meta",children:[o.place,o.extra?` · ${o.extra}`:""]})]},o.title))})})]})}function b2(){return jt.jsx("footer",{className:"site-footer",children:jt.jsxs("div",{className:"site-footer-inner",children:[jt.jsxs("p",{className:"site-footer-copy",children:["© ",new Date().getFullYear()," ",pn.name]}),jt.jsx("ul",{className:"site-footer-links",children:pn.contact.links.map(o=>jt.jsx("li",{children:jt.jsx("a",{href:o.href,target:"_blank",rel:"noreferrer",children:o.label})},o.href))})]})})}function E2(){return jt.jsxs("div",{className:"app",children:[jt.jsx("div",{className:"cb-bg",children:jt.jsx(S2,{colors:["#1466c3","#4898e8","#c0d9f7"],speed:.4,scale:1.5,frequency:1.7,warpStrength:1.1,noise:.05,transparent:!0})}),jt.jsx("main",{className:"app-content",children:jt.jsx(M2,{})}),jt.jsx(b2,{})]})}rM.createRoot(document.getElementById("root")).render(jt.jsx(Zn.StrictMode,{children:jt.jsx(E2,{})}));
