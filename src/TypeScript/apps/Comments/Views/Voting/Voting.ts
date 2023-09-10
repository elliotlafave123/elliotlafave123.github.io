import { postVote } from "../../Controllers/Voting/PostVote";
import { VoteType } from "../../Models/VoteType";
import { UpdateComments } from "../Comments/updateComments";

async function handleVote(el: HTMLElement, voteType: VoteType) {
  const commentEl = el.closest(".c-comment") as HTMLElement | null;

  if (commentEl) {
    const commentId = commentEl.dataset.commentid;

    const data = {
      id: commentId,
      votetype: voteType,
    };

    if (await postVote(data)) {
      UpdateComments();
    } else {
      const loginButton = document.getElementById("logInButton");

      if (loginButton) {
        loginButton.focus();
      }
    }
  }
}

export const upvote = (el: HTMLElement) => handleVote(el, VoteType.Up);
export const downvote = (el: HTMLElement) => handleVote(el, VoteType.Down);
