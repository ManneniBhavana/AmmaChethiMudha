import React from "react";
import { Link } from "react-router-dom";
import ReusableMenuCard from './reusablemenucard';
import vegetablesoup from '../../images/vegetablesoupmenubackground.jpeg';
import tomatosoup from '../../images/tomatosoupmenubackground.jpeg';
import chickenhotandsour from '../../images/chickenhotandsourmenubackground.jpeg';
import muttonpaya from '../../images/muttonpayamenubackground.jpeg';

const SoupsPage = () => {
    const soups = [
        { src: vegetablesoup, alt: 'Vegetable Soup', text: 'Vegetable Soup', link: '/recipedetails/vegetable-soup' },
        { src: tomatosoup, alt: 'Tomato Soup', text: 'Tomato Soup', link: '/recipedetails/tomato-soup' },
        { src: chickenhotandsour, alt: 'Chicken Hot & Sour', text: 'Chicken Hot & Sour', link: '/recipedetails/chicken-hot-and-sour' },
        { src: muttonpaya, alt: 'Mutton Paya', text: 'Mutton Paya', link: '/recipedetails/mutton-paya' }
    ];

    return (
        <div className="common-container">
            {soups.map((soup, index) => (
                <Link to={soup.link} key={index}>
                    <ReusableMenuCard 
                        imageSrc={soup.src} 
                        altText={soup.alt} 
                        description={soup.text} 
                    />
                </Link>
            ))}
        </div>
    );
};

export default SoupsPage;
