import { handleProducts } from "./details-group.js";
import { totalProduct } from "./total-product.js";

function searchProduct(products) {
    let inputSearch = document.querySelector(".search-product input");
    let btnClean = document.querySelector(".btn-clean");
    let message = document.querySelector(".massage");

    inputSearch.addEventListener("input", (e) => {
        let inputValue = e.target.value.trim().toLowerCase();

        if (inputValue === "") {
            message.classList.remove("active");
            handleProducts(products);
            totalProduct(products);
            return;
        }

        let filterProducts = products.filter(ele =>
            ele.name.toLowerCase().includes(inputValue)
        );

        if (filterProducts.length === 0) {
            message.classList.add("active");
        } else {
            message.classList.remove("active");
        }

        handleProducts(filterProducts);
        totalProduct(filterProducts);
    });

    btnClean.addEventListener("click", () => {
        inputSearch.value = "";
        message.classList.remove("active");
        handleProducts(products);
        totalProduct(products);
    });
}

export { searchProduct };
