import { downvote, upvote } from "./Voting";

export function initVotingOnElement(element: Element) {
  const upvoteButton = element.querySelector<HTMLElement>(".upvoteComment");
  const downvoteButton = element.querySelector<HTMLElement>(".downvoteComment");

  if (upvoteButton) {
    upvoteButton.addEventListener("click", (e) => {
      e.preventDefault();
      upvote(upvoteButton);
    });
  }

  if (downvoteButton) {
    downvoteButton.addEventListener("click", (e) => {
      e.preventDefault();
      downvote(downvoteButton);
    });
  }
}
