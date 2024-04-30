import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../recipes.json';
import { Typography, TextField, Button, Rating, Box } from '@mui/material';
import './RecipeDetailPage.css'

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === recipeId);
  const [userRating, setUserRating] = useState(null);
  const [comments, setComments] = useState('');

  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmitRating = () => {
    console.log('User Rating:', userRating);
    console.log('Comments:', comments);
    setUserRating(null);
    setComments('');
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Box maxWidth="1400px" mx="auto" px={3} py={4}>
      {/* <Typography variant="h4" align="center">{recipe.name}</Typography> */}
      <Typography variant="h4">COOKING TIME</Typography>
      <Typography variant="body1" className="textView">Cook Time: {recipe.cookingTime.cookTime}</Typography>
      <Typography variant="body1" className="textView">Resting Time: {recipe.cookingTime.restingTime}</Typography>
      <Typography variant="body1" className="textView">Servings: {recipe.cookingTime.servings}</Typography>
      <Typography variant="h4">INGREDIENTS</Typography>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="textView">{ingredient}</li>
        ))}
      </ul>
      <Typography variant="h4">Instructions</Typography>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index} className="textView">{instruction}</li>
        ))}
      </ol>
      <iframe
        width="80%"
        height="315"
        src={recipe.videoUrl}
        title="Recipe Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Box mt={4} textAlign="center">
        <Typography variant="h4">Ratings & Reviews</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography>Rating:</Typography>
          <Rating
            value={userRating || 0}
            onChange={handleRatingChange}
            precision={0.5}
          />
          <Typography>Comments:</Typography>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            value={comments}
            onChange={handleCommentsChange}
          />
          <Button onClick={handleSubmitRating} variant="contained" color="primary" mt={2}>
            Submit Rating
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeDetail;