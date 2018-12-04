import { combineReducers } from 'redux';

import {
    SET_TITLE,
} from '../actions/actions';
import initialState from '../stores/stores';

// reducer for title
const title = (state = initialState.title, action) => {
    switch (action.type) {
        case SET_TITLE:
            return (state = action.value);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    title
});

export default rootReducer;
