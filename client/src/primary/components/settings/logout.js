import React from 'react';
import Cookie from 'js-cookie';
import { withRouter } from 'react-router-dom';

export const Logout = withRouter(props => {
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
    <button
      onClick={logout}
    >
      Logout
    </button>
  )
});