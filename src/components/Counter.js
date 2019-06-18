/**
 * @author Lee Tae Su
 * @project react-demo-app
 * @version 1.0
 * @since 2019-06-18
 */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(style);

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div className={cx('Counter')}
             onClick={onIncrement}
             onContextMenu={(e) => {
                 e.preventDefault();
                 onDecrement();
             }}
             onDoubleClick={(e) => {e.stopPropagation(); onSetColor();}}
             style={{
                 backgroundColor: color
             }}>
            {number}
        </div>
    )
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('Please inject onIncrement callback'),
    onDecrement: () => console.warn('Please inject onDecrement callback'),
    onSetColor: () => console.warn('Please inject onSetColor callback')
};

export default Counter;