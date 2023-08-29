export const getHeaderHeight = () => {
  const header = document.querySelector(".c-header") as HTMLElement;

  if (header) {
    return header.offsetHeight;
  }
  return 0;
};
