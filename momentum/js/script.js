const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const NAME = document.querySelector(".name");
const BODY = document.querySelector(".body");
const SLIDE_NEXT = document.querySelector(".slide-next");
const SLIDE_PREV = document.querySelector(".slide-prev");

// Date and Time

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = currentTime;
  showDate();
  getTimeOfDay();
  setTimeout(showTime, 1000);
}
showTime();

function showDate() {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-US", options);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let dayWeek = date.getDay();
  DATE.textContent = days[dayWeek - 1] + ", " + currentDate;
}

// Greeting

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 19) {
    return "afternoon";
  } else if (hours >= 19 && hours < 24) {
    return "evening";
  } else {
    return "night";
  }
}

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay},`;
GREETING.textContent = greetingText;

function setLocalStorage() {
  localStorage.setItem("name", NAME.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    NAME.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

// Slider

function getRandomNum(min, max) {
  min = 1;
  max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNum();

function setBg() {
  const img = new Image();
  let bgNum = String(randomNum).padStart(2, "0");
  img.src =
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/" +
    `${timeOfDay}` +
    "/" +
    `${bgNum}` +
    ".jpg";
  
  img.onload = () => {
    BODY.style.backgroundImage =
      "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/" +
      `${timeOfDay}` +
      "/" +
      `${bgNum}` +
      ".jpg')";
  };
}
setBg();

function getSlideNext() {
  if (randomNum === 20) {
    randomNum = 0;
  }
  randomNum++;
  setBg();
}

function getSlidePrev() {
  if (randomNum === 1) {
    randomNum = 21;
  }
  randomNum--;
  setBg();
}

SLIDE_NEXT.addEventListener("click", getSlideNext);
SLIDE_PREV.addEventListener("click", getSlidePrev);
