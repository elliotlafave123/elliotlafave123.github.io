export type CommentModel = {
  _id: string;
  createdAt: string;
  displayName: string;
  currentUser: boolean;
  text: string;
  upvotes: [number];
  downvotes: [number];
  score: number;
  hasBeenEdited: boolean;
  profileImgColor: string;
};
