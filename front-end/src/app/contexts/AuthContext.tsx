"use client";
import { createContext, useState } from "react";

type UserContextType = {
  token: string;
  UserLogin: {
    id: string;
    name: string;
    cpf: string;
    role: string;
  };
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserContextType | null;
  setUser: (user: UserContextType | null) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true;

  const [user, setUser] = useState<UserContextType | null>(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
