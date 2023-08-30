import { Constants } from "../../Constants/Constants";

export async function RequestPasswordReset(email: string) {
  try {
    await fetch(`${Constants.API_BASE_URL}/api/users/forgotpassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 403) {
          throw new Error("Invalid email or password");
        }
        if (res.status === 301) {
          throw new Error("Email verification required");
        }
        return res;
      })
      .then(() => {
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
}
