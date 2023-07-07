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
    fontSize: "50px",
    textJustify: "justify",
    font: "extraBold",
    '@media (max-width:1200px)': {
        width:"auto"
    },
    '@media (max-width:900px)': {
        fontSize: "30px",
        width:"auto"
    },
    '@media (max-width:600px)': {
        fontSize: "20px",
        width: "70%",
    },
};

export const paragraphStyle = {
    width: "50%",
    fontSize: "18px",
    textJustify: "justify",
    font: "extraBold",
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
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    width: '100%',
    height: '100%',
    '@media (max-width:900px)': {
       backgroundSize: 'cover',
    }
}