const renderLoginForm = (request, response, next) => {
  let errorMessage = request.flash("error");
  response.render("auth/login", {
    errorMessage,
  });
};

module.exports = renderLoginForm;