let formView = document.body.querySelector(".form__show"),
  form = document.body.querySelector(".wrapper__form"),
  buttonForm = document.getElementById("buttonForm"),
  closeButton = document.getElementById("close");

buttonForm.onclick = function () {
  form.classList.remove("wrapper__form-hidden");
  formView.classList.remove("form__hidden");
};

closeButton.onclick = function () {
  form.classList.add("wrapper__form-hidden");
  formView.classList.add("form__hidden");
};

formView.onclick = function () {
  form.classList.add("wrapper__form-hidden");
  formView.classList.add("form__hidden");
};
