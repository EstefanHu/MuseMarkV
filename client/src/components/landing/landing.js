import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';


import './landing.css';

import { Index } from './components';
import Register from './components/register';
import { Privacy } from './components/privacy';
import { Terms } from './components/terms';

export const Landing = () => {
    const [navigation, setNavigation] = useState([
        {
            'link': '/',
            'name': 'Project:Muse'
        },
    ]);

    return (
        <>
            <nav id='landing__nav'>
                <ul>
                    {navigation.map(item => (
                        <li key={item.link}>
                            <Link to=''>{ item.name }</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main id='landing__body'>
                <Route exact path='/' component={Index} />
                <Route path='/register' component={Register} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/terms' component={Terms} />
            </main>
        </>
    )
}