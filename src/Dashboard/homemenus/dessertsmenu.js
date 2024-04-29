import React from "react";
import ReusableMenuCard from './reusablemenucard';
import gulabjamun from '../../images/gulabjamunmenubackground.jpeg';
import paayasam from '../../images/paayasammenubackground.jpeg';
import bobbatlu from '../../images/bobbatlumenubackground.jpeg';
import doublekameetha from '../../images/doublekameethamenubackground.jpeg';

const DessertsPage = () => {
    const desserts = [
        { src: gulabjamun, alt: 'Gulab Jamun', text: 'Gulab Jamun' },
        { src: paayasam, alt: 'Paayasam', text: 'Paayasam' },
        { src: bobbatlu, alt: 'Bobbatlu', text: 'Bobbatlu' },
        { src: doublekameetha, alt: 'Double Ka Meetha', text: 'Double Ka Meetha' }
    ];

    return (
        <div className="common-container">
            {desserts.map((dessert, index) => (
                <ReusableMenuCard 
                    key={index} 
                    imageSrc={dessert.src} 
                    altText={dessert.alt} 
                    description={dessert.text} 
                />
            ))}
        </div>
    );
};

export default DessertsPage;
