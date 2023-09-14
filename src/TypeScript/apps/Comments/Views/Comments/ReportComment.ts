import { ReportComment } from "../../Controllers/Comments/ReportComment";
import { showCommentReportedStatusMessage } from "./showCommentReportedStatusMessage";
import { UpdateComments } from "./updateComments";

export async function reportCommentHandler(commentId: string) {
  const reported = await ReportComment(commentId);

  if (reported) {
    UpdateComments();
    showCommentReportedStatusMessage(true);
  } else {
    showCommentReportedStatusMessage(false);
  }
}

export function initReportComments() {
  const copyCommentLinks = document.querySelectorAll(".reportCommentLink");
  copyCommentLinks.forEach((copyCommentLink) => {
    copyCommentLink.addEventListener("click", (event) => {
      event.stopPropagation();

      const commentId = copyCommentLink.closest(".c-comment")?.getAttribute("data-commentId") ?? "";
      reportCommentHandler(commentId);
    });
  });
}
