import React from "react";
import Typography from "@mui/material/Typography";
import "./FooterPage.css";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === '/login' || location.pathname === '/signup';
  return (
    <footer className="footer" style={{ display: hideFooter ? 'none' : 'flex'}}>
      <Typography variant="body1">
        &copy;{new Date().getFullYear()} Amma Chethi Mudha
      </Typography>
    </footer>
  );
};

export default Footer;


