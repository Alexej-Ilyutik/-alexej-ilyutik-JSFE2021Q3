import questions from "./images";

const CHOICES = Array.from(
  document.querySelectorAll(".artists__questions-choice")
);
const PROGRESS = document.querySelector("#artistProgressFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score;
let questionCounter;
let availableQuestions = [];

const max_questions = 10;

console.log(questions[0]);

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > max_questions) {
    localStorage.setItem("mostRecentScore", score);
    console.log("yes");
  }
  questionCounter++;
  PROGRESS.style.width = `${(questionCounter / max_questions) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  CHOICES.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

CHOICES.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoise = e.target;
    const selectedAnswer = selectedChoise.dataset["number"];
    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    selectedChoise.parentElement.classList.add(classToApply);
  });
});
