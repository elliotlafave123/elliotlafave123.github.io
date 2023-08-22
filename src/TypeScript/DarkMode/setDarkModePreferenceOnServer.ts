export const setDarkModePreferenceOnServer = async () => {
  if (localStorage.getItem("HasSentDarkModePreference") === "true") return;

  const token = localStorage.getItem("token");
  const API_URL = "https://elliotapiserver.com/Auth";

  const darkModePreference = localStorage.getItem("darkMode");
  let preferenceBoolean;

  if (darkModePreference && darkModePreference === "true") {
    preferenceBoolean = true;
  } else {
    preferenceBoolean = false;
  }

  try {
    const res = await fetch(API_URL + "/DarkMode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, darkMode: preferenceBoolean }),
    });
    if (res.status === 200) {
      localStorage.setItem("HasSentDarkModePreference", "true");
    }
  } catch (err) {
    //
  }
};
