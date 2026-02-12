function totalProduct(products) {
  let totals = document.querySelectorAll(".total");
  let totalsTwo = document.querySelectorAll(".total-two");
  let allTotal = document.querySelectorAll(".all-total");

  totals.forEach((total) => {
    let dataId = +total.getAttribute("data-id");
    let findProduct = products.find((ele) => ele.id === dataId);
    if (!findProduct) return;

    total.innerHTML = Number(findProduct.number) * Number(findProduct.box);
  });

  totalsTwo.forEach((total) => {
    let dataId = +total.getAttribute("data-id");
    let findProduct = products.find((ele) => ele.id === dataId);
    if (!findProduct) return;

    let eleTwo = document.querySelectorAll(`#ele-${dataId}`);
    if (findProduct.numberTwo === "" && findProduct.boxTwo === "") {
      eleTwo.forEach((ele) => {
        ele.style.display = "none";
      });
      return;
    }

    total.innerHTML =
      Number(findProduct.numberTwo) * Number(findProduct.boxTwo);
  });

  allTotal.forEach((total, index) => {
    let dataId = +total.getAttribute("data-id");
    let findProduct = products.find((ele) => ele.id === dataId);
    if (!findProduct) return;

    total.innerHTML =
      Number(totals[index].innerText) + Number(totalsTwo[index].innerText);
  });
}

export { totalProduct };
