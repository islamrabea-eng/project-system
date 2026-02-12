function activationName(errorName, correctName, getAccount) {
  let name = document.querySelector(".name");
  
  name.addEventListener("input", () => {
    if (name.value !== "" && getAccount.name === name.value) {
      errorName.classList.remove("active");
      correctName.classList.add("active");
    } else {
      errorName.classList.add("active");
      correctName.classList.remove("active");
    }

    if (name.value === "") {
      errorName.classList.remove("active");
      correctName.classList.remove("active");
    }
  });
}

export { activationName };
