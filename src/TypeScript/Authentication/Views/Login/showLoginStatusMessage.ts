import { LoginFormStatusMessage } from "../../Models/LoginFormStatusMessage";

export function showLoginStatusMessage(status: LoginFormStatusMessage) {
  const dialogue = document.querySelector(".c-dialogue");
  if (!dialogue) return;

  const iconElement = document.createElement("i");
  iconElement.classList.add("c-dialogue__icon");

  const titleElement = document.createElement("p");
  titleElement.classList.add("c-dialogue__title");

  switch (status) {
    case LoginFormStatusMessage.EmailVerificationSuccess:
      dialogue.classList.add("c-dialogue--green");
      iconElement.classList.add("fa-solid", "fa-circle-check");
      titleElement.textContent = "Email verified successfully.";
      break;

    case LoginFormStatusMessage.EmailVerificationFailure:
      dialogue.classList.add("c-dialogue--red");
      iconElement.classList.add("fa-solid", "fa-triangle-exclamation");
      titleElement.textContent = "Email verification failed.";
      break;

    case LoginFormStatusMessage.PasswordResetSuccess:
      dialogue.classList.add("c-dialogue--green");
      iconElement.classList.add("fa-solid", "fa-circle-check");
      titleElement.textContent = "Password reset successfully.";
      break;

    case LoginFormStatusMessage.PasswordResetFailure:
      dialogue.classList.add("c-dialogue--red");
      iconElement.classList.add("fa-solid", "fa-triangle-exclamation");
      titleElement.textContent = "Password reset failed.";
      break;

    case LoginFormStatusMessage.EmailAlreadyVerified:
      dialogue.classList.add("c-dialogue--red");
      iconElement.classList.add("fa-solid", "fa-triangle-exclamation");
      titleElement.textContent = "Email already verified.";
      break;

    default:
      break;
  }

  dialogue.appendChild(iconElement);
  dialogue.appendChild(titleElement);
}
