import {
    FETCH_DATA,
    UPDATE_CARD,
    ADD_CARD,
    REMOVE_CARD,
    SELECT_CARD,
    SWITCH_VIEW,
} from './actionTypes';
import axios from 'axios';

export const fetchCards = () => {
    return (dispatch) =>
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then((response) => {
                dispatch({
                    type: FETCH_DATA,
                    cards: response.data.slice(0, 15).map((card) => {
                        return {
                            id: card.Number,
                            name: card.Name,
                            description: card.About,
                            selected: false,
                        };
                    }),
                });
            });
};

export const updateCardHandler = (cardId, newCaption, newDescription) => ({
    type: UPDATE_CARD,
    cardId,
    newCaption,
    newDescription
})

export const create = () => ({
    type: ADD_CARD,
});

export const remove = () => ({
    type: REMOVE_CARD,
});

export const select = id => ({
    type: SELECT_CARD,
    id,
});

export const switchView = () => ({
    type: SWITCH_VIEW,
});
