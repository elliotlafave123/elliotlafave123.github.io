import { VoteType } from "../../Models/VoteType";
import { downvote, upvote } from "./Voting";

export function initVoting() {
  const allUpvoteButtons = document.querySelectorAll<HTMLElement>(".upvoteComment");
  const allDownvoteButtons = document.querySelectorAll<HTMLElement>(".downvoteComment");

  allUpvoteButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      upvote(el);
    });
  });

  allDownvoteButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      downvote(el);
    });
  });
}
