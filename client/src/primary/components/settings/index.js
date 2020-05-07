import React, { useState, useEffect } from 'react';

import { Logout } from './logout';

import './settings.css';

export const Settings = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [doUpdate, setDoUpdate] = useState(true);

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

  // TODO: Insecure endpoint needs update
  const sendUpdate = () => {
    fetch('http://localhost:4000/user/update', {
      credentials: 'include',
      method: 'POST',
      body: {
        firstName,
        lastName,
        email,
      }
    })
      .then(res => res.json())
      .then(console.log)
      .catch(console.err);
    setDoUpdate(doUpdate => !doUpdate);
  }

  return (
    <section className='container'>
      <h1>Hello from Settings</h1>
      {doUpdate &&
        // TODO: May be suseptable to passive sends from spiders.
        <button
          onClick={sendUpdate}
        >Update</button>
      }
      <Logout />
    </section>
  )
}