import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './Input';
import './SignIn.css';

class SignIn extends Component {
    state = {
        signInForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'username',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                touched: false,
                valid: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password',
                },
                value: '',
                validation: {
                    required: true,
                    isPassword: true,
                    minLength: 8,
                },
                touched: false,
                valid: false,
            },
        },
        submitted: false,
        formIsValid: false,
    };

    saveUserData = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
    };

    checkValidation = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isPassword && rules.minLength) {
            const pattern = /(?=.*?[a-z])(?=.*?[0-9])/i;
            isValid =
                pattern.test(value) &&
                value.length >= rules.minLength &&
                isValid;
        }

        if (rules.isEmail) {
            const pattern = /\S+@\S+\.\S+/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    };

    inputChangeHadler = (event, key) => {
        const updatedForm = {
            ...this.state.signInForm,
        };
        const updatedFormElement = { ...updatedForm[key] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidation(
            updatedFormElement.value,
            updatedFormElement.validation,
        );
        updatedFormElement.touched = true;
        updatedForm[key] = updatedFormElement;

        let formIsValid = true;

        for (let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid;
        }

        this.setState({ signInForm: updatedForm, formIsValid: formIsValid });
    };

    showForm = () => (
        <form onSubmit={this.saveUserData}>
            <div className="login__page">
                <div className="form">
                    {Object.entries(this.state.signInForm).map(
                        ([key, value]) => (
                            <Input
                                key={key}
                                elementType={value.elementType}
                                elementConfig={value.elementConfig}
                                value={value.value}
                                invalid={!value.valid}
                                touched={value.touched}
                                onChange={(event) =>
                                    this.inputChangeHadler(event, key)
                                }
                            />
                        ),
                    )}
                    <button
                        className="btn__signIn"
                        disabled={!this.state.formIsValid}
                    >
                        Sing in
                    </button>
                </div>
            </div>
        </form>
    );

    checkRedirection = () =>
        <Redirect to="/" /> && this.state.submitted 

    render() {
        return (
            <>
                {this.checkRedirection()}
                {this.showForm()}
            </>
        );
    }
}

export default SignIn;
