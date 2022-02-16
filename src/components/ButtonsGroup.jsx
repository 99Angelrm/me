import React from "react";
import Button from "./Button";

const ButtonsGroup = () => {
    const icons = [
        { name: "facebook", link: "www.facebook.com/ANGLRMRZ99" },
        { name: "twitter", link: "twitter.com/ANGLRMRZ" },
        { name: "linkedin", link: "www.linkedin.com/in/anglrmrz/" },
    ];

    return (
        <div className="buttonGroup__container mt-5">
            {icons.map((icon) => (
                <Button {...icon} key={icon.name} />
            ))}
        </div>
    );
};

export default ButtonsGroup;
