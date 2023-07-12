import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { cardStyle, imgStyle, avatarStyle ,headingStyle, desStyle ,colorIcon,optionStyle } from './Blog.styles';

const PostTab = ({ img }) => {
  return (
    <Box  sx={cardStyle}>
      <CardContent>
        <Box sx={optionStyle}>
         Pet Health
        </Box>
        <Box display="flex" flexDirection="column" alignItems="start">
          <img src={img} alt="Picture" style={imgStyle} />
          <Box display="flex" flexDirection="row" justifyContent="flex-start" gap="20px">
            <Box display="flex" alignItems="start" fontSize="6px">
            
                <PersonIcon fontSize="small" sx={colorIcon} />
            
              <Typography  sx={colorIcon}>Christopher Nolan</Typography>
            </Box>
            <Box display="flex" alignItems="center" fontSize="6px">
              
                <CalendarTodayIcon fontSize="small" sx={colorIcon} />
            
              <Typography sx={colorIcon}>09-11-2001</Typography>
            </Box>
          </Box>
          <Typography style={headingStyle} textAlign="start">
          5 Crazy Things Dogs Do When Left Alone At Home
          </Typography>
          <Typography style={desStyle} textAlign="start">
          Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
};

export default PostTab;
