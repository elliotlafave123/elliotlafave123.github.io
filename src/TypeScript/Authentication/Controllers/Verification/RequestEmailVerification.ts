import { Constants } from "../../../Constants/Constants";
import { VerificationResponse } from "../../Models/VerificationResponse";

export interface RequestVerificationInput {
  email: string;
}

export async function RequestEmailVerification(params: RequestVerificationInput): Promise<VerificationResponse> {
  try {
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/requestverification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.status === 403) {
      return VerificationResponse.CouldNotVerifyUser;
    } else if (response.status === 301) {
      return VerificationResponse.UserAlreadyVerified;
    } else if (response.status === 200) {
      return VerificationResponse.VerificationEmailSent;
    } else {
      return VerificationResponse.UnknownError;
    }
  } catch (error) {
    console.log(`Error requesting user verification: ${error}`);
    return VerificationResponse.RequestError;
  }
}
