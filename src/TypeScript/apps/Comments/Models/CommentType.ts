export type CommentModel = {
  _id: string;
  createdAt: string;
  displayName: string;
  currentUser: boolean;
  currentUserHasUpvoted: boolean;
  currentUserHasDownvoted: boolean;
  text: string;
  upvotes: [number];
  downvotes: [number];
  score: number;
  hasBeenEdited: boolean;
  profileImgColor: string;
};
