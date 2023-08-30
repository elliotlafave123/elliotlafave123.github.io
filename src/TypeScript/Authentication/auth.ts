import { Login } from "./Controllers/Login/Login";
import { UserModel } from "./Models/UserModel";
import { SignUp } from "./Controllers/Sign up/SignUp";
import { ResetPassword } from "./Controllers/Reset Password/ResetPassword";
import { ResetPasswordModel } from "./Models/ResetPasswordModel";
import { RequestPasswordReset } from "./Controllers/Reset Password/RequestPasswordReset";
import { RefreshAccessToken } from "./Controllers/Login/RefreshAccessToken";

async function init() {
  await Login("elliotlafave123@gmail.com", "Millie2006.....");

  RefreshAccessToken(localStorage.getItem("refreshToken"));
}
init();

// const user: Partial<User> = {
//   email: "elliotlafave123@gmail.com",
//   password: "Millie2006...",
//   passwordConfirmation: "Millie2006...",
//   firstName: "Elliot",
//   lastName: "La Fave",
//   displayName: "elliotlafave123",
// };

// SignUp(user);

// RequestPasswordReset("elliotlafave123@gmail.com");

// const resetPassword: ResetPasswordModel = {
//   email: "elliotlafave123@gmail.com",
//   password: "Millie2006.....",
//   passwordConfirmation: "Millie2006.....",
//   id: "64ee8810ead6c79ed3842f3e",
//   token: "eBTbdfDT6eM4AqU4xFKmr",
// };

// ResetPassword(resetPassword);
