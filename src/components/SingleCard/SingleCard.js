import React from 'react';
import { connect } from 'react-redux';
import './SingleCard.css';
import Card from '../CardList/Card';
import { fetchCards, updateCardHandler, select } from '../../store/actions';

const SingleCard = props => {
    const { cards, onSelectCard, onUpdateCard } = props;
    const { id } = props.match.params;

    return cards
        .filter((item) => item.id === id)
        .map((item) => {
            return (
                <Card
                    eachItem={item}
                    key={item.id}
                    onSelectCardHandler={() => onSelectCard(item.id)}
                    onUpdateCardHandler={(title, info) =>
                        onUpdateCard(item.id, title, info)
                    }
                    className="container"
                    checkboxFlag = {false}
                />
            );
        });
};

const mapToStateProps = (state) => {
    return {
        cards: state.list,
    };
};

const mapToDispatchProps = {
    onFetchCards: fetchCards,
    onUpdateCard: updateCardHandler,
    onSelectCard: select,
};

export default connect(mapToStateProps, mapToDispatchProps)(SingleCard);
