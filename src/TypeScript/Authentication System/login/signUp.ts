const signUpButton = document.getElementById("signUpButton") as HTMLButtonElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const firstNameInput = document.getElementById("firstname") as HTMLInputElement;
const lastNameInput = document.getElementById("lastname") as HTMLInputElement;
const displayNameInput = document.getElementById("displayname") as HTMLInputElement;

const lengthSignUp = document.getElementById("length") as HTMLElement;
const upper = document.getElementById("upper") as HTMLElement;
const number = document.getElementById("number") as HTMLElement;
const special = document.getElementById("special") as HTMLElement;

const errorMessageFirstName = document.getElementById("errorMessageFirstName") as HTMLElement;
const errorMessageLastName = document.getElementById("errorMessageLastName") as HTMLElement;
const errorMessageDisplayName = document.getElementById("errorMessageDisplayName") as HTMLElement;
const errorMessageEmail = document.getElementById("errorMessageEmail") as HTMLElement;
const errorMessageEmailExists = document.getElementById("errorMessageEmailExists") as HTMLElement;
const errorMessagePassword = document.getElementById("errorMessagePassword") as HTMLElement;

const API_URL_SIGN_UP = "https://elliotapiserver.com/Auth/signup";

const StateSignUp = {
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

const isValidEmail = (email: string): boolean => {
  const filter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return filter.test(email);
};

const isEmpty = (value: string): boolean => value === "";

const signUp = async (): Promise<void> => {
  if (!signUpButton) return;

  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    displayName: displayNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const res = await fetch(API_URL_SIGN_UP, {
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
    StateSignUp.inputErrors.emailUsed = true;
    displayErrors();
  }
};

const checkPassword = (): void => {
  const hasLowerCase = (str: string): boolean => /[a-z]/.test(str);
  const hasCapital = (str: string): boolean => /[A-Z]/.test(str);
  const hasNumber = (str: string): boolean => /\d/.test(str);

  const val = passwordInput.value.toString();
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  StateSignUp.passwordChecks.passwordLength = val.length >= 8;
  StateSignUp.passwordChecks.upperAndLower = hasLowerCase(val) && hasCapital(val);
  StateSignUp.passwordChecks.number = hasNumber(val);
  StateSignUp.passwordChecks.specialCharacter = val.match(format) !== null;

  displayPasswordTicks();
};

const validatePassword = (): boolean => {
  checkPassword();
  const { passwordLength, upperAndLower, number, specialCharacter } = StateSignUp.passwordChecks;
  StateSignUp.inputErrors.password = !(passwordLength && upperAndLower && number && specialCharacter);
  return !StateSignUp.inputErrors.password;
};

const verifyInputs = (): boolean => {
  StateSignUp.inputErrors.firstName = isEmpty(firstNameInput.value);
  StateSignUp.inputErrors.lastName = isEmpty(lastNameInput.value);
  StateSignUp.inputErrors.displayName = isEmpty(displayNameInput.value);
  StateSignUp.inputErrors.email = !isValidEmail(emailInput.value);

  if (!isEmpty(passwordInput.value) && !validatePassword()) {
    displayErrors();
    return false;
  }

  const noErrors = Object.values(StateSignUp.inputErrors).every((error) => !error);
  if (noErrors && !signUpButton.disabled) {
    displayErrors();
    return true;
  } else {
    displayErrors();
    return false;
  }
};

const displayPasswordTicks = (): void => {
  if (!lengthSignUp || !upper || !number || !special) return;
  lengthSignUp.classList.toggle("active", StateSignUp.passwordChecks.passwordLength);
  upper.classList.toggle("active", StateSignUp.passwordChecks.upperAndLower);
  number.classList.toggle("active", StateSignUp.passwordChecks.number);
  special.classList.toggle("active", StateSignUp.passwordChecks.specialCharacter);
};

const displayErrors = (): void => {
  errorMessageFirstName.style.display = StateSignUp.inputErrors.firstName ? "block" : "none";
  errorMessageLastName.style.display = StateSignUp.inputErrors.lastName ? "block" : "none";
  errorMessageDisplayName.style.display = StateSignUp.inputErrors.displayName ? "block" : "none";
  errorMessageEmail.style.display = StateSignUp.inputErrors.email ? "block" : "none";
  errorMessageEmailExists.style.display = StateSignUp.inputErrors.emailUsed ? "block" : "none";
  errorMessagePassword.style.display = StateSignUp.inputErrors.password ? "block" : "none";
};

if (passwordInput) {
  passwordInput.addEventListener("keyup", () => {
    validatePassword();
  });
}

if (signUpButton) {
  signUpButton.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    if (verifyInputs()) {
      signUp();
    }
  });
}
