const signUpButton = document.getElementById("signUpButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const displayName = document.getElementById("displayname");

const length = document.getElementById("length");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");

const errorMessageFirstName = document.getElementById("errorMessageFirstName");
const errorMessageLastName = document.getElementById("errorMessageLastName");
const errorMessageDisplayName = document.getElementById("errorMessageDisplayName");
const errorMessageEmail = document.getElementById("errorMessageEmail");
const errorMessageEmailExists = document.getElementById("errorMessageEmailExists");
const errorMessagePassword = document.getElementById("errorMessagePassword");

const API_URL = "http://localhost:3001/Auth/signup";
// const API_URL = "https://elliotapiserver.co.uk/Auth/signup";

const state = {
  passwordChecks: {
    passwordLength: false,
    upperAndLower: false,
    number: false,
    specialCharacter: false,
  },
  inputErrors: {
    firstName: false,
    lastName: false,
    displayName: false,
    email: false,
    emailUsed: false,
    password: false,
  },
  errorMessage: undefined,
  errorHidden: true,
};

signUp = async () => {
  if (!signUpButton) return;

  let data = {
    firstName: firstName.value,
    lastName: lastName.value,
    displayName: displayName.value,
    email: email.value,
    password: password.value,
  };

  try {
    let res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      localStorage.setItem("EmailToVerify", data.email);
      window.location.replace("../../pages/Login/verifyEmail.html");
    } else {
      throw new Error("Email already used");
    }
  } catch (error) {
    state.inputErrors.emailUsed = true;
    displayErrors();
    state.errorMessage = error.message;
    state.errorHidden = false;
    setTimeout(() => {
      state.errorHidden = true;
    }, 5000);
  }
};

function hasLowerCase(str) {
  return /[a-z]/.test(str);
}
function hasCapital(str) {
  return /[A-Z]/.test(str);
}
function hasNumber(str) {
  return /\d/.test(str);
}
const checkPassword = () => {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let val = password.value.toString();

  val.length >= 8 ? (state.passwordChecks.passwordLength = true) : (state.passwordChecks.passwordLength = false);
  hasLowerCase(val) && hasCapital(val)
    ? (state.passwordChecks.upperAndLower = true)
    : (state.passwordChecks.upperAndLower = false);
  hasNumber(val) ? (state.passwordChecks.number = true) : (state.passwordChecks.number = false);
  val.match(format) ? (state.passwordChecks.specialCharacter = true) : (state.passwordChecks.specialCharacter = false);
  displayPasswordTicks();
};
const validatePassword = () => {
  checkPassword();
  if (
    state.passwordChecks.passwordLength &&
    state.passwordChecks.number &&
    state.passwordChecks.upperAndLower &&
    state.passwordChecks.specialCharacter
  ) {
    state.inputErrors.password = false;
    return true;
  } else {
    state.inputErrors.password = true;
    return false;
  }
};
const verifyInputs = () => {
  firstName.value == "" ? (state.inputErrors.firstName = true) : (state.inputErrors.firstName = false);
  lastName.value == "" ? (state.inputErrors.lastName = true) : (state.inputErrors.lastName = false);
  displayName.value == "" ? (state.inputErrors.displayName = true) : (state.inputErrors.displayName = false);
  email.value == "" ? (state.inputErrors.email = true) : (state.inputErrors.email = false);
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  filter.test(email.value) ? (state.inputErrors.email = false) : (state.inputErrors.email = true);

  if (password.value !== "") {
    if (!validatePassword()) {
      return displayErrors();
    } else {
      displayErrors();
    }
  }

  if (
    !state.inputErrors.firstName &&
    !state.inputErrors.lastName &&
    !state.inputErrors.displayName &&
    !state.inputErrors.email &&
    validatePassword() &&
    !signUpButton.disabled
  ) {
    return true;
  } else {
    displayErrors();
    return false;
  }
};

displayPasswordTicks = () => {
  state.passwordChecks.passwordLength ? length.classList.add("active") : length.classList.remove("active");
  state.passwordChecks.upperAndLower ? upper.classList.add("active") : upper.classList.remove("active");
  state.passwordChecks.number ? number.classList.add("active") : number.classList.remove("active");
  state.passwordChecks.specialCharacter ? special.classList.add("active") : special.classList.remove("active");
};

displayErrors = () => {
  state.inputErrors.firstName
    ? (errorMessageFirstName.style.display = "block")
    : (errorMessageFirstName.style.display = "none");
  state.inputErrors.lastName
    ? (errorMessageLastName.style.display = "block")
    : (errorMessageLastName.style.display = "none");
  state.inputErrors.displayName
    ? (errorMessageDisplayName.style.display = "block")
    : (errorMessageDisplayName.style.display = "none");
  state.inputErrors.email ? (errorMessageEmail.style.display = "block") : (errorMessageEmail.style.display = "none");
  state.inputErrors.emailUsed
    ? (errorMessageEmailExists.style.display = "block")
    : (errorMessageEmailExists.style.display = "none");
  state.inputErrors.password
    ? (errorMessagePassword.style.display = "block")
    : (errorMessagePassword.style.display = "none");
};

password.addEventListener("keyup", () => {
  validatePassword();
});

if (signUpButton) {
  signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (verifyInputs()) {
      signUp();
    }
  });
}
