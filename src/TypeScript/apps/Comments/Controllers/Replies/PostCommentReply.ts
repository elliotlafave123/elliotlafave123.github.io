import { Constants } from "../../../../Constants/Constants";
import { PostCommentReplyStatus } from "../../Models/PostCommentReplyStatus";

export async function PostCommentReply(
  commentText: string,
  parentId: string,
  repliedToCommentId: string
): Promise<PostCommentReplyStatus> {
  const token = localStorage.getItem("token");
  console.log(repliedToCommentId);

  try {
    const response = await fetch(Constants.API_BASE_URL + "/Comments/Reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text: commentText, parentId: parentId, repliedToCommentId: repliedToCommentId }),
    });

    if (response.status === 200) {
      return PostCommentReplyStatus.Success;
    }

    if (response.status === 401) {
      return PostCommentReplyStatus.Unauthorized;
    }

    if (response.status === 400) {
      return PostCommentReplyStatus.Profanity;
    }
  } catch (error) {
    console.log(`Error posting comment reply: ${error}`);
    return PostCommentReplyStatus.CreationError;
  }
}
