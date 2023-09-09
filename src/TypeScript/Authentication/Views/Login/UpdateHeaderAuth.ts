const headerAuthLoggedOut = document.getElementById("headerAuthLoggedOut");
const headerAuthLoggedIn = document.getElementById("headerAuthLoggedIn");

export const updateHeaderAuth = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    headerAuthLoggedOut.style.display = "none";
    headerAuthLoggedIn.style.display = "flex";
  } else {
    headerAuthLoggedOut.style.display = "flex";
    headerAuthLoggedIn.style.display = "none";
  }
};
