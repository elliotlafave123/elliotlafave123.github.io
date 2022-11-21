export const initStoreBackLink = () => {
  const storeBackLinkButton: HTMLAnchorElement[] = Array.from(document.querySelectorAll(".storeBackLink"));
  const verifyEmailStripButton: HTMLAnchorElement = document
    .getElementById("signedInStripWarning")
    .querySelector("a") as HTMLAnchorElement;
  const verifyEmailButton: HTMLAnchorElement = document.getElementById("verifyEmailButton") as HTMLAnchorElement;

  if (localStorage.getItem("BacklinkShouldScroll") === "true") {
    window.scrollTo(0, parseInt(localStorage.getItem("scrollPosition")));
    localStorage.setItem("BacklinkShouldScroll", "false");
  }

  storeBackLinkButton.forEach((el: HTMLAnchorElement) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("scrollPosition", window.scrollY.toString());
      localStorage.setItem("backLink", window.location.href);
      window.location.replace(el.href);
    });
  });

  verifyEmailButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("backLink", window.location.href);
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    window.location.replace(verifyEmailButton.href);
  });

  verifyEmailStripButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("backLink", window.location.href);
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    window.location.replace(verifyEmailButton.href);
  });
};
