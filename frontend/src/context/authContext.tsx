import { FC, createContext, ReactNode, useState, useEffect } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const defaultAuthContext: AuthContextProps = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
