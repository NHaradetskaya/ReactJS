import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [flag, setFlag] = useState(false);

    const switchColor = () => setFlag(!flag);

    return (
        <div
            className="Section"
            style={{
                backgroundColor: flag ? 'green' : 'white',
                color: flag ? 'white' : 'black',
            }}
        >
            <div className="Section__title">
                <h3>{props.name}</h3>
                <input
                    className="Checkbox"
                    type="checkbox"
                    checked={flag}
                    onChange={switchColor}
                />
            </div>

            <div className="Line" />
            <div className="Section__text">
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default Card;
