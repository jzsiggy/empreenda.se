const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');

const serializer = (user, done) => {
  done(null, user);
};

const deserializer = (id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      return done(err);
    };
    done(null, user);
  });
};

const localStrategy = new LocalStrategy({
  passReqToCallback : true,
}, (request, username, password, next) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return next(err);
    };
    if (!user) {
      return next(null, false, { message : "No username" });
    };
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message : "Incorrect password" });
    };
    return next(null, user);
  });
});

module.exports = {
  serializer,
  deserializer,
  localStrategy,
};