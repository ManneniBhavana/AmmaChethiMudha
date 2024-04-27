// import React, { useState } from "react";
// import Header from "./Dashboard/header/HeaderPage";
// import Home from "./Dashboard/Home/HomePage";
// import Insights from "./Dashboard/insights/InsightsPage";
// import Recipes from "./Dashboard/recipes/RecipePage";
// import AboutUs from "./Dashboard/aboutus/AboutUsPage";
// import Profile from "./Dashboard/profile/ProfilePage";

// const App = () => {
//   const [title, setTitle] = useState("AMMA CHETHI MUDHA");

//   const handleNavigationClick = (navItem) => {
//     switch (navItem) {
//       case "Home":
//         setTitle("AMMA CHETHI MUDHA");
//         break;
//       case "Insights":
//         setTitle("INSIGHTS");
//         break;
//       case "Recipes":
//         setTitle("RECIPES");
//         break;
//       case "About Us":
//         setTitle("ABOUT US");
//         break;
//       case "Profile":
//         setTitle("PROFILE");
//         break;
//       default:
//         setTitle("AMMA CHETHI MUDHA");
//     }
//   };

//   return (
//     <div>
//       <Header title={title} onNavigationClick={handleNavigationClick} />
//       {title === "AMMA CHETHI MUDHA" && <Home />}
//       {title === "INSIGHTS" && <Insights />}
//       {title === "RECIPES" && <Recipes />}
//       {title === "ABOUT US" && <AboutUs />}
//       {title === "PROFILE" && <Profile />}
//     </div>
//   );
// };

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Dashboard/header/HeaderPage";
import Home from "./Dashboard/home/HomePage";
import Insights from "./Dashboard/insights/InsightsPage";
import Recipes from "./Dashboard/recipes/RecipePage";
import AboutUs from "./Dashboard/aboutus/AboutUsPage";
import Profile from "./Dashboard/profile/ProfilePage";
import Footer from "./Dashboard/Footer/FooterPage";

const App = () => {
  const handleNavigationClick = (navItem) => {
    console.log(`Navigated to ${navItem}`);
  };
  return (
    <Router>
      <div>
        <Header onNavigationClick={handleNavigationClick} />
        <Routes>
          <Route path="/" comp={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
