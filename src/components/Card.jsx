import React from "react";
import ButtonsGroup from "./ButtonsGroup";
import CardPhoto from "./CardPhoto";
import CardText from "./CardText";
import "animate.css";

const Card = () => {
    return (
        <div className="card__background animate__animated animate__fadeIn">
            <CardPhoto />
            <CardText />
            <ButtonsGroup />
        </div>
    );
};

export default Card;
