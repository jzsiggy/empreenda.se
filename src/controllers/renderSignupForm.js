const renderSignupForm = (request, response, next) => {
  response.render("auth/signup");
};

module.exports = renderSignupForm;