import React from 'react';

export const Nav = props => {
  return (
    <nav className='landing__nav--nav'>
      <ul>
        <li
          onClick={() => props.setBody('mission')}
        >Mission</li>
        <li
          onClick={() => props.setBody('creator')}
        >Creator</li>
        <li
          onClick={() => props.setBody('register')}
        >Join</li>
        <li
          onClick={() => props.setBody('login')}
        >Log in</li>
      </ul>
    </nav>
  )
}