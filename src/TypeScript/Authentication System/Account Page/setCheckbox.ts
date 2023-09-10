import { displayDataInWidget } from "./displayDataInWidget";

const API_URL = "https://elliotapiserver.com/Auth";

export const setCheckbox = async (name: string) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(API_URL + "/setProfileImageColor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token, color: name }),
    });

    if (res.status === 200) {
      displayDataInWidget();
      // Show saved checkmark and word
      const savedMessage: HTMLElement = document.querySelector(".savedColor");
      if (savedMessage) {
        savedMessage.style.opacity = "1";
        setTimeout(() => {
          savedMessage.style.opacity = "0";
        }, 1000);
      }
    } else {
      throw new Error("Cannot update profile color, please try again later");
    }
  } catch (error) {
    // handle error
  }
};

export const clearCheckboxes = () => {
  const checkboxes: HTMLInputElement[] = Array.from(document.querySelectorAll(".profileColorCheckbox"));
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};
