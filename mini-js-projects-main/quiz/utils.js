export function disableButtons() {
  document.querySelectorAll(".btn").forEach((button) => {
    button.disabled = true;
  });
}

export function resetButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = false;
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    console.log("button reset")
  });
}