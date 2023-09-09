export interface UserModel {
  _id: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName: string;
  lastName: string;
  displayName: string;
  profileImgColor: string;
  darkMode: boolean;
  verifyEmailAttempts: number;
  accountLocked: boolean;
  commentedOn: string[];
  votedOn: string[];
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
}
