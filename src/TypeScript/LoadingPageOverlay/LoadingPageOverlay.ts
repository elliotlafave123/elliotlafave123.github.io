export const initLoadingOverlay = () => {
  const loadText: HTMLElement = document.querySelector(".loading-text") as HTMLElement;
  const bg: HTMLElement = document.querySelector(".bg") as HTMLElement;
  let load = 0;

  // eslint-disable-next-line prefer-const
  let int = setInterval(blurring, 9);

  function blurring() {
    load++;

    if (load > 99) {
      clearInterval(int);
      bg.style.zIndex = (-1).toString();
    }

    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0).toString();
    bg.style.opacity = scale(load, 0, 100, 1, 0).toString();
  }

  function scale(number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
};
