export function DisplayCommentContainerError(errorMessage: string) {
  RemoveErrorMessage();

  const commentTextarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;
  if (commentTextarea) {
    commentTextarea.classList.add("c-text-area--error");

    // Create a new paragraph element for the error text
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = errorMessage;
    errorParagraph.className = "c-form__error-message comment-error-message";
    errorParagraph.style.display = "block"; // Set display style to block

    // add fontawesome pro warning icon
    const warningIcon = document.createElement("i");
    warningIcon.className = "fa-light fa-triangle-exclamation";
    errorParagraph.insertAdjacentElement("afterbegin", warningIcon);
    commentTextarea.insertAdjacentElement("beforebegin", errorParagraph);

    // Add an input event listener to remove the error when user starts typing
    commentTextarea.addEventListener("input", () => {
      RemoveCommentContainerError();
    });
  }
}

export function RemoveCommentContainerError() {
  const commentTextarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;
  if (commentTextarea) {
    commentTextarea.classList.remove("c-text-area--error");
  }
}

export function RemoveErrorMessage() {
  const error = document.querySelector(".comment-error-message");
  if (error) {
    error.remove();
  }
}
