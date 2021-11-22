import "./styles/reset.css";
import "./styles/style.scss";
import "./question";

const SETTING_BTN = document.querySelector(".button__settings");
const ARTIST_BTN = document.querySelector(".artists__quiz-img");
const PICTURES_BTN = document.querySelector(".pictures__quiz-img");
const SAVE_BTN = document.querySelector(".button__save");
const DEFAULTS_BTN = document.querySelector(".button__defaults");
const HOME_BTNS = document.querySelectorAll(".categories__button-home");
const SCORE_BTNS = document.querySelectorAll(".categories__button-score");
const ARTISTS_CARD_BTNS = document.querySelectorAll(".categories__card");

const MAIN_PAGE = document.querySelector(".main__page");
const SETTING_PAGE = document.querySelector(".setting__page");
const ARTISTS_CATEGORIES_PAGE = document.querySelector(".artists__categories");
const PICTURES_CATEGORIES_PAGE = document.querySelector(
  ".pictures__categories"
);
const ARTISTS_QUESTION_PAGE = document.querySelector(".artists__questions");

function showSetting() {
  MAIN_PAGE.classList.add("hide");
  SETTING_PAGE.classList.remove("hide");
}

SETTING_BTN.addEventListener("click", showSetting);

function showMain() {
  SETTING_PAGE.classList.add("hide");
  ARTISTS_CATEGORIES_PAGE.classList.add("hide");
  PICTURES_CATEGORIES_PAGE.classList.add("hide");

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

function showArtCategories() {
  MAIN_PAGE.classList.add("hide");
  ARTISTS_CATEGORIES_PAGE.classList.remove("hide");
}

ARTIST_BTN.addEventListener("click", showArtCategories);

function showPicCategories() {
  MAIN_PAGE.classList.add("hide");
  PICTURES_CATEGORIES_PAGE.classList.remove("hide");
}

PICTURES_BTN.addEventListener("click", showPicCategories);

for (const item of HOME_BTNS) {
  item.addEventListener("click", function () {
    showMain();
  });
}

for (const item of SCORE_BTNS) {
  item.addEventListener("click", function () {
    showMain();
  });
}


function showArtQuestion() {
  ARTISTS_CATEGORIES_PAGE.classList.add("hide");
  ARTISTS_QUESTION_PAGE.classList.remove("hide");
}



for (const item of ARTISTS_CARD_BTNS) {
  item.addEventListener("click", function () {
    showArtQuestion();
  });
}