import { GetComments } from "../../Controllers/Comments/GetComments";
import { getStreamId } from "../../Controllers/Streams/GetStreamId";
import { initDeleteComments } from "../Deleting/initDeleteComment";
import { initEditComments } from "../Editing/editComment";
import { initReplyComments } from "../Replies/initReplyComments";
import { initVotingOnElement } from "../Voting/initVotingOnElement";
import { clearContainer } from "./clearContainer";
import { displayComment } from "./displayComments";

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

  if (comments) {
    clearContainer();
    commentsMap.clear();

    commentsMap = await comments.reduce(async (prevPromise, comment) => {
      const map = await prevPromise;
      const commentElement = await displayComment(comment);
      map.set(comment._id, commentElement);
      return map;
    }, Promise.resolve(new Map()));

    isUpdating = false;
    initInteractions();

    return;
  }
}

function initInteractions() {
  initVoting();
  initDeleteComments();
  initEditComments();
  initReplyComments();
}

export function initVoting() {
  const allComments = document.querySelectorAll(".c-comment");
  allComments.forEach((commentElement) => {
    initVotingOnElement(commentElement);
  });
}
