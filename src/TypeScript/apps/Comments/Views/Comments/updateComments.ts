import { GetComments } from "../../Controllers/Comments/GetComments";
import { getStreamId } from "../../Controllers/Streams/GetStreamId";
import { initDeleteComments } from "../Deleting/initDeleteComment";
import { initEditComments } from "../Editing/editComment";
import { initVoting } from "../Voting/HandleVote";
import { clearContainer } from "./clearContainer";
import { displayComment } from "./displayComments";

export async function UpdateComments() {
  clearContainer();
  const streamId = getStreamId();
  const comments = await GetComments({ streamId: streamId });
  if (comments) {
    comments.forEach((comment) => {
      displayComment(comment);
    });

    initVoting();
    initDeleteComments();
    initEditComments();
  }
}
