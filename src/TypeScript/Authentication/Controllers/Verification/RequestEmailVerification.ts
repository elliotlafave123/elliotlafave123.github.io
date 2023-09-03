import { Constants } from "../../../Constants/Constants";

export interface RequestVerificationInput {
  email: string;
}

export async function RequestEmailVerification(params: RequestVerificationInput): Promise<string> {
  try {
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/requestverification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.status === 403) {
      return "Could not verify user";
    } else if (response.status === 301) {
      return "User is already verified";
    } else if (response.status === 200) {
      return "Verification email sent";
    } else {
      return "Unknown error";
    }
  } catch (error) {
    console.log(`Error requesting user verification: ${error}`);
    return "An error occurred while requesting user verification";
  }
}
