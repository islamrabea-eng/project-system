function showPassword() {
  let passwordInput = document.querySelector(".password");
  let showIcon = document.querySelector(".show");
  let hideIcon = document.querySelector(".hide");

  showIcon.addEventListener("click", () => {
    passwordInput.type = "text";
    showIcon.style.display = "none";
    hideIcon.style.display = "block";
  });

  hideIcon.addEventListener("click", () => {
    passwordInput.type = "password";
    hideIcon.style.display = "none";
    showIcon.style.display = "block";
  });
}

export { showPassword };
