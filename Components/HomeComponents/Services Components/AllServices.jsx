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
import {secondHeading , firstHeading} from './Service.styles'
const OurServices = () => {
  return (
    <>
      <Typography align="center" style={firstHeading} color="#9C5BF5">
        All Services
      </Typography>
      <Typography style={secondHeading} align="center" marginBottom={3}>
      All Pet Care Services
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>

        <Grid container  spacing={4} maxWidth={1300} mb={4}  >
          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Box sx={serviceGrid}>

            </Box>
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
