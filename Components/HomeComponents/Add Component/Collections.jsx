import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pet_animated from "../../../Assets/Images/png/petanimated.png";
import pet_animated2 from "../../../Assets/Images/png/petanimated2.png";
import {
  collectionsContainerStyle,
  cardStyle,
  headingStyle,
  imageStyle,
  boxStyles,
  outerContainer,
  innerContainer,
  linkStyle
} from "./Add.styles";

const Collections = () => {
  return (
    <>
      <Box sx={collectionsContainerStyle}>
        <Box  sx={cardStyle} className="outer">
          <CardContent style={outerContainer} className="inner">
            <Box display="flex" style={innerContainer} >
              <Box flex="1">
                <Typography variant="h6" sx={headingStyle}>
                  Luxury Fashion Collection
                </Typography>
                <Box sx={boxStyles}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    color="#9c78b1"
                    height="100%"
                  >
                    <Link
                      href="/"
                 style={linkStyle}
                    >
                      Follow
                    </Link>
                    <IconButton size="small" aria-label="arrow">
                      <ArrowForwardIcon sx={{ color: "#9c78b1" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
             
                <img src={pet_animated} alt="Image" style={imageStyle} />
            
          </CardContent>
        </Box>
        <Box  sx={cardStyle}>
          <CardContent style={outerContainer}>
            <Box display="flex" style={innerContainer} >
              <Box flex="1">
                <Typography variant="h6" sx={headingStyle}>
                  Luxury Fashion Collection
                </Typography>
                <Box sx={boxStyles}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="start"
                    color="#9c78b1"
                    height="100%"
                  >
                    <Link
                      href="/"
                    style={linkStyle}
                    >
                      Follow
                    </Link>
                    <IconButton size="small" aria-label="arrow">
                      <ArrowForwardIcon sx={{ color: "#9c78b1" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
             
                <img src={pet_animated2} alt="Image" style={imageStyle} />
            
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default Collections;
