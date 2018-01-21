'use strict';

var prepack = require('prepack');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var PurgeFromJs = function () {
  function PurgeFromJs() {
    classCallCheck(this, PurgeFromJs);
  }

  createClass(PurgeFromJs, null, [{
    key: 'extract',
    value: function extract(content) {
      var prepackedCode = prepack.prepack(content, { singlePass: true }).code;
      return prepackedCode.match(/[A-Za-z0-9_-]+/g) || [];
    }
  }]);
  return PurgeFromJs;
}();

module.exports = PurgeFromJs;
