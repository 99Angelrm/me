import React from "react";
import { useNavigate } from "react-router-dom";
import Project from "./Project";
import Projects from "./Projects";

const ProjectsScreen = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <div className="main__background">
            <div className="projects__container animate__animated animate__fadeIn">
                <Projects/>
                <div className="projects__goBack">
                    <i onClick={handleClick} className="fa-solid fa-share pointer"></i>
                </div>
            </div>
        </div>
    );
};

export default ProjectsScreen;
