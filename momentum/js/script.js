const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");
const NAME = document.querySelector(".name");



// Date and Time

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = currentTime;
  showDate();
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
  DATE.textContent = days[dayWeek-1] + ", " + currentDate;
}


// Greeting

function getTimeOfDay(){
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
      return "morning"
    } else if(hours >= 12 && hours < 18) {
        return "afternoon"
    }else if (hours >= 18 && hours < 24){
        return "evening";
    }else{
        return "night";
    }

}

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
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

