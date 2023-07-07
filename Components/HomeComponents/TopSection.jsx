import React from "react";
import { Box, Typography } from "@mui/material";
import dog1 from "../../Assets/Images/png/dog1 1.png";
import advantage_1 from "../../Assets/Images/png/Advantage-1.png";
import advantage_2 from "../../Assets/Images/png/Advantage-2.png";
import advantage_3 from "../../Assets/Images/png/Advantage-3.png";
import advantage_4 from "../../Assets/Images/png/Advantage-4.png";
import {
  containerStyle,
  columnStyle,
  headingStyle,
  paragraphStyle,
  imageBoxStyle,
  dogImageStyle,
} from "./TopSection.styles";
function TopSection() {
  return (
    <>
      <Box sx={containerStyle}>
        <Box sx={columnStyle}>
          <Typography variant="h6" component="h6">
            We care for your pets.
          </Typography>
          <Typography variant="h4" component="h1" sx={headingStyle}>
            We Help you care for animals for Nutrition.
          </Typography>
          <Typography paragraph sx={paragraphStyle}>
            All offers are subject to availability. All offers are subject to
            availability. All offers are subject to availability. All offers are
            subject to availability.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                "@media (max-width:900px)": {
                  flexDirection: "column",
                },
              }}
            >
              <img src={advantage_1} alt="none" className="tile_image" />

              <img src={advantage_2} alt="none" className="tile_image" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                "@media (max-width:900px)": {
                  flexDirection: "column",
                },
              }}
            >
              <img src={advantage_3} alt="none" className="tile_image" />

              <img src={advantage_4} alt="none" className="tile_image" />
            </Box>
          </Box>
        </Box>
        <Box></Box>

        <Box sx={imageBoxStyle}>
          <img src={dog1} alt="none" sx={dogImageStyle} className="dogImage" />
        </Box>
      </Box>
    </>
  );
}

export default TopSection;
