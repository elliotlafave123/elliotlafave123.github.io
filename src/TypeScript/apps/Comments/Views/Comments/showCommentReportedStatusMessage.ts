export function showCommentReportedStatusMessage(status: boolean) {
  const dialogue = document.querySelector(".c-dialogue");
  if (!dialogue) return;

  dialogue.innerHTML = "";

  const iconElement = document.createElement("i");
  iconElement.classList.add("c-dialogue__icon");

  const titleElement = document.createElement("p");
  titleElement.classList.add("c-dialogue__title");

  switch (status) {
    case true:
      dialogue.classList.add("c-dialogue--green");
      iconElement.classList.add("fa-solid", "fa-circle-check");
      titleElement.textContent = "Comment reported successfully.";
      break;

    case false:
      dialogue.classList.add("c-dialogue--red");
      iconElement.classList.add("fa-solid", "fa-triangle-exclamation");
      titleElement.textContent = "Error reporting comment.";
      break;
  }

  dialogue.scrollIntoView({ behavior: "smooth", block: "center" });

  dialogue.appendChild(iconElement);
  dialogue.appendChild(titleElement);
}
