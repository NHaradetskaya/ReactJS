import Header from '../components/Header';
import CardList from '../components/CardList';
import React, { Component } from 'react';
import MainChekbox from '../components/MainCheckbox';
import './App.css';
import CardsContext, { CardsContextProvider } from '../context/card-context';

class App extends Component {
    render() {
        return (
            <CardsContextProvider>
                <Header name="Animals" />
                <MainChekbox />
                <CardsContext.Consumer>
                    {context => (
                        <>
                            <button
                                onClick={context.handleCardDelete}
                                className="btn__delete"
                            >
                                Delete selected
                            </button>
                            <button
                                onClick={context.addCard}
                                className="btn__add"
                            >
                                Add card
                            </button>
                        </>
                    )}
                </CardsContext.Consumer>

                <div className="cards">
                    <CardList />
                </div>
            </CardsContextProvider>
        );
    }
}

export default App;
