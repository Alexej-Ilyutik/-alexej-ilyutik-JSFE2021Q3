import "./styles/reset.css";
import "./styles/style.scss";

const SETTING_BTN = document.querySelector(".button__settings");
const ARTIST_BTN = document.querySelector(".artists__quiz-img");
const PICTURES_BTN = document.querySelector(".pictures__quiz-img");
const SAVE_BTN = document.querySelector(".button__save");
const DEFAULTS_BTN = document.querySelector(".button__defaults");

const MAIN_PAGE = document.querySelector(".main__page");
const SETTING_PAGE = document.querySelector(".setting__page");

function showSetting() {
  MAIN_PAGE.classList.add("hide");
  SETTING_PAGE.classList.remove("hide");
}

SETTING_BTN.addEventListener("click", showSetting);

function showMain() {
  SETTING_PAGE.classList.add("hide");
  MAIN_PAGE.classList.remove("hide");
}

SAVE_BTN.onclick = () => {
  showMain();
  console.log("save");
};

// DEFAULTS_BTN.addEventListener("click", showMain);
DEFAULTS_BTN.onclick = () => {
  showMain();
  console.log("def");
};
