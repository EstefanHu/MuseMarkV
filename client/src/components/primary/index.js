import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Dashboard } from './components/dashboard';
import { Abstract } from './components/abstract';
import { Create } from './components/create';
import { Profile } from './components/profile';
import More from './components/more';

import Nav from './layout/nav/nav';

import { StoryContext } from '../../context';

export const Primary = () => {
    const [story, setStory] = useState(null);
    return (
        <StoryContext.Provider value={{ story, setStory }}>
            <Nav />
            <main>
                <Route path='/app/dashboard' component={Dashboard} />
                <Route path='/app/create' component={Create} />
                <Route path='/app/abstract/:id' component={Abstract} />
                <Route path='/app/profile' component={Profile} />
                <Route path='/app/more' component={More} />
            </main>
        </StoryContext.Provider>
    )
}