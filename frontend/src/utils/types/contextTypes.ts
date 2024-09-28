export const enum ThemeName {
  CYBERPUNK = 'cyberpunk',
  HALLOWEEN = 'halloween',
}

export interface ThemeContextType {
  theme: ThemeName;
  handleThemeChange: (theme: ThemeName) => void;
}
