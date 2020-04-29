import React from 'react';
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

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/(|register|login|privacy|terms|forgot)' component={Landing} />
      <AuthRoute exact path='/app/*' component={Primary} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
)
