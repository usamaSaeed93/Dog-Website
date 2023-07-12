import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import widepet from "../../../Assets/Images/png/widepet.png";
import Collections from "./Collections";
import { firstHeading, secondHeading, writtings,cardContent , buttonStyle } from "./Add.styles";
import { button } from "@material-tailwind/react";
const Specials = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        maxWidth:"1300px",
        margin:"auto",
        "@media (max-width:900px)": {
          flexDirection: "column",
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 900,
          height: 500,
          margin: "auto",
          backgroundColor: "#fcdcb5",
          position:"relative"
        }}
      >
        <CardContent >
          <Box display="flex" style={cardContent} className="special">
            <Box styel={writtings}>
              <Typography style={firstHeading}>
                Check Out Our Specials
              </Typography>
              <Typography style={secondHeading}>
                Massa placerat duis ultricies lacus. Aliquet bibendum enim
                facilisis gravida neque convallis
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="start"
                color="#9c78b1"
                
              >
                <Link
                  href="/"
                  variant="body2"
                  
                  sx={{
                    textDecoration: "none",
                    color:"#7C58D3",
                    fontSize:"20px",
                    fontWeight:"800"
                  }}
                >
                  Shop Now
                </Link>
                <IconButton size="small" aria-label="arrow">
                  <ArrowForwardIcon
                    sx={{
                      color: "#9c78b1",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                variant="contained"
               style={buttonStyle}
              >
                UP TO 40% OFF
              </Button>
              <img
                src={widepet}
                alt="Image"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  marginTop: "100px",
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Collections />
    </Box>
  );
};

export default Specials;
