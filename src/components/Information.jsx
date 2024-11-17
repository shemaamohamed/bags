
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import background from '../assets/bambo.png';
function Information() {
    const theme = useTheme();
  return (
    <Grid  
    sx={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      backgroundColor:'#085b2f',
      backgroundSize: 'cover',
      position: 'relative',


    }} 
    container 
    spacing={2}
    justifyContent="center"
    alignItems="flex-start"
    >
    <Grid size={12} 
    sx={{
      textAlign:'center',
      position: 'absolute',
      top:'86px'
      
    }} item >
        <Box>
            <Typography  variant='h1' sx={{fontFamily:theme.typography.fontFamily.ar}} >قهوة الشعير</Typography>
        </Box>
        <Box>
            <Typography  variant='h1' sx={{fontFamily:theme.typography.fontFamily.en}} >Barley Coffee</Typography>
        </Box>
    </Grid>
    
  </Grid>
  )
}

export default Information