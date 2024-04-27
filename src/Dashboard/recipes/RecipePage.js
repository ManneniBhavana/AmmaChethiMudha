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
          subItem: ['Gulab Jamun', 'Paayasam', 'Bobbatlu', 'Double Ka Meetha'],
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

  const renderAccordion = () => {
    return recipes.map((each, idx) => {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}content`}
            id={`panel${idx}header`}
            disableRipple={false}
            disableTouchRipple={false}
          >
            <h3 style={{ color: '#c25700' }}>{each.title}</h3>
          </AccordionSummary>
          <AccordionDetails>
            {each.items.map((subItems, id) => {
              return (
                <div
                  component='div'
                  key={id}
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  {subItems.title ? (
                    <h4 style={{ color: '#c25700' }}>{subItems.title} : </h4>
                  ) : null}
                  {subItems.subItem.map((a) => (
                    <Link to={`${a.toLowerCase().replace(/\s/g, '')}`}>
                      <Button
                        style={{
                          textTransform: 'capitalize',
                          textDecoration: 'underline',
                          color: 'black',
                        }}
                      >
                        {a}
                      </Button>
                    </Link>
                  ))}
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderAccordion()}</div>;
}