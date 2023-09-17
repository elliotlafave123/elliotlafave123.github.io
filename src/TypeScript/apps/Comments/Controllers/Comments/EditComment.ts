import { Constants } from "../../../../Constants/Constants";

export async function EditComment(text: string, id: string): Promise<boolean> {
  try {
    const response = await fetch(Constants.API_BASE_URL + `/Comments`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ text, _id: id }),
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
