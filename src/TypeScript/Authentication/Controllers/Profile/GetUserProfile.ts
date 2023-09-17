import { Constants } from "../../../Constants/Constants";

export async function GetUserProfile(userid: string) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/you`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: userid }),
    });

    if (response.status === 404) {
      return null;
    }

    if (response.status === 500) {
      return null;
    }

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error parsing response");
    }
  } catch (error) {
    return null;
  }
}
