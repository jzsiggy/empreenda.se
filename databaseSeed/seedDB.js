const bcrypt = require('bcrypt');
const { mongooseConnect } = require('../src/resources');
const { User , Startup } = require('../src/models');


const users = require('./dbdata');


const createUser = (user) => {
  const salt = bcrypt.genSaltSync(10);
  const userHashPass = bcrypt.hashSync( user.password, salt );

  if (user.status === "Student") {
    User.create({
      username : user.username,
      password : userHashPass,
      email : user.email,
      description : user.description,
    })
    .then(user => {
      console.log(user);
    })
    .catch(err => {
      console.log(err);
    });
  }
  else {
    Startup.create({
      name: user["startup-name"],
      description: user['startup-description'],
      category: user['startup-category'],
    })
    .then(newStartup => {
      User.create({
        username : user.username,
        password : userHashPass,
        email : user.email,
        description : user.description,
        startup : newStartup._id,
      })
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
    })
    .then(startup => {
      console.log(startup);
    })
    .catch(err => {
      console.log(err);
    });
  };
};

const seedDb = (users) => {
  for (user of users) {
    createUser(user);
  };
};

mongooseConnect()

setTimeout(() => {
  seedDb(users)
}, 1000);