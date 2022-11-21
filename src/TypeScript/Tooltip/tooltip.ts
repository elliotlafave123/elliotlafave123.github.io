export const initTooltip = () => {
  if (localStorage.getItem("ClosedTooltipDarkMode") !== "true") {
    localStorage.setItem("ClosedTooltipDarkMode", "false");
  } else {
    document.querySelector(".tooltip").classList.add("invisible");
  }

  document.addEventListener("click", (e) => {
    const eventTarget: HTMLElement = e.target as HTMLElement;
    if (eventTarget && eventTarget.classList.contains("closeTooltip")) {
      eventTarget.closest(".tooltip").classList.add("invisible");
      localStorage.setItem("ClosedTooltipDarkMode", "true");
    }
  });
};
