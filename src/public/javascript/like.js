window.addEventListener('load', () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  for (const btn of likeButtons) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("like-btn-bw")
      btn.classList.toggle("like-btn-red")
      axios.post("/like", {
        "likedUser" : btn.getAttribute("user-id"),
        "likedUserStatus": btn.getAttribute("user-status")
      });
    });
  };
});