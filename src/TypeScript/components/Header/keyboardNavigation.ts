class KeyboardNavigation {
  desktopNav: HTMLElement;
  allItems: HTMLElement[];
  currentElementIndex: any;

  constructor() {
    this.desktopNav = document.querySelector(".desktop__nav");
    this.allItems = Array.from(this.desktopNav.querySelectorAll("label, a"));
    this.currentElementIndex = undefined;
  }

  tabPressed() {
    this.allItems.forEach((navItem) => {
      if (document.activeElement === navItem) {
        this.currentElementIndex = this.allItems.indexOf(navItem);
      }
    });
  }

  right() {
    if (this.currentElementIndex + 1 !== this.allItems.length) {
      this.currentElementIndex += 1;
      this.allItems[this.currentElementIndex].focus();
    }
  }

  left() {
    if (this.currentElementIndex !== 0) {
      this.currentElementIndex -= 1;
      this.allItems[this.currentElementIndex].focus();
    }
  }
}

export const initKeyboardNavigation = () => {
  const keyboardNavigation = new KeyboardNavigation();
  document.addEventListener("keyup", (e) => {
    if (e.repeat) return;
    if (e.keyCode === 9 && keyboardNavigation.desktopNav) keyboardNavigation.tabPressed();

    if (e.keyCode === 39 && keyboardNavigation.desktopNav) {
      keyboardNavigation.right();
    }

    if (e.keyCode === 37 && keyboardNavigation.desktopNav) {
      keyboardNavigation.left();
    }
  });
};
