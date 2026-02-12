function formSelect() {
  let formSelect = document.querySelector(".form-select");
  let icon = document.querySelector("ion-icon");
  let selectList = document.querySelector(".select-list");
  let lists = selectList.querySelectorAll("li");
  let span = document.querySelector(".selected");

  formSelect.addEventListener("click", () => {
    selectList.classList.toggle("active");
    icon.classList.toggle("rotate");

    lists.forEach((le) => {
      let dataId = le.getAttribute("data-value");
      le.addEventListener("click", () => {
        span.textContent = dataId;
      });
    });
  });
}

export { formSelect };
