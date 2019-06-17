/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */
import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>리액트 공부하기</TodoItem>
                <TodoItem>컴포넌트 스타일링 해보기</TodoItem>
            </div>
        )
    }
}

export default TodoList;