import React, { useState, useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';

import { Toolbar } from './layout/toolbar.js';
import { Nav } from './layout/nav.js';
import { Dashboard } from './components/dashboard';
import { Community } from './components/community';
import { Create } from './components/create';
import { Settings } from './components/settings';
import { Map } from './components/map';

import { StoryContext, LocationContext } from '../../context';
import Loading from './layout/loading';

export const Primary = () => {
  const { lng, lat } = useContext(LocationContext);
  const [api, setApi] = useState('');
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => setApi(res))
      .catch(console.error)
  })

  return (
    <StoryContext.Provider value={{ story, setStory }}>
      <Toolbar />
      <Nav />
      <main>
        <Route path='/app/dashboard' component={Dashboard} />
        <Route path='/app/create' component={Create} />
        <Route path='/app/community' component={Community} />
        <Route path='/app/settings' component={Settings} />
      </main>
      {api && lng && lat ? (
        <Map
          apikey={api}
          lng={lng}
          lat={lat}
        />
      ) : (
          <Loading />
        )
      }
    </StoryContext.Provider>
  )
}