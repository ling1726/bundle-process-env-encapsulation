/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./lib-bad/env.js
const isProd = "production" === 'production';
;// CONCATENATED MODULE: ./lib-bad/usePopper.js


function usePopper() {
    if (!isProd) {
        console.log('Should not be in prod')
    }
}


;// CONCATENATED MODULE: ./index.bad.js


console.log(usePopper);


/******/ })()
;