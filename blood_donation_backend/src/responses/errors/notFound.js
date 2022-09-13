const BaseErr = require('./baseError');
const status = require('http-status');

module.exports = class NotFoundError extends BaseErr {
  constructor() {
    super(status[status.NOT_FOUND], status.NOT_FOUND, {
      message: status['404_MESSAGE']
    });
  }
};
