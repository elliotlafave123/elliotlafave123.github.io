export function displayNoCommentsMessage() {
  const container = document.getElementById("InsertCommentsContainer");
  const markup = `
      <div class="noCommentsContainer">
          <img src="../../../../img/CommentsSection.svg" alt="" />
      </div>
      `;
  container.innerHTML = markup;
}
