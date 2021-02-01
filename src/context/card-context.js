import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CardsContext = React.createContext({
    list: [],
    viewCheck: false,
    selectCardHandler: () => {},
    handleCardDelete: () => {},
    addCard: () => {},
    switchView: () => {},
});

export class CardsContextProvider extends Component {
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

    selectCardHandler = id => {
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

    addCard = () => {
        const { list } = this.state;
        const newList = {
            id: uuidv4(),
            name: window.prompt('Enter card title'),
            description: window.prompt('Enter card content'),
            selected: false,
        };

        this.setState({
            list: [...list, newList],
        });
    };

    render() {
        return (
            <CardsContext.Provider
                value={{
                    list: this.state.list,
                    viewCheck: this.state.viewCheck,
                    switchView: this.switchView,
                    selectCardHandler: this.selectCardHandler,
                    handleCardDelete: this.handleCardDelete,
                    addCard: this.addCard,
                }}
            >
                {this.props.children}
            </CardsContext.Provider>
        );
    }
}

export default CardsContext;
