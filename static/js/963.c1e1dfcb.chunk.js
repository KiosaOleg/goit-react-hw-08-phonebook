(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[963],{888:function(t,n,e){"use strict";var r=e(9047);function o(){}function u(){}u.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,u,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:o};return e.PropTypes=e,e}},2007:function(t,n,e){t.exports=e(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8617:function(t,n,e){"use strict";e.d(n,{Bhs:function(){return u},VcF:function(){return o}});var r=e(9983);function o(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"}}]})(t)}function u(t){return(0,r.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}}]})(t)}},6916:function(t,n,e){"use strict";e.d(n,{P1:function(){return c}});var r="NOT_FOUND";var o=function(t,n){return t===n};function u(t,n){var e="object"===typeof n?n:{equalityCheck:n},u=e.equalityCheck,i=void 0===u?o:u,a=e.maxSize,c=void 0===a?1:a,f=e.resultEqualityCheck,p=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!t(n[o],e[o]))return!1;return!0}}(i),l=1===c?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:r},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(p):function(t,n){var e=[];function o(t){var o=e.findIndex((function(e){return n(t,e.key)}));if(o>-1){var u=e[o];return o>0&&(e.splice(o,1),e.unshift(u)),u.value}return r}return{get:o,put:function(n,u){o(n)===r&&(e.unshift({key:n,value:u}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,p);function s(){var n=l.get(arguments);if(n===r){if(n=t.apply(null,arguments),f){var e=l.getEntries(),o=e.find((function(t){return f(t.value,n)}));o&&(n=o.value)}l.put(arguments,n)}return n}return s.clearCache=function(){return l.clear()},s}function i(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function a(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var u,a=0,c={memoizeOptions:void 0},f=r.pop();if("object"===typeof f&&(c=f,f=r.pop()),"function"!==typeof f)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var p=c,l=p.memoizeOptions,s=void 0===l?e:l,v=Array.isArray(s)?s:[s],h=i(r),y=t.apply(void 0,[function(){return a++,f.apply(null,arguments)}].concat(v)),d=t((function(){for(var t=[],n=h.length,e=0;e<n;e++)t.push(h[e].apply(null,arguments));return u=y.apply(null,t)}));return Object.assign(d,{resultFunc:f,memoizedResultFunc:y,dependencies:h,lastResult:function(){return u},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),d};return o}var c=a(u)},5984:function(t,n,e){"use strict";e.d(n,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=963.c1e1dfcb.chunk.js.map