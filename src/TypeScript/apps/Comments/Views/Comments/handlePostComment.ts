import { getCurrentUser } from "../../../../Authentication/Controllers/Me/GetCurrentUser";
import { PostComment } from "../../Controllers/Comments/PostComment";
import { PostCommentInput } from "../../Models/PostCommentInput";
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

  if (posted) {
    UpdateComments();
  }
}

export function initPostComment() {
  publishCommentButton?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Publishing comment...");

    handlePostComment();
  });
}
