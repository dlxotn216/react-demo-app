/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});