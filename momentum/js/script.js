const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const NAME = document.querySelector(".name");
const BODY = document.querySelector(".body");
const SLIDE_NEXT = document.querySelector(".slide-next");
const SLIDE_PREV = document.querySelector(".slide-prev");
const WEATHER_ICON = document.querySelector(".weather-icon");
const TEMPERATURE = document.querySelector(".temperature");
const WEATHER_DESCRIPTION = document.querySelector(".weather-description");
const CITY = document.querySelector(".city");
const WIND = document.querySelector(".wind");
const HUMIDITY = document.querySelector(".humidity");
const WEATHER_ERROR = document.querySelector(".weather-error");
const QUOTE = document.querySelector(".quote");
const AUTHOR = document.querySelector(".author");
const CHANGE_QUOTE = document.querySelector(".change-quote");

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
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayWeek = date.getDay();
  DATE.textContent = days[dayWeek] + ", " + currentDate;
}

// Greeting

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours < 18) {
    return "afternoon";
  } else if (hours >= 18 && hours < 24) {
    return "evening";
  } else {
    return "night";
  }
}

const timeOfDay = getTimeOfDay();

function getgreetingText() {
  const greetingText = `Good ${timeOfDay},`;
  GREETING.textContent = greetingText;
  setTimeout(getgreetingText, 1000);
}
getgreetingText();

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
    "https://raw.githubusercontent.com/Alexej-Ilyutik/stage1-tasks/assets/images/" +
    `${timeOfDay}` +
    "/compressed/" +
    `${bgNum}` +
    ".webp";

  img.onload = () => {
    BODY.style.backgroundImage =
      "url('https://raw.githubusercontent.com/Alexej-Ilyutik/stage1-tasks/assets/images/" +
      `${timeOfDay}` +
      "/compressed/" +
      `${bgNum}` +
      ".webp')";
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

// Weather

if (localStorage.getItem("city") === undefined) {
  CITY.value = "Minsk";
} else {
  CITY.value = localStorage.getItem("city");
}

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=en&appid=b69f64863e2b4d04a4a6ef613a52f41d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    WEATHER_ICON.className = "weather-icon owf";
    WEATHER_ICON.classList.add(`owf-${data.weather[0].id}`);
    TEMPERATURE.textContent = `${Math.round(data.main.temp)}°C`;
    WEATHER_DESCRIPTION.textContent = data.weather[0].description;
    WIND.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
    HUMIDITY.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    WEATHER_ERROR.textContent = "";
  } catch (error) {
    WEATHER_ERROR.textContent = "Error! City not found!";
  }
}
getWeather();

CITY.addEventListener("change", getWeather);

function setLocalStorage() {
  localStorage.setItem("name", NAME.value);
  localStorage.setItem("city", CITY.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    NAME.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    CITY.value = localStorage.getItem("city");
  }
}
window.addEventListener("load", getLocalStorage);

// Quote

function getRandomQuote(min, max) {
  min = 0;
  max = 60;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getQuotes() {
  let randomQuote = getRandomQuote();
  const quotes = "js/quotes.json";
  const res = await fetch(quotes);
  const data = await res.json();
  let number = data[randomQuote];
  QUOTE.textContent = `"${number.quote}"`;
  AUTHOR.textContent = number.author;
}
getQuotes();

CHANGE_QUOTE.addEventListener("click", getQuotes);