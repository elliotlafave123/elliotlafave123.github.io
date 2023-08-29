import { fetchAccountDetails } from "../../Authentication System/Account Page/fetchAccountDetails";
import { exists } from "../../helpers/exists";
import { displayComments } from "./displayComments";
import { checkLogin } from "./displaySignedInStrip";
import { handlePostComment } from "./handlePostComment";

// Init comments section
async function initComments() {
  const accountPage = document.getElementById("accountPage");
  if (exists(accountPage)) {
    fetchAccountDetails();
  } else {
    // Set login state
    checkLogin();
  }

  // Display comments on page
  const element = document.querySelector(".comments-container");
  if (typeof element !== "undefined" && element !== null) {
    await displayComments();
    handlePostComment();
  }
}
initComments();
