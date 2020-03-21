import React, { Component } from 'react';

import './dashboard.css';

import Nav from '../layout/nav/nav';
import Dashboard from './dashboard';

class DashboardContainer extends Component {
  render() {
    return (
      <main id='dashboard__container'>
        <Nav />
        <Dashboard />
      </main>
    )
  }
}

export default DashboardContainer;