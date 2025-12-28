import { createContext } from "react";
import type { SessionUser } from "../interfaces/user";

interface AuthContextType {
  user: SessionUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
