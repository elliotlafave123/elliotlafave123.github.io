import { GetComments } from "../../Controllers/Comments/GetComments";
import { getStreamId } from "../../Controllers/Streams/GetStreamId";
import { initDeleteComments } from "../Deleting/initDeleteComment";
import { initEditComments } from "../Editing/editComment";
import { initVoting } from "../Voting/HandleVote";
import { clearContainer } from "./clearContainer";
import { displayComment, interactions } from "./displayComments";
import { GenerateDateString } from "../../../Portfolio Cards/helpers";

let commentsMap = new Map();
let isUpdating = false;

export async function UpdateComments(clear?: boolean) {
  if (isUpdating) {
    return;
  }

  isUpdating = true;

  const streamId = getStreamId();
  const comments = await GetComments({ streamId: streamId });

  if (clear) {
    clearContainer();
    commentsMap.clear();
  }

  if (clear) {
    commentsMap = await comments.reduce(async (map, comment) => {
      const commentElement = await displayComment(comment);
      map.set(comment._id, commentElement);
      return map;
    }, new Map());

    isUpdating = false;
    initInteractions();

    return;
  } else {
    if (comments) {
      const newCommentsMap = new Map();

      for (const comment of comments) {
        if (commentsMap.has(comment._id)) {
          updateCommentInDOM(commentsMap.get(comment._id), comment);
          commentsMap.set(comment._id, commentsMap.get(comment._id));
        } else {
          const commentElement = await displayComment(comment);
          newCommentsMap.set(comment._id, commentElement);
        }
      }

      for (const [id, commentElement] of newCommentsMap.entries()) {
        commentsMap.set(id, commentElement);
      }

      for (const [id, commentElement] of commentsMap.entries()) {
        if (!comments.some((comment) => comment._id === id)) {
          commentElement.remove();
          commentsMap.delete(id);
        }
      }
    }
    initInteractions();

    isUpdating = false;
  }
}

function initInteractions() {
  initVoting();
  initDeleteComments();
  initEditComments();
}

function updateCommentInDOM(commentElement, commentData) {
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
  } = commentData;

  const score = upvotes.length - downvotes.length;

  commentElement.querySelector(".c-comment__text").textContent = text;
  commentElement.querySelector(".c-comment__side p").textContent = score;
  commentElement.querySelector(".c-profile-image").className = `c-profile-image c-profile-image--${profileImgColor}`;
  commentElement.querySelector(".c-profile-image p").textContent = displayName.slice(0, 1).toUpperCase();
  commentElement.querySelector(".c-comment__header__info h5").textContent = displayName.toLowerCase();
  commentElement.querySelector(".c-comment__date").textContent = GenerateDateString(new Date(createdAt));

  const upvoteButton = commentElement.querySelector(".c-comment__button.upvoteComment");
  const downvoteButton = commentElement.querySelector(".c-comment__button.downvoteComment");
  const interactionsDiv = commentElement.querySelector(".c-comment__main");

  if (currentUserHasUpvoted) {
    upvoteButton.classList.add("c-comment__button--active");
    downvoteButton.classList.remove("c-comment__button--active");
  } else if (currentUserHasDownvoted) {
    upvoteButton.classList.remove("c-comment__button--active");
    downvoteButton.classList.add("c-comment__button--active");
  } else {
    upvoteButton.classList.remove("c-comment__button--active");
    downvoteButton.classList.remove("c-comment__button--active");
  }

  if (currentUser) {
    if (!interactionsDiv.querySelector(".c-comment__interactions")) {
      interactionsDiv.innerHTML += interactions;
    }
  } else {
    const interactionsElement = interactionsDiv.querySelector(".c-comment__interactions");
    if (interactionsElement) {
      interactionsElement.remove();
    }
  }
}
