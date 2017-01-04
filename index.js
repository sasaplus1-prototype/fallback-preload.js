'use strict';

var isString = require('type-check/is-string');

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
