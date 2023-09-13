export const addDataToInputs = (firstName, lastName, displayName, emailAddress) => {
  const firstNameInput: HTMLInputElement = document.getElementById("firstname") as HTMLInputElement;
  const lastNameInput: HTMLInputElement = document.getElementById("lastname") as HTMLInputElement;
  const emailInput: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
  const displayNameInput: HTMLInputElement = document.getElementById("displayname") as HTMLInputElement;

  if (firstNameInput) firstNameInput.value = firstName;
  if (lastNameInput) lastNameInput.value = lastName;
  if (emailInput) emailInput.value = emailAddress;
  if (displayNameInput) displayNameInput.value = displayName;
};
