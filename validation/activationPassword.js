function activationPassword(errorPassword, correctPassword, getAccount) {
  let password = document.querySelector(".password");
  let toggle = document.querySelector(".toggle-password");

  password.addEventListener("input", () => {
    toggle.style.top = "55%";
    if (password.value !== "" && getAccount.password === password.value) {
      errorPassword.classList.remove("active");
      correctPassword.classList.add("active");
    } else {
      errorPassword.classList.add("active");
      correctPassword.classList.remove("active");
    }

    if (password.value === "") {
      toggle.style.top = "72%";
      errorPassword.classList.remove("active");
      correctPassword.classList.remove("active");
    }
  });
}

export { activationPassword };
