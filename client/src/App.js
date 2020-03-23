import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Landing from './components/landing/signup';
import Dashboard from './components/app/dashboard/dashboard';
import Create from './components/app/create/create';
import Story from './components/app/story/story';
import More from './components/app/more/more';

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
        <Route render={() => {
          return (
            <main>
              404
            </main>
        )}}/>
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
      <Route path='/app/story/:id' component={Story} />
      <Route path='/app/more' component={More} />
    </main>
  </>
)

export default App;
