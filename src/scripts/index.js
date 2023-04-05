const discoBtn = document.getElementById("disco-btn");
const body = document.body;

discoBtn.addEventListener("click", () => {
  body.classList.toggle("disco-mode");
});

//  MUSIC

const button = document.getElementById("disco-btn");
const audio = document.getElementById("hamter");
let isPlaying = false;

button.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
});

const boom_btn = document.getElementById("boom-btn");
const boom = document.getElementById("boom");

boom_btn.addEventListener("click", () => {
  boom.play();
});
