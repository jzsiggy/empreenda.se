const renderLoginForm = (request, response, next) => {
  if (request.user) {
    response.redirect("/profile");
  } else {
    let errorMessage = request.flash("error");
    response.render("auth/login", {
      errorMessage,
    });
  };
};

module.exports = renderLoginForm;