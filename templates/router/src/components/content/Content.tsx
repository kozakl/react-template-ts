import {Redirect, Route,
        Switch} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Page1} from '../../pages/page1';
import {Page2} from '../../pages/page2';
import React from 'react';

export default function Content()
{
    return (
        <HashRouter>
            <Switch>
                <Redirect from="/" to='/page1' exact/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </Switch>
        </HashRouter>
    );
}
