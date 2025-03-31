let regForm = document.getElementById("registration");
regForm.addEventListener("submit", handleRegForm);

function handleRegForm(e) {
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

let loginForm = document.getElementById("login");
loginForm.addEventListener("submit", handleLoginForm);

function handleLoginForm(e) {
  e.preventDefault();
  let loginUsername = document.getElementById("loginUsername");
  let loginUsernameValue = document.getElementById("loginUsername").value;
  let loginPassword = document.getElementById("loginPassword");
  let loginPasswordValue = document.getElementById("loginPassword").value;
  let storedData = localStorage.getItem("data");

  storedData.forEach((data) => {
    if (loginPasswordValue !== data.password) {
      alert("wrong password");
      loginPassword.focus();
      return;
    }
    if (loginUsernameValue.includes(data.username)) {
      return;
    } else {
      alert("username isn't in our system");
      loginUsername.focus();
      return;
    }
  });
    
    let persist = document.getElementById('persist');
    if (persist) {
        alert("success! we'll keep you logged in")
    }
}
