import type { Comment } from "./CommentType";
import { State } from "./state";
import { initEditComments } from "./handleEditComment";
import { initVoting } from "./votingHandler";

const API_URL = "https://elliotapiserver.co.uk/";
// const API_URL = "http://localhost:3001/";
let streamId: string | undefined;
const commentStreamContainer = document.getElementById("commentStreamContainer");
if (commentStreamContainer) streamId = commentStreamContainer.dataset.stream;

export async function displayComments() {
  if (!streamId) return;
  try {
    const res = await fetch(API_URL + "Comments" + "?" + new URLSearchParams({ stream: streamId }).toString(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    clearContainer();
    if (res.status === 200) {
      const data = await res.json();
      if (data.length > 0) {
        insertComments(data);
      }
    } else if (res.status === 404) {
      clearContainer();
      // Display no comments yet
      displayNoCommentsMessage();
    }
  } catch (e) {
    // do nothing
    console.log(e);
  }
}

const displayNoCommentsMessage = () => {
  const container = document.getElementById("InsertCommentsContainer");
  const markup = `
	<div class="noCommentsContainer">
		<img src="../../../../img/CommentsSection.svg" alt="" />
	</div>
	`;
  container.innerHTML = markup;
};

const clearContainer = () => {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container) return;
  container.innerHTML = "";
};

const insertComments = (comments: [Comment]) => {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container) return;

  comments.forEach(async (comment) => {
    console.log(State.displayName);
    const markup = `
        <div class="comment" data-commentId="${comment.id}">
        <div class="comment-main">
            <div class="comment-header">
                <div>
                    <div class="profileImage profileImage-${comment.profileImgColor || "purple"}">
                        <p>${comment.fullname.slice(0, 1)}</p>
                    </div>
                    <div class="CommentHeaderDot"></div>
                    <h2>${comment.fullname}</h2>
                    <div class="CommentHeaderDot"></div>
                    <span>${GenerateDateString(new Date(comment.time))}</span>
                    <h3>${comment.hasBeenEdited ? "(Edited)" : ""}</h3>
                </div>
                <div>${
                  (State.fullName === comment.fullname && State.fullName !== undefined) ||
                  (State.displayName === comment.fullname && State.fullName !== undefined)
                    ? `<button class="editLinkButton" tabindex="0">Edit Comment</button>`
                    : ``
                }</div>
            </div>
            <p class="commentText">
                ${comment.text}
            </p>
			${
        (State.fullName === comment.fullname && State.fullName !== undefined) ||
        (State.displayName === comment.fullname && State.fullName !== undefined)
          ? `<div class="editComment" style="display: none">
			<button class="deleteLinkButton u-margin-top-small" tabindex="0">Delete Comment</button>
			<button class="publish">Publish</button>
		</div>`
          : ""
      }
            
        </div>
        <div class="comment-side">
            <button class="upvoteComment">
                <i class="fa-solid fa-chevron-up green"></i>
            </button>
            <p>${comment.upvotes}</p>
            <div class="CommentHeaderDot"></div>
            <p>${comment.downvotes}</p>
            <button class="downvoteComment">
                <i class="fa-solid fa-chevron-down red"></i>
            </button>
        </div>
    </div>
        `;

    container.insertAdjacentHTML("afterbegin", markup);
  });
  initEditComments();
  initVoting();
};

function GenerateDateString(isoDate: Date): string {
  const date = new Date(isoDate);
  const strArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = date.getDate();
  const m = strArray[date.getMonth()];
  const y = date.getFullYear();
  const hh = date.getHours();
  const mm = date.getMinutes();
  return `${m} ${d <= 9 ? "0" + d : d}, ${y} at ${hh >= 12 ? hh - 12 : hh}:${mm <= 9 ? "0" + mm : mm} ${
    hh >= 12 && mm > 0 ? "PM" : "AM"
  }`;
}
