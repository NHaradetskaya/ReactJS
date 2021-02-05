import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SignIn.css';

class SignIn extends Component {
    state = {
        userName: '',
        password: '',
        submitted: false,
    };

    changeUserName = event => {
        this.setState({ userName: event.target.value });
    };

    changePassword = event => {
        this.setState({ password: event.target.value });
    };

    saveUserData = () => {
        this.setState({ submitted: true });
    };

    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/" />;
        }
        return (
            <>
                {redirect}
                <div className="login__page">
                    <div className="form">
                        <input
                            type="text"
                            placeholder="username"
                            onChange={this.changeUserName}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            onChange={this.changePassword}
                        />
                        <button
                            onClick={this.saveUserData}
                            className="btn__signIn"
                        >
                            Sing in
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default SignIn;
