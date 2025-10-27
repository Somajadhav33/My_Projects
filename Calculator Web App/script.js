let display = "0";
let expression = "";
const operators = ["+", "-", "*", "/"];

function updateDisplay() {
  document.getElementById("display").textContent = display;
}

function isOperator(char) {
  return operators.includes(char);
}

function handleButtonClick(value) {
  if (value === "C") {
    display = "0";
    expression = "";
  } else if (value === "=") {
    try {
      const result = eval(expression);
      if (result === Infinity || result === -Infinity) {
        display = "Error";
        expression = "";
      } else {
        display = result.toString();
        expression = display;
      }
    } catch {
      display = "Error";
      expression = "";
    }
  } else if (isOperator(value)) {
    // Prevent multiple consecutive operators
    if (isOperator(expression.slice(-1))) {
      expression = expression.slice(0, -1) + value;
      display = display.slice(0, -1) + value;
    } else if (display === "Error") {
      display = value;
      expression = value;
    } else {
      display += value;
      expression += value;
    }
  } else {
    if (display === "0" || display === "Error") {
      display = value;
      expression = value;
    } else {
      display += value;
      expression += value;
    }
  }
  updateDisplay();
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/[0-9]/.test(key)) handleButtonClick(key);
  if (["+", "-", "*", "/"].includes(key)) handleButtonClick(key);
  if (key === "Enter") handleButtonClick("=");
  if (key === "Escape") handleButtonClick("C");
  if (key === ".") handleButtonClick(".");
  if (["(", ")"].includes(key)) handleButtonClick(key);
});
