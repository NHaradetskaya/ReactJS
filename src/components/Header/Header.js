import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="title__header">
            <b>{props.name}</b>
        </div>
    );
};

export default Header;
