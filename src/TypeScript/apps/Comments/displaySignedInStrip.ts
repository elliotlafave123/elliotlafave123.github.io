import { State } from "./state";
import { hideLoginButtons, showLoginButtons } from "./hideLoginButtons";
import { setDarkModePreferenceOnServer } from "../../DarkMode/setDarkModePreferenceOnServer";

const token = localStorage.getItem("token");
// const API_URL = "http://localhost:3001/Auth";
const API_URL = "https://elliotapiserver.com/Auth";
const logOutButton = document.getElementById("logOutButton");
const verifyEmailButton = document.getElementById("verifyEmailButton");
const headerAuthLoggedOut = document.getElementById("headerAuthLoggedOut");
const headerAuthLoggedIn = document.getElementById("headerAuthLoggedIn");

const checkLogin = async () => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    if (res.status === 201) {
      const data = await res.json();
      setDarkModePreferenceOnServer();

      State.fullName = data.data.fullName;
      State.displayName = data.data.displayName;
      State.emailAddress = data.data.emailAddress;
      State.emailVerified = data.data.emailVerified;
      State.id = data.data.id;
      State.profileImgColor = data.data.profileImgColor;

      showHeaderAuth();

      if (
        document.getElementById("commentStreamContainer") !== null ||
        typeof document.getElementById("commentStreamContainer") !== "undefined"
      ) {
        hideLoginButtons();
      }
    } else {
      if (verifyEmailButton) {
        verifyEmailButton.style.display = "none";
      }

      throw new Error("Not Authenticated");
    }
  } catch (e) {
    // do nothing
  }
};

const showHeaderAuth = () => {
  if (headerAuthLoggedOut) headerAuthLoggedOut.style.display = "none";
  if (headerAuthLoggedIn) headerAuthLoggedIn.style.display = "flex";
};
const hideHeaderAuth = () => {
  if (headerAuthLoggedOut) headerAuthLoggedOut.style.display = "flex";
  if (headerAuthLoggedIn) headerAuthLoggedIn.style.display = "none";
};

const logOut = async () => {
  await fetch("https://elliotapiserver.com/Auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  localStorage.setItem("token", "");
  State.emailAddress = undefined;
  State.fullName = undefined;
  State.id = undefined;
  State.emailVerified = undefined;
  State.profileImgColor = undefined;

  hideHeaderAuth();
  showLoginButtons();
};

if (logOutButton) {
  logOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logOut();
  });
}

export { checkLogin, showHeaderAuth, hideHeaderAuth };
