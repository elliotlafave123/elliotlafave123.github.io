const breadcrumbNav = document.getElementById("breadcrumbNav");

let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

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

  // Append the items normally first
  appendBreadcrumbItems(pathnames);

  // Use a promise to delay checking of wrapping
  Promise.resolve().then(() => {
    // Check if wrapping occurred
    const afterAppendHeight = breadcrumbNav?.offsetHeight || 0;

    if (afterAppendHeight > 30) {
      breadcrumbNav.innerHTML = ""; // Clear the breadcrumbNav
      appendReducedBreadcrumbItems(pathnames);
    }
  });

  window.addEventListener("resize", handleResize);
}

function handleResize() {
  // If there's an existing timeout, clear it
  if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
  }

  // Set a new timeout
  resizeTimeout = setTimeout(() => {
    const afterAppendHeight = breadcrumbNav?.offsetHeight || 0;

    if (afterAppendHeight > 26) {
      breadcrumbNav.innerHTML = ""; // Clear the breadcrumbNav
      appendReducedBreadcrumbItems(window.location.pathname.split("/").filter((x) => x));
    }
  }, 300); // 300ms delay
}

function appendBreadcrumbItems(pathnames: string[]) {
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

function appendReducedBreadcrumbItems(pathnames: string[]) {
  if (pathnames.length <= 2) return appendBreadcrumbItems(pathnames);

  // Append "Home"
  const homeBreadcrumb = document.createElement("a");
  homeBreadcrumb.href = "/";
  homeBreadcrumb.textContent = "Home";
  breadcrumbNav?.appendChild(homeBreadcrumb);

  // Append divider before "..."
  const dividerBeforeEllipsis = document.createElement("span");
  dividerBeforeEllipsis.className = "divider";
  dividerBeforeEllipsis.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav?.appendChild(dividerBeforeEllipsis);

  // Append "..."
  const ellipsis = document.createElement("span");
  ellipsis.textContent = "...";
  breadcrumbNav?.appendChild(ellipsis);

  // Append divider after "..."
  const dividerAfterEllipsis = document.createElement("span");
  dividerAfterEllipsis.className = "divider";
  dividerAfterEllipsis.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav?.appendChild(dividerAfterEllipsis);

  // Append second-to-last item as a link
  const secondLastItem = document.createElement("a");
  secondLastItem.href = `/${pathnames.slice(0, -1).join("/")}`;
  secondLastItem.textContent = decodeURIComponent(pathnames[pathnames.length - 2].replace(".html", ""));
  breadcrumbNav?.appendChild(secondLastItem);

  // Append divider
  const divider = document.createElement("span");
  divider.className = "divider";
  divider.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav?.appendChild(divider);

  // Append last item
  const lastItem = document.createElement("span");
  lastItem.textContent = decodeURIComponent(pathnames[pathnames.length - 1].replace(".html", ""));
  breadcrumbNav?.appendChild(lastItem);
}
