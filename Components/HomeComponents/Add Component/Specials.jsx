import React from 'react';
import { Card, CardContent, Typography, Box, Link, IconButton, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import widepet from '../../../Assets/Images/png/widepet.png'
import Collections from './Collections';
const Specials = () => {
    return (
        <Box sx={{
            display:"flex" , flexDirection:"row" ,gap:"40px",
            '@media (max-width:900px)':{
                flexDirection:"column"
            }
        }}>
        <Card variant="outlined" sx={{ maxWidth: 900, height: 500, margin:"auto", backgroundColor:"#fcdcb5"}}>
            <CardContent>
                <Box display="flex">
                    <Box flex="1">
                        <Typography variant="h6" fontSize={24}>
                            Check Out Our Specials
                        </Typography>
                        <Typography variant="body1" mt={2} sx={{ wordBreak: 'break-word' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem vel quos eum aliquid facilis, porro accusantium magni architecto perferendis.
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="start" color="#9c78b1" >
                            <Link href="/" variant="body2" fontSize={30} sx={{
                                textDecoration: "none"
                            }}>
                                Follow
                            </Link>
                            <IconButton size="small" aria-label="arrow">
                                <ArrowForwardIcon sx={{
                                    color: "#9c78b1"
                                }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Button variant="contained" sx={{
                            backgroundColor:"#7c58d3"
                        }}>
                           UP TO 40% OFF
                        </Button>
                        <img
                            src={widepet}
                            alt="Image"
                            style={{ width: '100%', height: 'auto', maxWidth: '100%', marginTop: '10px' }}
                            />
                    </Box>
                </Box>
            </CardContent>
        </Card>
        <Collections />
                            </Box>
    );
};

export default Specials;
