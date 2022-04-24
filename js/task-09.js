function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

changeColorBtnEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
}
