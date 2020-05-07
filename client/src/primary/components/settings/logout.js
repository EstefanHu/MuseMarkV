import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router-dom';

export const Logout = withRouter(props => {
  const [doLogout, setDoLogout] = useState(false);

  const logout = () => {
    fetch('http://localhost:4000/user/logout', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        if (res.Message === 'User logged out.') {
          Cookie.remove('museCookie');
          props.history.push('/login');
        }
      })
      .catch(console.error);
  }

  return (
    <span
      className='settings__logout'
    >
      <button
        onClick={() => setDoLogout(doLogout => !doLogout)}
        className='button'
      >
        {doLogout ? (
          <p>No, stay logged in</p>
        ) : (
            <p>Logout</p>
          )}
      </button>
      {doLogout &&
        <button
          onClick={logout}
        >Yes I'm sure!</button>
      }
    </span>
  )
});