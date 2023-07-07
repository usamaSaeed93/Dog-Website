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
import Navbar from './Layout/Navbar'
function App() {
  return (
   <>
  {/* <Navbar /> */}
  {/* <Home /> */}
  {/* <TopSection /> */}
  <Box sx={{
    width:"100vw",
    maxWidth:"2000px",
    display:'flex',
    justifyContent:"center",
    flexDirection:"column",
  margin:"auto",
    '@media (max-width:900px)':{
width:"95%",
margin:"auto",
overflowX:"hidden"

    }
  }} >
<NavbarTop />
  <Home />
  <AllServices />
  <Specials />
  <ProductSection />
  <NewsLetter />
  <OtherPosts />
  <OurPosts />
  <Contacts />
  <Footer />

  </Box>

   </>
  );
}

export default App;
