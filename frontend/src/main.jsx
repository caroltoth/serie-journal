import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// Aqui nós importamos a imagem salva no seu computador!
import bgImage from './assets/bg.jpg'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', 
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${bgImage})`, // Usando a imagem local aqui
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);