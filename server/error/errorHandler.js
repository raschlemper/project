'use strict'

module.exports = function (err, req, res, next) {
  var statusCode = err.errorCode || 500;
  var error = err.message || err;
  res.status(statusCode).send(error);
};