import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../recipes.json';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === recipeId);
  console.log(recipeId,"recipe iddddddddddd =====>>>>>>>>>>>>>>>>")
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Cooking Time</h2>
      <p>Cook Time: {recipe.cookingTime.cookTime}</p>
      <p>Resting Time: {recipe.cookingTime.restingTime}</p>
      <p>Servings: {recipe.cookingTime.servings}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <iframe
        width="560"
        height="315"
        src={recipe.videoUrl}
        title="Recipe Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        {/* Render ratings/reviews UI here */}
      </div>
    </div>
  );
};

export default RecipeDetail;
