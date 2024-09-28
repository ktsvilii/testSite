import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout, Home } from './components';
import { ThemeContextProvider } from './context';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Layout>
          <Home />
        </Layout>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
