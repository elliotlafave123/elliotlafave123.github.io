export const initHeaderNavigation = () => {
  if (window.innerWidth < 900) {
    const primaryNavItems = document.querySelectorAll(".c-header__navigation-item.is-primary");
    const subNavigations = document.querySelectorAll(".c-header__sub-navigation") as NodeListOf<HTMLElement>;

    subNavigations.forEach((subNav) => {
      subNav.style.display = "none";
      if (subNav.children.length > 0) {
        const chevron = document.createElement("i");
        chevron.classList.add("c-header__mobile-chevron", "fa-sharp", "fa-chevron-down");
        subNav.parentElement.querySelector(".c-header__navigation-link").appendChild(chevron);
      }
    });

    primaryNavItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const element = e.target as HTMLElement;
        if (element.classList.contains("c-header__mobile-chevron")) {
          e.preventDefault();

          subNavigations.forEach((subNav) => {
            if (subNav !== item.querySelector(".c-header__sub-navigation")) {
              subNav.style.display = "none";
            }
          });

          item.classList.toggle("active");

          const subNavList = item.querySelector(".c-header__sub-navigation") as HTMLElement;
          if (subNavList) {
            if (subNavList.style.display === "flex") {
              subNavList.style.display = "none";
            } else {
              subNavList.style.display = "flex";
            }
          }

          const chevron = item.querySelector(".c-header__mobile-chevron") as HTMLElement;
          if (chevron) {
            if (chevron.style.transform === "rotate(-180deg)") {
              chevron.style.transform = "rotate(0deg)";
            } else {
              chevron.style.transform = "rotate(-180deg)";
            }
          }
        }
      });
    });
  }
};
