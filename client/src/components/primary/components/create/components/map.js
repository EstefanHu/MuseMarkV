import React from 'react';

import '../create.css';
import { Actions } from './actions';

export const Map = props => {
  const selectAction = action => {
    console.log('selected the ' + action + ' action');
  }
  
  return (
    <Actions triggerAction={ selectAction } />
  )
}