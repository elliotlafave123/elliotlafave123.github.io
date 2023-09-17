import { RequestPasswordReset } from "../../Controllers/Reset Password/RequestPasswordReset";

async function handleFormSubmit() {
  const email = document.getElementById("email") as HTMLInputElement;
  const emailValue = email.value;

  if (email) {
    const result = await RequestPasswordReset(emailValue);

    if (result) {
      window.location.href = "/pages/login/CheckYourEmail.html";
    } else {
    }
  }
}

document.getElementById("requestPasswordResetForm").addEventListener("submit", (e) => {
  e.preventDefault();
  handleFormSubmit();
});
