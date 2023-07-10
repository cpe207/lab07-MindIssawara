const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
};

passInput.onkeyup = () => {
  passInput.classList.remove("is-invalid");
  passInput.classList.remove("is-valid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
};

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPassOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(emailInput.value) === true) {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  if (passInput.value.length < 6) {
    passInput.classList.add("is-invalid");
  } else {
    passInput.classList.add("is-valid");
    isPassOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isPassOk && isEmailOk) {
    alert("Registered successfully");
  }
};
