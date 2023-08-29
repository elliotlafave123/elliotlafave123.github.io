// Function to check if element exists
export function exists(el: HTMLElement) {
  if (typeof el !== "undefined" && el !== null) {
    return true;
  } else return false;
}
