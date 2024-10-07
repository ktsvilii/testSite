import { FC, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout, Home, PermissionsMissingPage } from './components';
import { AuthContext, AuthContextProvider, ThemeContextProvider } from './context';
import { Album } from '@components/Album';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export interface ProtectedRoutesProps {
  Component: React.ComponentType;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ Component }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return <Component />;
  }

  return <PermissionsMissingPage />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/album' element={<ProtectedRoutes Component={Album} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
