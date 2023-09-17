import { Constants } from "../../../../Constants/Constants";

export async function DeleteComment(id: string): Promise<boolean> {
  try {
    const response = await fetch(Constants.API_BASE_URL + `/Comments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
