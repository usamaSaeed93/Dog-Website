import React from 'react'
import '../../../index.css'
import { Box } from '@mui/material'
import layer1 from '../../../Assets/Images/png/Layer1.png'
import layer2 from '../../../Assets/Images/png/Layer2.png'
import {newslettermain} from './Newsletter.styles'
function NewsLetter() {
    const imageStyle={
        maxWidth:"400px",
        maxHeight:"300px",
        '@media (max-width:900px)':{
          Width:"150px",
          Height:"1500px",
        },
        '@media (max-width:600px)':{
         display:"none"
        }
    }
  return (
 <>
 <Box sx={newslettermain}>
  <div>
<img src={layer1} alt="none" style={imageStyle} className='dog_img'/>
  </div>
  <div>
<img src={layer2} alt="none" style={imageStyle} className='dog_img' />
  </div>
 </Box>
 </>
  )
}

export default NewsLetter