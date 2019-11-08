const home = require('./home');
const createUser = require('./createUser');
const loginUser = require('./loginUser');
const renderLoginForm = require('./renderLoginForm')
const renderSignupForm = require('./renderSignupForm')
const renderProfile = require('./renderProfile');
const logoutUser = require('./logoutUser');

module.exports = {
  home,
  createUser,
  loginUser,
  logoutUser,
  renderLoginForm,
  renderSignupForm,
  renderProfile,
};