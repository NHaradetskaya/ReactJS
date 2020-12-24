import React from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="Section">
            <div className="Section__title">{props.name}</div>
            <div className="Line" />
            <div className="Section__text">
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Card;
