import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // TODO: INSTALL FORM CHECK and FORM SUBMITION
  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
      })
      .then(res => res.json())
      .catch(console.error);

    props.history.push('/app/dashboard');
  }

  return (
    <>
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
      <p>Click "Register" above to accept Muse's</p>
      <p><Link to='/terms'>Terms of Service</Link> & <Link to='/privacy'>Privacy Policy.</Link></p>
    </>
  )
}

export default withRouter(Register);