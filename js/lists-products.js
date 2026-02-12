import { handleProducts } from "./details-group.js";
import { listsNationality } from "./lists-nationality.js";
import { listsTypes } from "./lists-types.js";
import { totalProduct } from "./total-product.js";

function listsProducts(products) {
    let message = document.querySelector(".massage");
    let btnSearch = document.querySelector(".search-btn");

    let params = new URLSearchParams(window.location.search);
    let dataQuery = params.get("group")?.trim();
    let userId = +params.get("userId")?.trim();
    if (!dataQuery) return;

    let findProducts = products.filter(
        (ele) => ele.group === dataQuery
    );

    listsTypes(userId);  
    listsNationality(userId);

    if (findProducts.length !== 0) {
        btnSearch.addEventListener("click", () => {
            let nationalityList = document.querySelector(".nationality-list select");
            let typeList = document.querySelector(".type-list select");
            let hyperList = document.querySelector(".hyper-list select");

            let dataNation = nationalityList.value;
            let dataType = typeList.value;
            let dataHyper = hyperList.value;

            let filterProducts = findProducts.filter((ele) => {
                let nationMatch = dataNation === "all" || ele.nationality === dataNation;
                let typeMatch   = dataType === "all" || ele.type === dataType;
                let hyperMatch  = dataHyper === "all" || ele.hyper === dataHyper;

                return nationMatch && typeMatch && hyperMatch;
            });

            message.classList.toggle("active", filterProducts.length === 0);

            handleProducts(filterProducts);
            totalProduct(filterProducts);
        });
    }
}

export { listsProducts }