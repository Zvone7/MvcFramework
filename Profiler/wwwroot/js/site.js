/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Scripts/components/form-login.js":
/*!******************************************!*\
  !*** ./Scripts/components/form-login.js ***!
  \******************************************/
/*! exports provided: formLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formLogin\", function() { return formLogin; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./Scripts/utils.js\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ \"./Scripts/const.js\");\n\r\n\r\n\r\nvar formLogin = Vue.component('form-login',\r\n    {\r\n        data: function () {\r\n            return {\r\n                UserName: 'admin',\r\n                Password: 'admin',\r\n                isDisabled: false\r\n            }\r\n        },\r\n        computed: {\r\n            isLoginDisabled() {\r\n                let isDisabled = true;\r\n\r\n                if (\r\n                    this.UserName !== '' &&\r\n                    this.Password !== ''\r\n                ) {\r\n                    isDisabled = false;\r\n                }\r\n\r\n                return isDisabled;\r\n            }\r\n        },\r\n        methods: {\r\n            SubmitLoginForm() {\r\n                axios({\r\n                    method: 'post',\r\n                    url: '/User/LogIn',\r\n                    data: {\r\n                        UserName: this.$data.UserName,\r\n                        Password: this.$data.Password\r\n                    }\r\n                }).then(data => {\r\n                    console.log(\"_Logged in_: \", data.data);\r\n                    this.$refs.LoginButton.setAttribute(\"disabled\", \"disabled\");\r\n                    // create cookie\r\n                    if (data.data.username != undefined && data.data.username != \"\") {\r\n                        var userData = data.data;\r\n                        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createCookie\"])(_const__WEBPACK_IMPORTED_MODULE_1__[\"userCookieName\"], JSON.stringify(userData), null, null,null)\r\n                        window.location.href = '/';\r\n                    }\r\n\r\n                }).catch(err => {\r\n                    alert(`There was an error logging in. See details: ${err}`);\r\n                });\r\n            },\r\n            ResetForm() {\r\n                this.UserName = '';\r\n                this.Password = '';\r\n            }\r\n        },\r\n        template: '<div><label><b>Username</b></label><input type=\"text\" placeholder=\"Enter UserName\" v-model=\"UserName\" required><label><b>Password</b></label><input type=\"password\" placeholder=\"Enter Password\" v-model=\"Password\" required><button type=\"button\" class=\"success\" ref=\"LoginButton\" v-bind:disabled=\"isLoginDisabled\" v-on:click=\"SubmitLoginForm\">Login</button></div>'\r\n    }\r\n)\n\n//# sourceURL=webpack:///./Scripts/components/form-login.js?");

/***/ }),

/***/ "./Scripts/const.js":
/*!**************************!*\
  !*** ./Scripts/const.js ***!
  \**************************/
/*! exports provided: userCookieName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userCookieName\", function() { return userCookieName; });\nconst userCookieName = \"UserCookie\";\n\n//# sourceURL=webpack:///./Scripts/const.js?");

/***/ }),

/***/ "./Scripts/site.js":
/*!*************************!*\
  !*** ./Scripts/site.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./Scripts/const.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./Scripts/utils.js\");\n/* harmony import */ var _components_form_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form-login */ \"./Scripts/components/form-login.js\");\n\r\n\r\n\r\n\r\nStartup();\r\n\r\nfunction Startup() {\r\n    console.log(\"Welcome!\\nCompile time:\", new Date().toUTCString());\r\n    var userCookie = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"readCookie\"])(_const__WEBPACK_IMPORTED_MODULE_0__[\"userCookieName\"]);\r\n    //console.log(userCookie);\r\n    if ((userCookie === null || userCookie === undefined)) {\r\n        if (!window.location.toString().toLowerCase().includes(\"login\".toLowerCase())) {\r\n            //console.log(\"redirecting to login...\");\r\n            window.location.href = '/Login';\r\n        }\r\n    }\r\n    else {\r\n        console.log(\"Welcome\", JSON.parse(userCookie).name);\r\n        if (window.location.toString().toLowerCase().includes(\"login\".toLowerCase())) {\r\n            //console.log(\"redirecting home...\");\r\n            window.location.href = '/';\r\n        }\r\n    }\r\n}\r\n\r\nnew Vue(\r\n    {\r\n        el: '#app',\r\n        components: { 'login-form': _components_form_login__WEBPACK_IMPORTED_MODULE_2__[\"formLogin\"] },\r\n        data: {\r\n            UserName: '',\r\n            Password: '',\r\n            isDisabled: false\r\n        },\r\n        computed: {\r\n            isLoginDisabled() { }\r\n        },\r\n        methods: {\r\n            SubmitLoginForm() { },\r\n            ResetForm() { }\r\n        }\r\n    }\r\n);\n\n//# sourceURL=webpack:///./Scripts/site.js?");

/***/ }),

/***/ "./Scripts/utils.js":
/*!**************************!*\
  !*** ./Scripts/utils.js ***!
  \**************************/
/*! exports provided: validateEmail, readCookie, deleteCookie, createCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readCookie\", function() { return readCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCookie\", function() { return deleteCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCookie\", function() { return createCookie; });\nconst validateEmail = email => {\r\n    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n    return re.test(String(email).toLowerCase());\r\n};\r\n\r\n\r\n//readCookie/deleteCookie/createCookie thanks to\r\n//https://www.sitepoint.com/how-to-deal-with-cookies-in-java\r\n\r\nconst readCookie = function(name) {\r\n    var nameEQ = name + \"=\";\r\n    var ca = document.cookie.split(';');\r\n    for (var i = 0; i < ca.length; i++) {\r\n        var c = ca[i];\r\n        while (c.charAt(0) == ' ') c = c.substring(1, c.length);\r\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\r\n    }\r\n    return null;\r\n}\r\n\r\nconst deleteCookie = function (name, path, domain) {\r\n    // If the cookie exists\r\n    if (getCookie(name))\r\n        createCookie(name, \"\", -1, path, domain);\r\n}\r\n\r\nconst createCookie = function (name, value, expires, path, domain) {\r\n    var cookie = name + \"=\" + (value) + \";\";\r\n\r\n    if (expires) {\r\n        // If it's a date\r\n        if (expires instanceof Date) {\r\n            // If it isn't a valid date\r\n            if (isNaN(expires.getTime()))\r\n                expires = new Date();\r\n        }\r\n        else\r\n            expires = new Date(new Date().getTime() + 5*60*1000);\r\n\r\n        cookie += \"expires=\" + expires.toUTCString() + \";\";\r\n    }\r\n\r\n    if (path)\r\n        cookie += \"path=\" + path + \";\";\r\n    if (domain)\r\n        cookie += \"domain=\" + domain + \";\";\r\n\r\n    document.cookie = cookie;\r\n}\n\n//# sourceURL=webpack:///./Scripts/utils.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************!*\
  !*** multi ./Scripts/const.js ./Scripts/site.js ./Scripts/utils.js ./Scripts/components/form-login.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Repos\\Profiler\\Profiler\\Scripts\\const.js */\"./Scripts/const.js\");\n__webpack_require__(/*! C:\\Repos\\Profiler\\Profiler\\Scripts\\site.js */\"./Scripts/site.js\");\n__webpack_require__(/*! C:\\Repos\\Profiler\\Profiler\\Scripts\\utils.js */\"./Scripts/utils.js\");\nmodule.exports = __webpack_require__(/*! C:\\Repos\\Profiler\\Profiler\\Scripts\\components\\form-login.js */\"./Scripts/components/form-login.js\");\n\n\n//# sourceURL=webpack:///multi_./Scripts/const.js_./Scripts/site.js_./Scripts/utils.js_./Scripts/components/form-login.js?");

/***/ })

/******/ });