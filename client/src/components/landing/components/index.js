import React from 'react';
import {Link} from 'react-router-dom';

export const Index = () => {
  return (
    <>
      <nav id='landing__nav'>
          <Link to='/' className='logo'>:M</Link>
          <span>
              <button id='login'>Log in</button>
              <button id='register'>Sign up</button>
          </span>
      </nav>
      <section id='index'>
        <div>
          <h1>Hello from Index</h1>
        </div>
        <div>

        </div>
      </section>
    </>
  )
}