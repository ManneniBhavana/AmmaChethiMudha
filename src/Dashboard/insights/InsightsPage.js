import React from "react";
import Typography from "@mui/material/Typography";
import "./InsightsPage.css";

const Insights = () => {
  return (
    <div className="container">
      <Typography variant="h4" className="headings">
        Overview
      </Typography>
      <Typography variant="body1" className="textView">
        Presenting a feature-rich cooking app that offers customers a vast collection of recipes to browse and enjoy. 
        Users can easily search for recipes by entering parameters such as breakfast, desserts, main course, or dietary restrictions. 
        Users can also post and share their unique recipes with the community. The software provides step-by-step instructions, 
        culinary tips, and nutritional information to assist users in making delicious meals. With a wide range of recipes and 
        a user-friendly design, this app seeks to foster a vibrant culinary community and spark culinary creativity.
      </Typography>
      <Typography variant="h4" className="headings">
        Problem
      </Typography>
      <Typography variant="body1" className="textView">
        In this busy world, many people cannot find various recipes interactively. So, we provide an interactive way of 
        accessing different recipes through our app.
      </Typography>
      <Typography variant="h4" className="headings">
        Users Goals
      </Typography>
      <Typography variant="body1" className="textView">
        Users can easily access the app and can understand the recipes. Users can easily download the app and can use it 
        offline. They can easily try out the recipes and can taste the authentic flavors of food. It is more useful to the 
        people who are living far from their country.
      </Typography>
      <Typography variant="h4" className="headings">
        Actions
      </Typography>
      <Typography variant="body1" className="textView">
        Users can perform actions like searching the recipes and uploading the recipes. They can also be able to modify 
        their profile according to their interest.
      </Typography>
    </div>
  );
};

export default Insights;
