import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ReusableMenuCard from './reusablemenucard';
import gulabjamun from '../../images/gulabjamunmenubackground.jpeg';
import paayasam from '../../images/paayasammenubackground.jpeg';
import bobbatlu from '../../images/bobbatlumenubackground.jpeg';
import doublekameetha from '../../images/doublekameethamenubackground.jpeg';

const DessertsPage = () => {
    const desserts = [
        { src: gulabjamun, alt: 'Gulab Jamun', text: 'Gulab Jamun', link: '/recipedetails/gulab-jamun' },
        { src: paayasam, alt: 'Paayasam', text: 'Paayasam', link: '/recipedetails/paayasam' },
        { src: bobbatlu, alt: 'Bobbatlu', text: 'Bobbatlu', link: '/recipedetails/bobbatlu' },
        { src: doublekameetha, alt: 'Double Ka Meetha', text: 'Double Ka Meetha', link: '/recipedetails/double-ka-meetha' }
    ];

    return (
        <div className="common-container">
            {desserts.map((dessert, index) => (
                <Link to={dessert.link} key={index}>
                    <ReusableMenuCard 
                        imageSrc={dessert.src} 
                        altText={dessert.alt} 
                        description={dessert.text} 
                    />
                </Link>
            ))}
        </div>
    );
};

export default DessertsPage;
