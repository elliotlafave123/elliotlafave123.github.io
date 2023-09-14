export const handleShowPassword = () => {
  const ShowPasswordButton = document.getElementById("ShowPasswordEye");
  const HidePasswordButton = document.getElementById("HidePasswordEye");
  const passwordInput: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
  if (!passwordInput || !HidePasswordButton || !HidePasswordButton) return;

  ShowPasswordButton.addEventListener("click", () => {
    passwordInput.type = "text";
    ShowPasswordButton.style.display = "none";
    HidePasswordButton.style.display = "block";
  });

  HidePasswordButton.addEventListener("click", () => {
    passwordInput.type = "password";
    HidePasswordButton.style.display = "none";
    ShowPasswordButton.style.display = "block";
  });
};
