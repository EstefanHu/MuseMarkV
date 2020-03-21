import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboardContainer';
import Map from './components/create/create';
import More from './components/more/more';
import Terms from './components/terms/terms';
import Privacy from './components/privacy/privacy';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/landing' exact>
          <Landing />
        </Route>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
        <Route path='/create' exact>
          <Map />
        </Route>
        <Route path='/more' exact>
          <More />
        </Route>
        <Route path='/terms' exact>
          <Terms />
        </Route>
        <Route path='/privacy' exact>
          <Privacy />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
