const toggle: HTMLInputElement[] = Array.from(document.querySelectorAll(".toggle"));
const root = document.documentElement;

const deleteMobileDarkModeToggle = document.querySelector(".deleteMobile");
const checkboxLabelElements: HTMLLabelElement[] = Array.from(document.querySelectorAll("label"));

const wave1LightMobile = document.getElementById("wave1-light-mob");
const wave1Light = document.getElementById("wave1-light");
const wave2Light = document.getElementById("wave2-light");
const wave3Light = document.getElementById("wave3-light");
const wave4Light = document.getElementById("wave4-light");
const wave5Light = document.getElementById("wave5-light");

const wave1DarkMobile = document.getElementById("wave1-dark-mob");
const wave1Dark = document.getElementById("wave1-dark");
const wave2Dark = document.getElementById("wave2-dark");
const wave3Dark = document.getElementById("wave3-dark");
const wave4Dark = document.getElementById("wave4-dark");
const wave5Dark = document.getElementById("wave5-dark");

const lightMode = function () {
  root.style.setProperty("--color-grey--extra-dark", "rgba(84, 97, 102, 0.3)");
  root.style.setProperty("--color-grey-dark", "#F2F2F2");
  root.style.setProperty("--color-grey-dark-2", "#CED4DA");

  root.style.setProperty("--color-card", "#cbcfd4");
  root.style.setProperty("--color-card-dark", "#E9ECEF");

  root.style.setProperty("--text-light", "#212529");
  root.style.setProperty("--text-dark", "#212529");

  root.style.setProperty("--color-footer", "#7048e8");

  root.style.setProperty("--colour-btn-expand-img", "rgba(255,255,255, 0.6)");
  root.style.setProperty("--colour-btn-jump-to-top", "#a2a6ab");
  root.style.setProperty("--colour-btn-git", "#a2a6ab");

  root.style.setProperty("--color-tag", "#DEE2E6");
  root.style.setProperty("--text-white", "#000000");

  root.style.setProperty("--tech-stack-img-opacity", "85%");

  // Link card (FOLDER)
  root.style.setProperty("--link-card-background", "#CED4DA");
  root.style.setProperty("--link-card-hover", "#c2c7cd");
  root.style.setProperty("--link-card-before", "#b1b6bb");
  root.style.setProperty("--link-card-before-hover", "#a2a6ab");

  if (wave1Dark) {
    wave1Dark.classList.add("hidden");
  }
  if (wave1DarkMobile) {
    wave1DarkMobile.classList.add("hidden");
  }
  if (wave2Dark) {
    wave2Dark.classList.add("hidden");
  }
  if (wave3Dark) {
    wave3Dark.classList.add("hidden");
  }
  if (wave4Dark) {
    wave4Dark.classList.add("hidden");
  }
  if (wave5Dark) {
    wave5Dark.classList.add("hidden");
  }

  if (wave1Light) {
    wave1Light.classList.remove("hidden");
  }
  if (wave1LightMobile) {
    wave1LightMobile.classList.remove("hidden");
  }
  if (wave2Light) {
    wave2Light.classList.remove("hidden");
  }
  if (wave3Light) {
    wave3Light.classList.remove("hidden");
  }
  if (wave4Light) {
    wave4Light.classList.remove("hidden");
  }
  if (wave5Light) {
    wave5Light.classList.remove("hidden");
  }
};

const darkMode = function () {
  root.style.setProperty("--color-grey--extra-dark", "#000000");
  root.style.setProperty("--color-grey-dark", "#0a0114");
  root.style.setProperty("--color-grey-dark-2", "#302654");

  root.style.setProperty("--color-card", "#212529");
  root.style.setProperty("--color-card-dark", "#212529");

  root.style.setProperty("--text-light", "#CED4DA");
  root.style.setProperty("--text-dark", "#212529");

  root.style.setProperty("--color-footer", "#000000");

  root.style.setProperty("--colour-btn-expand-img", "rgba(0, 0, 0, 0.6)");
  root.style.setProperty("--colour-btn-jump-to-top", "#343a40");
  root.style.setProperty("--colour-btn-git", "#33373a");

  root.style.setProperty("--color-tag", "#495057");
  root.style.setProperty("--text-white", "#FFFFFF");

  root.style.setProperty("--tech-stack-img-opacity", "60%");

  // Link card (FOLDER)
  root.style.setProperty("--link-card-background", "#212529");
  root.style.setProperty("--link-card-hover", "#282d32");
  root.style.setProperty("--link-card-before", "rgb(42, 46, 51)");
  root.style.setProperty("--link-card-before-hover", "rgb(50, 56, 62)");

  if (wave1Dark) {
    wave1Dark.classList.remove("hidden");
  }
  if (wave1DarkMobile) {
    wave1DarkMobile.classList.remove("hidden");
  }
  if (wave2Dark) {
    wave2Dark.classList.remove("hidden");
  }
  if (wave3Dark) {
    wave3Dark.classList.remove("hidden");
  }
  if (wave4Dark) {
    wave4Dark.classList.remove("hidden");
  }
  if (wave5Dark) {
    wave5Dark.classList.remove("hidden");
  }

  if (wave1Light) {
    wave1Light.classList.add("hidden");
  }
  if (wave1LightMobile) {
    wave1LightMobile.classList.add("hidden");
  }
  if (wave2Light) {
    wave2Light.classList.add("hidden");
  }
  if (wave3Light) {
    wave3Light.classList.add("hidden");
  }
  if (wave4Light) {
    wave4Light.classList.add("hidden");
  }
  if (wave5Light) {
    wave5Light.classList.add("hidden");
  }
};

export const handleDarkMode = () => {
  if (window.innerWidth < 400) {
    deleteMobileDarkModeToggle.innerHTML = "";
  }

  if (localStorage.getItem("darkMode") == "true") {
    toggle.forEach((toggle) => {
      toggle.checked = true;
    });
  }

  if (localStorage.getItem("darkMode") == "true") {
    darkMode();
  } else {
    lightMode();
  }

  toggle.forEach((toggle) => {
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        darkMode();
        localStorage.setItem("darkMode", "true");
      } else {
        lightMode();
        localStorage.setItem("darkMode", "false");
      }
    });
  });

  checkboxLabelElements.forEach((toggleLable) =>
    toggleLable.addEventListener("keyup", (e) => {
      if (e && e.key === "Enter") {
        toggle.forEach((Toggle) => {
          Toggle.checked = !Toggle.checked;
          if (Toggle.checked) {
            darkMode();
            localStorage.setItem("darkMode", "true");
          } else {
            lightMode();
            localStorage.setItem("darkMode", "false");
          }
        });
      }
    })
  );
};
