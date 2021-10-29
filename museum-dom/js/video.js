const VIDEO_STOP = document.querySelector(".Video__carousel");
const VIDEO_SLIDER_STOP = document.querySelector(".Video__slider-container");
const VIDEOS = document.querySelectorAll("iframe");


const swiperVideoMain = new Swiper(".Video__player-container", {
  loop: true,
  speed: 800,

  navigation: {
    nextEl: ".Video__right",
    prevEl: ".Video__left",
  },

  pagination: {
    el: ".Video__pagination",
    clickable: true,
  },

  thumbs: {
    swiper: {
      el: ".Video__slider-container",
      // slidesPerView: 3,
      // spaceBetween: 42,
      breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 42,
      },
    },
    },
    
  },
});




VIDEO_STOP.addEventListener("click", () => {
  VIDEOS.forEach((i) => {
    let source = i.src;
    i.src = "";
    i.src = source;
  });
  
});

VIDEO_SLIDER_STOP.addEventListener("click", () => {
  VIDEOS.forEach((i) => {
    let source = i.src;
    i.src = "";
    i.src = source;
  });
});