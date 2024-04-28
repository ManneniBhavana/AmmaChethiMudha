import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Dashboard/Header/HeaderPage';
import Home from './Dashboard/home/HomePage';
import Insights from './Dashboard/insights/InsightsPage';
import Recipes from './Dashboard/recipes/RecipePage';
import AboutUs from './Dashboard/aboutus/AboutUsPage';
import Profile from './Dashboard/profile/ProfilePage';
import Footer from './Dashboard/footer/FooterPage';
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/home' element ={<Home />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;