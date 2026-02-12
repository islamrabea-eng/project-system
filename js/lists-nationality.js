function listsNationality(userId) {
    let dataNationality = {
        "group-2": {
            typeOne: "تشيكي",
            typeTwo: "مصري",
            typeThree: "روسي",
            typeFour: "كوري",
            typeFive: "يوغسلافي",
            typeSix: "أسباني",
            typeSeven: "روماني",
            typeEight: "صيني",
            typeNine: "باكستاني",
            typeTen: "أمريكي",
            typeEleven: "فرنساوي"
        },
        "group-3": {
            typeTen: "تشيكي",
            typeTwo: "روسي",
            typeFive: "مصري",
            typeOne: "كوري",
            typeFour: "أمريكي",
            typeThree: "يوغسلافي",
            typeSix: "باكستاني",
            typeSeven: "إيطالي",
            typeEight: "بلغاري",
            typeNine: "فرنساوي",
            typeEleven: "صيني"
        }
    }
    let typeListEle = document.querySelector(".nationality-list");

    typeListEle.innerHTML = `
        <label for="nationality">جنسيات الصنف</label>
            <select name="nationality-list" id="nationality">
                <option value="all" selected>كل الجنسيات</option>
                <option value="${dataNationality[`group-${userId}`].typeOne}">${dataNationality[`group-${userId}`].typeOne}</option>
                <option value="${dataNationality[`group-${userId}`].typeTwo}">${dataNationality[`group-${userId}`].typeTwo}</option>
                <option value="${dataNationality[`group-${userId}`].typeThree}">${dataNationality[`group-${userId}`].typeThree}</option>
                <option value="${dataNationality[`group-${userId}`].typeFour}">${dataNationality[`group-${userId}`].typeFour}</option>
                <option value="${dataNationality[`group-${userId}`].typeFive}">${dataNationality[`group-${userId}`].typeFive}</option>
                <option value="${dataNationality[`group-${userId}`].typeSix}">${dataNationality[`group-${userId}`].typeSix}</option>
                <option value="${dataNationality[`group-${userId}`].typeSeven}">${dataNationality[`group-${userId}`].typeSeven}</option>
                <option value="${dataNationality[`group-${userId}`].typeEight}">${dataNationality[`group-${userId}`].typeEight}</option>
                <option value="${dataNationality[`group-${userId}`].typeNine}">${dataNationality[`group-${userId}`].typeNine}</option>
                <option value="${dataNationality[`group-${userId}`].typeTen}">${dataNationality[`group-${userId}`].typeTen}</option>
                <option value="${dataNationality[`group-${userId}`].typeEleven}">${dataNationality[`group-${userId}`].typeEleven}</option>
            </select>
    `
}

export { listsNationality }