import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../recipes.json';
import { Typography, TextField, Button, Rating, Box } from '@mui/material';
import { Link } from 'react-router-dom';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
import './RecipeDetailPage.css';

const RecipeDetail = (redirectToRecipes) => {
  const { recipeId } = useParams();
  const recipe = recipesData.find((recipe) => recipe.id === recipeId);
  const [userRating, setUserRating] = useState(null);
  const [comments, setComments] = useState('');
  const [editedIngredients, setEditedIngredients] = useState('');
  const [editedInstructions, setEditedInstructions] = useState('');
  const [ingredientsEditMode, setIngredientsEditMode] = useState(false);
  const [instructionsEditMode, setInstructionsEditMode] = useState(false);
  const [ingredientsChanged, setIngredientsChanged] = useState(false);
  const [instructionsChanged, setInstructionsChanged] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const disabledButton = userRating === null;
  const [savedRecipes, setSavedRecipes] = useState([]);
  const handleRatingChange = (event, newValue) => {
    setUserRating(newValue);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleIngredientsEdit = () => {
    setIngredientsEditMode(true);
    setEditedIngredients(recipe.ingredients.join('\n'));
  };

  const handleInstructionsEdit = () => {
    setInstructionsEditMode(true);
    setEditedInstructions(recipe.instructions.join('\n'));
  };

  const handleIngredientsSave = () => {
    setIngredientsChanged(false);
    setIngredientsEditMode(false);
  };

  const handleInstructionsSave = () => {
    setInstructionsChanged(false);
    setInstructionsEditMode(false);
  };

  const handleIngredientsChange = (event) => {
    setEditedIngredients(event.target.value);
    setIngredientsChanged(true);
  };

  const handleInstructionsChange = (event) => {
    setEditedInstructions(event.target.value);
    setInstructionsChanged(true);
  };

  const handleSubmitRating = () => {
    console.log('User Rating:', userRating);
    console.log('Comments:', comments);
    setUserRating(null);
    setComments('');
  };

  const handleBookmarkToggle = () => {
    if (bookmarked) {
      const updatedSavedRecipes = savedRecipes.filter((savedRecipe) => savedRecipe.id !== recipe.id);
      setSavedRecipes(updatedSavedRecipes);
    } else {
      setSavedRecipes([...savedRecipes, recipe]);
    }
    setBookmarked(!bookmarked);
    redirectToRecipes();
  };
  
  

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Box maxWidth="1400px" mx="auto" px={3} py={4}>
      <Typography className='headings'>COOKING TIME</Typography>
      <Typography variant="body1" className="textView">Cook Time: {recipe.cookingTime.cookTime}</Typography>
      <Typography variant="body1" className="textView">Resting Time: {recipe.cookingTime.restingTime}</Typography>
      <Typography variant="body1" className="textView">Servings: {recipe.cookingTime.servings}</Typography>
      <Typography variant="h4"  className='headings' style={{marginBottom:'8px'}}>INGREDIENTS</Typography>
      {ingredientsEditMode ? (
        <TextField
          value={editedIngredients}
          onChange={handleIngredientsChange}
          variant="outlined"
          multiline
          rows={8}
          fullWidth
        />
      ) : (
        <Typography variant="body1" className="textView"  sx={{ border: '1px solid grey', borderRadius: 1, padding: '8px', marginBottom: '8px'}}>
          {recipe.ingredients.map((ingredient, index) => (
            <React.Fragment key={index}>
              {ingredient}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      )}
      <Box display='flex' justifyContent='flex-end'>
      {ingredientsEditMode ? (
        <Button onClick={handleIngredientsSave} variant="contained" color="primary" mt={2} className='custom-save-button'>
          Save
        </Button>
      ) : (
        <Button onClick={handleIngredientsEdit} variant="contained" color="primary" mt={2} className='custom-save-button'>
          Edit
        </Button>
      )}
      </Box>
      <Typography variant="h4" className='headings' style={{marginBottom:'8px'}}>INSTRUCTIONS</Typography>
      
      {instructionsEditMode ? (
        <TextField
          value={editedInstructions}
          onChange={handleInstructionsChange}
          variant="outlined"
          multiline
          rows={8}
          fullWidth
        />
      ) : (
        <Typography variant="body1" className="textView"  sx={{ border: '1px solid grey', borderRadius: 1, padding: '8px', marginBottom: '8px'}}>
          {recipe.instructions.map((instruction, index) => (
            <React.Fragment key={index}>
              {instruction}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      )}
      <Box display='flex' justifyContent='flex-end'>
        {instructionsEditMode ? (
          <Button onClick={handleInstructionsSave} variant="contained" color="primary" mt={2} className='custom-save-button'>
            Save
          </Button>
        ) : (
          <Button onClick={handleInstructionsEdit} variant="contained" color="primary" mt={2} className='custom-save-button'>
            Edit
          </Button>
        )}
      </Box>
      <Typography variant="h6" className='headings'>VIDEO</Typography>
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <iframe
        width="60%"
        height="415"
        src={recipe.videoUrl}
        title="Recipe Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" className='headings'>RATINGS & REVIEWS</Typography>
        <Box display="flex" flexDirection="column"  >
          <Rating
            size="large"
            value={userRating || 0}
            onChange={handleRatingChange}
            precision={0.5}
            style={{margin:10}}
          />
          <Typography variant="h6" className='headings' style={{marginBottom:'10px'}}>COMMENTS</Typography>
          <TextField
            width="40"
            multiline
            rows={4}
            variant="outlined"
            value={comments}
            onChange={handleCommentsChange}
          />
          <Box mt={2} textAlign="center">
            <Button 
              onClick={handleSubmitRating} 
              variant="contained" 
              mt={2} 
              className= {disabledButton ? 'disabled-custom-save-button' : 'custom-save-button'} 
              disabled={userRating === null}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <IconButton onClick={handleBookmarkToggle}>
        <BookmarkIcon color={bookmarked ? 'secondary' : 'action'} />
      </IconButton> */}
    </Box>
  );
};

export default RecipeDetail;
