// Authentication System
import { exists } from "../helpers/exists";
import { initStoreBackLink } from "./StoreBackLink";
import { handleShowPassword } from "./ShowPassword";
import { CheckLoginOnLoginForm } from "./login/login";
import { emailVerified } from "./login/verifyEmail";

//////////////////////////
// Authentication System
if (exists(document.querySelector(".loginForm.verify"))) emailVerified();

// Store back link
const BackLinkButton = document.querySelector(".storeBackLink") as HTMLElement;
if (exists(BackLinkButton)) initStoreBackLink();

const PasswordInput = document.getElementById("password") as HTMLElement;
if (exists(PasswordInput)) handleShowPassword();

// Login and sign uo
CheckLoginOnLoginForm();
