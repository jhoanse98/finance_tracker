import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createFakeJWT, decodeFakeJWT, saveToken } from "./utils";
import type { SessionUser } from "../interfaces/user";
import { getUser, updateUserBudgetApi } from "../api/users.api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<SessionUser | null>(() => decodeFakeJWT());

  const login = async (email: string, password: string) => {
    const foundUser = await getUser(email, password);
    if (foundUser.length) {
      const sessionUser = {
        id: foundUser[0].id,
        name: foundUser[0].name,
        email: foundUser[0].email,
        budget: foundUser[0].budget,
      };
      const token = createFakeJWT(sessionUser);
      saveToken(token);
      setUser(decodeFakeJWT());
      return { status: 200, message: "OK" };
    } else {
      throw new Error("Credenciales incorrectas");
    }
  };

  const updateBudget = async (userId: string, budget: number) => {
    const updatedUser = await updateUserBudgetApi(userId, budget);
    if (updatedUser) {
      const sessionUser = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        budget: updatedUser.budget,
      };
      const token = createFakeJWT(sessionUser);
      saveToken(token);
      setUser(decodeFakeJWT());
    }
  };

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        updateBudget,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
