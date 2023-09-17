import { Constants } from "../../../Constants/Constants";

export enum ChangePasswordStatus {
  Success,
  WrongPassword,
  NotFound,
  Error,
}

export async function changePassword(currentPassword: string, newPassword: string): Promise<ChangePasswordStatus> {
  const token = localStorage.getItem("token");
  console.log(currentPassword, newPassword);

  try {
    const response = await fetch(Constants.API_BASE_URL + "/api/users/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    console.log(response);

    if (response.status === 201) {
      return ChangePasswordStatus.Success;
    } else if (response.status === 404) {
      return ChangePasswordStatus.NotFound;
    } else if (response.status === 403) {
      return ChangePasswordStatus.WrongPassword;
    }
  } catch (error) {
    return ChangePasswordStatus.Error;
  }
}
