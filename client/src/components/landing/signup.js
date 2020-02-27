import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <h2>Join Muse.</h2>
        <h3>Create an account and engage with</h3>
        <h3>your communities stories</h3>
        <form onSubmit={ handleSubmit }>
          <input
            className='signup__form--input'
            type='text'
            value={ firstName }
            onChange={ e => setFirstName(e.target.value) }
            placeholder='First Name'
          />
          <input
            className='signup__form--input'
            type='text'
            value={ lastName }
            onChange={ e => setLastName(e.target.value) }
            placeholder='Last Name'
          />
          <input
            className='signup__form--input'
            type='email'
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            placeholder='Email Address'
          />
          <input
            className='signup__form--input'
            type='password'
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            placeholder='Password'
          />
          <input
            className='signup__form--input'
            type='password'
            value={ confirmPassword }
            onChange={ e => setConfirmPassword(e.target.value) }
            placeholder='Confirm Password'
          />
          <input type='submit' value='Register' />
        </form>
        <p>Click "Register" above to accept Muse's</p>
        <p><Link to='/terms'>Terms of Service</Link> & <Link to='/privacy'>Privacy Policy.</Link></p>
      </div>
    </section>
  )
}

export default Signup;