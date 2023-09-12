import { Constants } from "../../../../Constants/Constants";
import { PostCommentInput } from "../../Models/PostCommentInput";
import { PostCommentResult } from "../../Models/PostCommentResult";

export async function PostComment(commentData: PostCommentInput): Promise<PostCommentResult> {
  try {
    const token = localStorage.getItem("token");
    return await fetch(`${Constants.API_BASE_URL}/Comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    }).then((res) => {
      if (res.status === 500) {
        throw new Error("Error creating comment");
      } else if (res.status === 200) {
        return PostCommentResult.Success;
      } else if (res.status === 400) {
        return PostCommentResult.Profanity;
      } else {
        throw new Error("Unknown error");
      }
    });
  } catch (error) {
    console.log(`Error posting comment: ${error}`);
    return error.message === "Error creating comment"
      ? PostCommentResult.CreationError
      : PostCommentResult.UnknownError;
  }
}
