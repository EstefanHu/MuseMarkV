import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Register = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const modal = document.getElementById('registerModal');
    const modalToggle = e => {
      if (e.target === modal) {
        props.toggleRegister();
      }
    }
    modal.addEventListener('click', modalToggle);

    return (() => {
      modal.removeEventListener('click', modalToggle);
    });
  });

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
    <div className='modal' id='registerModal'>
      <section id='signup' className='modal-content'>
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
    </div>
  )
}

export default withRouter(Register);