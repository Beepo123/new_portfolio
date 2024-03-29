let expression = "";

document.querySelector(".lower-part").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "C") {
      clearDisplay();
      return;
    }

    if (event.target.innerText === "=") {
      evaluate();
      return;
    }

    compute(event);
  }
});

function clearDisplay() {
  const display = document.querySelector(".display");
  expression = "";
  display.value = "";
}

function compute(event) {
  const value = event.target.innerText;
  expression += value;
  document.querySelector(".display").value = expression;
}
function evaluate() {
  try {
    expression = eval(expression)
    document.querySelector(".display").value = expression;
  } catch {
    document.querySelector(".display").value = "invalid expression";
  }
  expression = '';
}
