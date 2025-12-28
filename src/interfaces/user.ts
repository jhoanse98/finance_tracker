export interface FakeUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
export type SessionUser = Omit<FakeUser, "password"> & { exp: number };