import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from './containers/Content';
import reducers from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './Main.pcss';

class Main
{
    constructor()
    {
        const store = createStore(reducers);
        store.subscribe(()=> console.log(store.getState()));
        
        ReactDOM.render(
            <Provider store={store}>
                <Content/>
            </Provider>,
            document.getElementById('main-root')
        );
    }
}

new Main();
