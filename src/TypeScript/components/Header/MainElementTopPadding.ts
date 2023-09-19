import { getHeaderHeight } from "./GetHeaderHeight";

export const setMainElementSizing = () => {
  const headerHeight = getHeaderHeight();
  const mainElement = document.getElementById("main") as HTMLElement;

  if (mainElement) {
    mainElement.style.marginTop = `${headerHeight + 16}px`;

    const minHeight = window.innerHeight - headerHeight - 16;
    mainElement.style.minHeight = `${minHeight}px`;
  }
};

let resizeTimeout: any = null;

window.addEventListener("resize", () => {
  if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
  }

  resizeTimeout = setTimeout(() => {
    setMainElementSizing();
  }, 100);
});

setMainElementSizing();
