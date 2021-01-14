import React, { Component } from 'react';
import './Card.css';
import {
    AiFillEdit,
    AiFillDownCircle,
    AiFillCloseCircle,
} from 'react-icons/ai';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flagCheck: false,
            editCheck: false,
            title: this.props.name,
            text: this.props.children,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    switchColor = () => {
        this.setState({ flagCheck: !this.state.flagCheck });
    };

    edit = () => {
        this.setState({ editCheck: true, flagCheck: false });
    };

    cancel = () => {
        this.setState({
            editCheck: !this.state.editCheck,
            flagCheck: false,
            title: this.props.name,
            text: this.props.children,
        });
    };

    save = () => {
        this.setState({
            editCheck: false,
            flagCheck: false,
        });
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { flagCheck, editCheck, title, text } = this.state;
        return (
            <div
                className="section"
                style={{
                    backgroundColor: flagCheck ? 'green' : 'white',
                    color: flagCheck ? 'white' : 'black',
                }}>
                <div className="section__title">
                    {!editCheck ? (
                        <div className="title__block">
                            <h3 className="title">{title}</h3>
                            <div>
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    checked={flagCheck}
                                    onChange={this.switchColor}
                                />
                                <button
                                    onClick={this.edit}
                                    className="btn__edit">
                                    <AiFillEdit />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="title__block">
                            <textarea
                                name="title"
                                value={title}
                                onChange={this.handleChange}
                            />
                            <div>
                                <button
                                    onClick={this.save}
                                    className="btn__save">
                                    <AiFillDownCircle /> Save
                                </button>
                                <button
                                    onClick={this.cancel}
                                    className="btn__cancel">
                                    <AiFillCloseCircle /> Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="line" />
                <div className="section__text">
                    {!editCheck ? (
                        <p>{text}</p>
                    ) : (
                        <textarea
                            name="text"
                            value={text}
                            onChange={this.handleChange}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Card;
