const signUpButton = document.getElementById("signUpButton");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const displayNameInput = document.getElementById("displayname");

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

const API_URL = "https://elliotapiserver.co.uk/Auth/signup";

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
};

const isValidEmail = (email) => {
  const filter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return filter.test(email);
};

const isEmpty = (value) => value === "";

const signUp = async () => {
  if (!signUpButton) return;

  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    displayName: displayNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      localStorage.setItem("EmailToVerify", data.email);
      window.location.replace("../../pages/login/verifyemail.html");
    } else {
      throw new Error("Email already used");
    }
  } catch (error) {
    state.inputErrors.emailUsed = true;
    displayErrors();
  }
};

const checkPassword = () => {
  const hasLowerCase = (str) => /[a-z]/.test(str);
  const hasCapital = (str) => /[A-Z]/.test(str);
  const hasNumber = (str) => /\d/.test(str);

  const val = passwordInput.value.toString();
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  state.passwordChecks.passwordLength = val.length >= 8;
  state.passwordChecks.upperAndLower = hasLowerCase(val) && hasCapital(val);
  state.passwordChecks.number = hasNumber(val);
  state.passwordChecks.specialCharacter = val.match(format) !== null;

  displayPasswordTicks();
};

const validatePassword = () => {
  checkPassword();
  const { passwordLength, upperAndLower, number, specialCharacter } = state.passwordChecks;
  state.inputErrors.password = !(passwordLength && upperAndLower && number && specialCharacter);
  return !state.inputErrors.password;
};

const verifyInputs = () => {
  state.inputErrors.firstName = isEmpty(firstNameInput.value);
  state.inputErrors.lastName = isEmpty(lastNameInput.value);
  state.inputErrors.displayName = isEmpty(displayNameInput.value);
  state.inputErrors.email = !isValidEmail(emailInput.value);

  if (!isEmpty(passwordInput.value) && !validatePassword()) {
    displayErrors();
    return false;
  }

  const noErrors = Object.values(state.inputErrors).every((error) => !error);
  if (noErrors && !signUpButton.disabled) {
    displayErrors();
    return true;
  } else {
    displayErrors();
    return false;
  }
};

const displayPasswordTicks = () => {
  length.classList.toggle("active", state.passwordChecks.passwordLength);
  upper.classList.toggle("active", state.passwordChecks.upperAndLower);
  number.classList.toggle("active", state.passwordChecks.number);
  special.classList.toggle("active", state.passwordChecks.specialCharacter);
};

const displayErrors = () => {
  errorMessageFirstName.style.display = state.inputErrors.firstName ? "block" : "none";
  errorMessageLastName.style.display = state.inputErrors.lastName ? "block" : "none";
  errorMessageDisplayName.style.display = state.inputErrors.displayName ? "block" : "none";
  errorMessageEmail.style.display = state.inputErrors.email ? "block" : "none";
  errorMessageEmailExists.style.display = state.inputErrors.emailUsed ? "block" : "none";
  errorMessagePassword.style.display = state.inputErrors.password ? "block" : "none";
};

passwordInput.addEventListener("keyup", () => {
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
