let regForm = document.getElementById("registration");
let password = document.getElementById("password");
let passwordCheck = document.getElementById("passwordCheck");
let username = document.getElementById("username");
let terms = document.getElementById("terms");
let passwordValue = password.value;
let passwordCheckValue = passwordCheck.value;
let usernameValue = username.value;

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventdefault();
  if (passwordValue !== passwordCheckValue) {
    return false;
  }

  if (password.includes(usernameValue)) {
    return false;
  }
}
