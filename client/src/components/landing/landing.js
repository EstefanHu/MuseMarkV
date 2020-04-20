import React from 'react';
import { Route, Link } from 'react-router-dom';


import './landing.css';

import { Index } from './components';
import Register from './components/register';
import { Privacy } from './components/privacy';
import { Terms } from './components/terms';

export const Landing = () => (
    <main id='landing__body'>
        <Route exact path='/' component={Index} />
        <Route path='/register' component={Register} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/terms' component={Terms} />
    </main>
)