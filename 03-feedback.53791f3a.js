!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,g=Math.max,p=Math.min,m=function(){return v.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),d?b(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function h(){var e=m();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,s&&r?b(e):(r=i=void 0,a)}function S(){var e=m(),n=T(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(v)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(v="maxWait"in n)?g(j(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},S.flush=function(){return void 0===f?a:w(m())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O,T=document.querySelector(".feedback-form"),h="feedback-form";O=JSON.parse(localStorage.getItem(h)),console.log(O),T.addEventListener("input",e(t)((function(e){e.preventDefault(),w[e.target.name]=e.target.value,w[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(w)||0)})),500),T.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.target.value)return void console.log(e.target.value)})),even.currentTarget.reset(),localStorage.removeItem(h),console.log(w);var w={}}();
//# sourceMappingURL=03-feedback.53791f3a.js.map
