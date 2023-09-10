import validator from "validator";
import { Login } from "../../Controllers/Login/Login";
import { updateHeaderAuth } from "./UpdateHeaderAuth";

document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("account");
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const emailValidation = document.getElementById("email-validation");
  const passwordValidation = document.getElementById("password-validation");

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
        if (backLink === "/pages/login/login.html") {
          window.location.href = "index.html";
        } else {
          window.location.replace(backLink);
        }
      } else {
        window.location.href = "index.html";
      }
      updateHeaderAuth(true);
    } else if (loginSuccessful.EmailVerificationRequired) {
      // Redirect to request email verification page
      window.location.href = "/pages/login/RequestEmailVerification.html?email=" + email;
    } else {
      emailValidation.style.display = "block";
      passwordValidation.style.display = "block";
      emailValidation.textContent = "The username or password is incorrect.";
      passwordValidation.textContent = "The username or password is incorrect.";
      passwordInput.value = "";
      updateHeaderAuth(false);
    }
  });
});
