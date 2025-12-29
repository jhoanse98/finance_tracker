import { createContext } from "react";
import type { SessionUser } from "../interfaces/user";

interface AuthContextType {
  user: SessionUser | null;
  login: (email: string, password: string) => Promise<{
    status: number;
    message: string;
}>;
  updateBudget: (userId: string, budget: number) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
