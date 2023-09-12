import { getCurrentUser } from "../../../../Authentication/Controllers/Me/GetCurrentUser";
import { PostComment } from "../../Controllers/Comments/PostComment";
import { PostCommentInput } from "../../Models/PostCommentInput";
import { PostCommentResult } from "../../Models/PostCommentResult";
import { ClearCommentTextarea } from "./ClearCommentTextarea";
import { DisplayCommentContainerError } from "./CommentContainerError";
import { UpdateComments } from "./updateComments";

const publishCommentButton = document.getElementById("publishCommentButton");
const commentStreamContainer = document.getElementById("commentStreamContainer");
const commentTextarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;

export async function handlePostComment() {
  if (commentTextarea && commentTextarea.value === "") return;

  const user = await getCurrentUser();
  if (!user) return;

  const data: PostCommentInput = {
    text: commentTextarea.value.toString(),
    stream: commentStreamContainer?.dataset.stream,
    postedBy: user._id,
  };

  const posted = await PostComment(data);

  if (posted === PostCommentResult.Success) {
    UpdateComments();
    ClearCommentTextarea();
  } else if (posted === PostCommentResult.Profanity) {
    DisplayCommentContainerError("Please remove profanity from your comment");
  } else {
    alert("An error occurred posting your comment");
  }
}

export function initPostComment() {
  publishCommentButton?.addEventListener("click", (e) => {
    e.preventDefault();

    handlePostComment();
  });
}
