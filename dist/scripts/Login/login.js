const loginButton = document.getElementById("loginButton");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessageEnterPassword = document.getElementById("errorMessageEnterPassword");

// const API_URL = "http://localhost:3000/Auth/login";
const API_URL = "https://elliotapiserver.co.uk/Auth/login";
const initialState = {
  inputErrors: {
    email: false,
    password: false,
    enterPassword: false,
  },
};

const displayErrors = () => {
  const { inputErrors } = initialState;
  const errorMessageEmail = document.getElementById("errorMessageEmail");
  const errorMessagePassword = document.getElementById("errorMessagePassword");

  errorMessageEmail.style.display = inputErrors.email ? "block" : "none";
  errorMessagePassword.style.display = inputErrors.password ? "block" : "none";
  errorMessageEnterPassword.style.display = inputErrors.enterPassword ? "block" : "none";
};

const login = async () => {
  if (!loginButton) return;
  if (passwordInput.value === "") {
    initialState.inputErrors.enterPassword = true;
    initialState.inputErrors.password = false;
    displayErrors();
    return;
  }

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(data);

  try {
    const response = await fetch(API_URL, {
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

if (loginButton) {
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    displayErrors();
    login();
  });
}

const checkLogin = async () => {
  const token = localStorage.getItem("token");

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
};

checkLogin();
