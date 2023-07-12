import newsletter from '../../../Assets/Images/png/newsletter.png'
export const newslettermain={
        backgroundImage: `url(${newsletter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width:"100%",
        maxWidth:"1300px",
        margin:"auto",
       height:"500px",
      display:"flex",
      // gap:"35%",
      justifyContent:"space-between",
      alignItems:"center",
     
             
  '@media (max-width:900px)':{
    justifyContent:"space-between",
    gap:"20%"
  } ,
  '@media (max-width:600px)':{
    height:"200px",
  
  }  
}