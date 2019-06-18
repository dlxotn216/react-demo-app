/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */
import * as actionTypes from '../actions/ActionTypes';

const initState = {
    color: 'black'
};

const color = (state=initState, action) => {
    switch (action.type){
        case actionTypes.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
            
        default:
            return state;
    }
};

export default color;