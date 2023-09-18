export interface NotificationModel {
  _id: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt?: Date;
  displayName?: string;
  profileImgColor?: string;
}
