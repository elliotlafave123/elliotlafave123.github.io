import { GenerateDateString } from "../../../Portfolio Cards/helpers";
import { CommentModel } from "../../Models/CommentType";

export async function displayComment(comment: CommentModel) {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container) return;

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("c-comment");
  commentDiv.setAttribute("data-commentId", comment?._id ?? "");

  const {
    upvotes = [],
    downvotes = [],
    score = 0,
    displayName = "",
    profileImgColor = "purple",
    createdAt = "",
    text = "",
    currentUser = false,
    hasBeenEdited = false,
    currentUserHasDownvoted = false,
    currentUserHasUpvoted = false,
  } = comment;

  commentDiv.innerHTML = `
    <div class="c-comment__side">
        <button class="c-comment__button upvoteComment ${currentUserHasUpvoted ? "c-comment__button--active" : ""}">
            <i class="fa-sharp fa-solid fa-plus"></i>
        </button>
        <p>${upvotes.length - downvotes.length}</p>
        <button class="c-comment__button downvoteComment ${currentUserHasDownvoted ? "c-comment__button--active" : ""}">
            <i class="fa-sharp fa-regular fa-minus"></i>
        </button>
    </div>
    <div class="c-comment__main">
        <div class="c-comment__header">
            <div class="c-profile-image c-profile-image--${profileImgColor}">
                <p>${displayName.slice(0, 1).toUpperCase()}</p>
            </div>
            <div class="c-comment__header__info">
                <h5>${displayName.toLowerCase()}</h5>
                ${currentUser ? '<div class="c-comment__you">you</div>' : ""}
                <span class="c-comment__date">${GenerateDateString(new Date(createdAt))}</span>
            </div>
        </div>
        <p class="c-comment__text">${text}</p>
        ${currentUser ? interactions : ""}
    </div>
  `;

  container.insertAdjacentElement("afterbegin", commentDiv);

  return commentDiv;
}

export const interactions = `
    <div class="c-comment__interactions">
        <button class="c-comment__button c-comment__button--delete deleteComment">
            <i class="fa-sharp fa-solid fa-trash"></i>   
            <span>Delete</span>
        </button>
        <button class="c-comment__button c-comment__button--primary editComment">
            <i class="fa-sharp fa-solid fa-pen"></i>
            <span>Edit</span>
        </button>
    </div>
`;

export const reply = ` 
    <div class="c-comment__interactions">
        <button class="c-comment__button c-comment__button--primary">
            <i class="fa-sharp fa-solid fa-reply"></i>
            <span>Reply</span>
        </button>
    </div>
`;
