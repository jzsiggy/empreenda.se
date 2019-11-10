const { User , Startup } = require('../models');

const renderBoard = (request, response, next) => {
  const user = request.user;
  if (!user.startup) {
    Startup.find({ })
    .then(startups => {
      response.render("board", {
        users : startups,
      });
    });
  } else {
    User.find({ startup : { $exists : false } })
    .then(users => {
      response.render("board", {
        users
      });
    });
  };
};

module.exports = renderBoard;