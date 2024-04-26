import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { LuChefHat } from "react-icons/lu";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundImage: 'url(/Users/bhavanamanneni/Desktop/cs615/cookingbackground.jpg)', backgroundSize: 'cover', height: '310px' }}>
      <Toolbar>
        <div style={{padding:10,color:'black',borderColor:'white', backgroundColor:'white'}}>
          <LuChefHat />
        </div>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          Amma Chethi Mudha
        </Typography>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Insights</Button>
        <Button color="inherit">Recipes</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Profile</Button>

        {/* Search Icon */}
        <IconButton color="white" aria-label="search" style={{ marginLeft: "20px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
