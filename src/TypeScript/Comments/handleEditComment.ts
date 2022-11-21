import { displayComments } from "./displayComments";

const API_URL = "https://elliotapiserver.co.uk/Comments";
// const API_URL = "http://localhost:3000/Comments";
const token = localStorage.getItem("token");

export function initEditComments() {
  const allEditButtons = document.querySelectorAll<HTMLElement>(".editLinkButton");

  if (allEditButtons.length > 0) {
    allEditButtons.forEach((el: HTMLElement) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        toggleEditMenu(el);
      });
    });
  }
}

const toggleEditMenu = (el: HTMLElement) => {
  if (el.closest(".comment") !== null) {
    const editCommentElement: HTMLElement = el.closest("div.comment-main").querySelector(".editComment");

    if (editCommentElement && editCommentElement.style.display === "none") {
      el.innerText = "Cancel Editing";
      editCommentElement.style.display = "block";

      // Show a textarea
      const paragraph: HTMLParagraphElement = el.closest("div.comment-main")?.querySelector(".commentText");
      if (!paragraph) return;
      const text: string = paragraph.innerText;
      if (text) {
        const commentHeader = el.closest("div.comment-header");
        if (!commentHeader) return;
        commentHeader.insertAdjacentHTML(
          "afterend",
          `
                    <textarea 
                        name="commentTextarea" 
                        class="commentTextarea" 
                        minlength="3"
                        maxlength="120"
                        requiredminlength="3"
						maxlength="120"
						required
                    ></textarea>
                `
        );
        paragraph.style.display = "none";
      }
      el.closest("div.comment-main").querySelector("textarea").value = text;

      const deleteButton = el.closest("div.comment-main").querySelector<HTMLElement>(".deleteLinkButton");
      const publishButton = el.closest("div.comment-main").querySelector<HTMLElement>(".publish");

      const comment: HTMLElement = el.closest(".comment") as HTMLElement;
      const commentId: string | undefined = comment?.dataset.commentid;

      const commentStream: HTMLElement = document.getElementById("commentStreamContainer") as HTMLElement;
      const commentStreamId: string | undefined = commentStream?.dataset.stream;

      if (deleteButton && publishButton && commentId !== undefined && commentStreamId !== undefined)
        addEventHandlers(deleteButton, publishButton, commentId, commentStreamId, el);
    } else {
      const paragraph: HTMLElement = el.closest("div.comment-main").querySelector(".commentText");
      if (!paragraph) return;
      el.innerText = "Edit Comment";
      paragraph.style.display = "block";
      el.closest("div.comment-main").querySelector("textarea").remove();
      editCommentElement.style.display = "none";
    }
  }
};
initEditComments();

const addEventHandlers = (
  deleteButton: HTMLElement,
  publishButton: HTMLElement,
  commentId: string,
  commentStreamId: string,
  el: HTMLElement
) => {
  deleteButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await deleteComment(commentId, commentStreamId);
  });

  publishButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await updateComment(commentId, el);
  });
};

const deleteComment = async (commentId: string, commentStreamId: string) => {
  const data = {
    token: token,
    commentStreamId: commentStreamId,
  };

  if (confirm("Are you sure you want to delete this comment?")) {
    const res = await fetch(API_URL + "?" + new URLSearchParams({ id: commentId }).toString(), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 204) {
      displayComments();
    }
  }
};

const updateComment = async (commentId: string, el: HTMLElement) => {
  const data = {
    token: token,
    id: commentId,
    text: el.closest("div.comment-main").querySelector("textarea").value,
  };

  const res = await fetch(API_URL + "?" + new URLSearchParams({ id: commentId }).toString(), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (res.status === 201) {
    displayComments();
  } else if (res.status === 301) {
    displayComments();
    // Focus verify email button
    try {
      const verifyEmailButton = document.getElementById("verifyEmailButton");
      if (verifyEmailButton) verifyEmailButton.focus();
    } catch (e) {
      //
    }
  }
};
