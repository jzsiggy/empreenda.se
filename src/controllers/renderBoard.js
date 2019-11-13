const { User , Startup } = require('../models');

const renderBoard = (request, response, next) => {
  const currentUser = request.user;
  if (!currentUser.startup) {
    Startup.find({ })
    .then(startups => {

      startups.forEach(startup => {
        if (startup.likers.includes(currentUser._id)) {
          startup["userHasLiked"] = true;
        };
      });

      response.render("board", {
        currentUser : "Student",
        users : startups,
      });
    });
  } else {
    User.find({ startup : { $exists : false } })
    .then(users => {

      users.forEach(dbUser => {
        if (dbUser.likers.includes(currentUser._id)) {
          dbUser["userHasLiked"] = true;
        };
      });

      response.render("board", {
        currentUser : "Startup",
        users,
      });
    });
  };
};

module.exports = renderBoard;