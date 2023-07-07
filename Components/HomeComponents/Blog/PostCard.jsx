import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import { cardStyle, imgStyle, avatarStyle } from './Blog.styles';

const PostTab = ({ img }) => {
  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src={img} alt="Picture" style={imgStyle} />
          <Box display="flex" flexDirection="row" justifyContent="flex-start" gap="20px">
            <Box display="flex" alignItems="center" fontSize="6px">
              <Avatar sx={avatarStyle}>
                <PersonIcon fontSize="small" />
              </Avatar>
              <Typography variant="body2">Christopher Nolan</Typography>
            </Box>
            <Box display="flex" alignItems="center" fontSize="6px">
              <Avatar sx={avatarStyle}>
                <CalendarTodayIcon fontSize="small" />
              </Avatar>
              <Typography variant="body2">09-11-2001</Typography>
            </Box>
          </Box>
          <Typography variant="h6" fontWeight={700} fontSize={24} textAlign="center">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" fontSize={12} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt illo libero quis nisi odio placeat!
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostTab;
