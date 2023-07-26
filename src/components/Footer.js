import React from "react";

const Footer = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        left:0,
        right:0,
        backgroundColor:"black",
        // padding:"1px",
        color:"white"
    }
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Powered by Factech. All rights reserved.</p>
    </footer>
  );
};

export default Footer;