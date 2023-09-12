export function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");

  const backLink = localStorage.getItem("backLink");
  if (backLink) {
    console.log("backLink", backLink);
    localStorage.removeItem("backLink");
    window.location.href = backLink;
    return;
  }

  window.location.href = "/";
}

export function InitLogout() {
  const logoutLink = document.getElementById("logoutLink");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      Logout();
    });
  }
}
