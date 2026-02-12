import { navbar } from "./navbar.js";
import { scrollBar } from "./scrollbar.js";

let btnGroups = document.querySelectorAll(".groups");

function actionGroup() {
    btnGroups.forEach(element => {
        element.addEventListener("click", () => {
            let dataId = element.getAttribute("data-id");
            let userId = +element.getAttribute("userId");
            location.href = `../details-group.html?group=${dataId}&userId=${userId}` 
        })        
    });
}

actionGroup();
navbar();
scrollBar();