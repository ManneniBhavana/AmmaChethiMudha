import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "#c25700",
        color: "white",
        marginTop: "50px",
        padding: "20px 0",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy;{new Date().getFullYear()} Amma Chethi Mudha
      </p>
    </footer>
  );
};

export default Footer;
