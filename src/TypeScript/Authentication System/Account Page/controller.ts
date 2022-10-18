import { State } from "./state";
import { displayDataInWidget } from "./displayDataInWidget";
import { clearCheckboxes, setCheckbox } from "./setCheckbox";
import { saveFullName } from "./saveFullName";
import { logOut } from "./logout";
import { deleteAccount, openDeleteAccountModal } from "./handleDeleteAccount";

export const controller = () => {
  // Update widget with value of input
  const fullNameInput: HTMLInputElement = document.getElementById("fullname") as HTMLInputElement;
  fullNameInput.addEventListener("input", () => {
    const saveButton: HTMLInputElement = document.getElementById("SaveChanges") as HTMLInputElement;
    if (State.fullName !== fullNameInput.value) {
      State.fullName = fullNameInput.value;
      displayDataInWidget();
      if (saveButton) saveButton.disabled = false;
    }
  });

  // Checkbox event listeners
  const checkboxes: HTMLInputElement[] = Array.from(document.querySelectorAll(".profileColorCheckbox"));
  if (checkboxes.length > 0) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        State.profileImgColor = checkbox.dataset.color;
        clearCheckboxes();
        checkbox.checked = true;
        setCheckbox(checkbox.dataset.color);
      });
    });
  }

  // - Save changes
  const saveChangesButton: HTMLInputElement = document.getElementById("SaveChanges") as HTMLInputElement;
  if (saveChangesButton)
    saveChangesButton.addEventListener("click", (e) => {
      e.preventDefault();
      State.fullName = fullNameInput.value;
      saveFullName();
    });

  // Log out
  const logOutButton: HTMLButtonElement = document.getElementById("logOutButton") as HTMLButtonElement;
  if (logOutButton) {
    logOutButton.addEventListener("click", (e) => {
      e.preventDefault();
      logOut();
    });
  }

  // Open delete account modal
  const DeleteAccountButton: HTMLButtonElement = document.getElementById("DeleteAccountButton") as HTMLButtonElement;
  if (DeleteAccountButton) {
    DeleteAccountButton.addEventListener("click", (e) => {
      e.preventDefault();
      openDeleteAccountModal();
    });
  }

  // Confirm delete account
  const confirmModal: HTMLButtonElement = document.getElementById("confirmModal") as HTMLButtonElement;
  if (confirmModal) {
    confirmModal.addEventListener("click", (e) => {
      e.preventDefault();
      deleteAccount();
    });
  }
};
