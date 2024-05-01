import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './HomeReusableCard.css';

const CustomCard = ({ title, content, imageUrl, linkTo, onClick, height , imageheight, margin, width}) => {

  return (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
      <Card className="custom-card" onClick={onClick} style={{ height: `${height}px`,margin: `${margin}px` , width : `${width}px`}}>
        <CardMedia component="img" src={imageUrl} alt={title} className="custom-card-media" style={{imageheight: `${height}px`}}/>
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
  height: PropTypes.number.isRequired,
  imageheight: PropTypes.number.isRequired,
  margin : PropTypes.number.isRequired, 
  width : PropTypes.number. isRequired
};

export default CustomCard;
