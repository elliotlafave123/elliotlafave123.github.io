import { UserModel } from "../../Models/UserModel";
import { Constants } from "../../../Constants/Constants";

export async function updateUser(user: Partial<UserModel>): Promise<Partial<UserModel>> {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch(Constants.API_BASE_URL + "/api/users/me", {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(user),
    });

    if (res.status === 201) {
      const user = await res.json();
      return user;
    } else {
      throw new Error("Cannot update name, please try again later");
    }
  } catch (error) {
    return null;
  }
}
