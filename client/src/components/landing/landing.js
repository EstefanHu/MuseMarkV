import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './landing.css';

import Index from './components/index';
import Register from './components/register';
import Privacy from './components/privacy';
import Terms from './components/terms';

class Landing extends Component {
    render() {
        return (
            <main id='landing'>
                <Route exact path='/' component={Index} />
                <Route path='/register' component={Register} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/Terms' component={Terms} />
            </main>
        )
    }
}

export default Landing;