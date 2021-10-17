const radioType = document.querySelectorAll('input[name="radio"]');

const basicAmountInput = document.querySelector("#Basic__amount-input");
const seniorAmountInput = document.querySelector("#Senior__amount-input");
const basicEntryTicketInput = document.querySelector(
  "#Basic__entryTicket-input"
);
const seniorEntryTicketInput = document.querySelector(
  "#Senior__entryTicket-input"
);

const inputs = document.querySelectorAll("input");
const totalPriceElement = document.querySelector("#tickets__total-price");
const totalPriceForm = document.querySelector("#tickets__total-form");

const ticketsContent = document.querySelector(".Tickets__content");
const selectExhibition = document.querySelector("#select__exhibition");
const overviewTemporaryType = document.querySelector(
  ".Overview_temporary-type"
);

const permanentInput = document.querySelector(".permanent-input");
const temporaryInput = document.querySelector(".temporary-input");
const combinedInput = document.querySelector(".combined-input");

const firstAgeDate = document.querySelector(".first_age-date");
const secondAgeDate = document.querySelector(".second_age-date");
const firstAgeValue = document.querySelector(".first_age-value");
const secondAgeValue = document.querySelector(".second_age-value");

document
  .querySelector("#Basic__amount-minus")
  .addEventListener("click", inputBasicDown);
document
  .querySelector("#Basic__amount-plus")
  .addEventListener("click", inputBasicUp);
document
  .querySelector("#Senior__amount-minus")
  .addEventListener("click", inputSeniorDown);
document
  .querySelector("#Senior__amount-plus")
  .addEventListener("click", inputSeniorUp);

function inputBasicDown() {
  basicAmountInput.stepDown();
  basicAmountInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function inputBasicUp() {
  basicAmountInput.stepUp();
  basicAmountInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function inputSeniorDown() {
  seniorAmountInput.stepDown();
  seniorAmountInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function inputSeniorUp() {
  seniorAmountInput.stepUp();
  seniorAmountInput.dispatchEvent(new Event("change", { bubbles: true }));
}

document
  .querySelector("#Basic__entryTicket-minus")
  .addEventListener("click", entryBasicDown);
document
  .querySelector("#Basic__entryTicket-plus")
  .addEventListener("click", entryBasicUp);
document
  .querySelector("#Senior__entryTicket-minus")
  .addEventListener("click", entrySeniorDown);
document
  .querySelector("#Senior__entryTicket-plus")
  .addEventListener("click", entrySeniorUp);

function entryBasicDown() {
  basicEntryTicketInput.stepDown();
  basicEntryTicketInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function entryBasicUp() {
  basicEntryTicketInput.stepUp();
  basicEntryTicketInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function entrySeniorDown() {
  seniorEntryTicketInput.stepDown();
  seniorEntryTicketInput.dispatchEvent(new Event("change", { bubbles: true }));
}

function entrySeniorUp() {
  seniorEntryTicketInput.stepUp();
  seniorEntryTicketInput.dispatchEvent(new Event("change", { bubbles: true }));
}

basicAmountInput.addEventListener("input", function () {
  if (basicAmountInput.value > 20) {
    alert("error! Max value: 20");
    basicAmountInput.value = 1;
  }
});

seniorAmountInput.addEventListener("input", function () {
  if (seniorAmountInput.value > 20) {
    alert("error! Max value: 20");
    seniorAmountInput.value = 1;
  }
});

function calculate() {
  let totalPrice = 0;
  for (let radio of radioType) {
    if (radio.checked === true) {
      totalPrice =
        parseInt(basicAmountInput.value) * parseInt(radio.value) +
        (parseInt(seniorAmountInput.value) * parseInt(radio.value)) / 2;
    }
  }

  totalPriceElement.innerText = totalPrice;
  totalPriceForm.innerText = totalPrice;
}

calculate();

for (const item of inputs) {
  item.addEventListener("change", function () {
    calculate();
  });
}

ticketsContent.addEventListener("change", (event) => {
  let target = event.target;
  if (target.classList.contains("permanent-input")) {
    selectExhibition.value = "20";
    overviewTemporaryType.innerHTML = "Permanent exhibition";
    firstAgeDate.innerHTML = "20";
    secondAgeDate.innerHTML = "10";
    firstAgeValue.innerHTML = "20";
    secondAgeValue.innerHTML = "10";
  } else if (target.classList.contains("temporary-input")) {
    selectExhibition.value = "25";
    overviewTemporaryType.innerHTML = "Temporary exhibition";
    firstAgeDate.innerHTML = "25";
    secondAgeDate.innerHTML = "12.5";
    firstAgeValue.innerHTML = "25";
    secondAgeValue.innerHTML = "12.5";
  } else if (target.classList.contains("combined-input")) {
    selectExhibition.value = "40";
    overviewTemporaryType.innerHTML = "Combined Admission";
    firstAgeDate.innerHTML = "40";
    secondAgeDate.innerHTML = "20";
    firstAgeValue.innerHTML = "40";
    secondAgeValue.innerHTML = "20";
  }
});

selectExhibition.addEventListener("change", () => {
  if (selectExhibition.value === "20") {
    overviewTemporaryType.innerHTML = "Permanent exhibition";
    firstAgeDate.innerHTML = "20";
    secondAgeDate.innerHTML = "10";
    firstAgeValue.innerHTML = "20";
    secondAgeValue.innerHTML = "10";
    permanentInput.checked = true;
    calculate();
  } else if (selectExhibition.value === "25") {
    overviewTemporaryType.innerHTML = "Temporary exhibition";
    firstAgeDate.innerHTML = "25";
    secondAgeDate.innerHTML = "12.5";
    firstAgeValue.innerHTML = "25";
    secondAgeValue.innerHTML = "12.5";
    temporaryInput.checked = true;
    calculate();
  } else if (selectExhibition.value === "40") {
    overviewTemporaryType.innerHTML = "Combined Admission";
    firstAgeDate.innerHTML = "40";
    secondAgeDate.innerHTML = "20";
    firstAgeValue.innerHTML = "40";
    secondAgeValue.innerHTML = "20";
    combinedInput.checked = true;
    calculate();
  }
});
