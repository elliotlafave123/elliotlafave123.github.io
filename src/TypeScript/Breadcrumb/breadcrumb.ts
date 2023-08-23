const breadcrumbNav = document.getElementById("breadcrumbNav");

export function createBreadcrumb() {
  const pathnames = window.location.pathname.split("/").filter((x) => x);

  // If you're on the homepage, exit early and remove the parent div if it has class 'c-container'.
  if (
    pathnames.length === 0 ||
    (pathnames.length === 1 && (pathnames[0] === "index.html" || pathnames[0] === "index"))
  ) {
    if (breadcrumbNav?.parentElement?.classList.contains("c-container")) {
      breadcrumbNav.parentElement.remove();
    }
    return;
  }

  // Always append the "Home" breadcrumb item
  const homeBreadcrumb = document.createElement("a");
  homeBreadcrumb.href = "/";
  homeBreadcrumb.textContent = "Home";
  breadcrumbNav?.appendChild(homeBreadcrumb);

  const dividerHome = document.createElement("span");
  dividerHome.className = "divider";
  dividerHome.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav?.appendChild(dividerHome);

  let fullPath = "";

  // If there are 5 segments in the path, remove the second to last
  if (pathnames.length === 5) {
    pathnames.splice(-2, 1);
  }

  for (let i = 0; i < pathnames.length; i++) {
    const isLastItem = i === pathnames.length - 1;
    fullPath += "/" + pathnames[i];

    const displayName = decodeURIComponent(pathnames[i].replace(".html", ""));

    let breadcrumbItem: HTMLElement;
    if (isLastItem) {
      breadcrumbItem = document.createElement("span");
    } else {
      breadcrumbItem = document.createElement("a");
      (breadcrumbItem as HTMLAnchorElement).href = fullPath;
    }

    breadcrumbItem.textContent = displayName;
    breadcrumbNav?.appendChild(breadcrumbItem);

    // If not the last item, append the chevron
    if (!isLastItem) {
      const divider = document.createElement("span");
      divider.className = "divider";
      divider.innerHTML = `<i class="fas fa-chevron-right"></i>`;
      breadcrumbNav?.appendChild(divider);
    }
  }
}
