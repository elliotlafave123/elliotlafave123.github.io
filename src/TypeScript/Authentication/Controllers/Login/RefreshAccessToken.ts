import { Constants } from "../../Constants/Constants";

export async function RefreshAccessToken(token: string) {
  try {
    await fetch(`${Constants.API_BASE_URL}/api/sessions/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-refresh": token,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          throw new Error("Invalid email or password");
        }
        if (res.status === 301) {
          throw new Error("Email verification required");
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
}
