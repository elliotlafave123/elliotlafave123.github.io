interface State {
  fullName: string | undefined;
  displayName: string | undefined;
  emailAddress: string | undefined;
  emailVerified: boolean | undefined;
  id: string | undefined;
  profileImgColor: string | undefined;
}

const State: State = {
  fullName: undefined,
  displayName: undefined,
  emailAddress: undefined,
  emailVerified: undefined,
  id: undefined,
  profileImgColor: undefined,
};

export { State };
