export interface User {
  _id?: string;
  email?: string;
  password: string;
  username: string;
  serviceType: string;
  goal?: string;
}