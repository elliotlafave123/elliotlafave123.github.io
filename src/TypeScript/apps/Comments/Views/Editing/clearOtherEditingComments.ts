export function clearOtherEditingComments(currentComment: HTMLElement) {
  const allComments = document.querySelectorAll(".c-comment");
  allComments.forEach((comment) => {
    if (comment !== currentComment) {
      const commentText = comment.querySelector(".c-comment__text") as HTMLElement;
      const commentInteractions = comment.querySelector(".c-comment__interactions") as HTMLElement;

      // Set the display style and remove the editing class
      commentText.style.display = "block";
      commentInteractions.classList.remove("c-comment__interactions--editing");

      // Remove the edit form
      const form = comment.querySelector(".add-comment-container");
      if (form) {
        form.remove();
      }

      // Remove the reply form
      const replyForm = comment.querySelector(".add-reply-container");
      if (replyForm) {
        replyForm.remove();
      }
    }
  });
}
