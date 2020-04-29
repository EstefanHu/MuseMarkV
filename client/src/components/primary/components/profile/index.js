import React, { useEffect, useContext } from 'react';
import { UserContext } from '../../../../context';

import './profile.css';

export const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/user/profile', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(console.error);
  })

  return (
    <section className='container'>
      <h1>hello from Profile</h1>
    </section>
  )
}