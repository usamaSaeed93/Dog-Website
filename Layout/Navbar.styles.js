

export const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
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
  '@media (max-width:600px)': {
    paddingLeft: "30px",
  },
};

export const headingStyle = {
  width: "50%",
  fontSize: "50px",
  textJustify: "justify",
  fontWeight:" 800",
  lineHeight:" 71px",
  '@media (max-width:900px)': {
    fontSize: "30px",
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
  '@media (max-width:600px)': {
    fontSize: "12px",
    width: "70%",
  },
};

export const dogImageStyle = {
  
    width: '786px',
    height: "860px",
    '@media (max-width:1200px)': {
      width:"80%"
     },
    '@media (max-width:1000px)': {
     width:"70%"
    },
    '@media (max-width:600px)': {
      display: "none"
    },
  
};
const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  
   
   
    '@media (max-width:900px)':{
  display:"none"
    }
  },
  logo: {
    height: '60px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    '@media (max-width:900px)':{
      display:"none"
    }
  },
  navLinkLi: {
    position: 'relative',
  },
  navLink: {
    textDecoration: 'none',
    color: '#000',
  },
  navLinkActive: {
    color: '#000',
  },
  navLinkDot: {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '6px',
    height: '6px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    marginTop:"20px"
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
  },
};

export default styles;
