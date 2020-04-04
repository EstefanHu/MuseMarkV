import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import { Landing } from './components/landing/landing';
import { Primary } from './components/primary/primary';
import { FourOhFour } from './components/fourohfour';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path='/(|register|signin|privacy|terms)' component={Landing} />
      <Route exact path='/app/*' component={Primary} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);