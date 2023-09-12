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
  const logoutLinks = document.querySelectorAll(".logoutLink");
  if (logoutLinks.length > 0) {
    logoutLinks.forEach((logoutLink) => {
      logoutLink.addEventListener("click", (e) => {
        e.preventDefault();
        Logout();
      });
    });
  }
}
