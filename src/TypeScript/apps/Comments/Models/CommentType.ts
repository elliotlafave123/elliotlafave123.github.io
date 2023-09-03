export type CommentModel = {
  id: string;
  createdAt: string;
  displayName: string;
  currentUser: boolean;
  text: string;
  upvotes: number;
  downvotes: number;
  hasBeenEdited: boolean;
  profileImgColor: string;
};
