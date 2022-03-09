export interface CreateAccount {
  email: string;
  nickname: string;
  password: string
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface RecoveryPayload {
  email: string
}