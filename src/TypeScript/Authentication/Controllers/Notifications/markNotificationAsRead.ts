import { Constants } from "../../../Constants/Constants";

export async function markNotificationAsRead(notificationId: string): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/notifications`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ notificationId }),
    });

    console.log(response);

    if (response.status === 404) {
      throw new Error("Notification not found");
    }

    if (response.status === 201) {
      return true;
    }

    throw new Error("Error updating notification");
  } catch (error) {
    return false;
  }
}
