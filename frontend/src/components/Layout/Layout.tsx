import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import { Footer } from './components';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
