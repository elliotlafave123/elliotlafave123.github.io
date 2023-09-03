export async function upvote(el: HTMLElement) {
  const token = localStorage.getItem("token");

  if (el.closest(".comment") !== null) {
    const commentEl = el.closest(".comment") as HTMLElement;
    if (!commentEl) return;
    const commentId: string = commentEl.dataset.commentid;

    const data = {
      token: token,
      id: commentId,
      votetype: "up",
    };
  }
}

export async function downvote(el: HTMLElement) {
  const token = localStorage.getItem("token");
  if (el.closest(".comment") !== null) {
    const commentEl = el.closest(".comment") as HTMLElement;
    if (!commentEl) return;
    const commentId: string = commentEl.dataset.commentid;

    const data = {
      token: token,
      id: commentId,
      votetype: "down",
    };
  }
}
