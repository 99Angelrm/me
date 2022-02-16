import React from "react";

const Button = ({ name, link }) => {
    const handlerClick = () => {
        window.open(`https://${link}`, "_blank");
    };

    return (
        <i
            onClick={handlerClick}
            className={`fa-brands fa-${name} button__icon pointer ${name}`}
        ></i>
    );
};

export default Button;
