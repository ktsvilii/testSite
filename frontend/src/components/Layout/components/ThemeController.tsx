import { FC, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@context';
import { ThemeName } from '@utils/types';

import { GiSteampunkGoggles, GiPumpkinLantern } from 'react-icons/gi';

export const ThemeController: FC = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const [currentTheme, setCurrentTheme] = useState(theme);

  const themeChangeHandler = () => {
    const newTheme = currentTheme === ThemeName.CYBERPUNK ? ThemeName.HALLOWEEN : ThemeName.CYBERPUNK;
    handleThemeChange(newTheme);
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    setCurrentTheme(theme);
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className='flex items-center cursor-pointer gap-2'>
      <GiSteampunkGoggles size={28} />
      <input
        type='checkbox'
        onChange={themeChangeHandler}
        aria-label='Toggle theme'
        className='toggle theme-controller'
      />
      <GiPumpkinLantern size={22} />
    </label>
  );
};
