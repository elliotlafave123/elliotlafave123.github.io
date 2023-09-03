import { Constants } from "../../../Constants/Constants";

export async function RefreshAccessToken(token: string): Promise<boolean> {
  try {
    const res = await fetch(`${Constants.API_BASE_URL}/api/sessions/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-refresh": token,
      },
    });

    if (res.status === 403) {
      throw new Error("Invalid email or password");
    }
    if (res.status === 301) {
      throw new Error("Email verification required");
    }
    if (res.status !== 200) {
      throw new Error("Unknown error");
    }

    const data = await res.json();
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
