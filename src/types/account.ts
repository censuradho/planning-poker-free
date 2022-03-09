export interface User {
  uid: string
  nickname: string;
  avatar_url: string;
  email: string;
  emailVerified?: boolean,
}

export type UpdateUser = Omit<User, 'uid'>