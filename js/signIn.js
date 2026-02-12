import { activationEmail } from "../validation/activationEmail.js";
import { activationName } from "../validation/activationName.js";
import { activationPassword } from "../validation/activationPassword.js";
import { showPassword } from "../validation/showPassword.js";

function saveAccountInLocalStorage(avatar) {
  let account = {
      name: "طة فياض",
      email: "admin@gmail.com",
      password: "admin56",
      avatar: avatar,
    }

  localStorage.setItem("account", JSON.stringify(account));
}

function signIn() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let avatar = document.querySelector(".avatar");
  let error = document.querySelector(".message-Error");
  let submit = document.querySelector(".submit");

  let errorPassword = document.querySelector(".error-password");
  let correctPassword = document.querySelector(".correct-password");
  let errorEmail = document.querySelector(".error-email");
  let correctEmail = document.querySelector(".correct-email");
  let errorName = document.querySelector(".error-name");
  let correctName = document.querySelector(".correct-name");

  saveAccountInLocalStorage(avatar.value);
  let getAccount = JSON.parse(localStorage.getItem("account")) || [];

  activationPassword(errorPassword, correctPassword, getAccount);
  activationEmail(errorEmail, correctEmail, getAccount);
  activationName(errorName, correctName, getAccount);
  showPassword();

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let updateData = {...getAccount, avatar: avatar.value}
      localStorage.setItem("account", JSON.stringify(updateData));

    if (email.value === "" && password.value === "" && name.value === "" && avatar.value === "") {
      error.classList.add("active");
      setTimeout(() => {
        error.classList.remove("active");
      }, 1500);
      return;
    }

    if (
      getAccount.name === name.value &&
      getAccount.email === email.value &&
      getAccount.password === password.value
    ) {
      email.value = "";
      password.value = "";
      name.value = ""; 
      avatar.value = "";
      window.location.href = "data.html";
    } else {
      correctPassword.classList.remove("active");
    }
  });
}

signIn();
