import React from 'react';
import { Route, Link } from 'react-router-dom';
import Cookie from 'js-cookie';

import './landing.css';

import { Index } from './components';
import Register from './components/register';
import Login from './components/login';
import { Privacy } from './components/privacy';
import { Terms } from './components/terms';
import { Forgot } from './components/forgot';


export const Landing = () => {
  return (
    <>
      <nav id='landing__nav' className='topNav'>
        <Link to='/' className='logo'>:Muse</Link>
        <span>
          {Cookie.get('museCookie') ? (
            <Link to='/app/dashboard'>
              <button id='login'>Log in</button>
            </Link>
          ) : (
            <>
            <Link to='/login'>
              <button id='login'>Log in</button>
            </Link>
            <Link to='/register'>
              <button id='register'>Sign up</button>
            </Link>
            </>
          )}
        </span>
      </nav>
      <main id='landing__body'>
        <Route exact path='/' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/terms' component={Terms} />
        <Route path='/forgot' component={Forgot} />
      </main>
    </>
  )
}