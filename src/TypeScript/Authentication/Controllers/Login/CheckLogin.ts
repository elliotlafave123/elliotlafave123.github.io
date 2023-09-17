import { Constants } from "../../../Constants/Constants";

export interface LoginStatus {
  LoggedIn: boolean;
  EmailVerificationRequired: boolean;
  Unauthorized: boolean;
}

export async function CheckLogin(): Promise<LoginStatus> {
  const status: LoginStatus = {
    LoggedIn: false,
    EmailVerificationRequired: false,
    Unauthorized: false,
  };

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/isUserAuthenticated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    switch (response.status) {
      case 201:
        status.LoggedIn = true;
        break;
      case 401:
        status.EmailVerificationRequired = true;
        break;
      case 403:
        status.Unauthorized = true;
        break;
      default:
        throw new Error("Unknown error");
    }
  } catch (error) {
    status.Unauthorized = true;
  }

  return status;
}
