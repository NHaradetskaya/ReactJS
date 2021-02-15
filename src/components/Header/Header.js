import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {

    return (
        <div className="title__header">
            <b className="header">{props.name}</b>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={{
                                pathname: '/sign-in',
                            }}
                        >
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button type="button" id="counter" className="btn btn-primary">
                Amount of cards
                <span className="badge bg-secondary">
                    {props.list.length}
                </span>
            </button>
        </div>
    );
};
const mapToStateProps = (state) => {
    return {
        list: state.list,
    };
};

export default connect(mapToStateProps)(Header);
