import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { useHistory } from 'react-router-dom';
import { fetchCards, updateCardHandler, select } from '../../store/actions';

const CardList = ({cards, viewCheck, onSelectCard, onUpdateCard}) => {
    const history = useHistory();
    const postSelectedHandler = card => () => {
        history.push(`card/${card.id}`);
    };

    return cards.map(item => {
        return (
            <Card
                eachItem={item}
                key={item.id}
                viewCheck={viewCheck}
                onSelectCardHandler={() => onSelectCard(item.id)}
                onUpdateCardHandler={(title, info) =>
                    onUpdateCard(item.id, title, info)
                }
                onClicked={postSelectedHandler(item)}
                className="section"
                checkboxFlag
            />
        );
    });
};

const mapToStateProps = state => {
    return {
        cards: state.list,
        viewCheck: state.viewCheck,
    };
};

const mapToDispatchProps = {
    onSelectCard: select,
    onUpdateCard: updateCardHandler,
    onFetchCards: fetchCards,
};

export default connect(mapToStateProps, mapToDispatchProps)(CardList);
