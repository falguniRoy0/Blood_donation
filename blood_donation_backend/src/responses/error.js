class Error {
  constructor(errorName, statusCode, message) {
    this.status = 'error';
    this.errorName = errorName;
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = Error;
