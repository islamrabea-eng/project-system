import { formSelect } from "./form-select.js";

let submit = document.querySelector(".submit");
let selected = document.querySelector(".selected");
let inputName = document.querySelector(".name");
let inputNationality = document.querySelector(".nationality");
let inputType = document.querySelector(".type");
let inputBox = document.querySelector(".box");
let inputLoot = document.querySelector(".loot");
let inputNumber = document.querySelector(".number");
let inputHyper = document.querySelector(".hyper");
let inputBoxTwo = document.querySelector(".box-two");
let inputNumberTwo = document.querySelector(".number-two");
let messageError = document.querySelector(".message-Error");

let products = JSON.parse(localStorage.getItem("products")) || [];

function createProduct() {
  let product = {
    id: products.length + 1,
    name: inputName.value.trim(),
    nationality: inputNationality.value.trim(),
    type: inputType.value.trim(),
    box: inputBox.value.trim(),
    boxTwo: inputBoxTwo.value.trim(),
    loot: inputLoot.value.trim(),
    number: inputNumber.value.trim(),
    numberTwo: inputNumberTwo.value.trim(),
    hyper: inputHyper.value.trim(),
    group: selected.textContent.trim(),
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputName.value !== "" &&
    inputNationality.value !== "" &&
    inputType.value !== "" &&
    inputBox.value !== "" &&
    inputNumber.value !== "" &&
    inputHyper.value !== ""
  ) {
    setTimeout(() => {
      inputName.value = "";
      inputNationality.value = "";
      inputType.value = "";
      inputBoxTwo.value = "";
      inputBox.value = "";
      inputLoot.value = "";
      inputNumber.value = "";
      inputNumberTwo.value = "";
      inputHyper.value = "";

      window.location.href = "data.html";
    }, 1500);
    createProduct();
  } else {
    messageError.classList.add("active");
    setTimeout(() => {
      messageError.classList.remove("active");
    }, 1500);
  }
});



formSelect();
