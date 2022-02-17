import React from "react";
import calc from "../../resources/Calc.jpg";
const Project = () => {
    const handleClick = () => {
        window.open("https://react-calculator-f0a79.web.app/", "_blank");
    };
    return (
        <div onClick={handleClick} className="projects__project pointer">
            <img src={calc} alt="calculator" />
            <h5>Calculator App</h5>
        </div>
    );
};

export default Project;
