import { Constants } from "../../../Constants/Constants";
import { VerificationStatus } from "../../Models/VerificationStatus";

export async function VerifyEmail(id: string, token: string): Promise<VerificationStatus> {
  try {
    const res = await fetch(`${Constants.API_BASE_URL}/api/users/verify/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, verificationCode: token }),
    });

    if (res.status === 403) {
      throw new Error("Could not verify user");
    }

    if (res.status === 301) {
      return VerificationStatus.AlreadyVerified;
    }

    if (res.status === 200) {
      return VerificationStatus.Verified;
    }

    throw new Error("Unknown error");
  } catch (error) {
    console.log(error);
    return VerificationStatus.UnknownError;
  }
}
