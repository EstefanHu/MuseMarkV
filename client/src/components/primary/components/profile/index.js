import React, { useEffect } from 'react';

import './profile.css';

export const Profile = () => {

  useEffect(() => {
    fetch('http://localhost:4000/user/profile', {
      credentials: 'include'
    })
      .then(res => res.json())
      .catch(console.error);
  })

  return (
    <section className='container'>
      <h1>hello from Profile</h1>
    </section>
  )
}