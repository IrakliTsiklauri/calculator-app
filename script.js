const modeItem = document.querySelector(".mode-item");
const userInputNumbers = document.querySelector(".screen");
const keyboard = document.querySelector(".keyboard");
const btns = document.querySelectorAll(".number-btns");
const resetBtn = document.querySelector(".reset");
const equalBtn = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const devide = document.querySelector(".devide");
const multi = document.querySelector(".multi");
const themeBtn = document.querySelector(".theme-changer");
let counter = 2;
let currentOperation = null;
let oldValue = null;

themeBtn.addEventListener("click", () => {
  if (counter === 1) {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
  } else if (counter === 2) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else if (counter === 3) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    counter = 0;
  }
  counter++;
});

resetBtn.addEventListener("click", () => {
  userInputNumbers.value = "";
});

function handleDelete(e) {
  const btn = e.target.closest(".del");

  if (!btn) return;

  userInputNumbers.value = userInputNumbers.value.slice(0, -1);
}

function handleInput(e) {
  const numericBtn = e.target.closest(".numeric");

  if (!numericBtn) return;

  let btnContent = e.target.textContent;
  userInputNumbers.value += btnContent;
}

function handleOperations(e) {
  const operationBtn = e.target.closest(".operations");

  if (!operationBtn) return;

  let btnContent = e.target.textContent;

  if (btnContent === "=") {
    if (currentOperation && oldValue !== null) {
      const newValue = Number(userInputNumbers.value);
      const result = operate(currentOperation, oldValue, newValue);
      userInputNumbers.value = result;
    }
  } else {
    currentOperation = btnContent;
    oldValue = Number(userInputNumbers.value);
    userInputNumbers.value = "";
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

keyboard.addEventListener("click", handleDelete);
keyboard.addEventListener("click", handleInput);
keyboard.addEventListener("click", handleOperations);
