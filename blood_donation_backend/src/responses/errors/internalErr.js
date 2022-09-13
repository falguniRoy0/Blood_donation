const BaseErr = require('./baseError');
const status = require('http-status');

module.exports = class InternalError extends BaseErr {
  constructor() {
    super(
      status[status.INTERNAL_SERVER_ERROR],
      status.INTERNAL_SERVER_ERROR,
      status['505_MESSAGE']
    );
  }
};
