import { useState } from "react";
import { AuthContext } from "./AuthContext";
import users from "../db/users.json";
import { createFakeJWT, decodeFakeJWT, saveToken } from "./utils";
import type { SessionUser } from "../interfaces/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SessionUser | null>(() => decodeFakeJWT());

  const login = (email: string, password: string) => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      const sessionUser = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      };
      const token = createFakeJWT(sessionUser);
      saveToken(token);
      setUser(decodeFakeJWT());
      console.log("Login successful:", foundUser);
    } else {
      console.log("Invalid credentials");
    }
  };

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
