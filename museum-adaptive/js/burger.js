const headerMenu = document.querySelector(".header__menu");

if (headerMenu) {
  const headerNavMenu = document.querySelector(".header__nav-menu");
  const welcomeSection = document.querySelector(".Welcome__section");
  headerMenu.addEventListener("click", function (e) {
    headerMenu.classList.toggle("_active");
    headerNavMenu.classList.toggle("_active");
    welcomeSection.classList.toggle("_active");
  });
}
