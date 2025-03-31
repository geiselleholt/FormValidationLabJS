let regForm = document.getElementById("registration");
regForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let username = document.getElementById("username");
  let usernameValue = document.getElementById("username").value;
  let passwordValue = document.getElementById("password").value;
  let passwordCheck = document.getElementById("passwordCheck");
  let passwordCheckValue = document.getElementById("passwordCheck").value;
  let emailValue = document.getElementById("email").value;

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

  const data = {
    username: usernameValue.toLowerCase(),
    password: passwordValue,
    email: emailValue.toLowerCase(),
  };

  allData.push(data);
  localStorage.setItem("data", allData);
  let storedData = localStorage.getItem("data");

  storedData.forEach((data) => {
    if (data.username == usernameValue) {
      alert("that username is already taken");
      username.focus();
      return;
    }
  });

  //   localStorage.clear();
  alert("submit successful!");
}
