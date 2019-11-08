const renderProfile = (request, response, next) => {
  response.render('profile', {
    user : request.user,
  });
};

module.exports = renderProfile;