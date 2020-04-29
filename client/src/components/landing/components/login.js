import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/user/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) alert(res.error);
        props.history.push('/app/dashboard');
      })
      .catch(console.error);

    props.history.push('/app/dashboard');
  }

  return (
    <section className='landingForm'>
      <div id='signinSplash'>
        <h1>:Muse</h1>
      </div>
      <div className='form__holder'>
        <h2>Log in to :Muse.</h2>
        <h3>See your communities stories</h3>
        <form onSubmit={handleSubmit}>
          <input
            className='landing__form--input'
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email Address'
            required
          />
          <input
            className='landing__form--input'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <input type='submit' value='Log in' />
        </form>
        <p><Link to='/forgot'>Forgot Password?</Link> - <Link to='/register'>Sign up for :Muse</Link></p>
      </div>
    </section>
  )
}

export default withRouter(Login);