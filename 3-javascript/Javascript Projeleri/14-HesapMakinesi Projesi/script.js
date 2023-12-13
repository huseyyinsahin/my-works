const calculatorTitle = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const resetButton = document.getElementById("resetButton");

//console.log(buttons);

function sendNumberValue(number) {
  //   console.log(number);
  //   calculatorTitle.textContent = number;
  const displayValue = calculatorTitle.textContent;
  calculatorTitle.textContent =
    displayValue === "0" ? number : displayValue + number;
}

buttons.forEach((button) => {
  if (button.classList.length === 0) {
    button.addEventListener("click", () => sendNumberValue(button.value));
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => sendNumberValue(button.value));
  } else if (button.classList.contains("decimal")) {
    button.addEventListener("click", () => sendNumberValue(button.value));
  }
});
