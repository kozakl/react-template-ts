import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from './components/content';
import './Main.pcss';

class Main
{
    constructor()
    {
        ReactDOM.render(
            <Content message={'Clicked!'}/>,
            document.getElementById('main-root')
        );
    }
}

new Main();
