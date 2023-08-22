import { displayComments } from "./displayComments";

const publishCommentButton = document.getElementById("publishCommentButton");
const commentStreamContainer = document.getElementById("commentStreamContainer");
const commentTextarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;
const API_URL = "https://elliotapiserver.com/Comments";
// const API_URL = "http://localhost:3000/Comments";
const token = localStorage.getItem("token");

export function handlePostComment() {
  publishCommentButton?.addEventListener("click", async (e) => {
    e.preventDefault();
    if (commentTextarea && commentTextarea.value === "") return;

    const data = {
      token: token,
      text: commentTextarea.value.toString(),
      stream: commentStreamContainer?.dataset.stream,
    };

    try {
      const res = await fetch(API_URL + "?" + new URLSearchParams({ stream: "633d4dbc76066edc99546269" }).toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        displayComments();
        commentTextarea.value = "";
      }
    } catch (e) {
      // do nothing
    }
  });
}
