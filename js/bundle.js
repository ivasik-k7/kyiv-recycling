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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_textValid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/textValid.js */ \"./src/js/modules/textValid.js\");\n/* harmony import */ var _modules_textValid_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_textValid_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mask.js */ \"./src/js/modules/mask.js\");\n/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_mask_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mask = function mask(trigger) {\n  var setCursor = function setCursor(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    } else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse = true;\n      range.moveEnd(\"character\", pos);\n      range.moveStart(\"character\", pos);\n      range.select();\n    }\n  };\n\n  function makeMask(e) {\n    var matrix = \"+38 (___) ___ __ __\";\n    var i = 0;\n    var def = matrix.replace(/\\D/g, \"\");\n    var val = this.value.replace(/\\D/g, \"\");\n\n    if (def.length >= val.length) {\n      val = def;\n    }\n\n    this.value = matrix.replace(/./g, function (a) {\n      return /[_\\d]/.test(a) && i < val ? val.charAt(i++) : i >= val.length ? \"\" : a;\n    });\n\n    if (e.type === \"blur\") {\n      if (this.value.length == 2) {\n        this.value = \"\";\n      }\n    } else {\n      setCursor(this.value.length, this);\n    }\n  }\n\n  var inputsList = document.querySelectorAll(trigger);\n  inputsList.forEach(function (inp) {\n    inp.addEventListener(\"input\", makeMask);\n    inp.addEventListener(\"focus\", makeMask);\n    inp.addEventListener(\"blur\", makeMask);\n  });\n};\n\nmask('input[type=\"tel\"]');\n\n//# sourceURL=webpack:///./src/js/modules/mask.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var prev = document.querySelector(\".prev-slide\");\nvar next = document.querySelector(\".next-slide\");\nvar slideList = document.querySelectorAll(\".media-slider__item\");\ndocument.querySelector(\".slides-length\").innerHTML = slideList.length;\nvar currentSlideHtml = document.querySelector(\".current-slide\");\nvar slideIndex = 1;\n\nvar showSlide = function showSlide(idx) {\n  if (idx > slideList.length) {\n    slideIndex = 1;\n  }\n\n  if (idx < 1) {\n    slideIndex = slideList.length;\n  }\n\n  slideList.forEach(function (slide) {\n    return slide.classList.add(\"hided-slide\");\n  });\n  slideList[slideIndex - 1].classList.remove(\"hided-slide\");\n};\n\nshowSlide(slideIndex);\n\nvar slideStep = function slideStep(step) {\n  showSlide(slideIndex += step);\n};\n\nprev.addEventListener(\"click\", function () {\n  slideStep(-1);\n  currentSlideHtml.innerHTML = slideIndex;\n});\nnext.addEventListener(\"click\", function () {\n  slideStep(1);\n  currentSlideHtml.innerHTML = slideIndex;\n});\nshowSlide(slideIndex);\n\n//# sourceURL=webpack:///./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var tabsTitles = document.querySelectorAll(\"[data-title]\");\nvar tabsContent = document.querySelectorAll(\"[data-tab]\");\n\nvar showTab = function showTab(idx) {\n  tabsContent.forEach(function (tab) {\n    tab.classList.add(\"hide\");\n  });\n  tabsContent.forEach(function (tab) {\n    if (tab.dataset.tab == idx) {\n      tab.classList.remove(\"hide\");\n    }\n  });\n};\n\nshowTab(1);\n\nvar showTabByData = function showTabByData() {\n  tabsTitles.forEach(function (tab) {\n    tab.addEventListener(\"click\", function (e) {\n      tabsTitles.forEach(function (item) {\n        return item.classList.remove(\"active-tab-title\");\n      });\n      e.target.classList.add(\"active-tab-title\");\n      var targetTab = e.target.dataset.title;\n      showTab(targetTab);\n    });\n  });\n};\n\nshowTabByData();\n\n//# sourceURL=webpack:///./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/textValid.js":
/*!*************************************!*\
  !*** ./src/js/modules/textValid.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var textInpsList = document.querySelectorAll(\"[type=text]\");\n\nvar valiteText = function valiteText(arr) {\n  arr.forEach(function (item) {\n    item.addEventListener(\"keyup\", function () {\n      this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁіІїЇ .]/g, \"\");\n    });\n  });\n};\n\nvaliteText(textInpsList);\n\n//# sourceURL=webpack:///./src/js/modules/textValid.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });