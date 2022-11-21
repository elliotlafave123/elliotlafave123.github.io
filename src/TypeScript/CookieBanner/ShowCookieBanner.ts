const bannerMarkup = `
    <div class="cookie-banner">
        <div class="cookie-banner-text-container">
            <span>Let us know you agree to cookies</span>
            <p>We use cookies to give you the best app experience. By continuing, you agree to the use of cookies.</p>
        </div>
        <div class="cookie-banner-interactions">
            <button id="AcceptCookiesButton">Continue</button>
            <a href="https://elliotlafave.com/CookiePolicy.html" target="_blank">See our cookies policy</a>
        </div>
    </div>
`;

export const HandleCookies = () => {
  if (localStorage.getItem("acceptedCookies") !== "true") {
    const loginContainer: HTMLElement = document.getElementById("loginForm");
    const signUpContainer: HTMLElement = document.getElementById("signUpForm");

    if (loginContainer || signUpContainer) {
      const body = document.querySelector("body");

      if (body) {
        body.insertAdjacentHTML("beforeend", bannerMarkup);
        const acceptButton = document.getElementById("AcceptCookiesButton");

        if (acceptButton)
          acceptButton.addEventListener("click", (e) => {
            e.preventDefault();

            localStorage.setItem("acceptedCookies", "true");

            const banner: HTMLElement = document.querySelector(".cookie-banner") as HTMLElement;
            if (banner) banner.style.display = "none";
          });
      }
    }
  }
};
