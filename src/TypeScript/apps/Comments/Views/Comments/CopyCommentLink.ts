export function initCopyCommentLink() {
  const copyCommentLinks = document.querySelectorAll(".copyCommentLink");
  copyCommentLinks.forEach((copyCommentLink) => {
    copyCommentLink.addEventListener("click", (event) => {
      event.stopPropagation();
      const commentId = copyCommentLink.closest(".c-comment")?.getAttribute("data-commentId") ?? "";
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("commentId", commentId);
      const commentLink = currentUrl.toString();

      navigator.clipboard.writeText(commentLink);

      copyCommentLink.innerHTML = `
              <i class="fa-sharp fa-solid fa-copy"></i> 
              <span>Copied!</span>
        `;

      // Reset the button after 2 seconds
      setTimeout(() => {
        copyCommentLink.innerHTML = `
                  <i class="fa-sharp fa-solid fa-copy"></i> 
                  <span>Copy link</span>
          `;
      }, 2000);
    });
  });
}
