import { Constants } from "../../../Constants/Constants";
import { NotificationModel } from "../../Models/NotificationsModel";

export async function getNotifications() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/api/users/notifications`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      return null;
    }

    try {
      const data = await response.json();
      return data as Array<NotificationModel>;
    } catch (error) {
      throw new Error("Error parsing response");
    }
  } catch (error) {
    return null;
  }
}
