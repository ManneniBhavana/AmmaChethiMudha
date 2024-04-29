import React from "react";
import CustomCard from '../reusablecards/HomeReusableCard';
import "./HomePage.css";
import Desserts from "../../images/desserts.jpeg";
import Soups from "../../images/soups.jpg";
import MainCourse from '../../images/maincourse.jpg';
import PulaosandBiryani from '../../images/pulaosandBiryani.jpg';

const Home = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };
  return (
    <div className="home-container">
      <h1 className="description">Description</h1>
      <p className="quote">
        "Amma Chethi Mudha is more than just a cooking and recipe app that provides authentic Indian recipes. 
        It's a one-stop app for all the learners and enthusiasts community. Enthusiasts can upload their culinary creations 
        and kitchen wisdom into the app. Learners can find the recipes and start their cooking journey with all the information provided. 
        Amma Chethi Mudha offers a library of recipes at your fingertips."
      </p>
      <div className="card-container">
        <CustomCard
          title="Desserts"
          content="A sweet library with lots of desserts recipes."
          imageUrl={Desserts}
          onClick={() => handleCardClick("/dessertsmenu")}
        />
        <CustomCard
          title="Soups"
          content="A library of quick saviours."
          imageUrl={Soups}
          onClick={() => handleCardClick("/soupsmenu")}
        />
      </div>
      <div className="card-container">
        <CustomCard
          title="Main Course"
          content="A library of mouth watering main course dishes."
          imageUrl={MainCourse}
          onClick={() => handleCardClick("/maincoursemenu")}
        />
        <CustomCard
          title="Pulao's and Biryani's"
          content="A bad day...! Open this library."
          imageUrl={PulaosandBiryani}
          onClick={() => handleCardClick("/pulaoandbiryani")} 
        />
      </div>
    </div>
  );
};

export default Home;
