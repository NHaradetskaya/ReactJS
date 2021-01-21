import React, { Component } from 'react';
import './Card.css';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flagCheck: false,
            editCheck: false,
            title: this.props.eachItem.name,
            info: this.props.eachItem.description,
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
        this.props.onSelectCardHandler();
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
        const { viewCheck, eachItem } = this.props;
        let { editCheck, title, info, flagCheck } = this.state;

        return (
            <div
                className="section"
                style={{
                    backgroundColor: flagCheck ? 'green' : 'white',
                    color: flagCheck ? 'white' : 'black',
                }}
            >
                <CardHeader
                    text={title}
                    isEdit={editCheck}
                    isView={viewCheck}
                    onSave={this.save}
                    onCancel={this.cancel}
                    onEdit={this.edit}
                    id={eachItem.id}
                    selected={flagCheck}
                    onSwitchColor={this.switchColor}
                    onChangeTitleHandle={this.changeTitleHandle}
                />
                <div className="line" />
                <CardBody
                    info={info}
                    isEdit={editCheck}
                    isView={viewCheck}
                    onChangeInfoHandle={this.changeInfoHandle}
                />
            </div>
        );
    }
}

export default Card;
