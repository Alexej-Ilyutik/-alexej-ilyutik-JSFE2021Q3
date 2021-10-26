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

const SONG_NAME = document.querySelector(".song-name");
const ARTIST = document.querySelector(".artist");
const MAIN_AUDIO = document.querySelector("#main-audio");
const PLAY_PAUSE = document.querySelector(".play-pause");
const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const PLAY_PREV = document.querySelector(".play-prev");
const PLAY_NEXT = document.querySelector(".play-next");
const PROGRESS_BAR = document.querySelector(".progress-bar");
const PROGRESS_AREA = document.querySelector(".progress-area");
const MUSIC_LIST = document.querySelector(".music-list");
const AUDIO_LIST = document.querySelector(".list");
const AUDIO_LIST_CLOSE = document.querySelector(".list-close");
const AUDIO_LIST_DESCRIPTION = document.querySelector(
  ".audio-list-description"
);
const VOLUME = document.querySelector(".volume");
const MUTE = document.querySelector(".mute");
const SOUND = document.querySelector(".sound");

const SETTING_ICON = document.querySelector(".setting-icon");
const SETTING_CLOSE = document.querySelector(".setting-close");
const SETTING = document.querySelector(".setting");

const TODO_ICON = document.querySelector(".todo-icon");
const TODO_CLOSE = document.querySelector(".todo-close");
const TODO = document.querySelector(".todo");
const INPUT_BOX = document.querySelector(".todo-inputField input");
const ADD_BTN = document.querySelector(".todo-inputField button");
const TODO_LIST = document.querySelector(".todoList");
const DELETE_ALL_BTN = document.querySelector(".todo-footer button");

const LANGUAGE = document.querySelector(".language");
const SETTING_LANGUAGE = document.querySelector(".stng");
const SELECT_LANGUAGE = document.querySelector(".select-language");
const MUSIC_LIST_TITLE = document.querySelector(".music-list-title");

// Date and Time

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  TIME.textContent = currentTime;
  getTimeOfDay();
  setTimeout(showTime, 1000);
}
showTime();

LANGUAGE.addEventListener("change", showDate);

function showDate() {
  let choice = LANGUAGE.value;
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };
  let dayWeek = date.getDay();
  if (choice === "english") {
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
    DATE.textContent = days[dayWeek] + ", " + currentDate;
    SETTING_LANGUAGE.innerText = "Setting";
    SELECT_LANGUAGE.innerText = "Select language:";
    MUSIC_LIST_TITLE.innerText = "Music list";
  } else {
    const currentDate = date.toLocaleDateString("ru-RU", options);
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    DATE.textContent = days[dayWeek] + ", " + currentDate;
    SETTING_LANGUAGE.innerText = "Настройки";
    SELECT_LANGUAGE.innerText = "Выбор языка:";
    MUSIC_LIST_TITLE.innerText = "Список песен";
  }
  setTimeout(showDate, 1);
}
showDate();

// Greeting

LANGUAGE.addEventListener("change", getgreetingText);

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
  const date = new Date();
  const hours = date.getHours();
  let choiceGreeting = LANGUAGE.value;
  if (choiceGreeting === "english") {
    const greetingText = `Good ${timeOfDay},`;
    GREETING.textContent = greetingText;
  } else {
    if (hours >= 6 && hours < 12) {
      const greetingText = `Доброе утро,`;
      GREETING.textContent = greetingText;
      NAME.placeholder = "[Введите имя]";
    } else if (hours >= 12 && hours < 18) {
      const greetingText = `Добрый день,`;
      GREETING.textContent = greetingText;
      NAME.placeholder = "[Введите имя]";
    } else if (hours >= 18 && hours < 24) {
      const greetingText = `Добрый вечер,`;
      GREETING.textContent = greetingText;
      NAME.placeholder = "[Введите имя]";
    } else {
      const greetingText = `Доброй ночи,`;
      GREETING.textContent = greetingText;
      NAME.placeholder = "[Введите имя]";
    }
  }

  setTimeout(getgreetingText, 1);
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


LANGUAGE.addEventListener("change", getWeather);

async function getWeather() {
  try {
    let choiceWeather = LANGUAGE.value;
    if (choiceWeather === "english") {
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
    } else {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&lang=ru&appid=b69f64863e2b4d04a4a6ef613a52f41d&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      WEATHER_ICON.className = "weather-icon owf";
      WEATHER_ICON.classList.add(`owf-${data.weather[0].id}`);
      TEMPERATURE.textContent = `${Math.round(data.main.temp)}°C`;
      WEATHER_DESCRIPTION.textContent = data.weather[0].description;
      WIND.textContent = `Скорость ветра: ${Math.round(data.wind.speed)}м/с`;
      HUMIDITY.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
      WEATHER_ERROR.textContent = "";
    }
  } catch (error) {
    WEATHER_ERROR.textContent = "Error! City not found!";
  }
}
getWeather();


CITY.addEventListener("change", getWeather);

function setLocalStorage() {
  localStorage.setItem("name", NAME.value);
  localStorage.setItem("city", CITY.value);
  localStorage.setItem("language", LANGUAGE.value);
}
window.addEventListener("beforeunload", setLocalStorage);


function getLocalStorage() {
  if (localStorage.getItem("name")) {
    NAME.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    CITY.value = localStorage.getItem("city");
  }
  if (localStorage.getItem("language")) {
    LANGUAGE.value = localStorage.getItem("language");
  }
}
window.addEventListener("load", getLocalStorage);

// Quote

window.addEventListener("load", () => {
  changeLanguage();
  getWeather();
});


function changeLanguage() {
  let choiceQuote = LANGUAGE.value;
  

  if (
    choiceQuote === "english"
  ) {
    function getRandomQuote(min, max) {
      min = 0;
      max = 60;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    CHANGE_QUOTE.addEventListener("click", getQuotes);
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
  } else {
    function getRandomQuote(min, max) {
      min = 0;
      max = 60;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function getQuotesRu() {
      let randomQuote = getRandomQuote();
      const quotes = "js/data.json";
      const res = await fetch(quotes);
      const data = await res.json();
      let number = data[randomQuote];
      QUOTE.textContent = `"${number.text}"`;
      AUTHOR.textContent = number.author;
    }
    getQuotesRu();
    CHANGE_QUOTE.addEventListener("click", getQuotesRu);
  
  }
}
changeLanguage();


LANGUAGE.addEventListener("change", changeLanguage);


// AudioPlayer

/* let musicIndex = Math.floor(Math.random() * allMusic.length + 1);*/
let musicIndex = 1;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
  let choiceMus = LANGUAGE.value;

  if (choiceMus === "english") {
    SONG_NAME.innerText = allMusic[indexNumb - 1].name;
    ARTIST.innerText = allMusic[indexNumb - 1].artist;
    MAIN_AUDIO.src = `assets/sounds/${allMusic[indexNumb - 1].src}.mp3`;
  } else {
    SONG_NAME.innerText = allMusic[indexNumb - 1].nameRu;
    ARTIST.innerText = allMusic[indexNumb - 1].artistRu;
    MAIN_AUDIO.src = `assets/sounds/${allMusic[indexNumb - 1].src}.mp3`;
  }
}

LANGUAGE.addEventListener("change", loadMusic);

function playPause() {
  if (MAIN_AUDIO.paused) {
    MAIN_AUDIO.play();
    playingSong();
    PLAY.style.display = "none";
    PAUSE.style.display = "block";
  } else {
    MAIN_AUDIO.pause();
    playingSong();
    PAUSE.style.display = "none";
    PLAY.style.display = "block";
  }
}

PLAY_PAUSE.addEventListener("click", playPause);

function prevMusic() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  PROGRESS_BAR.style.width = `${0}%`;
  loadMusic(musicIndex);
  playPause();
  playingSong();
}

function nextMusic() {
  musicIndex++;
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  PROGRESS_BAR.style.width = `${0}%`;
  loadMusic(musicIndex);
  playPause();
  playingSong();
}

PLAY_PREV.addEventListener("click", prevMusic);
PLAY_NEXT.addEventListener("click", nextMusic);

function getVolume() {
  MAIN_AUDIO.muted = !MAIN_AUDIO.muted;
  if (MAIN_AUDIO.muted) {
    VOLUME.style.display = "none";
    MUTE.style.display = "block";
  } else {
    VOLUME.style.display = "block";
    MUTE.style.display = "none";
  }
}

SOUND.addEventListener("click", getVolume);

MAIN_AUDIO.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  PROGRESS_BAR.style.width = `${progressWidth}%`;

  let MUSIC_CURRENT_TIME = document.querySelector(".current-time");
  let MUSIC_DURATION = document.querySelector(".max-duration");

  MAIN_AUDIO.addEventListener("loadeddata", () => {
    let mainAdDuration = MAIN_AUDIO.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    MUSIC_DURATION.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }

  MUSIC_CURRENT_TIME.innerText = `${currentMin}:${currentSec}`;
});

PROGRESS_AREA.addEventListener("click", (e) => {
  let progressWidth = PROGRESS_AREA.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = MAIN_AUDIO.duration;
  MAIN_AUDIO.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playingSong();
});

MAIN_AUDIO.addEventListener("ended", () => {
  nextMusic();
  playingSong();
});

AUDIO_LIST.addEventListener("click", () => {
  MUSIC_LIST.classList.toggle("show");
});

AUDIO_LIST_CLOSE.addEventListener("click", () => {
  AUDIO_LIST.click();
});

for (let i = 0; i < allMusic.length; i++) {
  let liTag = `<li li-index="${i + 1}">
              <div class="list-row">
                <div class="list-play-pause">
                  <button class="list-play player-icon"></button>
                  
                </div>
                <div>
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>  
              </div>
              <span id="${allMusic[i].src}" class="audio-duration">2:25</span>
              <audio class="${allMusic[i].src}" src="assets/sounds/${
    allMusic[i].src
  }.mp3"></audio>
            </li>`;
  AUDIO_LIST_DESCRIPTION.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuartionTag = AUDIO_LIST_DESCRIPTION.querySelector(
    `#${allMusic[i].src}`
  );
  let liAudioTag = AUDIO_LIST_DESCRIPTION.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", () => {
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}

const LIST_PLAY_PAUSE =
  AUDIO_LIST_DESCRIPTION.querySelectorAll(".list-play-pause");

const LIST_PAUSE = AUDIO_LIST_DESCRIPTION.querySelectorAll(".list-pause");

function playingSong() {
  const allLiTag = AUDIO_LIST_DESCRIPTION.querySelectorAll("li");
  const LIST_BUTTON = AUDIO_LIST_DESCRIPTION.querySelectorAll("button");
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".audio-duration");

    if (allLiTag[j].classList.contains("playing")) {
      allLiTag[j].classList.remove("playing");
      LIST_BUTTON[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    if (allLiTag[j].getAttribute("li-index") == musicIndex) {
      allLiTag[j].classList.add("playing");
      LIST_BUTTON[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }

    allLiTag[j].setAttribute("onclick", "clicked(this)");
    LIST_BUTTON[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element) {
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playingSong();
  playPause();
}

// Setting

SETTING_ICON.addEventListener("click", () => {
  SETTING.classList.toggle("show");
});

SETTING_CLOSE.addEventListener("click", () => {
  SETTING_ICON.click();
});


// ListToDo

TODO_ICON.addEventListener("click", () => {
  TODO.classList.toggle("show");
});

TODO_CLOSE.addEventListener("click", () => {
  TODO_ICON.click();
});


INPUT_BOX.onkeyup = () => {
  let userEnteredValue = INPUT_BOX.value; 
  if (userEnteredValue.trim() != 0) {
    ADD_BTN .classList.add("active"); 
  } else {
    ADD_BTN .classList.remove("active"); 
  }
};

showTasks(); 

ADD_BTN.onclick = () => {
  let userEnteredValue = INPUT_BOX.value;
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  ADD_BTN.classList.remove("active");
}

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".todo-pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if (listArray.length > 0) {
    DELETE_ALL_BTN.classList.add("active"); 
  } else {
    DELETE_ALL_BTN.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
 TODO_LIST.innerHTML = newLiTag;
  INPUT_BOX.value = "";
}

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); 
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
}

DELETE_ALL_BTN.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
};

// Description task

console.group("%cMomentum", "color: red");
console.log("Часы и календарь. " + "%c+15", "color: red");
console.log("Приветствие. " + "%c+10", "color: red");
console.log("Смена фонового изображения. " + "%c+20", "color: red");
console.log("Виджет погоды. " + "%c+15", "color: red");
console.log("Виджет цитата дня. " + "%c+10", "color: red");
console.log("Аудиоплеер. " + "%c+15", "color: red");
console.log("Продвинутый аудиоплеер. " + "%c+17", "color: red");
console.log("Перевод приложения на два языка. " + "%c+15", "color: red");
console.log("Настройки приложения. " + "%c+3", "color: red");
console.log("Дополнительный функционал на выбор. ToDo List " + "%c+10", "color: red");
console.log("%cИТОГО: +130", "color: red");