/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */

import React, {Component} from 'react';
import styles from './TodoInput.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
    let todoInput;
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleInsert();
        }
    };

    const handleInsert = (e) => {
        onInsert();
        todoInput.focus();
    };

    return (
        <div className={cx('todo-input')}>
            <input ref={ref => {todoInput = ref;}} 
                   onChange={onChange} value={value} 
                   onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={handleInsert}>추가</div>
        </div>
    )
};

TodoInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onInsert: PropTypes.func
};

export default TodoInput;