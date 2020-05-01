import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Toolbar } from './layout/toolbar';
import { Nav } from './layout/nav';
import { Tour } from './components/tour';
import { Dashboard } from './components/dashboard';
import { Abstract } from './components/abstract';
import { Community } from './components/community';
import { Create } from './components/create';
import { Settings } from './components/settings';
import More from './components/more';

import { StoryContext } from '../../context';

export const Primary = () => {
  const [story, setStory] = useState(null);

  return (
    <StoryContext.Provider value={{ story, setStory }}>
      <Toolbar />
      <Nav />
      <main>
        <Route path='/app/tour' component={Tour} />
        <Route path='/app/dashboard' component={Dashboard} />
        <Route path='/app/create' component={Create} />
        <Route path='/app/abstract/:id' component={Abstract} />
        <Route path='/app/community' component={Community} />
        <Route path='/app/settings' component={Settings} />
        <Route path='/app/more' component={More} />
      </main>
    </StoryContext.Provider>
  )
}