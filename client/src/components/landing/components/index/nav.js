import React from 'react';

export const Nav = props => {
  return (
    <nav className='landing__nav--nav'>
      <ul>
        <li
          onClick={() => props.callMenu('mission')}
        >Mission</li>
        <li
          onClick={() => props.callMenu('creator')}
        >Creator</li>
        <li
          onClick={() => props.callMenu('connect')}
        >Connect</li>
        <li
          onClick={() => props.callMenu('create')}
        >Create</li>
      </ul>
    </nav>
  )
}