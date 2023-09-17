import { Constants } from "../../../Constants/Constants";
import { SignUpResult } from "../../Models/SignUpResult";
import { UserModel } from "../../Models/UserModel";

export async function SignUp(user: Partial<UserModel>): Promise<SignUpResult> {
  try {
    const res = await fetch(`${Constants.API_BASE_URL}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      return SignUpResult.Success;
    }

    const errorText = await res.json();
    const error = mapErrorTextToSignUpResult(errorText.error);

    if (error) {
      return error;
    } else {
      return SignUpResult.UnknownError;
    }
  } catch (error) {
    return SignUpResult.UnknownError;
  }
}

function mapErrorTextToSignUpResult(errorText: string): SignUpResult | null {
  switch (errorText) {
    case SignUpResult.FirstNameRequired:
      return SignUpResult.FirstNameRequired;
    case SignUpResult.LastNameRequired:
      return SignUpResult.LastNameRequired;
    case SignUpResult.PasswordRequired:
      return SignUpResult.PasswordRequired;
    case SignUpResult.PasswordTooShort:
      return SignUpResult.PasswordTooShort;
    case SignUpResult.PasswordConfirmationRequired:
      return SignUpResult.PasswordConfirmationRequired;
    case SignUpResult.InvalidEmail:
      return SignUpResult.InvalidEmail;
    case SignUpResult.PasswordsDoNotMatch:
      return SignUpResult.PasswordsDoNotMatch;
    case SignUpResult.EmailAlreadyInUse:
      return SignUpResult.EmailAlreadyInUse;
    case SignUpResult.DisplayNameRequired:
      return SignUpResult.DisplayNameRequired;
    case SignUpResult.ProfaneDisplayName:
      return SignUpResult.ProfaneDisplayName;
    default:
      return null;
  }
}
