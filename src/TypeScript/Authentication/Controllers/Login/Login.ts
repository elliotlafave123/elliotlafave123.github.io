import { Constants } from "../../../Constants/Constants";
import { LoginStatus } from "./CheckLogin";

export async function Login(email: string, password: string): Promise<LoginStatus> {
  const status: LoginStatus = {
    LoggedIn: false,
    EmailVerificationRequired: false,
    Unauthorized: false,
  };

  try {
    const response = await fetch(`${Constants.API_BASE_URL}/api/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 403) {
      status.Unauthorized = true;
      throw new Error("Invalid email or password");
    }
    if (response.status === 401) {
      status.EmailVerificationRequired = true;
      throw new Error("Email verification required");
    }
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      status.LoggedIn = true;
    } else {
      status.Unauthorized = true;
      throw new Error("Unknown error occurred");
    }
  } catch (error) {}

  return status;
}
