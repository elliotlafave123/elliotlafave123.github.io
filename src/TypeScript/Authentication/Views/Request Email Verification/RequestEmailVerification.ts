import { RequestEmailVerification } from "../../Controllers/Verification/RequestEmailVerification";

async function InitRequestEmailVerification() {
  const urlParams = new URLSearchParams(window.location.search);
  const emailParam = urlParams.get("email");

  const emailSection = document.getElementById("email-section");
  const emailForm = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input") as HTMLInputElement;
  const emailSentMessage = document.getElementById("email-sent-message");
  const checkEmailSection = document.getElementById("check-email-section");

  if (emailParam === null) {
    checkEmailSection.style.display = "none";
    emailForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailInput.value;

      const hasRequested = await RequestEmailVerification({ email });
      if (hasRequested) {
        emailSection.style.display = "none";
        checkEmailSection.style.display = "block";
        emailSentMessage.style.display = "block";
      }
    });
  } else {
    emailSection.style.display = "none";
    checkEmailSection.style.display = "block";

    const hasRequested = await RequestEmailVerification({ email: emailParam });
    if (hasRequested) {
      emailSentMessage.style.display = "block";
    }
  }
}
InitRequestEmailVerification();
