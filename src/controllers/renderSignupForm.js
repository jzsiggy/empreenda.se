const renderSignupForm = (request, response, next) => {
  if (request.user) {
    response.redirect("/profile");
  } else {
    response.render("auth/signup");
  }
};

module.exports = renderSignupForm;