import React from 'react';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <Link
      id='dashboard__map'
      to='/app/create'
      className='dashboard__item'
    >
      <article>
        <h1>Create Your<br/>Interactive Story.</h1>
      </article>
    </Link>
  )
}

export default Map;