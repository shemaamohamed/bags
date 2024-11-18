import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Product from './components/Product';
import { CssBaseline } from '@mui/material';


function App() {
  const theme = createTheme(
    {
      typography: {
          fontFamily: {
              en: 'A Jannat LT',
              ar: 'A Jannat LT',
          },
          fontWeight:'bold',
          direction:{
              en: 'ltr',
              ar: 'rtl',
          }
      },
      palette: {
          
          text:{
            primary: '#FFFFFF',
          },
      },}
  ); 
 
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />

      <Product />
    </ThemeProvider>
  );
}

export default App;