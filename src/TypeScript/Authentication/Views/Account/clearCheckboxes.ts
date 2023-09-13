export const clearCheckboxes = () => {
  const checkboxes: HTMLInputElement[] = Array.from(document.querySelectorAll(".profileColorCheckbox"));
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};
