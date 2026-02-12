import { backToTop } from "./backToTop.js";
import { deleteProducts } from "./delete-product.js";
import { changeInputValue, createProduct } from "./edit-product.js";
import { formSelect } from "./form-select.js";
import { handleAccount } from "./handleAccount.js";
import { showSectionEdited } from "./show-section-edited.js";
import { signOut } from "./signOut.js";
import { totalProduct } from "./total-product.js";

let table = document.querySelector("tbody");

function getDataInLocalStorage() {
  let allData = JSON.parse(localStorage.getItem("products")) || [];

  handleProducts(allData);
  totalProduct(allData);
  formSelect();
}

function handleProducts(products) {
  table.innerHTML = products
    .map((ele) => {
      let {
        id,
        name,
        nationality,
        type,
        loot,
        box,
        group,
        number,
        hyper,
        boxTwo,
        numberTwo,
      } = ele;

      return `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${type}</td>
                <td>${nationality}</td>
                <td class="increment-quantity">
                    <div class="total-product">
                        <div>
                            <p>${box}</p>
                            <p id="ele-${id}">${boxTwo}</p>
                        </div>
                        <div>
                            <p>${number}</p>
                            <p id="ele-${id}">${numberTwo}</p>
                        </div>
                        <div>
                            <p class="total" data-id="${id}"></p>
                            <p class="total-two" id="ele-${id}" data-id="${id}"></p>
                        </div>
                    </div>
                </td>
                <td class="all-total" data-id="${id}"></td>
                <td>${loot}</td>
                <td>${hyper}</td>
                <td>${group}</td>
                <td>
                    <button class="edit-product" data-id="${id}">تعديل</button>
                    <button class="delete-product" data-id="${id}">حذف</button>
                </td>
            </tr>
        `;
    })
    .join("");

  let btnsDelete = document.querySelectorAll(".delete-product");
  btnsDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      let dataId = +btn.getAttribute("data-id");
      deleteProducts(products, dataId);
    });
  });

  let btnsEdit = document.querySelectorAll(".edit-product");
  btnsEdit.forEach((btn) => {
    btn.addEventListener("click", () => {
      let dataId = +btn.getAttribute("data-id");
      showSectionEdited();
      changeInputValue(products, dataId);
      createProduct(products, dataId);
    });
  });

  totalProduct(products);
}

getDataInLocalStorage();
backToTop()
handleAccount()
signOut()

export { handleProducts };
