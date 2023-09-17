export interface NotificationModel {
  message: string;
  link?: string;
  read: boolean;
  createdAt?: Date;
  displayName?: string;
  profileImgColor?: string;
}
