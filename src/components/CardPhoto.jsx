import React from "react";
import Angel from "../resources/Angel.jpg";
const CardPhoto = () => {
    return (
        <div className="card__image-container">
            <img className="card__image mt-2" src={Angel} alt="Angel Ramirez" />
        </div>
    );
};

export default CardPhoto;
