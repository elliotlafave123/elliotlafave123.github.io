export async function hideLoginButtons() {
  const loginButton = document.getElementById("logInButton");
  const signUpButton = document.getElementById("signUpButton");

  if (loginButton && signUpButton) {
    loginButton.style.display = "none";
    signUpButton.style.display = "none";
  }
}
