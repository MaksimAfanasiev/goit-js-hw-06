function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const renderedList = document.querySelector("#boxes");


createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);


function onCreateBtnClick(event) {
  createBoxes(inputEl.value);
};

function onDestroyBtnClick(event) {
  inputEl.value = "";
  destroyBoxes();
};


function createBoxes(amount) {

  let boxWidth = 30;
  let boxCollectionMarkup = "";

  for (let i = 0; i < amount; i+=1) {
    boxWidth = 30 + i * 10;
    boxCollectionMarkup += `<div style="width: ${boxWidth}px; 
    height: ${boxWidth}px; 
    background-color: ${getRandomHexColor()}">
    </div>`;
  };

  renderedList.insertAdjacentHTML("beforeEnd", boxCollectionMarkup);
  
};

function destroyBoxes() {
  renderedList.innerHTML = "";
};