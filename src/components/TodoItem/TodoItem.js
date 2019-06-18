/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

class TodoItem extends Component {
    
    static propTypes = {
        id: PropTypes.number,
        done: PropTypes.bool,
        message: PropTypes.string,
        onToggle: PropTypes.func,
        onRemove: PropTypes.func
    };

    shouldComponentUpdate(nextProps, nextState){
        return this.props.id === nextProps.id;
    }
    
    render() {
        const {done, message, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={(e) => {e.stopPropagation(); onToggle(e);}}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly />
                <div className={cx('text', {done})}>{message}</div>
                <div className={cx('delete')} onClick={(e) => {e.stopPropagation(); onRemove(e);}}>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;