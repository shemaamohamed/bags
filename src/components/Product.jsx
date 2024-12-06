import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Typography ,Avatar ,Chip} from '@mui/material';
import { useTheme } from '@mui/material';
import background from '../assets/bambofinal.png';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';


function Product() {
  const theme = useTheme();
  return (
    <Grid  
    sx={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '105vh',
      backgroundColor:'#085b2f',
      backgroundSize: 'cover',
      position: 'relative',


    }} 
    container 
    spacing={2}
    justifyContent="center"
    alignItems="flex-start"
    >
    <Grid size={10} 
    sx={{
      textAlign:'center',
      position: 'absolute',
      top: { xs: '17vh', sm: '20vh', md: '25vh' },
      color: '#FFFFFF'

      
    }} item >
        <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '30px', sm: '36px', md: '50px' }, 
                fontWeight: 'bold',
                marginBottom: '30px',

              }}
            >
              شوت العافية
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '22px', sm: '22px', md: '30px' }, 
                textAlign: 'end',
                margin: '0px 10px',
              }}
            >
              : المكونات
            </Typography>
            <Typography
              variant="h4"
              sx={{
                direction: theme.typography.direction.ar,
                fontSize: { xs: '22px', sm: '22px', md: '20px' }, 
              }}
            >
              "كركم، زنجبيل، فلفل كايين عضوي، برتقال، عسل اوريغانو، خل اللصوص الأربعة خل تفاح، شيح، النعناع، إكليل الجبل، الصدف، ميرمية،
              لافندر، جوزة الطيب، سبانخ، قرفة، قرنفل، زنجبيل، فلفل أسود"
            </Typography>
          </Box>

        <Box  mt={2} sx={{display:'flex',justifyContent:"center" ,alignItems:"center" }}>
        
          <Avatar
          component={Link} href="https://www.instagram.com/bambookuwait" target="_blank" rel="noopener"
           sx={{
            ml:'7px',
            backgroundColor:'transparent',
            "&:hover":{
              backgroundColor:' black',
              cursor:'pointer',
              


            }
          }}>
          <InstagramIcon  />
          </Avatar>
            <Avatar
             component={Link} href="https://www.bamboo.com.kw" target="_blank" rel="noopener"
             sx={{
                          backgroundColor:'transparent',

                        cursor:'pointer',

            ml:'7px',
            "&:hover":{
              backgroundColor:' black',

            }

          }}>
            <LanguageIcon  />
            </Avatar>
            <Chip
            label={
              <Typography
                sx={{
                  direction: theme.typography.direction.ar,
                }}
                variant="h5"
              >
                للطلب
              </Typography>
            }
            sx={{ marginLeft: 1 }}
          />

          
         
        </Box>
        
            
    </Grid>
    
  </Grid>
  );
}

export default Product;
