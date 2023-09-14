// Cookie Banner
import { CookieBanner } from "./CookieBannerClass";

// Show cookie banner
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cookiesAccepted") !== "true" && localStorage.getItem("cookiesDenied") !== "true") {
    console.log("Showing cookie banner");
    const cookieBanner = new CookieBanner();

    const acceptCookiesButton = document.getElementById("js-accept-cookies");
    const denyCookiesButton = document.getElementById("js-deny-cookies");
    const minimizeBannerButton = document.getElementById("js-minimize-banner");
    const expandBannerButton = document.getElementById("js-expand-banner");

    acceptCookiesButton.addEventListener("click", cookieBanner.acceptCookies);
    denyCookiesButton.addEventListener("click", cookieBanner.denyCookies);
    minimizeBannerButton.addEventListener("click", cookieBanner.minimizeBanner);
    expandBannerButton.addEventListener("click", cookieBanner.expandBanner);
  } else {
    const cookieBanner = document.querySelector(".c-cookie-banner");
    cookieBanner.classList.add("c-cookie-banner--hidden");
  }
});
