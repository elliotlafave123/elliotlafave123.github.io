import { CheckLogin } from "../../../../Authentication/Controllers/Login/CheckLogin";
import { postVote } from "../../Controllers/Voting/PostVote";
import { VoteType } from "../../Models/VoteType";
import { scrollToAuthentication } from "../Authentication/scrollToAuthentication";
import { UpdateComments } from "../Comments/updateComments";

let isVoting = false;

async function handleVote(el: HTMLElement, voteType: VoteType) {
  if (isVoting) return;

  if ((await CheckLogin()).LoggedIn !== true) {
    return scrollToAuthentication();
  }

  isVoting = true;

  const commentEl = el.closest(".c-comment") as HTMLElement | null;

  if (commentEl) {
    const commentId = commentEl.dataset.commentid;

    const data = {
      id: commentId,
      votetype: voteType,
    };

    if (await postVote(data)) {
      UpdateComments();
    }
  }

  isVoting = false;
}

export const upvote = (el: HTMLElement) => handleVote(el, VoteType.Up);
export const downvote = (el: HTMLElement) => handleVote(el, VoteType.Down);
