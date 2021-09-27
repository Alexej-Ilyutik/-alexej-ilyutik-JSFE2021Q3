let ticketsForm = document.getElementById("ticketsForm"),
  buttonForm = document.getElementById("buttonForm"),
  closeButton = document.getElementById("close");

buttonForm.onclick = function () {
  ticketsForm.style.display = "block";
  ticketsForm.style.left = "0";
};

closeButton.onclick = function () {
  ticketsForm.style.display = "none";
};
