import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  containerStyle,
  cardStyle,
  rowStyle,
  avatarStyle,
  descriptionStyle,
  priceStyle,
  linkStyle,
  titleStyle
} from "./Service.styles";

const ServiceCard = ({ title, img }) => {
  return (
    <Card style={cardStyle} margin="auto">
      <CardContent>
        <Box style={containerStyle}>
          <div>
            <Box style={rowStyle}>
              <Avatar style={avatarStyle} src={img} />
              <Typography style={titleStyle}>{title}</Typography>
            </Box>
            <Typography style={descriptionStyle} variant="body2">
            Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam 
            </Typography>
          </div>
          <div>
            <Box style={rowStyle}>
              <Typography style={priceStyle} variant="body2">
                From $39/complex
              </Typography>
            </Box>
            <Box style={rowStyle}>
              <Link style={linkStyle} href="/" fontWeight={800}>
                Get Services
                <IconButton size="small">
                  <ArrowForwardIcon
                    sx={{
                      color: "#7f5cd4",
                      fontWeight:800
                    }}
                  />
                </IconButton>
              </Link>
            </Box>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
