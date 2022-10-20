export const ShowSentCheckmark = () => {
  if (localStorage.getItem("hasSentMessage") !== "true") {
    const contactForm = document.querySelector(".contact__form");
    if (contactForm) {
      contactForm.classList.remove("hidden");
    }
    const messageSentContainer = document.querySelector(".message-sent");
    if (messageSentContainer) messageSentContainer.classList.add("hidden");
    const contactImage = document.querySelector(".contact__img");
    if (contactImage) contactImage.classList.remove("invisible");
    awaitFormInput();
  } else {
    awaitSendAnother();
    const contactForm = document.querySelector(".contact__form");
    if (contactForm) {
      contactForm.classList.add("hidden");
    }
    const messageSentContainer = document.querySelector(".message-sent");
    if (messageSentContainer) messageSentContainer.classList.remove("hidden");
    const contactImage = document.querySelector(".contact__img");
    if (contactImage) contactImage.classList.add("invisible");
  }
};

const awaitSendAnother = () => {
  const SendAnotherMessageLink = document.getElementById("SendAnotherMessage");
  if (!SendAnotherMessageLink) return;
  SendAnotherMessageLink.addEventListener("click", () => {
    localStorage.setItem("hasSentMessage", "false");
    ShowSentCheckmark();
  });
};

const awaitFormInput = () => {
  const postContactMeFormButton: HTMLInputElement = document.getElementById(
    "postContactMeFormButton"
  ) as HTMLInputElement;

  if (!postContactMeFormButton) return;
  postContactMeFormButton.addEventListener("click", () => {
    if (postContactMeFormButton.disabled) {
      return;
    } else {
      localStorage.setItem("hasSentMessage", "true");
      ShowSentCheckmark();
    }
  });
};
