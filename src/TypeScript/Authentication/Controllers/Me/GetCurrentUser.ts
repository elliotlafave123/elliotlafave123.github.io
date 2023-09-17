import { Constants } from "../../../Constants/Constants";

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 401) {
      return null;
    }

    if (response.status === 404) {
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
