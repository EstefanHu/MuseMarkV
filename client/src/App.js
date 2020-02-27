import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Map from './components/create/create';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/landing' exact>
          <Landing />
        </Route>
        <Route path='/dash' exact>
          <Dashboard/>
        </Route>
        <Route path='/' exact>
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
