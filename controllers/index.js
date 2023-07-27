const register = require('./users/register');
const login = require('./users/login');
const logout = require('./users/logout');
const getCurrent = require('./users/getCurrent');
const updateAvatar = require('./users/updateAvatar');
const { verifyEmail, resendEmail } = require('./users/verifyEmail');

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendEmail,
};
