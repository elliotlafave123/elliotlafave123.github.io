import { getCurrentUser } from "../../Controllers/Me/GetCurrentUser";
import { UserProfileInput, initUserProfile, insertUserProfileData } from "../../Controllers/Profile/userProfile";

const headerAuthLoggedOut = document.getElementById("headerAuthLoggedOut");
const headerAuthLoggedIn = document.getElementById("headerAuthLoggedIn");

export const updateAuthLinks = (isLoggedIn: boolean) => {
  UpdateHeaderAuth(isLoggedIn);
  updateFooterAuth(isLoggedIn);
};

const UpdateHeaderAuth = async (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    headerAuthLoggedOut.style.display = "none";
    headerAuthLoggedIn.style.display = "block";

    initUserProfile();
    const userProfile = await getCurrentUser();
    console.log(userProfile);

    const userProfileInput: UserProfileInput = {
      fullName: userProfile.firstName + " " + userProfile.lastName,
      displayName: userProfile.displayName,
      letter: userProfile.displayName.charAt(0),
    };
    insertUserProfileData(userProfileInput);
  } else {
    headerAuthLoggedOut.style.display = "flex";
    headerAuthLoggedIn.style.display = "none";
  }
};

export const updateFooterAuth = (isLoggedIn: boolean) => {
  const footerAuthLoggedOut = document.getElementById("footerAuthLoggedOut");
  const footerAuthLoggedIn = document.getElementById("footerAuthLoggedIn");

  if (isLoggedIn) {
    footerAuthLoggedOut.style.display = "none";
    footerAuthLoggedIn.style.display = "flex";
  } else {
    footerAuthLoggedOut.style.display = "flex";
    footerAuthLoggedIn.style.display = "none";
  }
};
