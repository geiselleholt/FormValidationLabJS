let regForm = document.getElementById("registration");
regForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
//   e.preventDefault();
  let passwordValue = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck");
  let passwordCheckValue = document.getElementById("passwordCheck").value;
  let username = document.getElementById("username");

  let usernameValue = document.getElementById("username").value;

  if (passwordValue !== passwordCheckValue) {
    alert("that don't match");
    passwordCheck.focus();
    return;
  }

  if (passwordValue.includes(usernameValue)) {
    alert("password can't contain usersname");
    username.focus();
    return;
  }

  let allData = [];

  localStorage.setItem("password", passwordValue);
  let storedPassword = localStorage.getItem("password");

  localStorage.setItem("username", usernameValue.toLowerCase());
  let storedUsername = localStorage.getItem("username");

  let emailValue = document.getElementById("email").value;
  localStorage.setItem("email", emailValue.toLowerCase());
  let storedEmail = localStorage.getItem("email");

  allData.forEach((data) => {
    if (data.username == usernameValue) {
      alert("that username is already taken");
      username.focus();
      return;
    }
  });

  let data = {
    username: storedUsername,
    password: storedPassword,
    email: storedEmail,
  };
  allData.push(data);

  localStorage.clear();
  alert("submit successful!");
}
