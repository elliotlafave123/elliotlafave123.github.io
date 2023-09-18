export function initUserProfile() {
  const toggleButton = document.querySelector(".c-user-profile__toggle");
  const profileMenu = document.querySelector(".c-profile");
  const icon = document.querySelector(".c-user-profile__toggle-icon i");

  if (toggleButton && profileMenu && icon) {
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      profileMenu.classList.toggle("c-profile--hidden");
      icon.className = profileMenu.classList.contains("c-profile--hidden")
        ? "fa-sharp fa-solid fa-circle-user"
        : "fa-sharp fa-solid fa-circle-xmark";
    });

    document.addEventListener("click", (event) => {
      const eventTarget = event.target as HTMLElement;
      if (!profileMenu.contains(eventTarget) && !toggleButton.contains(eventTarget)) {
        profileMenu.classList.add("c-profile--hidden");
        icon.className = "fa-sharp fa-solid fa-circle-user";
      }
    });
  }
}

export interface UserProfileInput {
  fullName: string;
  displayName: string;
  letter: string;
  joinedOn?: string;
}

export function insertUserProfileData(userProfile: UserProfileInput) {
  const fullName = document.getElementById("js-userProfile-fullName");
  const displayname = document.getElementById("js-userProfile-displayname");
  const letter = document.getElementById("js-userProfile-letter");

  if (fullName && displayname && letter) {
    fullName.textContent = userProfile.fullName;
    displayname.textContent = "@" + userProfile.displayName.toLowerCase();
    letter.textContent = userProfile.letter.toUpperCase();
  }

  if (window.innerWidth < 900) {
    const headerBottom = document.querySelector(".c-header__bottom") as HTMLElement;

    if (!headerBottom) return;

    headerBottom.style.top = "350px";
  }
}
