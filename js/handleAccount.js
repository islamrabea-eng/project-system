function handleAccount() {
  let username = document.querySelector(".username");
  let account = JSON.parse(localStorage.getItem("account")) || [];


  // if (account.length > 0) {
  //   avatar.src = account[0].avatar;
  //   username.textContent = account[0].username;
  // }   
  
  console.log(account.name);
  username.innerHTML = `مرحبا بك ${account.avatar} / ${account.name}`
  
}

export { handleAccount }