import React from 'react';
import { Card, CardContent, Typography, Box, Rating } from '@mui/material';
import pet1 from '../../../Assets/Images/png/pet1.png'
const ProductCard = (elem) => {
  return (
    <Card  sx={{ maxWidth: 437, maxHeight: 170, margin:"4px", 
    '@media (max-width:600px)':{
      margin:"auto"
    }
    }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <img
            src={pet1}
            alt="Dog"
            style={{ width: '180px', height: '120px', marginRight: '10px' }}
          />
          <Box display="flex" flexDirection="column" flexGrow={1}>
            <Typography variant="body1" fontWeight={800}>
              {elem.des.description}

            </Typography>
            <Rating value={5} readOnly sx={{ color: 'yellow', marginTop: '5px' }} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={1}>
          <Typography variant="body2" color="#7f5cd4" fontWeight={900}>
           {elem.des.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
