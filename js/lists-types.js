function listsTypes(userId) {
    let dataLists = {
        "group-2": {
            typeOne: "ش ف ع م",
            typeTwo: "ح ج",
            typeThree: "ش ف ع ك",
            typeFour: "دخان",
            typeFive: "مضئ",
            typeSix: "ث ح",
            typeSeven: "ث ح ك",
            typeEight: "ش ف ح ك",
            typeNine: "ش ف ح",
            typeTen: "ش ف"
        },
        "group-3": {
            typeTen: "ش ف",
            typeTwo: "ح ج",
            typeFive: "مضئ",
            typeOne: "ش ف ع م",
            typeFour: "دخان",
            typeThree: "ش ف ع ك",
            typeSix: "ث م",
            typeSeven: "سابو",
            typeEight: "عمليات",
            typeNine: "تدريب",
        }
    }
    let typeListEle = document.querySelector(".type-list");

    typeListEle.innerHTML = `
        <label for="type">أنواع الصنف</label>
            <select name="type-list" id="type">
                <option value="all" selected>أنواع الأصناف</option>
                <option value="${dataLists[`group-${userId}`].typeOne}">${dataLists[`group-${userId}`].typeOne}</option>
                <option value="${dataLists[`group-${userId}`].typeTwo}">${dataLists[`group-${userId}`].typeTwo}</option>
                <option value="${dataLists[`group-${userId}`].typeThree}">${dataLists[`group-${userId}`].typeThree}</option>
                <option value="${dataLists[`group-${userId}`].typeFour}">${dataLists[`group-${userId}`].typeFour}</option>
                <option value="${dataLists[`group-${userId}`].typeFive}">${dataLists[`group-${userId}`].typeFive}</option>
                <option value="${dataLists[`group-${userId}`].typeSix}">${dataLists[`group-${userId}`].typeSix}</option>
                <option value="${dataLists[`group-${userId}`].typeSeven}">${dataLists[`group-${userId}`].typeSeven}</option>
                <option value="${dataLists[`group-${userId}`].typeEight}">${dataLists[`group-${userId}`].typeEight}</option>
                <option value="${dataLists[`group-${userId}`].typeNine}">${dataLists[`group-${userId}`].typeNine}</option>
                <option value="${dataLists[`group-${userId}`].typeTen}">${dataLists[`group-${userId}`].typeTen}</option>
            </select>
    `
}

export { listsTypes };