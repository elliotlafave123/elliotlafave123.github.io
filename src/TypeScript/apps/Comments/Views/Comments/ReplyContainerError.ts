export function DisplayReplyContainerError(errorMessage: string, replyForm: HTMLFormElement) {
  RemoveReplyErrorMessage(replyForm);

  const replyTextarea = replyForm.querySelector("textarea[name='replyTextarea']") as HTMLTextAreaElement;
  if (replyTextarea) {
    replyTextarea.classList.add("c-text-area--error");

    // Create a new paragraph element for the error text
    const errorParagraph = document.createElement("p");
    errorParagraph.textContent = errorMessage;
    errorParagraph.className = "c-form__error-message reply-error-message";
    errorParagraph.style.display = "block"; // Set display style to block
    errorParagraph.style.marginBottom = "0";

    // add fontawesome pro warning icon
    const warningIcon = document.createElement("i");
    warningIcon.className = "fa-light fa-triangle-exclamation";
    errorParagraph.insertAdjacentElement("afterbegin", warningIcon);
    replyTextarea.insertAdjacentElement("beforebegin", errorParagraph);

    // Add an input event listener to remove the error when user starts typing
    replyTextarea.addEventListener("input", () => {
      RemoveReplyContainerError(replyForm);
    });
  }
}

export function RemoveReplyContainerError(replyForm: HTMLFormElement) {
  const replyTextarea = replyForm.querySelector("textarea[name='replyTextarea']") as HTMLTextAreaElement;
  if (replyTextarea) {
    replyTextarea.classList.remove("c-text-area--error");
  }
}

export function RemoveReplyErrorMessage(replyForm: HTMLFormElement) {
  const error = replyForm.querySelector(".reply-error-message");
  if (error) {
    error.remove();
  }
}
