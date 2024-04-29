import React from "react";
import './commoncard.css';

const ReusableMenuCard = ({ imageSrc, altText, description }) => {
    return (
        <div className="reusable-menu-card">
            <img src={imageSrc} alt={altText} className="common-image" />
            <div className="menu-card-content">
                <p className="common-text">{description}</p>
            </div>
        </div>
    );
};

export default ReusableMenuCard;