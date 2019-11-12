const {
  home,
  createUser,
  loginUser,
  logoutUser,
  renderLoginForm,
  renderSignupForm,
  renderProfile,
  renderBoard,
  parseLike,
} = require('../controllers')

const ensureLogin = require('connect-ensure-login');
const express = require('express');
const router = express.Router();

router.get("/", home);
router.get("/login", renderLoginForm);
router.post("/login", loginUser);
router.get("/signup", renderSignupForm);
router.post("/signup", createUser);
router.get("/profile", ensureLogin.ensureLoggedIn(), renderProfile);
router.get("/logout", logoutUser);
router.get("/board", ensureLogin.ensureLoggedIn(), renderBoard);
router.post("/like", ensureLogin.ensureLoggedIn(), parseLike);

module.exports = router;