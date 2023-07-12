import tile from '../../../Assets/Images/png/cardService.png'
import Paws from '../../../Assets/Images/svg/Paws.svg'
export const serviceGrid={
  maxWidth: "400px",
  height: "265px",   
  width:"100%",
        backgroundImage: `url(${tile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position:"relative",
        margin:"auto"
        
      
}
export const cardStyle = {
  backgroundImage:`url(${Paws})`,
  backgroundPosition:"bottom right",
  backgroundRepeat:"no-repeat",
    maxWidth: "400px",
    height: "265px",   
    border:"1px solid grey",
    borderRadius: "8px",
border: "2px solid #EBE5F7",
background: "#FFF",
  margin:"auto"
     
  };
  
  export const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
   paddingTop:"20px"
   
  };
  
  export const rowStyle = {
    display: 'flex',
    alignItems: 'center',
   paddingBottom:5,
   paddingTop:5
  };
  
  export const avatarStyle = {
    marginRight: 20,
  
  };
  
  export const descriptionStyle = {
    fontSize: "18px",
fontStyle: "normal",
fontSeight:" 400",
lineHeight: "26px",
    marginBottom: 5,
    lineHeight: 1.2,
    justifyContent:"justify",
   width:"auto",
   paddingLeft:"0px",
   paddingRight:"0px",
    textAlign:"start"

  };
  
  export const priceStyle = {
    fontWeight: 'bold',
    marginRight: 8,
    fontWeight: "700",
    fontSize: "18px",
    color: "#1C103B"
  };
  
  export const linkStyle = {
    display: 'flex',
    fontSize:"20px",
    lineHeight:"30px",
    fontFamily:"Nunito",
    alignItems: 'center',
    color:"#7f5cd4",
    textDecoration:"none",
    fontWeight:800
  };
 export const titleStyle={
  color: "#0E081E",
fontFamily: "Nunito",
fontSize: "24px",
fontStyle: "normal",
fontWeight: "800",
lineHeight: "30px",
 }
 export const secondHeading={
  color:" #0B0417",
textAlign: "center",
fontFamily:" Nunito",
fontSize:" 46px",
fontStyle:" normal",
fontWeight: "800",
lineHeight: "46px",
 }
 export const firstHeading={
  fontSize:"16px",fontWeight:700, fontFamily:"Nunito",marginTop:"76px" , marginBottom:"15px" }