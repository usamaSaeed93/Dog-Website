import React, { useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ContactsStyles from "./ContactStyles";
import ClockIcon from "@mui/icons-material/Schedule";
const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (index) => {
    setSelectedContact(index);
  };

  return (
    <>
      <Box sx={ContactsStyles.main}>
        <Typography
          variant="h2"
          fontFamily="Nunito"
          color="#7C58D3"
          fontSize="16px"
          fontWeight={800}
          m={3}
        >
          Our Contacts
        </Typography>
        <Typography variant="h1" sx={ContactsStyles.heading}>
          Contact Us
        </Typography>
        <Typography
          paragraph
          variant="h4"
          fontFamily="Nunito"
          m={3}
          sx={{
            "@media (max-width:600px)": {
              fontSize: "12px",
            },
          }}
        >
          Massa enim nec dui nunc mattis enim ut tellus
        </Typography>
        <Box display="flex" sx={ContactsStyles.container}>
          <Box
            sx={{
              ...ContactsStyles.contactBox,
              border: selectedContact === 0 ? "1px solid purple" : "2px solid #EBE5F7",
            }}
            onClick={() => handleContactClick(0)}
          >
            <Box
              sx={{
                ...ContactsStyles.contactIcon,
                backgroundColor: selectedContact === 0 ? "#7C58D3" : "#EBE5F7",
              }}
            >
              <LocalPhoneIcon
                sx={{ color: selectedContact === 0 ? "#fff" : "#7C58D3" }}
              />
            </Box>
            <Typography variant="h6" sx={ContactsStyles.contactTitle}>
              Phone
            </Typography>
            <Typography variant="body1" sx={ContactsStyles.contactDetails}>
              0324-6383523
            </Typography>
          </Box>

          <Box
            sx={{
              ...ContactsStyles.contactBox,
              border: selectedContact === 1 ? "1px solid purple" : "2px solid #EBE5F7",
            }}
            onClick={() => handleContactClick(1)}
          >
            <Box
              sx={{
                ...ContactsStyles.contactIcon,
                backgroundColor: selectedContact === 1 ? "#7C58D3" : "#EBE5F7",
              }}
            >
              <HomeIcon
                sx={{ color: selectedContact === 1 ? "#fff" : "#7C58D3" }}
              />
            </Box>
            <Typography variant="h6" sx={ContactsStyles.contactTitle}>
              Address
            </Typography>
            <Typography variant="body1" sx={ContactsStyles.contactDetails}>
              221 B baker Street
            </Typography>
          </Box>
          <Box
            sx={{
              ...ContactsStyles.contactBox,
              border: selectedContact === 2 ? "1px solid purple" : "2px solid #EBE5F7",
            }}
            onClick={() => handleContactClick(2)}
          >
            <Box
              sx={{
                ...ContactsStyles.contactIcon,
                backgroundColor: selectedContact === 2 ? "#7C58D3" : "#EBE5F7",
              }}
            >
              <EmailIcon
                sx={{ color: selectedContact === 2 ? "#fff" : "#7C58D3" }}
              />
            </Box>
            <Typography variant="h6" sx={ContactsStyles.contactTitle}>
              Email
            </Typography>
            <Typography variant="body1" sx={ContactsStyles.contactDetails}>
              Someone@example.com
            </Typography>
          </Box>
          <Box
            sx={{
              ...ContactsStyles.contactBox,
              border: selectedContact === 4 ? "1px solid purple" : "2px solid #EBE5F7",
            }}
            onClick={() => handleContactClick(4)}
          >
            <Box
              sx={{
                ...ContactsStyles.contactIcon,
                backgroundColor: selectedContact === 4 ? "#7C58D3" : "#EBE5F7",
              }}
            >
              <ClockIcon
                sx={{ color: selectedContact === 4 ? "#fff" : "#7C58D3" }}
              />
            </Box>
            <Typography variant="h6" sx={ContactsStyles.contactTitle}>
              Timing
            </Typography>
            <Typography variant="body1" sx={ContactsStyles.contactDetails}>
              10am-05pm <br />
              08pm-12am
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
