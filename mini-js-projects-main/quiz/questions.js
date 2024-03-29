export const questionsArray = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris", // Actual answer
    answerIndex: 1 // Index of the correct answer within the choices array
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Venus", "Mercury"],
    answer: "Mars", // Actual answer
    answerIndex: 0 // Index of the correct answer within the choices array
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "CH4", "O2"],
    answer: "H2O", // Actual answer
    answerIndex: 0 // Index of the correct answer within the choices array
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci", // Actual answer
    answerIndex: 2 // Index of the correct answer within the choices array
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    answer: "Blue whale", // Actual answer
    answerIndex: 1 // Index of the correct answer within the choices array
  }
];

export function getQuestionObj(currQuestionNum){
  return questionsArray[currQuestionNum]
}

export function checkAnswer(event, totalScore, currQuestionNum) {
  const button = event.target.closest(".btn");
  const choice = button.innerHTML;

  if (choice === getQuestionObj(currQuestionNum).answer) {
    totalScore++;
  } else {
    button.style.backgroundColor = "red";
  }

  const correctAnswer = getQuestionObj(currQuestionNum).answerIndex;
  const buttons = document.querySelectorAll(".btn");
  buttons[correctAnswer].style.backgroundColor = "lightgreen";

  return totalScore;
}