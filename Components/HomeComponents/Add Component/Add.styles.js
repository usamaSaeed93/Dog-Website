export const collectionsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  margin: "auto",
  "@media (max-width:600px)": {
    justifyContent: "center",
    margin: "auto",
    gap: "20px",
  },
};

export const cardStyle = {
  maxWidth: 420,
  height: 260,
  width:"100%",
  marginRight: "30px",
  marginBottom: "30px",
  "@media (max-width:600px)": {
width:"80%"
  }
};

export const headingStyle = {
  fontSize: 30,
  m:1,
  mb:"30px",
  fontWeight:800,
  fontFamily:"Nunito",
  "@media (max-width:600px)": {
    fontSize: 20,
      }
};

export const imageStyle = {
  width: "164px",
  height: "260px",

};
export const imageStyle2 = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "relative",
  bottom: "30px",
};
export const boxStyles = {
  borderRadius: "8px",
  background: "rgba(255, 218, 71, 0.00)",
};
export const firstHeading = {
  fontSize: "46px",
  fontWeight: 800,
  maxWidth:"316px",
  textAlign:"start",
  width:"100%",
  fontFamily: "Nunito",
  // marginTop:"179px",
  paddingBottom:"15px"
};
export const secondHeading = {
  fontSize: "18px",
  fontWeight: 400,
  fontFamily: "Nunito",
  maxWidth:"330px",
  fontWeight:400,
  paddingBottom:"30px"
};
export const writtings={
  paddingLeft:"60px",
  maxWidth:"370px",
  width:"100%",

}
export const cardContent={
  display:"flex",
 justifyContent:"center",
alignItems:"baseline",

"@media (max-width:600px)": {
  flexDirection:"column",
  gap:"30px"
},
};


export const buttonStyle={
  width:"255px",
  height:"70px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color:"#fff",
  borderRadius: "8px",
  fontSize:"18px",
  fontFamily:"Nunito",
  fontWeight:800,
  fontFamily:"Nunito",backgroundColor:"#7C58D3"

}
export const outerContainer={
  maxWidth:"478px",
  width:"100%",
  height:"260px",
    display:"flex",
  justifyContent:"center",
  alignItems:"center",
  border:"none",
  '@media (max-width:500px)':{
    width:"65%",

  }
}
export const innerContainer={
  maxWidthwidth:"260px",
  height:"200px",
  width:"100%",
 backgroundColor:" #ffda47",
 borderRadius:"8px",
 fontSize:"30px",
 fontWeight:800,
 '@media (max-width:500px)':{
    width:"65%",
    fontSize:"20px",
  }

}
export const linkStyle={
  font:"20px",
  fontWeight:800,
  textDecoration:"none",
  paddingLeft:"10px",
  color: "#9c78b1" ,
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
}