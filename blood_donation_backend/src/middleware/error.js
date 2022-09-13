const { BaseError } = require('../responses/errors');
const httpStatus = require('http-status');

const handleError = (err, req, res, next) => {
  let errorInstance;
  if (err instanceof BaseError) {
    errorInstance = err;
  }
  if (!errorInstance) {
    errorInstance = new BaseError(
      httpStatus[400],
      httpStatus.BAD_REQUEST,
      err.errors
    );
  }
  return res.status(errorInstance.statusCode).json(errorInstance);
};
module.exports = handleError;
