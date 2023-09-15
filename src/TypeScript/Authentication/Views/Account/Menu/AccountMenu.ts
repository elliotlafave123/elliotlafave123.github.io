export function initProfileMenu() {
  const profileLink = document.getElementById("profile-link");
  const securityLink = document.getElementById("security-link");
  const dataExportLink = document.getElementById("data-export-link");
  const deleteAccountLink = document.getElementById("delete-account-link");

  // get hash
  const hash = window.location.hash;

  // set active class
  if (hash === "#profile") {
    profileLink.classList.add("c-account-menu__link--active");
  } else if (hash === "#security") {
    securityLink.classList.add("c-account-menu__link--active");
  } else if (hash === "#data-export") {
    dataExportLink.classList.add("c-account-menu__link--active");
  } else if (hash === "#delete-account") {
    deleteAccountLink.classList.add("c-account-menu__link--active");
  }
}
initProfileMenu();
