const pinBox = document.getElementById("pinBox") as HTMLDivElement;
const pinInput = document.getElementById("pinInput") as HTMLInputElement;
const loadingSpinnerContainer = document.querySelector(".spinner-container") as HTMLDivElement;
const loadingSpinner = document.getElementById("loadingSpinner") as HTMLDivElement;
const resendCodeButton = document.getElementById("resendCodeButton") as HTMLButtonElement;
const resendCodeContainer = document.getElementById("resendCodeContainer") as HTMLDivElement;

if (loadingSpinner) {
  loadingSpinner.style.display = "none";
}

interface State {
  errorMessage: string | undefined;
  errorHidden: boolean;
  formShown: boolean;
}

const state: State = {
  errorMessage: undefined,
  errorHidden: true,
  formShown: true,
};

const API_URL = "https://elliotapiserver.co.uk/Auth";

const verifyEmail = async (): Promise<void> => {
  const Data = {
    email: localStorage.getItem("EmailToVerify"),
    code: pinInput.value.toString(),
  };

  try {
    let res = await fetch(API_URL + "/VerifyEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data),
    });
    pinInput.value = "";
    if (res.status === 200) {
      localStorage.setItem("EmailToVerify", "");
      window.location.replace("../../pages/login/login.html");
    } else if (res.status === 301) {
      pinBox.style.display = "block";
      resendCodeContainer.style.display = "block";
      loadingSpinner.style.display = "none";
      loadingSpinnerContainer.style.display = "none";
      errorMessageEmail.style.display = "block";
      pinInput.focus();
    } else if (res.status === 404) {
      await window.location.replace("/pages/login/signup.html");
    }
  } catch (error) {
    loadingSpinner.style.display = "none";
    state.errorHidden = false;
    state.errorMessage = error.message;
    setTimeout(() => {
      state.errorHidden = true;
    }, 5000);
    setTimeout(() => {
      state.formShown = true;
    }, 400);
  }
};

const checkPinInput = (): void => {
  if (pinInput.value.length === 4) {
    pinBox.style.display = "none";
    loadingSpinner.style.display = "block";
    loadingSpinnerContainer.style.display = "flex";
    resendCodeContainer.style.display = "none";
    verifyEmail();
  }
};

if (pinInput) {
  pinInput.addEventListener("keydown", (e) => {
    if (!Number.isInteger(parseInt(e.key)) && e.keyCode !== 8) {
      e.preventDefault();
    }
  });
  pinInput.addEventListener("keyup", (e) => {
    checkPinInput();
  });
}

if (resendCodeButton) {
  resendCodeButton.addEventListener("click", (e) => {
    e.preventDefault();

    resendEmail();
  });
}

const resendEmail = async (): Promise<void> => {
  try {
    const data = {
      email: localStorage.getItem("EmailToVerify"),
    };
    const res = await fetch(API_URL + "/ResendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 201) {
      resendCodeContainer.innerHTML = "Code Sent!";
    } else if (res.status === 500) {
      throw new Error("Cannot resend verification code, please try again later.");
    } else if (res.status === 404) {
      throw new Error("No user with that email");
    }
  } catch (error) {
    console.error(error);
  }
};

export const emailVerified = () => {
  if (localStorage.getItem("EmailToVerify") === "") {
    window.location.replace("../../pages/login/login.html");
  }
};
