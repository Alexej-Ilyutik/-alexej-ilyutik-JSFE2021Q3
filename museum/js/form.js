let ticketsForm = document.getElementById("ticketsForm"),
  buttonForm = document.getElementById("buttonForm"),
  closeButton = document.getElementById("close");

buttonForm.onclick = function () {
  ticketsForm.style.display = "block";
};

closeButton.onclick = function () {
  ticketsForm.style.display = "none";
};
