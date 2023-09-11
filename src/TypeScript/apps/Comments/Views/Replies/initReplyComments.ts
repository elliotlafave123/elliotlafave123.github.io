import { CheckLogin } from "../../../../Authentication/Controllers/Login/CheckLogin";
import { PostCommentReply } from "../../Controllers/Replies/PostCommentReply";
import { UpdateComments } from "../Comments/updateComments";

export function initReplyComments() {
  const allReplyButtons = document.querySelectorAll<HTMLElement>(".replyComment");

  allReplyButtons.forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();

      const loginButton = document.getElementById("logInButton") as HTMLElement;

      if ((await CheckLogin()).LoggedIn !== true) {
        return loginButton.focus();
      }

      const comment = el.closest(".c-comment") as HTMLElement;
      const commentMain = comment.querySelector(".c-comment__main");
      const commentInteractions = comment.querySelector(".c-comment__interactions");

      let parentComment = comment.closest(".c-comment__replies")?.closest(".c-comment") as HTMLElement;
      if (!parentComment) {
        parentComment = comment;
      }

      let form = comment.querySelector(".add-reply-container");
      if (!form) {
        form = document.createElement("form");
        form.classList.add("add-comment-container", "add-reply-container");
        form.setAttribute("onsubmit", "return false");

        form.innerHTML = `
          <textarea class="c-text-area" name="replyTextarea" id="replyCommentTextarea" minlength="3" required></textarea>
          <input type="submit" value="Reply" class="" id="publishReplyCommentButton">
        `;

        const publishReplyCommentButton = form.querySelector("#publishReplyCommentButton") as HTMLInputElement;
        publishReplyCommentButton.addEventListener("click", async (e) => {
          e.preventDefault();
          const replyTextarea = form.querySelector("#replyCommentTextarea") as HTMLTextAreaElement;
          const posted = await PostCommentReply(
            replyTextarea.value,
            parentComment.dataset.commentid,
            comment.dataset.commentid
          );
          if (posted) {
            UpdateComments();
          }
        });

        if (commentInteractions) {
          commentMain.insertBefore(form, commentInteractions);
        } else {
          commentMain.appendChild(form);
        }
      } else {
        const replyTextarea = form.querySelector("#replyCommentTextarea") as HTMLTextAreaElement;
        replyTextarea.focus();
      }
    });
  });
}
