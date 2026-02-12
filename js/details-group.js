import { backToTop } from "./backToTop.js";
import { listsProducts } from "./lists-products.js";
import { searchProduct } from "./search-product.js";
import { totalProduct } from "./total-product.js";

let groupName = document.querySelector(".group-name");

function getDataInLocalStorage() {
    let getData = JSON.parse(localStorage.getItem("products")) || [];
    getQueryParams(getData);
    searchProduct(getData);
    totalProduct(getData);
    listsProducts(getData);
}

function getQueryParams(products) {
   let params = new URLSearchParams(window.location.search);
    let dataQuery = params.get("group");
    groupName.innerHTML = `بيـــــان أصناف ${dataQuery}`;

    let filterProducts = products.filter(
        ele => ele.group === dataQuery
    );
    handleProducts(filterProducts);
}


let app = document.querySelector("tbody")
function handleProducts(products) {
    app.innerHTML = products.map((ele, index) => {
        let { id, name, nationality, type, loot, box, group, number, hyper, numberTwo, boxTwo } = ele;

        return `
            <tr>
                <td>${++index}</td>
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
            </tr>
        `
    }).join("")
}

getDataInLocalStorage();
backToTop();

export { handleProducts }