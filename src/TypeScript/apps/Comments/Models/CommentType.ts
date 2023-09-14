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
  replies?: [string];
  replyObjects?: [CommentModel];
  repliedTo?: string;
  repliedToUserId?: string;
  postedBy: string;
};
