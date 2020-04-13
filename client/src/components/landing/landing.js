import React from 'react';
import { Route } from 'react-router-dom';

import './landing.css';

import { Index } from './components/index/index';
import Privacy from './components/privacy';
import Terms from './components/terms';

export const Landing = () => (
    <main id='landing'>
        <Route exact path='/' component={Index} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/Terms' component={Terms} />
    </main>
)