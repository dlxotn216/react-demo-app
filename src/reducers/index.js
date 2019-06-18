/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */

import {combineReducers} from 'redux';
import number from './number';
import color from './color';

//Reducer가 ContainerComponent에 새로운 상태를 전달 함
//ContainerComponent의 mapStateToProps에서 이를 props로 변환하고
//connect를 통해  component에 바인딩 됨
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;