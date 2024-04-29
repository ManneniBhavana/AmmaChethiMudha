import React from "react";
import ReusableMenuCard from './reusablemenucard';
import mushroompulao from '../../images/mushroompulaomenubackground.jpeg';
import paneerpulao from '../../images/paneerpulaomenubackground.jpeg';
import hyderabadichickendumbiryani from '../../images/hyderabadichickedbmenubackground.jpeg';
import muttondumbiryani from '../../images/muttondumbiryanimenubackground.jpeg';

const PulaosandbiryanisPage = () => {
    const pulaosandbiryanis = [
        { src: mushroompulao, alt: 'Mushroom Pulao', text: 'Mushroom Pulao' },
        { src: paneerpulao, alt: 'Paneer Pulao', text: 'Paneer Pulao' },
        { src: hyderabadichickendumbiryani, alt: 'Hyderabadi Chicken Dum Biryani', text: 'Hyderabadi Chicken Dum Biryani' },
        { src: muttondumbiryani, alt: 'Mutton Dum Biryani', text: 'Mutton Dum Biryani' }
    ];

    return (
        <div className="common-container">
            {pulaosandbiryanis.map((pulaosandbiryanis, index) => (
                <ReusableMenuCard 
                    key={index} 
                    imageSrc={pulaosandbiryanis.src} 
                    altText={pulaosandbiryanis.alt} 
                    description={pulaosandbiryanis.text}
                />
            ))}
        </div>
    );
};

export default PulaosandbiryanisPage;