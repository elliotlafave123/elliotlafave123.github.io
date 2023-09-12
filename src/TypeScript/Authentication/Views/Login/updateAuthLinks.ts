const headerAuthLoggedOut = document.getElementById("headerAuthLoggedOut");
const headerAuthLoggedIn = document.getElementById("headerAuthLoggedIn");

export const updateAuthLinks = (isLoggedIn: boolean) => {
  UpdateHeaderAuth(isLoggedIn);
  updateFooterAuth(isLoggedIn);
};

const UpdateHeaderAuth = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    headerAuthLoggedOut.style.display = "none";
    headerAuthLoggedIn.style.display = "flex";
  } else {
    headerAuthLoggedOut.style.display = "flex";
    headerAuthLoggedIn.style.display = "none";
  }
};

export const updateFooterAuth = (isLoggedIn: boolean) => {
  const footerAuthLoggedOut = document.getElementById("footerAuthLoggedOut");
  const footerAuthLoggedIn = document.getElementById("footerAuthLoggedIn");

  if (isLoggedIn) {
    footerAuthLoggedOut.style.display = "none";
    footerAuthLoggedIn.style.display = "flex";
  } else {
    footerAuthLoggedOut.style.display = "flex";
    footerAuthLoggedIn.style.display = "none";
  }
};
