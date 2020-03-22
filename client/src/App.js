import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Create from './components/create/create';
import More from './components/more/more';

import Nav from './components/layout/nav/nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/(|landing)' render={() => {
          return (
            <main id='landing'>
              <Route exact path='/landing' component={Landing} />
            </main>
          )
        }}/>
        <Route exact path='/app/*' component={PrimaryContainer} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  );
}

// TODO: Seperate
const PrimaryContainer = () => (
  <>
    <Nav />
    <main>
      <Route path='/app/dashboard' component={Dashboard} />
      <Route path='/app/create' component={Create} />
      <Route path='/app/more' component={More} />
    </main>
  </>
)

const FourOhFour = () => (
  <main>
    404
  </main>
)

export default App;
