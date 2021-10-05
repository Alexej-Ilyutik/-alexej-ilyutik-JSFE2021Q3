const headerMenu = document.querySelector(".header__menu");

if (headerMenu) {
  const headerNavMenu = document.querySelector(".header__nav-menu");
  headerMenu.addEventListener("click", function (e) {
    headerMenu.classList.toggle("_active");
    headerNavMenu.classList.toggle("_active");
  });
}
