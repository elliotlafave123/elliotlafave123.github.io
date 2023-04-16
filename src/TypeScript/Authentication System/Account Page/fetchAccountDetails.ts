import { State } from "./state";
import { displayDataInWidget } from "./displayDataInWidget";
import { addDataToInputs } from "./addDataToInputs";
import { controller } from "./controller";
import { showHeaderAuth } from "../../Comments/displaySignedInStrip";

const token = localStorage.getItem("token");
const API_URL = "https://elliotapiserver.co.uk/Auth";

export const fetchAccountDetails = async () => {
  const saveButton: HTMLInputElement = document.getElementById("SaveChanges") as HTMLInputElement;
  if (saveButton) saveButton.disabled = true;
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    if (res.status === 201) {
      const data = await res.json();
      State.fullName = data.data.fullName;
      State.emailAddress = data.data.email;
      State.emailVerified = data.data.emailVerified;
      State.id = data.data.id;
      State.profileImgColor = data.data.profileImgColor;

      // Display data in widget
      displayDataInWidget();

      // Add data values to inputs
      addDataToInputs();

      // Event listeners
      controller();

      showHeaderAuth();

      // Error handling
      // - Inputs not valid
      // - create external functions to check if email / name is invalid
    } else {
      throw new Error("Not Authenticated");
    }
  } catch (e) {
    //
  }
};
