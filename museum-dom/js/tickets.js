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

const costPriceBasic = document.querySelector(".Cost_left-price-basic");
const costPriceSenior = document.querySelector(".Cost_left-price-senior");
const costRightBasic = document.querySelector(".Cost_right-basic");
const costRightSenior = document.querySelector(".Cost_right-senior");

const dateId = document.querySelector("#date_id");
const timeId = document.querySelector(".time_wrapper-select");
const dateWrapperValue = document.querySelector(".date_wrapper-value");
const overviewDateWeek = document.querySelector(".Overview_date-week");
const overviewDateMonth = document.querySelector(".Overview_date-month");
const overviewDateDay = document.querySelector(".Overview_date-day");
const overviewTimeValue = document.querySelector(".Overview_time-value");

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

basicAmountInput.addEventListener("change", function () {
  basicEntryTicketInput.value = basicAmountInput.value;
  costPriceBasic.innerHTML = basicAmountInput.value;
});

basicEntryTicketInput.addEventListener("change", function () {
  basicAmountInput.value = basicEntryTicketInput.value;
  costPriceBasic.innerHTML = basicAmountInput.value;
});

seniorAmountInput.addEventListener("change", function () {
  seniorEntryTicketInput.value = seniorAmountInput.value;
  costPriceSenior.innerHTML = seniorAmountInput.value;
});

seniorEntryTicketInput.addEventListener("change", function () {
  seniorAmountInput.value = seniorEntryTicketInput.value;
  costPriceSenior.innerHTML = seniorAmountInput.value;
});

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
  let basicPrice = 0;
  let seniorPrice = 0;
  let totalPrice = 0;
  for (let radio of radioType) {
    if (radio.checked === true) {
      totalPrice =
        parseInt(basicAmountInput.value) * parseInt(radio.value) +
        (parseInt(seniorAmountInput.value) * parseInt(radio.value)) / 2;
      basicPrice = parseInt(basicAmountInput.value) * parseInt(radio.value);
      seniorPrice =
        (parseInt(seniorAmountInput.value) * parseInt(radio.value)) / 2;
    }
  }

  totalPriceElement.innerText = totalPrice;
  totalPriceForm.innerText = totalPrice;
  costRightBasic.innerText = basicPrice;
  costRightSenior.innerText = seniorPrice;
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

let date = new Date();
let dateObject;
dateId.setAttribute(
  "min",
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);

timeId.addEventListener("change", () => {
  overviewTimeValue.innerHTML = timeId.value;
});

dateId.addEventListener("change", () => {
  dateObject = dateId.valueAsDate;
  if (dateObject !== null) {
    if (dateObject.getDay() === 0) {
      overviewDateWeek.innerHTML = "Sunday,&nbsp;";
    } else if (dateObject.getDay() === 1) {
      overviewDateWeek.innerHTML = "Monday,&nbsp;";
    } else if (dateObject.getDay() === 2) {
      overviewDateWeek.innerHTML = "Tuesday,&nbsp;";
    } else if (dateObject.getDay() === 3) {
      overviewDateWeek.innerHTML = "Wednes­day,&nbsp;";
    } else if (dateObject.getDay() === 4) {
      overviewDateWeek.innerHTML = "Thursday,&nbsp;";
    } else if (dateObject.getDay() === 5) {
      overviewDateWeek.innerHTML = "Friday,&nbsp;";
    } else if (dateObject.getDay() === 6) {
      overviewDateWeek.innerHTML = "Saturday,&nbsp;";
    }
    if (dateObject.getMonth() === 0) {
      overviewDateMonth.innerHTML = "January&nbsp;";
    } else if (dateObject.getMonth() === 1) {
      overviewDateMonth.innerHTML = "February&nbsp;";
    } else if (dateObject.getMonth() === 2) {
      overviewDateMonth.innerHTML = "March&nbsp;";
    } else if (dateObject.getMonth() === 3) {
      overviewDateMonth.innerHTML = "April&nbsp;";
    } else if (dateObject.getMonth() === 4) {
      overviewDateMonth.innerHTML = "May&nbsp;";
    } else if (dateObject.getMonth() === 5) {
      overviewDateMonth.innerHTML = "June&nbsp;";
    } else if (dateObject.getMonth() === 6) {
      overviewDateMonth.innerHTML = "July&nbsp;";
    } else if (dateObject.getMonth() === 7) {
      overviewDateMonth.innerHTML = "August&nbsp;";
    } else if (dateObject.getMonth() === 8) {
      overviewDateMonth.innerHTML = "September&nbsp;";
    } else if (dateObject.getMonth() === 9) {
      overviewDateMonth.innerHTML = "October&nbsp;";
    } else if (dateObject.getMonth() === 10) {
      overviewDateMonth.innerHTML = "November&nbsp;";
    } else if (dateObject.getMonth() === 11) {
      overviewDateMonth.innerHTML = "December&nbsp;";
    }
    overviewDateDay.innerHTML = dateObject.getDate();
  }
});
