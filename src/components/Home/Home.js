import React, { useContext } from 'react';
import CardList from '../CardList';
import MainChekbox from '../MainCheckbox';
import CardsContext from '../../context/card-context';
import './Home.css';

const Home = () => {
    const cardContext = useContext(CardsContext);
    return (
        <>
            <MainChekbox />

            <button onClick={cardContext.handleCardDelete} className="btn__delete">
                Delete selected
            </button>
            <button onClick={cardContext.addCard} className="btn__add">
                Add card
            </button>

            <div className="cards">
                <CardList />
            </div>
        </>
    );
};

export default Home;
