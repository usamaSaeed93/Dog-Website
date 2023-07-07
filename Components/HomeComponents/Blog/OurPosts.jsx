import React from 'react';
import { Box } from '@mui/material';
import PostCard from './PostCard';
import imig from '../../../Assets/Images/png/cart1.png'
import white from '../../../Assets/Images/png/cart2.png'
import groomer from '../../../Assets/Images/png/cart3.png'
import Typography from '@mui/material/Typography';
const PostSection = () => {
  return (
    <>
    <Typography variant="h6" align="center" margin={6}>
        Other Posts
      </Typography>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
     <PostCard img={imig}/>
     <PostCard img={white}/>
     <PostCard img={groomer}/>

    </Box>
    </>
  );
};

export default PostSection;