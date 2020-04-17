import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/dashboard/dashboard';
import { Create } from './components/create/create';
import Story from './components/story/story';
import More from './components/more/more';

import Nav from './layout/nav/nav';

import { PitchContext } from '../../context';

export const Primary = () => {
    const [pitch, setPitch] = useState({
                                        "title": "",
                                        "descriptiom": "",
                                        "location": [],
                                    });
    return (
        <PitchContext.Provider value={{ pitch, setPitch }}>
            <Nav />
            <main>
                <Route path='/app/dashboard' component={Dashboard} />
                <Route path='/app/create' component={Create} />
                <Route path='/app/story/:id' component={Story} />
                <Route path='/app/more' component={More} />
            </main>
        </PitchContext.Provider>
    )
}