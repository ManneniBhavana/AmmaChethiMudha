import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ReusableCard.css'; // Import the CSS file

const CustomCard = ({ title, content, imageUrl }) => {
  return (
    <Card className="custom-card">
      <CardMedia component="img" src={imageUrl} alt={title} className="custom-card-media" />
      <CardContent className="custom-card-content">
        <Typography variant="h6" className="custom-card-title">{title}</Typography>
        <Typography variant="body1" className="custom-card-content-body">{content}</Typography>
      </CardContent>
    </Card>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CustomCard;
