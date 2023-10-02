const numberToShow = document.getElementById("number-show");
const button = document.getElementById("button");
const input = document.querySelector("input");

const rangeValue = document.getElementById("rangeValue");

const generateNumber = function () {
  let value = input.value;
  let randomNumber = Math.floor(Math.random() * parseInt(value));
  numberToShow.innerText = randomNumber;
};

button.addEventListener("click", generateNumber);
generateNumber();
