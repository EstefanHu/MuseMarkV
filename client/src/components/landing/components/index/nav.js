import React from 'react';

// TODO: acgtivate setBody on enter
export const Nav = props => {
  return (
    <nav className='landing__nav--nav'>
      <ul>
        <li
          onClick={() => props.setBody('mission')}
          tabIndex='0'
        >Mission</li>
        <li
          onClick={() => props.setBody('creator')}
          tabIndex='0'
        >Creator</li>
        <li
          onClick={() => props.setBody('register')}
          tabIndex='0'
          >Join</li>
        <li
          onClick={() => props.setBody('login')}
          tabIndex='0'
          >Log in</li>
      </ul>
    </nav>
  )
}