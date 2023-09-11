import { ResetPassword } from "../../Controllers/Reset Password/ResetPassword";
import { ResetPasswordModel } from "../../Models/ResetPasswordModel";
import { ResetPasswordResult } from "../../Models/ResetPasswordResult";

export async function resetPassword() {
  const form = document.getElementById("resetPasswordForm");
  const password = document.getElementById("password") as HTMLInputElement;
  const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
  const errorMessagePassword = document.getElementById("errorMessagePassword");
  const errorMessageConfirmPassword = document.getElementById("errorMessageConfirmPassword");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
      console.log(errorMessagePassword, errorMessageConfirmPassword);
      errorMessagePassword.style.display = "block";
      errorMessagePassword.classList.remove("hidden");
      errorMessageConfirmPassword.style.display = "block";
      return;
    } else {
      errorMessagePassword.style.display = "none";
      errorMessageConfirmPassword.style.display = "none";
    }

    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get("id");
    const token = urlParams.get("passwordResetCode");
    const email = urlParams.get("email");

    if (id && token && email) {
      const resetPasswordData: ResetPasswordModel = {
        id: id,
        token: token,
        email: email,
        password: password.value,
        passwordConfirmation: confirmPassword.value,
      };

      const resetResult = await ResetPassword(resetPasswordData);

      switch (resetResult) {
        case ResetPasswordResult.Success:
          window.location.href = "login.html";
          break;
        case ResetPasswordResult.InvalidEmailOrPassword:
          errorMessagePassword.innerText = "Invalid password.";
          errorMessagePassword.style.display = "block";
          break;
        case ResetPasswordResult.EmailVerificationRequired:
          errorMessagePassword.innerText = "Email verification required.";

          break;
        case ResetPasswordResult.Error:
          errorMessagePassword.innerText = "An error occurred while resetting the password.";
          errorMessagePassword.style.display = "block";
          break;
        default:
          break;
      }
    } else {
      console.log("Missing URL parameters");
    }
  });
}

resetPassword();
