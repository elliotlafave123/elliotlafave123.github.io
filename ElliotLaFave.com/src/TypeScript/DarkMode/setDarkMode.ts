export const setDarkMode = () => {
  const toggle: HTMLInputElement = document.querySelector(".toggle") as HTMLInputElement;

  if (!localStorage.getItem("newUser")) {
    localStorage.setItem("newUser", "true");
    localStorage.setItem("darkMode", "true");
  }

  toggle.addEventListener("change", () => {
    if (toggle && toggle.checked) {
      localStorage.setItem("darkMode", "true");
    } else {
      localStorage.setItem("darkMode", "false");
    }
  });
};
