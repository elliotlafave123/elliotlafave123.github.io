import validator from "validator";
import { SignUp } from "../../Controllers/Sign up/SignUp";

document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("signUpForm");
  const firstNameInput = document.getElementById("firstname") as HTMLInputElement;
  const lastNameInput = document.getElementById("lastname") as HTMLInputElement;
  const displayNameInput = document.getElementById("displayname") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const confirmPasswordInput = document.getElementById("confirmPassword") as HTMLInputElement;

  // Validation error elements
  const errorMessageFirstName = document.getElementById("errorMessageFirstName");
  const errorMessageLastName = document.getElementById("errorMessageLastName");
  const errorMessageDisplayName = document.getElementById("errorMessageDisplayName");
  const errorMessageEmail = document.getElementById("errorMessageEmail");
  const errorMessagePassword = document.getElementById("errorMessagePassword");
  const errorMessageConfirmPassword = document.getElementById("errorMessageConfirmPassword");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear previous validation errors
    errorMessageFirstName.textContent = "";
    errorMessageLastName.textContent = "";
    errorMessageDisplayName.textContent = "";
    errorMessageEmail.textContent = "";
    errorMessagePassword.textContent = "";
    errorMessageConfirmPassword.textContent = "";

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const displayName = displayNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let valid = true;

    // Input validation
    if (!firstName) {
      errorMessageFirstName.textContent = "Please enter your first name";
      valid = false;
    }

    if (!lastName) {
      errorMessageLastName.textContent = "Please enter your last name";
      valid = false;
    }

    if (!displayName) {
      errorMessageDisplayName.textContent = "Please enter your display name";
      valid = false;
    }

    if (!validator.isEmail(email)) {
      errorMessageEmail.textContent = "Please enter a valid email";
      valid = false;
    }

    if (!password || password.length < 8) {
      errorMessagePassword.textContent = "Password must meet requirements";
      valid = false;
    }

    if (password !== confirmPassword) {
      errorMessageConfirmPassword.textContent = "Passwords do not match";
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const result = await SignUp({
        firstName,
        lastName,
        displayName,
        email,
        password,
        passwordConfirmation: confirmPassword,
      });

      if (result) {
        window.location.replace("/pages/login/CheckYourEmail.html");
      }
    } catch (error) {
      console.log("Signup failed:", error);
    }
  });
});
