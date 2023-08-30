import { VerifyEmail } from "../../Controllers/Sign up/VerifyEmail";

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const token = urlParams.get("verificationCode");

  if (id && token) {
    const verified = await VerifyEmail(id, token);
    console.log(verified);
    if (verified) {
      console.log("Email verified");
    }
  } else {
    console.log("Invalid URL");
  }
}
init();
