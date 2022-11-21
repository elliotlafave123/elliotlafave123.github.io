const breadcrumbContainer = document.querySelector(".breadcrumb");

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const showBreadcrumb = () => {
  // Get url from browser
  const pathname = new URL(window.location.href).pathname;
  // Split Url
  const splitUrl = pathname.slice(1).split("/");
  // Remove last item
  splitUrl.pop();

  // If on article remove last item
  const articleHeader: HTMLElement = document.querySelector(".article__header");
  if (articleHeader) splitUrl.pop();

  // Remove - and replace with a SPACE
  splitUrl.forEach((url, i) => {
    if (url.indexOf("-") > -1) {
      url = url.replaceAll("-", " ");
    }
    if (url.indexOf("%20") > -1) {
      url = url.replaceAll("%20", " ");
    }
    url = capitalizeFirstLetter(url);

    // Insert url markup
    const markup = `
            <p>
            ${url} 
            </p>
        `;

    breadcrumbContainer.insertAdjacentHTML("beforeend", markup);

    if (i !== splitUrl.length - 1) {
      breadcrumbContainer.insertAdjacentHTML("beforeend", `<i class="fa-solid fa-chevron-right"></i>`);
    }
  });
};

export const initBreadcrumb = () => {
  if (breadcrumbContainer) {
    showBreadcrumb();
  }
};
