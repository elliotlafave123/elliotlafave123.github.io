import { ResetPassword } from "../../Controllers/Reset Password/ResetPassword";
import { ResetPasswordModel } from "../../Models/ResetPasswordModel";

export async function resetPassword() {
  const form = document.getElementById("resetPasswordForm");
  const password = document.getElementById("password") as HTMLInputElement;
  const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // get email,passwordResetCode and id from the url
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

      const resetSuccessful = await ResetPassword(resetPasswordData);

      if (resetSuccessful) {
        // Redirect or show some message to indicate success
        window.location.href = "login.html";
      } else {
        // TODO: Handle reset password failure, show an error message, etc.
      }
    } else {
      console.log("Missing URL parameters");
    }
  });
}

resetPassword();
