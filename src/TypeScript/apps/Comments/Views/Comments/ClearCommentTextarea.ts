export function ClearCommentTextarea() {
  const commentTextarea = document.getElementById("commentTextarea") as HTMLTextAreaElement;

  if (commentTextarea) {
    commentTextarea.value = "";
  }
}
