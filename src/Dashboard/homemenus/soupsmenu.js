import React from "react";
import ReusableMenuCard from './reusablemenucard';
import vegetablesoup from '../../images/vegetablesoupmenubackground.jpeg';
import tomatosoup from '../../images/tomatosoupmenubackground.jpeg';
import chickenhotandsour from '../../images/chickenhotandsourmenubackground.jpeg';
import muttonpaya from '../../images/muttonpayamenubackground.jpeg';

const SoupsPage = () => {
    const soups = [
        { src: vegetablesoup, alt: 'Vegetable Soup', text: 'Vegetable Soup' },
        { src: tomatosoup, alt: 'Tomato Soup', text: 'Tomato Soup' },
        { src: chickenhotandsour, alt: 'Chicken Hot & Sour', text: 'Chicken Hot & Sour' },
        { src: muttonpaya, alt: 'Mutton Paya', text: 'Mutton Paya' }
    ];

    return (
        <div className="common-container">
            {soups.map((soup, index) => (
                <ReusableMenuCard 
                    key={index} 
                    imageSrc={soup.src} 
                    altText={soup.alt} 
                    description={soup.text} 
                />
            ))}
        </div>
    );
};

export default SoupsPage;