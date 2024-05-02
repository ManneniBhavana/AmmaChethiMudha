import React, { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Header from './Dashboard/Header/HeaderPage';
import Home from './Dashboard/Home/HomePage';
import Insights from './Dashboard/insights/InsightsPage';
import Recipes from './Dashboard/recipes/RecipePage';
import AboutUs from './Dashboard/aboutus/AboutUsPage';
import Profile from './Dashboard/profile/ProfilePage';
import Footer from './Dashboard/Footer/FooterPage';
import './App.css';
import Signup from './signup/SignUpPage';
import Login from './Login/LoginPage';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './ProtectedRoute';
import EmptyComponent from './Dashboard/emptyComponent/EmptyComponent';
import RecipeDetail from './Dashboard/recipes/RecipeDetailPage';
import DessertsPage from './Dashboard/homemenus/dessertsmenu';
import PulaosandbiryanisPage from './Dashboard/homemenus/pulaosandbiryanismenu';
import SoupsPage from './Dashboard/homemenus/soupsmenu';
import MainCoursePage from './Dashboard/homemenus/maincoursemenu';
import SearchResultsPage from './Dashboard/searchresults/SearchResults';
import EditProfile from './Dashboard/profile/EditProfile';
import SavedRecipesPage from './Dashboard/recipes/SavedRecipespage';

const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  return (
    <Router>
      <div className='content'>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/AmmaChethiMudha' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/insights' element={<Insights />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/recipedetails/:recipeId' element={<RecipeDetail />} />
            <Route path='/dessertsmenu' element={<DessertsPage />} />
            <Route path='/soupsmenu' element={<SoupsPage />} />
            <Route path='/maincoursemenu' element={<MainCoursePage />} />
            <Route
              path='/pulaosandbiryanismenu'
              element={<PulaosandbiryanisPage />}
            />
            <Route path='/search' element={<SearchResultsPage />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/recipedetails/:recipeId' element={<RecipeDetail />} />
            <Route
              path='/savedrecipes'
              element={<SavedRecipesPage savedRecipes={savedRecipes} />}
            />
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
