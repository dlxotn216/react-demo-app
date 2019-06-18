/**
 * @author Lee Tae Su
 * @project todo-list
 * @version 1.0
 * @since 2019-06-17
 */

import React, {Component} from 'react';
import PageTemplate from './PageTemplate/PageTemplate';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    message: '리액트 공부하기',
                    done: true
                }, {
                    id: 2,
                    message: '컴포넌트 스타일링 해보기',
                    done: false
                },
            ],
            todoInputValue: ''
        };
    }

    onChange = (e) => {
        this.setState({
            todoInputValue: e.target.value
        });
    };

    onInsert = (e) => {
        if(!this.state.todoInputValue){
            return;
        }
        
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: this.state.todos.length + 1,
                    message: this.state.todoInputValue,
                    done: false
                }
            ],
            todoInputValue: ''
        })
    };

    onToggle = (id) => {
        let targetIndex = -1;
        const find = this.state.todos.find((todo, idx) => {
            if (todo.id === id) {
                targetIndex = idx;
                return true;
            }
            return false;
        });

        if (!find || targetIndex === -1) {
            return;
        }

        this.setState({
            todos: [
                ...this.state.todos.slice(0, targetIndex),
                {
                    ...find,
                    done: !find.done
                },
                ...this.state.todos.slice(targetIndex + 1, this.state.todos.length)
            ]
        });
    };

    onRemove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    render() {
        return (
            <div>
                <PageTemplate>
                    <TodoInput value={this.state.todoInputValue}
                               onChange={(e) => this.onChange(e)}
                               onInsert={(e) => this.onInsert(e)}/>
                    <TodoList todos={this.state.todos}
                              onToggle={(id) => this.onToggle(id)}
                              onRemove={(id) => this.onRemove(id)}/>
                </PageTemplate>
            </div>
        )
    }
}

export default App;