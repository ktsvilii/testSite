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
    <div className='dropdown'>
      <div tabIndex={0} role='button' className='btn m-1'>
        Change theme
      </div>
      <ul tabIndex={0} className='dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow'>
        {themes.map(theme => {
          return (
            <li key={theme} onClick={() => themeChangeHandler(theme)}>
              <span>{theme}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
