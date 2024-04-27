import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const ProfilePage = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="body1" paragraph>
          Here you can display the user's profile information.
        </Typography>
      </div>
    </div>
  );
};

export default ProfilePage;
