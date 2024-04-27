import React from "react";
import Typography from "@mui/material/Typography";
import "./FooterPage.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body1">
        &copy;{new Date().getFullYear()} Amma Chethi Mudha
      </Typography>
    </footer>
  );
};

export default Footer;

