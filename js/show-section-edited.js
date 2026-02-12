function showSectionEdited() {
  let sectionEdit = document.querySelector(".show-section-edit");
  let btnClose = document.querySelector(".btn-close");

  sectionEdit.classList.add("active");
  btnClose.addEventListener("click", () => {
    sectionEdit.classList.remove("active");
  });
}

export { showSectionEdited };
