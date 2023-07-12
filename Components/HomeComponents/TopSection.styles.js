import hero from '../../Assets/Images/png/bg.png'
export const containerStyle = {
   
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position:"relative",
    marginTop: "50px",
    marginBottom: "100px",
    '@media (max-width:600px)': {
        marginBottom: "0px",
      
    },
};

export const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "start",
    paddingLeft: "100px",
    alignItems: "flex-start",
    '@media (max-width:900px)': {
        paddingLeft: "50px",
    },
    '@media (max-width:600px)': {
        paddingLeft: "30px",
    },
};

export const headingStyle = {
    width: "auto",
    fontSize: "68px",
    textJustify: "justify",
  fontFamily: 'Nunito',
  maxWidth:"633px",
    fontWeight:"800",
    '@media (max-width:1200px)': {
        width:"auto"
    },
    '@media (max-width:900px)': {
        fontSize: "50px",
        width:"auto"
    },
    '@media (max-width:600px)': {
        fontSize: "40px",
        width: "70%",
        
    },
};

export const paragraphStyle = {
    maxWidth: "530px",
    height:"78px",
    fontSize: "18px",
    fontFamily: 'Nunito',
    textJustify: "justify",
   fontWeight:"400",
   color:"#1C103B",
   paddingTop:"20px",
   paddingBottom:"50px",
    '@media (max-width:1200px)': {
        width:"auto"
    },
    '@media (max-width:900px)': {
        width:"auto"
    },
    '@media (max-width:600px)': {
        fontSize: "12px",
        width: "70%",
    },
};
export const imageBoxStyle= {
  
    display: "flex",
    justifyContent: "flex-start",
    '@media (max-width:1200px)':{
        width:"90%"
            },
            '@media (max-width:900px)': {
               width:"400px"
            },
    '@media (max-width:600px)': {
      display: "none"
    },
  
}
export const dogImageStyle = {

    width: '761px',
    height: "860px",
    '@media (max-width:1200px)':{
width:"600px"
    },
    '@media (max-width:900px)': {
       width:"400px"
    },
    '@media (max-width:600px)': {
        display: "none",
    },

}  
export const backgroundStyle={
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:"70% 100%",
    backgroundPosition: 'right',
    width: '100%',
    height: '100%',
    '@media (max-width:900px)': {
        backgroundSize:"70% 100%",
    },
    '@media (max-width:500px)': {
        backgroundSize:"85% 100%",
    }
}
export const spanStyle={
    color: "#7C58D3"
,fontFamily: "Nunito",
fontSize: "16px",
fontStyle:" normal",
fontWeight: "700",
lineHeight:" 19px",
textTransform: "uppercase",
}