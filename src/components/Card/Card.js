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
            info: this.props.children,
            tempTitle: '',
            tempInfo: '',
        };
    }

    componentDidUpdate = () => {
        const { viewCheck } = this.props;
        const { editCheck } = this.state;
        if (viewCheck && editCheck) this.cancel();
    };

    switchColor = () => {
        const { flagCheck } = this.state;
        this.setState({ flagCheck: !flagCheck });
    };

    edit = () => {
        this.setState({ editCheck: true, flagCheck: false });
    };

    cancel = () => {
        const { tempTitle, tempInfo, info, title, editCheck } = this.state;
        this.setState({
            editCheck: !editCheck,
            title: tempTitle || title,
            info: tempInfo || info,
        });
    };

    save = () => {
        const { title, info } = this.state;
        this.setState({
            editCheck: false,
            tempTitle: title,
            tempInfo: info,
        });
    };

    changeTitleHandle = event => {
        const { title } = this.state;
        if (this.state.tempTitle === '') {
            this.setState({ tempTitle: title });
        }
        this.setState({ title: event.target.value });
    };

    changeInfoHandle = event => {
        const { info } = this.state;
        if (this.state.tempInfo === '') {
            this.setState({ tempInfo: info });
        }
        this.setState({ info: event.target.value });
    };

    render() {
        const { viewCheck } = this.props;
        let { flagCheck, editCheck, title, info } = this.state;

        let caption = <h3 className="title">{title}</h3>;
        let text = <p>{info}</p>;

        if (editCheck && !viewCheck) {
            caption = (
                <textarea value={title} onChange={this.changeTitleHandle} />
            );
            text = <textarea value={info} onChange={this.changeInfoHandle} />;
        }

        return (
            <div
                className="section"
                style={{
                    backgroundColor: flagCheck ? 'green' : 'white',
                    color: flagCheck ? 'white' : 'black',
                }}
            >
                <div className="section__title">
                    <div className="title__block">
                        {caption}
                        {editCheck && !viewCheck ? (
                            <div>
                                <button
                                    onClick={this.save}
                                    className="btn__save"
                                >
                                    <AiFillDownCircle /> Save
                                </button>
                                <button
                                    onClick={this.cancel}
                                    className="btn__cancel"
                                >
                                    <AiFillCloseCircle /> Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <input
                                    className="checkbox__swicthColor"
                                    type="checkbox"
                                    checked={flagCheck}
                                    onChange={this.switchColor}
                                />
                                {!viewCheck && (
                                    <button
                                        onClick={this.edit}
                                        className="btn__edit"
                                    >
                                        <AiFillEdit />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="line" />
                <div className="section__text">{text}</div>
            </div>
        );
    }
}

export default Card;
