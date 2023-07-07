import React from 'react';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { fetchDummyData } from '../../../utils/dummyData';
import Typography from '@mui/material/Typography';
import { productSectionStyles } from './Products.styles';

function ProductSection() {
  const { isLoading, isError, data, error } = useQuery('dummyData', fetchDummyData);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Box sx={productSectionStyles.container} >
        <Box sx={productSectionStyles.section}  >
          <Typography sx={productSectionStyles.title} >
            Featured Products
          </Typography>
          {data?.map(elem => {
            return <ProductCard des={elem} />;
          })}
        </Box>
        <Box sx={productSectionStyles.section}>
          <Typography sx={productSectionStyles.title}>
            On Sale Products
          </Typography>
          {data?.map(elem => {
            return <ProductCard des={elem} />;
          })}
        </Box>
        <Box sx={productSectionStyles.section}>
          <Typography sx={productSectionStyles.title}>
            Top Related Products
          </Typography>
          {data?.map(elem => {
            return <ProductCard des={elem} />;
          })}
        </Box>
      </Box>
    </>
  );
}

export default ProductSection;
