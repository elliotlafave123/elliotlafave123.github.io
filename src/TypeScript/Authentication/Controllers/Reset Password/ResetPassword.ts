import { Constants } from "../../../Constants/Constants";
import { ResetPasswordModel } from "../../Models/ResetPasswordModel";

export async function ResetPassword(resetPassword: ResetPasswordModel): Promise<boolean> {
  try {
    const response = await fetch(
      `${Constants.API_BASE_URL}/api/users/resetpassword/${resetPassword.id}/${resetPassword.token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: resetPassword.email,
          password: resetPassword.password,
          passwordConfirmation: resetPassword.passwordConfirmation,
        }),
      }
    );

    if (response.status === 403) {
      throw new Error("Invalid email or password");
    }
    if (response.status === 301) {
      throw new Error("Email verification required");
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
