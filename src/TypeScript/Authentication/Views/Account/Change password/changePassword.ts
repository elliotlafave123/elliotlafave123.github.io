import { initPasswordEye } from "../../../../../../ComponentAssets/simpleComponents/Forms/Form Fields/PasswordInput";
import { ChangePasswordStatus, changePassword } from "../../../Controllers/Account/changePassword";
import { CheckLogin } from "../../../Controllers/Login/CheckLogin";

document.addEventListener("DOMContentLoaded", async function () {
  const isAuth = await CheckLogin();
  if (isAuth.LoggedIn !== true) {
    window.location.href = "/pages/login/login.html";
  }

  const form = document.getElementById("changePasswordForm") as HTMLFormElement;
  const errorSummary = createErrorSummary();
  initPasswordEye();

  form?.insertBefore(errorSummary, form.firstChild);
  form?.addEventListener("submit", handleSubmit);
});

function createErrorSummary() {
  const errorSummary = createElement("div", "c-validation-summary");
  errorSummary.style.display = "none";
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
  const currentPassword = document.getElementById("currentPassword") as HTMLInputElement;
  const newPassword = document.getElementById("password") as HTMLInputElement;
  errorSummary.style.display = "none";

  const inputs = [
    {
      id: "currentPassword",
      errorMessage: "Current password is required",
      validation: (val: string) => val.trim().length > 0,
      errorElementId: "errorMessageCurrentPassword",
    },
    {
      id: "password",
      errorMessage: "New password is required",
      validation: (val: string) => val && val.length >= 8 && val !== currentPassword.value,
      errorElementId: "errorMessagePassword",
    },
    {
      id: "confirmPassword",
      errorMessage: "Confirm password is required",
      validation: (val: string, vals: string[]) => val && val === vals[1],
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
    errorSummary.style.display = "block";
    const errorSummaryList = document.querySelector(".c-validation-summary ul");
    errorSummaryList.innerHTML = errorMessagesList
      .map((msg, index) => `<li><a href="#${inputs[index].id}">${msg}</a></li>`)
      .join("");
    firstErrorField?.focus();
    return;
  }

  const response = await changePassword(currentPassword.value, newPassword.value);

  if (response === ChangePasswordStatus.Success) {
    console.log("Password changed successfully");
    window.location.href = "/account/security?status=true#security";
  }
}
