import { Constants } from "../../Constants/Constants";
import { UserModel } from "../../Models/UserModel";

export async function SignUp(user: Partial<UserModel>) {
  await fetch(`${Constants.API_BASE_URL}/api/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.status === 403) {
        throw new Error("Invalid email or password");
      } else if (res.status === 409) {
        throw new Error("Email already in use");
      } else if (res.status === 200) {
        return res;
      }
      throw new Error("Unknown error");
    })
    .then((data) => {
      console.log(data);
      return true;
    });
}
