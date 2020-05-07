import React, { useState, useEffect } from 'react';

import { Profile } from './profile';
import { Update } from './update';
import { Location } from './location';
import { Logout } from './logout';
import { Delete } from './delete';

import './settings.css';

export const Settings = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [doUpdate, setDoUpdate] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/user/profile', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => {
        setFirstName(res.firstName);
        setLastName(res.lastName);
        setEmail(res.email);
      })
      .catch(console.error);
  }, []);

  return (
    <section className='container settings'>
      {!doUpdate ? (
        <Profile
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      ) : (
          <Update />
        )
      }
      <Location />
      <Logout />
      <Delete />
    </section>
  )
}