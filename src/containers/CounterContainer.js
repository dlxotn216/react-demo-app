/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */

import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

export function getRandomColor() {
    const colors = [
        '#495057',
        '#695757',
        '#ae3ec9',
        '#37b24d',
        '#0ca678',
        '#1c7cd6',
        '#74b816',
        '#f03e32',
        '#f59f00',
        '#f76707',
        '#d6335c',
        '#1098ad',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

const mapStateToPrps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

//Reducer로 store를 통해 action creator를 통해 생성한 action을 dispatch
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => dispatch(actions.setColor(getRandomColor())),
});

const CounterContainer = connect(
    mapStateToPrps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;