const BaseErr = require('./baseError');
const status = require('http-status');

module.exports = class BadRequestErr extends BaseErr {
  constructor(message = 'Invalid request!') {
    super(status[status.BAD_REQUEST], status.BAD_REQUEST, message); // error, statusCode, message
  }
};
