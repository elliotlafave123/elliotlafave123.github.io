export function setFooterYear() {
  const yearSpan = document.getElementById("currentYear") as HTMLElement;
  const currentYear = new Date();

  if (yearSpan !== null) {
    yearSpan.textContent = currentYear.getFullYear().toString();
  }
}
