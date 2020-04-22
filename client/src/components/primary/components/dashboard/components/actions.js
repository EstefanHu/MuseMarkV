import React from 'react';
import { Link } from 'react-router-dom';

export const Actions = () => {
  return (
    <span className='dashboard__actions'>
      <Link to='/app/create'>
        <button>Create Story</button>
      </Link>
    </span>
  )
}