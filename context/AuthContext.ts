import { createContext, useState, useEffect, useContext, ReactNode, FC } from "react";
import { supabase } from "../utils/supabaseClient";

type AuthContextProps = {
  children: ReactNode;
}

type AuthContext = {
  error: {
    email: string;
    password: string;
    fullName: string;
  };
  handleLogin: (email: string, password: string) => void;
}

const AuthContext = createContext<>(null);
export default function AuthProvider ({ children }): AuthContextProps {
  const [error, setError] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);

  const validateField = (value) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (email, password) => {
   
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
