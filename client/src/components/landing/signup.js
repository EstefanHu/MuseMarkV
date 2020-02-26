import React, { useState } from 'react';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName + ' ' + lastName);
  }

  return (
    <section id='signup'>
      <div id='splash'>
        <h1>Muse</h1>
      </div>
      <div id='form__holder'>
        <form onSubmit={ handleSubmit }>
          <input
            type='text'
            value={ firstName }
            onChange={ e => setFirstName(e.target.value) }
            placeholder='First Name'
          />
          <input
            type='text'
            value={ lastName }
            onChange={ e => setLastName(e.target.value) }
            placeholder='Last Name'
          />
          <input
            type='email'
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            placeholder='Email Address'
          />
          <input
            type='password'
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            placeholder='Password'
          />
          <input
            type='password'
            value={ confirmPassword }
            onChange={ e => setConfirmPassword(e.target.value) }
            placeholder='Confirm Password'
          />
          <input type='submit' value='Register' />
        </form>
      </div>
    </section>
  )
}

export default Signup;