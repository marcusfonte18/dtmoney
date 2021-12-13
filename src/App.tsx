import { Dashboard } from './src/components/Dashboard';
import { Header } from './src/components/Header/Index';
import { GlobalStyle } from './src/styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

