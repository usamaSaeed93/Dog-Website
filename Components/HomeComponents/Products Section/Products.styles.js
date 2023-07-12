export const productSectionStyles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      maxWidth:"1300px",
      margin:"auto",
      marginTop:"130px",
      '@media (max-width:900px)': {
        flexDirection: "column",
        width: "100%",
        margin:"auto"
      }
    },
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap:"30px",
      marginLeft:"15px",
      marginRight:"15px",
      '@media (max-width:900px)':{
        margin:"auto"
      }
    },
    title: {
      variant: "body1",
      fontWeight: 800,
      textAlign: "center",
    
      fontSize:"32px",
      fontWeight:800,
      fontFamily:"Nunito"
    }
  
}