const status = require('http-status');

const BaseError = require('./baseError');

module.exports = class UnauthorizedError extends BaseError {
  constructor(message = 'Wrong credentials!') {
    super(status[status.UNAUTHORIZED], status.UNAUTHORIZED, message); // error, statusCode, message
  }
};
