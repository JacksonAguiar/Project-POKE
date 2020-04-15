import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import index from './pages/home';
import Details from './pages/Details';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/logon" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/details/:name" component={Details} />
               
                <Route path="/" component={index} />



            </Switch>


        </BrowserRouter>
    );
}