import React from 'react';
import { Route } from 'react-router-dom';

import './landing.css';

import Register from './components/register';
import { Privacy } from './components/privacy';
import { Terms } from './components/terms';

export const Landing = () => (
    <main id='landing'>
        <Route exact path='/' component={Register} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/terms' component={Terms} />
    </main>
)