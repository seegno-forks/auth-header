const InvalidHeaderError = function InvalidHeaderError(message) {
  this.name = 'InvalidHeaderError';
  this.message = message;
  this.stack = (new Error()).stack;
};

InvalidHeaderError.prototype = Object.create(TypeError.prototype);
InvalidHeaderError.prototype.constructor = InvalidHeaderError;

export default InvalidHeaderError;
