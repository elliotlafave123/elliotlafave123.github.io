import { CheckLogin, LoginStatus } from "../../Authentication/Controllers/Login/CheckLogin";
import { GetComments } from "./Controllers/Comments/GetComments";
import { CommentModel } from "./Models/CommentType";
import { hideLoginButtons } from "./Views/Authentication/hideLoginButtons";
import { hideOverlay } from "./Views/Authentication/hideOverlay";
import { displayComment } from "./Views/Comments/displayComments";

// Init comments section
async function initComments() {
  const loginStatus: LoginStatus = await CheckLogin();

  if (loginStatus.LoggedIn === true) {
    hideLoginButtons();
  }

  if (loginStatus.EmailVerificationRequired === false) {
    hideOverlay();
  }

  const commentsContainer = document.getElementById("commentStreamContainer");
  if (commentsContainer) {
    const streamId = commentsContainer.getAttribute("data-stream");
    if (streamId) {
      const comments = await GetComments({ streamId });
      if (comments) {
        comments.forEach((comment: CommentModel) => {
          console.log(comment);
          displayComment(comment);
        });
      }
    }
  }
}
initComments();
