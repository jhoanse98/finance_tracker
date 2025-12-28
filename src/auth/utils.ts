interface FakeUser {
  id: string;
  name: string;
  email: string;
    password: string;
    exp: number;
}

const TOKEN_KEY = "fake_jwt";

export const createFakeJWT = (user: Omit<FakeUser, "exp" | "password">): string => {
  const payload: Omit<FakeUser, "password"> = {
    ...user,
    exp: Date.now() + 1000 * 60 * 60,
  };

  return btoa(JSON.stringify(payload));
};

export const decodeFakeJWT = (): FakeUser | null => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;

  try {
    const decoded: FakeUser = JSON.parse(atob(token));

    if (decoded.exp < Date.now()) {
      localStorage.removeItem(TOKEN_KEY);
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};