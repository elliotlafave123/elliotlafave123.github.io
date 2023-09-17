export class CookieBanner {
  public cookieBanner: HTMLElement;
  private acceptCookiesButton: HTMLElement;
  private denyCookiesButton: HTMLElement;
  private minimizeBannerButton: HTMLElement;
  private expandBannerButton: HTMLElement;
  private policyLinks: NodeListOf<HTMLAnchorElement>;

  constructor() {
    this.cookieBanner = document.querySelector(".c-cookie-banner");
    this.acceptCookiesButton = document.getElementById("js-accept-cookies");
    this.denyCookiesButton = document.getElementById("js-deny-cookies");
    this.minimizeBannerButton = document.getElementById("js-minimize-banner");
    this.expandBannerButton = document.getElementById("js-expand-banner");
    this.policyLinks = document.querySelectorAll(".c-cookie-banner a");
    this.cookieBanner.classList.remove("c-cookie-banner--hidden");

    this.initEventListeners();
    this.initStates();
  }

  public minimizeBanner = (): void => {
    this.cookieBanner.classList.add("c-cookie-banner--minimized");
    localStorage.setItem("cookiesMinimized", "true");
  };

  public expandBanner = (): void => {
    this.cookieBanner.classList.remove("c-cookie-banner--minimized");
    localStorage.setItem("cookiesMinimized", "false");
  };

  public acceptCookies = async (): Promise<void> => {
    localStorage.setItem("cookiesAccepted", "true");
    this.cookieBanner.classList.add("c-cookie-banner--hidden");
    window.location.reload();
  };

  public denyCookies = async (): Promise<void> => {
    localStorage.setItem("cookiesAccepted", "false");
    localStorage.setItem("cookiesDenied", "true");
    this.cookieBanner.classList.add("c-cookie-banner--hidden");
    window.location.reload();
  };

  private initEventListeners(): void {
    this.acceptCookiesButton.addEventListener("click", this.acceptCookies);
    this.denyCookiesButton.addEventListener("click", this.denyCookies);
    this.minimizeBannerButton.addEventListener("click", this.minimizeBanner);
    this.expandBannerButton.addEventListener("click", this.expandBanner);

    this.policyLinks.forEach((link) => {
      link.addEventListener("click", this.minimizeBanner);
    });
  }

  private initStates(): void {
    if (localStorage.getItem("cookiesMinimized") === "true") {
      this.cookieBanner.classList.add("c-cookie-banner--minimized");
    }

    if (localStorage.getItem("cookiesAccepted") === "true") {
      this.cookieBanner.classList.add("c-cookie-banner--hidden");
    }
  }
}
