const logoutUser = (request, response) => {
  request.logout();
  response.redirect("/");
};

module.exports = logoutUser;