import { Constants } from "../../../Constants/Constants";

export async function markAllNotificationsAsRead(): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/notifications/all-read`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      throw new Error("User not found");
    }

    if (response.status === 201) {
      return true;
    }

    throw new Error("Error updating notifications");
  } catch (error) {
    console.error(error);
    return false;
  }
}
