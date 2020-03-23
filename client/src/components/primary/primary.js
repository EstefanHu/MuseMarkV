import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './components/dashboard/dashboard';
import Create from './components/create/create';
import Story from './components/story/story';
import More from './components/more/more';

import Nav from './layout/nav/nav';

const Primary = () => (
    <>
        <Nav />
        <main>
            <Route path='/app/dashboard' component={Dashboard} />
            <Route path='/app/create' component={Create} />
            <Route path='/app/story/:id' component={Story} />
            <Route path='/app/more' component={More} />
        </main>
    </>
)

export default Primary;