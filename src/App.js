import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Dashboard/Header/HeaderPage';
import Home from './Dashboard/home/HomePage';
import Insights from './Dashboard/insights/InsightsPage';
import Recipes from './Dashboard/recipes/RecipePage';
import AboutUs from './Dashboard/aboutus/AboutUsPage';
import Profile from './Dashboard/profile/ProfilePage';
import Footer from './Dashboard/footer/FooterPage';
import "./App.css"
import Signup from './signup/SignUpPage';
import Login from './login/LoginPage';

const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  return (
    <Router>
      <div className='content'>
        {!isLoginPage && !isSignupPage && <Header />}
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        {!isLoginPage && !isSignupPage && <Footer />}
      </div>
    </Router>
  );
};

export default App;
