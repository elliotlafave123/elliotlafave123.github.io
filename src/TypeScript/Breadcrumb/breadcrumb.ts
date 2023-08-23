const breadcrumbNav = document.getElementById("breadcrumbNav");

export function createBreadcrumb() {
  const pathnames = window.location.pathname.split("/").filter((x) => x);

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
