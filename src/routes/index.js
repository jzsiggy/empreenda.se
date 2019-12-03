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

router.get("/exampleProfileDev", (request, response, next) => {
  response.render('exampleprofileDev');
});

router.get("/exampleProfileStartup", (request, response, next) => {
  response.render('exampleprofileStartup');
});

router.get("/simMessage", (request, response, next) => {
  response.render('exampleMessage');
})

router.get("/simMeeting", (request, response, next) => {
  response.render('exampleMeeting');
})

module.exports = router;