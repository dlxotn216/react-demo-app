/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.array,
        onToggle: PropTypes.func,
        onRemove: PropTypes.func,
    };

    static defaultProps = {
        todos: []
    };
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {onToggle, onRemove} = this.props;
        
        return (
            <div>
                {
                    this.props.todos.map(todo =>
                        <TodoItem {...todo}
                                  key={todo.id}
                                  onToggle={() => onToggle(todo.id)}
                                  onRemove={() => onRemove(todo.id)}/>)
                }
            </div>
        )
    }
}

export default TodoList;