const ticketsButton = document.querySelector(".Tickets_button");

function showRipple(e) {
  const rippleButton = ticketsButton.getElementsByClassName("ripple")[0];

  if (rippleButton) {
    rippleButton.remove();
  }

  const clickTop = e.clientY;
  const clickLeft = e.clientX;
  const buttonTop = ticketsButton.getBoundingClientRect().top;
  const buttonLeft = ticketsButton.getBoundingClientRect().left;

  const ripple = document.createElement("span");

  ripple.classList.add("ripple");
  ripple.style.top = `${clickTop - buttonTop}px`;
  ripple.style.left = `${clickLeft - buttonLeft}px`;

  ticketsButton.appendChild(ripple);
}

ticketsButton.addEventListener("click", (e) => {
  showRipple(e);
});
