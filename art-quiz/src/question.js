import questions from "./images";

const CHOICES = Array.from(
  document.querySelectorAll(".artists__questions-choice")
);
const PROGRESS = document.querySelector("#artistProgressFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const max_questions = 10

console.log(questions[0]);

