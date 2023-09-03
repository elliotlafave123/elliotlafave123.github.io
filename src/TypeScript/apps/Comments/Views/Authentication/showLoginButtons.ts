export async function showLoginButtons() {
  const notAllowedContainer = document.querySelector(".add-comment-container-notAllowed");
  const verifyEmailButton = document.getElementById("verifyEmailButton");
  const loginButton = document.getElementById("logInButton");
  const signUpButton = document.getElementById("signUpButton");
  if (notAllowedContainer) notAllowedContainer.classList.remove("allowed");
  if (loginButton) loginButton.style.display = "inline-block";
  if (signUpButton) signUpButton.style.display = "inline-block";
  if (verifyEmailButton) verifyEmailButton.style.display = "none";
}
