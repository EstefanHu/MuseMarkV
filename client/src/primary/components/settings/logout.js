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
    <span>
      <button
        onClick={() => setDoLogout(doLogout => !doLogout)}
      >
        {doLogout ? 'No, stay logged in' : 'Logout' }
      </button>
      {doLogout &&
        <button
          onClick={logout}
        >Yes I'm sure!</button>
      }
    </span>
  )
});