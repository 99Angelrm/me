import React from "react";
import { useNavigate } from "react-router-dom";

const GoToProjects = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("projects");
    };
    return (
        <div className="goto__container">
            <div onClick={handleClick} className="goto__button pointer">
                <h5>Un vistazo a mis proyectos</h5>
                <i className="fa-solid fa-share"></i>
            </div>
        </div>
    );
};

export default GoToProjects;
