// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import api from "../services/api";

type User = {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
};

type AuthContextType = {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    const accessToken = res.data.access_token;
    const userRes = await api.get("/auth/profile", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    setToken(accessToken);
    setUser(userRes.data);
    localStorage.setItem("token", accessToken);
    localStorage.setItem("user", JSON.stringify(userRes.data));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  const isAuthenticated = !!token;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{ token, user, login, logout, isAuthenticated, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
