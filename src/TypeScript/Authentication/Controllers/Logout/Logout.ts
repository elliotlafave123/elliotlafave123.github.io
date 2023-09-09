export function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
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
