import { DeleteComment } from "../../Controllers/Comments/DeleteComment";

export function initDeleteComments() {
  const allDeleteButtons = document.querySelectorAll(".deleteComment");
  allDeleteButtons.forEach((el: HTMLElement) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();

      const result = confirm("Are you sure you want to delete this comment?");
      if (result) {
        const comment = el.closest(".c-comment") as HTMLElement;
        const deleted = await DeleteComment(comment.dataset.commentid as string);
        if (deleted) {
          comment.remove();
        }
      }
    });
  });
}
