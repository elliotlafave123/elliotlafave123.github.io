import { GenerateDateString } from "../../../Portfolio Cards/helpers";
import { CommentModel } from "../../Models/CommentType";

export async function displayComment(comment: CommentModel) {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container) return;

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("c-comment");
  commentDiv.setAttribute("data-commentId", comment?.id);
  commentDiv.innerHTML = `
    <div class="c-comment__side">
        <button class="c-comment__button upvote">
            <i class="fa-sharp fa-solid fa-plus"></i>
        </button>
        <p>${comment.upvotes - comment.downvotes}</p>
        <button class="c-comment__button downvote">
            <i class="fa-sharp fa-solid fa-dash"></i>
        </button>
    </div>
    <div class="c-comment__main">
        <div class="c-comment__header">
            <div class="c-profile-image c-profile-image--${comment.profileImgColor || "purple"}">
                <p>${comment.displayName?.slice(0, 1).toUpperCase()}</p>
            </div>
            <div class="c-comment__header__info">
                <h5>${comment.displayName.toLowerCase()}</h5>
                ${comment.currentUser ? '<div class="c-comment__you">you</div>' : ""}
                <span class="c-comment__date">${GenerateDateString(new Date(comment.createdAt))}</span>
                <span>${comment.hasBeenEdited ? "(Edited)" : ""}</span>
            </div>
        </div>
        <p class="c-comment__text">
            ${comment.text}
        </p>
    </div>
  `;
  container.insertAdjacentElement("afterbegin", commentDiv);
}
