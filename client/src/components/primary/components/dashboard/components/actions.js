import React from 'react';
import { Link } from 'react-router-dom';

export const Actions = () => {
  return (
    <Link to='/app/create'>
      <button>Create Story</button>
    </Link>
  )
}