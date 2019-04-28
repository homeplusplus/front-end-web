import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import InputDataPage from './views/InputDataPage';

const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/input' component={InputDataPage}/>
        </Switch>
    </main>
)

export default RouteHandler;