const jwt = require('jsonwebtoken');

const User = require('../models').User;

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      throw new Error('Invalid request');
    }
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
      if (err) {
        throw new Error('Invalid token');
      }
      if (err instanceof jwt.TokenExpiredError) {
        throw new Error('Token expired');
      }

      req.user = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
