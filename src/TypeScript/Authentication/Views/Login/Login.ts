import validator from "validator";
import { Login } from "../../Controllers/Login/Login";
import { updateAuthLinks } from "./updateAuthLinks";
import { LoginFormStatusMessage } from "../../Models/LoginFormStatusMessage";
import { showLoginStatusMessage } from "./showLoginStatusMessage";

document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("account");
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const emailValidation = document.getElementById("email-validation");
  const passwordValidation = document.getElementById("password-validation");

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  if (status) {
    showLoginStatusMessage(status as LoginFormStatusMessage);
  } else {
    const dialogue = document.querySelector(".c-dialogue") as HTMLDivElement;
    if (dialogue) {
      dialogue.style.display = "none";
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    let valid = true;

    // Clear previous validation errors
    emailValidation.textContent = "";
    passwordValidation.textContent = "";
    emailValidation.style.display = "none";
    passwordValidation.style.display = "none";

    // Input validation
    if (!validator.isEmail(email)) {
      emailValidation.style.display = "block";
      emailValidation.textContent = "Invalid email format.";
      valid = false;
    }
    if (!password || password.length < 8) {
      passwordValidation.textContent = "Password must be at least 8 characters long.";
      valid = false;
    }

    if (!valid) {
      return;
    }

    const loginSuccessful = await Login(email, password);

    if (loginSuccessful.LoggedIn) {
      // Redirect to previous page
      const backLink = localStorage.getItem("backLink");
      if (backLink) {
        console.log("backLink", backLink);
        if (backLink.includes("/pages/login/")) {
          window.location.replace("/index.html");
        } else {
          window.location.replace(backLink);
        }
      } else {
        window.location.href = "index.html";
      }
      updateAuthLinks(true);
    } else if (loginSuccessful.EmailVerificationRequired) {
      // Redirect to request email verification page
      window.location.href = "/pages/login/RequestEmailVerification.html?email=" + email;
    } else {
      emailValidation.style.display = "block";
      passwordValidation.style.display = "block";
      emailValidation.textContent = "The username or password is incorrect.";
      passwordValidation.textContent = "The username or password is incorrect.";
      passwordInput.value = "";
      updateAuthLinks(false);
    }
  });
});
