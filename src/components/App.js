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

    render() {
        return (
            <div>
                <PageTemplate>
                    <TodoInput />
                    <TodoList />
                </PageTemplate>
            </div>
        )
    }
}

export default App;