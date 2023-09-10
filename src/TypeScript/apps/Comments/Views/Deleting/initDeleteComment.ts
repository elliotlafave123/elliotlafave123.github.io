import { Modal } from "../../../../../../ComponentAssets/simpleComponents/modal/modal";
import { DeleteComment } from "../../Controllers/Comments/DeleteComment";

export function initDeleteComments() {
  const allDeleteButtons = document.querySelectorAll(".deleteComment");
  allDeleteButtons.forEach((el: HTMLElement) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();

      const modal = new Modal("Delete comment", "Are you sure you want to delete this comment?", "Delete", "Cancel");
      try {
        const result = await modal.open({
          title: "Delete comment",
          paragraph: "Are you sure you want to delete this comment?",
          confirmText: "Delete",
          cancelText: "Cancel",
          size: "medium",
          corner: "round",
          colour: "primary",
          withBorder: true,
          ariaLabel: "Delete comment modal",
        });

        if (result === "confirm") {
          const comment = el.closest(".c-comment") as HTMLElement;
          const deleted = await DeleteComment(comment.dataset.commentid as string);
          if (deleted) {
            comment.remove();
          }
        }
      } catch (error) {
        console.error("Modal action was cancelled", error);
      }
    });
  });
}
