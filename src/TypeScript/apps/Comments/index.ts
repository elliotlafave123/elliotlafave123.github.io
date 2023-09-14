import { CheckLogin, LoginStatus } from "../../Authentication/Controllers/Login/CheckLogin";
import { hideLoginButtons } from "./Views/Authentication/hideLoginButtons";
import { hideOverlay } from "./Views/Authentication/hideOverlay";
import { ScrollToComment } from "./Views/Comments/ScrollToComment";
import { initPostComment } from "./Views/Comments/handlePostComment";
import { UpdateComments } from "./Views/Comments/updateComments";

// Init comments section
async function initComments() {
  const loginStatus: LoginStatus = await CheckLogin();

  if (loginStatus.LoggedIn === true) {
    hideLoginButtons();
  }

  if (loginStatus.EmailVerificationRequired === false && loginStatus.Unauthorized === false) {
    hideOverlay();
  }

  initPostComment();
  await UpdateComments();
  ScrollToComment();
}

window.onload = () => {
  initComments();
};
