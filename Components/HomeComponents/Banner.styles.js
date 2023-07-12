import banner from '../../Assets/Images/png/banner.png'
export const bannerStyle={
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth:"1200px",
        width:"100%",
        margin:"auto",
        height: '200px',
      paddingX:"50px",
        display: "flex",
        flexDirection: "row",
        gap:"100px",
        justifyContent: "center",
        alignItems: "center",
        '@media (max-width:1000px)':{
height:"120px",
width:"80%",
gap:"40px",
MarginLeft:"50px",


        },
        '@media (max-width:600px)':{
                width:"80%",
            height:"80px",
            marginTop:"50px",
        
            gap:"20px",
        
           justifyContent:"space-between"
            
                    }
}