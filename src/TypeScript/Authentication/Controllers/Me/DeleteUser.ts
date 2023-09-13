import { Constants } from "../../../Constants/Constants";

export async function DeleteUser(): Promise<boolean> {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(Constants.API_BASE_URL + "/api/users/me", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return true;
    } else {
      throw new Error("Cannot delete account, please try again later");
    }
  } catch (error) {
    return false;
  }
}
