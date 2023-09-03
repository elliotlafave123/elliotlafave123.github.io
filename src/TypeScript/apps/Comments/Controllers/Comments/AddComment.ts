import { Constants } from "../../../../Constants/Constants";

export interface PostCommentInput {
  postedBy: string;
  stream: string;
  text: string;
}

export async function PostComment(commentData: PostCommentInput): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");
    return await fetch(`${Constants.API_BASE_URL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => {
        if (res.status === 500) {
          throw new Error("Error creating comment");
        }
        return res.json();
      })
      .then((data) => {
        console.log(`Comment posted with id: ${data._id}`);
        return true;
      });
  } catch (error) {
    console.log(`Error posting comment: ${error}`);
    return false;
  }
}
