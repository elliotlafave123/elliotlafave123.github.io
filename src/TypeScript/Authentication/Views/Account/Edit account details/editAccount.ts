import { updateUser } from "../../../Controllers/Account/updateUser";
import { getCurrentUser } from "../../../Controllers/Me/GetCurrentUser";
import { addDataToInputs } from "../addDataToInputs";
import { showAccountStatusMessage } from "../showAccountStatusMessage";

async function initEditUserDetails() {
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
          window.location.href = "/account.html#profile";
        } else {
          showAccountStatusMessage(false);
        }
      }
    });
  }
}
initEditUserDetails();
