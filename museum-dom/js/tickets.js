const radioType = document.querySelectorAll('input[name="radio"]');

const basicAmountInput = document.querySelector("#Basic__amount-input");
const seniorAmountInput = document.querySelector("#Senior__amount-input");

const inputs = document.querySelectorAll("input");
const totalPriceElement = document.querySelector("#tickets__total-price");
const totalPriceForm = document.querySelector("#tickets__total-form");

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
  let totalPrice;
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



document.addEventListener("DOMContentLoaded", function () {
  let select = document.querySelector("#select__exhibition"),
    radioItem = document.querySelectorAll(".tickets__radio-input");

  select.addEventListener("change", function () {
    radioItem.forEach((item) => {
      if (item.value == this.value) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    
    });

  });
  console.log(select)
  
});
