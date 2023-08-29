import { getHeaderHeight } from "./GetHeaderHeight";

export const setMainElementTopPadding = () => {
  const headerHeight = getHeaderHeight();
  const mainElement = document.getElementById("main") as HTMLElement;

  if (mainElement) {
    mainElement.style.paddingTop = `${headerHeight + 16}px`;
  }
};

let resizeTimeout: any = null;

window.addEventListener("resize", () => {
  if (resizeTimeout !== null) {
    clearTimeout(resizeTimeout);
  }

  resizeTimeout = setTimeout(() => {
    setMainElementTopPadding();
  }, 100);
});

setMainElementTopPadding();
