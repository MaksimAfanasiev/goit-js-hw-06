const inputEl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputEl.addEventListener("input", onRangeInput);

function onRangeInput(event) {
    text.style.fontSize = `${inputEl.value}px`;
}
