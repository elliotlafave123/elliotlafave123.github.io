import { Constants } from "../../../../Constants/Constants";

export async function ReportComment(commentId: string): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${Constants.API_BASE_URL}/Comments/Report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ commentId }),
    });

    if (response.status === 500 || response.status === 400) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(`Error posting comment: ${error}`);
    return false;
  }
}
