import { Constants } from "../../../Constants/Constants";

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants}/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

    if (response.status === 401) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
