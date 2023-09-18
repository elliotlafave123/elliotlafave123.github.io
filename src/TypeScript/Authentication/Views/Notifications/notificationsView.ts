import { GenerateDateString } from "../../../helpers/generateDateString";
import { CheckLogin } from "../../Controllers/Login/CheckLogin";
import { getNotifications } from "../../Controllers/Notifications/getNotifications";
import { markAllNotificationsAsRead } from "../../Controllers/Notifications/markAllNotificationsAsRead";
import { markNotificationAsRead } from "../../Controllers/Notifications/markNotificationAsRead";

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

    const notificationElements = document.querySelectorAll(".c-notification") as NodeListOf<HTMLButtonElement>;

    notificationElements.forEach((notificationElement) => {
      const notificationClickHandler = async () => {
        const notificationId = notificationElement.dataset.notificationId;

        const markedAsRead = await markNotificationAsRead(notificationId);
        if (markedAsRead) {
          notificationElement.removeEventListener("click", notificationClickHandler);
          displayNotifications();
        }
      };

      notificationElement.removeEventListener("click", notificationClickHandler);
      notificationElement.addEventListener("click", notificationClickHandler);
    });

    const markAllNotificationsAsReadButton = document.getElementById("markAllAsRead");

    markAllNotificationsAsReadButton?.addEventListener("click", async () => {
      const markedAsRead = await markAllNotificationsAsRead();
      if (markedAsRead) {
        displayNotifications();
      }
    });
  } catch (error) {
    console.error("Error displaying notifications:", error);
  }
};

const createNotificationElement = (notification) => {
  const { profileImgColor, displayName, message, createdAt } = notification;

  const notificationElement = document.createElement("button");
  notificationElement.classList.add("c-notification");
  if (notification.read === false) {
    notificationElement.classList.add("c-notification--unread");
  }
  notificationElement.dataset.notificationId = notification._id;

  notificationElement.innerHTML = `
    <div class="c-notification__profile-img c-profile-image--${profileImgColor}">${displayName[0].toUpperCase()}</div>
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
