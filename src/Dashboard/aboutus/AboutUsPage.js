import React from "react";
import Typography from "@mui/material/Typography";
import "./AboutUsPage.css"

const AboutUsPage = () => {
  return (
    <div className="containeraboutus">
      <div style={{ padding: 20 }}>
        <Typography variant="h5" gutterBottom className="headingsaboutus">
          Our Story
        </Typography>
        <Typography variant="body1" paragraph className="textViewaboutus">
          Amma Chethi Mudha is dedicated to bringing authentic South Indian recipes
          to the world. Our mission is to provide a platform where cooking
          enthusiasts can share their culinary creations and knowledge with
          others. Whether you're a seasoned chef or just starting your culinary
          journey, Amma Chethi Mudha has something for everyone.
        </Typography>
        <Typography variant="h5" gutterBottom className="headingsaboutus">
          Our Team
        </Typography>
        <Typography variant="body1" paragraph className="textViewaboutus">
          Meet the passionate individuals behind Amma Chethi Mudha. Our team is
          comprised of food lovers, chefs, and technology enthusiasts who are
          committed to creating the best cooking experience for our users.
        </Typography>
      </div>
    </div>
  );
};

export default AboutUsPage;
