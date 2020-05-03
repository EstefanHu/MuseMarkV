import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Cookie from 'js-cookie';

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import { Landing } from './components/landing';
import { Primary } from './components/primary';
import { FourOhFour } from './components/fourohfour';
import { LocationContext } from './context';

const geoLocate = (setLng, setLat, times) => {
  navigator.geolocation
    .getCurrentPosition(position => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
      console.log('User located.');
    }, error => {
      if (error.code === 3) {
        if (times === 5) console.log('Locating failed...');
        console.log('Locating...\n');
        geoLocate(setLng, setLat, times + 1);
      } else {
        console.log(error);
      }
    }, { timeout: 2000 });
}

const checkAuth = () => {
  const cookie = Cookie.get('museCookie');
  if (!cookie) return false;
  return true;
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)

export const App = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  useEffect(() => {
    geoLocate(setLng, setLat, 0);
  }, []);

  return (
    <LocationContext.Provider value={{ lng, setLng, lat, setLat }}>
      <Router>
        <Switch>
          <Route exact path='/(|register|login|privacy|terms|forgot)' component={Landing} />
          <AuthRoute exact path='/app/(dashboard|create|community|settings)' component={Primary} />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    </LocationContext.Provider>
  )
}
