import { State } from "./state";
import { hideLoginButtons, showLoginButtons } from "./hideLoginButtons";
import { setDarkModePreferenceOnServer } from "../DarkMode/setDarkModePreferenceOnServer";

const token = localStorage.getItem("token");
// const API_URL = "http://localhost:3001/Auth";
const API_URL = "https://elliotapiserver.co.uk/Auth";
const signedInStrip = document.getElementById("signedInStrip");
const signedInStripWarning = document.getElementById("signedInStripWarning");
const logOutButton = document.getElementById("logOutButton");
const verifyEmailButton = document.getElementById("verifyEmailButton");

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

      if (signedInStrip && State.emailVerified) {
        signedInStrip.style.display = "flex";
      } else if (signedInStrip && signedInStripWarning) {
        signedInStripWarning.style.display = "flex";
      }
      fixMobileNavMargin("loggedIn");

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

const fixMobileNavMargin = (type: string) => {
  const mobileNavToggle: HTMLElement = document.querySelector(".navigation__button") as HTMLElement;
  const mobileNavBackground: HTMLElement = document.querySelector(".navigation__background") as HTMLElement;
  if (mobileNavToggle && mobileNavBackground) {
    if (type === "loggedIn") {
      mobileNavToggle.style.top = "8.5rem";
      mobileNavBackground.style.top = "8.5rem";
    } else if (type === "signedOut") {
      mobileNavToggle.style.top = "5rem";
      mobileNavBackground.style.top = "5.4rem";
    }
  }
};

const logOut = async () => {
  await fetch("https://elliotapiserver.co.uk/Auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  localStorage.setItem("token", "");
  if (signedInStrip) signedInStrip.style.display = "none";
  State.emailAddress = undefined;
  State.fullName = undefined;
  State.id = undefined;
  State.emailVerified = undefined;
  State.profileImgColor = undefined;
  fixMobileNavMargin("signedOut");
  showLoginButtons();
};

if (logOutButton) {
  logOutButton.addEventListener("click", (e) => {
    e.preventDefault();
    logOut();
  });
}

export { checkLogin };
