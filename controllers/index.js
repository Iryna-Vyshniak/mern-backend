const register = require('./users/register');
const login = require('./users/login');
const logout = require('./users/logout');
const getCurrent = require('./users/getCurrent');
const updateAvatar = require('./users/updateAvatar');
const { verifyEmail, resendEmail } = require('./users/verifyEmail');
const add = require('./dataitems/add');
const getAll = require('./dataitems/getAll');
const getById = require('./dataitems/getById');
const updateById = require('./dataitems/updateById');
const removeById = require('./dataitems/removeById');
const updateFieldById = require('./dataitems/updateFieldById');

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateAvatar,
  verifyEmail,
  resendEmail,
  add,
  getAll,
  getById,
  updateById,
  removeById,
  updateFieldById,
};
