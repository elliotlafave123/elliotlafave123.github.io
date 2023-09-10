import validator from "validator";
import { SignUp } from "../../Controllers/Sign up/SignUp";

document.addEventListener("DOMContentLoaded", async function () {
  const form = document.getElementById("signUpForm") as HTMLFormElement;
  const errorSummary = createErrorSummary();

  form?.insertBefore(errorSummary, form.firstChild);
  form?.addEventListener("submit", handleSubmit);
});

function createErrorSummary() {
  const errorSummary = createElement("div", "c-validation-summary");
  errorSummary.style.display = "none"; // Initially hide the error summary
  const errorSummaryTop = createElement("div", "c-validation-summary__top");
  const errorSummaryIcon = createElement(
    "div",
    "c-validation-summary__icon",
    `<i class="fa-sharp fa-solid fa-triangle-exclamation"></i>`
  );
  const errorSummaryTitle = createElement("div", "c-validation-summary__title", "Validation Errors");

  errorSummaryTop.appendChild(errorSummaryIcon);
  errorSummaryTop.appendChild(errorSummaryTitle);
  errorSummary.appendChild(errorSummaryTop);
  errorSummary.appendChild(createElement("ul", "c-validation-summary__list"));

  return errorSummary;
}

function createElement(tag: string, className: string, innerHTML?: string) {
  const element = document.createElement(tag);
  element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

async function handleSubmit(e: Event) {
  e.preventDefault();

  const errorSummary = document.querySelector(".c-validation-summary") as HTMLDivElement;
  errorSummary.style.display = "none"; // Hide the error summary at the start of form submission

  const inputs = [
    {
      id: "firstname",
      errorMessage: "Please enter your first name",
      validation: (val: string) => val.trim().length > 0,
      errorElementId: "errorMessageFirstName",
    },
    {
      id: "lastname",
      errorMessage: "Please enter your last name",
      validation: (val: string) => val.trim().length > 0,
      errorElementId: "errorMessageLastName",
    },
    {
      id: "displayname",
      errorMessage: "Please enter your display name",
      validation: (val: string) => val.trim().length > 0,
      errorElementId: "errorMessageDisplayName",
    },
    {
      id: "email",
      errorMessage: "Please enter a valid email",
      validation: validator.isEmail,
      errorElementId: "errorMessageEmail",
    },
    {
      id: "password",
      errorMessage: "Password must meet requirements",
      validation: (val: string) => val && val.length >= 8,
      errorElementId: "errorMessagePassword",
    },
    {
      id: "confirmPassword",
      errorMessage: "Passwords do not match",
      validation: (val: string, vals: string[]) => val && val === vals[4],
      errorElementId: "errorMessageConfirmPassword",
    },
  ];

  const values = [];
  const errorMessagesList = [];
  let valid = true;
  let firstErrorField: HTMLElement | null = null;

  inputs.forEach(({ id, errorMessage, validation, errorElementId }, index) => {
    const input = document.getElementById(id) as HTMLInputElement;
    const errorMessageElement = document.getElementById(errorElementId);

    if (errorMessageElement) {
      errorMessageElement.style.display = "none";
      errorMessageElement.textContent = "";
    }

    const value = input.value;
    values.push(value);

    if (!validation(value, values)) {
      if (errorMessageElement) {
        errorMessageElement.style.display = "block";
        errorMessageElement.textContent = errorMessage;
      }
      errorMessagesList.push(errorMessage);
      valid = false;
      if (!firstErrorField) firstErrorField = input;
    }
  });

  if (!valid) {
    errorSummary.style.display = "block"; // Show the error summary if there are validation errors
    const errorSummaryList = document.querySelector(".c-validation-summary ul");
    errorSummaryList.innerHTML = errorMessagesList
      .map((msg, index) => `<li><a href="#${inputs[index].id}">${msg}</a></li>`)
      .join("");
    firstErrorField?.focus();
    return;
  }

  try {
    const [firstName, lastName, displayName, email, password, confirmPassword] = values;
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
}