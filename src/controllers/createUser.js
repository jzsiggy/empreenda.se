const { User } = require('../models')
const bcrypt = require('bcrypt');
const passport = require('passport');

const createUser = (request, response, next) => {
  const newUser = request.body;
  const salt = bcrypt.genSaltSync(10);
  const newUserHashPass = bcrypt.hashSync( newUser.password, salt );

  if (newUser.username === "" || newUser.password === "" || newUser.email === "") {
    response.render("auth/signup", {
      errorMessage : "Empty username, email or password fields"
    });
    return;
  };

  User.findOne({ email : newUser.email })
  .then(user => {
    if (user) {
      response.render("auth/signup", {
        errorMessage : "Email already in use",
      });
    } else {
      User.create({ 
        username : newUser.username,
        password : newUserHashPass,
        email : newUser.email,
        description : newUser.description,
       })
      .then(user => {
        request.login(user, (err) => {
          if (err) {
            console.log(err);
          };
        });
        response.redirect('/profile');
      })
      .catch(err => {
        console.log(err);
      });
    };
  });
};

module.exports = createUser;