import { GenerateDateString } from "../../../helpers/generateDateString";
import { CheckLogin } from "../../Controllers/Login/CheckLogin";
import { getCurrentUser } from "../../Controllers/Me/GetCurrentUser";
import { UserProfileInput } from "../../Controllers/Profile/userProfile";
import { showAccountStatusMessage } from "./showAccountStatusMessage";

async function InitAccountPage() {
  const hash = window.location.hash;

  if (!hash) {
    window.location.hash = "#profile";
  }

  const signedIn = await CheckLogin();
  if (signedIn.LoggedIn === false) {
    localStorage.setItem("backLink", window.location.href);
    window.location.href = "/pages/login/login.html";
  }

  const user = await getCurrentUser();
  const userProfile = {
    fullName: `${user.firstName} ${user.lastName}`,
    displayName: user.displayName,
    letter: user.firstName[0],
    joinedOn: GenerateDateString(user.createdAt),
  };

  fillUserProfile(userProfile);
  fillPersonalInformation(user);

  const allShowOnLoad = document.querySelectorAll(".showOnLoad");
  allShowOnLoad.forEach((element) => {
    element.classList.remove("hidden");
  });

  const allHideOnLoad = document.querySelectorAll(".removeOnLoad");
  allHideOnLoad.forEach((element) => {
    element.classList.add("hidden");
  });

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");
  console.log("status", status);

  if (status) {
    showAccountStatusMessage(status === "true");
  }
}
InitAccountPage();

function fillPersonalInformation(userProfile) {
  document.querySelector(".js-userDetails-firstName").textContent = userProfile.firstName;
  document.querySelector(".js-userDetails-lastName").textContent = userProfile.lastName;
  document.querySelector(".js-userDetails-displayName").textContent = userProfile.displayName.toLowerCase();
  document.querySelector(".js-userDetails-email").textContent = userProfile.email;
}

function fillUserProfile(userProfile: UserProfileInput) {
  const fullName = document.querySelectorAll(".js-userProfile-fullName");
  const displayname = document.querySelectorAll(".js-userProfile-displayname");
  const letter = document.querySelectorAll(".js-userProfile-letter");
  const joinedOn = document.querySelectorAll(".js-userProfile-joinedOn");

  fullName.forEach((element) => {
    element.textContent = userProfile.fullName;
  });

  displayname.forEach((element) => {
    element.textContent = "@" + userProfile.displayName.toLowerCase();
  });

  letter.forEach((element) => {
    element.textContent = userProfile.letter;
  });

  if (userProfile.joinedOn) {
    joinedOn.forEach((element) => {
      element.textContent = "Joined:" + userProfile.joinedOn;
    });
  }
}
