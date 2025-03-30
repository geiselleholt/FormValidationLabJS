let emailInput = document.getElementById("email");

emailInput.addEventListener("submit", handleRegistrationForm);

function handleRegistrationForm(event) {
  if (emailInput.endsWith("@example.com")) {
    event.preventDefault();
  }
}
