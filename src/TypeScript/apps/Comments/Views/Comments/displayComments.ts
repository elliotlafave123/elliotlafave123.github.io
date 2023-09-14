import { GenerateDateString } from "../../../Portfolio Cards/helpers";
import { CommentModel } from "../../Models/CommentType";

export async function displayComment(comment: CommentModel) {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container || !comment) return;

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("c-comment");
  commentDiv.setAttribute("data-commentId", comment?._id ?? "");

  const {
    upvotes = [],
    downvotes = [],
    displayName = "",
    profileImgColor = "purple",
    createdAt = "",
    text = "",
    currentUser = false,
    currentUserHasDownvoted = false,
    currentUserHasUpvoted = false,
    repliedTo = "",
    repliedToUserId = "",
    postedBy = "",
  } = comment;

  commentDiv.innerHTML = `
    <div class="c-comment__body">
        <div class="c-comment__side">
            <button class="c-comment__button upvoteComment ${currentUserHasUpvoted ? "c-comment__button--active" : ""}">
                <i class="fa-sharp fa-solid fa-plus"></i>
            </button>
            <p>${upvotes.length - downvotes.length}</p>
            <button class="c-comment__button downvoteComment ${
              currentUserHasDownvoted ? "c-comment__button--active" : ""
            }">
                <i class="fa-sharp fa-regular fa-minus"></i>
            </button>
        </div>
        <div class="c-comment__main">
            <div class="c-comment__header">
                <a href="/users/profile.html?userId=${postedBy}">
                    <div class="c-profile-image c-profile-image--${profileImgColor}">
                        <p>${displayName.slice(0, 1).toUpperCase()}</p>
                    </div>
                </a>
                <div class="c-comment__header__info">
                    <a href="/users/profile.html?userId=${postedBy}">
                        <h5>${displayName.toLowerCase()}</h5>
                    </a>
                    ${currentUser ? '<div class="c-comment__you">you</div>' : ""}
                    <span class="c-comment__date">${GenerateDateString(new Date(createdAt))}</span>
                </div>
            </div>
            <p class="c-comment__text">${
              repliedTo
                ? `<a href="/users/profile.html?userId=${repliedToUserId}"><span class="c-comment__replied-to">@${repliedTo.toLowerCase()}</span></a>`
                : ""
            } ${text.trim()}</p>
            ${currentUser ? interactions : reply}
        </div>
    </div>
  `;

  if (comment.replies && comment.replies.length > 0) {
    const repliesDiv = document.createElement("div");
    repliesDiv.classList.add("c-comment__replies");

    const validReplyObjects = comment.replyObjects.filter((reply) => reply !== null);

    if (validReplyObjects.length > 0) {
      for (const reply of validReplyObjects) {
        const replyElement = await displayComment(reply);
        if (replyElement) {
          repliesDiv.appendChild(replyElement);
        }
      }

      commentDiv.appendChild(repliesDiv);
    }
  }

  container.insertAdjacentElement("afterbegin", commentDiv);

  return commentDiv;
}

const threeDotMenu = `
    <div class="c-dot-menu">
        <button class="c-dot-menu__toggle">
          <i class="fa-sharp fa-regular fa-ellipsis-vertical"></i>
        </button>
        <div class="c-dot-menu__content">
            <button class="c-dot-menu__button copyCommentLink">
                <i class="fa-sharp fa-solid fa-copy"></i> 
                <span>Copy link</span>
            </button>
            <button class="c-dot-menu__button reportCommentLink">
                <i class="fa-sharp fa-solid fa-flag"></i> 
                <span>Report</span>
            </button>
        </div>
    </div>
`;

const interactions = `
    <div class="c-comment__interactions">
        <button class="c-comment__button c-comment__button--delete deleteComment">
            <i class="fa-sharp fa-solid fa-trash"></i>   
            <span>Delete</span>
        </button>
        <button class="c-comment__button c-comment__button--primary editComment">
            <i class="fa-sharp fa-solid fa-pen"></i>
            <span>Edit</span>
        </button>
        ${threeDotMenu}
    </div>
`;

const reply = ` 
    <div class="c-comment__interactions">
        <button class="c-comment__button c-comment__button--primary replyComment">
            <i class="fa-sharp fa-solid fa-reply"></i>
            <span>Reply</span>
        </button>
        ${threeDotMenu}
    </div>
`;
