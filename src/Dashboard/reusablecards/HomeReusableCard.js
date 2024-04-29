import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './HomeReusableCard.css';

const CustomCard = ({ title, content, imageUrl, linkTo, onClick }) => {
  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <Card className="custom-card" onClick={onClick}>
        <CardMedia component="img" src={imageUrl} alt={title} className="custom-card-media" />
        <CardContent className="custom-card-content">
          <Typography variant="h6" className="custom-card-title">{title}</Typography>
          <Typography variant="body1" className="custom-card-content-body">{content}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomCard;
