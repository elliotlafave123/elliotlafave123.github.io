import { Constants } from "../../../../Constants/Constants";
import { PostVoteInput } from "../../Models/PostVoteInput";

export async function postVote(vote: PostVoteInput): Promise<boolean> {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(Constants.API_BASE_URL + "/Comments/Vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(vote),
    });

    console.log(response);

    if (response.status === 200) {
      return true;
    }

    if (response.status === 400) {
      throw new Error("User already voted");
    }
  } catch (error) {
    console.log(`Error posting vote: ${error}`);
    return false;
  }
}
