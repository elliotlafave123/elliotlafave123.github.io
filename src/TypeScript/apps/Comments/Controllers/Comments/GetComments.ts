import { Constants } from "../../../../Constants/Constants";

export interface GetCommentsInput {
  streamId: string;
}

export async function GetComments(params: GetCommentsInput): Promise<any> {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${Constants.API_BASE_URL}/Comments/${params.streamId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 404) {
      throw new Error("Could not find comments");
    }
    if (response.status === 500) {
      throw new Error("Unknown error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error fetching comments: ${error}`);
    return null;
  }
}
