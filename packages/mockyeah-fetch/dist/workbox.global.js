self.mockyeahFetchWorkbox=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){var n=t(2),o=t(3),u=t(4);e.exports=function(e,r){return n(e)||o(e,r)||u()}},function(e,r,t){"use strict";t.r(r),t.d(r,"matchCb",(function(){return a})),t.d(r,"handlerCb",(function(){return c}));var n=t(0),o=t.n(n),u={};self.addEventListener("message",(function(e){var r=e,t=r.source,n=r.data;if(t){var o=t.id;if(o&&n&&"mockyeahServiceWorkerDataResponse"===n.type){var a=n.payload||{},c=a.requestId,i=a.response;if(!c)return;if(!i)return;u[o]=u[o]||{};var s=u[o][c];if(!s)return;s.resolve({response:i})}}}));var a=function(e){var r=e.event;try{return Boolean(r.request.headers.get("x-mockyeah-service-worker-request"))}catch(e){return console.log("@mockyeah/fetch service worker match error",e),!1}},c=function(e){var r=e.event;try{Object.entries(u).forEach((function(e){var r=o()(e,2),t=r[0],n=r[1];Object.entries(n).forEach((function(e){var r=o()(e,2),t=r[0],u=r[1];Date.now()-u.timestamp>12e4&&delete n[t]})),0===Object.keys(n).length&&delete u[t]}));var t=r.request,n=r.clientId,a=t.headers.get("x-mockyeah-service-worker-request");if(!a)return fetch(r.request);var c=new Promise((function(e,r){u[n]=u[n]||{},u[n][a]={resolve:e,reject:r,timestamp:Date.now()}}));return self.clients.get(n).then((function(e){var r={type:"mockyeahServiceWorkerDataRequest",payload:{requestId:a}};return e.postMessage(r),c.then((function(e){var r=e.response,t=r.status,n=r.body,o=r.headers;return new Response(n,{status:t,headers:o})}))}))}catch(e){return console.log("@mockyeah/fetch service worker handler error",e),fetch(r.request)}}},function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},function(e,r){e.exports=function(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,o=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw u}}return t}}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}]);