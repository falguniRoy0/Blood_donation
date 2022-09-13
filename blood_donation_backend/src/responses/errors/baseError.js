class BaseError {
  constructor(errName, statusCode, message) {
    this.status = 'error';
    this.errorName = errName;
    this.statusCode = statusCode;
    this.details = message;
  }
}

module.exports = BaseError;
