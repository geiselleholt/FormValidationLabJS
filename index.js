let regForm = document.getElementById("registration");

regForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck").value;
  let username = document.getElementById("username").value;
  //   console.log(password, passwordCheck, username);

  if (password !== passwordCheck) {
    alert("that don't match");
    passwordCheck.focus();
    return false;
  }

  if (password.includes(username)) {
    password.focus();
    return false;
  }
}
