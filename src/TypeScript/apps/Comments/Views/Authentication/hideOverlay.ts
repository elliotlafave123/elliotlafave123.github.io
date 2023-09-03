export function hideOverlay() {
  const notAllowedContainer = document.querySelector(".add-comment-container-notAllowed");
  if (!notAllowedContainer) return;
  notAllowedContainer?.classList.add("allowed");
}
