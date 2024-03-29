document.querySelector("button").addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = getInputValue(".name-input");
  const number = getInputValue(".number-input");
  const email = getInputValue(".email-input");
  const message = getInputValue(".message-input");

  validateInput(name, ".name-div", validateName);
  validateInput(number, ".number-div", validateNumber);
  validateInput(email, ".email-div", validateEmail);

  if (message.length !== 30) {
    displayCharsRemaining();
    return;
  }

  location.reload();
}

function getInputValue(selector) {
  return document.querySelector(selector).value;
}

function validateInput(value, containerSelector, validator) {
  const container = document.querySelector(containerSelector);
  if (!validator(value)) {
    container.classList.add("error");
  } else {
    container.classList.remove("error");
  }
}

function validateName(name) {
  const spaceIndex = name.indexOf(" ");
  if (spaceIndex !== -1) {
    const beforeSpace = name[spaceIndex - 1];
    const afterSpace = name[spaceIndex + 1];
    return isAlphabet(beforeSpace) && isAlphabet(afterSpace);
  }
  return false;
}

function validateNumber(number){
  for (let i = 0; i < number.length; i++) {
    if (isNaN(Number(number[i]))) {
      return false;
    }
  }
  return true;
}

function isAlphabet(char) {
  return char && char.toLowerCase() !== char.toUpperCase();
}

function validateEmail(email) {
  return email.includes("@gmail.com");
}

function displayCharsRemaining() {
  const message = document.querySelector(".message-input").value;
  const remaining = `${30 - message.length} characters remaining`;
  const charCount = document.querySelector(".chars-remaining");
  charCount.innerHTML = remaining;
  charCount.classList.add("display");
}
