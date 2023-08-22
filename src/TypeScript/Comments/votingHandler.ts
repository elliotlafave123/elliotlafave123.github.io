import { displayComments } from "./displayComments";

const API_URL = "https://elliotapiserver.com/Comments/vote";
// const API_URL = "http://localhost:3000/Comments/vote";
const token = localStorage.getItem("token");

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

const upvote = async (el: HTMLElement) => {
  if (el.closest(".comment") !== null) {
    const commentEl = el.closest(".comment") as HTMLElement;
    if (!commentEl) return;
    const commentId: string = commentEl.dataset.commentid;

    const data = {
      token: token,
      id: commentId,
      votetype: "up",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        displayComments();
      }
    } catch (e) {
      // do nothing
    }
  }
};

const downvote = async (el: HTMLElement) => {
  if (el.closest(".comment") !== null) {
    const commentEl = el.closest(".comment") as HTMLElement;
    if (!commentEl) return;
    const commentId: string = commentEl.dataset.commentid;

    const data = {
      token: token,
      id: commentId,
      votetype: "down",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        displayComments();
      }
    } catch (e) {
      // do nothing
    }
  }
};
