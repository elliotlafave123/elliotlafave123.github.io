import { Constants } from "../../../../Constants/Constants";

export async function PostCommentReply(
  commentText: string,
  parentId: string,
  repliedToCommentId: string
): Promise<boolean> {
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
      return true;
    }

    if (response.status === 400) {
      throw new Error("Bad request");
    }

    // You can add other status code checks if needed
  } catch (error) {
    console.log(`Error posting comment reply: ${error}`);
    return false;
  }
}
