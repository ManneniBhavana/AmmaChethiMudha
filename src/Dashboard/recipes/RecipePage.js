import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function RecipePage() {
  const recipes = [
    {
      title: 'Desserts',
      items: [
        {
          title: '',
          subItem: [
          'Gulab Jamun', 
          'Paayasam', 
          'Bobbatlu', 
          'Double Ka Meetha'
        ],
        },
      ],
    },
    {
      title: 'Soups',
      items: [
        {
          title: 'Veg',
          subItem: [
            'Vegetable Soup',
            'Tomato Soup',
            'Corn Soup',
            'Indian Spiced Lentil Soup',
          ],
        },
        {
          title: 'Non-Veg',
          subItem: [
            'Chicken Manchow Soup',
            'Chicken Hot & Sour',
            'Chicken Bamboo Shoots Soup',
            'Mutton Paya',
          ],
        },
      ],
    },
    {
      title: 'Main Course',
      items: [
        {
          title: 'Veg',
          subItem: [
            'Mudha Pappu',
            'Dal Tadka',
            'Paneer Burji',
            'Guthi Vankaya',
          ],
        },
        {
          title: 'Non-Veg',
          subItem: [
            'Natukodi Pulusu',
            'Chicken Fry',
            'Mutton Keema',
            'Mutton Pulusu',
          ],
        },
      ],
    },
    {
      title: "Biryani's & Pulao's",
      items: [
        {
          title: 'Veg',
          subItem: [
            'Mushroom Pulao',
            'Paneer Pulao',
            'Vegetable Dum Biryani',
            'Paneer Dum Biryani',
          ],
        },
        {
          title: 'Non-Veg',
          subItem: [
            'Hyderabad Chicken Dum Biryani',
            'Chettinad Chicken Pulao',
            'Spicy Mutton Pulao',
            'Mutton Keema Pulao',
            'Mutton Dum Biryani',
          ],
        },
      ],
    },
    {
      title: 'Beverages',
      items: [
        {
          title: 'Cocktails',
          subItem: [
            'Pina Colada',
            'Screw Driver',
            'Mango Mojito',
            'Virgin Mojito',
          ],
        },
      ],
    },
  ];


  const handleRecipeClick = (recipeName) => {
    // Redirect to RecipeDetails page for the clicked recipe
    console.log(`Redirecting to RecipeDetails for: ${recipeName}`);
    // Replace the console.log with the redirection logic
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
      <div style={{ width: '60%' }}>
        {recipes.map((each, idx) => (
          <Accordion key={idx} style={{ marginBottom: '50px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}content`}
              id={`panel${idx}header`}
              disableRipple={false}
              disableTouchRipple={false}
            >
              <h3 style={{ color: '#c25700', margin: 0 }}>{each.title}</h3>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
              {each.items.map((subItems, id) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
                  {subItems.title && <h4 style={{ color: '#c25700', margin: 0 }}>{subItems.title}</h4>}
                  {subItems.subItem.map((title, index) => (
                    <Link
                      key={index}
                      to={`/recipedetails/${title.toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        onClick={() => handleRecipeClick(title)}
                        style={{
                          textTransform: 'capitalize',
                          color: 'black',
                          marginBottom: '5px',
                        }}
                      >
                        {title}
                      </Button>
                    </Link>
                  ))}
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}