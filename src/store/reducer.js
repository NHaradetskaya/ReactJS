import {
    FETCH_DATA,
    UPDATE_CARD,
    ADD_CARD,
    REMOVE_CARD,
    SELECT_CARD,
    SWITCH_VIEW,
} from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    list: [],
    viewCheck: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: uuidv4(),
                        name: window.prompt('Enter card title'),
                        description: window.prompt('Enter card content'),
                        selected: false,
                    },
                ],
            };

        case REMOVE_CARD:
            return {
                ...state,
                list: state.list.filter((item) => !item.selected),
            };

        case SELECT_CARD:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === action.id
                        ? { ...item, selected: !item.selected }
                        : item,
                ),
            };

        case UPDATE_CARD:
            return {
                ...state,
                list: state.list.map((item) => {
                    return item.id === action.cardId
                        ? {
                              ...item,
                              name: action.newCaption,
                              description: action.newDescription,
                          }
                        : item;
                }),
            };
        case SWITCH_VIEW:
            return {
                ...state,
                viewCheck: !state.viewCheck,
            };

        case FETCH_DATA:
            return { ...state, list: action.cards };
        default:
            return state;
    }
};

export default reducer;
