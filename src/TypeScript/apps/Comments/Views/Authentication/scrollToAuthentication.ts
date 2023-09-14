export function scrollToAuthentication() {
  const loginButton = document.getElementById("logInButton");
  if (loginButton) {
    loginButton.scrollIntoView({ behavior: "smooth", block: "center" });
    loginButton.classList.add("c-button--highlighted");
  }
}
