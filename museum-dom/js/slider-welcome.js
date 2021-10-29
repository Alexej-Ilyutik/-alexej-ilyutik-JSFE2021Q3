let sliderCurrent = document.querySelector(".slider_fraction_current");

const swiper = new Swiper(".Welcome__slider", {
  loop: true,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".Welcome__slider-right",
    prevEl: ".Welcome__slider-left",
  },

  breakpoints:{

  },
});

swiper.on("slideChange", () => {
  let currSlide = ++swiper.realIndex;
  sliderCurrent.innerHTML = `0${currSlide}`;
});
