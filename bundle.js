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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_calc__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_interface__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module_output__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_1__module_interface__["a" /* default */])();

let operation = new __WEBPACK_IMPORTED_MODULE_0__module_calc__["a" /* default */],
    buttons = document.getElementById('buttons'),
    inputs = document.querySelectorAll('input.inp'),
    resDiv = document.getElementById('result'),
    name, res;

buttons.addEventListener('click', (e) => {
    let target = e.target;
    if(target.tagName == 'BUTTON'){
        name = target.id;
        res = operation[name](+inputs[0].value,+inputs[1].value);
        inputs[0].value = inputs[1].value = '';
        Object(__WEBPACK_IMPORTED_MODULE_2__module_output__["a" /* default */])(res,resDiv)
    }
})

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Calc {
    constructor(){}

    concat(num1,num2){
        let res = num1 + num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    subtract(num1,num2){
        let res = num1 - num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    multiply(num1,num2){
        let res = num1 * num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    divide(num1,num2){
        let res = num1 / num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Calc); 

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let createDom = () => {
    let btnId = {
        'concat' : '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/'
    }, 
        inpId = ['num1','num2'], i, buttons = document.getElementById('buttons'),
        inputs = document.getElementById('inputs');

    for(i=0; i<inpId.length; i++){
        let input = document.createElement('input');
        input.className = 'inp';
        inputs.appendChild(input);
    }
    
    for(i in btnId){
        let btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = i;
        btn.innerHTML = btnId[i];
        buttons.appendChild(btn);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (createDom);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let output = (res,elem) => {
    if(res){
        elem.innerHTML = res;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (output);

/***/ })
/******/ ]);