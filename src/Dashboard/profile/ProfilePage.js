import React from "react";
import { Button, Box } from "@mui/material";
import CustomCard from "../reusablecards/HomeReusableCard";
import desserts from '../../images/desserts.jpeg';

const ProfilePage = () => {
  const handleProfile = () => {
    console.log('profile clicked');
    window.location.replace('/editprofile')
  };

const handleSavedRecipes = () => {
    console.log('saved recipes clicked');
  };

const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.replace('/login');
  };

  return (
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center" , marginTop:50}}>
      <CustomCard 
        title="Edit Profile"
        content="Edit your Profile information Here"
        imageUrl={desserts}
        height={150}
        margin={15}
        imageheight = {10}
        width={1400}
        onClick={handleProfile}
      />
      <CustomCard 
        title="Saved Recipes"
        content="View your Saved Recipes Here"
        imageUrl={desserts}
        height={150}
        margin={15}
        imageheight={10}
        width = {1400}
        onClick={handleSavedRecipes}
      />
      <Box>
        <Button type="submit" variant="contained" className="custom-save-button" onClick={handleLogout} style={{ textDecoration: 'none' }}>
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default ProfilePage;

