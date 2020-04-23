import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from './components/dashboard';
import { Abstract } from './components/abstract';
import { Statistics } from './components/statistics';
import { Create } from './components/create';
import More from './components/more';

import Nav from './layout/nav/nav';

import { PitchContext } from '../../context';

export const Primary = () => {
    const [pitch, setPitch] = useState({
                                        "title": "",
                                        "description": "",
                                    });
    return (
        <PitchContext.Provider value={{ pitch, setPitch }}>
            <Nav />
            <main>
                <Route path='/app/dashboard' component={Dashboard} />
                <Route path='/app/create' component={Create} />
                <Route path='/app/abstract/:id' component={Abstract} />
                <Route path='/app/statistics/:id' component={Statistics} />
                <Route path='/app/more' component={More} />
            </main>
        </PitchContext.Provider>
    )
}