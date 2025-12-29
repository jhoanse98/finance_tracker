export interface FakeUser {
  id: string;
  name: string;
    email: string;
    budget: number;
  password: string;
}
export type SessionUser = Omit<FakeUser, "password"> & { exp: number };