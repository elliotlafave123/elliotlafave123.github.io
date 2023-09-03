import { downvote, upvote } from "../../Controllers/Voting/HandleVote";

export function initVoting() {
  const allUpvoteButtons = document.querySelectorAll<HTMLElement>(".upvoteComment");
  const allDownvoteButtons = document.querySelectorAll<HTMLElement>(".downvoteComment");

  if (allUpvoteButtons.length > 0) {
    allUpvoteButtons.forEach((el: HTMLElement) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        upvote(el);
      });
    });
  }

  if (allDownvoteButtons.length > 0) {
    allDownvoteButtons.forEach((el: HTMLElement) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        downvote(el);
      });
    });
  }
}
