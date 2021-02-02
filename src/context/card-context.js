import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

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
        list: [],
        viewCheck: false,
    };

    componentDidMount() {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then((response) => {
                const cards = response.data.slice(0, 15);
                const updatedCards = cards.map((card) => {
                    return {
                        id: card.Number,
                        name: card.Name,
                        description: card.About,
                        selected: false,
                    };
                });
                this.setState({ list: updatedCards });
            });
    }

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
