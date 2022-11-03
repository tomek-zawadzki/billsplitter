const price = document.querySelector(".form__label--price");
const people = document.querySelector(".form__label-people");
const tip = document.getElementById("tip-per");
const result = document.querySelector(".result");
const countBtn = document.querySelector(".count");
const summary = document.querySelector(".summary");
const alertText = document.querySelector(".alert");

countBtn.addEventListener("click", () => {
  let tipValuePer = price.value * tip.value;
  let calculation = (+price.value + tipValuePer) / people.value;

  if (price.value === "" || people.value === "") {
    summary.classList.add("hidden");
    alertText.classList.remove("hidden");
  } else {
    alertText.classList.add("hidden");
    result.textContent = calculation.toFixed(2);
    summary.classList.remove("hidden");
  }
});
