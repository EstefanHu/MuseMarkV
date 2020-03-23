import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Landing from './components/landing/landing';
import Primary from './components/primary/primary';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/(|register|signin|privacy|terms)' component={Landing} />
        <Route exact path='/app/*' component={Primary} />
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

export default App;