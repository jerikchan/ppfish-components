!function(e){function webpackJsonpCallback(t){for(var o=t[0],a=t[1],u=t[2],_,c,l=0,p=[];l<o.length;l++)c=o[l],r[c]&&p.push(r[c][0]),r[c]=0;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&(e[_]=a[_]);for(i&&i(t);p.length;)p.shift()();return n.push.apply(n,u||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,u=1;u<o.length;u++){var i=o[u];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var t={},r={2:0},n=[];function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="";var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var u=0;u<o.length;u++)webpackJsonpCallback(o[u]);var i=a;n.push([1289,1,0]),checkDeferredModules()}({1289:function(e,t,r){e.exports=r(1290)},1290:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(5),u=r.n(a),i=r(2);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function Demo(e){return _classCallCheck(this,Demo),_possibleConstructorReturn(this,_getPrototypeOf(Demo).call(this))}return _inherits(Demo,e),_createClass(Demo,[{key:"render",value:function render(){return o.a.createElement("div",null,o.a.createElement(i.b,{message:"Warning text",banner:!0}),o.a.createElement("br",null),o.a.createElement(i.b,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),o.a.createElement("br",null),o.a.createElement(i.b,{showIcon:!1,message:"Warning text without icon",banner:!0}),o.a.createElement("br",null),o.a.createElement(i.b,{type:"error",message:"Error text",banner:!0}))}}]),Demo}(o.a.Component);u.a.render(o.a.createElement(_,null),document.getElementById("app"))}});