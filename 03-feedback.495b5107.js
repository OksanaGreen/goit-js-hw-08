function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var o,i,r,u,a,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),c?b(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function w(e){return a=void 0,m&&o?b(e):(o=i=void 0,u)}function E(){var e=g(),n=T(e);if(o=arguments,i=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(h,t),b(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=f=i=a=void 0},E.flush=function(){return void 0===a?u:w(g())},E}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),j="feedback-form";b.addEventListener("input",e(t)((function(e){console.log(e),e.preventDefault();const{email:t,message:n}=e.target.elements;console.dir(e),console.log(t.value),console.log(n.value),j={Email:t.value,Message:n.value},localStorage.setItem(j,JSON.stringify(elements)||0)})),500),b.addEventListener("submit",(function(e){if(e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j),""===email.value||""===message.value)return;console.log(Email),console.log(Message)}));
//# sourceMappingURL=03-feedback.495b5107.js.map
