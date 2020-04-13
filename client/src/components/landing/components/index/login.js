import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/landing/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(res => res.json())
      .catch(console.error);
    props.history.push('/app/dashboard');
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          value={ email }
          onChange={e => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <input
          type='password'
          value={ password }
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <input type='submit' value='Log in' />
      </form>
    </>
  )
}

export default withRouter(Login);