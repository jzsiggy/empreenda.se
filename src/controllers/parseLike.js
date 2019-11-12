const { User , Startup } = require('../models');

const parseLike = (request, response, next) => {
  const likedUserId = request.body.likedUser;
  const likedUserStatus = request.body.likedUserStatus;
  const likerId = response.req.user._id;

  if (likedUserStatus == "user") {
    User.findById(likedUserId)
    .then(user => {
      if (user.likers.includes(likerId)) {
        User.update(
          { _id : likedUserId },
          { $pull : { likers : likerId } }
        )
        .catch(err => {
          console.log(err);
        });
      }
      else {
        User.update(
          { _id : likedUserId },
          { $push : { likers : likerId } }
        )
        .catch(err => {
          console.log(err);
        });
      };
    })
  }
  else {
    Startup.findById(likedUserId)
    .then(startup => {
      if (startup.likers.includes(likerId)) {
        Startup.update(
          { _id : likedUserId },
          { $pull : { likers : likerId } }
        )
        .catch(err => {
          console.log(err);
        });
      }
      else {
        Startup.update(
          { _id : likedUserId },
          { $push : { likers : likerId } }
        )
        .catch(err => {
          console.log(err);
        });
      };
    })
  };
};

module.exports = parseLike;