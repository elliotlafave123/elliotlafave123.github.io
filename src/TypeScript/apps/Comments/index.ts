import { CheckLogin, LoginStatus } from "../../Authentication/Controllers/Login/CheckLogin";
import { GetComments } from "./Controllers/Comments/GetComments";
import { getStreamId } from "./Controllers/Streams/GetStreamId";
import { CommentModel } from "./Models/CommentType";
import { hideLoginButtons } from "./Views/Authentication/hideLoginButtons";
import { hideOverlay } from "./Views/Authentication/hideOverlay";
import { displayComment } from "./Views/Comments/displayComments";
import { initPostComment } from "./Views/Comments/handlePostComment";
import { initDeleteComments } from "./Views/Deleting/initDeleteComment";
import { initEditComments } from "./Views/Editing/editComment";
import { initVoting } from "./Views/Voting/HandleVote";

// Init comments section
async function initComments() {
  const loginStatus: LoginStatus = await CheckLogin();

  if (loginStatus.LoggedIn === true) {
    hideLoginButtons();
  }

  if (loginStatus.EmailVerificationRequired === false && loginStatus.Unauthorized === false) {
    hideOverlay();
  }

  const streamId = getStreamId();
  if (streamId) {
    const comments = await GetComments({ streamId });
    if (comments) {
      comments.forEach((comment: CommentModel) => {
        displayComment(comment);
      });

      initPostComment();
      initVoting();
      initDeleteComments();
      initEditComments();
    }
  }
}
initComments();
