import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ReusableMenuCard from './reusablemenucard';
import mushroompulao from '../../images/mushroompulaomenubackground.jpeg';
import paneerpulao from '../../images/paneerpulaomenubackground.jpeg';
import hyderabadichickendumbiryani from '../../images/hyderabadichickedbmenubackground.jpeg';
import muttondumbiryani from '../../images/muttondumbiryanimenubackground.jpeg';

const PulaosandbiryanisPage = () => {
    const pulaosandbiryanis = [
        { src: mushroompulao, alt: 'Mushroom Pulao', text: 'Mushroom Pulao', link: '/recipedetails/mushroom-pulao' },
        { src: paneerpulao, alt: 'Paneer Pulao', text: 'Paneer Pulao', link: '/recipedetails/paneer-pulao' },
        { src: hyderabadichickendumbiryani, alt: 'Hyderabadi Chicken Dum Biryani', text: 'Hyderabadi Chicken Dum Biryani', link: '/recipedetails/hyderabadi-chicken-dum-biryani' },
        { src: muttondumbiryani, alt: 'Mutton Dum Biryani', text: 'Mutton Dum Biryani', link: '/recipedetails/mutton-dum-biryani' }
    ];

    return (
        <div className="common-container">
            {pulaosandbiryanis.map((recipe, index) => (
                <Link to={recipe.link} key={index}>
                    <ReusableMenuCard 
                        imageSrc={recipe.src} 
                        altText={recipe.alt} 
                        description={recipe.text} 
                    />
                </Link>
            ))}
        </div>
    );
};

export default PulaosandbiryanisPage;
