import { EditComment } from "../../Controllers/Comments/EditComment";
import { UpdateComments } from "../Comments/updateComments";
import { clearOtherEditingComments } from "./clearOtherEditingComments";

export function initEditComments() {
  const allEditButtons = document.querySelectorAll<HTMLElement>(".editComment");

  allEditButtons.forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();

      // Clear other editing comments
      const comment = el.closest(".c-comment") as HTMLElement;
      clearOtherEditingComments(comment);

      const commentText = comment.querySelector(".c-comment__text") as HTMLElement;
      commentText.style.display = "none";

      const commentInteractions = comment.querySelector(".c-comment__interactions") as HTMLElement;
      commentInteractions.classList.add("c-comment__interactions--editing");

      const commentHeader = comment.querySelector(".c-comment__header") as HTMLElement;
      let oldText = commentText.innerText;

      // Remove '@username ' from the beginning of the oldText
      oldText = oldText.replace(/^@\w+\s/, "").trim();

      let form = comment.querySelector(".add-comment-container");
      if (!form) {
        commentHeader.insertAdjacentHTML(
          "afterend",
          `
              <form class="add-comment-container" onsubmit="return false">
                <textarea class="c-text-area" name="commentTextarea" id="editCommentTextarea" minlength="3" required>${oldText}</textarea>
                <input type="submit" value="Update" id="publishEditedCommentButton">
              </form>
              `
        );

        form = comment.querySelector(".add-comment-container");

        const publishEditedCommentButton = form.querySelector("#publishEditedCommentButton") as HTMLInputElement;
        publishEditedCommentButton.addEventListener("click", async (e) => {
          e.preventDefault();
          const commentTextarea = form.querySelector("#editCommentTextarea") as HTMLTextAreaElement;
          const edited = await EditComment(commentTextarea.value, comment.dataset.commentid);
          if (edited) {
            UpdateComments();
          }
        });
      } else {
        const commentTextarea = form.querySelector("#editCommentTextarea") as HTMLTextAreaElement;
        commentTextarea.value = oldText;
        commentTextarea.focus();
      }
    });
  });
}
