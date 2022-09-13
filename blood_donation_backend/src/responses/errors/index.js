const BadRequestErr = require('./badRequest');
const BaseError = require('./baseError');
const NotFound = require('./notFound');
const InternalError = require('./internalErr');
const Unauthorized = require('./unauthorized');

module.exports = {
  BadRequestErr,
  BaseError,
  NotFound,
  InternalError,
  Unauthorized
};
