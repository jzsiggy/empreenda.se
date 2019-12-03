window.addEventListener('load', () => {
  const studentStartupRadio = document.querySelector(".studentStartupRadio");
  const startupSignupDiv = document.querySelector(".startup-signup");
  studentStartupRadio.addEventListener('change', () => {
    console.log(studentStartupRadio.value);
    if (studentStartupRadio.value === "Desenvolvedor") {
      startupSignupDiv.classList = "startup-signup hide";
    } else {
      startupSignupDiv.classList = "startup-signup";
    }
  })
});