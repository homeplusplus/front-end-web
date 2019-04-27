import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';


const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
    </main>
)

export default RouteHandler;