import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './Dashboard/Header/HeaderPage';
import Home from './Dashboard/home/HomePage';
import Insights from './Dashboard/insights/InsightsPage';
import Recipes from './Dashboard/recipes/RecipePage';
import AboutUs from './Dashboard/aboutus/AboutUsPage';
import Profile from './Dashboard/profile/ProfilePage';
import Footer from './Dashboard/footer/FooterPage';
import './App.css';
import Signup from './signup/SignUpPage';
import Login from './login/LoginPage';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './ProtectedRoute';
import EmptyComponent from './Dashboard/emptyComponent/EmptyComponent';
import RecipeDetail from './Dashboard/recipes/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <div className='content'>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/insights' element={<Insights />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recipedetails/:recipeId' element={<RecipeDetail />} />
          </Route>

          <Route path='/notfound' element={<EmptyComponent />} />
          <Route path='*' element={<Navigate to='/notfound' />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
