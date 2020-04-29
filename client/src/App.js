import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cookie from 'js-cookie';

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import { Landing } from './components/landing';
import { Primary } from './components/primary';
import { FourOhFour } from './components/fourohfour';

import { UserContext } from './context';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/cookie', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path='/(|register|login|privacy|terms|forgot)' component={Landing} />
          <Route exact path='/app/*' component={Primary} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}