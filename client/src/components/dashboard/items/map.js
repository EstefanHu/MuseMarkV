import React from 'react';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <Link
      id='dashboard__map'
      to='/app/create'
    >
      <div>
        <h1 id='dashboard__map--header'>Create Your<br/>Interactive Story.</h1>
      </div>
    </Link>
  )
}

export default Map;