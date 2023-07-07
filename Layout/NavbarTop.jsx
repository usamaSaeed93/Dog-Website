import { Box, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function NavbarTop () {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', height: 40, bgcolor: '#9C5BF5' }}>
      <Box display="flex" alignItems="center" gap={2}>
        <FacebookIcon sx={{ color: 'white' }} />
        <InstagramIcon sx={{ color: 'white' }} />
        <TwitterIcon sx={{ color: 'white' }} />
        <WhatsAppIcon sx={{ color: 'white' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' ,'@media (max-width:600px)':{
display:"none"
      }}}>
        <PhoneIcon sx={{ color: 'white', marginRight: 1 }} />
        <span style={{ color: 'white' }}>123-456-7890</span>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon sx={{ color: 'white', marginRight: 1 }} />
        <span style={{ color: 'white' }}>info@mail.com</span>
      </Box>
    </Box>
  );
};
