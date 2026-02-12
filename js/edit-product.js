import { handleProducts } from "./handle-products.js";

let selected = document.querySelector(".selected");
let inputName = document.querySelector(".name");
let inputNationality = document.querySelector(".nationality");
let inputType = document.querySelector(".type");
let inputBox = document.querySelector(".box");
let inputNumber = document.querySelector(".number");
let inputBoxTwo = document.querySelector(".box-two");
let inputNumberTwo = document.querySelector(".number-two");
let inputHyper = document.querySelector(".hyper");
let inputLoot = document.querySelector(".loot");

function changeInputValue(products, productId) {
  let product = products.find((ele) => ele.id === productId);
  if (product) {
    inputName.value = product.name;
    inputNationality.value = product.nationality;
    inputType.value = product.type;
    inputLoot.value = product.loot;
    inputBox.value = product.box;
    inputBoxTwo.value = product.boxTwo;
    inputNumber.value = product.number;
    inputNumberTwo.value = product.numberTwo;
    inputHyper.value = product.hyper;
    selected.textContent = product.group;
  }
}

function createProduct(products, productId) {
  let btnEdit = document.querySelector(".btn-edit");
  btnEdit.onclick = () => {
    let product = products.find((ele) => ele.id === productId);
    if (!product) return;
    let editedProduct = {
      ...product,
      name: inputName.value,
      nationality: inputNationality.value,
      type: inputType.value,
      box: inputBox.value,
      boxTwo: inputBoxTwo.value,
      loot: inputLoot.value,
      number: inputNumber.value,
      numberTwo: inputNumberTwo.value,
      hyper: inputHyper.value,
      group: selected.textContent,
    };

    let newProducts = products.map((ele) =>
      ele.id === editedProduct.id ? editedProduct : ele
    );

    localStorage.setItem("products", JSON.stringify(newProducts));
    handleProducts(newProducts);
    let sectionEdit = document.querySelector(".show-section-edit");
    sectionEdit.classList.remove("active");
  };
}

export { changeInputValue, createProduct };
