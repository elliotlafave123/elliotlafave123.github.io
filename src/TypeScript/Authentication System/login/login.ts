const loginButton = document.getElementById("loginButton") as HTMLButtonElement;
const emailInputLogin = document.getElementById("email") as HTMLInputElement;
const passwordInputLogin = document.getElementById("password") as HTMLInputElement;
const errorMessageEnterPassword = document.getElementById("errorMessageEnterPassword") as HTMLElement;

const API_URL_LOGIN = "https://elliotapiserver.co.uk/Auth/login";
const initialState = {
  inputErrors: {
    email: false,
    password: false,
    enterPassword: false,
  },
};

const displayErrorsLogin = () => {
  const { inputErrors } = initialState;
  const errorMessageEmail = document.getElementById("errorMessageEmail") as HTMLElement;
  const errorMessagePassword = document.getElementById("errorMessagePassword") as HTMLElement;

  errorMessageEmail.style.display = inputErrors.email ? "block" : "none";
  errorMessagePassword.style.display = inputErrors.password ? "block" : "none";
  errorMessageEnterPassword.style.display = inputErrors.enterPassword ? "block" : "none";
};

const login = async () => {
  if (!loginButton) return;
  console.log("test");
  if (passwordInputLogin.value === "") {
    initialState.inputErrors.enterPassword = true;
    initialState.inputErrors.password = false;
    displayErrors();
    return;
  }

  const data = {
    email: emailInputLogin.value,
    password: passwordInputLogin.value,
  };

  console.log(data);

  try {
    const response = await fetch(API_URL_LOGIN, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonData = await response.json();
    localStorage.setItem("EmailToVerify", data.email);
    localStorage.setItem("token", jsonData.ACCESS_TOKEN);
    const backLink = localStorage.getItem("backLink") || "../../index.html";
    localStorage.setItem("BacklinkShouldScroll", "true");
    window.location.replace(backLink);
  } catch (error) {
    // Handle error
  }
};

export const initLoginform = () => {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    displayErrorsLogin();
    login();
  });
};

export const CheckLoginOnLoginForm = async () => {
  if (loginButton) {
    const token = localStorage.getItem("token");
    initLoginform();

    try {
      const res = await fetch("https://elliotapiserver.co.uk/Auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (res.status === 201) {
        window.location.replace(localStorage.getItem("backLink"));
      }
    } catch (e) {
      // do nothing
    }
  }
};
