const passport = require('passport');

const loginUser = passport.authenticate("local", {
  successRedirect: "/board",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true,
});

module.exports = loginUser;