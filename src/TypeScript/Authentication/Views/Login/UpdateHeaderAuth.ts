const headerAuthLoggedOut = document.getElementById("headerAuthLoggedOut");
const headerAuthLoggedIn = document.getElementById("headerAuthLoggedIn");

export const updateHeaderAuth = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    headerAuthLoggedOut.style.display = "none";
    headerAuthLoggedIn.style.display = "block";
  } else {
    headerAuthLoggedOut.style.display = "block";
    headerAuthLoggedIn.style.display = "none";
  }
};
