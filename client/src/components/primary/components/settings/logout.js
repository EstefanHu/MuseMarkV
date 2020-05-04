import React from 'react';
import { Cookie } from 'js-cookie';

export const Logout = props => {
  const logout = () => {
    fetch('http://localhost:4000/user/logout', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        Cookie.remove('museCookie');
        props.history.push('/login');
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
}