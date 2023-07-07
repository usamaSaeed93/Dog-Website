import React from 'react';
import { Card, CardContent, Avatar, Typography, Link, Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {containerStyle,cardStyle,rowStyle,avatarStyle,descriptionStyle,priceStyle,linkStyle} from './Service.styles'


const   ServiceCard = ({title,img}) => {
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Box style={containerStyle}>
          <div>
            <Box style={rowStyle}>
              <Avatar style={avatarStyle} src={img} />
              <Typography variant="h6">{title}</Typography>
            </Box>
            <Typography style={descriptionStyle} variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci facilis autem sit, architecto dolorum id aliquam saepe quaerat sint optio.
            </Typography>
          </div>
          <div>
            <Box style={rowStyle}>
              <Typography style={priceStyle} variant="body2">
                From $39/complex
              </Typography>
            </Box>
            <Box style={rowStyle}>
              <Link style={linkStyle} href="/">
                Learn More
                <IconButton size="small">
                  <ArrowForwardIcon  sx={{
                    color:"#7f5cd4"
                  }}/>
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
