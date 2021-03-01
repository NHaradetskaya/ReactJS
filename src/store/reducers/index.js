import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    auth: authReducer,
});

export default rootReducer;
