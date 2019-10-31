import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Todo from '../todo/todo';
import About from '../about/about';

export default props => (

    <Switch>
        <Route path="/" />
        <Route path='/todos'>
            <Todo />
        </Route>

        <Route path='/about'>
            <About />
        </Route>
        <Redirect from='*' to='/todos' />
    </Switch>


)