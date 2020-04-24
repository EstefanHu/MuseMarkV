import React, { useContext } from 'react';
import { UserContext } from '../../../../context';

import './profile.css';

export const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section className='container'>
      <h1>hello from Profile</h1>
    </section>
  )
}