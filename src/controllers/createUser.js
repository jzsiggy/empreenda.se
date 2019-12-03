const { User , Startup } = require('../models')
const bcrypt = require('bcrypt');


const createUserWithoutStartup = (request, response, next) => {
  const newUser = request.body;
  const salt = bcrypt.genSaltSync(10);
  const newUserHashPass = bcrypt.hashSync( newUser.password, salt );
  
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
        response.redirect('/board');
      })
      .catch(err => {
        console.log(err);
      });
    };
  });
};


createUserLinkedToStartup = (request, response, next) => {
  const newUser = request.body;
  const salt = bcrypt.genSaltSync(10);
  const newUserHashPass = bcrypt.hashSync( newUser.password, salt );
  
  if (newUser['startup-name'] === "" || newUser['startup-description'] === "" || newUser['startup-category'] == "") {
    response.render("auth/signup", {
      errorMessage : "Empty startup fields"
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
      Startup.create({
        name: newUser["startup-name"],
        description: newUser['startup-description'],
        category: newUser['startup-category'],
      })
      .then(newStartup => {
        User.create({
          username : newUser.username,
          password : newUserHashPass,
          email : newUser.email,
          description : newUser.description,
          startup : newStartup._id,
        })
        .then(user => {
          request.login(user, (err) => {
            if (err) {
              console.log(err);
            };
          });
          response.redirect('/board');
        })
      });
    };
  })
};




const createUser = (request, response, next) => {
  const newUser = request.body;

  if (newUser.username === "" || newUser.password === "" || newUser.email === "") {
    response.render("auth/signup", {
      errorMessage : "Empty username, email or password fields"
    });
    return;
  };
  if (request.body.status === "Desenvolvedor") {
    createUserWithoutStartup(request, response, next);
  } else {
    createUserLinkedToStartup(request, response, next)
  };
};

module.exports = createUser ;