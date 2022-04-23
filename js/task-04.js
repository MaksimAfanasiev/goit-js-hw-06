const decrButton = document.querySelector('#counter button[data-action="decrement"]');
const incrButton = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrButton.addEventListener("click", (event) => {
    counterValue -=1
    valueEl.textContent = counterValue;
});

incrButton.addEventListener("click", (event) => {
    counterValue +=1
    valueEl.textContent = counterValue;
});
