import React, { useState, useEffect } from 'react';

export const Forgot = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(email);
  });

  return (
    <section>
      <h1>I Forgot my password</h1>
      <form>
        <input
          className='landing__form--input'
          type='text'
          value={ email }
          onChange={e => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <input type='submit' value='Submit' />
      </form>
    </section>
  )
}