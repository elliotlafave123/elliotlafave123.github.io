import { VerifyEmail } from "../../Controllers/Sign up/VerifyEmail";
import { VerificationStatus } from "../../Models/VerificationStatus";

function isValidObjectId(id: string): boolean {
  return /^[a-f\d]{24}$/i.test(id);
}

function isValidToken(token: string): boolean {
  return typeof token === "string" && token.length > 0;
}

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const token = urlParams.get("verificationCode");
  const validation = document.getElementById("verify-validation");

  if (id && token && isValidObjectId(id) && isValidToken(token)) {
    console.log("Tests");
    const verified = await VerifyEmail(id, token);

    if (verified === VerificationStatus.Verified) {
      console.log("Email verified");
      window.location.replace("/pages/login/login.html");
    } else if (verified === VerificationStatus.AlreadyVerified) {
      console.log("Email already verified");
      window.location.replace("/pages/login/login.html");
    } else {
      // Update the page to display an error message
      validation.textContent = "Verification failed. Please try again.";
      validation.style.display = "block";
    }
  } else {
    // Update the page to display an error message
    validation.textContent = "Invalid URL or parameters.";
    validation.style.display = "block";
  }
}
init();
