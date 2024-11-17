import { createTheme } from '@mui/material/styles';

const useTheme = createTheme({
    typography: {
        fontFamily: {
            en: 'Arial, sans-serif',
            ar: 'Tahoma, sans-serif',
        },
        direction:{
            en: 'ltr',
            ar: 'rtl',
        }
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },}
);

export default useTheme;