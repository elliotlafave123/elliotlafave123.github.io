export function getStreamId() {
  const commentsContainer = document.getElementById("commentStreamContainer");
  if (commentsContainer) {
    const streamId = commentsContainer.getAttribute("data-stream");
    if (streamId) {
      return streamId;
    }
  }
}
