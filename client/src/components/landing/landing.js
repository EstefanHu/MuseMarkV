import React, { Component } from 'react';

import './landing.css';
import Signup from './signup';

class Landing extends Component {
  render() {
    return (
      <main id='landing'>
        <Signup />
      </main>
    )
  }
}

export default Landing;