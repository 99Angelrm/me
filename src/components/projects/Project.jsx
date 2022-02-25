import React from "react";
const Project = ({ link, src, title }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    };
    console.log(src)
    return (
        <div onClick={handleClick} className="projects__project pointer">
            <img src={src} alt={title} />
            <h5>{title}</h5>
        </div>
    );
};

export default Project;
