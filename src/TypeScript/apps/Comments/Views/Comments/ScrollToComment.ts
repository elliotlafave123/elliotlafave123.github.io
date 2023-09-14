export function ScrollToComment() {
  // check for commentId in query string
  const urlParams = new URLSearchParams(window.location.search);
  const commentId = urlParams.get("commentId");

  if (commentId) {
    const comment = document.querySelector(`[data-commentid="${commentId}"]`);

    if (comment) {
      comment.classList.add("c-comment--highlight");
      comment.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
