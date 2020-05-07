import React, { useState } from 'react';

import { Delete } from './delete';

export const Profile = (props) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/user/updated', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) alert(res.error);
        // TODO: Update state to reflect update
      })
      .catch(console.error);

    setIsUpdating(isUpdating => !isUpdating);
  }

  return isUpdating ? (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className='settings__update-input'
          type='text'
          value={props.firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name'
          required
        />
        <input
          className='settings__update-input'
          type='text'
          value={props.lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name'
          required
        />
        <input
          className='settings__update-input'
          type='email'
          value={props.email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email Address'
          required
        />

        <input type='submit' value='Update' />
      </form>
      <Delete />
    </>
  ) : (
      <section
        className='settings__profile'
      >
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>{props.email}</h2>
        <button
          onClick={() => setIsUpdating(isUpdating => !isUpdating)}
        >Update</button>
      </section>
    )
}