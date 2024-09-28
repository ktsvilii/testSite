import { FC, createContext, ReactNode, useState, useMemo } from 'react';
import { ThemeContextType, ThemeName } from '@utils/types';

const defaultThemeContext: ThemeContextType = {
  theme: ThemeName.CYBERPUNK,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleThemeChange: (theme: ThemeName) => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const initialTheme = (localStorage.getItem('theme') as ThemeName) || ThemeName.CYBERPUNK;
  const [theme, setTheme] = useState<ThemeName>(initialTheme);

  const handleThemeChange = (newTheme: ThemeName) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const value = useMemo(() => ({ theme, handleThemeChange }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
