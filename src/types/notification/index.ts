export type Notification = {
  _id: string;
  message: string;
  type: NotificationTypes;
  route: string;
};

enum NotificationEnum {
  APPOINTMENT,
  BUDGET,
  CUSTOMER,
  EMPLOYEE,
  POSITION,
  NOTIFICATION,
}

export type NotificationTypes = keyof typeof NotificationEnum;
