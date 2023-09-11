const breadcrumbNav = document.getElementById("breadcrumbNav");

const skeletonBreadcrumb = document.createElement("div");
skeletonBreadcrumb.className = "skeleton skeleton-breadcrumb";

let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

export function createBreadcrumb() {
  const pathnames = window.location.pathname.split("/").filter((x) => x);

  if (
    pathnames.length === 0 ||
    (pathnames.length === 1 && (pathnames[0] === "index.html" || pathnames[0] === "index"))
  ) {
    if (breadcrumbNav?.parentElement?.classList.contains("c-container")) {
      breadcrumbNav.parentElement.remove();
    }
    return;
  }

  breadcrumbNav?.appendChild(skeletonBreadcrumb);

  Promise.resolve().then(() => {
    const afterAppendHeight = breadcrumbNav?.offsetHeight || 0;

    if (afterAppendHeight > 30 && breadcrumbNav !== null) {
      breadcrumbNav.innerHTML = "";
      appendReducedBreadcrumbItems(pathnames);
    } else {
      breadcrumbNav?.removeChild(skeletonBreadcrumb);
    }
  });

  window.addEventListener("resize", handleResize);
}

function handleResize() {
  if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
  }

  resizeTimeout = setTimeout(() => {
    const afterAppendHeight = breadcrumbNav?.offsetHeight || 0;

    if (afterAppendHeight > 26 && breadcrumbNav !== null) {
      breadcrumbNav.innerHTML = "";
      appendReducedBreadcrumbItems(window.location.pathname.split("/").filter((x) => x));
    }
  }, 300);
}

function appendBreadcrumbItems(pathnames: string[]) {
  if (!breadcrumbNav) return;

  const homeBreadcrumb = document.createElement("a");
  homeBreadcrumb.href = "/";
  homeBreadcrumb.textContent = "Home";
  breadcrumbNav.appendChild(homeBreadcrumb);

  const dividerHome = document.createElement("span");
  dividerHome.className = "divider";
  dividerHome.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav.appendChild(dividerHome);

  let fullPath = "";

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
    breadcrumbNav.appendChild(breadcrumbItem);

    if (!isLastItem) {
      const divider = document.createElement("span");
      divider.className = "divider";
      divider.innerHTML = `<i class="fas fa-chevron-right"></i>`;
      breadcrumbNav.appendChild(divider);
    }
  }
}

function appendReducedBreadcrumbItems(pathnames: string[]) {
  if (pathnames.length <= 2) return appendBreadcrumbItems(pathnames);

  if (!breadcrumbNav) return;

  const homeBreadcrumb = document.createElement("a");
  homeBreadcrumb.href = "/";
  homeBreadcrumb.textContent = "Home";
  breadcrumbNav.appendChild(homeBreadcrumb);

  const dividerBeforeEllipsis = document.createElement("span");
  dividerBeforeEllipsis.className = "divider";
  dividerBeforeEllipsis.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav.appendChild(dividerBeforeEllipsis);

  const ellipsis = document.createElement("span");
  ellipsis.textContent = "...";
  breadcrumbNav.appendChild(ellipsis);

  const dividerAfterEllipsis = document.createElement("span");
  dividerAfterEllipsis.className = "divider";
  dividerAfterEllipsis.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav.appendChild(dividerAfterEllipsis);

  const secondLastItem = document.createElement("a");
  secondLastItem.href = `/${pathnames.slice(0, -1).join("/")}`;
  secondLastItem.textContent = decodeURIComponent(pathnames[pathnames.length - 2].replace(".html", ""));
  breadcrumbNav.appendChild(secondLastItem);

  const divider = document.createElement("span");
  divider.className = "divider";
  divider.innerHTML = `<i class="fas fa-chevron-right"></i>`;
  breadcrumbNav.appendChild(divider);

  const lastItem = document.createElement("span");
  lastItem.textContent = decodeURIComponent(pathnames[pathnames.length - 1].replace(".html", ""));
  breadcrumbNav.appendChild(lastItem);
}
