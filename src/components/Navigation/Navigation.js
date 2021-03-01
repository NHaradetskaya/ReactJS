import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/reducers/authReducer';

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                {props.admin ? (
                    <li>
                        <NavLink
                            to={{
                                pathname: '/settings',
                            }}
                        >
                            Settings
                        </NavLink>
                    </li>
                ) : null}

                {props.logIn ? (
                    <li onClick={() => props.onLogOut()}>
                        <NavLink to={{ pathname: '/sign-in' }}>Log Out</NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink
                            to={{
                                pathname: '/sign-in',
                            }}
                        >
                            Sign In
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

const mapToStateProps = (state) => {
    return {
        admin: state.auth.admin,
        logIn: state.auth.logIn,
    };
};

const mapToDispatchProps = {
    onLogOut: logOut,
};

export default connect(mapToStateProps, mapToDispatchProps)(Navigation);
