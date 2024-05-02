import React from 'react';
import { Link } from 'react-router-dom';
import ReusableMenuCard from '../homemenus/reusablemenucard';
import { Typography } from '@mui/material';

const SavedRecipesPage = ({ savedRecipes }) => {
  return (
    <div>
      {savedRecipes.length === 0 ? (
        <div className="common-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <Typography style={{color:'#c25700',fontSize:20, fontWeight:'bold'}}>No saved recipes</Typography>
        </div>
      ) : (
        savedRecipes.map((recipe, index) => (
          <Link to={`/recipedetails/${recipe.id}`} key={index}>
            <ReusableMenuCard
              imageSrc={recipe.src}
              altText={recipe.alt}
              description={recipe.text}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default SavedRecipesPage;
