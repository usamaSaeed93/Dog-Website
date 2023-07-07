import React from 'react'
import Number1 from '../../Assets/Images/png/Number-1.png'
import Number2 from '../../Assets/Images/png/Number-2.png'
import Number3 from '../../Assets/Images/png/Number-3.png'
import Number4 from '../../Assets/Images/png/Number-4.png'
import { Box } from '@mui/material'
import {bannerStyle} from './Banner.styles'
function Banner() {
    
  return (
    <Box sx={bannerStyle}>
        <img
          src={Number1}
          alt='none'
          className='tile_2'
        />
        <img
          src={Number2}
          alt='none'
          className='tile_2'
        />
        <img
          src={Number3}
          alt='none'
          className='tile_2'
        />
        <img
          src={Number4}
          alt='none'
          className='tile_2'
        />

      </Box>
  )
}

export default Banner