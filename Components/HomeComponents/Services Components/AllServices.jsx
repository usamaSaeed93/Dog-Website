import React from 'react';
import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { serviceGrid,firstTab } from './Service.styles';
import cup from '../../../Assets/Images/png/cup.png'
import groom from '../../../Assets/Images/png/groom.png'
import health from '../../../Assets/Images/png/health.png'
import shelter from '../../../Assets/Images/png/shelter.png'
import walking from '../../../Assets/Images/png/walking.png'
import food from '../../../Assets/Images/png/food.png'

const OurServices = () => {
  return (
    <>
      <Typography variant="h4" align="center" m={4} color="#9C5BF5">
        All Services
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Our Services
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>

        <Grid container justifyContent="center" spacing={4} maxWidth={960} mb={4}  >
          <Grid item xs={12} sm={6} md={4} lg={4} sx={serviceGrid}>

          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} >
            <ServiceCard title="Pet Grooming" img={groom} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ServiceCard title="Pet Training" img={cup}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ServiceCard title="Pet Taxi" img={food}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ServiceCard title="Pet Health" img={health}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ServiceCard title="Pet Hotel" img={shelter} />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export default OurServices;
