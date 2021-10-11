const mixRandom = () => Math.random() - 0.5;
let arr = Array.from(document.querySelectorAll(".Gallery__pic"));
let arrSrcMix = arr.map((event) => event.src).sort(mixRandom);
arr.map((event, i) => (event.src = arrSrcMix[i]));

const pictureItems = document.querySelectorAll("._picture-items");

if (pictureItems.length > 0) {
  window.addEventListener("scroll", pictureOnScroll);
  function pictureOnScroll() {
    for (let i = 0; i < pictureItems.length; i++) {
      const pictureItem = pictureItems[i];
      const pictureItemHeight = pictureItem.offsetHeight;
      const pictureItemOffset = offset(pictureItem).top;
      const pictureStart = 4;

      let pictureItemPoint =
        window.innerHeight - pictureItemHeight / pictureStart;

      if (pictureItemHeight > window.innerHeight) {
        pictureItemPoint =
          window.innerHeight - window.innerHeight / pictureStart;
      }

      if (
        pageYOffset > pictureItemOffset - pictureItemPoint &&
        pageYOffset < pictureItemOffset + pictureItemHeight
      ) {
        pictureItem.classList.add("_active");
      } else {
        pictureItem.classList.remove("_active");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  pictureOnScroll();
}
