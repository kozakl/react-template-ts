import './main.pcss';
import {Content} from './components/content';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Content message={'Clicked!'}/>,
    document.getElementById('main-root')
);
