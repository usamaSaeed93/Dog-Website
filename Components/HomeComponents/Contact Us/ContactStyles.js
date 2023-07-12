const ContactsStyles = {
    heading: {
      fontSize: "46px",
      fontWeight: 800,
      textAlign: "center",
      margin:4,
      fontFamily: "Nunito",
      marginTop:"16px",
      marginBottom:"12px",
      "@media (max-width:900px)": {
        flexDirection: "30px",
      },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      gap: 5,
      marginTop:"12px",
      flexDirection: "row",
     
   
      background: "#FFF",
      "@media (max-width:900px)": {
        flexDirection: "column",
      },
    },
    contactBox: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      border: "2px solid #EBE5F7",
      alignItems: "center",
      width: 300,
      height: 150,
      margin: "auto",
      border: "1px solid #9C5BF5",
    },
    contactIcon: {
      width: 80,
      height: 80,
      borderRadius: "50%",
     
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 2,
      position: "relative",
      top: -25,
    },
    contactTitle: {
      textAlign: "center",
      gutterBottom: true,
    },
    contactDetails: {
      textAlign: "center",
    },
    main:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"20px",
    padding:"20px",
      minHeight:"526px",
      backgroundColor:"#FBF9FF"
    }
  };
  export default ContactsStyles;
  