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
} from "./Add.styles";

const Collections = () => {
  return (
    <>
      <Box sx={collectionsContainerStyle}>
        <Card variant="outlined" sx={cardStyle}>
          <CardContent>
            <Box display="flex">
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
                    width="95%"
                  >
                    <Link
                      href="/"
                      variant="body2"
                      fontSize={30}
                      sx={{ textDecoration: "none" }}
                    >
                      Follow
                    </Link>
                    <IconButton size="small" aria-label="arrow">
                      <ArrowForwardIcon sx={{ color: "#9c78b1" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              <Box
                width={194}
                height={260}
                overflow="visible"
                position="relative"
              >
                <img src={pet_animated} alt="Image" style={imageStyle} />
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={cardStyle}>
          <CardContent>
            <Box display="flex">
              <Box flex="1" justifyContent="space-evenly">
                <Typography variant="h6" sx={headingStyle}>
                  Luxury Fashion Collection
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
                    fontSize={30}
                    sx={{ textDecoration: "none" }}
                  >
                    Follow
                  </Link>
                  <IconButton size="small" aria-label="arrow">
                    <ArrowForwardIcon sx={{ color: "#9c78b1" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                width={194}
                height={260}
                overflow="visible"
                position="relative"
              >
                <img src={pet_animated2} alt="Image" style={imageStyle} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Collections;
