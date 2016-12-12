'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var InvalidHeaderError = function InvalidHeaderError(message) {
  this.name = 'InvalidHeaderError';
  this.message = message;
  this.stack = new Error().stack;
};

InvalidHeaderError.prototype = Object.create(TypeError.prototype);
InvalidHeaderError.prototype.constructor = InvalidHeaderError;

exports.default = InvalidHeaderError;
//# sourceMappingURL=invalid-header-error.js.map