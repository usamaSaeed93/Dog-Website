import React, { useState } from "react";
import styles from "./Navbar.styles";
import logo from "../Assets/Images/png/Logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };
  const array = ["Home", "Services", "Shop", "Product", "Pages"];
  return (
    <nav>
      <div className="navbar" style={styles.navbar}>
        <div className="logo">
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <ul className="nav-links" style={styles.navLinks}>
          <li className="active">
            Home
            <span className="dot"></span>
          </li>
          <li className="active">Services</li>
          <li className="active">Shop</li>
          <li className="active">Product</li>
          <li className="active">Pages</li>
        </ul>
        <button className="button" style={styles.button}>
       (1 Item ) <ShoppingCartIcon sx={{color:"#7C58D3"}}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
