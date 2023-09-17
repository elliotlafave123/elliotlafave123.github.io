import { GenerateDateString } from "../../../helpers/generateDateString";
import { CheckLogin } from "../../Controllers/Login/CheckLogin";
import { getNotifications } from "../../Controllers/Notifications/getNotifications";

export const displayNotifications = async () => {
  try {
    const authenticated = await CheckLogin();
    if (!authenticated.LoggedIn) {
      return window.location.replace("/pages/login/login");
    }

    const notifications = await getNotifications();
    if (notifications === null) {
      return;
    }

    console.log(notifications);

    const notificationsContainer = document.getElementById("notifications-container");
    notificationsContainer.innerHTML = "";

    notifications.forEach((notification) => {
      const notificationElement = createNotificationElement(notification);
      notificationsContainer.appendChild(notificationElement);
    });

    const notificationsCount = document.getElementById("notifications-count");
    if (notificationsCount) {
      notificationsCount.innerHTML = notifications.length.toString();
    }
  } catch (error) {
    console.error("Error displaying notifications:", error);
  }
};

const createNotificationElement = (notification) => {
  const { profileImgColor, displayName, message, createdAt } = notification;

  const notificationElement = document.createElement("button");
  notificationElement.classList.add("c-notification");

  notificationElement.innerHTML = `
    <div class="c-notification__profile-img" style="background-color: ${profileImgColor}">${displayName[0]}</div>
    <div class="c-notification__content">
      <div class="c-notification__details">
        <div class="c-notification__display-name">${displayName}</div>
        <div class="c-notification__message">${message}</div>
        <div class="c-notification__not-seen"></div>
      </div>
      <span class="c-notification__date">${GenerateDateString(createdAt)}</span>
    </div>
  `;

  return notificationElement;
};

displayNotifications();
