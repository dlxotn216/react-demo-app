/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */

import * as actionTypes from '../actions/ActionTypes';

const initState = {
    number: 0
};

const number = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case actionTypes.DECREMENT :
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
};

export default number;
