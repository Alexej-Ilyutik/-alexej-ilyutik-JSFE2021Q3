const exploreSlider = document.querySelector(".Explore__slider");
const exploreSliderAfter = document.querySelector(".Explore__slider__after");
let change = false;

exploreSlider.addEventListener("mousedown", (event) => {
  let x = event.offsetX;
  exploreSliderAfter.classList.remove("transition");
  exploreSliderAfter.style.width = x + "px";
  change = true;
});

exploreSlider.addEventListener("mousemove", (event) => {
  if (change === true) {
    let x = event.offsetX;
    exploreSliderAfter.classList.remove("transition");
    exploreSliderAfter.style.width = x + "px";
  }
});

exploreSlider.addEventListener("mouseup", (event) => {
  if (change === true) {
    x = 0;
    change = false;
  }
});
