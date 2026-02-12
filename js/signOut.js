function signOut() {
  let btnSignOut = document.querySelector(".veg-button");

  btnSignOut.addEventListener("click", () => {
    localStorage.removeItem("account");
    window.location.href = "signIn.html";
  });
}

export { signOut }