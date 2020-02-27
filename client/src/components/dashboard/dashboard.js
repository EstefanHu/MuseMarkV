import React, { Component } from 'react';

import './dashboard.css';

import Nav from '../Layout/nav';
import Feed from './feed';

class Dashboard extends Component {
  render() {
    return (
      <>
        <Nav />
        <Feed />
      </>
    )
  }
}

export default Dashboard;