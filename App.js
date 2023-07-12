import { Box } from '@mui/material';
import './App.css';
import NavbarTop from './Layout/NavbarTop';
import AllServices from './Components/HomeComponents/Services Components/AllServices';
import Home from './Pages/Home';
import Specials from './Components/HomeComponents/Add Component/Specials';
import ProductSection from './Components/HomeComponents/Products Section/ProductSection'
import NewsLetter from './Components/HomeComponents/NewsLetter/NewsLetter';
import OtherPosts from './Components/HomeComponents/Blog/OtherPosts'
import OurPosts from './Components/HomeComponents/Blog/OurPosts'
import Contacts from './Components/HomeComponents/Contact Us/Contacts';
import Footer from './Layout/Footer'
import Banner from './Components/HomeComponents/Banner'
import Navbar from './Layout/Navbar'
function App() {
  return (
   <>
  {/* <Navbar /> */}
  {/* <Home /> */}
  {/* <TopSection /> */}
  <Box sx={{
    width:"100%",
    maxWidth:"2000px",
    display:'flex',
    justifyContent:"center",
    flexDirection:"column",
  margin:"auto",
    '@media (max-width:900px)':{
width:"100%",
margin:"auto",
overflowX:"hidden"

    }
  }} >
<NavbarTop />
  <Home />
  <Banner />
  <AllServices />
  <Specials />
  <ProductSection />
  <NewsLetter />
  <OtherPosts />
  <Contacts />
  <OurPosts />
  <Footer />

  </Box>

   </>
  );
}

export default App;
