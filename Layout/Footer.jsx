import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#F8F8F8', color: 'black', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#9C5BF5" >Petopia</Typography>
            <Typography variant="body2">Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} color="#9C5BF5">
            <Typography variant="h6">Working Hours</Typography>
            <Typography variant="body2">
              Mon - Fri: 7am – 6pm<br />
              Saturday: 9am – 4pm<br />
              Sunday: Closed
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#9C5BF5">Useful Links</Typography>
            <Typography variant="body2">
              <Link href="/">Home</Link><br />
              <Link href="/faq">FAQ</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#9C5BF5">Newsletter</Typography>
            <Typography variant="body2">Be first in the queue! Get our latest news straight to your inbox.</Typography>
            <Box mt={2} textAlign="center" color="#9C5BF5" >
        <FacebookIcon sx={{ color:"#9C5BF5" , marginLeft:"10px"}} />
        <InstagramIcon sx={{ color:"#9C5BF5" , marginLeft:"10px"}} />
        <TwitterIcon sx={{ color:"#9C5BF5" , marginLeft:"10px"}} />
        <WhatsAppIcon sx={{ color:"#9C5BF5" , marginLeft:"10px"}} />
        </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" textAlign="center">Got Questions? Call us 24/7</Typography>
          <Typography variant="body2" textAlign="center">Email: info@mail.com</Typography>
          <Typography variant="body2" textAlign="center">Phone: (913) 756-3126</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
