/*!
 * @license fallback-preload.js ver.0.1.0 Copyright(c) 2017 sasa+1
 * https://github.com/sasaplus1-prototype/fallback-preload.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fallbackPreload"] = factory();
	else
		root["fallbackPreload"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isString = __webpack_require__(1);

	var isSupports = (function(){
	  var link = document.createElement('link');

	  return (
	    link.relList && link.relList.supports && link.relList.supports('preload')
	  );
	}());

	/**
	 * fallback <link rel="preload">
	 *
	 * @param {String} selector
	 * @param {String} rel
	 * @throws {TypeError}
	 */
	function fallbackPreload(selector, rel) {
	  var preloads, i, len;

	  if (isSupports) {
	    return;
	  }

	  if (!isString(selector)) {
	    throw new TypeError('selector must be a String');
	  }
	  if (!isString(rel)) {
	    throw new TypeError('rel must be a String');
	  }

	  preloads = document.querySelectorAll(selector);

	  for (i = 0, len = preloads.length; i < len; ++i) {
	    preloads[i].rel = rel;
	  }
	}

	module.exports = fallbackPreload;


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isString(value) {
	  return (
	    typeof value === 'string' || toString.call(value) === '[object String]'
	  );
	};


/***/ }
/******/ ])
});
;