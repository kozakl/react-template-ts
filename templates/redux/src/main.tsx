import './main.pcss';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Content from './containers/Content';
import reducers from './reducers';

const store = createStore(reducers);
store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Content/>
    </Provider>,
    document.getElementById('main-root')
);
