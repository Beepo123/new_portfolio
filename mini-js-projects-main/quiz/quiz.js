import { getQuestionObj, checkAnswer } from "./questions.js";
import { disableButtons, resetButtons } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  renderPage();
});

let totalScore = 0;
let currQuestionNum = 0;

function renderPage() {
  const questionObj = getQuestionObj(currQuestionNum);
  document.getElementById("question").innerHTML = questionObj.question;

  // Display button choices
  const ansButtons = document.querySelectorAll(".btn");
  ansButtons.forEach((button, index) => {
    button.innerHTML = questionObj.choices[index];
  });

  // Add event listener for hover effect to each button
  ansButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      button.classList.add("hover-effect");
    });
    button.addEventListener("mouseleave", function () {
      button.classList.remove("hover-effect");
    });
  });
}

document.querySelector(".quiz").addEventListener("click", (event) => {
  // when picking answer
  if (event.target.closest(".btn")) {
    totalScore = checkAnswer(event, totalScore, currQuestionNum);
    disableButtons();
    document.querySelector(".next-btn").style.display = "block";
  }

  // when going to next question
  if (event.target.closest(".next-btn")) {
    if (currQuestionNum === 4){
      displayScore();
      return;
    }

    document.querySelector(".next-btn").style.display = "none";
    currQuestionNum++;
    resetButtons();
    renderPage();
  }
});

function displayScore(){
  const score = `Score: ${totalScore} / 5`
  document.querySelector('.quiz').innerHTML = score
  document.querySelector(".next-btn").style.display = "none";
}

