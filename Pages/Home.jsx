import React from 'react'
import { Box } from '@mui/material'
import { backgroundStyle } from '../Components/HomeComponents/TopSection.styles'
import TopSection from '../Components/HomeComponents/TopSection'
import Banner from '../Components/HomeComponents/Banner'
import Navbar from '../Layout/Navbar'
function Home() {
   return (
      <>
    
         <div>
            <Box sx={backgroundStyle} >
<Navbar />
               <TopSection />
            </Box>
               {/* <Banner /> */}
          

         </div>
      </>
   )
}

export default Home