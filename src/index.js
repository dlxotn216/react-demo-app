import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

//Redux Providr를 통해 React Component들이 store를 사용할 수 있도록
ReactDOM.render(
    <Provider 
        store={createStore(reducers, window.devToolsExtension && window.devToolsExtension())}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
