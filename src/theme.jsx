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
}
   
);

export default useTheme;