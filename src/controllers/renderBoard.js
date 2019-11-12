const { User , Startup } = require('../models');

const renderBoard = (request, response, next) => {
  const user = request.user;
  if (!user.startup) {
    Startup.find({ })
    .then(startups => {
      response.render("board", {
        currentUser : "Student",
        users : startups,
      });
    });
  } else {
    User.find({ startup : { $exists : false } })
    .then(users => {
      response.render("board", {
        currentUser : "Startup",
        users
      });
    });
  };
};

module.exports = renderBoard;