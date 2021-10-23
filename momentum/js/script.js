const TIME = document.querySelector(".time");
const DATE = document.querySelector(".date");
const GREETING = document.querySelector(".greeting");


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

// 
  const date = new Date();
  const hours = date.getHours();
  console.log(hours);
//   if (hours > 23 || hours < 7) document.write("Привет совам и лунатикам! :)");
//   if (hours > 6 && hours < 12) document.write("Доброе утро! Выспался? :)");
//   if (hours > 11 && hours < 19) document.write("Добрый день!");
//   if (hours > 18 && hours < 24)
//   document.write("Привет! Уже вечер, кстати... домой не пора?"); 
// }
// getTimeOfDay()

