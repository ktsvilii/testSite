import { FC, useContext, useEffect } from 'react';
import { ThemeContext } from '@context';
import { ThemeName } from '@utils/types';

const themes = [ThemeName.CYBERPUNK, ThemeName.HALLOWEEN];

export const ThemeController: FC = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  const themeChangeHandler = (theme: ThemeName) => {
    handleThemeChange(theme);
  };

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <details className='dropdown'>
      <summary className='btn m-1'>Change Theme</summary>
      <ul className='menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow'>
        {themes.map(theme => {
          return (
            <li key={theme} onClick={() => themeChangeHandler(theme)}>
              <span>{theme}</span>
            </li>
          );
        })}
      </ul>
    </details>
  );
};
