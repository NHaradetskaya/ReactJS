import React from 'react';
import './Header.css';

import { connect } from 'react-redux';
import Navigation from '../Navigation';

const Header = (props) => {
    return (
        <div className="title__header">
            <b className="header">{props.name}</b>
            <Navigation />
            <div className="section__user">
                {props.logIn ? (
                    <div>
                        <div className="text__user">
                            Hello, {props.username}
                        </div>
                    </div>
                ) : null}

                <button type="button" id="counter" className="btn btn-primary">
                    Amount of cards
                    <span className="badge bg-secondary">
                        {props.list.length}
                    </span>
                </button>
            </div>
        </div>
    );
};
const mapToStateProps = (state) => {
    return {
        list: state.cards.list,
        logIn: state.auth.logIn,
        username: state.auth.username,
    };
};


export default connect(mapToStateProps)(Header);
