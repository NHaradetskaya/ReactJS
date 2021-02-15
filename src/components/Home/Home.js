import React from 'react';
import CardList from '../CardList';
import MainChekbox from '../MainCheckbox';
import { connect } from 'react-redux';
import { create, remove, fetchCards } from '../../store/actions';

import './Home.css';

const Home = ({ onRemoveCard, onAddCard }) => {

    return (
        <>
            <MainChekbox />

            <button onClick={onRemoveCard} className="btn__delete">
                Delete selected
            </button>
            <button onClick={onAddCard} className="btn__add">
                Add card
            </button>

            <div className="cards">
                <CardList />
            </div>
        </>
    );
};

const mapToDispatchProps = {
    onAddCard: create,
    onRemoveCard: remove,
    onFetchCards: fetchCards,
};

export default connect(null, mapToDispatchProps)(Home);
