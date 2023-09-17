import { Constants } from "../../../Constants/Constants";

export async function RequestPasswordReset(email: string): Promise<boolean> {
  try {
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/forgotpassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // Check the response status codes
    if (response.status === 403) {
      throw new Error("Invalid email or password");
    }
    if (response.status === 301) {
      throw new Error("Email verification required");
    }

    return true;
  } catch (error) {
    return false;
  }
}
