const headerMenu = document.querySelector(".header__menu");
const headerNavMenu = document.querySelector(".header__nav-menu");
const welcomeSection = document.querySelector(".Welcome__section");
const headerItemMenu = document.querySelectorAll(".header__item-menu");
const burgerMenuOverlay = document.querySelector(".burger-menu-overlay");

if (headerMenu) {
  headerMenu.addEventListener("click", function (e) {
    headerMenu.classList.toggle("_active");
    headerNavMenu.classList.toggle("_active");
    welcomeSection.classList.toggle("_active");
    burgerMenuOverlay.classList.toggle("_active");
  });
}

headerItemMenu.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  headerMenu.classList.remove("_active");
  headerNavMenu.classList.remove("_active");
  welcomeSection.classList.remove("_active");
  burgerMenuOverlay.classList.remove("_active");
}

burgerMenuOverlay.onclick = function () {
  headerMenu.classList.remove("_active");
  headerNavMenu.classList.remove("_active");
  welcomeSection.classList.remove("_active");
  burgerMenuOverlay.classList.remove("_active");
};
