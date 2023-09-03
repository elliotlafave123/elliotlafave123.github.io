import { RequestEmailVerification } from "../../Controllers/Verification/RequestEmailVerification";

async function InitRequestEmailVerification() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  if (email === null) {
    throw new Error("Email not found in query string");
  }

  const hasRequested = await RequestEmailVerification({ email });
  if (hasRequested) {
    console.log("Email verification requested");
  }
}
InitRequestEmailVerification();
