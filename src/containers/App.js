import Header from '../components/Header';
import CardList from '../components/CardList';
import React, { Component } from 'react';
import MainChekbox from '../components/MainCheckbox';
import './App.css';

class App extends Component {
    state = {
        list: [
            {
                id: 1,
                name: 'Lion',
                description: 'Some text',
                selected: false,
            },
            {
                id: 2,
                name: 'Cat',
                description: 'Some text',
                selected: false,
            },
            {
                id: 3,
                name: 'Ferret',
                description: 'Some text',
                selected: false,
            },
            {
                id: 4,
                name: 'Dog',
                description: 'Some text',
                selected: false,
            },
            {
                id: 5,
                name: 'Opossum',
                description: 'Some text',
                selected: false,
            },
            {
                id: 6,
                name: 'Mouse',
                description: 'Some text',
                selected: false,
            },
            {
                id: 7,
                name: 'Tiger',
                description: 'Some text',
                selected: false,
            },
            {
                id: 8,
                name: 'Horse',
                description: 'Some text',
                selected: false,
            },
        ],
        viewCheck: false,
    };

    switchView = () => {
        this.setState({
            viewCheck: !this.state.viewCheck,
        });
    };

    selectCardHandler = (id) => {
        this.setState((state) => {
            return {
                list: state.list.map((item) =>
                    item.id === id
                        ? { ...item, selected: !item.selected }
                        : item,
                ),
            };
        });
    };

    handleCardDelete = () => {
        this.setState((state) => {
            return {
                list: state.list.filter((item) => !item.selected),
            };
        });
    };

    render() {
        const { viewCheck } = this.state;
        return (
            <>
                <Header name="Animals" />
                <MainChekbox
                    viewCheck={viewCheck}
                    switchView={this.switchView}
                />
                <button className="btn__delete" onClick={this.handleCardDelete}>
                    Delete selected
                </button>
                <div className="cards">
                    <CardList
                        list={this.state.list}
                        onSelectCardHandler={this.selectCardHandler}
                        viewCheck={viewCheck}
                    />
                </div>
            </>
        );
    }
}

export default App;
