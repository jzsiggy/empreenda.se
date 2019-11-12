window.addEventListener('load', () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  for (const btn of likeButtons) {
    btn.addEventListener("click", () => {
      console.log(btn.getAttribute("user-id"));
      axios.post("/like", {
        "likedUser" : btn.getAttribute("user-id"),
      });
    });
  };
});