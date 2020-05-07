import React, { useState } from 'react';

export const Form = props => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);

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
      })
      .catch(console.error);
  }

  return (
    <form action={handleSubmit}>
      <input
        className='settings__update-input'
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <input
        className='settings__update-input'
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <input
        className='settings__update-input'
        type='email'
        value='email'
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />

      <input type='submit' value='Update' />
    </form>
  )
}