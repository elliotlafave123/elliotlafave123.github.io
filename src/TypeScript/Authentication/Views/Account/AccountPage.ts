import { Modal } from "../../../../../ComponentAssets/simpleComponents/modal/modal";
import { updateUser } from "../../Controllers/Account/updateUser";
import { CheckLogin } from "../../Controllers/Login/CheckLogin";
import { DeleteUser } from "../../Controllers/Me/DeleteUser";
import { getCurrentUser } from "../../Controllers/Me/GetCurrentUser";
import { addDataToInputs } from "./addDataToInputs";
import { showAccountStatusMessage } from "./showAccountStatusMessage";

async function InitAccountPage() {
  const signedIn = await CheckLogin();
  if (signedIn.LoggedIn === false) {
    localStorage.setItem("backLink", window.location.href);
    window.location.href = "/pages/login/login.html";
  }

  const user = await getCurrentUser();
  if (user) {
    addDataToInputs(user.firstName, user.lastName, user.displayName, user.email);
  }

  const saveChangesButton = document.getElementById("SaveChanges");
  if (saveChangesButton) {
    saveChangesButton.addEventListener("click", async () => {
      const firstName = document.getElementById("firstname") as HTMLInputElement;
      const lastName = document.getElementById("lastname") as HTMLInputElement;
      const displayName = document.getElementById("displayname") as HTMLInputElement;
      const email = document.getElementById("email") as HTMLInputElement;

      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        displayName: displayName.value,
        email: email.value,
      };

      if (user) {
        const updated = await updateUser(user);
        console.log(updated);

        if (updated) {
          showAccountStatusMessage(true);
          addDataToInputs(updated.firstName, updated.lastName, updated.displayName, updated.email);
          window.scrollTo(0, 0);
        } else {
          showAccountStatusMessage(false);
        }
      }
    });
  }

  const deleteAccountButton = document.getElementById("DeleteAccountButton");
  if (deleteAccountButton) {
    deleteAccountButton.addEventListener("click", async () => {
      const modal = new Modal("Delete comment", "Are you sure you want to delete this comment?", "Delete", "Cancel");

      try {
        const result = await modal.open({
          title: "Delete account",
          paragraph: "Are you sure you want to delete your account?",
          confirmText: "Delete",
          cancelText: "Cancel",
          size: "medium",
          corner: "round",
          colour: "primary",
          withBorder: true,
          ariaLabel: "Delete account modal",
        });

        if (result === "confirm") {
          const deleted = await DeleteUser();
          if (deleted) {
            localStorage.removeItem("token");
            window.location.href = "/index.html";
          } else {
            alert("Error deleting account, please try again later");
          }
        }
      } catch (error) {
        console.error("Modal action was cancelled", error);
      }
    });
  }
}
InitAccountPage();
