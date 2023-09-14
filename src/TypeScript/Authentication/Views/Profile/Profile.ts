import { GenerateDateString } from "../../../helpers/generateDateString";
import { GetUserProfile } from "../../Controllers/Profile/GetUserProfile";

async function InitProfilePage() {
  // get userId from url query string
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");

  if (!userId) {
    return;
  }

  // get user profile
  const user = await GetUserProfile(userId);
  if (!user) {
    return;
  }

  // update page with user profile
  const displayNameElement = document.getElementById("displayname");
  if (displayNameElement && user.displayName) {
    displayNameElement.innerText = user.displayName;
  }

  const joinedOn = document.getElementById("joinedon");
  if (joinedOn && user.createdAt) {
    joinedOn.innerText = GenerateDateString(user.createdAt);
  }
}
InitProfilePage();
