const API_URL = "https://elliotapiserver.com/Auth";

export async function setCheckbox(name: string): Promise<boolean> {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(API_URL + "/setProfileImageColor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token, color: name }),
    });

    if (res.status === 200) {
      return true;
    } else {
      throw new Error("Cannot update profile color, please try again later");
    }
  } catch (error) {
    // handle error
    return false;
  }
}
