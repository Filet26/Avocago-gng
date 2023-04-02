const discoBtn = document.getElementById("disco-btn");
const body = document.body;

discoBtn.addEventListener("click", () => {
  body.classList.toggle("disco-mode");
});
