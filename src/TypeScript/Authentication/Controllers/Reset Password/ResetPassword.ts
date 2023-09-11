import { Constants } from "../../../Constants/Constants";
import { ResetPasswordModel } from "../../Models/ResetPasswordModel";
import { ResetPasswordResult } from "../../Models/ResetPasswordResult";

export async function ResetPassword(resetPassword: ResetPasswordModel): Promise<ResetPasswordResult> {
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

    if (response.status === 200) {
      return ResetPasswordResult.Success;
    }
    if (response.status === 403) {
      return ResetPasswordResult.InvalidEmailOrPassword;
    }
    if (response.status === 301) {
      return ResetPasswordResult.EmailVerificationRequired;
    }

    return ResetPasswordResult.Error;
  } catch (error) {
    console.log(error);
    return ResetPasswordResult.Error;
  }
}
