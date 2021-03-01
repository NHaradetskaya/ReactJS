import React, { Component } from 'react';
import CardList from '../CardList';
import { connect } from 'react-redux';
import { create, remove, fetchCards } from '../../store/actions/actions';

import './Home.css';

class Home extends Component {
    componentDidMount() {
        const { cards, onFetchCards } = this.props;
        if (!cards || cards.length === 0) {
            onFetchCards();
        }
    }

    render() {
        const { onRemoveCard, onAddCard } = this.props;

        return (
            <>
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
    }
}
const mapToStateProps = state => {
    return {
        cards: state.cards.list,
    };
}

const mapToDispatchProps = {
    onAddCard: create,
    onRemoveCard: remove,
    onFetchCards: fetchCards,
};

export default connect(mapToStateProps, mapToDispatchProps)(Home);
