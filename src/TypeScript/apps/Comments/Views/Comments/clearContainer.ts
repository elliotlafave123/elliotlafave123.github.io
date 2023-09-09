export function clearContainer() {
  const container = document.getElementById("InsertCommentsContainer");
  if (!container) return;
  container.innerHTML = "";
}
