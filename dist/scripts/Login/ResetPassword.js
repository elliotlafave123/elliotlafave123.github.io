const sendNewPasswordButton = document.getElementById("SendNewPasswordButton");
const startResetPasswordButton = document.getElementById("startResetPasswordButton");
const email = document.getElementById("email");
const password = document.getElementById("password");

const EnterEmailSection = document.getElementById("EnterEmailSection");
const VerifyEmailContainer = document.getElementById("VerifyEmailContainer");
const SavePasswordContainer = document.getElementById("SavePasswordContainer");

const length = document.getElementById("length");
const upper = document.getElementById("upper");
const number = document.getElementById("number");
const special = document.getElementById("special");

const errorMessageName = document.getElementById("errorMessageName");
const errorMessageEmail = document.getElementById("errorMessageEmail");
const errorMessagePassword = document.getElementById("errorMessagePassword");
const errorMessageCaptcha = document.getElementById("errorMessageCaptcha");
const errorMessagePin = document.getElementById("errorMessagePin");

const API_URL = "https://elliotapiserver.co.uk/Auth";
// const API_URL = "http://localhost:3000/Auth";

const state = {
  passwordChecks: {
    passwordLength: false,
    upperAndLower: false,
    number: false,
    specialCharacter: false,
  },
  inputErrors: {
    email: false,
    password: false,
    captcha: false,
  },
  errorMessage: undefined,
  errorHidden: true,
  emailToVerify: undefined,
  passwordResetToken: undefined,
};

startResetPasswordButton.addEventListener("click", async (e) => {
  e.preventDefault();
  email.value == "" ? (state.inputErrors.email = true) : (state.inputErrors.email = false);
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  filter.test(email.value) ? (state.inputErrors.email = false) : (state.inputErrors.email = true);
  state.inputErrors.email ? (errorMessageEmail.style.display = "block") : (errorMessageEmail.style.display = "none");

  if (!state.inputErrors.email) {
    try {
      let data = {
        email: email.value,
      };
      let res = await fetch(API_URL + "/ResendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        state.emailToVerify = email.value;
        EnterEmailSection.style.display = "none";
        displayEmailVerification();
      }
    } catch (e) {}
  }
});

const displayEmailVerification = () => {
  VerifyEmailContainer.style.display = "block";
  const pinBox = document.getElementById("pinBox");
  const pinInput = document.getElementById("pinInput");
  const loadingSpinnerContainer = document.querySelector(".spinner-container");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const resendCodeButton = document.getElementById("resendCodeButton");
  const resendCodeContainer = document.getElementById("resendCodeContainer");
  pinInput.focus();

  pinBox.style.display = "block";
  pinInput.value = "";
  loadingSpinner.style.display = "none";
  resendCodeContainer.style.display = "block";

  const State = {
    errorMessage: undefined,
    errorHidden: true,
  };

  const verifyEmail = async () => {
    const Data = {
      email: state.emailToVerify,
      code: pinInput.value.toString(),
      resetPassword: true,
    };

    try {
      let res = await fetch(API_URL + "/VerifyEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data),
      });

      if (res.status === 200) {
        let response = await res.json();
        state.passwordResetToken = response.passwordResetToken;
        VerifyEmailContainer.style.display = "none";
        SavePasswordContainer.style.display = "block";
      } else if (res.status === 301) {
        pinBox.style.display = "block";
        resendCodeContainer.style.display = "block";
        loadingSpinner.style.display = "none";
        loadingSpinnerContainer.style.display = "none";
        errorMessagePin.style.display = "block";
        pinInput.value = "";
        throw new Error("Incorrect Verification Code");
      } else if (res.status === 403) {
        loadingSpinner.style.display = "none";
        loadingSpinnerContainer.style.display = "none";
        pinInput.value = "";
        errorMessagePin.style.display = "none";
        document.getElementById("loginForm").querySelector("h1").style.display = "none";
        let elements = document.querySelectorAll("p.verify");
        elements.forEach((el) => {
          el.style.display = "none";
        });
        let markup = `
				<h1>Account Locked</h1>
				<p class="verify">Your account has been locked due to too many incorrect pin entries.</p>
				<p class="verify">Contact the site admin from your email address: ${Data.email}</p>
				<p class="verify u-margin-top-medium">Click this link to email support: <a href="mailto:elliot@lafave.co.uk">elliot@lafave.co.uk</a></p>`;
        document.getElementById("loginForm").insertAdjacentHTML("beforeend", markup);
        throw new Error("Account Locked");
      } else if (res.status === 404) {
        VerifyEmailContainer.style.display = "none";
        EnterEmailSection.style.display = "block";
        throw new Error("Incorrect Verification Code");
      }
    } catch (error) {
      loadingSpinner.style.display = "none";
      State.errorHidden = false;
      State.errorMessage = error.message;
      setTimeout(() => {
        State.errorHidden = true;
      }, 5000);
      setTimeout(() => {
        State.formShown = true;
      }, 400);
    }
  };

  const checkPinInput = () => {
    if (pinInput.value.length === 4) {
      pinBox.style.display = "none";
      loadingSpinner.style.display = "block";
      loadingSpinnerContainer.style.display = "flex";
      resendCodeContainer.style.display = "none";
      verifyEmail();
    }
  };

  if (pinInput) {
    pinInput.addEventListener("keydown", (e) => {
      if (!Number.isInteger(parseInt(e.key)) && e.keyCode !== 8) {
        e.preventDefault();
      }
    });
    pinInput.addEventListener("keyup", (e) => {
      checkPinInput();
    });
  }

  // Resend code
  resendCodeButton.addEventListener("click", (e) => {
    e.preventDefault();

    resendEmail();
  });

  const resendEmail = async () => {
    try {
      let data = {
        email: state.emailToVerify,
        resetPassword: true,
      };
      let res = await fetch(API_URL + "/ResendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        resendCodeContainer.innerHTML = "Code Sent!";
      } else if (res.status === 500) {
        throw new Error("Cannot resend verification code, please try again later.");
      } else if (res.status === 404) {
        throw new Error("No user with that email");
      }
    } catch (error) {}
  };
};

// Password validation
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
function isCaptchaChecked() {
  return grecaptcha && grecaptcha.getResponse().length !== 0;
}
const verifyInputs = () => {
  if (password.value !== "") {
    if (!validatePassword()) {
      return displayErrors();
    } else if (!isCaptchaChecked()) {
      state.inputErrors.captcha = true;
      return displayErrors();
    } else {
      displayErrors();
    }
  }
  if (isCaptchaChecked() && validatePassword() && !sendNewPasswordButton.disabled) {
    return true;
  } else {
    displayErrors();
    return false;
  }
};

const displayPasswordTicks = () => {
  state.passwordChecks.passwordLength ? length.classList.add("active") : length.classList.remove("active");
  state.passwordChecks.upperAndLower ? upper.classList.add("active") : upper.classList.remove("active");
  state.passwordChecks.number ? number.classList.add("active") : number.classList.remove("active");
  state.passwordChecks.specialCharacter ? special.classList.add("active") : special.classList.remove("active");
};

const displayErrors = () => {
  state.inputErrors.password
    ? (errorMessagePassword.style.display = "block")
    : (errorMessagePassword.style.display = "none");
  state.inputErrors.captcha
    ? (errorMessageCaptcha.style.display = "block")
    : (errorMessageCaptcha.style.display = "none");
};

password.addEventListener("keyup", () => {
  validatePassword();
});

if (sendNewPasswordButton) {
  sendNewPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (verifyInputs()) {
      sendNewPassword();
    }
  });
}

// Send new password to server
const sendNewPassword = async () => {
  try {
    await fetch(API_URL + "/SetNewPassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.emailToVerify,
        password: password.value.toString(),
        passwordResetToken: state.passwordResetToken,
      }),
    }).then((res) => {
      if (res.status === 404) throw new Error("No user found");
      if (res.status === 500) throw new Error("An error occoured");
      if (res.status === 200) window.location.replace("../../pages/Login/login.html");
    });
  } catch (error) {
    // data.errorMessage = error.message;
    // data.errorHidden = false;
    // setTimeout(() => {
    // 	data.errorHidden = true;
    // }, 5000);
  }
};
