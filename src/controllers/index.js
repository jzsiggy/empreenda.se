const home = require('./home');
const loginUser = require('./loginUser');
const renderLoginForm = require('./renderLoginForm')
const renderSignupForm = require('./renderSignupForm')
const renderProfile = require('./renderProfile');
const logoutUser = require('./logoutUser');
const createUser = require('./createuser');
const renderBoard = require('./renderBoard');

module.exports = {
  home,
  createUser,
  loginUser,
  logoutUser,
  renderLoginForm,
  renderSignupForm,
  renderProfile,
  renderBoard,
};