import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

import { Landing } from './components/landing/landing';
import { Primary } from './components/primary/primary';
import { FourOhFour } from './components/fourohfour';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/(|register|login|privacy|terms|forgot)' component={Landing} />
      <Route exact path='/app/*' component={Primary} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);