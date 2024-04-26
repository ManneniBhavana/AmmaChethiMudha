import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import backgroundImage from "../../images/home_background.jpeg"
import logo from "../../images/logo.png"
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '310px',  backgroundPosition: 'center center' }}>
      <Toolbar style={{justifyContent:'space-between'}}>
        <div style={{paddingTop:0.02,paddingBottom:0.02, paddingLeft:2, paddingRight:2, color:'black',borderColor:'white', backgroundColor:'white'}}>
          <img src={logo} height={40} width={40}/> 
          {/* <LuChefHat /> */}
        </div>
        <div>
        <Button color="inherit" style={{ textTransform: 'capitalize' }}>Home</Button>
        <Button color="inherit" style={{ textTransform: 'capitalize' }}>Insights</Button>
        <Button color="inherit" style={{ textTransform: 'capitalize' }}>Recipes</Button>
        <Button color="inherit" style={{ textTransform: 'capitalize' }}>About Us</Button>
        <Button color="inherit" style={{ textTransform: 'capitalize' }}>Profile</Button>
        {/* Search Icon */}
        <IconButton color="white" aria-label="search" >
          <AiOutlineSearch style={{ color: 'white' , fontSize: 20}}/> {/* Use the search icon component */}
        </IconButton>
        </div>
      </Toolbar>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 , alignItems:'center',justifyContent: 'center', paddingTop:50, fontWeight: 'bold', fontSize: '60px'}}>
          AMMA CHETHI MUDHA
        </Typography>
      </Toolbar>
      <Typography style={{ borderBottom : "8px solid #c25700", borderWidth:7, width : '10%', alignItems:'center', justifyContent : 'center',margin: "auto",
          marginTop: "2px"}}>

        </Typography>
    </AppBar>
  );
};
export default Header;