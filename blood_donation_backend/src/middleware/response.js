const Success = require('../responses/Success');
const { BaseError, NotFound, InternalError } = require('../responses/errors');

module.exports = (req, res, next) => {
  let oldSend = res.json;
  res.json = (data) => {
    res.json = oldSend;
    if (data instanceof BaseError) {
      return res.json(data);
    }
    if (typeof data === 'undefined' || data === null) {
      return res.json(new NotFound());
    } else if (typeof data === 'object' || Array.isArray(data)) {
      return res.json(new Success('OK', '', res.statusCode, data || []));
    } else if (typeof data === 'string') {
      return res.json(new Success(res.statusMessage, data, res.statusCode));
    } else if (data instanceof Error) {
      return res.json(new InternalError());
    } else {
      return res.json(new NotFound());
    }
  };
  next();
};
