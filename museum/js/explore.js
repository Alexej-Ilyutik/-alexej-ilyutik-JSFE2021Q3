const exploreSeparator = document.querySelector(".explore__slider__separator");
const exploreSliderBefore = document.querySelector(".Explore__slider__before");

const exploreSlider = () => {
  valueSeparator = exploreSeparator.value;
  exploreSliderBefore.style.width = valueSeparator + "%";
};

exploreSeparator.addEventListener("input", exploreSlider);
