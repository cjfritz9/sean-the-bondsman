import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { SiteProvider } from './context/SiteContext';
import theme from './theme/ThemeExtension';
import App from './components/App';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(
  <ChakraProvider theme={theme}>
    <SiteProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </SiteProvider>
  </ChakraProvider>
);
