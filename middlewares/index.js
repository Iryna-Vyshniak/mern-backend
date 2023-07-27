const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const upload = require('./upload');
const globalErrorHandler = require('./globalErrorHandler');
const missingRouteHandler = require('./missingRouteHandler');

module.exports = {
  isValidId,
  authenticate,
  upload,
  globalErrorHandler,
  missingRouteHandler,
};
