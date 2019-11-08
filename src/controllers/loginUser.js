const passport = require('passport');

const loginUser = passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true,
});

module.exports = loginUser;