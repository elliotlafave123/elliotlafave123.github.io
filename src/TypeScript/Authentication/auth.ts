import { exists } from "../helpers/exists";
import { CheckLogin } from "./Controllers/Login/CheckLogin";
import { RefreshAccessToken } from "./Controllers/Login/RefreshAccessToken";
import { InitLogout } from "./Controllers/Logout/Logout";
import { initStoreBackLink } from "./StoreBackLink";
import { updateAuthLinks } from "./Views/Login/updateAuthLinks";

const init = async () => {
  const isSignedIn = await CheckLogin();

  if (!isSignedIn) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const tokenRefreshed = await RefreshAccessToken(refreshToken);

      if (tokenRefreshed) {
        updateAuthLinks(true);
        return;
      }
    }
  }

  updateAuthLinks(isSignedIn.LoggedIn);

  InitLogout();

  const BackLinkButton = document.querySelector(".storeBackLink") as HTMLElement;
  if (exists(BackLinkButton)) initStoreBackLink();
};

init();
