import tile from '../../../Assets/Images/png/cardService.png'
export const serviceGrid={
    
        backgroundImage: `url(${tile})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position:"relative",
        top:"30px"
      
}
export const cardStyle = {
    maxWidth: 437,
    height: 300,
    border:"1px solid grey",
    borderRadius: "8px",
border: "2px solid #EBE5F7",
background: "#FFF",
  
      '@media (max-width)':{
          marginLeft:"50px"} 
  };
  
  export const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };
  
  export const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
  };
  
  export const avatarStyle = {
    marginRight: 20,
  
  };
  
  export const descriptionStyle = {
    marginBottom: 20,
    lineHeight: 1.2,
    justifyContent:"justify"
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
    alignItems: 'center',
    color:"#7f5cd4",
    textDecoration:"none"
  };
  export const firstTab={
    position:"relative",
    top:"30px"
  }