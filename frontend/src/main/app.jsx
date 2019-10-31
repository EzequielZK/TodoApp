import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react';
import Menu from '../template/menu';
import Routes from './routes';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

export default props => (
    <div className='container'>
        <Router>
            <Menu />
            <Routes />
        </Router>
    </div>
)