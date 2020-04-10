import React from 'react';

export const Nav = () => {
  return (
    <nav className='indexNav'>
      <h1>Project: Muse</h1>
      <span className='indexNav__actions'>
        <button id='indexNav__actions--login'>Log in</button>
        <button id='indexNav__actions--signup'>Sign Up</button>
      </span>
    </nav>
  )
}