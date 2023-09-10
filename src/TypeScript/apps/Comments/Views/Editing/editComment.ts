import { EditComment } from "../../Controllers/Comments/EditComment";
import { UpdateComments } from "../Comments/updateComments";

export function initEditComments() {
  const allEditButtons = document.querySelectorAll<HTMLElement>(".editComment");

  allEditButtons.forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const comment = el.closest(".c-comment") as HTMLElement;
      const commentText = comment.querySelector(".c-comment__text") as HTMLElement;
      commentText.style.display = "none";

      const commentInteractions = comment.querySelector(".c-comment__interactions") as HTMLElement;
      commentInteractions.classList.add("c-comment__interactions--editing");

      const commentHeader = comment.querySelector(".c-comment__header") as HTMLElement;
      const oldText = commentText.innerText;

      commentHeader.insertAdjacentHTML(
        "afterend",
        `
            <form class="add-comment-container" onsubmit="return false">
              <textarea class="c-text-area" name="commentTextarea" id="editCommentTextarea" minlength="3" required>${oldText}</textarea>
              <input type="submit" value="Update" id="publishEditedCommentButton">
            </form>
            `
      );

      const publishEditedCommentButton = document.getElementById("publishEditedCommentButton") as HTMLInputElement;
      publishEditedCommentButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const commentTextarea = document.getElementById("editCommentTextarea") as HTMLTextAreaElement;
        const edited = await EditComment(commentTextarea.value, comment.dataset.commentid);
        if (edited) {
          UpdateComments();
        }
      });
    });
  });
}