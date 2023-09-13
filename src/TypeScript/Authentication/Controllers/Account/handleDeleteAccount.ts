import { Constants } from "../../../Constants/Constants";

export async function deleteAccount(): Promise<boolean> {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(Constants.API_BASE_URL + "/api/users/me", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    if (res.status === 200) {
      return true;
    } else {
      throw new Error("Cannot delete account, please try again later");
    }
  } catch (error) {
    return false;
  }
}
