// export const displayDataInWidget = (fullName: string, emailAddress: string) => {
//   if (!fullName || !emailAddress) return;
//   const widgetContainer: HTMLElement = document.querySelector(".user-info-text-container") as HTMLElement;
//   if (!widgetContainer) return;
//   const fullnameContainer: HTMLElement = widgetContainer.querySelector(".widgetFullName") as HTMLElement;
//   const emailContainer: HTMLElement = widgetContainer.querySelector(".widgetEmail") as HTMLElement;
//   if (!fullnameContainer || !emailContainer) return;
//   fullnameContainer.innerHTML = fullName;
//   emailContainer.innerHTML = emailAddress;
//   setProfileColor();
// };

// const setProfileColor = (profileImgColor: string, fullName: string) => {
//   const profileImage = document.querySelector(".profileImage");
//   if (!profileImage) return;
//   // Add letter to widget
//   const profileImageLetter: HTMLParagraphElement = profileImage.querySelector("p");
//   if (profileImageLetter) profileImageLetter.innerText = fullName.substring(0, 1);
//   // Clear classes and add correct color
//   profileImage.removeAttribute("class");
//   profileImage.classList.add("profileImage");
//   switch (profileImgColor) {
//     case "blue":
//       profileImage.classList.add("profileImage-blue");
//       break;
//     case "teal":
//       profileImage.classList.add("profileImage-teal");
//       break;
//     case "green":
//       profileImage.classList.add("profileImage-green");
//       break;
//     case "yellow":
//       profileImage.classList.add("profileImage-yellow");
//       break;
//     case "red":
//       profileImage.classList.add("profileImage-red");
//       break;
//     case "purple":
//       profileImage.classList.add("profileImage-purple");
//       break;
//     case "darkBlue":
//       profileImage.classList.add("profileImage-darkBlue");
//       break;
//   }
// };
