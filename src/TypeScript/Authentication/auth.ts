import { CheckLogin } from "./Controllers/Login/CheckLogin";
import { RefreshAccessToken } from "./Controllers/Login/RefreshAccessToken";
import { InitLogout } from "./Controllers/Logout/Logout";
import { updateHeaderAuth } from "./Views/Login/UpdateHeaderAuth";

const init = async () => {
  const isSignedIn = await CheckLogin();

  if (!isSignedIn) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const tokenRefreshed = await RefreshAccessToken(refreshToken);

      if (tokenRefreshed) {
        updateHeaderAuth(true);
        return;
      }
    }
  }

  updateHeaderAuth(isSignedIn);

  InitLogout();
};

init();
