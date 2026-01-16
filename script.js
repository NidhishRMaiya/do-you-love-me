const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");

function moveNo() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const minX = padding;
  const minY = padding;

  const newX = Math.random() * (maxX - minX) + minX;
  const newY = Math.random() * (maxY - minY) + minY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "flex";
});
