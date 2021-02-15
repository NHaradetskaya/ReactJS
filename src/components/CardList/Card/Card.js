import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import withLoadingDelay from '../../../hoc/withLoadingDelay';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flagCheck: false,
            editCheck: false,
            title: this.props.eachItem.name,
            info: this.props.eachItem.description,
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
        const { editCheck } = this.state;
        const { name, description } = this.props.eachItem;
        this.setState({
            editCheck: !editCheck,
            title: name,
            info: description,
        });
    };

    save = () => {
        const { title, info } = this.state;
        this.setState({
            editCheck: false,
        });
        this.props.onUpdateCardHandler(title, info);
    };

    changeTitleHandle = (event) => {
        this.setState({ title: event.target.value });
    };

    changeInfoHandle = (event) => {
        this.setState({ info: event.target.value });
    };

    render() {
        const { viewCheck, eachItem, checkboxFlag } = this.props;
        let { editCheck, title, info, flagCheck } = this.state;

        return (
            <div
                className={this.props.className}
                style={{
                    backgroundColor: flagCheck ? 'green' : 'white',
                    color: flagCheck ? 'white' : 'black',
                }}
            >
                <CardHeader
                    text={title}
                    onDoubleClick={this.props.onClicked}
                    isEdit={editCheck}
                    isView={viewCheck}
                    onSave={this.save}
                    onCancel={this.cancel}
                    onEdit={this.edit}
                    id={eachItem.id}
                    selected={flagCheck}
                    onSwitchColor={this.switchColor}
                    onChangeTitleHandle={this.changeTitleHandle}
                    checkboxFlag={checkboxFlag}
                />
                <div className="line" />
                <br />
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

Card.propTypes = {
    eachItem: PropTypes.object,
    viewCheck: PropTypes.bool,
};

export default withLoadingDelay(Card);
