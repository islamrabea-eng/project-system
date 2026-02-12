function activationEmail(errorEmail, correctEmail, getAccount) {
  let email = document.querySelector(".email");

  email.addEventListener("input", () => {
    if (email.value !== "" && getAccount.email === email.value) {
      errorEmail.classList.remove("active");
      correctEmail.classList.add("active");
    } else {
      errorEmail.classList.add("active");
      correctEmail.classList.remove("active");
    }

    if (email.value === "") {
      errorEmail.classList.remove("active");
      correctEmail.classList.remove("active");
    }
  });
}

export { activationEmail };
