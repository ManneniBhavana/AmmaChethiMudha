import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ReusableMenuCard from './reusablemenucard';
import daltadka from '../../images/daltadkamenubackground.jpeg';
import paneerburji from '../../images/paneerburjimenubackground.jpeg';
import naatukodipulusu from '../../images/naatukodipulusumenubackground.jpeg';
import chickenfry from '../../images/chickenfrymenubackground.jpeg';

const MainCoursePage = () => {
    const maincourse = [
        { src: daltadka, alt: 'Dal Tadka', text: 'Dal Tadka', link: '/recipedetails/dal-tadka' },
        { src: paneerburji, alt: 'Paneer Burji', text: 'Paneer Burji', link: '/recipedetails/paneer-burji' },
        { src: naatukodipulusu, alt: 'Naatukodi Pulusu', text: 'Naatukodi Pulusu', link: '/recipedetails/naatukodi-pulusu' },
        { src: chickenfry, alt: 'Chicken Fry', text: 'Chicken Fry', link: '/recipedetails/chicken-fry' }
    ];

    return (
        <div className="common-container">
            {maincourse.map((maincourse, index) => (
                <Link to={maincourse.link} key={index}>
                    <ReusableMenuCard 
                        imageSrc={maincourse.src} 
                        altText={maincourse.alt} 
                        description={maincourse.text} 
                    />
                </Link>
            ))}
        </div>
    );
};

export default MainCoursePage;
