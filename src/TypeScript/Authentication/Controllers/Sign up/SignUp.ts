import { Constants } from "../../../Constants/Constants";
import { UserModel } from "../../Models/UserModel";

export async function SignUp(user: Partial<UserModel>): Promise<boolean> {
  try {
    const res = await fetch(`${Constants.API_BASE_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.status === 403) {
      throw new Error("Invalid email or password");
    } else if (res.status === 409) {
      throw new Error("Email already in use");
    } else if (res.status === 200) {
      return true;
    }
    throw new Error("Unknown error");
  } catch (error) {
    console.log(error);
    return false;
  }
}
