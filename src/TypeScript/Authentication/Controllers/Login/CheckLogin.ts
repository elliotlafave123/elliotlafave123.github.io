import { Constants } from "../../Constants/Constants";

export async function CheckLogin(): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");

    await fetch(`${Constants.API_BASE_URL}/api/users/isUserAuthenticated`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status === 401) {
        throw new Error("Invalid token");
      } else if (res.status === 201) {
        return true;
      }
    });
  } catch {
    return false;
  }
}
