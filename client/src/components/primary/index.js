import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Toolbar } from './layout/toolbar';
import { Nav } from './layout/nav';
import { Dashboard } from './components/dashboard';
import { Community } from './components/community';
import { MapContainer } from './components/map';
import { Create } from './components/create';
import { Settings } from './components/settings';

import { StoryContext } from '../../context';

export const Primary = () => {
  const [story, setStory] = useState(null);

  return (
    <StoryContext.Provider value={{ story, setStory }}>
      <Toolbar />
      <Nav />
      <main>
        <Route path='/app/dashboard' component={Dashboard} />
        <Route path='/app/' component={MapContainer} />
        <Route path='/app/create' component={Create} />
        <Route path='/app/community' component={Community} />
        <Route path='/app/settings' component={Settings} />
      </main>
    </StoryContext.Provider>
  )
}