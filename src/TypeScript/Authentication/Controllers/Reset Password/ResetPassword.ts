import { Constants } from "../../Constants/Constants";
import { ResetPasswordModel } from "../../Models/ResetPasswordModel";

export async function ResetPassword(resetPassword: ResetPasswordModel) {
  try {
    await fetch(`${Constants.API_BASE_URL}/api/users/resetpassword/${resetPassword.id}/${resetPassword.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: resetPassword.email,
        password: resetPassword.password,
        passwordConfirmation: resetPassword.passwordConfirmation,
      }),
    })
      .then((res) => {
        if (res.status === 403) {
          throw new Error("Invalid email or password");
        }
        if (res.status === 301) {
          throw new Error("Email verification required");
        }
        return res;
      })
      .then(() => {
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
}
