import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import footerLogo from "../Assets/Images/svg/footerLogo.svg";
import phone from "../Assets/Images/png/phone.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { footerPhone, date2, dateBox ,inputStyle } from "./Footer.styles";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F8F8",
        color: "black",
        maxWidth: "1300px",
        minHeight: "400px",
        margin: "auto",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <img src={footerLogo} alt="footerlogo" />
            <Typography variant="body2">
              Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
              enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde
              ...
            </Typography>
            <Box display="flex" flexDirection="row" gap={1}>
              <img src={phone} alt="phone" width="40px" />
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: "800" }}>
                  (913) 756-3126
                </Typography>
                <Typography>Got Questions? Call us 24/7</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} color="#9C5BF5" margin="auto">
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: 800,
                fontSize: "24px",
                marginBottom: "30px",
              }}
            >
              Working Hours
            </Typography>
            <Box sx={dateBox}>
              <Box sx={date2}>
                <Typography variant="body2">
                  Mon - Fri:
                  <br />
                </Typography>
                <Typography variant="body2">
                  7am – 6pm
                  <br />
                </Typography>
              </Box>
              <Box sx={date2}>
                <Typography variant="body2">
                  Mon - Fri:
                  <br />
                </Typography>
                <Typography variant="body2">
                  7am – 6pm
                  <br />
                </Typography>
              </Box>
              <Box sx={date2}>
                <Typography variant="body2">
                  Sunday:
                  <br />
                </Typography>
                <Typography variant="body2">
                  Closed
                  <br />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} color="#9C5BF5">
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: 800,
                fontSize: "24px",
                marginBottom: "30px",
                color:"#7C58D3"
              }}
            >
              Useful Links
            </Typography>
            <Box sx={dateBox}>
              <Box sx={date2}>
                <Typography variant="body2">
                  Home
                  <br />
                </Typography>
                <Typography variant="body2">
                  About
                  <br />
                </Typography>
              </Box>
              <Box sx={date2}>
                <Typography variant="body2">
                  Services
                  <br />
                </Typography>
                <Typography variant="body2">
                  Shop
                  <br />
                </Typography>
              </Box>
              <Box sx={date2}>
                <Typography variant="body2">
                FAQ
                  <br />
                </Typography>
                <Typography variant="body2">
                  Gallery
                  <br />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} gap={4}>
            <Typography variant="h6" color="#9C5BF5">
              Newsletter
            </Typography>
            <Typography variant="body2">
              Be first in the queue! Get our latest news straight to your inbox.
            </Typography>
            <input type="text" sx={inputStyle} placeholder="NewsLetter" />
            <Box mt={2} textAlign="center" color="#9C5BF5">
              <FacebookIcon sx={{ color: "#9C5BF5", marginLeft: "10px" }} />
              <InstagramIcon sx={{ color: "#9C5BF5", marginLeft: "10px" }} />
              <TwitterIcon sx={{ color: "#9C5BF5", marginLeft: "10px" }} />
              <WhatsAppIcon sx={{ color: "#9C5BF5", marginLeft: "10px" }} />
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" textAlign="center">
          NOOT ©  All rights reserved Copyrights 2023    
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
