import React from "react";
import ReusableMenuCard from './reusablemenucard';
import daltadka from '../../images/daltadkamenubackground.jpeg';
import paneerburji from '../../images/paneerburjimenubackground.jpeg';
import naatukodipulusu from '../../images/naatukodipulusumenubackground.jpeg';
import chickenfry from '../../images/chickenfrymenubackground.jpeg';

const MainCoursePage = () => {
    const maincourse = [
        { src: daltadka, alt: 'Dal Tadka', text: 'Dal Tadka' },
        { src: paneerburji, alt: 'Paneer Burji', text: 'Paneer Burji' },
        { src: naatukodipulusu, alt: 'Naatukodi Pulusu', text: 'Naatukodi Pulusu' },
        { src: chickenfry, alt: 'Chicken Fry', text: 'Chicken Fry' }
    ];

    return (
        <div className="common-container">
            {maincourse.map((maincourse, index) => (
                <ReusableMenuCard 
                    key={index} 
                    imageSrc={maincourse.src} 
                    altText={maincourse.alt} 
                    description={maincourse.text} 
                />
            ))}
        </div>
    );
};

export default MainCoursePage;